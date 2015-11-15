'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Const = require('./Const');

var _Const2 = _interopRequireDefault(_Const);

var _TableHeader = require('./TableHeader');

var _TableHeader2 = _interopRequireDefault(_TableHeader);

var _TableBody = require('./TableBody');

var _TableBody2 = _interopRequireDefault(_TableBody);

var _paginationPaginationList = require('./pagination/PaginationList');

var _paginationPaginationList2 = _interopRequireDefault(_paginationPaginationList);

var _toolbarToolBar = require('./toolbar/ToolBar');

var _toolbarToolBar2 = _interopRequireDefault(_toolbarToolBar);

var _TableFilter = require('./TableFilter');

var _TableFilter2 = _interopRequireDefault(_TableFilter);

var _storeTableDataStore = require('./store/TableDataStore');

var _csv_export_util = require('./csv_export_util');

var _csv_export_util2 = _interopRequireDefault(_csv_export_util);

var BootstrapTable = (function (_React$Component) {
  _inherits(BootstrapTable, _React$Component);

  function BootstrapTable(props) {
    var _this = this;

    _classCallCheck(this, BootstrapTable);

    _get(Object.getPrototypeOf(BootstrapTable.prototype), 'constructor', this).call(this, props);

    this._attachCellEditFunc();
    var keyField = props.keyField;

    var customSortFuncMap = {};

    if (!(typeof keyField === 'string' && keyField.length)) {
      _react2['default'].Children.forEach(this.props.children, function (column) {
        if (column.props.isKey) {
          if (keyField != null) {
            throw "Error. Multiple key column be detected in TableHeaderColumn.";
          }
          keyField = column.props.dataField;
        }
      }, this);
    }

    _react2['default'].Children.forEach(this.props.children, function (column) {
      if (column.props.sortFunc) {
        customSortFuncMap[column.props.dataField] = column.props.sortFunc;
      }
    }, this);

    if (keyField == null) throw "Error. No any key column defined in TableHeaderColumn. Use 'isKey={true}' to specify an unique column after version 0.5.4.";

    if (!Array.isArray(this.props.data)) {
      this.store = new _storeTableDataStore.TableDataStore(this.props.data.getData());
      this.props.data.clear();
      this.props.data.on('change', function (data) {
        _this.store.setData(data);
        _this.setState({
          data: _this.getTableData()
        });
      });
    } else {
      this.store = new _storeTableDataStore.TableDataStore(this.props.data);
    }

    this.store.setProps(this.props.pagination, keyField, customSortFuncMap, this.isRemoteDataSource());

    if (this.props.selectRow && this.props.selectRow.selected) {
      this.store.setSelectedRowKey(this.props.selectRow.selected);
    }

    this.state = {
      data: this.getTableData(),
      selectedRowKeys: this.store.getSelectedRowKeys()
    };
  }

  _createClass(BootstrapTable, [{
    key: 'getTableData',
    value: function getTableData() {
      var result = [];
      if (this.props.pagination) {
        var page = undefined,
            sizePerPage = undefined;
        if (this.store.isChangedPage()) {
          sizePerPage = this.refs.pagination.getSizePerPage();
          page = this.refs.pagination.getCurrentPage();
        } else {
          sizePerPage = this.props.options.sizePerPage || _Const2['default'].SIZE_PER_PAGE_LIST[0];
          page = this.props.options.page || 1;
        }
        result = this.store.page(page, sizePerPage).get();
      } else {
        result = this.store.get();
      }
      return result;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (Array.isArray(nextProps.data)) {
        this.store.setData(nextProps.data);
        this.store.page(this.props.options.page || 1, this.props.options.sizePerPage || _Const2['default'].SIZE_PER_PAGE_LIST[0]);
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
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._adjustHeaderWidth();
      window.addEventListener('resize', this._adjustHeaderWidth.bind(this));
      this.refs.body.refs.container.addEventListener('scroll', this._scrollHeader.bind(this));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this._adjustHeaderWidth.bind(this));
      this.refs.body.refs.container.removeEventListener('scroll', this._scrollHeader.bind(this));
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._adjustHeaderWidth();
      this._attachCellEditFunc();
      if (this.props.options.afterTableComplete) this.props.options.afterTableComplete();
    }
  }, {
    key: '_attachCellEditFunc',
    value: function _attachCellEditFunc() {
      if (this.props.cellEdit) {
        this.props.cellEdit.__onCompleteEdit__ = this.handleEditCell.bind(this);
        if (this.props.cellEdit.mode !== _Const2['default'].CELL_EDIT_NONE) this.props.selectRow.clickToSelect = false;
      }
    }

    /**
     * Returns true if in the current configuration,
     * the datagrid should load its data remotely.
     *
     * @param  {Object}  [props] Optional. If not given, this.props will be used
     * @return {Boolean}
     */
  }, {
    key: 'isRemoteDataSource',
    value: function isRemoteDataSource(props) {
      return (props || this.props).remote;
    }
  }, {
    key: 'render',
    value: function render() {
      var tableClass = (0, _classnames2['default'])("react-bs-table");
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
          className: column.props.columnClassName,
          width: column.props.width,
          text: column.props.children,
          index: i
        };
      }, this);

      var pagination = this.renderPagination();
      var toolBar = this.renderToolBar();
      var tableFilter = this.renderTableFilter(columns);
      return _react2['default'].createElement(
        'div',
        { className: 'react-bs-container', ref: 'table' },
        toolBar,
        _react2['default'].createElement(
          'div',
          { className: 'react-bs-table-container', style: style },
          _react2['default'].createElement(
            _TableHeader2['default'],
            {
              ref: 'header',
              rowSelectType: this.props.selectRow.mode,
              hideSelectColumn: this.props.selectRow.hideSelectColumn,
              sortName: this.props.options.sortName,
              sortOrder: this.props.options.sortOrder,
              onSort: this.handleSort.bind(this),
              onSelectAllRow: this.handleSelectAllRow.bind(this),
              bordered: this.props.bordered,
              condensed: this.props.condensed },
            this.props.children
          ),
          _react2['default'].createElement(_TableBody2['default'], {
            height: this.props.height,
            ref: 'body',
            data: this.state.data,
            columns: columns,
            trClassName: this.props.trClassName,
            striped: this.props.striped,
            bordered: this.props.bordered,
            hover: this.props.hover,
            keyField: this.store.getKeyField(),
            condensed: this.props.condensed,
            selectRow: this.props.selectRow,
            cellEdit: this.props.cellEdit,
            selectedRowKeys: this.state.selectedRowKeys,
            onRowClick: this.handleRowClick.bind(this),
            onSelectRow: this.handleSelectRow.bind(this)
          })
        ),
        tableFilter,
        pagination
      );
    }
  }, {
    key: 'handleSort',
    value: function handleSort(order, sortField) {
      if (this.props.options.onSortChange) {
        this.props.options.onSortChange(sortField, order, this.props);
      }

      if (this.isRemoteDataSource()) {
        return;
      }

      var result = this.store.sort(order, sortField).get();
      this.setState({
        data: result
      });
    }
  }, {
    key: 'handlePaginationData',
    value: function handlePaginationData(page, sizePerPage) {
      var onPageChange = this.props.options.onPageChange;

      if (onPageChange) {
        onPageChange(page, sizePerPage);
      }

      if (this.isRemoteDataSource()) {
        return;
      }

      var result = this.store.page(page, sizePerPage).get();
      this.setState({
        data: result
      });
    }
  }, {
    key: 'handleRowClick',
    value: function handleRowClick(row) {
      if (this.props.options.onRowClick) {
        this.props.options.onRowClick(row);
      }
    }
  }, {
    key: 'handleSelectAllRow',
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
        this.props.selectRow.onSelectAll(isSelected, isSelected ? this.store.get() : []);
      }
    }
  }, {
    key: 'handleSelectRow',
    value: function handleSelectRow(row, isSelected) {
      var currSelected = this.store.getSelectedRowKeys();
      var rowKey = row[this.store.getKeyField()];
      if (this.props.selectRow.mode === _Const2['default'].ROW_SELECT_SINGLE) {
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
  }, {
    key: 'handleEditCell',
    value: function handleEditCell(newVal, rowIndex, colIndex) {
      var fieldName = undefined;
      _react2['default'].Children.forEach(this.props.children, function (column, i) {
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
  }, {
    key: 'handleAddRowBegin',
    value: function handleAddRowBegin() {
      if (this.refs.body) {
        // this.refs.body.cancelEdit();
      }
    }
  }, {
    key: 'handleAddRow',
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
  }, {
    key: 'getSizePerPage',
    value: function getSizePerPage() {
      if (this.props.pagination) {
        return this.refs.pagination.getSizePerPage();
      }
    }
  }, {
    key: 'getCurrentPage',
    value: function getCurrentPage() {
      if (this.props.pagination) {
        return this.refs.pagination.getCurrentPage();
      }
    }
  }, {
    key: 'handleDropRow',
    value: function handleDropRow() {
      var result = undefined;
      var dropRowKeys = this.store.getSelectedRowKeys();
      //add confirm befor the delete action
      if (dropRowKeys && dropRowKeys.length > 0) {
        if (!confirm('Are you sure want delete?')) {
          return;
        }
      }
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
  }, {
    key: 'handleFilterData',
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
      if (this.props.options.afterColumnFilter) this.props.options.afterColumnFilter(filterObj, this.store.getDataIgnoringPagination());
      this.setState({
        data: result
      });
    }
  }, {
    key: 'handleExportCSV',
    value: function handleExportCSV() {
      var result = this.store.getDataIgnoringPagination();
      var keys = [];
      this.props.children.map(function (column) {
        if (column.props.hidden === false) {
          keys.push(column.props.dataField);
        }
      });
      (0, _csv_export_util2['default'])(result, keys, this.props.csvFileName);
    }
  }, {
    key: 'handleSearch',
    value: function handleSearch(searchText) {
      this.store.search(searchText, this.props.multiColumnSearch);
      var result = undefined;
      if (this.props.pagination) {
        var sizePerPage = this.refs.pagination.getSizePerPage();
        result = this.store.page(1, sizePerPage).get();
        this.refs.pagination.changePage(1);
      } else {
        result = this.store.get();
      }
      if (this.props.options.afterSearch) this.props.options.afterSearch(searchText, this.store.getDataIgnoringPagination());
      this.setState({
        data: result
      });
    }
  }, {
    key: 'renderPagination',
    value: function renderPagination() {
      if (this.props.pagination) {
        var dataSize = undefined;
        if (this.isRemoteDataSource()) {
          dataSize = this.props.fetchInfo.dataTotalSize;
        } else {
          dataSize = this.store.getDataNum();
        }
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_paginationPaginationList2['default'], {
            ref: 'pagination',
            currPage: this.props.options.page || 1,
            changePage: this.handlePaginationData.bind(this),
            sizePerPage: this.props.options.sizePerPage || _Const2['default'].SIZE_PER_PAGE_LIST[0],
            sizePerPageList: this.props.options.sizePerPageList || _Const2['default'].SIZE_PER_PAGE_LIST,
            paginationSize: this.props.options.paginationSize || _Const2['default'].PAGINATION_SIZE,
            remote: this.isRemoteDataSource(),
            dataSize: dataSize
          })
        );
      }
      return null;
    }
  }, {
    key: 'renderToolBar',
    value: function renderToolBar() {
      var columns = undefined;
      if (Array.isArray(this.props.children)) {
        columns = this.props.children.map(function (column) {
          var props = column.props;
          return {
            name: props.children,
            field: props.dataField,
            //when you want same auto generate value and not allow edit, example ID field
            autoValue: props.autoValue || false,
            //for create eidtor, no params for column.editable() indicate that editor for new row
            editable: props.editable && typeof props.editable === "function" ? props.editable() : props.editable,
            format: props.format ? format : false
          };
        });
      } else {
        columns = [{
          name: this.props.children.props.children,
          field: this.props.children.props.dataField,
          editable: this.props.children.props.editable
        }];
      }
      if (this.props.insertRow || this.props.deleteRow || this.props.search || this.props.exportCSV) {
        return _react2['default'].createElement(
          'div',
          { className: 'tool-bar' },
          _react2['default'].createElement(_toolbarToolBar2['default'], {
            enableInsert: this.props.insertRow,
            enableDelete: this.props.deleteRow,
            enableSearch: this.props.search,
            enableExportCSV: this.props.exportCSV,
            columns: columns,
            searchPlaceholder: this.props.searchPlaceholder,
            onAddRow: this.handleAddRow.bind(this),
            onAddRowBegin: this.handleAddRowBegin.bind(this),
            onDropRow: this.handleDropRow.bind(this),
            onSearch: this.handleSearch.bind(this),
            onExportCSV: this.handleExportCSV.bind(this)
          })
        );
      } else {
        return null;
      }
    }
  }, {
    key: 'renderTableFilter',
    value: function renderTableFilter(columns) {
      if (this.props.columnFilter) {
        return _react2['default'].createElement(_TableFilter2['default'], { columns: columns,
          rowSelectType: this.props.selectRow.mode,
          onFilter: this.handleFilterData.bind(this) });
      } else {
        return null;
      }
    }
  }, {
    key: '_scrollHeader',
    value: function _scrollHeader(e) {
      this.refs.header.refs.container.scrollLeft = e.currentTarget.scrollLeft;
    }
  }, {
    key: '_adjustHeaderWidth',
    value: function _adjustHeaderWidth() {
      var tableHeaderDom = this.refs.header.refs.container.childNodes[0];
      var tableBodyDom = this.refs.body.refs.container.childNodes[0];
      if (tableHeaderDom.offsetWidth !== tableBodyDom.offsetWidth) {
        tableHeaderDom.style.width = tableBodyDom.offsetWidth + "px";
      }
      var headerProps = this.refs.body.getBodyHeaderDomProp();
      this.refs.header.fitHeader(headerProps, this.refs.body.refs.container.scrollHeight > this.refs.body.refs.container.clientHeight);
    }
  }]);

  return BootstrapTable;
})(_react2['default'].Component);

