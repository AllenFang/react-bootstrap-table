"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var classSet = _interopRequire(require("classnames"));

var Const = _interopRequire(require("./Const"));

var TableHeader = _interopRequire(require("./TableHeader"));

var TableBody = _interopRequire(require("./TableBody"));

var PaginationList = _interopRequire(require("./pagination/PaginationList"));

var ToolBar = _interopRequire(require("./toolbar/ToolBar"));

var TableFilter = _interopRequire(require("./TableFilter"));

var TableDataStore = _interopRequire(require("./store/TableDataStore"));

var BootstrapTable = (function (_React$Component) {
  function BootstrapTable(props) {
    _classCallCheck(this, BootstrapTable);

    _get(Object.getPrototypeOf(BootstrapTable.prototype), "constructor", this).call(this, props);

    if (this.props.cellEdit) {
      this.props.cellEdit.__onCompleteEdit__ = this.handleEditCell.bind(this);
      if (this.props.cellEdit.mode !== Const.CELL_EDIT_NONE) this.props.selectRow.clickToSelect = false;
    }
    this.sortTable = false;
    this.order = Const.SORT_DESC;
    this.sortField = null;
    var keyField = null;
    this.props.children.forEach(function (column) {
      if (column.props.dataSort) this.sortTable = true;
      if (column.props.isKey) {
        if (keyField != null) throw "Error. Multiple key column be detected in TableHeaderColumn.";
        keyField = column.props.dataField;
      }
    }, this);
    if (keyField == null) throw "Error. No any key column defined in TableHeaderColumn. Use 'isKey={true}' to specify an unique column after version 0.5.4.";

    this.store = this.props.store ? this.props.store : new TableDataStore(this.props.data, this.props.pagination, keyField);
    this.state = {
      data: this.getTableData()
    };
    this.store.on("change", (function () {
      this.setState({
        data: this.getTableData()
      });
    }).bind(this));
  }

  _inherits(BootstrapTable, _React$Component);

  _createClass(BootstrapTable, {
    getTableData: {
      value: function getTableData() {
        var result = [];
        if (this.props.pagination) {
          result = this.store.page(1, Const.SIZE_PER_PAGE).get();
        } else {
          result = this.store.get();
        }
        return result;
      }
    },
    componentDidMount: {

      // componentWillMount(){
      //   // if(this.props.pagination){
      //   //   // this.handlePaginationData(1, Const.SIZE_PER_PAGE);
      //   //   this.store.page(1, Const.SIZE_PER_PAGE).get();
      //   // } else{
      //   //   this.store.get();
      //   // }
      // }

      value: function componentDidMount() {
        this._adjustHeaderWidth();
      }
    },
    componentDidUpdate: {
      value: function componentDidUpdate() {
        this._adjustHeaderWidth();
      }
    },
    render: {
      value: function render() {
        var tableClass = classSet("react-bs-table");
        var style = {
          height: this.props.height
        };
        var columns = this.props.children.map(function (column, i) {
          return {
            name: column.props.dataField,
            align: column.props.dataAlign,
            sort: column.props.dataSort,
            format: column.props.dataFormat,
            editable: column.props.editable,
            index: i
          };
        }, this);

        var pagination = this.renderPagination();
        var toolBar = this.renderToolBar();
        var tableFilter = this.renderTableFilter(columns);
        return React.createElement(
          "div",
          { className: "react-bs-container" },
          toolBar,
          React.createElement(
            "div",
            { ref: "table", style: style, className: tableClass },
            React.createElement(
              TableHeader,
              { rowSelectType: this.props.selectRow.mode,
                onSort: this.handleSort.bind(this),
                onSelectAllRow: this.handleSelectAllRow.bind(this) },
              this.props.children
            ),
            React.createElement(TableBody, { ref: "body", data: this.state.data, columns: columns,
              striped: this.props.striped,
              hover: this.props.hover,
              keyField: this.store.getKeyField(),
              condensed: this.props.condensed,
              selectRow: this.props.selectRow,
              cellEdit: this.props.cellEdit }),
            tableFilter
          ),
          pagination
        );
      }
    },
    handleSort: {
      value: function handleSort(order, sortField) {
        var result = this.store.sort(order, sortField).get();
        this.setState({
          data: result
        });
      }
    },
    handlePaginationData: {
      value: function handlePaginationData(page, sizePerPage) {
        var result = this.store.page(page, sizePerPage).get();
        this.setState({
          data: result
        });
      }
    },
    handleSelectAllRow: {
      value: function handleSelectAllRow(e) {
        var isSelected = e.currentTarget.checked;
        if (isSelected) {
          var selectedKey = this.store.getAllRowkey();
          this.props.selectRow.__onSelectAll__(selectedKey);
        } else {
          this.props.selectRow.__onSelectAll__([]);
        }
      }
    },
    handleEditCell: {
      value: function handleEditCell(newVal, rowIndex, colIndex) {
        var fieldName = undefined;
        this.props.children.forEach(function (column, i) {
          if (i == colIndex) {
            fieldName = column.props.dataField;
            return false;
          }
        });

        var result = this.store.edit(newVal, rowIndex, fieldName).get();
        this.setState({
          data: result
        });

        if (this.props.cellEdit.afterSaveCell) {
          this.props.cellEdit.afterSaveCell(this.state.data[rowIndex], fieldName, newVal);
        }
      }
    },
    handleAddRow: {
      value: function handleAddRow(newObj) {
        var msg = null,
            result = undefined;
        try {
          this.store.add(newObj);
        } catch (e) {
          return e;
        }

        if (this.props.pagination) {
          //if pagination is enabled and insert row be trigger, change to last page
          var sizePerPage = this.refs.pagination.getSizePerPage();
          var currLastPage = Math.ceil(this.store.getDataNum() / sizePerPage);
          result = this.store.page(currLastPage, sizePerPage).get();
          this.setState({
            data: result
          });
          this.refs.pagination.changePage(currLastPage);
        } else {
          result = this.store.get();
          this.setState({
            data: result
          });
        }
      }
    },
    handleDropRow: {
      value: function handleDropRow() {
        var result = undefined;
        this.store.remove(this.refs.body.getSelectedRowKeys());

        if (this.props.pagination) {
          var sizePerPage = this.refs.pagination.getSizePerPage();
          var currLastPage = Math.ceil(this.store.getDataNum() / sizePerPage);
          var currentPage = this.refs.pagination.getCurrentPage();
          if (currentPage > currLastPage) currentPage = currLastPage;
          result = this.store.page(currentPage, sizePerPage).get();
          this.setState({
            data: result
          });
          this.refs.pagination.changePage(currentPage);
        } else {
          result = this.store.get();
          this.setState({
            data: result
          });
        }
      }
    },
    handleFilterData: {
      value: function handleFilterData(filterObj) {
        this.store.filter(filterObj);
        var result = undefined;
        if (this.props.pagination) {
          var sizePerPage = this.refs.pagination.getSizePerPage();
          result = this.store.page(1, sizePerPage).get();
          this.refs.pagination.changePage(1);
        } else {
          result = this.store.get();
        }
        this.setState({
          data: result
        });
      }
    },
    _adjustHeaderWidth: {
      value: function _adjustHeaderWidth() {
        this.refs.table.getDOMNode().childNodes[0].childNodes[0].style.width = this.refs.table.getDOMNode().childNodes[1].childNodes[0].offsetWidth - 1 + "px";
      }
    },
    renderPagination: {
      value: function renderPagination() {
        if (this.props.pagination) {
          return React.createElement(
            "div",
            null,
            React.createElement(PaginationList, { ref: "pagination",
              changePage: this.handlePaginationData.bind(this),
              sizePerPage: Const.SIZE_PER_PAGE,
              dataSize: this.store.getDataNum() })
          );
        } else {
          return null;
        }
      }
    },
    renderToolBar: {
      value: function renderToolBar() {
        var columns = this.props.children.map(function (column) {
          return {
            name: column.props.children,
            field: column.props.dataField
          };
        });
        if (this.props.insertRow || this.props.deleteRow || this.props.search) {
          return React.createElement(
            "div",
            { className: "tool-bar" },
            React.createElement(ToolBar, { enableInsert: this.props.insertRow,
              enableDelete: this.props.deleteRow,
              enableSearch: this.props.search,
              columns: columns,
              onAddRow: this.handleAddRow.bind(this),
              onDropRow: this.handleDropRow.bind(this) })
          );
        } else {
          return null;
        }
      }
    },
    renderTableFilter: {
      value: function renderTableFilter(columns) {
        if (this.props.columnFilter) {
          return React.createElement(TableFilter, { columns: columns,
            rowSelectType: this.props.selectRow.mode,
            onFilter: this.handleFilterData.bind(this) });
        } else {
          return null;
        }
      }
    }
  });

  return BootstrapTable;
})(React.Component);

