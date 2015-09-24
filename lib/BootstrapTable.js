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

var TableDataStore = require("./store/TableDataStore").TableDataStore;

var BootstrapTable = (function (_React$Component) {
  function BootstrapTable(props) {
    var _this = this;

    _classCallCheck(this, BootstrapTable);

    _get(Object.getPrototypeOf(BootstrapTable.prototype), "constructor", this).call(this, props);

    this._attachCellEditFunc();
    var keyField = null;
    var customSortFuncMap = {};

    React.Children.forEach(this.props.children, function (column) {
      if (column.props.isKey) {
        if (keyField != null) throw "Error. Multiple key column be detected in TableHeaderColumn.";
        keyField = column.props.dataField;
      }
      if (column.props.sortFunc) {
        customSortFuncMap[column.props.dataField] = column.props.sortFunc;
      }
    }, this);

    if (keyField == null) throw "Error. No any key column defined in TableHeaderColumn. Use 'isKey={true}' to specify an unique column after version 0.5.4.";

    if (!Array.isArray(this.props.data)) {
      this.store = new TableDataStore(this.props.data.getData());
      this.props.data.clear();
      this.props.data.on("change", (function (data) {
        _this.store.setData(data);
        _this.setState({
          data: _this.getTableData()
        });
      }).bind(this));
    } else {
      this.store = new TableDataStore(this.props.data);
    }
    this.store.setProps(this.props.pagination, keyField, customSortFuncMap);

    if (this.props.selectRow && this.props.selectRow.selected) {
      this.store.setSelectedRowKey(this.props.selectRow.selected);
    }

    this.state = {
      data: this.getTableData(),
      selectedRowKeys: this.store.getSelectedRowKeys()
    };
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
    componentWillReceiveProps: {
      value: function componentWillReceiveProps(nextProps) {
        if (Array.isArray(nextProps.data)) {
          this.store.setData(nextProps.data);
          this.setState({
            data: this.getTableData()
          });
        }
        if (nextProps.selectRow && nextProps.selectRow.selected) {
          //set default select rows to store.
          this.store.setSelectedRowKey(nextProps.selectRow.selected);
          this.setState({
            selectedRowKeys: nextProps.selectRow.selected
          });
        }
      }
    },
    componentDidUpdate: {
      value: function componentDidUpdate() {
        this._attachCellEditFunc();
        if (this.props.options.afterTableComplete) this.props.options.afterTableComplete();
      }
    },
    _attachCellEditFunc: {
      value: function _attachCellEditFunc() {
        if (this.props.cellEdit) {
          this.props.cellEdit.__onCompleteEdit__ = this.handleEditCell.bind(this);
          if (this.props.cellEdit.mode !== Const.CELL_EDIT_NONE) this.props.selectRow.clickToSelect = false;
        }
      }
    },
    render: {
      value: function render() {
        var tableClass = classSet("react-bs-table");
        var childrens = this.props.children;
        var style = {
          height: this.props.height
        };
        if (!Array.isArray(this.props.children)) {
          childrens = [this.props.children];
        }
        var columns = childrens.map(function (column, i) {
          return {
            name: column.props.dataField,
            align: column.props.dataAlign,
            sort: column.props.dataSort,
            format: column.props.dataFormat,
            editable: column.props.editable,
            hidden: column.props.hidden,
            className: column.props.className,
            width: column.props.width,
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
                hideSelectColumn: this.props.selectRow.hideSelectColumn,
                sortName: this.props.options.sortName,
                sortOrder: this.props.options.sortOrder,
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
              cellEdit: this.props.cellEdit,
              selectedRowKeys: this.state.selectedRowKeys,
              onSelectRow: this.handleSelectRow.bind(this) }),
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
        var selectedRowKeys = [];
        if (isSelected) {
          selectedRowKeys = this.store.getAllRowkey();
        }

        this.store.setSelectedRowKey(selectedRowKeys);
        this.setState({
          selectedRowKeys: selectedRowKeys
        });
        if (this.props.selectRow.onSelectAll) {
          this.props.selectRow.onSelectAll(isSelected);
        }
      }
    },
    handleSelectRow: {
      value: function handleSelectRow(row, isSelected) {
        var currSelected = this.store.getSelectedRowKeys();
        var rowKey = row[this.store.getKeyField()];
        if (this.props.selectRow.mode === Const.ROW_SELECT_SINGLE) {
          currSelected = isSelected ? [rowKey] : [];
        } else {
          if (isSelected) {
            currSelected.push(rowKey);
          } else {
            currSelected = currSelected.filter(function (key) {
              return rowKey !== key;
            });
          }
        }

        this.store.setSelectedRowKey(currSelected);
        this.setState({
          selectedRowKeys: currSelected
        });

        if (this.props.selectRow.onSelect) {
          this.props.selectRow.onSelect(row, isSelected);
        }
      }
    },
    handleEditCell: {
      value: function handleEditCell(newVal, rowIndex, colIndex) {
        var fieldName = undefined;
        React.Children.forEach(this.props.children, function (column, i) {
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

        if (this.props.options.afterInsertRow) {
          this.props.options.afterInsertRow(newObj);
        }
      }
    },
    handleDropRow: {
      value: function handleDropRow() {
        var result = undefined;
        var dropRowKeys = this.store.getSelectedRowKeys();

        this.store.remove(dropRowKeys); //remove selected Row
        this.store.setSelectedRowKey([]); //clear selected row key

        if (this.props.pagination) {
          var sizePerPage = this.refs.pagination.getSizePerPage();
          var currLastPage = Math.ceil(this.store.getDataNum() / sizePerPage);
          var currentPage = this.refs.pagination.getCurrentPage();
          if (currentPage > currLastPage) currentPage = currLastPage;
          result = this.store.page(currentPage, sizePerPage).get();
          this.setState({
            data: result,
            selectedRowKeys: this.store.getSelectedRowKeys()
          });
          this.refs.pagination.changePage(currentPage);
        } else {
          result = this.store.get();
          this.setState({
            data: result,
            selectedRowKeys: this.store.getSelectedRowKeys()
          });
        }
        if (this.props.options.afterDeleteRow) {
          this.props.options.afterDeleteRow(dropRowKeys);
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
    handleSearch: {
      value: function handleSearch(searchText) {
        this.store.search(searchText);
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
        var columns = undefined;
        if (Array.isArray(this.props.children)) {
          columns = this.props.children.map(function (column) {
            return {
              name: column.props.children,
              field: column.props.dataField
            };
          });
        } else {
          columns = [{
            name: this.props.children.props.children,
            field: this.props.children.props.dataField
          }];
        }
        if (this.props.insertRow || this.props.deleteRow || this.props.search) {
          return React.createElement(
            "div",
            { className: "tool-bar" },
            React.createElement(ToolBar, { enableInsert: this.props.insertRow,
              enableDelete: this.props.deleteRow,
              enableSearch: this.props.search,
              columns: columns,
              searchPlaceholder: this.props.searchPlaceholder,
              onAddRow: this.handleAddRow.bind(this),
              onDropRow: this.handleDropRow.bind(this),
              onSearch: this.handleSearch.bind(this) })
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
  searchPlaceholder: React.PropTypes.string,
  selectRow: React.PropTypes.shape({
    mode: React.PropTypes.string,
    bgColor: React.PropTypes.string,
    selected: React.PropTypes.array,
    onSelect: React.PropTypes.func,
    onSelectAll: React.PropTypes.func,
    clickToSelect: React.PropTypes.bool,
    hideSelectColumn: React.PropTypes.bool,
    clickToSelectAndEditCell: React.PropTypes.bool
  }),
  cellEdit: React.PropTypes.shape({
    mode: React.PropTypes.string,
    blurToSave: React.PropTypes.bool,
    afterSaveCell: React.PropTypes.func
  }),
  insertRow: React.PropTypes.bool,
  deleteRow: React.PropTypes.bool,
  search: React.PropTypes.bool,
  columnFilter: React.PropTypes.bool,
  options: React.PropTypes.shape({
    sortName: React.PropTypes.string,
    sortOrder: React.PropTypes.string,
    afterTableComplete: React.PropTypes.func,
    afterDeleteRow: React.PropTypes.func,
    afterInsertRow: React.PropTypes.func
  })
};
BootstrapTable.defaultProps = {
  height: "100%",
  striped: false,
  hover: false,
  condensed: false,
  pagination: false,
  searchPlaceholder: undefined,
  selectRow: {
    mode: Const.ROW_SELECT_NONE,
    bgColor: Const.ROW_SELECT_BG_COLOR,
    selected: [],
    onSelect: undefined,
    onSelectAll: undefined,
    clickToSelect: false,
    hideSelectColumn: false,
    clickToSelectAndEditCell: false
  },
  cellEdit: {
    mode: Const.CELL_EDIT_NONE,
    blurToSave: false,
    afterTableComplete: undefined
  },
  insertRow: false,
  deleteRow: false,
  search: false,
  columnFilter: false,
  options: {
    sortName: null,
    sortOrder: Const.SORT_DESC
  }
};

module.exports = BootstrapTable;