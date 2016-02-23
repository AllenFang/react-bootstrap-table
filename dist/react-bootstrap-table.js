(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactBootstrapTable"] = factory(require("react"), require("react-dom"));
	else
		root["ReactBootstrapTable"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _BootstrapTable = __webpack_require__(1);
	
	var _BootstrapTable2 = _interopRequireDefault(_BootstrapTable);
	
	var _TableHeaderColumn = __webpack_require__(40);
	
	var _TableHeaderColumn2 = _interopRequireDefault(_TableHeaderColumn);
	
	var _storeTableDataStore = __webpack_require__(33);
	
	if (typeof window !== 'undefined') {
	  window.BootstrapTable = _BootstrapTable2['default'];
	  window.TableHeaderColumn = _TableHeaderColumn2['default'];
	  window.TableDataSet = _storeTableDataStore.TableDataSet;
	}
	exports['default'] = {
	  BootstrapTable: _BootstrapTable2['default'],
	  TableHeaderColumn: _TableHeaderColumn2['default'],
	  TableDataSet: _storeTableDataStore.TableDataSet
	};
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var _TableHeader = __webpack_require__(5);
	
	var _TableHeader2 = _interopRequireDefault(_TableHeader);
	
	var _TableBody = __webpack_require__(9);
	
	var _TableBody2 = _interopRequireDefault(_TableBody);
	
	var _paginationPaginationList = __webpack_require__(29);
	
	var _paginationPaginationList2 = _interopRequireDefault(_paginationPaginationList);
	
	var _toolbarToolBar = __webpack_require__(31);
	
	var _toolbarToolBar2 = _interopRequireDefault(_toolbarToolBar);
	
	var _TableFilter = __webpack_require__(32);
	
	var _TableFilter2 = _interopRequireDefault(_TableFilter);
	
	var _storeTableDataStore = __webpack_require__(33);
	
	var _csv_export_util = __webpack_require__(35);
	
	var _csv_export_util2 = _interopRequireDefault(_csv_export_util);
	
	var _Filter = __webpack_require__(39);
	
	var BootstrapTable = (function (_React$Component) {
	  _inherits(BootstrapTable, _React$Component);
	
	  function BootstrapTable(props) {
	    var _this = this;
	
	    _classCallCheck(this, BootstrapTable);
	
	    _get(Object.getPrototypeOf(BootstrapTable.prototype), 'constructor', this).call(this, props);
	
	    this._scrollHeader = function (e) {
	      _this.refs.header.refs.container.scrollLeft = e.currentTarget.scrollLeft;
	    };
	
	    this._adjustHeaderWidth = function () {
	      var tableHeaderDom = _this.refs.header.refs.container.childNodes[0];
	      var tableBodyDom = _this.refs.body.refs.container.childNodes[0];
	      if (tableHeaderDom.offsetWidth !== tableBodyDom.offsetWidth) {
	        tableHeaderDom.style.width = tableBodyDom.offsetWidth + "px";
	      }
	      var headerProps = _this.refs.body.getBodyHeaderDomProp();
	      _this.refs.header.fitHeader(headerProps, _this.refs.body.refs.container.scrollHeight > _this.refs.body.refs.container.clientHeight);
	    };
	
	    this._attachCellEditFunc();
	
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
	      var copy = this.props.data.slice();
	      this.store = new _storeTableDataStore.TableDataStore(copy);
	    }
	
	    this.initTable(this.props);
	
	    if (this.filter) {
	      (function () {
	        var self = _this;
	        _this.filter.on('onFilterChange', function (currentFilter) {
	          self.handleFilterData(currentFilter);
	        });
	      })();
	    }
	
	    if (this.props.selectRow && this.props.selectRow.selected) {
	      var copy = this.props.selectRow.selected.slice();
	      this.store.setSelectedRowKey(copy);
	    }
	
	    this.state = {
	      data: this.getTableData(),
	      selectedRowKeys: this.store.getSelectedRowKeys()
	    };
	  }
	
	  _createClass(BootstrapTable, [{
	    key: 'initTable',
	    value: function initTable(props) {
	      var _this2 = this;
	
	      var keyField = props.keyField;
	
	      var isKeyFieldDefined = typeof keyField === 'string' && keyField.length;
	      _react2['default'].Children.forEach(props.children, function (column) {
	        if (column.props.isKey) {
	          if (keyField) {
	            throw "Error. Multiple key column be detected in TableHeaderColumn.";
	          }
	          keyField = column.props.dataField;
	        }
	        if (column.props.filter) {
	          // a column contains a filter
	          if (!_this2.filter) {
	            // first time create the filter on the BootstrapTable
	            _this2.filter = new _Filter.Filter();
	          }
	          // pass the filter to column with filter
	          column.props.filter.emitter = _this2.filter;
	        }
	      }, this);
	
	      var colInfos = this.getColumnsDescription(props).reduce(function (prev, curr) {
	        prev[curr.name] = curr;
	        return prev;
	      }, {});
	
	      if (!isKeyFieldDefined && !keyField) throw 'Error. No any key column defined in TableHeaderColumn.\n            Use \'isKey={true}\' to specify a unique column after version 0.5.4.';
	
	      this.store.setProps({
	        isPagination: props.pagination,
	        keyField: keyField,
	        colInfos: colInfos,
	        multiColumnSearch: props.multiColumnSearch,
	        remote: this.isRemoteDataSource()
	      });
	    }
	  }, {
	    key: 'getTableData',
	    value: function getTableData() {
	      var result = [];
	
	      if (this.props.options.sortName && this.props.options.sortOrder) this.store.sort(this.props.options.sortOrder, this.props.options.sortName);
	
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
	    key: 'getColumnsDescription',
	    value: function getColumnsDescription(_ref) {
	      var children = _ref.children;
	
	      return children.map(function (column, i) {
	        return {
	          name: column.props.dataField,
	          align: column.props.dataAlign,
	          sort: column.props.dataSort,
	          format: column.props.dataFormat,
	          formatExtraData: column.props.formatExtraData,
	          filterFormatted: column.props.filterFormatted,
	          editable: column.props.editable,
	          hidden: column.props.hidden,
	          className: column.props.columnClassName,
	          width: column.props.width,
	          text: column.props.children,
	          sortFunc: column.props.sortFunc,
	          index: i
	        };
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.initTable(nextProps);
	      if (Array.isArray(nextProps.data)) {
	        this.store.setData(nextProps.data.slice());
	        var paginationDom = this.refs.pagination;
	        var page = paginationDom && paginationDom.getCurrentPage() || nextProps.options.page || 1;
	        var sizePerPage = paginationDom && paginationDom.getSizePerPage() || nextProps.options.sizePerPage || _Const2['default'].SIZE_PER_PAGE_LIST[0];
	        // #125
	        if (page > Math.ceil(nextProps.data.length / sizePerPage)) page = 1;
	        var sortInfo = this.store.getSortInfo();
	        var sortField = nextProps.options.sortName || (sortInfo ? sortInfo.sortField : undefined);
	        var sortOrder = nextProps.options.sortOrder || (sortInfo ? sortInfo.order : undefined);
	        if (sortField && sortOrder) this.store.sort(sortOrder, sortField);
	        var data = this.store.page(page, sizePerPage).get();
	        this.setState({
	          data: data
	        });
	      }
	      if (nextProps.selectRow && nextProps.selectRow.selected) {
	        //set default select rows to store.
	        var copy = nextProps.selectRow.selected.slice();
	        this.store.setSelectedRowKey(copy);
	        this.setState({
	          selectedRowKeys: copy
	        });
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._adjustHeaderWidth();
	      window.addEventListener('resize', this._adjustHeaderWidth);
	      this.refs.body.refs.container.addEventListener('scroll', this._scrollHeader);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('resize', this._adjustHeaderWidth);
	      this.refs.body.refs.container.removeEventListener('scroll', this._scrollHeader);
	      if (this.filter) {
	        this.filter.removeAllListeners("onFilterChange");
	      }
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
	        height: this.props.height,
	        maxHeight: this.props.maxHeight
	      };
	      if (!Array.isArray(this.props.children)) {
	        childrens = [this.props.children];
	      }
	      var columns = this.getColumnsDescription(this.props);
	      var sortInfo = this.store.getSortInfo();
	      var pagination = this.renderPagination();
	      var toolBar = this.renderToolBar();
	      var tableFilter = this.renderTableFilter(columns);
	      var isSelectAll = this.isSelectAll();
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
	              sortName: sortInfo ? sortInfo.sortField : undefined,
	              sortOrder: sortInfo ? sortInfo.order : undefined,
	              onSort: this.handleSort.bind(this),
	              onSelectAllRow: this.handleSelectAllRow.bind(this),
	              bordered: this.props.bordered,
	              condensed: this.props.condensed,
	              isFiltered: this.filter ? true : false,
	              isSelectAll: isSelectAll },
	            this.props.children
	          ),
	          _react2['default'].createElement(_TableBody2['default'], {
	            height: this.props.height,
	            maxHeight: this.props.maxHeight,
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
	            onSelectRow: this.handleSelectRow.bind(this),
	            noDataText: this.props.options.noDataText
	          })
	        ),
	        tableFilter,
	        pagination
	      );
	    }
	  }, {
	    key: 'isSelectAll',
	    value: function isSelectAll() {
	      var defaultSelectRowKeys = this.store.getSelectedRowKeys();
	      var allRowKeys = this.store.getAllRowkey();
	      if (defaultSelectRowKeys.length !== allRowKeys.length) {
	        return defaultSelectRowKeys.length === 0 ? false : 'indeterminate';
	      } else {
	        return true;
	      }
	    }
	  }, {
	    key: 'cleanSelected',
	    value: function cleanSelected() {
	      this.store.setSelectedRowKey([]);
	      this.setState({
	        selectedRowKeys: []
	      });
	    }
	  }, {
	    key: 'handleSort',
	    value: function handleSort(order, sortField) {
	      if (this.props.options.onSortChange) {
	        this.props.options.onSortChange(sortField, order, this.props);
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
	      var result = true;
	      if (this.props.selectRow.onSelectAll) {
	        result = this.props.selectRow.onSelectAll(isSelected, isSelected ? this.store.get() : []);
	      }
	
	      if (typeof result === 'undefined' || result !== false) {
	        if (isSelected) {
	          selectedRowKeys = this.store.getAllRowkey();
	        }
	
	        this.store.setSelectedRowKey(selectedRowKeys);
	        this.setState({
	          selectedRowKeys: selectedRowKeys
	        });
	      }
	    }
	  }, {
	    key: 'handleShowOnlySelected',
	    value: function handleShowOnlySelected() {
	      this.store.ignoreNonSelected();
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
	  }, {
	    key: 'handleSelectRow',
	    value: function handleSelectRow(row, isSelected) {
	      var currSelected = this.store.getSelectedRowKeys();
	      var rowKey = row[this.store.getKeyField()];
	      var result = true;
	      if (this.props.selectRow.onSelect) {
	        result = this.props.selectRow.onSelect(row, isSelected);
	      }
	
	      if (typeof result === 'undefined' || result !== false) {
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
	    value: function handleDropRow(rowKeys) {
	      var that = this;
	      var dropRowKeys = rowKeys ? rowKeys : this.store.getSelectedRowKeys();
	      //add confirm before the delete action if that option is set.
	      if (dropRowKeys && dropRowKeys.length > 0) {
	        if (this.props.options.handleConfirmDeleteRow) {
	          this.props.options.handleConfirmDeleteRow(function () {
	            that.deleteRow(dropRowKeys);
	          });
	        } else if (confirm('Are you sure want delete?')) {
	          this.deleteRow(dropRowKeys);
	        }
	      }
	    }
	  }, {
	    key: 'deleteRow',
	    value: function deleteRow(dropRowKeys) {
	
	      var result = undefined;
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
	      this.store.search(searchText);
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
	          { className: 'table-footer-pagination' },
	          _react2['default'].createElement(_paginationPaginationList2['default'], {
	            ref: 'pagination',
	            currPage: this.props.options.page || 1,
	            changePage: this.handlePaginationData.bind(this),
	            sizePerPage: this.props.options.sizePerPage || _Const2['default'].SIZE_PER_PAGE_LIST[0],
	            sizePerPageList: this.props.options.sizePerPageList || _Const2['default'].SIZE_PER_PAGE_LIST,
	            paginationSize: this.props.options.paginationSize || _Const2['default'].PAGINATION_SIZE,
	            remote: this.isRemoteDataSource(),
	            dataSize: dataSize,
	            onSizePerPageList: this.props.options.onSizePerPageList,
	            prePage: this.props.options.prePage || _Const2['default'].PRE_PAGE,
	            nextPage: this.props.options.nextPage || _Const2['default'].NEXT_PAGE,
	            firstPage: this.props.options.firstPage || _Const2['default'].FIRST_PAGE,
	            lastPage: this.props.options.lastPage || _Const2['default'].LAST_PAGE
	          })
	        );
	      }
	      return null;
	    }
	  }, {
	    key: 'renderToolBar',
	    value: function renderToolBar() {
	      var enableShowOnlySelected = this.props.selectRow && this.props.selectRow.showOnlySelected;
	      if (enableShowOnlySelected || this.props.insertRow || this.props.deleteRow || this.props.search || this.props.exportCSV) {
	        var columns = undefined;
	        if (Array.isArray(this.props.children)) {
	          columns = this.props.children.map(function (column) {
	            var props = column.props;
	            return {
	              name: props.children,
	              field: props.dataField,
	              //when you want same auto generate value and not allow edit, example ID field
	              autoValue: props.autoValue || false,
	              //for create editor, no params for column.editable() indicate that editor for new row
	              editable: props.editable && typeof props.editable === "function" ? props.editable() : props.editable,
	              format: props.dataFormat ? function (value) {
	                return props.dataFormat(value, null, props.formatExtraData).replace(/<.*?>/g, '');
	              } : false
	            };
	          });
	        } else {
	          columns = [{
	            name: this.props.children.props.children,
	            field: this.props.children.props.dataField,
	            editable: this.props.children.props.editable
	          }];
	        }
	        return _react2['default'].createElement(
	          'div',
	          { className: 'tool-bar' },
	          _react2['default'].createElement(_toolbarToolBar2['default'], {
	            clearSearch: this.props.options.clearSearch,
	            enableInsert: this.props.insertRow,
	            enableDelete: this.props.deleteRow,
	            enableSearch: this.props.search,
	            enableExportCSV: this.props.exportCSV,
	            enableShowOnlySelected: enableShowOnlySelected,
	            columns: columns,
	            searchPlaceholder: this.props.searchPlaceholder,
	            onAddRow: this.handleAddRow.bind(this),
	            onAddRowBegin: this.handleAddRowBegin.bind(this),
	            onDropRow: this.handleDropRow.bind(this),
	            onSearch: this.handleSearch.bind(this),
	            onExportCSV: this.handleExportCSV.bind(this),
	            onShowOnlySelected: this.handleShowOnlySelected.bind(this)
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
	  }]);
	
	  return BootstrapTable;
	})(_react2['default'].Component);
	
	BootstrapTable.propTypes = {
	  keyField: _react2['default'].PropTypes.string,
	  height: _react2['default'].PropTypes.string,
	  maxHeight: _react2['default'].PropTypes.string,
	  data: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.array, _react2['default'].PropTypes.object]),
	  remote: _react2['default'].PropTypes.bool, // remote data, default is false
	  striped: _react2['default'].PropTypes.bool,
	  bordered: _react2['default'].PropTypes.bool,
	  hover: _react2['default'].PropTypes.bool,
	  condensed: _react2['default'].PropTypes.bool,
	  pagination: _react2['default'].PropTypes.bool,
	  searchPlaceholder: _react2['default'].PropTypes.string,
	  selectRow: _react2['default'].PropTypes.shape({
	    mode: _react2['default'].PropTypes.oneOf([_Const2['default'].ROW_SELECT_NONE, _Const2['default'].ROW_SELECT_SINGLE, _Const2['default'].ROW_SELECT_MULTI]),
	    bgColor: _react2['default'].PropTypes.string,
	    selected: _react2['default'].PropTypes.array,
	    onSelect: _react2['default'].PropTypes.func,
	    onSelectAll: _react2['default'].PropTypes.func,
	    clickToSelect: _react2['default'].PropTypes.bool,
	    hideSelectColumn: _react2['default'].PropTypes.bool,
	    clickToSelectAndEditCell: _react2['default'].PropTypes.bool,
	    showOnlySelected: _react2['default'].PropTypes.bool
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
	    clearSearch: _react2['default'].PropTypes.bool,
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
	    onPageChange: _react2['default'].PropTypes.func,
	    onSizePerPageList: _react2['default'].PropTypes.func,
	    noDataText: _react2['default'].PropTypes.string,
	    handleConfirmDeleteRow: _react2['default'].PropTypes.func,
	    prePage: _react2['default'].PropTypes.string,
	    nextPage: _react2['default'].PropTypes.string,
	    firstPage: _react2['default'].PropTypes.string,
	    lastPage: _react2['default'].PropTypes.string
	  }),
	  fetchInfo: _react2['default'].PropTypes.shape({
	    dataTotalSize: _react2['default'].PropTypes.number
	  }),
	  exportCSV: _react2['default'].PropTypes.bool,
	  csvFileName: _react2['default'].PropTypes.string
	};
	BootstrapTable.defaultProps = {
	  height: "100%",
	  maxHeight: undefined,
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
	    clickToSelectAndEditCell: false,
	    showOnlySelected: false
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
	    clearSearch: false,
	    sortName: undefined,
	    sortOrder: undefined,
	    afterTableComplete: undefined,
	    afterDeleteRow: undefined,
	    afterInsertRow: undefined,
	    afterSearch: undefined,
	    afterColumnFilter: undefined,
	    onRowClick: undefined,
	    page: undefined,
	    sizePerPageList: _Const2['default'].SIZE_PER_PAGE_LIST,
	    sizePerPage: undefined,
	    paginationSize: _Const2['default'].PAGINATION_SIZE,
	    onSizePerPageList: undefined,
	    noDataText: undefined,
	    handleConfirmDeleteRow: undefined,
	    prePage: _Const2['default'].PRE_PAGE,
	    nextPage: _Const2['default'].NEXT_PAGE,
	    firstPage: _Const2['default'].FIRST_PAGE,
	    lastPage: _Const2['default'].LAST_PAGE
	  },
	  fetchInfo: {
	    dataTotalSize: 0
	  },
	  exportCSV: false,
	  csvFileName: undefined
	};
	
	exports['default'] = BootstrapTable;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {
	  SORT_DESC: "desc",
	  SORT_ASC: "asc",
	  SIZE_PER_PAGE: 10,
	  NEXT_PAGE: ">",
	  LAST_PAGE: ">>",
	  PRE_PAGE: "<",
	  FIRST_PAGE: "<<",
	  ROW_SELECT_BG_COLOR: "",
	  ROW_SELECT_NONE: "none",
	  ROW_SELECT_SINGLE: "radio",
	  ROW_SELECT_MULTI: "checkbox",
	  CELL_EDIT_NONE: "none",
	  CELL_EDIT_CLICK: "click",
	  CELL_EDIT_DBCLICK: "dbclick",
	  SIZE_PER_PAGE_LIST: [10, 25, 30, 50],
	  PAGINATION_SIZE: 5,
	  NO_DATA_TEXT: "There is no data to display",
	  SHOW_ONLY_SELECT: "Show Selected Only",
	  SHOW_ALL: "Show All",
	  FILTER_DELAY: 500,
	  FILTER_TYPE: {
	    TEXT: "TextFilter",
	    SELECT: "SelectFilter",
	    NUMBER: "NumberFilter",
	    DATE: "DateFilter",
	    CUSTOM: "CustomFilter"
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(6);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var _util = __webpack_require__(7);
	
	var _util2 = _interopRequireDefault(_util);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _SelectRowHeaderColumn = __webpack_require__(8);
	
	var _SelectRowHeaderColumn2 = _interopRequireDefault(_SelectRowHeaderColumn);
	
	var Checkbox = (function (_React$Component) {
	  _inherits(Checkbox, _React$Component);
	
	  function Checkbox() {
	    _classCallCheck(this, Checkbox);
	
	    _get(Object.getPrototypeOf(Checkbox.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Checkbox, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.update(this.props.checked);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(props) {
	      this.update(props.checked);
	    }
	  }, {
	    key: 'update',
	    value: function update(checked) {
	      _reactDom2['default'].findDOMNode(this).indeterminate = checked === 'indeterminate';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement('input', { className: 'react-bs-select-all', type: 'checkbox', checked: this.props.checked, onChange: this.props.onChange });
	    }
	  }]);
	
	  return Checkbox;
	})(_react2['default'].Component);
	
	var TableHeader = (function (_React$Component2) {
	  _inherits(TableHeader, _React$Component2);
	
	  function TableHeader(props) {
	    _classCallCheck(this, TableHeader);
	
	    _get(Object.getPrototypeOf(TableHeader.prototype), 'constructor', this).call(this, props);
	    this.selectRowColumnWidth = null;
	  }
	
	  _createClass(TableHeader, [{
	    key: 'render',
	    value: function render() {
	      var containerClasses = (0, _classnames2['default'])("table-header");
	      var tableClasses = (0, _classnames2['default'])("table", "table-hover", {
	        "table-bordered": this.props.bordered,
	        "table-condensed": this.props.condensed
	      });
	      var selectRowHeaderCol = this.props.hideSelectColumn ? null : this.renderSelectRowHeader();
	      this._attachClearSortCaretFunc();
	
	      return _react2['default'].createElement(
	        'div',
	        { className: 'table-header-wrapper' },
	        _react2['default'].createElement(
	          'div',
	          { ref: 'container', className: containerClasses },
	          _react2['default'].createElement(
	            'table',
	            { className: tableClasses },
	            _react2['default'].createElement(
	              'thead',
	              null,
	              _react2['default'].createElement(
	                'tr',
	                { ref: 'header' },
	                selectRowHeaderCol,
	                this.props.children
	              )
	            )
	          )
	        )
	      );
	    }
	  }, {
	    key: 'renderSelectRowHeader',
	    value: function renderSelectRowHeader() {
	      if (this.props.rowSelectType == _Const2['default'].ROW_SELECT_SINGLE) {
	        return _react2['default'].createElement(_SelectRowHeaderColumn2['default'], { width: this.selectRowColumnWidth });
	      } else if (this.props.rowSelectType == _Const2['default'].ROW_SELECT_MULTI) {
	        return _react2['default'].createElement(
	          _SelectRowHeaderColumn2['default'],
	          { width: this.selectRowColumnWidth },
	          _react2['default'].createElement(Checkbox, { onChange: this.props.onSelectAllRow, checked: this.props.isSelectAll })
	        );
	      } else {
	        return null;
	      }
	    }
	  }, {
	    key: '_attachClearSortCaretFunc',
	    value: function _attachClearSortCaretFunc() {
	      if (Array.isArray(this.props.children)) {
	        for (var i = 0; i < this.props.children.length; i++) {
	          var field = this.props.children[i].props.dataField;
	          var sort = field === this.props.sortName ? this.props.sortOrder : undefined;
	          this.props.children[i] = _react2['default'].cloneElement(this.props.children[i], { key: i, onSort: this.props.onSort, sort: sort });
	        }
	      } else {
	        var field = this.props.children.props.dataField;
	        var sort = field === this.props.sortName ? this.props.sortOrder : undefined;
	        this.props.children = _react2['default'].cloneElement(this.props.children, { key: 0, onSort: this.props.onSort, sort: sort });
	      }
	    }
	  }, {
	    key: 'fitHeader',
	    value: function fitHeader(headerProps, isVerticalScrollBar) {
	      if (Array.isArray(this.props.children)) {
	        var startPosition = (this.props.rowSelectType == _Const2['default'].ROW_SELECT_SINGLE || this.props.rowSelectType == _Const2['default'].ROW_SELECT_MULTI) && !this.props.hideSelectColumn ? 1 : 0;
	        if (startPosition == 1) this.selectRowColumnWidth = headerProps[0].width;
	        for (var i = 0; i < this.props.children.length; i++) {
	          this.props.children[i] = _react2['default'].cloneElement(this.props.children[i], { width: headerProps[i + startPosition].width + "px" });
	        }
	      } else {
	        this.props.children = _react2['default'].cloneElement(this.props.children, { width: headerProps[0].width + "px" });
	      }
	      if (this.props.condensed && !this.props.isFiltered) {
	        this.refs.container.style.height = "36px";
	      }
	      this.forceUpdate();
	      if (isVerticalScrollBar) this.refs.container.style.marginRight = _util2['default'].getScrollBarWidth() + "px";
	    }
	  }]);
	
	  return TableHeader;
	})(_react2['default'].Component);
	
	TableHeader.propTypes = {
	  rowSelectType: _react2['default'].PropTypes.string,
	  onSort: _react2['default'].PropTypes.func,
	  onSelectAllRow: _react2['default'].PropTypes.func,
	  sortName: _react2['default'].PropTypes.string,
	  sortOrder: _react2['default'].PropTypes.string,
	  hideSelectColumn: _react2['default'].PropTypes.bool,
	  bordered: _react2['default'].PropTypes.bool,
	  condensed: _react2['default'].PropTypes.bool,
	  isFiltered: _react2['default'].PropTypes.bool,
	  isSelectAll: _react2['default'].PropTypes.oneOf([true, 'indeterminate', false])
	};
	
	TableHeader.defaultProps = {};
	exports['default'] = TableHeader;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	exports['default'] = {
	
	  renderSortCaret: function renderSortCaret(order) {
	    var wrap = document.createElement("span");
	    wrap.className = "order";
	    if (order == _Const2['default'].SORT_ASC) wrap.className += " dropup";
	    var inner = document.createElement("span");
	    inner.className = "caret";
	    inner.style.margin = "10px 5px";
	    wrap.appendChild(inner);
	    return wrap;
	  },
	
	  renderReactSortCaret: function renderReactSortCaret(order) {
	    var orderClass = (0, _classnames2['default'])("order", {
	      'dropup': order == _Const2['default'].SORT_ASC
	    });
	    return _react2['default'].createElement(
	      'span',
	      { className: orderClass },
	      _react2['default'].createElement('span', { className: 'caret', style: { margin: '10px 5px' } })
	    );
	  },
	
	  getScrollBarWidth: function getScrollBarWidth() {
	    var inner = document.createElement('p');
	    inner.style.width = "100%";
	    inner.style.height = "200px";
	
	    var outer = document.createElement('div');
	    outer.style.position = "absolute";
	    outer.style.top = "0px";
	    outer.style.left = "0px";
	    outer.style.visibility = "hidden";
	    outer.style.width = "200px";
	    outer.style.height = "150px";
	    outer.style.overflow = "hidden";
	    outer.appendChild(inner);
	
	    document.body.appendChild(outer);
	    var w1 = inner.offsetWidth;
	    outer.style.overflow = 'scroll';
	    var w2 = inner.offsetWidth;
	    if (w1 == w2) w2 = outer.clientWidth;
	
	    document.body.removeChild(outer);
	
	    return w1 - w2;
	  }
	
	};
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var SelectRowHeaderColumn = (function (_React$Component) {
	  _inherits(SelectRowHeaderColumn, _React$Component);
	
	  function SelectRowHeaderColumn() {
	    _classCallCheck(this, SelectRowHeaderColumn);
	
	    _get(Object.getPrototypeOf(SelectRowHeaderColumn.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(SelectRowHeaderColumn, [{
	    key: 'render',
	    value: function render() {
	      var thStyle = {
	        width: parseInt(this.props.width) ? this.props.width : 35
	      };
	
	      return _react2['default'].createElement(
	        'th',
	        { style: thStyle },
	        _react2['default'].createElement(
	          'div',
	          { className: 'th-inner table-header-column' },
	          this.props.children
	        )
	      );
	    }
	  }]);
	
	  return SelectRowHeaderColumn;
	})(_react2['default'].Component);
	
	exports['default'] = SelectRowHeaderColumn;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var _util = __webpack_require__(7);
	
	var _util2 = _interopRequireDefault(_util);
	
	var _TableRow = __webpack_require__(10);
	
	var _TableRow2 = _interopRequireDefault(_TableRow);
	
	var _TableColumn = __webpack_require__(11);
	
	var _TableColumn2 = _interopRequireDefault(_TableColumn);
	
	var _TableEditColumn = __webpack_require__(12);
	
	var _TableEditColumn2 = _interopRequireDefault(_TableEditColumn);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var isFun = function isFun(obj) {
	  return obj && typeof obj === "function";
	};
	
	var TableBody = (function (_React$Component) {
	  _inherits(TableBody, _React$Component);
	
	  function TableBody(props) {
	    _classCallCheck(this, TableBody);
	
	    _get(Object.getPrototypeOf(TableBody.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      currEditCell: null
	    };
	    this.editing = false;
	  }
	
	  _createClass(TableBody, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.adjustBody();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.adjustBody();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var containerClasses = (0, _classnames2['default'])("table-container");
	
	      var tableClasses = (0, _classnames2['default'])("table", {
	        'table-striped': this.props.striped,
	        'table-bordered': this.props.bordered,
	        'table-hover': this.props.hover,
	        'table-condensed': this.props.condensed
	      });
	
	      var isSelectRowDefined = this._isSelectRowDefined();
	      var tableHeader = this.renderTableHeader(isSelectRowDefined);
	
	      var tableRows = this.props.data.map(function (data, r) {
	        var tableColumns = this.props.columns.map(function (column, i) {
	          var fieldValue = data[column.name];
	          if (this.editing && column.name !== this.props.keyField && // Key field can't be edit
	          column.editable && // column is editable? default is true, user can set it false
	          this.state.currEditCell != null && this.state.currEditCell.rid == r && this.state.currEditCell.cid == i) {
	            var format = column.format ? function (value) {
	              return column.format(value, data, column.formatExtraData).replace(/<.*?>/g, '');
	            } : false;
	
	            return _react2['default'].createElement(
	              _TableEditColumn2['default'],
	              { completeEdit: this.handleCompleteEditCell.bind(this),
	                //add by bluespring for column editor customize
	                editable: isFun(column.editable) ? column.editable(fieldValue, data, r, i) : column.editable,
	                format: column.format ? format : false,
	                key: i,
	                blurToSave: this.props.cellEdit.blurToSave,
	                rowIndex: r,
	                colIndex: i },
	              fieldValue
	            );
	          } else {
	            //add by bluespring for className customize
	            var tdClassName = isFun(column.className) ? column.className(fieldValue, data, r, i) : column.className;
	
	            if (typeof column.format !== "undefined") {
	              var formattedValue = column.format(fieldValue, data, column.formatExtraData);
	              if (!_react2['default'].isValidElement(formattedValue)) {
	                formattedValue = _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: formattedValue } });
	              }
	              return _react2['default'].createElement(
	                _TableColumn2['default'],
	                { dataAlign: column.align,
	                  key: i,
	                  className: tdClassName,
	                  cellEdit: this.props.cellEdit,
	                  hidden: column.hidden,
	                  onEdit: this.handleEditCell.bind(this),
	                  width: column.width },
	                formattedValue
	              );
	            } else {
	              return _react2['default'].createElement(
	                _TableColumn2['default'],
	                { dataAlign: column.align,
	                  key: i,
	                  className: tdClassName,
	                  cellEdit: this.props.cellEdit,
	                  hidden: column.hidden,
	                  onEdit: this.handleEditCell.bind(this),
	                  width: column.width },
	                fieldValue
	              );
	            }
	          }
	        }, this);
	        var selected = this.props.selectedRowKeys.indexOf(data[this.props.keyField]) != -1;
	        var selectRowColumn = isSelectRowDefined && !this.props.selectRow.hideSelectColumn ? this.renderSelectRowColumn(selected) : null;
	        //add by bluespring for className customize
	        var trClassName = isFun(this.props.trClassName) ? this.props.trClassName(data, r) : this.props.trClassName;
	        return _react2['default'].createElement(
	          _TableRow2['default'],
	          { isSelected: selected, key: r, className: trClassName,
	            selectRow: isSelectRowDefined ? this.props.selectRow : undefined,
	            enableCellEdit: this.props.cellEdit.mode !== _Const2['default'].CELL_EDIT_NONE,
	            onRowClick: this.handleRowClick.bind(this),
	            onSelectRow: this.handleSelectRow.bind(this) },
	          selectRowColumn,
	          tableColumns
	        );
	      }, this);
	
	      if (tableRows.length === 0) {
	        tableRows.push(_react2['default'].createElement(
	          _TableRow2['default'],
	          { key: '##table-empty##' },
	          _react2['default'].createElement(
	            'td',
	            { colSpan: this.props.columns.length + (isSelectRowDefined ? 1 : 0),
	              style: { textAlign: "center" },
	              className: 'react-bs-table-no-data' },
	            this.props.noDataText || _Const2['default'].NO_DATA_TEXT
	          )
	        ));
	      }
	
	      this.editing = false;
	
	      var height = this.calculateContainerHeight().toString();
	
	      return _react2['default'].createElement(
	        'div',
	        { ref: 'container', className: containerClasses, style: { height: height } },
	        _react2['default'].createElement(
	          'table',
	          { ref: 'body', className: tableClasses },
	          tableHeader,
	          _react2['default'].createElement(
	            'tbody',
	            null,
	            tableRows
	          )
	        )
	      );
	    }
	  }, {
	    key: 'renderTableHeader',
	    value: function renderTableHeader(isSelectRowDefined) {
	      var selectRowHeader = null;
	
	      if (isSelectRowDefined) {
	        var style = {
	          width: 35,
	          minWidth: 35
	        };
	        selectRowHeader = this.props.selectRow.hideSelectColumn ? null : _react2['default'].createElement('th', { style: style, key: -1 });
	      }
	      var theader = this.props.columns.map(function (column, i) {
	        var width = column.width == null ? column.width : parseInt(column.width);
	        var style = {
	          display: column.hidden ? "none" : null,
	          width: width,
	          maxWidth: width
	          /** add min-wdth to fix user assign column width not eq offsetWidth in large column table **/
	        };
	        var sortCaert = column.sort ? _util2['default'].renderReactSortCaret(_Const2['default'].SORT_DESC) : null;
	        return _react2['default'].createElement(
	          'th',
	          { style: style, key: i, className: column.className },
	          column.text,
	          sortCaert
	        );
	      });
	
	      return _react2['default'].createElement(
	        'thead',
	        { ref: 'header' },
	        _react2['default'].createElement(
	          'tr',
	          null,
	          selectRowHeader,
	          theader
	        )
	      );
	    }
	  }, {
	    key: 'handleRowClick',
	    value: function handleRowClick(rowIndex) {
	      var key, selectedRow;
	      this.props.data.forEach(function (row, i) {
	        if (i == rowIndex - 1) {
	          key = row[this.props.keyField];
	          selectedRow = row;
	        }
	      }, this);
	      this.props.onRowClick(selectedRow);
	    }
	  }, {
	    key: 'handleSelectRow',
	    value: function handleSelectRow(rowIndex, isSelected) {
	      var key, selectedRow;
	      this.props.data.forEach(function (row, i) {
	        if (i == rowIndex - 1) {
	          key = row[this.props.keyField];
	          selectedRow = row;
	          return false;
	        }
	      }, this);
	      this.props.onSelectRow(selectedRow, isSelected);
	    }
	  }, {
	    key: 'handleSelectRowColumChange',
	    value: function handleSelectRowColumChange(e) {
	      if (!this.props.selectRow.clickToSelect || !this.props.selectRow.clickToSelectAndEditCell) {
	        this.handleSelectRow(e.currentTarget.parentElement.parentElement.rowIndex, e.currentTarget.checked);
	      }
	    }
	  }, {
	    key: 'handleEditCell',
	    value: function handleEditCell(rowIndex, columnIndex) {
	      this.editing = true;
	      if (this._isSelectRowDefined()) {
	        columnIndex--;
	        if (this.props.selectRow.hideSelectColumn) columnIndex++;
	      }
	      rowIndex--;
	      var stateObj = {
	        currEditCell: {
	          rid: rowIndex,
	          cid: columnIndex
	        }
	      };
	
	      if (this.props.selectRow.clickToSelectAndEditCell) {
	        this.handleSelectRow(rowIndex + 1, true);
	      }
	      this.setState(stateObj);
	    }
	  }, {
	    key: 'cancelEdit',
	    value: function cancelEdit() {
	      var currEditCell = this.state.currEditCell;
	      if (currEditCell) {
	        this.handleCompleteEditCell(null, currEditCell.rid, currEditCell.cid);
	      }
	    }
	  }, {
	    key: 'handleCompleteEditCell',
	    value: function handleCompleteEditCell(newVal, rowIndex, columnIndex) {
	      this.setState({ currEditCell: null });
	      if (null != newVal) this.props.cellEdit.__onCompleteEdit__(newVal, rowIndex, columnIndex);
	    }
	  }, {
	    key: 'renderSelectRowColumn',
	    value: function renderSelectRowColumn(selected) {
	      if (this.props.selectRow.mode == _Const2['default'].ROW_SELECT_SINGLE) {
	        return _react2['default'].createElement(
	          _TableColumn2['default'],
	          null,
	          _react2['default'].createElement('input', { type: 'radio', name: 'selection', checked: selected, onChange: this.handleSelectRowColumChange.bind(this) })
	        );
	      } else {
	        return _react2['default'].createElement(
	          _TableColumn2['default'],
	          null,
	          _react2['default'].createElement('input', { type: 'checkbox', checked: selected, onChange: this.handleSelectRowColumChange.bind(this) })
	        );
	      }
	    }
	  }, {
	    key: 'getBodyHeaderDomProp',
	    value: function getBodyHeaderDomProp() {
	      var headers = this.refs.header.childNodes[0].childNodes;
	      var headerDomProps = [];
	      for (var i = 0; i < headers.length; i++) {
	        headerDomProps.push({
	          width: headers[i].offsetWidth
	        });
	      }
	      return headerDomProps;
	    }
	  }, {
	    key: 'adjustBody',
	    value: function adjustBody() {
	      this.hardFixHeaderWidth();
	      if (this.props.condensed) {
	        this.refs.body.style.marginTop = "-36px";
	      }
	
	      if (this.props.maxHeight && parseInt(this.props.maxHeight) < this.refs.container.offsetHeight) {
	        this.refs.container.style.height = this.props.maxHeight - 42 + "px";
	      }
	    }
	  }, {
	    key: 'hardFixHeaderWidth',
	    value: function hardFixHeaderWidth() {
	      var headers = this.refs.header.childNodes[0].childNodes;
	      for (var i = 0; i < headers.length; i++) {
	        headers[i].style.width = headers[i].offsetWidth + "px";
	      }
	    }
	  }, {
	    key: 'calculateContainerHeight',
	    value: function calculateContainerHeight() {
	      if (this.props.height == "100%") return this.props.height;else {
	        return parseInt(this.props.height) - 42;
	      }
	    }
	  }, {
	    key: '_isSelectRowDefined',
	    value: function _isSelectRowDefined() {
	      return this.props.selectRow.mode === _Const2['default'].ROW_SELECT_SINGLE || this.props.selectRow.mode === _Const2['default'].ROW_SELECT_MULTI;
	    }
	  }]);
	
	  return TableBody;
	})(_react2['default'].Component);
	
	TableBody.propTypes = {
	  height: _react2['default'].PropTypes.string,
	  data: _react2['default'].PropTypes.array,
	  columns: _react2['default'].PropTypes.array,
	  striped: _react2['default'].PropTypes.bool,
	  bordered: _react2['default'].PropTypes.bool,
	  hover: _react2['default'].PropTypes.bool,
	  condensed: _react2['default'].PropTypes.bool,
	  keyField: _react2['default'].PropTypes.string,
	  selectedRowKeys: _react2['default'].PropTypes.array,
	  onRowClick: _react2['default'].PropTypes.func,
	  onSelectRow: _react2['default'].PropTypes.func,
	  noDataText: _react2['default'].PropTypes.string
	};
	exports['default'] = TableBody;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var TableRow = (function (_React$Component) {
	  _inherits(TableRow, _React$Component);
	
	  function TableRow(props) {
	    _classCallCheck(this, TableRow);
	
	    _get(Object.getPrototypeOf(TableRow.prototype), 'constructor', this).call(this, props);
	    this.clickNum = 0;
	  }
	
	  _createClass(TableRow, [{
	    key: 'rowClick',
	    value: function rowClick(e) {
	      var _this = this;
	
	      if (e.target.tagName !== "INPUT") {
	        (function () {
	          var rowIndex = e.currentTarget.rowIndex;
	          if (_this.props.selectRow) {
	            if (_this.props.selectRow.clickToSelect) {
	              _this.props.onSelectRow(rowIndex, !_this.props.isSelected);
	            } else if (_this.props.selectRow.clickToSelectAndEditCell) {
	              _this.clickNum++;
	              /** if clickToSelectAndEditCell is enabled,
	               *  there should be a delay to prevent a selection changed when
	               *  user dblick to edit cell on same row but different cell
	              **/
	              setTimeout(function () {
	                if (_this.clickNum === 1) {
	                  _this.props.onSelectRow(rowIndex, !_this.props.isSelected);
	                }
	                _this.clickNum = 0;
	              }, 200);
	            }
	          }
	          if (_this.props.onRowClick) _this.props.onRowClick(rowIndex);
	        })();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      this.clickNum = 0;
	      var trCss = {
	        style: {
	          backgroundColor: this.props.isSelected ? this.props.selectRow.bgColor : null
	        },
	        className: (this.props.isSelected && this.props.selectRow.className ? this.props.selectRow.className : '') + (this.props.className || '')
	      };
	
	      if (this.props.selectRow && (this.props.selectRow.clickToSelect || this.props.selectRow.clickToSelectAndEditCell) || this.props.onRowClick) {
	        return _react2['default'].createElement(
	          'tr',
	          _extends({}, trCss, { onClick: this.rowClick.bind(this) }),
	          this.props.children
	        );
	      } else {
	        return _react2['default'].createElement(
	          'tr',
	          trCss,
	          this.props.children
	        );
	      }
	    }
	  }]);
	
	  return TableRow;
	})(_react2['default'].Component);
	
	TableRow.propTypes = {
	  isSelected: _react2['default'].PropTypes.bool,
	  enableCellEdit: _react2['default'].PropTypes.bool,
	  onRowClick: _react2['default'].PropTypes.func,
	  onSelectRow: _react2['default'].PropTypes.func
	};
	TableRow.defaultProps = {
	  onRowClick: undefined
	};
	exports['default'] = TableRow;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var TableColumn = (function (_React$Component) {
	  _inherits(TableColumn, _React$Component);
	
	  function TableColumn(props) {
	    _classCallCheck(this, TableColumn);
	
	    _get(Object.getPrototypeOf(TableColumn.prototype), 'constructor', this).call(this, props);
	  }
	
	  _createClass(TableColumn, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      var children = this.props.children;
	
	      var shouldUpdated = this.props.width !== nextProps.width || this.props.className !== nextProps.className || this.props.hidden !== nextProps.hidden || this.props.dataAlign !== nextProps.dataAlign || typeof children !== typeof nextProps.children || ('' + this.props.onEdit).toString() !== ('' + nextProps.onEdit).toString();
	
	      if (shouldUpdated) {
	        return shouldUpdated;
	      }
	
	      if (typeof children === 'object' && children !== null) {
	        if (children.props.type === 'checkbox' || children.props.type === 'radio') {
	          shouldUpdated = shouldUpdated || children.props.type !== nextProps.children.props.type || children.props.checked !== nextProps.children.props.checked;
	        } else {
	          shouldUpdated = true;
	        }
	      } else {
	        shouldUpdated = shouldUpdated || children !== nextProps.children;
	      }
	
	      if (shouldUpdated) {
	        return shouldUpdated;
	      }
	
	      if (!(this.props.cellEdit && nextProps.cellEdit)) {
	        return false;
	      } else {
	        return shouldUpdated || this.props.cellEdit.mode !== nextProps.cellEdit.mode;
	      }
	    }
	  }, {
	    key: 'handleCellEdit',
	    value: function handleCellEdit(e) {
	      if (this.props.cellEdit.mode == _Const2['default'].CELL_EDIT_DBCLICK) {
	        if (document.selection && document.selection.empty) {
	          document.selection.empty();
	        } else if (window.getSelection) {
	          var sel = window.getSelection();
	          sel.removeAllRanges();
	        }
	      }
	      this.props.onEdit(e.currentTarget.parentElement.rowIndex, e.currentTarget.cellIndex);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var width = this.props.width == null ? this.props.width : parseInt(this.props.width);
	      var tdStyle = {
	        textAlign: this.props.dataAlign,
	        display: this.props.hidden ? "none" : null,
	        width: width,
	        maxWidth: width
	      };
	      var classname = this.props.className;
	      if (this.props.width) {
	        classname += " col-md-" + width;
	      }
	
	      var opts = {};
	      if (this.props.cellEdit) {
	        if (this.props.cellEdit.mode == _Const2['default'].CELL_EDIT_CLICK) {
	          opts.onClick = this.handleCellEdit.bind(this);
	        } else if (this.props.cellEdit.mode == _Const2['default'].CELL_EDIT_DBCLICK) {
	          opts.onDoubleClick = this.handleCellEdit.bind(this);
	        }
	      }
	      return _react2['default'].createElement(
	        'td',
	        _extends({ style: tdStyle, className: classname }, opts),
	        this.props.children
	      );
	    }
	  }]);
	
	  return TableColumn;
	})(_react2['default'].Component);
	
	TableColumn.propTypes = {
	  dataAlign: _react2['default'].PropTypes.string,
	  hidden: _react2['default'].PropTypes.bool,
	  className: _react2['default'].PropTypes.string
	};
	
	TableColumn.defaultProps = {
	  dataAlign: "left",
	  hidden: false,
	  className: ""
	};
	exports['default'] = TableColumn;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var _Editor = __webpack_require__(13);
	
	var _Editor2 = _interopRequireDefault(_Editor);
	
	var _NotificationJs = __webpack_require__(14);
	
	var _NotificationJs2 = _interopRequireDefault(_NotificationJs);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var TableEditColumn = (function (_React$Component) {
	    _inherits(TableEditColumn, _React$Component);
	
	    function TableEditColumn(props) {
	        _classCallCheck(this, TableEditColumn);
	
	        _get(Object.getPrototypeOf(TableEditColumn.prototype), 'constructor', this).call(this, props);
	        this.timeouteClear = 0;
	        this.state = {
	            shakeEditor: false
	        };
	    }
	
	    _createClass(TableEditColumn, [{
	        key: 'handleKeyPress',
	        value: function handleKeyPress(e) {
	            if (e.keyCode == 13) {
	                //Pressed ENTER
	                var value = e.currentTarget.type == 'checkbox' ? this._getCheckBoxValue(e) : e.currentTarget.value;
	
	                if (!this.validator(value)) {
	                    return;
	                }
	                this.props.completeEdit(value, this.props.rowIndex, this.props.colIndex);
	            } else if (e.keyCode == 27) {
	                this.props.completeEdit(null, this.props.rowIndex, this.props.colIndex);
	            }
	        }
	    }, {
	        key: 'handleBlur',
	        value: function handleBlur(e) {
	            if (this.props.blurToSave) {
	                var value = e.currentTarget.type == 'checkbox' ? this._getCheckBoxValue(e) : e.currentTarget.value;
	                if (!this.validator(value)) {
	                    return;
	                }
	                this.props.completeEdit(value, this.props.rowIndex, this.props.colIndex);
	            }
	        }
	    }, {
	        key: 'validator',
	        value: function validator(value) {
	            var ts = this;
	            if (ts.props.editable.validator) {
	                var valid = ts.props.editable.validator(value);
	                if (valid !== true) {
	                    ts.refs.notifier.notice('error', valid, "Pressed ESC can cancel");
	                    var input = ts.refs.inputRef;
	                    //animate input
	                    ts.clearTimeout();
	                    ts.setState({ shakeEditor: true });
	                    ts.timeouteClear = setTimeout(function () {
	                        ts.setState({ shakeEditor: false });
	                    }, 300);
	                    input.focus();
	                    return false;
	                }
	            }
	            return true;
	        }
	    }, {
	        key: 'clearTimeout',
	        value: (function (_clearTimeout) {
	            function clearTimeout() {
	                return _clearTimeout.apply(this, arguments);
	            }
	
	            clearTimeout.toString = function () {
	                return _clearTimeout.toString();
	            };
	
	            return clearTimeout;
	        })(function () {
	            if (this.timeouteClear != 0) {
	                clearTimeout(this.timeouteClear);
	                this.timeouteClear = 0;
	            }
	        })
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var input = this.refs.inputRef;
	            // input.value = this.props.children||'';
	            input.focus();
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.clearTimeout();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var editable = this.props.editable,
	                format = this.props.format,
	                attr = {
	                ref: "inputRef",
	                onKeyDown: this.handleKeyPress.bind(this),
	                onBlur: this.handleBlur.bind(this)
	            };
	            //put placeholder if exist
	            editable.placeholder && (attr.placeholder = editable.placeholder);
	
	            var editorClass = (0, _classnames2['default'])({ 'animated': this.state.shakeEditor, 'shake': this.state.shakeEditor });
	            return _react2['default'].createElement(
	                'td',
	                { ref: 'td', style: { position: 'relative' } },
	                (0, _Editor2['default'])(editable, attr, format, editorClass, this.props.children || ''),
	                _react2['default'].createElement(_NotificationJs2['default'], { ref: 'notifier' })
	            );
	        }
	    }, {
	        key: '_getCheckBoxValue',
	        value: function _getCheckBoxValue(e) {
	            var value = '';
	            var values = e.currentTarget.value.split(':');
	            value = e.currentTarget.checked ? values[0] : values[1];
	            return value;
	        }
	    }]);
	
	    return TableEditColumn;
	})(_react2['default'].Component);
	
	TableEditColumn.propTypes = {
	    completeEdit: _react2['default'].PropTypes.func,
	    rowIndex: _react2['default'].PropTypes.number,
	    colIndex: _react2['default'].PropTypes.number,
	    blurToSave: _react2['default'].PropTypes.bool
	};
	
	exports['default'] = TableEditColumn;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Editor = function Editor(editable, attr, format, editorClass, defaultValue) {
	
	    if (editable === true || typeof editable === "string") {
	        //simple declare
	        var type = editable === true ? 'text' : editable;
	        return _react2['default'].createElement('input', _extends({}, attr, { type: type, defaultValue: defaultValue,
	            className: (editorClass || "") + " form-control editor edit-text" }));
	    } else if (!editable) {
	        var type = editable === true ? 'text' : editable;
	        return _react2['default'].createElement('input', _extends({}, attr, { type: type, defaultValue: defaultValue, disabled: 'disabled',
	            className: (editorClass || "") + " form-control editor edit-text" }));
	    } else if (editable.type) {
	        //standard declare
	        //put style if exist
	        editable.style && (attr.style = editable.style);
	
	        //put class if exist
	        attr.className = (editorClass || "") + " form-control editor edit-" + editable.type + (editable.className ? " " + editable.className : "");
	
	        if (editable.type === 'select') {
	            //process select input
	            var options = [],
	                values = editable.options.values;
	            if (Array.isArray(values)) {
	                //only can use arrray data for options
	                var rowValue;
	                options = values.map(function (d, i) {
	                    rowValue = format ? format(d) : d;
	                    return _react2['default'].createElement(
	                        'option',
	                        { key: 'option' + i, value: d },
	                        rowValue
	                    );
	                });
	            }
	            return _react2['default'].createElement(
	                'select',
	                _extends({}, attr, { defaultValue: defaultValue }),
	                options
	            );
	        } else if (editable.type === 'textarea') {
	            //process textarea input
	            //put  other if exist
	            editable.cols && (attr.cols = editable.cols);
	            editable.rows && (attr.rows = editable.rows);
	            var keyUpHandler = attr.onKeyDown,
	                saveBtn = null;
	            if (keyUpHandler) {
	                attr.onKeyDown = function (e) {
	                    if (e.keyCode != 13) {
	                        //not Pressed ENTER
	                        keyUpHandler(e);
	                    }
	                };
	                saveBtn = _react2['default'].createElement(
	                    'butto',
	                    { className: 'btn btn-info btn-xs textarea-save-btn', onClick: keyUpHandler },
	                    'save'
	                );
	            }
	
	            return _react2['default'].createElement(
	                'div',
	                null,
	                _react2['default'].createElement('textarea', _extends({}, attr, { defaultValue: defaultValue })),
	                saveBtn
	            );
	        } else if (editable.type === 'checkbox') {
	            var _values = 'true:false';
	            if (editable.options && editable.options.values) {
	                // values = editable.options.values.split(':');
	                _values = editable.options.values;
	            }
	            attr.className = attr.className.replace('form-control', '');
	            attr.className += ' checkbox pull-right';
	
	            var checked = defaultValue && defaultValue.toString() == _values.split(':')[0] ? true : false;
	
	            return _react2['default'].createElement('input', _extends({}, attr, { type: 'checkbox', value: _values, defaultChecked: checked }));
	        } else {
	            //process other input type. as password,url,email...
	            return _react2['default'].createElement('input', _extends({}, attr, { type: type, defaultValue: defaultValue }));
	        }
	    }
	    //default return for other case of editable
	    return _react2['default'].createElement('input', _extends({}, attr, { type: 'text', className: (editorClass || "") + " form-control editor edit-text" }));
	};
	
	exports['default'] = Editor;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var _reactToastr = __webpack_require__(15);
	
	var ToastrMessageFactory = _react2['default'].createFactory(_reactToastr.ToastMessage.animation);
	
	var Notification = (function (_React$Component) {
	  _inherits(Notification, _React$Component);
	
	  function Notification() {
	    _classCallCheck(this, Notification);
	
	    _get(Object.getPrototypeOf(Notification.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Notification, [{
	    key: 'notice',
	
	    // allow type is success,info,warning,error
	    value: function notice(type, msg, title) {
	      this.refs.toastr[type](msg, title, {
	        mode: 'single',
	        timeOut: 5000,
	        extendedTimeOut: 1000,
	        showAnimation: "animated  bounceIn",
	        hideAnimation: "animated bounceOut"
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(_reactToastr.ToastContainer, { ref: 'toastr', toastMessageFactory: ToastrMessageFactory,
	        id: 'toast-container', className: 'toast-top-right' });
	    }
	  }]);
	
	  return Notification;
	})(_react2['default'].Component);
	
	exports['default'] = Notification;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ToastMessage = exports.ToastContainer = undefined;
	
	var _ToastContainer = __webpack_require__(16);
	
	var _ToastContainer2 = _interopRequireDefault(_ToastContainer);
	
	var _ToastMessage = __webpack_require__(23);
	
	var _ToastMessage2 = _interopRequireDefault(_ToastMessage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.ToastContainer = _ToastContainer2.default;
	exports.ToastMessage = _ToastMessage2.default;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsUpdate = __webpack_require__(17);
	
	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);
	
	var _ToastMessage = __webpack_require__(23);
	
	var _ToastMessage2 = _interopRequireDefault(_ToastMessage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ToastContainer = function (_Component) {
	  _inherits(ToastContainer, _Component);
	
	  function ToastContainer() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, ToastContainer);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ToastContainer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      toasts: [],
	      toastId: 0,
	      previousMessage: null
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(ToastContainer, [{
	    key: "error",
	    value: function error(message, title, optionsOverride) {
	      this._notify(this.props.toastType.error, message, title, optionsOverride);
	    }
	  }, {
	    key: "info",
	    value: function info(message, title, optionsOverride) {
	      this._notify(this.props.toastType.info, message, title, optionsOverride);
	    }
	  }, {
	    key: "success",
	    value: function success(message, title, optionsOverride) {
	      this._notify(this.props.toastType.success, message, title, optionsOverride);
	    }
	  }, {
	    key: "warning",
	    value: function warning(message, title, optionsOverride) {
	      this._notify(this.props.toastType.warning, message, title, optionsOverride);
	    }
	  }, {
	    key: "clear",
	    value: function clear() {
	      var _this2 = this;
	
	      Object.keys(this.refs).forEach(function (key) {
	        _this2.refs[key].hideToast(false);
	      });
	    }
	  }, {
	    key: "_notify",
	    value: function _notify(type, message, title) {
	      var _this3 = this;
	
	      var optionsOverride = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
	      if (this.props.preventDuplicates) {
	        if (this.state.previousMessage === message) {
	          return;
	        }
	      }
	      var key = this.state.toastId++;
	      var toastId = key;
	      var newToast = (0, _reactAddonsUpdate2.default)(optionsOverride, {
	        $merge: {
	          type: type,
	          title: title,
	          message: message,
	          toastId: toastId,
	          key: key,
	          ref: "toasts__" + key,
	          handleOnClick: function handleOnClick(e) {
	            if ("function" === typeof optionsOverride.handleOnClick) {
	              optionsOverride.handleOnClick();
	            }
	            return _this3._handle_toast_on_click(e);
	          },
	          handleRemove: this._handle_toast_remove.bind(this)
	        }
	      });
	      var toastOperation = _defineProperty({}, "" + (this.props.newestOnTop ? "$unshift" : "$push"), [newToast]);
	
	      var nextState = (0, _reactAddonsUpdate2.default)(this.state, {
	        toasts: toastOperation,
	        previousMessage: { $set: message }
	      });
	      this.setState(nextState);
	    }
	  }, {
	    key: "_handle_toast_on_click",
	    value: function _handle_toast_on_click(event) {
	      this.props.onClick(event);
	      if (event.defaultPrevented) {
	        return;
	      }
	      event.preventDefault();
	      event.stopPropagation();
	    }
	  }, {
	    key: "_handle_toast_remove",
	    value: function _handle_toast_remove(toastId) {
	      var _this4 = this;
	
	      var operationName = "" + (this.props.newestOnTop ? "reduceRight" : "reduce");
	      this.state.toasts[operationName](function (found, toast, index) {
	        if (found || toast.toastId !== toastId) {
	          return false;
	        }
	        _this4.setState((0, _reactAddonsUpdate2.default)(_this4.state, {
	          toasts: { $splice: [[index, 1]] }
	        }));
	        return true;
	      }, false);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this5 = this;
	
	      return _react2.default.createElement(
	        "div",
	        _extends({}, this.props, { "aria-live": "polite", role: "alert" }),
	        this.state.toasts.map(function (toast) {
	          return _this5.props.toastMessageFactory(toast);
	        })
	      );
	    }
	  }]);
	
	  return ToastContainer;
	}(_react.Component);
	
	ToastContainer.propTypes = {
	  toastType: _react.PropTypes.shape({
	    error: _react.PropTypes.string,
	    info: _react.PropTypes.string,
	    success: _react.PropTypes.string,
	    warning: _react.PropTypes.string
	  }).isRequired,
	  id: _react.PropTypes.string.isRequired,
	  toastMessageFactory: _react.PropTypes.func.isRequired,
	  preventDuplicates: _react.PropTypes.bool.isRequired,
	  newestOnTop: _react.PropTypes.bool.isRequired,
	  onClick: _react.PropTypes.func.isRequired
	};
	ToastContainer.defaultProps = {
	  toastType: {
	    error: "error",
	    info: "info",
	    success: "success",
	    warning: "warning"
	  },
	  id: "toast-container",
	  toastMessageFactory: _react2.default.createFactory(_ToastMessage2.default),
	  preventDuplicates: false,
	  newestOnTop: true,
	  onClick: function onClick() {}
	};
	exports.default = ToastContainer;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(18);

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule update
	 */
	
	/* global hasOwnProperty:true */
	
	'use strict';
	
	var assign = __webpack_require__(20);
	var keyOf = __webpack_require__(21);
	var invariant = __webpack_require__(22);
	var hasOwnProperty = ({}).hasOwnProperty;
	
	function shallowCopy(x) {
	  if (Array.isArray(x)) {
	    return x.concat();
	  } else if (x && typeof x === 'object') {
	    return assign(new x.constructor(), x);
	  } else {
	    return x;
	  }
	}
	
	var COMMAND_PUSH = keyOf({ $push: null });
	var COMMAND_UNSHIFT = keyOf({ $unshift: null });
	var COMMAND_SPLICE = keyOf({ $splice: null });
	var COMMAND_SET = keyOf({ $set: null });
	var COMMAND_MERGE = keyOf({ $merge: null });
	var COMMAND_APPLY = keyOf({ $apply: null });
	
	var ALL_COMMANDS_LIST = [COMMAND_PUSH, COMMAND_UNSHIFT, COMMAND_SPLICE, COMMAND_SET, COMMAND_MERGE, COMMAND_APPLY];
	
	var ALL_COMMANDS_SET = {};
	
	ALL_COMMANDS_LIST.forEach(function (command) {
	  ALL_COMMANDS_SET[command] = true;
	});
	
	function invariantArrayCase(value, spec, command) {
	  !Array.isArray(value) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected target of %s to be an array; got %s.', command, value) : invariant(false) : undefined;
	  var specValue = spec[command];
	  !Array.isArray(specValue) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array; got %s. ' + 'Did you forget to wrap your parameter in an array?', command, specValue) : invariant(false) : undefined;
	}
	
	function update(value, spec) {
	  !(typeof spec === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): You provided a key path to update() that did not contain one ' + 'of %s. Did you forget to include {%s: ...}?', ALL_COMMANDS_LIST.join(', '), COMMAND_SET) : invariant(false) : undefined;
	
	  if (hasOwnProperty.call(spec, COMMAND_SET)) {
	    !(Object.keys(spec).length === 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot have more than one key in an object with %s', COMMAND_SET) : invariant(false) : undefined;
	
	    return spec[COMMAND_SET];
	  }
	
	  var nextValue = shallowCopy(value);
	
	  if (hasOwnProperty.call(spec, COMMAND_MERGE)) {
	    var mergeObj = spec[COMMAND_MERGE];
	    !(mergeObj && typeof mergeObj === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): %s expects a spec of type \'object\'; got %s', COMMAND_MERGE, mergeObj) : invariant(false) : undefined;
	    !(nextValue && typeof nextValue === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): %s expects a target of type \'object\'; got %s', COMMAND_MERGE, nextValue) : invariant(false) : undefined;
	    assign(nextValue, spec[COMMAND_MERGE]);
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_PUSH)) {
	    invariantArrayCase(value, spec, COMMAND_PUSH);
	    spec[COMMAND_PUSH].forEach(function (item) {
	      nextValue.push(item);
	    });
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_UNSHIFT)) {
	    invariantArrayCase(value, spec, COMMAND_UNSHIFT);
	    spec[COMMAND_UNSHIFT].forEach(function (item) {
	      nextValue.unshift(item);
	    });
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_SPLICE)) {
	    !Array.isArray(value) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected %s target to be an array; got %s', COMMAND_SPLICE, value) : invariant(false) : undefined;
	    !Array.isArray(spec[COMMAND_SPLICE]) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. ' + 'Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : invariant(false) : undefined;
	    spec[COMMAND_SPLICE].forEach(function (args) {
	      !Array.isArray(args) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. ' + 'Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : invariant(false) : undefined;
	      nextValue.splice.apply(nextValue, args);
	    });
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_APPLY)) {
	    !(typeof spec[COMMAND_APPLY] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be a function; got %s.', COMMAND_APPLY, spec[COMMAND_APPLY]) : invariant(false) : undefined;
	    nextValue = spec[COMMAND_APPLY](nextValue);
	  }
	
	  for (var k in spec) {
	    if (!(ALL_COMMANDS_SET.hasOwnProperty(k) && ALL_COMMANDS_SET[k])) {
	      nextValue[k] = update(value[k], spec[k]);
	    }
	  }
	
	  return nextValue;
	}
	
	module.exports = update;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ },
/* 19 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 20 */
/***/ function(module, exports) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Object.assign
	 */
	
	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign
	
	'use strict';
	
	function assign(target, sources) {
	  if (target == null) {
	    throw new TypeError('Object.assign target cannot be null or undefined');
	  }
	
	  var to = Object(target);
	  var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	  for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
	    var nextSource = arguments[nextIndex];
	    if (nextSource == null) {
	      continue;
	    }
	
	    var from = Object(nextSource);
	
	    // We don't currently support accessors nor proxies. Therefore this
	    // copy cannot throw. If we ever supported this then we must handle
	    // exceptions and side-effects. We don't support symbols so they won't
	    // be transferred.
	
	    for (var key in from) {
	      if (hasOwnProperty.call(from, key)) {
	        to[key] = from[key];
	      }
	    }
	  }
	
	  return to;
	}
	
	module.exports = assign;

/***/ },
/* 21 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyOf
	 */
	
	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without losing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */
	"use strict";
	
	var keyOf = function (oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};
	
	module.exports = keyOf;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	function invariant(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}
	
	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.jQuery = exports.animation = undefined;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsUpdate = __webpack_require__(17);
	
	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _animationMixin = __webpack_require__(24);
	
	var _animationMixin2 = _interopRequireDefault(_animationMixin);
	
	var _jQueryMixin = __webpack_require__(28);
	
	var _jQueryMixin2 = _interopRequireDefault(_jQueryMixin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function noop() {}
	
	var ToastMessageSpec = {
	  displayName: "ToastMessage",
	
	  getDefaultProps: function getDefaultProps() {
	    var iconClassNames = {
	      error: "toast-error",
	      info: "toast-info",
	      success: "toast-success",
	      warning: "toast-warning"
	    };
	
	    return {
	      className: "toast",
	      iconClassNames: iconClassNames,
	      titleClassName: "toast-title",
	      messageClassName: "toast-message",
	      tapToDismiss: true,
	      closeButton: false
	    };
	  },
	  handleOnClick: function handleOnClick(event) {
	    this.props.handleOnClick(event);
	    if (this.props.tapToDismiss) {
	      this.hideToast(true);
	    }
	  },
	  _handle_close_button_click: function _handle_close_button_click(event) {
	    event.stopPropagation();
	    this.hideToast(true);
	  },
	  _handle_remove: function _handle_remove() {
	    this.props.handleRemove(this.props.toastId);
	  },
	  _render_close_button: function _render_close_button() {
	    return this.props.closeButton ? _react2.default.createElement("button", {
	      className: "toast-close-button", role: "button",
	      onClick: this._handle_close_button_click,
	      dangerouslySetInnerHTML: { __html: "&times;" }
	    }) : false;
	  },
	  _render_title_element: function _render_title_element() {
	    return this.props.title ? _react2.default.createElement(
	      "div",
	      { className: this.props.titleClassName },
	      this.props.title
	    ) : false;
	  },
	  _render_message_element: function _render_message_element() {
	    return this.props.message ? _react2.default.createElement(
	      "div",
	      { className: this.props.messageClassName },
	      this.props.message
	    ) : false;
	  },
	  render: function render() {
	    var iconClassName = this.props.iconClassName || this.props.iconClassNames[this.props.type];
	
	    return _react2.default.createElement(
	      "div",
	      {
	        className: (0, _classnames2.default)(this.props.className, iconClassName),
	        style: this.props.style,
	        onClick: this.handleOnClick,
	        onMouseEnter: this.handleMouseEnter,
	        onMouseLeave: this.handleMouseLeave
	      },
	      this._render_close_button(),
	      this._render_title_element(),
	      this._render_message_element()
	    );
	  }
	};
	
	var animation = exports.animation = _react2.default.createClass((0, _reactAddonsUpdate2.default)(ToastMessageSpec, {
	  displayName: { $set: "ToastMessage.animation" },
	  mixins: { $set: [_animationMixin2.default] }
	}));
	
	var jQuery = exports.jQuery = _react2.default.createClass((0, _reactAddonsUpdate2.default)(ToastMessageSpec, {
	  displayName: { $set: "ToastMessage.jQuery" },
	  mixins: { $set: [_jQueryMixin2.default] }
	}));
	
	/*
	 * assign default noop functions
	 */
	ToastMessageSpec.handleMouseEnter = noop;
	ToastMessageSpec.handleMouseLeave = noop;
	ToastMessageSpec.hideToast = noop;
	
	var ToastMessage = _react2.default.createClass(ToastMessageSpec);
	
	ToastMessage.animation = animation;
	ToastMessage.jQuery = jQuery;
	
	exports.default = ToastMessage;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ReactTransitionEvents = __webpack_require__(25);
	
	var _ReactTransitionEvents2 = _interopRequireDefault(_ReactTransitionEvents);
	
	var _reactDom = __webpack_require__(6);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _elementClass = __webpack_require__(27);
	
	var _elementClass2 = _interopRequireDefault(_elementClass);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TICK = 17;
	var toString = Object.prototype.toString;
	exports.default = {
	  getDefaultProps: function getDefaultProps() {
	    return {
	      transition: null, // some examples defined in index.scss (scale, fadeInOut, rotate)
	      showAnimation: "animated bounceIn", // or other animations from animate.css
	      hideAnimation: "animated bounceOut",
	      timeOut: 5000,
	      extendedTimeOut: 1000
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    this.classNameQueue = [];
	    this.isHiding = false;
	    this.intervalId = null;
	  },
	  componentDidMount: function componentDidMount() {
	    var _this = this;
	
	    this._is_mounted = true;
	    this._show();
	    var node = _reactDom2.default.findDOMNode(this);
	
	    var onHideComplete = function onHideComplete() {
	      if (_this.isHiding) {
	        _this._set_is_hiding(false);
	        _ReactTransitionEvents2.default.removeEndEventListener(node, onHideComplete);
	        _this._handle_remove();
	      }
	    };
	    _ReactTransitionEvents2.default.addEndEventListener(node, onHideComplete);
	
	    if (this.props.timeOut > 0) {
	      this._set_interval_id(setTimeout(this.hideToast, this.props.timeOut));
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this._is_mounted = false;
	    if (this.intervalId) {
	      clearTimeout(this.intervalId);
	    }
	  },
	  _set_transition: function _set_transition(hide) {
	    var animationType = hide ? "leave" : "enter";
	    var node = _reactDom2.default.findDOMNode(this);
	    var className = this.props.transition + "-" + animationType;
	    var activeClassName = className + "-active";
	
	    var endListener = function endListener(e) {
	      if (e && e.target !== node) {
	        return;
	      }
	
	      var classList = (0, _elementClass2.default)(node);
	      classList.remove(className);
	      classList.remove(activeClassName);
	
	      _ReactTransitionEvents2.default.removeEndEventListener(node, endListener);
	    };
	
	    _ReactTransitionEvents2.default.addEndEventListener(node, endListener);
	
	    (0, _elementClass2.default)(node).add(className);
	
	    // Need to do this to actually trigger a transition.
	    this._queue_class(activeClassName);
	  },
	  _clear_transition: function _clear_transition(hide) {
	    var node = _reactDom2.default.findDOMNode(this);
	    var animationType = hide ? "leave" : "enter";
	    var className = this.props.transition + "-" + animationType;
	    var activeClassName = className + "-active";
	
	    var classList = (0, _elementClass2.default)(node);
	    classList.remove(className);
	    classList.remove(activeClassName);
	  },
	  _set_animation: function _set_animation(hide) {
	    var node = _reactDom2.default.findDOMNode(this);
	    var animations = this._get_animation_classes(hide);
	    var endListener = function endListener(e) {
	      if (e && e.target !== node) {
	        return;
	      }
	
	      animations.forEach(function (anim) {
	        return (0, _elementClass2.default)(node).remove(anim);
	      });
	
	      _ReactTransitionEvents2.default.removeEndEventListener(node, endListener);
	    };
	
	    _ReactTransitionEvents2.default.addEndEventListener(node, endListener);
	
	    animations.forEach(function (anim) {
	      return (0, _elementClass2.default)(node).add(anim);
	    });
	  },
	  _get_animation_classes: function _get_animation_classes(hide) {
	    var animations = hide ? this.props.hideAnimation : this.props.showAnimation;
	    if ("[object Array]" === toString.call(animations)) {
	      return animations;
	    } else if ("string" === typeof animations) {
	      return animations.split(" ");
	    }
	  },
	  _clear_animation: function _clear_animation(hide) {
	    var node = _reactDom2.default.findDOMNode(this);
	    var animations = this._get_animation_classes(hide);
	    animations.forEach(function (animation) {
	      return (0, _elementClass2.default)(node).remove(animation);
	    });
	  },
	  _queue_class: function _queue_class(className) {
	    this.classNameQueue.push(className);
	
	    if (!this.timeout) {
	      this.timeout = setTimeout(this._flush_class_name_queue, TICK);
	    }
	  },
	  _flush_class_name_queue: function _flush_class_name_queue() {
	    var _this2 = this;
	
	    if (this._is_mounted) {
	      (function () {
	        var node = _reactDom2.default.findDOMNode(_this2);
	        _this2.classNameQueue.forEach(function (className) {
	          return (0, _elementClass2.default)(node).add(className);
	        });
	      })();
	    }
	    this.classNameQueue.length = 0;
	    this.timeout = null;
	  },
	  _show: function _show() {
	    if (this.props.transition) {
	      this._set_transition();
	    } else if (this.props.showAnimation) {
	      this._set_animation();
	    }
	  },
	  handleMouseEnter: function handleMouseEnter() {
	    clearTimeout(this.intervalId);
	    this._set_interval_id(null);
	    if (this.isHiding) {
	      this._set_is_hiding(false);
	
	      if (this.props.hideAnimation) {
	        this._clear_animation(true);
	      } else if (this.props.transition) {
	        this._clear_transition(true);
	      }
	    }
	  },
	  handleMouseLeave: function handleMouseLeave() {
	    if (!this.isHiding && (this.props.timeOut > 0 || this.props.extendedTimeOut > 0)) {
	      this._set_interval_id(setTimeout(this.hideToast, this.props.extendedTimeOut));
	    }
	  },
	  hideToast: function hideToast(override) {
	    if (this.isHiding || this.intervalId === null && !override) {
	      return;
	    }
	
	    this._set_is_hiding(true);
	    if (this.props.transition) {
	      this._set_transition(true);
	    } else if (this.props.hideAnimation) {
	      this._set_animation(true);
	    } else {
	      this._handle_remove();
	    }
	  },
	  _set_interval_id: function _set_interval_id(intervalId) {
	    this.intervalId = intervalId;
	  },
	  _set_is_hiding: function _set_is_hiding(isHiding) {
	    this.isHiding = isHiding;
	  }
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionEvents
	 */
	
	'use strict';
	
	var ExecutionEnvironment = __webpack_require__(26);
	
	/**
	 * EVENT_NAME_MAP is used to determine which event fired when a
	 * transition/animation ends, based on the style property used to
	 * define that event.
	 */
	var EVENT_NAME_MAP = {
	  transitionend: {
	    'transition': 'transitionend',
	    'WebkitTransition': 'webkitTransitionEnd',
	    'MozTransition': 'mozTransitionEnd',
	    'OTransition': 'oTransitionEnd',
	    'msTransition': 'MSTransitionEnd'
	  },
	
	  animationend: {
	    'animation': 'animationend',
	    'WebkitAnimation': 'webkitAnimationEnd',
	    'MozAnimation': 'mozAnimationEnd',
	    'OAnimation': 'oAnimationEnd',
	    'msAnimation': 'MSAnimationEnd'
	  }
	};
	
	var endEvents = [];
	
	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;
	
	  // On some platforms, in particular some releases of Android 4.x,
	  // the un-prefixed "animation" and "transition" properties are defined on the
	  // style object but the events that fire will still be prefixed, so we need
	  // to check if the un-prefixed events are useable, and if not remove them
	  // from the map
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }
	
	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }
	
	  for (var baseEventName in EVENT_NAME_MAP) {
	    var baseEvents = EVENT_NAME_MAP[baseEventName];
	    for (var styleName in baseEvents) {
	      if (styleName in style) {
	        endEvents.push(baseEvents[styleName]);
	        break;
	      }
	    }
	  }
	}
	
	if (ExecutionEnvironment.canUseDOM) {
	  detectEvents();
	}
	
	// We use the raw {add|remove}EventListener() call because EventListener
	// does not know how to remove event listeners and we really should
	// clean up. Also, these events are not triggered in older browsers
	// so we should be A-OK here.
	
	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}
	
	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}
	
	var ReactTransitionEvents = {
	  addEndEventListener: function (node, eventListener) {
	    if (endEvents.length === 0) {
	      // If CSS transitions are not supported, trigger an "end animation"
	      // event immediately.
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },
	
	  removeEndEventListener: function (node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};
	
	module.exports = ReactTransitionEvents;

/***/ },
/* 26 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ExecutionEnvironment
	 */
	
	'use strict';
	
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	
	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {
	
	  canUseDOM: canUseDOM,
	
	  canUseWorkers: typeof Worker !== 'undefined',
	
	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
	
	  canUseViewport: canUseDOM && !!window.screen,
	
	  isInWorker: !canUseDOM // For now, this is true - might change in the future.
	
	};
	
	module.exports = ExecutionEnvironment;

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = function(opts) {
	  return new ElementClass(opts)
	}
	
	function indexOf(arr, prop) {
	  if (arr.indexOf) return arr.indexOf(prop)
	  for (var i = 0, len = arr.length; i < len; i++)
	    if (arr[i] === prop) return i
	  return -1
	}
	
	function ElementClass(opts) {
	  if (!(this instanceof ElementClass)) return new ElementClass(opts)
	  var self = this
	  if (!opts) opts = {}
	
	  // similar doing instanceof HTMLElement but works in IE8
	  if (opts.nodeType) opts = {el: opts}
	
	  this.opts = opts
	  this.el = opts.el || document.body
	  if (typeof this.el !== 'object') this.el = document.querySelector(this.el)
	}
	
	ElementClass.prototype.add = function(className) {
	  var el = this.el
	  if (!el) return
	  if (el.className === "") return el.className = className
	  var classes = el.className.split(' ')
	  if (indexOf(classes, className) > -1) return classes
	  classes.push(className)
	  el.className = classes.join(' ')
	  return classes
	}
	
	ElementClass.prototype.remove = function(className) {
	  var el = this.el
	  if (!el) return
	  if (el.className === "") return
	  var classes = el.className.split(' ')
	  var idx = indexOf(classes, className)
	  if (idx > -1) classes.splice(idx, 1)
	  el.className = classes.join(' ')
	  return classes
	}
	
	ElementClass.prototype.has = function(className) {
	  var el = this.el
	  if (!el) return
	  var classes = el.className.split(' ')
	  return indexOf(classes, className) > -1
	}
	
	ElementClass.prototype.toggle = function(className) {
	  var el = this.el
	  if (!el) return
	  if (this.has(className)) this.remove(className)
	  else this.add(className)
	}


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactDom = __webpack_require__(6);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function call_show_method($node, props) {
	  $node[props.showMethod]({
	    duration: props.showDuration,
	    easing: props.showEasing
	  });
	}
	
	exports.default = {
	  getDefaultProps: function getDefaultProps() {
	    return {
	      style: {
	        display: "none" },
	      // effective $.hide()
	      showMethod: "fadeIn", // slideDown, and show are built into jQuery
	      showDuration: 300,
	      showEasing: "swing", // and linear are built into jQuery
	      hideMethod: "fadeOut",
	      hideDuration: 1000,
	      hideEasing: "swing",
	      //
	      timeOut: 5000,
	      extendedTimeOut: 1000
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      intervalId: null,
	      isHiding: false
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    call_show_method(this._get_$_node(), this.props);
	    if (this.props.timeOut > 0) {
	      this._set_interval_id(setTimeout(this.hideToast, this.props.timeOut));
	    }
	  },
	  handleMouseEnter: function handleMouseEnter() {
	    clearTimeout(this.state.intervalId);
	    this._set_interval_id(null);
	    this._set_is_hiding(false);
	
	    call_show_method(this._get_$_node().stop(true, true), this.props);
	  },
	  handleMouseLeave: function handleMouseLeave() {
	    if (!this.state.isHiding && (this.props.timeOut > 0 || this.props.extendedTimeOut > 0)) {
	      this._set_interval_id(setTimeout(this.hideToast, this.props.extendedTimeOut));
	    }
	  },
	  hideToast: function hideToast(override) {
	    if (this.state.isHiding || this.state.intervalId === null && !override) {
	      return;
	    }
	    this.setState({ isHiding: true });
	
	    this._get_$_node()[this.props.hideMethod]({
	      duration: this.props.hideDuration,
	      easing: this.props.hideEasing,
	      complete: this._handle_remove
	    });
	  },
	  _get_$_node: function _get_$_node() {
	    /* eslint-disable no-undef */
	    return jQuery(_reactDom2.default.findDOMNode(this));
	    /* eslint-enable no-undef */
	  },
	  _set_interval_id: function _set_interval_id(intervalId) {
	    this.setState({
	      intervalId: intervalId
	    });
	  },
	  _set_is_hiding: function _set_is_hiding(isHiding) {
	    this.setState({
	      isHiding: isHiding
	    });
	  }
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _PageButtonJs = __webpack_require__(30);
	
	var _PageButtonJs2 = _interopRequireDefault(_PageButtonJs);
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var PaginationList = (function (_React$Component) {
	  _inherits(PaginationList, _React$Component);
	
	  function PaginationList(props) {
	    _classCallCheck(this, PaginationList);
	
	    _get(Object.getPrototypeOf(PaginationList.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      currentPage: this.props.currPage,
	      sizePerPage: this.props.sizePerPage
	    };
	  }
	
	  _createClass(PaginationList, [{
	    key: 'changePage',
	    value: function changePage(page) {
	      if (page == this.props.prePage) {
	        page = this.state.currentPage - 1 < 1 ? 1 : this.state.currentPage - 1;
	      } else if (page == this.props.nextPage) {
	        page = this.state.currentPage + 1 > this.totalPages ? this.totalPages : this.state.currentPage + 1;
	      } else if (page == this.props.lastPage) {
	        page = this.totalPages;
	      } else if (page == this.props.firstPage) {
	        page = 1;
	      } else {
	        page = parseInt(page);
	      }
	
	      if (page != this.state.currentPage) {
	        this.setState({ currentPage: page });
	        this.props.changePage(page, this.state.sizePerPage);
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (this.props.remote) {
	        if (nextProps.currPage || nextProps.sizePerPage) {
	          this.setState({
	            currentPage: nextProps.currPage,
	            sizePerPage: nextProps.sizePerPage
	          });
	        }
	      }
	    }
	  }, {
	    key: 'changeSizePerPage',
	    value: function changeSizePerPage(e) {
	      e.preventDefault();
	
	      var selectSize = parseInt(e.currentTarget.text);
	      if (selectSize != this.state.sizePerPage) {
	        this.totalPages = Math.ceil(this.props.dataSize / selectSize);
	        if (this.state.currentPage > this.totalPages) this.state.currentPage = this.totalPages;
	
	        this.setState({
	          sizePerPage: selectSize,
	          currentPage: this.state.currentPage
	        });
	        this.props.changePage(this.state.currentPage, selectSize);
	        if (this.props.onSizePerPageList) {
	          this.props.onSizePerPageList(selectSize);
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      this.totalPages = Math.ceil(this.props.dataSize / this.state.sizePerPage);
	      var pageBtns = this.makePage();
	      var pageListStyle = {
	        float: "right",
	        marginTop: "0px" //override the margin-top defined in .pagination class in bootstrap.
	      };
	
	      var sizePerPageList = this.props.sizePerPageList.map(function (sizePerPage) {
	        return _react2['default'].createElement(
	          'li',
	          { key: sizePerPage, role: 'presentation' },
	          _react2['default'].createElement(
	            'a',
	            { role: 'menuitem', tabIndex: '-1', href: '#', onClick: _this.changeSizePerPage.bind(_this) },
	            sizePerPage
	          )
	        );
	      });
	
	      return _react2['default'].createElement(
	        'div',
	        { className: 'row', style: { marginTop: 15 } },
	        _react2['default'].createElement(
	          'div',
	          { className: 'col-md-6' },
	          this.props.sizePerPageList.length > 1 ? _react2['default'].createElement(
	            'div',
	            { className: 'dropdown' },
	            _react2['default'].createElement(
	              'button',
	              { className: 'btn btn-default dropdown-toggle', type: 'button', id: 'pageDropDown', 'data-toggle': 'dropdown',
	                'aria-expanded': 'true' },
	              this.state.sizePerPage,
	              _react2['default'].createElement(
	                'span',
	                null,
	                " ",
	                _react2['default'].createElement('span', { className: 'caret' })
	              )
	            ),
	            _react2['default'].createElement(
	              'ul',
	              { className: 'dropdown-menu', role: 'menu', 'aria-labelledby': 'pageDropDown' },
	              sizePerPageList
	            )
	          ) : ""
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'col-md-6' },
	          _react2['default'].createElement(
	            'ul',
	            { className: 'pagination', style: pageListStyle },
	            pageBtns
	          )
	        )
	      );
	    }
	  }, {
	    key: 'makePage',
	    value: function makePage() {
	      var pages = this.getPages();
	      return pages.map(function (page) {
	        var isActive = page === this.state.currentPage;
	        var disabled = false;
	        var hidden = false;
	        if (this.state.currentPage == 1 && (page === this.props.firstPage || page === this.props.prePage)) {
	          disabled = true;
	          hidden = true;
	        }
	        if (this.state.currentPage == this.totalPages && (page === this.props.nextPage || page === this.props.lastPage)) {
	          disabled = true;
	          hidden = true;
	        }
	        return _react2['default'].createElement(
	          _PageButtonJs2['default'],
	          { changePage: this.changePage.bind(this), active: isActive, disable: disabled, hidden: hidden, key: page },
	          page
	        );
	      }, this);
	    }
	  }, {
	    key: 'getPages',
	    value: function getPages() {
	      var startPage = 1,
	          endPage = this.totalPages;
	
	      startPage = Math.max(this.state.currentPage - Math.floor(this.props.paginationSize / 2), 1);
	      endPage = startPage + this.props.paginationSize - 1;
	
	      if (endPage > this.totalPages) {
	        endPage = this.totalPages;
	        startPage = endPage - this.props.paginationSize + 1;
	      }
	      var pages;
	      if (startPage != 1 && this.totalPages > this.props.paginationSize) {
	        pages = [this.props.firstPage, this.props.prePage];
	      } else if (this.totalPages > 1) {
	        pages = [this.props.prePage];
	      } else {
	        pages = [];
	      }
	      for (var i = startPage; i <= endPage; i++) {
	        if (i > 0) pages.push(i);
	      }
	      if (endPage != this.totalPages) {
	        pages.push(this.props.nextPage);
	        pages.push(this.props.lastPage);
	      } else if (this.totalPages > 1) {
	        pages.push(this.props.nextPage);
	      }
	      return pages;
	    }
	  }, {
	    key: 'getCurrentPage',
	    value: function getCurrentPage() {
	      return this.state.currentPage;
	    }
	  }, {
	    key: 'getSizePerPage',
	    value: function getSizePerPage() {
	      return this.state.sizePerPage;
	    }
	  }]);
	
	  return PaginationList;
	})(_react2['default'].Component);
	
	PaginationList.propTypes = {
	  currPage: _react2['default'].PropTypes.number,
	  sizePerPage: _react2['default'].PropTypes.number,
	  dataSize: _react2['default'].PropTypes.number,
	  changePage: _react2['default'].PropTypes.func,
	  sizePerPageList: _react2['default'].PropTypes.array,
	  paginationSize: _react2['default'].PropTypes.number,
	  remote: _react2['default'].PropTypes.bool,
	  onSizePerPageList: _react2['default'].PropTypes.func,
	  prePage: _react2['default'].PropTypes.string
	};
	
	PaginationList.defaultProps = {
	  sizePerPage: _Const2['default'].SIZE_PER_PAGE
	};
	
	exports['default'] = PaginationList;
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var PageButton = (function (_React$Component) {
	  _inherits(PageButton, _React$Component);
	
	  function PageButton(props) {
	    _classCallCheck(this, PageButton);
	
	    _get(Object.getPrototypeOf(PageButton.prototype), 'constructor', this).call(this, props);
	  }
	
	  _createClass(PageButton, [{
	    key: 'pageBtnClick',
	    value: function pageBtnClick(e) {
	      e.preventDefault();
	      this.props.changePage(e.currentTarget.text);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var classes = (0, _classnames2['default'])({
	        'active': this.props.active,
	        'disabled': this.props.disable,
	        'hidden': this.props.hidden
	      });
	      return _react2['default'].createElement(
	        'li',
	        { className: classes },
	        _react2['default'].createElement(
	          'a',
	          { href: '#', onClick: this.pageBtnClick.bind(this) },
	          this.props.children
	        )
	      );
	    }
	  }]);
	
	  return PageButton;
	})(_react2['default'].Component);
	
	PageButton.propTypes = {
	  changePage: _react2['default'].PropTypes.func,
	  active: _react2['default'].PropTypes.bool,
	  disable: _react2['default'].PropTypes.bool
	};
	
	exports['default'] = PageButton;
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var _Editor = __webpack_require__(13);
	
	var _Editor2 = _interopRequireDefault(_Editor);
	
	var _NotificationJs = __webpack_require__(14);
	
	var _NotificationJs2 = _interopRequireDefault(_NotificationJs);
	
	var ToolBar = (function (_React$Component) {
	  _inherits(ToolBar, _React$Component);
	
	  function ToolBar(props) {
	    var _this = this;
	
	    _classCallCheck(this, ToolBar);
	
	    _get(Object.getPrototypeOf(ToolBar.prototype), 'constructor', this).call(this, props);
	
	    this.handleShowOnlyToggle = function (e) {
	      _this.setState({
	        showSelected: !_this.state.showSelected
	      });
	      _this.props.onShowOnlySelected();
	    };
	
	    this.handleClearBtnClick = function () {
	      _this.refs.seachInput.value = '';
	      _this.props.onSearch('');
	    };
	
	    this.timeouteClear = 0;
	    this.state = {
	      isInsertRowTrigger: true,
	      validateState: null,
	      shakeEditor: false,
	      showSelected: false
	    };
	  }
	
	  _createClass(ToolBar, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.clearTimeout();
	    }
	  }, {
	    key: 'clearTimeout',
	    value: (function (_clearTimeout) {
	      function clearTimeout() {
	        return _clearTimeout.apply(this, arguments);
	      }
	
	      clearTimeout.toString = function () {
	        return _clearTimeout.toString();
	      };
	
	      return clearTimeout;
	    })(function () {
	      if (this.timeouteClear) {
	        clearTimeout(this.timeouteClear);
	        this.timeouteClear = 0;
	      }
	    })
	  }, {
	    key: 'checkAndParseForm',
	    value: function checkAndParseForm() {
	      var ts = this,
	          newObj = {},
	          isValid = true,
	          tempValue,
	          tempMsg,
	          validateState = {};
	      this.props.columns.forEach(function (column, i) {
	        if (column.autoValue) {
	          //when you want same auto generate value and not allow edit, example ID field
	          tempValue = typeof column.autoValue == 'function' ? column.autoValue() : 'autovalue-' + new Date().getTime();
	        } else {
	          var dom = this.refs[column.field + i];
	          tempValue = dom.value;
	
	          if (column.editable && column.editable.type == 'checkbox') {
	            var values = dom.value.split(':');
	            tempValue = dom.checked ? values[0] : values[1];
	          }
	
	          if (column.editable && column.editable.validator) {
	            //process validate
	            tempMsg = column.editable.validator(tempValue);
	            if (tempMsg !== true) {
	              isValid = false;
	              validateState[column.field] = tempMsg;
	            }
	          }
	        }
	
	        newObj[column.field] = tempValue;
	      }, this);
	
	      if (isValid) {
	        return newObj;
	      } else {
	        ts.clearTimeout();
	        //show error in form and shake it
	        this.setState({ validateState: validateState, shakeEditor: true });
	        //notifier error
	        ts.refs.notifier.notice('error', "Form validate errors, please checking!", "Pressed ESC can cancel");
	        //clear animate class
	        ts.timeouteClear = setTimeout(function () {
	          ts.setState({ shakeEditor: false });
	        }, 300);
	        return null;
	      }
	    }
	  }, {
	    key: 'handleSaveBtnClick',
	    value: function handleSaveBtnClick(e) {
	      var newObj = this.checkAndParseForm();
	      if (!newObj) {
	        //validate errors
	        return;
	      }
	      var msg = this.props.onAddRow(newObj);
	      if (msg) {
	        var ts = this;
	        ts.refs.notifier.notice('error', msg, "Pressed ESC can cancel");
	        ts.clearTimeout();
	        //shake form and hack prevent modal hide
	        ts.setState({ shakeEditor: true, validateState: "this is hack for prevent bootstrap modal hide" });
	        //clear animate class
	        ts.timeouteClear = setTimeout(function () {
	          ts.setState({ shakeEditor: false });
	        }, 300);
	      } else {
	        //reset state and hide modal hide
	        this.setState({
	          validateState: null,
	          shakeEditor: false
	        });
	        //reset form
	        this.refs.form.reset();
	      }
	    }
	  }, {
	    key: 'handleDropRowBtnClick',
	    value: function handleDropRowBtnClick(e) {
	      this.props.onDropRow();
	    }
	  }, {
	    key: 'handleCloseBtn',
	    value: function handleCloseBtn(e) {
	      this.refs.warning.style.display = "none";
	    }
	  }, {
	    key: 'handleKeyUp',
	    value: function handleKeyUp(e) {
	      this.props.onSearch(e.currentTarget.value);
	    }
	  }, {
	    key: 'handleExportCSV',
	    value: function handleExportCSV() {
	      this.props.onExportCSV();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var modalClassName = "bs-table-modal-sm" + new Date().getTime();
	      var insertBtn = this.props.enableInsert ? _react2['default'].createElement(
	        'button',
	        { type: 'button', onClick: this.props.onAddRowBegin, className: 'btn btn-info react-bs-table-add-btn', 'data-toggle': 'modal', 'data-target': '.' + modalClassName },
	        _react2['default'].createElement('i', { className: 'glyphicon glyphicon-plus' }),
	        ' New'
	      ) : null;
	
	      var deleteBtn = this.props.enableDelete ? _react2['default'].createElement(
	        'button',
	        { type: 'button', className: 'btn btn-warning react-bs-table-del-btn', 'data-toggle': 'tooltip', 'data-placement': 'right', title: 'Drop selected row',
	          onClick: this.handleDropRowBtnClick.bind(this) },
	        _react2['default'].createElement('i', { className: 'glyphicon glyphicon-trash' }),
	        ' Delete'
	      ) : null;
	
	      var searchTextInput = this.renderSearchPanel();
	
	      var showSelectedOnlyBtn = this.props.enableShowOnlySelected ? _react2['default'].createElement(
	        'button',
	        { type: 'button', onClick: this.handleShowOnlyToggle.bind(this), className: 'btn btn-primary', 'data-toggle': 'button', 'aria-pressed': 'false' },
	        this.state.showSelected ? _Const2['default'].SHOW_ALL : _Const2['default'].SHOW_ONLY_SELECT
	      ) : null;
	
	      var modal = this.props.enableInsert ? this.renderInsertRowModal(modalClassName) : null;
	      var warningStyle = {
	        display: "none",
	        marginBottom: 0
	      };
	
	      var exportCSV = this.props.enableExportCSV ? _react2['default'].createElement(
	        'button',
	        { type: 'button', className: 'btn btn-success', onClick: this.handleExportCSV.bind(this) },
	        _react2['default'].createElement('i', { className: 'glyphicon glyphicon-export' }),
	        ' Export to CSV'
	      ) : null;
	
	      return _react2['default'].createElement(
	        'div',
	        { className: 'row' },
	        _react2['default'].createElement(
	          'div',
	          { className: 'col-xs-12 col-sm-6 col-md-6 col-lg-8' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'btn-group btn-group-sm', role: 'group' },
	            exportCSV,
	            insertBtn,
	            deleteBtn,
	            showSelectedOnlyBtn
	          )
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'col-xs-12 col-sm-6 col-md-6 col-lg-4' },
	          searchTextInput
	        ),
	        _react2['default'].createElement(_NotificationJs2['default'], { ref: 'notifier' }),
	        modal
	      );
	    }
	  }, {
	    key: 'renderSearchPanel',
	    value: function renderSearchPanel() {
	      if (this.props.enableSearch) {
	        var classNames = 'form-group form-group-sm';
	        var clearBtn = null;
	        if (this.props.clearSearch) {
	          clearBtn = _react2['default'].createElement(
	            'span',
	            { className: 'input-group-btn' },
	            _react2['default'].createElement(
	              'button',
	              {
	                className: 'btn btn-default',
	                type: 'button',
	                onClick: this.handleClearBtnClick },
	              'Clear'
	            )
	          );
	          classNames = 'form-group form-group-sm input-group input-group-sm';
	        }
	
	        return _react2['default'].createElement(
	          'div',
	          { className: classNames },
	          _react2['default'].createElement('input', { ref: 'seachInput', className: 'form-control', type: 'text',
	            placeholder: this.props.searchPlaceholder ? this.props.searchPlaceholder : 'Search',
	            onKeyUp: this.handleKeyUp.bind(this) }),
	          clearBtn
	        );
	      } else {
	        return null;
	      }
	    }
	  }, {
	    key: 'renderInsertRowModal',
	    value: function renderInsertRowModal(modalClassName) {
	      var validateState = this.state.validateState || {};
	      var inputField = this.props.columns.map(function (column, i) {
	        var editable = column.editable,
	            format = column.format,
	            attr = { ref: column.field + i, placeholder: editable.placeholder ? editable.placeholder : column.name };
	
	        if (column.autoValue) {
	          //when you want same auto generate value and not allow edit, example ID field
	          return null;
	        }
	        var error = validateState[column.field] ? _react2['default'].createElement(
	          'span',
	          { className: 'help-block bg-danger' },
	          validateState[column.field]
	        ) : null;
	
	        // let editor = Editor(editable,attr,format);
	        // if(editor.props.type && editor.props.type == 'checkbox'){
	        return _react2['default'].createElement(
	          'div',
	          { className: 'form-group', key: column.field },
	          _react2['default'].createElement(
	            'label',
	            null,
	            column.name
	          ),
	          (0, _Editor2['default'])(editable, attr, format, ''),
	          error
	        );
	      });
	      var modalClass = (0, _classnames2['default'])("modal", "fade", modalClassName, {
	        'in': this.state.shakeEditor || this.state.validateState //hack prevent bootstrap modal hide by reRender
	      });
	      var dialogClass = (0, _classnames2['default'])("modal-dialog", "modal-sm", {
	        "animated": this.state.shakeEditor,
	        "shake": this.state.shakeEditor
	      });
	      return _react2['default'].createElement(
	        'div',
	        { ref: 'modal', className: modalClass, tabIndex: '-1', role: 'dialog' },
	        _react2['default'].createElement(
	          'div',
	          { className: dialogClass },
	          _react2['default'].createElement(
	            'div',
	            { className: 'modal-content' },
	            _react2['default'].createElement(
	              'div',
	              { className: 'modal-header' },
	              _react2['default'].createElement(
	                'button',
	                { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' },
	                _react2['default'].createElement(
	                  'span',
	                  { 'aria-hidden': 'true' },
	                  '×'
	                )
	              ),
	              _react2['default'].createElement(
	                'h4',
	                { className: 'modal-title' },
	                'New Record'
	              )
	            ),
	            _react2['default'].createElement(
	              'div',
	              { className: 'modal-body' },
	              _react2['default'].createElement(
	                'form',
	                { ref: 'form' },
	                inputField
	              )
	            ),
	            _react2['default'].createElement(
	              'div',
	              { className: 'modal-footer' },
	              _react2['default'].createElement(
	                'button',
	                { type: 'button', className: 'btn btn-default', 'data-dismiss': 'modal' },
	                'Close'
	              ),
	              _react2['default'].createElement(
	                'button',
	                { type: 'button', className: 'btn btn-info', onClick: this.handleSaveBtnClick.bind(this) },
	                'Save'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return ToolBar;
	})(_react2['default'].Component);
	
	ToolBar.propTypes = {
	  onAddRow: _react2['default'].PropTypes.func,
	  onDropRow: _react2['default'].PropTypes.func,
	  onShowOnlySelected: _react2['default'].PropTypes.func,
	  enableInsert: _react2['default'].PropTypes.bool,
	  enableDelete: _react2['default'].PropTypes.bool,
	  enableSearch: _react2['default'].PropTypes.bool,
	  enableShowOnlySelected: _react2['default'].PropTypes.bool,
	  columns: _react2['default'].PropTypes.array,
	  searchPlaceholder: _react2['default'].PropTypes.string,
	  clearSearch: _react2['default'].PropTypes.bool
	};
	
	ToolBar.defaultProps = {
	  enableInsert: false,
	  enableDelete: false,
	  enableSearch: false,
	  enableShowOnlySelected: false,
	  clearSearch: false
	};
	exports['default'] = ToolBar;
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var TableFilter = (function (_React$Component) {
	  _inherits(TableFilter, _React$Component);
	
	  function TableFilter(props) {
	    _classCallCheck(this, TableFilter);
	
	    _get(Object.getPrototypeOf(TableFilter.prototype), 'constructor', this).call(this, props);
	    this.filterObj = {};
	  }
	
	  _createClass(TableFilter, [{
	    key: 'handleKeyUp',
	    value: function handleKeyUp(e) {
	      if (e.currentTarget.value.trim() === "") delete this.filterObj[e.currentTarget.name];else this.filterObj[e.currentTarget.name] = e.currentTarget.value;
	
	      this.props.onFilter(this.filterObj);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var tableClasses = (0, _classnames2['default'])("table", {
	        'table-striped': this.props.striped,
	        'table-condensed': this.props.condensed
	      });
	      var selectRowHeader = null;
	
	      if (this.props.rowSelectType == _Const2['default'].ROW_SELECT_SINGLE || this.props.rowSelectType == _Const2['default'].ROW_SELECT_MULTI) {
	        var style = {
	          width: 35,
	          paddingLeft: 0,
	          paddingRight: 0
	        };
	        selectRowHeader = _react2['default'].createElement(
	          'th',
	          { style: style, key: -1 },
	          'Filter'
	        );
	      }
	      var filterField = this.props.columns.map(function (column) {
	        var thStyle = {
	          display: column.hidden ? "none" : null,
	          width: column.width
	        };
	        return _react2['default'].createElement(
	          'th',
	          { key: column.name, style: thStyle },
	          _react2['default'].createElement(
	            'div',
	            { className: 'th-inner table-header-column' },
	            _react2['default'].createElement('input', { size: '10', type: 'text', placeholder: column.name, name: column.name, onKeyUp: this.handleKeyUp.bind(this) })
	          )
	        );
	      }, this);
	      return _react2['default'].createElement(
	        'table',
	        { className: tableClasses, style: { marginTop: 5 } },
	        _react2['default'].createElement(
	          'thead',
	          null,
	          _react2['default'].createElement(
	            'tr',
	            { style: { borderBottomStyle: 'hidden' } },
	            selectRowHeader,
	            filterField
	          )
	        )
	      );
	    }
	  }]);
	
	  return TableFilter;
	})(_react2['default'].Component);
	
	TableFilter.propTypes = {
	  columns: _react2['default'].PropTypes.array,
	  rowSelectType: _react2['default'].PropTypes.string,
	  onFilter: _react2['default'].PropTypes.func
	};
	exports['default'] = TableFilter;
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var EventEmitter = __webpack_require__(34).EventEmitter;
	
	function _sort(arr, sortField, order, sortFunc) {
	  order = order.toLowerCase();
	  arr.sort(function (a, b) {
	    if (sortFunc) {
	      return sortFunc(a, b, order);
	    } else {
	      if (order == _Const2['default'].SORT_DESC) {
	        return a[sortField] > b[sortField] ? -1 : a[sortField] < b[sortField] ? 1 : 0;
	      } else {
	        return a[sortField] < b[sortField] ? -1 : a[sortField] > b[sortField] ? 1 : 0;
	      }
	    }
	  });
	
	  return arr;
	}
	
	var TableDataSet = (function (_EventEmitter) {
	  _inherits(TableDataSet, _EventEmitter);
	
	  function TableDataSet(data) {
	    _classCallCheck(this, TableDataSet);
	
	    _get(Object.getPrototypeOf(TableDataSet.prototype), 'constructor', this).call(this, data);
	    this.data = data;
	  }
	
	  _createClass(TableDataSet, [{
	    key: 'setData',
	    value: function setData(data) {
	      this.emit('change', data);
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      this.data = null;
	    }
	  }, {
	    key: 'getData',
	    value: function getData() {
	      return this.data;
	    }
	  }]);
	
	  return TableDataSet;
	})(EventEmitter);
	
	exports.TableDataSet = TableDataSet;
	
	var TableDataStore = (function () {
	  function TableDataStore(data) {
	    _classCallCheck(this, TableDataStore);
	
	    this.data = data;
	    this.colInfos = null;
	    this.filteredData = null;
	    this.isOnFilter = false;
	    this.filterObj = null;
	    this.searchText = null;
	    this.sortObj = null;
	    this.pageObj = {};
	    this.selected = [];
	    this.multiColumnSearch = false;
	    this.showOnlySelected = false;
	    this.remote = false; // remote data
	  }
	
	  _createClass(TableDataStore, [{
	    key: 'setProps',
	    value: function setProps(props) {
	      this.keyField = props.keyField;
	      this.enablePagination = props.isPagination;
	      this.colInfos = props.colInfos;
	      this.remote = props.remote;
	      this.multiColumnSearch = props.multiColumnSearch;
	    }
	  }, {
	    key: 'setData',
	    value: function setData(data) {
	      this.data = data;
	      if (this.isOnFilter) {
	        if (null !== this.filterObj) this.filter(this.filterObj);
	        if (null !== this.searchText) this.search(this.searchText);
	      }
	      if (this.sortObj) {
	        this.sort(this.sortObj.order, this.sortObj.sortField);
	      }
	    }
	  }, {
	    key: 'getSortInfo',
	    value: function getSortInfo() {
	      return this.sortObj;
	    }
	  }, {
	    key: 'setSelectedRowKey',
	    value: function setSelectedRowKey(selectedRowKeys) {
	      this.selected = selectedRowKeys;
	    }
	  }, {
	    key: 'getSelectedRowKeys',
	    value: function getSelectedRowKeys() {
	      return this.selected;
	    }
	  }, {
	    key: 'getCurrentDisplayData',
	    value: function getCurrentDisplayData() {
	      if (this.isOnFilter) return this.filteredData;else return this.data;
	    }
	  }, {
	    key: 'ignoreNonSelected',
	    value: function ignoreNonSelected() {
	      var _this = this;
	
	      this.showOnlySelected = !this.showOnlySelected;
	      if (this.showOnlySelected) {
	        this.isOnFilter = true;
	        this.filteredData = this.data.filter(function (row) {
	          var result = _this.selected.find(function (x) {
	            return row[_this.keyField] === x;
	          });
	          return typeof result !== 'undefined' ? true : false;
	        });
	      } else {
	        this.isOnFilter = false;
	      }
	    }
	  }, {
	    key: 'sort',
	    value: function sort(order, sortField) {
	      this.sortObj = {
	        order: order,
	        sortField: sortField
	      };
	
	      var currentDisplayData = this.getCurrentDisplayData();
	      if (!this.colInfos[sortField]) return this;
	
	      var sortFunc = this.colInfos[sortField].sortFunc;
	
	      currentDisplayData = _sort(currentDisplayData, sortField, order, sortFunc);
	
	      return this;
	    }
	  }, {
	    key: 'page',
	    value: function page(_page, sizePerPage) {
	      this.pageObj.end = _page * sizePerPage - 1;
	      this.pageObj.start = this.pageObj.end - (sizePerPage - 1);
	      return this;
	    }
	  }, {
	    key: 'edit',
	    value: function edit(newVal, rowIndex, fieldName) {
	      var currentDisplayData = this.getCurrentDisplayData();
	      var rowKeyCache = undefined;
	      if (!this.enablePagination) {
	        currentDisplayData[rowIndex][fieldName] = newVal;
	        rowKeyCache = currentDisplayData[rowIndex][this.keyField];
	      } else {
	        currentDisplayData[this.pageObj.start + rowIndex][fieldName] = newVal;
	        rowKeyCache = currentDisplayData[this.pageObj.start + rowIndex][this.keyField];
	      }
	      if (this.isOnFilter) {
	        this.data.forEach(function (row) {
	          if (row[this.keyField] === rowKeyCache) {
	            row[fieldName] = newVal;
	          }
	        }, this);
	        if (null !== this.filterObj) this.filter(this.filterObj);
	        if (null !== this.searchText) this.search(this.searchText);
	      }
	      return this;
	    }
	  }, {
	    key: 'add',
	    value: function add(newObj) {
	      if (!newObj[this.keyField] || newObj[this.keyField].toString() === '') {
	        throw this.keyField + " can't be empty value.";
	      }
	      var currentDisplayData = this.getCurrentDisplayData();
	      currentDisplayData.forEach(function (row) {
	        if (row[this.keyField].toString() === newObj[this.keyField].toString()) {
	          throw this.keyField + " " + newObj[this.keyField] + " already exists";
	        }
	      }, this);
	
	      currentDisplayData.push(newObj);
	      if (this.isOnFilter) {
	        this.data.push(newObj);
	      }
	    }
	  }, {
	    key: 'remove',
	    value: function remove(rowKey) {
	      var currentDisplayData = this.getCurrentDisplayData();
	      var result = currentDisplayData.filter(function (row) {
	        return rowKey.indexOf(row[this.keyField]) == -1;
	      }, this);
	
	      if (this.isOnFilter) {
	        this.data = this.data.filter(function (row) {
	          return rowKey.indexOf(row[this.keyField]) == -1;
	        }, this);
	        this.filteredData = result;
	      } else {
	        this.data = result;
	      }
	    }
	  }, {
	    key: 'filter',
	    value: function filter(filterObj) {
	      var _this2 = this;
	
	      if (Object.keys(filterObj).length == 0) {
	        this.filteredData = null;
	        this.isOnFilter = false;
	        this.filterObj = null;
	      } else {
	        this.filterObj = filterObj;
	        this.filteredData = this.data.filter(function (row) {
	          var valid = true;
	          var filterVal = undefined;
	          for (var key in filterObj) {
	            var targetVal = row[key];
	
	            switch (filterObj[key].type) {
	              case _Const2['default'].FILTER_TYPE.NUMBER:
	                {
	                  filterVal = filterObj[key].value.number;
	                  break;
	                }
	              case _Const2['default'].FILTER_TYPE.CUSTOM:
	                {
	                  filterVal = typeof filterObj[key].value === "object" ? undefined : typeof filterObj[key].value === "string" ? filterObj[key].value.toLowerCase() : filterObj[key].value;
	                  break;
	                }
	              default:
	                {
	                  filterVal = typeof filterObj[key].value === "string" ? filterObj[key].value.toLowerCase() : filterObj[key].value;
	                  if (filterVal === undefined) {
	                    // Support old filter
	                    filterVal = filterObj[key].toLowerCase();
	                  }
	                  break;
	                }
	            }
	
	            if (_this2.colInfos[key]) {
	              var _colInfos$key = _this2.colInfos[key];
	              var format = _colInfos$key.format;
	              var filterFormatted = _colInfos$key.filterFormatted;
	              var formatExtraData = _colInfos$key.formatExtraData;
	
	              if (filterFormatted && format) {
	                targetVal = format(row[key], row, formatExtraData);
	              }
	            }
	
	            switch (filterObj[key].type) {
	              case _Const2['default'].FILTER_TYPE.NUMBER:
	                {
	                  valid = _this2.filterNumber(targetVal, filterVal, filterObj[key].value.comparator);
	                  break;
	                }
	              case _Const2['default'].FILTER_TYPE.DATE:
	                {
	                  valid = _this2.filterDate(targetVal, filterVal);
	                  break;
	                }
	              case _Const2['default'].FILTER_TYPE.CUSTOM:
	                {
	                  valid = _this2.filterCustom(targetVal, filterVal, filterObj[key].value);
	                  break;
	                }
	              default:
	                {
	                  valid = _this2.filterText(targetVal, filterVal);
	                  break;
	                }
	            }
	            if (!valid) {
	              break;
	            }
	          }
	          return valid;
	        });
	        this.isOnFilter = true;
	      }
	    }
	  }, {
	    key: 'filterNumber',
	    value: function filterNumber(targetVal, filterVal, comparator) {
	      var valid = true;
	      switch (comparator) {
	        case "=":
	          {
	            if (targetVal != filterVal) {
	              valid = false;
	            }
	            break;
	          }
	        case ">":
	          {
	            if (targetVal <= filterVal) {
	              valid = false;
	            }
	            break;
	          }
	        case ">=":
	          {
	            if (targetVal < filterVal) {
	              valid = false;
	            }
	            break;
	          }
	        case "<":
	          {
	            if (targetVal >= filterVal) {
	              valid = false;
	            }
	            break;
	          }
	        case "<=":
	          {
	            if (targetVal > filterVal) {
	              valid = false;
	            }
	            break;
	          }
	        case "!=":
	          {
	            if (targetVal == filterVal) {
	              valid = false;
	            }
	            break;
	          }
	        default:
	          {
	            console.error("Number comparator provided is not supported");
	            break;
	          }
	      }
	      return valid;
	    }
	  }, {
	    key: 'filterDate',
	    value: function filterDate(targetVal, filterVal) {
	      return targetVal.getDate() == filterVal.getDate() && targetVal.getMonth() == filterVal.getMonth() && targetVal.getFullYear() == filterVal.getFullYear();
	    }
	  }, {
	    key: 'filterCustom',
	    value: function filterCustom(targetVal, filterVal, callbackInfo) {
	      if (callbackInfo != null && typeof callbackInfo === "object") {
	        return callbackInfo.callback(targetVal, callbackInfo.callbackParameters);
	      }
	
	      return filterText(targetVal, filterVal);
	    }
	  }, {
	    key: 'filterText',
	    value: function filterText(targetVal, filterVal) {
	      if (targetVal.toString().toLowerCase().indexOf(filterVal) == -1) {
	        return false;
	      }
	
	      return true;
	    }
	  }, {
	    key: 'search',
	    value: function search(searchText) {
	      var _this3 = this;
	
	      if (searchText.trim() === "") {
	        this.filteredData = null;
	        this.isOnFilter = false;
	        this.searchText = null;
	      } else {
	        this.searchText = searchText;
	        var searchTextArray = [];
	        this.filteredData = this.data.filter(function (row) {
	          var valid = false;
	
	          if (_this3.multiColumnSearch) {
	            searchTextArray = searchText.split(' ');
	          } else {
	            searchTextArray.push(searchText);
	          }
	
	          for (var key in row) {
	            if (_this3.colInfos[key] && row[key]) {
	              searchTextArray.forEach(function (text) {
	                var filterVal = text.toLowerCase();
	                var targetVal = row[key];
	                var _colInfos$key2 = _this3.colInfos[key];
	                var format = _colInfos$key2.format;
	                var filterFormatted = _colInfos$key2.filterFormatted;
	                var formatExtraData = _colInfos$key2.formatExtraData;
	                var hidden = _colInfos$key2.hidden;
	
	                if (!hidden) {
	                  if (filterFormatted && format) {
	                    targetVal = format(targetVal, row, formatExtraData);
	                  }
	                  if (targetVal.toString().toLowerCase().indexOf(filterVal) !== -1) {
	                    valid = true;
	                  }
	                }
	              });
	              if (valid) break;
	            }
	          }
	          return valid;
	        });
	        this.isOnFilter = true;
	      }
	    }
	  }, {
	    key: 'getDataIgnoringPagination',
	    value: function getDataIgnoringPagination() {
	      var _data = this.getCurrentDisplayData();
	      return _data;
	    }
	  }, {
	    key: 'get',
	    value: function get() {
	      var _data = this.getCurrentDisplayData();
	
	      if (_data.length == 0) return _data;
	
	      if (this.remote || !this.enablePagination) {
	        return _data;
	      } else {
	        var result = [];
	        for (var i = this.pageObj.start; i <= this.pageObj.end; i++) {
	          result.push(_data[i]);
	          if (i + 1 == _data.length) break;
	        }
	        return result;
	      }
	    }
	  }, {
	    key: 'getKeyField',
	    value: function getKeyField() {
	      return this.keyField;
	    }
	  }, {
	    key: 'getDataNum',
	    value: function getDataNum() {
	      return this.getCurrentDisplayData().length;
	    }
	  }, {
	    key: 'isChangedPage',
	    value: function isChangedPage() {
	      return this.pageObj.start && this.pageObj.end ? true : false;
	    }
	  }, {
	    key: 'getAllRowkey',
	    value: function getAllRowkey() {
	      return this.data.map(function (row) {
	        return row[this.keyField];
	      }, this);
	    }
	  }]);
	
	  return TableDataStore;
	})();
	
	exports.TableDataStore = TableDataStore;
	
	;

/***/ },
/* 34 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events)
	    this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      }
	      throw TypeError('Uncaught, unspecified "error" event.');
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler))
	    return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        len = arguments.length;
	        args = new Array(len - 1);
	        for (i = 1; i < len; i++)
	          args[i - 1] = arguments[i];
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    len = arguments.length;
	    args = new Array(len - 1);
	    for (i = 1; i < len; i++)
	      args[i - 1] = arguments[i];
	
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events)
	    this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    var m;
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type])
	    return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0)
	      return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;
	
	  if (!this._events)
	    return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.listenerCount = function(emitter, type) {
	  var ret;
	  if (!emitter._events || !emitter._events[type])
	    ret = 0;
	  else if (isFunction(emitter._events[type]))
	    ret = 1;
	  else
	    ret = emitter._events[type].length;
	  return ret;
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	if (typeof window !== 'undefined') {
	  var filesaver = __webpack_require__(36);
	  var saveAs = filesaver.saveAs;
	}
	
	function toString(data, keys) {
	  var dataString = "";
	  if (data.length === 0) return dataString;
	
	  dataString += keys.join(',') + '\n';
	
	  data.map(function (row) {
	    keys.map(function (col, i) {
	      var cell = typeof row[col] !== 'undefined' ? '"' + row[col] + '"' : "";
	      dataString += cell;
	      if (i + 1 < keys.length) dataString += ',';
	    });
	
	    dataString += '\n';
	  });
	
	  return dataString;
	};
	
	var exportCSV = function exportCSV(data, keys, filename) {
	  var dataString = toString(data, keys);
	  if (typeof window !== 'undefined') {
	    saveAs(new Blob([dataString], { type: "text/plain;charset=utf-8" }), filename || 'spreadsheet.csv');
	  }
	};
	
	exports['default'] = exportCSV;
	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* FileSaver.js
	 * A saveAs() FileSaver implementation.
	 * 1.1.20151003
	 *
	 * By Eli Grey, http://eligrey.com
	 * License: MIT
	 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
	 */
	
	/*global self */
	/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */
	
	/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
	
	"use strict";
	
	var saveAs = saveAs || (function (view) {
		"use strict";
		// IE <10 is explicitly unsupported
		if (typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
			return;
		}
		var doc = view.document,
		   
		// only get URL when necessary in case Blob.js hasn't overridden it yet
		get_URL = function get_URL() {
			return view.URL || view.webkitURL || view;
		},
		    save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a"),
		    can_use_save_link = ("download" in save_link),
		    click = function click(node) {
			var event = new MouseEvent("click");
			node.dispatchEvent(event);
		},
		    is_safari = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
		    webkit_req_fs = view.webkitRequestFileSystem,
		    req_fs = view.requestFileSystem || webkit_req_fs || view.mozRequestFileSystem,
		    throw_outside = function throw_outside(ex) {
			(view.setImmediate || view.setTimeout)(function () {
				throw ex;
			}, 0);
		},
		    force_saveable_type = "application/octet-stream",
		    fs_min_size = 0,
		   
		// See https://code.google.com/p/chromium/issues/detail?id=375297#c7 and
		// https://github.com/eligrey/FileSaver.js/commit/485930a#commitcomment-8768047
		// for the reasoning behind the timeout and revocation flow
		arbitrary_revoke_timeout = 500,
		    // in ms
		revoke = function revoke(file) {
			var revoker = function revoker() {
				if (typeof file === "string") {
					// file is an object URL
					get_URL().revokeObjectURL(file);
				} else {
					// file is a File
					file.remove();
				}
			};
			if (view.chrome) {
				revoker();
			} else {
				setTimeout(revoker, arbitrary_revoke_timeout);
			}
		},
		    dispatch = function dispatch(filesaver, event_types, event) {
			event_types = [].concat(event_types);
			var i = event_types.length;
			while (i--) {
				var listener = filesaver["on" + event_types[i]];
				if (typeof listener === "function") {
					try {
						listener.call(filesaver, event || filesaver);
					} catch (ex) {
						throw_outside(ex);
					}
				}
			}
		},
		    auto_bom = function auto_bom(blob) {
			// prepend BOM for UTF-8 XML and text/* types (including HTML)
			if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
				return new Blob(["﻿", blob], { type: blob.type });
			}
			return blob;
		},
		    FileSaver = function FileSaver(blob, name, no_auto_bom) {
			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			// First try a.download, then web filesystem, then object URLs
			var filesaver = this,
			    type = blob.type,
			    blob_changed = false,
			    object_url,
			    target_view,
			    dispatch_all = function dispatch_all() {
				dispatch(filesaver, "writestart progress write writeend".split(" "));
			},
			   
			// on any filesys errors revert to saving with object URLs
			fs_error = function fs_error() {
				if (target_view && is_safari && typeof FileReader !== "undefined") {
					// Safari doesn't allow downloading of blob urls
					var reader = new FileReader();
					reader.onloadend = function () {
						var base64Data = reader.result;
						target_view.location.href = "data:attachment/file" + base64Data.slice(base64Data.search(/[,;]/));
						filesaver.readyState = filesaver.DONE;
						dispatch_all();
					};
					reader.readAsDataURL(blob);
					filesaver.readyState = filesaver.INIT;
					return;
				}
				// don't create more object URLs than needed
				if (blob_changed || !object_url) {
					object_url = get_URL().createObjectURL(blob);
				}
				if (target_view) {
					target_view.location.href = object_url;
				} else {
					var new_tab = view.open(object_url, "_blank");
					if (new_tab == undefined && is_safari) {
						//Apple do not allow window.open, see http://bit.ly/1kZffRI
						view.location.href = object_url;
					}
				}
				filesaver.readyState = filesaver.DONE;
				dispatch_all();
				revoke(object_url);
			},
			    abortable = function abortable(func) {
				return function () {
					if (filesaver.readyState !== filesaver.DONE) {
						return func.apply(this, arguments);
					}
				};
			},
			    create_if_not_found = { create: true, exclusive: false },
			    slice;
			filesaver.readyState = filesaver.INIT;
			if (!name) {
				name = "download";
			}
			if (can_use_save_link) {
				object_url = get_URL().createObjectURL(blob);
				save_link.href = object_url;
				save_link.download = name;
				setTimeout(function () {
					click(save_link);
					dispatch_all();
					revoke(object_url);
					filesaver.readyState = filesaver.DONE;
				});
				return;
			}
			// Object and web filesystem URLs have a problem saving in Google Chrome when
			// viewed in a tab, so I force save with application/octet-stream
			// http://code.google.com/p/chromium/issues/detail?id=91158
			// Update: Google errantly closed 91158, I submitted it again:
			// https://code.google.com/p/chromium/issues/detail?id=389642
			if (view.chrome && type && type !== force_saveable_type) {
				slice = blob.slice || blob.webkitSlice;
				blob = slice.call(blob, 0, blob.size, force_saveable_type);
				blob_changed = true;
			}
			// Since I can't be sure that the guessed media type will trigger a download
			// in WebKit, I append .download to the filename.
			// https://bugs.webkit.org/show_bug.cgi?id=65440
			if (webkit_req_fs && name !== "download") {
				name += ".download";
			}
			if (type === force_saveable_type || webkit_req_fs) {
				target_view = view;
			}
			if (!req_fs) {
				fs_error();
				return;
			}
			fs_min_size += blob.size;
			req_fs(view.TEMPORARY, fs_min_size, abortable(function (fs) {
				fs.root.getDirectory("saved", create_if_not_found, abortable(function (dir) {
					var save = function save() {
						dir.getFile(name, create_if_not_found, abortable(function (file) {
							file.createWriter(abortable(function (writer) {
								writer.onwriteend = function (event) {
									target_view.location.href = file.toURL();
									filesaver.readyState = filesaver.DONE;
									dispatch(filesaver, "writeend", event);
									revoke(file);
								};
								writer.onerror = function () {
									var error = writer.error;
									if (error.code !== error.ABORT_ERR) {
										fs_error();
									}
								};
								"writestart progress write abort".split(" ").forEach(function (event) {
									writer["on" + event] = filesaver["on" + event];
								});
								writer.write(blob);
								filesaver.abort = function () {
									writer.abort();
									filesaver.readyState = filesaver.DONE;
								};
								filesaver.readyState = filesaver.WRITING;
							}), fs_error);
						}), fs_error);
					};
					dir.getFile(name, { create: false }, abortable(function (file) {
						// delete file if it already exists
						file.remove();
						save();
					}), abortable(function (ex) {
						if (ex.code === ex.NOT_FOUND_ERR) {
							save();
						} else {
							fs_error();
						}
					}));
				}), fs_error);
			}), fs_error);
		},
		    FS_proto = FileSaver.prototype,
		    saveAs = function saveAs(blob, name, no_auto_bom) {
			return new FileSaver(blob, name, no_auto_bom);
		};
		// IE 10+ (native saveAs)
		if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
			return function (blob, name, no_auto_bom) {
				if (!no_auto_bom) {
					blob = auto_bom(blob);
				}
				return navigator.msSaveOrOpenBlob(blob, name || "download");
			};
		}
	
		FS_proto.abort = function () {
			var filesaver = this;
			filesaver.readyState = filesaver.DONE;
			dispatch(filesaver, "abort");
		};
		FS_proto.readyState = FS_proto.INIT = 0;
		FS_proto.WRITING = 1;
		FS_proto.DONE = 2;
	
		FS_proto.error = FS_proto.onwritestart = FS_proto.onprogress = FS_proto.onwrite = FS_proto.onabort = FS_proto.onerror = FS_proto.onwriteend = null;
	
		return saveAs;
	})(typeof self !== "undefined" && self || typeof window !== "undefined" && window || undefined.content);
	// `self` is undefined in Firefox for Android content script context
	// while `this` is nsIContentFrameMessageManager
	// with an attribute `content` that corresponds to the window
	
	if (typeof module !== "undefined" && module.exports) {
		module.exports.saveAs = saveAs;
	} else if ("function" !== "undefined" && __webpack_require__(37) !== null && __webpack_require__(38) != null) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return saveAs;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 38 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var EventEmitter = __webpack_require__(34).EventEmitter;
	
	var Filter = (function (_EventEmitter) {
	    _inherits(Filter, _EventEmitter);
	
	    function Filter(data) {
	        _classCallCheck(this, Filter);
	
	        _get(Object.getPrototypeOf(Filter.prototype), 'constructor', this).call(this, data);
	        this.currentFilter = {};
	    }
	
	    _createClass(Filter, [{
	        key: 'handleFilter',
	        value: function handleFilter(dataField, value, type) {
	            var filterType = type || _Const2['default'].FILTER_TYPE.CUSTOM;
	
	            if (value != null && typeof value === 'object') {
	                // value of the filter is an object
	                var hasValue = true;
	                for (var prop in value) {
	                    if (!value[prop] || value[prop] === "") {
	                        hasValue = false;
	                        break;
	                    }
	                }
	                // if one of the object properties is undefined or empty, we remove the filter
	                hasValue ? this.currentFilter[dataField] = { value: value, type: filterType } : delete this.currentFilter[dataField];
	            } else if (!value || value.trim() === "") {
	                delete this.currentFilter[dataField];
	            } else {
	                this.currentFilter[dataField] = { value: value.trim(), type: filterType };
	            }
	            this.emit('onFilterChange', this.currentFilter);
	        }
	    }]);
	
	    return Filter;
	})(EventEmitter);
	
	exports.Filter = Filter;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var _util = __webpack_require__(7);
	
	var _util2 = _interopRequireDefault(_util);
	
	var _filtersDate = __webpack_require__(41);
	
	var _filtersDate2 = _interopRequireDefault(_filtersDate);
	
	var _filtersText = __webpack_require__(42);
	
	var _filtersText2 = _interopRequireDefault(_filtersText);
	
	var _filtersSelect = __webpack_require__(43);
	
	var _filtersSelect2 = _interopRequireDefault(_filtersSelect);
	
	var _filtersNumber = __webpack_require__(44);
	
	var _filtersNumber2 = _interopRequireDefault(_filtersNumber);
	
	var TableHeaderColumn = (function (_React$Component) {
	  _inherits(TableHeaderColumn, _React$Component);
	
	  function TableHeaderColumn(props) {
	    _classCallCheck(this, TableHeaderColumn);
	
	    _get(Object.getPrototypeOf(TableHeaderColumn.prototype), 'constructor', this).call(this, props);
	    this.handleFilter = this.handleFilter.bind(this);
	  }
	
	  _createClass(TableHeaderColumn, [{
	    key: 'handleColumnClick',
	    value: function handleColumnClick(e) {
	      if (!this.props.dataSort) return;
	      var order = this.props.sort == _Const2['default'].SORT_DESC ? _Const2['default'].SORT_ASC : _Const2['default'].SORT_DESC;
	      this.props.onSort(order, this.props.dataField);
	    }
	  }, {
	    key: 'handleFilter',
	    value: function handleFilter(value, type) {
	      this.props.filter.emitter.handleFilter(this.props.dataField, value, type);
	    }
	  }, {
	    key: 'getFilters',
	    value: function getFilters() {
	      switch (this.props.filter.type) {
	        case _Const2['default'].FILTER_TYPE.TEXT:
	          {
	            return _react2['default'].createElement(_filtersText2['default'], _extends({}, this.props.filter, { columnName: this.props.children, filterHandler: this.handleFilter }));
	          }
	        case _Const2['default'].FILTER_TYPE.SELECT:
	          {
	            return _react2['default'].createElement(_filtersSelect2['default'], _extends({}, this.props.filter, { columnName: this.props.children, filterHandler: this.handleFilter }));
	          }
	        case _Const2['default'].FILTER_TYPE.NUMBER:
	          {
	            return _react2['default'].createElement(_filtersNumber2['default'], _extends({}, this.props.filter, { columnName: this.props.children, filterHandler: this.handleFilter }));
	          }
	        case _Const2['default'].FILTER_TYPE.DATE:
	          {
	            return _react2['default'].createElement(_filtersDate2['default'], _extends({}, this.props.filter, { columnName: this.props.children, filterHandler: this.handleFilter }));
	          }
	        case _Const2['default'].FILTER_TYPE.CUSTOM:
	          {
	            return this.props.filter.getElement(this.handleFilter, this.props.filter.customFilterParameters);
	          }
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.refs.innerDiv.setAttribute("data-field", this.props.dataField);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var width = this.props.width !== null ? parseInt(this.props.width) : null;
	      var thStyle = {
	        textAlign: this.props.dataAlign,
	        display: this.props.hidden ? "none" : null,
	        width: width,
	        maxWidth: width
	      };
	
	      var defaultCaret = !this.props.dataSort ? null : _react2['default'].createElement(
	        'span',
	        { className: 'order' },
	        _react2['default'].createElement(
	          'span',
	          { className: 'dropdown' },
	          _react2['default'].createElement('span', { className: 'caret', style: { margin: '10px 0 10px 5px', color: '#ccc' } })
	        ),
	        _react2['default'].createElement(
	          'span',
	          { className: 'dropup' },
	          _react2['default'].createElement('span', { className: 'caret', style: { margin: '10px 0', color: '#ccc' } })
	        )
	      );
	      var sortCaret = this.props.sort ? _util2['default'].renderReactSortCaret(this.props.sort) : defaultCaret;
	
	      var classes = this.props.className + " " + (this.props.dataSort ? "sort-column" : "");
	      return _react2['default'].createElement(
	        'th',
	        { ref: 'header-col', className: classes, style: thStyle },
	        _react2['default'].createElement(
	          'div',
	          { ref: 'innerDiv', className: 'th-inner table-header-column',
	            onClick: this.handleColumnClick.bind(this) },
	          this.props.children,
	          sortCaret
	        ),
	        this.props.filter ? this.getFilters() : null
	      );
	    }
	  }]);
	
	  return TableHeaderColumn;
	})(_react2['default'].Component);
	
	var filterTypeArray = [];
	for (var key in _Const2['default'].FILTER_TYPE) {
	  filterTypeArray.push(_Const2['default'].FILTER_TYPE[key]);
	}
	
	TableHeaderColumn.propTypes = {
	  dataField: _react2['default'].PropTypes.string,
	  dataAlign: _react2['default'].PropTypes.string,
	  dataSort: _react2['default'].PropTypes.bool,
	  onSort: _react2['default'].PropTypes.func,
	  dataFormat: _react2['default'].PropTypes.func,
	  isKey: _react2['default'].PropTypes.bool,
	  editable: _react2['default'].PropTypes.any,
	  hidden: _react2['default'].PropTypes.bool,
	  className: _react2['default'].PropTypes.string,
	  width: _react2['default'].PropTypes.string,
	  sortFunc: _react2['default'].PropTypes.func,
	  columnClassName: _react2['default'].PropTypes.any,
	  filterFormatted: _react2['default'].PropTypes.bool,
	  sort: _react2['default'].PropTypes.string,
	  formatExtraData: _react2['default'].PropTypes.any,
	  filter: _react2['default'].PropTypes.shape({
	    type: _react2['default'].PropTypes.oneOf(filterTypeArray),
	    delay: _react2['default'].PropTypes.number,
	    options: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.object, // for SelectFilter
	    _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.number) //for NumberFilter
	    ]),
	    numberComparators: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
	    emitter: _react2['default'].PropTypes.object,
	    placeholder: _react2['default'].PropTypes.string,
	    getElement: _react2['default'].PropTypes.func,
	    customFilterParameters: _react2['default'].PropTypes.object
	  })
	};
	
	TableHeaderColumn.defaultProps = {
	  dataAlign: "left",
	  dataSort: false,
	  dataFormat: undefined,
	  isKey: false,
	  editable: true,
	  onSort: undefined,
	  hidden: false,
	  className: "",
	  width: null,
	  sortFunc: undefined,
	  columnClassName: '',
	  filterFormatted: false,
	  sort: undefined,
	  formatExtraData: undefined,
	  filter: undefined
	};
	
	exports['default'] = TableHeaderColumn;
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var DateFilter = (function (_React$Component) {
	    _inherits(DateFilter, _React$Component);
	
	    function DateFilter(props) {
	        _classCallCheck(this, DateFilter);
	
	        _get(Object.getPrototypeOf(DateFilter.prototype), 'constructor', this).call(this, props);
	        this.filter = this.filter.bind(this);
	    }
	
	    _createClass(DateFilter, [{
	        key: 'setDefaultDate',
	        value: function setDefaultDate() {
	            var defaultDate = "";
	            if (this.props.defaultValue) {
	                // Set the appropriate format for the input type=date, i.e. "YYYY-MM-DD"
	                var defaultValue = new Date(this.props.defaultValue);
	                defaultDate = defaultValue.getFullYear() + '-' + ("0" + (defaultValue.getMonth() + 1)).slice(-2) + '-' + ("0" + defaultValue.getDate()).slice(-2);
	            }
	            return defaultDate;
	        }
	    }, {
	        key: 'filter',
	        value: function filter(event) {
	            var dateValue = event.target.value;
	            if (dateValue) {
	                this.props.filterHandler(new Date(dateValue), _Const2['default'].FILTER_TYPE.DATE);
	            } else {
	                this.props.filterHandler(null, _Const2['default'].FILTER_TYPE.DATE);
	            }
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var dateValue = this.refs.inputDate.defaultValue;
	            if (dateValue) {
	                this.props.filterHandler(new Date(dateValue), _Const2['default'].FILTER_TYPE.DATE);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement('input', { ref: 'inputDate',
	                className: 'filter date-filter form-control',
	                type: 'date',
	                onChange: this.filter,
	                defaultValue: this.setDefaultDate() });
	        }
	    }]);
	
	    return DateFilter;
	})(_react2['default'].Component);
	
	;
	
	DateFilter.propTypes = {
	    filterHandler: _react2['default'].PropTypes.func.isRequired,
	    defaultValue: _react2['default'].PropTypes.object,
	    columnName: _react2['default'].PropTypes.string
	};
	
	exports['default'] = DateFilter;
	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var TextFilter = (function (_React$Component) {
		_inherits(TextFilter, _React$Component);
	
		function TextFilter(props) {
			_classCallCheck(this, TextFilter);
	
			_get(Object.getPrototypeOf(TextFilter.prototype), 'constructor', this).call(this, props);
			this.filter = this.filter.bind(this);
			this.timeout = null;
		}
	
		_createClass(TextFilter, [{
			key: 'filter',
			value: function filter(event) {
				if (this.timeout) {
					clearTimeout(this.timeout);
				}
				var self = this;
				var filterValue = event.target.value;
				this.timeout = setTimeout(function () {
					self.props.filterHandler(filterValue, _Const2['default'].FILTER_TYPE.TEXT);
				}, self.props.delay);
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				if (this.refs.inputText.defaultValue) {
					this.props.filterHandler(this.refs.inputText.defaultValue, _Const2['default'].FILTER_TYPE.TEXT);
				}
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2['default'].createElement('input', { ref: 'inputText',
					className: 'filter text-filter form-control',
					type: 'text',
					onChange: this.filter,
					placeholder: this.props.placeholder || 'Enter ' + this.props.columnName + '...',
					defaultValue: this.props.defaultValue ? this.props.defaultValue : "" });
			}
		}]);
	
		return TextFilter;
	})(_react2['default'].Component);
	
	;
	
	TextFilter.propTypes = {
		filterHandler: _react2['default'].PropTypes.func.isRequired,
		defaultValue: _react2['default'].PropTypes.string,
		delay: _react2['default'].PropTypes.number,
		placeholder: _react2['default'].PropTypes.string,
		columnName: _react2['default'].PropTypes.string
	};
	
	TextFilter.defaultProps = {
		delay: _Const2['default'].FILTER_DELAY
	};
	
	exports['default'] = TextFilter;
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var SelectFilter = (function (_React$Component) {
		_inherits(SelectFilter, _React$Component);
	
		function SelectFilter(props) {
			_classCallCheck(this, SelectFilter);
	
			_get(Object.getPrototypeOf(SelectFilter.prototype), 'constructor', this).call(this, props);
			this.filter = this.filter.bind(this);
			this.state = {
				isPlaceholderSelected: this.props.defaultValue == undefined || !this.props.options.hasOwnProperty(this.props.defaultValue)
			};
		}
	
		_createClass(SelectFilter, [{
			key: 'filter',
			value: function filter(event) {
				this.setState({ isPlaceholderSelected: event.target.value === "" });
				this.props.filterHandler(event.target.value, _Const2['default'].FILTER_TYPE.SELECT);
			}
		}, {
			key: 'getOptions',
			value: function getOptions() {
				var optionTags = [];
				var options = this.props.options;
				optionTags.push(_react2['default'].createElement(
					'option',
					{ key: '-1', value: '' },
					this.props.placeholder || 'Select ' + this.props.columnName + '...'
				));
				Object.keys(options).map(function (key) {
					optionTags.push(_react2['default'].createElement(
						'option',
						{ key: key, value: key },
						options[key]
					));
				});
				return optionTags;
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				if (this.refs.selectInput.value) {
					this.props.filterHandler(this.refs.selectInput.value, _Const2['default'].FILTER_TYPE.SELECT);
				}
			}
		}, {
			key: 'render',
			value: function render() {
				var selectClass = (0, _classnames2['default'])("filter", "select-filter", "form-control", { "placeholder-selected": this.state.isPlaceholderSelected });
	
				return _react2['default'].createElement(
					'select',
					{ ref: 'selectInput',
						className: selectClass,
						onChange: this.filter,
						defaultValue: this.props.defaultValue != undefined ? this.props.defaultValue : "" },
					this.getOptions()
				);
			}
		}]);
	
		return SelectFilter;
	})(_react2['default'].Component);
	
	;
	
	SelectFilter.propTypes = {
		filterHandler: _react2['default'].PropTypes.func.isRequired,
		options: _react2['default'].PropTypes.object.isRequired,
		placeholder: _react2['default'].PropTypes.string,
		columnName: _react2['default'].PropTypes.string
	};
	
	exports['default'] = SelectFilter;
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var legalComparators = ["=", ">", ">=", "<", "<=", "!="];
	
	var NumberFilter = (function (_React$Component) {
	    _inherits(NumberFilter, _React$Component);
	
	    function NumberFilter(props) {
	        _classCallCheck(this, NumberFilter);
	
	        _get(Object.getPrototypeOf(NumberFilter.prototype), 'constructor', this).call(this, props);
	        this.numberComparators = this.props.numberComparators || legalComparators;
	        this.state = {
	            isPlaceholderSelected: this.props.defaultValue == undefined || this.props.defaultValue.number == undefined || this.props.options && this.props.options.indexOf(this.props.defaultValue.number) == -1
	        };
	        this.onChangeNumber = this.onChangeNumber.bind(this);
	        this.onChangeNumberSet = this.onChangeNumberSet.bind(this);
	        this.onChangeComparator = this.onChangeComparator.bind(this);
	    }
	
	    _createClass(NumberFilter, [{
	        key: 'onChangeNumber',
	        value: function onChangeNumber(event) {
	            if (this.refs.numberFilterComparator.value === "") {
	                return;
	            }
	            if (this.timeout) {
	                clearTimeout(this.timeout);
	            }
	            var self = this;
	            var filterValue = event.target.value;
	            this.timeout = setTimeout(function () {
	                self.props.filterHandler({ number: filterValue, comparator: self.refs.numberFilterComparator.value }, _Const2['default'].FILTER_TYPE.NUMBER);
	            }, self.props.delay);
	        }
	    }, {
	        key: 'onChangeNumberSet',
	        value: function onChangeNumberSet(event) {
	            this.setState({ isPlaceholderSelected: event.target.value === "" });
	            if (this.refs.numberFilterComparator.value === "") {
	                return;
	            }
	            this.props.filterHandler({ number: event.target.value, comparator: this.refs.numberFilterComparator.value }, _Const2['default'].FILTER_TYPE.NUMBER);
	        }
	    }, {
	        key: 'onChangeComparator',
	        value: function onChangeComparator(event) {
	            if (this.refs.numberFilter.value === "") {
	                return;
	            }
	            this.props.filterHandler({ number: this.refs.numberFilter.value, comparator: event.target.value }, _Const2['default'].FILTER_TYPE.NUMBER);
	        }
	    }, {
	        key: 'getComparatorOptions',
	        value: function getComparatorOptions() {
	            var optionTags = [];
	            optionTags.push(_react2['default'].createElement('option', { key: '-1' }));
	            for (var i = 0; i < this.numberComparators.length; i++) {
	                optionTags.push(_react2['default'].createElement(
	                    'option',
	                    { key: i, value: this.numberComparators[i] },
	                    this.numberComparators[i]
	                ));
	            };
	            return optionTags;
	        }
	    }, {
	        key: 'getNumberOptions',
	        value: function getNumberOptions() {
	            var optionTags = [];
	            var options = this.props.options;
	
	            optionTags.push(_react2['default'].createElement(
	                'option',
	                { key: '-1', value: '' },
	                this.props.placeholder || 'Select ' + this.props.columnName + '...'
	            ));
	            for (var i = 0; i < options.length; i++) {
	                optionTags.push(_react2['default'].createElement(
	                    'option',
	                    { key: i, value: options[i] },
	                    options[i]
	                ));
	            };
	            return optionTags;
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (this.refs.numberFilterComparator.value && this.refs.numberFilter.value) {
	                this.props.filterHandler({ number: this.refs.numberFilter.value,
	                    comparator: this.refs.numberFilterComparator.value }, _Const2['default'].FILTER_TYPE.NUMBER);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var selectClass = (0, _classnames2['default'])("select-filter", "number-filter-input", "form-control", { "placeholder-selected": this.state.isPlaceholderSelected });
	
	            return _react2['default'].createElement(
	                'div',
	                { className: 'filter number-filter' },
	                _react2['default'].createElement(
	                    'select',
	                    { ref: 'numberFilterComparator',
	                        className: 'number-filter-comparator form-control',
	                        onChange: this.onChangeComparator,
	                        defaultValue: this.props.defaultValue ? this.props.defaultValue.comparator : "" },
	                    this.getComparatorOptions()
	                ),
	                this.props.options ? _react2['default'].createElement(
	                    'select',
	                    { ref: 'numberFilter',
	                        className: selectClass,
	                        onChange: this.onChangeNumberSet,
	                        defaultValue: this.props.defaultValue ? this.props.defaultValue.number : "" },
	                    this.getNumberOptions()
	                ) : _react2['default'].createElement('input', { ref: 'numberFilter',
	                    type: 'number',
	                    className: 'number-filter-input form-control',
	                    placeholder: this.props.placeholder || 'Enter ' + this.props.columnName + '...',
	                    onChange: this.onChangeNumber,
	                    defaultValue: this.props.defaultValue ? this.props.defaultValue.number : "" })
	            );
	        }
	    }]);
	
	    return NumberFilter;
	})(_react2['default'].Component);
	
	;
	
	NumberFilter.propTypes = {
	    filterHandler: _react2['default'].PropTypes.func.isRequired,
	    options: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.number),
	    defaultValue: _react2['default'].PropTypes.shape({
	        number: _react2['default'].PropTypes.number,
	        comparator: _react2['default'].PropTypes.oneOf(legalComparators)
	    }),
	    delay: _react2['default'].PropTypes.number,
	    numberComparators: function numberComparators(props, propName) {
	        if (!props[propName]) {
	            return;
	        }
	        for (var i = 0; i < props[propName].length; i++) {
	            var comparatorIsValid = false;
	            for (var j = 0; j < legalComparators.length; j++) {
	                if (legalComparators[j] === props[propName][i]) {
	                    comparatorIsValid = true;
	                    break;
	                }
	            }
	            if (!comparatorIsValid) {
	                return new Error('Number comparator provided is not supported. Use only ' + legalComparators);
	            }
	        }
	    },
	    placeholder: _react2['default'].PropTypes.string,
	    columnName: _react2['default'].PropTypes.string
	};
	
	NumberFilter.defaultProps = {
	    delay: _Const2['default'].FILTER_DELAY
	};
	
	exports['default'] = NumberFilter;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhNGU5OWFhOTNhZjlkZGQxMzQyNSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Jvb3RzdHJhcFRhYmxlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9Iiwid2VicGFjazovLy8uL34vY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RhYmxlSGVhZGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdERPTVwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1kb21cIixcImNvbW1vbmpzXCI6XCJyZWFjdC1kb21cIixcImFtZFwiOlwicmVhY3QtZG9tXCJ9Iiwid2VicGFjazovLy8uL3NyYy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9TZWxlY3RSb3dIZWFkZXJDb2x1bW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RhYmxlQm9keS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVGFibGVSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RhYmxlQ29sdW1uLmpzIiwid2VicGFjazovLy8uL3NyYy9UYWJsZUVkaXRDb2x1bW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtdG9hc3RyL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXRvYXN0ci9saWIvVG9hc3RDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1hZGRvbnMtdXBkYXRlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL3VwZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9PYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vZmJqcy9saWIva2V5T2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9mYmpzL2xpYi9pbnZhcmlhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC10b2FzdHIvbGliL1RvYXN0TWVzc2FnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXRvYXN0ci9saWIvVG9hc3RNZXNzYWdlL2FuaW1hdGlvbk1peGluLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL1JlYWN0VHJhbnNpdGlvbkV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL34vZWxlbWVudC1jbGFzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXRvYXN0ci9saWIvVG9hc3RNZXNzYWdlL2pRdWVyeU1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdpbmF0aW9uL1BhZ2luYXRpb25MaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdpbmF0aW9uL1BhZ2VCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xiYXIvVG9vbEJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVGFibGVGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL1RhYmxlRGF0YVN0b3JlLmpzIiwid2VicGFjazovLy8uL34vZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3N2X2V4cG9ydF91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9maWxlc2F2ZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9GaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RhYmxlSGVhZGVyQ29sdW1uLmpzIiwid2VicGFjazovLy8uL3NyYy9maWx0ZXJzL0RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpbHRlcnMvVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmlsdGVycy9TZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpbHRlcnMvTnVtYmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OzJDQ3RDMkIsQ0FBa0I7Ozs7OENBQ2YsRUFBcUI7Ozs7Z0RBQ3hCLEVBQXdCOztBQUVuRCxLQUFHLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBQztBQUMvQixTQUFNLENBQUMsY0FBYyw4QkFBaUIsQ0FBQztBQUN2QyxTQUFNLENBQUMsaUJBQWlCLGlDQUFvQixDQUFDO0FBQzdDLFNBQU0sQ0FBQyxZQUFZLG9DQUFlLENBQUM7RUFDcEM7c0JBQ2M7QUFDYixpQkFBYztBQUNkLG9CQUFpQjtBQUNqQixlQUFZO0VBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ2JpQixDQUFPOzs7O3VDQUNKLENBQVk7Ozs7a0NBQ2YsQ0FBUzs7Ozt3Q0FDSCxDQUFlOzs7O3NDQUNqQixDQUFhOzs7O3FEQUNSLEVBQTZCOzs7OzJDQUNwQyxFQUFtQjs7Ozt3Q0FDZixFQUFlOzs7O2dEQUNWLEVBQXdC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Q0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUN4TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW1CLFdBQVc7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsU0FBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLGdCQUFlLFNBQVM7QUFDeEI7O0FBRUE7QUFDQTtBQUNBLGdCQUFlLFNBQVM7QUFDeEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBRztBQUNILHFCQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FB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QU07QUFDOUIsbUJBQVUsRUFBRSxtQkFBTSxTQUFTLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO01BQ3RELENBQUM7QUFDRixVQUFLLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07QUFDN0Isc0JBQWlCLEVBQUUsMkJBQVMsS0FBSyxFQUFFLFFBQVEsRUFBRTtBQUN6QyxhQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQ2xCLG9CQUFPO1VBQ1Y7QUFDRCxjQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM3QyxpQkFBSSxpQkFBaUIsR0FBRyxLQUFLLENBQUM7QUFDOUIsa0JBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDOUMscUJBQUksZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQzVDLHNDQUFpQixHQUFHLElBQUksQ0FBQztBQUN6QiwyQkFBTTtrQkFDVDtjQUNKO0FBQ0QsaUJBQUksQ0FBQyxpQkFBaUIsRUFBRTtBQUNwQix3QkFBTyxJQUFJLEtBQUssNERBQTBELGdCQUFnQixDQUFHLENBQUM7Y0FDakc7VUFDSjtNQUNKO0FBQ0QsZ0JBQVcsRUFBRSxtQkFBTSxTQUFTLENBQUMsTUFBTTtBQUNuQyxlQUFVLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07RUFDckMsQ0FBQzs7QUFFRixhQUFZLENBQUMsWUFBWSxHQUFHO0FBQ3hCLFVBQUssRUFBRSxtQkFBTSxZQUFZO0VBQzVCLENBQUM7O3NCQUVhLFlBQVkiLCJmaWxlIjoicmVhY3QtYm9vdHN0cmFwLXRhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUmVhY3RCb290c3RyYXBUYWJsZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJSZWFjdEJvb3RzdHJhcFRhYmxlXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0sIHJvb3RbXCJSZWFjdERPTVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82X18pIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGE0ZTk5YWE5M2FmOWRkZDEzNDI1XG4gKiovIiwiaW1wb3J0IEJvb3RzdHJhcFRhYmxlIGZyb20gJy4vQm9vdHN0cmFwVGFibGUnO1xyXG5pbXBvcnQgVGFibGVIZWFkZXJDb2x1bW4gZnJvbSAnLi9UYWJsZUhlYWRlckNvbHVtbic7XHJcbmltcG9ydCB7VGFibGVEYXRhU2V0fSBmcm9tICcuL3N0b3JlL1RhYmxlRGF0YVN0b3JlJztcclxuXHJcbmlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKXtcclxuICB3aW5kb3cuQm9vdHN0cmFwVGFibGUgPSBCb290c3RyYXBUYWJsZTtcclxuICB3aW5kb3cuVGFibGVIZWFkZXJDb2x1bW4gPSBUYWJsZUhlYWRlckNvbHVtbjtcclxuICB3aW5kb3cuVGFibGVEYXRhU2V0ID0gVGFibGVEYXRhU2V0O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBCb290c3RyYXBUYWJsZSxcclxuICBUYWJsZUhlYWRlckNvbHVtbixcclxuICBUYWJsZURhdGFTZXRcclxufTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NTZXQgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBDb25zdCBmcm9tICcuL0NvbnN0JztcclxuaW1wb3J0IFRhYmxlSGVhZGVyIGZyb20gJy4vVGFibGVIZWFkZXInO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJy4vVGFibGVCb2R5JztcclxuaW1wb3J0IFBhZ2luYXRpb25MaXN0IGZyb20gJy4vcGFnaW5hdGlvbi9QYWdpbmF0aW9uTGlzdCc7XHJcbmltcG9ydCBUb29sQmFyIGZyb20gJy4vdG9vbGJhci9Ub29sQmFyJztcclxuaW1wb3J0IFRhYmxlRmlsdGVyIGZyb20gJy4vVGFibGVGaWx0ZXInO1xyXG5pbXBvcnQge1RhYmxlRGF0YVN0b3JlfSBmcm9tICcuL3N0b3JlL1RhYmxlRGF0YVN0b3JlJztcclxuaW1wb3J0IGV4cG9ydENTViBmcm9tICcuL2Nzdl9leHBvcnRfdXRpbCc7XHJcbmltcG9ydCB7RmlsdGVyfSBmcm9tICcuL0ZpbHRlcic7XHJcblxyXG5jbGFzcyBCb290c3RyYXBUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5fYXR0YWNoQ2VsbEVkaXRGdW5jKCk7XHJcblxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRoaXMucHJvcHMuZGF0YSkpIHtcclxuICAgICAgdGhpcy5zdG9yZSA9IG5ldyBUYWJsZURhdGFTdG9yZSh0aGlzLnByb3BzLmRhdGEuZ2V0RGF0YSgpKTtcclxuICAgICAgdGhpcy5wcm9wcy5kYXRhLmNsZWFyKCk7XHJcbiAgICAgIHRoaXMucHJvcHMuZGF0YS5vbignY2hhbmdlJywgKGRhdGEpID0+IHtcclxuICAgICAgICB0aGlzLnN0b3JlLnNldERhdGEoZGF0YSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBkYXRhOiB0aGlzLmdldFRhYmxlRGF0YSgpXHJcbiAgICAgICAgfSlcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgY29weSA9IHRoaXMucHJvcHMuZGF0YS5zbGljZSgpO1xyXG4gICAgICB0aGlzLnN0b3JlID0gbmV3IFRhYmxlRGF0YVN0b3JlKGNvcHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5pdFRhYmxlKHRoaXMucHJvcHMpO1xyXG5cclxuICAgIGlmICh0aGlzLmZpbHRlcikge1xyXG4gICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgdGhpcy5maWx0ZXIub24oJ29uRmlsdGVyQ2hhbmdlJywgKGN1cnJlbnRGaWx0ZXIpID0+IHtcclxuICAgICAgICBzZWxmLmhhbmRsZUZpbHRlckRhdGEoY3VycmVudEZpbHRlcik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdFJvdyAmJiB0aGlzLnByb3BzLnNlbGVjdFJvdy5zZWxlY3RlZCkge1xyXG4gICAgICBsZXQgY29weSA9IHRoaXMucHJvcHMuc2VsZWN0Um93LnNlbGVjdGVkLnNsaWNlKCk7XHJcbiAgICAgIHRoaXMuc3RvcmUuc2V0U2VsZWN0ZWRSb3dLZXkoY29weSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGF0YTogdGhpcy5nZXRUYWJsZURhdGEoKSxcclxuICAgICAgc2VsZWN0ZWRSb3dLZXlzOiB0aGlzLnN0b3JlLmdldFNlbGVjdGVkUm93S2V5cygpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaW5pdFRhYmxlKHByb3BzKXtcclxuICAgIGxldCB7a2V5RmllbGR9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgaXNLZXlGaWVsZERlZmluZWQgPSB0eXBlb2Yga2V5RmllbGQgPT09ICdzdHJpbmcnICYmIGtleUZpZWxkLmxlbmd0aDtcclxuICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2gocHJvcHMuY2hpbGRyZW4sIGNvbHVtbj0+IHtcclxuICAgICAgaWYgKGNvbHVtbi5wcm9wcy5pc0tleSkge1xyXG4gICAgICAgIGlmIChrZXlGaWVsZCkge1xyXG4gICAgICAgICAgdGhyb3cgXCJFcnJvci4gTXVsdGlwbGUga2V5IGNvbHVtbiBiZSBkZXRlY3RlZCBpbiBUYWJsZUhlYWRlckNvbHVtbi5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAga2V5RmllbGQgPSBjb2x1bW4ucHJvcHMuZGF0YUZpZWxkO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2x1bW4ucHJvcHMuZmlsdGVyKSB7XHJcbiAgICAgICAgLy8gYSBjb2x1bW4gY29udGFpbnMgYSBmaWx0ZXJcclxuICAgICAgICBpZiAoIXRoaXMuZmlsdGVyKSB7XHJcbiAgICAgICAgICAvLyBmaXJzdCB0aW1lIGNyZWF0ZSB0aGUgZmlsdGVyIG9uIHRoZSBCb290c3RyYXBUYWJsZVxyXG4gICAgICAgICAgdGhpcy5maWx0ZXIgPSBuZXcgRmlsdGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHBhc3MgdGhlIGZpbHRlciB0byBjb2x1bW4gd2l0aCBmaWx0ZXJcclxuICAgICAgICBjb2x1bW4ucHJvcHMuZmlsdGVyLmVtaXR0ZXIgPSB0aGlzLmZpbHRlcjtcclxuICAgICAgfVxyXG4gICAgfSwgdGhpcyk7XHJcblxyXG4gICAgbGV0IGNvbEluZm9zID0gdGhpcy5nZXRDb2x1bW5zRGVzY3JpcHRpb24ocHJvcHMpLnJlZHVjZSgoIHByZXYsIGN1cnIgKSA9PiB7XHJcbiAgICAgIHByZXZbY3Vyci5uYW1lXSA9IGN1cnI7XHJcbiAgICAgIHJldHVybiBwcmV2O1xyXG4gICAgfSwge30pO1xyXG5cclxuICAgIGlmICghaXNLZXlGaWVsZERlZmluZWQgJiYgIWtleUZpZWxkKVxyXG4gICAgICB0aHJvdyBgRXJyb3IuIE5vIGFueSBrZXkgY29sdW1uIGRlZmluZWQgaW4gVGFibGVIZWFkZXJDb2x1bW4uXHJcbiAgICAgICAgICAgIFVzZSAnaXNLZXk9e3RydWV9JyB0byBzcGVjaWZ5IGEgdW5pcXVlIGNvbHVtbiBhZnRlciB2ZXJzaW9uIDAuNS40LmA7XHJcblxyXG4gICAgdGhpcy5zdG9yZS5zZXRQcm9wcyh7XHJcbiAgICAgIGlzUGFnaW5hdGlvbjogcHJvcHMucGFnaW5hdGlvbixcclxuICAgICAga2V5RmllbGQ6IGtleUZpZWxkLFxyXG4gICAgICBjb2xJbmZvczogY29sSW5mb3MsXHJcbiAgICAgIG11bHRpQ29sdW1uU2VhcmNoOiBwcm9wcy5tdWx0aUNvbHVtblNlYXJjaCxcclxuICAgICAgcmVtb3RlOiB0aGlzLmlzUmVtb3RlRGF0YVNvdXJjZSgpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFRhYmxlRGF0YSgpIHtcclxuICAgICBsZXQgcmVzdWx0ID0gW107XHJcblxyXG4gICAgIGlmKHRoaXMucHJvcHMub3B0aW9ucy5zb3J0TmFtZSAmJiB0aGlzLnByb3BzLm9wdGlvbnMuc29ydE9yZGVyKVxyXG4gICAgICAgdGhpcy5zdG9yZS5zb3J0KHRoaXMucHJvcHMub3B0aW9ucy5zb3J0T3JkZXIsIHRoaXMucHJvcHMub3B0aW9ucy5zb3J0TmFtZSk7XHJcblxyXG4gICAgIGlmICh0aGlzLnByb3BzLnBhZ2luYXRpb24pIHtcclxuICAgICAgIGxldCBwYWdlLCBzaXplUGVyUGFnZTtcclxuICAgICAgIGlmICh0aGlzLnN0b3JlLmlzQ2hhbmdlZFBhZ2UoKSkge1xyXG4gICAgICAgICBzaXplUGVyUGFnZSA9IHRoaXMucmVmcy5wYWdpbmF0aW9uLmdldFNpemVQZXJQYWdlKCk7XHJcbiAgICAgICAgIHBhZ2UgPSB0aGlzLnJlZnMucGFnaW5hdGlvbi5nZXRDdXJyZW50UGFnZSgpO1xyXG4gICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgc2l6ZVBlclBhZ2UgPSB0aGlzLnByb3BzLm9wdGlvbnMuc2l6ZVBlclBhZ2UgfHwgQ29uc3QuU0laRV9QRVJfUEFHRV9MSVNUWzBdO1xyXG4gICAgICAgICBwYWdlID0gdGhpcy5wcm9wcy5vcHRpb25zLnBhZ2UgfHwgMTtcclxuICAgICAgIH1cclxuICAgICAgIHJlc3VsdCA9IHRoaXMuc3RvcmUucGFnZShwYWdlLCBzaXplUGVyUGFnZSkuZ2V0KCk7XHJcbiAgICAgfSBlbHNlIHtcclxuICAgICAgIHJlc3VsdCA9IHRoaXMuc3RvcmUuZ2V0KCk7XHJcbiAgICAgfVxyXG4gICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBnZXRDb2x1bW5zRGVzY3JpcHRpb24oeyBjaGlsZHJlbiB9KSB7XHJcbiAgICByZXR1cm4gY2hpbGRyZW4ubWFwKChjb2x1bW4sIGkpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBjb2x1bW4ucHJvcHMuZGF0YUZpZWxkLFxyXG4gICAgICAgIGFsaWduOiBjb2x1bW4ucHJvcHMuZGF0YUFsaWduLFxyXG4gICAgICAgIHNvcnQ6IGNvbHVtbi5wcm9wcy5kYXRhU29ydCxcclxuICAgICAgICBmb3JtYXQ6IGNvbHVtbi5wcm9wcy5kYXRhRm9ybWF0LFxyXG4gICAgICAgIGZvcm1hdEV4dHJhRGF0YTogY29sdW1uLnByb3BzLmZvcm1hdEV4dHJhRGF0YSxcclxuICAgICAgICBmaWx0ZXJGb3JtYXR0ZWQ6IGNvbHVtbi5wcm9wcy5maWx0ZXJGb3JtYXR0ZWQsXHJcbiAgICAgICAgZWRpdGFibGU6IGNvbHVtbi5wcm9wcy5lZGl0YWJsZSxcclxuICAgICAgICBoaWRkZW46IGNvbHVtbi5wcm9wcy5oaWRkZW4sXHJcbiAgICAgICAgY2xhc3NOYW1lOiBjb2x1bW4ucHJvcHMuY29sdW1uQ2xhc3NOYW1lLFxyXG4gICAgICAgIHdpZHRoOiBjb2x1bW4ucHJvcHMud2lkdGgsXHJcbiAgICAgICAgdGV4dDogY29sdW1uLnByb3BzLmNoaWxkcmVuLFxyXG4gICAgICAgIHNvcnRGdW5jOiBjb2x1bW4ucHJvcHMuc29ydEZ1bmMsXHJcbiAgICAgICAgaW5kZXg6IGlcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuICAgIHRoaXMuaW5pdFRhYmxlKG5leHRQcm9wcyk7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShuZXh0UHJvcHMuZGF0YSkpIHtcclxuICAgICAgdGhpcy5zdG9yZS5zZXREYXRhKG5leHRQcm9wcy5kYXRhLnNsaWNlKCkpO1xyXG4gICAgICBsZXQgcGFnaW5hdGlvbkRvbSA9IHRoaXMucmVmcy5wYWdpbmF0aW9uO1xyXG4gICAgICBsZXQgcGFnZSA9IHBhZ2luYXRpb25Eb20gJiYgcGFnaW5hdGlvbkRvbS5nZXRDdXJyZW50UGFnZSgpIHx8IG5leHRQcm9wcy5vcHRpb25zLnBhZ2UgfHwgMTtcclxuICAgICAgbGV0IHNpemVQZXJQYWdlID0gcGFnaW5hdGlvbkRvbSAmJiBwYWdpbmF0aW9uRG9tLmdldFNpemVQZXJQYWdlKCkgfHwgbmV4dFByb3BzLm9wdGlvbnMuc2l6ZVBlclBhZ2UgfHwgQ29uc3QuU0laRV9QRVJfUEFHRV9MSVNUWzBdO1xyXG4gICAgICAvLyAjMTI1XHJcbiAgICAgIGlmKHBhZ2UgPiBNYXRoLmNlaWwobmV4dFByb3BzLmRhdGEubGVuZ3RoIC8gc2l6ZVBlclBhZ2UpKSBwYWdlID0gMTtcclxuICAgICAgbGV0IHNvcnRJbmZvID0gdGhpcy5zdG9yZS5nZXRTb3J0SW5mbygpO1xyXG4gICAgICBsZXQgc29ydEZpZWxkID0gbmV4dFByb3BzLm9wdGlvbnMuc29ydE5hbWUgfHwgKHNvcnRJbmZvID8gc29ydEluZm8uc29ydEZpZWxkIDogdW5kZWZpbmVkKTtcclxuICAgICAgbGV0IHNvcnRPcmRlciA9IG5leHRQcm9wcy5vcHRpb25zLnNvcnRPcmRlciB8fCAoc29ydEluZm8gPyBzb3J0SW5mby5vcmRlciA6IHVuZGVmaW5lZCk7XHJcbiAgICAgIGlmKHNvcnRGaWVsZCAmJiBzb3J0T3JkZXIpIHRoaXMuc3RvcmUuc29ydChzb3J0T3JkZXIsIHNvcnRGaWVsZCk7XHJcbiAgICAgIGxldCBkYXRhID0gdGhpcy5zdG9yZS5wYWdlKHBhZ2UsIHNpemVQZXJQYWdlKS5nZXQoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChuZXh0UHJvcHMuc2VsZWN0Um93ICYmIG5leHRQcm9wcy5zZWxlY3RSb3cuc2VsZWN0ZWQpIHtcclxuICAgICAgLy9zZXQgZGVmYXVsdCBzZWxlY3Qgcm93cyB0byBzdG9yZS5cclxuICAgICAgbGV0IGNvcHkgPSBuZXh0UHJvcHMuc2VsZWN0Um93LnNlbGVjdGVkLnNsaWNlKCk7XHJcbiAgICAgIHRoaXMuc3RvcmUuc2V0U2VsZWN0ZWRSb3dLZXkoY29weSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHNlbGVjdGVkUm93S2V5czogY29weVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5fYWRqdXN0SGVhZGVyV2lkdGgoKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9hZGp1c3RIZWFkZXJXaWR0aCk7XHJcbiAgICB0aGlzLnJlZnMuYm9keS5yZWZzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGxIZWFkZXIpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fYWRqdXN0SGVhZGVyV2lkdGgpO1xyXG4gICAgdGhpcy5yZWZzLmJvZHkucmVmcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsSGVhZGVyKTtcclxuICAgIGlmICh0aGlzLmZpbHRlcikge1xyXG4gICAgICB0aGlzLmZpbHRlci5yZW1vdmVBbGxMaXN0ZW5lcnMoXCJvbkZpbHRlckNoYW5nZVwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgIHRoaXMuX2FkanVzdEhlYWRlcldpZHRoKCk7XHJcbiAgICB0aGlzLl9hdHRhY2hDZWxsRWRpdEZ1bmMoKTtcclxuICAgIGlmICh0aGlzLnByb3BzLm9wdGlvbnMuYWZ0ZXJUYWJsZUNvbXBsZXRlKVxyXG4gICAgICB0aGlzLnByb3BzLm9wdGlvbnMuYWZ0ZXJUYWJsZUNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBfYXR0YWNoQ2VsbEVkaXRGdW5jKCkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuY2VsbEVkaXQpIHtcclxuICAgICAgdGhpcy5wcm9wcy5jZWxsRWRpdC5fX29uQ29tcGxldGVFZGl0X18gPSB0aGlzLmhhbmRsZUVkaXRDZWxsLmJpbmQodGhpcyk7XHJcbiAgICAgIGlmICh0aGlzLnByb3BzLmNlbGxFZGl0Lm1vZGUgIT09IENvbnN0LkNFTExfRURJVF9OT05FKVxyXG4gICAgICAgIHRoaXMucHJvcHMuc2VsZWN0Um93LmNsaWNrVG9TZWxlY3QgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBpbiB0aGUgY3VycmVudCBjb25maWd1cmF0aW9uLFxyXG4gICAqIHRoZSBkYXRhZ3JpZCBzaG91bGQgbG9hZCBpdHMgZGF0YSByZW1vdGVseS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSAge09iamVjdH0gIFtwcm9wc10gT3B0aW9uYWwuIElmIG5vdCBnaXZlbiwgdGhpcy5wcm9wcyB3aWxsIGJlIHVzZWRcclxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gICAqL1xyXG4gIGlzUmVtb3RlRGF0YVNvdXJjZShwcm9wcykge1xyXG4gICAgcmV0dXJuIChwcm9wcyB8fCB0aGlzLnByb3BzKS5yZW1vdGU7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgdmFyIHRhYmxlQ2xhc3MgPSBjbGFzc1NldChcInJlYWN0LWJzLXRhYmxlXCIpO1xyXG4gICAgdmFyIGNoaWxkcmVucyA9IHRoaXMucHJvcHMuY2hpbGRyZW47XHJcbiAgICB2YXIgc3R5bGUgPSB7XHJcbiAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQsXHJcbiAgICAgIG1heEhlaWdodDogdGhpcy5wcm9wcy5tYXhIZWlnaHRcclxuICAgIH07XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpcy5wcm9wcy5jaGlsZHJlbikpIHtcclxuICAgICAgY2hpbGRyZW5zID0gW3RoaXMucHJvcHMuY2hpbGRyZW5dO1xyXG4gICAgfVxyXG4gICAgdmFyIGNvbHVtbnMgPSB0aGlzLmdldENvbHVtbnNEZXNjcmlwdGlvbih0aGlzLnByb3BzKTtcclxuICAgIHZhciBzb3J0SW5mbyA9IHRoaXMuc3RvcmUuZ2V0U29ydEluZm8oKTtcclxuICAgIHZhciBwYWdpbmF0aW9uID0gdGhpcy5yZW5kZXJQYWdpbmF0aW9uKCk7XHJcbiAgICB2YXIgdG9vbEJhciA9IHRoaXMucmVuZGVyVG9vbEJhcigpO1xyXG4gICAgdmFyIHRhYmxlRmlsdGVyID0gdGhpcy5yZW5kZXJUYWJsZUZpbHRlcihjb2x1bW5zKTtcclxuICAgIHZhciBpc1NlbGVjdEFsbCA9IHRoaXMuaXNTZWxlY3RBbGwoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtYnMtY29udGFpbmVyXCIgcmVmPVwidGFibGVcIj5cclxuICAgICAgICB7dG9vbEJhcn1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWJzLXRhYmxlLWNvbnRhaW5lclwiIHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgICAgICA8VGFibGVIZWFkZXJcclxuICAgICAgICAgICAgcmVmPVwiaGVhZGVyXCJcclxuICAgICAgICAgICAgcm93U2VsZWN0VHlwZT17dGhpcy5wcm9wcy5zZWxlY3RSb3cubW9kZX1cclxuICAgICAgICAgICAgaGlkZVNlbGVjdENvbHVtbj17dGhpcy5wcm9wcy5zZWxlY3RSb3cuaGlkZVNlbGVjdENvbHVtbn1cclxuICAgICAgICAgICAgc29ydE5hbWU9e3NvcnRJbmZvID8gc29ydEluZm8uc29ydEZpZWxkIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICBzb3J0T3JkZXI9e3NvcnRJbmZvID8gc29ydEluZm8ub3JkZXIgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgIG9uU29ydD17dGhpcy5oYW5kbGVTb3J0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgIG9uU2VsZWN0QWxsUm93PXt0aGlzLmhhbmRsZVNlbGVjdEFsbFJvdy5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICBib3JkZXJlZD17dGhpcy5wcm9wcy5ib3JkZXJlZH1cclxuICAgICAgICAgICAgY29uZGVuc2VkPXt0aGlzLnByb3BzLmNvbmRlbnNlZH1cclxuICAgICAgICAgICAgaXNGaWx0ZXJlZD17dGhpcy5maWx0ZXIgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICAgIGlzU2VsZWN0QWxsPXtpc1NlbGVjdEFsbH0+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgPC9UYWJsZUhlYWRlcj5cclxuICAgICAgICAgIDxUYWJsZUJvZHlcclxuICAgICAgICAgICAgaGVpZ2h0PXt0aGlzLnByb3BzLmhlaWdodH1cclxuICAgICAgICAgICAgbWF4SGVpZ2h0PXt0aGlzLnByb3BzLm1heEhlaWdodH1cclxuICAgICAgICAgICAgcmVmPVwiYm9keVwiXHJcbiAgICAgICAgICAgIGRhdGE9e3RoaXMuc3RhdGUuZGF0YX1cclxuICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgICAgICAgdHJDbGFzc05hbWU9e3RoaXMucHJvcHMudHJDbGFzc05hbWV9XHJcbiAgICAgICAgICAgIHN0cmlwZWQ9e3RoaXMucHJvcHMuc3RyaXBlZH1cclxuICAgICAgICAgICAgYm9yZGVyZWQ9e3RoaXMucHJvcHMuYm9yZGVyZWR9XHJcbiAgICAgICAgICAgIGhvdmVyPXt0aGlzLnByb3BzLmhvdmVyfVxyXG4gICAgICAgICAgICBrZXlGaWVsZD17dGhpcy5zdG9yZS5nZXRLZXlGaWVsZCgpfVxyXG4gICAgICAgICAgICBjb25kZW5zZWQ9e3RoaXMucHJvcHMuY29uZGVuc2VkfVxyXG4gICAgICAgICAgICBzZWxlY3RSb3c9e3RoaXMucHJvcHMuc2VsZWN0Um93fVxyXG4gICAgICAgICAgICBjZWxsRWRpdD17dGhpcy5wcm9wcy5jZWxsRWRpdH1cclxuICAgICAgICAgICAgc2VsZWN0ZWRSb3dLZXlzPXt0aGlzLnN0YXRlLnNlbGVjdGVkUm93S2V5c31cclxuICAgICAgICAgICAgb25Sb3dDbGljaz17dGhpcy5oYW5kbGVSb3dDbGljay5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICBvblNlbGVjdFJvdz17dGhpcy5oYW5kbGVTZWxlY3RSb3cuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgbm9EYXRhVGV4dD17dGhpcy5wcm9wcy5vcHRpb25zLm5vRGF0YVRleHR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHt0YWJsZUZpbHRlcn1cclxuICAgICAgICB7cGFnaW5hdGlvbn1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBpc1NlbGVjdEFsbCgpe1xyXG4gICAgdmFyIGRlZmF1bHRTZWxlY3RSb3dLZXlzID0gdGhpcy5zdG9yZS5nZXRTZWxlY3RlZFJvd0tleXMoKTtcclxuICAgIHZhciBhbGxSb3dLZXlzID0gdGhpcy5zdG9yZS5nZXRBbGxSb3drZXkoKTtcclxuICAgIGlmKGRlZmF1bHRTZWxlY3RSb3dLZXlzLmxlbmd0aCAhPT0gYWxsUm93S2V5cy5sZW5ndGgpe1xyXG4gICAgICByZXR1cm4gZGVmYXVsdFNlbGVjdFJvd0tleXMubGVuZ3RoID09PSAwID8gZmFsc2UgOiAnaW5kZXRlcm1pbmF0ZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsZWFuU2VsZWN0ZWQoKSB7XHJcbiAgICB0aGlzLnN0b3JlLnNldFNlbGVjdGVkUm93S2V5KFtdKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzZWxlY3RlZFJvd0tleXM6IFtdXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVNvcnQob3JkZXIsIHNvcnRGaWVsZCkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMub3B0aW9ucy5vblNvcnRDaGFuZ2UpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vcHRpb25zLm9uU29ydENoYW5nZShzb3J0RmllbGQsIG9yZGVyLCB0aGlzLnByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5zdG9yZS5zb3J0KG9yZGVyLCBzb3J0RmllbGQpLmdldCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGRhdGE6IHJlc3VsdFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQYWdpbmF0aW9uRGF0YShwYWdlLCBzaXplUGVyUGFnZSkge1xyXG4gICAgY29uc3Qge29uUGFnZUNoYW5nZX0gPSB0aGlzLnByb3BzLm9wdGlvbnM7XHJcbiAgICBpZiAob25QYWdlQ2hhbmdlKSB7XHJcbiAgICAgIG9uUGFnZUNoYW5nZShwYWdlLCBzaXplUGVyUGFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNSZW1vdGVEYXRhU291cmNlKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCByZXN1bHQgPSB0aGlzLnN0b3JlLnBhZ2UocGFnZSwgc2l6ZVBlclBhZ2UpLmdldCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGRhdGE6IHJlc3VsdFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVSb3dDbGljayhyb3cpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLm9wdGlvbnMub25Sb3dDbGljaykge1xyXG4gICAgICB0aGlzLnByb3BzLm9wdGlvbnMub25Sb3dDbGljayhyb3cpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlU2VsZWN0QWxsUm93KGUpIHtcclxuICAgIHZhciBpc1NlbGVjdGVkID0gZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQ7XHJcbiAgICBsZXQgc2VsZWN0ZWRSb3dLZXlzID0gW107XHJcbiAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdFJvdy5vblNlbGVjdEFsbCkge1xyXG4gICAgICByZXN1bHQgPSB0aGlzLnByb3BzLnNlbGVjdFJvdy5vblNlbGVjdEFsbChpc1NlbGVjdGVkLFxyXG4gICAgICAgIGlzU2VsZWN0ZWQgPyB0aGlzLnN0b3JlLmdldCgpIDogW10pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSAndW5kZWZpbmVkJyB8fCByZXN1bHQgIT09IGZhbHNlKSB7XHJcbiAgICAgIGlmIChpc1NlbGVjdGVkKSB7XHJcbiAgICAgICAgc2VsZWN0ZWRSb3dLZXlzID0gdGhpcy5zdG9yZS5nZXRBbGxSb3drZXkoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5zdG9yZS5zZXRTZWxlY3RlZFJvd0tleShzZWxlY3RlZFJvd0tleXMpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBzZWxlY3RlZFJvd0tleXM6IHNlbGVjdGVkUm93S2V5c1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZVNob3dPbmx5U2VsZWN0ZWQoKSB7XHJcbiAgICB0aGlzLnN0b3JlLmlnbm9yZU5vblNlbGVjdGVkKCk7XHJcbiAgICBsZXQgcmVzdWx0O1xyXG4gICAgaWYgKHRoaXMucHJvcHMucGFnaW5hdGlvbikge1xyXG4gICAgICBsZXQgc2l6ZVBlclBhZ2UgPSB0aGlzLnJlZnMucGFnaW5hdGlvbi5nZXRTaXplUGVyUGFnZSgpO1xyXG4gICAgICByZXN1bHQgPSB0aGlzLnN0b3JlLnBhZ2UoMSwgc2l6ZVBlclBhZ2UpLmdldCgpO1xyXG4gICAgICB0aGlzLnJlZnMucGFnaW5hdGlvbi5jaGFuZ2VQYWdlKDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0ID0gdGhpcy5zdG9yZS5nZXQoKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBkYXRhOiByZXN1bHRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU2VsZWN0Um93KHJvdywgaXNTZWxlY3RlZCkge1xyXG4gICAgbGV0IGN1cnJTZWxlY3RlZCA9IHRoaXMuc3RvcmUuZ2V0U2VsZWN0ZWRSb3dLZXlzKCk7XHJcbiAgICBsZXQgcm93S2V5ID0gcm93W3RoaXMuc3RvcmUuZ2V0S2V5RmllbGQoKV07XHJcbiAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdFJvdy5vblNlbGVjdCkge1xyXG4gICAgICByZXN1bHQgPSB0aGlzLnByb3BzLnNlbGVjdFJvdy5vblNlbGVjdChyb3csIGlzU2VsZWN0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSAndW5kZWZpbmVkJyB8fCByZXN1bHQgIT09IGZhbHNlKSB7XHJcbiAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdFJvdy5tb2RlID09PSBDb25zdC5ST1dfU0VMRUNUX1NJTkdMRSkge1xyXG4gICAgICAgIGN1cnJTZWxlY3RlZCA9IGlzU2VsZWN0ZWQgPyBbcm93S2V5XSA6IFtdXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGlzU2VsZWN0ZWQpIHtcclxuICAgICAgICAgIGN1cnJTZWxlY3RlZC5wdXNoKHJvd0tleSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGN1cnJTZWxlY3RlZCA9IGN1cnJTZWxlY3RlZC5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcm93S2V5ICE9PSBrZXk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc3RvcmUuc2V0U2VsZWN0ZWRSb3dLZXkoY3VyclNlbGVjdGVkKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgc2VsZWN0ZWRSb3dLZXlzOiBjdXJyU2VsZWN0ZWRcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVFZGl0Q2VsbChuZXdWYWwsIHJvd0luZGV4LCBjb2xJbmRleCkge1xyXG4gICAgbGV0IGZpZWxkTmFtZTtcclxuICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2godGhpcy5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNvbHVtbiwgaSkge1xyXG4gICAgICBpZiAoaSA9PSBjb2xJbmRleCkge1xyXG4gICAgICAgIGZpZWxkTmFtZSA9IGNvbHVtbi5wcm9wcy5kYXRhRmllbGQ7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5zdG9yZS5lZGl0KG5ld1ZhbCwgcm93SW5kZXgsIGZpZWxkTmFtZSkuZ2V0KCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZGF0YTogcmVzdWx0XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5wcm9wcy5jZWxsRWRpdC5hZnRlclNhdmVDZWxsKSB7XHJcbiAgICAgIHRoaXMucHJvcHMuY2VsbEVkaXQuYWZ0ZXJTYXZlQ2VsbCh0aGlzLnN0YXRlLmRhdGFbcm93SW5kZXhdLCBmaWVsZE5hbWUsIG5ld1ZhbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBZGRSb3dCZWdpbigpIHtcclxuICAgIGlmICh0aGlzLnJlZnMuYm9keSkge1xyXG4gICAgICAvLyB0aGlzLnJlZnMuYm9keS5jYW5jZWxFZGl0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBZGRSb3cobmV3T2JqKSB7XHJcbiAgICBsZXQgbXNnID0gbnVsbCwgcmVzdWx0O1xyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy5zdG9yZS5hZGQobmV3T2JqKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucHJvcHMucGFnaW5hdGlvbikge1xyXG4gICAgICAvL2lmIHBhZ2luYXRpb24gaXMgZW5hYmxlZCBhbmQgaW5zZXJ0IHJvdyBiZSB0cmlnZ2VyLCBjaGFuZ2UgdG8gbGFzdCBwYWdlXHJcbiAgICAgIGxldCBzaXplUGVyUGFnZSA9IHRoaXMucmVmcy5wYWdpbmF0aW9uLmdldFNpemVQZXJQYWdlKCk7XHJcbiAgICAgIGxldCBjdXJyTGFzdFBhZ2UgPSBNYXRoLmNlaWwodGhpcy5zdG9yZS5nZXREYXRhTnVtKCkgLyBzaXplUGVyUGFnZSk7XHJcbiAgICAgIHJlc3VsdCA9IHRoaXMuc3RvcmUucGFnZShjdXJyTGFzdFBhZ2UsIHNpemVQZXJQYWdlKS5nZXQoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZGF0YTogcmVzdWx0XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnJlZnMucGFnaW5hdGlvbi5jaGFuZ2VQYWdlKGN1cnJMYXN0UGFnZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXN1bHQgPSB0aGlzLnN0b3JlLmdldCgpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBkYXRhOiByZXN1bHRcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucHJvcHMub3B0aW9ucy5hZnRlckluc2VydFJvdykge1xyXG4gICAgICB0aGlzLnByb3BzLm9wdGlvbnMuYWZ0ZXJJbnNlcnRSb3cobmV3T2JqKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFNpemVQZXJQYWdlKCkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMucGFnaW5hdGlvbikge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZWZzLnBhZ2luYXRpb24uZ2V0U2l6ZVBlclBhZ2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEN1cnJlbnRQYWdlKCkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMucGFnaW5hdGlvbikge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZWZzLnBhZ2luYXRpb24uZ2V0Q3VycmVudFBhZ2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZURyb3BSb3cocm93S2V5cykge1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgbGV0IGRyb3BSb3dLZXlzID0gcm93S2V5cz9yb3dLZXlzOnRoaXMuc3RvcmUuZ2V0U2VsZWN0ZWRSb3dLZXlzKCk7XHJcbiAgICAvL2FkZCBjb25maXJtIGJlZm9yZSB0aGUgZGVsZXRlIGFjdGlvbiBpZiB0aGF0IG9wdGlvbiBpcyBzZXQuXHJcbiAgICBpZiAoZHJvcFJvd0tleXMgJiYgZHJvcFJvd0tleXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBpZiAodGhpcy5wcm9wcy5vcHRpb25zLmhhbmRsZUNvbmZpcm1EZWxldGVSb3cpe1xyXG4gICAgICAgIHRoaXMucHJvcHMub3B0aW9ucy5oYW5kbGVDb25maXJtRGVsZXRlUm93KFxyXG4gICAgICAgICAgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhhdC5kZWxldGVSb3coZHJvcFJvd0tleXMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSBpZiAoY29uZmlybSgnQXJlIHlvdSBzdXJlIHdhbnQgZGVsZXRlPycpKSB7XHJcbiAgICAgICAgdGhpcy5kZWxldGVSb3coZHJvcFJvd0tleXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZWxldGVSb3coZHJvcFJvd0tleXMpe1xyXG5cclxuICAgIGxldCByZXN1bHQ7XHJcbiAgICB0aGlzLnN0b3JlLnJlbW92ZShkcm9wUm93S2V5cyk7ICAvL3JlbW92ZSBzZWxlY3RlZCBSb3dcclxuICAgIHRoaXMuc3RvcmUuc2V0U2VsZWN0ZWRSb3dLZXkoW10pOyAgLy9jbGVhciBzZWxlY3RlZCByb3cga2V5XHJcblxyXG4gICAgaWYgKHRoaXMucHJvcHMucGFnaW5hdGlvbikge1xyXG4gICAgICBsZXQgc2l6ZVBlclBhZ2UgPSB0aGlzLnJlZnMucGFnaW5hdGlvbi5nZXRTaXplUGVyUGFnZSgpO1xyXG4gICAgICBsZXQgY3Vyckxhc3RQYWdlID0gTWF0aC5jZWlsKHRoaXMuc3RvcmUuZ2V0RGF0YU51bSgpIC8gc2l6ZVBlclBhZ2UpO1xyXG4gICAgICBsZXQgY3VycmVudFBhZ2UgPSB0aGlzLnJlZnMucGFnaW5hdGlvbi5nZXRDdXJyZW50UGFnZSgpO1xyXG4gICAgICBpZiAoY3VycmVudFBhZ2UgPiBjdXJyTGFzdFBhZ2UpXHJcbiAgICAgICAgY3VycmVudFBhZ2UgPSBjdXJyTGFzdFBhZ2U7XHJcbiAgICAgIHJlc3VsdCA9IHRoaXMuc3RvcmUucGFnZShjdXJyZW50UGFnZSwgc2l6ZVBlclBhZ2UpLmdldCgpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBkYXRhOiByZXN1bHQsXHJcbiAgICAgICAgc2VsZWN0ZWRSb3dLZXlzOiB0aGlzLnN0b3JlLmdldFNlbGVjdGVkUm93S2V5cygpXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnJlZnMucGFnaW5hdGlvbi5jaGFuZ2VQYWdlKGN1cnJlbnRQYWdlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdCA9IHRoaXMuc3RvcmUuZ2V0KCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGRhdGE6IHJlc3VsdCxcclxuICAgICAgICBzZWxlY3RlZFJvd0tleXM6IHRoaXMuc3RvcmUuZ2V0U2VsZWN0ZWRSb3dLZXlzKClcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vcHRpb25zLmFmdGVyRGVsZXRlUm93KSB7XHJcbiAgICAgIHRoaXMucHJvcHMub3B0aW9ucy5hZnRlckRlbGV0ZVJvdyhkcm9wUm93S2V5cyk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgaGFuZGxlRmlsdGVyRGF0YShmaWx0ZXJPYmopIHtcclxuICAgIHRoaXMuc3RvcmUuZmlsdGVyKGZpbHRlck9iaik7XHJcbiAgICBsZXQgcmVzdWx0O1xyXG4gICAgaWYgKHRoaXMucHJvcHMucGFnaW5hdGlvbikge1xyXG4gICAgICBsZXQgc2l6ZVBlclBhZ2UgPSB0aGlzLnJlZnMucGFnaW5hdGlvbi5nZXRTaXplUGVyUGFnZSgpO1xyXG4gICAgICByZXN1bHQgPSB0aGlzLnN0b3JlLnBhZ2UoMSwgc2l6ZVBlclBhZ2UpLmdldCgpO1xyXG4gICAgICB0aGlzLnJlZnMucGFnaW5hdGlvbi5jaGFuZ2VQYWdlKDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0ID0gdGhpcy5zdG9yZS5nZXQoKTtcclxuICAgIH1cclxuICAgIGlmKHRoaXMucHJvcHMub3B0aW9ucy5hZnRlckNvbHVtbkZpbHRlcilcclxuICAgICAgdGhpcy5wcm9wcy5vcHRpb25zLmFmdGVyQ29sdW1uRmlsdGVyKGZpbHRlck9iaixcclxuICAgICAgICB0aGlzLnN0b3JlLmdldERhdGFJZ25vcmluZ1BhZ2luYXRpb24oKSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZGF0YTogcmVzdWx0XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUV4cG9ydENTVigpIHtcclxuICAgIHZhciByZXN1bHQgPSB0aGlzLnN0b3JlLmdldERhdGFJZ25vcmluZ1BhZ2luYXRpb24oKTtcclxuICAgIHZhciBrZXlzID0gW107XHJcbiAgICB0aGlzLnByb3BzLmNoaWxkcmVuLm1hcChmdW5jdGlvbihjb2x1bW4pIHtcclxuICAgICAgaWYgKGNvbHVtbi5wcm9wcy5oaWRkZW4gPT09IGZhbHNlKSB7XHJcbiAgICAgICAga2V5cy5wdXNoKGNvbHVtbi5wcm9wcy5kYXRhRmllbGQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGV4cG9ydENTVihyZXN1bHQsIGtleXMsIHRoaXMucHJvcHMuY3N2RmlsZU5hbWUpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU2VhcmNoKHNlYXJjaFRleHQpIHtcclxuICAgIHRoaXMuc3RvcmUuc2VhcmNoKHNlYXJjaFRleHQpO1xyXG4gICAgbGV0IHJlc3VsdDtcclxuICAgIGlmICh0aGlzLnByb3BzLnBhZ2luYXRpb24pIHtcclxuICAgICAgbGV0IHNpemVQZXJQYWdlID0gdGhpcy5yZWZzLnBhZ2luYXRpb24uZ2V0U2l6ZVBlclBhZ2UoKTtcclxuICAgICAgcmVzdWx0ID0gdGhpcy5zdG9yZS5wYWdlKDEsIHNpemVQZXJQYWdlKS5nZXQoKTtcclxuICAgICAgdGhpcy5yZWZzLnBhZ2luYXRpb24uY2hhbmdlUGFnZSgxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdCA9IHRoaXMuc3RvcmUuZ2V0KCk7XHJcbiAgICB9XHJcbiAgICBpZih0aGlzLnByb3BzLm9wdGlvbnMuYWZ0ZXJTZWFyY2gpXHJcbiAgICAgIHRoaXMucHJvcHMub3B0aW9ucy5hZnRlclNlYXJjaChzZWFyY2hUZXh0LCB0aGlzLnN0b3JlLmdldERhdGFJZ25vcmluZ1BhZ2luYXRpb24oKSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZGF0YTogcmVzdWx0XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlclBhZ2luYXRpb24oKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5wYWdpbmF0aW9uKSB7XHJcbiAgICAgIGxldCBkYXRhU2l6ZTtcclxuICAgICAgaWYgKHRoaXMuaXNSZW1vdGVEYXRhU291cmNlKCkpIHtcclxuICAgICAgICBkYXRhU2l6ZSA9IHRoaXMucHJvcHMuZmV0Y2hJbmZvLmRhdGFUb3RhbFNpemU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGF0YVNpemUgPSB0aGlzLnN0b3JlLmdldERhdGFOdW0oKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtZm9vdGVyLXBhZ2luYXRpb25cIj5cclxuICAgICAgICAgIDxQYWdpbmF0aW9uTGlzdFxyXG4gICAgICAgICAgICByZWY9XCJwYWdpbmF0aW9uXCJcclxuICAgICAgICAgICAgY3VyclBhZ2U9e3RoaXMucHJvcHMub3B0aW9ucy5wYWdlIHx8IDF9XHJcbiAgICAgICAgICAgIGNoYW5nZVBhZ2U9e3RoaXMuaGFuZGxlUGFnaW5hdGlvbkRhdGEuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgc2l6ZVBlclBhZ2U9e3RoaXMucHJvcHMub3B0aW9ucy5zaXplUGVyUGFnZSB8fCBDb25zdC5TSVpFX1BFUl9QQUdFX0xJU1RbMF19XHJcbiAgICAgICAgICAgIHNpemVQZXJQYWdlTGlzdD17dGhpcy5wcm9wcy5vcHRpb25zLnNpemVQZXJQYWdlTGlzdCB8fCBDb25zdC5TSVpFX1BFUl9QQUdFX0xJU1R9XHJcbiAgICAgICAgICAgIHBhZ2luYXRpb25TaXplPXt0aGlzLnByb3BzLm9wdGlvbnMucGFnaW5hdGlvblNpemUgfHwgQ29uc3QuUEFHSU5BVElPTl9TSVpFfVxyXG4gICAgICAgICAgICByZW1vdGU9e3RoaXMuaXNSZW1vdGVEYXRhU291cmNlKCl9XHJcbiAgICAgICAgICAgIGRhdGFTaXplPXtkYXRhU2l6ZX1cclxuICAgICAgICAgICAgb25TaXplUGVyUGFnZUxpc3Q9e3RoaXMucHJvcHMub3B0aW9ucy5vblNpemVQZXJQYWdlTGlzdH1cclxuICAgICAgICAgICAgcHJlUGFnZT17dGhpcy5wcm9wcy5vcHRpb25zLnByZVBhZ2UgfHwgQ29uc3QuUFJFX1BBR0V9XHJcbiAgICAgICAgICAgIG5leHRQYWdlPXt0aGlzLnByb3BzLm9wdGlvbnMubmV4dFBhZ2UgfHwgQ29uc3QuTkVYVF9QQUdFfVxyXG4gICAgICAgICAgICBmaXJzdFBhZ2U9e3RoaXMucHJvcHMub3B0aW9ucy5maXJzdFBhZ2UgfHwgQ29uc3QuRklSU1RfUEFHRX1cclxuICAgICAgICAgICAgbGFzdFBhZ2U9e3RoaXMucHJvcHMub3B0aW9ucy5sYXN0UGFnZSB8fCBDb25zdC5MQVNUX1BBR0V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICByZW5kZXJUb29sQmFyKCkge1xyXG4gICAgbGV0IGVuYWJsZVNob3dPbmx5U2VsZWN0ZWQgPSB0aGlzLnByb3BzLnNlbGVjdFJvdyAmJiB0aGlzLnByb3BzLnNlbGVjdFJvdy5zaG93T25seVNlbGVjdGVkO1xyXG4gICAgaWYgKGVuYWJsZVNob3dPbmx5U2VsZWN0ZWRcclxuICAgICAgICB8fCB0aGlzLnByb3BzLmluc2VydFJvd1xyXG4gICAgICAgIHx8IHRoaXMucHJvcHMuZGVsZXRlUm93XHJcbiAgICAgICAgfHwgdGhpcy5wcm9wcy5zZWFyY2hcclxuICAgICAgICB8fCB0aGlzLnByb3BzLmV4cG9ydENTVikge1xyXG4gICAgICBsZXQgY29sdW1ucztcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5wcm9wcy5jaGlsZHJlbikpIHtcclxuICAgICAgICBjb2x1bW5zID0gdGhpcy5wcm9wcy5jaGlsZHJlbi5tYXAoZnVuY3Rpb24gKGNvbHVtbikge1xyXG4gICAgICAgICAgdmFyIHByb3BzID0gY29sdW1uLnByb3BzO1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmFtZTogcHJvcHMuY2hpbGRyZW4sXHJcbiAgICAgICAgICAgIGZpZWxkOiBwcm9wcy5kYXRhRmllbGQsXHJcbiAgICAgICAgICAgIC8vd2hlbiB5b3Ugd2FudCBzYW1lIGF1dG8gZ2VuZXJhdGUgdmFsdWUgYW5kIG5vdCBhbGxvdyBlZGl0LCBleGFtcGxlIElEIGZpZWxkXHJcbiAgICAgICAgICAgIGF1dG9WYWx1ZTogcHJvcHMuYXV0b1ZhbHVlIHx8IGZhbHNlLFxyXG4gICAgICAgICAgICAvL2ZvciBjcmVhdGUgZWRpdG9yLCBubyBwYXJhbXMgZm9yIGNvbHVtbi5lZGl0YWJsZSgpIGluZGljYXRlIHRoYXQgZWRpdG9yIGZvciBuZXcgcm93XHJcbiAgICAgICAgICAgIGVkaXRhYmxlOiBwcm9wcy5lZGl0YWJsZSAmJiAodHlwZW9mIHByb3BzLmVkaXRhYmxlID09PSBcImZ1bmN0aW9uXCIpID8gcHJvcHMuZWRpdGFibGUoKSA6IHByb3BzLmVkaXRhYmxlLFxyXG4gICAgICAgICAgICBmb3JtYXQ6IHByb3BzLmRhdGFGb3JtYXQgPyBmdW5jdGlvbih2YWx1ZSl7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHByb3BzLmRhdGFGb3JtYXQodmFsdWUsIG51bGwsIHByb3BzLmZvcm1hdEV4dHJhRGF0YSkucmVwbGFjZSgvPC4qPz4vZywnJyk7XHJcbiAgICAgICAgICAgIH0gOiBmYWxzZVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb2x1bW5zID0gW3tcclxuICAgICAgICAgIG5hbWU6IHRoaXMucHJvcHMuY2hpbGRyZW4ucHJvcHMuY2hpbGRyZW4sXHJcbiAgICAgICAgICBmaWVsZDogdGhpcy5wcm9wcy5jaGlsZHJlbi5wcm9wcy5kYXRhRmllbGQsXHJcbiAgICAgICAgICBlZGl0YWJsZTogdGhpcy5wcm9wcy5jaGlsZHJlbi5wcm9wcy5lZGl0YWJsZVxyXG4gICAgICAgIH1dO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sLWJhclwiPlxyXG4gICAgICAgICAgPFRvb2xCYXJcclxuICAgICAgICAgICAgY2xlYXJTZWFyY2g9e3RoaXMucHJvcHMub3B0aW9ucy5jbGVhclNlYXJjaH1cclxuICAgICAgICAgICAgZW5hYmxlSW5zZXJ0PXt0aGlzLnByb3BzLmluc2VydFJvd31cclxuICAgICAgICAgICAgZW5hYmxlRGVsZXRlPXt0aGlzLnByb3BzLmRlbGV0ZVJvd31cclxuICAgICAgICAgICAgZW5hYmxlU2VhcmNoPXt0aGlzLnByb3BzLnNlYXJjaH1cclxuICAgICAgICAgICAgZW5hYmxlRXhwb3J0Q1NWPXt0aGlzLnByb3BzLmV4cG9ydENTVn1cclxuICAgICAgICAgICAgZW5hYmxlU2hvd09ubHlTZWxlY3RlZD17ZW5hYmxlU2hvd09ubHlTZWxlY3RlZH1cclxuICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgICAgICAgc2VhcmNoUGxhY2Vob2xkZXI9e3RoaXMucHJvcHMuc2VhcmNoUGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgIG9uQWRkUm93PXt0aGlzLmhhbmRsZUFkZFJvdy5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICBvbkFkZFJvd0JlZ2luPXt0aGlzLmhhbmRsZUFkZFJvd0JlZ2luLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgIG9uRHJvcFJvdz17dGhpcy5oYW5kbGVEcm9wUm93LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgIG9uU2VhcmNoPXt0aGlzLmhhbmRsZVNlYXJjaC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICBvbkV4cG9ydENTVj17dGhpcy5oYW5kbGVFeHBvcnRDU1YuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgb25TaG93T25seVNlbGVjdGVkPXt0aGlzLmhhbmRsZVNob3dPbmx5U2VsZWN0ZWQuYmluZCh0aGlzKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyVGFibGVGaWx0ZXIoY29sdW1ucykge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuY29sdW1uRmlsdGVyKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRhYmxlRmlsdGVyIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgIHJvd1NlbGVjdFR5cGU9e3RoaXMucHJvcHMuc2VsZWN0Um93Lm1vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgIG9uRmlsdGVyPXt0aGlzLmhhbmRsZUZpbHRlckRhdGEuYmluZCh0aGlzKX0vPlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfc2Nyb2xsSGVhZGVyID0gKGUpID0+IHtcclxuICAgIHRoaXMucmVmcy5oZWFkZXIucmVmcy5jb250YWluZXIuc2Nyb2xsTGVmdCA9IGUuY3VycmVudFRhcmdldC5zY3JvbGxMZWZ0O1xyXG4gIH1cclxuXHJcbiAgX2FkanVzdEhlYWRlcldpZHRoID0gKCkgPT4ge1xyXG4gICAgdmFyIHRhYmxlSGVhZGVyRG9tID0gdGhpcy5yZWZzLmhlYWRlci5yZWZzLmNvbnRhaW5lci5jaGlsZE5vZGVzWzBdO1xyXG4gICAgdmFyIHRhYmxlQm9keURvbSA9IHRoaXMucmVmcy5ib2R5LnJlZnMuY29udGFpbmVyLmNoaWxkTm9kZXNbMF07XHJcbiAgICBpZih0YWJsZUhlYWRlckRvbS5vZmZzZXRXaWR0aCAhPT0gdGFibGVCb2R5RG9tLm9mZnNldFdpZHRoKXtcclxuICAgICAgdGFibGVIZWFkZXJEb20uc3R5bGUud2lkdGggPSB0YWJsZUJvZHlEb20ub2Zmc2V0V2lkdGggKyBcInB4XCI7XHJcbiAgICB9XHJcbiAgICBjb25zdCBoZWFkZXJQcm9wcyA9IHRoaXMucmVmcy5ib2R5LmdldEJvZHlIZWFkZXJEb21Qcm9wKCk7XHJcbiAgICB0aGlzLnJlZnMuaGVhZGVyLmZpdEhlYWRlcihoZWFkZXJQcm9wcyxcclxuICAgICAgdGhpcy5yZWZzLmJvZHkucmVmcy5jb250YWluZXIuc2Nyb2xsSGVpZ2h0ID4gdGhpcy5yZWZzLmJvZHkucmVmcy5jb250YWluZXIuY2xpZW50SGVpZ2h0KTtcclxuICB9XHJcbn1cclxuXHJcbkJvb3RzdHJhcFRhYmxlLnByb3BUeXBlcyA9IHtcclxuICBrZXlGaWVsZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcclxuICBoZWlnaHQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbWF4SGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGRhdGE6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1JlYWN0LlByb3BUeXBlcy5hcnJheSwgUmVhY3QuUHJvcFR5cGVzLm9iamVjdF0pLFxyXG4gIHJlbW90ZTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsIC8vIHJlbW90ZSBkYXRhLCBkZWZhdWx0IGlzIGZhbHNlXHJcbiAgc3RyaXBlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXHJcbiAgYm9yZGVyZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxyXG4gIGhvdmVyOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcclxuICBjb25kZW5zZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxyXG4gIHBhZ2luYXRpb246IFJlYWN0LlByb3BUeXBlcy5ib29sLFxyXG4gIHNlYXJjaFBsYWNlaG9sZGVyOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHNlbGVjdFJvdzogUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIG1vZGU6IFJlYWN0LlByb3BUeXBlcy5vbmVPZihbXHJcbiAgICAgIENvbnN0LlJPV19TRUxFQ1RfTk9ORSxcclxuICAgICAgQ29uc3QuUk9XX1NFTEVDVF9TSU5HTEUsXHJcbiAgICAgIENvbnN0LlJPV19TRUxFQ1RfTVVMVElcclxuICAgIF0pLFxyXG4gICAgYmdDb2xvcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHNlbGVjdGVkOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXHJcbiAgICBvblNlbGVjdDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvblNlbGVjdEFsbDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBjbGlja1RvU2VsZWN0OiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcclxuICAgIGhpZGVTZWxlY3RDb2x1bW46IFJlYWN0LlByb3BUeXBlcy5ib29sLFxyXG4gICAgY2xpY2tUb1NlbGVjdEFuZEVkaXRDZWxsOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcclxuICAgIHNob3dPbmx5U2VsZWN0ZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sXHJcbiAgfSksXHJcbiAgY2VsbEVkaXQ6IFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBtb2RlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgYmx1clRvU2F2ZTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBhZnRlclNhdmVDZWxsOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xyXG4gIH0pLFxyXG4gIGluc2VydFJvdzogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXHJcbiAgZGVsZXRlUm93OiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcclxuICBzZWFyY2g6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxyXG4gIGNvbHVtbkZpbHRlcjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXHJcbiAgdHJDbGFzc05hbWU6IFJlYWN0LlByb3BUeXBlcy5hbnksXHJcbiAgb3B0aW9uczogUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGNsZWFyU2VhcmNoOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcclxuICAgIHNvcnROYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgc29ydE9yZGVyOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgYWZ0ZXJUYWJsZUNvbXBsZXRlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcclxuICAgIGFmdGVyRGVsZXRlUm93OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcclxuICAgIGFmdGVySW5zZXJ0Um93OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcclxuICAgIGFmdGVyU2VhcmNoOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcclxuICAgIGFmdGVyQ29sdW1uRmlsdGVyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uUm93Q2xpY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxyXG4gICAgcGFnZTogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcclxuICAgIHNpemVQZXJQYWdlTGlzdDogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgc2l6ZVBlclBhZ2U6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBwYWdpbmF0aW9uU2l6ZTogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcclxuICAgIG9uU29ydENoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvblBhZ2VDaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25TaXplUGVyUGFnZUxpc3Q6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxyXG4gICAgbm9EYXRhVGV4dDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGhhbmRsZUNvbmZpcm1EZWxldGVSb3c6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxyXG4gICAgcHJlUGFnZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG5leHRQYWdlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZmlyc3RQYWdlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbGFzdFBhZ2U6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcclxuICB9KSxcclxuICBmZXRjaEluZm86IFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBkYXRhVG90YWxTaXplOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxyXG4gIH0pLFxyXG4gIGV4cG9ydENTVjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXHJcbiAgY3N2RmlsZU5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcclxufTtcclxuQm9vdHN0cmFwVGFibGUuZGVmYXVsdFByb3BzID0ge1xyXG4gIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgbWF4SGVpZ2h0OiB1bmRlZmluZWQsXHJcbiAgc3RyaXBlZDogZmFsc2UsXHJcbiAgYm9yZGVyZWQ6IHRydWUsXHJcbiAgaG92ZXI6IGZhbHNlLFxyXG4gIGNvbmRlbnNlZDogZmFsc2UsXHJcbiAgcGFnaW5hdGlvbjogZmFsc2UsXHJcbiAgc2VhcmNoUGxhY2Vob2xkZXI6IHVuZGVmaW5lZCxcclxuICBzZWxlY3RSb3c6IHtcclxuICAgIG1vZGU6IENvbnN0LlJPV19TRUxFQ1RfTk9ORSxcclxuICAgIGJnQ29sb3I6IENvbnN0LlJPV19TRUxFQ1RfQkdfQ09MT1IsXHJcbiAgICBzZWxlY3RlZDogW10sXHJcbiAgICBvblNlbGVjdDogdW5kZWZpbmVkLFxyXG4gICAgb25TZWxlY3RBbGw6IHVuZGVmaW5lZCxcclxuICAgIGNsaWNrVG9TZWxlY3Q6IGZhbHNlLFxyXG4gICAgaGlkZVNlbGVjdENvbHVtbjogZmFsc2UsXHJcbiAgICBjbGlja1RvU2VsZWN0QW5kRWRpdENlbGw6IGZhbHNlLFxyXG4gICAgc2hvd09ubHlTZWxlY3RlZDogZmFsc2VcclxuICB9LFxyXG4gIGNlbGxFZGl0OiB7XHJcbiAgICBtb2RlOiBDb25zdC5DRUxMX0VESVRfTk9ORSxcclxuICAgIGJsdXJUb1NhdmU6IGZhbHNlLFxyXG4gICAgYWZ0ZXJTYXZlQ2VsbDogdW5kZWZpbmVkXHJcbiAgfSxcclxuICBpbnNlcnRSb3c6IGZhbHNlLFxyXG4gIGRlbGV0ZVJvdzogZmFsc2UsXHJcbiAgc2VhcmNoOiBmYWxzZSxcclxuICBtdWx0aUNvbHVtblNlYXJjaDogZmFsc2UsXHJcbiAgY29sdW1uRmlsdGVyOiBmYWxzZSxcclxuICB0ckNsYXNzTmFtZTogJycsXHJcbiAgb3B0aW9uczoge1xyXG4gICAgY2xlYXJTZWFyY2g6IGZhbHNlLFxyXG4gICAgc29ydE5hbWU6IHVuZGVmaW5lZCxcclxuICAgIHNvcnRPcmRlcjogdW5kZWZpbmVkLFxyXG4gICAgYWZ0ZXJUYWJsZUNvbXBsZXRlOiB1bmRlZmluZWQsXHJcbiAgICBhZnRlckRlbGV0ZVJvdzogdW5kZWZpbmVkLFxyXG4gICAgYWZ0ZXJJbnNlcnRSb3c6IHVuZGVmaW5lZCxcclxuICAgIGFmdGVyU2VhcmNoOiB1bmRlZmluZWQsXHJcbiAgICBhZnRlckNvbHVtbkZpbHRlcjogdW5kZWZpbmVkLFxyXG4gICAgb25Sb3dDbGljazogdW5kZWZpbmVkLFxyXG4gICAgcGFnZTogdW5kZWZpbmVkLFxyXG4gICAgc2l6ZVBlclBhZ2VMaXN0OiBDb25zdC5TSVpFX1BFUl9QQUdFX0xJU1QsXHJcbiAgICBzaXplUGVyUGFnZTogdW5kZWZpbmVkLFxyXG4gICAgcGFnaW5hdGlvblNpemU6IENvbnN0LlBBR0lOQVRJT05fU0laRSxcclxuICAgIG9uU2l6ZVBlclBhZ2VMaXN0OiB1bmRlZmluZWQsXHJcbiAgICBub0RhdGFUZXh0OiB1bmRlZmluZWQsXHJcbiAgICBoYW5kbGVDb25maXJtRGVsZXRlUm93OiB1bmRlZmluZWQsXHJcbiAgICBwcmVQYWdlOiBDb25zdC5QUkVfUEFHRSxcclxuICAgIG5leHRQYWdlOiBDb25zdC5ORVhUX1BBR0UsXHJcbiAgICBmaXJzdFBhZ2U6IENvbnN0LkZJUlNUX1BBR0UsXHJcbiAgICBsYXN0UGFnZTogQ29uc3QuTEFTVF9QQUdFXHJcbiAgfSxcclxuICBmZXRjaEluZm86IHtcclxuICAgIGRhdGFUb3RhbFNpemU6IDAsXHJcbiAgfSxcclxuICBleHBvcnRDU1Y6IGZhbHNlLFxyXG4gIGNzdkZpbGVOYW1lOiB1bmRlZmluZWRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvb3RzdHJhcFRhYmxlO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9Cb290c3RyYXBUYWJsZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9XG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jbGFzc25hbWVzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIFNPUlRfREVTQzogXCJkZXNjXCIsXHJcbiAgU09SVF9BU0M6IFwiYXNjXCIsXHJcbiAgU0laRV9QRVJfUEFHRTogMTAsXHJcbiAgTkVYVF9QQUdFOiBcIj5cIixcclxuICBMQVNUX1BBR0U6IFwiPj5cIixcclxuICBQUkVfUEFHRTogXCI8XCIsXHJcbiAgRklSU1RfUEFHRTogXCI8PFwiLFxyXG4gIFJPV19TRUxFQ1RfQkdfQ09MT1I6IFwiXCIsXHJcbiAgUk9XX1NFTEVDVF9OT05FOiBcIm5vbmVcIixcclxuICBST1dfU0VMRUNUX1NJTkdMRTogXCJyYWRpb1wiLFxyXG4gIFJPV19TRUxFQ1RfTVVMVEk6IFwiY2hlY2tib3hcIixcclxuICBDRUxMX0VESVRfTk9ORTogXCJub25lXCIsXHJcbiAgQ0VMTF9FRElUX0NMSUNLOiBcImNsaWNrXCIsXHJcbiAgQ0VMTF9FRElUX0RCQ0xJQ0s6IFwiZGJjbGlja1wiLFxyXG4gIFNJWkVfUEVSX1BBR0VfTElTVDogWzEwLCAyNSwgMzAsIDUwXSxcclxuICBQQUdJTkFUSU9OX1NJWkU6IDUsXHJcbiAgTk9fREFUQV9URVhUOiBcIlRoZXJlIGlzIG5vIGRhdGEgdG8gZGlzcGxheVwiLFxyXG4gIFNIT1dfT05MWV9TRUxFQ1Q6IFwiU2hvdyBTZWxlY3RlZCBPbmx5XCIsXHJcbiAgU0hPV19BTEw6IFwiU2hvdyBBbGxcIixcclxuICBGSUxURVJfREVMQVk6IDUwMCxcclxuICBGSUxURVJfVFlQRToge1xyXG4gICAgVEVYVDogXCJUZXh0RmlsdGVyXCIsXHJcbiAgICBTRUxFQ1Q6IFwiU2VsZWN0RmlsdGVyXCIsXHJcbiAgICBOVU1CRVI6IFwiTnVtYmVyRmlsdGVyXCIsXHJcbiAgICBEQVRFOiBcIkRhdGVGaWx0ZXJcIixcclxuICAgIENVU1RPTTogXCJDdXN0b21GaWx0ZXJcIlxyXG4gIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9Db25zdC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgQ29uc3QgZnJvbSAnLi9Db25zdCc7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCc7XHJcbmltcG9ydCBjbGFzc1NldCBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IFNlbGVjdFJvd0hlYWRlckNvbHVtbiBmcm9tICcuL1NlbGVjdFJvd0hlYWRlckNvbHVtbic7XHJcblxyXG5jbGFzcyBDaGVja2JveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICBjb21wb25lbnREaWRNb3VudCgpIHsgdGhpcy51cGRhdGUodGhpcy5wcm9wcy5jaGVja2VkKTsgfVxyXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHsgdGhpcy51cGRhdGUocHJvcHMuY2hlY2tlZCk7IH1cclxuICB1cGRhdGUoY2hlY2tlZCkge1xyXG4gICAgUmVhY3RET00uZmluZERPTU5vZGUodGhpcykuaW5kZXRlcm1pbmF0ZSA9IGNoZWNrZWQgPT09ICdpbmRldGVybWluYXRlJztcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8aW5wdXQgY2xhc3NOYW1lPSdyZWFjdC1icy1zZWxlY3QtYWxsJyB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt0aGlzLnByb3BzLmNoZWNrZWR9IG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfSAvPlxyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgVGFibGVIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnNlbGVjdFJvd0NvbHVtbldpZHRoID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpe1xyXG4gICAgdmFyIGNvbnRhaW5lckNsYXNzZXMgPSBjbGFzc1NldChcInRhYmxlLWhlYWRlclwiKTtcclxuICAgIHZhciB0YWJsZUNsYXNzZXMgPSBjbGFzc1NldChcInRhYmxlXCIsIFwidGFibGUtaG92ZXJcIiwge1xyXG4gICAgICAgIFwidGFibGUtYm9yZGVyZWRcIjogdGhpcy5wcm9wcy5ib3JkZXJlZCxcclxuICAgICAgICBcInRhYmxlLWNvbmRlbnNlZFwiOiB0aGlzLnByb3BzLmNvbmRlbnNlZFxyXG4gICAgfSk7XHJcbiAgICB2YXIgc2VsZWN0Um93SGVhZGVyQ29sID0gdGhpcy5wcm9wcy5oaWRlU2VsZWN0Q29sdW1uP251bGw6dGhpcy5yZW5kZXJTZWxlY3RSb3dIZWFkZXIoKTtcclxuICAgIHRoaXMuX2F0dGFjaENsZWFyU29ydENhcmV0RnVuYygpO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1oZWFkZXItd3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgcmVmPVwiY29udGFpbmVyXCIgY2xhc3NOYW1lPXtjb250YWluZXJDbGFzc2VzfT5cclxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e3RhYmxlQ2xhc3Nlc30+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICA8dHIgcmVmPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7c2VsZWN0Um93SGVhZGVyQ29sfVxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyU2VsZWN0Um93SGVhZGVyKCl7XHJcbiAgICBpZih0aGlzLnByb3BzLnJvd1NlbGVjdFR5cGUgPT0gQ29uc3QuUk9XX1NFTEVDVF9TSU5HTEUpIHtcclxuICAgICAgcmV0dXJuICg8U2VsZWN0Um93SGVhZGVyQ29sdW1uIHdpZHRoPXt0aGlzLnNlbGVjdFJvd0NvbHVtbldpZHRofT48L1NlbGVjdFJvd0hlYWRlckNvbHVtbj4pO1xyXG4gICAgfWVsc2UgaWYodGhpcy5wcm9wcy5yb3dTZWxlY3RUeXBlID09IENvbnN0LlJPV19TRUxFQ1RfTVVMVEkpe1xyXG4gICAgICByZXR1cm4gKDxTZWxlY3RSb3dIZWFkZXJDb2x1bW4gd2lkdGg9e3RoaXMuc2VsZWN0Um93Q29sdW1uV2lkdGh9PlxyXG4gICAgICAgICAgPENoZWNrYm94IG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uU2VsZWN0QWxsUm93fSBjaGVja2VkPXt0aGlzLnByb3BzLmlzU2VsZWN0QWxsfS8+XHJcbiAgICAgICAgPC9TZWxlY3RSb3dIZWFkZXJDb2x1bW4+XHJcbiAgICAgICk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfYXR0YWNoQ2xlYXJTb3J0Q2FyZXRGdW5jKCl7XHJcbiAgICBpZihBcnJheS5pc0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pKXtcclxuICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLnByb3BzLmNoaWxkcmVuLmxlbmd0aDtpKyspe1xyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5wcm9wcy5jaGlsZHJlbltpXS5wcm9wcy5kYXRhRmllbGQ7XHJcbiAgICAgICAgY29uc3Qgc29ydCA9IGZpZWxkID09PSB0aGlzLnByb3BzLnNvcnROYW1lID8gdGhpcy5wcm9wcy5zb3J0T3JkZXIgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlbltpXSA9XHJcbiAgICAgICAgICBSZWFjdC5jbG9uZUVsZW1lbnQodGhpcy5wcm9wcy5jaGlsZHJlbltpXSxcclxuICAgICAgICAgICAgeyBrZXk6IGksIG9uU29ydDogdGhpcy5wcm9wcy5vblNvcnQsIHNvcnQgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5wcm9wcy5jaGlsZHJlbi5wcm9wcy5kYXRhRmllbGQ7XHJcbiAgICAgIGNvbnN0IHNvcnQgPSBmaWVsZCA9PT0gdGhpcy5wcm9wcy5zb3J0TmFtZSA/IHRoaXMucHJvcHMuc29ydE9yZGVyIDogdW5kZWZpbmVkO1xyXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuID1cclxuICAgICAgICBSZWFjdC5jbG9uZUVsZW1lbnQodGhpcy5wcm9wcy5jaGlsZHJlbiwge2tleTogMCwgb25Tb3J0OiB0aGlzLnByb3BzLm9uU29ydCwgc29ydH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZml0SGVhZGVyKGhlYWRlclByb3BzLCBpc1ZlcnRpY2FsU2Nyb2xsQmFyKXtcclxuICAgIGlmKEFycmF5LmlzQXJyYXkodGhpcy5wcm9wcy5jaGlsZHJlbikpe1xyXG4gICAgICBsZXQgc3RhcnRQb3NpdGlvbiA9ICh0aGlzLnByb3BzLnJvd1NlbGVjdFR5cGUgPT0gQ29uc3QuUk9XX1NFTEVDVF9TSU5HTEUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yb3dTZWxlY3RUeXBlID09IENvbnN0LlJPV19TRUxFQ1RfTVVMVEkpICYmICF0aGlzLnByb3BzLmhpZGVTZWxlY3RDb2x1bW4gPyAxOjA7XHJcbiAgICAgIGlmKHN0YXJ0UG9zaXRpb24gPT0gMSlcclxuICAgICAgICB0aGlzLnNlbGVjdFJvd0NvbHVtbldpZHRoID0gaGVhZGVyUHJvcHNbMF0ud2lkdGg7XHJcbiAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5wcm9wcy5jaGlsZHJlbi5sZW5ndGg7aSsrKXtcclxuICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuW2ldID1cclxuICAgICAgICAgIFJlYWN0LmNsb25lRWxlbWVudCh0aGlzLnByb3BzLmNoaWxkcmVuW2ldLCB7d2lkdGg6IGhlYWRlclByb3BzW2krc3RhcnRQb3NpdGlvbl0ud2lkdGgrXCJweFwifSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW4gPVxyXG4gICAgICAgIFJlYWN0LmNsb25lRWxlbWVudCh0aGlzLnByb3BzLmNoaWxkcmVuLCB7d2lkdGg6IGhlYWRlclByb3BzWzBdLndpZHRoK1wicHhcIn0pO1xyXG4gICAgfVxyXG4gICAgaWYodGhpcy5wcm9wcy5jb25kZW5zZWQgJiYgIXRoaXMucHJvcHMuaXNGaWx0ZXJlZCkge1xyXG4gICAgICB0aGlzLnJlZnMuY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IFwiMzZweFwiO1xyXG4gICAgfVxyXG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgaWYoaXNWZXJ0aWNhbFNjcm9sbEJhcilcclxuICAgICAgdGhpcy5yZWZzLmNvbnRhaW5lci5zdHlsZS5tYXJnaW5SaWdodCA9IFV0aWwuZ2V0U2Nyb2xsQmFyV2lkdGgoKSArIFwicHhcIjtcclxuICB9XHJcbn1cclxuVGFibGVIZWFkZXIucHJvcFR5cGVzID0ge1xyXG4gIHJvd1NlbGVjdFR5cGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXHJcbiAgb25Tb3J0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcclxuICBvblNlbGVjdEFsbFJvdzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXHJcbiAgc29ydE5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXHJcbiAgc29ydE9yZGVyOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGhpZGVTZWxlY3RDb2x1bW46IFJlYWN0LlByb3BUeXBlcy5ib29sLFxyXG4gIGJvcmRlcmVkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcclxuICBjb25kZW5zZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxyXG4gIGlzRmlsdGVyZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxyXG4gIGlzU2VsZWN0QWxsOiBSZWFjdC5Qcm9wVHlwZXMub25lT2YoW3RydWUsICdpbmRldGVybWluYXRlJywgZmFsc2VdKVxyXG59O1xyXG5cclxuVGFibGVIZWFkZXIuZGVmYXVsdFByb3BzID0ge1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBUYWJsZUhlYWRlcjtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvVGFibGVIZWFkZXIuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RET01cIixcImNvbW1vbmpzMlwiOlwicmVhY3QtZG9tXCIsXCJjb21tb25qc1wiOlwicmVhY3QtZG9tXCIsXCJhbWRcIjpcInJlYWN0LWRvbVwifVxuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb25zdCBmcm9tICcuL0NvbnN0JztcclxuaW1wb3J0IGNsYXNzU2V0IGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcblxyXG4gIHJlbmRlclNvcnRDYXJldChvcmRlcikge1xyXG4gICAgdmFyIHdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHdyYXAuY2xhc3NOYW1lID0gXCJvcmRlclwiO1xyXG4gICAgaWYob3JkZXIgPT0gQ29uc3QuU09SVF9BU0MpIHdyYXAuY2xhc3NOYW1lICs9IFwiIGRyb3B1cFwiO1xyXG4gICAgdmFyIGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBpbm5lci5jbGFzc05hbWUgPSBcImNhcmV0XCI7XHJcbiAgICBpbm5lci5zdHlsZS5tYXJnaW4gPSBcIjEwcHggNXB4XCI7XHJcbiAgICB3cmFwLmFwcGVuZENoaWxkKGlubmVyKTtcclxuICAgIHJldHVybiB3cmFwO1xyXG4gIH0sXHJcblxyXG4gIHJlbmRlclJlYWN0U29ydENhcmV0KG9yZGVyKXtcclxuICAgIHZhciBvcmRlckNsYXNzID0gY2xhc3NTZXQoXCJvcmRlclwiLCB7XHJcbiAgICAgICdkcm9wdXAnOiBvcmRlciA9PSBDb25zdC5TT1JUX0FTQ1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e29yZGVyQ2xhc3N9PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmV0XCIgc3R5bGU9e3ttYXJnaW46ICcxMHB4IDVweCd9fT48L3NwYW4+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICk7XHJcbiAgfSxcclxuXHJcbiAgZ2V0U2Nyb2xsQmFyV2lkdGgoKXtcclxuICAgIHZhciBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGlubmVyLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICBpbm5lci5zdHlsZS5oZWlnaHQgPSBcIjIwMHB4XCI7XHJcblxyXG4gICAgdmFyIG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBvdXRlci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgIG91dGVyLnN0eWxlLnRvcCA9IFwiMHB4XCI7XHJcbiAgICBvdXRlci5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcclxuICAgIG91dGVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgb3V0ZXIuc3R5bGUud2lkdGggPSBcIjIwMHB4XCI7XHJcbiAgICBvdXRlci5zdHlsZS5oZWlnaHQgPSBcIjE1MHB4XCI7XHJcbiAgICBvdXRlci5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICBvdXRlci5hcHBlbmRDaGlsZCAoaW5uZXIpO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQgKG91dGVyKTtcclxuICAgIHZhciB3MSA9IGlubmVyLm9mZnNldFdpZHRoO1xyXG4gICAgb3V0ZXIuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcclxuICAgIHZhciB3MiA9IGlubmVyLm9mZnNldFdpZHRoO1xyXG4gICAgaWYgKHcxID09IHcyKSB3MiA9IG91dGVyLmNsaWVudFdpZHRoO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQgKG91dGVyKTtcclxuXHJcbiAgICByZXR1cm4gKHcxIC0gdzIpO1xyXG4gIH1cclxuXHJcbn07XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWwuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NTZXQgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBDb25zdCBmcm9tICcuL0NvbnN0JztcclxuXHJcbmNsYXNzIFNlbGVjdFJvd0hlYWRlckNvbHVtbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHJcbiAgcmVuZGVyKCl7XHJcbiAgICB2YXIgdGhTdHlsZSA9IHtcclxuICAgICAgd2lkdGg6IHBhcnNlSW50KHRoaXMucHJvcHMud2lkdGgpP3RoaXMucHJvcHMud2lkdGg6MzVcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8dGggc3R5bGU9e3RoU3R5bGV9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGgtaW5uZXIgdGFibGUtaGVhZGVyLWNvbHVtblwiPlxyXG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvdGg+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RSb3dIZWFkZXJDb2x1bW47XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL1NlbGVjdFJvd0hlYWRlckNvbHVtbi5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb25zdCBmcm9tICcuL0NvbnN0JztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJztcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gJy4vVGFibGVSb3cnO1xyXG5pbXBvcnQgVGFibGVDb2x1bW4gZnJvbSAnLi9UYWJsZUNvbHVtbic7XHJcbmltcG9ydCBUYWJsZUVkaXRDb2x1bW4gZnJvbSAnLi9UYWJsZUVkaXRDb2x1bW4nO1xyXG5pbXBvcnQgY2xhc3NTZXQgZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG52YXIgaXNGdW49ZnVuY3Rpb24ob2JqKXtcclxuICByZXR1cm4gb2JqJiYodHlwZW9mIG9iaj09PVwiZnVuY3Rpb25cIik7XHJcblxyXG59O1xyXG5jbGFzcyBUYWJsZUJvZHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBjdXJyRWRpdENlbGw6IG51bGxcclxuICAgIH07XHJcbiAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICB0aGlzLmFkanVzdEJvZHkoKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpe1xyXG4gICAgdGhpcy5hZGp1c3RCb2R5KCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKXtcclxuICAgIHZhciBjb250YWluZXJDbGFzc2VzID0gY2xhc3NTZXQoXCJ0YWJsZS1jb250YWluZXJcIik7XHJcblxyXG4gICAgdmFyIHRhYmxlQ2xhc3NlcyA9IGNsYXNzU2V0KFwidGFibGVcIiwge1xyXG4gICAgICAndGFibGUtc3RyaXBlZCc6IHRoaXMucHJvcHMuc3RyaXBlZCxcclxuICAgICAgJ3RhYmxlLWJvcmRlcmVkJzogdGhpcy5wcm9wcy5ib3JkZXJlZCxcclxuICAgICAgJ3RhYmxlLWhvdmVyJzogdGhpcy5wcm9wcy5ob3ZlcixcclxuICAgICAgJ3RhYmxlLWNvbmRlbnNlZCc6IHRoaXMucHJvcHMuY29uZGVuc2VkXHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgaXNTZWxlY3RSb3dEZWZpbmVkID0gdGhpcy5faXNTZWxlY3RSb3dEZWZpbmVkKCk7XHJcbiAgICB2YXIgdGFibGVIZWFkZXIgPSB0aGlzLnJlbmRlclRhYmxlSGVhZGVyKGlzU2VsZWN0Um93RGVmaW5lZCk7XHJcblxyXG4gICAgdmFyIHRhYmxlUm93cyA9IHRoaXMucHJvcHMuZGF0YS5tYXAoZnVuY3Rpb24oZGF0YSwgcil7XHJcbiAgICAgIHZhciB0YWJsZUNvbHVtbnMgPSB0aGlzLnByb3BzLmNvbHVtbnMubWFwKGZ1bmN0aW9uKGNvbHVtbiwgaSl7XHJcbiAgICAgICAgdmFyIGZpZWxkVmFsdWUgPSBkYXRhW2NvbHVtbi5uYW1lXTtcclxuICAgICAgICBpZih0aGlzLmVkaXRpbmcgJiZcclxuICAgICAgICAgIGNvbHVtbi5uYW1lICE9PSB0aGlzLnByb3BzLmtleUZpZWxkICYmIC8vIEtleSBmaWVsZCBjYW4ndCBiZSBlZGl0XHJcbiAgICAgICAgICBjb2x1bW4uZWRpdGFibGUgJiYgLy8gY29sdW1uIGlzIGVkaXRhYmxlPyBkZWZhdWx0IGlzIHRydWUsIHVzZXIgY2FuIHNldCBpdCBmYWxzZVxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyRWRpdENlbGwgIT0gbnVsbCAmJlxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyRWRpdENlbGwucmlkID09IHIgJiZcclxuICAgICAgICAgIHRoaXMuc3RhdGUuY3VyckVkaXRDZWxsLmNpZCA9PSBpKXtcclxuICAgICAgICAgICAgdmFyIGZvcm1hdD1jb2x1bW4uZm9ybWF0P2Z1bmN0aW9uKHZhbHVlKXtcclxuICAgICAgICAgICAgICByZXR1cm4gY29sdW1uLmZvcm1hdCh2YWx1ZSwgZGF0YSwgY29sdW1uLmZvcm1hdEV4dHJhRGF0YSkucmVwbGFjZSgvPC4qPz4vZywnJyk7XHJcbiAgICAgICAgICAgIH06ZmFsc2U7XHJcblxyXG4gICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgIDxUYWJsZUVkaXRDb2x1bW4gY29tcGxldGVFZGl0PXt0aGlzLmhhbmRsZUNvbXBsZXRlRWRpdENlbGwuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYWRkIGJ5IGJsdWVzcHJpbmcgZm9yIGNvbHVtbiBlZGl0b3IgY3VzdG9taXplXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0YWJsZT17aXNGdW4oY29sdW1uLmVkaXRhYmxlKT9jb2x1bW4uZWRpdGFibGUoZmllbGRWYWx1ZSxkYXRhLHIsaSk6Y29sdW1uLmVkaXRhYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PXtjb2x1bW4uZm9ybWF0P2Zvcm1hdDpmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsdXJUb1NhdmU9e3RoaXMucHJvcHMuY2VsbEVkaXQuYmx1clRvU2F2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0luZGV4PXtyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sSW5kZXg9e2l9PlxyXG4gICAgICAgICAgICAgICAge2ZpZWxkVmFsdWV9XHJcbiAgICAgICAgICAgICAgPC9UYWJsZUVkaXRDb2x1bW4+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAvL2FkZCBieSBibHVlc3ByaW5nIGZvciBjbGFzc05hbWUgY3VzdG9taXplXHJcbiAgICAgICAgICB2YXIgdGRDbGFzc05hbWU9aXNGdW4oY29sdW1uLmNsYXNzTmFtZSk/Y29sdW1uLmNsYXNzTmFtZShmaWVsZFZhbHVlLGRhdGEscixpKTpjb2x1bW4uY2xhc3NOYW1lO1xyXG5cclxuICAgICAgICAgIGlmKHR5cGVvZiBjb2x1bW4uZm9ybWF0ICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICAgICAgdmFyIGZvcm1hdHRlZFZhbHVlID0gY29sdW1uLmZvcm1hdChmaWVsZFZhbHVlLCBkYXRhLCBjb2x1bW4uZm9ybWF0RXh0cmFEYXRhKTtcclxuICAgICAgICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChmb3JtYXR0ZWRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZSA9IDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGZvcm1hdHRlZFZhbHVlfX0+PC9kaXY+O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICA8VGFibGVDb2x1bW4gZGF0YUFsaWduPXtjb2x1bW4uYWxpZ259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0ZENsYXNzTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbEVkaXQ9e3RoaXMucHJvcHMuY2VsbEVkaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbj17Y29sdW1uLmhpZGRlbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FZGl0PXt0aGlzLmhhbmRsZUVkaXRDZWxsLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtjb2x1bW4ud2lkdGh9PlxyXG4gICAgICAgICAgICAgICAge2Zvcm1hdHRlZFZhbHVlfVxyXG4gICAgICAgICAgICAgIDwvVGFibGVDb2x1bW4+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgIDxUYWJsZUNvbHVtbiBkYXRhQWxpZ249e2NvbHVtbi5hbGlnbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RkQ2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsRWRpdD17dGhpcy5wcm9wcy5jZWxsRWRpdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuPXtjb2x1bW4uaGlkZGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVkaXQ9e3RoaXMuaGFuZGxlRWRpdENlbGwuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e2NvbHVtbi53aWR0aH0+XHJcbiAgICAgICAgICAgICAgICB7ZmllbGRWYWx1ZX1cclxuICAgICAgICAgICAgICA8L1RhYmxlQ29sdW1uPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCB0aGlzKTtcclxuICAgICAgdmFyIHNlbGVjdGVkID0gdGhpcy5wcm9wcy5zZWxlY3RlZFJvd0tleXMuaW5kZXhPZihkYXRhW3RoaXMucHJvcHMua2V5RmllbGRdKSAhPSAtMTtcclxuICAgICAgdmFyIHNlbGVjdFJvd0NvbHVtbiA9IGlzU2VsZWN0Um93RGVmaW5lZCAmJiAhdGhpcy5wcm9wcy5zZWxlY3RSb3cuaGlkZVNlbGVjdENvbHVtbj9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJTZWxlY3RSb3dDb2x1bW4oc2VsZWN0ZWQpOm51bGw7XHJcbiAgICAgIC8vYWRkIGJ5IGJsdWVzcHJpbmcgZm9yIGNsYXNzTmFtZSBjdXN0b21pemVcclxuICAgICAgdmFyIHRyQ2xhc3NOYW1lPWlzRnVuKHRoaXMucHJvcHMudHJDbGFzc05hbWUpP3RoaXMucHJvcHMudHJDbGFzc05hbWUoZGF0YSxyKTp0aGlzLnByb3BzLnRyQ2xhc3NOYW1lO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUYWJsZVJvdyBpc1NlbGVjdGVkPXtzZWxlY3RlZH0ga2V5PXtyfSBjbGFzc05hbWU9e3RyQ2xhc3NOYW1lfVxyXG4gICAgICAgICAgc2VsZWN0Um93PXtpc1NlbGVjdFJvd0RlZmluZWQ/dGhpcy5wcm9wcy5zZWxlY3RSb3c6dW5kZWZpbmVkfVxyXG4gICAgICAgICAgZW5hYmxlQ2VsbEVkaXQ9e3RoaXMucHJvcHMuY2VsbEVkaXQubW9kZSAhPT0gQ29uc3QuQ0VMTF9FRElUX05PTkV9XHJcbiAgICAgICAgICBvblJvd0NsaWNrPXt0aGlzLmhhbmRsZVJvd0NsaWNrLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICBvblNlbGVjdFJvdz17dGhpcy5oYW5kbGVTZWxlY3RSb3cuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICB7c2VsZWN0Um93Q29sdW1ufVxyXG4gICAgICAgICAge3RhYmxlQ29sdW1uc31cclxuICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICApXHJcbiAgICB9LCB0aGlzKTtcclxuXHJcbiAgICBpZih0YWJsZVJvd3MubGVuZ3RoID09PSAwKXtcclxuICAgICAgdGFibGVSb3dzLnB1c2goXHJcbiAgICAgIDxUYWJsZVJvdyBrZXk9XCIjI3RhYmxlLWVtcHR5IyNcIj5cclxuICAgICAgICA8dGQgY29sU3Bhbj17dGhpcy5wcm9wcy5jb2x1bW5zLmxlbmd0aCsoaXNTZWxlY3RSb3dEZWZpbmVkPzE6MCl9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyZWFjdC1icy10YWJsZS1uby1kYXRhXCI+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLm5vRGF0YVRleHR8fENvbnN0Lk5PX0RBVEFfVEVYVH1cclxuICAgICAgICA8L3RkPlxyXG4gICAgICA8L1RhYmxlUm93Pik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lZGl0aW5nID0gZmFsc2U7XHJcblxyXG4gICAgdmFyIGhlaWdodCA9IHRoaXMuY2FsY3VsYXRlQ29udGFpbmVySGVpZ2h0KCkudG9TdHJpbmcoKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXYgcmVmPVwiY29udGFpbmVyXCIgY2xhc3NOYW1lPXtjb250YWluZXJDbGFzc2VzfSBzdHlsZT17e2hlaWdodDogaGVpZ2h0fX0+XHJcbiAgICAgICAgPHRhYmxlIHJlZj1cImJvZHlcIiBjbGFzc05hbWU9e3RhYmxlQ2xhc3Nlc30+XHJcbiAgICAgICAgICB7dGFibGVIZWFkZXJ9XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHt0YWJsZVJvd3N9XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyVGFibGVIZWFkZXIoaXNTZWxlY3RSb3dEZWZpbmVkKXtcclxuICAgIHZhciBzZWxlY3RSb3dIZWFkZXIgPSBudWxsO1xyXG5cclxuICAgIGlmKGlzU2VsZWN0Um93RGVmaW5lZCl7XHJcbiAgICAgIGxldCBzdHlsZSA9IHtcclxuICAgICAgICB3aWR0aDozNSxcclxuICAgICAgICBtaW5XaWR0aDozNVxyXG4gICAgICB9XHJcbiAgICAgIHNlbGVjdFJvd0hlYWRlciA9IHRoaXMucHJvcHMuc2VsZWN0Um93LmhpZGVTZWxlY3RDb2x1bW4/bnVsbDooPHRoIHN0eWxlPXtzdHlsZX0ga2V5PXstMX0+PC90aD4pO1xyXG4gICAgfVxyXG4gICAgdmFyIHRoZWFkZXIgPSB0aGlzLnByb3BzLmNvbHVtbnMubWFwKGZ1bmN0aW9uKGNvbHVtbiwgaSl7XHJcbiAgICAgIGxldCB3aWR0aCA9IGNvbHVtbi53aWR0aCA9PSBudWxsP2NvbHVtbi53aWR0aDpwYXJzZUludChjb2x1bW4ud2lkdGgpO1xyXG4gICAgICBsZXQgc3R5bGU9e1xyXG4gICAgICAgIGRpc3BsYXk6IGNvbHVtbi5oaWRkZW4/XCJub25lXCI6bnVsbCxcclxuICAgICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgICAgbWF4V2lkdGg6IHdpZHRoXHJcbiAgICAgICAgLyoqIGFkZCBtaW4td2R0aCB0byBmaXggdXNlciBhc3NpZ24gY29sdW1uIHdpZHRoIG5vdCBlcSBvZmZzZXRXaWR0aCBpbiBsYXJnZSBjb2x1bW4gdGFibGUgKiovXHJcbiAgICAgIH07XHJcbiAgICAgIGxldCBzb3J0Q2FlcnQgPSBjb2x1bW4uc29ydD8oVXRpbC5yZW5kZXJSZWFjdFNvcnRDYXJldChDb25zdC5TT1JUX0RFU0MpKTpudWxsO1xyXG4gICAgICByZXR1cm4gKDx0aCBzdHlsZT17c3R5bGV9IGtleT17aX0gY2xhc3NOYW1lPXtjb2x1bW4uY2xhc3NOYW1lfT57Y29sdW1uLnRleHR9e3NvcnRDYWVydH08L3RoPik7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDx0aGVhZCByZWY9XCJoZWFkZXJcIj5cclxuICAgICAgICA8dHI+e3NlbGVjdFJvd0hlYWRlcn17dGhlYWRlcn08L3RyPlxyXG4gICAgICA8L3RoZWFkPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlUm93Q2xpY2socm93SW5kZXgpe1xyXG4gICAgdmFyIGtleSwgc2VsZWN0ZWRSb3c7XHJcbiAgICB0aGlzLnByb3BzLmRhdGEuZm9yRWFjaChmdW5jdGlvbihyb3csIGkpe1xyXG4gICAgICBpZihpID09IHJvd0luZGV4LTEpe1xyXG4gICAgICAgIGtleSA9IHJvd1t0aGlzLnByb3BzLmtleUZpZWxkXTtcclxuICAgICAgICBzZWxlY3RlZFJvdyA9IHJvdztcclxuICAgICAgfVxyXG4gICAgfSwgdGhpcyk7XHJcbiAgICB0aGlzLnByb3BzLm9uUm93Q2xpY2soc2VsZWN0ZWRSb3cpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU2VsZWN0Um93KHJvd0luZGV4LCBpc1NlbGVjdGVkKXtcclxuICAgIHZhciBrZXksIHNlbGVjdGVkUm93O1xyXG4gICAgdGhpcy5wcm9wcy5kYXRhLmZvckVhY2goZnVuY3Rpb24ocm93LCBpKXtcclxuICAgICAgaWYoaSA9PSByb3dJbmRleC0xKXtcclxuICAgICAgICBrZXkgPSByb3dbdGhpcy5wcm9wcy5rZXlGaWVsZF07XHJcbiAgICAgICAgc2VsZWN0ZWRSb3cgPSByb3c7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9LCB0aGlzKTtcclxuICAgIHRoaXMucHJvcHMub25TZWxlY3RSb3coc2VsZWN0ZWRSb3csIGlzU2VsZWN0ZWQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU2VsZWN0Um93Q29sdW1DaGFuZ2UoZSl7XHJcbiAgICBpZighdGhpcy5wcm9wcy5zZWxlY3RSb3cuY2xpY2tUb1NlbGVjdCB8fCAhdGhpcy5wcm9wcy5zZWxlY3RSb3cuY2xpY2tUb1NlbGVjdEFuZEVkaXRDZWxsKXtcclxuICAgICAgdGhpcy5oYW5kbGVTZWxlY3RSb3coXHJcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yb3dJbmRleCwgZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlRWRpdENlbGwocm93SW5kZXgsIGNvbHVtbkluZGV4KXtcclxuICAgIHRoaXMuZWRpdGluZyA9IHRydWU7XHJcbiAgICBpZih0aGlzLl9pc1NlbGVjdFJvd0RlZmluZWQoKSl7XHJcbiAgICAgIGNvbHVtbkluZGV4LS07XHJcbiAgICAgIGlmKHRoaXMucHJvcHMuc2VsZWN0Um93LmhpZGVTZWxlY3RDb2x1bW4pXHJcbiAgICAgICAgY29sdW1uSW5kZXgrKztcclxuICAgIH1cclxuICAgIHJvd0luZGV4LS07XHJcbiAgICB2YXIgc3RhdGVPYmogPSB7XHJcbiAgICAgIGN1cnJFZGl0Q2VsbDoge1xyXG4gICAgICAgIHJpZDogcm93SW5kZXgsXHJcbiAgICAgICAgY2lkOiBjb2x1bW5JbmRleFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmKHRoaXMucHJvcHMuc2VsZWN0Um93LmNsaWNrVG9TZWxlY3RBbmRFZGl0Q2VsbCl7XHJcbiAgICAgIHRoaXMuaGFuZGxlU2VsZWN0Um93KHJvd0luZGV4KzEsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZU9iaik7XHJcbiAgfVxyXG5cclxuICBjYW5jZWxFZGl0KCl7XHJcbiAgICB2YXIgY3VyckVkaXRDZWxsPXRoaXMuc3RhdGUuY3VyckVkaXRDZWxsO1xyXG4gICAgaWYoY3VyckVkaXRDZWxsKXtcclxuICAgICAgdGhpcy5oYW5kbGVDb21wbGV0ZUVkaXRDZWxsKG51bGwsY3VyckVkaXRDZWxsLnJpZCxjdXJyRWRpdENlbGwuY2lkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUNvbXBsZXRlRWRpdENlbGwobmV3VmFsLCByb3dJbmRleCwgY29sdW1uSW5kZXgpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VyckVkaXRDZWxsOiBudWxsfSk7XHJcbiAgICBpZihudWxsICE9IG5ld1ZhbClcclxuICAgICAgdGhpcy5wcm9wcy5jZWxsRWRpdC5fX29uQ29tcGxldGVFZGl0X18obmV3VmFsLCByb3dJbmRleCwgY29sdW1uSW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyU2VsZWN0Um93Q29sdW1uKHNlbGVjdGVkKXtcclxuICAgIGlmKHRoaXMucHJvcHMuc2VsZWN0Um93Lm1vZGUgPT0gQ29uc3QuUk9XX1NFTEVDVF9TSU5HTEUpIHtcclxuICAgICAgcmV0dXJuICg8VGFibGVDb2x1bW4+PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJzZWxlY3Rpb25cIiBjaGVja2VkPXtzZWxlY3RlZH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0Um93Q29sdW1DaGFuZ2UuYmluZCh0aGlzKX0vPjwvVGFibGVDb2x1bW4+KTtcclxuICAgIH1lbHNlIHtcclxuICAgICAgcmV0dXJuICg8VGFibGVDb2x1bW4gPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtzZWxlY3RlZH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0Um93Q29sdW1DaGFuZ2UuYmluZCh0aGlzKX0vPjwvVGFibGVDb2x1bW4+KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEJvZHlIZWFkZXJEb21Qcm9wKCl7XHJcbiAgICB2YXIgaGVhZGVycyA9IHRoaXMucmVmcy5oZWFkZXIuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzO1xyXG4gICAgdmFyIGhlYWRlckRvbVByb3BzID0gW107XHJcbiAgICBmb3IobGV0IGk9MDtpPGhlYWRlcnMubGVuZ3RoO2krKyl7XHJcbiAgICAgIGhlYWRlckRvbVByb3BzLnB1c2goe1xyXG4gICAgICAgIHdpZHRoOmhlYWRlcnNbaV0ub2Zmc2V0V2lkdGhcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGVhZGVyRG9tUHJvcHM7XHJcbiAgfVxyXG5cclxuICBhZGp1c3RCb2R5KCkge1xyXG4gICAgdGhpcy5oYXJkRml4SGVhZGVyV2lkdGgoKTtcclxuICAgIGlmKHRoaXMucHJvcHMuY29uZGVuc2VkKSB7XHJcbiAgICAgIHRoaXMucmVmcy5ib2R5LnN0eWxlLm1hcmdpblRvcCA9IFwiLTM2cHhcIjtcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLnByb3BzLm1heEhlaWdodCAmJlxyXG4gICAgICBwYXJzZUludCh0aGlzLnByb3BzLm1heEhlaWdodCkgPCB0aGlzLnJlZnMuY29udGFpbmVyLm9mZnNldEhlaWdodCkge1xyXG4gICAgICB0aGlzLnJlZnMuY29udGFpbmVyLnN0eWxlLmhlaWdodCA9ICh0aGlzLnByb3BzLm1heEhlaWdodCAtIDQyKSArIFwicHhcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhcmRGaXhIZWFkZXJXaWR0aCgpe1xyXG4gICAgdmFyIGhlYWRlcnMgPSB0aGlzLnJlZnMuaGVhZGVyLmNoaWxkTm9kZXNbMF0uY2hpbGROb2RlcztcclxuICAgIGZvcihsZXQgaT0wO2k8aGVhZGVycy5sZW5ndGg7aSsrKXtcclxuICAgICAgaGVhZGVyc1tpXS5zdHlsZS53aWR0aCA9IGhlYWRlcnNbaV0ub2Zmc2V0V2lkdGggKyBcInB4XCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYWxjdWxhdGVDb250YWluZXJIZWlnaHQoKXtcclxuICAgIGlmKHRoaXMucHJvcHMuaGVpZ2h0ID09IFwiMTAwJVwiKSByZXR1cm4gdGhpcy5wcm9wcy5oZWlnaHQ7XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5wcm9wcy5oZWlnaHQpIC0gNDI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfaXNTZWxlY3RSb3dEZWZpbmVkKCl7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5zZWxlY3RSb3cubW9kZSA9PT0gQ29uc3QuUk9XX1NFTEVDVF9TSU5HTEUgfHxcclxuICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0Um93Lm1vZGUgPT09IENvbnN0LlJPV19TRUxFQ1RfTVVMVEk7XHJcbiAgfVxyXG59XHJcblRhYmxlQm9keS5wcm9wVHlwZXMgPSB7XHJcbiAgaGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGRhdGE6IFJlYWN0LlByb3BUeXBlcy5hcnJheSxcclxuICBjb2x1bW5zOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXHJcbiAgc3RyaXBlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXHJcbiAgYm9yZGVyZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxyXG4gIGhvdmVyOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcclxuICBjb25kZW5zZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxyXG4gIGtleUZpZWxkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHNlbGVjdGVkUm93S2V5czogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxyXG4gIG9uUm93Q2xpY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxyXG4gIG9uU2VsZWN0Um93OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcclxuICBub0RhdGFUZXh0OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxlQm9keTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvVGFibGVCb2R5LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvbnN0IGZyb20gJy4vQ29uc3QnO1xyXG5cclxuY2xhc3MgVGFibGVSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLmNsaWNrTnVtID0gMDtcclxuICB9XHJcblxyXG4gIHJvd0NsaWNrKGUpe1xyXG4gICAgaWYoZS50YXJnZXQudGFnTmFtZSAhPT0gXCJJTlBVVFwiKSB7XHJcbiAgICAgIGNvbnN0IHJvd0luZGV4ID0gZS5jdXJyZW50VGFyZ2V0LnJvd0luZGV4O1xyXG4gICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RSb3cpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdFJvdy5jbGlja1RvU2VsZWN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25TZWxlY3RSb3cocm93SW5kZXgsICF0aGlzLnByb3BzLmlzU2VsZWN0ZWQpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnNlbGVjdFJvdy5jbGlja1RvU2VsZWN0QW5kRWRpdENlbGwpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGlja051bSsrO1xyXG4gICAgICAgICAgICAvKiogaWYgY2xpY2tUb1NlbGVjdEFuZEVkaXRDZWxsIGlzIGVuYWJsZWQsXHJcbiAgICAgICAgICAgICAqICB0aGVyZSBzaG91bGQgYmUgYSBkZWxheSB0byBwcmV2ZW50IGEgc2VsZWN0aW9uIGNoYW5nZWQgd2hlblxyXG4gICAgICAgICAgICAgKiAgdXNlciBkYmxpY2sgdG8gZWRpdCBjZWxsIG9uIHNhbWUgcm93IGJ1dCBkaWZmZXJlbnQgY2VsbFxyXG4gICAgICAgICAgICAqKi9cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYodGhpcy5jbGlja051bSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdFJvdyhyb3dJbmRleCwgIXRoaXMucHJvcHMuaXNTZWxlY3RlZCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRoaXMuY2xpY2tOdW0gPSAwO1xyXG4gICAgICAgICAgICB9LCAyMDApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uUm93Q2xpY2spIHRoaXMucHJvcHMub25Sb3dDbGljayhyb3dJbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKXtcclxuICAgIHRoaXMuY2xpY2tOdW0gPSAwO1xyXG4gICAgdmFyIHRyQ3NzPXtcclxuICAgICAgc3R5bGU6e1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5wcm9wcy5pc1NlbGVjdGVkP3RoaXMucHJvcHMuc2VsZWN0Um93LmJnQ29sb3I6bnVsbFxyXG4gICAgICB9LFxyXG4gICAgICBjbGFzc05hbWU6KHRoaXMucHJvcHMuaXNTZWxlY3RlZCAmJiB0aGlzLnByb3BzLnNlbGVjdFJvdy5jbGFzc05hbWUgPyB0aGlzLnByb3BzLnNlbGVjdFJvdy5jbGFzc05hbWUgOiAnJykgKyAodGhpcy5wcm9wcy5jbGFzc05hbWV8fCcnKVxyXG4gICAgfTtcclxuXHJcbiAgICBpZih0aGlzLnByb3BzLnNlbGVjdFJvdyAmJiAodGhpcy5wcm9wcy5zZWxlY3RSb3cuY2xpY2tUb1NlbGVjdCB8fFxyXG4gICAgICB0aGlzLnByb3BzLnNlbGVjdFJvdy5jbGlja1RvU2VsZWN0QW5kRWRpdENlbGwpIHx8IHRoaXMucHJvcHMub25Sb3dDbGljayl7XHJcbiAgICAgIHJldHVybihcclxuICAgICAgICA8dHIgey4uLnRyQ3NzfSBvbkNsaWNrPXt0aGlzLnJvd0NsaWNrLmJpbmQodGhpcyl9Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvdHI+XHJcbiAgICAgIClcclxuICAgIH1lbHNle1xyXG4gICAgICByZXR1cm4oXHJcbiAgICAgICAgPHRyIHsuLi50ckNzc30+e3RoaXMucHJvcHMuY2hpbGRyZW59PC90cj5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5UYWJsZVJvdy5wcm9wVHlwZXMgPSB7XHJcbiAgaXNTZWxlY3RlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXHJcbiAgZW5hYmxlQ2VsbEVkaXQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxyXG4gIG9uUm93Q2xpY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxyXG4gIG9uU2VsZWN0Um93OiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xyXG59O1xyXG5UYWJsZVJvdy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgb25Sb3dDbGljazogdW5kZWZpbmVkXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVGFibGVSb3c7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL1RhYmxlUm93LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvbnN0IGZyb20gJy4vQ29uc3QnO1xyXG5cclxuY2xhc3MgVGFibGVDb2x1bW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG5cclxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcclxuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XHJcbiAgICBsZXQgc2hvdWxkVXBkYXRlZCA9IHRoaXMucHJvcHMud2lkdGggIT09IG5leHRQcm9wcy53aWR0aFxyXG4gICAgICB8fCB0aGlzLnByb3BzLmNsYXNzTmFtZSAhPT0gbmV4dFByb3BzLmNsYXNzTmFtZVxyXG4gICAgICB8fCB0aGlzLnByb3BzLmhpZGRlbiAhPT0gbmV4dFByb3BzLmhpZGRlblxyXG4gICAgICB8fCB0aGlzLnByb3BzLmRhdGFBbGlnbiAhPT0gbmV4dFByb3BzLmRhdGFBbGlnblxyXG4gICAgICB8fCB0eXBlb2YgY2hpbGRyZW4gIT09IHR5cGVvZiBuZXh0UHJvcHMuY2hpbGRyZW5cclxuICAgICAgfHwgKCcnK3RoaXMucHJvcHMub25FZGl0KS50b1N0cmluZygpICE9PSAoJycrbmV4dFByb3BzLm9uRWRpdCkudG9TdHJpbmcoKVxyXG5cclxuICAgIGlmKHNob3VsZFVwZGF0ZWQpe1xyXG4gICAgICByZXR1cm4gc2hvdWxkVXBkYXRlZDtcclxuICAgIH1cclxuXHJcbiAgICBpZih0eXBlb2YgY2hpbGRyZW4gPT09ICdvYmplY3QnICYmIGNoaWxkcmVuICE9PSBudWxsKSB7XHJcbiAgICAgIGlmKGNoaWxkcmVuLnByb3BzLnR5cGUgPT09ICdjaGVja2JveCcgfHwgY2hpbGRyZW4ucHJvcHMudHlwZSA9PT0gJ3JhZGlvJykge1xyXG4gICAgICAgIHNob3VsZFVwZGF0ZWQgPSBzaG91bGRVcGRhdGVkIHx8XHJcbiAgICAgICAgICBjaGlsZHJlbi5wcm9wcy50eXBlICE9PSBuZXh0UHJvcHMuY2hpbGRyZW4ucHJvcHMudHlwZSB8fFxyXG4gICAgICAgICAgY2hpbGRyZW4ucHJvcHMuY2hlY2tlZCAhPT0gbmV4dFByb3BzLmNoaWxkcmVuLnByb3BzLmNoZWNrZWQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvdWxkVXBkYXRlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNob3VsZFVwZGF0ZWQgPSBzaG91bGRVcGRhdGVkIHx8IGNoaWxkcmVuICE9PSBuZXh0UHJvcHMuY2hpbGRyZW47XHJcbiAgICB9XHJcblxyXG4gICAgaWYoc2hvdWxkVXBkYXRlZCl7XHJcbiAgICAgIHJldHVybiBzaG91bGRVcGRhdGVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKCEodGhpcy5wcm9wcy5jZWxsRWRpdCAmJiBuZXh0UHJvcHMuY2VsbEVkaXQpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBzaG91bGRVcGRhdGVkXHJcbiAgICAgICAgfHwgdGhpcy5wcm9wcy5jZWxsRWRpdC5tb2RlICE9PSBuZXh0UHJvcHMuY2VsbEVkaXQubW9kZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUNlbGxFZGl0KGUpe1xyXG4gICAgaWYodGhpcy5wcm9wcy5jZWxsRWRpdC5tb2RlID09IENvbnN0LkNFTExfRURJVF9EQkNMSUNLKXtcclxuICAgICAgaWYoZG9jdW1lbnQuc2VsZWN0aW9uICYmIGRvY3VtZW50LnNlbGVjdGlvbi5lbXB0eSkge1xyXG4gICAgICAgIGRvY3VtZW50LnNlbGVjdGlvbi5lbXB0eSgpO1xyXG4gICAgICB9IGVsc2UgaWYod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgICAgICAgdmFyIHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5wcm9wcy5vbkVkaXQoXHJcbiAgICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LnJvd0luZGV4LFxyXG4gICAgICBlLmN1cnJlbnRUYXJnZXQuY2VsbEluZGV4KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpe1xyXG4gICAgdmFyIHdpZHRoID0gdGhpcy5wcm9wcy53aWR0aCA9PSBudWxsP1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLndpZHRoOnBhcnNlSW50KHRoaXMucHJvcHMud2lkdGgpO1xyXG4gICAgdmFyIHRkU3R5bGUgPSB7XHJcbiAgICAgIHRleHRBbGlnbjogdGhpcy5wcm9wcy5kYXRhQWxpZ24sXHJcbiAgICAgIGRpc3BsYXk6IHRoaXMucHJvcHMuaGlkZGVuP1wibm9uZVwiOm51bGwsXHJcbiAgICAgIHdpZHRoOiB3aWR0aCxcclxuICAgICAgbWF4V2lkdGg6IHdpZHRoXHJcbiAgICB9O1xyXG4gICAgdmFyIGNsYXNzbmFtZSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lO1xyXG4gICAgaWYodGhpcy5wcm9wcy53aWR0aCl7XHJcbiAgICAgICAgY2xhc3NuYW1lICs9IFwiIGNvbC1tZC1cIit3aWR0aDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdmFyIG9wdHMgPSB7fTtcclxuICAgIGlmKHRoaXMucHJvcHMuY2VsbEVkaXQpe1xyXG4gICAgICBpZih0aGlzLnByb3BzLmNlbGxFZGl0Lm1vZGUgPT0gQ29uc3QuQ0VMTF9FRElUX0NMSUNLKXtcclxuICAgICAgICBvcHRzLm9uQ2xpY2sgPSB0aGlzLmhhbmRsZUNlbGxFZGl0LmJpbmQodGhpcyk7XHJcbiAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMuY2VsbEVkaXQubW9kZSA9PSBDb25zdC5DRUxMX0VESVRfREJDTElDSyl7XHJcbiAgICAgICAgb3B0cy5vbkRvdWJsZUNsaWNrID0gdGhpcy5oYW5kbGVDZWxsRWRpdC5iaW5kKHRoaXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dGQgc3R5bGU9e3RkU3R5bGV9IGNsYXNzTmFtZT17Y2xhc3NuYW1lfSB7Li4ub3B0c30+XHJcbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgIDwvdGQ+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblRhYmxlQ29sdW1uLnByb3BUeXBlcyA9IHtcclxuICBkYXRhQWxpZ246IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXHJcbiAgaGlkZGVuOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcclxuICBjbGFzc05hbWU6UmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xyXG59O1xyXG5cclxuVGFibGVDb2x1bW4uZGVmYXVsdFByb3BzID0ge1xyXG4gIGRhdGFBbGlnbjogXCJsZWZ0XCIsXHJcbiAgaGlkZGVuOiBmYWxzZSxcclxuICBjbGFzc05hbWU6XCJcIlxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxlQ29sdW1uO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9UYWJsZUNvbHVtbi5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb25zdCBmcm9tICcuL0NvbnN0JztcclxuaW1wb3J0IEVkaXRvciBmcm9tICcuL0VkaXRvcidcclxuaW1wb3J0IE5vdGlmaWVyIGZyb20gJy4vTm90aWZpY2F0aW9uLmpzJztcclxuaW1wb3J0IGNsYXNzU2V0IGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuY2xhc3MgVGFibGVFZGl0Q29sdW1uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnRpbWVvdXRlQ2xlYXI9MDtcclxuICAgICAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgICAgICAgc2hha2VFZGl0b3I6ZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICBoYW5kbGVLZXlQcmVzcyhlKXtcclxuICAgIGlmIChlLmtleUNvZGUgPT0gMTMpIHsgLy9QcmVzc2VkIEVOVEVSXHJcbiAgICAgIGxldCB2YWx1ZSA9IGUuY3VycmVudFRhcmdldC50eXBlID09ICdjaGVja2JveCc/XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2V0Q2hlY2tCb3hWYWx1ZShlKTplLmN1cnJlbnRUYXJnZXQudmFsdWU7XHJcblxyXG4gICAgICBpZighdGhpcy52YWxpZGF0b3IodmFsdWUpKXtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnByb3BzLmNvbXBsZXRlRWRpdChcclxuICAgICAgICB2YWx1ZSwgdGhpcy5wcm9wcy5yb3dJbmRleCwgdGhpcy5wcm9wcy5jb2xJbmRleCk7XHJcbiAgICB9ZWxzZSBpZihlLmtleUNvZGUgPT0gMjcpe1xyXG4gICAgICB0aGlzLnByb3BzLmNvbXBsZXRlRWRpdChcclxuICAgICAgICBudWxsLCB0aGlzLnByb3BzLnJvd0luZGV4LCB0aGlzLnByb3BzLmNvbEluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUJsdXIoZSl7XHJcbiAgICBpZih0aGlzLnByb3BzLmJsdXJUb1NhdmUpe1xyXG4gICAgICBsZXQgdmFsdWUgPSBlLmN1cnJlbnRUYXJnZXQudHlwZSA9PSAnY2hlY2tib3gnP1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dldENoZWNrQm94VmFsdWUoZSk6ZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xyXG4gICAgICBpZighdGhpcy52YWxpZGF0b3IodmFsdWUpKXtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnByb3BzLmNvbXBsZXRlRWRpdChcclxuICAgICAgICAgIHZhbHVlLCB0aGlzLnByb3BzLnJvd0luZGV4LCB0aGlzLnByb3BzLmNvbEluZGV4KTtcclxuICAgIH1cclxuICB9XHJcbiAgdmFsaWRhdG9yKHZhbHVlKXtcclxuICAgICAgdmFyIHRzPXRoaXM7XHJcbiAgICAgIGlmKHRzLnByb3BzLmVkaXRhYmxlLnZhbGlkYXRvcil7XHJcbiAgICAgICAgICB2YXIgdmFsaWQ9dHMucHJvcHMuZWRpdGFibGUudmFsaWRhdG9yKHZhbHVlKTtcclxuICAgICAgICAgIGlmKHZhbGlkIT09dHJ1ZSl7XHJcbiAgICAgICAgICAgICAgdHMucmVmcy5ub3RpZmllci5ub3RpY2UoJ2Vycm9yJyx2YWxpZCxcIlByZXNzZWQgRVNDIGNhbiBjYW5jZWxcIik7XHJcbiAgICAgICAgICAgICAgdmFyIGlucHV0ID0gdHMucmVmcy5pbnB1dFJlZjtcclxuICAgICAgICAgICAgICAvL2FuaW1hdGUgaW5wdXRcclxuICAgICAgICAgICAgICB0cy5jbGVhclRpbWVvdXQoKTtcclxuICAgICAgICAgICAgICB0cy5zZXRTdGF0ZSh7c2hha2VFZGl0b3I6dHJ1ZX0pO1xyXG4gICAgICAgICAgICAgIHRzLnRpbWVvdXRlQ2xlYXI9c2V0VGltZW91dChmdW5jdGlvbigpe3RzLnNldFN0YXRlKHtzaGFrZUVkaXRvcjpmYWxzZX0pO30sMzAwKTtcclxuICAgICAgICAgICAgICBpbnB1dC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgfVxyXG4gIGNsZWFyVGltZW91dCgpe1xyXG4gICAgICBpZih0aGlzLnRpbWVvdXRlQ2xlYXIhPTApe1xyXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dGVDbGVhcik7XHJcbiAgICAgICAgICB0aGlzLnRpbWVvdXRlQ2xlYXI9MDtcclxuICAgICAgfVxyXG4gIH1cclxuICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICB2YXIgaW5wdXQgPSB0aGlzLnJlZnMuaW5wdXRSZWY7XHJcbiAgICAgIC8vIGlucHV0LnZhbHVlID0gdGhpcy5wcm9wcy5jaGlsZHJlbnx8Jyc7XHJcbiAgICAgIGlucHV0LmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMuY2xlYXJUaW1lb3V0KCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKXtcclxuICAgIHZhciBlZGl0YWJsZT10aGlzLnByb3BzLmVkaXRhYmxlLFxyXG4gICAgICAgIGZvcm1hdD10aGlzLnByb3BzLmZvcm1hdCxcclxuICAgICAgICBhdHRyPXtcclxuICAgICAgICAgICAgcmVmOlwiaW5wdXRSZWZcIixcclxuICAgICAgICAgICAgb25LZXlEb3duOnRoaXMuaGFuZGxlS2V5UHJlc3MuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgb25CbHVyOnRoaXMuaGFuZGxlQmx1ci5iaW5kKHRoaXMpXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL3B1dCBwbGFjZWhvbGRlciBpZiBleGlzdFxyXG4gICAgICAgIGVkaXRhYmxlLnBsYWNlaG9sZGVyJiYoYXR0ci5wbGFjZWhvbGRlcj1lZGl0YWJsZS5wbGFjZWhvbGRlcik7XHJcblxyXG4gICAgdmFyIGVkaXRvckNsYXNzPWNsYXNzU2V0KHsnYW5pbWF0ZWQnOnRoaXMuc3RhdGUuc2hha2VFZGl0b3IsJ3NoYWtlJzp0aGlzLnN0YXRlLnNoYWtlRWRpdG9yfSk7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPHRkIHJlZj1cInRkXCIgc3R5bGU9e3twb3NpdGlvbjoncmVsYXRpdmUnfX0+XHJcbiAgICAgICAgICAgIHtFZGl0b3IoZWRpdGFibGUsYXR0cixmb3JtYXQsZWRpdG9yQ2xhc3MsdGhpcy5wcm9wcy5jaGlsZHJlbnx8JycpfVxyXG4gICAgICAgICAgICA8Tm90aWZpZXIgcmVmPVwibm90aWZpZXJcIj48L05vdGlmaWVyPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBfZ2V0Q2hlY2tCb3hWYWx1ZShlKXtcclxuICAgIGxldCB2YWx1ZSA9ICcnO1xyXG4gICAgbGV0IHZhbHVlcyA9IGUuY3VycmVudFRhcmdldC52YWx1ZS5zcGxpdCgnOicpO1xyXG4gICAgdmFsdWUgPSBlLmN1cnJlbnRUYXJnZXQuY2hlY2tlZD92YWx1ZXNbMF06dmFsdWVzWzFdO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxuXHJcbn1cclxuVGFibGVFZGl0Q29sdW1uLnByb3BUeXBlcyA9IHtcclxuICBjb21wbGV0ZUVkaXQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxyXG4gIHJvd0luZGV4OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxyXG4gIGNvbEluZGV4OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxyXG4gIGJsdXJUb1NhdmU6IFJlYWN0LlByb3BUeXBlcy5ib29sXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFibGVFZGl0Q29sdW1uO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9UYWJsZUVkaXRDb2x1bW4uanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG52YXIgRWRpdG9yPWZ1bmN0aW9uKGVkaXRhYmxlLCBhdHRyLCBmb3JtYXQsIGVkaXRvckNsYXNzLCBkZWZhdWx0VmFsdWUpe1xyXG5cclxuXHJcbiAgICBpZihlZGl0YWJsZT09PXRydWV8fHR5cGVvZiBlZGl0YWJsZT09PVwic3RyaW5nXCIpey8vc2ltcGxlIGRlY2xhcmVcclxuICAgICAgICB2YXIgdHlwZT1lZGl0YWJsZT09PXRydWU/J3RleHQnOmVkaXRhYmxlO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxpbnB1dCB7Li4uYXR0cn0gdHlwZT17dHlwZX0gZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyhlZGl0b3JDbGFzc3x8XCJcIikrXCIgZm9ybS1jb250cm9sIGVkaXRvciBlZGl0LXRleHRcIn0gLz5cclxuICAgICAgICApXHJcbiAgICB9IGVsc2UgaWYoIWVkaXRhYmxlKXtcclxuICAgICAgdmFyIHR5cGU9ZWRpdGFibGU9PT10cnVlPyd0ZXh0JzplZGl0YWJsZTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxpbnB1dCB7Li4uYXR0cn0gdHlwZT17dHlwZX0gZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9IGRpc2FibGVkPSdkaXNhYmxlZCdcclxuICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyhlZGl0b3JDbGFzc3x8XCJcIikrXCIgZm9ybS1jb250cm9sIGVkaXRvciBlZGl0LXRleHRcIn0gLz5cclxuICAgICAgKVxyXG4gICAgfSBlbHNlIGlmKGVkaXRhYmxlLnR5cGUpey8vc3RhbmRhcmQgZGVjbGFyZVxyXG4gICAgICAgIC8vcHV0IHN0eWxlIGlmIGV4aXN0XHJcbiAgICAgICAgZWRpdGFibGUuc3R5bGUmJihhdHRyLnN0eWxlPWVkaXRhYmxlLnN0eWxlKTtcclxuXHJcbiAgICAgICAgLy9wdXQgY2xhc3MgaWYgZXhpc3RcclxuICAgICAgICBhdHRyLmNsYXNzTmFtZSA9IChlZGl0b3JDbGFzc3x8XCJcIikgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXCIgZm9ybS1jb250cm9sIGVkaXRvciBlZGl0LVwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRhYmxlLnR5cGUgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKGVkaXRhYmxlLmNsYXNzTmFtZT8oXCIgXCIrZWRpdGFibGUuY2xhc3NOYW1lKTpcIlwiKTtcclxuXHJcbiAgICAgICAgaWYoZWRpdGFibGUudHlwZSA9PT0gJ3NlbGVjdCcpey8vcHJvY2VzcyBzZWxlY3QgaW5wdXRcclxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBbXSwgdmFsdWVzPWVkaXRhYmxlLm9wdGlvbnMudmFsdWVzO1xyXG4gICAgICAgICAgICBpZihBcnJheS5pc0FycmF5KHZhbHVlcykpey8vb25seSBjYW4gdXNlIGFycnJheSBkYXRhIGZvciBvcHRpb25zXHJcbiAgICAgICAgICAgICAgICB2YXIgcm93VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXZhbHVlcy5tYXAoZnVuY3Rpb24oZCxpKXtcclxuICAgICAgICAgICAgICAgICAgICByb3dWYWx1ZT1mb3JtYXQ/Zm9ybWF0KGQpOmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17J29wdGlvbicraX0gdmFsdWU9e2R9Pntyb3dWYWx1ZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IHsuLi5hdHRyfSBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX0+e29wdGlvbnN9PC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIGlmKGVkaXRhYmxlLnR5cGUgPT09ICd0ZXh0YXJlYScpey8vcHJvY2VzcyB0ZXh0YXJlYSBpbnB1dFxyXG4gICAgICAgICAgICAvL3B1dCAgb3RoZXIgaWYgZXhpc3RcclxuICAgICAgICAgICAgZWRpdGFibGUuY29scyYmKGF0dHIuY29scz1lZGl0YWJsZS5jb2xzKTtcclxuICAgICAgICAgICAgZWRpdGFibGUucm93cyYmKGF0dHIucm93cz1lZGl0YWJsZS5yb3dzKTtcclxuICAgICAgICAgICAgdmFyIGtleVVwSGFuZGxlcj1hdHRyLm9uS2V5RG93bixzYXZlQnRuPW51bGw7XHJcbiAgICAgICAgICAgIGlmKGtleVVwSGFuZGxlcil7XHJcbiAgICAgICAgICAgICAgICBhdHRyLm9uS2V5RG93bj1mdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXlDb2RlICE9IDEzKSB7IC8vbm90IFByZXNzZWQgRU5URVJcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5VXBIYW5kbGVyKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBzYXZlQnRuPTxidXR0byBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gYnRuLXhzIHRleHRhcmVhLXNhdmUtYnRuXCIgb25DbGljaz17a2V5VXBIYW5kbGVyfT5zYXZlPC9idXR0bz5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgey4uLmF0dHJ9IGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlfT48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzYXZlQnRufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZihlZGl0YWJsZS50eXBlID09PSAnY2hlY2tib3gnKXtcclxuICAgICAgICAgIGxldCB2YWx1ZXMgPSAndHJ1ZTpmYWxzZSc7XHJcbiAgICAgICAgICBpZihlZGl0YWJsZS5vcHRpb25zICYmIGVkaXRhYmxlLm9wdGlvbnMudmFsdWVzKXtcclxuICAgICAgICAgICAgLy8gdmFsdWVzID0gZWRpdGFibGUub3B0aW9ucy52YWx1ZXMuc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgdmFsdWVzID0gZWRpdGFibGUub3B0aW9ucy52YWx1ZXM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhdHRyLmNsYXNzTmFtZSA9IGF0dHIuY2xhc3NOYW1lLnJlcGxhY2UoJ2Zvcm0tY29udHJvbCcsJycpO1xyXG4gICAgICAgICAgYXR0ci5jbGFzc05hbWUgKz0gJyBjaGVja2JveCBwdWxsLXJpZ2h0JztcclxuXHJcbiAgICAgICAgICBsZXQgY2hlY2tlZCA9IGRlZmF1bHRWYWx1ZSAmJiBkZWZhdWx0VmFsdWUudG9TdHJpbmcoKSA9PSB2YWx1ZXMuc3BsaXQoJzonKVswXT90cnVlOmZhbHNlO1xyXG5cclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxpbnB1dCB7Li4uYXR0cn0gdHlwZT0nY2hlY2tib3gnIHZhbHVlPXt2YWx1ZXN9IGRlZmF1bHRDaGVja2VkPXtjaGVja2VkfS8+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZXsvL3Byb2Nlc3Mgb3RoZXIgaW5wdXQgdHlwZS4gYXMgcGFzc3dvcmQsdXJsLGVtYWlsLi4uXHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxpbnB1dCB7Li4uYXR0cn0gdHlwZT17dHlwZX0gZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9Lz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vZGVmYXVsdCByZXR1cm4gZm9yIG90aGVyIGNhc2Ugb2YgZWRpdGFibGVcclxuICAgIHJldHVybihcclxuICAgICAgICA8aW5wdXQgey4uLmF0dHJ9IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXsoZWRpdG9yQ2xhc3N8fFwiXCIpK1wiIGZvcm0tY29udHJvbCBlZGl0b3IgZWRpdC10ZXh0XCJ9Lz5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRvcjtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvRWRpdG9yLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvbnN0IGZyb20gJy4vQ29uc3QnO1xyXG5cclxuaW1wb3J0IHtcclxuICBUb2FzdENvbnRhaW5lcixcclxuICBUb2FzdE1lc3NhZ2UsXHJcbn0gZnJvbSBcInJlYWN0LXRvYXN0clwiO1xyXG5cclxuXHJcbnZhciBUb2FzdHJNZXNzYWdlRmFjdG9yeT1SZWFjdC5jcmVhdGVGYWN0b3J5KFRvYXN0TWVzc2FnZS5hbmltYXRpb24pO1xyXG5cclxuY2xhc3MgTm90aWZpY2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gIC8vIGFsbG93IHR5cGUgaXMgc3VjY2VzcyxpbmZvLHdhcm5pbmcsZXJyb3JcclxuICBub3RpY2UodHlwZSxtc2csdGl0bGUpe1xyXG4gICAgdGhpcy5yZWZzLnRvYXN0clt0eXBlXShcclxuICAgICAgICBtc2csdGl0bGUsIHtcclxuICAgICAgICAgIG1vZGU6J3NpbmdsZScsXHJcbiAgICAgICAgICB0aW1lT3V0OiA1MDAwLFxyXG4gICAgICAgICAgZXh0ZW5kZWRUaW1lT3V0OiAxMDAwLFxyXG4gICAgICAgICAgc2hvd0FuaW1hdGlvbjogXCJhbmltYXRlZCAgYm91bmNlSW5cIixcclxuICAgICAgICAgIGhpZGVBbmltYXRpb246IFwiYW5pbWF0ZWQgYm91bmNlT3V0XCJcclxuICAgICAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxUb2FzdENvbnRhaW5lciByZWY9XCJ0b2FzdHJcIiB0b2FzdE1lc3NhZ2VGYWN0b3J5PXtUb2FzdHJNZXNzYWdlRmFjdG9yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9hc3QtY29udGFpbmVyXCIgIGNsYXNzTmFtZT1cInRvYXN0LXRvcC1yaWdodFwiPjwvVG9hc3RDb250YWluZXI+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb247XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL05vdGlmaWNhdGlvbi5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5Ub2FzdE1lc3NhZ2UgPSBleHBvcnRzLlRvYXN0Q29udGFpbmVyID0gdW5kZWZpbmVkO1xuXG52YXIgX1RvYXN0Q29udGFpbmVyID0gcmVxdWlyZShcIi4vVG9hc3RDb250YWluZXJcIik7XG5cbnZhciBfVG9hc3RDb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVG9hc3RDb250YWluZXIpO1xuXG52YXIgX1RvYXN0TWVzc2FnZSA9IHJlcXVpcmUoXCIuL1RvYXN0TWVzc2FnZVwiKTtcblxudmFyIF9Ub2FzdE1lc3NhZ2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVG9hc3RNZXNzYWdlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5Ub2FzdENvbnRhaW5lciA9IF9Ub2FzdENvbnRhaW5lcjIuZGVmYXVsdDtcbmV4cG9ydHMuVG9hc3RNZXNzYWdlID0gX1RvYXN0TWVzc2FnZTIuZGVmYXVsdDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC10b2FzdHIvbGliL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdEFkZG9uc1VwZGF0ZSA9IHJlcXVpcmUoXCJyZWFjdC1hZGRvbnMtdXBkYXRlXCIpO1xuXG52YXIgX3JlYWN0QWRkb25zVXBkYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0QWRkb25zVXBkYXRlKTtcblxudmFyIF9Ub2FzdE1lc3NhZ2UgPSByZXF1aXJlKFwiLi9Ub2FzdE1lc3NhZ2VcIik7XG5cbnZhciBfVG9hc3RNZXNzYWdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RvYXN0TWVzc2FnZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFRvYXN0Q29udGFpbmVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFRvYXN0Q29udGFpbmVyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUb2FzdENvbnRhaW5lcigpIHtcbiAgICB2YXIgX09iamVjdCRnZXRQcm90b3R5cGVPO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUb2FzdENvbnRhaW5lcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfT2JqZWN0JGdldFByb3RvdHlwZU8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoVG9hc3RDb250YWluZXIpKS5jYWxsLmFwcGx5KF9PYmplY3QkZ2V0UHJvdG90eXBlTywgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgdG9hc3RzOiBbXSxcbiAgICAgIHRvYXN0SWQ6IDAsXG4gICAgICBwcmV2aW91c01lc3NhZ2U6IG51bGxcbiAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhUb2FzdENvbnRhaW5lciwgW3tcbiAgICBrZXk6IFwiZXJyb3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXJyb3IobWVzc2FnZSwgdGl0bGUsIG9wdGlvbnNPdmVycmlkZSkge1xuICAgICAgdGhpcy5fbm90aWZ5KHRoaXMucHJvcHMudG9hc3RUeXBlLmVycm9yLCBtZXNzYWdlLCB0aXRsZSwgb3B0aW9uc092ZXJyaWRlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaW5mb1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbmZvKG1lc3NhZ2UsIHRpdGxlLCBvcHRpb25zT3ZlcnJpZGUpIHtcbiAgICAgIHRoaXMuX25vdGlmeSh0aGlzLnByb3BzLnRvYXN0VHlwZS5pbmZvLCBtZXNzYWdlLCB0aXRsZSwgb3B0aW9uc092ZXJyaWRlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3VjY2Vzc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdWNjZXNzKG1lc3NhZ2UsIHRpdGxlLCBvcHRpb25zT3ZlcnJpZGUpIHtcbiAgICAgIHRoaXMuX25vdGlmeSh0aGlzLnByb3BzLnRvYXN0VHlwZS5zdWNjZXNzLCBtZXNzYWdlLCB0aXRsZSwgb3B0aW9uc092ZXJyaWRlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwid2FybmluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UsIHRpdGxlLCBvcHRpb25zT3ZlcnJpZGUpIHtcbiAgICAgIHRoaXMuX25vdGlmeSh0aGlzLnByb3BzLnRvYXN0VHlwZS53YXJuaW5nLCBtZXNzYWdlLCB0aXRsZSwgb3B0aW9uc092ZXJyaWRlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2xlYXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgT2JqZWN0LmtleXModGhpcy5yZWZzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX3RoaXMyLnJlZnNba2V5XS5oaWRlVG9hc3QoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9ub3RpZnlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX25vdGlmeSh0eXBlLCBtZXNzYWdlLCB0aXRsZSkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBvcHRpb25zT3ZlcnJpZGUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDMgfHwgYXJndW1lbnRzWzNdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1szXTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMucHJldmVudER1cGxpY2F0ZXMpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucHJldmlvdXNNZXNzYWdlID09PSBtZXNzYWdlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIga2V5ID0gdGhpcy5zdGF0ZS50b2FzdElkKys7XG4gICAgICB2YXIgdG9hc3RJZCA9IGtleTtcbiAgICAgIHZhciBuZXdUb2FzdCA9ICgwLCBfcmVhY3RBZGRvbnNVcGRhdGUyLmRlZmF1bHQpKG9wdGlvbnNPdmVycmlkZSwge1xuICAgICAgICAkbWVyZ2U6IHtcbiAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICAgIHRvYXN0SWQ6IHRvYXN0SWQsXG4gICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgcmVmOiBcInRvYXN0c19fXCIgKyBrZXksXG4gICAgICAgICAgaGFuZGxlT25DbGljazogZnVuY3Rpb24gaGFuZGxlT25DbGljayhlKSB7XG4gICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09PSB0eXBlb2Ygb3B0aW9uc092ZXJyaWRlLmhhbmRsZU9uQ2xpY2spIHtcbiAgICAgICAgICAgICAgb3B0aW9uc092ZXJyaWRlLmhhbmRsZU9uQ2xpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBfdGhpczMuX2hhbmRsZV90b2FzdF9vbl9jbGljayhlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhhbmRsZVJlbW92ZTogdGhpcy5faGFuZGxlX3RvYXN0X3JlbW92ZS5iaW5kKHRoaXMpXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdmFyIHRvYXN0T3BlcmF0aW9uID0gX2RlZmluZVByb3BlcnR5KHt9LCBcIlwiICsgKHRoaXMucHJvcHMubmV3ZXN0T25Ub3AgPyBcIiR1bnNoaWZ0XCIgOiBcIiRwdXNoXCIpLCBbbmV3VG9hc3RdKTtcblxuICAgICAgdmFyIG5leHRTdGF0ZSA9ICgwLCBfcmVhY3RBZGRvbnNVcGRhdGUyLmRlZmF1bHQpKHRoaXMuc3RhdGUsIHtcbiAgICAgICAgdG9hc3RzOiB0b2FzdE9wZXJhdGlvbixcbiAgICAgICAgcHJldmlvdXNNZXNzYWdlOiB7ICRzZXQ6IG1lc3NhZ2UgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9oYW5kbGVfdG9hc3Rfb25fY2xpY2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZV90b2FzdF9vbl9jbGljayhldmVudCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcbiAgICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2hhbmRsZV90b2FzdF9yZW1vdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZV90b2FzdF9yZW1vdmUodG9hc3RJZCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciBvcGVyYXRpb25OYW1lID0gXCJcIiArICh0aGlzLnByb3BzLm5ld2VzdE9uVG9wID8gXCJyZWR1Y2VSaWdodFwiIDogXCJyZWR1Y2VcIik7XG4gICAgICB0aGlzLnN0YXRlLnRvYXN0c1tvcGVyYXRpb25OYW1lXShmdW5jdGlvbiAoZm91bmQsIHRvYXN0LCBpbmRleCkge1xuICAgICAgICBpZiAoZm91bmQgfHwgdG9hc3QudG9hc3RJZCAhPT0gdG9hc3RJZCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBfdGhpczQuc2V0U3RhdGUoKDAsIF9yZWFjdEFkZG9uc1VwZGF0ZTIuZGVmYXVsdCkoX3RoaXM0LnN0YXRlLCB7XG4gICAgICAgICAgdG9hc3RzOiB7ICRzcGxpY2U6IFtbaW5kZXgsIDFdXSB9XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LCBmYWxzZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBcImFyaWEtbGl2ZVwiOiBcInBvbGl0ZVwiLCByb2xlOiBcImFsZXJ0XCIgfSksXG4gICAgICAgIHRoaXMuc3RhdGUudG9hc3RzLm1hcChmdW5jdGlvbiAodG9hc3QpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXM1LnByb3BzLnRvYXN0TWVzc2FnZUZhY3RvcnkodG9hc3QpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVG9hc3RDb250YWluZXI7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5Ub2FzdENvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gIHRvYXN0VHlwZTogX3JlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4gICAgZXJyb3I6IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGluZm86IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN1Y2Nlc3M6IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHdhcm5pbmc6IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG4gIH0pLmlzUmVxdWlyZWQsXG4gIGlkOiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0b2FzdE1lc3NhZ2VGYWN0b3J5OiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcHJldmVudER1cGxpY2F0ZXM6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBuZXdlc3RPblRvcDogX3JlYWN0LlByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIG9uQ2xpY2s6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuVG9hc3RDb250YWluZXIuZGVmYXVsdFByb3BzID0ge1xuICB0b2FzdFR5cGU6IHtcbiAgICBlcnJvcjogXCJlcnJvclwiLFxuICAgIGluZm86IFwiaW5mb1wiLFxuICAgIHN1Y2Nlc3M6IFwic3VjY2Vzc1wiLFxuICAgIHdhcm5pbmc6IFwid2FybmluZ1wiXG4gIH0sXG4gIGlkOiBcInRvYXN0LWNvbnRhaW5lclwiLFxuICB0b2FzdE1lc3NhZ2VGYWN0b3J5OiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRmFjdG9yeShfVG9hc3RNZXNzYWdlMi5kZWZhdWx0KSxcbiAgcHJldmVudER1cGxpY2F0ZXM6IGZhbHNlLFxuICBuZXdlc3RPblRvcDogdHJ1ZSxcbiAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHt9XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gVG9hc3RDb250YWluZXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtdG9hc3RyL2xpYi9Ub2FzdENvbnRhaW5lci5qc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ3JlYWN0L2xpYi91cGRhdGUnKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1hZGRvbnMtdXBkYXRlL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSB1cGRhdGVcbiAqL1xuXG4vKiBnbG9iYWwgaGFzT3duUHJvcGVydHk6dHJ1ZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCcuL09iamVjdC5hc3NpZ24nKTtcbnZhciBrZXlPZiA9IHJlcXVpcmUoJ2ZianMvbGliL2tleU9mJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgaGFzT3duUHJvcGVydHkgPSAoe30pLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBzaGFsbG93Q29weSh4KSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHgpKSB7XG4gICAgcmV0dXJuIHguY29uY2F0KCk7XG4gIH0gZWxzZSBpZiAoeCAmJiB0eXBlb2YgeCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gYXNzaWduKG5ldyB4LmNvbnN0cnVjdG9yKCksIHgpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4O1xuICB9XG59XG5cbnZhciBDT01NQU5EX1BVU0ggPSBrZXlPZih7ICRwdXNoOiBudWxsIH0pO1xudmFyIENPTU1BTkRfVU5TSElGVCA9IGtleU9mKHsgJHVuc2hpZnQ6IG51bGwgfSk7XG52YXIgQ09NTUFORF9TUExJQ0UgPSBrZXlPZih7ICRzcGxpY2U6IG51bGwgfSk7XG52YXIgQ09NTUFORF9TRVQgPSBrZXlPZih7ICRzZXQ6IG51bGwgfSk7XG52YXIgQ09NTUFORF9NRVJHRSA9IGtleU9mKHsgJG1lcmdlOiBudWxsIH0pO1xudmFyIENPTU1BTkRfQVBQTFkgPSBrZXlPZih7ICRhcHBseTogbnVsbCB9KTtcblxudmFyIEFMTF9DT01NQU5EU19MSVNUID0gW0NPTU1BTkRfUFVTSCwgQ09NTUFORF9VTlNISUZULCBDT01NQU5EX1NQTElDRSwgQ09NTUFORF9TRVQsIENPTU1BTkRfTUVSR0UsIENPTU1BTkRfQVBQTFldO1xuXG52YXIgQUxMX0NPTU1BTkRTX1NFVCA9IHt9O1xuXG5BTExfQ09NTUFORFNfTElTVC5mb3JFYWNoKGZ1bmN0aW9uIChjb21tYW5kKSB7XG4gIEFMTF9DT01NQU5EU19TRVRbY29tbWFuZF0gPSB0cnVlO1xufSk7XG5cbmZ1bmN0aW9uIGludmFyaWFudEFycmF5Q2FzZSh2YWx1ZSwgc3BlYywgY29tbWFuZCkge1xuICAhQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAndXBkYXRlKCk6IGV4cGVjdGVkIHRhcmdldCBvZiAlcyB0byBiZSBhbiBhcnJheTsgZ290ICVzLicsIGNvbW1hbmQsIHZhbHVlKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG4gIHZhciBzcGVjVmFsdWUgPSBzcGVjW2NvbW1hbmRdO1xuICAhQXJyYXkuaXNBcnJheShzcGVjVmFsdWUpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ3VwZGF0ZSgpOiBleHBlY3RlZCBzcGVjIG9mICVzIHRvIGJlIGFuIGFycmF5OyBnb3QgJXMuICcgKyAnRGlkIHlvdSBmb3JnZXQgdG8gd3JhcCB5b3VyIHBhcmFtZXRlciBpbiBhbiBhcnJheT8nLCBjb21tYW5kLCBzcGVjVmFsdWUpIDogaW52YXJpYW50KGZhbHNlKSA6IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gdXBkYXRlKHZhbHVlLCBzcGVjKSB7XG4gICEodHlwZW9mIHNwZWMgPT09ICdvYmplY3QnKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICd1cGRhdGUoKTogWW91IHByb3ZpZGVkIGEga2V5IHBhdGggdG8gdXBkYXRlKCkgdGhhdCBkaWQgbm90IGNvbnRhaW4gb25lICcgKyAnb2YgJXMuIERpZCB5b3UgZm9yZ2V0IHRvIGluY2x1ZGUgeyVzOiAuLi59PycsIEFMTF9DT01NQU5EU19MSVNULmpvaW4oJywgJyksIENPTU1BTkRfU0VUKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG5cbiAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc3BlYywgQ09NTUFORF9TRVQpKSB7XG4gICAgIShPYmplY3Qua2V5cyhzcGVjKS5sZW5ndGggPT09IDEpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ0Nhbm5vdCBoYXZlIG1vcmUgdGhhbiBvbmUga2V5IGluIGFuIG9iamVjdCB3aXRoICVzJywgQ09NTUFORF9TRVQpIDogaW52YXJpYW50KGZhbHNlKSA6IHVuZGVmaW5lZDtcblxuICAgIHJldHVybiBzcGVjW0NPTU1BTkRfU0VUXTtcbiAgfVxuXG4gIHZhciBuZXh0VmFsdWUgPSBzaGFsbG93Q29weSh2YWx1ZSk7XG5cbiAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc3BlYywgQ09NTUFORF9NRVJHRSkpIHtcbiAgICB2YXIgbWVyZ2VPYmogPSBzcGVjW0NPTU1BTkRfTUVSR0VdO1xuICAgICEobWVyZ2VPYmogJiYgdHlwZW9mIG1lcmdlT2JqID09PSAnb2JqZWN0JykgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAndXBkYXRlKCk6ICVzIGV4cGVjdHMgYSBzcGVjIG9mIHR5cGUgXFwnb2JqZWN0XFwnOyBnb3QgJXMnLCBDT01NQU5EX01FUkdFLCBtZXJnZU9iaikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xuICAgICEobmV4dFZhbHVlICYmIHR5cGVvZiBuZXh0VmFsdWUgPT09ICdvYmplY3QnKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICd1cGRhdGUoKTogJXMgZXhwZWN0cyBhIHRhcmdldCBvZiB0eXBlIFxcJ29iamVjdFxcJzsgZ290ICVzJywgQ09NTUFORF9NRVJHRSwgbmV4dFZhbHVlKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG4gICAgYXNzaWduKG5leHRWYWx1ZSwgc3BlY1tDT01NQU5EX01FUkdFXSk7XG4gIH1cblxuICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzcGVjLCBDT01NQU5EX1BVU0gpKSB7XG4gICAgaW52YXJpYW50QXJyYXlDYXNlKHZhbHVlLCBzcGVjLCBDT01NQU5EX1BVU0gpO1xuICAgIHNwZWNbQ09NTUFORF9QVVNIXS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICBuZXh0VmFsdWUucHVzaChpdGVtKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHNwZWMsIENPTU1BTkRfVU5TSElGVCkpIHtcbiAgICBpbnZhcmlhbnRBcnJheUNhc2UodmFsdWUsIHNwZWMsIENPTU1BTkRfVU5TSElGVCk7XG4gICAgc3BlY1tDT01NQU5EX1VOU0hJRlRdLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIG5leHRWYWx1ZS51bnNoaWZ0KGl0ZW0pO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc3BlYywgQ09NTUFORF9TUExJQ0UpKSB7XG4gICAgIUFycmF5LmlzQXJyYXkodmFsdWUpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ0V4cGVjdGVkICVzIHRhcmdldCB0byBiZSBhbiBhcnJheTsgZ290ICVzJywgQ09NTUFORF9TUExJQ0UsIHZhbHVlKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG4gICAgIUFycmF5LmlzQXJyYXkoc3BlY1tDT01NQU5EX1NQTElDRV0pID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ3VwZGF0ZSgpOiBleHBlY3RlZCBzcGVjIG9mICVzIHRvIGJlIGFuIGFycmF5IG9mIGFycmF5czsgZ290ICVzLiAnICsgJ0RpZCB5b3UgZm9yZ2V0IHRvIHdyYXAgeW91ciBwYXJhbWV0ZXJzIGluIGFuIGFycmF5PycsIENPTU1BTkRfU1BMSUNFLCBzcGVjW0NPTU1BTkRfU1BMSUNFXSkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xuICAgIHNwZWNbQ09NTUFORF9TUExJQ0VdLmZvckVhY2goZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICFBcnJheS5pc0FycmF5KGFyZ3MpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ3VwZGF0ZSgpOiBleHBlY3RlZCBzcGVjIG9mICVzIHRvIGJlIGFuIGFycmF5IG9mIGFycmF5czsgZ290ICVzLiAnICsgJ0RpZCB5b3UgZm9yZ2V0IHRvIHdyYXAgeW91ciBwYXJhbWV0ZXJzIGluIGFuIGFycmF5PycsIENPTU1BTkRfU1BMSUNFLCBzcGVjW0NPTU1BTkRfU1BMSUNFXSkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xuICAgICAgbmV4dFZhbHVlLnNwbGljZS5hcHBseShuZXh0VmFsdWUsIGFyZ3MpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc3BlYywgQ09NTUFORF9BUFBMWSkpIHtcbiAgICAhKHR5cGVvZiBzcGVjW0NPTU1BTkRfQVBQTFldID09PSAnZnVuY3Rpb24nKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICd1cGRhdGUoKTogZXhwZWN0ZWQgc3BlYyBvZiAlcyB0byBiZSBhIGZ1bmN0aW9uOyBnb3QgJXMuJywgQ09NTUFORF9BUFBMWSwgc3BlY1tDT01NQU5EX0FQUExZXSkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xuICAgIG5leHRWYWx1ZSA9IHNwZWNbQ09NTUFORF9BUFBMWV0obmV4dFZhbHVlKTtcbiAgfVxuXG4gIGZvciAodmFyIGsgaW4gc3BlYykge1xuICAgIGlmICghKEFMTF9DT01NQU5EU19TRVQuaGFzT3duUHJvcGVydHkoaykgJiYgQUxMX0NPTU1BTkRTX1NFVFtrXSkpIHtcbiAgICAgIG5leHRWYWx1ZVtrXSA9IHVwZGF0ZSh2YWx1ZVtrXSwgc3BlY1trXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5leHRWYWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB1cGRhdGU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL3VwZGF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgc2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgT2JqZWN0LmFzc2lnblxuICovXG5cbi8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1vYmplY3QuYXNzaWduXG5cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlcykge1xuICBpZiAodGFyZ2V0ID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIHRhcmdldCBjYW5ub3QgYmUgbnVsbCBvciB1bmRlZmluZWQnKTtcbiAgfVxuXG4gIHZhciB0byA9IE9iamVjdCh0YXJnZXQpO1xuICB2YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4gIGZvciAodmFyIG5leHRJbmRleCA9IDE7IG5leHRJbmRleCA8IGFyZ3VtZW50cy5sZW5ndGg7IG5leHRJbmRleCsrKSB7XG4gICAgdmFyIG5leHRTb3VyY2UgPSBhcmd1bWVudHNbbmV4dEluZGV4XTtcbiAgICBpZiAobmV4dFNvdXJjZSA9PSBudWxsKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIgZnJvbSA9IE9iamVjdChuZXh0U291cmNlKTtcblxuICAgIC8vIFdlIGRvbid0IGN1cnJlbnRseSBzdXBwb3J0IGFjY2Vzc29ycyBub3IgcHJveGllcy4gVGhlcmVmb3JlIHRoaXNcbiAgICAvLyBjb3B5IGNhbm5vdCB0aHJvdy4gSWYgd2UgZXZlciBzdXBwb3J0ZWQgdGhpcyB0aGVuIHdlIG11c3QgaGFuZGxlXG4gICAgLy8gZXhjZXB0aW9ucyBhbmQgc2lkZS1lZmZlY3RzLiBXZSBkb24ndCBzdXBwb3J0IHN5bWJvbHMgc28gdGhleSB3b24ndFxuICAgIC8vIGJlIHRyYW5zZmVycmVkLlxuXG4gICAgZm9yICh2YXIga2V5IGluIGZyb20pIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcbiAgICAgICAgdG9ba2V5XSA9IGZyb21ba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzaWduO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0L2xpYi9PYmplY3QuYXNzaWduLmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBrZXlPZlxuICovXG5cbi8qKlxuICogQWxsb3dzIGV4dHJhY3Rpb24gb2YgYSBtaW5pZmllZCBrZXkuIExldCdzIHRoZSBidWlsZCBzeXN0ZW0gbWluaWZ5IGtleXNcbiAqIHdpdGhvdXQgbG9zaW5nIHRoZSBhYmlsaXR5IHRvIGR5bmFtaWNhbGx5IHVzZSBrZXkgc3RyaW5ncyBhcyB2YWx1ZXNcbiAqIHRoZW1zZWx2ZXMuIFBhc3MgaW4gYW4gb2JqZWN0IHdpdGggYSBzaW5nbGUga2V5L3ZhbCBwYWlyIGFuZCBpdCB3aWxsIHJldHVyblxuICogeW91IHRoZSBzdHJpbmcga2V5IG9mIHRoYXQgc2luZ2xlIHJlY29yZC4gU3VwcG9zZSB5b3Ugd2FudCB0byBncmFiIHRoZVxuICogdmFsdWUgZm9yIGEga2V5ICdjbGFzc05hbWUnIGluc2lkZSBvZiBhbiBvYmplY3QuIEtleS92YWwgbWluaWZpY2F0aW9uIG1heVxuICogaGF2ZSBhbGlhc2VkIHRoYXQga2V5IHRvIGJlICd4YTEyJy4ga2V5T2Yoe2NsYXNzTmFtZTogbnVsbH0pIHdpbGwgcmV0dXJuXG4gKiAneGExMicgaW4gdGhhdCBjYXNlLiBSZXNvbHZlIGtleXMgeW91IHdhbnQgdG8gdXNlIG9uY2UgYXQgc3RhcnR1cCB0aW1lLCB0aGVuXG4gKiByZXVzZSB0aG9zZSByZXNvbHV0aW9ucy5cbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBrZXlPZiA9IGZ1bmN0aW9uIChvbmVLZXlPYmopIHtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gb25lS2V5T2JqKSB7XG4gICAgaWYgKCFvbmVLZXlPYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHJldHVybiBrZXk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGtleU9mO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZianMvbGliL2tleU9mLmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBpbnZhcmlhbnRcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgKyAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KSk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9mYmpzL2xpYi9pbnZhcmlhbnQuanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmpRdWVyeSA9IGV4cG9ydHMuYW5pbWF0aW9uID0gdW5kZWZpbmVkO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdEFkZG9uc1VwZGF0ZSA9IHJlcXVpcmUoXCJyZWFjdC1hZGRvbnMtdXBkYXRlXCIpO1xuXG52YXIgX3JlYWN0QWRkb25zVXBkYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0QWRkb25zVXBkYXRlKTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9hbmltYXRpb25NaXhpbiA9IHJlcXVpcmUoXCIuL2FuaW1hdGlvbk1peGluXCIpO1xuXG52YXIgX2FuaW1hdGlvbk1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FuaW1hdGlvbk1peGluKTtcblxudmFyIF9qUXVlcnlNaXhpbiA9IHJlcXVpcmUoXCIuL2pRdWVyeU1peGluXCIpO1xuXG52YXIgX2pRdWVyeU1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2pRdWVyeU1peGluKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnZhciBUb2FzdE1lc3NhZ2VTcGVjID0ge1xuICBkaXNwbGF5TmFtZTogXCJUb2FzdE1lc3NhZ2VcIixcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICB2YXIgaWNvbkNsYXNzTmFtZXMgPSB7XG4gICAgICBlcnJvcjogXCJ0b2FzdC1lcnJvclwiLFxuICAgICAgaW5mbzogXCJ0b2FzdC1pbmZvXCIsXG4gICAgICBzdWNjZXNzOiBcInRvYXN0LXN1Y2Nlc3NcIixcbiAgICAgIHdhcm5pbmc6IFwidG9hc3Qtd2FybmluZ1wiXG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBjbGFzc05hbWU6IFwidG9hc3RcIixcbiAgICAgIGljb25DbGFzc05hbWVzOiBpY29uQ2xhc3NOYW1lcyxcbiAgICAgIHRpdGxlQ2xhc3NOYW1lOiBcInRvYXN0LXRpdGxlXCIsXG4gICAgICBtZXNzYWdlQ2xhc3NOYW1lOiBcInRvYXN0LW1lc3NhZ2VcIixcbiAgICAgIHRhcFRvRGlzbWlzczogdHJ1ZSxcbiAgICAgIGNsb3NlQnV0dG9uOiBmYWxzZVxuICAgIH07XG4gIH0sXG4gIGhhbmRsZU9uQ2xpY2s6IGZ1bmN0aW9uIGhhbmRsZU9uQ2xpY2soZXZlbnQpIHtcbiAgICB0aGlzLnByb3BzLmhhbmRsZU9uQ2xpY2soZXZlbnQpO1xuICAgIGlmICh0aGlzLnByb3BzLnRhcFRvRGlzbWlzcykge1xuICAgICAgdGhpcy5oaWRlVG9hc3QodHJ1ZSk7XG4gICAgfVxuICB9LFxuICBfaGFuZGxlX2Nsb3NlX2J1dHRvbl9jbGljazogZnVuY3Rpb24gX2hhbmRsZV9jbG9zZV9idXR0b25fY2xpY2soZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmhpZGVUb2FzdCh0cnVlKTtcbiAgfSxcbiAgX2hhbmRsZV9yZW1vdmU6IGZ1bmN0aW9uIF9oYW5kbGVfcmVtb3ZlKCkge1xuICAgIHRoaXMucHJvcHMuaGFuZGxlUmVtb3ZlKHRoaXMucHJvcHMudG9hc3RJZCk7XG4gIH0sXG4gIF9yZW5kZXJfY2xvc2VfYnV0dG9uOiBmdW5jdGlvbiBfcmVuZGVyX2Nsb3NlX2J1dHRvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jbG9zZUJ1dHRvbiA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJ0b2FzdC1jbG9zZS1idXR0b25cIiwgcm9sZTogXCJidXR0b25cIixcbiAgICAgIG9uQ2xpY2s6IHRoaXMuX2hhbmRsZV9jbG9zZV9idXR0b25fY2xpY2ssXG4gICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDogeyBfX2h0bWw6IFwiJnRpbWVzO1wiIH1cbiAgICB9KSA6IGZhbHNlO1xuICB9LFxuICBfcmVuZGVyX3RpdGxlX2VsZW1lbnQ6IGZ1bmN0aW9uIF9yZW5kZXJfdGl0bGVfZWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy50aXRsZSA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgY2xhc3NOYW1lOiB0aGlzLnByb3BzLnRpdGxlQ2xhc3NOYW1lIH0sXG4gICAgICB0aGlzLnByb3BzLnRpdGxlXG4gICAgKSA6IGZhbHNlO1xuICB9LFxuICBfcmVuZGVyX21lc3NhZ2VfZWxlbWVudDogZnVuY3Rpb24gX3JlbmRlcl9tZXNzYWdlX2VsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMubWVzc2FnZSA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgY2xhc3NOYW1lOiB0aGlzLnByb3BzLm1lc3NhZ2VDbGFzc05hbWUgfSxcbiAgICAgIHRoaXMucHJvcHMubWVzc2FnZVxuICAgICkgOiBmYWxzZTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGljb25DbGFzc05hbWUgPSB0aGlzLnByb3BzLmljb25DbGFzc05hbWUgfHwgdGhpcy5wcm9wcy5pY29uQ2xhc3NOYW1lc1t0aGlzLnByb3BzLnR5cGVdO1xuXG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyLmRlZmF1bHQpKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBpY29uQ2xhc3NOYW1lKSxcbiAgICAgICAgc3R5bGU6IHRoaXMucHJvcHMuc3R5bGUsXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlT25DbGljayxcbiAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLmhhbmRsZU1vdXNlRW50ZXIsXG4gICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5oYW5kbGVNb3VzZUxlYXZlXG4gICAgICB9LFxuICAgICAgdGhpcy5fcmVuZGVyX2Nsb3NlX2J1dHRvbigpLFxuICAgICAgdGhpcy5fcmVuZGVyX3RpdGxlX2VsZW1lbnQoKSxcbiAgICAgIHRoaXMuX3JlbmRlcl9tZXNzYWdlX2VsZW1lbnQoKVxuICAgICk7XG4gIH1cbn07XG5cbnZhciBhbmltYXRpb24gPSBleHBvcnRzLmFuaW1hdGlvbiA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVDbGFzcygoMCwgX3JlYWN0QWRkb25zVXBkYXRlMi5kZWZhdWx0KShUb2FzdE1lc3NhZ2VTcGVjLCB7XG4gIGRpc3BsYXlOYW1lOiB7ICRzZXQ6IFwiVG9hc3RNZXNzYWdlLmFuaW1hdGlvblwiIH0sXG4gIG1peGluczogeyAkc2V0OiBbX2FuaW1hdGlvbk1peGluMi5kZWZhdWx0XSB9XG59KSk7XG5cbnZhciBqUXVlcnkgPSBleHBvcnRzLmpRdWVyeSA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVDbGFzcygoMCwgX3JlYWN0QWRkb25zVXBkYXRlMi5kZWZhdWx0KShUb2FzdE1lc3NhZ2VTcGVjLCB7XG4gIGRpc3BsYXlOYW1lOiB7ICRzZXQ6IFwiVG9hc3RNZXNzYWdlLmpRdWVyeVwiIH0sXG4gIG1peGluczogeyAkc2V0OiBbX2pRdWVyeU1peGluMi5kZWZhdWx0XSB9XG59KSk7XG5cbi8qXG4gKiBhc3NpZ24gZGVmYXVsdCBub29wIGZ1bmN0aW9uc1xuICovXG5Ub2FzdE1lc3NhZ2VTcGVjLmhhbmRsZU1vdXNlRW50ZXIgPSBub29wO1xuVG9hc3RNZXNzYWdlU3BlYy5oYW5kbGVNb3VzZUxlYXZlID0gbm9vcDtcblRvYXN0TWVzc2FnZVNwZWMuaGlkZVRvYXN0ID0gbm9vcDtcblxudmFyIFRvYXN0TWVzc2FnZSA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVDbGFzcyhUb2FzdE1lc3NhZ2VTcGVjKTtcblxuVG9hc3RNZXNzYWdlLmFuaW1hdGlvbiA9IGFuaW1hdGlvbjtcblRvYXN0TWVzc2FnZS5qUXVlcnkgPSBqUXVlcnk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRvYXN0TWVzc2FnZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC10b2FzdHIvbGliL1RvYXN0TWVzc2FnZS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9SZWFjdFRyYW5zaXRpb25FdmVudHMgPSByZXF1aXJlKFwicmVhY3QvbGliL1JlYWN0VHJhbnNpdGlvbkV2ZW50c1wiKTtcblxudmFyIF9SZWFjdFRyYW5zaXRpb25FdmVudHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmVhY3RUcmFuc2l0aW9uRXZlbnRzKTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG52YXIgX2VsZW1lbnRDbGFzcyA9IHJlcXVpcmUoXCJlbGVtZW50LWNsYXNzXCIpO1xuXG52YXIgX2VsZW1lbnRDbGFzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9lbGVtZW50Q2xhc3MpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgVElDSyA9IDE3O1xudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zaXRpb246IG51bGwsIC8vIHNvbWUgZXhhbXBsZXMgZGVmaW5lZCBpbiBpbmRleC5zY3NzIChzY2FsZSwgZmFkZUluT3V0LCByb3RhdGUpXG4gICAgICBzaG93QW5pbWF0aW9uOiBcImFuaW1hdGVkIGJvdW5jZUluXCIsIC8vIG9yIG90aGVyIGFuaW1hdGlvbnMgZnJvbSBhbmltYXRlLmNzc1xuICAgICAgaGlkZUFuaW1hdGlvbjogXCJhbmltYXRlZCBib3VuY2VPdXRcIixcbiAgICAgIHRpbWVPdXQ6IDUwMDAsXG4gICAgICBleHRlbmRlZFRpbWVPdXQ6IDEwMDBcbiAgICB9O1xuICB9LFxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLmNsYXNzTmFtZVF1ZXVlID0gW107XG4gICAgdGhpcy5pc0hpZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IG51bGw7XG4gIH0sXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdGhpcy5faXNfbW91bnRlZCA9IHRydWU7XG4gICAgdGhpcy5fc2hvdygpO1xuICAgIHZhciBub2RlID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgdmFyIG9uSGlkZUNvbXBsZXRlID0gZnVuY3Rpb24gb25IaWRlQ29tcGxldGUoKSB7XG4gICAgICBpZiAoX3RoaXMuaXNIaWRpbmcpIHtcbiAgICAgICAgX3RoaXMuX3NldF9pc19oaWRpbmcoZmFsc2UpO1xuICAgICAgICBfUmVhY3RUcmFuc2l0aW9uRXZlbnRzMi5kZWZhdWx0LnJlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgb25IaWRlQ29tcGxldGUpO1xuICAgICAgICBfdGhpcy5faGFuZGxlX3JlbW92ZSgpO1xuICAgICAgfVxuICAgIH07XG4gICAgX1JlYWN0VHJhbnNpdGlvbkV2ZW50czIuZGVmYXVsdC5hZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIG9uSGlkZUNvbXBsZXRlKTtcblxuICAgIGlmICh0aGlzLnByb3BzLnRpbWVPdXQgPiAwKSB7XG4gICAgICB0aGlzLl9zZXRfaW50ZXJ2YWxfaWQoc2V0VGltZW91dCh0aGlzLmhpZGVUb2FzdCwgdGhpcy5wcm9wcy50aW1lT3V0KSk7XG4gICAgfVxuICB9LFxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5faXNfbW91bnRlZCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmludGVydmFsSWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmludGVydmFsSWQpO1xuICAgIH1cbiAgfSxcbiAgX3NldF90cmFuc2l0aW9uOiBmdW5jdGlvbiBfc2V0X3RyYW5zaXRpb24oaGlkZSkge1xuICAgIHZhciBhbmltYXRpb25UeXBlID0gaGlkZSA/IFwibGVhdmVcIiA6IFwiZW50ZXJcIjtcbiAgICB2YXIgbm9kZSA9IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICB2YXIgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy50cmFuc2l0aW9uICsgXCItXCIgKyBhbmltYXRpb25UeXBlO1xuICAgIHZhciBhY3RpdmVDbGFzc05hbWUgPSBjbGFzc05hbWUgKyBcIi1hY3RpdmVcIjtcblxuICAgIHZhciBlbmRMaXN0ZW5lciA9IGZ1bmN0aW9uIGVuZExpc3RlbmVyKGUpIHtcbiAgICAgIGlmIChlICYmIGUudGFyZ2V0ICE9PSBub2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNsYXNzTGlzdCA9ICgwLCBfZWxlbWVudENsYXNzMi5kZWZhdWx0KShub2RlKTtcbiAgICAgIGNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgIGNsYXNzTGlzdC5yZW1vdmUoYWN0aXZlQ2xhc3NOYW1lKTtcblxuICAgICAgX1JlYWN0VHJhbnNpdGlvbkV2ZW50czIuZGVmYXVsdC5yZW1vdmVFbmRFdmVudExpc3RlbmVyKG5vZGUsIGVuZExpc3RlbmVyKTtcbiAgICB9O1xuXG4gICAgX1JlYWN0VHJhbnNpdGlvbkV2ZW50czIuZGVmYXVsdC5hZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIGVuZExpc3RlbmVyKTtcblxuICAgICgwLCBfZWxlbWVudENsYXNzMi5kZWZhdWx0KShub2RlKS5hZGQoY2xhc3NOYW1lKTtcblxuICAgIC8vIE5lZWQgdG8gZG8gdGhpcyB0byBhY3R1YWxseSB0cmlnZ2VyIGEgdHJhbnNpdGlvbi5cbiAgICB0aGlzLl9xdWV1ZV9jbGFzcyhhY3RpdmVDbGFzc05hbWUpO1xuICB9LFxuICBfY2xlYXJfdHJhbnNpdGlvbjogZnVuY3Rpb24gX2NsZWFyX3RyYW5zaXRpb24oaGlkZSkge1xuICAgIHZhciBub2RlID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIHZhciBhbmltYXRpb25UeXBlID0gaGlkZSA/IFwibGVhdmVcIiA6IFwiZW50ZXJcIjtcbiAgICB2YXIgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy50cmFuc2l0aW9uICsgXCItXCIgKyBhbmltYXRpb25UeXBlO1xuICAgIHZhciBhY3RpdmVDbGFzc05hbWUgPSBjbGFzc05hbWUgKyBcIi1hY3RpdmVcIjtcblxuICAgIHZhciBjbGFzc0xpc3QgPSAoMCwgX2VsZW1lbnRDbGFzczIuZGVmYXVsdCkobm9kZSk7XG4gICAgY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgIGNsYXNzTGlzdC5yZW1vdmUoYWN0aXZlQ2xhc3NOYW1lKTtcbiAgfSxcbiAgX3NldF9hbmltYXRpb246IGZ1bmN0aW9uIF9zZXRfYW5pbWF0aW9uKGhpZGUpIHtcbiAgICB2YXIgbm9kZSA9IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICB2YXIgYW5pbWF0aW9ucyA9IHRoaXMuX2dldF9hbmltYXRpb25fY2xhc3NlcyhoaWRlKTtcbiAgICB2YXIgZW5kTGlzdGVuZXIgPSBmdW5jdGlvbiBlbmRMaXN0ZW5lcihlKSB7XG4gICAgICBpZiAoZSAmJiBlLnRhcmdldCAhPT0gbm9kZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFuaW1hdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYW5pbSkge1xuICAgICAgICByZXR1cm4gKDAsIF9lbGVtZW50Q2xhc3MyLmRlZmF1bHQpKG5vZGUpLnJlbW92ZShhbmltKTtcbiAgICAgIH0pO1xuXG4gICAgICBfUmVhY3RUcmFuc2l0aW9uRXZlbnRzMi5kZWZhdWx0LnJlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgZW5kTGlzdGVuZXIpO1xuICAgIH07XG5cbiAgICBfUmVhY3RUcmFuc2l0aW9uRXZlbnRzMi5kZWZhdWx0LmFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgZW5kTGlzdGVuZXIpO1xuXG4gICAgYW5pbWF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhbmltKSB7XG4gICAgICByZXR1cm4gKDAsIF9lbGVtZW50Q2xhc3MyLmRlZmF1bHQpKG5vZGUpLmFkZChhbmltKTtcbiAgICB9KTtcbiAgfSxcbiAgX2dldF9hbmltYXRpb25fY2xhc3NlczogZnVuY3Rpb24gX2dldF9hbmltYXRpb25fY2xhc3NlcyhoaWRlKSB7XG4gICAgdmFyIGFuaW1hdGlvbnMgPSBoaWRlID8gdGhpcy5wcm9wcy5oaWRlQW5pbWF0aW9uIDogdGhpcy5wcm9wcy5zaG93QW5pbWF0aW9uO1xuICAgIGlmIChcIltvYmplY3QgQXJyYXldXCIgPT09IHRvU3RyaW5nLmNhbGwoYW5pbWF0aW9ucykpIHtcbiAgICAgIHJldHVybiBhbmltYXRpb25zO1xuICAgIH0gZWxzZSBpZiAoXCJzdHJpbmdcIiA9PT0gdHlwZW9mIGFuaW1hdGlvbnMpIHtcbiAgICAgIHJldHVybiBhbmltYXRpb25zLnNwbGl0KFwiIFwiKTtcbiAgICB9XG4gIH0sXG4gIF9jbGVhcl9hbmltYXRpb246IGZ1bmN0aW9uIF9jbGVhcl9hbmltYXRpb24oaGlkZSkge1xuICAgIHZhciBub2RlID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIHZhciBhbmltYXRpb25zID0gdGhpcy5fZ2V0X2FuaW1hdGlvbl9jbGFzc2VzKGhpZGUpO1xuICAgIGFuaW1hdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYW5pbWF0aW9uKSB7XG4gICAgICByZXR1cm4gKDAsIF9lbGVtZW50Q2xhc3MyLmRlZmF1bHQpKG5vZGUpLnJlbW92ZShhbmltYXRpb24pO1xuICAgIH0pO1xuICB9LFxuICBfcXVldWVfY2xhc3M6IGZ1bmN0aW9uIF9xdWV1ZV9jbGFzcyhjbGFzc05hbWUpIHtcbiAgICB0aGlzLmNsYXNzTmFtZVF1ZXVlLnB1c2goY2xhc3NOYW1lKTtcblxuICAgIGlmICghdGhpcy50aW1lb3V0KSB7XG4gICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KHRoaXMuX2ZsdXNoX2NsYXNzX25hbWVfcXVldWUsIFRJQ0spO1xuICAgIH1cbiAgfSxcbiAgX2ZsdXNoX2NsYXNzX25hbWVfcXVldWU6IGZ1bmN0aW9uIF9mbHVzaF9jbGFzc19uYW1lX3F1ZXVlKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuX2lzX21vdW50ZWQpIHtcbiAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBub2RlID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKF90aGlzMik7XG4gICAgICAgIF90aGlzMi5jbGFzc05hbWVRdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICAgICAgICByZXR1cm4gKDAsIF9lbGVtZW50Q2xhc3MyLmRlZmF1bHQpKG5vZGUpLmFkZChjbGFzc05hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pKCk7XG4gICAgfVxuICAgIHRoaXMuY2xhc3NOYW1lUXVldWUubGVuZ3RoID0gMDtcbiAgICB0aGlzLnRpbWVvdXQgPSBudWxsO1xuICB9LFxuICBfc2hvdzogZnVuY3Rpb24gX3Nob3coKSB7XG4gICAgaWYgKHRoaXMucHJvcHMudHJhbnNpdGlvbikge1xuICAgICAgdGhpcy5fc2V0X3RyYW5zaXRpb24oKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuc2hvd0FuaW1hdGlvbikge1xuICAgICAgdGhpcy5fc2V0X2FuaW1hdGlvbigpO1xuICAgIH1cbiAgfSxcbiAgaGFuZGxlTW91c2VFbnRlcjogZnVuY3Rpb24gaGFuZGxlTW91c2VFbnRlcigpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5pbnRlcnZhbElkKTtcbiAgICB0aGlzLl9zZXRfaW50ZXJ2YWxfaWQobnVsbCk7XG4gICAgaWYgKHRoaXMuaXNIaWRpbmcpIHtcbiAgICAgIHRoaXMuX3NldF9pc19oaWRpbmcoZmFsc2UpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5oaWRlQW5pbWF0aW9uKSB7XG4gICAgICAgIHRoaXMuX2NsZWFyX2FuaW1hdGlvbih0cnVlKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy50cmFuc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuX2NsZWFyX3RyYW5zaXRpb24odHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBoYW5kbGVNb3VzZUxlYXZlOiBmdW5jdGlvbiBoYW5kbGVNb3VzZUxlYXZlKCkge1xuICAgIGlmICghdGhpcy5pc0hpZGluZyAmJiAodGhpcy5wcm9wcy50aW1lT3V0ID4gMCB8fCB0aGlzLnByb3BzLmV4dGVuZGVkVGltZU91dCA+IDApKSB7XG4gICAgICB0aGlzLl9zZXRfaW50ZXJ2YWxfaWQoc2V0VGltZW91dCh0aGlzLmhpZGVUb2FzdCwgdGhpcy5wcm9wcy5leHRlbmRlZFRpbWVPdXQpKTtcbiAgICB9XG4gIH0sXG4gIGhpZGVUb2FzdDogZnVuY3Rpb24gaGlkZVRvYXN0KG92ZXJyaWRlKSB7XG4gICAgaWYgKHRoaXMuaXNIaWRpbmcgfHwgdGhpcy5pbnRlcnZhbElkID09PSBudWxsICYmICFvdmVycmlkZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3NldF9pc19oaWRpbmcodHJ1ZSk7XG4gICAgaWYgKHRoaXMucHJvcHMudHJhbnNpdGlvbikge1xuICAgICAgdGhpcy5fc2V0X3RyYW5zaXRpb24odHJ1ZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmhpZGVBbmltYXRpb24pIHtcbiAgICAgIHRoaXMuX3NldF9hbmltYXRpb24odHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hhbmRsZV9yZW1vdmUoKTtcbiAgICB9XG4gIH0sXG4gIF9zZXRfaW50ZXJ2YWxfaWQ6IGZ1bmN0aW9uIF9zZXRfaW50ZXJ2YWxfaWQoaW50ZXJ2YWxJZCkge1xuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IGludGVydmFsSWQ7XG4gIH0sXG4gIF9zZXRfaXNfaGlkaW5nOiBmdW5jdGlvbiBfc2V0X2lzX2hpZGluZyhpc0hpZGluZykge1xuICAgIHRoaXMuaXNIaWRpbmcgPSBpc0hpZGluZztcbiAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC10b2FzdHIvbGliL1RvYXN0TWVzc2FnZS9hbmltYXRpb25NaXhpbi5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgUmVhY3RUcmFuc2l0aW9uRXZlbnRzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9FeGVjdXRpb25FbnZpcm9ubWVudCcpO1xuXG4vKipcbiAqIEVWRU5UX05BTUVfTUFQIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHdoaWNoIGV2ZW50IGZpcmVkIHdoZW4gYVxuICogdHJhbnNpdGlvbi9hbmltYXRpb24gZW5kcywgYmFzZWQgb24gdGhlIHN0eWxlIHByb3BlcnR5IHVzZWQgdG9cbiAqIGRlZmluZSB0aGF0IGV2ZW50LlxuICovXG52YXIgRVZFTlRfTkFNRV9NQVAgPSB7XG4gIHRyYW5zaXRpb25lbmQ6IHtcbiAgICAndHJhbnNpdGlvbic6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAnV2Via2l0VHJhbnNpdGlvbic6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICAnTW96VHJhbnNpdGlvbic6ICdtb3pUcmFuc2l0aW9uRW5kJyxcbiAgICAnT1RyYW5zaXRpb24nOiAnb1RyYW5zaXRpb25FbmQnLFxuICAgICdtc1RyYW5zaXRpb24nOiAnTVNUcmFuc2l0aW9uRW5kJ1xuICB9LFxuXG4gIGFuaW1hdGlvbmVuZDoge1xuICAgICdhbmltYXRpb24nOiAnYW5pbWF0aW9uZW5kJyxcbiAgICAnV2Via2l0QW5pbWF0aW9uJzogJ3dlYmtpdEFuaW1hdGlvbkVuZCcsXG4gICAgJ01vekFuaW1hdGlvbic6ICdtb3pBbmltYXRpb25FbmQnLFxuICAgICdPQW5pbWF0aW9uJzogJ29BbmltYXRpb25FbmQnLFxuICAgICdtc0FuaW1hdGlvbic6ICdNU0FuaW1hdGlvbkVuZCdcbiAgfVxufTtcblxudmFyIGVuZEV2ZW50cyA9IFtdO1xuXG5mdW5jdGlvbiBkZXRlY3RFdmVudHMoKSB7XG4gIHZhciB0ZXN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdmFyIHN0eWxlID0gdGVzdEVsLnN0eWxlO1xuXG4gIC8vIE9uIHNvbWUgcGxhdGZvcm1zLCBpbiBwYXJ0aWN1bGFyIHNvbWUgcmVsZWFzZXMgb2YgQW5kcm9pZCA0LngsXG4gIC8vIHRoZSB1bi1wcmVmaXhlZCBcImFuaW1hdGlvblwiIGFuZCBcInRyYW5zaXRpb25cIiBwcm9wZXJ0aWVzIGFyZSBkZWZpbmVkIG9uIHRoZVxuICAvLyBzdHlsZSBvYmplY3QgYnV0IHRoZSBldmVudHMgdGhhdCBmaXJlIHdpbGwgc3RpbGwgYmUgcHJlZml4ZWQsIHNvIHdlIG5lZWRcbiAgLy8gdG8gY2hlY2sgaWYgdGhlIHVuLXByZWZpeGVkIGV2ZW50cyBhcmUgdXNlYWJsZSwgYW5kIGlmIG5vdCByZW1vdmUgdGhlbVxuICAvLyBmcm9tIHRoZSBtYXBcbiAgaWYgKCEoJ0FuaW1hdGlvbkV2ZW50JyBpbiB3aW5kb3cpKSB7XG4gICAgZGVsZXRlIEVWRU5UX05BTUVfTUFQLmFuaW1hdGlvbmVuZC5hbmltYXRpb247XG4gIH1cblxuICBpZiAoISgnVHJhbnNpdGlvbkV2ZW50JyBpbiB3aW5kb3cpKSB7XG4gICAgZGVsZXRlIEVWRU5UX05BTUVfTUFQLnRyYW5zaXRpb25lbmQudHJhbnNpdGlvbjtcbiAgfVxuXG4gIGZvciAodmFyIGJhc2VFdmVudE5hbWUgaW4gRVZFTlRfTkFNRV9NQVApIHtcbiAgICB2YXIgYmFzZUV2ZW50cyA9IEVWRU5UX05BTUVfTUFQW2Jhc2VFdmVudE5hbWVdO1xuICAgIGZvciAodmFyIHN0eWxlTmFtZSBpbiBiYXNlRXZlbnRzKSB7XG4gICAgICBpZiAoc3R5bGVOYW1lIGluIHN0eWxlKSB7XG4gICAgICAgIGVuZEV2ZW50cy5wdXNoKGJhc2VFdmVudHNbc3R5bGVOYW1lXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5pZiAoRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NKSB7XG4gIGRldGVjdEV2ZW50cygpO1xufVxuXG4vLyBXZSB1c2UgdGhlIHJhdyB7YWRkfHJlbW92ZX1FdmVudExpc3RlbmVyKCkgY2FsbCBiZWNhdXNlIEV2ZW50TGlzdGVuZXJcbi8vIGRvZXMgbm90IGtub3cgaG93IHRvIHJlbW92ZSBldmVudCBsaXN0ZW5lcnMgYW5kIHdlIHJlYWxseSBzaG91bGRcbi8vIGNsZWFuIHVwLiBBbHNvLCB0aGVzZSBldmVudHMgYXJlIG5vdCB0cmlnZ2VyZWQgaW4gb2xkZXIgYnJvd3NlcnNcbi8vIHNvIHdlIHNob3VsZCBiZSBBLU9LIGhlcmUuXG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnROYW1lLCBldmVudExpc3RlbmVyKSB7XG4gIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xufVxuXG52YXIgUmVhY3RUcmFuc2l0aW9uRXZlbnRzID0ge1xuICBhZGRFbmRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiAobm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgIGlmIChlbmRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBJZiBDU1MgdHJhbnNpdGlvbnMgYXJlIG5vdCBzdXBwb3J0ZWQsIHRyaWdnZXIgYW4gXCJlbmQgYW5pbWF0aW9uXCJcbiAgICAgIC8vIGV2ZW50IGltbWVkaWF0ZWx5LlxuICAgICAgd2luZG93LnNldFRpbWVvdXQoZXZlbnRMaXN0ZW5lciwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVuZEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbmRFdmVudCkge1xuICAgICAgYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBlbmRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH0sXG5cbiAgcmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gKG5vZGUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgICBpZiAoZW5kRXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbmRFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZW5kRXZlbnQpIHtcbiAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZW5kRXZlbnQsIGV2ZW50TGlzdGVuZXIpO1xuICAgIH0pO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0VHJhbnNpdGlvbkV2ZW50cztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvUmVhY3RUcmFuc2l0aW9uRXZlbnRzLmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBFeGVjdXRpb25FbnZpcm9ubWVudFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbi8qKlxuICogU2ltcGxlLCBsaWdodHdlaWdodCBtb2R1bGUgYXNzaXN0aW5nIHdpdGggdGhlIGRldGVjdGlvbiBhbmQgY29udGV4dCBvZlxuICogV29ya2VyLiBIZWxwcyBhdm9pZCBjaXJjdWxhciBkZXBlbmRlbmNpZXMgYW5kIGFsbG93cyBjb2RlIHRvIHJlYXNvbiBhYm91dFxuICogd2hldGhlciBvciBub3QgdGhleSBhcmUgaW4gYSBXb3JrZXIsIGV2ZW4gaWYgdGhleSBuZXZlciBpbmNsdWRlIHRoZSBtYWluXG4gKiBgUmVhY3RXb3JrZXJgIGRlcGVuZGVuY3kuXG4gKi9cbnZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IHtcblxuICBjYW5Vc2VET006IGNhblVzZURPTSxcblxuICBjYW5Vc2VXb3JrZXJzOiB0eXBlb2YgV29ya2VyICE9PSAndW5kZWZpbmVkJyxcblxuICBjYW5Vc2VFdmVudExpc3RlbmVyczogY2FuVXNlRE9NICYmICEhKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyIHx8IHdpbmRvdy5hdHRhY2hFdmVudCksXG5cbiAgY2FuVXNlVmlld3BvcnQ6IGNhblVzZURPTSAmJiAhIXdpbmRvdy5zY3JlZW4sXG5cbiAgaXNJbldvcmtlcjogIWNhblVzZURPTSAvLyBGb3Igbm93LCB0aGlzIGlzIHRydWUgLSBtaWdodCBjaGFuZ2UgaW4gdGhlIGZ1dHVyZS5cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFeGVjdXRpb25FbnZpcm9ubWVudDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9mYmpzL2xpYi9FeGVjdXRpb25FbnZpcm9ubWVudC5qc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdHMpIHtcbiAgcmV0dXJuIG5ldyBFbGVtZW50Q2xhc3Mob3B0cylcbn1cblxuZnVuY3Rpb24gaW5kZXhPZihhcnIsIHByb3ApIHtcbiAgaWYgKGFyci5pbmRleE9mKSByZXR1cm4gYXJyLmluZGV4T2YocHJvcClcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFyci5sZW5ndGg7IGkgPCBsZW47IGkrKylcbiAgICBpZiAoYXJyW2ldID09PSBwcm9wKSByZXR1cm4gaVxuICByZXR1cm4gLTFcbn1cblxuZnVuY3Rpb24gRWxlbWVudENsYXNzKG9wdHMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEVsZW1lbnRDbGFzcykpIHJldHVybiBuZXcgRWxlbWVudENsYXNzKG9wdHMpXG4gIHZhciBzZWxmID0gdGhpc1xuICBpZiAoIW9wdHMpIG9wdHMgPSB7fVxuXG4gIC8vIHNpbWlsYXIgZG9pbmcgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCBidXQgd29ya3MgaW4gSUU4XG4gIGlmIChvcHRzLm5vZGVUeXBlKSBvcHRzID0ge2VsOiBvcHRzfVxuXG4gIHRoaXMub3B0cyA9IG9wdHNcbiAgdGhpcy5lbCA9IG9wdHMuZWwgfHwgZG9jdW1lbnQuYm9keVxuICBpZiAodHlwZW9mIHRoaXMuZWwgIT09ICdvYmplY3QnKSB0aGlzLmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmVsKVxufVxuXG5FbGVtZW50Q2xhc3MucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICB2YXIgZWwgPSB0aGlzLmVsXG4gIGlmICghZWwpIHJldHVyblxuICBpZiAoZWwuY2xhc3NOYW1lID09PSBcIlwiKSByZXR1cm4gZWwuY2xhc3NOYW1lID0gY2xhc3NOYW1lXG4gIHZhciBjbGFzc2VzID0gZWwuY2xhc3NOYW1lLnNwbGl0KCcgJylcbiAgaWYgKGluZGV4T2YoY2xhc3NlcywgY2xhc3NOYW1lKSA+IC0xKSByZXR1cm4gY2xhc3Nlc1xuICBjbGFzc2VzLnB1c2goY2xhc3NOYW1lKVxuICBlbC5jbGFzc05hbWUgPSBjbGFzc2VzLmpvaW4oJyAnKVxuICByZXR1cm4gY2xhc3Nlc1xufVxuXG5FbGVtZW50Q2xhc3MucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICB2YXIgZWwgPSB0aGlzLmVsXG4gIGlmICghZWwpIHJldHVyblxuICBpZiAoZWwuY2xhc3NOYW1lID09PSBcIlwiKSByZXR1cm5cbiAgdmFyIGNsYXNzZXMgPSBlbC5jbGFzc05hbWUuc3BsaXQoJyAnKVxuICB2YXIgaWR4ID0gaW5kZXhPZihjbGFzc2VzLCBjbGFzc05hbWUpXG4gIGlmIChpZHggPiAtMSkgY2xhc3Nlcy5zcGxpY2UoaWR4LCAxKVxuICBlbC5jbGFzc05hbWUgPSBjbGFzc2VzLmpvaW4oJyAnKVxuICByZXR1cm4gY2xhc3Nlc1xufVxuXG5FbGVtZW50Q2xhc3MucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICB2YXIgZWwgPSB0aGlzLmVsXG4gIGlmICghZWwpIHJldHVyblxuICB2YXIgY2xhc3NlcyA9IGVsLmNsYXNzTmFtZS5zcGxpdCgnICcpXG4gIHJldHVybiBpbmRleE9mKGNsYXNzZXMsIGNsYXNzTmFtZSkgPiAtMVxufVxuXG5FbGVtZW50Q2xhc3MucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICB2YXIgZWwgPSB0aGlzLmVsXG4gIGlmICghZWwpIHJldHVyblxuICBpZiAodGhpcy5oYXMoY2xhc3NOYW1lKSkgdGhpcy5yZW1vdmUoY2xhc3NOYW1lKVxuICBlbHNlIHRoaXMuYWRkKGNsYXNzTmFtZSlcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2VsZW1lbnQtY2xhc3MvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gY2FsbF9zaG93X21ldGhvZCgkbm9kZSwgcHJvcHMpIHtcbiAgJG5vZGVbcHJvcHMuc2hvd01ldGhvZF0oe1xuICAgIGR1cmF0aW9uOiBwcm9wcy5zaG93RHVyYXRpb24sXG4gICAgZWFzaW5nOiBwcm9wcy5zaG93RWFzaW5nXG4gIH0pO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdHlsZToge1xuICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIiB9LFxuICAgICAgLy8gZWZmZWN0aXZlICQuaGlkZSgpXG4gICAgICBzaG93TWV0aG9kOiBcImZhZGVJblwiLCAvLyBzbGlkZURvd24sIGFuZCBzaG93IGFyZSBidWlsdCBpbnRvIGpRdWVyeVxuICAgICAgc2hvd0R1cmF0aW9uOiAzMDAsXG4gICAgICBzaG93RWFzaW5nOiBcInN3aW5nXCIsIC8vIGFuZCBsaW5lYXIgYXJlIGJ1aWx0IGludG8galF1ZXJ5XG4gICAgICBoaWRlTWV0aG9kOiBcImZhZGVPdXRcIixcbiAgICAgIGhpZGVEdXJhdGlvbjogMTAwMCxcbiAgICAgIGhpZGVFYXNpbmc6IFwic3dpbmdcIixcbiAgICAgIC8vXG4gICAgICB0aW1lT3V0OiA1MDAwLFxuICAgICAgZXh0ZW5kZWRUaW1lT3V0OiAxMDAwXG4gICAgfTtcbiAgfSxcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGludGVydmFsSWQ6IG51bGwsXG4gICAgICBpc0hpZGluZzogZmFsc2VcbiAgICB9O1xuICB9LFxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY2FsbF9zaG93X21ldGhvZCh0aGlzLl9nZXRfJF9ub2RlKCksIHRoaXMucHJvcHMpO1xuICAgIGlmICh0aGlzLnByb3BzLnRpbWVPdXQgPiAwKSB7XG4gICAgICB0aGlzLl9zZXRfaW50ZXJ2YWxfaWQoc2V0VGltZW91dCh0aGlzLmhpZGVUb2FzdCwgdGhpcy5wcm9wcy50aW1lT3V0KSk7XG4gICAgfVxuICB9LFxuICBoYW5kbGVNb3VzZUVudGVyOiBmdW5jdGlvbiBoYW5kbGVNb3VzZUVudGVyKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnN0YXRlLmludGVydmFsSWQpO1xuICAgIHRoaXMuX3NldF9pbnRlcnZhbF9pZChudWxsKTtcbiAgICB0aGlzLl9zZXRfaXNfaGlkaW5nKGZhbHNlKTtcblxuICAgIGNhbGxfc2hvd19tZXRob2QodGhpcy5fZ2V0XyRfbm9kZSgpLnN0b3AodHJ1ZSwgdHJ1ZSksIHRoaXMucHJvcHMpO1xuICB9LFxuICBoYW5kbGVNb3VzZUxlYXZlOiBmdW5jdGlvbiBoYW5kbGVNb3VzZUxlYXZlKCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5pc0hpZGluZyAmJiAodGhpcy5wcm9wcy50aW1lT3V0ID4gMCB8fCB0aGlzLnByb3BzLmV4dGVuZGVkVGltZU91dCA+IDApKSB7XG4gICAgICB0aGlzLl9zZXRfaW50ZXJ2YWxfaWQoc2V0VGltZW91dCh0aGlzLmhpZGVUb2FzdCwgdGhpcy5wcm9wcy5leHRlbmRlZFRpbWVPdXQpKTtcbiAgICB9XG4gIH0sXG4gIGhpZGVUb2FzdDogZnVuY3Rpb24gaGlkZVRvYXN0KG92ZXJyaWRlKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaXNIaWRpbmcgfHwgdGhpcy5zdGF0ZS5pbnRlcnZhbElkID09PSBudWxsICYmICFvdmVycmlkZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgaXNIaWRpbmc6IHRydWUgfSk7XG5cbiAgICB0aGlzLl9nZXRfJF9ub2RlKClbdGhpcy5wcm9wcy5oaWRlTWV0aG9kXSh7XG4gICAgICBkdXJhdGlvbjogdGhpcy5wcm9wcy5oaWRlRHVyYXRpb24sXG4gICAgICBlYXNpbmc6IHRoaXMucHJvcHMuaGlkZUVhc2luZyxcbiAgICAgIGNvbXBsZXRlOiB0aGlzLl9oYW5kbGVfcmVtb3ZlXG4gICAgfSk7XG4gIH0sXG4gIF9nZXRfJF9ub2RlOiBmdW5jdGlvbiBfZ2V0XyRfbm9kZSgpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuICAgIHJldHVybiBqUXVlcnkoX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpKTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVuZGVmICovXG4gIH0sXG4gIF9zZXRfaW50ZXJ2YWxfaWQ6IGZ1bmN0aW9uIF9zZXRfaW50ZXJ2YWxfaWQoaW50ZXJ2YWxJZCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW50ZXJ2YWxJZDogaW50ZXJ2YWxJZFxuICAgIH0pO1xuICB9LFxuICBfc2V0X2lzX2hpZGluZzogZnVuY3Rpb24gX3NldF9pc19oaWRpbmcoaXNIaWRpbmcpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzSGlkaW5nOiBpc0hpZGluZ1xuICAgIH0pO1xuICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LXRvYXN0ci9saWIvVG9hc3RNZXNzYWdlL2pRdWVyeU1peGluLmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQYWdlQnV0dG9uIGZyb20gJy4vUGFnZUJ1dHRvbi5qcyc7XHJcbmltcG9ydCBDb25zdCBmcm9tICcuLi9Db25zdCc7XHJcblxyXG5jbGFzcyBQYWdpbmF0aW9uTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBjdXJyZW50UGFnZTogdGhpcy5wcm9wcy5jdXJyUGFnZSxcclxuICAgICAgc2l6ZVBlclBhZ2U6IHRoaXMucHJvcHMuc2l6ZVBlclBhZ2VcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VQYWdlKHBhZ2UpIHtcclxuICAgIGlmIChwYWdlID09IHRoaXMucHJvcHMucHJlUGFnZSkge1xyXG4gICAgICBwYWdlID0gdGhpcy5zdGF0ZS5jdXJyZW50UGFnZSAtIDEgPCAxID8gMSA6IHRoaXMuc3RhdGUuY3VycmVudFBhZ2UgLSAxO1xyXG4gICAgfSBlbHNlIGlmIChwYWdlID09IHRoaXMucHJvcHMubmV4dFBhZ2UpIHtcclxuICAgICAgcGFnZSA9IHRoaXMuc3RhdGUuY3VycmVudFBhZ2UgKyAxID4gdGhpcy50b3RhbFBhZ2VzID8gdGhpcy50b3RhbFBhZ2VzIDogdGhpcy5zdGF0ZS5jdXJyZW50UGFnZSArIDE7XHJcbiAgICB9IGVsc2UgaWYgKHBhZ2UgPT0gdGhpcy5wcm9wcy5sYXN0UGFnZSkge1xyXG4gICAgICBwYWdlID0gdGhpcy50b3RhbFBhZ2VzO1xyXG4gICAgfSBlbHNlIGlmIChwYWdlID09IHRoaXMucHJvcHMuZmlyc3RQYWdlKSB7XHJcbiAgICAgIHBhZ2UgPSAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGFnZSA9IHBhcnNlSW50KHBhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwYWdlICE9IHRoaXMuc3RhdGUuY3VycmVudFBhZ2UpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFBhZ2U6IHBhZ2V9KTtcclxuICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VQYWdlKHBhZ2UsIHRoaXMuc3RhdGUuc2l6ZVBlclBhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLnJlbW90ZSkge1xyXG4gICAgICBpZiAobmV4dFByb3BzLmN1cnJQYWdlIHx8IG5leHRQcm9wcy5zaXplUGVyUGFnZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgY3VycmVudFBhZ2U6IG5leHRQcm9wcy5jdXJyUGFnZSxcclxuICAgICAgICAgIHNpemVQZXJQYWdlOiBuZXh0UHJvcHMuc2l6ZVBlclBhZ2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBjaGFuZ2VTaXplUGVyUGFnZShlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdmFyIHNlbGVjdFNpemUgPSBwYXJzZUludChlLmN1cnJlbnRUYXJnZXQudGV4dCk7XHJcbiAgICBpZiAoc2VsZWN0U2l6ZSAhPSB0aGlzLnN0YXRlLnNpemVQZXJQYWdlKSB7XHJcbiAgICAgIHRoaXMudG90YWxQYWdlcyA9IE1hdGguY2VpbCh0aGlzLnByb3BzLmRhdGFTaXplIC8gc2VsZWN0U2l6ZSk7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRQYWdlID4gdGhpcy50b3RhbFBhZ2VzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUuY3VycmVudFBhZ2UgPSB0aGlzLnRvdGFsUGFnZXM7XHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBzaXplUGVyUGFnZTogc2VsZWN0U2l6ZSxcclxuICAgICAgICBjdXJyZW50UGFnZTogdGhpcy5zdGF0ZS5jdXJyZW50UGFnZVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VQYWdlKHRoaXMuc3RhdGUuY3VycmVudFBhZ2UsIHNlbGVjdFNpemUpO1xyXG4gICAgICBpZih0aGlzLnByb3BzLm9uU2l6ZVBlclBhZ2VMaXN0KXtcclxuICAgICAgICB0aGlzLnByb3BzLm9uU2l6ZVBlclBhZ2VMaXN0KHNlbGVjdFNpemUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSBNYXRoLmNlaWwodGhpcy5wcm9wcy5kYXRhU2l6ZSAvIHRoaXMuc3RhdGUuc2l6ZVBlclBhZ2UpO1xyXG4gICAgdmFyIHBhZ2VCdG5zID0gdGhpcy5tYWtlUGFnZSgpO1xyXG4gICAgdmFyIHBhZ2VMaXN0U3R5bGUgPSB7XHJcbiAgICAgIGZsb2F0OiBcInJpZ2h0XCIsXHJcbiAgICAgIG1hcmdpblRvcDogXCIwcHhcIiAgLy9vdmVycmlkZSB0aGUgbWFyZ2luLXRvcCBkZWZpbmVkIGluIC5wYWdpbmF0aW9uIGNsYXNzIGluIGJvb3RzdHJhcC5cclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2l6ZVBlclBhZ2VMaXN0ID0gdGhpcy5wcm9wcy5zaXplUGVyUGFnZUxpc3QubWFwKChzaXplUGVyUGFnZSkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaSBrZXk9e3NpemVQZXJQYWdlfSByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICA8YSByb2xlPVwibWVudWl0ZW1cIiB0YWJJbmRleD1cIi0xXCIgaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLmNoYW5nZVNpemVQZXJQYWdlLmJpbmQodGhpcyl9PntzaXplUGVyUGFnZX08L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAxNSB9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGhpcy5wcm9wcy5zaXplUGVyUGFnZUxpc3QubGVuZ3RoID4gMSA/XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0IGRyb3Bkb3duLXRvZ2dsZVwiIHR5cGU9XCJidXR0b25cIiBpZD1cInBhZ2VEcm9wRG93blwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2l6ZVBlclBhZ2V9XHJcbiAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJldFwiLz5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiIHJvbGU9XCJtZW51XCIgYXJpYS1sYWJlbGxlZGJ5PVwicGFnZURyb3BEb3duXCI+XHJcbiAgICAgICAgICAgICAge3NpemVQZXJQYWdlTGlzdH1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCIgc3R5bGU9e3BhZ2VMaXN0U3R5bGV9PlxyXG4gICAgICAgICAgICB7cGFnZUJ0bnN9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIG1ha2VQYWdlKCkge1xyXG4gICAgdmFyIHBhZ2VzID0gdGhpcy5nZXRQYWdlcygpO1xyXG4gICAgcmV0dXJuIHBhZ2VzLm1hcChmdW5jdGlvbiAocGFnZSkge1xyXG4gICAgICB2YXIgaXNBY3RpdmUgPSBwYWdlID09PSB0aGlzLnN0YXRlLmN1cnJlbnRQYWdlO1xyXG4gICAgICB2YXIgZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgdmFyIGhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICBpZih0aGlzLnN0YXRlLmN1cnJlbnRQYWdlID09IDEgJiZcclxuICAgICAgICAocGFnZSA9PT0gdGhpcy5wcm9wcy5maXJzdFBhZ2UgfHwgcGFnZSA9PT0gdGhpcy5wcm9wcy5wcmVQYWdlKSl7XHJcbiAgICAgICAgICBkaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICBoaWRkZW4gPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHRoaXMuc3RhdGUuY3VycmVudFBhZ2UgPT0gdGhpcy50b3RhbFBhZ2VzICYmXHJcbiAgICAgICAgKHBhZ2UgPT09IHRoaXMucHJvcHMubmV4dFBhZ2UgfHwgcGFnZSA9PT0gdGhpcy5wcm9wcy5sYXN0UGFnZSkpe1xyXG4gICAgICAgICAgZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQYWdlQnV0dG9uIGNoYW5nZVBhZ2U9e3RoaXMuY2hhbmdlUGFnZS5iaW5kKHRoaXMpfSBhY3RpdmU9e2lzQWN0aXZlfSBkaXNhYmxlPXtkaXNhYmxlZH0gaGlkZGVuPXtoaWRkZW59IGtleT17cGFnZX0+e3BhZ2V9PC9QYWdlQnV0dG9uPlxyXG4gICAgICApXHJcbiAgICB9LCB0aGlzKTtcclxuICB9XHJcblxyXG4gIGdldFBhZ2VzKCkge1xyXG4gICAgdmFyIHN0YXJ0UGFnZSA9IDEsIGVuZFBhZ2UgPSB0aGlzLnRvdGFsUGFnZXM7XHJcblxyXG4gICAgc3RhcnRQYWdlID0gTWF0aC5tYXgodGhpcy5zdGF0ZS5jdXJyZW50UGFnZSAtIE1hdGguZmxvb3IodGhpcy5wcm9wcy5wYWdpbmF0aW9uU2l6ZSAvIDIpLCAxKTtcclxuICAgIGVuZFBhZ2UgPSBzdGFydFBhZ2UgKyB0aGlzLnByb3BzLnBhZ2luYXRpb25TaXplIC0gMTtcclxuXHJcbiAgICBpZiAoZW5kUGFnZSA+IHRoaXMudG90YWxQYWdlcykge1xyXG4gICAgICBlbmRQYWdlID0gdGhpcy50b3RhbFBhZ2VzO1xyXG4gICAgICBzdGFydFBhZ2UgPSBlbmRQYWdlIC0gdGhpcy5wcm9wcy5wYWdpbmF0aW9uU2l6ZSArIDE7XHJcbiAgICB9XHJcbiAgICB2YXIgcGFnZXM7XHJcbiAgICBpZihzdGFydFBhZ2UgIT0gMSAmJiB0aGlzLnRvdGFsUGFnZXMgPiB0aGlzLnByb3BzLnBhZ2luYXRpb25TaXplKSB7XHJcbiAgICAgIHBhZ2VzID0gW3RoaXMucHJvcHMuZmlyc3RQYWdlLCB0aGlzLnByb3BzLnByZVBhZ2VdO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnRvdGFsUGFnZXMgPiAxKSB7XHJcbiAgICAgIHBhZ2VzID0gW3RoaXMucHJvcHMucHJlUGFnZV07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcGFnZXMgPSBbXVxyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgaSA9IHN0YXJ0UGFnZTsgaSA8PSBlbmRQYWdlOyBpKyspIHtcclxuICAgICAgaWYgKGkgPiAwKXBhZ2VzLnB1c2goaSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZW5kUGFnZSAhPSB0aGlzLnRvdGFsUGFnZXMpIHtcclxuICAgICAgcGFnZXMucHVzaCh0aGlzLnByb3BzLm5leHRQYWdlKTtcclxuICAgICAgcGFnZXMucHVzaCh0aGlzLnByb3BzLmxhc3RQYWdlKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy50b3RhbFBhZ2VzID4gMSl7XHJcbiAgICAgIHBhZ2VzLnB1c2godGhpcy5wcm9wcy5uZXh0UGFnZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFnZXM7XHJcbiAgfVxyXG5cclxuICBnZXRDdXJyZW50UGFnZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlLmN1cnJlbnRQYWdlO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2l6ZVBlclBhZ2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5zaXplUGVyUGFnZTtcclxuICB9XHJcbn1cclxuUGFnaW5hdGlvbkxpc3QucHJvcFR5cGVzID0ge1xyXG4gIGN1cnJQYWdlOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxyXG4gIHNpemVQZXJQYWdlOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxyXG4gIGRhdGFTaXplOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxyXG4gIGNoYW5nZVBhZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxyXG4gIHNpemVQZXJQYWdlTGlzdDogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxyXG4gIHBhZ2luYXRpb25TaXplOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxyXG4gIHJlbW90ZTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXHJcbiAgb25TaXplUGVyUGFnZUxpc3Q6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxyXG4gIHByZVBhZ2U6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcclxufTtcclxuXHJcblBhZ2luYXRpb25MaXN0LmRlZmF1bHRQcm9wcyA9IHtcclxuICBzaXplUGVyUGFnZTogQ29uc3QuU0laRV9QRVJfUEFHRVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbkxpc3Q7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3BhZ2luYXRpb24vUGFnaW5hdGlvbkxpc3QuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NTZXQgZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5jbGFzcyBQYWdlQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdH1cclxuXHJcbiAgcGFnZUJ0bkNsaWNrKGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VQYWdlKGUuY3VycmVudFRhcmdldC50ZXh0KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpe1xyXG4gICAgdmFyIGNsYXNzZXMgPSBjbGFzc1NldCh7XHJcbiAgICAgICAgJ2FjdGl2ZSc6IHRoaXMucHJvcHMuYWN0aXZlLFxyXG4gICAgICAgICdkaXNhYmxlZCc6IHRoaXMucHJvcHMuZGlzYWJsZSxcclxuICAgICAgICAnaGlkZGVuJzogdGhpcy5wcm9wcy5oaWRkZW5cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzfT48YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMucGFnZUJ0bkNsaWNrLmJpbmQodGhpcyl9Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvYT48L2xpPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5QYWdlQnV0dG9uLnByb3BUeXBlcyA9IHtcclxuICBjaGFuZ2VQYWdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcclxuICBhY3RpdmU6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxyXG4gIGRpc2FibGU6IFJlYWN0LlByb3BUeXBlcy5ib29sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlQnV0dG9uO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wYWdpbmF0aW9uL1BhZ2VCdXR0b24uanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NTZXQgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBDb25zdCBmcm9tICcuLi9Db25zdCc7XHJcbmltcG9ydCBFZGl0b3IgZnJvbSAnLi4vRWRpdG9yJztcclxuaW1wb3J0IE5vdGlmaWVyIGZyb20gJy4uL05vdGlmaWNhdGlvbi5qcyc7XHJcblxyXG5jbGFzcyBUb29sQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy50aW1lb3V0ZUNsZWFyPTA7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpc0luc2VydFJvd1RyaWdnZXI6IHRydWUsXHJcbiAgICAgIHZhbGlkYXRlU3RhdGU6bnVsbCxcclxuICAgICAgc2hha2VFZGl0b3I6ZmFsc2UsXHJcbiAgICAgIHNob3dTZWxlY3RlZDogZmFsc2VcclxuICAgIH07XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XHJcbiAgICB0aGlzLmNsZWFyVGltZW91dCgpO1xyXG4gIH1cclxuICBjbGVhclRpbWVvdXQoKSB7XHJcbiAgICBpZih0aGlzLnRpbWVvdXRlQ2xlYXIpe1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0ZUNsZWFyKTtcclxuICAgICAgdGhpcy50aW1lb3V0ZUNsZWFyPTA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0FuZFBhcnNlRm9ybSgpe1xyXG4gICAgdmFyIHRzPXRoaXMsbmV3T2JqID0ge30saXNWYWxpZD10cnVlLHRlbXBWYWx1ZSx0ZW1wTXNnLHZhbGlkYXRlU3RhdGU9e307XHJcbiAgICB0aGlzLnByb3BzLmNvbHVtbnMuZm9yRWFjaChmdW5jdGlvbihjb2x1bW4sIGkpe1xyXG4gICAgICBpZihjb2x1bW4uYXV0b1ZhbHVlKXsvL3doZW4geW91IHdhbnQgc2FtZSBhdXRvIGdlbmVyYXRlIHZhbHVlIGFuZCBub3QgYWxsb3cgZWRpdCwgZXhhbXBsZSBJRCBmaWVsZFxyXG4gICAgICAgIHRlbXBWYWx1ZT10eXBlb2YgY29sdW1uLmF1dG9WYWx1ZT09J2Z1bmN0aW9uJz9jb2x1bW4uYXV0b1ZhbHVlKCk6KCdhdXRvdmFsdWUtJytuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGxldCBkb20gPSB0aGlzLnJlZnNbY29sdW1uLmZpZWxkK2ldO1xyXG4gICAgICAgIHRlbXBWYWx1ZSA9IGRvbS52YWx1ZTtcclxuXHJcbiAgICAgICAgaWYoY29sdW1uLmVkaXRhYmxlICYmIGNvbHVtbi5lZGl0YWJsZS50eXBlID09ICdjaGVja2JveCcpe1xyXG4gICAgICAgICAgbGV0IHZhbHVlcyA9IGRvbS52YWx1ZS5zcGxpdCgnOicpO1xyXG4gICAgICAgICAgdGVtcFZhbHVlID0gZG9tLmNoZWNrZWQ/IHZhbHVlc1swXTp2YWx1ZXNbMV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihjb2x1bW4uZWRpdGFibGUmJmNvbHVtbi5lZGl0YWJsZS52YWxpZGF0b3Ipey8vcHJvY2VzcyB2YWxpZGF0ZVxyXG4gICAgICAgICAgdGVtcE1zZz0gY29sdW1uLmVkaXRhYmxlLnZhbGlkYXRvcih0ZW1wVmFsdWUpXHJcbiAgICAgICAgICBpZih0ZW1wTXNnIT09dHJ1ZSl7XHJcbiAgICAgICAgICAgIGlzVmFsaWQ9ZmFsc2U7XHJcbiAgICAgICAgICAgIHZhbGlkYXRlU3RhdGVbY29sdW1uLmZpZWxkXT10ZW1wTXNnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgbmV3T2JqW2NvbHVtbi5maWVsZF0gPXRlbXBWYWx1ZTtcclxuICAgIH0sIHRoaXMpO1xyXG5cclxuICAgIGlmKGlzVmFsaWQpe1xyXG4gICAgICByZXR1cm4gbmV3T2JqO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRzLmNsZWFyVGltZW91dCgpO1xyXG4gICAgICAvL3Nob3cgZXJyb3IgaW4gZm9ybSBhbmQgc2hha2UgaXRcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGVTdGF0ZTp2YWxpZGF0ZVN0YXRlLHNoYWtlRWRpdG9yOnRydWV9KTtcclxuICAgICAgLy9ub3RpZmllciBlcnJvclxyXG4gICAgICB0cy5yZWZzLm5vdGlmaWVyLm5vdGljZSgnZXJyb3InLFwiRm9ybSB2YWxpZGF0ZSBlcnJvcnMsIHBsZWFzZSBjaGVja2luZyFcIixcIlByZXNzZWQgRVNDIGNhbiBjYW5jZWxcIik7XHJcbiAgICAgIC8vY2xlYXIgYW5pbWF0ZSBjbGFzc1xyXG4gICAgICB0cy50aW1lb3V0ZUNsZWFyPXNldFRpbWVvdXQoZnVuY3Rpb24oKXt0cy5zZXRTdGF0ZSh7c2hha2VFZGl0b3I6ZmFsc2V9KTt9LDMwMCk7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlU2F2ZUJ0bkNsaWNrKGUpe1xyXG4gICAgdmFyIG5ld09iaiA9IHRoaXMuY2hlY2tBbmRQYXJzZUZvcm0oKTtcclxuICAgIGlmKCFuZXdPYmopey8vdmFsaWRhdGUgZXJyb3JzXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBtc2cgPSB0aGlzLnByb3BzLm9uQWRkUm93KG5ld09iaik7XHJcbiAgICBpZihtc2cpIHtcclxuICAgICAgdmFyIHRzPXRoaXM7XHJcbiAgICAgIHRzLnJlZnMubm90aWZpZXIubm90aWNlKCdlcnJvcicsbXNnLFwiUHJlc3NlZCBFU0MgY2FuIGNhbmNlbFwiKTtcclxuICAgICAgdHMuY2xlYXJUaW1lb3V0KCk7XHJcbiAgICAgIC8vc2hha2UgZm9ybSBhbmQgaGFjayBwcmV2ZW50IG1vZGFsIGhpZGVcclxuICAgICAgdHMuc2V0U3RhdGUoe3NoYWtlRWRpdG9yOnRydWUsdmFsaWRhdGVTdGF0ZTpcInRoaXMgaXMgaGFjayBmb3IgcHJldmVudCBib290c3RyYXAgbW9kYWwgaGlkZVwifSk7XHJcbiAgICAgIC8vY2xlYXIgYW5pbWF0ZSBjbGFzc1xyXG4gICAgICB0cy50aW1lb3V0ZUNsZWFyPXNldFRpbWVvdXQoZnVuY3Rpb24oKXt0cy5zZXRTdGF0ZSh7c2hha2VFZGl0b3I6ZmFsc2V9KTt9LDMwMCk7XHJcbiAgICB9IGVsc2V7XHJcbiAgICAgIC8vcmVzZXQgc3RhdGUgYW5kIGhpZGUgbW9kYWwgaGlkZVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICB2YWxpZGF0ZVN0YXRlOm51bGwsXHJcbiAgICAgICAgc2hha2VFZGl0b3I6ZmFsc2VcclxuICAgICAgfSk7XHJcbiAgICAgIC8vcmVzZXQgZm9ybVxyXG4gICAgICB0aGlzLnJlZnMuZm9ybS5yZXNldCgpO1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZVNob3dPbmx5VG9nZ2xlID0gZSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2hvd1NlbGVjdGVkOiAhdGhpcy5zdGF0ZS5zaG93U2VsZWN0ZWRcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5vblNob3dPbmx5U2VsZWN0ZWQoKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURyb3BSb3dCdG5DbGljayhlKXtcclxuICAgIHRoaXMucHJvcHMub25Ecm9wUm93KCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDbG9zZUJ0bihlKXtcclxuICAgIHRoaXMucmVmcy53YXJuaW5nLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9XHJcblxyXG4gIGhhbmRsZUtleVVwKGUpe1xyXG4gICAgdGhpcy5wcm9wcy5vblNlYXJjaChlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRXhwb3J0Q1NWKCkge1xyXG4gICAgdGhpcy5wcm9wcy5vbkV4cG9ydENTVigpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xlYXJCdG5DbGljayA9ICgpID0+IHtcclxuICAgIHRoaXMucmVmcy5zZWFjaElucHV0LnZhbHVlID0gJyc7XHJcbiAgICB0aGlzLnByb3BzLm9uU2VhcmNoKCcnKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpe1xyXG4gICAgdmFyIG1vZGFsQ2xhc3NOYW1lID0gXCJicy10YWJsZS1tb2RhbC1zbVwiK25ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgdmFyIGluc2VydEJ0biA9IHRoaXMucHJvcHMuZW5hYmxlSW5zZXJ0P1xyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5wcm9wcy5vbkFkZFJvd0JlZ2lufSBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gcmVhY3QtYnMtdGFibGUtYWRkLWJ0blwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD17Jy4nK21vZGFsQ2xhc3NOYW1lfT5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXCI+PC9pPiBOZXc8L2J1dHRvbj46bnVsbDtcclxuXHJcbiAgICB2YXIgZGVsZXRlQnRuID0gdGhpcy5wcm9wcy5lbmFibGVEZWxldGU/XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmcgcmVhY3QtYnMtdGFibGUtZGVsLWJ0blwiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIGRhdGEtcGxhY2VtZW50PVwicmlnaHRcIiB0aXRsZT1cIkRyb3Agc2VsZWN0ZWQgcm93XCJcclxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVEcm9wUm93QnRuQ2xpY2suYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tdHJhc2hcIj48L2k+IERlbGV0ZVxyXG4gICAgICAgICAgPC9idXR0b24+Om51bGw7XHJcblxyXG4gICAgdmFyIHNlYXJjaFRleHRJbnB1dCA9IHRoaXMucmVuZGVyU2VhcmNoUGFuZWwoKTtcclxuXHJcbiAgICB2YXIgc2hvd1NlbGVjdGVkT25seUJ0biA9IHRoaXMucHJvcHMuZW5hYmxlU2hvd09ubHlTZWxlY3RlZD9cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVTaG93T25seVRvZ2dsZS5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBkYXRhLXRvZ2dsZT1cImJ1dHRvblwiIGFyaWEtcHJlc3NlZD1cImZhbHNlXCI+XHJcbiAgICAgICAgeyB0aGlzLnN0YXRlLnNob3dTZWxlY3RlZD8gQ29uc3QuU0hPV19BTEwgOiBDb25zdC5TSE9XX09OTFlfU0VMRUNUIH1cclxuICAgICAgPC9idXR0b24+Om51bGw7XHJcblxyXG4gICAgdmFyIG1vZGFsID0gdGhpcy5wcm9wcy5lbmFibGVJbnNlcnQ/dGhpcy5yZW5kZXJJbnNlcnRSb3dNb2RhbChtb2RhbENsYXNzTmFtZSk6bnVsbDtcclxuICAgIHZhciB3YXJuaW5nU3R5bGUgPSB7XHJcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgICBtYXJnaW5Cb3R0b206IDBcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGV4cG9ydENTViA9IHRoaXMucHJvcHMuZW5hYmxlRXhwb3J0Q1NWID9cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRXhwb3J0Q1NWLmJpbmQodGhpcyl9PlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tZXhwb3J0XCI+PC9pPiBFeHBvcnQgdG8gQ1NWPC9idXR0b24+IDogbnVsbDtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTYgY29sLW1kLTYgY29sLWxnLThcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwIGJ0bi1ncm91cC1zbVwiIHJvbGU9XCJncm91cFwiPlxyXG4gICAgICAgICAgICB7ZXhwb3J0Q1NWfVxyXG4gICAgICAgICAgICB7aW5zZXJ0QnRufVxyXG4gICAgICAgICAgICB7ZGVsZXRlQnRufVxyXG4gICAgICAgICAgICB7c2hvd1NlbGVjdGVkT25seUJ0bn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS02IGNvbC1tZC02IGNvbC1sZy00XCI+XHJcbiAgICAgICAgICB7c2VhcmNoVGV4dElucHV0fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxOb3RpZmllciByZWY9XCJub3RpZmllclwiPjwvTm90aWZpZXI+XHJcbiAgICAgICAge21vZGFsfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIHJlbmRlclNlYXJjaFBhbmVsKCkge1xyXG4gICAgaWYodGhpcy5wcm9wcy5lbmFibGVTZWFyY2gpIHtcclxuICAgICAgbGV0IGNsYXNzTmFtZXMgPSAnZm9ybS1ncm91cCBmb3JtLWdyb3VwLXNtJztcclxuICAgICAgbGV0IGNsZWFyQnRuID0gbnVsbDtcclxuICAgICAgaWYodGhpcy5wcm9wcy5jbGVhclNlYXJjaCkge1xyXG4gICAgICAgIGNsZWFyQnRuID0gKFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYnRuXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLmhhbmRsZUNsZWFyQnRuQ2xpY2sgfT5DbGVhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY2xhc3NOYW1lcyA9ICdmb3JtLWdyb3VwIGZvcm0tZ3JvdXAtc20gaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtc20nO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfT5cclxuICAgICAgICAgIDxpbnB1dCByZWY9J3NlYWNoSW5wdXQnIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnNlYXJjaFBsYWNlaG9sZGVyP3RoaXMucHJvcHMuc2VhcmNoUGxhY2Vob2xkZXI6J1NlYXJjaCd9XHJcbiAgICAgICAgICAgIG9uS2V5VXA9e3RoaXMuaGFuZGxlS2V5VXAuYmluZCh0aGlzKX0vPlxyXG4gICAgICAgICAgICB7IGNsZWFyQnRuIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVySW5zZXJ0Um93TW9kYWwobW9kYWxDbGFzc05hbWUpe1xyXG4gICAgdmFyIHZhbGlkYXRlU3RhdGU9dGhpcy5zdGF0ZS52YWxpZGF0ZVN0YXRlfHx7fTtcclxuICAgIHZhciBpbnB1dEZpZWxkID0gdGhpcy5wcm9wcy5jb2x1bW5zLm1hcChmdW5jdGlvbihjb2x1bW4sIGkpe1xyXG4gICAgICB2YXIgZWRpdGFibGU9Y29sdW1uLmVkaXRhYmxlLFxyXG4gICAgICAgICAgZm9ybWF0PWNvbHVtbi5mb3JtYXQsXHJcbiAgICAgICAgICBhdHRyPXtyZWY6Y29sdW1uLmZpZWxkK2kscGxhY2Vob2xkZXI6ZWRpdGFibGUucGxhY2Vob2xkZXI/ZWRpdGFibGUucGxhY2Vob2xkZXI6Y29sdW1uLm5hbWV9O1xyXG5cclxuICAgICAgaWYoY29sdW1uLmF1dG9WYWx1ZSl7Ly93aGVuIHlvdSB3YW50IHNhbWUgYXV0byBnZW5lcmF0ZSB2YWx1ZSBhbmQgbm90IGFsbG93IGVkaXQsIGV4YW1wbGUgSUQgZmllbGRcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICB2YXIgZXJyb3I9dmFsaWRhdGVTdGF0ZVtjb2x1bW4uZmllbGRdPyg8c3BhbiBjbGFzc05hbWU9XCJoZWxwLWJsb2NrIGJnLWRhbmdlclwiPnt2YWxpZGF0ZVN0YXRlW2NvbHVtbi5maWVsZF19PC9zcGFuPik6bnVsbDtcclxuXHJcbiAgICAgIC8vIGxldCBlZGl0b3IgPSBFZGl0b3IoZWRpdGFibGUsYXR0cixmb3JtYXQpO1xyXG4gICAgICAvLyBpZihlZGl0b3IucHJvcHMudHlwZSAmJiBlZGl0b3IucHJvcHMudHlwZSA9PSAnY2hlY2tib3gnKXtcclxuICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiIGtleT17Y29sdW1uLmZpZWxkfT5cclxuICAgICAgICAgIDxsYWJlbD57Y29sdW1uLm5hbWV9PC9sYWJlbD5cclxuICAgICAgICAgIHtFZGl0b3IoZWRpdGFibGUsYXR0cixmb3JtYXQsJycpfVxyXG4gICAgICAgICAge2Vycm9yfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgICB2YXIgbW9kYWxDbGFzcyA9IGNsYXNzU2V0KFwibW9kYWxcIiwgXCJmYWRlXCIgLCBtb2RhbENsYXNzTmFtZSx7XHJcbiAgICAgICdpbic6dGhpcy5zdGF0ZS5zaGFrZUVkaXRvcnx8dGhpcy5zdGF0ZS52YWxpZGF0ZVN0YXRlLy9oYWNrIHByZXZlbnQgYm9vdHN0cmFwIG1vZGFsIGhpZGUgYnkgcmVSZW5kZXJcclxuICAgIH0pO1xyXG4gICAgdmFyIGRpYWxvZ0NsYXNzPWNsYXNzU2V0KFwibW9kYWwtZGlhbG9nXCIsXCJtb2RhbC1zbVwiLHtcclxuICAgICAgXCJhbmltYXRlZFwiOnRoaXMuc3RhdGUuc2hha2VFZGl0b3IsXHJcbiAgICAgIFwic2hha2VcIjp0aGlzLnN0YXRlLnNoYWtlRWRpdG9yXHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgcmVmPVwibW9kYWxcIiAgY2xhc3NOYW1lPXttb2RhbENsYXNzfSB0YWJJbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZGlhbG9nQ2xhc3N9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPjxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+TmV3IFJlY29yZDwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICA8Zm9ybSByZWY9XCJmb3JtXCI+XHJcbiAgICAgICAgICAgICAge2lucHV0RmllbGR9XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2F2ZUJ0bkNsaWNrLmJpbmQodGhpcyl9PlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblRvb2xCYXIucHJvcFR5cGVzID0ge1xyXG4gIG9uQWRkUm93OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcclxuICBvbkRyb3BSb3c6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxyXG4gIG9uU2hvd09ubHlTZWxlY3RlZDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXHJcbiAgZW5hYmxlSW5zZXJ0OiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcclxuICBlbmFibGVEZWxldGU6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxyXG4gIGVuYWJsZVNlYXJjaDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXHJcbiAgZW5hYmxlU2hvd09ubHlTZWxlY3RlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXHJcbiAgY29sdW1uczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxyXG4gIHNlYXJjaFBsYWNlaG9sZGVyOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGNsZWFyU2VhcmNoOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbFxyXG59O1xyXG5cclxuVG9vbEJhci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZW5hYmxlSW5zZXJ0OiBmYWxzZSxcclxuICBlbmFibGVEZWxldGU6IGZhbHNlLFxyXG4gIGVuYWJsZVNlYXJjaDogZmFsc2UsXHJcbiAgZW5hYmxlU2hvd09ubHlTZWxlY3RlZDogZmFsc2UsXHJcbiAgY2xlYXJTZWFyY2g6IGZhbHNlXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVG9vbEJhcjtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdG9vbGJhci9Ub29sQmFyLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvbnN0IGZyb20gJy4vQ29uc3QnO1xyXG5pbXBvcnQgY2xhc3NTZXQgZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5jbGFzcyBUYWJsZUZpbHRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuZmlsdGVyT2JqID0ge307XHJcbiAgfVxyXG5cclxuICBoYW5kbGVLZXlVcChlKXtcclxuICAgIGlmKGUuY3VycmVudFRhcmdldC52YWx1ZS50cmltKCkgPT09IFwiXCIpXHJcbiAgICAgIGRlbGV0ZSB0aGlzLmZpbHRlck9ialtlLmN1cnJlbnRUYXJnZXQubmFtZV07XHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMuZmlsdGVyT2JqW2UuY3VycmVudFRhcmdldC5uYW1lXSA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcclxuXHJcbiAgICB0aGlzLnByb3BzLm9uRmlsdGVyKHRoaXMuZmlsdGVyT2JqKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpe1xyXG4gICAgdmFyIHRhYmxlQ2xhc3NlcyA9IGNsYXNzU2V0KFwidGFibGVcIiwge1xyXG4gICAgICAndGFibGUtc3RyaXBlZCc6IHRoaXMucHJvcHMuc3RyaXBlZCxcclxuICAgICAgJ3RhYmxlLWNvbmRlbnNlZCc6IHRoaXMucHJvcHMuY29uZGVuc2VkXHJcbiAgICB9KTtcclxuICAgIHZhciBzZWxlY3RSb3dIZWFkZXIgPSBudWxsO1xyXG5cclxuICAgIGlmKHRoaXMucHJvcHMucm93U2VsZWN0VHlwZSA9PSBDb25zdC5ST1dfU0VMRUNUX1NJTkdMRSB8fFxyXG4gICAgICAgIHRoaXMucHJvcHMucm93U2VsZWN0VHlwZSA9PSBDb25zdC5ST1dfU0VMRUNUX01VTFRJKXtcclxuICAgICAgbGV0IHN0eWxlID0ge1xyXG4gICAgICAgIHdpZHRoOjM1LFxyXG4gICAgICAgIHBhZGRpbmdMZWZ0OiAwLFxyXG4gICAgICAgIHBhZGRpbmdSaWdodDogMFxyXG4gICAgICB9XHJcbiAgICAgIHNlbGVjdFJvd0hlYWRlciA9ICg8dGggc3R5bGU9e3N0eWxlfSBrZXk9ey0xfT5GaWx0ZXI8L3RoPik7XHJcbiAgICB9XHJcbiAgICB2YXIgZmlsdGVyRmllbGQgPSB0aGlzLnByb3BzLmNvbHVtbnMubWFwKGZ1bmN0aW9uKGNvbHVtbil7XHJcbiAgICAgIHZhciB0aFN0eWxlID0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGNvbHVtbi5oaWRkZW4/XCJub25lXCI6bnVsbCxcclxuICAgICAgICB3aWR0aDogY29sdW1uLndpZHRoXHJcbiAgICAgIH07XHJcbiAgICAgIHJldHVybihcclxuICAgICAgICA8dGgga2V5PXtjb2x1bW4ubmFtZX0gc3R5bGU9e3RoU3R5bGV9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aC1pbm5lciB0YWJsZS1oZWFkZXItY29sdW1uXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBzaXplPVwiMTBcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPXtjb2x1bW4ubmFtZX0gbmFtZT17Y29sdW1uLm5hbWV9IG9uS2V5VXA9e3RoaXMuaGFuZGxlS2V5VXAuYmluZCh0aGlzKX0vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC90aD5cclxuICAgICAgKVxyXG4gICAgfSwgdGhpcyk7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9e3RhYmxlQ2xhc3Nlc30gc3R5bGU9e3ttYXJnaW5Ub3A6NX19PlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIDx0ciBzdHlsZT17e2JvcmRlckJvdHRvbVN0eWxlOiAnaGlkZGVuJ319PlxyXG4gICAgICAgICAgICB7c2VsZWN0Um93SGVhZGVyfXtmaWx0ZXJGaWVsZH1cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgPC90YWJsZT5cclxuICAgIClcclxuICB9XHJcbn1cclxuVGFibGVGaWx0ZXIucHJvcFR5cGVzID0ge1xyXG4gIGNvbHVtbnM6IFJlYWN0LlByb3BUeXBlcy5hcnJheSxcclxuICByb3dTZWxlY3RUeXBlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG4gIG9uRmlsdGVyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBUYWJsZUZpbHRlcjtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvVGFibGVGaWx0ZXIuanNcbiAqKi8iLCJpbXBvcnQgQ29uc3QgZnJvbSBcIi4uL0NvbnN0XCI7XHJcbnZhciBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXI7XHJcblxyXG5mdW5jdGlvbiBfc29ydChhcnIsIHNvcnRGaWVsZCwgb3JkZXIsIHNvcnRGdW5jKSB7XHJcbiAgb3JkZXIgPSBvcmRlci50b0xvd2VyQ2FzZSgpO1xyXG4gIGFyci5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICBpZiAoc29ydEZ1bmMpIHtcclxuICAgICAgcmV0dXJuIHNvcnRGdW5jKGEsIGIsIG9yZGVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChvcmRlciA9PSBDb25zdC5TT1JUX0RFU0MpIHtcclxuICAgICAgICByZXR1cm4gYVtzb3J0RmllbGRdID4gYltzb3J0RmllbGRdID8gLTEgOiAoKGFbc29ydEZpZWxkXSA8IGJbc29ydEZpZWxkXSkgPyAxIDogMCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGFbc29ydEZpZWxkXSA8IGJbc29ydEZpZWxkXSA/IC0xIDogKChhW3NvcnRGaWVsZF0gPiBiW3NvcnRGaWVsZF0pID8gMSA6IDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBhcnI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZURhdGFTZXQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xyXG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgIHN1cGVyKGRhdGEpO1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICB9XHJcblxyXG4gIHNldERhdGEoZGF0YSkge1xyXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy5kYXRhID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGdldERhdGEoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlRGF0YVN0b3JlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIHRoaXMuY29sSW5mb3MgPSBudWxsO1xyXG4gICAgdGhpcy5maWx0ZXJlZERhdGEgPSBudWxsO1xyXG4gICAgdGhpcy5pc09uRmlsdGVyID0gZmFsc2U7XHJcbiAgICB0aGlzLmZpbHRlck9iaiA9IG51bGw7XHJcbiAgICB0aGlzLnNlYXJjaFRleHQgPSBudWxsO1xyXG4gICAgdGhpcy5zb3J0T2JqID0gbnVsbDtcclxuICAgIHRoaXMucGFnZU9iaiA9IHt9O1xyXG4gICAgdGhpcy5zZWxlY3RlZCA9IFtdO1xyXG4gICAgdGhpcy5tdWx0aUNvbHVtblNlYXJjaCA9IGZhbHNlO1xyXG4gICAgdGhpcy5zaG93T25seVNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLnJlbW90ZSA9IGZhbHNlOyAvLyByZW1vdGUgZGF0YVxyXG4gIH1cclxuXHJcbiAgc2V0UHJvcHMocHJvcHMpIHtcclxuICAgIHRoaXMua2V5RmllbGQgPSBwcm9wcy5rZXlGaWVsZDtcclxuICAgIHRoaXMuZW5hYmxlUGFnaW5hdGlvbiA9IHByb3BzLmlzUGFnaW5hdGlvbjtcclxuICAgIHRoaXMuY29sSW5mb3MgPSBwcm9wcy5jb2xJbmZvcztcclxuICAgIHRoaXMucmVtb3RlID0gcHJvcHMucmVtb3RlO1xyXG4gICAgdGhpcy5tdWx0aUNvbHVtblNlYXJjaCA9IHByb3BzLm11bHRpQ29sdW1uU2VhcmNoO1xyXG4gIH1cclxuXHJcbiAgc2V0RGF0YShkYXRhKSB7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgaWYgKHRoaXMuaXNPbkZpbHRlcikge1xyXG4gICAgICBpZiAobnVsbCAhPT0gdGhpcy5maWx0ZXJPYmopIHRoaXMuZmlsdGVyKHRoaXMuZmlsdGVyT2JqKTtcclxuICAgICAgaWYgKG51bGwgIT09IHRoaXMuc2VhcmNoVGV4dCkgdGhpcy5zZWFyY2godGhpcy5zZWFyY2hUZXh0KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNvcnRPYmopIHtcclxuICAgICAgdGhpcy5zb3J0KHRoaXMuc29ydE9iai5vcmRlciwgdGhpcy5zb3J0T2JqLnNvcnRGaWVsZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRTb3J0SW5mbygpIHtcclxuICAgIHJldHVybiB0aGlzLnNvcnRPYmo7XHJcbiAgfVxyXG5cclxuICBzZXRTZWxlY3RlZFJvd0tleShzZWxlY3RlZFJvd0tleXMpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWQgPSBzZWxlY3RlZFJvd0tleXM7XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3RlZFJvd0tleXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZDtcclxuICB9XHJcblxyXG4gIGdldEN1cnJlbnREaXNwbGF5RGF0YSgpIHtcclxuICAgIGlmICh0aGlzLmlzT25GaWx0ZXIpIHJldHVybiB0aGlzLmZpbHRlcmVkRGF0YTtcclxuICAgIGVsc2UgcmV0dXJuIHRoaXMuZGF0YTtcclxuICB9XHJcblxyXG4gIGlnbm9yZU5vblNlbGVjdGVkKCkge1xyXG4gICAgdGhpcy5zaG93T25seVNlbGVjdGVkID0gIXRoaXMuc2hvd09ubHlTZWxlY3RlZDtcclxuICAgIGlmKHRoaXMuc2hvd09ubHlTZWxlY3RlZCl7XHJcbiAgICAgIHRoaXMuaXNPbkZpbHRlciA9IHRydWU7XHJcbiAgICAgIHRoaXMuZmlsdGVyZWREYXRhID0gdGhpcy5kYXRhLmZpbHRlciggcm93ID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5zZWxlY3RlZC5maW5kKHggPT4gcm93W3RoaXMua2V5RmllbGRdID09PSB4KVxyXG4gICAgICAgIHJldHVybiB0eXBlb2YgcmVzdWx0ICE9PSAndW5kZWZpbmVkJyA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlzT25GaWx0ZXIgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNvcnQob3JkZXIsIHNvcnRGaWVsZCkge1xyXG4gICAgdGhpcy5zb3J0T2JqID0ge1xyXG4gICAgICBvcmRlcjogb3JkZXIsXHJcbiAgICAgIHNvcnRGaWVsZDogc29ydEZpZWxkXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBjdXJyZW50RGlzcGxheURhdGEgPSB0aGlzLmdldEN1cnJlbnREaXNwbGF5RGF0YSgpO1xyXG4gICAgaWYoIXRoaXMuY29sSW5mb3Nbc29ydEZpZWxkXSkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgY29uc3QgeyBzb3J0RnVuYyB9ID0gdGhpcy5jb2xJbmZvc1tzb3J0RmllbGRdO1xyXG4gICAgY3VycmVudERpc3BsYXlEYXRhID0gX3NvcnQoY3VycmVudERpc3BsYXlEYXRhLCBzb3J0RmllbGQsIG9yZGVyLCBzb3J0RnVuYyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwYWdlKHBhZ2UsIHNpemVQZXJQYWdlKSB7XHJcbiAgICB0aGlzLnBhZ2VPYmouZW5kID0gcGFnZSAqIHNpemVQZXJQYWdlIC0gMTtcclxuICAgIHRoaXMucGFnZU9iai5zdGFydCA9IHRoaXMucGFnZU9iai5lbmQgLSAoc2l6ZVBlclBhZ2UgLSAxKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZWRpdChuZXdWYWwsIHJvd0luZGV4LCBmaWVsZE5hbWUpIHtcclxuICAgIGxldCBjdXJyZW50RGlzcGxheURhdGEgPSB0aGlzLmdldEN1cnJlbnREaXNwbGF5RGF0YSgpO1xyXG4gICAgbGV0IHJvd0tleUNhY2hlO1xyXG4gICAgaWYgKCF0aGlzLmVuYWJsZVBhZ2luYXRpb24pIHtcclxuICAgICAgY3VycmVudERpc3BsYXlEYXRhW3Jvd0luZGV4XVtmaWVsZE5hbWVdID0gbmV3VmFsO1xyXG4gICAgICByb3dLZXlDYWNoZSA9IGN1cnJlbnREaXNwbGF5RGF0YVtyb3dJbmRleF1bdGhpcy5rZXlGaWVsZF07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjdXJyZW50RGlzcGxheURhdGFbdGhpcy5wYWdlT2JqLnN0YXJ0ICsgcm93SW5kZXhdW2ZpZWxkTmFtZV0gPSBuZXdWYWw7XHJcbiAgICAgIHJvd0tleUNhY2hlID0gY3VycmVudERpc3BsYXlEYXRhW3RoaXMucGFnZU9iai5zdGFydCArIHJvd0luZGV4XVt0aGlzLmtleUZpZWxkXTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmlzT25GaWx0ZXIpIHtcclxuICAgICAgdGhpcy5kYXRhLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xyXG4gICAgICAgIGlmIChyb3dbdGhpcy5rZXlGaWVsZF0gPT09IHJvd0tleUNhY2hlKSB7XHJcbiAgICAgICAgICByb3dbZmllbGROYW1lXSA9IG5ld1ZhbDtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIHRoaXMpO1xyXG4gICAgICBpZiAobnVsbCAhPT0gdGhpcy5maWx0ZXJPYmopIHRoaXMuZmlsdGVyKHRoaXMuZmlsdGVyT2JqKTtcclxuICAgICAgaWYgKG51bGwgIT09IHRoaXMuc2VhcmNoVGV4dCkgdGhpcy5zZWFyY2godGhpcy5zZWFyY2hUZXh0KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgYWRkKG5ld09iaikge1xyXG4gICAgaWYgKCFuZXdPYmpbdGhpcy5rZXlGaWVsZF0gfHwgbmV3T2JqW3RoaXMua2V5RmllbGRdLnRvU3RyaW5nKCkgPT09ICcnKSB7XHJcbiAgICAgIHRocm93IHRoaXMua2V5RmllbGQgKyBcIiBjYW4ndCBiZSBlbXB0eSB2YWx1ZS5cIjtcclxuICAgIH1cclxuICAgIGxldCBjdXJyZW50RGlzcGxheURhdGEgPSB0aGlzLmdldEN1cnJlbnREaXNwbGF5RGF0YSgpO1xyXG4gICAgY3VycmVudERpc3BsYXlEYXRhLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xyXG4gICAgICBpZiAocm93W3RoaXMua2V5RmllbGRdLnRvU3RyaW5nKCkgPT09IG5ld09ialt0aGlzLmtleUZpZWxkXS50b1N0cmluZygpKSB7XHJcbiAgICAgICAgdGhyb3cgdGhpcy5rZXlGaWVsZCArIFwiIFwiICsgbmV3T2JqW3RoaXMua2V5RmllbGRdICsgXCIgYWxyZWFkeSBleGlzdHNcIjtcclxuICAgICAgfVxyXG4gICAgfSwgdGhpcyk7XHJcblxyXG4gICAgY3VycmVudERpc3BsYXlEYXRhLnB1c2gobmV3T2JqKTtcclxuICAgIGlmICh0aGlzLmlzT25GaWx0ZXIpIHtcclxuICAgICAgdGhpcy5kYXRhLnB1c2gobmV3T2JqKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZShyb3dLZXkpIHtcclxuICAgIGxldCBjdXJyZW50RGlzcGxheURhdGEgPSB0aGlzLmdldEN1cnJlbnREaXNwbGF5RGF0YSgpO1xyXG4gICAgbGV0IHJlc3VsdCA9IGN1cnJlbnREaXNwbGF5RGF0YS5maWx0ZXIoZnVuY3Rpb24gKHJvdykge1xyXG4gICAgICByZXR1cm4gcm93S2V5LmluZGV4T2Yocm93W3RoaXMua2V5RmllbGRdKSA9PSAtMTtcclxuICAgIH0sIHRoaXMpO1xyXG5cclxuICAgIGlmICh0aGlzLmlzT25GaWx0ZXIpIHtcclxuICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLmZpbHRlcihmdW5jdGlvbiAocm93KSB7XHJcbiAgICAgICAgcmV0dXJuIHJvd0tleS5pbmRleE9mKHJvd1t0aGlzLmtleUZpZWxkXSkgPT0gLTE7XHJcbiAgICAgIH0sIHRoaXMpO1xyXG4gICAgICB0aGlzLmZpbHRlcmVkRGF0YSA9IHJlc3VsdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGF0YSA9IHJlc3VsdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpbHRlcihmaWx0ZXJPYmopIHtcclxuICAgIGlmIChPYmplY3Qua2V5cyhmaWx0ZXJPYmopLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIHRoaXMuZmlsdGVyZWREYXRhID0gbnVsbDtcclxuICAgICAgdGhpcy5pc09uRmlsdGVyID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuZmlsdGVyT2JqID0gbnVsbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZmlsdGVyT2JqID0gZmlsdGVyT2JqO1xyXG4gICAgICB0aGlzLmZpbHRlcmVkRGF0YSA9IHRoaXMuZGF0YS5maWx0ZXIoIHJvdyA9PiB7XHJcbiAgICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcclxuICAgICAgICBsZXQgZmlsdGVyVmFsO1xyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBmaWx0ZXJPYmopIHtcclxuICAgICAgICAgIGxldCB0YXJnZXRWYWwgPSByb3dba2V5XTtcclxuXHJcbiAgICAgICAgICBzd2l0Y2ggKGZpbHRlck9ialtrZXldLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBDb25zdC5GSUxURVJfVFlQRS5OVU1CRVI6XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBmaWx0ZXJWYWwgPSBmaWx0ZXJPYmpba2V5XS52YWx1ZS5udW1iZXI7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBDb25zdC5GSUxURVJfVFlQRS5DVVNUT006XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBmaWx0ZXJWYWwgPSAodHlwZW9mIGZpbHRlck9ialtrZXldLnZhbHVlID09PSBcIm9iamVjdFwiKSA/XHJcbiAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCA6XHJcbiAgICAgICAgICAgICAgICAgICh0eXBlb2YgZmlsdGVyT2JqW2tleV0udmFsdWUgPT09IFwic3RyaW5nXCIpID8gZmlsdGVyT2JqW2tleV0udmFsdWUudG9Mb3dlckNhc2UoKSA6IGZpbHRlck9ialtrZXldLnZhbHVlO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICBmaWx0ZXJWYWwgPSAodHlwZW9mIGZpbHRlck9ialtrZXldLnZhbHVlID09PSBcInN0cmluZ1wiKSA/IGZpbHRlck9ialtrZXldLnZhbHVlLnRvTG93ZXJDYXNlKCkgOiBmaWx0ZXJPYmpba2V5XS52YWx1ZTtcclxuICAgICAgICAgICAgICBpZiAoZmlsdGVyVmFsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQgb2xkIGZpbHRlclxyXG4gICAgICAgICAgICAgICAgZmlsdGVyVmFsID0gZmlsdGVyT2JqW2tleV0udG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAodGhpcy5jb2xJbmZvc1trZXldKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZm9ybWF0LCBmaWx0ZXJGb3JtYXR0ZWQsIGZvcm1hdEV4dHJhRGF0YSB9ID0gdGhpcy5jb2xJbmZvc1trZXldO1xyXG4gICAgICAgICAgICBpZihmaWx0ZXJGb3JtYXR0ZWQgJiYgZm9ybWF0KSB7XHJcbiAgICAgICAgICAgICAgdGFyZ2V0VmFsID0gZm9ybWF0KHJvd1trZXldLCByb3csIGZvcm1hdEV4dHJhRGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBzd2l0Y2ggKGZpbHRlck9ialtrZXldLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBDb25zdC5GSUxURVJfVFlQRS5OVU1CRVI6XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWxpZCA9IHRoaXMuZmlsdGVyTnVtYmVyKHRhcmdldFZhbCwgZmlsdGVyVmFsLCBmaWx0ZXJPYmpba2V5XS52YWx1ZS5jb21wYXJhdG9yKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIENvbnN0LkZJTFRFUl9UWVBFLkRBVEU6XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWxpZCA9IHRoaXMuZmlsdGVyRGF0ZSh0YXJnZXRWYWwsIGZpbHRlclZhbCk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBDb25zdC5GSUxURVJfVFlQRS5DVVNUT006XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWxpZCA9IHRoaXMuZmlsdGVyQ3VzdG9tKHRhcmdldFZhbCwgZmlsdGVyVmFsLCBmaWx0ZXJPYmpba2V5XS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgIHZhbGlkID0gdGhpcy5maWx0ZXJUZXh0KHRhcmdldFZhbCwgZmlsdGVyVmFsKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCF2YWxpZCkge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbGlkO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5pc09uRmlsdGVyID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpbHRlck51bWJlcih0YXJnZXRWYWwsIGZpbHRlclZhbCwgY29tcGFyYXRvcikge1xyXG4gICAgbGV0IHZhbGlkID0gdHJ1ZTtcclxuICAgIHN3aXRjaCAoY29tcGFyYXRvcikge1xyXG4gICAgICBjYXNlIFwiPVwiOlxyXG4gICAgICB7XHJcbiAgICAgICAgaWYgKHRhcmdldFZhbCAhPSBmaWx0ZXJWYWwpIHtcclxuICAgICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgXCI+XCI6XHJcbiAgICAgIHtcclxuICAgICAgICBpZiAodGFyZ2V0VmFsIDw9IGZpbHRlclZhbCkge1xyXG4gICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBcIj49XCI6XHJcbiAgICAgIHtcclxuICAgICAgICBpZiAodGFyZ2V0VmFsIDwgZmlsdGVyVmFsKSB7XHJcbiAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFwiPFwiOlxyXG4gICAgICB7XHJcbiAgICAgICAgaWYgKHRhcmdldFZhbCA+PSBmaWx0ZXJWYWwpIHtcclxuICAgICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgXCI8PVwiOlxyXG4gICAgICB7XHJcbiAgICAgICAgaWYgKHRhcmdldFZhbCA+IGZpbHRlclZhbCkge1xyXG4gICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBcIiE9XCI6XHJcbiAgICAgIHtcclxuICAgICAgICBpZiAodGFyZ2V0VmFsID09IGZpbHRlclZhbCkge1xyXG4gICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJOdW1iZXIgY29tcGFyYXRvciBwcm92aWRlZCBpcyBub3Qgc3VwcG9ydGVkXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsaWQ7XHJcbiAgfVxyXG5cclxuICBmaWx0ZXJEYXRlKHRhcmdldFZhbCwgZmlsdGVyVmFsKSB7XHJcbiAgICByZXR1cm4gKHRhcmdldFZhbC5nZXREYXRlKCkgPT0gZmlsdGVyVmFsLmdldERhdGUoKSAmJlxyXG4gICAgICAgIHRhcmdldFZhbC5nZXRNb250aCgpID09IGZpbHRlclZhbC5nZXRNb250aCgpICYmXHJcbiAgICAgICAgdGFyZ2V0VmFsLmdldEZ1bGxZZWFyKCkgPT0gZmlsdGVyVmFsLmdldEZ1bGxZZWFyKCkpO1xyXG4gIH1cclxuXHJcbiAgZmlsdGVyQ3VzdG9tKHRhcmdldFZhbCwgZmlsdGVyVmFsLCBjYWxsYmFja0luZm8pIHtcclxuICAgIGlmIChjYWxsYmFja0luZm8gIT0gbnVsbCAmJiB0eXBlb2YgY2FsbGJhY2tJbmZvID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgIHJldHVybiBjYWxsYmFja0luZm8uY2FsbGJhY2sodGFyZ2V0VmFsLCBjYWxsYmFja0luZm8uY2FsbGJhY2tQYXJhbWV0ZXJzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmlsdGVyVGV4dCh0YXJnZXRWYWwsIGZpbHRlclZhbCk7XHJcbiAgfVxyXG5cclxuICBmaWx0ZXJUZXh0KHRhcmdldFZhbCwgZmlsdGVyVmFsKSB7XHJcbiAgICBpZiAodGFyZ2V0VmFsLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlclZhbCkgPT0gLTEpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc2VhcmNoKHNlYXJjaFRleHQpIHtcclxuICAgIGlmIChzZWFyY2hUZXh0LnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgICB0aGlzLmZpbHRlcmVkRGF0YSA9IG51bGw7XHJcbiAgICAgIHRoaXMuaXNPbkZpbHRlciA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNlYXJjaFRleHQgPSBudWxsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gc2VhcmNoVGV4dDtcclxuICAgICAgdmFyIHNlYXJjaFRleHRBcnJheSA9IFtdO1xyXG4gICAgICB0aGlzLmZpbHRlcmVkRGF0YSA9IHRoaXMuZGF0YS5maWx0ZXIoIHJvdyA9PiB7XHJcbiAgICAgICAgbGV0IHZhbGlkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm11bHRpQ29sdW1uU2VhcmNoKSB7XHJcbiAgICAgICAgICBzZWFyY2hUZXh0QXJyYXkgPSBzZWFyY2hUZXh0LnNwbGl0KCcgJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNlYXJjaFRleHRBcnJheS5wdXNoKHNlYXJjaFRleHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHJvdykge1xyXG4gICAgICAgICAgaWYgKHRoaXMuY29sSW5mb3Nba2V5XSAmJiByb3dba2V5XSkge1xyXG4gICAgICAgICAgICBzZWFyY2hUZXh0QXJyYXkuZm9yRWFjaCggdGV4dCA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IGZpbHRlclZhbCA9IHRleHQudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICBsZXQgdGFyZ2V0VmFsID0gcm93W2tleV07XHJcbiAgICAgICAgICAgICAgY29uc3QgeyBmb3JtYXQsIGZpbHRlckZvcm1hdHRlZCwgZm9ybWF0RXh0cmFEYXRhLCBoaWRkZW59ID0gdGhpcy5jb2xJbmZvc1trZXldO1xyXG4gICAgICAgICAgICAgIGlmICghaGlkZGVuKSB7XHJcbiAgICAgICAgICAgICAgICBpZihmaWx0ZXJGb3JtYXR0ZWQgJiYgZm9ybWF0KSB7XHJcbiAgICAgICAgICAgICAgICAgIHRhcmdldFZhbCA9IGZvcm1hdCh0YXJnZXRWYWwsIHJvdywgZm9ybWF0RXh0cmFEYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRWYWwudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZmlsdGVyVmFsKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICh2YWxpZCkgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWxpZDtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuaXNPbkZpbHRlciA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXREYXRhSWdub3JpbmdQYWdpbmF0aW9uKCkge1xyXG4gICAgbGV0IF9kYXRhID0gdGhpcy5nZXRDdXJyZW50RGlzcGxheURhdGEoKTtcclxuICAgIHJldHVybiBfZGF0YTtcclxuICB9XHJcblxyXG4gIGdldCgpIHtcclxuICAgIGxldCBfZGF0YSA9IHRoaXMuZ2V0Q3VycmVudERpc3BsYXlEYXRhKCk7XHJcblxyXG4gICAgaWYgKF9kYXRhLmxlbmd0aCA9PSAwKSByZXR1cm4gX2RhdGE7XHJcblxyXG4gICAgaWYgKHRoaXMucmVtb3RlIHx8ICF0aGlzLmVuYWJsZVBhZ2luYXRpb24pIHtcclxuICAgICAgcmV0dXJuIF9kYXRhO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIHJlc3VsdCA9IFtdO1xyXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy5wYWdlT2JqLnN0YXJ0OyBpIDw9IHRoaXMucGFnZU9iai5lbmQ7IGkrKykge1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKF9kYXRhW2ldKTtcclxuICAgICAgICBpZiAoaSArIDEgPT0gX2RhdGEubGVuZ3RoKWJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRLZXlGaWVsZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmtleUZpZWxkO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YU51bSgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnREaXNwbGF5RGF0YSgpLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIGlzQ2hhbmdlZFBhZ2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYWdlT2JqLnN0YXJ0ICYmIHRoaXMucGFnZU9iai5lbmQgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBnZXRBbGxSb3drZXkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhLm1hcChmdW5jdGlvbiAocm93KSB7XHJcbiAgICAgIHJldHVybiByb3dbdGhpcy5rZXlGaWVsZF07XHJcbiAgICB9LCB0aGlzKTtcclxuICB9XHJcblxyXG59XHJcbjtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RvcmUvVGFibGVEYXRhU3RvcmUuanNcbiAqKi8iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICB0aGlzLl9ldmVudHMgPSB0aGlzLl9ldmVudHMgfHwge307XG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbkV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uKG4pIHtcbiAgaWYgKCFpc051bWJlcihuKSB8fCBuIDwgMCB8fCBpc05hTihuKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ24gbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlcicpO1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGVyLCBoYW5kbGVyLCBsZW4sIGFyZ3MsIGksIGxpc3RlbmVycztcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmICh0eXBlID09PSAnZXJyb3InKSB7XG4gICAgaWYgKCF0aGlzLl9ldmVudHMuZXJyb3IgfHxcbiAgICAgICAgKGlzT2JqZWN0KHRoaXMuX2V2ZW50cy5lcnJvcikgJiYgIXRoaXMuX2V2ZW50cy5lcnJvci5sZW5ndGgpKSB7XG4gICAgICBlciA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgICAgfVxuICAgICAgdGhyb3cgVHlwZUVycm9yKCdVbmNhdWdodCwgdW5zcGVjaWZpZWQgXCJlcnJvclwiIGV2ZW50LicpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZXIgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzVW5kZWZpbmVkKGhhbmRsZXIpKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAoaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgLy8gZmFzdCBjYXNlc1xuICAgICAgY2FzZSAxOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gc2xvd2VyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICBhcmdzID0gbmV3IEFycmF5KGxlbiAtIDEpO1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgbGVuOyBpKyspXG4gICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGhhbmRsZXIpKSB7XG4gICAgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiAtIDEpO1xuICAgIGZvciAoaSA9IDE7IGkgPCBsZW47IGkrKylcbiAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuXG4gICAgbGlzdGVuZXJzID0gaGFuZGxlci5zbGljZSgpO1xuICAgIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgbGlzdGVuZXJzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIG07XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgaWYgKHRoaXMuX2V2ZW50cy5uZXdMaXN0ZW5lcilcbiAgICB0aGlzLmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgaXNGdW5jdGlvbihsaXN0ZW5lci5saXN0ZW5lcikgP1xuICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgZWxzZSBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xuICBlbHNlXG4gICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gW3RoaXMuX2V2ZW50c1t0eXBlXSwgbGlzdGVuZXJdO1xuXG4gIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pICYmICF0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkKSB7XG4gICAgdmFyIG07XG4gICAgaWYgKCFpc1VuZGVmaW5lZCh0aGlzLl9tYXhMaXN0ZW5lcnMpKSB7XG4gICAgICBtID0gdGhpcy5fbWF4TGlzdGVuZXJzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgaWYgKG0gJiYgbSA+IDAgJiYgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCA+IG0pIHtcbiAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQgPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcignKG5vZGUpIHdhcm5pbmc6IHBvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgJyArXG4gICAgICAgICAgICAgICAgICAgICdsZWFrIGRldGVjdGVkLiAlZCBsaXN0ZW5lcnMgYWRkZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAnVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gaW5jcmVhc2UgbGltaXQuJyxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUudHJhY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gbm90IHN1cHBvcnRlZCBpbiBJRSAxMFxuICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIHZhciBmaXJlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGcoKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBnKTtcblxuICAgIGlmICghZmlyZWQpIHtcbiAgICAgIGZpcmVkID0gdHJ1ZTtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgZy5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICB0aGlzLm9uKHR5cGUsIGcpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gZW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWRcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbGlzdCwgcG9zaXRpb24sIGxlbmd0aCwgaTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXR1cm4gdGhpcztcblxuICBsaXN0ID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuICBsZW5ndGggPSBsaXN0Lmxlbmd0aDtcbiAgcG9zaXRpb24gPSAtMTtcblxuICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHxcbiAgICAgIChpc0Z1bmN0aW9uKGxpc3QubGlzdGVuZXIpICYmIGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG5cbiAgfSBlbHNlIGlmIChpc09iamVjdChsaXN0KSkge1xuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tID4gMDspIHtcbiAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fFxuICAgICAgICAgIChsaXN0W2ldLmxpc3RlbmVyICYmIGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgbGlzdC5sZW5ndGggPSAwO1xuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdC5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGtleSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgaWYgKCF0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBmb3IgKGtleSBpbiB0aGlzLl9ldmVudHMpIHtcbiAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzRnVuY3Rpb24obGlzdGVuZXJzKSkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBMSUZPIG9yZGVyXG4gICAgd2hpbGUgKGxpc3RlbmVycy5sZW5ndGgpXG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tsaXN0ZW5lcnMubGVuZ3RoIC0gMV0pO1xuICB9XG4gIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIHJldDtcbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXQgPSBbXTtcbiAgZWxzZSBpZiAoaXNGdW5jdGlvbih0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIHJldCA9IFt0aGlzLl9ldmVudHNbdHlwZV1dO1xuICBlbHNlXG4gICAgcmV0ID0gdGhpcy5fZXZlbnRzW3R5cGVdLnNsaWNlKCk7XG4gIHJldHVybiByZXQ7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgdmFyIHJldDtcbiAgaWYgKCFlbWl0dGVyLl9ldmVudHMgfHwgIWVtaXR0ZXIuX2V2ZW50c1t0eXBlXSlcbiAgICByZXQgPSAwO1xuICBlbHNlIGlmIChpc0Z1bmN0aW9uKGVtaXR0ZXIuX2V2ZW50c1t0eXBlXSkpXG4gICAgcmV0ID0gMTtcbiAgZWxzZVxuICAgIHJldCA9IGVtaXR0ZXIuX2V2ZW50c1t0eXBlXS5sZW5ndGg7XG4gIHJldHVybiByZXQ7XG59O1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9ldmVudHMvZXZlbnRzLmpzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKXtcclxuICB2YXIgZmlsZXNhdmVyID0gcmVxdWlyZSgnLi9maWxlc2F2ZXInKTtcclxuICB2YXIgc2F2ZUFzID0gZmlsZXNhdmVyLnNhdmVBc1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b1N0cmluZyhkYXRhLCBrZXlzKSB7XHJcbiAgdmFyIGRhdGFTdHJpbmcgPSBcIlwiO1xyXG4gIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGRhdGFTdHJpbmc7XHJcblxyXG4gIGRhdGFTdHJpbmcgKz0ga2V5cy5qb2luKCcsJykgKyAnXFxuJ1xyXG5cclxuICBkYXRhLm1hcChmdW5jdGlvbihyb3cpIHtcclxuICAgIGtleXMubWFwKGZ1bmN0aW9uKGNvbCwgaSkge1xyXG4gICAgICBsZXQgY2VsbCA9IHR5cGVvZiByb3dbY29sXSAhPT0gJ3VuZGVmaW5lZCcgPyAoJ1wiJytyb3dbY29sXSsnXCInKSA6IFwiXCI7XHJcbiAgICAgIGRhdGFTdHJpbmcgKz0gY2VsbDtcclxuICAgICAgaWYgKGkrMSA8IGtleXMubGVuZ3RoKVxyXG4gICAgICAgIGRhdGFTdHJpbmcgKz0gJywnO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZGF0YVN0cmluZyArPSAnXFxuJztcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGRhdGFTdHJpbmc7XHJcbn07XHJcblxyXG52YXIgZXhwb3J0Q1NWID0gZnVuY3Rpb24oZGF0YSwga2V5cywgZmlsZW5hbWUpIHtcclxuICB2YXIgZGF0YVN0cmluZyA9IHRvU3RyaW5nKGRhdGEsIGtleXMpO1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgc2F2ZUFzKCBuZXcgQmxvYihbZGF0YVN0cmluZ10sIHt0eXBlOiBcInRleHQvcGxhaW47Y2hhcnNldD11dGYtOFwifSksIGZpbGVuYW1lIHx8ICdzcHJlYWRzaGVldC5jc3YnICk7XHJcbiAgfVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGV4cG9ydENTVjtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY3N2X2V4cG9ydF91dGlsLmpzXG4gKiovIiwiLyogRmlsZVNhdmVyLmpzXHJcbiAqIEEgc2F2ZUFzKCkgRmlsZVNhdmVyIGltcGxlbWVudGF0aW9uLlxyXG4gKiAxLjEuMjAxNTEwMDNcclxuICpcclxuICogQnkgRWxpIEdyZXksIGh0dHA6Ly9lbGlncmV5LmNvbVxyXG4gKiBMaWNlbnNlOiBNSVRcclxuICogICBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2VsaWdyZXkvRmlsZVNhdmVyLmpzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWRcclxuICovXHJcblxyXG4vKmdsb2JhbCBzZWxmICovXHJcbi8qanNsaW50IGJpdHdpc2U6IHRydWUsIGluZGVudDogNCwgbGF4YnJlYWs6IHRydWUsIGxheGNvbW1hOiB0cnVlLCBzbWFydHRhYnM6IHRydWUsIHBsdXNwbHVzOiB0cnVlICovXHJcblxyXG4vKiEgQHNvdXJjZSBodHRwOi8vcHVybC5lbGlncmV5LmNvbS9naXRodWIvRmlsZVNhdmVyLmpzL2Jsb2IvbWFzdGVyL0ZpbGVTYXZlci5qcyAqL1xyXG5cclxudmFyIHNhdmVBcyA9IHNhdmVBcyB8fCAoZnVuY3Rpb24odmlldykge1xyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cdC8vIElFIDwxMCBpcyBleHBsaWNpdGx5IHVuc3VwcG9ydGVkXHJcblx0aWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09IFwidW5kZWZpbmVkXCIgJiYgL01TSUUgWzEtOV1cXC4vLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0dmFyXHJcblx0XHQgIGRvYyA9IHZpZXcuZG9jdW1lbnRcclxuXHRcdCAgLy8gb25seSBnZXQgVVJMIHdoZW4gbmVjZXNzYXJ5IGluIGNhc2UgQmxvYi5qcyBoYXNuJ3Qgb3ZlcnJpZGRlbiBpdCB5ZXRcclxuXHRcdCwgZ2V0X1VSTCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gdmlldy5VUkwgfHwgdmlldy53ZWJraXRVUkwgfHwgdmlldztcclxuXHRcdH1cclxuXHRcdCwgc2F2ZV9saW5rID0gZG9jLmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIiwgXCJhXCIpXHJcblx0XHQsIGNhbl91c2Vfc2F2ZV9saW5rID0gXCJkb3dubG9hZFwiIGluIHNhdmVfbGlua1xyXG5cdFx0LCBjbGljayA9IGZ1bmN0aW9uKG5vZGUpIHtcclxuXHRcdFx0dmFyIGV2ZW50ID0gbmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiKTtcclxuXHRcdFx0bm9kZS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuXHRcdH1cclxuXHRcdCwgaXNfc2FmYXJpID0gL1ZlcnNpb25cXC9bXFxkXFwuXSsuKlNhZmFyaS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KVxyXG5cdFx0LCB3ZWJraXRfcmVxX2ZzID0gdmlldy53ZWJraXRSZXF1ZXN0RmlsZVN5c3RlbVxyXG5cdFx0LCByZXFfZnMgPSB2aWV3LnJlcXVlc3RGaWxlU3lzdGVtIHx8IHdlYmtpdF9yZXFfZnMgfHwgdmlldy5tb3pSZXF1ZXN0RmlsZVN5c3RlbVxyXG5cdFx0LCB0aHJvd19vdXRzaWRlID0gZnVuY3Rpb24oZXgpIHtcclxuXHRcdFx0KHZpZXcuc2V0SW1tZWRpYXRlIHx8IHZpZXcuc2V0VGltZW91dCkoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dGhyb3cgZXg7XHJcblx0XHRcdH0sIDApO1xyXG5cdFx0fVxyXG5cdFx0LCBmb3JjZV9zYXZlYWJsZV90eXBlID0gXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIlxyXG5cdFx0LCBmc19taW5fc2l6ZSA9IDBcclxuXHRcdC8vIFNlZSBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9Mzc1Mjk3I2M3IGFuZFxyXG5cdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL2VsaWdyZXkvRmlsZVNhdmVyLmpzL2NvbW1pdC80ODU5MzBhI2NvbW1pdGNvbW1lbnQtODc2ODA0N1xyXG5cdFx0Ly8gZm9yIHRoZSByZWFzb25pbmcgYmVoaW5kIHRoZSB0aW1lb3V0IGFuZCByZXZvY2F0aW9uIGZsb3dcclxuXHRcdCwgYXJiaXRyYXJ5X3Jldm9rZV90aW1lb3V0ID0gNTAwIC8vIGluIG1zXHJcblx0XHQsIHJldm9rZSA9IGZ1bmN0aW9uKGZpbGUpIHtcclxuXHRcdFx0dmFyIHJldm9rZXIgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAodHlwZW9mIGZpbGUgPT09IFwic3RyaW5nXCIpIHsgLy8gZmlsZSBpcyBhbiBvYmplY3QgVVJMXHJcblx0XHRcdFx0XHRnZXRfVVJMKCkucmV2b2tlT2JqZWN0VVJMKGZpbGUpO1xyXG5cdFx0XHRcdH0gZWxzZSB7IC8vIGZpbGUgaXMgYSBGaWxlXHJcblx0XHRcdFx0XHRmaWxlLnJlbW92ZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdFx0aWYgKHZpZXcuY2hyb21lKSB7XHJcblx0XHRcdFx0cmV2b2tlcigpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFRpbWVvdXQocmV2b2tlciwgYXJiaXRyYXJ5X3Jldm9rZV90aW1lb3V0KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0LCBkaXNwYXRjaCA9IGZ1bmN0aW9uKGZpbGVzYXZlciwgZXZlbnRfdHlwZXMsIGV2ZW50KSB7XHJcblx0XHRcdGV2ZW50X3R5cGVzID0gW10uY29uY2F0KGV2ZW50X3R5cGVzKTtcclxuXHRcdFx0dmFyIGkgPSBldmVudF90eXBlcy5sZW5ndGg7XHJcblx0XHRcdHdoaWxlIChpLS0pIHtcclxuXHRcdFx0XHR2YXIgbGlzdGVuZXIgPSBmaWxlc2F2ZXJbXCJvblwiICsgZXZlbnRfdHlwZXNbaV1dO1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgbGlzdGVuZXIgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0bGlzdGVuZXIuY2FsbChmaWxlc2F2ZXIsIGV2ZW50IHx8IGZpbGVzYXZlcik7XHJcblx0XHRcdFx0XHR9IGNhdGNoIChleCkge1xyXG5cdFx0XHRcdFx0XHR0aHJvd19vdXRzaWRlKGV4KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdCwgYXV0b19ib20gPSBmdW5jdGlvbihibG9iKSB7XHJcblx0XHRcdC8vIHByZXBlbmQgQk9NIGZvciBVVEYtOCBYTUwgYW5kIHRleHQvKiB0eXBlcyAoaW5jbHVkaW5nIEhUTUwpXHJcblx0XHRcdGlmICgvXlxccyooPzp0ZXh0XFwvXFxTKnxhcHBsaWNhdGlvblxcL3htbHxcXFMqXFwvXFxTKlxcK3htbClcXHMqOy4qY2hhcnNldFxccyo9XFxzKnV0Zi04L2kudGVzdChibG9iLnR5cGUpKSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBCbG9iKFtcIlxcdWZlZmZcIiwgYmxvYl0sIHt0eXBlOiBibG9iLnR5cGV9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gYmxvYjtcclxuXHRcdH1cclxuXHRcdCwgRmlsZVNhdmVyID0gZnVuY3Rpb24oYmxvYiwgbmFtZSwgbm9fYXV0b19ib20pIHtcclxuXHRcdFx0aWYgKCFub19hdXRvX2JvbSkge1xyXG5cdFx0XHRcdGJsb2IgPSBhdXRvX2JvbShibG9iKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBGaXJzdCB0cnkgYS5kb3dubG9hZCwgdGhlbiB3ZWIgZmlsZXN5c3RlbSwgdGhlbiBvYmplY3QgVVJMc1xyXG5cdFx0XHR2YXJcclxuXHRcdFx0XHQgIGZpbGVzYXZlciA9IHRoaXNcclxuXHRcdFx0XHQsIHR5cGUgPSBibG9iLnR5cGVcclxuXHRcdFx0XHQsIGJsb2JfY2hhbmdlZCA9IGZhbHNlXHJcblx0XHRcdFx0LCBvYmplY3RfdXJsXHJcblx0XHRcdFx0LCB0YXJnZXRfdmlld1xyXG5cdFx0XHRcdCwgZGlzcGF0Y2hfYWxsID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRkaXNwYXRjaChmaWxlc2F2ZXIsIFwid3JpdGVzdGFydCBwcm9ncmVzcyB3cml0ZSB3cml0ZWVuZFwiLnNwbGl0KFwiIFwiKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIG9uIGFueSBmaWxlc3lzIGVycm9ycyByZXZlcnQgdG8gc2F2aW5nIHdpdGggb2JqZWN0IFVSTHNcclxuXHRcdFx0XHQsIGZzX2Vycm9yID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRpZiAodGFyZ2V0X3ZpZXcgJiYgaXNfc2FmYXJpICYmIHR5cGVvZiBGaWxlUmVhZGVyICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRcdFx0XHRcdC8vIFNhZmFyaSBkb2Vzbid0IGFsbG93IGRvd25sb2FkaW5nIG9mIGJsb2IgdXJsc1xyXG5cdFx0XHRcdFx0XHR2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHRcdFx0XHRcdFx0cmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBiYXNlNjREYXRhID0gcmVhZGVyLnJlc3VsdDtcclxuXHRcdFx0XHRcdFx0XHR0YXJnZXRfdmlldy5sb2NhdGlvbi5ocmVmID0gXCJkYXRhOmF0dGFjaG1lbnQvZmlsZVwiICsgYmFzZTY0RGF0YS5zbGljZShiYXNlNjREYXRhLnNlYXJjaCgvWyw7XS8pKTtcclxuXHRcdFx0XHRcdFx0XHRmaWxlc2F2ZXIucmVhZHlTdGF0ZSA9IGZpbGVzYXZlci5ET05FO1xyXG5cdFx0XHRcdFx0XHRcdGRpc3BhdGNoX2FsbCgpO1xyXG5cdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0XHRyZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcclxuXHRcdFx0XHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuSU5JVDtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly8gZG9uJ3QgY3JlYXRlIG1vcmUgb2JqZWN0IFVSTHMgdGhhbiBuZWVkZWRcclxuXHRcdFx0XHRcdGlmIChibG9iX2NoYW5nZWQgfHwgIW9iamVjdF91cmwpIHtcclxuXHRcdFx0XHRcdFx0b2JqZWN0X3VybCA9IGdldF9VUkwoKS5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAodGFyZ2V0X3ZpZXcpIHtcclxuXHRcdFx0XHRcdFx0dGFyZ2V0X3ZpZXcubG9jYXRpb24uaHJlZiA9IG9iamVjdF91cmw7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR2YXIgbmV3X3RhYiA9IHZpZXcub3BlbihvYmplY3RfdXJsLCBcIl9ibGFua1wiKTtcclxuXHRcdFx0XHRcdFx0aWYgKG5ld190YWIgPT0gdW5kZWZpbmVkICYmIGlzX3NhZmFyaSkge1xyXG5cdFx0XHRcdFx0XHRcdC8vQXBwbGUgZG8gbm90IGFsbG93IHdpbmRvdy5vcGVuLCBzZWUgaHR0cDovL2JpdC5seS8xa1pmZlJJXHJcblx0XHRcdFx0XHRcdFx0dmlldy5sb2NhdGlvbi5ocmVmID0gb2JqZWN0X3VybFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRmaWxlc2F2ZXIucmVhZHlTdGF0ZSA9IGZpbGVzYXZlci5ET05FO1xyXG5cdFx0XHRcdFx0ZGlzcGF0Y2hfYWxsKCk7XHJcblx0XHRcdFx0XHRyZXZva2Uob2JqZWN0X3VybCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdCwgYWJvcnRhYmxlID0gZnVuY3Rpb24oZnVuYykge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoZmlsZXNhdmVyLnJlYWR5U3RhdGUgIT09IGZpbGVzYXZlci5ET05FKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LCBjcmVhdGVfaWZfbm90X2ZvdW5kID0ge2NyZWF0ZTogdHJ1ZSwgZXhjbHVzaXZlOiBmYWxzZX1cclxuXHRcdFx0XHQsIHNsaWNlXHJcblx0XHRcdDtcclxuXHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuSU5JVDtcclxuXHRcdFx0aWYgKCFuYW1lKSB7XHJcblx0XHRcdFx0bmFtZSA9IFwiZG93bmxvYWRcIjtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoY2FuX3VzZV9zYXZlX2xpbmspIHtcclxuXHRcdFx0XHRvYmplY3RfdXJsID0gZ2V0X1VSTCgpLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHRcdFx0XHRzYXZlX2xpbmsuaHJlZiA9IG9iamVjdF91cmw7XHJcblx0XHRcdFx0c2F2ZV9saW5rLmRvd25sb2FkID0gbmFtZTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0Y2xpY2soc2F2ZV9saW5rKTtcclxuXHRcdFx0XHRcdGRpc3BhdGNoX2FsbCgpO1xyXG5cdFx0XHRcdFx0cmV2b2tlKG9iamVjdF91cmwpO1xyXG5cdFx0XHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuRE9ORTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gT2JqZWN0IGFuZCB3ZWIgZmlsZXN5c3RlbSBVUkxzIGhhdmUgYSBwcm9ibGVtIHNhdmluZyBpbiBHb29nbGUgQ2hyb21lIHdoZW5cclxuXHRcdFx0Ly8gdmlld2VkIGluIGEgdGFiLCBzbyBJIGZvcmNlIHNhdmUgd2l0aCBhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cclxuXHRcdFx0Ly8gaHR0cDovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTExNThcclxuXHRcdFx0Ly8gVXBkYXRlOiBHb29nbGUgZXJyYW50bHkgY2xvc2VkIDkxMTU4LCBJIHN1Ym1pdHRlZCBpdCBhZ2FpbjpcclxuXHRcdFx0Ly8gaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTM4OTY0MlxyXG5cdFx0XHRpZiAodmlldy5jaHJvbWUgJiYgdHlwZSAmJiB0eXBlICE9PSBmb3JjZV9zYXZlYWJsZV90eXBlKSB7XHJcblx0XHRcdFx0c2xpY2UgPSBibG9iLnNsaWNlIHx8IGJsb2Iud2Via2l0U2xpY2U7XHJcblx0XHRcdFx0YmxvYiA9IHNsaWNlLmNhbGwoYmxvYiwgMCwgYmxvYi5zaXplLCBmb3JjZV9zYXZlYWJsZV90eXBlKTtcclxuXHRcdFx0XHRibG9iX2NoYW5nZWQgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIFNpbmNlIEkgY2FuJ3QgYmUgc3VyZSB0aGF0IHRoZSBndWVzc2VkIG1lZGlhIHR5cGUgd2lsbCB0cmlnZ2VyIGEgZG93bmxvYWRcclxuXHRcdFx0Ly8gaW4gV2ViS2l0LCBJIGFwcGVuZCAuZG93bmxvYWQgdG8gdGhlIGZpbGVuYW1lLlxyXG5cdFx0XHQvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NjU0NDBcclxuXHRcdFx0aWYgKHdlYmtpdF9yZXFfZnMgJiYgbmFtZSAhPT0gXCJkb3dubG9hZFwiKSB7XHJcblx0XHRcdFx0bmFtZSArPSBcIi5kb3dubG9hZFwiO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0eXBlID09PSBmb3JjZV9zYXZlYWJsZV90eXBlIHx8IHdlYmtpdF9yZXFfZnMpIHtcclxuXHRcdFx0XHR0YXJnZXRfdmlldyA9IHZpZXc7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCFyZXFfZnMpIHtcclxuXHRcdFx0XHRmc19lcnJvcigpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHRmc19taW5fc2l6ZSArPSBibG9iLnNpemU7XHJcblx0XHRcdHJlcV9mcyh2aWV3LlRFTVBPUkFSWSwgZnNfbWluX3NpemUsIGFib3J0YWJsZShmdW5jdGlvbihmcykge1xyXG5cdFx0XHRcdGZzLnJvb3QuZ2V0RGlyZWN0b3J5KFwic2F2ZWRcIiwgY3JlYXRlX2lmX25vdF9mb3VuZCwgYWJvcnRhYmxlKGZ1bmN0aW9uKGRpcikge1xyXG5cdFx0XHRcdFx0dmFyIHNhdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0ZGlyLmdldEZpbGUobmFtZSwgY3JlYXRlX2lmX25vdF9mb3VuZCwgYWJvcnRhYmxlKGZ1bmN0aW9uKGZpbGUpIHtcclxuXHRcdFx0XHRcdFx0XHRmaWxlLmNyZWF0ZVdyaXRlcihhYm9ydGFibGUoZnVuY3Rpb24od3JpdGVyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR3cml0ZXIub253cml0ZWVuZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRhcmdldF92aWV3LmxvY2F0aW9uLmhyZWYgPSBmaWxlLnRvVVJMKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZpbGVzYXZlci5yZWFkeVN0YXRlID0gZmlsZXNhdmVyLkRPTkU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRpc3BhdGNoKGZpbGVzYXZlciwgXCJ3cml0ZWVuZFwiLCBldmVudCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldm9rZShmaWxlKTtcclxuXHRcdFx0XHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRcdFx0XHR3cml0ZXIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgZXJyb3IgPSB3cml0ZXIuZXJyb3I7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChlcnJvci5jb2RlICE9PSBlcnJvci5BQk9SVF9FUlIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmc19lcnJvcigpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0XHRcdFx0XCJ3cml0ZXN0YXJ0IHByb2dyZXNzIHdyaXRlIGFib3J0XCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0d3JpdGVyW1wib25cIiArIGV2ZW50XSA9IGZpbGVzYXZlcltcIm9uXCIgKyBldmVudF07XHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdHdyaXRlci53cml0ZShibG9iKTtcclxuXHRcdFx0XHRcdFx0XHRcdGZpbGVzYXZlci5hYm9ydCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR3cml0ZXIuYWJvcnQoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuRE9ORTtcclxuXHRcdFx0XHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRcdFx0XHRmaWxlc2F2ZXIucmVhZHlTdGF0ZSA9IGZpbGVzYXZlci5XUklUSU5HO1xyXG5cdFx0XHRcdFx0XHRcdH0pLCBmc19lcnJvcik7XHJcblx0XHRcdFx0XHRcdH0pLCBmc19lcnJvcik7XHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0ZGlyLmdldEZpbGUobmFtZSwge2NyZWF0ZTogZmFsc2V9LCBhYm9ydGFibGUoZnVuY3Rpb24oZmlsZSkge1xyXG5cdFx0XHRcdFx0XHQvLyBkZWxldGUgZmlsZSBpZiBpdCBhbHJlYWR5IGV4aXN0c1xyXG5cdFx0XHRcdFx0XHRmaWxlLnJlbW92ZSgpO1xyXG5cdFx0XHRcdFx0XHRzYXZlKCk7XHJcblx0XHRcdFx0XHR9KSwgYWJvcnRhYmxlKGZ1bmN0aW9uKGV4KSB7XHJcblx0XHRcdFx0XHRcdGlmIChleC5jb2RlID09PSBleC5OT1RfRk9VTkRfRVJSKSB7XHJcblx0XHRcdFx0XHRcdFx0c2F2ZSgpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGZzX2Vycm9yKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pKTtcclxuXHRcdFx0XHR9KSwgZnNfZXJyb3IpO1xyXG5cdFx0XHR9KSwgZnNfZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0LCBGU19wcm90byA9IEZpbGVTYXZlci5wcm90b3R5cGVcclxuXHRcdCwgc2F2ZUFzID0gZnVuY3Rpb24oYmxvYiwgbmFtZSwgbm9fYXV0b19ib20pIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGaWxlU2F2ZXIoYmxvYiwgbmFtZSwgbm9fYXV0b19ib20pO1xyXG5cdFx0fVxyXG5cdDtcclxuXHQvLyBJRSAxMCsgKG5hdGl2ZSBzYXZlQXMpXHJcblx0aWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09IFwidW5kZWZpbmVkXCIgJiYgbmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IpIHtcclxuXHRcdHJldHVybiBmdW5jdGlvbihibG9iLCBuYW1lLCBub19hdXRvX2JvbSkge1xyXG5cdFx0XHRpZiAoIW5vX2F1dG9fYm9tKSB7XHJcblx0XHRcdFx0YmxvYiA9IGF1dG9fYm9tKGJsb2IpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBuYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYihibG9iLCBuYW1lIHx8IFwiZG93bmxvYWRcIik7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0RlNfcHJvdG8uYWJvcnQgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBmaWxlc2F2ZXIgPSB0aGlzO1xyXG5cdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuRE9ORTtcclxuXHRcdGRpc3BhdGNoKGZpbGVzYXZlciwgXCJhYm9ydFwiKTtcclxuXHR9O1xyXG5cdEZTX3Byb3RvLnJlYWR5U3RhdGUgPSBGU19wcm90by5JTklUID0gMDtcclxuXHRGU19wcm90by5XUklUSU5HID0gMTtcclxuXHRGU19wcm90by5ET05FID0gMjtcclxuXHJcblx0RlNfcHJvdG8uZXJyb3IgPVxyXG5cdEZTX3Byb3RvLm9ud3JpdGVzdGFydCA9XHJcblx0RlNfcHJvdG8ub25wcm9ncmVzcyA9XHJcblx0RlNfcHJvdG8ub253cml0ZSA9XHJcblx0RlNfcHJvdG8ub25hYm9ydCA9XHJcblx0RlNfcHJvdG8ub25lcnJvciA9XHJcblx0RlNfcHJvdG8ub253cml0ZWVuZCA9XHJcblx0XHRudWxsO1xyXG5cclxuXHRyZXR1cm4gc2F2ZUFzO1xyXG59KFxyXG5cdCAgIHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGZcclxuXHR8fCB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvd1xyXG5cdHx8IHRoaXMuY29udGVudFxyXG4pKTtcclxuLy8gYHNlbGZgIGlzIHVuZGVmaW5lZCBpbiBGaXJlZm94IGZvciBBbmRyb2lkIGNvbnRlbnQgc2NyaXB0IGNvbnRleHRcclxuLy8gd2hpbGUgYHRoaXNgIGlzIG5zSUNvbnRlbnRGcmFtZU1lc3NhZ2VNYW5hZ2VyXHJcbi8vIHdpdGggYW4gYXR0cmlidXRlIGBjb250ZW50YCB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSB3aW5kb3dcclxuXHJcbmlmICh0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiICYmIG1vZHVsZS5leHBvcnRzKSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMuc2F2ZUFzID0gc2F2ZUFzO1xyXG59IGVsc2UgaWYgKCh0eXBlb2YgZGVmaW5lICE9PSBcInVuZGVmaW5lZFwiICYmIGRlZmluZSAhPT0gbnVsbCkgJiYgKGRlZmluZS5hbWQgIT0gbnVsbCkpIHtcclxuICBkZWZpbmUoW10sIGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHNhdmVBcztcclxuICB9KTtcclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9maWxlc2F2ZXIuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJkZWZpbmUgY2Fubm90IGJlIHVzZWQgaW5kaXJlY3RcIik7IH07XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogKHdlYnBhY2spL2J1aWxkaW4vYW1kLWRlZmluZS5qc1xuICoqIG1vZHVsZSBpZCA9IDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19hbWRfb3B0aW9uc19fO1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqICh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzXG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBDb25zdCBmcm9tICcuL0NvbnN0JztcclxudmFyIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlcjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgICAgIHN1cGVyKGRhdGEpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEZpbHRlciA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUZpbHRlcihkYXRhRmllbGQsIHZhbHVlLCB0eXBlKSB7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyVHlwZSA9IHR5cGUgfHwgQ29uc3QuRklMVEVSX1RZUEUuQ1VTVE9NO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIC8vIHZhbHVlIG9mIHRoZSBmaWx0ZXIgaXMgYW4gb2JqZWN0XHJcbiAgICAgICAgICAgIGxldCBoYXNWYWx1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHByb3AgaW4gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdmFsdWVbcHJvcF0gfHwgdmFsdWVbcHJvcF0gPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBoYXNWYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIG9uZSBvZiB0aGUgb2JqZWN0IHByb3BlcnRpZXMgaXMgdW5kZWZpbmVkIG9yIGVtcHR5LCB3ZSByZW1vdmUgdGhlIGZpbHRlclxyXG4gICAgICAgICAgICAoaGFzVmFsdWUpID8gdGhpcy5jdXJyZW50RmlsdGVyW2RhdGFGaWVsZF0gPSB7dmFsdWU6IHZhbHVlLCB0eXBlOiBmaWx0ZXJUeXBlfSA6IGRlbGV0ZSB0aGlzLmN1cnJlbnRGaWx0ZXJbZGF0YUZpZWxkXTtcclxuICAgICAgICB9IGVsc2UgaWYgKCF2YWx1ZSB8fCB2YWx1ZS50cmltKCkgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuY3VycmVudEZpbHRlcltkYXRhRmllbGRdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEZpbHRlcltkYXRhRmllbGRdID0ge3ZhbHVlOiB2YWx1ZS50cmltKCksIHR5cGU6IGZpbHRlclR5cGV9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVtaXQoJ29uRmlsdGVyQ2hhbmdlJywgdGhpcy5jdXJyZW50RmlsdGVyKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9GaWx0ZXIuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NTZXQgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBDb25zdCBmcm9tICcuL0NvbnN0JztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJztcclxuaW1wb3J0IERhdGVGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL0RhdGUnO1xyXG5pbXBvcnQgVGV4dEZpbHRlciBmcm9tICcuL2ZpbHRlcnMvVGV4dCc7XHJcbmltcG9ydCBTZWxlY3RGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1NlbGVjdCc7XHJcbmltcG9ydCBOdW1iZXJGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL051bWJlcic7XHJcblxyXG5jbGFzcyBUYWJsZUhlYWRlckNvbHVtbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuaGFuZGxlRmlsdGVyID0gdGhpcy5oYW5kbGVGaWx0ZXIuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNvbHVtbkNsaWNrKGUpe1xyXG4gICAgaWYoIXRoaXMucHJvcHMuZGF0YVNvcnQpcmV0dXJuO1xyXG4gICAgbGV0IG9yZGVyID0gdGhpcy5wcm9wcy5zb3J0ID09IENvbnN0LlNPUlRfREVTQz9Db25zdC5TT1JUX0FTQzpDb25zdC5TT1JUX0RFU0M7XHJcbiAgICB0aGlzLnByb3BzLm9uU29ydChvcmRlciwgdGhpcy5wcm9wcy5kYXRhRmllbGQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRmlsdGVyKHZhbHVlLCB0eXBlKSB7XHJcbiAgICB0aGlzLnByb3BzLmZpbHRlci5lbWl0dGVyLmhhbmRsZUZpbHRlcih0aGlzLnByb3BzLmRhdGFGaWVsZCwgdmFsdWUsIHR5cGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RmlsdGVycygpIHtcclxuICAgIHN3aXRjaCAodGhpcy5wcm9wcy5maWx0ZXIudHlwZSkge1xyXG4gICAgICBjYXNlIENvbnN0LkZJTFRFUl9UWVBFLlRFWFQ6IHtcclxuICAgICAgICByZXR1cm4gPFRleHRGaWx0ZXIgey4uLnRoaXMucHJvcHMuZmlsdGVyfSBjb2x1bW5OYW1lPXt0aGlzLnByb3BzLmNoaWxkcmVufSBmaWx0ZXJIYW5kbGVyPXt0aGlzLmhhbmRsZUZpbHRlcn0gLz47XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBDb25zdC5GSUxURVJfVFlQRS5TRUxFQ1Q6IHtcclxuICAgICAgICByZXR1cm4gPFNlbGVjdEZpbHRlciB7Li4udGhpcy5wcm9wcy5maWx0ZXJ9IGNvbHVtbk5hbWU9e3RoaXMucHJvcHMuY2hpbGRyZW59IGZpbHRlckhhbmRsZXI9e3RoaXMuaGFuZGxlRmlsdGVyfSAvPjtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIENvbnN0LkZJTFRFUl9UWVBFLk5VTUJFUjoge1xyXG4gICAgICAgIHJldHVybiA8TnVtYmVyRmlsdGVyIHsuLi50aGlzLnByb3BzLmZpbHRlcn0gY29sdW1uTmFtZT17dGhpcy5wcm9wcy5jaGlsZHJlbn0gZmlsdGVySGFuZGxlcj17dGhpcy5oYW5kbGVGaWx0ZXJ9IC8+O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgQ29uc3QuRklMVEVSX1RZUEUuREFURToge1xyXG4gICAgICAgIHJldHVybiA8RGF0ZUZpbHRlciB7Li4udGhpcy5wcm9wcy5maWx0ZXJ9IGNvbHVtbk5hbWU9e3RoaXMucHJvcHMuY2hpbGRyZW59IGZpbHRlckhhbmRsZXI9e3RoaXMuaGFuZGxlRmlsdGVyfSAvPjtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIENvbnN0LkZJTFRFUl9UWVBFLkNVU1RPTToge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmZpbHRlci5nZXRFbGVtZW50KHRoaXMuaGFuZGxlRmlsdGVyLCB0aGlzLnByb3BzLmZpbHRlci5jdXN0b21GaWx0ZXJQYXJhbWV0ZXJzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgIHRoaXMucmVmcy5pbm5lckRpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWZpZWxkXCIsIHRoaXMucHJvcHMuZGF0YUZpZWxkKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpe1xyXG4gICAgdmFyIHdpZHRoID0gdGhpcy5wcm9wcy53aWR0aCE9PW51bGw/cGFyc2VJbnQodGhpcy5wcm9wcy53aWR0aCk6bnVsbDtcclxuICAgIHZhciB0aFN0eWxlID0ge1xyXG4gICAgICB0ZXh0QWxpZ246IHRoaXMucHJvcHMuZGF0YUFsaWduLFxyXG4gICAgICBkaXNwbGF5OiB0aGlzLnByb3BzLmhpZGRlbj9cIm5vbmVcIjpudWxsLFxyXG4gICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgIG1heFdpZHRoOiB3aWR0aFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkZWZhdWx0Q2FyZXQgPSAoIXRoaXMucHJvcHMuZGF0YVNvcnQpID8gbnVsbCA6IChcclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3JkZXJcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZXRcIiBzdHlsZT17e21hcmdpbjogJzEwcHggMCAxMHB4IDVweCcsIGNvbG9yOiAnI2NjYyd9fT48L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRyb3B1cFwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZXRcIiBzdHlsZT17e21hcmdpbjogJzEwcHggMCcsIGNvbG9yOiAnI2NjYyd9fT48L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICApO1xyXG4gICAgY29uc3Qgc29ydENhcmV0ID0gdGhpcy5wcm9wcy5zb3J0ID8gVXRpbC5yZW5kZXJSZWFjdFNvcnRDYXJldCh0aGlzLnByb3BzLnNvcnQpIDogZGVmYXVsdENhcmV0O1xyXG5cclxuICAgIHZhciBjbGFzc2VzID0gdGhpcy5wcm9wcy5jbGFzc05hbWUrXCIgXCIrKHRoaXMucHJvcHMuZGF0YVNvcnQ/XCJzb3J0LWNvbHVtblwiOlwiXCIpO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8dGggcmVmPSdoZWFkZXItY29sJyBjbGFzc05hbWU9e2NsYXNzZXN9IHN0eWxlPXt0aFN0eWxlfT5cclxuICAgICAgICA8ZGl2IHJlZj1cImlubmVyRGl2XCIgY2xhc3NOYW1lPVwidGgtaW5uZXIgdGFibGUtaGVhZGVyLWNvbHVtblwiXHJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNvbHVtbkNsaWNrLmJpbmQodGhpcyl9PlxyXG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59e3NvcnRDYXJldH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7dGhpcy5wcm9wcy5maWx0ZXIgPyB0aGlzLmdldEZpbHRlcnMoKSA6IG51bGx9XHJcbiAgICAgIDwvdGg+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG52YXIgZmlsdGVyVHlwZUFycmF5ID0gW107XHJcbmZvciAobGV0IGtleSBpbiBDb25zdC5GSUxURVJfVFlQRSkge1xyXG4gIGZpbHRlclR5cGVBcnJheS5wdXNoKENvbnN0LkZJTFRFUl9UWVBFW2tleV0pO1xyXG59XHJcblxyXG5UYWJsZUhlYWRlckNvbHVtbi5wcm9wVHlwZXMgPSB7XHJcbiAgZGF0YUZpZWxkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGRhdGFBbGlnbjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcclxuICBkYXRhU29ydDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXHJcbiAgb25Tb3J0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcclxuICBkYXRhRm9ybWF0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcclxuICBpc0tleTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXHJcbiAgZWRpdGFibGU6IFJlYWN0LlByb3BUeXBlcy5hbnksXHJcbiAgaGlkZGVuOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcclxuICBjbGFzc05hbWU6UmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcclxuICB3aWR0aDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcclxuICBzb3J0RnVuYzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXHJcbiAgY29sdW1uQ2xhc3NOYW1lOiBSZWFjdC5Qcm9wVHlwZXMuYW55LFxyXG4gIGZpbHRlckZvcm1hdHRlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXHJcbiAgc29ydDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcclxuICBmb3JtYXRFeHRyYURhdGE6IFJlYWN0LlByb3BUeXBlcy5hbnksXHJcbiAgZmlsdGVyOiBSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgdHlwZTogUmVhY3QuUHJvcFR5cGVzLm9uZU9mKGZpbHRlclR5cGVBcnJheSksXHJcbiAgICBkZWxheTogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcclxuICAgIG9wdGlvbnM6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LCAvLyBmb3IgU2VsZWN0RmlsdGVyXHJcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5hcnJheU9mKFJlYWN0LlByb3BUeXBlcy5udW1iZXIpIC8vZm9yIE51bWJlckZpbHRlclxyXG4gICAgICAgIF0pLFxyXG4gICAgbnVtYmVyQ29tcGFyYXRvcnM6IFJlYWN0LlByb3BUeXBlcy5hcnJheU9mKFJlYWN0LlByb3BUeXBlcy5zdHJpbmcpLFxyXG4gICAgZW1pdHRlcjogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIHBsYWNlaG9sZGVyOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZ2V0RWxlbWVudDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBjdXN0b21GaWx0ZXJQYXJhbWV0ZXJzOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XHJcbiAgfSlcclxufTtcclxuXHJcblRhYmxlSGVhZGVyQ29sdW1uLmRlZmF1bHRQcm9wcyA9IHtcclxuICBkYXRhQWxpZ246IFwibGVmdFwiLFxyXG4gIGRhdGFTb3J0OiBmYWxzZSxcclxuICBkYXRhRm9ybWF0OiB1bmRlZmluZWQsXHJcbiAgaXNLZXk6IGZhbHNlLFxyXG4gIGVkaXRhYmxlOiB0cnVlLFxyXG4gIG9uU29ydDogdW5kZWZpbmVkLFxyXG4gIGhpZGRlbjogZmFsc2UsXHJcbiAgY2xhc3NOYW1lOiBcIlwiLFxyXG4gIHdpZHRoOiBudWxsLFxyXG4gIHNvcnRGdW5jOiB1bmRlZmluZWQsXHJcbiAgY29sdW1uQ2xhc3NOYW1lOiAnJyxcclxuICBmaWx0ZXJGb3JtYXR0ZWQ6IGZhbHNlLFxyXG4gIHNvcnQ6IHVuZGVmaW5lZCxcclxuICBmb3JtYXRFeHRyYURhdGE6IHVuZGVmaW5lZCxcclxuICBmaWx0ZXI6IHVuZGVmaW5lZFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFibGVIZWFkZXJDb2x1bW47XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL1RhYmxlSGVhZGVyQ29sdW1uLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvbnN0IGZyb20gJy4uL0NvbnN0JztcclxuXHJcbmNsYXNzIERhdGVGaWx0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5maWx0ZXIgPSB0aGlzLmZpbHRlci5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERlZmF1bHREYXRlKCkge1xyXG4gICAgICAgIGxldCBkZWZhdWx0RGF0ZSAgPSBcIlwiO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSkge1xyXG4gICAgICAgICAgICAvLyBTZXQgdGhlIGFwcHJvcHJpYXRlIGZvcm1hdCBmb3IgdGhlIGlucHV0IHR5cGU9ZGF0ZSwgaS5lLiBcIllZWVktTU0tRERcIlxyXG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSBuZXcgRGF0ZSh0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSk7XHJcbiAgICAgICAgICAgIGRlZmF1bHREYXRlID0gYCR7ZGVmYXVsdFZhbHVlLmdldEZ1bGxZZWFyKCl9LSR7KFwiMFwiICsgKGRlZmF1bHRWYWx1ZS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKX0tJHsoXCIwXCIgKyBkZWZhdWx0VmFsdWUuZ2V0RGF0ZSgpKS5zbGljZSgtMil9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHREYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlcihldmVudCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGVWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICBpZiAoZGF0ZVZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZmlsdGVySGFuZGxlcihuZXcgRGF0ZShkYXRlVmFsdWUpLCBDb25zdC5GSUxURVJfVFlQRS5EQVRFKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmZpbHRlckhhbmRsZXIobnVsbCwgQ29uc3QuRklMVEVSX1RZUEUuREFURSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGVWYWx1ZSA9IHRoaXMucmVmcy5pbnB1dERhdGUuZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgIGlmIChkYXRlVmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5maWx0ZXJIYW5kbGVyKG5ldyBEYXRlKGRhdGVWYWx1ZSksIENvbnN0LkZJTFRFUl9UWVBFLkRBVEUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGlucHV0IHJlZj1cImlucHV0RGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWx0ZXIgZGF0ZS1maWx0ZXIgZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmZpbHRlcn1cclxuICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5zZXREZWZhdWx0RGF0ZSgpfSAvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5EYXRlRmlsdGVyLnByb3BUeXBlcyA9IHtcclxuICAgIGZpbHRlckhhbmRsZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBkZWZhdWx0VmFsdWU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBjb2x1bW5OYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRlRmlsdGVyO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9maWx0ZXJzL0RhdGUuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29uc3QgZnJvbSAnLi4vQ29uc3QnO1xyXG5cclxuY2xhc3MgVGV4dEZpbHRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuZmlsdGVyID0gdGhpcy5maWx0ZXIuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMudGltZW91dCA9IG51bGw7XHJcblx0fVxyXG5cclxuXHRmaWx0ZXIoZXZlbnQpIHtcclxuXHRcdGlmICh0aGlzLnRpbWVvdXQpIHtcclxuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XHJcblx0XHR9XHJcblx0XHRjb25zdCBzZWxmID0gdGhpcztcclxuXHRcdGNvbnN0IGZpbHRlclZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG5cdFx0dGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0c2VsZi5wcm9wcy5maWx0ZXJIYW5kbGVyKGZpbHRlclZhbHVlLCBDb25zdC5GSUxURVJfVFlQRS5URVhUKTtcclxuXHRcdH0sIHNlbGYucHJvcHMuZGVsYXkpO1xyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHRpZiAodGhpcy5yZWZzLmlucHV0VGV4dC5kZWZhdWx0VmFsdWUpIHtcclxuXHRcdFx0dGhpcy5wcm9wcy5maWx0ZXJIYW5kbGVyKHRoaXMucmVmcy5pbnB1dFRleHQuZGVmYXVsdFZhbHVlLCBDb25zdC5GSUxURVJfVFlQRS5URVhUKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxpbnB1dCByZWY9XCJpbnB1dFRleHRcIlxyXG5cdFx0XHRcdCAgIGNsYXNzTmFtZT1cImZpbHRlciB0ZXh0LWZpbHRlciBmb3JtLWNvbnRyb2xcIlxyXG5cdFx0XHRcdCAgIHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHQgICBvbkNoYW5nZT17dGhpcy5maWx0ZXJ9XHJcblx0XHRcdFx0ICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXIgfHwgYEVudGVyICR7dGhpcy5wcm9wcy5jb2x1bW5OYW1lfS4uLmB9XHJcblx0XHRcdFx0ICAgZGVmYXVsdFZhbHVlPXsodGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUpID8gdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUgOiBcIlwifSAvPlxyXG5cdFx0KTtcclxuXHR9XHJcbn07XHJcblxyXG5UZXh0RmlsdGVyLnByb3BUeXBlcyA9IHtcclxuXHRmaWx0ZXJIYW5kbGVyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG5cdGRlZmF1bHRWYWx1ZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcclxuXHRkZWxheTogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcclxuXHRwbGFjZWhvbGRlcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcclxuXHRjb2x1bW5OYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXHJcbn07XHJcblxyXG5UZXh0RmlsdGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuXHRkZWxheTogQ29uc3QuRklMVEVSX0RFTEFZXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHRGaWx0ZXI7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2ZpbHRlcnMvVGV4dC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc1NldCBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IENvbnN0IGZyb20gJy4uL0NvbnN0JztcclxuXHJcbmNsYXNzIFNlbGVjdEZpbHRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuZmlsdGVyID0gdGhpcy5maWx0ZXIuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdGlzUGxhY2Vob2xkZXJTZWxlY3RlZDogKHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlID09IHVuZGVmaW5lZCB8fFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQhdGhpcy5wcm9wcy5vcHRpb25zLmhhc093blByb3BlcnR5KHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlKSlcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRmaWx0ZXIoZXZlbnQpIHtcclxuXHRcdHRoaXMuc2V0U3RhdGUoe2lzUGxhY2Vob2xkZXJTZWxlY3RlZDogKGV2ZW50LnRhcmdldC52YWx1ZSA9PT0gXCJcIil9KTtcclxuXHRcdHRoaXMucHJvcHMuZmlsdGVySGFuZGxlcihldmVudC50YXJnZXQudmFsdWUsIENvbnN0LkZJTFRFUl9UWVBFLlNFTEVDVCk7XHJcblx0fVxyXG5cclxuXHRnZXRPcHRpb25zKCkge1xyXG5cdFx0bGV0IG9wdGlvblRhZ3MgPSBbXTtcclxuXHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLnByb3BzLm9wdGlvbnM7XHJcblx0XHRvcHRpb25UYWdzLnB1c2goPG9wdGlvbiBrZXk9XCItMVwiIHZhbHVlPVwiXCI+e3RoaXMucHJvcHMucGxhY2Vob2xkZXIgfHwgYFNlbGVjdCAke3RoaXMucHJvcHMuY29sdW1uTmFtZX0uLi5gfTwvb3B0aW9uPik7XHJcblx0XHRPYmplY3Qua2V5cyhvcHRpb25zKS5tYXAoKGtleSkgPT4ge1xyXG5cdFx0XHRvcHRpb25UYWdzLnB1c2goPG9wdGlvbiBrZXk9e2tleX0gdmFsdWU9e2tleX0+e29wdGlvbnNba2V5XX08L29wdGlvbj4pO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gb3B0aW9uVGFncztcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0aWYgKHRoaXMucmVmcy5zZWxlY3RJbnB1dC52YWx1ZSkge1xyXG5cdFx0XHR0aGlzLnByb3BzLmZpbHRlckhhbmRsZXIodGhpcy5yZWZzLnNlbGVjdElucHV0LnZhbHVlLCBDb25zdC5GSUxURVJfVFlQRS5TRUxFQ1QpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0dmFyIHNlbGVjdENsYXNzID0gY2xhc3NTZXQoXCJmaWx0ZXJcIiwgXCJzZWxlY3QtZmlsdGVyXCIsIFwiZm9ybS1jb250cm9sXCIsXHJcblx0XHRcdFx0XHRcdFx0e1wicGxhY2Vob2xkZXItc2VsZWN0ZWRcIjogdGhpcy5zdGF0ZS5pc1BsYWNlaG9sZGVyU2VsZWN0ZWR9KTtcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8c2VsZWN0IHJlZj1cInNlbGVjdElucHV0XCJcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17c2VsZWN0Q2xhc3N9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5maWx0ZXJ9XHJcblx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9eyh0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSAhPSB1bmRlZmluZWQpID8gdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUgOiBcIlwifT5cclxuXHRcdFx0XHR7dGhpcy5nZXRPcHRpb25zKCl9XHJcblx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0KTtcclxuXHR9XHJcbn07XHJcblxyXG5TZWxlY3RGaWx0ZXIucHJvcFR5cGVzID0ge1xyXG5cdGZpbHRlckhhbmRsZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcblx0b3B0aW9uczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG5cdHBsYWNlaG9sZGVyOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG5cdGNvbHVtbk5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdEZpbHRlcjtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZmlsdGVycy9TZWxlY3QuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NTZXQgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBDb25zdCBmcm9tICcuLi9Db25zdCc7XHJcblxyXG5jb25zdCBsZWdhbENvbXBhcmF0b3JzID0gW1wiPVwiLCBcIj5cIiwgXCI+PVwiLCBcIjxcIiwgXCI8PVwiLCBcIiE9XCJdO1xyXG5cclxuY2xhc3MgTnVtYmVyRmlsdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMubnVtYmVyQ29tcGFyYXRvcnMgPSB0aGlzLnByb3BzLm51bWJlckNvbXBhcmF0b3JzIHx8IGxlZ2FsQ29tcGFyYXRvcnM7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNQbGFjZWhvbGRlclNlbGVjdGVkOiAodGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUgPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlLm51bWJlciA9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMub3B0aW9ucyAmJiB0aGlzLnByb3BzLm9wdGlvbnMuaW5kZXhPZih0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZS5udW1iZXIpID09IC0xKSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VOdW1iZXIgPSB0aGlzLm9uQ2hhbmdlTnVtYmVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZU51bWJlclNldCA9IHRoaXMub25DaGFuZ2VOdW1iZXJTZXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlQ29tcGFyYXRvciA9IHRoaXMub25DaGFuZ2VDb21wYXJhdG9yLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2VOdW1iZXIoZXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5yZWZzLm51bWJlckZpbHRlckNvbXBhcmF0b3IudmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy50aW1lb3V0KSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZWxmLnByb3BzLmZpbHRlckhhbmRsZXIoe251bWJlcjogZmlsdGVyVmFsdWUsIGNvbXBhcmF0b3I6IHNlbGYucmVmcy5udW1iZXJGaWx0ZXJDb21wYXJhdG9yLnZhbHVlfSxcclxuICAgICAgICAgICAgICAgIENvbnN0LkZJTFRFUl9UWVBFLk5VTUJFUik7XHJcbiAgICAgICAgfSwgc2VsZi5wcm9wcy5kZWxheSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2VOdW1iZXJTZXQoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtpc1BsYWNlaG9sZGVyU2VsZWN0ZWQ6IChldmVudC50YXJnZXQudmFsdWUgPT09IFwiXCIpfSk7XHJcbiAgICAgICAgaWYgKHRoaXMucmVmcy5udW1iZXJGaWx0ZXJDb21wYXJhdG9yLnZhbHVlID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9wcy5maWx0ZXJIYW5kbGVyKHtudW1iZXI6IGV2ZW50LnRhcmdldC52YWx1ZSwgY29tcGFyYXRvcjogdGhpcy5yZWZzLm51bWJlckZpbHRlckNvbXBhcmF0b3IudmFsdWV9LFxyXG4gICAgICAgICAgICBDb25zdC5GSUxURVJfVFlQRS5OVU1CRVIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlQ29tcGFyYXRvcihldmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLnJlZnMubnVtYmVyRmlsdGVyLnZhbHVlID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9wcy5maWx0ZXJIYW5kbGVyKHtudW1iZXI6IHRoaXMucmVmcy5udW1iZXJGaWx0ZXIudmFsdWUsIGNvbXBhcmF0b3I6IGV2ZW50LnRhcmdldC52YWx1ZX0sXHJcbiAgICAgICAgICAgIENvbnN0LkZJTFRFUl9UWVBFLk5VTUJFUik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29tcGFyYXRvck9wdGlvbnMoKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvblRhZ3MgPSBbXTtcclxuICAgICAgICBvcHRpb25UYWdzLnB1c2goPG9wdGlvbiBrZXk9XCItMVwiPjwvb3B0aW9uPik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bWJlckNvbXBhcmF0b3JzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG9wdGlvblRhZ3MucHVzaCg8b3B0aW9uIGtleT17aX0gdmFsdWU9e3RoaXMubnVtYmVyQ29tcGFyYXRvcnNbaV19Pnt0aGlzLm51bWJlckNvbXBhcmF0b3JzW2ldfTwvb3B0aW9uPik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gb3B0aW9uVGFncztcclxuICAgIH1cclxuXHJcbiAgICBnZXROdW1iZXJPcHRpb25zKCkge1xyXG4gICAgICAgIGxldCBvcHRpb25UYWdzID0gW107XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMucHJvcHMub3B0aW9ucztcclxuXHJcbiAgICAgICAgb3B0aW9uVGFncy5wdXNoKDxvcHRpb24ga2V5PVwiLTFcIiB2YWx1ZT1cIlwiPnt0aGlzLnByb3BzLnBsYWNlaG9sZGVyIHx8IGBTZWxlY3QgJHt0aGlzLnByb3BzLmNvbHVtbk5hbWV9Li4uYH08L29wdGlvbj4pO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBvcHRpb25UYWdzLnB1c2goPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtvcHRpb25zW2ldfT57b3B0aW9uc1tpXX08L29wdGlvbj4pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvblRhZ3M7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVmcy5udW1iZXJGaWx0ZXJDb21wYXJhdG9yLnZhbHVlICYmIHRoaXMucmVmcy5udW1iZXJGaWx0ZXIudmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5maWx0ZXJIYW5kbGVyKHtudW1iZXI6IHRoaXMucmVmcy5udW1iZXJGaWx0ZXIudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBjb21wYXJhdG9yOiB0aGlzLnJlZnMubnVtYmVyRmlsdGVyQ29tcGFyYXRvci52YWx1ZX0sXHJcbiAgICAgICAgICAgICAgICBDb25zdC5GSUxURVJfVFlQRS5OVU1CRVIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIHNlbGVjdENsYXNzID0gY2xhc3NTZXQoXCJzZWxlY3QtZmlsdGVyXCIsIFwibnVtYmVyLWZpbHRlci1pbnB1dFwiLCBcImZvcm0tY29udHJvbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcInBsYWNlaG9sZGVyLXNlbGVjdGVkXCI6IHRoaXMuc3RhdGUuaXNQbGFjZWhvbGRlclNlbGVjdGVkIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlciBudW1iZXItZmlsdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IHJlZj1cIm51bWJlckZpbHRlckNvbXBhcmF0b3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJudW1iZXItZmlsdGVyLWNvbXBhcmF0b3IgZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VDb21wYXJhdG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9eyh0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSkgPyB0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZS5jb21wYXJhdG9yIDogXCJcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuZ2V0Q29tcGFyYXRvck9wdGlvbnMoKX1cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgeyh0aGlzLnByb3BzLm9wdGlvbnMpID8gPHNlbGVjdCByZWY9XCJudW1iZXJGaWx0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3NlbGVjdENsYXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZU51bWJlclNldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXsodGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlLm51bWJlciA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5nZXROdW1iZXJPcHRpb25zKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD4gOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9XCJudW1iZXJGaWx0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm51bWJlci1maWx0ZXItaW5wdXQgZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlciB8fCBgRW50ZXIgJHt0aGlzLnByb3BzLmNvbHVtbk5hbWV9Li4uYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZU51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9eyh0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUubnVtYmVyIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJ9IC8+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59O1xyXG5cclxuTnVtYmVyRmlsdGVyLnByb3BUeXBlcyA9IHtcclxuICAgIGZpbHRlckhhbmRsZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBvcHRpb25zOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXlPZihSZWFjdC5Qcm9wVHlwZXMubnVtYmVyKSxcclxuICAgIGRlZmF1bHRWYWx1ZTogUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBudW1iZXI6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgY29tcGFyYXRvcjogUmVhY3QuUHJvcFR5cGVzLm9uZU9mKGxlZ2FsQ29tcGFyYXRvcnMpXHJcbiAgICB9KSxcclxuICAgIGRlbGF5OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgbnVtYmVyQ29tcGFyYXRvcnM6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSkge1xyXG4gICAgICAgIGlmICghcHJvcHNbcHJvcE5hbWVdKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wc1twcm9wTmFtZV0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNvbXBhcmF0b3JJc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVnYWxDb21wYXJhdG9ycy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxlZ2FsQ29tcGFyYXRvcnNbal0gPT09IHByb3BzW3Byb3BOYW1lXVtpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBhcmF0b3JJc1ZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWNvbXBhcmF0b3JJc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKGBOdW1iZXIgY29tcGFyYXRvciBwcm92aWRlZCBpcyBub3Qgc3VwcG9ydGVkLiBVc2Ugb25seSAke2xlZ2FsQ29tcGFyYXRvcnN9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcGxhY2Vob2xkZXI6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjb2x1bW5OYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXHJcbn07XHJcblxyXG5OdW1iZXJGaWx0ZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgZGVsYXk6IENvbnN0LkZJTFRFUl9ERUxBWVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRmlsdGVyO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9maWx0ZXJzL051bWJlci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=