BootstrapTable.propTypes = {
  height: React.PropTypes.string,
  data: React.PropTypes.array,
  striped: React.PropTypes.bool,
  hover: React.PropTypes.bool,
  condensed: React.PropTypes.bool,
  pagination: React.PropTypes.bool,
  selectRow: React.PropTypes.shape({
    mode: React.PropTypes.string,
    bgColor: React.PropTypes.string,
    onSelect: React.PropTypes.func,
    onSelectAll: React.PropTypes.func,
    clickToSelect: React.PropTypes.bool
  }),
  cellEdit: React.PropTypes.shape({
    mode: React.PropTypes.string,
    blurToSave: React.PropTypes.bool,
    afterSaveCell: React.PropTypes.func
  }),
  insertRow: React.PropTypes.bool,
  deleteRow: React.PropTypes.bool,
  search: React.PropTypes.bool,
  columnFilter: React.PropTypes.bool
};
BootstrapTable.defaultProps = {
  height: "100%",
  striped: false,
  hover: false,
  condensed: false,
  pagination: false,
  selectRow: {
    mode: Const.ROW_SELECT_NONE,
    bgColor: Const.ROW_SELECT_BG_COLOR,
    onSelect: undefined,
    onSelectAll: undefined,
    clickToSelect: false
  },
  cellEdit: {
    mode: Const.CELL_EDIT_NONE,
    blurToSave: false,
    afterSaveCell: undefined
  },
  insertRow: false,
  deleteRow: false,
  search: false,
  columnFilter: false
};

module.exports = BootstrapTable;