BootstrapTable.propTypes = {
  keyField: _react2['default'].PropTypes.string,
  height: _react2['default'].PropTypes.string,
  data: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.array, _react2['default'].PropTypes.object]),
  remote: _react2['default'].PropTypes.bool, // remote data, default is false
  striped: _react2['default'].PropTypes.bool,
  bordered: _react2['default'].PropTypes.bool,
  hover: _react2['default'].PropTypes.bool,
  condensed: _react2['default'].PropTypes.bool,
  pagination: _react2['default'].PropTypes.bool,
  searchPlaceholder: _react2['default'].PropTypes.string,
  selectRow: _react2['default'].PropTypes.shape({
    mode: _react2['default'].PropTypes.string,
    bgColor: _react2['default'].PropTypes.string,
    selected: _react2['default'].PropTypes.array,
    onSelect: _react2['default'].PropTypes.func,
    onSelectAll: _react2['default'].PropTypes.func,
    clickToSelect: _react2['default'].PropTypes.bool,
    hideSelectColumn: _react2['default'].PropTypes.bool,
    clickToSelectAndEditCell: _react2['default'].PropTypes.bool
  }),
  cellEdit: _react2['default'].PropTypes.shape({
    mode: _react2['default'].PropTypes.string,
    blurToSave: _react2['default'].PropTypes.bool,
    afterSaveCell: _react2['default'].PropTypes.func
  }),
  insertRow: _react2['default'].PropTypes.bool,
  deleteRow: _react2['default'].PropTypes.bool,
  search: _react2['default'].PropTypes.bool,
  columnFilter: _react2['default'].PropTypes.bool,
  trClassName: _react2['default'].PropTypes.any,
  options: _react2['default'].PropTypes.shape({
    sortName: _react2['default'].PropTypes.string,
    sortOrder: _react2['default'].PropTypes.string,
    afterTableComplete: _react2['default'].PropTypes.func,
    afterDeleteRow: _react2['default'].PropTypes.func,
    afterInsertRow: _react2['default'].PropTypes.func,
    afterSearch: _react2['default'].PropTypes.func,
    afterColumnFilter: _react2['default'].PropTypes.func,
    onRowClick: _react2['default'].PropTypes.func,
    page: _react2['default'].PropTypes.number,
    sizePerPageList: _react2['default'].PropTypes.array,
    sizePerPage: _react2['default'].PropTypes.number,
    paginationSize: _react2['default'].PropTypes.number,
    onSortChange: _react2['default'].PropTypes.func,
    onPageChange: _react2['default'].PropTypes.func
  }),
  fetchInfo: _react2['default'].PropTypes.shape({
    dataTotalSize: _react2['default'].PropTypes.number
  }),
  exportCSV: _react2['default'].PropTypes.bool,
  csvFileName: _react2['default'].PropTypes.string
};
BootstrapTable.defaultProps = {
  height: "100%",
  striped: false,
  bordered: true,
  hover: false,
  condensed: false,
  pagination: false,
  searchPlaceholder: undefined,
  selectRow: {
    mode: _Const2['default'].ROW_SELECT_NONE,
    bgColor: _Const2['default'].ROW_SELECT_BG_COLOR,
    selected: [],
    onSelect: undefined,
    onSelectAll: undefined,
    clickToSelect: false,
    hideSelectColumn: false,
    clickToSelectAndEditCell: false
  },
  cellEdit: {
    mode: _Const2['default'].CELL_EDIT_NONE,
    blurToSave: false,
    afterSaveCell: undefined
  },
  insertRow: false,
  deleteRow: false,
  search: false,
  multiColumnSearch: false,
  columnFilter: false,
  trClassName: '',
  options: {
    sortName: undefined,
    sortOrder: _Const2['default'].SORT_DESC,
    afterTableComplete: undefined,
    afterDeleteRow: undefined,
    afterInsertRow: undefined,
    afterSearch: undefined,
    afterColumnFilter: undefined,
    onRowClick: undefined,
    page: 1,
    sizePerPageList: _Const2['default'].SIZE_PER_PAGE_LIST,
    sizePerPage: _Const2['default'].SIZE_PER_PAGE_LIST[0],
    paginationSize: _Const2['default'].PAGINATION_SIZE
  },
  fetchInfo: {
    dataTotalSize: 0
  },
  exportCSV: false,
  csvFileName: undefined
};

exports['default'] = BootstrapTable;
module.exports = exports['default'];