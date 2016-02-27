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
	      currPage: this.props.options.page || 1,
	      sizePerPage: this.props.options.sizePerPage || _Const2['default'].SIZE_PER_PAGE_LIST[0],
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
	          sizePerPage = this.state.sizePerPage;
	          page = this.state.currPage;
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
	          data: data,
	          currPage: page,
	          sizePerPage: sizePerPage
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
	          { className: 'react-bs-table-container',
	            onMouseEnter: this.handleMouseEnter.bind(this),
	            onMouseLeave: this.handleMouseLeave.bind(this),
	            style: style },
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
	            onRowMouseOver: this.handleRowMouseOver.bind(this),
	            onRowMouseOut: this.handleRowMouseOut.bind(this),
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
	        data: result,
	        currPage: page,
	        sizePerPage: sizePerPage
	      });
	    }
	  }, {
	    key: 'handleMouseLeave',
	    value: function handleMouseLeave() {
	      if (this.props.options.onMouseLeave) {
	        this.props.options.onMouseLeave();
	      }
	    }
	  }, {
	    key: 'handleMouseEnter',
	    value: function handleMouseEnter() {
	      if (this.props.options.onMouseEnter) {
	        this.props.options.onMouseEnter();
	      }
	    }
	  }, {
	    key: 'handleRowMouseOut',
	    value: function handleRowMouseOut(row) {
	      if (this.props.options.onRowMouseOut) {
	        this.props.options.onRowMouseOut(row);
	      }
	    }
	  }, {
	    key: 'handleRowMouseOver',
	    value: function handleRowMouseOver(row) {
	      if (this.props.options.onRowMouseOver) {
	        this.props.options.onRowMouseOver(row);
	      }
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
	        result = this.store.page(1, this.state.sizePerPage).get();
	      } else {
	        result = this.store.get();
	      }
	      this.setState({
	        data: result,
	        currPage: 1
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
	        var sizePerPage = this.state.sizePerPage;
	
	        var currLastPage = Math.ceil(this.store.getDataNum() / sizePerPage);
	        result = this.store.page(currLastPage, sizePerPage).get();
	        this.setState({
	          data: result,
	          currPage: currLastPage
	        });
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
	      return this.state.sizePerPage;
	    }
	  }, {
	    key: 'getCurrentPage',
	    value: function getCurrentPage() {
	      return this.state.currPage;
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
	        var sizePerPage = this.state.sizePerPage;
	        var currPage = this.state.currPage;
	
	        var currLastPage = Math.ceil(this.store.getDataNum() / sizePerPage);
	        if (currPage > currLastPage) currPage = currLastPage;
	        result = this.store.page(currPage, sizePerPage).get();
	        this.setState({
	          data: result,
	          selectedRowKeys: this.store.getSelectedRowKeys(),
	          currPage: currPage
	        });
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
	        var sizePerPage = this.state.sizePerPage;
	
	        result = this.store.page(1, sizePerPage).get();
	      } else {
	        result = this.store.get();
	      }
	      if (this.props.options.afterColumnFilter) this.props.options.afterColumnFilter(filterObj, this.store.getDataIgnoringPagination());
	      this.setState({
	        data: result,
	        currPage: 1
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
	        var sizePerPage = this.state.sizePerPage;
	
	        result = this.store.page(1, sizePerPage).get();
	      } else {
	        result = this.store.get();
	      }
	      if (this.props.options.afterSearch) this.props.options.afterSearch(searchText, this.store.getDataIgnoringPagination());
	      this.setState({
	        data: result,
	        currPage: 1
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
	            currPage: this.state.currPage,
	            changePage: this.handlePaginationData.bind(this),
	            sizePerPage: this.state.sizePerPage,
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
	    onMouseLeave: undefined,
	    onMouseEnter: undefined,
	    onRowMouseOut: undefined,
	    onRowMouseOver: undefined,
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
	            onRowMouseOver: this.handleRowMouseOver.bind(this),
	            onRowMouseOut: this.handleRowMouseOut.bind(this),
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
	    key: 'handleRowMouseOut',
	    value: function handleRowMouseOut(rowIndex) {
	      var key, selectedRow;
	      this.props.data.forEach(function (row, i) {
	        if (i == rowIndex - 1) {
	          key = row[this.props.keyField];
	          selectedRow = row;
	        }
	      }, this);
	      this.props.onRowMouseOut(selectedRow);
	    }
	  }, {
	    key: 'handleRowMouseOver',
	    value: function handleRowMouseOver(rowIndex) {
	      var key, selectedRow;
	      this.props.data.forEach(function (row, i) {
	        if (i == rowIndex - 1) {
	          key = row[this.props.keyField];
	          selectedRow = row;
	        }
	      }, this);
	      this.props.onRowMouseOver(selectedRow);
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
	
	      if (e.target.tagName !== "INPUT" && e.target.tagName !== "SELECT" && e.target.tagName !== "TEXTAREA") {
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
	    key: 'rowMouseOut',
	    value: function rowMouseOut(e) {
	      if (this.props.onRowMouseOut) {
	        this.props.onRowMouseOut(e.currentTarget.rowIndex);
	      }
	    }
	  }, {
	    key: 'rowMouseOver',
	    value: function rowMouseOver(e) {
	      if (this.props.onRowMouseOver) {
	        this.props.onRowMouseOver(e.currentTarget.rowIndex);
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
	          _extends({}, trCss, {
	            onMouseOver: this.rowMouseOver.bind(this),
	            onMouseOut: this.rowMouseOut.bind(this),
	            onClick: this.rowClick.bind(this) }),
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
	
	  function PaginationList() {
	    _classCallCheck(this, PaginationList);
	
	    _get(Object.getPrototypeOf(PaginationList.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(PaginationList, [{
	    key: 'changePage',
	    value: function changePage(page) {
	      if (page == this.props.prePage) {
	        page = this.props.currPage - 1 < 1 ? 1 : this.props.currPage - 1;
	      } else if (page == this.props.nextPage) {
	        page = this.props.currPage + 1 > this.totalPages ? this.totalPages : this.props.currPage + 1;
	      } else if (page == this.props.lastPage) {
	        page = this.totalPages;
	      } else if (page == this.props.firstPage) {
	        page = 1;
	      } else {
	        page = parseInt(page);
	      }
	
	      if (page != this.props.currPage) {
	        this.props.changePage(page, this.props.sizePerPage);
	      }
	    }
	  }, {
	    key: 'changeSizePerPage',
	    value: function changeSizePerPage(e) {
	      e.preventDefault();
	
	      var selectSize = parseInt(e.currentTarget.text);
	      var currPage = this.props.currPage;
	
	      if (selectSize != this.props.sizePerPage) {
	        this.totalPages = Math.ceil(this.props.dataSize / selectSize);
	        if (currPage > this.totalPages) currPage = this.totalPages;
	
	        this.props.changePage(currPage, selectSize);
	        if (this.props.onSizePerPageList) {
	          this.props.onSizePerPageList(selectSize);
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      this.totalPages = Math.ceil(this.props.dataSize / this.props.sizePerPage);
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
	              this.props.sizePerPage,
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
	        var isActive = page === this.props.currPage;
	        var disabled = false;
	        var hidden = false;
	        if (this.props.currPage == 1 && (page === this.props.firstPage || page === this.props.prePage)) {
	          disabled = true;
	          hidden = true;
	        }
	        if (this.props.currPage == this.totalPages && (page === this.props.nextPage || page === this.props.lastPage)) {
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
	
	      startPage = Math.max(this.props.currPage - Math.floor(this.props.paginationSize / 2), 1);
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
	      return this.props.currPage;
	    }
	  }, {
	    key: 'getSizePerPage',
	    value: function getSizePerPage() {
	      return this.props.sizePerPage;
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
	        }, function () {
	          document.querySelector("." + "modal-backdrop").click();
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
	
	        if (this.multiColumnSearch) {
	          searchTextArray = searchText.split(' ');
	        } else {
	          searchTextArray.push(searchText);
	        }
	
	        this.filteredData = this.data.filter(function (row) {
	          var keys = Object.keys(row);
	          var valid = false;
	          // Changed `for .. in` loop to use `Object.keys`
	
	          var _loop = function (i) {
	            var key = keys[i];
	            if (_this3.colInfos[key] && row[key]) {
	              searchTextArray.forEach(function (text) {
	                var filterVal = text.toLowerCase();
	                var targetVal = row[key];
	                var _colInfos$key2 = _this3.colInfos[key];
	                var format = _colInfos$key2.format;
	                var filterFormatted = _colInfos$key2.filterFormatted;
	                var formatExtraData = _colInfos$key2.formatExtraData;
	
	                if (filterFormatted && format) {
	                  targetVal = format(targetVal, row, formatExtraData);
	                }
	                if (targetVal.toString().toLowerCase().indexOf(filterVal) !== -1) {
	                  valid = true;
	                }
	              });
	              if (valid) return 'break';
	            }
	          };
	
	          for (var i = 0; i < keys.length; i++) {
	            var _ret = _loop(i);
	
	            if (_ret === 'break') break;
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
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5ZTQ1ODE5MWQxOTkxNDU3NTI0YyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Jvb3RzdHJhcFRhYmxlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9Iiwid2VicGFjazovLy8uL34vY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RhYmxlSGVhZGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdERPTVwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1kb21cIixcImNvbW1vbmpzXCI6XCJyZWFjdC1kb21cIixcImFtZFwiOlwicmVhY3QtZG9tXCJ9Iiwid2VicGFjazovLy8uL3NyYy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9TZWxlY3RSb3dIZWFkZXJDb2x1bW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RhYmxlQm9keS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVGFibGVSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RhYmxlQ29sdW1uLmpzIiwid2VicGFjazovLy8uL3NyYy9UYWJsZUVkaXRDb2x1bW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtdG9hc3RyL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXRvYXN0ci9saWIvVG9hc3RDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC10b2FzdHIvfi9yZWFjdC1hZGRvbnMtdXBkYXRlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL3VwZGF0ZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL34vbm9kZS1saWJzLWJyb3dzZXIvfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC9saWIvT2JqZWN0LmFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L34vZmJqcy9saWIva2V5T2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC9+L2ZianMvbGliL2ludmFyaWFudC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXRvYXN0ci9saWIvVG9hc3RNZXNzYWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtdG9hc3RyL2xpYi9Ub2FzdE1lc3NhZ2UvYW5pbWF0aW9uTWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC9saWIvUmVhY3RUcmFuc2l0aW9uRXZlbnRzLmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qvfi9mYmpzL2xpYi9FeGVjdXRpb25FbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXRvYXN0ci9+L2VsZW1lbnQtY2xhc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC10b2FzdHIvbGliL1RvYXN0TWVzc2FnZS9qUXVlcnlNaXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnaW5hdGlvbi9QYWdpbmF0aW9uTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnaW5hdGlvbi9QYWdlQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy90b29sYmFyL1Rvb2xCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RhYmxlRmlsdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9UYWJsZURhdGFTdG9yZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL34vbm9kZS1saWJzLWJyb3dzZXIvfi9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3ZfZXhwb3J0X3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpbGVzYXZlci5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vYW1kLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVGFibGVIZWFkZXJDb2x1bW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpbHRlcnMvRGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmlsdGVycy9UZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9maWx0ZXJzL1NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmlsdGVycy9OdW1iZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7MkNDdEMyQixDQUFrQjs7Ozs4Q0FDZixFQUFxQjs7OztnREFDeEIsRUFBd0I7O0FBRW5ELEtBQUcsT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFDO0FBQy9CLFNBQU0sQ0FBQyxjQUFjLDhCQUFpQixDQUFDO0FBQ3ZDLFNBQU0sQ0FBQyxpQkFBaUIsaUNBQW9CLENBQUM7QUFDN0MsU0FBTSxDQUFDLFlBQVksb0NBQWUsQ0FBQztFQUNwQztzQkFDYztBQUNiLGlCQUFjO0FBQ2Qsb0JBQWlCO0FBQ2pCLGVBQVk7RUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDYmlCLENBQU87Ozs7dUNB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SjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qjs7Ozs7OztBQzFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixVQUFVOzs7Ozs7O0FDMUZ0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCQUF5Qiw4QkFBOEI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUI7Ozs7OztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBOEMsZ0JBQWdCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCOzs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNEQUFxRDtBQUNyRCxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQSwyQkFBMEI7QUFDMUI7QUFDQTtBQUNBOztBQUVBLDRCOzs7Ozs7O0FDakRBOztBQUVBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWdDLGlCQUFpQjtBQUNqRCxNQUFLO0FBQ0wsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLFFBQU8sdUNBQXVDO0FBQzlDO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsUUFBTyx5Q0FBeUM7QUFDaEQ7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWdCLGlDQUFpQztBQUNqRCxZQUFXO0FBQ1gsRUFBQzs7QUFFRDtBQUNBLGlCQUFnQiw4QkFBOEI7QUFDOUMsWUFBVztBQUNYLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsZ0M7Ozs7OztBQzlIQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBTzs7QUFFUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ3hNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBbUIsV0FBVztBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBLHdDOzs7Ozs7QUM1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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QTBELGdCQUFnQixDQUFHLENBQUM7Y0FDakc7VUFDSjtNQUNKO0FBQ0QsZ0JBQVcsRUFBRSxtQkFBTSxTQUFTLENBQUMsTUFBTTtBQUNuQyxlQUFVLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07RUFDckMsQ0FBQzs7QUFFRixhQUFZLENBQUMsWUFBWSxHQUFHO0FBQ3hCLFVBQUssRUFBRSxtQkFBTSxZQUFZO0VBQzVCLENBQUM7O3NCQUVhLFlBQVkiLCJmaWxlIjoicmVhY3QtYm9vdHN0cmFwLXRhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUmVhY3RCb290c3RyYXBUYWJsZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJSZWFjdEJvb3RzdHJhcFRhYmxlXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0sIHJvb3RbXCJSZWFjdERPTVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82X18pIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDllNDU4MTkxZDE5OTE0NTc1MjRjXG4gKiovIiwiaW1wb3J0IEJvb3RzdHJhcFRhYmxlIGZyb20gJy4vQm9vdHN0cmFwVGFibGUnO1xuaW1wb3J0IFRhYmxlSGVhZGVyQ29sdW1uIGZyb20gJy4vVGFibGVIZWFkZXJDb2x1bW4nO1xuaW1wb3J0IHtUYWJsZURhdGFTZXR9IGZyb20gJy4vc3RvcmUvVGFibGVEYXRhU3RvcmUnO1xuXG5pZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyl7XG4gIHdpbmRvdy5Cb290c3RyYXBUYWJsZSA9IEJvb3RzdHJhcFRhYmxlO1xuICB3aW5kb3cuVGFibGVIZWFkZXJDb2x1bW4gPSBUYWJsZUhlYWRlckNvbHVtbjtcbiAgd2luZG93LlRhYmxlRGF0YVNldCA9IFRhYmxlRGF0YVNldDtcbn1cbmV4cG9ydCBkZWZhdWx0IHtcbiAgQm9vdHN0cmFwVGFibGUsXG4gIFRhYmxlSGVhZGVyQ29sdW1uLFxuICBUYWJsZURhdGFTZXRcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NTZXQgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi9Db25zdCc7XG5pbXBvcnQgVGFibGVIZWFkZXIgZnJvbSAnLi9UYWJsZUhlYWRlcic7XG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJy4vVGFibGVCb2R5JztcbmltcG9ydCBQYWdpbmF0aW9uTGlzdCBmcm9tICcuL3BhZ2luYXRpb24vUGFnaW5hdGlvbkxpc3QnO1xuaW1wb3J0IFRvb2xCYXIgZnJvbSAnLi90b29sYmFyL1Rvb2xCYXInO1xuaW1wb3J0IFRhYmxlRmlsdGVyIGZyb20gJy4vVGFibGVGaWx0ZXInO1xuaW1wb3J0IHtUYWJsZURhdGFTdG9yZX0gZnJvbSAnLi9zdG9yZS9UYWJsZURhdGFTdG9yZSc7XG5pbXBvcnQgZXhwb3J0Q1NWIGZyb20gJy4vY3N2X2V4cG9ydF91dGlsJztcbmltcG9ydCB7RmlsdGVyfSBmcm9tICcuL0ZpbHRlcic7XG5cbmNsYXNzIEJvb3RzdHJhcFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuX2F0dGFjaENlbGxFZGl0RnVuYygpO1xuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRoaXMucHJvcHMuZGF0YSkpIHtcbiAgICAgIHRoaXMuc3RvcmUgPSBuZXcgVGFibGVEYXRhU3RvcmUodGhpcy5wcm9wcy5kYXRhLmdldERhdGEoKSk7XG4gICAgICB0aGlzLnByb3BzLmRhdGEuY2xlYXIoKTtcbiAgICAgIHRoaXMucHJvcHMuZGF0YS5vbignY2hhbmdlJywgKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5zdG9yZS5zZXREYXRhKGRhdGEpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBkYXRhOiB0aGlzLmdldFRhYmxlRGF0YSgpXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGNvcHkgPSB0aGlzLnByb3BzLmRhdGEuc2xpY2UoKTtcbiAgICAgIHRoaXMuc3RvcmUgPSBuZXcgVGFibGVEYXRhU3RvcmUoY29weSk7XG4gICAgfVxuXG4gICAgdGhpcy5pbml0VGFibGUodGhpcy5wcm9wcyk7XG5cbiAgICBpZiAodGhpcy5maWx0ZXIpIHtcbiAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgdGhpcy5maWx0ZXIub24oJ29uRmlsdGVyQ2hhbmdlJywgKGN1cnJlbnRGaWx0ZXIpID0+IHtcbiAgICAgICAgc2VsZi5oYW5kbGVGaWx0ZXJEYXRhKGN1cnJlbnRGaWx0ZXIpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0Um93ICYmIHRoaXMucHJvcHMuc2VsZWN0Um93LnNlbGVjdGVkKSB7XG4gICAgICBsZXQgY29weSA9IHRoaXMucHJvcHMuc2VsZWN0Um93LnNlbGVjdGVkLnNsaWNlKCk7XG4gICAgICB0aGlzLnN0b3JlLnNldFNlbGVjdGVkUm93S2V5KGNvcHkpO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhOiB0aGlzLmdldFRhYmxlRGF0YSgpLFxuICAgICAgY3VyclBhZ2U6IHRoaXMucHJvcHMub3B0aW9ucy5wYWdlIHx8IDEsXG4gICAgICBzaXplUGVyUGFnZTogdGhpcy5wcm9wcy5vcHRpb25zLnNpemVQZXJQYWdlIHx8IENvbnN0LlNJWkVfUEVSX1BBR0VfTElTVFswXSxcbiAgICAgIHNlbGVjdGVkUm93S2V5czogdGhpcy5zdG9yZS5nZXRTZWxlY3RlZFJvd0tleXMoKVxuICAgIH07XG4gIH1cblxuICBpbml0VGFibGUocHJvcHMpe1xuICAgIGxldCB7a2V5RmllbGR9ID0gcHJvcHM7XG5cbiAgICBjb25zdCBpc0tleUZpZWxkRGVmaW5lZCA9IHR5cGVvZiBrZXlGaWVsZCA9PT0gJ3N0cmluZycgJiYga2V5RmllbGQubGVuZ3RoO1xuICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2gocHJvcHMuY2hpbGRyZW4sIGNvbHVtbj0+IHtcbiAgICAgIGlmIChjb2x1bW4ucHJvcHMuaXNLZXkpIHtcbiAgICAgICAgaWYgKGtleUZpZWxkKSB7XG4gICAgICAgICAgdGhyb3cgXCJFcnJvci4gTXVsdGlwbGUga2V5IGNvbHVtbiBiZSBkZXRlY3RlZCBpbiBUYWJsZUhlYWRlckNvbHVtbi5cIjtcbiAgICAgICAgfVxuICAgICAgICBrZXlGaWVsZCA9IGNvbHVtbi5wcm9wcy5kYXRhRmllbGQ7XG4gICAgICB9XG4gICAgICBpZiAoY29sdW1uLnByb3BzLmZpbHRlcikge1xuICAgICAgICAvLyBhIGNvbHVtbiBjb250YWlucyBhIGZpbHRlclxuICAgICAgICBpZiAoIXRoaXMuZmlsdGVyKSB7XG4gICAgICAgICAgLy8gZmlyc3QgdGltZSBjcmVhdGUgdGhlIGZpbHRlciBvbiB0aGUgQm9vdHN0cmFwVGFibGVcbiAgICAgICAgICB0aGlzLmZpbHRlciA9IG5ldyBGaWx0ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBwYXNzIHRoZSBmaWx0ZXIgdG8gY29sdW1uIHdpdGggZmlsdGVyXG4gICAgICAgIGNvbHVtbi5wcm9wcy5maWx0ZXIuZW1pdHRlciA9IHRoaXMuZmlsdGVyO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuXG4gICAgbGV0IGNvbEluZm9zID0gdGhpcy5nZXRDb2x1bW5zRGVzY3JpcHRpb24ocHJvcHMpLnJlZHVjZSgoIHByZXYsIGN1cnIgKSA9PiB7XG4gICAgICBwcmV2W2N1cnIubmFtZV0gPSBjdXJyO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfSwge30pO1xuXG4gICAgaWYgKCFpc0tleUZpZWxkRGVmaW5lZCAmJiAha2V5RmllbGQpXG4gICAgICB0aHJvdyBgRXJyb3IuIE5vIGFueSBrZXkgY29sdW1uIGRlZmluZWQgaW4gVGFibGVIZWFkZXJDb2x1bW4uXG4gICAgICAgICAgICBVc2UgJ2lzS2V5PXt0cnVlfScgdG8gc3BlY2lmeSBhIHVuaXF1ZSBjb2x1bW4gYWZ0ZXIgdmVyc2lvbiAwLjUuNC5gO1xuXG4gICAgdGhpcy5zdG9yZS5zZXRQcm9wcyh7XG4gICAgICBpc1BhZ2luYXRpb246IHByb3BzLnBhZ2luYXRpb24sXG4gICAgICBrZXlGaWVsZDoga2V5RmllbGQsXG4gICAgICBjb2xJbmZvczogY29sSW5mb3MsXG4gICAgICBtdWx0aUNvbHVtblNlYXJjaDogcHJvcHMubXVsdGlDb2x1bW5TZWFyY2gsXG4gICAgICByZW1vdGU6IHRoaXMuaXNSZW1vdGVEYXRhU291cmNlKClcbiAgICB9KTtcbiAgfVxuXG4gIGdldFRhYmxlRGF0YSgpIHtcbiAgICAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gICAgIGlmKHRoaXMucHJvcHMub3B0aW9ucy5zb3J0TmFtZSAmJiB0aGlzLnByb3BzLm9wdGlvbnMuc29ydE9yZGVyKVxuICAgICAgIHRoaXMuc3RvcmUuc29ydCh0aGlzLnByb3BzLm9wdGlvbnMuc29ydE9yZGVyLCB0aGlzLnByb3BzLm9wdGlvbnMuc29ydE5hbWUpO1xuXG4gICAgIGlmICh0aGlzLnByb3BzLnBhZ2luYXRpb24pIHtcbiAgICAgICBsZXQgcGFnZSwgc2l6ZVBlclBhZ2U7XG4gICAgICAgaWYgKHRoaXMuc3RvcmUuaXNDaGFuZ2VkUGFnZSgpKSB7XG4gICAgICAgIHNpemVQZXJQYWdlID0gdGhpcy5zdGF0ZS5zaXplUGVyUGFnZTtcbiAgICAgICAgcGFnZSA9IHRoaXMuc3RhdGUuY3VyclBhZ2U7XG4gICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHNpemVQZXJQYWdlID0gdGhpcy5wcm9wcy5vcHRpb25zLnNpemVQZXJQYWdlIHx8IENvbnN0LlNJWkVfUEVSX1BBR0VfTElTVFswXTtcbiAgICAgICAgIHBhZ2UgPSB0aGlzLnByb3BzLm9wdGlvbnMucGFnZSB8fCAxO1xuICAgICAgIH1cbiAgICAgICByZXN1bHQgPSB0aGlzLnN0b3JlLnBhZ2UocGFnZSwgc2l6ZVBlclBhZ2UpLmdldCgpO1xuICAgICB9IGVsc2Uge1xuICAgICAgIHJlc3VsdCA9IHRoaXMuc3RvcmUuZ2V0KCk7XG4gICAgIH1cbiAgICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdldENvbHVtbnNEZXNjcmlwdGlvbih7IGNoaWxkcmVuIH0pIHtcbiAgICByZXR1cm4gY2hpbGRyZW4ubWFwKChjb2x1bW4sIGkpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IGNvbHVtbi5wcm9wcy5kYXRhRmllbGQsXG4gICAgICAgIGFsaWduOiBjb2x1bW4ucHJvcHMuZGF0YUFsaWduLFxuICAgICAgICBzb3J0OiBjb2x1bW4ucHJvcHMuZGF0YVNvcnQsXG4gICAgICAgIGZvcm1hdDogY29sdW1uLnByb3BzLmRhdGFGb3JtYXQsXG4gICAgICAgIGZvcm1hdEV4dHJhRGF0YTogY29sdW1uLnByb3BzLmZvcm1hdEV4dHJhRGF0YSxcbiAgICAgICAgZmlsdGVyRm9ybWF0dGVkOiBjb2x1bW4ucHJvcHMuZmlsdGVyRm9ybWF0dGVkLFxuICAgICAgICBlZGl0YWJsZTogY29sdW1uLnByb3BzLmVkaXRhYmxlLFxuICAgICAgICBoaWRkZW46IGNvbHVtbi5wcm9wcy5oaWRkZW4sXG4gICAgICAgIGNsYXNzTmFtZTogY29sdW1uLnByb3BzLmNvbHVtbkNsYXNzTmFtZSxcbiAgICAgICAgd2lkdGg6IGNvbHVtbi5wcm9wcy53aWR0aCxcbiAgICAgICAgdGV4dDogY29sdW1uLnByb3BzLmNoaWxkcmVuLFxuICAgICAgICBzb3J0RnVuYzogY29sdW1uLnByb3BzLnNvcnRGdW5jLFxuICAgICAgICBpbmRleDogaVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdGhpcy5pbml0VGFibGUobmV4dFByb3BzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShuZXh0UHJvcHMuZGF0YSkpIHtcbiAgICAgIHRoaXMuc3RvcmUuc2V0RGF0YShuZXh0UHJvcHMuZGF0YS5zbGljZSgpKTtcbiAgICAgIGxldCBwYWdpbmF0aW9uRG9tID0gdGhpcy5yZWZzLnBhZ2luYXRpb247XG4gICAgICBsZXQgcGFnZSA9IHBhZ2luYXRpb25Eb20gJiYgcGFnaW5hdGlvbkRvbS5nZXRDdXJyZW50UGFnZSgpIHx8IG5leHRQcm9wcy5vcHRpb25zLnBhZ2UgfHwgMTtcbiAgICAgIGxldCBzaXplUGVyUGFnZSA9IHBhZ2luYXRpb25Eb20gJiYgcGFnaW5hdGlvbkRvbS5nZXRTaXplUGVyUGFnZSgpIHx8IG5leHRQcm9wcy5vcHRpb25zLnNpemVQZXJQYWdlIHx8IENvbnN0LlNJWkVfUEVSX1BBR0VfTElTVFswXTtcbiAgICAgIC8vICMxMjVcbiAgICAgIGlmKHBhZ2UgPiBNYXRoLmNlaWwobmV4dFByb3BzLmRhdGEubGVuZ3RoIC8gc2l6ZVBlclBhZ2UpKSBwYWdlID0gMTtcbiAgICAgIGxldCBzb3J0SW5mbyA9IHRoaXMuc3RvcmUuZ2V0U29ydEluZm8oKTtcbiAgICAgIGxldCBzb3J0RmllbGQgPSBuZXh0UHJvcHMub3B0aW9ucy5zb3J0TmFtZSB8fCAoc29ydEluZm8gPyBzb3J0SW5mby5zb3J0RmllbGQgOiB1bmRlZmluZWQpO1xuICAgICAgbGV0IHNvcnRPcmRlciA9IG5leHRQcm9wcy5vcHRpb25zLnNvcnRPcmRlciB8fCAoc29ydEluZm8gPyBzb3J0SW5mby5vcmRlciA6IHVuZGVmaW5lZCk7XG4gICAgICBpZihzb3J0RmllbGQgJiYgc29ydE9yZGVyKSB0aGlzLnN0b3JlLnNvcnQoc29ydE9yZGVyLCBzb3J0RmllbGQpO1xuICAgICAgbGV0IGRhdGEgPSB0aGlzLnN0b3JlLnBhZ2UocGFnZSwgc2l6ZVBlclBhZ2UpLmdldCgpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGN1cnJQYWdlOiBwYWdlLFxuICAgICAgICBzaXplUGVyUGFnZTogc2l6ZVBlclBhZ2VcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAobmV4dFByb3BzLnNlbGVjdFJvdyAmJiBuZXh0UHJvcHMuc2VsZWN0Um93LnNlbGVjdGVkKSB7XG4gICAgICAvL3NldCBkZWZhdWx0IHNlbGVjdCByb3dzIHRvIHN0b3JlLlxuICAgICAgbGV0IGNvcHkgPSBuZXh0UHJvcHMuc2VsZWN0Um93LnNlbGVjdGVkLnNsaWNlKCk7XG4gICAgICB0aGlzLnN0b3JlLnNldFNlbGVjdGVkUm93S2V5KGNvcHkpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGVkUm93S2V5czogY29weVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5fYWRqdXN0SGVhZGVyV2lkdGgoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fYWRqdXN0SGVhZGVyV2lkdGgpO1xuICAgIHRoaXMucmVmcy5ib2R5LnJlZnMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbEhlYWRlcik7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fYWRqdXN0SGVhZGVyV2lkdGgpO1xuICAgIHRoaXMucmVmcy5ib2R5LnJlZnMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbEhlYWRlcik7XG4gICAgaWYgKHRoaXMuZmlsdGVyKSB7XG4gICAgICB0aGlzLmZpbHRlci5yZW1vdmVBbGxMaXN0ZW5lcnMoXCJvbkZpbHRlckNoYW5nZVwiKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5fYWRqdXN0SGVhZGVyV2lkdGgoKTtcbiAgICB0aGlzLl9hdHRhY2hDZWxsRWRpdEZ1bmMoKTtcbiAgICBpZiAodGhpcy5wcm9wcy5vcHRpb25zLmFmdGVyVGFibGVDb21wbGV0ZSlcbiAgICAgIHRoaXMucHJvcHMub3B0aW9ucy5hZnRlclRhYmxlQ29tcGxldGUoKTtcbiAgfVxuXG4gIF9hdHRhY2hDZWxsRWRpdEZ1bmMoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuY2VsbEVkaXQpIHtcbiAgICAgIHRoaXMucHJvcHMuY2VsbEVkaXQuX19vbkNvbXBsZXRlRWRpdF9fID0gdGhpcy5oYW5kbGVFZGl0Q2VsbC5iaW5kKHRoaXMpO1xuICAgICAgaWYgKHRoaXMucHJvcHMuY2VsbEVkaXQubW9kZSAhPT0gQ29uc3QuQ0VMTF9FRElUX05PTkUpXG4gICAgICAgIHRoaXMucHJvcHMuc2VsZWN0Um93LmNsaWNrVG9TZWxlY3QgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGluIHRoZSBjdXJyZW50IGNvbmZpZ3VyYXRpb24sXG4gICAqIHRoZSBkYXRhZ3JpZCBzaG91bGQgbG9hZCBpdHMgZGF0YSByZW1vdGVseS5cbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgW3Byb3BzXSBPcHRpb25hbC4gSWYgbm90IGdpdmVuLCB0aGlzLnByb3BzIHdpbGwgYmUgdXNlZFxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgaXNSZW1vdGVEYXRhU291cmNlKHByb3BzKSB7XG4gICAgcmV0dXJuIChwcm9wcyB8fCB0aGlzLnByb3BzKS5yZW1vdGU7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICB2YXIgdGFibGVDbGFzcyA9IGNsYXNzU2V0KFwicmVhY3QtYnMtdGFibGVcIik7XG4gICAgdmFyIGNoaWxkcmVucyA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgdmFyIHN0eWxlID0ge1xuICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCxcbiAgICAgIG1heEhlaWdodDogdGhpcy5wcm9wcy5tYXhIZWlnaHRcbiAgICB9O1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuKSkge1xuICAgICAgY2hpbGRyZW5zID0gW3RoaXMucHJvcHMuY2hpbGRyZW5dO1xuICAgIH1cbiAgICB2YXIgY29sdW1ucyA9IHRoaXMuZ2V0Q29sdW1uc0Rlc2NyaXB0aW9uKHRoaXMucHJvcHMpO1xuICAgIHZhciBzb3J0SW5mbyA9IHRoaXMuc3RvcmUuZ2V0U29ydEluZm8oKTtcbiAgICB2YXIgcGFnaW5hdGlvbiA9IHRoaXMucmVuZGVyUGFnaW5hdGlvbigpO1xuICAgIHZhciB0b29sQmFyID0gdGhpcy5yZW5kZXJUb29sQmFyKCk7XG4gICAgdmFyIHRhYmxlRmlsdGVyID0gdGhpcy5yZW5kZXJUYWJsZUZpbHRlcihjb2x1bW5zKTtcbiAgICB2YXIgaXNTZWxlY3RBbGwgPSB0aGlzLmlzU2VsZWN0QWxsKCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtYnMtY29udGFpbmVyXCIgcmVmPVwidGFibGVcIj5cbiAgICAgICAge3Rvb2xCYXJ9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtYnMtdGFibGUtY29udGFpbmVyXCIgc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICA8VGFibGVIZWFkZXJcbiAgICAgICAgICAgIHJlZj1cImhlYWRlclwiXG4gICAgICAgICAgICByb3dTZWxlY3RUeXBlPXt0aGlzLnByb3BzLnNlbGVjdFJvdy5tb2RlfVxuICAgICAgICAgICAgaGlkZVNlbGVjdENvbHVtbj17dGhpcy5wcm9wcy5zZWxlY3RSb3cuaGlkZVNlbGVjdENvbHVtbn1cbiAgICAgICAgICAgIHNvcnROYW1lPXtzb3J0SW5mbyA/IHNvcnRJbmZvLnNvcnRGaWVsZCA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIHNvcnRPcmRlcj17c29ydEluZm8gPyBzb3J0SW5mby5vcmRlciA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIG9uU29ydD17dGhpcy5oYW5kbGVTb3J0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICBvblNlbGVjdEFsbFJvdz17dGhpcy5oYW5kbGVTZWxlY3RBbGxSb3cuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIGJvcmRlcmVkPXt0aGlzLnByb3BzLmJvcmRlcmVkfVxuICAgICAgICAgICAgY29uZGVuc2VkPXt0aGlzLnByb3BzLmNvbmRlbnNlZH1cbiAgICAgICAgICAgIGlzRmlsdGVyZWQ9e3RoaXMuZmlsdGVyID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgaXNTZWxlY3RBbGw9e2lzU2VsZWN0QWxsfT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgPFRhYmxlQm9keVxuICAgICAgICAgICAgaGVpZ2h0PXt0aGlzLnByb3BzLmhlaWdodH1cbiAgICAgICAgICAgIG1heEhlaWdodD17dGhpcy5wcm9wcy5tYXhIZWlnaHR9XG4gICAgICAgICAgICByZWY9XCJib2R5XCJcbiAgICAgICAgICAgIGRhdGE9e3RoaXMuc3RhdGUuZGF0YX1cbiAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICB0ckNsYXNzTmFtZT17dGhpcy5wcm9wcy50ckNsYXNzTmFtZX1cbiAgICAgICAgICAgIHN0cmlwZWQ9e3RoaXMucHJvcHMuc3RyaXBlZH1cbiAgICAgICAgICAgIGJvcmRlcmVkPXt0aGlzLnByb3BzLmJvcmRlcmVkfVxuICAgICAgICAgICAgaG92ZXI9e3RoaXMucHJvcHMuaG92ZXJ9XG4gICAgICAgICAgICBrZXlGaWVsZD17dGhpcy5zdG9yZS5nZXRLZXlGaWVsZCgpfVxuICAgICAgICAgICAgY29uZGVuc2VkPXt0aGlzLnByb3BzLmNvbmRlbnNlZH1cbiAgICAgICAgICAgIHNlbGVjdFJvdz17dGhpcy5wcm9wcy5zZWxlY3RSb3d9XG4gICAgICAgICAgICBjZWxsRWRpdD17dGhpcy5wcm9wcy5jZWxsRWRpdH1cbiAgICAgICAgICAgIHNlbGVjdGVkUm93S2V5cz17dGhpcy5zdGF0ZS5zZWxlY3RlZFJvd0tleXN9XG4gICAgICAgICAgICBvblJvd0NsaWNrPXt0aGlzLmhhbmRsZVJvd0NsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgICAgICBvblNlbGVjdFJvdz17dGhpcy5oYW5kbGVTZWxlY3RSb3cuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIG5vRGF0YVRleHQ9e3RoaXMucHJvcHMub3B0aW9ucy5ub0RhdGFUZXh0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGFibGVGaWx0ZXJ9XG4gICAgICAgIHtwYWdpbmF0aW9ufVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgaXNTZWxlY3RBbGwoKXtcbiAgICB2YXIgZGVmYXVsdFNlbGVjdFJvd0tleXMgPSB0aGlzLnN0b3JlLmdldFNlbGVjdGVkUm93S2V5cygpO1xuICAgIHZhciBhbGxSb3dLZXlzID0gdGhpcy5zdG9yZS5nZXRBbGxSb3drZXkoKTtcbiAgICBpZihkZWZhdWx0U2VsZWN0Um93S2V5cy5sZW5ndGggIT09IGFsbFJvd0tleXMubGVuZ3RoKXtcbiAgICAgIHJldHVybiBkZWZhdWx0U2VsZWN0Um93S2V5cy5sZW5ndGggPT09IDAgPyBmYWxzZSA6ICdpbmRldGVybWluYXRlJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgY2xlYW5TZWxlY3RlZCgpIHtcbiAgICB0aGlzLnN0b3JlLnNldFNlbGVjdGVkUm93S2V5KFtdKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkUm93S2V5czogW11cbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVNvcnQob3JkZXIsIHNvcnRGaWVsZCkge1xuICAgIGlmICh0aGlzLnByb3BzLm9wdGlvbnMub25Tb3J0Q2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9wdGlvbnMub25Tb3J0Q2hhbmdlKHNvcnRGaWVsZCwgb3JkZXIsIHRoaXMucHJvcHMpO1xuICAgIH1cblxuICAgIGxldCByZXN1bHQgPSB0aGlzLnN0b3JlLnNvcnQob3JkZXIsIHNvcnRGaWVsZCkuZ2V0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhOiByZXN1bHRcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVBhZ2luYXRpb25EYXRhKHBhZ2UsIHNpemVQZXJQYWdlKSB7XG4gICAgY29uc3Qge29uUGFnZUNoYW5nZX0gPSB0aGlzLnByb3BzLm9wdGlvbnM7XG4gICAgaWYgKG9uUGFnZUNoYW5nZSkge1xuICAgICAgb25QYWdlQ2hhbmdlKHBhZ2UsIHNpemVQZXJQYWdlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc1JlbW90ZURhdGFTb3VyY2UoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCByZXN1bHQgPSB0aGlzLnN0b3JlLnBhZ2UocGFnZSwgc2l6ZVBlclBhZ2UpLmdldCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF0YTogcmVzdWx0LFxuICAgICAgY3VyclBhZ2U6IHBhZ2UsXG4gICAgICBzaXplUGVyUGFnZVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlUm93Q2xpY2socm93KSB7XG4gICAgaWYgKHRoaXMucHJvcHMub3B0aW9ucy5vblJvd0NsaWNrKSB7XG4gICAgICB0aGlzLnByb3BzLm9wdGlvbnMub25Sb3dDbGljayhyb3cpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVNlbGVjdEFsbFJvdyhlKSB7XG4gICAgdmFyIGlzU2VsZWN0ZWQgPSBlLmN1cnJlbnRUYXJnZXQuY2hlY2tlZDtcbiAgICBsZXQgc2VsZWN0ZWRSb3dLZXlzID0gW107XG4gICAgbGV0IHJlc3VsdCA9IHRydWU7XG4gICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0Um93Lm9uU2VsZWN0QWxsKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLnByb3BzLnNlbGVjdFJvdy5vblNlbGVjdEFsbChpc1NlbGVjdGVkLFxuICAgICAgICBpc1NlbGVjdGVkID8gdGhpcy5zdG9yZS5nZXQoKSA6IFtdKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ3VuZGVmaW5lZCcgfHwgcmVzdWx0ICE9PSBmYWxzZSkge1xuICAgICAgaWYgKGlzU2VsZWN0ZWQpIHtcbiAgICAgICAgc2VsZWN0ZWRSb3dLZXlzID0gdGhpcy5zdG9yZS5nZXRBbGxSb3drZXkoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdG9yZS5zZXRTZWxlY3RlZFJvd0tleShzZWxlY3RlZFJvd0tleXMpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGVkUm93S2V5czogc2VsZWN0ZWRSb3dLZXlzXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTaG93T25seVNlbGVjdGVkKCkge1xuICAgIHRoaXMuc3RvcmUuaWdub3JlTm9uU2VsZWN0ZWQoKTtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGlmICh0aGlzLnByb3BzLnBhZ2luYXRpb24pIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuc3RvcmUucGFnZSgxLCB0aGlzLnN0YXRlLnNpemVQZXJQYWdlKS5nZXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gdGhpcy5zdG9yZS5nZXQoKTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhOiByZXN1bHQsXG4gICAgICBjdXJyUGFnZTogMSxcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVNlbGVjdFJvdyhyb3csIGlzU2VsZWN0ZWQpIHtcbiAgICBsZXQgY3VyclNlbGVjdGVkID0gdGhpcy5zdG9yZS5nZXRTZWxlY3RlZFJvd0tleXMoKTtcbiAgICBsZXQgcm93S2V5ID0gcm93W3RoaXMuc3RvcmUuZ2V0S2V5RmllbGQoKV07XG4gICAgbGV0IHJlc3VsdCA9IHRydWU7XG4gICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0Um93Lm9uU2VsZWN0KSB7XG4gICAgICByZXN1bHQgPSB0aGlzLnByb3BzLnNlbGVjdFJvdy5vblNlbGVjdChyb3csIGlzU2VsZWN0ZWQpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSAndW5kZWZpbmVkJyB8fCByZXN1bHQgIT09IGZhbHNlKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RSb3cubW9kZSA9PT0gQ29uc3QuUk9XX1NFTEVDVF9TSU5HTEUpIHtcbiAgICAgICAgY3VyclNlbGVjdGVkID0gaXNTZWxlY3RlZCA/IFtyb3dLZXldIDogW11cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpc1NlbGVjdGVkKSB7XG4gICAgICAgICAgY3VyclNlbGVjdGVkLnB1c2gocm93S2V5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdXJyU2VsZWN0ZWQgPSBjdXJyU2VsZWN0ZWQuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiByb3dLZXkgIT09IGtleTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnN0b3JlLnNldFNlbGVjdGVkUm93S2V5KGN1cnJTZWxlY3RlZCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2VsZWN0ZWRSb3dLZXlzOiBjdXJyU2VsZWN0ZWRcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUVkaXRDZWxsKG5ld1ZhbCwgcm93SW5kZXgsIGNvbEluZGV4KSB7XG4gICAgbGV0IGZpZWxkTmFtZTtcbiAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKHRoaXMucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChjb2x1bW4sIGkpIHtcbiAgICAgIGlmIChpID09IGNvbEluZGV4KSB7XG4gICAgICAgIGZpZWxkTmFtZSA9IGNvbHVtbi5wcm9wcy5kYXRhRmllbGQ7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCByZXN1bHQgPSB0aGlzLnN0b3JlLmVkaXQobmV3VmFsLCByb3dJbmRleCwgZmllbGROYW1lKS5nZXQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRhdGE6IHJlc3VsdFxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuY2VsbEVkaXQuYWZ0ZXJTYXZlQ2VsbCkge1xuICAgICAgdGhpcy5wcm9wcy5jZWxsRWRpdC5hZnRlclNhdmVDZWxsKHRoaXMuc3RhdGUuZGF0YVtyb3dJbmRleF0sIGZpZWxkTmFtZSwgbmV3VmFsKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVBZGRSb3dCZWdpbigpIHtcbiAgICBpZiAodGhpcy5yZWZzLmJvZHkpIHtcbiAgICAgIC8vIHRoaXMucmVmcy5ib2R5LmNhbmNlbEVkaXQoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVBZGRSb3cobmV3T2JqKSB7XG4gICAgbGV0IG1zZyA9IG51bGwsIHJlc3VsdDtcbiAgICB0cnkge1xuICAgICAgdGhpcy5zdG9yZS5hZGQobmV3T2JqKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5wYWdpbmF0aW9uKSB7XG4gICAgICAvL2lmIHBhZ2luYXRpb24gaXMgZW5hYmxlZCBhbmQgaW5zZXJ0IHJvdyBiZSB0cmlnZ2VyLCBjaGFuZ2UgdG8gbGFzdCBwYWdlXG4gICAgICBjb25zdCB7IHNpemVQZXJQYWdlIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgY29uc3QgY3Vyckxhc3RQYWdlID0gTWF0aC5jZWlsKHRoaXMuc3RvcmUuZ2V0RGF0YU51bSgpIC8gc2l6ZVBlclBhZ2UpO1xuICAgICAgcmVzdWx0ID0gdGhpcy5zdG9yZS5wYWdlKGN1cnJMYXN0UGFnZSwgc2l6ZVBlclBhZ2UpLmdldCgpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRhdGE6IHJlc3VsdCxcbiAgICAgICAgY3VyclBhZ2U6IGN1cnJMYXN0UGFnZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSB0aGlzLnN0b3JlLmdldCgpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRhdGE6IHJlc3VsdFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMub3B0aW9ucy5hZnRlckluc2VydFJvdykge1xuICAgICAgdGhpcy5wcm9wcy5vcHRpb25zLmFmdGVySW5zZXJ0Um93KG5ld09iaik7XG4gICAgfVxuICB9XG5cbiAgZ2V0U2l6ZVBlclBhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuc2l6ZVBlclBhZ2U7XG4gIH1cblxuICBnZXRDdXJyZW50UGFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5jdXJyUGFnZTtcbiAgfVxuXG4gIGhhbmRsZURyb3BSb3cocm93S2V5cykge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBsZXQgZHJvcFJvd0tleXMgPSByb3dLZXlzP3Jvd0tleXM6dGhpcy5zdG9yZS5nZXRTZWxlY3RlZFJvd0tleXMoKTtcbiAgICAvL2FkZCBjb25maXJtIGJlZm9yZSB0aGUgZGVsZXRlIGFjdGlvbiBpZiB0aGF0IG9wdGlvbiBpcyBzZXQuXG4gICAgaWYgKGRyb3BSb3dLZXlzICYmIGRyb3BSb3dLZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9wdGlvbnMuaGFuZGxlQ29uZmlybURlbGV0ZVJvdyl7XG4gICAgICAgIHRoaXMucHJvcHMub3B0aW9ucy5oYW5kbGVDb25maXJtRGVsZXRlUm93KFxuICAgICAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0aGF0LmRlbGV0ZVJvdyhkcm9wUm93S2V5cyk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChjb25maXJtKCdBcmUgeW91IHN1cmUgd2FudCBkZWxldGU/JykpIHtcbiAgICAgICAgdGhpcy5kZWxldGVSb3coZHJvcFJvd0tleXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZVJvdyhkcm9wUm93S2V5cyl7XG5cbiAgICBsZXQgcmVzdWx0O1xuICAgIHRoaXMuc3RvcmUucmVtb3ZlKGRyb3BSb3dLZXlzKTsgIC8vcmVtb3ZlIHNlbGVjdGVkIFJvd1xuICAgIHRoaXMuc3RvcmUuc2V0U2VsZWN0ZWRSb3dLZXkoW10pOyAgLy9jbGVhciBzZWxlY3RlZCByb3cga2V5XG5cbiAgICBpZiAodGhpcy5wcm9wcy5wYWdpbmF0aW9uKSB7XG4gICAgICBjb25zdCB7IHNpemVQZXJQYWdlIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgbGV0IHsgY3VyclBhZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgICBsZXQgY3Vyckxhc3RQYWdlID0gTWF0aC5jZWlsKHRoaXMuc3RvcmUuZ2V0RGF0YU51bSgpIC8gc2l6ZVBlclBhZ2UpO1xuICAgICAgaWYgKGN1cnJQYWdlID4gY3Vyckxhc3RQYWdlKVxuICAgICAgICBjdXJyUGFnZSA9IGN1cnJMYXN0UGFnZTtcbiAgICAgIHJlc3VsdCA9IHRoaXMuc3RvcmUucGFnZShjdXJyUGFnZSwgc2l6ZVBlclBhZ2UpLmdldCgpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRhdGE6IHJlc3VsdCxcbiAgICAgICAgc2VsZWN0ZWRSb3dLZXlzOiB0aGlzLnN0b3JlLmdldFNlbGVjdGVkUm93S2V5cygpLFxuICAgICAgICBjdXJyUGFnZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuc3RvcmUuZ2V0KCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGF0YTogcmVzdWx0LFxuICAgICAgICBzZWxlY3RlZFJvd0tleXM6IHRoaXMuc3RvcmUuZ2V0U2VsZWN0ZWRSb3dLZXlzKClcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5vcHRpb25zLmFmdGVyRGVsZXRlUm93KSB7XG4gICAgICB0aGlzLnByb3BzLm9wdGlvbnMuYWZ0ZXJEZWxldGVSb3coZHJvcFJvd0tleXMpO1xuICAgIH1cblxuICB9XG5cbiAgaGFuZGxlRmlsdGVyRGF0YShmaWx0ZXJPYmopIHtcbiAgICB0aGlzLnN0b3JlLmZpbHRlcihmaWx0ZXJPYmopO1xuICAgIGxldCByZXN1bHQ7XG4gICAgaWYgKHRoaXMucHJvcHMucGFnaW5hdGlvbikge1xuICAgICAgY29uc3QgeyBzaXplUGVyUGFnZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIHJlc3VsdCA9IHRoaXMuc3RvcmUucGFnZSgxLCBzaXplUGVyUGFnZSkuZ2V0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuc3RvcmUuZ2V0KCk7XG4gICAgfVxuICAgIGlmKHRoaXMucHJvcHMub3B0aW9ucy5hZnRlckNvbHVtbkZpbHRlcilcbiAgICAgIHRoaXMucHJvcHMub3B0aW9ucy5hZnRlckNvbHVtbkZpbHRlcihmaWx0ZXJPYmosXG4gICAgICAgIHRoaXMuc3RvcmUuZ2V0RGF0YUlnbm9yaW5nUGFnaW5hdGlvbigpKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRhdGE6IHJlc3VsdCxcbiAgICAgIGN1cnJQYWdlOiAxXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVFeHBvcnRDU1YoKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuc3RvcmUuZ2V0RGF0YUlnbm9yaW5nUGFnaW5hdGlvbigpO1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdGhpcy5wcm9wcy5jaGlsZHJlbi5tYXAoZnVuY3Rpb24oY29sdW1uKSB7XG4gICAgICBpZiAoY29sdW1uLnByb3BzLmhpZGRlbiA9PT0gZmFsc2UpIHtcbiAgICAgICAga2V5cy5wdXNoKGNvbHVtbi5wcm9wcy5kYXRhRmllbGQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGV4cG9ydENTVihyZXN1bHQsIGtleXMsIHRoaXMucHJvcHMuY3N2RmlsZU5hbWUpO1xuICB9XG5cbiAgaGFuZGxlU2VhcmNoKHNlYXJjaFRleHQpIHtcbiAgICB0aGlzLnN0b3JlLnNlYXJjaChzZWFyY2hUZXh0KTtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGlmICh0aGlzLnByb3BzLnBhZ2luYXRpb24pIHtcbiAgICAgIGNvbnN0IHsgc2l6ZVBlclBhZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgICByZXN1bHQgPSB0aGlzLnN0b3JlLnBhZ2UoMSwgc2l6ZVBlclBhZ2UpLmdldCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSB0aGlzLnN0b3JlLmdldCgpO1xuICAgIH1cbiAgICBpZih0aGlzLnByb3BzLm9wdGlvbnMuYWZ0ZXJTZWFyY2gpXG4gICAgICB0aGlzLnByb3BzLm9wdGlvbnMuYWZ0ZXJTZWFyY2goc2VhcmNoVGV4dCwgdGhpcy5zdG9yZS5nZXREYXRhSWdub3JpbmdQYWdpbmF0aW9uKCkpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF0YTogcmVzdWx0LFxuICAgICAgY3VyclBhZ2U6IDFcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlclBhZ2luYXRpb24oKSB7XG4gICAgaWYgKHRoaXMucHJvcHMucGFnaW5hdGlvbikge1xuICAgICAgbGV0IGRhdGFTaXplO1xuICAgICAgaWYgKHRoaXMuaXNSZW1vdGVEYXRhU291cmNlKCkpIHtcbiAgICAgICAgZGF0YVNpemUgPSB0aGlzLnByb3BzLmZldGNoSW5mby5kYXRhVG90YWxTaXplO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YVNpemUgPSB0aGlzLnN0b3JlLmdldERhdGFOdW0oKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtZm9vdGVyLXBhZ2luYXRpb25cIj5cbiAgICAgICAgICA8UGFnaW5hdGlvbkxpc3RcbiAgICAgICAgICAgIHJlZj1cInBhZ2luYXRpb25cIlxuICAgICAgICAgICAgY3VyclBhZ2U9eyB0aGlzLnN0YXRlLmN1cnJQYWdlIH1cbiAgICAgICAgICAgIGNoYW5nZVBhZ2U9e3RoaXMuaGFuZGxlUGFnaW5hdGlvbkRhdGEuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIHNpemVQZXJQYWdlPXsgdGhpcy5zdGF0ZS5zaXplUGVyUGFnZSB9XG4gICAgICAgICAgICBzaXplUGVyUGFnZUxpc3Q9e3RoaXMucHJvcHMub3B0aW9ucy5zaXplUGVyUGFnZUxpc3QgfHwgQ29uc3QuU0laRV9QRVJfUEFHRV9MSVNUfVxuICAgICAgICAgICAgcGFnaW5hdGlvblNpemU9e3RoaXMucHJvcHMub3B0aW9ucy5wYWdpbmF0aW9uU2l6ZSB8fCBDb25zdC5QQUdJTkFUSU9OX1NJWkV9XG4gICAgICAgICAgICByZW1vdGU9e3RoaXMuaXNSZW1vdGVEYXRhU291cmNlKCl9XG4gICAgICAgICAgICBkYXRhU2l6ZT17ZGF0YVNpemV9XG4gICAgICAgICAgICBvblNpemVQZXJQYWdlTGlzdD17dGhpcy5wcm9wcy5vcHRpb25zLm9uU2l6ZVBlclBhZ2VMaXN0fVxuICAgICAgICAgICAgcHJlUGFnZT17dGhpcy5wcm9wcy5vcHRpb25zLnByZVBhZ2UgfHwgQ29uc3QuUFJFX1BBR0V9XG4gICAgICAgICAgICBuZXh0UGFnZT17dGhpcy5wcm9wcy5vcHRpb25zLm5leHRQYWdlIHx8IENvbnN0Lk5FWFRfUEFHRX1cbiAgICAgICAgICAgIGZpcnN0UGFnZT17dGhpcy5wcm9wcy5vcHRpb25zLmZpcnN0UGFnZSB8fCBDb25zdC5GSVJTVF9QQUdFfVxuICAgICAgICAgICAgbGFzdFBhZ2U9e3RoaXMucHJvcHMub3B0aW9ucy5sYXN0UGFnZSB8fCBDb25zdC5MQVNUX1BBR0V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJlbmRlclRvb2xCYXIoKSB7XG4gICAgbGV0IGVuYWJsZVNob3dPbmx5U2VsZWN0ZWQgPSB0aGlzLnByb3BzLnNlbGVjdFJvdyAmJiB0aGlzLnByb3BzLnNlbGVjdFJvdy5zaG93T25seVNlbGVjdGVkO1xuICAgIGlmIChlbmFibGVTaG93T25seVNlbGVjdGVkXG4gICAgICAgIHx8IHRoaXMucHJvcHMuaW5zZXJ0Um93XG4gICAgICAgIHx8IHRoaXMucHJvcHMuZGVsZXRlUm93XG4gICAgICAgIHx8IHRoaXMucHJvcHMuc2VhcmNoXG4gICAgICAgIHx8IHRoaXMucHJvcHMuZXhwb3J0Q1NWKSB7XG4gICAgICBsZXQgY29sdW1ucztcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pKSB7XG4gICAgICAgIGNvbHVtbnMgPSB0aGlzLnByb3BzLmNoaWxkcmVuLm1hcChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgICAgdmFyIHByb3BzID0gY29sdW1uLnByb3BzO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICAgIGZpZWxkOiBwcm9wcy5kYXRhRmllbGQsXG4gICAgICAgICAgICAvL3doZW4geW91IHdhbnQgc2FtZSBhdXRvIGdlbmVyYXRlIHZhbHVlIGFuZCBub3QgYWxsb3cgZWRpdCwgZXhhbXBsZSBJRCBmaWVsZFxuICAgICAgICAgICAgYXV0b1ZhbHVlOiBwcm9wcy5hdXRvVmFsdWUgfHwgZmFsc2UsXG4gICAgICAgICAgICAvL2ZvciBjcmVhdGUgZWRpdG9yLCBubyBwYXJhbXMgZm9yIGNvbHVtbi5lZGl0YWJsZSgpIGluZGljYXRlIHRoYXQgZWRpdG9yIGZvciBuZXcgcm93XG4gICAgICAgICAgICBlZGl0YWJsZTogcHJvcHMuZWRpdGFibGUgJiYgKHR5cGVvZiBwcm9wcy5lZGl0YWJsZSA9PT0gXCJmdW5jdGlvblwiKSA/IHByb3BzLmVkaXRhYmxlKCkgOiBwcm9wcy5lZGl0YWJsZSxcbiAgICAgICAgICAgIGZvcm1hdDogcHJvcHMuZGF0YUZvcm1hdCA/IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb3BzLmRhdGFGb3JtYXQodmFsdWUsIG51bGwsIHByb3BzLmZvcm1hdEV4dHJhRGF0YSkucmVwbGFjZSgvPC4qPz4vZywnJyk7XG4gICAgICAgICAgICB9IDogZmFsc2VcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbHVtbnMgPSBbe1xuICAgICAgICAgIG5hbWU6IHRoaXMucHJvcHMuY2hpbGRyZW4ucHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgZmllbGQ6IHRoaXMucHJvcHMuY2hpbGRyZW4ucHJvcHMuZGF0YUZpZWxkLFxuICAgICAgICAgIGVkaXRhYmxlOiB0aGlzLnByb3BzLmNoaWxkcmVuLnByb3BzLmVkaXRhYmxlXG4gICAgICAgIH1dO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sLWJhclwiPlxuICAgICAgICAgIDxUb29sQmFyXG4gICAgICAgICAgICBjbGVhclNlYXJjaD17dGhpcy5wcm9wcy5vcHRpb25zLmNsZWFyU2VhcmNofVxuICAgICAgICAgICAgZW5hYmxlSW5zZXJ0PXt0aGlzLnByb3BzLmluc2VydFJvd31cbiAgICAgICAgICAgIGVuYWJsZURlbGV0ZT17dGhpcy5wcm9wcy5kZWxldGVSb3d9XG4gICAgICAgICAgICBlbmFibGVTZWFyY2g9e3RoaXMucHJvcHMuc2VhcmNofVxuICAgICAgICAgICAgZW5hYmxlRXhwb3J0Q1NWPXt0aGlzLnByb3BzLmV4cG9ydENTVn1cbiAgICAgICAgICAgIGVuYWJsZVNob3dPbmx5U2VsZWN0ZWQ9e2VuYWJsZVNob3dPbmx5U2VsZWN0ZWR9XG4gICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgc2VhcmNoUGxhY2Vob2xkZXI9e3RoaXMucHJvcHMuc2VhcmNoUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICBvbkFkZFJvdz17dGhpcy5oYW5kbGVBZGRSb3cuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIG9uQWRkUm93QmVnaW49e3RoaXMuaGFuZGxlQWRkUm93QmVnaW4uYmluZCh0aGlzKX1cbiAgICAgICAgICAgIG9uRHJvcFJvdz17dGhpcy5oYW5kbGVEcm9wUm93LmJpbmQodGhpcyl9XG4gICAgICAgICAgICBvblNlYXJjaD17dGhpcy5oYW5kbGVTZWFyY2guYmluZCh0aGlzKX1cbiAgICAgICAgICAgIG9uRXhwb3J0Q1NWPXt0aGlzLmhhbmRsZUV4cG9ydENTVi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgb25TaG93T25seVNlbGVjdGVkPXt0aGlzLmhhbmRsZVNob3dPbmx5U2VsZWN0ZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyVGFibGVGaWx0ZXIoY29sdW1ucykge1xuICAgIGlmICh0aGlzLnByb3BzLmNvbHVtbkZpbHRlcikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRhYmxlRmlsdGVyIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICAgICAgICAgICByb3dTZWxlY3RUeXBlPXt0aGlzLnByb3BzLnNlbGVjdFJvdy5tb2RlfVxuICAgICAgICAgICAgICAgICAgICAgb25GaWx0ZXI9e3RoaXMuaGFuZGxlRmlsdGVyRGF0YS5iaW5kKHRoaXMpfS8+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBfc2Nyb2xsSGVhZGVyID0gKGUpID0+IHtcbiAgICB0aGlzLnJlZnMuaGVhZGVyLnJlZnMuY29udGFpbmVyLnNjcm9sbExlZnQgPSBlLmN1cnJlbnRUYXJnZXQuc2Nyb2xsTGVmdDtcbiAgfVxuXG4gIF9hZGp1c3RIZWFkZXJXaWR0aCA9ICgpID0+IHtcbiAgICB2YXIgdGFibGVIZWFkZXJEb20gPSB0aGlzLnJlZnMuaGVhZGVyLnJlZnMuY29udGFpbmVyLmNoaWxkTm9kZXNbMF07XG4gICAgdmFyIHRhYmxlQm9keURvbSA9IHRoaXMucmVmcy5ib2R5LnJlZnMuY29udGFpbmVyLmNoaWxkTm9kZXNbMF07XG4gICAgaWYodGFibGVIZWFkZXJEb20ub2Zmc2V0V2lkdGggIT09IHRhYmxlQm9keURvbS5vZmZzZXRXaWR0aCl7XG4gICAgICB0YWJsZUhlYWRlckRvbS5zdHlsZS53aWR0aCA9IHRhYmxlQm9keURvbS5vZmZzZXRXaWR0aCArIFwicHhcIjtcbiAgICB9XG4gICAgY29uc3QgaGVhZGVyUHJvcHMgPSB0aGlzLnJlZnMuYm9keS5nZXRCb2R5SGVhZGVyRG9tUHJvcCgpO1xuICAgIHRoaXMucmVmcy5oZWFkZXIuZml0SGVhZGVyKGhlYWRlclByb3BzLFxuICAgICAgdGhpcy5yZWZzLmJvZHkucmVmcy5jb250YWluZXIuc2Nyb2xsSGVpZ2h0ID4gdGhpcy5yZWZzLmJvZHkucmVmcy5jb250YWluZXIuY2xpZW50SGVpZ2h0KTtcbiAgfVxufVxuXG5Cb290c3RyYXBUYWJsZS5wcm9wVHlwZXMgPSB7XG4gIGtleUZpZWxkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBoZWlnaHQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIG1heEhlaWdodDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgZGF0YTogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbUmVhY3QuUHJvcFR5cGVzLmFycmF5LCBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XSksXG4gIHJlbW90ZTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsIC8vIHJlbW90ZSBkYXRhLCBkZWZhdWx0IGlzIGZhbHNlXG4gIHN0cmlwZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBib3JkZXJlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGhvdmVyOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgY29uZGVuc2VkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgcGFnaW5hdGlvbjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIHNlYXJjaFBsYWNlaG9sZGVyOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBzZWxlY3RSb3c6IFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4gICAgbW9kZTogUmVhY3QuUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgIENvbnN0LlJPV19TRUxFQ1RfTk9ORSxcbiAgICAgIENvbnN0LlJPV19TRUxFQ1RfU0lOR0xFLFxuICAgICAgQ29uc3QuUk9XX1NFTEVDVF9NVUxUSVxuICAgIF0pLFxuICAgIGJnQ29sb3I6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2VsZWN0ZWQ6IFJlYWN0LlByb3BUeXBlcy5hcnJheSxcbiAgICBvblNlbGVjdDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TZWxlY3RBbGw6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIGNsaWNrVG9TZWxlY3Q6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGhpZGVTZWxlY3RDb2x1bW46IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGNsaWNrVG9TZWxlY3RBbmRFZGl0Q2VsbDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hvd09ubHlTZWxlY3RlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2xcbiAgfSksXG4gIGNlbGxFZGl0OiBSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgIG1vZGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgYmx1clRvU2F2ZTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgYWZ0ZXJTYXZlQ2VsbDogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbiAgfSksXG4gIGluc2VydFJvdzogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGRlbGV0ZVJvdzogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIHNlYXJjaDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGNvbHVtbkZpbHRlcjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIHRyQ2xhc3NOYW1lOiBSZWFjdC5Qcm9wVHlwZXMuYW55LFxuICBvcHRpb25zOiBSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNsZWFyU2VhcmNoOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBzb3J0TmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzb3J0T3JkZXI6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWZ0ZXJUYWJsZUNvbXBsZXRlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBhZnRlckRlbGV0ZVJvdzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgYWZ0ZXJJbnNlcnRSb3c6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIGFmdGVyU2VhcmNoOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBhZnRlckNvbHVtbkZpbHRlcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Sb3dDbGljazogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgcGFnZTogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBzaXplUGVyUGFnZUxpc3Q6IFJlYWN0LlByb3BUeXBlcy5hcnJheSxcbiAgICBzaXplUGVyUGFnZTogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBwYWdpbmF0aW9uU2l6ZTogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBvblNvcnRDaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uUGFnZUNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TaXplUGVyUGFnZUxpc3Q6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG5vRGF0YVRleHQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgaGFuZGxlQ29uZmlybURlbGV0ZVJvdzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgcHJlUGFnZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBuZXh0UGFnZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmaXJzdFBhZ2U6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgbGFzdFBhZ2U6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbiAgfSksXG4gIGZldGNoSW5mbzogUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBkYXRhVG90YWxTaXplOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICB9KSxcbiAgZXhwb3J0Q1NWOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgY3N2RmlsZU5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbn07XG5Cb290c3RyYXBUYWJsZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGhlaWdodDogXCIxMDAlXCIsXG4gIG1heEhlaWdodDogdW5kZWZpbmVkLFxuICBzdHJpcGVkOiBmYWxzZSxcbiAgYm9yZGVyZWQ6IHRydWUsXG4gIGhvdmVyOiBmYWxzZSxcbiAgY29uZGVuc2VkOiBmYWxzZSxcbiAgcGFnaW5hdGlvbjogZmFsc2UsXG4gIHNlYXJjaFBsYWNlaG9sZGVyOiB1bmRlZmluZWQsXG4gIHNlbGVjdFJvdzoge1xuICAgIG1vZGU6IENvbnN0LlJPV19TRUxFQ1RfTk9ORSxcbiAgICBiZ0NvbG9yOiBDb25zdC5ST1dfU0VMRUNUX0JHX0NPTE9SLFxuICAgIHNlbGVjdGVkOiBbXSxcbiAgICBvblNlbGVjdDogdW5kZWZpbmVkLFxuICAgIG9uU2VsZWN0QWxsOiB1bmRlZmluZWQsXG4gICAgY2xpY2tUb1NlbGVjdDogZmFsc2UsXG4gICAgaGlkZVNlbGVjdENvbHVtbjogZmFsc2UsXG4gICAgY2xpY2tUb1NlbGVjdEFuZEVkaXRDZWxsOiBmYWxzZSxcbiAgICBzaG93T25seVNlbGVjdGVkOiBmYWxzZVxuICB9LFxuICBjZWxsRWRpdDoge1xuICAgIG1vZGU6IENvbnN0LkNFTExfRURJVF9OT05FLFxuICAgIGJsdXJUb1NhdmU6IGZhbHNlLFxuICAgIGFmdGVyU2F2ZUNlbGw6IHVuZGVmaW5lZFxuICB9LFxuICBpbnNlcnRSb3c6IGZhbHNlLFxuICBkZWxldGVSb3c6IGZhbHNlLFxuICBzZWFyY2g6IGZhbHNlLFxuICBtdWx0aUNvbHVtblNlYXJjaDogZmFsc2UsXG4gIGNvbHVtbkZpbHRlcjogZmFsc2UsXG4gIHRyQ2xhc3NOYW1lOiAnJyxcbiAgb3B0aW9uczoge1xuICAgIGNsZWFyU2VhcmNoOiBmYWxzZSxcbiAgICBzb3J0TmFtZTogdW5kZWZpbmVkLFxuICAgIHNvcnRPcmRlcjogdW5kZWZpbmVkLFxuICAgIGFmdGVyVGFibGVDb21wbGV0ZTogdW5kZWZpbmVkLFxuICAgIGFmdGVyRGVsZXRlUm93OiB1bmRlZmluZWQsXG4gICAgYWZ0ZXJJbnNlcnRSb3c6IHVuZGVmaW5lZCxcbiAgICBhZnRlclNlYXJjaDogdW5kZWZpbmVkLFxuICAgIGFmdGVyQ29sdW1uRmlsdGVyOiB1bmRlZmluZWQsXG4gICAgb25Sb3dDbGljazogdW5kZWZpbmVkLFxuICAgIHBhZ2U6IHVuZGVmaW5lZCxcbiAgICBzaXplUGVyUGFnZUxpc3Q6IENvbnN0LlNJWkVfUEVSX1BBR0VfTElTVCxcbiAgICBzaXplUGVyUGFnZTogdW5kZWZpbmVkLFxuICAgIHBhZ2luYXRpb25TaXplOiBDb25zdC5QQUdJTkFUSU9OX1NJWkUsXG4gICAgb25TaXplUGVyUGFnZUxpc3Q6IHVuZGVmaW5lZCxcbiAgICBub0RhdGFUZXh0OiB1bmRlZmluZWQsXG4gICAgaGFuZGxlQ29uZmlybURlbGV0ZVJvdzogdW5kZWZpbmVkLFxuICAgIHByZVBhZ2U6IENvbnN0LlBSRV9QQUdFLFxuICAgIG5leHRQYWdlOiBDb25zdC5ORVhUX1BBR0UsXG4gICAgZmlyc3RQYWdlOiBDb25zdC5GSVJTVF9QQUdFLFxuICAgIGxhc3RQYWdlOiBDb25zdC5MQVNUX1BBR0VcbiAgfSxcbiAgZmV0Y2hJbmZvOiB7XG4gICAgZGF0YVRvdGFsU2l6ZTogMCxcbiAgfSxcbiAgZXhwb3J0Q1NWOiBmYWxzZSxcbiAgY3N2RmlsZU5hbWU6IHVuZGVmaW5lZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9vdHN0cmFwVGFibGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9Cb290c3RyYXBUYWJsZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9XG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jbGFzc25hbWVzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQge1xuICBTT1JUX0RFU0M6IFwiZGVzY1wiLFxuICBTT1JUX0FTQzogXCJhc2NcIixcbiAgU0laRV9QRVJfUEFHRTogMTAsXG4gIE5FWFRfUEFHRTogXCI+XCIsXG4gIExBU1RfUEFHRTogXCI+PlwiLFxuICBQUkVfUEFHRTogXCI8XCIsXG4gIEZJUlNUX1BBR0U6IFwiPDxcIixcbiAgUk9XX1NFTEVDVF9CR19DT0xPUjogXCJcIixcbiAgUk9XX1NFTEVDVF9OT05FOiBcIm5vbmVcIixcbiAgUk9XX1NFTEVDVF9TSU5HTEU6IFwicmFkaW9cIixcbiAgUk9XX1NFTEVDVF9NVUxUSTogXCJjaGVja2JveFwiLFxuICBDRUxMX0VESVRfTk9ORTogXCJub25lXCIsXG4gIENFTExfRURJVF9DTElDSzogXCJjbGlja1wiLFxuICBDRUxMX0VESVRfREJDTElDSzogXCJkYmNsaWNrXCIsXG4gIFNJWkVfUEVSX1BBR0VfTElTVDogWzEwLCAyNSwgMzAsIDUwXSxcbiAgUEFHSU5BVElPTl9TSVpFOiA1LFxuICBOT19EQVRBX1RFWFQ6IFwiVGhlcmUgaXMgbm8gZGF0YSB0byBkaXNwbGF5XCIsXG4gIFNIT1dfT05MWV9TRUxFQ1Q6IFwiU2hvdyBTZWxlY3RlZCBPbmx5XCIsXG4gIFNIT1dfQUxMOiBcIlNob3cgQWxsXCIsXG4gIEZJTFRFUl9ERUxBWTogNTAwLFxuICBGSUxURVJfVFlQRToge1xuICAgIFRFWFQ6IFwiVGV4dEZpbHRlclwiLFxuICAgIFNFTEVDVDogXCJTZWxlY3RGaWx0ZXJcIixcbiAgICBOVU1CRVI6IFwiTnVtYmVyRmlsdGVyXCIsXG4gICAgREFURTogXCJEYXRlRmlsdGVyXCIsXG4gICAgQ1VTVE9NOiBcIkN1c3RvbUZpbHRlclwiXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL0NvbnN0LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IENvbnN0IGZyb20gJy4vQ29uc3QnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJztcbmltcG9ydCBjbGFzc1NldCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBTZWxlY3RSb3dIZWFkZXJDb2x1bW4gZnJvbSAnLi9TZWxlY3RSb3dIZWFkZXJDb2x1bW4nO1xuXG5jbGFzcyBDaGVja2JveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7IHRoaXMudXBkYXRlKHRoaXMucHJvcHMuY2hlY2tlZCk7IH1cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykgeyB0aGlzLnVwZGF0ZShwcm9wcy5jaGVja2VkKTsgfVxuICB1cGRhdGUoY2hlY2tlZCkge1xuICAgIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLmluZGV0ZXJtaW5hdGUgPSBjaGVja2VkID09PSAnaW5kZXRlcm1pbmF0ZSc7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxpbnB1dCBjbGFzc05hbWU9J3JlYWN0LWJzLXNlbGVjdC1hbGwnIHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3RoaXMucHJvcHMuY2hlY2tlZH0gb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2V9IC8+XG4gIH1cbn1cblxuY2xhc3MgVGFibGVIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zZWxlY3RSb3dDb2x1bW5XaWR0aCA9IG51bGw7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICB2YXIgY29udGFpbmVyQ2xhc3NlcyA9IGNsYXNzU2V0KFwidGFibGUtaGVhZGVyXCIpO1xuICAgIHZhciB0YWJsZUNsYXNzZXMgPSBjbGFzc1NldChcInRhYmxlXCIsIFwidGFibGUtaG92ZXJcIiwge1xuICAgICAgICBcInRhYmxlLWJvcmRlcmVkXCI6IHRoaXMucHJvcHMuYm9yZGVyZWQsXG4gICAgICAgIFwidGFibGUtY29uZGVuc2VkXCI6IHRoaXMucHJvcHMuY29uZGVuc2VkXG4gICAgfSk7XG4gICAgdmFyIHNlbGVjdFJvd0hlYWRlckNvbCA9IHRoaXMucHJvcHMuaGlkZVNlbGVjdENvbHVtbj9udWxsOnRoaXMucmVuZGVyU2VsZWN0Um93SGVhZGVyKCk7XG4gICAgdGhpcy5fYXR0YWNoQ2xlYXJTb3J0Q2FyZXRGdW5jKCk7XG5cbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLWhlYWRlci13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgcmVmPVwiY29udGFpbmVyXCIgY2xhc3NOYW1lPXtjb250YWluZXJDbGFzc2VzfT5cbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXt0YWJsZUNsYXNzZXN9PlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHIgcmVmPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAge3NlbGVjdFJvd0hlYWRlckNvbH1cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZW5kZXJTZWxlY3RSb3dIZWFkZXIoKXtcbiAgICBpZih0aGlzLnByb3BzLnJvd1NlbGVjdFR5cGUgPT0gQ29uc3QuUk9XX1NFTEVDVF9TSU5HTEUpIHtcbiAgICAgIHJldHVybiAoPFNlbGVjdFJvd0hlYWRlckNvbHVtbiB3aWR0aD17dGhpcy5zZWxlY3RSb3dDb2x1bW5XaWR0aH0+PC9TZWxlY3RSb3dIZWFkZXJDb2x1bW4+KTtcbiAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnJvd1NlbGVjdFR5cGUgPT0gQ29uc3QuUk9XX1NFTEVDVF9NVUxUSSl7XG4gICAgICByZXR1cm4gKDxTZWxlY3RSb3dIZWFkZXJDb2x1bW4gd2lkdGg9e3RoaXMuc2VsZWN0Um93Q29sdW1uV2lkdGh9PlxuICAgICAgICAgIDxDaGVja2JveCBvbkNoYW5nZT17dGhpcy5wcm9wcy5vblNlbGVjdEFsbFJvd30gY2hlY2tlZD17dGhpcy5wcm9wcy5pc1NlbGVjdEFsbH0vPlxuICAgICAgICA8L1NlbGVjdFJvd0hlYWRlckNvbHVtbj5cbiAgICAgICk7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBfYXR0YWNoQ2xlYXJTb3J0Q2FyZXRGdW5jKCl7XG4gICAgaWYoQXJyYXkuaXNBcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuKSl7XG4gICAgICBmb3IobGV0IGk9MDtpPHRoaXMucHJvcHMuY2hpbGRyZW4ubGVuZ3RoO2krKyl7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5wcm9wcy5jaGlsZHJlbltpXS5wcm9wcy5kYXRhRmllbGQ7XG4gICAgICAgIGNvbnN0IHNvcnQgPSBmaWVsZCA9PT0gdGhpcy5wcm9wcy5zb3J0TmFtZSA/IHRoaXMucHJvcHMuc29ydE9yZGVyIDogdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuW2ldID1cbiAgICAgICAgICBSZWFjdC5jbG9uZUVsZW1lbnQodGhpcy5wcm9wcy5jaGlsZHJlbltpXSxcbiAgICAgICAgICAgIHsga2V5OiBpLCBvblNvcnQ6IHRoaXMucHJvcHMub25Tb3J0LCBzb3J0IH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHRoaXMucHJvcHMuY2hpbGRyZW4ucHJvcHMuZGF0YUZpZWxkO1xuICAgICAgY29uc3Qgc29ydCA9IGZpZWxkID09PSB0aGlzLnByb3BzLnNvcnROYW1lID8gdGhpcy5wcm9wcy5zb3J0T3JkZXIgOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuID1cbiAgICAgICAgUmVhY3QuY2xvbmVFbGVtZW50KHRoaXMucHJvcHMuY2hpbGRyZW4sIHtrZXk6IDAsIG9uU29ydDogdGhpcy5wcm9wcy5vblNvcnQsIHNvcnR9KTtcbiAgICB9XG4gIH1cblxuICBmaXRIZWFkZXIoaGVhZGVyUHJvcHMsIGlzVmVydGljYWxTY3JvbGxCYXIpe1xuICAgIGlmKEFycmF5LmlzQXJyYXkodGhpcy5wcm9wcy5jaGlsZHJlbikpe1xuICAgICAgbGV0IHN0YXJ0UG9zaXRpb24gPSAodGhpcy5wcm9wcy5yb3dTZWxlY3RUeXBlID09IENvbnN0LlJPV19TRUxFQ1RfU0lOR0xFIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJvd1NlbGVjdFR5cGUgPT0gQ29uc3QuUk9XX1NFTEVDVF9NVUxUSSkgJiYgIXRoaXMucHJvcHMuaGlkZVNlbGVjdENvbHVtbiA/IDE6MDtcbiAgICAgIGlmKHN0YXJ0UG9zaXRpb24gPT0gMSlcbiAgICAgICAgdGhpcy5zZWxlY3RSb3dDb2x1bW5XaWR0aCA9IGhlYWRlclByb3BzWzBdLndpZHRoO1xuICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLnByb3BzLmNoaWxkcmVuLmxlbmd0aDtpKyspe1xuICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuW2ldID1cbiAgICAgICAgICBSZWFjdC5jbG9uZUVsZW1lbnQodGhpcy5wcm9wcy5jaGlsZHJlbltpXSwge3dpZHRoOiBoZWFkZXJQcm9wc1tpK3N0YXJ0UG9zaXRpb25dLndpZHRoK1wicHhcIn0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuID1cbiAgICAgICAgUmVhY3QuY2xvbmVFbGVtZW50KHRoaXMucHJvcHMuY2hpbGRyZW4sIHt3aWR0aDogaGVhZGVyUHJvcHNbMF0ud2lkdGgrXCJweFwifSk7XG4gICAgfVxuICAgIGlmKHRoaXMucHJvcHMuY29uZGVuc2VkICYmICF0aGlzLnByb3BzLmlzRmlsdGVyZWQpIHtcbiAgICAgIHRoaXMucmVmcy5jb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gXCIzNnB4XCI7XG4gICAgfVxuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICBpZihpc1ZlcnRpY2FsU2Nyb2xsQmFyKVxuICAgICAgdGhpcy5yZWZzLmNvbnRhaW5lci5zdHlsZS5tYXJnaW5SaWdodCA9IFV0aWwuZ2V0U2Nyb2xsQmFyV2lkdGgoKSArIFwicHhcIjtcbiAgfVxufVxuVGFibGVIZWFkZXIucHJvcFR5cGVzID0ge1xuICByb3dTZWxlY3RUeXBlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBvblNvcnQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdEFsbFJvdzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIHNvcnROYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBzb3J0T3JkZXI6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGhpZGVTZWxlY3RDb2x1bW46IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBib3JkZXJlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGNvbmRlbnNlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGlzRmlsdGVyZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBpc1NlbGVjdEFsbDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mKFt0cnVlLCAnaW5kZXRlcm1pbmF0ZScsIGZhbHNlXSlcbn07XG5cblRhYmxlSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbn07XG5leHBvcnQgZGVmYXVsdCBUYWJsZUhlYWRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL1RhYmxlSGVhZGVyLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzZfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0RE9NXCIsXCJjb21tb25qczJcIjpcInJlYWN0LWRvbVwiLFwiY29tbW9uanNcIjpcInJlYWN0LWRvbVwiLFwiYW1kXCI6XCJyZWFjdC1kb21cIn1cbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4vQ29uc3QnO1xuaW1wb3J0IGNsYXNzU2V0IGZyb20gJ2NsYXNzbmFtZXMnO1xuZXhwb3J0IGRlZmF1bHQge1xuXG4gIHJlbmRlclNvcnRDYXJldChvcmRlcikge1xuICAgIHZhciB3cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgd3JhcC5jbGFzc05hbWUgPSBcIm9yZGVyXCI7XG4gICAgaWYob3JkZXIgPT0gQ29uc3QuU09SVF9BU0MpIHdyYXAuY2xhc3NOYW1lICs9IFwiIGRyb3B1cFwiO1xuICAgIHZhciBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGlubmVyLmNsYXNzTmFtZSA9IFwiY2FyZXRcIjtcbiAgICBpbm5lci5zdHlsZS5tYXJnaW4gPSBcIjEwcHggNXB4XCI7XG4gICAgd3JhcC5hcHBlbmRDaGlsZChpbm5lcik7XG4gICAgcmV0dXJuIHdyYXA7XG4gIH0sXG5cbiAgcmVuZGVyUmVhY3RTb3J0Q2FyZXQob3JkZXIpe1xuICAgIHZhciBvcmRlckNsYXNzID0gY2xhc3NTZXQoXCJvcmRlclwiLCB7XG4gICAgICAnZHJvcHVwJzogb3JkZXIgPT0gQ29uc3QuU09SVF9BU0NcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtvcmRlckNsYXNzfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZXRcIiBzdHlsZT17e21hcmdpbjogJzEwcHggNXB4J319Pjwvc3Bhbj5cbiAgICAgIDwvc3Bhbj5cbiAgICApO1xuICB9LFxuXG4gIGdldFNjcm9sbEJhcldpZHRoKCl7XG4gICAgdmFyIGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGlubmVyLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgaW5uZXIuc3R5bGUuaGVpZ2h0ID0gXCIyMDBweFwiO1xuXG4gICAgdmFyIG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3V0ZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgb3V0ZXIuc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICBvdXRlci5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcbiAgICBvdXRlci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICBvdXRlci5zdHlsZS53aWR0aCA9IFwiMjAwcHhcIjtcbiAgICBvdXRlci5zdHlsZS5oZWlnaHQgPSBcIjE1MHB4XCI7XG4gICAgb3V0ZXIuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgIG91dGVyLmFwcGVuZENoaWxkIChpbm5lcik7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkIChvdXRlcik7XG4gICAgdmFyIHcxID0gaW5uZXIub2Zmc2V0V2lkdGg7XG4gICAgb3V0ZXIuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgICB2YXIgdzIgPSBpbm5lci5vZmZzZXRXaWR0aDtcbiAgICBpZiAodzEgPT0gdzIpIHcyID0gb3V0ZXIuY2xpZW50V2lkdGg7XG5cbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkIChvdXRlcik7XG5cbiAgICByZXR1cm4gKHcxIC0gdzIpO1xuICB9XG5cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc1NldCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBDb25zdCBmcm9tICcuL0NvbnN0JztcblxuY2xhc3MgU2VsZWN0Um93SGVhZGVyQ29sdW1uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG4gIHJlbmRlcigpe1xuICAgIHZhciB0aFN0eWxlID0ge1xuICAgICAgd2lkdGg6IHBhcnNlSW50KHRoaXMucHJvcHMud2lkdGgpP3RoaXMucHJvcHMud2lkdGg6MzVcbiAgICB9O1xuXG4gICAgcmV0dXJuKFxuICAgICAgPHRoIHN0eWxlPXt0aFN0eWxlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aC1pbm5lciB0YWJsZS1oZWFkZXItY29sdW1uXCI+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90aD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0Um93SGVhZGVyQ29sdW1uO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvU2VsZWN0Um93SGVhZGVyQ29sdW1uLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb25zdCBmcm9tICcuL0NvbnN0JztcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnLi9UYWJsZVJvdyc7XG5pbXBvcnQgVGFibGVDb2x1bW4gZnJvbSAnLi9UYWJsZUNvbHVtbic7XG5pbXBvcnQgVGFibGVFZGl0Q29sdW1uIGZyb20gJy4vVGFibGVFZGl0Q29sdW1uJztcbmltcG9ydCBjbGFzc1NldCBmcm9tICdjbGFzc25hbWVzJztcblxudmFyIGlzRnVuPWZ1bmN0aW9uKG9iail7XG4gIHJldHVybiBvYmomJih0eXBlb2Ygb2JqPT09XCJmdW5jdGlvblwiKTtcblxufTtcbmNsYXNzIFRhYmxlQm9keSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VyckVkaXRDZWxsOiBudWxsXG4gICAgfTtcbiAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgdGhpcy5hZGp1c3RCb2R5KCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKXtcbiAgICB0aGlzLmFkanVzdEJvZHkoKTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHZhciBjb250YWluZXJDbGFzc2VzID0gY2xhc3NTZXQoXCJ0YWJsZS1jb250YWluZXJcIik7XG5cbiAgICB2YXIgdGFibGVDbGFzc2VzID0gY2xhc3NTZXQoXCJ0YWJsZVwiLCB7XG4gICAgICAndGFibGUtc3RyaXBlZCc6IHRoaXMucHJvcHMuc3RyaXBlZCxcbiAgICAgICd0YWJsZS1ib3JkZXJlZCc6IHRoaXMucHJvcHMuYm9yZGVyZWQsXG4gICAgICAndGFibGUtaG92ZXInOiB0aGlzLnByb3BzLmhvdmVyLFxuICAgICAgJ3RhYmxlLWNvbmRlbnNlZCc6IHRoaXMucHJvcHMuY29uZGVuc2VkXG4gICAgfSk7XG5cbiAgICB2YXIgaXNTZWxlY3RSb3dEZWZpbmVkID0gdGhpcy5faXNTZWxlY3RSb3dEZWZpbmVkKCk7XG4gICAgdmFyIHRhYmxlSGVhZGVyID0gdGhpcy5yZW5kZXJUYWJsZUhlYWRlcihpc1NlbGVjdFJvd0RlZmluZWQpO1xuXG4gICAgdmFyIHRhYmxlUm93cyA9IHRoaXMucHJvcHMuZGF0YS5tYXAoZnVuY3Rpb24oZGF0YSwgcil7XG4gICAgICB2YXIgdGFibGVDb2x1bW5zID0gdGhpcy5wcm9wcy5jb2x1bW5zLm1hcChmdW5jdGlvbihjb2x1bW4sIGkpe1xuICAgICAgICB2YXIgZmllbGRWYWx1ZSA9IGRhdGFbY29sdW1uLm5hbWVdO1xuICAgICAgICBpZih0aGlzLmVkaXRpbmcgJiZcbiAgICAgICAgICBjb2x1bW4ubmFtZSAhPT0gdGhpcy5wcm9wcy5rZXlGaWVsZCAmJiAvLyBLZXkgZmllbGQgY2FuJ3QgYmUgZWRpdFxuICAgICAgICAgIGNvbHVtbi5lZGl0YWJsZSAmJiAvLyBjb2x1bW4gaXMgZWRpdGFibGU/IGRlZmF1bHQgaXMgdHJ1ZSwgdXNlciBjYW4gc2V0IGl0IGZhbHNlXG4gICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyRWRpdENlbGwgIT0gbnVsbCAmJlxuICAgICAgICAgIHRoaXMuc3RhdGUuY3VyckVkaXRDZWxsLnJpZCA9PSByICYmXG4gICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyRWRpdENlbGwuY2lkID09IGkpe1xuICAgICAgICAgICAgdmFyIGZvcm1hdD1jb2x1bW4uZm9ybWF0P2Z1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICAgICAgcmV0dXJuIGNvbHVtbi5mb3JtYXQodmFsdWUsIGRhdGEsIGNvbHVtbi5mb3JtYXRFeHRyYURhdGEpLnJlcGxhY2UoLzwuKj8+L2csJycpO1xuICAgICAgICAgICAgfTpmYWxzZTtcblxuICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgPFRhYmxlRWRpdENvbHVtbiBjb21wbGV0ZUVkaXQ9e3RoaXMuaGFuZGxlQ29tcGxldGVFZGl0Q2VsbC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYWRkIGJ5IGJsdWVzcHJpbmcgZm9yIGNvbHVtbiBlZGl0b3IgY3VzdG9taXplXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdGFibGU9e2lzRnVuKGNvbHVtbi5lZGl0YWJsZSk/Y29sdW1uLmVkaXRhYmxlKGZpZWxkVmFsdWUsZGF0YSxyLGkpOmNvbHVtbi5lZGl0YWJsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9e2NvbHVtbi5mb3JtYXQ/Zm9ybWF0OmZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibHVyVG9TYXZlPXt0aGlzLnByb3BzLmNlbGxFZGl0LmJsdXJUb1NhdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93SW5kZXg9e3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sSW5kZXg9e2l9PlxuICAgICAgICAgICAgICAgIHtmaWVsZFZhbHVlfVxuICAgICAgICAgICAgICA8L1RhYmxlRWRpdENvbHVtbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgIC8vYWRkIGJ5IGJsdWVzcHJpbmcgZm9yIGNsYXNzTmFtZSBjdXN0b21pemVcbiAgICAgICAgICB2YXIgdGRDbGFzc05hbWU9aXNGdW4oY29sdW1uLmNsYXNzTmFtZSk/Y29sdW1uLmNsYXNzTmFtZShmaWVsZFZhbHVlLGRhdGEscixpKTpjb2x1bW4uY2xhc3NOYW1lO1xuXG4gICAgICAgICAgaWYodHlwZW9mIGNvbHVtbi5mb3JtYXQgIT09IFwidW5kZWZpbmVkXCIpe1xuICAgICAgICAgICAgdmFyIGZvcm1hdHRlZFZhbHVlID0gY29sdW1uLmZvcm1hdChmaWVsZFZhbHVlLCBkYXRhLCBjb2x1bW4uZm9ybWF0RXh0cmFEYXRhKTtcbiAgICAgICAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoZm9ybWF0dGVkVmFsdWUpKSB7XG4gICAgICAgICAgICAgIGZvcm1hdHRlZFZhbHVlID0gPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogZm9ybWF0dGVkVmFsdWV9fT48L2Rpdj47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgIDxUYWJsZUNvbHVtbiBkYXRhQWxpZ249e2NvbHVtbi5hbGlnbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGRDbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsRWRpdD17dGhpcy5wcm9wcy5jZWxsRWRpdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbj17Y29sdW1uLmhpZGRlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRWRpdD17dGhpcy5oYW5kbGVFZGl0Q2VsbC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e2NvbHVtbi53aWR0aH0+XG4gICAgICAgICAgICAgICAge2Zvcm1hdHRlZFZhbHVlfVxuICAgICAgICAgICAgICA8L1RhYmxlQ29sdW1uPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgPFRhYmxlQ29sdW1uIGRhdGFBbGlnbj17Y29sdW1uLmFsaWdufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0ZENsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxFZGl0PXt0aGlzLnByb3BzLmNlbGxFZGl0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuPXtjb2x1bW4uaGlkZGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FZGl0PXt0aGlzLmhhbmRsZUVkaXRDZWxsLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17Y29sdW1uLndpZHRofT5cbiAgICAgICAgICAgICAgICB7ZmllbGRWYWx1ZX1cbiAgICAgICAgICAgICAgPC9UYWJsZUNvbHVtbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMpO1xuICAgICAgdmFyIHNlbGVjdGVkID0gdGhpcy5wcm9wcy5zZWxlY3RlZFJvd0tleXMuaW5kZXhPZihkYXRhW3RoaXMucHJvcHMua2V5RmllbGRdKSAhPSAtMTtcbiAgICAgIHZhciBzZWxlY3RSb3dDb2x1bW4gPSBpc1NlbGVjdFJvd0RlZmluZWQgJiYgIXRoaXMucHJvcHMuc2VsZWN0Um93LmhpZGVTZWxlY3RDb2x1bW4/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclNlbGVjdFJvd0NvbHVtbihzZWxlY3RlZCk6bnVsbDtcbiAgICAgIC8vYWRkIGJ5IGJsdWVzcHJpbmcgZm9yIGNsYXNzTmFtZSBjdXN0b21pemVcbiAgICAgIHZhciB0ckNsYXNzTmFtZT1pc0Z1bih0aGlzLnByb3BzLnRyQ2xhc3NOYW1lKT90aGlzLnByb3BzLnRyQ2xhc3NOYW1lKGRhdGEscik6dGhpcy5wcm9wcy50ckNsYXNzTmFtZTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUYWJsZVJvdyBpc1NlbGVjdGVkPXtzZWxlY3RlZH0ga2V5PXtyfSBjbGFzc05hbWU9e3RyQ2xhc3NOYW1lfVxuICAgICAgICAgIHNlbGVjdFJvdz17aXNTZWxlY3RSb3dEZWZpbmVkP3RoaXMucHJvcHMuc2VsZWN0Um93OnVuZGVmaW5lZH1cbiAgICAgICAgICBlbmFibGVDZWxsRWRpdD17dGhpcy5wcm9wcy5jZWxsRWRpdC5tb2RlICE9PSBDb25zdC5DRUxMX0VESVRfTk9ORX1cbiAgICAgICAgICBvblJvd0NsaWNrPXt0aGlzLmhhbmRsZVJvd0NsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgICAgb25TZWxlY3RSb3c9e3RoaXMuaGFuZGxlU2VsZWN0Um93LmJpbmQodGhpcyl9PlxuICAgICAgICAgIHtzZWxlY3RSb3dDb2x1bW59XG4gICAgICAgICAge3RhYmxlQ29sdW1uc31cbiAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgIClcbiAgICB9LCB0aGlzKTtcblxuICAgIGlmKHRhYmxlUm93cy5sZW5ndGggPT09IDApe1xuICAgICAgdGFibGVSb3dzLnB1c2goXG4gICAgICA8VGFibGVSb3cga2V5PVwiIyN0YWJsZS1lbXB0eSMjXCI+XG4gICAgICAgIDx0ZCBjb2xTcGFuPXt0aGlzLnByb3BzLmNvbHVtbnMubGVuZ3RoKyhpc1NlbGVjdFJvd0RlZmluZWQ/MTowKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlYWN0LWJzLXRhYmxlLW5vLWRhdGFcIj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLm5vRGF0YVRleHR8fENvbnN0Lk5PX0RBVEFfVEVYVH1cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvVGFibGVSb3c+KTtcbiAgICB9XG5cbiAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZTtcblxuICAgIHZhciBoZWlnaHQgPSB0aGlzLmNhbGN1bGF0ZUNvbnRhaW5lckhlaWdodCgpLnRvU3RyaW5nKCk7XG5cbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IHJlZj1cImNvbnRhaW5lclwiIGNsYXNzTmFtZT17Y29udGFpbmVyQ2xhc3Nlc30gc3R5bGU9e3toZWlnaHQ6IGhlaWdodH19PlxuICAgICAgICA8dGFibGUgcmVmPVwiYm9keVwiIGNsYXNzTmFtZT17dGFibGVDbGFzc2VzfT5cbiAgICAgICAgICB7dGFibGVIZWFkZXJ9XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge3RhYmxlUm93c31cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyVGFibGVIZWFkZXIoaXNTZWxlY3RSb3dEZWZpbmVkKXtcbiAgICB2YXIgc2VsZWN0Um93SGVhZGVyID0gbnVsbDtcblxuICAgIGlmKGlzU2VsZWN0Um93RGVmaW5lZCl7XG4gICAgICBsZXQgc3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOjM1LFxuICAgICAgICBtaW5XaWR0aDozNVxuICAgICAgfVxuICAgICAgc2VsZWN0Um93SGVhZGVyID0gdGhpcy5wcm9wcy5zZWxlY3RSb3cuaGlkZVNlbGVjdENvbHVtbj9udWxsOig8dGggc3R5bGU9e3N0eWxlfSBrZXk9ey0xfT48L3RoPik7XG4gICAgfVxuICAgIHZhciB0aGVhZGVyID0gdGhpcy5wcm9wcy5jb2x1bW5zLm1hcChmdW5jdGlvbihjb2x1bW4sIGkpe1xuICAgICAgbGV0IHdpZHRoID0gY29sdW1uLndpZHRoID09IG51bGw/Y29sdW1uLndpZHRoOnBhcnNlSW50KGNvbHVtbi53aWR0aCk7XG4gICAgICBsZXQgc3R5bGU9e1xuICAgICAgICBkaXNwbGF5OiBjb2x1bW4uaGlkZGVuP1wibm9uZVwiOm51bGwsXG4gICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgbWF4V2lkdGg6IHdpZHRoXG4gICAgICAgIC8qKiBhZGQgbWluLXdkdGggdG8gZml4IHVzZXIgYXNzaWduIGNvbHVtbiB3aWR0aCBub3QgZXEgb2Zmc2V0V2lkdGggaW4gbGFyZ2UgY29sdW1uIHRhYmxlICoqL1xuICAgICAgfTtcbiAgICAgIGxldCBzb3J0Q2FlcnQgPSBjb2x1bW4uc29ydD8oVXRpbC5yZW5kZXJSZWFjdFNvcnRDYXJldChDb25zdC5TT1JUX0RFU0MpKTpudWxsO1xuICAgICAgcmV0dXJuICg8dGggc3R5bGU9e3N0eWxlfSBrZXk9e2l9IGNsYXNzTmFtZT17Y29sdW1uLmNsYXNzTmFtZX0+e2NvbHVtbi50ZXh0fXtzb3J0Q2FlcnR9PC90aD4pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuKFxuICAgICAgPHRoZWFkIHJlZj1cImhlYWRlclwiPlxuICAgICAgICA8dHI+e3NlbGVjdFJvd0hlYWRlcn17dGhlYWRlcn08L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICApXG4gIH1cblxuICBoYW5kbGVSb3dDbGljayhyb3dJbmRleCl7XG4gICAgdmFyIGtleSwgc2VsZWN0ZWRSb3c7XG4gICAgdGhpcy5wcm9wcy5kYXRhLmZvckVhY2goZnVuY3Rpb24ocm93LCBpKXtcbiAgICAgIGlmKGkgPT0gcm93SW5kZXgtMSl7XG4gICAgICAgIGtleSA9IHJvd1t0aGlzLnByb3BzLmtleUZpZWxkXTtcbiAgICAgICAgc2VsZWN0ZWRSb3cgPSByb3c7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gICAgdGhpcy5wcm9wcy5vblJvd0NsaWNrKHNlbGVjdGVkUm93KTtcbiAgfVxuXG4gIGhhbmRsZVNlbGVjdFJvdyhyb3dJbmRleCwgaXNTZWxlY3RlZCl7XG4gICAgdmFyIGtleSwgc2VsZWN0ZWRSb3c7XG4gICAgdGhpcy5wcm9wcy5kYXRhLmZvckVhY2goZnVuY3Rpb24ocm93LCBpKXtcbiAgICAgIGlmKGkgPT0gcm93SW5kZXgtMSl7XG4gICAgICAgIGtleSA9IHJvd1t0aGlzLnByb3BzLmtleUZpZWxkXTtcbiAgICAgICAgc2VsZWN0ZWRSb3cgPSByb3c7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgICB0aGlzLnByb3BzLm9uU2VsZWN0Um93KHNlbGVjdGVkUm93LCBpc1NlbGVjdGVkKTtcbiAgfVxuXG4gIGhhbmRsZVNlbGVjdFJvd0NvbHVtQ2hhbmdlKGUpe1xuICAgIGlmKCF0aGlzLnByb3BzLnNlbGVjdFJvdy5jbGlja1RvU2VsZWN0IHx8ICF0aGlzLnByb3BzLnNlbGVjdFJvdy5jbGlja1RvU2VsZWN0QW5kRWRpdENlbGwpe1xuICAgICAgdGhpcy5oYW5kbGVTZWxlY3RSb3coXG4gICAgICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucm93SW5kZXgsIGUuY3VycmVudFRhcmdldC5jaGVja2VkKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVFZGl0Q2VsbChyb3dJbmRleCwgY29sdW1uSW5kZXgpe1xuICAgIHRoaXMuZWRpdGluZyA9IHRydWU7XG4gICAgaWYodGhpcy5faXNTZWxlY3RSb3dEZWZpbmVkKCkpe1xuICAgICAgY29sdW1uSW5kZXgtLTtcbiAgICAgIGlmKHRoaXMucHJvcHMuc2VsZWN0Um93LmhpZGVTZWxlY3RDb2x1bW4pXG4gICAgICAgIGNvbHVtbkluZGV4Kys7XG4gICAgfVxuICAgIHJvd0luZGV4LS07XG4gICAgdmFyIHN0YXRlT2JqID0ge1xuICAgICAgY3VyckVkaXRDZWxsOiB7XG4gICAgICAgIHJpZDogcm93SW5kZXgsXG4gICAgICAgIGNpZDogY29sdW1uSW5kZXhcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYodGhpcy5wcm9wcy5zZWxlY3RSb3cuY2xpY2tUb1NlbGVjdEFuZEVkaXRDZWxsKXtcbiAgICAgIHRoaXMuaGFuZGxlU2VsZWN0Um93KHJvd0luZGV4KzEsIHRydWUpO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlT2JqKTtcbiAgfVxuXG4gIGNhbmNlbEVkaXQoKXtcbiAgICB2YXIgY3VyckVkaXRDZWxsPXRoaXMuc3RhdGUuY3VyckVkaXRDZWxsO1xuICAgIGlmKGN1cnJFZGl0Q2VsbCl7XG4gICAgICB0aGlzLmhhbmRsZUNvbXBsZXRlRWRpdENlbGwobnVsbCxjdXJyRWRpdENlbGwucmlkLGN1cnJFZGl0Q2VsbC5jaWQpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNvbXBsZXRlRWRpdENlbGwobmV3VmFsLCByb3dJbmRleCwgY29sdW1uSW5kZXgpe1xuICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJFZGl0Q2VsbDogbnVsbH0pO1xuICAgIGlmKG51bGwgIT0gbmV3VmFsKVxuICAgICAgdGhpcy5wcm9wcy5jZWxsRWRpdC5fX29uQ29tcGxldGVFZGl0X18obmV3VmFsLCByb3dJbmRleCwgY29sdW1uSW5kZXgpO1xuICB9XG5cbiAgcmVuZGVyU2VsZWN0Um93Q29sdW1uKHNlbGVjdGVkKXtcbiAgICBpZih0aGlzLnByb3BzLnNlbGVjdFJvdy5tb2RlID09IENvbnN0LlJPV19TRUxFQ1RfU0lOR0xFKSB7XG4gICAgICByZXR1cm4gKDxUYWJsZUNvbHVtbj48aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInNlbGVjdGlvblwiIGNoZWNrZWQ9e3NlbGVjdGVkfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWxlY3RSb3dDb2x1bUNoYW5nZS5iaW5kKHRoaXMpfS8+PC9UYWJsZUNvbHVtbj4pO1xuICAgIH1lbHNlIHtcbiAgICAgIHJldHVybiAoPFRhYmxlQ29sdW1uID48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17c2VsZWN0ZWR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdFJvd0NvbHVtQ2hhbmdlLmJpbmQodGhpcyl9Lz48L1RhYmxlQ29sdW1uPik7XG4gICAgfVxuICB9XG5cbiAgZ2V0Qm9keUhlYWRlckRvbVByb3AoKXtcbiAgICB2YXIgaGVhZGVycyA9IHRoaXMucmVmcy5oZWFkZXIuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzO1xuICAgIHZhciBoZWFkZXJEb21Qcm9wcyA9IFtdO1xuICAgIGZvcihsZXQgaT0wO2k8aGVhZGVycy5sZW5ndGg7aSsrKXtcbiAgICAgIGhlYWRlckRvbVByb3BzLnB1c2goe1xuICAgICAgICB3aWR0aDpoZWFkZXJzW2ldLm9mZnNldFdpZHRoXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGhlYWRlckRvbVByb3BzO1xuICB9XG5cbiAgYWRqdXN0Qm9keSgpIHtcbiAgICB0aGlzLmhhcmRGaXhIZWFkZXJXaWR0aCgpO1xuICAgIGlmKHRoaXMucHJvcHMuY29uZGVuc2VkKSB7XG4gICAgICB0aGlzLnJlZnMuYm9keS5zdHlsZS5tYXJnaW5Ub3AgPSBcIi0zNnB4XCI7XG4gICAgfVxuXG4gICAgaWYodGhpcy5wcm9wcy5tYXhIZWlnaHQgJiZcbiAgICAgIHBhcnNlSW50KHRoaXMucHJvcHMubWF4SGVpZ2h0KSA8IHRoaXMucmVmcy5jb250YWluZXIub2Zmc2V0SGVpZ2h0KSB7XG4gICAgICB0aGlzLnJlZnMuY29udGFpbmVyLnN0eWxlLmhlaWdodCA9ICh0aGlzLnByb3BzLm1heEhlaWdodCAtIDQyKSArIFwicHhcIjtcbiAgICB9XG4gIH1cblxuICBoYXJkRml4SGVhZGVyV2lkdGgoKXtcbiAgICB2YXIgaGVhZGVycyA9IHRoaXMucmVmcy5oZWFkZXIuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzO1xuICAgIGZvcihsZXQgaT0wO2k8aGVhZGVycy5sZW5ndGg7aSsrKXtcbiAgICAgIGhlYWRlcnNbaV0uc3R5bGUud2lkdGggPSBoZWFkZXJzW2ldLm9mZnNldFdpZHRoICsgXCJweFwiO1xuICAgIH1cbiAgfVxuXG4gIGNhbGN1bGF0ZUNvbnRhaW5lckhlaWdodCgpe1xuICAgIGlmKHRoaXMucHJvcHMuaGVpZ2h0ID09IFwiMTAwJVwiKSByZXR1cm4gdGhpcy5wcm9wcy5oZWlnaHQ7XG4gICAgZWxzZXtcbiAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLnByb3BzLmhlaWdodCkgLSA0MjtcbiAgICB9XG4gIH1cblxuICBfaXNTZWxlY3RSb3dEZWZpbmVkKCl7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuc2VsZWN0Um93Lm1vZGUgPT09IENvbnN0LlJPV19TRUxFQ1RfU0lOR0xFIHx8XG4gICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RSb3cubW9kZSA9PT0gQ29uc3QuUk9XX1NFTEVDVF9NVUxUSTtcbiAgfVxufVxuVGFibGVCb2R5LnByb3BUeXBlcyA9IHtcbiAgaGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBkYXRhOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gIGNvbHVtbnM6IFJlYWN0LlByb3BUeXBlcy5hcnJheSxcbiAgc3RyaXBlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGJvcmRlcmVkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgaG92ZXI6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBjb25kZW5zZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBrZXlGaWVsZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VsZWN0ZWRSb3dLZXlzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gIG9uUm93Q2xpY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdFJvdzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIG5vRGF0YVRleHQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbn07XG5leHBvcnQgZGVmYXVsdCBUYWJsZUJvZHk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9UYWJsZUJvZHkuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4vQ29uc3QnO1xuXG5jbGFzcyBUYWJsZVJvdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmNsaWNrTnVtID0gMDtcbiAgfVxuXG4gIHJvd0NsaWNrKGUpe1xuICAgIGlmKGUudGFyZ2V0LnRhZ05hbWUgIT09IFwiSU5QVVRcIiAmJlxuICAgICAgICBlLnRhcmdldC50YWdOYW1lICE9PSBcIlNFTEVDVFwiICYmXG4gICAgICAgIGUudGFyZ2V0LnRhZ05hbWUgIT09IFwiVEVYVEFSRUFcIikge1xuICAgICAgY29uc3Qgcm93SW5kZXggPSBlLmN1cnJlbnRUYXJnZXQucm93SW5kZXg7XG4gICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RSb3cpIHtcbiAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RSb3cuY2xpY2tUb1NlbGVjdCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdFJvdyhyb3dJbmRleCwgIXRoaXMucHJvcHMuaXNTZWxlY3RlZCk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnNlbGVjdFJvdy5jbGlja1RvU2VsZWN0QW5kRWRpdENlbGwpIHtcbiAgICAgICAgICAgIHRoaXMuY2xpY2tOdW0rKztcbiAgICAgICAgICAgIC8qKiBpZiBjbGlja1RvU2VsZWN0QW5kRWRpdENlbGwgaXMgZW5hYmxlZCxcbiAgICAgICAgICAgICAqICB0aGVyZSBzaG91bGQgYmUgYSBkZWxheSB0byBwcmV2ZW50IGEgc2VsZWN0aW9uIGNoYW5nZWQgd2hlblxuICAgICAgICAgICAgICogIHVzZXIgZGJsaWNrIHRvIGVkaXQgY2VsbCBvbiBzYW1lIHJvdyBidXQgZGlmZmVyZW50IGNlbGxcbiAgICAgICAgICAgICoqL1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGlmKHRoaXMuY2xpY2tOdW0gPT09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0Um93KHJvd0luZGV4LCAhdGhpcy5wcm9wcy5pc1NlbGVjdGVkKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLmNsaWNrTnVtID0gMDtcbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMub25Sb3dDbGljaykgdGhpcy5wcm9wcy5vblJvd0NsaWNrKHJvd0luZGV4KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICB0aGlzLmNsaWNrTnVtID0gMDtcbiAgICB2YXIgdHJDc3M9e1xuICAgICAgc3R5bGU6e1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMucHJvcHMuaXNTZWxlY3RlZD90aGlzLnByb3BzLnNlbGVjdFJvdy5iZ0NvbG9yOm51bGxcbiAgICAgIH0sXG4gICAgICBjbGFzc05hbWU6KHRoaXMucHJvcHMuaXNTZWxlY3RlZCAmJiB0aGlzLnByb3BzLnNlbGVjdFJvdy5jbGFzc05hbWUgPyB0aGlzLnByb3BzLnNlbGVjdFJvdy5jbGFzc05hbWUgOiAnJykgKyAodGhpcy5wcm9wcy5jbGFzc05hbWV8fCcnKVxuICAgIH07XG5cbiAgICBpZih0aGlzLnByb3BzLnNlbGVjdFJvdyAmJiAodGhpcy5wcm9wcy5zZWxlY3RSb3cuY2xpY2tUb1NlbGVjdCB8fFxuICAgICAgdGhpcy5wcm9wcy5zZWxlY3RSb3cuY2xpY2tUb1NlbGVjdEFuZEVkaXRDZWxsKSB8fCB0aGlzLnByb3BzLm9uUm93Q2xpY2spe1xuICAgICAgcmV0dXJuKFxuICAgICAgICA8dHIgey4uLnRyQ3NzfSBvbkNsaWNrPXt0aGlzLnJvd0NsaWNrLmJpbmQodGhpcyl9Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvdHI+XG4gICAgICApXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4oXG4gICAgICAgIDx0ciB7Li4udHJDc3N9Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvdHI+XG4gICAgICApXG4gICAgfVxuICB9XG59XG5UYWJsZVJvdy5wcm9wVHlwZXMgPSB7XG4gIGlzU2VsZWN0ZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBlbmFibGVDZWxsRWRpdDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIG9uUm93Q2xpY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdFJvdzogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbn07XG5UYWJsZVJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uUm93Q2xpY2s6IHVuZGVmaW5lZFxufVxuZXhwb3J0IGRlZmF1bHQgVGFibGVSb3c7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9UYWJsZVJvdy5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi9Db25zdCc7XG5cbmNsYXNzIFRhYmxlQ29sdW1uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgc2hvdWxkVXBkYXRlZCA9IHRoaXMucHJvcHMud2lkdGggIT09IG5leHRQcm9wcy53aWR0aFxuICAgICAgfHwgdGhpcy5wcm9wcy5jbGFzc05hbWUgIT09IG5leHRQcm9wcy5jbGFzc05hbWVcbiAgICAgIHx8IHRoaXMucHJvcHMuaGlkZGVuICE9PSBuZXh0UHJvcHMuaGlkZGVuXG4gICAgICB8fCB0aGlzLnByb3BzLmRhdGFBbGlnbiAhPT0gbmV4dFByb3BzLmRhdGFBbGlnblxuICAgICAgfHwgdHlwZW9mIGNoaWxkcmVuICE9PSB0eXBlb2YgbmV4dFByb3BzLmNoaWxkcmVuXG4gICAgICB8fCAoJycrdGhpcy5wcm9wcy5vbkVkaXQpLnRvU3RyaW5nKCkgIT09ICgnJytuZXh0UHJvcHMub25FZGl0KS50b1N0cmluZygpXG5cbiAgICBpZihzaG91bGRVcGRhdGVkKXtcbiAgICAgIHJldHVybiBzaG91bGRVcGRhdGVkO1xuICAgIH1cblxuICAgIGlmKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ29iamVjdCcgJiYgY2hpbGRyZW4gIT09IG51bGwpIHtcbiAgICAgIGlmKGNoaWxkcmVuLnByb3BzLnR5cGUgPT09ICdjaGVja2JveCcgfHwgY2hpbGRyZW4ucHJvcHMudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICBzaG91bGRVcGRhdGVkID0gc2hvdWxkVXBkYXRlZCB8fFxuICAgICAgICAgIGNoaWxkcmVuLnByb3BzLnR5cGUgIT09IG5leHRQcm9wcy5jaGlsZHJlbi5wcm9wcy50eXBlIHx8XG4gICAgICAgICAgY2hpbGRyZW4ucHJvcHMuY2hlY2tlZCAhPT0gbmV4dFByb3BzLmNoaWxkcmVuLnByb3BzLmNoZWNrZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaG91bGRVcGRhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2hvdWxkVXBkYXRlZCA9IHNob3VsZFVwZGF0ZWQgfHwgY2hpbGRyZW4gIT09IG5leHRQcm9wcy5jaGlsZHJlbjtcbiAgICB9XG5cbiAgICBpZihzaG91bGRVcGRhdGVkKXtcbiAgICAgIHJldHVybiBzaG91bGRVcGRhdGVkO1xuICAgIH1cblxuICAgIGlmKCEodGhpcy5wcm9wcy5jZWxsRWRpdCAmJiBuZXh0UHJvcHMuY2VsbEVkaXQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzaG91bGRVcGRhdGVkXG4gICAgICAgIHx8IHRoaXMucHJvcHMuY2VsbEVkaXQubW9kZSAhPT0gbmV4dFByb3BzLmNlbGxFZGl0Lm1vZGU7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2VsbEVkaXQoZSl7XG4gICAgaWYodGhpcy5wcm9wcy5jZWxsRWRpdC5tb2RlID09IENvbnN0LkNFTExfRURJVF9EQkNMSUNLKXtcbiAgICAgIGlmKGRvY3VtZW50LnNlbGVjdGlvbiAmJiBkb2N1bWVudC5zZWxlY3Rpb24uZW1wdHkpIHtcbiAgICAgICAgZG9jdW1lbnQuc2VsZWN0aW9uLmVtcHR5KCk7XG4gICAgICB9IGVsc2UgaWYod2luZG93LmdldFNlbGVjdGlvbikge1xuICAgICAgICAgIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uRWRpdChcbiAgICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LnJvd0luZGV4LFxuICAgICAgZS5jdXJyZW50VGFyZ2V0LmNlbGxJbmRleCk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICB2YXIgd2lkdGggPSB0aGlzLnByb3BzLndpZHRoID09IG51bGw/XG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLndpZHRoOnBhcnNlSW50KHRoaXMucHJvcHMud2lkdGgpO1xuICAgIHZhciB0ZFN0eWxlID0ge1xuICAgICAgdGV4dEFsaWduOiB0aGlzLnByb3BzLmRhdGFBbGlnbixcbiAgICAgIGRpc3BsYXk6IHRoaXMucHJvcHMuaGlkZGVuP1wibm9uZVwiOm51bGwsXG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBtYXhXaWR0aDogd2lkdGhcbiAgICB9O1xuICAgIHZhciBjbGFzc25hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZTtcbiAgICBpZih0aGlzLnByb3BzLndpZHRoKXtcbiAgICAgICAgY2xhc3NuYW1lICs9IFwiIGNvbC1tZC1cIit3aWR0aDtcbiAgICB9XG5cblxuICAgIHZhciBvcHRzID0ge307XG4gICAgaWYodGhpcy5wcm9wcy5jZWxsRWRpdCl7XG4gICAgICBpZih0aGlzLnByb3BzLmNlbGxFZGl0Lm1vZGUgPT0gQ29uc3QuQ0VMTF9FRElUX0NMSUNLKXtcbiAgICAgICAgb3B0cy5vbkNsaWNrID0gdGhpcy5oYW5kbGVDZWxsRWRpdC5iaW5kKHRoaXMpO1xuICAgICAgfWVsc2UgaWYodGhpcy5wcm9wcy5jZWxsRWRpdC5tb2RlID09IENvbnN0LkNFTExfRURJVF9EQkNMSUNLKXtcbiAgICAgICAgb3B0cy5vbkRvdWJsZUNsaWNrID0gdGhpcy5oYW5kbGVDZWxsRWRpdC5iaW5kKHRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPHRkIHN0eWxlPXt0ZFN0eWxlfSBjbGFzc05hbWU9e2NsYXNzbmFtZX0gey4uLm9wdHN9PlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvdGQ+XG4gICAgKVxuICB9XG59XG5UYWJsZUNvbHVtbi5wcm9wVHlwZXMgPSB7XG4gIGRhdGFBbGlnbjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgaGlkZGVuOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgY2xhc3NOYW1lOlJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbn07XG5cblRhYmxlQ29sdW1uLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGF0YUFsaWduOiBcImxlZnRcIixcbiAgaGlkZGVuOiBmYWxzZSxcbiAgY2xhc3NOYW1lOlwiXCJcbn1cbmV4cG9ydCBkZWZhdWx0IFRhYmxlQ29sdW1uO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvVGFibGVDb2x1bW4uanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4vQ29uc3QnO1xuaW1wb3J0IEVkaXRvciBmcm9tICcuL0VkaXRvcidcbmltcG9ydCBOb3RpZmllciBmcm9tICcuL05vdGlmaWNhdGlvbi5qcyc7XG5pbXBvcnQgY2xhc3NTZXQgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNsYXNzIFRhYmxlRWRpdENvbHVtbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy50aW1lb3V0ZUNsZWFyPTA7XG4gICAgICAgIHRoaXMuc3RhdGU9e1xuICAgICAgICAgICAgc2hha2VFZGl0b3I6ZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgaGFuZGxlS2V5UHJlc3MoZSl7XG4gICAgaWYgKGUua2V5Q29kZSA9PSAxMykgeyAvL1ByZXNzZWQgRU5URVJcbiAgICAgIGxldCB2YWx1ZSA9IGUuY3VycmVudFRhcmdldC50eXBlID09ICdjaGVja2JveCc/XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dldENoZWNrQm94VmFsdWUoZSk6ZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuXG4gICAgICBpZighdGhpcy52YWxpZGF0b3IodmFsdWUpKXtcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnByb3BzLmNvbXBsZXRlRWRpdChcbiAgICAgICAgdmFsdWUsIHRoaXMucHJvcHMucm93SW5kZXgsIHRoaXMucHJvcHMuY29sSW5kZXgpO1xuICAgIH1lbHNlIGlmKGUua2V5Q29kZSA9PSAyNyl7XG4gICAgICB0aGlzLnByb3BzLmNvbXBsZXRlRWRpdChcbiAgICAgICAgbnVsbCwgdGhpcy5wcm9wcy5yb3dJbmRleCwgdGhpcy5wcm9wcy5jb2xJbmRleCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQmx1cihlKXtcbiAgICBpZih0aGlzLnByb3BzLmJsdXJUb1NhdmUpe1xuICAgICAgbGV0IHZhbHVlID0gZS5jdXJyZW50VGFyZ2V0LnR5cGUgPT0gJ2NoZWNrYm94Jz9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2V0Q2hlY2tCb3hWYWx1ZShlKTplLmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gICAgICBpZighdGhpcy52YWxpZGF0b3IodmFsdWUpKXtcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnByb3BzLmNvbXBsZXRlRWRpdChcbiAgICAgICAgICB2YWx1ZSwgdGhpcy5wcm9wcy5yb3dJbmRleCwgdGhpcy5wcm9wcy5jb2xJbmRleCk7XG4gICAgfVxuICB9XG4gIHZhbGlkYXRvcih2YWx1ZSl7XG4gICAgICB2YXIgdHM9dGhpcztcbiAgICAgIGlmKHRzLnByb3BzLmVkaXRhYmxlLnZhbGlkYXRvcil7XG4gICAgICAgICAgdmFyIHZhbGlkPXRzLnByb3BzLmVkaXRhYmxlLnZhbGlkYXRvcih2YWx1ZSk7XG4gICAgICAgICAgaWYodmFsaWQhPT10cnVlKXtcbiAgICAgICAgICAgICAgdHMucmVmcy5ub3RpZmllci5ub3RpY2UoJ2Vycm9yJyx2YWxpZCxcIlByZXNzZWQgRVNDIGNhbiBjYW5jZWxcIik7XG4gICAgICAgICAgICAgIHZhciBpbnB1dCA9IHRzLnJlZnMuaW5wdXRSZWY7XG4gICAgICAgICAgICAgIC8vYW5pbWF0ZSBpbnB1dFxuICAgICAgICAgICAgICB0cy5jbGVhclRpbWVvdXQoKTtcbiAgICAgICAgICAgICAgdHMuc2V0U3RhdGUoe3NoYWtlRWRpdG9yOnRydWV9KTtcbiAgICAgICAgICAgICAgdHMudGltZW91dGVDbGVhcj1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dHMuc2V0U3RhdGUoe3NoYWtlRWRpdG9yOmZhbHNlfSk7fSwzMDApO1xuICAgICAgICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgfVxuICBjbGVhclRpbWVvdXQoKXtcbiAgICAgIGlmKHRoaXMudGltZW91dGVDbGVhciE9MCl7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dGVDbGVhcik7XG4gICAgICAgICAgdGhpcy50aW1lb3V0ZUNsZWFyPTA7XG4gICAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgIHZhciBpbnB1dCA9IHRoaXMucmVmcy5pbnB1dFJlZjtcbiAgICAgIC8vIGlucHV0LnZhbHVlID0gdGhpcy5wcm9wcy5jaGlsZHJlbnx8Jyc7XG4gICAgICBpbnB1dC5mb2N1cygpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5jbGVhclRpbWVvdXQoKTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHZhciBlZGl0YWJsZT10aGlzLnByb3BzLmVkaXRhYmxlLFxuICAgICAgICBmb3JtYXQ9dGhpcy5wcm9wcy5mb3JtYXQsXG4gICAgICAgIGF0dHI9e1xuICAgICAgICAgICAgcmVmOlwiaW5wdXRSZWZcIixcbiAgICAgICAgICAgIG9uS2V5RG93bjp0aGlzLmhhbmRsZUtleVByZXNzLmJpbmQodGhpcyksXG4gICAgICAgICAgICBvbkJsdXI6dGhpcy5oYW5kbGVCbHVyLmJpbmQodGhpcylcbiAgICAgICAgfTtcbiAgICAgICAgLy9wdXQgcGxhY2Vob2xkZXIgaWYgZXhpc3RcbiAgICAgICAgZWRpdGFibGUucGxhY2Vob2xkZXImJihhdHRyLnBsYWNlaG9sZGVyPWVkaXRhYmxlLnBsYWNlaG9sZGVyKTtcblxuICAgIHZhciBlZGl0b3JDbGFzcz1jbGFzc1NldCh7J2FuaW1hdGVkJzp0aGlzLnN0YXRlLnNoYWtlRWRpdG9yLCdzaGFrZSc6dGhpcy5zdGF0ZS5zaGFrZUVkaXRvcn0pO1xuICAgIHJldHVybihcbiAgICAgICAgPHRkIHJlZj1cInRkXCIgc3R5bGU9e3twb3NpdGlvbjoncmVsYXRpdmUnfX0+XG4gICAgICAgICAgICB7RWRpdG9yKGVkaXRhYmxlLGF0dHIsZm9ybWF0LGVkaXRvckNsYXNzLHRoaXMucHJvcHMuY2hpbGRyZW58fCcnKX1cbiAgICAgICAgICAgIDxOb3RpZmllciByZWY9XCJub3RpZmllclwiPjwvTm90aWZpZXI+XG4gICAgICAgIDwvdGQ+XG4gICAgKVxuICB9XG5cbiAgX2dldENoZWNrQm94VmFsdWUoZSl7XG4gICAgbGV0IHZhbHVlID0gJyc7XG4gICAgbGV0IHZhbHVlcyA9IGUuY3VycmVudFRhcmdldC52YWx1ZS5zcGxpdCgnOicpO1xuICAgIHZhbHVlID0gZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQ/dmFsdWVzWzBdOnZhbHVlc1sxXTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxufVxuVGFibGVFZGl0Q29sdW1uLnByb3BUeXBlcyA9IHtcbiAgY29tcGxldGVFZGl0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgcm93SW5kZXg6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIGNvbEluZGV4OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICBibHVyVG9TYXZlOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZUVkaXRDb2x1bW47XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9UYWJsZUVkaXRDb2x1bW4uanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xudmFyIEVkaXRvcj1mdW5jdGlvbihlZGl0YWJsZSwgYXR0ciwgZm9ybWF0LCBlZGl0b3JDbGFzcywgZGVmYXVsdFZhbHVlKXtcblxuXG4gICAgaWYoZWRpdGFibGU9PT10cnVlfHx0eXBlb2YgZWRpdGFibGU9PT1cInN0cmluZ1wiKXsvL3NpbXBsZSBkZWNsYXJlXG4gICAgICAgIHZhciB0eXBlPWVkaXRhYmxlPT09dHJ1ZT8ndGV4dCc6ZWRpdGFibGU7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aW5wdXQgey4uLmF0dHJ9IHR5cGU9e3R5cGV9IGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlfVxuICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17KGVkaXRvckNsYXNzfHxcIlwiKStcIiBmb3JtLWNvbnRyb2wgZWRpdG9yIGVkaXQtdGV4dFwifSAvPlxuICAgICAgICApXG4gICAgfSBlbHNlIGlmKCFlZGl0YWJsZSl7XG4gICAgICB2YXIgdHlwZT1lZGl0YWJsZT09PXRydWU/J3RleHQnOmVkaXRhYmxlO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8aW5wdXQgey4uLmF0dHJ9IHR5cGU9e3R5cGV9IGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlfSBkaXNhYmxlZD0nZGlzYWJsZWQnXG4gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17KGVkaXRvckNsYXNzfHxcIlwiKStcIiBmb3JtLWNvbnRyb2wgZWRpdG9yIGVkaXQtdGV4dFwifSAvPlxuICAgICAgKVxuICAgIH0gZWxzZSBpZihlZGl0YWJsZS50eXBlKXsvL3N0YW5kYXJkIGRlY2xhcmVcbiAgICAgICAgLy9wdXQgc3R5bGUgaWYgZXhpc3RcbiAgICAgICAgZWRpdGFibGUuc3R5bGUmJihhdHRyLnN0eWxlPWVkaXRhYmxlLnN0eWxlKTtcblxuICAgICAgICAvL3B1dCBjbGFzcyBpZiBleGlzdFxuICAgICAgICBhdHRyLmNsYXNzTmFtZSA9IChlZGl0b3JDbGFzc3x8XCJcIikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgIFwiIGZvcm0tY29udHJvbCBlZGl0b3IgZWRpdC1cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgZWRpdGFibGUudHlwZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgKGVkaXRhYmxlLmNsYXNzTmFtZT8oXCIgXCIrZWRpdGFibGUuY2xhc3NOYW1lKTpcIlwiKTtcblxuICAgICAgICBpZihlZGl0YWJsZS50eXBlID09PSAnc2VsZWN0Jyl7Ly9wcm9jZXNzIHNlbGVjdCBpbnB1dFxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBbXSwgdmFsdWVzPWVkaXRhYmxlLm9wdGlvbnMudmFsdWVzO1xuICAgICAgICAgICAgaWYoQXJyYXkuaXNBcnJheSh2YWx1ZXMpKXsvL29ubHkgY2FuIHVzZSBhcnJyYXkgZGF0YSBmb3Igb3B0aW9uc1xuICAgICAgICAgICAgICAgIHZhciByb3dWYWx1ZTtcbiAgICAgICAgICAgICAgICBvcHRpb25zPXZhbHVlcy5tYXAoZnVuY3Rpb24oZCxpKXtcbiAgICAgICAgICAgICAgICAgICAgcm93VmFsdWU9Zm9ybWF0P2Zvcm1hdChkKTpkO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17J29wdGlvbicraX0gdmFsdWU9e2R9Pntyb3dWYWx1ZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgIDxzZWxlY3Qgey4uLmF0dHJ9IGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlfT57b3B0aW9uc308L3NlbGVjdD5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZihlZGl0YWJsZS50eXBlID09PSAndGV4dGFyZWEnKXsvL3Byb2Nlc3MgdGV4dGFyZWEgaW5wdXRcbiAgICAgICAgICAgIC8vcHV0ICBvdGhlciBpZiBleGlzdFxuICAgICAgICAgICAgZWRpdGFibGUuY29scyYmKGF0dHIuY29scz1lZGl0YWJsZS5jb2xzKTtcbiAgICAgICAgICAgIGVkaXRhYmxlLnJvd3MmJihhdHRyLnJvd3M9ZWRpdGFibGUucm93cyk7XG4gICAgICAgICAgICB2YXIga2V5VXBIYW5kbGVyPWF0dHIub25LZXlEb3duLHNhdmVCdG49bnVsbDtcbiAgICAgICAgICAgIGlmKGtleVVwSGFuZGxlcil7XG4gICAgICAgICAgICAgICAgYXR0ci5vbktleURvd249ZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmtleUNvZGUgIT0gMTMpIHsgLy9ub3QgUHJlc3NlZCBFTlRFUlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5VXBIYW5kbGVyKGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBzYXZlQnRuPTxidXR0byBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gYnRuLXhzIHRleHRhcmVhLXNhdmUtYnRuXCIgb25DbGljaz17a2V5VXBIYW5kbGVyfT5zYXZlPC9idXR0bz5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB7Li4uYXR0cn0gZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9PjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgIHtzYXZlQnRufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYoZWRpdGFibGUudHlwZSA9PT0gJ2NoZWNrYm94Jyl7XG4gICAgICAgICAgbGV0IHZhbHVlcyA9ICd0cnVlOmZhbHNlJztcbiAgICAgICAgICBpZihlZGl0YWJsZS5vcHRpb25zICYmIGVkaXRhYmxlLm9wdGlvbnMudmFsdWVzKXtcbiAgICAgICAgICAgIC8vIHZhbHVlcyA9IGVkaXRhYmxlLm9wdGlvbnMudmFsdWVzLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICB2YWx1ZXMgPSBlZGl0YWJsZS5vcHRpb25zLnZhbHVlcztcbiAgICAgICAgICB9XG4gICAgICAgICAgYXR0ci5jbGFzc05hbWUgPSBhdHRyLmNsYXNzTmFtZS5yZXBsYWNlKCdmb3JtLWNvbnRyb2wnLCcnKTtcbiAgICAgICAgICBhdHRyLmNsYXNzTmFtZSArPSAnIGNoZWNrYm94IHB1bGwtcmlnaHQnO1xuXG4gICAgICAgICAgbGV0IGNoZWNrZWQgPSBkZWZhdWx0VmFsdWUgJiYgZGVmYXVsdFZhbHVlLnRvU3RyaW5nKCkgPT0gdmFsdWVzLnNwbGl0KCc6JylbMF0/dHJ1ZTpmYWxzZTtcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aW5wdXQgey4uLmF0dHJ9IHR5cGU9J2NoZWNrYm94JyB2YWx1ZT17dmFsdWVzfSBkZWZhdWx0Q2hlY2tlZD17Y2hlY2tlZH0vPlxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZXsvL3Byb2Nlc3Mgb3RoZXIgaW5wdXQgdHlwZS4gYXMgcGFzc3dvcmQsdXJsLGVtYWlsLi4uXG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgPGlucHV0IHsuLi5hdHRyfSB0eXBlPXt0eXBlfSBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX0vPlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vZGVmYXVsdCByZXR1cm4gZm9yIG90aGVyIGNhc2Ugb2YgZWRpdGFibGVcbiAgICByZXR1cm4oXG4gICAgICAgIDxpbnB1dCB7Li4uYXR0cn0gdHlwZT1cInRleHRcIiBjbGFzc05hbWU9eyhlZGl0b3JDbGFzc3x8XCJcIikrXCIgZm9ybS1jb250cm9sIGVkaXRvciBlZGl0LXRleHRcIn0vPlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL0VkaXRvci5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi9Db25zdCc7XG5cbmltcG9ydCB7XG4gIFRvYXN0Q29udGFpbmVyLFxuICBUb2FzdE1lc3NhZ2UsXG59IGZyb20gXCJyZWFjdC10b2FzdHJcIjtcblxuXG52YXIgVG9hc3RyTWVzc2FnZUZhY3Rvcnk9UmVhY3QuY3JlYXRlRmFjdG9yeShUb2FzdE1lc3NhZ2UuYW5pbWF0aW9uKTtcblxuY2xhc3MgTm90aWZpY2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAvLyBhbGxvdyB0eXBlIGlzIHN1Y2Nlc3MsaW5mbyx3YXJuaW5nLGVycm9yXG4gIG5vdGljZSh0eXBlLG1zZyx0aXRsZSl7XG4gICAgdGhpcy5yZWZzLnRvYXN0clt0eXBlXShcbiAgICAgICAgbXNnLHRpdGxlLCB7XG4gICAgICAgICAgbW9kZTonc2luZ2xlJyxcbiAgICAgICAgICB0aW1lT3V0OiA1MDAwLFxuICAgICAgICAgIGV4dGVuZGVkVGltZU91dDogMTAwMCxcbiAgICAgICAgICBzaG93QW5pbWF0aW9uOiBcImFuaW1hdGVkICBib3VuY2VJblwiLFxuICAgICAgICAgIGhpZGVBbmltYXRpb246IFwiYW5pbWF0ZWQgYm91bmNlT3V0XCJcbiAgICAgICAgfSk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4oXG4gICAgICAgIDxUb2FzdENvbnRhaW5lciByZWY9XCJ0b2FzdHJcIiB0b2FzdE1lc3NhZ2VGYWN0b3J5PXtUb2FzdHJNZXNzYWdlRmFjdG9yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvYXN0LWNvbnRhaW5lclwiICBjbGFzc05hbWU9XCJ0b2FzdC10b3AtcmlnaHRcIj48L1RvYXN0Q29udGFpbmVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb247XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9Ob3RpZmljYXRpb24uanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuVG9hc3RNZXNzYWdlID0gZXhwb3J0cy5Ub2FzdENvbnRhaW5lciA9IHVuZGVmaW5lZDtcblxudmFyIF9Ub2FzdENvbnRhaW5lciA9IHJlcXVpcmUoXCIuL1RvYXN0Q29udGFpbmVyXCIpO1xuXG52YXIgX1RvYXN0Q29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RvYXN0Q29udGFpbmVyKTtcblxudmFyIF9Ub2FzdE1lc3NhZ2UgPSByZXF1aXJlKFwiLi9Ub2FzdE1lc3NhZ2VcIik7XG5cbnZhciBfVG9hc3RNZXNzYWdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RvYXN0TWVzc2FnZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuVG9hc3RDb250YWluZXIgPSBfVG9hc3RDb250YWluZXIyLmRlZmF1bHQ7XG5leHBvcnRzLlRvYXN0TWVzc2FnZSA9IF9Ub2FzdE1lc3NhZ2UyLmRlZmF1bHQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtdG9hc3RyL2xpYi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RBZGRvbnNVcGRhdGUgPSByZXF1aXJlKFwicmVhY3QtYWRkb25zLXVwZGF0ZVwiKTtcblxudmFyIF9yZWFjdEFkZG9uc1VwZGF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEFkZG9uc1VwZGF0ZSk7XG5cbnZhciBfVG9hc3RNZXNzYWdlID0gcmVxdWlyZShcIi4vVG9hc3RNZXNzYWdlXCIpO1xuXG52YXIgX1RvYXN0TWVzc2FnZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ub2FzdE1lc3NhZ2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBUb2FzdENvbnRhaW5lciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhUb2FzdENvbnRhaW5lciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVG9hc3RDb250YWluZXIoKSB7XG4gICAgdmFyIF9PYmplY3QkZ2V0UHJvdG90eXBlTztcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVG9hc3RDb250YWluZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX09iamVjdCRnZXRQcm90b3R5cGVPID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKFRvYXN0Q29udGFpbmVyKSkuY2FsbC5hcHBseShfT2JqZWN0JGdldFByb3RvdHlwZU8sIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRvYXN0czogW10sXG4gICAgICB0b2FzdElkOiAwLFxuICAgICAgcHJldmlvdXNNZXNzYWdlOiBudWxsXG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVG9hc3RDb250YWluZXIsIFt7XG4gICAga2V5OiBcImVycm9yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVycm9yKG1lc3NhZ2UsIHRpdGxlLCBvcHRpb25zT3ZlcnJpZGUpIHtcbiAgICAgIHRoaXMuX25vdGlmeSh0aGlzLnByb3BzLnRvYXN0VHlwZS5lcnJvciwgbWVzc2FnZSwgdGl0bGUsIG9wdGlvbnNPdmVycmlkZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImluZm9cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5mbyhtZXNzYWdlLCB0aXRsZSwgb3B0aW9uc092ZXJyaWRlKSB7XG4gICAgICB0aGlzLl9ub3RpZnkodGhpcy5wcm9wcy50b2FzdFR5cGUuaW5mbywgbWVzc2FnZSwgdGl0bGUsIG9wdGlvbnNPdmVycmlkZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN1Y2Nlc3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3VjY2VzcyhtZXNzYWdlLCB0aXRsZSwgb3B0aW9uc092ZXJyaWRlKSB7XG4gICAgICB0aGlzLl9ub3RpZnkodGhpcy5wcm9wcy50b2FzdFR5cGUuc3VjY2VzcywgbWVzc2FnZSwgdGl0bGUsIG9wdGlvbnNPdmVycmlkZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIndhcm5pbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlLCB0aXRsZSwgb3B0aW9uc092ZXJyaWRlKSB7XG4gICAgICB0aGlzLl9ub3RpZnkodGhpcy5wcm9wcy50b2FzdFR5cGUud2FybmluZywgbWVzc2FnZSwgdGl0bGUsIG9wdGlvbnNPdmVycmlkZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNsZWFyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIE9iamVjdC5rZXlzKHRoaXMucmVmcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF90aGlzMi5yZWZzW2tleV0uaGlkZVRvYXN0KGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfbm90aWZ5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9ub3RpZnkodHlwZSwgbWVzc2FnZSwgdGl0bGUpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgb3B0aW9uc092ZXJyaWRlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAzIHx8IGFyZ3VtZW50c1szXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbM107XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLnByZXZlbnREdXBsaWNhdGVzKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnByZXZpb3VzTWVzc2FnZSA9PT0gbWVzc2FnZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIGtleSA9IHRoaXMuc3RhdGUudG9hc3RJZCsrO1xuICAgICAgdmFyIHRvYXN0SWQgPSBrZXk7XG4gICAgICB2YXIgbmV3VG9hc3QgPSAoMCwgX3JlYWN0QWRkb25zVXBkYXRlMi5kZWZhdWx0KShvcHRpb25zT3ZlcnJpZGUsIHtcbiAgICAgICAgJG1lcmdlOiB7XG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgICB0b2FzdElkOiB0b2FzdElkLFxuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIHJlZjogXCJ0b2FzdHNfX1wiICsga2V5LFxuICAgICAgICAgIGhhbmRsZU9uQ2xpY2s6IGZ1bmN0aW9uIGhhbmRsZU9uQ2xpY2soZSkge1xuICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIG9wdGlvbnNPdmVycmlkZS5oYW5kbGVPbkNsaWNrKSB7XG4gICAgICAgICAgICAgIG9wdGlvbnNPdmVycmlkZS5oYW5kbGVPbkNsaWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMzLl9oYW5kbGVfdG9hc3Rfb25fY2xpY2soZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBoYW5kbGVSZW1vdmU6IHRoaXMuX2hhbmRsZV90b2FzdF9yZW1vdmUuYmluZCh0aGlzKVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHZhciB0b2FzdE9wZXJhdGlvbiA9IF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIiArICh0aGlzLnByb3BzLm5ld2VzdE9uVG9wID8gXCIkdW5zaGlmdFwiIDogXCIkcHVzaFwiKSwgW25ld1RvYXN0XSk7XG5cbiAgICAgIHZhciBuZXh0U3RhdGUgPSAoMCwgX3JlYWN0QWRkb25zVXBkYXRlMi5kZWZhdWx0KSh0aGlzLnN0YXRlLCB7XG4gICAgICAgIHRvYXN0czogdG9hc3RPcGVyYXRpb24sXG4gICAgICAgIHByZXZpb3VzTWVzc2FnZTogeyAkc2V0OiBtZXNzYWdlIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfaGFuZGxlX3RvYXN0X29uX2NsaWNrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVfdG9hc3Rfb25fY2xpY2soZXZlbnQpIHtcbiAgICAgIHRoaXMucHJvcHMub25DbGljayhldmVudCk7XG4gICAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9oYW5kbGVfdG9hc3RfcmVtb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVfdG9hc3RfcmVtb3ZlKHRvYXN0SWQpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB2YXIgb3BlcmF0aW9uTmFtZSA9IFwiXCIgKyAodGhpcy5wcm9wcy5uZXdlc3RPblRvcCA/IFwicmVkdWNlUmlnaHRcIiA6IFwicmVkdWNlXCIpO1xuICAgICAgdGhpcy5zdGF0ZS50b2FzdHNbb3BlcmF0aW9uTmFtZV0oZnVuY3Rpb24gKGZvdW5kLCB0b2FzdCwgaW5kZXgpIHtcbiAgICAgICAgaWYgKGZvdW5kIHx8IHRvYXN0LnRvYXN0SWQgIT09IHRvYXN0SWQpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXM0LnNldFN0YXRlKCgwLCBfcmVhY3RBZGRvbnNVcGRhdGUyLmRlZmF1bHQpKF90aGlzNC5zdGF0ZSwge1xuICAgICAgICAgIHRvYXN0czogeyAkc3BsaWNlOiBbW2luZGV4LCAxXV0gfVxuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSwgZmFsc2UpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgXCJhcmlhLWxpdmVcIjogXCJwb2xpdGVcIiwgcm9sZTogXCJhbGVydFwiIH0pLFxuICAgICAgICB0aGlzLnN0YXRlLnRvYXN0cy5tYXAoZnVuY3Rpb24gKHRvYXN0KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzNS5wcm9wcy50b2FzdE1lc3NhZ2VGYWN0b3J5KHRvYXN0KTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRvYXN0Q29udGFpbmVyO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuVG9hc3RDb250YWluZXIucHJvcFR5cGVzID0ge1xuICB0b2FzdFR5cGU6IF9yZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgIGVycm9yOiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpbmZvOiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdWNjZXNzOiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICB3YXJuaW5nOiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xuICB9KS5pc1JlcXVpcmVkLFxuICBpZDogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdG9hc3RNZXNzYWdlRmFjdG9yeTogX3JlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHByZXZlbnREdXBsaWNhdGVzOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgbmV3ZXN0T25Ub3A6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBvbkNsaWNrOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblRvYXN0Q29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgdG9hc3RUeXBlOiB7XG4gICAgZXJyb3I6IFwiZXJyb3JcIixcbiAgICBpbmZvOiBcImluZm9cIixcbiAgICBzdWNjZXNzOiBcInN1Y2Nlc3NcIixcbiAgICB3YXJuaW5nOiBcIndhcm5pbmdcIlxuICB9LFxuICBpZDogXCJ0b2FzdC1jb250YWluZXJcIixcbiAgdG9hc3RNZXNzYWdlRmFjdG9yeTogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUZhY3RvcnkoX1RvYXN0TWVzc2FnZTIuZGVmYXVsdCksXG4gIHByZXZlbnREdXBsaWNhdGVzOiBmYWxzZSxcbiAgbmV3ZXN0T25Ub3A6IHRydWUsXG4gIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7fVxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFRvYXN0Q29udGFpbmVyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LXRvYXN0ci9saWIvVG9hc3RDb250YWluZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdyZWFjdC9saWIvdXBkYXRlJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtdG9hc3RyL34vcmVhY3QtYWRkb25zLXVwZGF0ZS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgdXBkYXRlXG4gKi9cblxuLyogZ2xvYmFsIGhhc093blByb3BlcnR5OnRydWUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXNzaWduID0gcmVxdWlyZSgnLi9PYmplY3QuYXNzaWduJyk7XG52YXIga2V5T2YgPSByZXF1aXJlKCdmYmpzL2xpYi9rZXlPZicpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xudmFyIGhhc093blByb3BlcnR5ID0gKHt9KS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gc2hhbGxvd0NvcHkoeCkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh4KSkge1xuICAgIHJldHVybiB4LmNvbmNhdCgpO1xuICB9IGVsc2UgaWYgKHggJiYgdHlwZW9mIHggPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGFzc2lnbihuZXcgeC5jb25zdHJ1Y3RvcigpLCB4KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geDtcbiAgfVxufVxuXG52YXIgQ09NTUFORF9QVVNIID0ga2V5T2YoeyAkcHVzaDogbnVsbCB9KTtcbnZhciBDT01NQU5EX1VOU0hJRlQgPSBrZXlPZih7ICR1bnNoaWZ0OiBudWxsIH0pO1xudmFyIENPTU1BTkRfU1BMSUNFID0ga2V5T2YoeyAkc3BsaWNlOiBudWxsIH0pO1xudmFyIENPTU1BTkRfU0VUID0ga2V5T2YoeyAkc2V0OiBudWxsIH0pO1xudmFyIENPTU1BTkRfTUVSR0UgPSBrZXlPZih7ICRtZXJnZTogbnVsbCB9KTtcbnZhciBDT01NQU5EX0FQUExZID0ga2V5T2YoeyAkYXBwbHk6IG51bGwgfSk7XG5cbnZhciBBTExfQ09NTUFORFNfTElTVCA9IFtDT01NQU5EX1BVU0gsIENPTU1BTkRfVU5TSElGVCwgQ09NTUFORF9TUExJQ0UsIENPTU1BTkRfU0VULCBDT01NQU5EX01FUkdFLCBDT01NQU5EX0FQUExZXTtcblxudmFyIEFMTF9DT01NQU5EU19TRVQgPSB7fTtcblxuQUxMX0NPTU1BTkRTX0xJU1QuZm9yRWFjaChmdW5jdGlvbiAoY29tbWFuZCkge1xuICBBTExfQ09NTUFORFNfU0VUW2NvbW1hbmRdID0gdHJ1ZTtcbn0pO1xuXG5mdW5jdGlvbiBpbnZhcmlhbnRBcnJheUNhc2UodmFsdWUsIHNwZWMsIGNvbW1hbmQpIHtcbiAgIUFycmF5LmlzQXJyYXkodmFsdWUpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ3VwZGF0ZSgpOiBleHBlY3RlZCB0YXJnZXQgb2YgJXMgdG8gYmUgYW4gYXJyYXk7IGdvdCAlcy4nLCBjb21tYW5kLCB2YWx1ZSkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xuICB2YXIgc3BlY1ZhbHVlID0gc3BlY1tjb21tYW5kXTtcbiAgIUFycmF5LmlzQXJyYXkoc3BlY1ZhbHVlKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICd1cGRhdGUoKTogZXhwZWN0ZWQgc3BlYyBvZiAlcyB0byBiZSBhbiBhcnJheTsgZ290ICVzLiAnICsgJ0RpZCB5b3UgZm9yZ2V0IHRvIHdyYXAgeW91ciBwYXJhbWV0ZXIgaW4gYW4gYXJyYXk/JywgY29tbWFuZCwgc3BlY1ZhbHVlKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZSh2YWx1ZSwgc3BlYykge1xuICAhKHR5cGVvZiBzcGVjID09PSAnb2JqZWN0JykgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAndXBkYXRlKCk6IFlvdSBwcm92aWRlZCBhIGtleSBwYXRoIHRvIHVwZGF0ZSgpIHRoYXQgZGlkIG5vdCBjb250YWluIG9uZSAnICsgJ29mICVzLiBEaWQgeW91IGZvcmdldCB0byBpbmNsdWRlIHslczogLi4ufT8nLCBBTExfQ09NTUFORFNfTElTVC5qb2luKCcsICcpLCBDT01NQU5EX1NFVCkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xuXG4gIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHNwZWMsIENPTU1BTkRfU0VUKSkge1xuICAgICEoT2JqZWN0LmtleXMoc3BlYykubGVuZ3RoID09PSAxKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdDYW5ub3QgaGF2ZSBtb3JlIHRoYW4gb25lIGtleSBpbiBhbiBvYmplY3Qgd2l0aCAlcycsIENPTU1BTkRfU0VUKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG5cbiAgICByZXR1cm4gc3BlY1tDT01NQU5EX1NFVF07XG4gIH1cblxuICB2YXIgbmV4dFZhbHVlID0gc2hhbGxvd0NvcHkodmFsdWUpO1xuXG4gIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHNwZWMsIENPTU1BTkRfTUVSR0UpKSB7XG4gICAgdmFyIG1lcmdlT2JqID0gc3BlY1tDT01NQU5EX01FUkdFXTtcbiAgICAhKG1lcmdlT2JqICYmIHR5cGVvZiBtZXJnZU9iaiA9PT0gJ29iamVjdCcpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ3VwZGF0ZSgpOiAlcyBleHBlY3RzIGEgc3BlYyBvZiB0eXBlIFxcJ29iamVjdFxcJzsgZ290ICVzJywgQ09NTUFORF9NRVJHRSwgbWVyZ2VPYmopIDogaW52YXJpYW50KGZhbHNlKSA6IHVuZGVmaW5lZDtcbiAgICAhKG5leHRWYWx1ZSAmJiB0eXBlb2YgbmV4dFZhbHVlID09PSAnb2JqZWN0JykgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAndXBkYXRlKCk6ICVzIGV4cGVjdHMgYSB0YXJnZXQgb2YgdHlwZSBcXCdvYmplY3RcXCc7IGdvdCAlcycsIENPTU1BTkRfTUVSR0UsIG5leHRWYWx1ZSkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xuICAgIGFzc2lnbihuZXh0VmFsdWUsIHNwZWNbQ09NTUFORF9NRVJHRV0pO1xuICB9XG5cbiAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc3BlYywgQ09NTUFORF9QVVNIKSkge1xuICAgIGludmFyaWFudEFycmF5Q2FzZSh2YWx1ZSwgc3BlYywgQ09NTUFORF9QVVNIKTtcbiAgICBzcGVjW0NPTU1BTkRfUFVTSF0uZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgbmV4dFZhbHVlLnB1c2goaXRlbSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzcGVjLCBDT01NQU5EX1VOU0hJRlQpKSB7XG4gICAgaW52YXJpYW50QXJyYXlDYXNlKHZhbHVlLCBzcGVjLCBDT01NQU5EX1VOU0hJRlQpO1xuICAgIHNwZWNbQ09NTUFORF9VTlNISUZUXS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICBuZXh0VmFsdWUudW5zaGlmdChpdGVtKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHNwZWMsIENPTU1BTkRfU1BMSUNFKSkge1xuICAgICFBcnJheS5pc0FycmF5KHZhbHVlKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdFeHBlY3RlZCAlcyB0YXJnZXQgdG8gYmUgYW4gYXJyYXk7IGdvdCAlcycsIENPTU1BTkRfU1BMSUNFLCB2YWx1ZSkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xuICAgICFBcnJheS5pc0FycmF5KHNwZWNbQ09NTUFORF9TUExJQ0VdKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICd1cGRhdGUoKTogZXhwZWN0ZWQgc3BlYyBvZiAlcyB0byBiZSBhbiBhcnJheSBvZiBhcnJheXM7IGdvdCAlcy4gJyArICdEaWQgeW91IGZvcmdldCB0byB3cmFwIHlvdXIgcGFyYW1ldGVycyBpbiBhbiBhcnJheT8nLCBDT01NQU5EX1NQTElDRSwgc3BlY1tDT01NQU5EX1NQTElDRV0pIDogaW52YXJpYW50KGZhbHNlKSA6IHVuZGVmaW5lZDtcbiAgICBzcGVjW0NPTU1BTkRfU1BMSUNFXS5mb3JFYWNoKGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAhQXJyYXkuaXNBcnJheShhcmdzKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICd1cGRhdGUoKTogZXhwZWN0ZWQgc3BlYyBvZiAlcyB0byBiZSBhbiBhcnJheSBvZiBhcnJheXM7IGdvdCAlcy4gJyArICdEaWQgeW91IGZvcmdldCB0byB3cmFwIHlvdXIgcGFyYW1ldGVycyBpbiBhbiBhcnJheT8nLCBDT01NQU5EX1NQTElDRSwgc3BlY1tDT01NQU5EX1NQTElDRV0pIDogaW52YXJpYW50KGZhbHNlKSA6IHVuZGVmaW5lZDtcbiAgICAgIG5leHRWYWx1ZS5zcGxpY2UuYXBwbHkobmV4dFZhbHVlLCBhcmdzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHNwZWMsIENPTU1BTkRfQVBQTFkpKSB7XG4gICAgISh0eXBlb2Ygc3BlY1tDT01NQU5EX0FQUExZXSA9PT0gJ2Z1bmN0aW9uJykgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAndXBkYXRlKCk6IGV4cGVjdGVkIHNwZWMgb2YgJXMgdG8gYmUgYSBmdW5jdGlvbjsgZ290ICVzLicsIENPTU1BTkRfQVBQTFksIHNwZWNbQ09NTUFORF9BUFBMWV0pIDogaW52YXJpYW50KGZhbHNlKSA6IHVuZGVmaW5lZDtcbiAgICBuZXh0VmFsdWUgPSBzcGVjW0NPTU1BTkRfQVBQTFldKG5leHRWYWx1ZSk7XG4gIH1cblxuICBmb3IgKHZhciBrIGluIHNwZWMpIHtcbiAgICBpZiAoIShBTExfQ09NTUFORFNfU0VULmhhc093blByb3BlcnR5KGspICYmIEFMTF9DT01NQU5EU19TRVRba10pKSB7XG4gICAgICBuZXh0VmFsdWVba10gPSB1cGRhdGUodmFsdWVba10sIHNwZWNba10pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXh0VmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdXBkYXRlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0L2xpYi91cGRhdGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqICh3ZWJwYWNrKS9+L25vZGUtbGlicy1icm93c2VyL34vcHJvY2Vzcy9icm93c2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBPYmplY3QuYXNzaWduXG4gKi9cblxuLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLW9iamVjdC5hc3NpZ25cblxuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2VzKSB7XG4gIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gdGFyZ2V0IGNhbm5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICB9XG5cbiAgdmFyIHRvID0gT2JqZWN0KHRhcmdldCk7XG4gIHZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbiAgZm9yICh2YXIgbmV4dEluZGV4ID0gMTsgbmV4dEluZGV4IDwgYXJndW1lbnRzLmxlbmd0aDsgbmV4dEluZGV4KyspIHtcbiAgICB2YXIgbmV4dFNvdXJjZSA9IGFyZ3VtZW50c1tuZXh0SW5kZXhdO1xuICAgIGlmIChuZXh0U291cmNlID09IG51bGwpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBmcm9tID0gT2JqZWN0KG5leHRTb3VyY2UpO1xuXG4gICAgLy8gV2UgZG9uJ3QgY3VycmVudGx5IHN1cHBvcnQgYWNjZXNzb3JzIG5vciBwcm94aWVzLiBUaGVyZWZvcmUgdGhpc1xuICAgIC8vIGNvcHkgY2Fubm90IHRocm93LiBJZiB3ZSBldmVyIHN1cHBvcnRlZCB0aGlzIHRoZW4gd2UgbXVzdCBoYW5kbGVcbiAgICAvLyBleGNlcHRpb25zIGFuZCBzaWRlLWVmZmVjdHMuIFdlIGRvbid0IHN1cHBvcnQgc3ltYm9scyBzbyB0aGV5IHdvbid0XG4gICAgLy8gYmUgdHJhbnNmZXJyZWQuXG5cbiAgICBmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuICAgICAgICB0b1trZXldID0gZnJvbVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0bztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NpZ247XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL09iamVjdC5hc3NpZ24uanNcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGtleU9mXG4gKi9cblxuLyoqXG4gKiBBbGxvd3MgZXh0cmFjdGlvbiBvZiBhIG1pbmlmaWVkIGtleS4gTGV0J3MgdGhlIGJ1aWxkIHN5c3RlbSBtaW5pZnkga2V5c1xuICogd2l0aG91dCBsb3NpbmcgdGhlIGFiaWxpdHkgdG8gZHluYW1pY2FsbHkgdXNlIGtleSBzdHJpbmdzIGFzIHZhbHVlc1xuICogdGhlbXNlbHZlcy4gUGFzcyBpbiBhbiBvYmplY3Qgd2l0aCBhIHNpbmdsZSBrZXkvdmFsIHBhaXIgYW5kIGl0IHdpbGwgcmV0dXJuXG4gKiB5b3UgdGhlIHN0cmluZyBrZXkgb2YgdGhhdCBzaW5nbGUgcmVjb3JkLiBTdXBwb3NlIHlvdSB3YW50IHRvIGdyYWIgdGhlXG4gKiB2YWx1ZSBmb3IgYSBrZXkgJ2NsYXNzTmFtZScgaW5zaWRlIG9mIGFuIG9iamVjdC4gS2V5L3ZhbCBtaW5pZmljYXRpb24gbWF5XG4gKiBoYXZlIGFsaWFzZWQgdGhhdCBrZXkgdG8gYmUgJ3hhMTInLiBrZXlPZih7Y2xhc3NOYW1lOiBudWxsfSkgd2lsbCByZXR1cm5cbiAqICd4YTEyJyBpbiB0aGF0IGNhc2UuIFJlc29sdmUga2V5cyB5b3Ugd2FudCB0byB1c2Ugb25jZSBhdCBzdGFydHVwIHRpbWUsIHRoZW5cbiAqIHJldXNlIHRob3NlIHJlc29sdXRpb25zLlxuICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGtleU9mID0gZnVuY3Rpb24gKG9uZUtleU9iaikge1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBvbmVLZXlPYmopIHtcbiAgICBpZiAoIW9uZUtleU9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgcmV0dXJuIGtleTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5T2Y7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3Qvfi9mYmpzL2xpYi9rZXlPZi5qc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgaW52YXJpYW50XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKCdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICsgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSkpO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3Qvfi9mYmpzL2xpYi9pbnZhcmlhbnQuanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmpRdWVyeSA9IGV4cG9ydHMuYW5pbWF0aW9uID0gdW5kZWZpbmVkO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdEFkZG9uc1VwZGF0ZSA9IHJlcXVpcmUoXCJyZWFjdC1hZGRvbnMtdXBkYXRlXCIpO1xuXG52YXIgX3JlYWN0QWRkb25zVXBkYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0QWRkb25zVXBkYXRlKTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9hbmltYXRpb25NaXhpbiA9IHJlcXVpcmUoXCIuL2FuaW1hdGlvbk1peGluXCIpO1xuXG52YXIgX2FuaW1hdGlvbk1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FuaW1hdGlvbk1peGluKTtcblxudmFyIF9qUXVlcnlNaXhpbiA9IHJlcXVpcmUoXCIuL2pRdWVyeU1peGluXCIpO1xuXG52YXIgX2pRdWVyeU1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2pRdWVyeU1peGluKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnZhciBUb2FzdE1lc3NhZ2VTcGVjID0ge1xuICBkaXNwbGF5TmFtZTogXCJUb2FzdE1lc3NhZ2VcIixcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICB2YXIgaWNvbkNsYXNzTmFtZXMgPSB7XG4gICAgICBlcnJvcjogXCJ0b2FzdC1lcnJvclwiLFxuICAgICAgaW5mbzogXCJ0b2FzdC1pbmZvXCIsXG4gICAgICBzdWNjZXNzOiBcInRvYXN0LXN1Y2Nlc3NcIixcbiAgICAgIHdhcm5pbmc6IFwidG9hc3Qtd2FybmluZ1wiXG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBjbGFzc05hbWU6IFwidG9hc3RcIixcbiAgICAgIGljb25DbGFzc05hbWVzOiBpY29uQ2xhc3NOYW1lcyxcbiAgICAgIHRpdGxlQ2xhc3NOYW1lOiBcInRvYXN0LXRpdGxlXCIsXG4gICAgICBtZXNzYWdlQ2xhc3NOYW1lOiBcInRvYXN0LW1lc3NhZ2VcIixcbiAgICAgIHRhcFRvRGlzbWlzczogdHJ1ZSxcbiAgICAgIGNsb3NlQnV0dG9uOiBmYWxzZVxuICAgIH07XG4gIH0sXG4gIGhhbmRsZU9uQ2xpY2s6IGZ1bmN0aW9uIGhhbmRsZU9uQ2xpY2soZXZlbnQpIHtcbiAgICB0aGlzLnByb3BzLmhhbmRsZU9uQ2xpY2soZXZlbnQpO1xuICAgIGlmICh0aGlzLnByb3BzLnRhcFRvRGlzbWlzcykge1xuICAgICAgdGhpcy5oaWRlVG9hc3QodHJ1ZSk7XG4gICAgfVxuICB9LFxuICBfaGFuZGxlX2Nsb3NlX2J1dHRvbl9jbGljazogZnVuY3Rpb24gX2hhbmRsZV9jbG9zZV9idXR0b25fY2xpY2soZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmhpZGVUb2FzdCh0cnVlKTtcbiAgfSxcbiAgX2hhbmRsZV9yZW1vdmU6IGZ1bmN0aW9uIF9oYW5kbGVfcmVtb3ZlKCkge1xuICAgIHRoaXMucHJvcHMuaGFuZGxlUmVtb3ZlKHRoaXMucHJvcHMudG9hc3RJZCk7XG4gIH0sXG4gIF9yZW5kZXJfY2xvc2VfYnV0dG9uOiBmdW5jdGlvbiBfcmVuZGVyX2Nsb3NlX2J1dHRvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jbG9zZUJ1dHRvbiA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJ0b2FzdC1jbG9zZS1idXR0b25cIiwgcm9sZTogXCJidXR0b25cIixcbiAgICAgIG9uQ2xpY2s6IHRoaXMuX2hhbmRsZV9jbG9zZV9idXR0b25fY2xpY2ssXG4gICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDogeyBfX2h0bWw6IFwiJnRpbWVzO1wiIH1cbiAgICB9KSA6IGZhbHNlO1xuICB9LFxuICBfcmVuZGVyX3RpdGxlX2VsZW1lbnQ6IGZ1bmN0aW9uIF9yZW5kZXJfdGl0bGVfZWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy50aXRsZSA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgY2xhc3NOYW1lOiB0aGlzLnByb3BzLnRpdGxlQ2xhc3NOYW1lIH0sXG4gICAgICB0aGlzLnByb3BzLnRpdGxlXG4gICAgKSA6IGZhbHNlO1xuICB9LFxuICBfcmVuZGVyX21lc3NhZ2VfZWxlbWVudDogZnVuY3Rpb24gX3JlbmRlcl9tZXNzYWdlX2VsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMubWVzc2FnZSA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgY2xhc3NOYW1lOiB0aGlzLnByb3BzLm1lc3NhZ2VDbGFzc05hbWUgfSxcbiAgICAgIHRoaXMucHJvcHMubWVzc2FnZVxuICAgICkgOiBmYWxzZTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGljb25DbGFzc05hbWUgPSB0aGlzLnByb3BzLmljb25DbGFzc05hbWUgfHwgdGhpcy5wcm9wcy5pY29uQ2xhc3NOYW1lc1t0aGlzLnByb3BzLnR5cGVdO1xuXG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyLmRlZmF1bHQpKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBpY29uQ2xhc3NOYW1lKSxcbiAgICAgICAgc3R5bGU6IHRoaXMucHJvcHMuc3R5bGUsXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlT25DbGljayxcbiAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLmhhbmRsZU1vdXNlRW50ZXIsXG4gICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5oYW5kbGVNb3VzZUxlYXZlXG4gICAgICB9LFxuICAgICAgdGhpcy5fcmVuZGVyX2Nsb3NlX2J1dHRvbigpLFxuICAgICAgdGhpcy5fcmVuZGVyX3RpdGxlX2VsZW1lbnQoKSxcbiAgICAgIHRoaXMuX3JlbmRlcl9tZXNzYWdlX2VsZW1lbnQoKVxuICAgICk7XG4gIH1cbn07XG5cbnZhciBhbmltYXRpb24gPSBleHBvcnRzLmFuaW1hdGlvbiA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVDbGFzcygoMCwgX3JlYWN0QWRkb25zVXBkYXRlMi5kZWZhdWx0KShUb2FzdE1lc3NhZ2VTcGVjLCB7XG4gIGRpc3BsYXlOYW1lOiB7ICRzZXQ6IFwiVG9hc3RNZXNzYWdlLmFuaW1hdGlvblwiIH0sXG4gIG1peGluczogeyAkc2V0OiBbX2FuaW1hdGlvbk1peGluMi5kZWZhdWx0XSB9XG59KSk7XG5cbnZhciBqUXVlcnkgPSBleHBvcnRzLmpRdWVyeSA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVDbGFzcygoMCwgX3JlYWN0QWRkb25zVXBkYXRlMi5kZWZhdWx0KShUb2FzdE1lc3NhZ2VTcGVjLCB7XG4gIGRpc3BsYXlOYW1lOiB7ICRzZXQ6IFwiVG9hc3RNZXNzYWdlLmpRdWVyeVwiIH0sXG4gIG1peGluczogeyAkc2V0OiBbX2pRdWVyeU1peGluMi5kZWZhdWx0XSB9XG59KSk7XG5cbi8qXG4gKiBhc3NpZ24gZGVmYXVsdCBub29wIGZ1bmN0aW9uc1xuICovXG5Ub2FzdE1lc3NhZ2VTcGVjLmhhbmRsZU1vdXNlRW50ZXIgPSBub29wO1xuVG9hc3RNZXNzYWdlU3BlYy5oYW5kbGVNb3VzZUxlYXZlID0gbm9vcDtcblRvYXN0TWVzc2FnZVNwZWMuaGlkZVRvYXN0ID0gbm9vcDtcblxudmFyIFRvYXN0TWVzc2FnZSA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVDbGFzcyhUb2FzdE1lc3NhZ2VTcGVjKTtcblxuVG9hc3RNZXNzYWdlLmFuaW1hdGlvbiA9IGFuaW1hdGlvbjtcblRvYXN0TWVzc2FnZS5qUXVlcnkgPSBqUXVlcnk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRvYXN0TWVzc2FnZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC10b2FzdHIvbGliL1RvYXN0TWVzc2FnZS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9SZWFjdFRyYW5zaXRpb25FdmVudHMgPSByZXF1aXJlKFwicmVhY3QvbGliL1JlYWN0VHJhbnNpdGlvbkV2ZW50c1wiKTtcblxudmFyIF9SZWFjdFRyYW5zaXRpb25FdmVudHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmVhY3RUcmFuc2l0aW9uRXZlbnRzKTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG52YXIgX2VsZW1lbnRDbGFzcyA9IHJlcXVpcmUoXCJlbGVtZW50LWNsYXNzXCIpO1xuXG52YXIgX2VsZW1lbnRDbGFzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9lbGVtZW50Q2xhc3MpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgVElDSyA9IDE3O1xudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zaXRpb246IG51bGwsIC8vIHNvbWUgZXhhbXBsZXMgZGVmaW5lZCBpbiBpbmRleC5zY3NzIChzY2FsZSwgZmFkZUluT3V0LCByb3RhdGUpXG4gICAgICBzaG93QW5pbWF0aW9uOiBcImFuaW1hdGVkIGJvdW5jZUluXCIsIC8vIG9yIG90aGVyIGFuaW1hdGlvbnMgZnJvbSBhbmltYXRlLmNzc1xuICAgICAgaGlkZUFuaW1hdGlvbjogXCJhbmltYXRlZCBib3VuY2VPdXRcIixcbiAgICAgIHRpbWVPdXQ6IDUwMDAsXG4gICAgICBleHRlbmRlZFRpbWVPdXQ6IDEwMDBcbiAgICB9O1xuICB9LFxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLmNsYXNzTmFtZVF1ZXVlID0gW107XG4gICAgdGhpcy5pc0hpZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IG51bGw7XG4gIH0sXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdGhpcy5faXNfbW91bnRlZCA9IHRydWU7XG4gICAgdGhpcy5fc2hvdygpO1xuICAgIHZhciBub2RlID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgdmFyIG9uSGlkZUNvbXBsZXRlID0gZnVuY3Rpb24gb25IaWRlQ29tcGxldGUoKSB7XG4gICAgICBpZiAoX3RoaXMuaXNIaWRpbmcpIHtcbiAgICAgICAgX3RoaXMuX3NldF9pc19oaWRpbmcoZmFsc2UpO1xuICAgICAgICBfUmVhY3RUcmFuc2l0aW9uRXZlbnRzMi5kZWZhdWx0LnJlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgb25IaWRlQ29tcGxldGUpO1xuICAgICAgICBfdGhpcy5faGFuZGxlX3JlbW92ZSgpO1xuICAgICAgfVxuICAgIH07XG4gICAgX1JlYWN0VHJhbnNpdGlvbkV2ZW50czIuZGVmYXVsdC5hZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIG9uSGlkZUNvbXBsZXRlKTtcblxuICAgIGlmICh0aGlzLnByb3BzLnRpbWVPdXQgPiAwKSB7XG4gICAgICB0aGlzLl9zZXRfaW50ZXJ2YWxfaWQoc2V0VGltZW91dCh0aGlzLmhpZGVUb2FzdCwgdGhpcy5wcm9wcy50aW1lT3V0KSk7XG4gICAgfVxuICB9LFxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5faXNfbW91bnRlZCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmludGVydmFsSWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmludGVydmFsSWQpO1xuICAgIH1cbiAgfSxcbiAgX3NldF90cmFuc2l0aW9uOiBmdW5jdGlvbiBfc2V0X3RyYW5zaXRpb24oaGlkZSkge1xuICAgIHZhciBhbmltYXRpb25UeXBlID0gaGlkZSA/IFwibGVhdmVcIiA6IFwiZW50ZXJcIjtcbiAgICB2YXIgbm9kZSA9IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICB2YXIgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy50cmFuc2l0aW9uICsgXCItXCIgKyBhbmltYXRpb25UeXBlO1xuICAgIHZhciBhY3RpdmVDbGFzc05hbWUgPSBjbGFzc05hbWUgKyBcIi1hY3RpdmVcIjtcblxuICAgIHZhciBlbmRMaXN0ZW5lciA9IGZ1bmN0aW9uIGVuZExpc3RlbmVyKGUpIHtcbiAgICAgIGlmIChlICYmIGUudGFyZ2V0ICE9PSBub2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNsYXNzTGlzdCA9ICgwLCBfZWxlbWVudENsYXNzMi5kZWZhdWx0KShub2RlKTtcbiAgICAgIGNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgIGNsYXNzTGlzdC5yZW1vdmUoYWN0aXZlQ2xhc3NOYW1lKTtcblxuICAgICAgX1JlYWN0VHJhbnNpdGlvbkV2ZW50czIuZGVmYXVsdC5yZW1vdmVFbmRFdmVudExpc3RlbmVyKG5vZGUsIGVuZExpc3RlbmVyKTtcbiAgICB9O1xuXG4gICAgX1JlYWN0VHJhbnNpdGlvbkV2ZW50czIuZGVmYXVsdC5hZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIGVuZExpc3RlbmVyKTtcblxuICAgICgwLCBfZWxlbWVudENsYXNzMi5kZWZhdWx0KShub2RlKS5hZGQoY2xhc3NOYW1lKTtcblxuICAgIC8vIE5lZWQgdG8gZG8gdGhpcyB0byBhY3R1YWxseSB0cmlnZ2VyIGEgdHJhbnNpdGlvbi5cbiAgICB0aGlzLl9xdWV1ZV9jbGFzcyhhY3RpdmVDbGFzc05hbWUpO1xuICB9LFxuICBfY2xlYXJfdHJhbnNpdGlvbjogZnVuY3Rpb24gX2NsZWFyX3RyYW5zaXRpb24oaGlkZSkge1xuICAgIHZhciBub2RlID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIHZhciBhbmltYXRpb25UeXBlID0gaGlkZSA/IFwibGVhdmVcIiA6IFwiZW50ZXJcIjtcbiAgICB2YXIgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy50cmFuc2l0aW9uICsgXCItXCIgKyBhbmltYXRpb25UeXBlO1xuICAgIHZhciBhY3RpdmVDbGFzc05hbWUgPSBjbGFzc05hbWUgKyBcIi1hY3RpdmVcIjtcblxuICAgIHZhciBjbGFzc0xpc3QgPSAoMCwgX2VsZW1lbnRDbGFzczIuZGVmYXVsdCkobm9kZSk7XG4gICAgY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgIGNsYXNzTGlzdC5yZW1vdmUoYWN0aXZlQ2xhc3NOYW1lKTtcbiAgfSxcbiAgX3NldF9hbmltYXRpb246IGZ1bmN0aW9uIF9zZXRfYW5pbWF0aW9uKGhpZGUpIHtcbiAgICB2YXIgbm9kZSA9IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICB2YXIgYW5pbWF0aW9ucyA9IHRoaXMuX2dldF9hbmltYXRpb25fY2xhc3NlcyhoaWRlKTtcbiAgICB2YXIgZW5kTGlzdGVuZXIgPSBmdW5jdGlvbiBlbmRMaXN0ZW5lcihlKSB7XG4gICAgICBpZiAoZSAmJiBlLnRhcmdldCAhPT0gbm9kZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFuaW1hdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYW5pbSkge1xuICAgICAgICByZXR1cm4gKDAsIF9lbGVtZW50Q2xhc3MyLmRlZmF1bHQpKG5vZGUpLnJlbW92ZShhbmltKTtcbiAgICAgIH0pO1xuXG4gICAgICBfUmVhY3RUcmFuc2l0aW9uRXZlbnRzMi5kZWZhdWx0LnJlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgZW5kTGlzdGVuZXIpO1xuICAgIH07XG5cbiAgICBfUmVhY3RUcmFuc2l0aW9uRXZlbnRzMi5kZWZhdWx0LmFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgZW5kTGlzdGVuZXIpO1xuXG4gICAgYW5pbWF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhbmltKSB7XG4gICAgICByZXR1cm4gKDAsIF9lbGVtZW50Q2xhc3MyLmRlZmF1bHQpKG5vZGUpLmFkZChhbmltKTtcbiAgICB9KTtcbiAgfSxcbiAgX2dldF9hbmltYXRpb25fY2xhc3NlczogZnVuY3Rpb24gX2dldF9hbmltYXRpb25fY2xhc3NlcyhoaWRlKSB7XG4gICAgdmFyIGFuaW1hdGlvbnMgPSBoaWRlID8gdGhpcy5wcm9wcy5oaWRlQW5pbWF0aW9uIDogdGhpcy5wcm9wcy5zaG93QW5pbWF0aW9uO1xuICAgIGlmIChcIltvYmplY3QgQXJyYXldXCIgPT09IHRvU3RyaW5nLmNhbGwoYW5pbWF0aW9ucykpIHtcbiAgICAgIHJldHVybiBhbmltYXRpb25zO1xuICAgIH0gZWxzZSBpZiAoXCJzdHJpbmdcIiA9PT0gdHlwZW9mIGFuaW1hdGlvbnMpIHtcbiAgICAgIHJldHVybiBhbmltYXRpb25zLnNwbGl0KFwiIFwiKTtcbiAgICB9XG4gIH0sXG4gIF9jbGVhcl9hbmltYXRpb246IGZ1bmN0aW9uIF9jbGVhcl9hbmltYXRpb24oaGlkZSkge1xuICAgIHZhciBub2RlID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIHZhciBhbmltYXRpb25zID0gdGhpcy5fZ2V0X2FuaW1hdGlvbl9jbGFzc2VzKGhpZGUpO1xuICAgIGFuaW1hdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYW5pbWF0aW9uKSB7XG4gICAgICByZXR1cm4gKDAsIF9lbGVtZW50Q2xhc3MyLmRlZmF1bHQpKG5vZGUpLnJlbW92ZShhbmltYXRpb24pO1xuICAgIH0pO1xuICB9LFxuICBfcXVldWVfY2xhc3M6IGZ1bmN0aW9uIF9xdWV1ZV9jbGFzcyhjbGFzc05hbWUpIHtcbiAgICB0aGlzLmNsYXNzTmFtZVF1ZXVlLnB1c2goY2xhc3NOYW1lKTtcblxuICAgIGlmICghdGhpcy50aW1lb3V0KSB7XG4gICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KHRoaXMuX2ZsdXNoX2NsYXNzX25hbWVfcXVldWUsIFRJQ0spO1xuICAgIH1cbiAgfSxcbiAgX2ZsdXNoX2NsYXNzX25hbWVfcXVldWU6IGZ1bmN0aW9uIF9mbHVzaF9jbGFzc19uYW1lX3F1ZXVlKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuX2lzX21vdW50ZWQpIHtcbiAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBub2RlID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKF90aGlzMik7XG4gICAgICAgIF90aGlzMi5jbGFzc05hbWVRdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICAgICAgICByZXR1cm4gKDAsIF9lbGVtZW50Q2xhc3MyLmRlZmF1bHQpKG5vZGUpLmFkZChjbGFzc05hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pKCk7XG4gICAgfVxuICAgIHRoaXMuY2xhc3NOYW1lUXVldWUubGVuZ3RoID0gMDtcbiAgICB0aGlzLnRpbWVvdXQgPSBudWxsO1xuICB9LFxuICBfc2hvdzogZnVuY3Rpb24gX3Nob3coKSB7XG4gICAgaWYgKHRoaXMucHJvcHMudHJhbnNpdGlvbikge1xuICAgICAgdGhpcy5fc2V0X3RyYW5zaXRpb24oKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuc2hvd0FuaW1hdGlvbikge1xuICAgICAgdGhpcy5fc2V0X2FuaW1hdGlvbigpO1xuICAgIH1cbiAgfSxcbiAgaGFuZGxlTW91c2VFbnRlcjogZnVuY3Rpb24gaGFuZGxlTW91c2VFbnRlcigpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5pbnRlcnZhbElkKTtcbiAgICB0aGlzLl9zZXRfaW50ZXJ2YWxfaWQobnVsbCk7XG4gICAgaWYgKHRoaXMuaXNIaWRpbmcpIHtcbiAgICAgIHRoaXMuX3NldF9pc19oaWRpbmcoZmFsc2UpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5oaWRlQW5pbWF0aW9uKSB7XG4gICAgICAgIHRoaXMuX2NsZWFyX2FuaW1hdGlvbih0cnVlKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy50cmFuc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuX2NsZWFyX3RyYW5zaXRpb24odHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBoYW5kbGVNb3VzZUxlYXZlOiBmdW5jdGlvbiBoYW5kbGVNb3VzZUxlYXZlKCkge1xuICAgIGlmICghdGhpcy5pc0hpZGluZyAmJiAodGhpcy5wcm9wcy50aW1lT3V0ID4gMCB8fCB0aGlzLnByb3BzLmV4dGVuZGVkVGltZU91dCA+IDApKSB7XG4gICAgICB0aGlzLl9zZXRfaW50ZXJ2YWxfaWQoc2V0VGltZW91dCh0aGlzLmhpZGVUb2FzdCwgdGhpcy5wcm9wcy5leHRlbmRlZFRpbWVPdXQpKTtcbiAgICB9XG4gIH0sXG4gIGhpZGVUb2FzdDogZnVuY3Rpb24gaGlkZVRvYXN0KG92ZXJyaWRlKSB7XG4gICAgaWYgKHRoaXMuaXNIaWRpbmcgfHwgdGhpcy5pbnRlcnZhbElkID09PSBudWxsICYmICFvdmVycmlkZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3NldF9pc19oaWRpbmcodHJ1ZSk7XG4gICAgaWYgKHRoaXMucHJvcHMudHJhbnNpdGlvbikge1xuICAgICAgdGhpcy5fc2V0X3RyYW5zaXRpb24odHJ1ZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmhpZGVBbmltYXRpb24pIHtcbiAgICAgIHRoaXMuX3NldF9hbmltYXRpb24odHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hhbmRsZV9yZW1vdmUoKTtcbiAgICB9XG4gIH0sXG4gIF9zZXRfaW50ZXJ2YWxfaWQ6IGZ1bmN0aW9uIF9zZXRfaW50ZXJ2YWxfaWQoaW50ZXJ2YWxJZCkge1xuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IGludGVydmFsSWQ7XG4gIH0sXG4gIF9zZXRfaXNfaGlkaW5nOiBmdW5jdGlvbiBfc2V0X2lzX2hpZGluZyhpc0hpZGluZykge1xuICAgIHRoaXMuaXNIaWRpbmcgPSBpc0hpZGluZztcbiAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC10b2FzdHIvbGliL1RvYXN0TWVzc2FnZS9hbmltYXRpb25NaXhpbi5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgUmVhY3RUcmFuc2l0aW9uRXZlbnRzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9FeGVjdXRpb25FbnZpcm9ubWVudCcpO1xuXG4vKipcbiAqIEVWRU5UX05BTUVfTUFQIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHdoaWNoIGV2ZW50IGZpcmVkIHdoZW4gYVxuICogdHJhbnNpdGlvbi9hbmltYXRpb24gZW5kcywgYmFzZWQgb24gdGhlIHN0eWxlIHByb3BlcnR5IHVzZWQgdG9cbiAqIGRlZmluZSB0aGF0IGV2ZW50LlxuICovXG52YXIgRVZFTlRfTkFNRV9NQVAgPSB7XG4gIHRyYW5zaXRpb25lbmQ6IHtcbiAgICAndHJhbnNpdGlvbic6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAnV2Via2l0VHJhbnNpdGlvbic6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICAnTW96VHJhbnNpdGlvbic6ICdtb3pUcmFuc2l0aW9uRW5kJyxcbiAgICAnT1RyYW5zaXRpb24nOiAnb1RyYW5zaXRpb25FbmQnLFxuICAgICdtc1RyYW5zaXRpb24nOiAnTVNUcmFuc2l0aW9uRW5kJ1xuICB9LFxuXG4gIGFuaW1hdGlvbmVuZDoge1xuICAgICdhbmltYXRpb24nOiAnYW5pbWF0aW9uZW5kJyxcbiAgICAnV2Via2l0QW5pbWF0aW9uJzogJ3dlYmtpdEFuaW1hdGlvbkVuZCcsXG4gICAgJ01vekFuaW1hdGlvbic6ICdtb3pBbmltYXRpb25FbmQnLFxuICAgICdPQW5pbWF0aW9uJzogJ29BbmltYXRpb25FbmQnLFxuICAgICdtc0FuaW1hdGlvbic6ICdNU0FuaW1hdGlvbkVuZCdcbiAgfVxufTtcblxudmFyIGVuZEV2ZW50cyA9IFtdO1xuXG5mdW5jdGlvbiBkZXRlY3RFdmVudHMoKSB7XG4gIHZhciB0ZXN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdmFyIHN0eWxlID0gdGVzdEVsLnN0eWxlO1xuXG4gIC8vIE9uIHNvbWUgcGxhdGZvcm1zLCBpbiBwYXJ0aWN1bGFyIHNvbWUgcmVsZWFzZXMgb2YgQW5kcm9pZCA0LngsXG4gIC8vIHRoZSB1bi1wcmVmaXhlZCBcImFuaW1hdGlvblwiIGFuZCBcInRyYW5zaXRpb25cIiBwcm9wZXJ0aWVzIGFyZSBkZWZpbmVkIG9uIHRoZVxuICAvLyBzdHlsZSBvYmplY3QgYnV0IHRoZSBldmVudHMgdGhhdCBmaXJlIHdpbGwgc3RpbGwgYmUgcHJlZml4ZWQsIHNvIHdlIG5lZWRcbiAgLy8gdG8gY2hlY2sgaWYgdGhlIHVuLXByZWZpeGVkIGV2ZW50cyBhcmUgdXNlYWJsZSwgYW5kIGlmIG5vdCByZW1vdmUgdGhlbVxuICAvLyBmcm9tIHRoZSBtYXBcbiAgaWYgKCEoJ0FuaW1hdGlvbkV2ZW50JyBpbiB3aW5kb3cpKSB7XG4gICAgZGVsZXRlIEVWRU5UX05BTUVfTUFQLmFuaW1hdGlvbmVuZC5hbmltYXRpb247XG4gIH1cblxuICBpZiAoISgnVHJhbnNpdGlvbkV2ZW50JyBpbiB3aW5kb3cpKSB7XG4gICAgZGVsZXRlIEVWRU5UX05BTUVfTUFQLnRyYW5zaXRpb25lbmQudHJhbnNpdGlvbjtcbiAgfVxuXG4gIGZvciAodmFyIGJhc2VFdmVudE5hbWUgaW4gRVZFTlRfTkFNRV9NQVApIHtcbiAgICB2YXIgYmFzZUV2ZW50cyA9IEVWRU5UX05BTUVfTUFQW2Jhc2VFdmVudE5hbWVdO1xuICAgIGZvciAodmFyIHN0eWxlTmFtZSBpbiBiYXNlRXZlbnRzKSB7XG4gICAgICBpZiAoc3R5bGVOYW1lIGluIHN0eWxlKSB7XG4gICAgICAgIGVuZEV2ZW50cy5wdXNoKGJhc2VFdmVudHNbc3R5bGVOYW1lXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5pZiAoRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NKSB7XG4gIGRldGVjdEV2ZW50cygpO1xufVxuXG4vLyBXZSB1c2UgdGhlIHJhdyB7YWRkfHJlbW92ZX1FdmVudExpc3RlbmVyKCkgY2FsbCBiZWNhdXNlIEV2ZW50TGlzdGVuZXJcbi8vIGRvZXMgbm90IGtub3cgaG93IHRvIHJlbW92ZSBldmVudCBsaXN0ZW5lcnMgYW5kIHdlIHJlYWxseSBzaG91bGRcbi8vIGNsZWFuIHVwLiBBbHNvLCB0aGVzZSBldmVudHMgYXJlIG5vdCB0cmlnZ2VyZWQgaW4gb2xkZXIgYnJvd3NlcnNcbi8vIHNvIHdlIHNob3VsZCBiZSBBLU9LIGhlcmUuXG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnROYW1lLCBldmVudExpc3RlbmVyKSB7XG4gIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xufVxuXG52YXIgUmVhY3RUcmFuc2l0aW9uRXZlbnRzID0ge1xuICBhZGRFbmRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiAobm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgIGlmIChlbmRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBJZiBDU1MgdHJhbnNpdGlvbnMgYXJlIG5vdCBzdXBwb3J0ZWQsIHRyaWdnZXIgYW4gXCJlbmQgYW5pbWF0aW9uXCJcbiAgICAgIC8vIGV2ZW50IGltbWVkaWF0ZWx5LlxuICAgICAgd2luZG93LnNldFRpbWVvdXQoZXZlbnRMaXN0ZW5lciwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVuZEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbmRFdmVudCkge1xuICAgICAgYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBlbmRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH0sXG5cbiAgcmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gKG5vZGUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgICBpZiAoZW5kRXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbmRFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZW5kRXZlbnQpIHtcbiAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZW5kRXZlbnQsIGV2ZW50TGlzdGVuZXIpO1xuICAgIH0pO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0VHJhbnNpdGlvbkV2ZW50cztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvUmVhY3RUcmFuc2l0aW9uRXZlbnRzLmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBFeGVjdXRpb25FbnZpcm9ubWVudFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbi8qKlxuICogU2ltcGxlLCBsaWdodHdlaWdodCBtb2R1bGUgYXNzaXN0aW5nIHdpdGggdGhlIGRldGVjdGlvbiBhbmQgY29udGV4dCBvZlxuICogV29ya2VyLiBIZWxwcyBhdm9pZCBjaXJjdWxhciBkZXBlbmRlbmNpZXMgYW5kIGFsbG93cyBjb2RlIHRvIHJlYXNvbiBhYm91dFxuICogd2hldGhlciBvciBub3QgdGhleSBhcmUgaW4gYSBXb3JrZXIsIGV2ZW4gaWYgdGhleSBuZXZlciBpbmNsdWRlIHRoZSBtYWluXG4gKiBgUmVhY3RXb3JrZXJgIGRlcGVuZGVuY3kuXG4gKi9cbnZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IHtcblxuICBjYW5Vc2VET006IGNhblVzZURPTSxcblxuICBjYW5Vc2VXb3JrZXJzOiB0eXBlb2YgV29ya2VyICE9PSAndW5kZWZpbmVkJyxcblxuICBjYW5Vc2VFdmVudExpc3RlbmVyczogY2FuVXNlRE9NICYmICEhKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyIHx8IHdpbmRvdy5hdHRhY2hFdmVudCksXG5cbiAgY2FuVXNlVmlld3BvcnQ6IGNhblVzZURPTSAmJiAhIXdpbmRvdy5zY3JlZW4sXG5cbiAgaXNJbldvcmtlcjogIWNhblVzZURPTSAvLyBGb3Igbm93LCB0aGlzIGlzIHRydWUgLSBtaWdodCBjaGFuZ2UgaW4gdGhlIGZ1dHVyZS5cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFeGVjdXRpb25FbnZpcm9ubWVudDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9+L2ZianMvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50LmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0cykge1xuICByZXR1cm4gbmV3IEVsZW1lbnRDbGFzcyhvcHRzKVxufVxuXG5mdW5jdGlvbiBpbmRleE9mKGFyciwgcHJvcCkge1xuICBpZiAoYXJyLmluZGV4T2YpIHJldHVybiBhcnIuaW5kZXhPZihwcm9wKVxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKVxuICAgIGlmIChhcnJbaV0gPT09IHByb3ApIHJldHVybiBpXG4gIHJldHVybiAtMVxufVxuXG5mdW5jdGlvbiBFbGVtZW50Q2xhc3Mob3B0cykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgRWxlbWVudENsYXNzKSkgcmV0dXJuIG5ldyBFbGVtZW50Q2xhc3Mob3B0cylcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIGlmICghb3B0cykgb3B0cyA9IHt9XG5cbiAgLy8gc2ltaWxhciBkb2luZyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IGJ1dCB3b3JrcyBpbiBJRThcbiAgaWYgKG9wdHMubm9kZVR5cGUpIG9wdHMgPSB7ZWw6IG9wdHN9XG5cbiAgdGhpcy5vcHRzID0gb3B0c1xuICB0aGlzLmVsID0gb3B0cy5lbCB8fCBkb2N1bWVudC5ib2R5XG4gIGlmICh0eXBlb2YgdGhpcy5lbCAhPT0gJ29iamVjdCcpIHRoaXMuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuZWwpXG59XG5cbkVsZW1lbnRDbGFzcy5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7XG4gIHZhciBlbCA9IHRoaXMuZWxcbiAgaWYgKCFlbCkgcmV0dXJuXG4gIGlmIChlbC5jbGFzc05hbWUgPT09IFwiXCIpIHJldHVybiBlbC5jbGFzc05hbWUgPSBjbGFzc05hbWVcbiAgdmFyIGNsYXNzZXMgPSBlbC5jbGFzc05hbWUuc3BsaXQoJyAnKVxuICBpZiAoaW5kZXhPZihjbGFzc2VzLCBjbGFzc05hbWUpID4gLTEpIHJldHVybiBjbGFzc2VzXG4gIGNsYXNzZXMucHVzaChjbGFzc05hbWUpXG4gIGVsLmNsYXNzTmFtZSA9IGNsYXNzZXMuam9pbignICcpXG4gIHJldHVybiBjbGFzc2VzXG59XG5cbkVsZW1lbnRDbGFzcy5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7XG4gIHZhciBlbCA9IHRoaXMuZWxcbiAgaWYgKCFlbCkgcmV0dXJuXG4gIGlmIChlbC5jbGFzc05hbWUgPT09IFwiXCIpIHJldHVyblxuICB2YXIgY2xhc3NlcyA9IGVsLmNsYXNzTmFtZS5zcGxpdCgnICcpXG4gIHZhciBpZHggPSBpbmRleE9mKGNsYXNzZXMsIGNsYXNzTmFtZSlcbiAgaWYgKGlkeCA+IC0xKSBjbGFzc2VzLnNwbGljZShpZHgsIDEpXG4gIGVsLmNsYXNzTmFtZSA9IGNsYXNzZXMuam9pbignICcpXG4gIHJldHVybiBjbGFzc2VzXG59XG5cbkVsZW1lbnRDbGFzcy5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7XG4gIHZhciBlbCA9IHRoaXMuZWxcbiAgaWYgKCFlbCkgcmV0dXJuXG4gIHZhciBjbGFzc2VzID0gZWwuY2xhc3NOYW1lLnNwbGl0KCcgJylcbiAgcmV0dXJuIGluZGV4T2YoY2xhc3NlcywgY2xhc3NOYW1lKSA+IC0xXG59XG5cbkVsZW1lbnRDbGFzcy5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7XG4gIHZhciBlbCA9IHRoaXMuZWxcbiAgaWYgKCFlbCkgcmV0dXJuXG4gIGlmICh0aGlzLmhhcyhjbGFzc05hbWUpKSB0aGlzLnJlbW92ZShjbGFzc05hbWUpXG4gIGVsc2UgdGhpcy5hZGQoY2xhc3NOYW1lKVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtdG9hc3RyL34vZWxlbWVudC1jbGFzcy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBjYWxsX3Nob3dfbWV0aG9kKCRub2RlLCBwcm9wcykge1xuICAkbm9kZVtwcm9wcy5zaG93TWV0aG9kXSh7XG4gICAgZHVyYXRpb246IHByb3BzLnNob3dEdXJhdGlvbixcbiAgICBlYXNpbmc6IHByb3BzLnNob3dFYXNpbmdcbiAgfSk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGRpc3BsYXk6IFwibm9uZVwiIH0sXG4gICAgICAvLyBlZmZlY3RpdmUgJC5oaWRlKClcbiAgICAgIHNob3dNZXRob2Q6IFwiZmFkZUluXCIsIC8vIHNsaWRlRG93biwgYW5kIHNob3cgYXJlIGJ1aWx0IGludG8galF1ZXJ5XG4gICAgICBzaG93RHVyYXRpb246IDMwMCxcbiAgICAgIHNob3dFYXNpbmc6IFwic3dpbmdcIiwgLy8gYW5kIGxpbmVhciBhcmUgYnVpbHQgaW50byBqUXVlcnlcbiAgICAgIGhpZGVNZXRob2Q6IFwiZmFkZU91dFwiLFxuICAgICAgaGlkZUR1cmF0aW9uOiAxMDAwLFxuICAgICAgaGlkZUVhc2luZzogXCJzd2luZ1wiLFxuICAgICAgLy9cbiAgICAgIHRpbWVPdXQ6IDUwMDAsXG4gICAgICBleHRlbmRlZFRpbWVPdXQ6IDEwMDBcbiAgICB9O1xuICB9LFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW50ZXJ2YWxJZDogbnVsbCxcbiAgICAgIGlzSGlkaW5nOiBmYWxzZVxuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjYWxsX3Nob3dfbWV0aG9kKHRoaXMuX2dldF8kX25vZGUoKSwgdGhpcy5wcm9wcyk7XG4gICAgaWYgKHRoaXMucHJvcHMudGltZU91dCA+IDApIHtcbiAgICAgIHRoaXMuX3NldF9pbnRlcnZhbF9pZChzZXRUaW1lb3V0KHRoaXMuaGlkZVRvYXN0LCB0aGlzLnByb3BzLnRpbWVPdXQpKTtcbiAgICB9XG4gIH0sXG4gIGhhbmRsZU1vdXNlRW50ZXI6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlRW50ZXIoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuc3RhdGUuaW50ZXJ2YWxJZCk7XG4gICAgdGhpcy5fc2V0X2ludGVydmFsX2lkKG51bGwpO1xuICAgIHRoaXMuX3NldF9pc19oaWRpbmcoZmFsc2UpO1xuXG4gICAgY2FsbF9zaG93X21ldGhvZCh0aGlzLl9nZXRfJF9ub2RlKCkuc3RvcCh0cnVlLCB0cnVlKSwgdGhpcy5wcm9wcyk7XG4gIH0sXG4gIGhhbmRsZU1vdXNlTGVhdmU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlTGVhdmUoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmlzSGlkaW5nICYmICh0aGlzLnByb3BzLnRpbWVPdXQgPiAwIHx8IHRoaXMucHJvcHMuZXh0ZW5kZWRUaW1lT3V0ID4gMCkpIHtcbiAgICAgIHRoaXMuX3NldF9pbnRlcnZhbF9pZChzZXRUaW1lb3V0KHRoaXMuaGlkZVRvYXN0LCB0aGlzLnByb3BzLmV4dGVuZGVkVGltZU91dCkpO1xuICAgIH1cbiAgfSxcbiAgaGlkZVRvYXN0OiBmdW5jdGlvbiBoaWRlVG9hc3Qob3ZlcnJpZGUpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5pc0hpZGluZyB8fCB0aGlzLnN0YXRlLmludGVydmFsSWQgPT09IG51bGwgJiYgIW92ZXJyaWRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0hpZGluZzogdHJ1ZSB9KTtcblxuICAgIHRoaXMuX2dldF8kX25vZGUoKVt0aGlzLnByb3BzLmhpZGVNZXRob2RdKHtcbiAgICAgIGR1cmF0aW9uOiB0aGlzLnByb3BzLmhpZGVEdXJhdGlvbixcbiAgICAgIGVhc2luZzogdGhpcy5wcm9wcy5oaWRlRWFzaW5nLFxuICAgICAgY29tcGxldGU6IHRoaXMuX2hhbmRsZV9yZW1vdmVcbiAgICB9KTtcbiAgfSxcbiAgX2dldF8kX25vZGU6IGZ1bmN0aW9uIF9nZXRfJF9ub2RlKCkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4gICAgcmV0dXJuIGpRdWVyeShfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcykpO1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW5kZWYgKi9cbiAgfSxcbiAgX3NldF9pbnRlcnZhbF9pZDogZnVuY3Rpb24gX3NldF9pbnRlcnZhbF9pZChpbnRlcnZhbElkKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbnRlcnZhbElkOiBpbnRlcnZhbElkXG4gICAgfSk7XG4gIH0sXG4gIF9zZXRfaXNfaGlkaW5nOiBmdW5jdGlvbiBfc2V0X2lzX2hpZGluZyhpc0hpZGluZykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNIaWRpbmc6IGlzSGlkaW5nXG4gICAgfSk7XG4gIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtdG9hc3RyL2xpYi9Ub2FzdE1lc3NhZ2UvalF1ZXJ5TWl4aW4uanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQYWdlQnV0dG9uIGZyb20gJy4vUGFnZUJ1dHRvbi5qcyc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi4vQ29uc3QnO1xuXG5jbGFzcyBQYWdpbmF0aW9uTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY2hhbmdlUGFnZShwYWdlKSB7XG4gICAgaWYgKHBhZ2UgPT0gdGhpcy5wcm9wcy5wcmVQYWdlKSB7XG4gICAgICBwYWdlID0gdGhpcy5wcm9wcy5jdXJyUGFnZSAtIDEgPCAxID8gMSA6IHRoaXMucHJvcHMuY3VyclBhZ2UgLSAxO1xuICAgIH0gZWxzZSBpZiAocGFnZSA9PSB0aGlzLnByb3BzLm5leHRQYWdlKSB7XG4gICAgICBwYWdlID0gdGhpcy5wcm9wcy5jdXJyUGFnZSArIDEgPiB0aGlzLnRvdGFsUGFnZXMgPyB0aGlzLnRvdGFsUGFnZXMgOiB0aGlzLnByb3BzLmN1cnJQYWdlICsgMTtcbiAgICB9IGVsc2UgaWYgKHBhZ2UgPT0gdGhpcy5wcm9wcy5sYXN0UGFnZSkge1xuICAgICAgcGFnZSA9IHRoaXMudG90YWxQYWdlcztcbiAgICB9IGVsc2UgaWYgKHBhZ2UgPT0gdGhpcy5wcm9wcy5maXJzdFBhZ2UpIHtcbiAgICAgIHBhZ2UgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYWdlID0gcGFyc2VJbnQocGFnZSk7XG4gICAgfVxuXG4gICAgaWYgKHBhZ2UgIT0gdGhpcy5wcm9wcy5jdXJyUGFnZSkge1xuICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VQYWdlKHBhZ2UsIHRoaXMucHJvcHMuc2l6ZVBlclBhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVNpemVQZXJQYWdlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBzZWxlY3RTaXplID0gcGFyc2VJbnQoZS5jdXJyZW50VGFyZ2V0LnRleHQpO1xuICAgIGxldCB7IGN1cnJQYWdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChzZWxlY3RTaXplICE9IHRoaXMucHJvcHMuc2l6ZVBlclBhZ2UpIHtcbiAgICAgIHRoaXMudG90YWxQYWdlcyA9IE1hdGguY2VpbCh0aGlzLnByb3BzLmRhdGFTaXplIC8gc2VsZWN0U2l6ZSk7XG4gICAgICBpZiAoY3VyclBhZ2UgPiB0aGlzLnRvdGFsUGFnZXMpXG4gICAgICAgIGN1cnJQYWdlID0gdGhpcy50b3RhbFBhZ2VzO1xuXG4gICAgICB0aGlzLnByb3BzLmNoYW5nZVBhZ2UoY3VyclBhZ2UsIHNlbGVjdFNpemUpO1xuICAgICAgaWYodGhpcy5wcm9wcy5vblNpemVQZXJQYWdlTGlzdCl7XG4gICAgICAgIHRoaXMucHJvcHMub25TaXplUGVyUGFnZUxpc3Qoc2VsZWN0U2l6ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMudG90YWxQYWdlcyA9IE1hdGguY2VpbCh0aGlzLnByb3BzLmRhdGFTaXplIC8gdGhpcy5wcm9wcy5zaXplUGVyUGFnZSk7XG4gICAgdmFyIHBhZ2VCdG5zID0gdGhpcy5tYWtlUGFnZSgpO1xuICAgIHZhciBwYWdlTGlzdFN0eWxlID0ge1xuICAgICAgZmxvYXQ6IFwicmlnaHRcIixcbiAgICAgIG1hcmdpblRvcDogXCIwcHhcIiAgLy9vdmVycmlkZSB0aGUgbWFyZ2luLXRvcCBkZWZpbmVkIGluIC5wYWdpbmF0aW9uIGNsYXNzIGluIGJvb3RzdHJhcC5cbiAgICB9XG5cbiAgICB2YXIgc2l6ZVBlclBhZ2VMaXN0ID0gdGhpcy5wcm9wcy5zaXplUGVyUGFnZUxpc3QubWFwKChzaXplUGVyUGFnZSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGtleT17c2l6ZVBlclBhZ2V9IHJvbGU9XCJwcmVzZW50YXRpb25cIj5cbiAgICAgICAgICA8YSByb2xlPVwibWVudWl0ZW1cIiB0YWJJbmRleD1cIi0xXCIgaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLmNoYW5nZVNpemVQZXJQYWdlLmJpbmQodGhpcyl9PntzaXplUGVyUGFnZX08L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAxNSB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5zaXplUGVyUGFnZUxpc3QubGVuZ3RoID4gMSA/XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHQgZHJvcGRvd24tdG9nZ2xlXCIgdHlwZT1cImJ1dHRvblwiIGlkPVwicGFnZURyb3BEb3duXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLnNpemVQZXJQYWdlfVxuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZXRcIi8+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIiByb2xlPVwibWVudVwiIGFyaWEtbGFiZWxsZWRieT1cInBhZ2VEcm9wRG93blwiPlxuICAgICAgICAgICAgICB7c2l6ZVBlclBhZ2VMaXN0fVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA6IFwiXCJcbiAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCIgc3R5bGU9e3BhZ2VMaXN0U3R5bGV9PlxuICAgICAgICAgICAge3BhZ2VCdG5zfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgbWFrZVBhZ2UoKSB7XG4gICAgdmFyIHBhZ2VzID0gdGhpcy5nZXRQYWdlcygpO1xuICAgIHJldHVybiBwYWdlcy5tYXAoZnVuY3Rpb24gKHBhZ2UpIHtcbiAgICAgIHZhciBpc0FjdGl2ZSA9IHBhZ2UgPT09IHRoaXMucHJvcHMuY3VyclBhZ2U7XG4gICAgICB2YXIgZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIHZhciBoaWRkZW4gPSBmYWxzZTtcbiAgICAgIGlmKHRoaXMucHJvcHMuY3VyclBhZ2UgPT0gMSAmJlxuICAgICAgICAocGFnZSA9PT0gdGhpcy5wcm9wcy5maXJzdFBhZ2UgfHwgcGFnZSA9PT0gdGhpcy5wcm9wcy5wcmVQYWdlKSl7XG4gICAgICAgICAgZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIGhpZGRlbiA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZih0aGlzLnByb3BzLmN1cnJQYWdlID09IHRoaXMudG90YWxQYWdlcyAmJlxuICAgICAgICAocGFnZSA9PT0gdGhpcy5wcm9wcy5uZXh0UGFnZSB8fCBwYWdlID09PSB0aGlzLnByb3BzLmxhc3RQYWdlKSl7XG4gICAgICAgICAgZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIGhpZGRlbiA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UGFnZUJ1dHRvbiBjaGFuZ2VQYWdlPXt0aGlzLmNoYW5nZVBhZ2UuYmluZCh0aGlzKX0gYWN0aXZlPXtpc0FjdGl2ZX0gZGlzYWJsZT17ZGlzYWJsZWR9IGhpZGRlbj17aGlkZGVufSBrZXk9e3BhZ2V9PntwYWdlfTwvUGFnZUJ1dHRvbj5cbiAgICAgIClcbiAgICB9LCB0aGlzKTtcbiAgfVxuXG4gIGdldFBhZ2VzKCkge1xuICAgIHZhciBzdGFydFBhZ2UgPSAxLCBlbmRQYWdlID0gdGhpcy50b3RhbFBhZ2VzO1xuXG4gICAgc3RhcnRQYWdlID0gTWF0aC5tYXgodGhpcy5wcm9wcy5jdXJyUGFnZSAtIE1hdGguZmxvb3IodGhpcy5wcm9wcy5wYWdpbmF0aW9uU2l6ZSAvIDIpLCAxKTtcbiAgICBlbmRQYWdlID0gc3RhcnRQYWdlICsgdGhpcy5wcm9wcy5wYWdpbmF0aW9uU2l6ZSAtIDE7XG5cbiAgICBpZiAoZW5kUGFnZSA+IHRoaXMudG90YWxQYWdlcykge1xuICAgICAgZW5kUGFnZSA9IHRoaXMudG90YWxQYWdlcztcbiAgICAgIHN0YXJ0UGFnZSA9IGVuZFBhZ2UgLSB0aGlzLnByb3BzLnBhZ2luYXRpb25TaXplICsgMTtcbiAgICB9XG4gICAgdmFyIHBhZ2VzO1xuICAgIGlmKHN0YXJ0UGFnZSAhPSAxICYmIHRoaXMudG90YWxQYWdlcyA+IHRoaXMucHJvcHMucGFnaW5hdGlvblNpemUpIHtcbiAgICAgIHBhZ2VzID0gW3RoaXMucHJvcHMuZmlyc3RQYWdlLCB0aGlzLnByb3BzLnByZVBhZ2VdO1xuICAgIH0gZWxzZSBpZiAodGhpcy50b3RhbFBhZ2VzID4gMSkge1xuICAgICAgcGFnZXMgPSBbdGhpcy5wcm9wcy5wcmVQYWdlXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBwYWdlcyA9IFtdXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSBzdGFydFBhZ2U7IGkgPD0gZW5kUGFnZTsgaSsrKSB7XG4gICAgICBpZiAoaSA+IDApcGFnZXMucHVzaChpKTtcbiAgICB9XG4gICAgaWYgKGVuZFBhZ2UgIT0gdGhpcy50b3RhbFBhZ2VzKSB7XG4gICAgICBwYWdlcy5wdXNoKHRoaXMucHJvcHMubmV4dFBhZ2UpO1xuICAgICAgcGFnZXMucHVzaCh0aGlzLnByb3BzLmxhc3RQYWdlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudG90YWxQYWdlcyA+IDEpe1xuICAgICAgcGFnZXMucHVzaCh0aGlzLnByb3BzLm5leHRQYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhZ2VzO1xuICB9XG5cbiAgZ2V0Q3VycmVudFBhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY3VyclBhZ2U7XG4gIH1cblxuICBnZXRTaXplUGVyUGFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5zaXplUGVyUGFnZTtcbiAgfVxufVxuUGFnaW5hdGlvbkxpc3QucHJvcFR5cGVzID0ge1xuICBjdXJyUGFnZTogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgc2l6ZVBlclBhZ2U6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIGRhdGFTaXplOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICBjaGFuZ2VQYWdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgc2l6ZVBlclBhZ2VMaXN0OiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gIHBhZ2luYXRpb25TaXplOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICByZW1vdGU6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBvblNpemVQZXJQYWdlTGlzdDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIHByZVBhZ2U6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbn07XG5cblBhZ2luYXRpb25MaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgc2l6ZVBlclBhZ2U6IENvbnN0LlNJWkVfUEVSX1BBR0Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb25MaXN0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcGFnaW5hdGlvbi9QYWdpbmF0aW9uTGlzdC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NTZXQgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNsYXNzIFBhZ2VCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuICBwYWdlQnRuQ2xpY2soZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMuY2hhbmdlUGFnZShlLmN1cnJlbnRUYXJnZXQudGV4dCk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICB2YXIgY2xhc3NlcyA9IGNsYXNzU2V0KHtcbiAgICAgICAgJ2FjdGl2ZSc6IHRoaXMucHJvcHMuYWN0aXZlLFxuICAgICAgICAnZGlzYWJsZWQnOiB0aGlzLnByb3BzLmRpc2FibGUsXG4gICAgICAgICdoaWRkZW4nOiB0aGlzLnByb3BzLmhpZGRlblxuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXN9PjxhIGhyZWY9XCIjXCIgb25DbGljaz17dGhpcy5wYWdlQnRuQ2xpY2suYmluZCh0aGlzKX0+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9hPjwvbGk+XG4gICAgKVxuICB9XG59XG5QYWdlQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgY2hhbmdlUGFnZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIGFjdGl2ZTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGRpc2FibGU6IFJlYWN0LlByb3BUeXBlcy5ib29sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlQnV0dG9uO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcGFnaW5hdGlvbi9QYWdlQnV0dG9uLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc1NldCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBDb25zdCBmcm9tICcuLi9Db25zdCc7XG5pbXBvcnQgRWRpdG9yIGZyb20gJy4uL0VkaXRvcic7XG5pbXBvcnQgTm90aWZpZXIgZnJvbSAnLi4vTm90aWZpY2F0aW9uLmpzJztcblxuY2xhc3MgVG9vbEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnRpbWVvdXRlQ2xlYXI9MDtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNJbnNlcnRSb3dUcmlnZ2VyOiB0cnVlLFxuICAgICAgdmFsaWRhdGVTdGF0ZTpudWxsLFxuICAgICAgc2hha2VFZGl0b3I6ZmFsc2UsXG4gICAgICBzaG93U2VsZWN0ZWQ6IGZhbHNlXG4gICAgfTtcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG4gIH1cbiAgY2xlYXJUaW1lb3V0KCkge1xuICAgIGlmKHRoaXMudGltZW91dGVDbGVhcil7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0ZUNsZWFyKTtcbiAgICAgIHRoaXMudGltZW91dGVDbGVhcj0wO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrQW5kUGFyc2VGb3JtKCl7XG4gICAgdmFyIHRzPXRoaXMsbmV3T2JqID0ge30saXNWYWxpZD10cnVlLHRlbXBWYWx1ZSx0ZW1wTXNnLHZhbGlkYXRlU3RhdGU9e307XG4gICAgdGhpcy5wcm9wcy5jb2x1bW5zLmZvckVhY2goZnVuY3Rpb24oY29sdW1uLCBpKXtcbiAgICAgIGlmKGNvbHVtbi5hdXRvVmFsdWUpey8vd2hlbiB5b3Ugd2FudCBzYW1lIGF1dG8gZ2VuZXJhdGUgdmFsdWUgYW5kIG5vdCBhbGxvdyBlZGl0LCBleGFtcGxlIElEIGZpZWxkXG4gICAgICAgIHRlbXBWYWx1ZT10eXBlb2YgY29sdW1uLmF1dG9WYWx1ZT09J2Z1bmN0aW9uJz9jb2x1bW4uYXV0b1ZhbHVlKCk6KCdhdXRvdmFsdWUtJytuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgbGV0IGRvbSA9IHRoaXMucmVmc1tjb2x1bW4uZmllbGQraV07XG4gICAgICAgIHRlbXBWYWx1ZSA9IGRvbS52YWx1ZTtcblxuICAgICAgICBpZihjb2x1bW4uZWRpdGFibGUgJiYgY29sdW1uLmVkaXRhYmxlLnR5cGUgPT0gJ2NoZWNrYm94Jyl7XG4gICAgICAgICAgbGV0IHZhbHVlcyA9IGRvbS52YWx1ZS5zcGxpdCgnOicpO1xuICAgICAgICAgIHRlbXBWYWx1ZSA9IGRvbS5jaGVja2VkPyB2YWx1ZXNbMF06dmFsdWVzWzFdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoY29sdW1uLmVkaXRhYmxlJiZjb2x1bW4uZWRpdGFibGUudmFsaWRhdG9yKXsvL3Byb2Nlc3MgdmFsaWRhdGVcbiAgICAgICAgICB0ZW1wTXNnPSBjb2x1bW4uZWRpdGFibGUudmFsaWRhdG9yKHRlbXBWYWx1ZSlcbiAgICAgICAgICBpZih0ZW1wTXNnIT09dHJ1ZSl7XG4gICAgICAgICAgICBpc1ZhbGlkPWZhbHNlO1xuICAgICAgICAgICAgdmFsaWRhdGVTdGF0ZVtjb2x1bW4uZmllbGRdPXRlbXBNc2c7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG5ld09ialtjb2x1bW4uZmllbGRdID10ZW1wVmFsdWU7XG4gICAgfSwgdGhpcyk7XG5cbiAgICBpZihpc1ZhbGlkKXtcbiAgICAgIHJldHVybiBuZXdPYmo7XG4gICAgfWVsc2V7XG4gICAgICB0cy5jbGVhclRpbWVvdXQoKTtcbiAgICAgIC8vc2hvdyBlcnJvciBpbiBmb3JtIGFuZCBzaGFrZSBpdFxuICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGVTdGF0ZTp2YWxpZGF0ZVN0YXRlLHNoYWtlRWRpdG9yOnRydWV9KTtcbiAgICAgIC8vbm90aWZpZXIgZXJyb3JcbiAgICAgIHRzLnJlZnMubm90aWZpZXIubm90aWNlKCdlcnJvcicsXCJGb3JtIHZhbGlkYXRlIGVycm9ycywgcGxlYXNlIGNoZWNraW5nIVwiLFwiUHJlc3NlZCBFU0MgY2FuIGNhbmNlbFwiKTtcbiAgICAgIC8vY2xlYXIgYW5pbWF0ZSBjbGFzc1xuICAgICAgdHMudGltZW91dGVDbGVhcj1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dHMuc2V0U3RhdGUoe3NoYWtlRWRpdG9yOmZhbHNlfSk7fSwzMDApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU2F2ZUJ0bkNsaWNrKGUpe1xuICAgIHZhciBuZXdPYmogPSB0aGlzLmNoZWNrQW5kUGFyc2VGb3JtKCk7XG4gICAgaWYoIW5ld09iail7Ly92YWxpZGF0ZSBlcnJvcnNcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIG1zZyA9IHRoaXMucHJvcHMub25BZGRSb3cobmV3T2JqKTtcbiAgICBpZihtc2cpIHtcbiAgICAgIHZhciB0cz10aGlzO1xuICAgICAgdHMucmVmcy5ub3RpZmllci5ub3RpY2UoJ2Vycm9yJyxtc2csXCJQcmVzc2VkIEVTQyBjYW4gY2FuY2VsXCIpO1xuICAgICAgdHMuY2xlYXJUaW1lb3V0KCk7XG4gICAgICAvL3NoYWtlIGZvcm0gYW5kIGhhY2sgcHJldmVudCBtb2RhbCBoaWRlXG4gICAgICB0cy5zZXRTdGF0ZSh7c2hha2VFZGl0b3I6dHJ1ZSx2YWxpZGF0ZVN0YXRlOlwidGhpcyBpcyBoYWNrIGZvciBwcmV2ZW50IGJvb3RzdHJhcCBtb2RhbCBoaWRlXCJ9KTtcbiAgICAgIC8vY2xlYXIgYW5pbWF0ZSBjbGFzc1xuICAgICAgdHMudGltZW91dGVDbGVhcj1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dHMuc2V0U3RhdGUoe3NoYWtlRWRpdG9yOmZhbHNlfSk7fSwzMDApO1xuICAgIH0gZWxzZXtcbiAgICAgIC8vcmVzZXQgc3RhdGUgYW5kIGhpZGUgbW9kYWwgaGlkZVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHZhbGlkYXRlU3RhdGU6bnVsbCxcbiAgICAgICAgc2hha2VFZGl0b3I6ZmFsc2VcbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIitcIm1vZGFsLWJhY2tkcm9wXCIpLmNsaWNrKCk7XG4gICAgICB9KTtcbiAgICAgIC8vcmVzZXQgZm9ybVxuICAgICAgdGhpcy5yZWZzLmZvcm0ucmVzZXQoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTaG93T25seVRvZ2dsZSA9IGUgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd1NlbGVjdGVkOiAhdGhpcy5zdGF0ZS5zaG93U2VsZWN0ZWRcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLm9uU2hvd09ubHlTZWxlY3RlZCgpO1xuICB9XG5cbiAgaGFuZGxlRHJvcFJvd0J0bkNsaWNrKGUpe1xuICAgIHRoaXMucHJvcHMub25Ecm9wUm93KCk7XG4gIH1cblxuICBoYW5kbGVDbG9zZUJ0bihlKXtcbiAgICB0aGlzLnJlZnMud2FybmluZy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cblxuICBoYW5kbGVLZXlVcChlKXtcbiAgICB0aGlzLnByb3BzLm9uU2VhcmNoKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBoYW5kbGVFeHBvcnRDU1YoKSB7XG4gICAgdGhpcy5wcm9wcy5vbkV4cG9ydENTVigpO1xuICB9XG5cbiAgaGFuZGxlQ2xlYXJCdG5DbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnJlZnMuc2VhY2hJbnB1dC52YWx1ZSA9ICcnO1xuICAgIHRoaXMucHJvcHMub25TZWFyY2goJycpO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgdmFyIG1vZGFsQ2xhc3NOYW1lID0gXCJicy10YWJsZS1tb2RhbC1zbVwiK25ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIHZhciBpbnNlcnRCdG4gPSB0aGlzLnByb3BzLmVuYWJsZUluc2VydD9cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQWRkUm93QmVnaW59IGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyByZWFjdC1icy10YWJsZS1hZGQtYnRuXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PXsnLicrbW9kYWxDbGFzc05hbWV9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXCI+PC9pPiBOZXc8L2J1dHRvbj46bnVsbDtcblxuICAgIHZhciBkZWxldGVCdG4gPSB0aGlzLnByb3BzLmVuYWJsZURlbGV0ZT9cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmcgcmVhY3QtYnMtdGFibGUtZGVsLWJ0blwiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIGRhdGEtcGxhY2VtZW50PVwicmlnaHRcIiB0aXRsZT1cIkRyb3Agc2VsZWN0ZWQgcm93XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRHJvcFJvd0J0bkNsaWNrLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmFzaFwiPjwvaT4gRGVsZXRlXG4gICAgICAgICAgPC9idXR0b24+Om51bGw7XG5cbiAgICB2YXIgc2VhcmNoVGV4dElucHV0ID0gdGhpcy5yZW5kZXJTZWFyY2hQYW5lbCgpO1xuXG4gICAgdmFyIHNob3dTZWxlY3RlZE9ubHlCdG4gPSB0aGlzLnByb3BzLmVuYWJsZVNob3dPbmx5U2VsZWN0ZWQ/XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNob3dPbmx5VG9nZ2xlLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIGRhdGEtdG9nZ2xlPVwiYnV0dG9uXCIgYXJpYS1wcmVzc2VkPVwiZmFsc2VcIj5cbiAgICAgICAgeyB0aGlzLnN0YXRlLnNob3dTZWxlY3RlZD8gQ29uc3QuU0hPV19BTEwgOiBDb25zdC5TSE9XX09OTFlfU0VMRUNUIH1cbiAgICAgIDwvYnV0dG9uPjpudWxsO1xuXG4gICAgdmFyIG1vZGFsID0gdGhpcy5wcm9wcy5lbmFibGVJbnNlcnQ/dGhpcy5yZW5kZXJJbnNlcnRSb3dNb2RhbChtb2RhbENsYXNzTmFtZSk6bnVsbDtcbiAgICB2YXIgd2FybmluZ1N0eWxlID0ge1xuICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgICBtYXJnaW5Cb3R0b206IDBcbiAgICB9O1xuXG4gICAgdmFyIGV4cG9ydENTViA9IHRoaXMucHJvcHMuZW5hYmxlRXhwb3J0Q1NWID9cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUV4cG9ydENTVi5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1leHBvcnRcIj48L2k+IEV4cG9ydCB0byBDU1Y8L2J1dHRvbj4gOiBudWxsO1xuXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTYgY29sLW1kLTYgY29sLWxnLThcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cCBidG4tZ3JvdXAtc21cIiByb2xlPVwiZ3JvdXBcIj5cbiAgICAgICAgICAgIHtleHBvcnRDU1Z9XG4gICAgICAgICAgICB7aW5zZXJ0QnRufVxuICAgICAgICAgICAge2RlbGV0ZUJ0bn1cbiAgICAgICAgICAgIHtzaG93U2VsZWN0ZWRPbmx5QnRufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTYgY29sLW1kLTYgY29sLWxnLTRcIj5cbiAgICAgICAgICB7c2VhcmNoVGV4dElucHV0fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPE5vdGlmaWVyIHJlZj1cIm5vdGlmaWVyXCI+PC9Ob3RpZmllcj5cbiAgICAgICAge21vZGFsfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyU2VhcmNoUGFuZWwoKSB7XG4gICAgaWYodGhpcy5wcm9wcy5lbmFibGVTZWFyY2gpIHtcbiAgICAgIGxldCBjbGFzc05hbWVzID0gJ2Zvcm0tZ3JvdXAgZm9ybS1ncm91cC1zbSc7XG4gICAgICBsZXQgY2xlYXJCdG4gPSBudWxsO1xuICAgICAgaWYodGhpcy5wcm9wcy5jbGVhclNlYXJjaCkge1xuICAgICAgICBjbGVhckJ0biA9IChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1idG5cIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLmhhbmRsZUNsZWFyQnRuQ2xpY2sgfT5DbGVhcjwvYnV0dG9uPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKTtcbiAgICAgICAgY2xhc3NOYW1lcyA9ICdmb3JtLWdyb3VwIGZvcm0tZ3JvdXAtc20gaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtc20nO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+XG4gICAgICAgICAgPGlucHV0IHJlZj0nc2VhY2hJbnB1dCcgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnNlYXJjaFBsYWNlaG9sZGVyP3RoaXMucHJvcHMuc2VhcmNoUGxhY2Vob2xkZXI6J1NlYXJjaCd9XG4gICAgICAgICAgICBvbktleVVwPXt0aGlzLmhhbmRsZUtleVVwLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgIHsgY2xlYXJCdG4gfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckluc2VydFJvd01vZGFsKG1vZGFsQ2xhc3NOYW1lKXtcbiAgICB2YXIgdmFsaWRhdGVTdGF0ZT10aGlzLnN0YXRlLnZhbGlkYXRlU3RhdGV8fHt9O1xuICAgIHZhciBpbnB1dEZpZWxkID0gdGhpcy5wcm9wcy5jb2x1bW5zLm1hcChmdW5jdGlvbihjb2x1bW4sIGkpe1xuICAgICAgdmFyIGVkaXRhYmxlPWNvbHVtbi5lZGl0YWJsZSxcbiAgICAgICAgICBmb3JtYXQ9Y29sdW1uLmZvcm1hdCxcbiAgICAgICAgICBhdHRyPXtyZWY6Y29sdW1uLmZpZWxkK2kscGxhY2Vob2xkZXI6ZWRpdGFibGUucGxhY2Vob2xkZXI/ZWRpdGFibGUucGxhY2Vob2xkZXI6Y29sdW1uLm5hbWV9O1xuXG4gICAgICBpZihjb2x1bW4uYXV0b1ZhbHVlKXsvL3doZW4geW91IHdhbnQgc2FtZSBhdXRvIGdlbmVyYXRlIHZhbHVlIGFuZCBub3QgYWxsb3cgZWRpdCwgZXhhbXBsZSBJRCBmaWVsZFxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHZhciBlcnJvcj12YWxpZGF0ZVN0YXRlW2NvbHVtbi5maWVsZF0/KDxzcGFuIGNsYXNzTmFtZT1cImhlbHAtYmxvY2sgYmctZGFuZ2VyXCI+e3ZhbGlkYXRlU3RhdGVbY29sdW1uLmZpZWxkXX08L3NwYW4+KTpudWxsO1xuXG4gICAgICAvLyBsZXQgZWRpdG9yID0gRWRpdG9yKGVkaXRhYmxlLGF0dHIsZm9ybWF0KTtcbiAgICAgIC8vIGlmKGVkaXRvci5wcm9wcy50eXBlICYmIGVkaXRvci5wcm9wcy50eXBlID09ICdjaGVja2JveCcpe1xuICAgICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIiBrZXk9e2NvbHVtbi5maWVsZH0+XG4gICAgICAgICAgPGxhYmVsPntjb2x1bW4ubmFtZX08L2xhYmVsPlxuICAgICAgICAgIHtFZGl0b3IoZWRpdGFibGUsYXR0cixmb3JtYXQsJycpfVxuICAgICAgICAgIHtlcnJvcn1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0pO1xuICAgIHZhciBtb2RhbENsYXNzID0gY2xhc3NTZXQoXCJtb2RhbFwiLCBcImZhZGVcIiAsIG1vZGFsQ2xhc3NOYW1lLHtcbiAgICAgICdpbic6dGhpcy5zdGF0ZS5zaGFrZUVkaXRvcnx8dGhpcy5zdGF0ZS52YWxpZGF0ZVN0YXRlLy9oYWNrIHByZXZlbnQgYm9vdHN0cmFwIG1vZGFsIGhpZGUgYnkgcmVSZW5kZXJcbiAgICB9KTtcbiAgICB2YXIgZGlhbG9nQ2xhc3M9Y2xhc3NTZXQoXCJtb2RhbC1kaWFsb2dcIixcIm1vZGFsLXNtXCIse1xuICAgICAgXCJhbmltYXRlZFwiOnRoaXMuc3RhdGUuc2hha2VFZGl0b3IsXG4gICAgICBcInNoYWtlXCI6dGhpcy5zdGF0ZS5zaGFrZUVkaXRvclxuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj1cIm1vZGFsXCIgIGNsYXNzTmFtZT17bW9kYWxDbGFzc30gdGFiSW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtkaWFsb2dDbGFzc30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+TmV3IFJlY29yZDwvaDQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgICA8Zm9ybSByZWY9XCJmb3JtXCI+XG4gICAgICAgICAgICAgIHtpbnB1dEZpZWxkfVxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2F2ZUJ0bkNsaWNrLmJpbmQodGhpcyl9PlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuVG9vbEJhci5wcm9wVHlwZXMgPSB7XG4gIG9uQWRkUm93OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgb25Ecm9wUm93OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgb25TaG93T25seVNlbGVjdGVkOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgZW5hYmxlSW5zZXJ0OiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgZW5hYmxlRGVsZXRlOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgZW5hYmxlU2VhcmNoOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgZW5hYmxlU2hvd09ubHlTZWxlY3RlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGNvbHVtbnM6IFJlYWN0LlByb3BUeXBlcy5hcnJheSxcbiAgc2VhcmNoUGxhY2Vob2xkZXI6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGNsZWFyU2VhcmNoOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbFxufTtcblxuVG9vbEJhci5kZWZhdWx0UHJvcHMgPSB7XG4gIGVuYWJsZUluc2VydDogZmFsc2UsXG4gIGVuYWJsZURlbGV0ZTogZmFsc2UsXG4gIGVuYWJsZVNlYXJjaDogZmFsc2UsXG4gIGVuYWJsZVNob3dPbmx5U2VsZWN0ZWQ6IGZhbHNlLFxuICBjbGVhclNlYXJjaDogZmFsc2Vcbn1cbmV4cG9ydCBkZWZhdWx0IFRvb2xCYXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy90b29sYmFyL1Rvb2xCYXIuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4vQ29uc3QnO1xuaW1wb3J0IGNsYXNzU2V0IGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jbGFzcyBUYWJsZUZpbHRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmZpbHRlck9iaiA9IHt9O1xuICB9XG5cbiAgaGFuZGxlS2V5VXAoZSl7XG4gICAgaWYoZS5jdXJyZW50VGFyZ2V0LnZhbHVlLnRyaW0oKSA9PT0gXCJcIilcbiAgICAgIGRlbGV0ZSB0aGlzLmZpbHRlck9ialtlLmN1cnJlbnRUYXJnZXQubmFtZV07XG4gICAgZWxzZVxuICAgICAgdGhpcy5maWx0ZXJPYmpbZS5jdXJyZW50VGFyZ2V0Lm5hbWVdID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuXG4gICAgdGhpcy5wcm9wcy5vbkZpbHRlcih0aGlzLmZpbHRlck9iaik7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICB2YXIgdGFibGVDbGFzc2VzID0gY2xhc3NTZXQoXCJ0YWJsZVwiLCB7XG4gICAgICAndGFibGUtc3RyaXBlZCc6IHRoaXMucHJvcHMuc3RyaXBlZCxcbiAgICAgICd0YWJsZS1jb25kZW5zZWQnOiB0aGlzLnByb3BzLmNvbmRlbnNlZFxuICAgIH0pO1xuICAgIHZhciBzZWxlY3RSb3dIZWFkZXIgPSBudWxsO1xuXG4gICAgaWYodGhpcy5wcm9wcy5yb3dTZWxlY3RUeXBlID09IENvbnN0LlJPV19TRUxFQ1RfU0lOR0xFIHx8XG4gICAgICAgIHRoaXMucHJvcHMucm93U2VsZWN0VHlwZSA9PSBDb25zdC5ST1dfU0VMRUNUX01VTFRJKXtcbiAgICAgIGxldCBzdHlsZSA9IHtcbiAgICAgICAgd2lkdGg6MzUsXG4gICAgICAgIHBhZGRpbmdMZWZ0OiAwLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IDBcbiAgICAgIH1cbiAgICAgIHNlbGVjdFJvd0hlYWRlciA9ICg8dGggc3R5bGU9e3N0eWxlfSBrZXk9ey0xfT5GaWx0ZXI8L3RoPik7XG4gICAgfVxuICAgIHZhciBmaWx0ZXJGaWVsZCA9IHRoaXMucHJvcHMuY29sdW1ucy5tYXAoZnVuY3Rpb24oY29sdW1uKXtcbiAgICAgIHZhciB0aFN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiBjb2x1bW4uaGlkZGVuP1wibm9uZVwiOm51bGwsXG4gICAgICAgIHdpZHRoOiBjb2x1bW4ud2lkdGhcbiAgICAgIH07XG4gICAgICByZXR1cm4oXG4gICAgICAgIDx0aCBrZXk9e2NvbHVtbi5uYW1lfSBzdHlsZT17dGhTdHlsZX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aC1pbm5lciB0YWJsZS1oZWFkZXItY29sdW1uXCI+XG4gICAgICAgICAgICA8aW5wdXQgc2l6ZT1cIjEwXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj17Y29sdW1uLm5hbWV9IG5hbWU9e2NvbHVtbi5uYW1lfSBvbktleVVwPXt0aGlzLmhhbmRsZUtleVVwLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90aD5cbiAgICAgIClcbiAgICB9LCB0aGlzKTtcbiAgICByZXR1cm4oXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPXt0YWJsZUNsYXNzZXN9IHN0eWxlPXt7bWFyZ2luVG9wOjV9fT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0ciBzdHlsZT17e2JvcmRlckJvdHRvbVN0eWxlOiAnaGlkZGVuJ319PlxuICAgICAgICAgICAge3NlbGVjdFJvd0hlYWRlcn17ZmlsdGVyRmllbGR9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgIDwvdGFibGU+XG4gICAgKVxuICB9XG59XG5UYWJsZUZpbHRlci5wcm9wVHlwZXMgPSB7XG4gIGNvbHVtbnM6IFJlYWN0LlByb3BUeXBlcy5hcnJheSxcbiAgcm93U2VsZWN0VHlwZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgb25GaWx0ZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG59O1xuZXhwb3J0IGRlZmF1bHQgVGFibGVGaWx0ZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9UYWJsZUZpbHRlci5qc1xuICoqLyIsImltcG9ydCBDb25zdCBmcm9tIFwiLi4vQ29uc3RcIjtcbnZhciBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXI7XG5cbmZ1bmN0aW9uIF9zb3J0KGFyciwgc29ydEZpZWxkLCBvcmRlciwgc29ydEZ1bmMpIHtcbiAgb3JkZXIgPSBvcmRlci50b0xvd2VyQ2FzZSgpO1xuICBhcnIuc29ydCgoYSwgYikgPT4ge1xuICAgIGlmIChzb3J0RnVuYykge1xuICAgICAgcmV0dXJuIHNvcnRGdW5jKGEsIGIsIG9yZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG9yZGVyID09IENvbnN0LlNPUlRfREVTQykge1xuICAgICAgICByZXR1cm4gYVtzb3J0RmllbGRdID4gYltzb3J0RmllbGRdID8gLTEgOiAoKGFbc29ydEZpZWxkXSA8IGJbc29ydEZpZWxkXSkgPyAxIDogMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYVtzb3J0RmllbGRdIDwgYltzb3J0RmllbGRdID8gLTEgOiAoKGFbc29ydEZpZWxkXSA+IGJbc29ydEZpZWxkXSkgPyAxIDogMCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gYXJyO1xufVxuXG5leHBvcnQgY2xhc3MgVGFibGVEYXRhU2V0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHN1cGVyKGRhdGEpO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gIH1cblxuICBzZXREYXRhKGRhdGEpIHtcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIGRhdGEpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5kYXRhID0gbnVsbDtcbiAgfVxuXG4gIGdldERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGFibGVEYXRhU3RvcmUge1xuXG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMuY29sSW5mb3MgPSBudWxsO1xuICAgIHRoaXMuZmlsdGVyZWREYXRhID0gbnVsbDtcbiAgICB0aGlzLmlzT25GaWx0ZXIgPSBmYWxzZTtcbiAgICB0aGlzLmZpbHRlck9iaiA9IG51bGw7XG4gICAgdGhpcy5zZWFyY2hUZXh0ID0gbnVsbDtcbiAgICB0aGlzLnNvcnRPYmogPSBudWxsO1xuICAgIHRoaXMucGFnZU9iaiA9IHt9O1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcbiAgICB0aGlzLm11bHRpQ29sdW1uU2VhcmNoID0gZmFsc2U7XG4gICAgdGhpcy5zaG93T25seVNlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5yZW1vdGUgPSBmYWxzZTsgLy8gcmVtb3RlIGRhdGFcbiAgfVxuXG4gIHNldFByb3BzKHByb3BzKSB7XG4gICAgdGhpcy5rZXlGaWVsZCA9IHByb3BzLmtleUZpZWxkO1xuICAgIHRoaXMuZW5hYmxlUGFnaW5hdGlvbiA9IHByb3BzLmlzUGFnaW5hdGlvbjtcbiAgICB0aGlzLmNvbEluZm9zID0gcHJvcHMuY29sSW5mb3M7XG4gICAgdGhpcy5yZW1vdGUgPSBwcm9wcy5yZW1vdGU7XG4gICAgdGhpcy5tdWx0aUNvbHVtblNlYXJjaCA9IHByb3BzLm11bHRpQ29sdW1uU2VhcmNoO1xuICB9XG5cbiAgc2V0RGF0YShkYXRhKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICBpZiAodGhpcy5pc09uRmlsdGVyKSB7XG4gICAgICBpZiAobnVsbCAhPT0gdGhpcy5maWx0ZXJPYmopIHRoaXMuZmlsdGVyKHRoaXMuZmlsdGVyT2JqKTtcbiAgICAgIGlmIChudWxsICE9PSB0aGlzLnNlYXJjaFRleHQpIHRoaXMuc2VhcmNoKHRoaXMuc2VhcmNoVGV4dCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNvcnRPYmopIHtcbiAgICAgIHRoaXMuc29ydCh0aGlzLnNvcnRPYmoub3JkZXIsIHRoaXMuc29ydE9iai5zb3J0RmllbGQpO1xuICAgIH1cbiAgfVxuXG4gIGdldFNvcnRJbmZvKCkge1xuICAgIHJldHVybiB0aGlzLnNvcnRPYmo7XG4gIH1cblxuICBzZXRTZWxlY3RlZFJvd0tleShzZWxlY3RlZFJvd0tleXMpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gc2VsZWN0ZWRSb3dLZXlzO1xuICB9XG5cbiAgZ2V0U2VsZWN0ZWRSb3dLZXlzKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkO1xuICB9XG5cbiAgZ2V0Q3VycmVudERpc3BsYXlEYXRhKCkge1xuICAgIGlmICh0aGlzLmlzT25GaWx0ZXIpIHJldHVybiB0aGlzLmZpbHRlcmVkRGF0YTtcbiAgICBlbHNlIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cblxuICBpZ25vcmVOb25TZWxlY3RlZCgpIHtcbiAgICB0aGlzLnNob3dPbmx5U2VsZWN0ZWQgPSAhdGhpcy5zaG93T25seVNlbGVjdGVkO1xuICAgIGlmKHRoaXMuc2hvd09ubHlTZWxlY3RlZCl7XG4gICAgICB0aGlzLmlzT25GaWx0ZXIgPSB0cnVlO1xuICAgICAgdGhpcy5maWx0ZXJlZERhdGEgPSB0aGlzLmRhdGEuZmlsdGVyKCByb3cgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5zZWxlY3RlZC5maW5kKHggPT4gcm93W3RoaXMua2V5RmllbGRdID09PSB4KVxuICAgICAgICByZXR1cm4gdHlwZW9mIHJlc3VsdCAhPT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogZmFsc2U7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc09uRmlsdGVyID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgc29ydChvcmRlciwgc29ydEZpZWxkKSB7XG4gICAgdGhpcy5zb3J0T2JqID0ge1xuICAgICAgb3JkZXI6IG9yZGVyLFxuICAgICAgc29ydEZpZWxkOiBzb3J0RmllbGRcbiAgICB9O1xuXG4gICAgbGV0IGN1cnJlbnREaXNwbGF5RGF0YSA9IHRoaXMuZ2V0Q3VycmVudERpc3BsYXlEYXRhKCk7XG4gICAgaWYoIXRoaXMuY29sSW5mb3Nbc29ydEZpZWxkXSkgcmV0dXJuIHRoaXM7XG5cbiAgICBjb25zdCB7IHNvcnRGdW5jIH0gPSB0aGlzLmNvbEluZm9zW3NvcnRGaWVsZF07XG4gICAgY3VycmVudERpc3BsYXlEYXRhID0gX3NvcnQoY3VycmVudERpc3BsYXlEYXRhLCBzb3J0RmllbGQsIG9yZGVyLCBzb3J0RnVuYyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHBhZ2UocGFnZSwgc2l6ZVBlclBhZ2UpIHtcbiAgICB0aGlzLnBhZ2VPYmouZW5kID0gcGFnZSAqIHNpemVQZXJQYWdlIC0gMTtcbiAgICB0aGlzLnBhZ2VPYmouc3RhcnQgPSB0aGlzLnBhZ2VPYmouZW5kIC0gKHNpemVQZXJQYWdlIC0gMSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBlZGl0KG5ld1ZhbCwgcm93SW5kZXgsIGZpZWxkTmFtZSkge1xuICAgIGxldCBjdXJyZW50RGlzcGxheURhdGEgPSB0aGlzLmdldEN1cnJlbnREaXNwbGF5RGF0YSgpO1xuICAgIGxldCByb3dLZXlDYWNoZTtcbiAgICBpZiAoIXRoaXMuZW5hYmxlUGFnaW5hdGlvbikge1xuICAgICAgY3VycmVudERpc3BsYXlEYXRhW3Jvd0luZGV4XVtmaWVsZE5hbWVdID0gbmV3VmFsO1xuICAgICAgcm93S2V5Q2FjaGUgPSBjdXJyZW50RGlzcGxheURhdGFbcm93SW5kZXhdW3RoaXMua2V5RmllbGRdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50RGlzcGxheURhdGFbdGhpcy5wYWdlT2JqLnN0YXJ0ICsgcm93SW5kZXhdW2ZpZWxkTmFtZV0gPSBuZXdWYWw7XG4gICAgICByb3dLZXlDYWNoZSA9IGN1cnJlbnREaXNwbGF5RGF0YVt0aGlzLnBhZ2VPYmouc3RhcnQgKyByb3dJbmRleF1bdGhpcy5rZXlGaWVsZF07XG4gICAgfVxuICAgIGlmICh0aGlzLmlzT25GaWx0ZXIpIHtcbiAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgaWYgKHJvd1t0aGlzLmtleUZpZWxkXSA9PT0gcm93S2V5Q2FjaGUpIHtcbiAgICAgICAgICByb3dbZmllbGROYW1lXSA9IG5ld1ZhbDtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcyk7XG4gICAgICBpZiAobnVsbCAhPT0gdGhpcy5maWx0ZXJPYmopIHRoaXMuZmlsdGVyKHRoaXMuZmlsdGVyT2JqKTtcbiAgICAgIGlmIChudWxsICE9PSB0aGlzLnNlYXJjaFRleHQpIHRoaXMuc2VhcmNoKHRoaXMuc2VhcmNoVGV4dCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkKG5ld09iaikge1xuICAgIGlmICghbmV3T2JqW3RoaXMua2V5RmllbGRdIHx8IG5ld09ialt0aGlzLmtleUZpZWxkXS50b1N0cmluZygpID09PSAnJykge1xuICAgICAgdGhyb3cgdGhpcy5rZXlGaWVsZCArIFwiIGNhbid0IGJlIGVtcHR5IHZhbHVlLlwiO1xuICAgIH1cbiAgICBsZXQgY3VycmVudERpc3BsYXlEYXRhID0gdGhpcy5nZXRDdXJyZW50RGlzcGxheURhdGEoKTtcbiAgICBjdXJyZW50RGlzcGxheURhdGEuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICBpZiAocm93W3RoaXMua2V5RmllbGRdLnRvU3RyaW5nKCkgPT09IG5ld09ialt0aGlzLmtleUZpZWxkXS50b1N0cmluZygpKSB7XG4gICAgICAgIHRocm93IHRoaXMua2V5RmllbGQgKyBcIiBcIiArIG5ld09ialt0aGlzLmtleUZpZWxkXSArIFwiIGFscmVhZHkgZXhpc3RzXCI7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG5cbiAgICBjdXJyZW50RGlzcGxheURhdGEucHVzaChuZXdPYmopO1xuICAgIGlmICh0aGlzLmlzT25GaWx0ZXIpIHtcbiAgICAgIHRoaXMuZGF0YS5wdXNoKG5ld09iaik7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlKHJvd0tleSkge1xuICAgIGxldCBjdXJyZW50RGlzcGxheURhdGEgPSB0aGlzLmdldEN1cnJlbnREaXNwbGF5RGF0YSgpO1xuICAgIGxldCByZXN1bHQgPSBjdXJyZW50RGlzcGxheURhdGEuZmlsdGVyKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgIHJldHVybiByb3dLZXkuaW5kZXhPZihyb3dbdGhpcy5rZXlGaWVsZF0pID09IC0xO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgaWYgKHRoaXMuaXNPbkZpbHRlcikge1xuICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLmZpbHRlcihmdW5jdGlvbiAocm93KSB7XG4gICAgICAgIHJldHVybiByb3dLZXkuaW5kZXhPZihyb3dbdGhpcy5rZXlGaWVsZF0pID09IC0xO1xuICAgICAgfSwgdGhpcyk7XG4gICAgICB0aGlzLmZpbHRlcmVkRGF0YSA9IHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhID0gcmVzdWx0O1xuICAgIH1cbiAgfVxuXG4gIGZpbHRlcihmaWx0ZXJPYmopIHtcbiAgICBpZiAoT2JqZWN0LmtleXMoZmlsdGVyT2JqKS5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy5maWx0ZXJlZERhdGEgPSBudWxsO1xuICAgICAgdGhpcy5pc09uRmlsdGVyID0gZmFsc2U7XG4gICAgICB0aGlzLmZpbHRlck9iaiA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmlsdGVyT2JqID0gZmlsdGVyT2JqO1xuICAgICAgdGhpcy5maWx0ZXJlZERhdGEgPSB0aGlzLmRhdGEuZmlsdGVyKCByb3cgPT4ge1xuICAgICAgICBsZXQgdmFsaWQgPSB0cnVlO1xuICAgICAgICBsZXQgZmlsdGVyVmFsO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gZmlsdGVyT2JqKSB7XG4gICAgICAgICAgbGV0IHRhcmdldFZhbCA9IHJvd1trZXldO1xuXG4gICAgICAgICAgc3dpdGNoIChmaWx0ZXJPYmpba2V5XS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIENvbnN0LkZJTFRFUl9UWVBFLk5VTUJFUjpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZmlsdGVyVmFsID0gZmlsdGVyT2JqW2tleV0udmFsdWUubnVtYmVyO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgQ29uc3QuRklMVEVSX1RZUEUuQ1VTVE9NOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBmaWx0ZXJWYWwgPSAodHlwZW9mIGZpbHRlck9ialtrZXldLnZhbHVlID09PSBcIm9iamVjdFwiKSA/XG4gICAgICAgICAgICAgICAgICB1bmRlZmluZWQgOlxuICAgICAgICAgICAgICAgICAgKHR5cGVvZiBmaWx0ZXJPYmpba2V5XS52YWx1ZSA9PT0gXCJzdHJpbmdcIikgPyBmaWx0ZXJPYmpba2V5XS52YWx1ZS50b0xvd2VyQ2FzZSgpIDogZmlsdGVyT2JqW2tleV0udmFsdWU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICBmaWx0ZXJWYWwgPSAodHlwZW9mIGZpbHRlck9ialtrZXldLnZhbHVlID09PSBcInN0cmluZ1wiKSA/IGZpbHRlck9ialtrZXldLnZhbHVlLnRvTG93ZXJDYXNlKCkgOiBmaWx0ZXJPYmpba2V5XS52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGZpbHRlclZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgLy8gU3VwcG9ydCBvbGQgZmlsdGVyXG4gICAgICAgICAgICAgICAgZmlsdGVyVmFsID0gZmlsdGVyT2JqW2tleV0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5jb2xJbmZvc1trZXldKSB7XG4gICAgICAgICAgICBjb25zdCB7IGZvcm1hdCwgZmlsdGVyRm9ybWF0dGVkLCBmb3JtYXRFeHRyYURhdGEgfSA9IHRoaXMuY29sSW5mb3Nba2V5XTtcbiAgICAgICAgICAgIGlmKGZpbHRlckZvcm1hdHRlZCAmJiBmb3JtYXQpIHtcbiAgICAgICAgICAgICAgdGFyZ2V0VmFsID0gZm9ybWF0KHJvd1trZXldLCByb3csIGZvcm1hdEV4dHJhRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3dpdGNoIChmaWx0ZXJPYmpba2V5XS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIENvbnN0LkZJTFRFUl9UWVBFLk5VTUJFUjpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdmFsaWQgPSB0aGlzLmZpbHRlck51bWJlcih0YXJnZXRWYWwsIGZpbHRlclZhbCwgZmlsdGVyT2JqW2tleV0udmFsdWUuY29tcGFyYXRvcik7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBDb25zdC5GSUxURVJfVFlQRS5EQVRFOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2YWxpZCA9IHRoaXMuZmlsdGVyRGF0ZSh0YXJnZXRWYWwsIGZpbHRlclZhbCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBDb25zdC5GSUxURVJfVFlQRS5DVVNUT006XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZhbGlkID0gdGhpcy5maWx0ZXJDdXN0b20odGFyZ2V0VmFsLCBmaWx0ZXJWYWwsIGZpbHRlck9ialtrZXldLnZhbHVlKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgIHZhbGlkID0gdGhpcy5maWx0ZXJUZXh0KHRhcmdldFZhbCwgZmlsdGVyVmFsKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsaWQ7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuaXNPbkZpbHRlciA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZmlsdGVyTnVtYmVyKHRhcmdldFZhbCwgZmlsdGVyVmFsLCBjb21wYXJhdG9yKSB7XG4gICAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgICBzd2l0Y2ggKGNvbXBhcmF0b3IpIHtcbiAgICAgIGNhc2UgXCI9XCI6XG4gICAgICB7XG4gICAgICAgIGlmICh0YXJnZXRWYWwgIT0gZmlsdGVyVmFsKSB7XG4gICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgXCI+XCI6XG4gICAgICB7XG4gICAgICAgIGlmICh0YXJnZXRWYWwgPD0gZmlsdGVyVmFsKSB7XG4gICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgXCI+PVwiOlxuICAgICAge1xuICAgICAgICBpZiAodGFyZ2V0VmFsIDwgZmlsdGVyVmFsKSB7XG4gICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgXCI8XCI6XG4gICAgICB7XG4gICAgICAgIGlmICh0YXJnZXRWYWwgPj0gZmlsdGVyVmFsKSB7XG4gICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgXCI8PVwiOlxuICAgICAge1xuICAgICAgICBpZiAodGFyZ2V0VmFsID4gZmlsdGVyVmFsKSB7XG4gICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgXCIhPVwiOlxuICAgICAge1xuICAgICAgICBpZiAodGFyZ2V0VmFsID09IGZpbHRlclZhbCkge1xuICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiTnVtYmVyIGNvbXBhcmF0b3IgcHJvdmlkZWQgaXMgbm90IHN1cHBvcnRlZFwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWxpZDtcbiAgfVxuXG4gIGZpbHRlckRhdGUodGFyZ2V0VmFsLCBmaWx0ZXJWYWwpIHtcbiAgICByZXR1cm4gKHRhcmdldFZhbC5nZXREYXRlKCkgPT0gZmlsdGVyVmFsLmdldERhdGUoKSAmJlxuICAgICAgICB0YXJnZXRWYWwuZ2V0TW9udGgoKSA9PSBmaWx0ZXJWYWwuZ2V0TW9udGgoKSAmJlxuICAgICAgICB0YXJnZXRWYWwuZ2V0RnVsbFllYXIoKSA9PSBmaWx0ZXJWYWwuZ2V0RnVsbFllYXIoKSk7XG4gIH1cblxuICBmaWx0ZXJDdXN0b20odGFyZ2V0VmFsLCBmaWx0ZXJWYWwsIGNhbGxiYWNrSW5mbykge1xuICAgIGlmIChjYWxsYmFja0luZm8gIT0gbnVsbCAmJiB0eXBlb2YgY2FsbGJhY2tJbmZvID09PSBcIm9iamVjdFwiKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2tJbmZvLmNhbGxiYWNrKHRhcmdldFZhbCwgY2FsbGJhY2tJbmZvLmNhbGxiYWNrUGFyYW1ldGVycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbHRlclRleHQodGFyZ2V0VmFsLCBmaWx0ZXJWYWwpO1xuICB9XG5cbiAgZmlsdGVyVGV4dCh0YXJnZXRWYWwsIGZpbHRlclZhbCkge1xuICAgIGlmICh0YXJnZXRWYWwudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZmlsdGVyVmFsKSA9PSAtMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc2VhcmNoKHNlYXJjaFRleHQpIHtcbiAgICBpZiAoc2VhcmNoVGV4dC50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgIHRoaXMuZmlsdGVyZWREYXRhID0gbnVsbDtcbiAgICAgIHRoaXMuaXNPbkZpbHRlciA9IGZhbHNlO1xuICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gc2VhcmNoVGV4dDtcbiAgICAgIHZhciBzZWFyY2hUZXh0QXJyYXkgPSBbXTtcblxuICAgICAgaWYgKHRoaXMubXVsdGlDb2x1bW5TZWFyY2gpIHtcbiAgICAgICAgICBzZWFyY2hUZXh0QXJyYXkgPSBzZWFyY2hUZXh0LnNwbGl0KCcgJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlYXJjaFRleHRBcnJheS5wdXNoKHNlYXJjaFRleHQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmZpbHRlcmVkRGF0YSA9IHRoaXMuZGF0YS5maWx0ZXIoIHJvdyA9PiB7XG4gICAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhyb3cpO1xuICAgICAgICAgIGxldCB2YWxpZCA9IGZhbHNlO1xuICAgICAgICAgIC8vIENoYW5nZWQgYGZvciAuLiBpbmAgbG9vcCB0byB1c2UgYE9iamVjdC5rZXlzYFxuICAgICAgICAgIGZvcihsZXQgaT0wOyBpPGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29sSW5mb3Nba2V5XSAmJiByb3dba2V5XSkge1xuICAgICAgICAgICAgICBzZWFyY2hUZXh0QXJyYXkuZm9yRWFjaCggdGV4dCA9PiB7XG4gICAgICAgICAgICAgICAgICBsZXQgZmlsdGVyVmFsID0gdGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgbGV0IHRhcmdldFZhbCA9IHJvd1trZXldO1xuICAgICAgICAgICAgICAgICAgY29uc3QgeyBmb3JtYXQsIGZpbHRlckZvcm1hdHRlZCwgZm9ybWF0RXh0cmFEYXRhIH0gPSB0aGlzLmNvbEluZm9zW2tleV07XG5cbiAgICAgICAgICAgICAgICAgIGlmKGZpbHRlckZvcm1hdHRlZCAmJiBmb3JtYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRWYWwgPSBmb3JtYXQodGFyZ2V0VmFsLCByb3csIGZvcm1hdEV4dHJhRGF0YSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0VmFsLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlclZhbCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgaWYgKHZhbGlkKSBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbGlkO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmlzT25GaWx0ZXIgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGdldERhdGFJZ25vcmluZ1BhZ2luYXRpb24oKSB7XG4gICAgbGV0IF9kYXRhID0gdGhpcy5nZXRDdXJyZW50RGlzcGxheURhdGEoKTtcbiAgICByZXR1cm4gX2RhdGE7XG4gIH1cblxuICBnZXQoKSB7XG4gICAgbGV0IF9kYXRhID0gdGhpcy5nZXRDdXJyZW50RGlzcGxheURhdGEoKTtcblxuICAgIGlmIChfZGF0YS5sZW5ndGggPT0gMCkgcmV0dXJuIF9kYXRhO1xuXG4gICAgaWYgKHRoaXMucmVtb3RlIHx8ICF0aGlzLmVuYWJsZVBhZ2luYXRpb24pIHtcbiAgICAgIHJldHVybiBfZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMucGFnZU9iai5zdGFydDsgaSA8PSB0aGlzLnBhZ2VPYmouZW5kOyBpKyspIHtcbiAgICAgICAgcmVzdWx0LnB1c2goX2RhdGFbaV0pO1xuICAgICAgICBpZiAoaSArIDEgPT0gX2RhdGEubGVuZ3RoKWJyZWFrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH1cblxuICBnZXRLZXlGaWVsZCgpIHtcbiAgICByZXR1cm4gdGhpcy5rZXlGaWVsZDtcbiAgfVxuXG4gIGdldERhdGFOdW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudERpc3BsYXlEYXRhKCkubGVuZ3RoO1xuICB9XG5cbiAgaXNDaGFuZ2VkUGFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYWdlT2JqLnN0YXJ0ICYmIHRoaXMucGFnZU9iai5lbmQgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBnZXRBbGxSb3drZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5tYXAoZnVuY3Rpb24gKHJvdykge1xuICAgICAgcmV0dXJuIHJvd1t0aGlzLmtleUZpZWxkXTtcbiAgICB9LCB0aGlzKTtcbiAgfVxuXG59XG47XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdG9yZS9UYWJsZURhdGFTdG9yZS5qc1xuICoqLyIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIHRoaXMuX2V2ZW50cyA9IHRoaXMuX2V2ZW50cyB8fCB7fTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxuRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24obikge1xuICBpZiAoIWlzTnVtYmVyKG4pIHx8IG4gPCAwIHx8IGlzTmFOKG4pKVxuICAgIHRocm93IFR5cGVFcnJvcignbiBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyJyk7XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgZXIsIGhhbmRsZXIsIGxlbiwgYXJncywgaSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKHR5cGUgPT09ICdlcnJvcicpIHtcbiAgICBpZiAoIXRoaXMuX2V2ZW50cy5lcnJvciB8fFxuICAgICAgICAoaXNPYmplY3QodGhpcy5fZXZlbnRzLmVycm9yKSAmJiAhdGhpcy5fZXZlbnRzLmVycm9yLmxlbmd0aCkpIHtcbiAgICAgIGVyID0gYXJndW1lbnRzWzFdO1xuICAgICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgICB9XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ1VuY2F1Z2h0LCB1bnNwZWNpZmllZCBcImVycm9yXCIgZXZlbnQuJyk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNVbmRlZmluZWQoaGFuZGxlcikpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAvLyBmYXN0IGNhc2VzXG4gICAgICBjYXNlIDE6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBzbG93ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc09iamVjdChoYW5kbGVyKSkge1xuICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIGxpc3RlbmVycyA9IGhhbmRsZXIuc2xpY2UoKTtcbiAgICBsZW4gPSBsaXN0ZW5lcnMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKylcbiAgICAgIGxpc3RlbmVyc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBtO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gIGlmICh0aGlzLl9ldmVudHMubmV3TGlzdGVuZXIpXG4gICAgdGhpcy5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgIGlzRnVuY3Rpb24obGlzdGVuZXIubGlzdGVuZXIpID9cbiAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gIGVsc2UgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5wdXNoKGxpc3RlbmVyKTtcbiAgZWxzZVxuICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IFt0aGlzLl9ldmVudHNbdHlwZV0sIGxpc3RlbmVyXTtcblxuICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSAmJiAhdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCkge1xuICAgIGlmICghaXNVbmRlZmluZWQodGhpcy5fbWF4TGlzdGVuZXJzKSkge1xuICAgICAgbSA9IHRoaXMuX21heExpc3RlbmVycztcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICAgIH1cblxuICAgIGlmIChtICYmIG0gPiAwICYmIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGggPiBtKSB7XG4gICAgICB0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJyhub2RlKSB3YXJuaW5nOiBwb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5ICcgK1xuICAgICAgICAgICAgICAgICAgICAnbGVhayBkZXRlY3RlZC4gJWQgbGlzdGVuZXJzIGFkZGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgJ1VzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvIGluY3JlYXNlIGxpbWl0LicsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGgpO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLnRyYWNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIG5vdCBzdXBwb3J0ZWQgaW4gSUUgMTBcbiAgICAgICAgY29uc29sZS50cmFjZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICB2YXIgZmlyZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBnKCkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgZyk7XG5cbiAgICBpZiAoIWZpcmVkKSB7XG4gICAgICBmaXJlZCA9IHRydWU7XG4gICAgICBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGcubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgdGhpcy5vbih0eXBlLCBnKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8vIGVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZmYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIGxpc3QsIHBvc2l0aW9uLCBsZW5ndGgsIGk7XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgbGlzdCA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgbGVuZ3RoID0gbGlzdC5sZW5ndGg7XG4gIHBvc2l0aW9uID0gLTE7XG5cbiAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8XG4gICAgICAoaXNGdW5jdGlvbihsaXN0Lmxpc3RlbmVyKSAmJiBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikpIHtcbiAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QobGlzdCkpIHtcbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSA+IDA7KSB7XG4gICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHxcbiAgICAgICAgICAobGlzdFtpXS5saXN0ZW5lciAmJiBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikpIHtcbiAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGxpc3QubGVuZ3RoID0gMDtcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3Quc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBrZXksIGxpc3RlbmVycztcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICByZXR1cm4gdGhpcztcblxuICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gIGlmICghdGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICBlbHNlIGlmICh0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgZm9yIChrZXkgaW4gdGhpcy5fZXZlbnRzKSB7XG4gICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGxpc3RlbmVycykpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gIH0gZWxzZSBpZiAobGlzdGVuZXJzKSB7XG4gICAgLy8gTElGTyBvcmRlclxuICAgIHdoaWxlIChsaXN0ZW5lcnMubGVuZ3RoKVxuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbbGlzdGVuZXJzLmxlbmd0aCAtIDFdKTtcbiAgfVxuICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciByZXQ7XG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0ID0gW107XG4gIGVsc2UgaWYgKGlzRnVuY3Rpb24odGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICByZXQgPSBbdGhpcy5fZXZlbnRzW3R5cGVdXTtcbiAgZWxzZVxuICAgIHJldCA9IHRoaXMuX2V2ZW50c1t0eXBlXS5zbGljZSgpO1xuICByZXR1cm4gcmV0O1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24odHlwZSkge1xuICBpZiAodGhpcy5fZXZlbnRzKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgICBpZiAoaXNGdW5jdGlvbihldmxpc3RlbmVyKSlcbiAgICAgIHJldHVybiAxO1xuICAgIGVsc2UgaWYgKGV2bGlzdGVuZXIpXG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gIH1cbiAgcmV0dXJuIDA7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbn07XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogKHdlYnBhY2spL34vbm9kZS1saWJzLWJyb3dzZXIvfi9ldmVudHMvZXZlbnRzLmpzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKXtcbiAgdmFyIGZpbGVzYXZlciA9IHJlcXVpcmUoJy4vZmlsZXNhdmVyJyk7XG4gIHZhciBzYXZlQXMgPSBmaWxlc2F2ZXIuc2F2ZUFzXG59XG5cbmZ1bmN0aW9uIHRvU3RyaW5nKGRhdGEsIGtleXMpIHtcbiAgdmFyIGRhdGFTdHJpbmcgPSBcIlwiO1xuICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHJldHVybiBkYXRhU3RyaW5nO1xuXG4gIGRhdGFTdHJpbmcgKz0ga2V5cy5qb2luKCcsJykgKyAnXFxuJ1xuXG4gIGRhdGEubWFwKGZ1bmN0aW9uKHJvdykge1xuICAgIGtleXMubWFwKGZ1bmN0aW9uKGNvbCwgaSkge1xuICAgICAgbGV0IGNlbGwgPSB0eXBlb2Ygcm93W2NvbF0gIT09ICd1bmRlZmluZWQnID8gKCdcIicrcm93W2NvbF0rJ1wiJykgOiBcIlwiO1xuICAgICAgZGF0YVN0cmluZyArPSBjZWxsO1xuICAgICAgaWYgKGkrMSA8IGtleXMubGVuZ3RoKVxuICAgICAgICBkYXRhU3RyaW5nICs9ICcsJztcbiAgICB9KTtcblxuICAgIGRhdGFTdHJpbmcgKz0gJ1xcbic7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhU3RyaW5nO1xufTtcblxudmFyIGV4cG9ydENTViA9IGZ1bmN0aW9uKGRhdGEsIGtleXMsIGZpbGVuYW1lKSB7XG4gIHZhciBkYXRhU3RyaW5nID0gdG9TdHJpbmcoZGF0YSwga2V5cyk7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHNhdmVBcyggbmV3IEJsb2IoW2RhdGFTdHJpbmddLCB7dHlwZTogXCJ0ZXh0L3BsYWluO2NoYXJzZXQ9dXRmLThcIn0pLCBmaWxlbmFtZSB8fCAnc3ByZWFkc2hlZXQuY3N2JyApO1xuICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV4cG9ydENTVjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2Nzdl9leHBvcnRfdXRpbC5qc1xuICoqLyIsIi8qIEZpbGVTYXZlci5qc1xuICogQSBzYXZlQXMoKSBGaWxlU2F2ZXIgaW1wbGVtZW50YXRpb24uXG4gKiAxLjEuMjAxNTEwMDNcbiAqXG4gKiBCeSBFbGkgR3JleSwgaHR0cDovL2VsaWdyZXkuY29tXG4gKiBMaWNlbnNlOiBNSVRcbiAqICAgU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lbGlncmV5L0ZpbGVTYXZlci5qcy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kXG4gKi9cblxuLypnbG9iYWwgc2VsZiAqL1xuLypqc2xpbnQgYml0d2lzZTogdHJ1ZSwgaW5kZW50OiA0LCBsYXhicmVhazogdHJ1ZSwgbGF4Y29tbWE6IHRydWUsIHNtYXJ0dGFiczogdHJ1ZSwgcGx1c3BsdXM6IHRydWUgKi9cblxuLyohIEBzb3VyY2UgaHR0cDovL3B1cmwuZWxpZ3JleS5jb20vZ2l0aHViL0ZpbGVTYXZlci5qcy9ibG9iL21hc3Rlci9GaWxlU2F2ZXIuanMgKi9cblxudmFyIHNhdmVBcyA9IHNhdmVBcyB8fCAoZnVuY3Rpb24odmlldykge1xuXHRcInVzZSBzdHJpY3RcIjtcblx0Ly8gSUUgPDEwIGlzIGV4cGxpY2l0bHkgdW5zdXBwb3J0ZWRcblx0aWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09IFwidW5kZWZpbmVkXCIgJiYgL01TSUUgWzEtOV1cXC4vLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyXG5cdFx0ICBkb2MgPSB2aWV3LmRvY3VtZW50XG5cdFx0ICAvLyBvbmx5IGdldCBVUkwgd2hlbiBuZWNlc3NhcnkgaW4gY2FzZSBCbG9iLmpzIGhhc24ndCBvdmVycmlkZGVuIGl0IHlldFxuXHRcdCwgZ2V0X1VSTCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIHZpZXcuVVJMIHx8IHZpZXcud2Via2l0VVJMIHx8IHZpZXc7XG5cdFx0fVxuXHRcdCwgc2F2ZV9saW5rID0gZG9jLmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIiwgXCJhXCIpXG5cdFx0LCBjYW5fdXNlX3NhdmVfbGluayA9IFwiZG93bmxvYWRcIiBpbiBzYXZlX2xpbmtcblx0XHQsIGNsaWNrID0gZnVuY3Rpb24obm9kZSkge1xuXHRcdFx0dmFyIGV2ZW50ID0gbmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiKTtcblx0XHRcdG5vZGUuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cdFx0fVxuXHRcdCwgaXNfc2FmYXJpID0gL1ZlcnNpb25cXC9bXFxkXFwuXSsuKlNhZmFyaS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KVxuXHRcdCwgd2Via2l0X3JlcV9mcyA9IHZpZXcud2Via2l0UmVxdWVzdEZpbGVTeXN0ZW1cblx0XHQsIHJlcV9mcyA9IHZpZXcucmVxdWVzdEZpbGVTeXN0ZW0gfHwgd2Via2l0X3JlcV9mcyB8fCB2aWV3Lm1velJlcXVlc3RGaWxlU3lzdGVtXG5cdFx0LCB0aHJvd19vdXRzaWRlID0gZnVuY3Rpb24oZXgpIHtcblx0XHRcdCh2aWV3LnNldEltbWVkaWF0ZSB8fCB2aWV3LnNldFRpbWVvdXQpKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR0aHJvdyBleDtcblx0XHRcdH0sIDApO1xuXHRcdH1cblx0XHQsIGZvcmNlX3NhdmVhYmxlX3R5cGUgPSBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiXG5cdFx0LCBmc19taW5fc2l6ZSA9IDBcblx0XHQvLyBTZWUgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTM3NTI5NyNjNyBhbmRcblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vZWxpZ3JleS9GaWxlU2F2ZXIuanMvY29tbWl0LzQ4NTkzMGEjY29tbWl0Y29tbWVudC04NzY4MDQ3XG5cdFx0Ly8gZm9yIHRoZSByZWFzb25pbmcgYmVoaW5kIHRoZSB0aW1lb3V0IGFuZCByZXZvY2F0aW9uIGZsb3dcblx0XHQsIGFyYml0cmFyeV9yZXZva2VfdGltZW91dCA9IDUwMCAvLyBpbiBtc1xuXHRcdCwgcmV2b2tlID0gZnVuY3Rpb24oZmlsZSkge1xuXHRcdFx0dmFyIHJldm9rZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKHR5cGVvZiBmaWxlID09PSBcInN0cmluZ1wiKSB7IC8vIGZpbGUgaXMgYW4gb2JqZWN0IFVSTFxuXHRcdFx0XHRcdGdldF9VUkwoKS5yZXZva2VPYmplY3RVUkwoZmlsZSk7XG5cdFx0XHRcdH0gZWxzZSB7IC8vIGZpbGUgaXMgYSBGaWxlXG5cdFx0XHRcdFx0ZmlsZS5yZW1vdmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdGlmICh2aWV3LmNocm9tZSkge1xuXHRcdFx0XHRyZXZva2VyKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZXRUaW1lb3V0KHJldm9rZXIsIGFyYml0cmFyeV9yZXZva2VfdGltZW91dCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdCwgZGlzcGF0Y2ggPSBmdW5jdGlvbihmaWxlc2F2ZXIsIGV2ZW50X3R5cGVzLCBldmVudCkge1xuXHRcdFx0ZXZlbnRfdHlwZXMgPSBbXS5jb25jYXQoZXZlbnRfdHlwZXMpO1xuXHRcdFx0dmFyIGkgPSBldmVudF90eXBlcy5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoaS0tKSB7XG5cdFx0XHRcdHZhciBsaXN0ZW5lciA9IGZpbGVzYXZlcltcIm9uXCIgKyBldmVudF90eXBlc1tpXV07XG5cdFx0XHRcdGlmICh0eXBlb2YgbGlzdGVuZXIgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRsaXN0ZW5lci5jYWxsKGZpbGVzYXZlciwgZXZlbnQgfHwgZmlsZXNhdmVyKTtcblx0XHRcdFx0XHR9IGNhdGNoIChleCkge1xuXHRcdFx0XHRcdFx0dGhyb3dfb3V0c2lkZShleCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdCwgYXV0b19ib20gPSBmdW5jdGlvbihibG9iKSB7XG5cdFx0XHQvLyBwcmVwZW5kIEJPTSBmb3IgVVRGLTggWE1MIGFuZCB0ZXh0LyogdHlwZXMgKGluY2x1ZGluZyBIVE1MKVxuXHRcdFx0aWYgKC9eXFxzKig/OnRleHRcXC9cXFMqfGFwcGxpY2F0aW9uXFwveG1sfFxcUypcXC9cXFMqXFwreG1sKVxccyo7LipjaGFyc2V0XFxzKj1cXHMqdXRmLTgvaS50ZXN0KGJsb2IudHlwZSkpIHtcblx0XHRcdFx0cmV0dXJuIG5ldyBCbG9iKFtcIlxcdWZlZmZcIiwgYmxvYl0sIHt0eXBlOiBibG9iLnR5cGV9KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBibG9iO1xuXHRcdH1cblx0XHQsIEZpbGVTYXZlciA9IGZ1bmN0aW9uKGJsb2IsIG5hbWUsIG5vX2F1dG9fYm9tKSB7XG5cdFx0XHRpZiAoIW5vX2F1dG9fYm9tKSB7XG5cdFx0XHRcdGJsb2IgPSBhdXRvX2JvbShibG9iKTtcblx0XHRcdH1cblx0XHRcdC8vIEZpcnN0IHRyeSBhLmRvd25sb2FkLCB0aGVuIHdlYiBmaWxlc3lzdGVtLCB0aGVuIG9iamVjdCBVUkxzXG5cdFx0XHR2YXJcblx0XHRcdFx0ICBmaWxlc2F2ZXIgPSB0aGlzXG5cdFx0XHRcdCwgdHlwZSA9IGJsb2IudHlwZVxuXHRcdFx0XHQsIGJsb2JfY2hhbmdlZCA9IGZhbHNlXG5cdFx0XHRcdCwgb2JqZWN0X3VybFxuXHRcdFx0XHQsIHRhcmdldF92aWV3XG5cdFx0XHRcdCwgZGlzcGF0Y2hfYWxsID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0ZGlzcGF0Y2goZmlsZXNhdmVyLCBcIndyaXRlc3RhcnQgcHJvZ3Jlc3Mgd3JpdGUgd3JpdGVlbmRcIi5zcGxpdChcIiBcIikpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIG9uIGFueSBmaWxlc3lzIGVycm9ycyByZXZlcnQgdG8gc2F2aW5nIHdpdGggb2JqZWN0IFVSTHNcblx0XHRcdFx0LCBmc19lcnJvciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmICh0YXJnZXRfdmlldyAmJiBpc19zYWZhcmkgJiYgdHlwZW9mIEZpbGVSZWFkZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0XHRcdC8vIFNhZmFyaSBkb2Vzbid0IGFsbG93IGRvd25sb2FkaW5nIG9mIGJsb2IgdXJsc1xuXHRcdFx0XHRcdFx0dmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cdFx0XHRcdFx0XHRyZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBiYXNlNjREYXRhID0gcmVhZGVyLnJlc3VsdDtcblx0XHRcdFx0XHRcdFx0dGFyZ2V0X3ZpZXcubG9jYXRpb24uaHJlZiA9IFwiZGF0YTphdHRhY2htZW50L2ZpbGVcIiArIGJhc2U2NERhdGEuc2xpY2UoYmFzZTY0RGF0YS5zZWFyY2goL1ssO10vKSk7XG5cdFx0XHRcdFx0XHRcdGZpbGVzYXZlci5yZWFkeVN0YXRlID0gZmlsZXNhdmVyLkRPTkU7XG5cdFx0XHRcdFx0XHRcdGRpc3BhdGNoX2FsbCgpO1xuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuXHRcdFx0XHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuSU5JVDtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gZG9uJ3QgY3JlYXRlIG1vcmUgb2JqZWN0IFVSTHMgdGhhbiBuZWVkZWRcblx0XHRcdFx0XHRpZiAoYmxvYl9jaGFuZ2VkIHx8ICFvYmplY3RfdXJsKSB7XG5cdFx0XHRcdFx0XHRvYmplY3RfdXJsID0gZ2V0X1VSTCgpLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHRhcmdldF92aWV3KSB7XG5cdFx0XHRcdFx0XHR0YXJnZXRfdmlldy5sb2NhdGlvbi5ocmVmID0gb2JqZWN0X3VybDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dmFyIG5ld190YWIgPSB2aWV3Lm9wZW4ob2JqZWN0X3VybCwgXCJfYmxhbmtcIik7XG5cdFx0XHRcdFx0XHRpZiAobmV3X3RhYiA9PSB1bmRlZmluZWQgJiYgaXNfc2FmYXJpKSB7XG5cdFx0XHRcdFx0XHRcdC8vQXBwbGUgZG8gbm90IGFsbG93IHdpbmRvdy5vcGVuLCBzZWUgaHR0cDovL2JpdC5seS8xa1pmZlJJXG5cdFx0XHRcdFx0XHRcdHZpZXcubG9jYXRpb24uaHJlZiA9IG9iamVjdF91cmxcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuRE9ORTtcblx0XHRcdFx0XHRkaXNwYXRjaF9hbGwoKTtcblx0XHRcdFx0XHRyZXZva2Uob2JqZWN0X3VybCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0LCBhYm9ydGFibGUgPSBmdW5jdGlvbihmdW5jKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0aWYgKGZpbGVzYXZlci5yZWFkeVN0YXRlICE9PSBmaWxlc2F2ZXIuRE9ORSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0LCBjcmVhdGVfaWZfbm90X2ZvdW5kID0ge2NyZWF0ZTogdHJ1ZSwgZXhjbHVzaXZlOiBmYWxzZX1cblx0XHRcdFx0LCBzbGljZVxuXHRcdFx0O1xuXHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuSU5JVDtcblx0XHRcdGlmICghbmFtZSkge1xuXHRcdFx0XHRuYW1lID0gXCJkb3dubG9hZFwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGNhbl91c2Vfc2F2ZV9saW5rKSB7XG5cdFx0XHRcdG9iamVjdF91cmwgPSBnZXRfVVJMKCkuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXHRcdFx0XHRzYXZlX2xpbmsuaHJlZiA9IG9iamVjdF91cmw7XG5cdFx0XHRcdHNhdmVfbGluay5kb3dubG9hZCA9IG5hbWU7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0Y2xpY2soc2F2ZV9saW5rKTtcblx0XHRcdFx0XHRkaXNwYXRjaF9hbGwoKTtcblx0XHRcdFx0XHRyZXZva2Uob2JqZWN0X3VybCk7XG5cdFx0XHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuRE9ORTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdC8vIE9iamVjdCBhbmQgd2ViIGZpbGVzeXN0ZW0gVVJMcyBoYXZlIGEgcHJvYmxlbSBzYXZpbmcgaW4gR29vZ2xlIENocm9tZSB3aGVuXG5cdFx0XHQvLyB2aWV3ZWQgaW4gYSB0YWIsIHNvIEkgZm9yY2Ugc2F2ZSB3aXRoIGFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVxuXHRcdFx0Ly8gaHR0cDovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTExNThcblx0XHRcdC8vIFVwZGF0ZTogR29vZ2xlIGVycmFudGx5IGNsb3NlZCA5MTE1OCwgSSBzdWJtaXR0ZWQgaXQgYWdhaW46XG5cdFx0XHQvLyBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9Mzg5NjQyXG5cdFx0XHRpZiAodmlldy5jaHJvbWUgJiYgdHlwZSAmJiB0eXBlICE9PSBmb3JjZV9zYXZlYWJsZV90eXBlKSB7XG5cdFx0XHRcdHNsaWNlID0gYmxvYi5zbGljZSB8fCBibG9iLndlYmtpdFNsaWNlO1xuXHRcdFx0XHRibG9iID0gc2xpY2UuY2FsbChibG9iLCAwLCBibG9iLnNpemUsIGZvcmNlX3NhdmVhYmxlX3R5cGUpO1xuXHRcdFx0XHRibG9iX2NoYW5nZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gU2luY2UgSSBjYW4ndCBiZSBzdXJlIHRoYXQgdGhlIGd1ZXNzZWQgbWVkaWEgdHlwZSB3aWxsIHRyaWdnZXIgYSBkb3dubG9hZFxuXHRcdFx0Ly8gaW4gV2ViS2l0LCBJIGFwcGVuZCAuZG93bmxvYWQgdG8gdGhlIGZpbGVuYW1lLlxuXHRcdFx0Ly8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTY1NDQwXG5cdFx0XHRpZiAod2Via2l0X3JlcV9mcyAmJiBuYW1lICE9PSBcImRvd25sb2FkXCIpIHtcblx0XHRcdFx0bmFtZSArPSBcIi5kb3dubG9hZFwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGUgPT09IGZvcmNlX3NhdmVhYmxlX3R5cGUgfHwgd2Via2l0X3JlcV9mcykge1xuXHRcdFx0XHR0YXJnZXRfdmlldyA9IHZpZXc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXJlcV9mcykge1xuXHRcdFx0XHRmc19lcnJvcigpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRmc19taW5fc2l6ZSArPSBibG9iLnNpemU7XG5cdFx0XHRyZXFfZnModmlldy5URU1QT1JBUlksIGZzX21pbl9zaXplLCBhYm9ydGFibGUoZnVuY3Rpb24oZnMpIHtcblx0XHRcdFx0ZnMucm9vdC5nZXREaXJlY3RvcnkoXCJzYXZlZFwiLCBjcmVhdGVfaWZfbm90X2ZvdW5kLCBhYm9ydGFibGUoZnVuY3Rpb24oZGlyKSB7XG5cdFx0XHRcdFx0dmFyIHNhdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGRpci5nZXRGaWxlKG5hbWUsIGNyZWF0ZV9pZl9ub3RfZm91bmQsIGFib3J0YWJsZShmdW5jdGlvbihmaWxlKSB7XG5cdFx0XHRcdFx0XHRcdGZpbGUuY3JlYXRlV3JpdGVyKGFib3J0YWJsZShmdW5jdGlvbih3cml0ZXIpIHtcblx0XHRcdFx0XHRcdFx0XHR3cml0ZXIub253cml0ZWVuZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0YXJnZXRfdmlldy5sb2NhdGlvbi5ocmVmID0gZmlsZS50b1VSTCgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuRE9ORTtcblx0XHRcdFx0XHRcdFx0XHRcdGRpc3BhdGNoKGZpbGVzYXZlciwgXCJ3cml0ZWVuZFwiLCBldmVudCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXZva2UoZmlsZSk7XG5cdFx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0XHR3cml0ZXIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yID0gd3JpdGVyLmVycm9yO1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGVycm9yLmNvZGUgIT09IGVycm9yLkFCT1JUX0VSUikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRmc19lcnJvcigpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdFx0XCJ3cml0ZXN0YXJ0IHByb2dyZXNzIHdyaXRlIGFib3J0XCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHdyaXRlcltcIm9uXCIgKyBldmVudF0gPSBmaWxlc2F2ZXJbXCJvblwiICsgZXZlbnRdO1xuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdHdyaXRlci53cml0ZShibG9iKTtcblx0XHRcdFx0XHRcdFx0XHRmaWxlc2F2ZXIuYWJvcnQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHdyaXRlci5hYm9ydCgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuRE9ORTtcblx0XHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRcdGZpbGVzYXZlci5yZWFkeVN0YXRlID0gZmlsZXNhdmVyLldSSVRJTkc7XG5cdFx0XHRcdFx0XHRcdH0pLCBmc19lcnJvcik7XG5cdFx0XHRcdFx0XHR9KSwgZnNfZXJyb3IpO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0ZGlyLmdldEZpbGUobmFtZSwge2NyZWF0ZTogZmFsc2V9LCBhYm9ydGFibGUoZnVuY3Rpb24oZmlsZSkge1xuXHRcdFx0XHRcdFx0Ly8gZGVsZXRlIGZpbGUgaWYgaXQgYWxyZWFkeSBleGlzdHNcblx0XHRcdFx0XHRcdGZpbGUucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHRzYXZlKCk7XG5cdFx0XHRcdFx0fSksIGFib3J0YWJsZShmdW5jdGlvbihleCkge1xuXHRcdFx0XHRcdFx0aWYgKGV4LmNvZGUgPT09IGV4Lk5PVF9GT1VORF9FUlIpIHtcblx0XHRcdFx0XHRcdFx0c2F2ZSgpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0ZnNfZXJyb3IoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KSk7XG5cdFx0XHRcdH0pLCBmc19lcnJvcik7XG5cdFx0XHR9KSwgZnNfZXJyb3IpO1xuXHRcdH1cblx0XHQsIEZTX3Byb3RvID0gRmlsZVNhdmVyLnByb3RvdHlwZVxuXHRcdCwgc2F2ZUFzID0gZnVuY3Rpb24oYmxvYiwgbmFtZSwgbm9fYXV0b19ib20pIHtcblx0XHRcdHJldHVybiBuZXcgRmlsZVNhdmVyKGJsb2IsIG5hbWUsIG5vX2F1dG9fYm9tKTtcblx0XHR9XG5cdDtcblx0Ly8gSUUgMTArIChuYXRpdmUgc2F2ZUFzKVxuXHRpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gXCJ1bmRlZmluZWRcIiAmJiBuYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYikge1xuXHRcdHJldHVybiBmdW5jdGlvbihibG9iLCBuYW1lLCBub19hdXRvX2JvbSkge1xuXHRcdFx0aWYgKCFub19hdXRvX2JvbSkge1xuXHRcdFx0XHRibG9iID0gYXV0b19ib20oYmxvYik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IoYmxvYiwgbmFtZSB8fCBcImRvd25sb2FkXCIpO1xuXHRcdH07XG5cdH1cblxuXHRGU19wcm90by5hYm9ydCA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBmaWxlc2F2ZXIgPSB0aGlzO1xuXHRcdGZpbGVzYXZlci5yZWFkeVN0YXRlID0gZmlsZXNhdmVyLkRPTkU7XG5cdFx0ZGlzcGF0Y2goZmlsZXNhdmVyLCBcImFib3J0XCIpO1xuXHR9O1xuXHRGU19wcm90by5yZWFkeVN0YXRlID0gRlNfcHJvdG8uSU5JVCA9IDA7XG5cdEZTX3Byb3RvLldSSVRJTkcgPSAxO1xuXHRGU19wcm90by5ET05FID0gMjtcblxuXHRGU19wcm90by5lcnJvciA9XG5cdEZTX3Byb3RvLm9ud3JpdGVzdGFydCA9XG5cdEZTX3Byb3RvLm9ucHJvZ3Jlc3MgPVxuXHRGU19wcm90by5vbndyaXRlID1cblx0RlNfcHJvdG8ub25hYm9ydCA9XG5cdEZTX3Byb3RvLm9uZXJyb3IgPVxuXHRGU19wcm90by5vbndyaXRlZW5kID1cblx0XHRudWxsO1xuXG5cdHJldHVybiBzYXZlQXM7XG59KFxuXHQgICB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmXG5cdHx8IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93XG5cdHx8IHRoaXMuY29udGVudFxuKSk7XG4vLyBgc2VsZmAgaXMgdW5kZWZpbmVkIGluIEZpcmVmb3ggZm9yIEFuZHJvaWQgY29udGVudCBzY3JpcHQgY29udGV4dFxuLy8gd2hpbGUgYHRoaXNgIGlzIG5zSUNvbnRlbnRGcmFtZU1lc3NhZ2VNYW5hZ2VyXG4vLyB3aXRoIGFuIGF0dHJpYnV0ZSBgY29udGVudGAgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgd2luZG93XG5cbmlmICh0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzLnNhdmVBcyA9IHNhdmVBcztcbn0gZWxzZSBpZiAoKHR5cGVvZiBkZWZpbmUgIT09IFwidW5kZWZpbmVkXCIgJiYgZGVmaW5lICE9PSBudWxsKSAmJiAoZGVmaW5lLmFtZCAhPSBudWxsKSkge1xuICBkZWZpbmUoW10sIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBzYXZlQXM7XG4gIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZmlsZXNhdmVyLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHsgdGhyb3cgbmV3IEVycm9yKFwiZGVmaW5lIGNhbm5vdCBiZSB1c2VkIGluZGlyZWN0XCIpOyB9O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqICh3ZWJwYWNrKS9idWlsZGluL2FtZC1kZWZpbmUuanNcbiAqKiBtb2R1bGUgaWQgPSAzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfYW1kX29wdGlvbnNfXztcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAod2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgQ29uc3QgZnJvbSAnLi9Db25zdCc7XG52YXIgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyO1xuXG5leHBvcnQgY2xhc3MgRmlsdGVyIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICB0aGlzLmN1cnJlbnRGaWx0ZXIgPSB7fTtcbiAgICB9XG5cbiAgICBoYW5kbGVGaWx0ZXIoZGF0YUZpZWxkLCB2YWx1ZSwgdHlwZSkge1xuICAgICAgICBjb25zdCBmaWx0ZXJUeXBlID0gdHlwZSB8fCBDb25zdC5GSUxURVJfVFlQRS5DVVNUT007XG5cbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgLy8gdmFsdWUgb2YgdGhlIGZpbHRlciBpcyBhbiBvYmplY3RcbiAgICAgICAgICAgIGxldCBoYXNWYWx1ZSA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZVtwcm9wXSB8fCB2YWx1ZVtwcm9wXSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICBoYXNWYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiBvbmUgb2YgdGhlIG9iamVjdCBwcm9wZXJ0aWVzIGlzIHVuZGVmaW5lZCBvciBlbXB0eSwgd2UgcmVtb3ZlIHRoZSBmaWx0ZXJcbiAgICAgICAgICAgIChoYXNWYWx1ZSkgPyB0aGlzLmN1cnJlbnRGaWx0ZXJbZGF0YUZpZWxkXSA9IHt2YWx1ZTogdmFsdWUsIHR5cGU6IGZpbHRlclR5cGV9IDogZGVsZXRlIHRoaXMuY3VycmVudEZpbHRlcltkYXRhRmllbGRdO1xuICAgICAgICB9IGVsc2UgaWYgKCF2YWx1ZSB8fCB2YWx1ZS50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRGaWx0ZXJbZGF0YUZpZWxkXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEZpbHRlcltkYXRhRmllbGRdID0ge3ZhbHVlOiB2YWx1ZS50cmltKCksIHR5cGU6IGZpbHRlclR5cGV9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW1pdCgnb25GaWx0ZXJDaGFuZ2UnLCB0aGlzLmN1cnJlbnRGaWx0ZXIpO1xuICAgIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL0ZpbHRlci5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NTZXQgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi9Db25zdCc7XG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IERhdGVGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL0RhdGUnO1xuaW1wb3J0IFRleHRGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1RleHQnO1xuaW1wb3J0IFNlbGVjdEZpbHRlciBmcm9tICcuL2ZpbHRlcnMvU2VsZWN0JztcbmltcG9ydCBOdW1iZXJGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL051bWJlcic7XG5cbmNsYXNzIFRhYmxlSGVhZGVyQ29sdW1uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaGFuZGxlRmlsdGVyID0gdGhpcy5oYW5kbGVGaWx0ZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNvbHVtbkNsaWNrKGUpe1xuICAgIGlmKCF0aGlzLnByb3BzLmRhdGFTb3J0KXJldHVybjtcbiAgICBsZXQgb3JkZXIgPSB0aGlzLnByb3BzLnNvcnQgPT0gQ29uc3QuU09SVF9ERVNDP0NvbnN0LlNPUlRfQVNDOkNvbnN0LlNPUlRfREVTQztcbiAgICB0aGlzLnByb3BzLm9uU29ydChvcmRlciwgdGhpcy5wcm9wcy5kYXRhRmllbGQpO1xuICB9XG5cbiAgaGFuZGxlRmlsdGVyKHZhbHVlLCB0eXBlKSB7XG4gICAgdGhpcy5wcm9wcy5maWx0ZXIuZW1pdHRlci5oYW5kbGVGaWx0ZXIodGhpcy5wcm9wcy5kYXRhRmllbGQsIHZhbHVlLCB0eXBlKTtcbiAgfVxuXG4gIGdldEZpbHRlcnMoKSB7XG4gICAgc3dpdGNoICh0aGlzLnByb3BzLmZpbHRlci50eXBlKSB7XG4gICAgICBjYXNlIENvbnN0LkZJTFRFUl9UWVBFLlRFWFQ6IHtcbiAgICAgICAgcmV0dXJuIDxUZXh0RmlsdGVyIHsuLi50aGlzLnByb3BzLmZpbHRlcn0gY29sdW1uTmFtZT17dGhpcy5wcm9wcy5jaGlsZHJlbn0gZmlsdGVySGFuZGxlcj17dGhpcy5oYW5kbGVGaWx0ZXJ9IC8+O1xuICAgICAgfVxuICAgICAgY2FzZSBDb25zdC5GSUxURVJfVFlQRS5TRUxFQ1Q6IHtcbiAgICAgICAgcmV0dXJuIDxTZWxlY3RGaWx0ZXIgey4uLnRoaXMucHJvcHMuZmlsdGVyfSBjb2x1bW5OYW1lPXt0aGlzLnByb3BzLmNoaWxkcmVufSBmaWx0ZXJIYW5kbGVyPXt0aGlzLmhhbmRsZUZpbHRlcn0gLz47XG4gICAgICB9XG4gICAgICBjYXNlIENvbnN0LkZJTFRFUl9UWVBFLk5VTUJFUjoge1xuICAgICAgICByZXR1cm4gPE51bWJlckZpbHRlciB7Li4udGhpcy5wcm9wcy5maWx0ZXJ9IGNvbHVtbk5hbWU9e3RoaXMucHJvcHMuY2hpbGRyZW59IGZpbHRlckhhbmRsZXI9e3RoaXMuaGFuZGxlRmlsdGVyfSAvPjtcbiAgICAgIH1cbiAgICAgIGNhc2UgQ29uc3QuRklMVEVSX1RZUEUuREFURToge1xuICAgICAgICByZXR1cm4gPERhdGVGaWx0ZXIgey4uLnRoaXMucHJvcHMuZmlsdGVyfSBjb2x1bW5OYW1lPXt0aGlzLnByb3BzLmNoaWxkcmVufSBmaWx0ZXJIYW5kbGVyPXt0aGlzLmhhbmRsZUZpbHRlcn0gLz47XG4gICAgICB9XG4gICAgICBjYXNlIENvbnN0LkZJTFRFUl9UWVBFLkNVU1RPTToge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5maWx0ZXIuZ2V0RWxlbWVudCh0aGlzLmhhbmRsZUZpbHRlciwgdGhpcy5wcm9wcy5maWx0ZXIuY3VzdG9tRmlsdGVyUGFyYW1ldGVycyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICB0aGlzLnJlZnMuaW5uZXJEaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1maWVsZFwiLCB0aGlzLnByb3BzLmRhdGFGaWVsZCk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICB2YXIgd2lkdGggPSB0aGlzLnByb3BzLndpZHRoIT09bnVsbD9wYXJzZUludCh0aGlzLnByb3BzLndpZHRoKTpudWxsO1xuICAgIHZhciB0aFN0eWxlID0ge1xuICAgICAgdGV4dEFsaWduOiB0aGlzLnByb3BzLmRhdGFBbGlnbixcbiAgICAgIGRpc3BsYXk6IHRoaXMucHJvcHMuaGlkZGVuP1wibm9uZVwiOm51bGwsXG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBtYXhXaWR0aDogd2lkdGhcbiAgICB9O1xuXG4gICAgY29uc3QgZGVmYXVsdENhcmV0ID0gKCF0aGlzLnByb3BzLmRhdGFTb3J0KSA/IG51bGwgOiAoXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJvcmRlclwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmV0XCIgc3R5bGU9e3ttYXJnaW46ICcxMHB4IDAgMTBweCA1cHgnLCBjb2xvcjogJyNjY2MnfX0+PC9zcGFuPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRyb3B1cFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmV0XCIgc3R5bGU9e3ttYXJnaW46ICcxMHB4IDAnLCBjb2xvcjogJyNjY2MnfX0+PC9zcGFuPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L3NwYW4+XG4gICAgKTtcbiAgICBjb25zdCBzb3J0Q2FyZXQgPSB0aGlzLnByb3BzLnNvcnQgPyBVdGlsLnJlbmRlclJlYWN0U29ydENhcmV0KHRoaXMucHJvcHMuc29ydCkgOiBkZWZhdWx0Q2FyZXQ7XG5cbiAgICB2YXIgY2xhc3NlcyA9IHRoaXMucHJvcHMuY2xhc3NOYW1lK1wiIFwiKyh0aGlzLnByb3BzLmRhdGFTb3J0P1wic29ydC1jb2x1bW5cIjpcIlwiKTtcbiAgICByZXR1cm4oXG4gICAgICA8dGggcmVmPSdoZWFkZXItY29sJyBjbGFzc05hbWU9e2NsYXNzZXN9IHN0eWxlPXt0aFN0eWxlfT5cbiAgICAgICAgPGRpdiByZWY9XCJpbm5lckRpdlwiIGNsYXNzTmFtZT1cInRoLWlubmVyIHRhYmxlLWhlYWRlci1jb2x1bW5cIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ29sdW1uQ2xpY2suYmluZCh0aGlzKX0+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59e3NvcnRDYXJldH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnByb3BzLmZpbHRlciA/IHRoaXMuZ2V0RmlsdGVycygpIDogbnVsbH1cbiAgICAgIDwvdGg+XG4gICAgKVxuICB9XG59XG5cbnZhciBmaWx0ZXJUeXBlQXJyYXkgPSBbXTtcbmZvciAobGV0IGtleSBpbiBDb25zdC5GSUxURVJfVFlQRSkge1xuICBmaWx0ZXJUeXBlQXJyYXkucHVzaChDb25zdC5GSUxURVJfVFlQRVtrZXldKTtcbn1cblxuVGFibGVIZWFkZXJDb2x1bW4ucHJvcFR5cGVzID0ge1xuICBkYXRhRmllbGQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGRhdGFBbGlnbjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgZGF0YVNvcnQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBvblNvcnQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBkYXRhRm9ybWF0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgaXNLZXk6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBlZGl0YWJsZTogUmVhY3QuUHJvcFR5cGVzLmFueSxcbiAgaGlkZGVuOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgY2xhc3NOYW1lOlJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIHdpZHRoOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBzb3J0RnVuYzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIGNvbHVtbkNsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLmFueSxcbiAgZmlsdGVyRm9ybWF0dGVkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgc29ydDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgZm9ybWF0RXh0cmFEYXRhOiBSZWFjdC5Qcm9wVHlwZXMuYW55LFxuICBmaWx0ZXI6IFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4gICAgdHlwZTogUmVhY3QuUHJvcFR5cGVzLm9uZU9mKGZpbHRlclR5cGVBcnJheSksXG4gICAgZGVsYXk6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgb3B0aW9uczogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LCAvLyBmb3IgU2VsZWN0RmlsdGVyXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuYXJyYXlPZihSZWFjdC5Qcm9wVHlwZXMubnVtYmVyKSAvL2ZvciBOdW1iZXJGaWx0ZXJcbiAgICAgICAgXSksXG4gICAgbnVtYmVyQ29tcGFyYXRvcnM6IFJlYWN0LlByb3BUeXBlcy5hcnJheU9mKFJlYWN0LlByb3BUeXBlcy5zdHJpbmcpLFxuICAgIGVtaXR0ZXI6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgcGxhY2Vob2xkZXI6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgZ2V0RWxlbWVudDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgY3VzdG9tRmlsdGVyUGFyYW1ldGVyczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICB9KVxufTtcblxuVGFibGVIZWFkZXJDb2x1bW4uZGVmYXVsdFByb3BzID0ge1xuICBkYXRhQWxpZ246IFwibGVmdFwiLFxuICBkYXRhU29ydDogZmFsc2UsXG4gIGRhdGFGb3JtYXQ6IHVuZGVmaW5lZCxcbiAgaXNLZXk6IGZhbHNlLFxuICBlZGl0YWJsZTogdHJ1ZSxcbiAgb25Tb3J0OiB1bmRlZmluZWQsXG4gIGhpZGRlbjogZmFsc2UsXG4gIGNsYXNzTmFtZTogXCJcIixcbiAgd2lkdGg6IG51bGwsXG4gIHNvcnRGdW5jOiB1bmRlZmluZWQsXG4gIGNvbHVtbkNsYXNzTmFtZTogJycsXG4gIGZpbHRlckZvcm1hdHRlZDogZmFsc2UsXG4gIHNvcnQ6IHVuZGVmaW5lZCxcbiAgZm9ybWF0RXh0cmFEYXRhOiB1bmRlZmluZWQsXG4gIGZpbHRlcjogdW5kZWZpbmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYWJsZUhlYWRlckNvbHVtbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL1RhYmxlSGVhZGVyQ29sdW1uLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb25zdCBmcm9tICcuLi9Db25zdCc7XG5cbmNsYXNzIERhdGVGaWx0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5maWx0ZXIgPSB0aGlzLmZpbHRlci5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHNldERlZmF1bHREYXRlKCkge1xuICAgICAgICBsZXQgZGVmYXVsdERhdGUgID0gXCJcIjtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgICAgICAvLyBTZXQgdGhlIGFwcHJvcHJpYXRlIGZvcm1hdCBmb3IgdGhlIGlucHV0IHR5cGU9ZGF0ZSwgaS5lLiBcIllZWVktTU0tRERcIlxuICAgICAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlID0gbmV3IERhdGUodGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUpO1xuICAgICAgICAgICAgZGVmYXVsdERhdGUgPSBgJHtkZWZhdWx0VmFsdWUuZ2V0RnVsbFllYXIoKX0tJHsoXCIwXCIgKyAoZGVmYXVsdFZhbHVlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpfS0keyhcIjBcIiArIGRlZmF1bHRWYWx1ZS5nZXREYXRlKCkpLnNsaWNlKC0yKX1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWZhdWx0RGF0ZTtcbiAgICB9XG5cbiAgICBmaWx0ZXIoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZGF0ZVZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICBpZiAoZGF0ZVZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmZpbHRlckhhbmRsZXIobmV3IERhdGUoZGF0ZVZhbHVlKSwgQ29uc3QuRklMVEVSX1RZUEUuREFURSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmZpbHRlckhhbmRsZXIobnVsbCwgQ29uc3QuRklMVEVSX1RZUEUuREFURSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc3QgZGF0ZVZhbHVlID0gdGhpcy5yZWZzLmlucHV0RGF0ZS5kZWZhdWx0VmFsdWU7XG4gICAgICAgIGlmIChkYXRlVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZmlsdGVySGFuZGxlcihuZXcgRGF0ZShkYXRlVmFsdWUpLCBDb25zdC5GSUxURVJfVFlQRS5EQVRFKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxpbnB1dCByZWY9XCJpbnB1dERhdGVcIlxuICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbHRlciBkYXRlLWZpbHRlciBmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5maWx0ZXJ9XG4gICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnNldERlZmF1bHREYXRlKCl9IC8+XG4gICAgICAgICk7XG4gICAgfVxufTtcblxuRGF0ZUZpbHRlci5wcm9wVHlwZXMgPSB7XG4gICAgZmlsdGVySGFuZGxlcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBkZWZhdWx0VmFsdWU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgY29sdW1uTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGF0ZUZpbHRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2ZpbHRlcnMvRGF0ZS5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi4vQ29uc3QnO1xuXG5jbGFzcyBUZXh0RmlsdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5maWx0ZXIgPSB0aGlzLmZpbHRlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMudGltZW91dCA9IG51bGw7XG5cdH1cblxuXHRmaWx0ZXIoZXZlbnQpIHtcblx0XHRpZiAodGhpcy50aW1lb3V0KSB7XG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcblx0XHR9XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0Y29uc3QgZmlsdGVyVmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cdFx0dGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdHNlbGYucHJvcHMuZmlsdGVySGFuZGxlcihmaWx0ZXJWYWx1ZSwgQ29uc3QuRklMVEVSX1RZUEUuVEVYVCk7XG5cdFx0fSwgc2VsZi5wcm9wcy5kZWxheSk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRpZiAodGhpcy5yZWZzLmlucHV0VGV4dC5kZWZhdWx0VmFsdWUpIHtcblx0XHRcdHRoaXMucHJvcHMuZmlsdGVySGFuZGxlcih0aGlzLnJlZnMuaW5wdXRUZXh0LmRlZmF1bHRWYWx1ZSwgQ29uc3QuRklMVEVSX1RZUEUuVEVYVCk7XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8aW5wdXQgcmVmPVwiaW5wdXRUZXh0XCJcblx0XHRcdFx0ICAgY2xhc3NOYW1lPVwiZmlsdGVyIHRleHQtZmlsdGVyIGZvcm0tY29udHJvbFwiXG5cdFx0XHRcdCAgIHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0ICAgb25DaGFuZ2U9e3RoaXMuZmlsdGVyfVxuXHRcdFx0XHQgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlciB8fCBgRW50ZXIgJHt0aGlzLnByb3BzLmNvbHVtbk5hbWV9Li4uYH1cblx0XHRcdFx0ICAgZGVmYXVsdFZhbHVlPXsodGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUpID8gdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUgOiBcIlwifSAvPlxuXHRcdCk7XG5cdH1cbn07XG5cblRleHRGaWx0ZXIucHJvcFR5cGVzID0ge1xuXHRmaWx0ZXJIYW5kbGVyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXHRkZWZhdWx0VmFsdWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG5cdGRlbGF5OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuXHRwbGFjZWhvbGRlcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcblx0Y29sdW1uTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuVGV4dEZpbHRlci5kZWZhdWx0UHJvcHMgPSB7XG5cdGRlbGF5OiBDb25zdC5GSUxURVJfREVMQVlcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dEZpbHRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2ZpbHRlcnMvVGV4dC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NTZXQgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi4vQ29uc3QnO1xuXG5jbGFzcyBTZWxlY3RGaWx0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLmZpbHRlciA9IHRoaXMuZmlsdGVyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGlzUGxhY2Vob2xkZXJTZWxlY3RlZDogKHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlID09IHVuZGVmaW5lZCB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0IXRoaXMucHJvcHMub3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSh0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSkpXG5cdFx0fTtcblx0fVxuXG5cdGZpbHRlcihldmVudCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe2lzUGxhY2Vob2xkZXJTZWxlY3RlZDogKGV2ZW50LnRhcmdldC52YWx1ZSA9PT0gXCJcIil9KTtcblx0XHR0aGlzLnByb3BzLmZpbHRlckhhbmRsZXIoZXZlbnQudGFyZ2V0LnZhbHVlLCBDb25zdC5GSUxURVJfVFlQRS5TRUxFQ1QpO1xuXHR9XG5cblx0Z2V0T3B0aW9ucygpIHtcblx0XHRsZXQgb3B0aW9uVGFncyA9IFtdO1xuXHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLnByb3BzLm9wdGlvbnM7XG5cdFx0b3B0aW9uVGFncy5wdXNoKDxvcHRpb24ga2V5PVwiLTFcIiB2YWx1ZT1cIlwiPnt0aGlzLnByb3BzLnBsYWNlaG9sZGVyIHx8IGBTZWxlY3QgJHt0aGlzLnByb3BzLmNvbHVtbk5hbWV9Li4uYH08L29wdGlvbj4pO1xuXHRcdE9iamVjdC5rZXlzKG9wdGlvbnMpLm1hcCgoa2V5KSA9PiB7XG5cdFx0XHRvcHRpb25UYWdzLnB1c2goPG9wdGlvbiBrZXk9e2tleX0gdmFsdWU9e2tleX0+e29wdGlvbnNba2V5XX08L29wdGlvbj4pO1xuXHRcdH0pO1xuXHRcdHJldHVybiBvcHRpb25UYWdzO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0aWYgKHRoaXMucmVmcy5zZWxlY3RJbnB1dC52YWx1ZSkge1xuXHRcdFx0dGhpcy5wcm9wcy5maWx0ZXJIYW5kbGVyKHRoaXMucmVmcy5zZWxlY3RJbnB1dC52YWx1ZSwgQ29uc3QuRklMVEVSX1RZUEUuU0VMRUNUKTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIHNlbGVjdENsYXNzID0gY2xhc3NTZXQoXCJmaWx0ZXJcIiwgXCJzZWxlY3QtZmlsdGVyXCIsIFwiZm9ybS1jb250cm9sXCIsXG5cdFx0XHRcdFx0XHRcdHtcInBsYWNlaG9sZGVyLXNlbGVjdGVkXCI6IHRoaXMuc3RhdGUuaXNQbGFjZWhvbGRlclNlbGVjdGVkfSk7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlbGVjdCByZWY9XCJzZWxlY3RJbnB1dFwiXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtzZWxlY3RDbGFzc31cblx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5maWx0ZXJ9XG5cdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXsodGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUgIT0gdW5kZWZpbmVkKSA/IHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlIDogXCJcIn0+XG5cdFx0XHRcdHt0aGlzLmdldE9wdGlvbnMoKX1cblx0XHRcdDwvc2VsZWN0PlxuXHRcdCk7XG5cdH1cbn07XG5cblNlbGVjdEZpbHRlci5wcm9wVHlwZXMgPSB7XG5cdGZpbHRlckhhbmRsZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cdG9wdGlvbnM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblx0cGxhY2Vob2xkZXI6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG5cdGNvbHVtbk5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdEZpbHRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2ZpbHRlcnMvU2VsZWN0LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc1NldCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBDb25zdCBmcm9tICcuLi9Db25zdCc7XG5cbmNvbnN0IGxlZ2FsQ29tcGFyYXRvcnMgPSBbXCI9XCIsIFwiPlwiLCBcIj49XCIsIFwiPFwiLCBcIjw9XCIsIFwiIT1cIl07XG5cbmNsYXNzIE51bWJlckZpbHRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLm51bWJlckNvbXBhcmF0b3JzID0gdGhpcy5wcm9wcy5udW1iZXJDb21wYXJhdG9ycyB8fCBsZWdhbENvbXBhcmF0b3JzO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXNQbGFjZWhvbGRlclNlbGVjdGVkOiAodGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUgPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZS5udW1iZXIgPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5vcHRpb25zICYmIHRoaXMucHJvcHMub3B0aW9ucy5pbmRleE9mKHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlLm51bWJlcikgPT0gLTEpKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uQ2hhbmdlTnVtYmVyID0gdGhpcy5vbkNoYW5nZU51bWJlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlTnVtYmVyU2V0ID0gdGhpcy5vbkNoYW5nZU51bWJlclNldC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlQ29tcGFyYXRvciA9IHRoaXMub25DaGFuZ2VDb21wYXJhdG9yLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VOdW1iZXIoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMucmVmcy5udW1iZXJGaWx0ZXJDb21wYXJhdG9yLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudGltZW91dCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGZpbHRlclZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5wcm9wcy5maWx0ZXJIYW5kbGVyKHtudW1iZXI6IGZpbHRlclZhbHVlLCBjb21wYXJhdG9yOiBzZWxmLnJlZnMubnVtYmVyRmlsdGVyQ29tcGFyYXRvci52YWx1ZX0sXG4gICAgICAgICAgICAgICAgQ29uc3QuRklMVEVSX1RZUEUuTlVNQkVSKTtcbiAgICAgICAgfSwgc2VsZi5wcm9wcy5kZWxheSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VOdW1iZXJTZXQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNQbGFjZWhvbGRlclNlbGVjdGVkOiAoZXZlbnQudGFyZ2V0LnZhbHVlID09PSBcIlwiKX0pO1xuICAgICAgICBpZiAodGhpcy5yZWZzLm51bWJlckZpbHRlckNvbXBhcmF0b3IudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLmZpbHRlckhhbmRsZXIoe251bWJlcjogZXZlbnQudGFyZ2V0LnZhbHVlLCBjb21wYXJhdG9yOiB0aGlzLnJlZnMubnVtYmVyRmlsdGVyQ29tcGFyYXRvci52YWx1ZX0sXG4gICAgICAgICAgICBDb25zdC5GSUxURVJfVFlQRS5OVU1CRVIpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlQ29tcGFyYXRvcihldmVudCkge1xuICAgICAgICBpZiAodGhpcy5yZWZzLm51bWJlckZpbHRlci52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMuZmlsdGVySGFuZGxlcih7bnVtYmVyOiB0aGlzLnJlZnMubnVtYmVyRmlsdGVyLnZhbHVlLCBjb21wYXJhdG9yOiBldmVudC50YXJnZXQudmFsdWV9LFxuICAgICAgICAgICAgQ29uc3QuRklMVEVSX1RZUEUuTlVNQkVSKTtcbiAgICB9XG5cbiAgICBnZXRDb21wYXJhdG9yT3B0aW9ucygpIHtcbiAgICAgICAgbGV0IG9wdGlvblRhZ3MgPSBbXTtcbiAgICAgICAgb3B0aW9uVGFncy5wdXNoKDxvcHRpb24ga2V5PVwiLTFcIj48L29wdGlvbj4pO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtYmVyQ29tcGFyYXRvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG9wdGlvblRhZ3MucHVzaCg8b3B0aW9uIGtleT17aX0gdmFsdWU9e3RoaXMubnVtYmVyQ29tcGFyYXRvcnNbaV19Pnt0aGlzLm51bWJlckNvbXBhcmF0b3JzW2ldfTwvb3B0aW9uPik7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBvcHRpb25UYWdzO1xuICAgIH1cblxuICAgIGdldE51bWJlck9wdGlvbnMoKSB7XG4gICAgICAgIGxldCBvcHRpb25UYWdzID0gW107XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnByb3BzLm9wdGlvbnM7XG5cbiAgICAgICAgb3B0aW9uVGFncy5wdXNoKDxvcHRpb24ga2V5PVwiLTFcIiB2YWx1ZT1cIlwiPnt0aGlzLnByb3BzLnBsYWNlaG9sZGVyIHx8IGBTZWxlY3QgJHt0aGlzLnByb3BzLmNvbHVtbk5hbWV9Li4uYH08L29wdGlvbj4pO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG9wdGlvblRhZ3MucHVzaCg8b3B0aW9uIGtleT17aX0gdmFsdWU9e29wdGlvbnNbaV19PntvcHRpb25zW2ldfTwvb3B0aW9uPik7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBvcHRpb25UYWdzO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5yZWZzLm51bWJlckZpbHRlckNvbXBhcmF0b3IudmFsdWUgJiYgdGhpcy5yZWZzLm51bWJlckZpbHRlci52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5maWx0ZXJIYW5kbGVyKHtudW1iZXI6IHRoaXMucmVmcy5udW1iZXJGaWx0ZXIudmFsdWUsXG4gICAgICAgICAgICAgICAgY29tcGFyYXRvcjogdGhpcy5yZWZzLm51bWJlckZpbHRlckNvbXBhcmF0b3IudmFsdWV9LFxuICAgICAgICAgICAgICAgIENvbnN0LkZJTFRFUl9UWVBFLk5VTUJFUik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBzZWxlY3RDbGFzcyA9IGNsYXNzU2V0KFwic2VsZWN0LWZpbHRlclwiLCBcIm51bWJlci1maWx0ZXItaW5wdXRcIiwgXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwicGxhY2Vob2xkZXItc2VsZWN0ZWRcIjogdGhpcy5zdGF0ZS5pc1BsYWNlaG9sZGVyU2VsZWN0ZWQgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyIG51bWJlci1maWx0ZXJcIj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IHJlZj1cIm51bWJlckZpbHRlckNvbXBhcmF0b3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibnVtYmVyLWZpbHRlci1jb21wYXJhdG9yIGZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZUNvbXBhcmF0b3J9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9eyh0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSkgPyB0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZS5jb21wYXJhdG9yIDogXCJcIn0+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLmdldENvbXBhcmF0b3JPcHRpb25zKCl9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgeyh0aGlzLnByb3BzLm9wdGlvbnMpID8gPHNlbGVjdCByZWY9XCJudW1iZXJGaWx0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzZWxlY3RDbGFzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlTnVtYmVyU2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXsodGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZS5udW1iZXIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5nZXROdW1iZXJPcHRpb25zKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+IDpcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9XCJudW1iZXJGaWx0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibnVtYmVyLWZpbHRlci1pbnB1dCBmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlciB8fCBgRW50ZXIgJHt0aGlzLnByb3BzLmNvbHVtbk5hbWV9Li4uYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VOdW1iZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17KHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUubnVtYmVyIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwifSAvPn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn07XG5cbk51bWJlckZpbHRlci5wcm9wVHlwZXMgPSB7XG4gICAgZmlsdGVySGFuZGxlcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvcHRpb25zOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXlPZihSZWFjdC5Qcm9wVHlwZXMubnVtYmVyKSxcbiAgICBkZWZhdWx0VmFsdWU6IFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIG51bWJlcjogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgY29tcGFyYXRvcjogUmVhY3QuUHJvcFR5cGVzLm9uZU9mKGxlZ2FsQ29tcGFyYXRvcnMpXG4gICAgfSksXG4gICAgZGVsYXk6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgbnVtYmVyQ29tcGFyYXRvcnM6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSkge1xuICAgICAgICBpZiAoIXByb3BzW3Byb3BOYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHNbcHJvcE5hbWVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY29tcGFyYXRvcklzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVnYWxDb21wYXJhdG9ycy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChsZWdhbENvbXBhcmF0b3JzW2pdID09PSBwcm9wc1twcm9wTmFtZV1baV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGFyYXRvcklzVmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWNvbXBhcmF0b3JJc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihgTnVtYmVyIGNvbXBhcmF0b3IgcHJvdmlkZWQgaXMgbm90IHN1cHBvcnRlZC4gVXNlIG9ubHkgJHtsZWdhbENvbXBhcmF0b3JzfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBwbGFjZWhvbGRlcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb2x1bW5OYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5OdW1iZXJGaWx0ZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIGRlbGF5OiBDb25zdC5GSUxURVJfREVMQVlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckZpbHRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2ZpbHRlcnMvTnVtYmVyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==
=======
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4NjJkMjA2MjZiYjM4NzczOGJiYSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Jvb3RzdHJhcFRhYmxlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9Iiwid2VicGFjazovLy8uL34vY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RhYmxlSGVhZGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdERPTVwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1kb21cIixcImNvbW1vbmpzXCI6XCJyZWFjdC1kb21cIixcImFtZFwiOlwicmVhY3QtZG9tXCJ9Iiwid2VicGFjazovLy8uL3NyYy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9TZWxlY3RSb3dIZWFkZXJDb2x1bW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RhYmxlQm9keS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVGFibGVSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RhYmxlQ29sdW1uLmpzIiwid2VicGFjazovLy8uL3NyYy9UYWJsZUVkaXRDb2x1bW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtdG9hc3RyL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXRvYXN0ci9saWIvVG9hc3RDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1hZGRvbnMtdXBkYXRlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL3VwZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9PYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vZmJqcy9saWIva2V5T2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9mYmpzL2xpYi9pbnZhcmlhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC10b2FzdHIvbGliL1RvYXN0TWVzc2FnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXRvYXN0ci9saWIvVG9hc3RNZXNzYWdlL2FuaW1hdGlvbk1peGluLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL1JlYWN0VHJhbnNpdGlvbkV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL34vZWxlbWVudC1jbGFzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXRvYXN0ci9saWIvVG9hc3RNZXNzYWdlL2pRdWVyeU1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdpbmF0aW9uL1BhZ2luYXRpb25MaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdpbmF0aW9uL1BhZ2VCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xiYXIvVG9vbEJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVGFibGVGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL1RhYmxlRGF0YVN0b3JlLmpzIiwid2VicGFjazovLy8uL34vZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3N2X2V4cG9ydF91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9maWxlc2F2ZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9GaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RhYmxlSGVhZGVyQ29sdW1uLmpzIiwid2VicGFjazovLy8uL3NyYy9maWx0ZXJzL0RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpbHRlcnMvVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmlsdGVycy9TZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpbHRlcnMvTnVtYmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OzJDQ3RDMkIsQ0FBa0I7Ozs7OENBQ2YsRUFBcUI7Ozs7Z0RBQ3hCLEVBQXdCOztBQUVuRCxLQUFHLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBQztBQUMvQixTQUFNLENBQUMsY0FBYyw4QkFBaUIsQ0FBQztBQUN2QyxTQUFNLENBQUMsaUJBQWlCLGlDQUFvQixDQUFDO0FBQzdDLFNBQU0sQ0FBQyxZQUFZLG9DQUFlLENBQUM7RUFDcEM7c0JBQ2M7QUFDYixpQkFBYztBQUNkLG9CQUFpQjtBQUNqQixlQUFZO0VBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ2JpQixDQUFPOzs7O3VDQUNKLENBQVk7Ozs7a0NBQ2YsQ0FBUzs7Ozt3Q0FDSCxDQUFlOzs7O3NDQUNqQixDQUFhOzs7O3FEQUNSLEVBQTZCOzs7OzJDQUNwQyxFQUFtQjs7Ozt3Q0FDZixFQUFlOzs7O2dEQUNWLEVBQXdCOzs0Q0FDL0IsRUFBbUI7Ozs7bUNBQ3BCLEVBQVU7O0tBRXpCLGNBQWM7YUFBZCxjQUFjOztBQUVQLFlBRlAsY0FBYyxDQUVOLEtBQUssRUFBRTs7OzJCQUZmLGNBQWM7O0FBR2hCLGdDQUhFLGNBQWMsNkNBR1YsS0FBSyxFQUFFOztVQTJvQmYsYUFBYSxHQUFHLFVBQUMsQ0FBQyxFQUFLO0FBQ3JCLGFBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztNQUN6RTs7VUFFRCxrQkFBa0IsR0FBRyxZQUFNO0FBQ3pCLFdBQUksY0FBYyxHQUFHLE1BQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuRSxXQUFJLFlBQVksR0FBRyxNQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0QsV0FBRyxjQUFjLENBQUMsV0FBVyxLQUFLLFlBQVksQ0FBQyxXQUFXLEVBQUM7QUFDekQsdUJBQWMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQzlEO0FBQ0QsV0FBTSxXQUFXLEdBQUcsTUFBSyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7QUFDMUQsYUFBSyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQ3BDLE1BQUssSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxNQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztNQUM1Rjs7QUF0cEJDLFNBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDOztBQUUzQixTQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ25DLFdBQUksQ0FBQyxLQUFLLEdBQUcsd0NBQW1CLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFDM0QsV0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDeEIsV0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFDLElBQUksRUFBSztBQUNyQyxlQUFLLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekIsZUFBSyxRQUFRLENBQUM7QUFDWixlQUFJLEVBQUUsTUFBSyxZQUFZLEVBQUU7VUFDMUIsQ0FBQztRQUNILENBQUMsQ0FBQztNQUNKLE1BQU07QUFDTCxXQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNuQyxXQUFJLENBQUMsS0FBSyxHQUFHLHdDQUFtQixJQUFJLENBQUMsQ0FBQztNQUN2Qzs7QUFFRCxTQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFFM0IsU0FBSSxJQUFJLENBQUMsTUFBTSxFQUFFOztBQUNmLGFBQU0sSUFBSSxRQUFPLENBQUM7QUFDbEIsZUFBSyxNQUFNLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLFVBQUMsYUFBYSxFQUFLO0FBQ2xELGVBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztVQUN0QyxDQUFDLENBQUM7O01BQ0o7O0FBRUQsU0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUU7QUFDekQsV0FBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2pELFdBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7TUFDcEM7O0FBRUQsU0FBSSxDQUFDLEtBQUssR0FBRztBQUNYLFdBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFO0FBQ3pCLGVBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQztBQUN0QyxrQkFBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsSUFBSSxtQkFBTSxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7QUFDMUUsc0JBQWUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFO01BQ2pELENBQUM7SUFDSDs7Z0JBekNHLGNBQWM7O1lBMkNULG1CQUFDLEtBQUssRUFBQzs7O1dBQ1QsUUFBUSxHQUFJLEtBQUssQ0FBakIsUUFBUTs7QUFFYixXQUFNLGlCQUFpQixHQUFHLE9BQU8sUUFBUSxLQUFLLFFBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO0FBQzFFLDBCQUFNLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxnQkFBTSxFQUFHO0FBQzlDLGFBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUU7QUFDdEIsZUFBSSxRQUFRLEVBQUU7QUFDWixtQkFBTSw4REFBOEQsQ0FBQztZQUN0RTtBQUNELG1CQUFRLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7VUFDbkM7QUFDRCxhQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFOztBQUV2QixlQUFJLENBQUMsT0FBSyxNQUFNLEVBQUU7O0FBRWhCLG9CQUFLLE1BQU0sR0FBRyxvQkFBWSxDQUFDO1lBQzVCOztBQUVELGlCQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBSyxNQUFNLENBQUM7VUFDM0M7UUFDRixFQUFFLElBQUksQ0FBQyxDQUFDOztBQUVULFdBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFNO0FBQ3hFLGFBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLGdCQUFPLElBQUksQ0FBQztRQUNiLEVBQUUsRUFBRSxDQUFDLENBQUM7O0FBRVAsV0FBSSxDQUFDLGlCQUFpQixJQUFJLENBQUMsUUFBUSxFQUNqQyxpSkFDMEU7O0FBRTVFLFdBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO0FBQ2xCLHFCQUFZLEVBQUUsS0FBSyxDQUFDLFVBQVU7QUFDOUIsaUJBQVEsRUFBRSxRQUFRO0FBQ2xCLGlCQUFRLEVBQUUsUUFBUTtBQUNsQiwwQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCO0FBQzFDLGVBQU0sRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7UUFDbEMsQ0FBQyxDQUFDO01BQ0o7OztZQUVXLHdCQUFHO0FBQ1osV0FBSSxNQUFNLEdBQUcsRUFBRSxDQUFDOztBQUVoQixXQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQzVELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFN0UsV0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRTtBQUN6QixhQUFJLElBQUk7YUFBRSxXQUFXLGFBQUM7QUFDdEIsYUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxFQUFFO0FBQy9CLHNCQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7QUFDckMsZUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1VBQzNCLE1BQU07QUFDTCxzQkFBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsSUFBSSxtQkFBTSxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1RSxlQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztVQUNyQztBQUNELGVBQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDbkQsTUFBTTtBQUNMLGVBQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzNCO0FBQ0QsY0FBTyxNQUFNLENBQUM7TUFDaEI7OztZQUVvQiwrQkFBQyxJQUFZLEVBQUU7V0FBWixRQUFRLEdBQVYsSUFBWSxDQUFWLFFBQVE7O0FBQzlCLGNBQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUs7QUFDakMsZ0JBQU87QUFDTCxlQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTO0FBQzVCLGdCQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTO0FBQzdCLGVBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVE7QUFDM0IsaUJBQU0sRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVU7QUFDL0IsMEJBQWUsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLGVBQWU7QUFDN0MsMEJBQWUsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLGVBQWU7QUFDN0MsbUJBQVEsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVE7QUFDL0IsaUJBQU0sRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU07QUFDM0Isb0JBQVMsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLGVBQWU7QUFDdkMsZ0JBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUs7QUFDekIsZUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUTtBQUMzQixtQkFBUSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUTtBQUMvQixnQkFBSyxFQUFFLENBQUM7VUFDVCxDQUFDO1FBQ0gsQ0FBQyxDQUFDO01BQ0o7OztZQUV3QixtQ0FBQyxTQUFTLEVBQUU7QUFDbkMsV0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMxQixXQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ2pDLGFBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUMzQyxhQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztBQUN6QyxhQUFJLElBQUksR0FBRyxhQUFhLElBQUksYUFBYSxDQUFDLGNBQWMsRUFBRSxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztBQUMxRixhQUFJLFdBQVcsR0FBRyxhQUFhLElBQUksYUFBYSxDQUFDLGNBQWMsRUFBRSxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsV0FBVyxJQUFJLG1CQUFNLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUVsSSxhQUFHLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLENBQUM7QUFDbkUsYUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUN4QyxhQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsS0FBSyxRQUFRLEdBQUcsUUFBUSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQztBQUMxRixhQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsS0FBSyxRQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsQ0FBQztBQUN2RixhQUFHLFNBQVMsSUFBSSxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ2pFLGFBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNwRCxhQUFJLENBQUMsUUFBUSxDQUFDO0FBQ1osZUFBSSxFQUFFLElBQUk7QUFDVixtQkFBUSxFQUFFLElBQUk7QUFDZCxzQkFBVyxFQUFFLFdBQVc7VUFDekIsQ0FBQyxDQUFDO1FBQ0o7QUFDRCxXQUFJLFNBQVMsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUU7O0FBRXZELGFBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2hELGFBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbkMsYUFBSSxDQUFDLFFBQVEsQ0FBQztBQUNaLDBCQUFlLEVBQUUsSUFBSTtVQUN0QixDQUFDLENBQUM7UUFDSjtNQUNGOzs7WUFFZ0IsNkJBQUc7QUFDbEIsV0FBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7QUFDMUIsYUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUMzRCxXQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7TUFDOUU7OztZQUVtQixnQ0FBRztBQUNyQixhQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzlELFdBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNoRixXQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDZixhQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbEQ7TUFDRjs7O1lBRWlCLDhCQUFHO0FBQ25CLFdBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0FBQzFCLFdBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0FBQzNCLFdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUM7TUFDM0M7OztZQUVrQiwrQkFBRztBQUNwQixXQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQ3ZCLGFBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3hFLGFBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLG1CQUFNLGNBQWMsRUFDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUM5QztNQUNGOzs7Ozs7Ozs7OztZQVNpQiw0QkFBQyxLQUFLLEVBQUU7QUFDeEIsY0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQztNQUNyQzs7O1lBRUssa0JBQUc7O0FBRVAsV0FBSSxVQUFVLEdBQUcsNkJBQVMsZ0JBQWdCLENBQUMsQ0FBQztBQUM1QyxXQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztBQUNwQyxXQUFJLEtBQUssR0FBRztBQUNWLGVBQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07QUFDekIsa0JBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7UUFDaEMsQ0FBQztBQUNGLFdBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUU7QUFDdkMsa0JBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkM7QUFDRCxXQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3JELFdBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDeEMsV0FBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7QUFDekMsV0FBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBQ25DLFdBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNsRCxXQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDckMsY0FDRTs7V0FBSyxTQUFTLEVBQUMsb0JBQW9CLEVBQUMsR0FBRyxFQUFDLE9BQU87U0FDNUMsT0FBTztTQUNSOzthQUFLLFNBQVMsRUFBQywwQkFBMEI7QUFDcEMseUJBQVksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRTtBQUMvQyx5QkFBWSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFO0FBQy9DLGtCQUFLLEVBQUUsS0FBTTtXQUNoQjs7O0FBQ0Usa0JBQUcsRUFBQyxRQUFRO0FBQ1osNEJBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFLO0FBQ3pDLCtCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLGdCQUFpQjtBQUN4RCx1QkFBUSxFQUFFLFFBQVEsR0FBRyxRQUFRLENBQUMsU0FBUyxHQUFHLFNBQVU7QUFDcEQsd0JBQVMsRUFBRSxRQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUssR0FBRyxTQUFVO0FBQ2pELHFCQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFO0FBQ25DLDZCQUFjLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7QUFDbkQsdUJBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVM7QUFDOUIsd0JBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVU7QUFDaEMseUJBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxLQUFNO0FBQ3ZDLDBCQUFXLEVBQUUsV0FBWTthQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7WUFDUjtXQUNkO0FBQ0UsbUJBQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU87QUFDMUIsc0JBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVU7QUFDaEMsZ0JBQUcsRUFBQyxNQUFNO0FBQ1YsaUJBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUs7QUFDdEIsb0JBQU8sRUFBRSxPQUFRO0FBQ2pCLHdCQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFZO0FBQ3BDLG9CQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFRO0FBQzVCLHFCQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFTO0FBQzlCLGtCQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFNO0FBQ3hCLHFCQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUc7QUFDbkMsc0JBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVU7QUFDaEMsc0JBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVU7QUFDaEMscUJBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVM7QUFDOUIsNEJBQWUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWdCO0FBQzVDLHVCQUFVLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFO0FBQzNDLDJCQUFjLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7QUFDbkQsMEJBQWEsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRTtBQUNqRCx3QkFBVyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRTtBQUM3Qyx1QkFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVc7YUFDMUM7VUFDRTtTQUNMLFdBQVc7U0FDWCxVQUFVO1FBQ1AsQ0FDUDtNQUNGOzs7WUFFVSx1QkFBRTtBQUNYLFdBQUksb0JBQW9CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0FBQzNELFdBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDM0MsV0FBRyxvQkFBb0IsQ0FBQyxNQUFNLEtBQUssVUFBVSxDQUFDLE1BQU0sRUFBQztBQUNuRCxnQkFBTyxvQkFBb0IsQ0FBQyxNQUFNLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBRyxlQUFlLENBQUM7UUFDcEUsTUFBTTtBQUNMLGdCQUFPLElBQUksQ0FBQztRQUNiO01BQ0Y7OztZQUVZLHlCQUFHO0FBQ2QsV0FBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNqQyxXQUFJLENBQUMsUUFBUSxDQUFDO0FBQ1osd0JBQWUsRUFBRSxFQUFFO1FBQ3BCLENBQUMsQ0FBQztNQUNKOzs7WUFFUyxvQkFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFO0FBQzNCLFdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFO0FBQ25DLGFBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvRDs7QUFFRCxXQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDckQsV0FBSSxDQUFDLFFBQVEsQ0FBQztBQUNaLGFBQUksRUFBRSxNQUFNO1FBQ2IsQ0FBQyxDQUFDO01BQ0o7OztZQUVtQiw4QkFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFO1dBQy9CLFlBQVksR0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBbEMsWUFBWTs7QUFDbkIsV0FBSSxZQUFZLEVBQUU7QUFDaEIscUJBQVksQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDakM7O0FBRUQsV0FBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRTtBQUM3QixnQkFBTztRQUNSOztBQUVELFdBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUN0RCxXQUFJLENBQUMsUUFBUSxDQUFDO0FBQ1osYUFBSSxFQUFFLE1BQU07QUFDWixpQkFBUSxFQUFFLElBQUk7QUFDZCxvQkFBVyxFQUFYLFdBQVc7UUFDWixDQUFDLENBQUM7TUFDSjs7O1lBRWUsNEJBQUc7QUFDakIsV0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUU7QUFDbkMsYUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbkM7TUFDRjs7O1lBRWUsNEJBQUc7QUFDakIsV0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUU7QUFDbkMsYUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbkM7TUFDRjs7O1lBRWdCLDJCQUFDLEdBQUcsRUFBRTtBQUNyQixXQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRTtBQUNwQyxhQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkM7TUFDRjs7O1lBRWlCLDRCQUFDLEdBQUcsRUFBRTtBQUN0QixXQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRTtBQUNyQyxhQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEM7TUFDRjs7O1lBRWEsd0JBQUMsR0FBRyxFQUFFO0FBQ2xCLFdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO0FBQ2pDLGFBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQztNQUNGOzs7WUFFaUIsNEJBQUMsQ0FBQyxFQUFFO0FBQ3BCLFdBQUksVUFBVSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO0FBQ3pDLFdBQUksZUFBZSxHQUFHLEVBQUUsQ0FBQztBQUN6QixXQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDbEIsV0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUU7QUFDcEMsZUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQ2xELFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDOztBQUVELFdBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLE1BQU0sS0FBSyxLQUFLLEVBQUU7QUFDckQsYUFBSSxVQUFVLEVBQUU7QUFDZCwwQkFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7VUFDN0M7O0FBRUQsYUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM5QyxhQUFJLENBQUMsUUFBUSxDQUFDO0FBQ1osMEJBQWUsRUFBRSxlQUFlO1VBQ2pDLENBQUMsQ0FBQztRQUNKO01BQ0Y7OztZQUVxQixrQ0FBRztBQUN2QixXQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUM7QUFDL0IsV0FBSSxNQUFNLGFBQUM7QUFDWCxXQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFO0FBQ3pCLGVBQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMzRCxNQUFNO0FBQ0wsZUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDM0I7QUFDRCxXQUFJLENBQUMsUUFBUSxDQUFDO0FBQ1osYUFBSSxFQUFFLE1BQU07QUFDWixpQkFBUSxFQUFFLENBQUM7UUFDWixDQUFDLENBQUM7TUFDSjs7O1lBRWMseUJBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRTtBQUMvQixXQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLENBQUM7QUFDbkQsV0FBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUMzQyxXQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDbEIsV0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUU7QUFDakMsZUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDekQ7O0FBRUQsV0FBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksTUFBTSxLQUFLLEtBQUssRUFBRTtBQUNyRCxhQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxtQkFBTSxpQkFBaUIsRUFBRTtBQUN6RCx1QkFBWSxHQUFHLFVBQVUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUU7VUFDMUMsTUFBTTtBQUNMLGVBQUksVUFBVSxFQUFFO0FBQ2QseUJBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0IsTUFBTTtBQUNMLHlCQUFZLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsRUFBRTtBQUNoRCxzQkFBTyxNQUFNLEtBQUssR0FBRyxDQUFDO2NBQ3ZCLENBQUMsQ0FBQztZQUNKO1VBQ0Y7O0FBRUQsYUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUMzQyxhQUFJLENBQUMsUUFBUSxDQUFDO0FBQ1osMEJBQWUsRUFBRSxZQUFZO1VBQzlCLENBQUMsQ0FBQztRQUNKO01BQ0Y7OztZQUVhLHdCQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFO0FBQ3pDLFdBQUksU0FBUyxhQUFDO0FBQ2QsMEJBQU0sUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxVQUFVLE1BQU0sRUFBRSxDQUFDLEVBQUU7QUFDL0QsYUFBSSxDQUFDLElBQUksUUFBUSxFQUFFO0FBQ2pCLG9CQUFTLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7QUFDbkMsa0JBQU8sS0FBSyxDQUFDO1VBQ2Q7UUFDRixDQUFDLENBQUM7O0FBRUgsV0FBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNoRSxXQUFJLENBQUMsUUFBUSxDQUFDO0FBQ1osYUFBSSxFQUFFLE1BQU07UUFDYixDQUFDLENBQUM7O0FBRUgsV0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUU7QUFDckMsYUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNqRjtNQUNGOzs7WUFFZ0IsNkJBQUc7QUFDbEIsV0FBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTs7UUFFbkI7TUFDRjs7O1lBRVcsc0JBQUMsTUFBTSxFQUFFO0FBQ25CLFdBQUksR0FBRyxHQUFHLElBQUk7V0FBRSxNQUFNLGFBQUM7QUFDdkIsV0FBSTtBQUNGLGFBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLENBQUMsT0FBTyxDQUFDLEVBQUU7QUFDVixnQkFBTyxDQUFDLENBQUM7UUFDVjs7QUFFRCxXQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFOzthQUVqQixXQUFXLEdBQUssSUFBSSxDQUFDLEtBQUssQ0FBMUIsV0FBVzs7QUFDbkIsYUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxHQUFHLFdBQVcsQ0FBQyxDQUFDO0FBQ3RFLGVBQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDMUQsYUFBSSxDQUFDLFFBQVEsQ0FBQztBQUNaLGVBQUksRUFBRSxNQUFNO0FBQ1osbUJBQVEsRUFBRSxZQUFZO1VBQ3ZCLENBQUMsQ0FBQztRQUNKLE1BQU07QUFDTCxlQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMxQixhQUFJLENBQUMsUUFBUSxDQUFDO0FBQ1osZUFBSSxFQUFFLE1BQU07VUFDYixDQUFDLENBQUM7UUFDSjs7QUFFRCxXQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRTtBQUNyQyxhQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0M7TUFDRjs7O1lBRWEsMEJBQUc7QUFDZixjQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO01BQy9COzs7WUFFYSwwQkFBRztBQUNmLGNBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7TUFDNUI7OztZQUVZLHVCQUFDLE9BQU8sRUFBRTtBQUNyQixXQUFJLElBQUksR0FBRyxJQUFJLENBQUM7QUFDaEIsV0FBSSxXQUFXLEdBQUcsT0FBTyxHQUFDLE9BQU8sR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLENBQUM7O0FBRWxFLFdBQUksV0FBVyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ3pDLGFBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsc0JBQXNCLEVBQUM7QUFDNUMsZUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQ3ZDLFlBQVU7QUFDUixpQkFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM3QixDQUNGLENBQUM7VUFDSCxNQUFNLElBQUksT0FBTyxDQUFDLDJCQUEyQixDQUFDLEVBQUU7QUFDL0MsZUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztVQUM3QjtRQUNGO01BQ0Y7OztZQUVRLG1CQUFDLFdBQVcsRUFBQzs7QUFFcEIsV0FBSSxNQUFNLGFBQUM7QUFDWCxXQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUMvQixXQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDOztBQUVqQyxXQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFO2FBQ2pCLFdBQVcsR0FBSyxJQUFJLENBQUMsS0FBSyxDQUExQixXQUFXO2FBQ2IsUUFBUSxHQUFLLElBQUksQ0FBQyxLQUFLLENBQXZCLFFBQVE7O0FBQ2QsYUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxHQUFHLFdBQVcsQ0FBQyxDQUFDO0FBQ3BFLGFBQUksUUFBUSxHQUFHLFlBQVksRUFDekIsUUFBUSxHQUFHLFlBQVksQ0FBQztBQUMxQixlQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ3RELGFBQUksQ0FBQyxRQUFRLENBQUM7QUFDWixlQUFJLEVBQUUsTUFBTTtBQUNaLDBCQUFlLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRTtBQUNoRCxtQkFBUSxFQUFSLFFBQVE7VUFDVCxDQUFDLENBQUM7UUFDSixNQUFNO0FBQ0wsZUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDMUIsYUFBSSxDQUFDLFFBQVEsQ0FBQztBQUNaLGVBQUksRUFBRSxNQUFNO0FBQ1osMEJBQWUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFO1VBQ2pELENBQUMsQ0FBQztRQUNKO0FBQ0QsV0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUU7QUFDckMsYUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hEO01BRUY7OztZQUVlLDBCQUFDLFNBQVMsRUFBRTtBQUMxQixXQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM3QixXQUFJLE1BQU0sYUFBQztBQUNYLFdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUU7YUFDakIsV0FBVyxHQUFLLElBQUksQ0FBQyxLQUFLLENBQTFCLFdBQVc7O0FBQ25CLGVBQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDaEQsTUFBTTtBQUNMLGVBQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzNCO0FBQ0QsV0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLHlCQUF5QixFQUFFLENBQUMsQ0FBQztBQUM1QyxXQUFJLENBQUMsUUFBUSxDQUFDO0FBQ1osYUFBSSxFQUFFLE1BQU07QUFDWixpQkFBUSxFQUFFLENBQUM7UUFDWixDQUFDLENBQUM7TUFDSjs7O1lBRWMsMkJBQUc7QUFDaEIsV0FBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO0FBQ3BELFdBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNkLFdBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFTLE1BQU0sRUFBRTtBQUN2QyxhQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLEtBQUssRUFBRTtBQUNqQyxlQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7VUFDbkM7UUFDRixDQUFDLENBQUM7QUFDSCx5Q0FBVSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7TUFDakQ7OztZQUVXLHNCQUFDLFVBQVUsRUFBRTtBQUN2QixXQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM5QixXQUFJLE1BQU0sYUFBQztBQUNYLFdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUU7YUFDakIsV0FBVyxHQUFLLElBQUksQ0FBQyxLQUFLLENBQTFCLFdBQVc7O0FBQ25CLGVBQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDaEQsTUFBTTtBQUNMLGVBQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzNCO0FBQ0QsV0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsRUFBRSxDQUFDLENBQUM7QUFDckYsV0FBSSxDQUFDLFFBQVEsQ0FBQztBQUNaLGFBQUksRUFBRSxNQUFNO0FBQ1osaUJBQVEsRUFBRSxDQUFDO1FBQ1osQ0FBQyxDQUFDO01BQ0o7OztZQUVlLDRCQUFHO0FBQ2pCLFdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUU7QUFDekIsYUFBSSxRQUFRLGFBQUM7QUFDYixhQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFO0FBQzdCLG1CQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1VBQy9DLE1BQU07QUFDTCxtQkFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7VUFDcEM7QUFDRCxnQkFDRTs7YUFBSyxTQUFTLEVBQUMseUJBQXlCO1dBQ3RDO0FBQ0UsZ0JBQUcsRUFBQyxZQUFZO0FBQ2hCLHFCQUFRLEVBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFVO0FBQ2hDLHVCQUFVLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7QUFDakQsd0JBQVcsRUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQWE7QUFDdEMsNEJBQWUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUFlLElBQUksbUJBQU0sa0JBQW1CO0FBQ2hGLDJCQUFjLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsY0FBYyxJQUFJLG1CQUFNLGVBQWdCO0FBQzNFLG1CQUFNLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFHO0FBQ2xDLHFCQUFRLEVBQUUsUUFBUztBQUNuQiw4QkFBaUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQkFBa0I7QUFDeEQsb0JBQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksbUJBQU0sUUFBUztBQUN0RCxxQkFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxtQkFBTSxTQUFVO0FBQ3pELHNCQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLG1CQUFNLFVBQVc7QUFDNUQscUJBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksbUJBQU0sU0FBVTthQUN6RDtVQUNFLENBQ047UUFDSDtBQUNELGNBQU8sSUFBSSxDQUFDO01BQ2I7OztZQUVZLHlCQUFHO0FBQ2QsV0FBSSxzQkFBc0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQztBQUMzRixXQUFJLHNCQUFzQixJQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRTtBQUMzQixhQUFJLE9BQU8sYUFBQztBQUNaLGFBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQ3RDLGtCQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsTUFBTSxFQUFFO0FBQ2xELGlCQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ3pCLG9CQUFPO0FBQ0wsbUJBQUksRUFBRSxLQUFLLENBQUMsUUFBUTtBQUNwQixvQkFBSyxFQUFFLEtBQUssQ0FBQyxTQUFTOztBQUV0Qix3QkFBUyxFQUFFLEtBQUssQ0FBQyxTQUFTLElBQUksS0FBSzs7QUFFbkMsdUJBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxJQUFLLE9BQU8sS0FBSyxDQUFDLFFBQVEsS0FBSyxVQUFXLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLEtBQUssQ0FBQyxRQUFRO0FBQ3RHLHFCQUFNLEVBQUUsS0FBSyxDQUFDLFVBQVUsR0FBRyxVQUFTLEtBQUssRUFBQztBQUN4Qyx3QkFBTyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ2xGLEdBQUcsS0FBSztjQUNWLENBQUM7WUFDSCxDQUFDLENBQUM7VUFDSixNQUFNO0FBQ0wsa0JBQU8sR0FBRyxDQUFDO0FBQ1QsaUJBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUTtBQUN4QyxrQkFBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTO0FBQzFDLHFCQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVE7WUFDN0MsQ0FBQyxDQUFDO1VBQ0o7QUFDRCxnQkFDRTs7YUFBSyxTQUFTLEVBQUMsVUFBVTtXQUN2QjtBQUNFLHdCQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBWTtBQUM1Qyx5QkFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBVTtBQUNuQyx5QkFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBVTtBQUNuQyx5QkFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTztBQUNoQyw0QkFBZSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBVTtBQUN0QyxtQ0FBc0IsRUFBRSxzQkFBdUI7QUFDL0Msb0JBQU8sRUFBRSxPQUFRO0FBQ2pCLDhCQUFpQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWtCO0FBQ2hELHFCQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFO0FBQ3ZDLDBCQUFhLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7QUFDakQsc0JBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7QUFDekMscUJBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7QUFDdkMsd0JBQVcsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7QUFDN0MsK0JBQWtCLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7YUFDM0Q7VUFDRSxDQUNQO1FBQ0YsTUFBTTtBQUNMLGdCQUFPLElBQUksQ0FBQztRQUNiO01BQ0Y7OztZQUVnQiwyQkFBQyxPQUFPLEVBQUU7QUFDekIsV0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRTtBQUMzQixnQkFDRSw2REFBYSxPQUFPLEVBQUUsT0FBUTtBQUNqQix3QkFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUs7QUFDekMsbUJBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRSxHQUFFLENBQzFEO1FBQ0gsTUFBTTtBQUNMLGdCQUFPLElBQUksQ0FBQztRQUNiO01BQ0Y7OztVQTVvQkcsY0FBYztJQUFTLG1CQUFNLFNBQVM7O0FBOHBCNUMsZUFBYyxDQUFDLFNBQVMsR0FBRztBQUN6QixXQUFRLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07QUFDaEMsU0FBTSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNO0FBQzlCLFlBQVMsRUFBRSxtQkFBTSxTQUFTLENBQUMsTUFBTTtBQUNqQyxPQUFJLEVBQUUsbUJBQU0sU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLG1CQUFNLFNBQVMsQ0FBQyxLQUFLLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2hGLFNBQU0sRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUM1QixVQUFPLEVBQUUsbUJBQU0sU0FBUyxDQUFDLElBQUk7QUFDN0IsV0FBUSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0FBQzlCLFFBQUssRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUMzQixZQUFTLEVBQUUsbUJBQU0sU0FBUyxDQUFDLElBQUk7QUFDL0IsYUFBVSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0FBQ2hDLG9CQUFpQixFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNO0FBQ3pDLFlBQVMsRUFBRSxtQkFBTSxTQUFTLENBQUMsS0FBSyxDQUFDO0FBQy9CLFNBQUksRUFBRSxtQkFBTSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQzFCLG1CQUFNLGVBQWUsRUFDckIsbUJBQU0saUJBQWlCLEVBQ3ZCLG1CQUFNLGdCQUFnQixDQUN2QixDQUFDO0FBQ0YsWUFBTyxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNO0FBQy9CLGFBQVEsRUFBRSxtQkFBTSxTQUFTLENBQUMsS0FBSztBQUMvQixhQUFRLEVBQUUsbUJBQU0sU0FBUyxDQUFDLElBQUk7QUFDOUIsZ0JBQVcsRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUNqQyxrQkFBYSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0FBQ25DLHFCQUFnQixFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0FBQ3RDLDZCQUF3QixFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0FBQzlDLHFCQUFnQixFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0lBQ3ZDLENBQUM7QUFDRixXQUFRLEVBQUUsbUJBQU0sU0FBUyxDQUFDLEtBQUssQ0FBQztBQUM5QixTQUFJLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07QUFDNUIsZUFBVSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0FBQ2hDLGtCQUFhLEVBQUUsbUJBQU0sU0FBUyxDQUFDLElBQUk7SUFDcEMsQ0FBQztBQUNGLFlBQVMsRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUMvQixZQUFTLEVBQUUsbUJBQU0sU0FBUyxDQUFDLElBQUk7QUFDL0IsU0FBTSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0FBQzVCLGVBQVksRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUNsQyxjQUFXLEVBQUUsbUJBQU0sU0FBUyxDQUFDLEdBQUc7QUFDaEMsVUFBTyxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxLQUFLLENBQUM7QUFDN0IsZ0JBQVcsRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUNqQyxhQUFRLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07QUFDaEMsY0FBUyxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNO0FBQ2pDLHVCQUFrQixFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0FBQ3hDLG1CQUFjLEVBQUUsbUJBQU0sU0FBUyxDQUFDLElBQUk7QUFDcEMsbUJBQWMsRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUNwQyxnQkFBVyxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0FBQ2pDLHNCQUFpQixFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0FBQ3ZDLGVBQVUsRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUNoQyxTQUFJLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07QUFDNUIsb0JBQWUsRUFBRSxtQkFBTSxTQUFTLENBQUMsS0FBSztBQUN0QyxnQkFBVyxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNO0FBQ25DLG1CQUFjLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07QUFDdEMsaUJBQVksRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUNsQyxpQkFBWSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0FBQ2xDLHNCQUFpQixFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0FBQ3ZDLGVBQVUsRUFBRSxtQkFBTSxTQUFTLENBQUMsTUFBTTtBQUNsQywyQkFBc0IsRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUM1QyxZQUFPLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07QUFDL0IsYUFBUSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNO0FBQ2hDLGNBQVMsRUFBRSxtQkFBTSxTQUFTLENBQUMsTUFBTTtBQUNqQyxhQUFRLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07SUFDakMsQ0FBQztBQUNGLFlBQVMsRUFBRSxtQkFBTSxTQUFTLENBQUMsS0FBSyxDQUFDO0FBQy9CLGtCQUFhLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07SUFDdEMsQ0FBQztBQUNGLFlBQVMsRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUMvQixjQUFXLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07RUFDcEMsQ0FBQztBQUNGLGVBQWMsQ0FBQyxZQUFZLEdBQUc7QUFDNUIsU0FBTSxFQUFFLE1BQU07QUFDZCxZQUFTLEVBQUUsU0FBUztBQUNwQixVQUFPLEVBQUUsS0FBSztBQUNkLFdBQVEsRUFBRSxJQUFJO0FBQ2QsUUFBSyxFQUFFLEtBQUs7QUFDWixZQUFTLEVBQUUsS0FBSztBQUNoQixhQUFVLEVBQUUsS0FBSztBQUNqQixvQkFBaUIsRUFBRSxTQUFTO0FBQzVCLFlBQVMsRUFBRTtBQUNULFNBQUksRUFBRSxtQkFBTSxlQUFlO0FBQzNCLFlBQU8sRUFBRSxtQkFBTSxtQkFBbUI7QUFDbEMsYUFBUSxFQUFFLEVBQUU7QUFDWixhQUFRLEVBQUUsU0FBUztBQUNuQixnQkFBVyxFQUFFLFNBQVM7QUFDdEIsa0JBQWEsRUFBRSxLQUFLO0FBQ3BCLHFCQUFnQixFQUFFLEtBQUs7QUFDdkIsNkJBQXdCLEVBQUUsS0FBSztBQUMvQixxQkFBZ0IsRUFBRSxLQUFLO0lBQ3hCO0FBQ0QsV0FBUSxFQUFFO0FBQ1IsU0FBSSxFQUFFLG1CQUFNLGNBQWM7QUFDMUIsZUFBVSxFQUFFLEtBQUs7QUFDakIsa0JBQWEsRUFBRSxTQUFTO0lBQ3pCO0FBQ0QsWUFBUyxFQUFFLEtBQUs7QUFDaEIsWUFBUyxFQUFFLEtBQUs7QUFDaEIsU0FBTSxFQUFFLEtBQUs7QUFDYixvQkFBaUIsRUFBRSxLQUFLO0FBQ3hCLGVBQVksRUFBRSxLQUFLO0FBQ25CLGNBQVcsRUFBRSxFQUFFO0FBQ2YsVUFBTyxFQUFFO0FBQ1AsZ0JBQVcsRUFBRSxLQUFLO0FBQ2xCLGFBQVEsRUFBRSxTQUFTO0FBQ25CLGNBQVMsRUFBRSxTQUFTO0FBQ3BCLHVCQUFrQixFQUFFLFNBQVM7QUFDN0IsbUJBQWMsRUFBRSxTQUFTO0FBQ3pCLG1CQUFjLEVBQUUsU0FBUztBQUN6QixnQkFBVyxFQUFFLFNBQVM7QUFDdEIsc0JBQWlCLEVBQUUsU0FBUztBQUM1QixlQUFVLEVBQUUsU0FBUztBQUNyQixpQkFBWSxFQUFFLFNBQVM7QUFDdkIsaUJBQVksRUFBRSxTQUFTO0FBQ3ZCLGtCQUFhLEVBQUUsU0FBUztBQUN4QixtQkFBYyxFQUFFLFNBQVM7QUFDekIsU0FBSSxFQUFFLFNBQVM7QUFDZixvQkFBZSxFQUFFLG1CQUFNLGtCQUFrQjtBQUN6QyxnQkFBVyxFQUFFLFNBQVM7QUFDdEIsbUJBQWMsRUFBRSxtQkFBTSxlQUFlO0FBQ3JDLHNCQUFpQixFQUFFLFNBQVM7QUFDNUIsZUFBVSxFQUFFLFNBQVM7QUFDckIsMkJBQXNCLEVBQUUsU0FBUztBQUNqQyxZQUFPLEVBQUUsbUJBQU0sUUFBUTtBQUN2QixhQUFRLEVBQUUsbUJBQU0sU0FBUztBQUN6QixjQUFTLEVBQUUsbUJBQU0sVUFBVTtBQUMzQixhQUFRLEVBQUUsbUJBQU0sU0FBUztJQUMxQjtBQUNELFlBQVMsRUFBRTtBQUNULGtCQUFhLEVBQUUsQ0FBQztJQUNqQjtBQUNELFlBQVMsRUFBRSxLQUFLO0FBQ2hCLGNBQVcsRUFBRSxTQUFTO0VBQ3ZCLENBQUM7O3NCQUVhLGNBQWM7Ozs7Ozs7QUM3eUI3QixnRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWdCOztBQUVoQjtBQUNBOztBQUVBLGtCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7Ozs7Ozs7c0JDL0NjO0FBQ2IsWUFBUyxFQUFFLE1BQU07QUFDakIsV0FBUSxFQUFFLEtBQUs7QUFDZixnQkFBYSxFQUFFLEVBQUU7QUFDakIsWUFBUyxFQUFFLEdBQUc7QUFDZCxZQUFTLEVBQUUsSUFBSTtBQUNmLFdBQVEsRUFBRSxHQUFHO0FBQ2IsYUFBVSxFQUFFLElBQUk7QUFDaEIsc0JBQW1CLEVBQUUsRUFBRTtBQUN2QixrQkFBZSxFQUFFLE1BQU07QUFDdkIsb0JBQWlCLEVBQUUsT0FBTztBQUMxQixtQkFBZ0IsRUFBRSxVQUFVO0FBQzVCLGlCQUFjLEVBQUUsTUFBTTtBQUN0QixrQkFBZSxFQUFFLE9BQU87QUFDeEIsb0JBQWlCLEVBQUUsU0FBUztBQUM1QixxQkFBa0IsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUNwQyxrQkFBZSxFQUFFLENBQUM7QUFDbEIsZUFBWSxFQUFFLDZCQUE2QjtBQUMzQyxtQkFBZ0IsRUFBRSxvQkFBb0I7QUFDdEMsV0FBUSxFQUFFLFVBQVU7QUFDcEIsZUFBWSxFQUFFLEdBQUc7QUFDakIsY0FBVyxFQUFFO0FBQ1gsU0FBSSxFQUFFLFlBQVk7QUFDbEIsV0FBTSxFQUFFLGNBQWM7QUFDdEIsV0FBTSxFQUFFLGNBQWM7QUFDdEIsU0FBSSxFQUFFLFlBQVk7QUFDbEIsV0FBTSxFQUFFLGNBQWM7SUFDdkI7RUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDNUJpQixDQUFPOzs7O3FDQUNKLENBQVc7Ozs7a0NBQ2QsQ0FBUzs7OztpQ0FDVixDQUFROzs7O3VDQUNKLENBQVk7Ozs7a0RBQ0MsQ0FBeUI7Ozs7S0FFckQsUUFBUTthQUFSLFFBQVE7O1lBQVIsUUFBUTsyQkFBUixRQUFROztnQ0FBUixRQUFROzs7Z0JBQVIsUUFBUTs7WUFDSyw2QkFBRztBQUFFLFdBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztNQUFFOzs7WUFDL0IsbUNBQUMsS0FBSyxFQUFFO0FBQUUsV0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7TUFBRTs7O1lBQzFELGdCQUFDLE9BQU8sRUFBRTtBQUNkLDZCQUFTLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLEdBQUcsT0FBTyxLQUFLLGVBQWUsQ0FBQztNQUN4RTs7O1lBRUssa0JBQUc7QUFDUCxjQUFPLDRDQUFPLFNBQVMsRUFBQyxxQkFBcUIsRUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQVEsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFTLEdBQUc7TUFDN0g7OztVQVRHLFFBQVE7SUFBUyxtQkFBTSxTQUFTOztLQVloQyxXQUFXO2FBQVgsV0FBVzs7QUFFSixZQUZQLFdBQVcsQ0FFSCxLQUFLLEVBQUU7MkJBRmYsV0FBVzs7QUFHYixnQ0FIRSxXQUFXLDZDQUdQLEtBQUssRUFBRTtBQUNiLFNBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7SUFDbEM7O2dCQUxHLFdBQVc7O1lBT1Qsa0JBQUU7QUFDTixXQUFJLGdCQUFnQixHQUFHLDZCQUFTLGNBQWMsQ0FBQyxDQUFDO0FBQ2hELFdBQUksWUFBWSxHQUFHLDZCQUFTLE9BQU8sRUFBRSxhQUFhLEVBQUU7QUFDaEQseUJBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO0FBQ3JDLDBCQUFpQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUztRQUMxQyxDQUFDLENBQUM7QUFDSCxXQUFJLGtCQUFrQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEdBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0FBQ3ZGLFdBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDOztBQUVqQyxjQUNFOztXQUFLLFNBQVMsRUFBQyxzQkFBc0I7U0FDbkM7O2FBQUssR0FBRyxFQUFDLFdBQVcsRUFBQyxTQUFTLEVBQUUsZ0JBQWlCO1dBQy9DOztlQUFPLFNBQVMsRUFBRSxZQUFhO2FBQzdCOzs7ZUFDRTs7bUJBQUksR0FBRyxFQUFDLFFBQVE7aUJBQ2Isa0JBQWtCO2lCQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7Z0JBQ2pCO2NBQ0M7WUFDRjtVQUNKO1FBQ0YsQ0FDUDtNQUNGOzs7WUFFb0IsaUNBQUU7QUFDckIsV0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsSUFBSSxtQkFBTSxpQkFBaUIsRUFBRTtBQUN0RCxnQkFBUSx1RUFBdUIsS0FBSyxFQUFFLElBQUksQ0FBQyxvQkFBcUIsR0FBeUIsQ0FBRTtRQUM1RixNQUFLLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLElBQUksbUJBQU0sZ0JBQWdCLEVBQUM7QUFDMUQsZ0JBQVE7O2FBQXVCLEtBQUssRUFBRSxJQUFJLENBQUMsb0JBQXFCO1dBQzVELGlDQUFDLFFBQVEsSUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFlLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBWSxHQUFFO1VBQzNELENBQ3hCO1FBQ0gsTUFBSTtBQUNILGdCQUFPLElBQUksQ0FBQztRQUNiO01BQ0Y7OztZQUV3QixxQ0FBRTtBQUN6QixXQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBQztBQUNwQyxjQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDO0FBQzNDLGVBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7QUFDckQsZUFBTSxJQUFJLEdBQUcsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztBQUM5RSxlQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FDcEIsbUJBQU0sWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUN2QyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksRUFBSixJQUFJLEVBQUUsQ0FBQyxDQUFDO1VBQ2xEO1FBQ0YsTUFBTTtBQUNMLGFBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7QUFDbEQsYUFBTSxJQUFJLEdBQUcsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztBQUM5RSxhQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FDakIsbUJBQU0sWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFKLElBQUksRUFBQyxDQUFDLENBQUM7UUFDdEY7TUFDRjs7O1lBRVEsbUJBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDO0FBQ3pDLFdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFDO0FBQ3BDLGFBQUksYUFBYSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLElBQUksbUJBQU0saUJBQWlCLElBQ2hELElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxJQUFJLG1CQUFNLGdCQUFnQixLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLEdBQUMsQ0FBQyxDQUFDO0FBQ2xILGFBQUcsYUFBYSxJQUFJLENBQUMsRUFDbkIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDbkQsY0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQztBQUMzQyxlQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FDcEIsbUJBQU0sWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDLEdBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxHQUFDLElBQUksRUFBQyxDQUFDLENBQUM7VUFDaEc7UUFDRixNQUFNO0FBQ0wsYUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQ2pCLG1CQUFNLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFDLElBQUksRUFBQyxDQUFDLENBQUM7UUFDL0U7QUFDRCxXQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUU7QUFDakQsYUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDM0M7QUFDRCxXQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDbkIsV0FBRyxtQkFBbUIsRUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxrQkFBSyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQztNQUMzRTs7O1VBbEZHLFdBQVc7SUFBUyxtQkFBTSxTQUFTOztBQW9GekMsWUFBVyxDQUFDLFNBQVMsR0FBRztBQUN0QixnQkFBYSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNO0FBQ3JDLFNBQU0sRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUM1QixpQkFBYyxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0FBQ3BDLFdBQVEsRUFBRSxtQkFBTSxTQUFTLENBQUMsTUFBTTtBQUNoQyxZQUFTLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07QUFDakMsbUJBQWdCLEVBQUUsbUJBQU0sU0FBUyxDQUFDLElBQUk7QUFDdEMsV0FBUSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0FBQzlCLFlBQVMsRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUMvQixhQUFVLEVBQUUsbUJBQU0sU0FBUyxDQUFDLElBQUk7QUFDaEMsY0FBVyxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO0VBQ25FLENBQUM7O0FBRUYsWUFBVyxDQUFDLFlBQVksR0FBRyxFQUMxQixDQUFDO3NCQUNhLFdBQVc7Ozs7Ozs7QUN0SDFCLGdEOzs7Ozs7Ozs7Ozs7OztrQ0NBa0IsQ0FBTzs7OztrQ0FDUCxDQUFTOzs7O3VDQUNOLENBQVk7Ozs7c0JBQ2xCOztBQUViLGtCQUFlLDJCQUFDLEtBQUssRUFBRTtBQUNyQixTQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzFDLFNBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO0FBQ3pCLFNBQUcsS0FBSyxJQUFJLG1CQUFNLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQztBQUN4RCxTQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNDLFVBQUssQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO0FBQzFCLFVBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztBQUNoQyxTQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3hCLFlBQU8sSUFBSSxDQUFDO0lBQ2I7O0FBRUQsdUJBQW9CLGdDQUFDLEtBQUssRUFBQztBQUN6QixTQUFJLFVBQVUsR0FBRyw2QkFBUyxPQUFPLEVBQUU7QUFDakMsZUFBUSxFQUFFLEtBQUssSUFBSSxtQkFBTSxRQUFRO01BQ2xDLENBQUMsQ0FBQztBQUNILFlBQ0U7O1NBQU0sU0FBUyxFQUFFLFVBQVc7T0FDMUIsMkNBQU0sU0FBUyxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQVE7TUFDdkQsQ0FDUDtJQUNIOztBQUVELG9CQUFpQiwrQkFBRTtBQUNqQixTQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3hDLFVBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztBQUMzQixVQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7O0FBRTdCLFNBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDMUMsVUFBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0FBQ2xDLFVBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztBQUN4QixVQUFLLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7QUFDekIsVUFBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO0FBQ2xDLFVBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztBQUM1QixVQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7QUFDN0IsVUFBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQ2hDLFVBQUssQ0FBQyxXQUFXLENBQUUsS0FBSyxDQUFDLENBQUM7O0FBRTFCLGFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2xDLFNBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7QUFDM0IsVUFBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQ2hDLFNBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7QUFDM0IsU0FBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOztBQUVyQyxhQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBRSxLQUFLLENBQUMsQ0FBQzs7QUFFbEMsWUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFFO0lBQ2xCOztFQUVGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0NyRGlCLENBQU87Ozs7dUNBQ0osQ0FBWTs7OztrQ0FDZixDQUFTOzs7O0tBRXJCLHFCQUFxQjthQUFyQixxQkFBcUI7O1lBQXJCLHFCQUFxQjsyQkFBckIscUJBQXFCOztnQ0FBckIscUJBQXFCOzs7Z0JBQXJCLHFCQUFxQjs7WUFFbkIsa0JBQUU7QUFDTixXQUFJLE9BQU8sR0FBRztBQUNaLGNBQUssRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBQyxFQUFFO1FBQ3RELENBQUM7O0FBRUYsY0FDRTs7V0FBSSxLQUFLLEVBQUUsT0FBUTtTQUNqQjs7YUFBSyxTQUFTLEVBQUMsOEJBQThCO1dBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtVQUNoQjtRQUNILENBQ047TUFDRjs7O1VBZEcscUJBQXFCO0lBQVMsbUJBQU0sU0FBUzs7c0JBaUJwQyxxQkFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ3JCbEIsQ0FBTzs7OztrQ0FDUCxDQUFTOzs7O2lDQUNWLENBQVE7Ozs7cUNBQ0osRUFBWTs7Ozt3Q0FDVCxFQUFlOzs7OzRDQUNYLEVBQW1COzs7O3VDQUMxQixDQUFZOzs7O0FBRWpDLEtBQUksS0FBSyxHQUFDLFNBQU4sS0FBSyxDQUFVLEdBQUcsRUFBQztBQUNyQixVQUFPLEdBQUcsSUFBRyxPQUFPLEdBQUcsS0FBRyxVQUFXLENBQUM7RUFFdkMsQ0FBQzs7S0FDSSxTQUFTO2FBQVQsU0FBUzs7QUFFRixZQUZQLFNBQVMsQ0FFRCxLQUFLLEVBQUU7MkJBRmYsU0FBUzs7QUFHWCxnQ0FIRSxTQUFTLDZDQUdMLEtBQUssRUFBRTtBQUNiLFNBQUksQ0FBQyxLQUFLLEdBQUc7QUFDWCxtQkFBWSxFQUFFLElBQUk7TUFDbkIsQ0FBQztBQUNGLFNBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3RCOztnQkFSRyxTQUFTOztZQVVJLDZCQUFFO0FBQ2pCLFdBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztNQUNuQjs7O1lBRWlCLDhCQUFFO0FBQ2xCLFdBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztNQUNuQjs7O1lBRUssa0JBQUU7QUFDTixXQUFJLGdCQUFnQixHQUFHLDZCQUFTLGlCQUFpQixDQUFDLENBQUM7O0FBRW5ELFdBQUksWUFBWSxHQUFHLDZCQUFTLE9BQU8sRUFBRTtBQUNuQyx3QkFBZSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTztBQUNuQyx5QkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7QUFDckMsc0JBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7QUFDL0IsMEJBQWlCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTO1FBQ3hDLENBQUMsQ0FBQzs7QUFFSCxXQUFJLGtCQUFrQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0FBQ3BELFdBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDOztBQUU3RCxXQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBUyxJQUFJLEVBQUUsQ0FBQyxFQUFDO0FBQ25ELGFBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFTLE1BQU0sRUFBRSxDQUFDLEVBQUM7QUFDM0QsZUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNuQyxlQUFHLElBQUksQ0FBQyxPQUFPLElBQ2IsTUFBTSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7QUFDbkMsaUJBQU0sQ0FBQyxRQUFRO0FBQ2YsZUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLElBQUksSUFBSSxJQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFDO0FBQy9CLGlCQUFJLE1BQU0sR0FBQyxNQUFNLENBQUMsTUFBTSxHQUFDLFVBQVMsS0FBSyxFQUFDO0FBQ3RDLHNCQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBQyxFQUFFLENBQUMsQ0FBQztjQUNoRixHQUFDLEtBQUssQ0FBQzs7QUFFVixvQkFDSTs7aUJBQWlCLFlBQVksRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRTs7QUFFckQseUJBQVEsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUMsTUFBTSxDQUFDLFFBQVM7QUFDdEYsdUJBQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxHQUFDLE1BQU0sR0FBQyxLQUFNO0FBQ25DLG9CQUFHLEVBQUUsQ0FBRTtBQUNQLDJCQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVztBQUMzQyx5QkFBUSxFQUFFLENBQUU7QUFDWix5QkFBUSxFQUFFLENBQUU7ZUFDMUIsVUFBVTtjQUNLLENBQ25CO1lBQ0osTUFBSzs7QUFFSixpQkFBSSxXQUFXLEdBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7O0FBRS9GLGlCQUFHLE9BQU8sTUFBTSxDQUFDLE1BQU0sS0FBSyxXQUFXLEVBQUM7QUFDdEMsbUJBQUksY0FBYyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDN0UsbUJBQUksQ0FBQyxtQkFBTSxjQUFjLENBQUMsY0FBYyxDQUFDLEVBQUU7QUFDekMsK0JBQWMsR0FBRywwQ0FBSyx1QkFBdUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUUsR0FBTyxDQUFDO2dCQUNqRjtBQUNELHNCQUNFOzttQkFBYSxTQUFTLEVBQUUsTUFBTSxDQUFDLEtBQU07QUFDeEIsc0JBQUcsRUFBRSxDQUFFO0FBQ1AsNEJBQVMsRUFBRSxXQUFZO0FBQ3ZCLDJCQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFTO0FBQzlCLHlCQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU87QUFDdEIseUJBQU0sRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7QUFDdkMsd0JBQUssRUFBRSxNQUFNLENBQUMsS0FBTTtpQkFDOUIsY0FBYztnQkFDSCxDQUNmO2NBQ0YsTUFBSztBQUNKLHNCQUNFOzttQkFBYSxTQUFTLEVBQUUsTUFBTSxDQUFDLEtBQU07QUFDeEIsc0JBQUcsRUFBRSxDQUFFO0FBQ1AsNEJBQVMsRUFBRSxXQUFZO0FBQ3ZCLDJCQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFTO0FBQzlCLHlCQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU87QUFDdEIseUJBQU0sRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7QUFDdkMsd0JBQUssRUFBRSxNQUFNLENBQUMsS0FBTTtpQkFDOUIsVUFBVTtnQkFDQyxDQUNmO2NBQ0Y7WUFDRjtVQUNGLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDVCxhQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNuRixhQUFJLGVBQWUsR0FBRyxrQkFBa0IsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLGdCQUFnQixHQUMxRCxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLEdBQUMsSUFBSSxDQUFDOztBQUVsRSxhQUFJLFdBQVcsR0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7QUFDcEcsZ0JBQ0U7O2FBQVUsVUFBVSxFQUFFLFFBQVMsRUFBQyxHQUFHLEVBQUUsQ0FBRSxFQUFDLFNBQVMsRUFBRSxXQUFZO0FBQzdELHNCQUFTLEVBQUUsa0JBQWtCLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUMsU0FBVTtBQUM3RCwyQkFBYyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxtQkFBTSxjQUFlO0FBQ2xFLHVCQUFVLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFO0FBQzNDLDJCQUFjLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7QUFDbkQsMEJBQWEsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRTtBQUNqRCx3QkFBVyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRTtXQUM1QyxlQUFlO1dBQ2YsWUFBWTtVQUNKLENBQ1o7UUFDRixFQUFFLElBQUksQ0FBQyxDQUFDOztBQUVULFdBQUcsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUM7QUFDeEIsa0JBQVMsQ0FBQyxJQUFJLENBQ2Q7O2FBQVUsR0FBRyxFQUFDLGlCQUFpQjtXQUM3Qjs7ZUFBSSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFFLGtCQUFrQixHQUFDLENBQUMsR0FBQyxDQUFDLENBQUU7QUFDNUQsd0JBQVMsRUFBQyx3QkFBd0I7YUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLElBQUUsbUJBQU0sWUFBWTtZQUN6QztVQUNJLENBQUMsQ0FBQztRQUNkOztBQUVELFdBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDOztBQUVyQixXQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7QUFFeEQsY0FDRTs7V0FBSyxHQUFHLEVBQUMsV0FBVyxFQUFDLFNBQVMsRUFBRSxnQkFBaUIsRUFBQyxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFFO1NBQ3hFOzthQUFPLEdBQUcsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFFLFlBQWE7V0FDdkMsV0FBVztXQUNaOzs7YUFDRyxTQUFTO1lBQ0o7VUFDRjtRQUNKLENBQ1A7TUFDRjs7O1lBRWdCLDJCQUFDLGtCQUFrQixFQUFDO0FBQ25DLFdBQUksZUFBZSxHQUFHLElBQUksQ0FBQzs7QUFFM0IsV0FBRyxrQkFBa0IsRUFBQztBQUNwQixhQUFJLEtBQUssR0FBRztBQUNWLGdCQUFLLEVBQUMsRUFBRTtBQUNSLG1CQUFRLEVBQUMsRUFBRTtVQUNaO0FBQ0Qsd0JBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBQyxJQUFJLEdBQUUseUNBQUksS0FBSyxFQUFFLEtBQU0sRUFBQyxHQUFHLEVBQUUsQ0FBQyxDQUFFLEdBQU8sQ0FBQztRQUNqRztBQUNELFdBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFTLE1BQU0sRUFBRSxDQUFDLEVBQUM7QUFDdEQsYUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssSUFBSSxJQUFJLEdBQUMsTUFBTSxDQUFDLEtBQUssR0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3JFLGFBQUksS0FBSyxHQUFDO0FBQ1Isa0JBQU8sRUFBRSxNQUFNLENBQUMsTUFBTSxHQUFDLE1BQU0sR0FBQyxJQUFJO0FBQ2xDLGdCQUFLLEVBQUUsS0FBSztBQUNaLG1CQUFRLEVBQUUsS0FBSzs7VUFFaEIsQ0FBQztBQUNGLGFBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUUsa0JBQUssb0JBQW9CLENBQUMsbUJBQU0sU0FBUyxDQUFDLEdBQUUsSUFBSSxDQUFDO0FBQzlFLGdCQUFROzthQUFJLEtBQUssRUFBRSxLQUFNLEVBQUMsR0FBRyxFQUFFLENBQUUsRUFBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVU7V0FBRSxNQUFNLENBQUMsSUFBSTtXQUFFLFNBQVM7VUFBTSxDQUFFO1FBQy9GLENBQUMsQ0FBQzs7QUFFSCxjQUNFOztXQUFPLEdBQUcsRUFBQyxRQUFRO1NBQ2pCOzs7V0FBSyxlQUFlO1dBQUUsT0FBTztVQUFNO1FBQzdCLENBQ1Q7TUFDRjs7O1lBRWdCLDJCQUFDLFFBQVEsRUFBQztBQUN6QixXQUFJLEdBQUcsRUFBRSxXQUFXLENBQUM7QUFDckIsV0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVMsR0FBRyxFQUFFLENBQUMsRUFBQztBQUN0QyxhQUFHLENBQUMsSUFBSSxRQUFRLEdBQUMsQ0FBQyxFQUFDO0FBQ2pCLGNBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQixzQkFBVyxHQUFHLEdBQUcsQ0FBQztVQUNuQjtRQUNGLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDVCxXQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztNQUN2Qzs7O1lBRWlCLDRCQUFDLFFBQVEsRUFBQztBQUMxQixXQUFJLEdBQUcsRUFBRSxXQUFXLENBQUM7QUFDckIsV0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVMsR0FBRyxFQUFFLENBQUMsRUFBQztBQUN0QyxhQUFHLENBQUMsSUFBSSxRQUFRLEdBQUMsQ0FBQyxFQUFDO0FBQ2pCLGNBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQixzQkFBVyxHQUFHLEdBQUcsQ0FBQztVQUNuQjtRQUNGLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDVCxXQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztNQUN4Qzs7O1lBRWEsd0JBQUMsUUFBUSxFQUFDO0FBQ3RCLFdBQUksR0FBRyxFQUFFLFdBQVcsQ0FBQztBQUNyQixXQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBUyxHQUFHLEVBQUUsQ0FBQyxFQUFDO0FBQ3RDLGFBQUcsQ0FBQyxJQUFJLFFBQVEsR0FBQyxDQUFDLEVBQUM7QUFDakIsY0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQy9CLHNCQUFXLEdBQUcsR0FBRyxDQUFDO1VBQ25CO1FBQ0YsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNULFdBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO01BQ3BDOzs7WUFFYyx5QkFBQyxRQUFRLEVBQUUsVUFBVSxFQUFDO0FBQ25DLFdBQUksR0FBRyxFQUFFLFdBQVcsQ0FBQztBQUNyQixXQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBUyxHQUFHLEVBQUUsQ0FBQyxFQUFDO0FBQ3RDLGFBQUcsQ0FBQyxJQUFJLFFBQVEsR0FBQyxDQUFDLEVBQUM7QUFDakIsY0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQy9CLHNCQUFXLEdBQUcsR0FBRyxDQUFDO0FBQ2xCLGtCQUFPLEtBQUssQ0FBQztVQUNkO1FBQ0YsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNULFdBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQztNQUNqRDs7O1lBRXlCLG9DQUFDLENBQUMsRUFBQztBQUMzQixXQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsYUFBYSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsd0JBQXdCLEVBQUM7QUFDdkYsYUFBSSxDQUFDLGVBQWUsQ0FDbEIsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xGO01BQ0Y7OztZQUVhLHdCQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUM7QUFDbkMsV0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDcEIsV0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBQztBQUM1QixvQkFBVyxFQUFFLENBQUM7QUFDZCxhQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUN0QyxXQUFXLEVBQUUsQ0FBQztRQUNqQjtBQUNELGVBQVEsRUFBRSxDQUFDO0FBQ1gsV0FBSSxRQUFRLEdBQUc7QUFDYixxQkFBWSxFQUFFO0FBQ1osY0FBRyxFQUFFLFFBQVE7QUFDYixjQUFHLEVBQUUsV0FBVztVQUNqQjtRQUNGLENBQUM7O0FBRUYsV0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsRUFBQztBQUMvQyxhQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsR0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEM7QUFDRCxXQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO01BQ3pCOzs7WUFFUyxzQkFBRTtBQUNWLFdBQUksWUFBWSxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO0FBQ3pDLFdBQUcsWUFBWSxFQUFDO0FBQ2QsYUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBQyxZQUFZLENBQUMsR0FBRyxFQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyRTtNQUNGOzs7WUFFcUIsZ0NBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUM7QUFDbkQsV0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLFlBQVksRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO0FBQ3BDLFdBQUcsSUFBSSxJQUFJLE1BQU0sRUFDZixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO01BQ3pFOzs7WUFFb0IsK0JBQUMsUUFBUSxFQUFDO0FBQzdCLFdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLG1CQUFNLGlCQUFpQixFQUFFO0FBQ3ZELGdCQUFROzs7V0FBYSw0Q0FBTyxJQUFJLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxXQUFXLEVBQUMsT0FBTyxFQUFFLFFBQVMsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUUsR0FBRTtVQUFjLENBQUU7UUFDckosTUFBSztBQUNKLGdCQUFROzs7V0FBYyw0Q0FBTyxJQUFJLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBRSxRQUFTLEVBQUMsUUFBUSxFQUFFLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFLEdBQUU7VUFBYyxDQUFFO1FBQ3hJO01BQ0Y7OztZQUVtQixnQ0FBRTtBQUNwQixXQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO0FBQ3hELFdBQUksY0FBYyxHQUFHLEVBQUUsQ0FBQztBQUN4QixZQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsT0FBTyxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQztBQUMvQix1QkFBYyxDQUFDLElBQUksQ0FBQztBQUNsQixnQkFBSyxFQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXO1VBQzdCLENBQUMsQ0FBQztRQUNKO0FBQ0QsY0FBTyxjQUFjLENBQUM7TUFDdkI7OztZQUVTLHNCQUFHO0FBQ1gsV0FBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7QUFDMUIsV0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRTtBQUN2QixhQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUMxQzs7QUFFRCxXQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUNyQixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUU7QUFDbkUsYUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxFQUFFLEdBQUksSUFBSSxDQUFDO1FBQ3ZFO01BQ0Y7OztZQUVpQiw4QkFBRTtBQUNsQixXQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO0FBQ3hELFlBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxPQUFPLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDO0FBQy9CLGdCQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4RDtNQUNGOzs7WUFFdUIsb0NBQUU7QUFDeEIsV0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxNQUFNLEVBQUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUNyRDtBQUNGLGdCQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN6QztNQUNGOzs7WUFFa0IsK0JBQUU7QUFDbkIsY0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssbUJBQU0saUJBQWlCLElBQ3RELElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxtQkFBTSxnQkFBZ0IsQ0FBQztNQUM1RDs7O1VBM1NHLFNBQVM7SUFBUyxtQkFBTSxTQUFTOztBQTZTdkMsVUFBUyxDQUFDLFNBQVMsR0FBRztBQUNwQixTQUFNLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07QUFDOUIsT0FBSSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxLQUFLO0FBQzNCLFVBQU8sRUFBRSxtQkFBTSxTQUFTLENBQUMsS0FBSztBQUM5QixVQUFPLEVBQUUsbUJBQU0sU0FBUyxDQUFDLElBQUk7QUFDN0IsV0FBUSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0FBQzlCLFFBQUssRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUMzQixZQUFTLEVBQUUsbUJBQU0sU0FBUyxDQUFDLElBQUk7QUFDL0IsV0FBUSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNO0FBQ2hDLGtCQUFlLEVBQUUsbUJBQU0sU0FBUyxDQUFDLEtBQUs7QUFDdEMsYUFBVSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0FBQ2hDLGNBQVcsRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUNqQyxhQUFVLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07RUFDbkMsQ0FBQztzQkFDYSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ3ZVTixDQUFPOzs7O2tDQUNQLENBQVM7Ozs7S0FFckIsUUFBUTthQUFSLFFBQVE7O0FBRUQsWUFGUCxRQUFRLENBRUEsS0FBSyxFQUFFOzJCQUZmLFFBQVE7O0FBR1YsZ0NBSEUsUUFBUSw2Q0FHSixLQUFLLEVBQUU7QUFDYixTQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUNuQjs7Z0JBTEcsUUFBUTs7WUFPSixrQkFBQyxDQUFDLEVBQUM7OztBQUNULFdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQUssT0FBTyxJQUMzQixDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sS0FBSyxRQUFRLElBQzdCLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxLQUFLLFVBQVUsRUFBRTs7QUFDbkMsZUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7QUFDMUMsZUFBSSxNQUFLLEtBQUssQ0FBQyxTQUFTLEVBQUU7QUFDdEIsaUJBQUksTUFBSyxLQUFLLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRTtBQUN0QyxxQkFBSyxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQUssS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2NBQzFELE1BQU0sSUFBSSxNQUFLLEtBQUssQ0FBQyxTQUFTLENBQUMsd0JBQXdCLEVBQUU7QUFDeEQscUJBQUssUUFBUSxFQUFFLENBQUM7Ozs7O0FBS2hCLHlCQUFVLENBQUMsWUFBTTtBQUNmLHFCQUFHLE1BQUssUUFBUSxLQUFLLENBQUMsRUFBRTtBQUN0Qix5QkFBSyxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQUssS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2tCQUMxRDtBQUNELHVCQUFLLFFBQVEsR0FBRyxDQUFDLENBQUM7Z0JBQ25CLEVBQUUsR0FBRyxDQUFDLENBQUM7Y0FDVDtZQUNKO0FBQ0QsZUFBSSxNQUFLLEtBQUssQ0FBQyxVQUFVLEVBQUUsTUFBSyxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztRQUM1RDtNQUNGOzs7WUFFVSxxQkFBQyxDQUFDLEVBQUU7QUFDYixXQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFO0FBQzVCLGFBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEQ7TUFDRjs7O1lBRVcsc0JBQUMsQ0FBQyxFQUFFO0FBQ2QsV0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRTtBQUM3QixhQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JEO01BQ0Y7OztZQUVLLGtCQUFFO0FBQ04sV0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7QUFDbEIsV0FBSSxLQUFLLEdBQUM7QUFDUixjQUFLLEVBQUM7QUFDSiwwQkFBZSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBQyxJQUFJO1VBQ3pFO0FBQ0Qsa0JBQVMsRUFBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFFLEVBQUUsQ0FBQztRQUN2SSxDQUFDOztBQUVGLFdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsYUFBYSxJQUM1RCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFDO0FBQ3hFLGdCQUNFOzt3QkFBUSxLQUFLO0FBQ1Qsd0JBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7QUFDMUMsdUJBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7QUFDeEMsb0JBQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7V0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7VUFBTSxDQUNsRTtRQUNGLE1BQUk7QUFDSCxnQkFDRTs7V0FBUSxLQUFLO1dBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO1VBQU0sQ0FDMUM7UUFDRjtNQUNGOzs7VUFuRUcsUUFBUTtJQUFTLG1CQUFNLFNBQVM7O0FBcUV0QyxTQUFRLENBQUMsU0FBUyxHQUFHO0FBQ25CLGFBQVUsRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUNoQyxpQkFBYyxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0FBQ3BDLGFBQVUsRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUNoQyxjQUFXLEVBQUUsbUJBQU0sU0FBUyxDQUFDLElBQUk7RUFDbEMsQ0FBQztBQUNGLFNBQVEsQ0FBQyxZQUFZLEdBQUc7QUFDdEIsYUFBVSxFQUFFLFNBQVM7RUFDdEI7c0JBQ2MsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0NqRkwsQ0FBTzs7OztrQ0FDUCxDQUFTOzs7O0tBRXJCLFdBQVc7YUFBWCxXQUFXOztBQUVKLFlBRlAsV0FBVyxDQUVILEtBQUssRUFBRTsyQkFGZixXQUFXOztBQUdiLGdDQUhFLFdBQVcsNkNBR1AsS0FBSyxFQUFFO0lBQ2Q7O2dCQUpHLFdBQVc7O1lBTU0sK0JBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRTtXQUNsQyxRQUFRLEdBQUssSUFBSSxDQUFDLEtBQUssQ0FBdkIsUUFBUTs7QUFDaEIsV0FBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLEtBQUssSUFDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLFNBQVMsSUFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDLE1BQU0sSUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLFNBQVMsSUFDNUMsT0FBTyxRQUFRLEtBQUssT0FBTyxTQUFTLENBQUMsUUFBUSxJQUM3QyxDQUFDLEVBQUUsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsR0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRTs7QUFFM0UsV0FBRyxhQUFhLEVBQUM7QUFDZixnQkFBTyxhQUFhLENBQUM7UUFDdEI7O0FBRUQsV0FBRyxPQUFPLFFBQVEsS0FBSyxRQUFRLElBQUksUUFBUSxLQUFLLElBQUksRUFBRTtBQUNwRCxhQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLFVBQVUsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7QUFDeEUsd0JBQWEsR0FBRyxhQUFhLElBQzNCLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksSUFDckQsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1VBQy9ELE1BQU07QUFDTCx3QkFBYSxHQUFHLElBQUksQ0FBQztVQUN0QjtRQUNGLE1BQU07QUFDTCxzQkFBYSxHQUFHLGFBQWEsSUFBSSxRQUFRLEtBQUssU0FBUyxDQUFDLFFBQVEsQ0FBQztRQUNsRTs7QUFFRCxXQUFHLGFBQWEsRUFBQztBQUNmLGdCQUFPLGFBQWEsQ0FBQztRQUN0Qjs7QUFFRCxXQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQy9DLGdCQUFPLEtBQUssQ0FBQztRQUNkLE1BQU07QUFDTCxnQkFBTyxhQUFhLElBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQzNEO01BQ0Y7OztZQUVhLHdCQUFDLENBQUMsRUFBQztBQUNmLFdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLG1CQUFNLGlCQUFpQixFQUFDO0FBQ3JELGFBQUcsUUFBUSxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRTtBQUNqRCxtQkFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztVQUM1QixNQUFNLElBQUcsTUFBTSxDQUFDLFlBQVksRUFBRTtBQUMzQixlQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDaEMsY0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO1VBQ3pCO1FBQ0Y7QUFDRCxXQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FDZixDQUFDLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQ3RDLENBQUMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7TUFDOUI7OztZQUVLLGtCQUFFO0FBQ04sV0FBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxHQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMxRCxXQUFJLE9BQU8sR0FBRztBQUNaLGtCQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTO0FBQy9CLGdCQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUMsTUFBTSxHQUFDLElBQUk7QUFDdEMsY0FBSyxFQUFFLEtBQUs7QUFDWixpQkFBUSxFQUFFLEtBQUs7UUFDaEIsQ0FBQztBQUNGLFdBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO0FBQ3JDLFdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUM7QUFDaEIsa0JBQVMsSUFBSSxVQUFVLEdBQUMsS0FBSyxDQUFDO1FBQ2pDOztBQUdELFdBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNkLFdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUM7QUFDckIsYUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksbUJBQU0sZUFBZSxFQUFDO0FBQ25ELGVBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7VUFDL0MsTUFBSyxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxtQkFBTSxpQkFBaUIsRUFBQztBQUMzRCxlQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1VBQ3JEO1FBQ0Y7QUFDRCxjQUNFOztvQkFBSSxLQUFLLEVBQUUsT0FBUSxFQUFDLFNBQVMsRUFBRSxTQUFVLElBQUssSUFBSTtTQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7UUFDakIsQ0FDTjtNQUNGOzs7VUFyRkcsV0FBVztJQUFTLG1CQUFNLFNBQVM7O0FBdUZ6QyxZQUFXLENBQUMsU0FBUyxHQUFHO0FBQ3RCLFlBQVMsRUFBRSxtQkFBTSxTQUFTLENBQUMsTUFBTTtBQUNqQyxTQUFNLEVBQUUsbUJBQU0sU0FBUyxDQUFDLElBQUk7QUFDNUIsWUFBUyxFQUFDLG1CQUFNLFNBQVMsQ0FBQyxNQUFNO0VBQ2pDLENBQUM7O0FBRUYsWUFBVyxDQUFDLFlBQVksR0FBRztBQUN6QixZQUFTLEVBQUUsTUFBTTtBQUNqQixTQUFNLEVBQUUsS0FBSztBQUNiLFlBQVMsRUFBQyxFQUFFO0VBQ2I7c0JBQ2MsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDckdSLENBQU87Ozs7a0NBQ1AsQ0FBUzs7OzttQ0FDUixFQUFVOzs7OzJDQUNSLEVBQW1COzs7O3VDQUNuQixDQUFZOzs7O0tBRTNCLGVBQWU7ZUFBZixlQUFlOztBQUNOLGNBRFQsZUFBZSxDQUNMLEtBQUssRUFBQzsrQkFEaEIsZUFBZTs7QUFFYixvQ0FGRixlQUFlLDZDQUVQLEtBQUssRUFBRTtBQUNiLGFBQUksQ0FBQyxhQUFhLEdBQUMsQ0FBQyxDQUFDO0FBQ3JCLGFBQUksQ0FBQyxLQUFLLEdBQUM7QUFDUCx3QkFBVyxFQUFDLEtBQUs7VUFDcEIsQ0FBQztNQUNMOztrQkFQQyxlQUFlOztnQkFTTCx3QkFBQyxDQUFDLEVBQUM7QUFDZixpQkFBSSxDQUFDLENBQUMsT0FBTyxJQUFJLEVBQUUsRUFBRTs7QUFDbkIscUJBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLFVBQVUsR0FDaEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDOztBQUU5RCxxQkFBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUM7QUFDdEIsNEJBQU87a0JBQ1Y7QUFDRCxxQkFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQ3JCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2NBQ3BELE1BQUssSUFBRyxDQUFDLENBQUMsT0FBTyxJQUFJLEVBQUUsRUFBQztBQUN2QixxQkFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2NBQ25EO1VBQ0Y7OztnQkFFUyxvQkFBQyxDQUFDLEVBQUM7QUFDWCxpQkFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBQztBQUN2QixxQkFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksVUFBVSxHQUNoQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7QUFDOUQscUJBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFDO0FBQ3RCLDRCQUFPO2tCQUNWO0FBQ0QscUJBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUNuQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztjQUN0RDtVQUNGOzs7Z0JBQ1EsbUJBQUMsS0FBSyxFQUFDO0FBQ1osaUJBQUksRUFBRSxHQUFDLElBQUksQ0FBQztBQUNaLGlCQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBQztBQUMzQixxQkFBSSxLQUFLLEdBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzdDLHFCQUFHLEtBQUssS0FBRyxJQUFJLEVBQUM7QUFDWix1QkFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUNoRSx5QkFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7O0FBRTdCLHVCQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDbEIsdUJBQUUsQ0FBQyxRQUFRLENBQUMsRUFBQyxXQUFXLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztBQUNoQyx1QkFBRSxDQUFDLGFBQWEsR0FBQyxVQUFVLENBQUMsWUFBVTtBQUFDLDJCQUFFLENBQUMsUUFBUSxDQUFDLEVBQUMsV0FBVyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7c0JBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQztBQUMvRSwwQkFBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2QsNEJBQU8sS0FBSyxDQUFDO2tCQUNoQjtjQUNKO0FBQ0Qsb0JBQU8sSUFBSSxDQUFDO1VBRWY7Ozs7Ozs7Ozs7Ozs7WUFDVyxZQUFFO0FBQ1YsaUJBQUcsSUFBSSxDQUFDLGFBQWEsSUFBRSxDQUFDLEVBQUM7QUFDckIsNkJBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDakMscUJBQUksQ0FBQyxhQUFhLEdBQUMsQ0FBQyxDQUFDO2NBQ3hCO1VBQ0o7OztnQkFDZ0IsNkJBQUU7QUFDZixpQkFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7O0FBRS9CLGtCQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7VUFDakI7OztnQkFFbUIsZ0NBQUc7QUFDckIsaUJBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztVQUNyQjs7O2dCQUVLLGtCQUFFO0FBQ04saUJBQUksUUFBUSxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtpQkFDNUIsTUFBTSxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtpQkFDeEIsSUFBSSxHQUFDO0FBQ0Qsb0JBQUcsRUFBQyxVQUFVO0FBQ2QsMEJBQVMsRUFBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDeEMsdUJBQU0sRUFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Y0FDcEMsQ0FBQzs7QUFFRixxQkFBUSxDQUFDLFdBQVcsS0FBRyxJQUFJLENBQUMsV0FBVyxHQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7QUFFbEUsaUJBQUksV0FBVyxHQUFDLDZCQUFTLEVBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBQyxDQUFDLENBQUM7QUFDN0Ysb0JBQ0k7O21CQUFJLEdBQUcsRUFBQyxJQUFJLEVBQUMsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBRTtpQkFDckMseUJBQU8sUUFBUSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFFLEVBQUUsQ0FBQztpQkFDakUsZ0VBQVUsR0FBRyxFQUFDLFVBQVUsR0FBWTtjQUNuQyxDQUNSO1VBQ0Y7OztnQkFFZ0IsMkJBQUMsQ0FBQyxFQUFDO0FBQ2xCLGlCQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDZixpQkFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzlDLGtCQUFLLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwRCxvQkFBTyxLQUFLLENBQUM7VUFDZDs7O1lBL0ZHLGVBQWU7SUFBUyxtQkFBTSxTQUFTOztBQWtHN0MsZ0JBQWUsQ0FBQyxTQUFTLEdBQUc7QUFDMUIsaUJBQVksRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUNsQyxhQUFRLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07QUFDaEMsYUFBUSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNO0FBQ2hDLGVBQVUsRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtFQUNqQyxDQUFDOztzQkFHYSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0NoSFosQ0FBTzs7OztBQUN6QixLQUFJLE1BQU0sR0FBQyxTQUFQLE1BQU0sQ0FBVSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFDOztBQUdsRSxTQUFHLFFBQVEsS0FBRyxJQUFJLElBQUUsT0FBTyxRQUFRLEtBQUcsUUFBUSxFQUFDOztBQUMzQyxhQUFJLElBQUksR0FBQyxRQUFRLEtBQUcsSUFBSSxHQUFDLE1BQU0sR0FBQyxRQUFRLENBQUM7QUFDekMsZ0JBQ0ksdURBQVcsSUFBSSxJQUFFLElBQUksRUFBRSxJQUFLLEVBQUMsWUFBWSxFQUFFLFlBQWE7QUFDakQsc0JBQVMsRUFBRSxDQUFDLFdBQVcsSUFBRSxFQUFFLElBQUUsZ0NBQWlDLElBQUcsQ0FDM0U7TUFDSixNQUFNLElBQUcsQ0FBQyxRQUFRLEVBQUM7QUFDbEIsYUFBSSxJQUFJLEdBQUMsUUFBUSxLQUFHLElBQUksR0FBQyxNQUFNLEdBQUMsUUFBUSxDQUFDO0FBQ3pDLGdCQUNJLHVEQUFXLElBQUksSUFBRSxJQUFJLEVBQUUsSUFBSyxFQUFDLFlBQVksRUFBRSxZQUFhLEVBQUMsUUFBUSxFQUFDLFVBQVU7QUFDckUsc0JBQVMsRUFBRSxDQUFDLFdBQVcsSUFBRSxFQUFFLElBQUUsZ0NBQWlDLElBQUcsQ0FDM0U7TUFDRixNQUFNLElBQUcsUUFBUSxDQUFDLElBQUksRUFBQzs7O0FBRXBCLGlCQUFRLENBQUMsS0FBSyxLQUFHLElBQUksQ0FBQyxLQUFLLEdBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7QUFHNUMsYUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLFdBQVcsSUFBRSxFQUFFLElBQ2hCLDRCQUE0QixHQUM1QixRQUFRLENBQUMsSUFBSSxJQUNaLFFBQVEsQ0FBQyxTQUFTLEdBQUUsR0FBRyxHQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUUsRUFBRSxDQUFDLENBQUM7O0FBRWxFLGFBQUcsUUFBUSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUM7O0FBQzFCLGlCQUFJLE9BQU8sR0FBRyxFQUFFO2lCQUFFLE1BQU0sR0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztBQUNqRCxpQkFBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFDOztBQUNyQixxQkFBSSxRQUFRLENBQUM7QUFDYix3QkFBTyxHQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQzVCLDZCQUFRLEdBQUMsTUFBTSxHQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7QUFDNUIsNEJBQ0k7OzJCQUFRLEdBQUcsRUFBRSxRQUFRLEdBQUMsQ0FBRSxFQUFDLEtBQUssRUFBRSxDQUFFO3lCQUFFLFFBQVE7c0JBQVUsQ0FDekQ7a0JBQ0osQ0FBQyxDQUFDO2NBQ047QUFDRCxvQkFDSTs7OEJBQVksSUFBSSxJQUFFLFlBQVksRUFBRSxZQUFhO2lCQUFFLE9BQU87Y0FBVSxDQUNsRTtVQUNMLE1BQU0sSUFBRyxRQUFRLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBQzs7O0FBRW5DLHFCQUFRLENBQUMsSUFBSSxLQUFHLElBQUksQ0FBQyxJQUFJLEdBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pDLHFCQUFRLENBQUMsSUFBSSxLQUFHLElBQUksQ0FBQyxJQUFJLEdBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pDLGlCQUFJLFlBQVksR0FBQyxJQUFJLENBQUMsU0FBUztpQkFBQyxPQUFPLEdBQUMsSUFBSSxDQUFDO0FBQzdDLGlCQUFHLFlBQVksRUFBQztBQUNaLHFCQUFJLENBQUMsU0FBUyxHQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQ3RCLHlCQUFJLENBQUMsQ0FBQyxPQUFPLElBQUksRUFBRSxFQUFFOztBQUNqQixxQ0FBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO3NCQUNuQjtrQkFDSixDQUFDO0FBQ0Ysd0JBQU8sR0FBQzs7dUJBQU8sU0FBUyxFQUFDLHVDQUF1QyxFQUFDLE9BQU8sRUFBRSxZQUFhOztrQkFBYTtjQUN2Rzs7QUFFRCxvQkFDSTs7O2lCQUNJLDBEQUFjLElBQUksSUFBRSxZQUFZLEVBQUUsWUFBYSxJQUFZO2lCQUMxRCxPQUFPO2NBQ04sQ0FFUjtVQUNMLE1BQU0sSUFBRyxRQUFRLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBQztBQUNyQyxpQkFBSSxPQUFNLEdBQUcsWUFBWSxDQUFDO0FBQzFCLGlCQUFHLFFBQVEsQ0FBQyxPQUFPLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUM7O0FBRTdDLHdCQUFNLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7Y0FDbEM7QUFDRCxpQkFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUMsRUFBRSxDQUFDLENBQUM7QUFDM0QsaUJBQUksQ0FBQyxTQUFTLElBQUksc0JBQXNCLENBQUM7O0FBRXpDLGlCQUFJLE9BQU8sR0FBRyxZQUFZLElBQUksWUFBWSxDQUFDLFFBQVEsRUFBRSxJQUFJLE9BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsSUFBSSxHQUFDLEtBQUssQ0FBQzs7QUFFekYsb0JBQ0UsdURBQVcsSUFBSSxJQUFFLElBQUksRUFBQyxVQUFVLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBQyxjQUFjLEVBQUUsT0FBUSxJQUFFLENBQzFFO1VBQ0gsTUFBSzs7QUFDRixvQkFDSSx1REFBVyxJQUFJLElBQUUsSUFBSSxFQUFFLElBQUssRUFBQyxZQUFZLEVBQUUsWUFBYSxJQUFFLENBQzdEO1VBQ0o7TUFDSjs7QUFFRCxZQUNJLHVEQUFXLElBQUksSUFBRSxJQUFJLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBRSxDQUFDLFdBQVcsSUFBRSxFQUFFLElBQUUsZ0NBQWlDLElBQUUsQ0FDaEc7RUFDSixDQUFDOztzQkFFYSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0N2RkgsQ0FBTzs7OztrQ0FDUCxDQUFTOzs7O3dDQUtwQixFQUFjOztBQUdyQixLQUFJLG9CQUFvQixHQUFDLG1CQUFNLGFBQWEsQ0FBQywwQkFBYSxTQUFTLENBQUMsQ0FBQzs7S0FFL0QsWUFBWTthQUFaLFlBQVk7O1lBQVosWUFBWTsyQkFBWixZQUFZOztnQ0FBWixZQUFZOzs7Z0JBQVosWUFBWTs7OztZQUVWLGdCQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDO0FBQ3BCLFdBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUNsQixHQUFHLEVBQUMsS0FBSyxFQUFFO0FBQ1QsYUFBSSxFQUFDLFFBQVE7QUFDYixnQkFBTyxFQUFFLElBQUk7QUFDYix3QkFBZSxFQUFFLElBQUk7QUFDckIsc0JBQWEsRUFBRSxvQkFBb0I7QUFDbkMsc0JBQWEsRUFBRSxvQkFBb0I7UUFDcEMsQ0FBQyxDQUFDO01BQ1I7OztZQUVLLGtCQUFFO0FBQ04sY0FDSSxnRUFBZ0IsR0FBRyxFQUFDLFFBQVEsRUFBQyxtQkFBbUIsRUFBRSxvQkFBcUI7QUFDdEQsV0FBRSxFQUFDLGlCQUFpQixFQUFFLFNBQVMsRUFBQyxpQkFBaUIsR0FBa0IsQ0FDdkY7TUFDRjs7O1VBbEJHLFlBQVk7SUFBUyxtQkFBTSxTQUFTOztzQkFxQjNCLFlBQVk7Ozs7Ozs7QUNoQzNCOztBQUVBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0EsK0M7Ozs7OztBQ2xCQTs7QUFFQSxvREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UCxpQ0FBZ0MsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLDZEQUE2RCxvQkFBb0IsR0FBRyxFQUFFOztBQUVqakI7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLDRDQUEyQyxrQkFBa0Isa0NBQWtDLHFFQUFxRSxFQUFFLEVBQUUsT0FBTyxrQkFBa0IsRUFBRSxZQUFZOztBQUUvTSxrREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SixrREFBaUQsYUFBYSx1RkFBdUYsRUFBRSx1RkFBdUY7O0FBRTlPLDJDQUEwQywrREFBK0QscUdBQXFHLEVBQUUseUVBQXlFLGVBQWUseUVBQXlFLEVBQUUsRUFBRSx1SEFBdUg7O0FBRTVlO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxvRUFBbUUsYUFBYTtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLHFGQUFvRjs7QUFFcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0EsUUFBTztBQUNQLDhDQUE2Qzs7QUFFN0M7QUFDQTtBQUNBLDJCQUEwQjtBQUMxQixRQUFPO0FBQ1A7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQjtBQUNuQixVQUFTO0FBQ1Q7QUFDQSxRQUFPO0FBQ1A7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBbUIsZUFBZSx1Q0FBdUM7QUFDekU7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7O0FDL0xBLDBDOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsMkJBQTBCLGNBQWM7QUFDeEMsOEJBQTZCLGlCQUFpQjtBQUM5Qyw2QkFBNEIsZ0JBQWdCO0FBQzVDLDBCQUF5QixhQUFhO0FBQ3RDLDRCQUEyQixlQUFlO0FBQzFDLDRCQUEyQixlQUFlOztBQUUxQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBLG9JQUFtSTtBQUNuSTtBQUNBLHNJQUFxSTtBQUNySTs7QUFFQTtBQUNBLHlNQUF3TSxRQUFROztBQUVoTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDRKQUEySjtBQUMzSixnS0FBK0o7QUFDL0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBLHlIQUF3SDtBQUN4SCw2SkFBNEo7QUFDNUo7QUFDQSwrSUFBOEk7QUFDOUk7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQSw2SkFBNEo7QUFDNUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUI7Ozs7Ozs7QUMxR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw2QkFBNEIsVUFBVTs7Ozs7OztBQzFGdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwQkFBeUIsOEJBQThCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCOzs7Ozs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQThDLGdCQUFnQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qjs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzREFBcUQ7QUFDckQsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7O0FBRUEsMkJBQTBCO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQSw0Qjs7Ozs7OztBQ2pEQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQztBQUNEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Rjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFnQyxpQkFBaUI7QUFDakQsTUFBSztBQUNMLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxRQUFPLHVDQUF1QztBQUM5QztBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLFFBQU8seUNBQXlDO0FBQ2hEO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFnQixpQ0FBaUM7QUFDakQsWUFBVztBQUNYLEVBQUM7O0FBRUQ7QUFDQSxpQkFBZ0IsOEJBQThCO0FBQzlDLFlBQVc7QUFDWCxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGdDOzs7Ozs7QUM5SEE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQU87O0FBRVA7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUN4TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW1CLFdBQVc7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFB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ekIsMkJBQU07a0JBQ1Q7Y0FDSjtBQUNELGlCQUFJLENBQUMsaUJBQWlCLEVBQUU7QUFDcEIsd0JBQU8sSUFBSSxLQUFLLDREQUEwRCxnQkFBZ0IsQ0FBRyxDQUFDO2NBQ2pHO1VBQ0o7TUFDSjtBQUNELGdCQUFXLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07QUFDbkMsZUFBVSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNO0VBQ3JDLENBQUM7O0FBRUYsYUFBWSxDQUFDLFlBQVksR0FBRztBQUN4QixVQUFLLEVBQUUsbUJBQU0sWUFBWTtFQUM1QixDQUFDOztzQkFFYSxZQUFZIiwiZmlsZSI6InJlYWN0LWJvb3RzdHJhcC10YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCIsIFwicmVhY3QtZG9tXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlJlYWN0Qm9vdHN0cmFwVGFibGVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUmVhY3RCb290c3RyYXBUYWJsZVwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdLCByb290W1wiUmVhY3RET01cIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA4NjJkMjA2MjZiYjM4NzczOGJiYVxuICoqLyIsImltcG9ydCBCb290c3RyYXBUYWJsZSBmcm9tICcuL0Jvb3RzdHJhcFRhYmxlJztcbmltcG9ydCBUYWJsZUhlYWRlckNvbHVtbiBmcm9tICcuL1RhYmxlSGVhZGVyQ29sdW1uJztcbmltcG9ydCB7VGFibGVEYXRhU2V0fSBmcm9tICcuL3N0b3JlL1RhYmxlRGF0YVN0b3JlJztcblxuaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpe1xuICB3aW5kb3cuQm9vdHN0cmFwVGFibGUgPSBCb290c3RyYXBUYWJsZTtcbiAgd2luZG93LlRhYmxlSGVhZGVyQ29sdW1uID0gVGFibGVIZWFkZXJDb2x1bW47XG4gIHdpbmRvdy5UYWJsZURhdGFTZXQgPSBUYWJsZURhdGFTZXQ7XG59XG5leHBvcnQgZGVmYXVsdCB7XG4gIEJvb3RzdHJhcFRhYmxlLFxuICBUYWJsZUhlYWRlckNvbHVtbixcbiAgVGFibGVEYXRhU2V0XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzU2V0IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4vQ29uc3QnO1xuaW1wb3J0IFRhYmxlSGVhZGVyIGZyb20gJy4vVGFibGVIZWFkZXInO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tICcuL1RhYmxlQm9keSc7XG5pbXBvcnQgUGFnaW5hdGlvbkxpc3QgZnJvbSAnLi9wYWdpbmF0aW9uL1BhZ2luYXRpb25MaXN0JztcbmltcG9ydCBUb29sQmFyIGZyb20gJy4vdG9vbGJhci9Ub29sQmFyJztcbmltcG9ydCBUYWJsZUZpbHRlciBmcm9tICcuL1RhYmxlRmlsdGVyJztcbmltcG9ydCB7VGFibGVEYXRhU3RvcmV9IGZyb20gJy4vc3RvcmUvVGFibGVEYXRhU3RvcmUnO1xuaW1wb3J0IGV4cG9ydENTViBmcm9tICcuL2Nzdl9leHBvcnRfdXRpbCc7XG5pbXBvcnQge0ZpbHRlcn0gZnJvbSAnLi9GaWx0ZXInO1xuXG5jbGFzcyBCb290c3RyYXBUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLl9hdHRhY2hDZWxsRWRpdEZ1bmMoKTtcblxuICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzLnByb3BzLmRhdGEpKSB7XG4gICAgICB0aGlzLnN0b3JlID0gbmV3IFRhYmxlRGF0YVN0b3JlKHRoaXMucHJvcHMuZGF0YS5nZXREYXRhKCkpO1xuICAgICAgdGhpcy5wcm9wcy5kYXRhLmNsZWFyKCk7XG4gICAgICB0aGlzLnByb3BzLmRhdGEub24oJ2NoYW5nZScsIChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmUuc2V0RGF0YShkYXRhKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZGF0YTogdGhpcy5nZXRUYWJsZURhdGEoKVxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjb3B5ID0gdGhpcy5wcm9wcy5kYXRhLnNsaWNlKCk7XG4gICAgICB0aGlzLnN0b3JlID0gbmV3IFRhYmxlRGF0YVN0b3JlKGNvcHkpO1xuICAgIH1cblxuICAgIHRoaXMuaW5pdFRhYmxlKHRoaXMucHJvcHMpO1xuXG4gICAgaWYgKHRoaXMuZmlsdGVyKSB7XG4gICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgIHRoaXMuZmlsdGVyLm9uKCdvbkZpbHRlckNoYW5nZScsIChjdXJyZW50RmlsdGVyKSA9PiB7XG4gICAgICAgIHNlbGYuaGFuZGxlRmlsdGVyRGF0YShjdXJyZW50RmlsdGVyKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdFJvdyAmJiB0aGlzLnByb3BzLnNlbGVjdFJvdy5zZWxlY3RlZCkge1xuICAgICAgbGV0IGNvcHkgPSB0aGlzLnByb3BzLnNlbGVjdFJvdy5zZWxlY3RlZC5zbGljZSgpO1xuICAgICAgdGhpcy5zdG9yZS5zZXRTZWxlY3RlZFJvd0tleShjb3B5KTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YTogdGhpcy5nZXRUYWJsZURhdGEoKSxcbiAgICAgIGN1cnJQYWdlOiB0aGlzLnByb3BzLm9wdGlvbnMucGFnZSB8fCAxLFxuICAgICAgc2l6ZVBlclBhZ2U6IHRoaXMucHJvcHMub3B0aW9ucy5zaXplUGVyUGFnZSB8fCBDb25zdC5TSVpFX1BFUl9QQUdFX0xJU1RbMF0sXG4gICAgICBzZWxlY3RlZFJvd0tleXM6IHRoaXMuc3RvcmUuZ2V0U2VsZWN0ZWRSb3dLZXlzKClcbiAgICB9O1xuICB9XG5cbiAgaW5pdFRhYmxlKHByb3BzKXtcbiAgICBsZXQge2tleUZpZWxkfSA9IHByb3BzO1xuXG4gICAgY29uc3QgaXNLZXlGaWVsZERlZmluZWQgPSB0eXBlb2Yga2V5RmllbGQgPT09ICdzdHJpbmcnICYmIGtleUZpZWxkLmxlbmd0aDtcbiAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKHByb3BzLmNoaWxkcmVuLCBjb2x1bW49PiB7XG4gICAgICBpZiAoY29sdW1uLnByb3BzLmlzS2V5KSB7XG4gICAgICAgIGlmIChrZXlGaWVsZCkge1xuICAgICAgICAgIHRocm93IFwiRXJyb3IuIE11bHRpcGxlIGtleSBjb2x1bW4gYmUgZGV0ZWN0ZWQgaW4gVGFibGVIZWFkZXJDb2x1bW4uXCI7XG4gICAgICAgIH1cbiAgICAgICAga2V5RmllbGQgPSBjb2x1bW4ucHJvcHMuZGF0YUZpZWxkO1xuICAgICAgfVxuICAgICAgaWYgKGNvbHVtbi5wcm9wcy5maWx0ZXIpIHtcbiAgICAgICAgLy8gYSBjb2x1bW4gY29udGFpbnMgYSBmaWx0ZXJcbiAgICAgICAgaWYgKCF0aGlzLmZpbHRlcikge1xuICAgICAgICAgIC8vIGZpcnN0IHRpbWUgY3JlYXRlIHRoZSBmaWx0ZXIgb24gdGhlIEJvb3RzdHJhcFRhYmxlXG4gICAgICAgICAgdGhpcy5maWx0ZXIgPSBuZXcgRmlsdGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcGFzcyB0aGUgZmlsdGVyIHRvIGNvbHVtbiB3aXRoIGZpbHRlclxuICAgICAgICBjb2x1bW4ucHJvcHMuZmlsdGVyLmVtaXR0ZXIgPSB0aGlzLmZpbHRlcjtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcblxuICAgIGxldCBjb2xJbmZvcyA9IHRoaXMuZ2V0Q29sdW1uc0Rlc2NyaXB0aW9uKHByb3BzKS5yZWR1Y2UoKCBwcmV2LCBjdXJyICkgPT4ge1xuICAgICAgcHJldltjdXJyLm5hbWVdID0gY3VycjtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH0sIHt9KTtcblxuICAgIGlmICghaXNLZXlGaWVsZERlZmluZWQgJiYgIWtleUZpZWxkKVxuICAgICAgdGhyb3cgYEVycm9yLiBObyBhbnkga2V5IGNvbHVtbiBkZWZpbmVkIGluIFRhYmxlSGVhZGVyQ29sdW1uLlxuICAgICAgICAgICAgVXNlICdpc0tleT17dHJ1ZX0nIHRvIHNwZWNpZnkgYSB1bmlxdWUgY29sdW1uIGFmdGVyIHZlcnNpb24gMC41LjQuYDtcblxuICAgIHRoaXMuc3RvcmUuc2V0UHJvcHMoe1xuICAgICAgaXNQYWdpbmF0aW9uOiBwcm9wcy5wYWdpbmF0aW9uLFxuICAgICAga2V5RmllbGQ6IGtleUZpZWxkLFxuICAgICAgY29sSW5mb3M6IGNvbEluZm9zLFxuICAgICAgbXVsdGlDb2x1bW5TZWFyY2g6IHByb3BzLm11bHRpQ29sdW1uU2VhcmNoLFxuICAgICAgcmVtb3RlOiB0aGlzLmlzUmVtb3RlRGF0YVNvdXJjZSgpXG4gICAgfSk7XG4gIH1cblxuICBnZXRUYWJsZURhdGEoKSB7XG4gICAgIGxldCByZXN1bHQgPSBbXTtcblxuICAgICBpZih0aGlzLnByb3BzLm9wdGlvbnMuc29ydE5hbWUgJiYgdGhpcy5wcm9wcy5vcHRpb25zLnNvcnRPcmRlcilcbiAgICAgICB0aGlzLnN0b3JlLnNvcnQodGhpcy5wcm9wcy5vcHRpb25zLnNvcnRPcmRlciwgdGhpcy5wcm9wcy5vcHRpb25zLnNvcnROYW1lKTtcblxuICAgICBpZiAodGhpcy5wcm9wcy5wYWdpbmF0aW9uKSB7XG4gICAgICAgbGV0IHBhZ2UsIHNpemVQZXJQYWdlO1xuICAgICAgIGlmICh0aGlzLnN0b3JlLmlzQ2hhbmdlZFBhZ2UoKSkge1xuICAgICAgICBzaXplUGVyUGFnZSA9IHRoaXMuc3RhdGUuc2l6ZVBlclBhZ2U7XG4gICAgICAgIHBhZ2UgPSB0aGlzLnN0YXRlLmN1cnJQYWdlO1xuICAgICAgIH0gZWxzZSB7XG4gICAgICAgICBzaXplUGVyUGFnZSA9IHRoaXMucHJvcHMub3B0aW9ucy5zaXplUGVyUGFnZSB8fCBDb25zdC5TSVpFX1BFUl9QQUdFX0xJU1RbMF07XG4gICAgICAgICBwYWdlID0gdGhpcy5wcm9wcy5vcHRpb25zLnBhZ2UgfHwgMTtcbiAgICAgICB9XG4gICAgICAgcmVzdWx0ID0gdGhpcy5zdG9yZS5wYWdlKHBhZ2UsIHNpemVQZXJQYWdlKS5nZXQoKTtcbiAgICAgfSBlbHNlIHtcbiAgICAgICByZXN1bHQgPSB0aGlzLnN0b3JlLmdldCgpO1xuICAgICB9XG4gICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBnZXRDb2x1bW5zRGVzY3JpcHRpb24oeyBjaGlsZHJlbiB9KSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuLm1hcCgoY29sdW1uLCBpKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBjb2x1bW4ucHJvcHMuZGF0YUZpZWxkLFxuICAgICAgICBhbGlnbjogY29sdW1uLnByb3BzLmRhdGFBbGlnbixcbiAgICAgICAgc29ydDogY29sdW1uLnByb3BzLmRhdGFTb3J0LFxuICAgICAgICBmb3JtYXQ6IGNvbHVtbi5wcm9wcy5kYXRhRm9ybWF0LFxuICAgICAgICBmb3JtYXRFeHRyYURhdGE6IGNvbHVtbi5wcm9wcy5mb3JtYXRFeHRyYURhdGEsXG4gICAgICAgIGZpbHRlckZvcm1hdHRlZDogY29sdW1uLnByb3BzLmZpbHRlckZvcm1hdHRlZCxcbiAgICAgICAgZWRpdGFibGU6IGNvbHVtbi5wcm9wcy5lZGl0YWJsZSxcbiAgICAgICAgaGlkZGVuOiBjb2x1bW4ucHJvcHMuaGlkZGVuLFxuICAgICAgICBjbGFzc05hbWU6IGNvbHVtbi5wcm9wcy5jb2x1bW5DbGFzc05hbWUsXG4gICAgICAgIHdpZHRoOiBjb2x1bW4ucHJvcHMud2lkdGgsXG4gICAgICAgIHRleHQ6IGNvbHVtbi5wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgc29ydEZ1bmM6IGNvbHVtbi5wcm9wcy5zb3J0RnVuYyxcbiAgICAgICAgaW5kZXg6IGlcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHRoaXMuaW5pdFRhYmxlKG5leHRQcm9wcyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobmV4dFByb3BzLmRhdGEpKSB7XG4gICAgICB0aGlzLnN0b3JlLnNldERhdGEobmV4dFByb3BzLmRhdGEuc2xpY2UoKSk7XG4gICAgICBsZXQgcGFnaW5hdGlvbkRvbSA9IHRoaXMucmVmcy5wYWdpbmF0aW9uO1xuICAgICAgbGV0IHBhZ2UgPSBwYWdpbmF0aW9uRG9tICYmIHBhZ2luYXRpb25Eb20uZ2V0Q3VycmVudFBhZ2UoKSB8fCBuZXh0UHJvcHMub3B0aW9ucy5wYWdlIHx8IDE7XG4gICAgICBsZXQgc2l6ZVBlclBhZ2UgPSBwYWdpbmF0aW9uRG9tICYmIHBhZ2luYXRpb25Eb20uZ2V0U2l6ZVBlclBhZ2UoKSB8fCBuZXh0UHJvcHMub3B0aW9ucy5zaXplUGVyUGFnZSB8fCBDb25zdC5TSVpFX1BFUl9QQUdFX0xJU1RbMF07XG4gICAgICAvLyAjMTI1XG4gICAgICBpZihwYWdlID4gTWF0aC5jZWlsKG5leHRQcm9wcy5kYXRhLmxlbmd0aCAvIHNpemVQZXJQYWdlKSkgcGFnZSA9IDE7XG4gICAgICBsZXQgc29ydEluZm8gPSB0aGlzLnN0b3JlLmdldFNvcnRJbmZvKCk7XG4gICAgICBsZXQgc29ydEZpZWxkID0gbmV4dFByb3BzLm9wdGlvbnMuc29ydE5hbWUgfHwgKHNvcnRJbmZvID8gc29ydEluZm8uc29ydEZpZWxkIDogdW5kZWZpbmVkKTtcbiAgICAgIGxldCBzb3J0T3JkZXIgPSBuZXh0UHJvcHMub3B0aW9ucy5zb3J0T3JkZXIgfHwgKHNvcnRJbmZvID8gc29ydEluZm8ub3JkZXIgOiB1bmRlZmluZWQpO1xuICAgICAgaWYoc29ydEZpZWxkICYmIHNvcnRPcmRlcikgdGhpcy5zdG9yZS5zb3J0KHNvcnRPcmRlciwgc29ydEZpZWxkKTtcbiAgICAgIGxldCBkYXRhID0gdGhpcy5zdG9yZS5wYWdlKHBhZ2UsIHNpemVQZXJQYWdlKS5nZXQoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBjdXJyUGFnZTogcGFnZSxcbiAgICAgICAgc2l6ZVBlclBhZ2U6IHNpemVQZXJQYWdlXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKG5leHRQcm9wcy5zZWxlY3RSb3cgJiYgbmV4dFByb3BzLnNlbGVjdFJvdy5zZWxlY3RlZCkge1xuICAgICAgLy9zZXQgZGVmYXVsdCBzZWxlY3Qgcm93cyB0byBzdG9yZS5cbiAgICAgIGxldCBjb3B5ID0gbmV4dFByb3BzLnNlbGVjdFJvdy5zZWxlY3RlZC5zbGljZSgpO1xuICAgICAgdGhpcy5zdG9yZS5zZXRTZWxlY3RlZFJvd0tleShjb3B5KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZFJvd0tleXM6IGNvcHlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuX2FkanVzdEhlYWRlcldpZHRoKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2FkanVzdEhlYWRlcldpZHRoKTtcbiAgICB0aGlzLnJlZnMuYm9keS5yZWZzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGxIZWFkZXIpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2FkanVzdEhlYWRlcldpZHRoKTtcbiAgICB0aGlzLnJlZnMuYm9keS5yZWZzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGxIZWFkZXIpO1xuICAgIGlmICh0aGlzLmZpbHRlcikge1xuICAgICAgdGhpcy5maWx0ZXIucmVtb3ZlQWxsTGlzdGVuZXJzKFwib25GaWx0ZXJDaGFuZ2VcIik7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMuX2FkanVzdEhlYWRlcldpZHRoKCk7XG4gICAgdGhpcy5fYXR0YWNoQ2VsbEVkaXRGdW5jKCk7XG4gICAgaWYgKHRoaXMucHJvcHMub3B0aW9ucy5hZnRlclRhYmxlQ29tcGxldGUpXG4gICAgICB0aGlzLnByb3BzLm9wdGlvbnMuYWZ0ZXJUYWJsZUNvbXBsZXRlKCk7XG4gIH1cblxuICBfYXR0YWNoQ2VsbEVkaXRGdW5jKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmNlbGxFZGl0KSB7XG4gICAgICB0aGlzLnByb3BzLmNlbGxFZGl0Ll9fb25Db21wbGV0ZUVkaXRfXyA9IHRoaXMuaGFuZGxlRWRpdENlbGwuYmluZCh0aGlzKTtcbiAgICAgIGlmICh0aGlzLnByb3BzLmNlbGxFZGl0Lm1vZGUgIT09IENvbnN0LkNFTExfRURJVF9OT05FKVxuICAgICAgICB0aGlzLnByb3BzLnNlbGVjdFJvdy5jbGlja1RvU2VsZWN0ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBpbiB0aGUgY3VycmVudCBjb25maWd1cmF0aW9uLFxuICAgKiB0aGUgZGF0YWdyaWQgc2hvdWxkIGxvYWQgaXRzIGRhdGEgcmVtb3RlbHkuXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gIFtwcm9wc10gT3B0aW9uYWwuIElmIG5vdCBnaXZlbiwgdGhpcy5wcm9wcyB3aWxsIGJlIHVzZWRcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG4gIGlzUmVtb3RlRGF0YVNvdXJjZShwcm9wcykge1xuICAgIHJldHVybiAocHJvcHMgfHwgdGhpcy5wcm9wcykucmVtb3RlO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgdmFyIHRhYmxlQ2xhc3MgPSBjbGFzc1NldChcInJlYWN0LWJzLXRhYmxlXCIpO1xuICAgIHZhciBjaGlsZHJlbnMgPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIHZhciBzdHlsZSA9IHtcbiAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQsXG4gICAgICBtYXhIZWlnaHQ6IHRoaXMucHJvcHMubWF4SGVpZ2h0XG4gICAgfTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpcy5wcm9wcy5jaGlsZHJlbikpIHtcbiAgICAgIGNoaWxkcmVucyA9IFt0aGlzLnByb3BzLmNoaWxkcmVuXTtcbiAgICB9XG4gICAgdmFyIGNvbHVtbnMgPSB0aGlzLmdldENvbHVtbnNEZXNjcmlwdGlvbih0aGlzLnByb3BzKTtcbiAgICB2YXIgc29ydEluZm8gPSB0aGlzLnN0b3JlLmdldFNvcnRJbmZvKCk7XG4gICAgdmFyIHBhZ2luYXRpb24gPSB0aGlzLnJlbmRlclBhZ2luYXRpb24oKTtcbiAgICB2YXIgdG9vbEJhciA9IHRoaXMucmVuZGVyVG9vbEJhcigpO1xuICAgIHZhciB0YWJsZUZpbHRlciA9IHRoaXMucmVuZGVyVGFibGVGaWx0ZXIoY29sdW1ucyk7XG4gICAgdmFyIGlzU2VsZWN0QWxsID0gdGhpcy5pc1NlbGVjdEFsbCgpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWJzLWNvbnRhaW5lclwiIHJlZj1cInRhYmxlXCI+XG4gICAgICAgIHt0b29sQmFyfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWJzLXRhYmxlLWNvbnRhaW5lclwiXG4gICAgICAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZU1vdXNlRW50ZXIuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlTW91c2VMZWF2ZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgPFRhYmxlSGVhZGVyXG4gICAgICAgICAgICByZWY9XCJoZWFkZXJcIlxuICAgICAgICAgICAgcm93U2VsZWN0VHlwZT17dGhpcy5wcm9wcy5zZWxlY3RSb3cubW9kZX1cbiAgICAgICAgICAgIGhpZGVTZWxlY3RDb2x1bW49e3RoaXMucHJvcHMuc2VsZWN0Um93LmhpZGVTZWxlY3RDb2x1bW59XG4gICAgICAgICAgICBzb3J0TmFtZT17c29ydEluZm8gPyBzb3J0SW5mby5zb3J0RmllbGQgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICBzb3J0T3JkZXI9e3NvcnRJbmZvID8gc29ydEluZm8ub3JkZXIgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICBvblNvcnQ9e3RoaXMuaGFuZGxlU29ydC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgb25TZWxlY3RBbGxSb3c9e3RoaXMuaGFuZGxlU2VsZWN0QWxsUm93LmJpbmQodGhpcyl9XG4gICAgICAgICAgICBib3JkZXJlZD17dGhpcy5wcm9wcy5ib3JkZXJlZH1cbiAgICAgICAgICAgIGNvbmRlbnNlZD17dGhpcy5wcm9wcy5jb25kZW5zZWR9XG4gICAgICAgICAgICBpc0ZpbHRlcmVkPXt0aGlzLmZpbHRlciA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgIGlzU2VsZWN0QWxsPXtpc1NlbGVjdEFsbH0+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L1RhYmxlSGVhZGVyPlxuICAgICAgICAgIDxUYWJsZUJvZHlcbiAgICAgICAgICAgIGhlaWdodD17dGhpcy5wcm9wcy5oZWlnaHR9XG4gICAgICAgICAgICBtYXhIZWlnaHQ9e3RoaXMucHJvcHMubWF4SGVpZ2h0fVxuICAgICAgICAgICAgcmVmPVwiYm9keVwiXG4gICAgICAgICAgICBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9XG4gICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgdHJDbGFzc05hbWU9e3RoaXMucHJvcHMudHJDbGFzc05hbWV9XG4gICAgICAgICAgICBzdHJpcGVkPXt0aGlzLnByb3BzLnN0cmlwZWR9XG4gICAgICAgICAgICBib3JkZXJlZD17dGhpcy5wcm9wcy5ib3JkZXJlZH1cbiAgICAgICAgICAgIGhvdmVyPXt0aGlzLnByb3BzLmhvdmVyfVxuICAgICAgICAgICAga2V5RmllbGQ9e3RoaXMuc3RvcmUuZ2V0S2V5RmllbGQoKX1cbiAgICAgICAgICAgIGNvbmRlbnNlZD17dGhpcy5wcm9wcy5jb25kZW5zZWR9XG4gICAgICAgICAgICBzZWxlY3RSb3c9e3RoaXMucHJvcHMuc2VsZWN0Um93fVxuICAgICAgICAgICAgY2VsbEVkaXQ9e3RoaXMucHJvcHMuY2VsbEVkaXR9XG4gICAgICAgICAgICBzZWxlY3RlZFJvd0tleXM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRSb3dLZXlzfVxuICAgICAgICAgICAgb25Sb3dDbGljaz17dGhpcy5oYW5kbGVSb3dDbGljay5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgb25Sb3dNb3VzZU92ZXI9e3RoaXMuaGFuZGxlUm93TW91c2VPdmVyLmJpbmQodGhpcyl9XG4gICAgICAgICAgICBvblJvd01vdXNlT3V0PXt0aGlzLmhhbmRsZVJvd01vdXNlT3V0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICBvblNlbGVjdFJvdz17dGhpcy5oYW5kbGVTZWxlY3RSb3cuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIG5vRGF0YVRleHQ9e3RoaXMucHJvcHMub3B0aW9ucy5ub0RhdGFUZXh0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGFibGVGaWx0ZXJ9XG4gICAgICAgIHtwYWdpbmF0aW9ufVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgaXNTZWxlY3RBbGwoKXtcbiAgICB2YXIgZGVmYXVsdFNlbGVjdFJvd0tleXMgPSB0aGlzLnN0b3JlLmdldFNlbGVjdGVkUm93S2V5cygpO1xuICAgIHZhciBhbGxSb3dLZXlzID0gdGhpcy5zdG9yZS5nZXRBbGxSb3drZXkoKTtcbiAgICBpZihkZWZhdWx0U2VsZWN0Um93S2V5cy5sZW5ndGggIT09IGFsbFJvd0tleXMubGVuZ3RoKXtcbiAgICAgIHJldHVybiBkZWZhdWx0U2VsZWN0Um93S2V5cy5sZW5ndGggPT09IDAgPyBmYWxzZSA6ICdpbmRldGVybWluYXRlJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgY2xlYW5TZWxlY3RlZCgpIHtcbiAgICB0aGlzLnN0b3JlLnNldFNlbGVjdGVkUm93S2V5KFtdKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkUm93S2V5czogW11cbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVNvcnQob3JkZXIsIHNvcnRGaWVsZCkge1xuICAgIGlmICh0aGlzLnByb3BzLm9wdGlvbnMub25Tb3J0Q2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9wdGlvbnMub25Tb3J0Q2hhbmdlKHNvcnRGaWVsZCwgb3JkZXIsIHRoaXMucHJvcHMpO1xuICAgIH1cblxuICAgIGxldCByZXN1bHQgPSB0aGlzLnN0b3JlLnNvcnQob3JkZXIsIHNvcnRGaWVsZCkuZ2V0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhOiByZXN1bHRcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVBhZ2luYXRpb25EYXRhKHBhZ2UsIHNpemVQZXJQYWdlKSB7XG4gICAgY29uc3Qge29uUGFnZUNoYW5nZX0gPSB0aGlzLnByb3BzLm9wdGlvbnM7XG4gICAgaWYgKG9uUGFnZUNoYW5nZSkge1xuICAgICAgb25QYWdlQ2hhbmdlKHBhZ2UsIHNpemVQZXJQYWdlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc1JlbW90ZURhdGFTb3VyY2UoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCByZXN1bHQgPSB0aGlzLnN0b3JlLnBhZ2UocGFnZSwgc2l6ZVBlclBhZ2UpLmdldCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF0YTogcmVzdWx0LFxuICAgICAgY3VyclBhZ2U6IHBhZ2UsXG4gICAgICBzaXplUGVyUGFnZVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlTW91c2VMZWF2ZSgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vcHRpb25zLm9uTW91c2VMZWF2ZSkge1xuICAgICAgdGhpcy5wcm9wcy5vcHRpb25zLm9uTW91c2VMZWF2ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU1vdXNlRW50ZXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub3B0aW9ucy5vbk1vdXNlRW50ZXIpIHtcbiAgICAgIHRoaXMucHJvcHMub3B0aW9ucy5vbk1vdXNlRW50ZXIoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVSb3dNb3VzZU91dChyb3cpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vcHRpb25zLm9uUm93TW91c2VPdXQpIHtcbiAgICAgIHRoaXMucHJvcHMub3B0aW9ucy5vblJvd01vdXNlT3V0KHJvdyk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUm93TW91c2VPdmVyKHJvdykge1xuICAgIGlmICh0aGlzLnByb3BzLm9wdGlvbnMub25Sb3dNb3VzZU92ZXIpIHtcbiAgICAgIHRoaXMucHJvcHMub3B0aW9ucy5vblJvd01vdXNlT3Zlcihyb3cpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVJvd0NsaWNrKHJvdykge1xuICAgIGlmICh0aGlzLnByb3BzLm9wdGlvbnMub25Sb3dDbGljaykge1xuICAgICAgdGhpcy5wcm9wcy5vcHRpb25zLm9uUm93Q2xpY2socm93KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTZWxlY3RBbGxSb3coZSkge1xuICAgIHZhciBpc1NlbGVjdGVkID0gZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQ7XG4gICAgbGV0IHNlbGVjdGVkUm93S2V5cyA9IFtdO1xuICAgIGxldCByZXN1bHQgPSB0cnVlO1xuICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdFJvdy5vblNlbGVjdEFsbCkge1xuICAgICAgcmVzdWx0ID0gdGhpcy5wcm9wcy5zZWxlY3RSb3cub25TZWxlY3RBbGwoaXNTZWxlY3RlZCxcbiAgICAgICAgaXNTZWxlY3RlZCA/IHRoaXMuc3RvcmUuZ2V0KCkgOiBbXSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICd1bmRlZmluZWQnIHx8IHJlc3VsdCAhPT0gZmFsc2UpIHtcbiAgICAgIGlmIChpc1NlbGVjdGVkKSB7XG4gICAgICAgIHNlbGVjdGVkUm93S2V5cyA9IHRoaXMuc3RvcmUuZ2V0QWxsUm93a2V5KCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RvcmUuc2V0U2VsZWN0ZWRSb3dLZXkoc2VsZWN0ZWRSb3dLZXlzKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZFJvd0tleXM6IHNlbGVjdGVkUm93S2V5c1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU2hvd09ubHlTZWxlY3RlZCgpIHtcbiAgICB0aGlzLnN0b3JlLmlnbm9yZU5vblNlbGVjdGVkKCk7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBpZiAodGhpcy5wcm9wcy5wYWdpbmF0aW9uKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLnN0b3JlLnBhZ2UoMSwgdGhpcy5zdGF0ZS5zaXplUGVyUGFnZSkuZ2V0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuc3RvcmUuZ2V0KCk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF0YTogcmVzdWx0LFxuICAgICAgY3VyclBhZ2U6IDEsXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVTZWxlY3RSb3cocm93LCBpc1NlbGVjdGVkKSB7XG4gICAgbGV0IGN1cnJTZWxlY3RlZCA9IHRoaXMuc3RvcmUuZ2V0U2VsZWN0ZWRSb3dLZXlzKCk7XG4gICAgbGV0IHJvd0tleSA9IHJvd1t0aGlzLnN0b3JlLmdldEtleUZpZWxkKCldO1xuICAgIGxldCByZXN1bHQgPSB0cnVlO1xuICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdFJvdy5vblNlbGVjdCkge1xuICAgICAgcmVzdWx0ID0gdGhpcy5wcm9wcy5zZWxlY3RSb3cub25TZWxlY3Qocm93LCBpc1NlbGVjdGVkKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ3VuZGVmaW5lZCcgfHwgcmVzdWx0ICE9PSBmYWxzZSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0Um93Lm1vZGUgPT09IENvbnN0LlJPV19TRUxFQ1RfU0lOR0xFKSB7XG4gICAgICAgIGN1cnJTZWxlY3RlZCA9IGlzU2VsZWN0ZWQgPyBbcm93S2V5XSA6IFtdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXNTZWxlY3RlZCkge1xuICAgICAgICAgIGN1cnJTZWxlY3RlZC5wdXNoKHJvd0tleSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3VyclNlbGVjdGVkID0gY3VyclNlbGVjdGVkLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gcm93S2V5ICE9PSBrZXk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zdG9yZS5zZXRTZWxlY3RlZFJvd0tleShjdXJyU2VsZWN0ZWQpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGVkUm93S2V5czogY3VyclNlbGVjdGVkXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVFZGl0Q2VsbChuZXdWYWwsIHJvd0luZGV4LCBjb2xJbmRleCkge1xuICAgIGxldCBmaWVsZE5hbWU7XG4gICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaCh0aGlzLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoY29sdW1uLCBpKSB7XG4gICAgICBpZiAoaSA9PSBjb2xJbmRleCkge1xuICAgICAgICBmaWVsZE5hbWUgPSBjb2x1bW4ucHJvcHMuZGF0YUZpZWxkO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5zdG9yZS5lZGl0KG5ld1ZhbCwgcm93SW5kZXgsIGZpZWxkTmFtZSkuZ2V0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhOiByZXN1bHRcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLnByb3BzLmNlbGxFZGl0LmFmdGVyU2F2ZUNlbGwpIHtcbiAgICAgIHRoaXMucHJvcHMuY2VsbEVkaXQuYWZ0ZXJTYXZlQ2VsbCh0aGlzLnN0YXRlLmRhdGFbcm93SW5kZXhdLCBmaWVsZE5hbWUsIG5ld1ZhbCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQWRkUm93QmVnaW4oKSB7XG4gICAgaWYgKHRoaXMucmVmcy5ib2R5KSB7XG4gICAgICAvLyB0aGlzLnJlZnMuYm9keS5jYW5jZWxFZGl0KCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQWRkUm93KG5ld09iaikge1xuICAgIGxldCBtc2cgPSBudWxsLCByZXN1bHQ7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuc3RvcmUuYWRkKG5ld09iaik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMucGFnaW5hdGlvbikge1xuICAgICAgLy9pZiBwYWdpbmF0aW9uIGlzIGVuYWJsZWQgYW5kIGluc2VydCByb3cgYmUgdHJpZ2dlciwgY2hhbmdlIHRvIGxhc3QgcGFnZVxuICAgICAgY29uc3QgeyBzaXplUGVyUGFnZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGNvbnN0IGN1cnJMYXN0UGFnZSA9IE1hdGguY2VpbCh0aGlzLnN0b3JlLmdldERhdGFOdW0oKSAvIHNpemVQZXJQYWdlKTtcbiAgICAgIHJlc3VsdCA9IHRoaXMuc3RvcmUucGFnZShjdXJyTGFzdFBhZ2UsIHNpemVQZXJQYWdlKS5nZXQoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkYXRhOiByZXN1bHQsXG4gICAgICAgIGN1cnJQYWdlOiBjdXJyTGFzdFBhZ2UsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gdGhpcy5zdG9yZS5nZXQoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkYXRhOiByZXN1bHRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9wdGlvbnMuYWZ0ZXJJbnNlcnRSb3cpIHtcbiAgICAgIHRoaXMucHJvcHMub3B0aW9ucy5hZnRlckluc2VydFJvdyhuZXdPYmopO1xuICAgIH1cbiAgfVxuXG4gIGdldFNpemVQZXJQYWdlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLnNpemVQZXJQYWdlO1xuICB9XG5cbiAgZ2V0Q3VycmVudFBhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuY3VyclBhZ2U7XG4gIH1cblxuICBoYW5kbGVEcm9wUm93KHJvd0tleXMpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IGRyb3BSb3dLZXlzID0gcm93S2V5cz9yb3dLZXlzOnRoaXMuc3RvcmUuZ2V0U2VsZWN0ZWRSb3dLZXlzKCk7XG4gICAgLy9hZGQgY29uZmlybSBiZWZvcmUgdGhlIGRlbGV0ZSBhY3Rpb24gaWYgdGhhdCBvcHRpb24gaXMgc2V0LlxuICAgIGlmIChkcm9wUm93S2V5cyAmJiBkcm9wUm93S2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vcHRpb25zLmhhbmRsZUNvbmZpcm1EZWxldGVSb3cpe1xuICAgICAgICB0aGlzLnByb3BzLm9wdGlvbnMuaGFuZGxlQ29uZmlybURlbGV0ZVJvdyhcbiAgICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGhhdC5kZWxldGVSb3coZHJvcFJvd0tleXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoY29uZmlybSgnQXJlIHlvdSBzdXJlIHdhbnQgZGVsZXRlPycpKSB7XG4gICAgICAgIHRoaXMuZGVsZXRlUm93KGRyb3BSb3dLZXlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkZWxldGVSb3coZHJvcFJvd0tleXMpe1xuXG4gICAgbGV0IHJlc3VsdDtcbiAgICB0aGlzLnN0b3JlLnJlbW92ZShkcm9wUm93S2V5cyk7ICAvL3JlbW92ZSBzZWxlY3RlZCBSb3dcbiAgICB0aGlzLnN0b3JlLnNldFNlbGVjdGVkUm93S2V5KFtdKTsgIC8vY2xlYXIgc2VsZWN0ZWQgcm93IGtleVxuXG4gICAgaWYgKHRoaXMucHJvcHMucGFnaW5hdGlvbikge1xuICAgICAgY29uc3QgeyBzaXplUGVyUGFnZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGxldCB7IGN1cnJQYWdlIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgbGV0IGN1cnJMYXN0UGFnZSA9IE1hdGguY2VpbCh0aGlzLnN0b3JlLmdldERhdGFOdW0oKSAvIHNpemVQZXJQYWdlKTtcbiAgICAgIGlmIChjdXJyUGFnZSA+IGN1cnJMYXN0UGFnZSlcbiAgICAgICAgY3VyclBhZ2UgPSBjdXJyTGFzdFBhZ2U7XG4gICAgICByZXN1bHQgPSB0aGlzLnN0b3JlLnBhZ2UoY3VyclBhZ2UsIHNpemVQZXJQYWdlKS5nZXQoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkYXRhOiByZXN1bHQsXG4gICAgICAgIHNlbGVjdGVkUm93S2V5czogdGhpcy5zdG9yZS5nZXRTZWxlY3RlZFJvd0tleXMoKSxcbiAgICAgICAgY3VyclBhZ2VcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSB0aGlzLnN0b3JlLmdldCgpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRhdGE6IHJlc3VsdCxcbiAgICAgICAgc2VsZWN0ZWRSb3dLZXlzOiB0aGlzLnN0b3JlLmdldFNlbGVjdGVkUm93S2V5cygpXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMub3B0aW9ucy5hZnRlckRlbGV0ZVJvdykge1xuICAgICAgdGhpcy5wcm9wcy5vcHRpb25zLmFmdGVyRGVsZXRlUm93KGRyb3BSb3dLZXlzKTtcbiAgICB9XG5cbiAgfVxuXG4gIGhhbmRsZUZpbHRlckRhdGEoZmlsdGVyT2JqKSB7XG4gICAgdGhpcy5zdG9yZS5maWx0ZXIoZmlsdGVyT2JqKTtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGlmICh0aGlzLnByb3BzLnBhZ2luYXRpb24pIHtcbiAgICAgIGNvbnN0IHsgc2l6ZVBlclBhZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgICByZXN1bHQgPSB0aGlzLnN0b3JlLnBhZ2UoMSwgc2l6ZVBlclBhZ2UpLmdldCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSB0aGlzLnN0b3JlLmdldCgpO1xuICAgIH1cbiAgICBpZih0aGlzLnByb3BzLm9wdGlvbnMuYWZ0ZXJDb2x1bW5GaWx0ZXIpXG4gICAgICB0aGlzLnByb3BzLm9wdGlvbnMuYWZ0ZXJDb2x1bW5GaWx0ZXIoZmlsdGVyT2JqLFxuICAgICAgICB0aGlzLnN0b3JlLmdldERhdGFJZ25vcmluZ1BhZ2luYXRpb24oKSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhOiByZXN1bHQsXG4gICAgICBjdXJyUGFnZTogMVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlRXhwb3J0Q1NWKCkge1xuICAgIHZhciByZXN1bHQgPSB0aGlzLnN0b3JlLmdldERhdGFJZ25vcmluZ1BhZ2luYXRpb24oKTtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHRoaXMucHJvcHMuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKGNvbHVtbikge1xuICAgICAgaWYgKGNvbHVtbi5wcm9wcy5oaWRkZW4gPT09IGZhbHNlKSB7XG4gICAgICAgIGtleXMucHVzaChjb2x1bW4ucHJvcHMuZGF0YUZpZWxkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBleHBvcnRDU1YocmVzdWx0LCBrZXlzLCB0aGlzLnByb3BzLmNzdkZpbGVOYW1lKTtcbiAgfVxuXG4gIGhhbmRsZVNlYXJjaChzZWFyY2hUZXh0KSB7XG4gICAgdGhpcy5zdG9yZS5zZWFyY2goc2VhcmNoVGV4dCk7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBpZiAodGhpcy5wcm9wcy5wYWdpbmF0aW9uKSB7XG4gICAgICBjb25zdCB7IHNpemVQZXJQYWdlIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgcmVzdWx0ID0gdGhpcy5zdG9yZS5wYWdlKDEsIHNpemVQZXJQYWdlKS5nZXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gdGhpcy5zdG9yZS5nZXQoKTtcbiAgICB9XG4gICAgaWYodGhpcy5wcm9wcy5vcHRpb25zLmFmdGVyU2VhcmNoKVxuICAgICAgdGhpcy5wcm9wcy5vcHRpb25zLmFmdGVyU2VhcmNoKHNlYXJjaFRleHQsIHRoaXMuc3RvcmUuZ2V0RGF0YUlnbm9yaW5nUGFnaW5hdGlvbigpKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRhdGE6IHJlc3VsdCxcbiAgICAgIGN1cnJQYWdlOiAxXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJQYWdpbmF0aW9uKCkge1xuICAgIGlmICh0aGlzLnByb3BzLnBhZ2luYXRpb24pIHtcbiAgICAgIGxldCBkYXRhU2l6ZTtcbiAgICAgIGlmICh0aGlzLmlzUmVtb3RlRGF0YVNvdXJjZSgpKSB7XG4gICAgICAgIGRhdGFTaXplID0gdGhpcy5wcm9wcy5mZXRjaEluZm8uZGF0YVRvdGFsU2l6ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGFTaXplID0gdGhpcy5zdG9yZS5nZXREYXRhTnVtKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLWZvb3Rlci1wYWdpbmF0aW9uXCI+XG4gICAgICAgICAgPFBhZ2luYXRpb25MaXN0XG4gICAgICAgICAgICByZWY9XCJwYWdpbmF0aW9uXCJcbiAgICAgICAgICAgIGN1cnJQYWdlPXsgdGhpcy5zdGF0ZS5jdXJyUGFnZSB9XG4gICAgICAgICAgICBjaGFuZ2VQYWdlPXt0aGlzLmhhbmRsZVBhZ2luYXRpb25EYXRhLmJpbmQodGhpcyl9XG4gICAgICAgICAgICBzaXplUGVyUGFnZT17IHRoaXMuc3RhdGUuc2l6ZVBlclBhZ2UgfVxuICAgICAgICAgICAgc2l6ZVBlclBhZ2VMaXN0PXt0aGlzLnByb3BzLm9wdGlvbnMuc2l6ZVBlclBhZ2VMaXN0IHx8IENvbnN0LlNJWkVfUEVSX1BBR0VfTElTVH1cbiAgICAgICAgICAgIHBhZ2luYXRpb25TaXplPXt0aGlzLnByb3BzLm9wdGlvbnMucGFnaW5hdGlvblNpemUgfHwgQ29uc3QuUEFHSU5BVElPTl9TSVpFfVxuICAgICAgICAgICAgcmVtb3RlPXt0aGlzLmlzUmVtb3RlRGF0YVNvdXJjZSgpfVxuICAgICAgICAgICAgZGF0YVNpemU9e2RhdGFTaXplfVxuICAgICAgICAgICAgb25TaXplUGVyUGFnZUxpc3Q9e3RoaXMucHJvcHMub3B0aW9ucy5vblNpemVQZXJQYWdlTGlzdH1cbiAgICAgICAgICAgIHByZVBhZ2U9e3RoaXMucHJvcHMub3B0aW9ucy5wcmVQYWdlIHx8IENvbnN0LlBSRV9QQUdFfVxuICAgICAgICAgICAgbmV4dFBhZ2U9e3RoaXMucHJvcHMub3B0aW9ucy5uZXh0UGFnZSB8fCBDb25zdC5ORVhUX1BBR0V9XG4gICAgICAgICAgICBmaXJzdFBhZ2U9e3RoaXMucHJvcHMub3B0aW9ucy5maXJzdFBhZ2UgfHwgQ29uc3QuRklSU1RfUEFHRX1cbiAgICAgICAgICAgIGxhc3RQYWdlPXt0aGlzLnByb3BzLm9wdGlvbnMubGFzdFBhZ2UgfHwgQ29uc3QuTEFTVF9QQUdFfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZW5kZXJUb29sQmFyKCkge1xuICAgIGxldCBlbmFibGVTaG93T25seVNlbGVjdGVkID0gdGhpcy5wcm9wcy5zZWxlY3RSb3cgJiYgdGhpcy5wcm9wcy5zZWxlY3RSb3cuc2hvd09ubHlTZWxlY3RlZDtcbiAgICBpZiAoZW5hYmxlU2hvd09ubHlTZWxlY3RlZFxuICAgICAgICB8fCB0aGlzLnByb3BzLmluc2VydFJvd1xuICAgICAgICB8fCB0aGlzLnByb3BzLmRlbGV0ZVJvd1xuICAgICAgICB8fCB0aGlzLnByb3BzLnNlYXJjaFxuICAgICAgICB8fCB0aGlzLnByb3BzLmV4cG9ydENTVikge1xuICAgICAgbGV0IGNvbHVtbnM7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuKSkge1xuICAgICAgICBjb2x1bW5zID0gdGhpcy5wcm9wcy5jaGlsZHJlbi5tYXAoZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICAgIHZhciBwcm9wcyA9IGNvbHVtbi5wcm9wcztcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgICBmaWVsZDogcHJvcHMuZGF0YUZpZWxkLFxuICAgICAgICAgICAgLy93aGVuIHlvdSB3YW50IHNhbWUgYXV0byBnZW5lcmF0ZSB2YWx1ZSBhbmQgbm90IGFsbG93IGVkaXQsIGV4YW1wbGUgSUQgZmllbGRcbiAgICAgICAgICAgIGF1dG9WYWx1ZTogcHJvcHMuYXV0b1ZhbHVlIHx8IGZhbHNlLFxuICAgICAgICAgICAgLy9mb3IgY3JlYXRlIGVkaXRvciwgbm8gcGFyYW1zIGZvciBjb2x1bW4uZWRpdGFibGUoKSBpbmRpY2F0ZSB0aGF0IGVkaXRvciBmb3IgbmV3IHJvd1xuICAgICAgICAgICAgZWRpdGFibGU6IHByb3BzLmVkaXRhYmxlICYmICh0eXBlb2YgcHJvcHMuZWRpdGFibGUgPT09IFwiZnVuY3Rpb25cIikgPyBwcm9wcy5lZGl0YWJsZSgpIDogcHJvcHMuZWRpdGFibGUsXG4gICAgICAgICAgICBmb3JtYXQ6IHByb3BzLmRhdGFGb3JtYXQgPyBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9wcy5kYXRhRm9ybWF0KHZhbHVlLCBudWxsLCBwcm9wcy5mb3JtYXRFeHRyYURhdGEpLnJlcGxhY2UoLzwuKj8+L2csJycpO1xuICAgICAgICAgICAgfSA6IGZhbHNlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2x1bW5zID0gW3tcbiAgICAgICAgICBuYW1lOiB0aGlzLnByb3BzLmNoaWxkcmVuLnByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIGZpZWxkOiB0aGlzLnByb3BzLmNoaWxkcmVuLnByb3BzLmRhdGFGaWVsZCxcbiAgICAgICAgICBlZGl0YWJsZTogdGhpcy5wcm9wcy5jaGlsZHJlbi5wcm9wcy5lZGl0YWJsZVxuICAgICAgICB9XTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbC1iYXJcIj5cbiAgICAgICAgICA8VG9vbEJhclxuICAgICAgICAgICAgY2xlYXJTZWFyY2g9e3RoaXMucHJvcHMub3B0aW9ucy5jbGVhclNlYXJjaH1cbiAgICAgICAgICAgIGVuYWJsZUluc2VydD17dGhpcy5wcm9wcy5pbnNlcnRSb3d9XG4gICAgICAgICAgICBlbmFibGVEZWxldGU9e3RoaXMucHJvcHMuZGVsZXRlUm93fVxuICAgICAgICAgICAgZW5hYmxlU2VhcmNoPXt0aGlzLnByb3BzLnNlYXJjaH1cbiAgICAgICAgICAgIGVuYWJsZUV4cG9ydENTVj17dGhpcy5wcm9wcy5leHBvcnRDU1Z9XG4gICAgICAgICAgICBlbmFibGVTaG93T25seVNlbGVjdGVkPXtlbmFibGVTaG93T25seVNlbGVjdGVkfVxuICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgIHNlYXJjaFBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnNlYXJjaFBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgb25BZGRSb3c9e3RoaXMuaGFuZGxlQWRkUm93LmJpbmQodGhpcyl9XG4gICAgICAgICAgICBvbkFkZFJvd0JlZ2luPXt0aGlzLmhhbmRsZUFkZFJvd0JlZ2luLmJpbmQodGhpcyl9XG4gICAgICAgICAgICBvbkRyb3BSb3c9e3RoaXMuaGFuZGxlRHJvcFJvdy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgb25TZWFyY2g9e3RoaXMuaGFuZGxlU2VhcmNoLmJpbmQodGhpcyl9XG4gICAgICAgICAgICBvbkV4cG9ydENTVj17dGhpcy5oYW5kbGVFeHBvcnRDU1YuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIG9uU2hvd09ubHlTZWxlY3RlZD17dGhpcy5oYW5kbGVTaG93T25seVNlbGVjdGVkLmJpbmQodGhpcyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlclRhYmxlRmlsdGVyKGNvbHVtbnMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5jb2x1bW5GaWx0ZXIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUYWJsZUZpbHRlciBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgICAgICAgICAgcm93U2VsZWN0VHlwZT17dGhpcy5wcm9wcy5zZWxlY3RSb3cubW9kZX1cbiAgICAgICAgICAgICAgICAgICAgIG9uRmlsdGVyPXt0aGlzLmhhbmRsZUZpbHRlckRhdGEuYmluZCh0aGlzKX0vPlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgX3Njcm9sbEhlYWRlciA9IChlKSA9PiB7XG4gICAgdGhpcy5yZWZzLmhlYWRlci5yZWZzLmNvbnRhaW5lci5zY3JvbGxMZWZ0ID0gZS5jdXJyZW50VGFyZ2V0LnNjcm9sbExlZnQ7XG4gIH1cblxuICBfYWRqdXN0SGVhZGVyV2lkdGggPSAoKSA9PiB7XG4gICAgdmFyIHRhYmxlSGVhZGVyRG9tID0gdGhpcy5yZWZzLmhlYWRlci5yZWZzLmNvbnRhaW5lci5jaGlsZE5vZGVzWzBdO1xuICAgIHZhciB0YWJsZUJvZHlEb20gPSB0aGlzLnJlZnMuYm9keS5yZWZzLmNvbnRhaW5lci5jaGlsZE5vZGVzWzBdO1xuICAgIGlmKHRhYmxlSGVhZGVyRG9tLm9mZnNldFdpZHRoICE9PSB0YWJsZUJvZHlEb20ub2Zmc2V0V2lkdGgpe1xuICAgICAgdGFibGVIZWFkZXJEb20uc3R5bGUud2lkdGggPSB0YWJsZUJvZHlEb20ub2Zmc2V0V2lkdGggKyBcInB4XCI7XG4gICAgfVxuICAgIGNvbnN0IGhlYWRlclByb3BzID0gdGhpcy5yZWZzLmJvZHkuZ2V0Qm9keUhlYWRlckRvbVByb3AoKTtcbiAgICB0aGlzLnJlZnMuaGVhZGVyLmZpdEhlYWRlcihoZWFkZXJQcm9wcyxcbiAgICAgIHRoaXMucmVmcy5ib2R5LnJlZnMuY29udGFpbmVyLnNjcm9sbEhlaWdodCA+IHRoaXMucmVmcy5ib2R5LnJlZnMuY29udGFpbmVyLmNsaWVudEhlaWdodCk7XG4gIH1cbn1cblxuQm9vdHN0cmFwVGFibGUucHJvcFR5cGVzID0ge1xuICBrZXlGaWVsZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgaGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBtYXhIZWlnaHQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGRhdGE6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1JlYWN0LlByb3BUeXBlcy5hcnJheSwgUmVhY3QuUHJvcFR5cGVzLm9iamVjdF0pLFxuICByZW1vdGU6IFJlYWN0LlByb3BUeXBlcy5ib29sLCAvLyByZW1vdGUgZGF0YSwgZGVmYXVsdCBpcyBmYWxzZVxuICBzdHJpcGVkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgYm9yZGVyZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBob3ZlcjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGNvbmRlbnNlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIHBhZ2luYXRpb246IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBzZWFyY2hQbGFjZWhvbGRlcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VsZWN0Um93OiBSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgIG1vZGU6IFJlYWN0LlByb3BUeXBlcy5vbmVPZihbXG4gICAgICBDb25zdC5ST1dfU0VMRUNUX05PTkUsXG4gICAgICBDb25zdC5ST1dfU0VMRUNUX1NJTkdMRSxcbiAgICAgIENvbnN0LlJPV19TRUxFQ1RfTVVMVElcbiAgICBdKSxcbiAgICBiZ0NvbG9yOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNlbGVjdGVkOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gICAgb25TZWxlY3Q6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2VsZWN0QWxsOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBjbGlja1RvU2VsZWN0OiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBoaWRlU2VsZWN0Q29sdW1uOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBjbGlja1RvU2VsZWN0QW5kRWRpdENlbGw6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIHNob3dPbmx5U2VsZWN0ZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sXG4gIH0pLFxuICBjZWxsRWRpdDogUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBtb2RlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGJsdXJUb1NhdmU6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGFmdGVyU2F2ZUNlbGw6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG4gIH0pLFxuICBpbnNlcnRSb3c6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBkZWxldGVSb3c6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBzZWFyY2g6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBjb2x1bW5GaWx0ZXI6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICB0ckNsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLmFueSxcbiAgb3B0aW9uczogUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjbGVhclNlYXJjaDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgc29ydE5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgc29ydE9yZGVyOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFmdGVyVGFibGVDb21wbGV0ZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgYWZ0ZXJEZWxldGVSb3c6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIGFmdGVySW5zZXJ0Um93OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBhZnRlclNlYXJjaDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgYWZ0ZXJDb2x1bW5GaWx0ZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uUm93Q2xpY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIHBhZ2U6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgc2l6ZVBlclBhZ2VMaXN0OiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gICAgc2l6ZVBlclBhZ2U6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgcGFnaW5hdGlvblNpemU6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgb25Tb3J0Q2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvblBhZ2VDaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2l6ZVBlclBhZ2VMaXN0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBub0RhdGFUZXh0OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGhhbmRsZUNvbmZpcm1EZWxldGVSb3c6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIHByZVBhZ2U6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgbmV4dFBhZ2U6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgZmlyc3RQYWdlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxhc3RQYWdlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG4gIH0pLFxuICBmZXRjaEluZm86IFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4gICAgZGF0YVRvdGFsU2l6ZTogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgfSksXG4gIGV4cG9ydENTVjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGNzdkZpbGVOYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG59O1xuQm9vdHN0cmFwVGFibGUuZGVmYXVsdFByb3BzID0ge1xuICBoZWlnaHQ6IFwiMTAwJVwiLFxuICBtYXhIZWlnaHQ6IHVuZGVmaW5lZCxcbiAgc3RyaXBlZDogZmFsc2UsXG4gIGJvcmRlcmVkOiB0cnVlLFxuICBob3ZlcjogZmFsc2UsXG4gIGNvbmRlbnNlZDogZmFsc2UsXG4gIHBhZ2luYXRpb246IGZhbHNlLFxuICBzZWFyY2hQbGFjZWhvbGRlcjogdW5kZWZpbmVkLFxuICBzZWxlY3RSb3c6IHtcbiAgICBtb2RlOiBDb25zdC5ST1dfU0VMRUNUX05PTkUsXG4gICAgYmdDb2xvcjogQ29uc3QuUk9XX1NFTEVDVF9CR19DT0xPUixcbiAgICBzZWxlY3RlZDogW10sXG4gICAgb25TZWxlY3Q6IHVuZGVmaW5lZCxcbiAgICBvblNlbGVjdEFsbDogdW5kZWZpbmVkLFxuICAgIGNsaWNrVG9TZWxlY3Q6IGZhbHNlLFxuICAgIGhpZGVTZWxlY3RDb2x1bW46IGZhbHNlLFxuICAgIGNsaWNrVG9TZWxlY3RBbmRFZGl0Q2VsbDogZmFsc2UsXG4gICAgc2hvd09ubHlTZWxlY3RlZDogZmFsc2VcbiAgfSxcbiAgY2VsbEVkaXQ6IHtcbiAgICBtb2RlOiBDb25zdC5DRUxMX0VESVRfTk9ORSxcbiAgICBibHVyVG9TYXZlOiBmYWxzZSxcbiAgICBhZnRlclNhdmVDZWxsOiB1bmRlZmluZWRcbiAgfSxcbiAgaW5zZXJ0Um93OiBmYWxzZSxcbiAgZGVsZXRlUm93OiBmYWxzZSxcbiAgc2VhcmNoOiBmYWxzZSxcbiAgbXVsdGlDb2x1bW5TZWFyY2g6IGZhbHNlLFxuICBjb2x1bW5GaWx0ZXI6IGZhbHNlLFxuICB0ckNsYXNzTmFtZTogJycsXG4gIG9wdGlvbnM6IHtcbiAgICBjbGVhclNlYXJjaDogZmFsc2UsXG4gICAgc29ydE5hbWU6IHVuZGVmaW5lZCxcbiAgICBzb3J0T3JkZXI6IHVuZGVmaW5lZCxcbiAgICBhZnRlclRhYmxlQ29tcGxldGU6IHVuZGVmaW5lZCxcbiAgICBhZnRlckRlbGV0ZVJvdzogdW5kZWZpbmVkLFxuICAgIGFmdGVySW5zZXJ0Um93OiB1bmRlZmluZWQsXG4gICAgYWZ0ZXJTZWFyY2g6IHVuZGVmaW5lZCxcbiAgICBhZnRlckNvbHVtbkZpbHRlcjogdW5kZWZpbmVkLFxuICAgIG9uUm93Q2xpY2s6IHVuZGVmaW5lZCxcbiAgICBvbk1vdXNlTGVhdmU6IHVuZGVmaW5lZCxcbiAgICBvbk1vdXNlRW50ZXI6IHVuZGVmaW5lZCxcbiAgICBvblJvd01vdXNlT3V0OiB1bmRlZmluZWQsXG4gICAgb25Sb3dNb3VzZU92ZXI6IHVuZGVmaW5lZCxcbiAgICBwYWdlOiB1bmRlZmluZWQsXG4gICAgc2l6ZVBlclBhZ2VMaXN0OiBDb25zdC5TSVpFX1BFUl9QQUdFX0xJU1QsXG4gICAgc2l6ZVBlclBhZ2U6IHVuZGVmaW5lZCxcbiAgICBwYWdpbmF0aW9uU2l6ZTogQ29uc3QuUEFHSU5BVElPTl9TSVpFLFxuICAgIG9uU2l6ZVBlclBhZ2VMaXN0OiB1bmRlZmluZWQsXG4gICAgbm9EYXRhVGV4dDogdW5kZWZpbmVkLFxuICAgIGhhbmRsZUNvbmZpcm1EZWxldGVSb3c6IHVuZGVmaW5lZCxcbiAgICBwcmVQYWdlOiBDb25zdC5QUkVfUEFHRSxcbiAgICBuZXh0UGFnZTogQ29uc3QuTkVYVF9QQUdFLFxuICAgIGZpcnN0UGFnZTogQ29uc3QuRklSU1RfUEFHRSxcbiAgICBsYXN0UGFnZTogQ29uc3QuTEFTVF9QQUdFXG4gIH0sXG4gIGZldGNoSW5mbzoge1xuICAgIGRhdGFUb3RhbFNpemU6IDAsXG4gIH0sXG4gIGV4cG9ydENTVjogZmFsc2UsXG4gIGNzdkZpbGVOYW1lOiB1bmRlZmluZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvb3RzdHJhcFRhYmxlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvQm9vdHN0cmFwVGFibGUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifVxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTYgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY2xhc3NuYW1lcy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgU09SVF9ERVNDOiBcImRlc2NcIixcbiAgU09SVF9BU0M6IFwiYXNjXCIsXG4gIFNJWkVfUEVSX1BBR0U6IDEwLFxuICBORVhUX1BBR0U6IFwiPlwiLFxuICBMQVNUX1BBR0U6IFwiPj5cIixcbiAgUFJFX1BBR0U6IFwiPFwiLFxuICBGSVJTVF9QQUdFOiBcIjw8XCIsXG4gIFJPV19TRUxFQ1RfQkdfQ09MT1I6IFwiXCIsXG4gIFJPV19TRUxFQ1RfTk9ORTogXCJub25lXCIsXG4gIFJPV19TRUxFQ1RfU0lOR0xFOiBcInJhZGlvXCIsXG4gIFJPV19TRUxFQ1RfTVVMVEk6IFwiY2hlY2tib3hcIixcbiAgQ0VMTF9FRElUX05PTkU6IFwibm9uZVwiLFxuICBDRUxMX0VESVRfQ0xJQ0s6IFwiY2xpY2tcIixcbiAgQ0VMTF9FRElUX0RCQ0xJQ0s6IFwiZGJjbGlja1wiLFxuICBTSVpFX1BFUl9QQUdFX0xJU1Q6IFsxMCwgMjUsIDMwLCA1MF0sXG4gIFBBR0lOQVRJT05fU0laRTogNSxcbiAgTk9fREFUQV9URVhUOiBcIlRoZXJlIGlzIG5vIGRhdGEgdG8gZGlzcGxheVwiLFxuICBTSE9XX09OTFlfU0VMRUNUOiBcIlNob3cgU2VsZWN0ZWQgT25seVwiLFxuICBTSE9XX0FMTDogXCJTaG93IEFsbFwiLFxuICBGSUxURVJfREVMQVk6IDUwMCxcbiAgRklMVEVSX1RZUEU6IHtcbiAgICBURVhUOiBcIlRleHRGaWx0ZXJcIixcbiAgICBTRUxFQ1Q6IFwiU2VsZWN0RmlsdGVyXCIsXG4gICAgTlVNQkVSOiBcIk51bWJlckZpbHRlclwiLFxuICAgIERBVEU6IFwiRGF0ZUZpbHRlclwiLFxuICAgIENVU1RPTTogXCJDdXN0b21GaWx0ZXJcIlxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9Db25zdC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBDb25zdCBmcm9tICcuL0NvbnN0JztcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgY2xhc3NTZXQgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgU2VsZWN0Um93SGVhZGVyQ29sdW1uIGZyb20gJy4vU2VsZWN0Um93SGVhZGVyQ29sdW1uJztcblxuY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbXBvbmVudERpZE1vdW50KCkgeyB0aGlzLnVwZGF0ZSh0aGlzLnByb3BzLmNoZWNrZWQpOyB9XG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHsgdGhpcy51cGRhdGUocHJvcHMuY2hlY2tlZCk7IH1cbiAgdXBkYXRlKGNoZWNrZWQpIHtcbiAgICBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS5pbmRldGVybWluYXRlID0gY2hlY2tlZCA9PT0gJ2luZGV0ZXJtaW5hdGUnO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8aW5wdXQgY2xhc3NOYW1lPSdyZWFjdC1icy1zZWxlY3QtYWxsJyB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt0aGlzLnByb3BzLmNoZWNrZWR9IG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfSAvPlxuICB9XG59XG5cbmNsYXNzIFRhYmxlSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc2VsZWN0Um93Q29sdW1uV2lkdGggPSBudWxsO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgdmFyIGNvbnRhaW5lckNsYXNzZXMgPSBjbGFzc1NldChcInRhYmxlLWhlYWRlclwiKTtcbiAgICB2YXIgdGFibGVDbGFzc2VzID0gY2xhc3NTZXQoXCJ0YWJsZVwiLCBcInRhYmxlLWhvdmVyXCIsIHtcbiAgICAgICAgXCJ0YWJsZS1ib3JkZXJlZFwiOiB0aGlzLnByb3BzLmJvcmRlcmVkLFxuICAgICAgICBcInRhYmxlLWNvbmRlbnNlZFwiOiB0aGlzLnByb3BzLmNvbmRlbnNlZFxuICAgIH0pO1xuICAgIHZhciBzZWxlY3RSb3dIZWFkZXJDb2wgPSB0aGlzLnByb3BzLmhpZGVTZWxlY3RDb2x1bW4/bnVsbDp0aGlzLnJlbmRlclNlbGVjdFJvd0hlYWRlcigpO1xuICAgIHRoaXMuX2F0dGFjaENsZWFyU29ydENhcmV0RnVuYygpO1xuXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1oZWFkZXItd3JhcHBlclwiPlxuICAgICAgICA8ZGl2IHJlZj1cImNvbnRhaW5lclwiIGNsYXNzTmFtZT17Y29udGFpbmVyQ2xhc3Nlc30+XG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17dGFibGVDbGFzc2VzfT5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgPHRyIHJlZj1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgIHtzZWxlY3RSb3dIZWFkZXJDb2x9XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyU2VsZWN0Um93SGVhZGVyKCl7XG4gICAgaWYodGhpcy5wcm9wcy5yb3dTZWxlY3RUeXBlID09IENvbnN0LlJPV19TRUxFQ1RfU0lOR0xFKSB7XG4gICAgICByZXR1cm4gKDxTZWxlY3RSb3dIZWFkZXJDb2x1bW4gd2lkdGg9e3RoaXMuc2VsZWN0Um93Q29sdW1uV2lkdGh9PjwvU2VsZWN0Um93SGVhZGVyQ29sdW1uPik7XG4gICAgfWVsc2UgaWYodGhpcy5wcm9wcy5yb3dTZWxlY3RUeXBlID09IENvbnN0LlJPV19TRUxFQ1RfTVVMVEkpe1xuICAgICAgcmV0dXJuICg8U2VsZWN0Um93SGVhZGVyQ29sdW1uIHdpZHRoPXt0aGlzLnNlbGVjdFJvd0NvbHVtbldpZHRofT5cbiAgICAgICAgICA8Q2hlY2tib3ggb25DaGFuZ2U9e3RoaXMucHJvcHMub25TZWxlY3RBbGxSb3d9IGNoZWNrZWQ9e3RoaXMucHJvcHMuaXNTZWxlY3RBbGx9Lz5cbiAgICAgICAgPC9TZWxlY3RSb3dIZWFkZXJDb2x1bW4+XG4gICAgICApO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgX2F0dGFjaENsZWFyU29ydENhcmV0RnVuYygpe1xuICAgIGlmKEFycmF5LmlzQXJyYXkodGhpcy5wcm9wcy5jaGlsZHJlbikpe1xuICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLnByb3BzLmNoaWxkcmVuLmxlbmd0aDtpKyspe1xuICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMucHJvcHMuY2hpbGRyZW5baV0ucHJvcHMuZGF0YUZpZWxkO1xuICAgICAgICBjb25zdCBzb3J0ID0gZmllbGQgPT09IHRoaXMucHJvcHMuc29ydE5hbWUgPyB0aGlzLnByb3BzLnNvcnRPcmRlciA6IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlbltpXSA9XG4gICAgICAgICAgUmVhY3QuY2xvbmVFbGVtZW50KHRoaXMucHJvcHMuY2hpbGRyZW5baV0sXG4gICAgICAgICAgICB7IGtleTogaSwgb25Tb3J0OiB0aGlzLnByb3BzLm9uU29ydCwgc29ydCB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmllbGQgPSB0aGlzLnByb3BzLmNoaWxkcmVuLnByb3BzLmRhdGFGaWVsZDtcbiAgICAgIGNvbnN0IHNvcnQgPSBmaWVsZCA9PT0gdGhpcy5wcm9wcy5zb3J0TmFtZSA/IHRoaXMucHJvcHMuc29ydE9yZGVyIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlbiA9XG4gICAgICAgIFJlYWN0LmNsb25lRWxlbWVudCh0aGlzLnByb3BzLmNoaWxkcmVuLCB7a2V5OiAwLCBvblNvcnQ6IHRoaXMucHJvcHMub25Tb3J0LCBzb3J0fSk7XG4gICAgfVxuICB9XG5cbiAgZml0SGVhZGVyKGhlYWRlclByb3BzLCBpc1ZlcnRpY2FsU2Nyb2xsQmFyKXtcbiAgICBpZihBcnJheS5pc0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pKXtcbiAgICAgIGxldCBzdGFydFBvc2l0aW9uID0gKHRoaXMucHJvcHMucm93U2VsZWN0VHlwZSA9PSBDb25zdC5ST1dfU0VMRUNUX1NJTkdMRSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yb3dTZWxlY3RUeXBlID09IENvbnN0LlJPV19TRUxFQ1RfTVVMVEkpICYmICF0aGlzLnByb3BzLmhpZGVTZWxlY3RDb2x1bW4gPyAxOjA7XG4gICAgICBpZihzdGFydFBvc2l0aW9uID09IDEpXG4gICAgICAgIHRoaXMuc2VsZWN0Um93Q29sdW1uV2lkdGggPSBoZWFkZXJQcm9wc1swXS53aWR0aDtcbiAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5wcm9wcy5jaGlsZHJlbi5sZW5ndGg7aSsrKXtcbiAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlbltpXSA9XG4gICAgICAgICAgUmVhY3QuY2xvbmVFbGVtZW50KHRoaXMucHJvcHMuY2hpbGRyZW5baV0sIHt3aWR0aDogaGVhZGVyUHJvcHNbaStzdGFydFBvc2l0aW9uXS53aWR0aCtcInB4XCJ9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlbiA9XG4gICAgICAgIFJlYWN0LmNsb25lRWxlbWVudCh0aGlzLnByb3BzLmNoaWxkcmVuLCB7d2lkdGg6IGhlYWRlclByb3BzWzBdLndpZHRoK1wicHhcIn0pO1xuICAgIH1cbiAgICBpZih0aGlzLnByb3BzLmNvbmRlbnNlZCAmJiAhdGhpcy5wcm9wcy5pc0ZpbHRlcmVkKSB7XG4gICAgICB0aGlzLnJlZnMuY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IFwiMzZweFwiO1xuICAgIH1cbiAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgaWYoaXNWZXJ0aWNhbFNjcm9sbEJhcilcbiAgICAgIHRoaXMucmVmcy5jb250YWluZXIuc3R5bGUubWFyZ2luUmlnaHQgPSBVdGlsLmdldFNjcm9sbEJhcldpZHRoKCkgKyBcInB4XCI7XG4gIH1cbn1cblRhYmxlSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgcm93U2VsZWN0VHlwZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgb25Tb3J0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgb25TZWxlY3RBbGxSb3c6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBzb3J0TmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgc29ydE9yZGVyOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBoaWRlU2VsZWN0Q29sdW1uOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgYm9yZGVyZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBjb25kZW5zZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBpc0ZpbHRlcmVkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgaXNTZWxlY3RBbGw6IFJlYWN0LlByb3BUeXBlcy5vbmVPZihbdHJ1ZSwgJ2luZGV0ZXJtaW5hdGUnLCBmYWxzZV0pXG59O1xuXG5UYWJsZUhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG59O1xuZXhwb3J0IGRlZmF1bHQgVGFibGVIZWFkZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9UYWJsZUhlYWRlci5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82X187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdERPTVwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1kb21cIixcImNvbW1vbmpzXCI6XCJyZWFjdC1kb21cIixcImFtZFwiOlwicmVhY3QtZG9tXCJ9XG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb25zdCBmcm9tICcuL0NvbnN0JztcbmltcG9ydCBjbGFzc1NldCBmcm9tICdjbGFzc25hbWVzJztcbmV4cG9ydCBkZWZhdWx0IHtcblxuICByZW5kZXJTb3J0Q2FyZXQob3JkZXIpIHtcbiAgICB2YXIgd3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHdyYXAuY2xhc3NOYW1lID0gXCJvcmRlclwiO1xuICAgIGlmKG9yZGVyID09IENvbnN0LlNPUlRfQVNDKSB3cmFwLmNsYXNzTmFtZSArPSBcIiBkcm9wdXBcIjtcbiAgICB2YXIgaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBpbm5lci5jbGFzc05hbWUgPSBcImNhcmV0XCI7XG4gICAgaW5uZXIuc3R5bGUubWFyZ2luID0gXCIxMHB4IDVweFwiO1xuICAgIHdyYXAuYXBwZW5kQ2hpbGQoaW5uZXIpO1xuICAgIHJldHVybiB3cmFwO1xuICB9LFxuXG4gIHJlbmRlclJlYWN0U29ydENhcmV0KG9yZGVyKXtcbiAgICB2YXIgb3JkZXJDbGFzcyA9IGNsYXNzU2V0KFwib3JkZXJcIiwge1xuICAgICAgJ2Ryb3B1cCc6IG9yZGVyID09IENvbnN0LlNPUlRfQVNDXG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17b3JkZXJDbGFzc30+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmV0XCIgc3R5bGU9e3ttYXJnaW46ICcxMHB4IDVweCd9fT48L3NwYW4+XG4gICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfSxcblxuICBnZXRTY3JvbGxCYXJXaWR0aCgpe1xuICAgIHZhciBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbm5lci5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgIGlubmVyLnN0eWxlLmhlaWdodCA9IFwiMjAwcHhcIjtcblxuICAgIHZhciBvdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG91dGVyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIG91dGVyLnN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgb3V0ZXIuc3R5bGUubGVmdCA9IFwiMHB4XCI7XG4gICAgb3V0ZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgb3V0ZXIuc3R5bGUud2lkdGggPSBcIjIwMHB4XCI7XG4gICAgb3V0ZXIuc3R5bGUuaGVpZ2h0ID0gXCIxNTBweFwiO1xuICAgIG91dGVyLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICBvdXRlci5hcHBlbmRDaGlsZCAoaW5uZXIpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCAob3V0ZXIpO1xuICAgIHZhciB3MSA9IGlubmVyLm9mZnNldFdpZHRoO1xuICAgIG91dGVyLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gICAgdmFyIHcyID0gaW5uZXIub2Zmc2V0V2lkdGg7XG4gICAgaWYgKHcxID09IHcyKSB3MiA9IG91dGVyLmNsaWVudFdpZHRoO1xuXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCAob3V0ZXIpO1xuXG4gICAgcmV0dXJuICh3MSAtIHcyKTtcbiAgfVxuXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NTZXQgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi9Db25zdCc7XG5cbmNsYXNzIFNlbGVjdFJvd0hlYWRlckNvbHVtbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuICByZW5kZXIoKXtcbiAgICB2YXIgdGhTdHlsZSA9IHtcbiAgICAgIHdpZHRoOiBwYXJzZUludCh0aGlzLnByb3BzLndpZHRoKT90aGlzLnByb3BzLndpZHRoOjM1XG4gICAgfTtcblxuICAgIHJldHVybihcbiAgICAgIDx0aCBzdHlsZT17dGhTdHlsZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGgtaW5uZXIgdGFibGUtaGVhZGVyLWNvbHVtblwiPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGg+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdFJvd0hlYWRlckNvbHVtbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL1NlbGVjdFJvd0hlYWRlckNvbHVtbi5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi9Db25zdCc7XG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJy4vVGFibGVSb3cnO1xuaW1wb3J0IFRhYmxlQ29sdW1uIGZyb20gJy4vVGFibGVDb2x1bW4nO1xuaW1wb3J0IFRhYmxlRWRpdENvbHVtbiBmcm9tICcuL1RhYmxlRWRpdENvbHVtbic7XG5pbXBvcnQgY2xhc3NTZXQgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbnZhciBpc0Z1bj1mdW5jdGlvbihvYmope1xuICByZXR1cm4gb2JqJiYodHlwZW9mIG9iaj09PVwiZnVuY3Rpb25cIik7XG5cbn07XG5jbGFzcyBUYWJsZUJvZHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGN1cnJFZGl0Q2VsbDogbnVsbFxuICAgIH07XG4gICAgdGhpcy5lZGl0aW5nID0gZmFsc2U7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHRoaXMuYWRqdXN0Qm9keSgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCl7XG4gICAgdGhpcy5hZGp1c3RCb2R5KCk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICB2YXIgY29udGFpbmVyQ2xhc3NlcyA9IGNsYXNzU2V0KFwidGFibGUtY29udGFpbmVyXCIpO1xuXG4gICAgdmFyIHRhYmxlQ2xhc3NlcyA9IGNsYXNzU2V0KFwidGFibGVcIiwge1xuICAgICAgJ3RhYmxlLXN0cmlwZWQnOiB0aGlzLnByb3BzLnN0cmlwZWQsXG4gICAgICAndGFibGUtYm9yZGVyZWQnOiB0aGlzLnByb3BzLmJvcmRlcmVkLFxuICAgICAgJ3RhYmxlLWhvdmVyJzogdGhpcy5wcm9wcy5ob3ZlcixcbiAgICAgICd0YWJsZS1jb25kZW5zZWQnOiB0aGlzLnByb3BzLmNvbmRlbnNlZFxuICAgIH0pO1xuXG4gICAgdmFyIGlzU2VsZWN0Um93RGVmaW5lZCA9IHRoaXMuX2lzU2VsZWN0Um93RGVmaW5lZCgpO1xuICAgIHZhciB0YWJsZUhlYWRlciA9IHRoaXMucmVuZGVyVGFibGVIZWFkZXIoaXNTZWxlY3RSb3dEZWZpbmVkKTtcblxuICAgIHZhciB0YWJsZVJvd3MgPSB0aGlzLnByb3BzLmRhdGEubWFwKGZ1bmN0aW9uKGRhdGEsIHIpe1xuICAgICAgdmFyIHRhYmxlQ29sdW1ucyA9IHRoaXMucHJvcHMuY29sdW1ucy5tYXAoZnVuY3Rpb24oY29sdW1uLCBpKXtcbiAgICAgICAgdmFyIGZpZWxkVmFsdWUgPSBkYXRhW2NvbHVtbi5uYW1lXTtcbiAgICAgICAgaWYodGhpcy5lZGl0aW5nICYmXG4gICAgICAgICAgY29sdW1uLm5hbWUgIT09IHRoaXMucHJvcHMua2V5RmllbGQgJiYgLy8gS2V5IGZpZWxkIGNhbid0IGJlIGVkaXRcbiAgICAgICAgICBjb2x1bW4uZWRpdGFibGUgJiYgLy8gY29sdW1uIGlzIGVkaXRhYmxlPyBkZWZhdWx0IGlzIHRydWUsIHVzZXIgY2FuIHNldCBpdCBmYWxzZVxuICAgICAgICAgIHRoaXMuc3RhdGUuY3VyckVkaXRDZWxsICE9IG51bGwgJiZcbiAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJFZGl0Q2VsbC5yaWQgPT0gciAmJlxuICAgICAgICAgIHRoaXMuc3RhdGUuY3VyckVkaXRDZWxsLmNpZCA9PSBpKXtcbiAgICAgICAgICAgIHZhciBmb3JtYXQ9Y29sdW1uLmZvcm1hdD9mdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgICAgIHJldHVybiBjb2x1bW4uZm9ybWF0KHZhbHVlLCBkYXRhLCBjb2x1bW4uZm9ybWF0RXh0cmFEYXRhKS5yZXBsYWNlKC88Lio/Pi9nLCcnKTtcbiAgICAgICAgICAgIH06ZmFsc2U7XG5cbiAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgIDxUYWJsZUVkaXRDb2x1bW4gY29tcGxldGVFZGl0PXt0aGlzLmhhbmRsZUNvbXBsZXRlRWRpdENlbGwuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2FkZCBieSBibHVlc3ByaW5nIGZvciBjb2x1bW4gZWRpdG9yIGN1c3RvbWl6ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRhYmxlPXtpc0Z1bihjb2x1bW4uZWRpdGFibGUpP2NvbHVtbi5lZGl0YWJsZShmaWVsZFZhbHVlLGRhdGEscixpKTpjb2x1bW4uZWRpdGFibGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PXtjb2x1bW4uZm9ybWF0P2Zvcm1hdDpmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmx1clRvU2F2ZT17dGhpcy5wcm9wcy5jZWxsRWRpdC5ibHVyVG9TYXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0luZGV4PXtyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbEluZGV4PXtpfT5cbiAgICAgICAgICAgICAgICB7ZmllbGRWYWx1ZX1cbiAgICAgICAgICAgICAgPC9UYWJsZUVkaXRDb2x1bW4+XG4gICAgICAgICAgICApXG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAvL2FkZCBieSBibHVlc3ByaW5nIGZvciBjbGFzc05hbWUgY3VzdG9taXplXG4gICAgICAgICAgdmFyIHRkQ2xhc3NOYW1lPWlzRnVuKGNvbHVtbi5jbGFzc05hbWUpP2NvbHVtbi5jbGFzc05hbWUoZmllbGRWYWx1ZSxkYXRhLHIsaSk6Y29sdW1uLmNsYXNzTmFtZTtcblxuICAgICAgICAgIGlmKHR5cGVvZiBjb2x1bW4uZm9ybWF0ICE9PSBcInVuZGVmaW5lZFwiKXtcbiAgICAgICAgICAgIHZhciBmb3JtYXR0ZWRWYWx1ZSA9IGNvbHVtbi5mb3JtYXQoZmllbGRWYWx1ZSwgZGF0YSwgY29sdW1uLmZvcm1hdEV4dHJhRGF0YSk7XG4gICAgICAgICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGZvcm1hdHRlZFZhbHVlKSkge1xuICAgICAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZSA9IDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGZvcm1hdHRlZFZhbHVlfX0+PC9kaXY+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICA8VGFibGVDb2x1bW4gZGF0YUFsaWduPXtjb2x1bW4uYWxpZ259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RkQ2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbEVkaXQ9e3RoaXMucHJvcHMuY2VsbEVkaXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW49e2NvbHVtbi5oaWRkZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVkaXQ9e3RoaXMuaGFuZGxlRWRpdENlbGwuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtjb2x1bW4ud2lkdGh9PlxuICAgICAgICAgICAgICAgIHtmb3JtYXR0ZWRWYWx1ZX1cbiAgICAgICAgICAgICAgPC9UYWJsZUNvbHVtbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgIDxUYWJsZUNvbHVtbiBkYXRhQWxpZ249e2NvbHVtbi5hbGlnbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGRDbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsRWRpdD17dGhpcy5wcm9wcy5jZWxsRWRpdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbj17Y29sdW1uLmhpZGRlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRWRpdD17dGhpcy5oYW5kbGVFZGl0Q2VsbC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e2NvbHVtbi53aWR0aH0+XG4gICAgICAgICAgICAgICAge2ZpZWxkVmFsdWV9XG4gICAgICAgICAgICAgIDwvVGFibGVDb2x1bW4+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCB0aGlzKTtcbiAgICAgIHZhciBzZWxlY3RlZCA9IHRoaXMucHJvcHMuc2VsZWN0ZWRSb3dLZXlzLmluZGV4T2YoZGF0YVt0aGlzLnByb3BzLmtleUZpZWxkXSkgIT0gLTE7XG4gICAgICB2YXIgc2VsZWN0Um93Q29sdW1uID0gaXNTZWxlY3RSb3dEZWZpbmVkICYmICF0aGlzLnByb3BzLnNlbGVjdFJvdy5oaWRlU2VsZWN0Q29sdW1uP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJTZWxlY3RSb3dDb2x1bW4oc2VsZWN0ZWQpOm51bGw7XG4gICAgICAvL2FkZCBieSBibHVlc3ByaW5nIGZvciBjbGFzc05hbWUgY3VzdG9taXplXG4gICAgICB2YXIgdHJDbGFzc05hbWU9aXNGdW4odGhpcy5wcm9wcy50ckNsYXNzTmFtZSk/dGhpcy5wcm9wcy50ckNsYXNzTmFtZShkYXRhLHIpOnRoaXMucHJvcHMudHJDbGFzc05hbWU7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGFibGVSb3cgaXNTZWxlY3RlZD17c2VsZWN0ZWR9IGtleT17cn0gY2xhc3NOYW1lPXt0ckNsYXNzTmFtZX1cbiAgICAgICAgICBzZWxlY3RSb3c9e2lzU2VsZWN0Um93RGVmaW5lZD90aGlzLnByb3BzLnNlbGVjdFJvdzp1bmRlZmluZWR9XG4gICAgICAgICAgZW5hYmxlQ2VsbEVkaXQ9e3RoaXMucHJvcHMuY2VsbEVkaXQubW9kZSAhPT0gQ29uc3QuQ0VMTF9FRElUX05PTkV9XG4gICAgICAgICAgb25Sb3dDbGljaz17dGhpcy5oYW5kbGVSb3dDbGljay5iaW5kKHRoaXMpfVxuICAgICAgICAgIG9uUm93TW91c2VPdmVyPXt0aGlzLmhhbmRsZVJvd01vdXNlT3Zlci5iaW5kKHRoaXMpfVxuICAgICAgICAgIG9uUm93TW91c2VPdXQ9e3RoaXMuaGFuZGxlUm93TW91c2VPdXQuYmluZCh0aGlzKX1cbiAgICAgICAgICBvblNlbGVjdFJvdz17dGhpcy5oYW5kbGVTZWxlY3RSb3cuYmluZCh0aGlzKX0+XG4gICAgICAgICAge3NlbGVjdFJvd0NvbHVtbn1cbiAgICAgICAgICB7dGFibGVDb2x1bW5zfVxuICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgKVxuICAgIH0sIHRoaXMpO1xuXG4gICAgaWYodGFibGVSb3dzLmxlbmd0aCA9PT0gMCl7XG4gICAgICB0YWJsZVJvd3MucHVzaChcbiAgICAgIDxUYWJsZVJvdyBrZXk9XCIjI3RhYmxlLWVtcHR5IyNcIj5cbiAgICAgICAgPHRkIGNvbFNwYW49e3RoaXMucHJvcHMuY29sdW1ucy5sZW5ndGgrKGlzU2VsZWN0Um93RGVmaW5lZD8xOjApfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVhY3QtYnMtdGFibGUtbm8tZGF0YVwiPlxuICAgICAgICAgICAge3RoaXMucHJvcHMubm9EYXRhVGV4dHx8Q29uc3QuTk9fREFUQV9URVhUfVxuICAgICAgICA8L3RkPlxuICAgICAgPC9UYWJsZVJvdz4pO1xuICAgIH1cblxuICAgIHRoaXMuZWRpdGluZyA9IGZhbHNlO1xuXG4gICAgdmFyIGhlaWdodCA9IHRoaXMuY2FsY3VsYXRlQ29udGFpbmVySGVpZ2h0KCkudG9TdHJpbmcoKTtcblxuICAgIHJldHVybihcbiAgICAgIDxkaXYgcmVmPVwiY29udGFpbmVyXCIgY2xhc3NOYW1lPXtjb250YWluZXJDbGFzc2VzfSBzdHlsZT17e2hlaWdodDogaGVpZ2h0fX0+XG4gICAgICAgIDx0YWJsZSByZWY9XCJib2R5XCIgY2xhc3NOYW1lPXt0YWJsZUNsYXNzZXN9PlxuICAgICAgICAgIHt0YWJsZUhlYWRlcn1cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7dGFibGVSb3dzfVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZW5kZXJUYWJsZUhlYWRlcihpc1NlbGVjdFJvd0RlZmluZWQpe1xuICAgIHZhciBzZWxlY3RSb3dIZWFkZXIgPSBudWxsO1xuXG4gICAgaWYoaXNTZWxlY3RSb3dEZWZpbmVkKXtcbiAgICAgIGxldCBzdHlsZSA9IHtcbiAgICAgICAgd2lkdGg6MzUsXG4gICAgICAgIG1pbldpZHRoOjM1XG4gICAgICB9XG4gICAgICBzZWxlY3RSb3dIZWFkZXIgPSB0aGlzLnByb3BzLnNlbGVjdFJvdy5oaWRlU2VsZWN0Q29sdW1uP251bGw6KDx0aCBzdHlsZT17c3R5bGV9IGtleT17LTF9PjwvdGg+KTtcbiAgICB9XG4gICAgdmFyIHRoZWFkZXIgPSB0aGlzLnByb3BzLmNvbHVtbnMubWFwKGZ1bmN0aW9uKGNvbHVtbiwgaSl7XG4gICAgICBsZXQgd2lkdGggPSBjb2x1bW4ud2lkdGggPT0gbnVsbD9jb2x1bW4ud2lkdGg6cGFyc2VJbnQoY29sdW1uLndpZHRoKTtcbiAgICAgIGxldCBzdHlsZT17XG4gICAgICAgIGRpc3BsYXk6IGNvbHVtbi5oaWRkZW4/XCJub25lXCI6bnVsbCxcbiAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICBtYXhXaWR0aDogd2lkdGhcbiAgICAgICAgLyoqIGFkZCBtaW4td2R0aCB0byBmaXggdXNlciBhc3NpZ24gY29sdW1uIHdpZHRoIG5vdCBlcSBvZmZzZXRXaWR0aCBpbiBsYXJnZSBjb2x1bW4gdGFibGUgKiovXG4gICAgICB9O1xuICAgICAgbGV0IHNvcnRDYWVydCA9IGNvbHVtbi5zb3J0PyhVdGlsLnJlbmRlclJlYWN0U29ydENhcmV0KENvbnN0LlNPUlRfREVTQykpOm51bGw7XG4gICAgICByZXR1cm4gKDx0aCBzdHlsZT17c3R5bGV9IGtleT17aX0gY2xhc3NOYW1lPXtjb2x1bW4uY2xhc3NOYW1lfT57Y29sdW1uLnRleHR9e3NvcnRDYWVydH08L3RoPik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4oXG4gICAgICA8dGhlYWQgcmVmPVwiaGVhZGVyXCI+XG4gICAgICAgIDx0cj57c2VsZWN0Um93SGVhZGVyfXt0aGVhZGVyfTwvdHI+XG4gICAgICA8L3RoZWFkPlxuICAgIClcbiAgfVxuXG4gIGhhbmRsZVJvd01vdXNlT3V0KHJvd0luZGV4KXtcbiAgICB2YXIga2V5LCBzZWxlY3RlZFJvdztcbiAgICB0aGlzLnByb3BzLmRhdGEuZm9yRWFjaChmdW5jdGlvbihyb3csIGkpe1xuICAgICAgaWYoaSA9PSByb3dJbmRleC0xKXtcbiAgICAgICAga2V5ID0gcm93W3RoaXMucHJvcHMua2V5RmllbGRdO1xuICAgICAgICBzZWxlY3RlZFJvdyA9IHJvdztcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgICB0aGlzLnByb3BzLm9uUm93TW91c2VPdXQoc2VsZWN0ZWRSb3cpO1xuICB9XG5cbiAgaGFuZGxlUm93TW91c2VPdmVyKHJvd0luZGV4KXtcbiAgICB2YXIga2V5LCBzZWxlY3RlZFJvdztcbiAgICB0aGlzLnByb3BzLmRhdGEuZm9yRWFjaChmdW5jdGlvbihyb3csIGkpe1xuICAgICAgaWYoaSA9PSByb3dJbmRleC0xKXtcbiAgICAgICAga2V5ID0gcm93W3RoaXMucHJvcHMua2V5RmllbGRdO1xuICAgICAgICBzZWxlY3RlZFJvdyA9IHJvdztcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgICB0aGlzLnByb3BzLm9uUm93TW91c2VPdmVyKHNlbGVjdGVkUm93KTtcbiAgfVxuXG4gIGhhbmRsZVJvd0NsaWNrKHJvd0luZGV4KXtcbiAgICB2YXIga2V5LCBzZWxlY3RlZFJvdztcbiAgICB0aGlzLnByb3BzLmRhdGEuZm9yRWFjaChmdW5jdGlvbihyb3csIGkpe1xuICAgICAgaWYoaSA9PSByb3dJbmRleC0xKXtcbiAgICAgICAga2V5ID0gcm93W3RoaXMucHJvcHMua2V5RmllbGRdO1xuICAgICAgICBzZWxlY3RlZFJvdyA9IHJvdztcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgICB0aGlzLnByb3BzLm9uUm93Q2xpY2soc2VsZWN0ZWRSb3cpO1xuICB9XG5cbiAgaGFuZGxlU2VsZWN0Um93KHJvd0luZGV4LCBpc1NlbGVjdGVkKXtcbiAgICB2YXIga2V5LCBzZWxlY3RlZFJvdztcbiAgICB0aGlzLnByb3BzLmRhdGEuZm9yRWFjaChmdW5jdGlvbihyb3csIGkpe1xuICAgICAgaWYoaSA9PSByb3dJbmRleC0xKXtcbiAgICAgICAga2V5ID0gcm93W3RoaXMucHJvcHMua2V5RmllbGRdO1xuICAgICAgICBzZWxlY3RlZFJvdyA9IHJvdztcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICAgIHRoaXMucHJvcHMub25TZWxlY3RSb3coc2VsZWN0ZWRSb3csIGlzU2VsZWN0ZWQpO1xuICB9XG5cbiAgaGFuZGxlU2VsZWN0Um93Q29sdW1DaGFuZ2UoZSl7XG4gICAgaWYoIXRoaXMucHJvcHMuc2VsZWN0Um93LmNsaWNrVG9TZWxlY3QgfHwgIXRoaXMucHJvcHMuc2VsZWN0Um93LmNsaWNrVG9TZWxlY3RBbmRFZGl0Q2VsbCl7XG4gICAgICB0aGlzLmhhbmRsZVNlbGVjdFJvdyhcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yb3dJbmRleCwgZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUVkaXRDZWxsKHJvd0luZGV4LCBjb2x1bW5JbmRleCl7XG4gICAgdGhpcy5lZGl0aW5nID0gdHJ1ZTtcbiAgICBpZih0aGlzLl9pc1NlbGVjdFJvd0RlZmluZWQoKSl7XG4gICAgICBjb2x1bW5JbmRleC0tO1xuICAgICAgaWYodGhpcy5wcm9wcy5zZWxlY3RSb3cuaGlkZVNlbGVjdENvbHVtbilcbiAgICAgICAgY29sdW1uSW5kZXgrKztcbiAgICB9XG4gICAgcm93SW5kZXgtLTtcbiAgICB2YXIgc3RhdGVPYmogPSB7XG4gICAgICBjdXJyRWRpdENlbGw6IHtcbiAgICAgICAgcmlkOiByb3dJbmRleCxcbiAgICAgICAgY2lkOiBjb2x1bW5JbmRleFxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZih0aGlzLnByb3BzLnNlbGVjdFJvdy5jbGlja1RvU2VsZWN0QW5kRWRpdENlbGwpe1xuICAgICAgdGhpcy5oYW5kbGVTZWxlY3RSb3cocm93SW5kZXgrMSwgdHJ1ZSk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGVPYmopO1xuICB9XG5cbiAgY2FuY2VsRWRpdCgpe1xuICAgIHZhciBjdXJyRWRpdENlbGw9dGhpcy5zdGF0ZS5jdXJyRWRpdENlbGw7XG4gICAgaWYoY3VyckVkaXRDZWxsKXtcbiAgICAgIHRoaXMuaGFuZGxlQ29tcGxldGVFZGl0Q2VsbChudWxsLGN1cnJFZGl0Q2VsbC5yaWQsY3VyckVkaXRDZWxsLmNpZCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ29tcGxldGVFZGl0Q2VsbChuZXdWYWwsIHJvd0luZGV4LCBjb2x1bW5JbmRleCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VyckVkaXRDZWxsOiBudWxsfSk7XG4gICAgaWYobnVsbCAhPSBuZXdWYWwpXG4gICAgICB0aGlzLnByb3BzLmNlbGxFZGl0Ll9fb25Db21wbGV0ZUVkaXRfXyhuZXdWYWwsIHJvd0luZGV4LCBjb2x1bW5JbmRleCk7XG4gIH1cblxuICByZW5kZXJTZWxlY3RSb3dDb2x1bW4oc2VsZWN0ZWQpe1xuICAgIGlmKHRoaXMucHJvcHMuc2VsZWN0Um93Lm1vZGUgPT0gQ29uc3QuUk9XX1NFTEVDVF9TSU5HTEUpIHtcbiAgICAgIHJldHVybiAoPFRhYmxlQ29sdW1uPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwic2VsZWN0aW9uXCIgY2hlY2tlZD17c2VsZWN0ZWR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdFJvd0NvbHVtQ2hhbmdlLmJpbmQodGhpcyl9Lz48L1RhYmxlQ29sdW1uPik7XG4gICAgfWVsc2Uge1xuICAgICAgcmV0dXJuICg8VGFibGVDb2x1bW4gPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtzZWxlY3RlZH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0Um93Q29sdW1DaGFuZ2UuYmluZCh0aGlzKX0vPjwvVGFibGVDb2x1bW4+KTtcbiAgICB9XG4gIH1cblxuICBnZXRCb2R5SGVhZGVyRG9tUHJvcCgpe1xuICAgIHZhciBoZWFkZXJzID0gdGhpcy5yZWZzLmhlYWRlci5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXM7XG4gICAgdmFyIGhlYWRlckRvbVByb3BzID0gW107XG4gICAgZm9yKGxldCBpPTA7aTxoZWFkZXJzLmxlbmd0aDtpKyspe1xuICAgICAgaGVhZGVyRG9tUHJvcHMucHVzaCh7XG4gICAgICAgIHdpZHRoOmhlYWRlcnNbaV0ub2Zmc2V0V2lkdGhcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gaGVhZGVyRG9tUHJvcHM7XG4gIH1cblxuICBhZGp1c3RCb2R5KCkge1xuICAgIHRoaXMuaGFyZEZpeEhlYWRlcldpZHRoKCk7XG4gICAgaWYodGhpcy5wcm9wcy5jb25kZW5zZWQpIHtcbiAgICAgIHRoaXMucmVmcy5ib2R5LnN0eWxlLm1hcmdpblRvcCA9IFwiLTM2cHhcIjtcbiAgICB9XG5cbiAgICBpZih0aGlzLnByb3BzLm1heEhlaWdodCAmJlxuICAgICAgcGFyc2VJbnQodGhpcy5wcm9wcy5tYXhIZWlnaHQpIDwgdGhpcy5yZWZzLmNvbnRhaW5lci5vZmZzZXRIZWlnaHQpIHtcbiAgICAgIHRoaXMucmVmcy5jb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gKHRoaXMucHJvcHMubWF4SGVpZ2h0IC0gNDIpICsgXCJweFwiO1xuICAgIH1cbiAgfVxuXG4gIGhhcmRGaXhIZWFkZXJXaWR0aCgpe1xuICAgIHZhciBoZWFkZXJzID0gdGhpcy5yZWZzLmhlYWRlci5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXM7XG4gICAgZm9yKGxldCBpPTA7aTxoZWFkZXJzLmxlbmd0aDtpKyspe1xuICAgICAgaGVhZGVyc1tpXS5zdHlsZS53aWR0aCA9IGhlYWRlcnNbaV0ub2Zmc2V0V2lkdGggKyBcInB4XCI7XG4gICAgfVxuICB9XG5cbiAgY2FsY3VsYXRlQ29udGFpbmVySGVpZ2h0KCl7XG4gICAgaWYodGhpcy5wcm9wcy5oZWlnaHQgPT0gXCIxMDAlXCIpIHJldHVybiB0aGlzLnByb3BzLmhlaWdodDtcbiAgICBlbHNle1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMucHJvcHMuaGVpZ2h0KSAtIDQyO1xuICAgIH1cbiAgfVxuXG4gIF9pc1NlbGVjdFJvd0RlZmluZWQoKXtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5zZWxlY3RSb3cubW9kZSA9PT0gQ29uc3QuUk9XX1NFTEVDVF9TSU5HTEUgfHxcbiAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdFJvdy5tb2RlID09PSBDb25zdC5ST1dfU0VMRUNUX01VTFRJO1xuICB9XG59XG5UYWJsZUJvZHkucHJvcFR5cGVzID0ge1xuICBoZWlnaHQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGRhdGE6IFJlYWN0LlByb3BUeXBlcy5hcnJheSxcbiAgY29sdW1uczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuICBzdHJpcGVkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgYm9yZGVyZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBob3ZlcjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGNvbmRlbnNlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGtleUZpZWxkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBzZWxlY3RlZFJvd0tleXM6IFJlYWN0LlByb3BUeXBlcy5hcnJheSxcbiAgb25Sb3dDbGljazogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2VsZWN0Um93OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgbm9EYXRhVGV4dDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xufTtcbmV4cG9ydCBkZWZhdWx0IFRhYmxlQm9keTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL1RhYmxlQm9keS5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi9Db25zdCc7XG5cbmNsYXNzIFRhYmxlUm93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuY2xpY2tOdW0gPSAwO1xuICB9XG5cbiAgcm93Q2xpY2soZSl7XG4gICAgaWYoZS50YXJnZXQudGFnTmFtZSAhPT0gXCJJTlBVVFwiICYmXG4gICAgICAgIGUudGFyZ2V0LnRhZ05hbWUgIT09IFwiU0VMRUNUXCIgJiZcbiAgICAgICAgZS50YXJnZXQudGFnTmFtZSAhPT0gXCJURVhUQVJFQVwiKSB7XG4gICAgICBjb25zdCByb3dJbmRleCA9IGUuY3VycmVudFRhcmdldC5yb3dJbmRleDtcbiAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdFJvdykge1xuICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdFJvdy5jbGlja1RvU2VsZWN0KSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0Um93KHJvd0luZGV4LCAhdGhpcy5wcm9wcy5pc1NlbGVjdGVkKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuc2VsZWN0Um93LmNsaWNrVG9TZWxlY3RBbmRFZGl0Q2VsbCkge1xuICAgICAgICAgICAgdGhpcy5jbGlja051bSsrO1xuICAgICAgICAgICAgLyoqIGlmIGNsaWNrVG9TZWxlY3RBbmRFZGl0Q2VsbCBpcyBlbmFibGVkLFxuICAgICAgICAgICAgICogIHRoZXJlIHNob3VsZCBiZSBhIGRlbGF5IHRvIHByZXZlbnQgYSBzZWxlY3Rpb24gY2hhbmdlZCB3aGVuXG4gICAgICAgICAgICAgKiAgdXNlciBkYmxpY2sgdG8gZWRpdCBjZWxsIG9uIHNhbWUgcm93IGJ1dCBkaWZmZXJlbnQgY2VsbFxuICAgICAgICAgICAgKiovXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgaWYodGhpcy5jbGlja051bSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25TZWxlY3RSb3cocm93SW5kZXgsICF0aGlzLnByb3BzLmlzU2VsZWN0ZWQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuY2xpY2tOdW0gPSAwO1xuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wcm9wcy5vblJvd0NsaWNrKSB0aGlzLnByb3BzLm9uUm93Q2xpY2socm93SW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIHJvd01vdXNlT3V0KGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblJvd01vdXNlT3V0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uUm93TW91c2VPdXQoZS5jdXJyZW50VGFyZ2V0LnJvd0luZGV4KTtcbiAgICB9XG4gIH1cblxuICByb3dNb3VzZU92ZXIoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uUm93TW91c2VPdmVyKSB7XG4gICAgICB0aGlzLnByb3BzLm9uUm93TW91c2VPdmVyKGUuY3VycmVudFRhcmdldC5yb3dJbmRleCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgdGhpcy5jbGlja051bSA9IDA7XG4gICAgdmFyIHRyQ3NzPXtcbiAgICAgIHN0eWxlOntcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLnByb3BzLmlzU2VsZWN0ZWQ/dGhpcy5wcm9wcy5zZWxlY3RSb3cuYmdDb2xvcjpudWxsXG4gICAgICB9LFxuICAgICAgY2xhc3NOYW1lOih0aGlzLnByb3BzLmlzU2VsZWN0ZWQgJiYgdGhpcy5wcm9wcy5zZWxlY3RSb3cuY2xhc3NOYW1lID8gdGhpcy5wcm9wcy5zZWxlY3RSb3cuY2xhc3NOYW1lIDogJycpICsgKHRoaXMucHJvcHMuY2xhc3NOYW1lfHwnJylcbiAgICB9O1xuXG4gICAgaWYodGhpcy5wcm9wcy5zZWxlY3RSb3cgJiYgKHRoaXMucHJvcHMuc2VsZWN0Um93LmNsaWNrVG9TZWxlY3QgfHxcbiAgICAgIHRoaXMucHJvcHMuc2VsZWN0Um93LmNsaWNrVG9TZWxlY3RBbmRFZGl0Q2VsbCkgfHwgdGhpcy5wcm9wcy5vblJvd0NsaWNrKXtcbiAgICAgIHJldHVybihcbiAgICAgICAgPHRyIHsuLi50ckNzc31cbiAgICAgICAgICAgIG9uTW91c2VPdmVyPXt0aGlzLnJvd01vdXNlT3Zlci5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgb25Nb3VzZU91dD17dGhpcy5yb3dNb3VzZU91dC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5yb3dDbGljay5iaW5kKHRoaXMpfT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L3RyPlxuICAgICAgKVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuKFxuICAgICAgICA8dHIgey4uLnRyQ3NzfT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L3RyPlxuICAgICAgKVxuICAgIH1cbiAgfVxufVxuVGFibGVSb3cucHJvcFR5cGVzID0ge1xuICBpc1NlbGVjdGVkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgZW5hYmxlQ2VsbEVkaXQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBvblJvd0NsaWNrOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgb25TZWxlY3RSb3c6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG59O1xuVGFibGVSb3cuZGVmYXVsdFByb3BzID0ge1xuICBvblJvd0NsaWNrOiB1bmRlZmluZWRcbn1cbmV4cG9ydCBkZWZhdWx0IFRhYmxlUm93O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvVGFibGVSb3cuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4vQ29uc3QnO1xuXG5jbGFzcyBUYWJsZUNvbHVtbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IHNob3VsZFVwZGF0ZWQgPSB0aGlzLnByb3BzLndpZHRoICE9PSBuZXh0UHJvcHMud2lkdGhcbiAgICAgIHx8IHRoaXMucHJvcHMuY2xhc3NOYW1lICE9PSBuZXh0UHJvcHMuY2xhc3NOYW1lXG4gICAgICB8fCB0aGlzLnByb3BzLmhpZGRlbiAhPT0gbmV4dFByb3BzLmhpZGRlblxuICAgICAgfHwgdGhpcy5wcm9wcy5kYXRhQWxpZ24gIT09IG5leHRQcm9wcy5kYXRhQWxpZ25cbiAgICAgIHx8IHR5cGVvZiBjaGlsZHJlbiAhPT0gdHlwZW9mIG5leHRQcm9wcy5jaGlsZHJlblxuICAgICAgfHwgKCcnK3RoaXMucHJvcHMub25FZGl0KS50b1N0cmluZygpICE9PSAoJycrbmV4dFByb3BzLm9uRWRpdCkudG9TdHJpbmcoKVxuXG4gICAgaWYoc2hvdWxkVXBkYXRlZCl7XG4gICAgICByZXR1cm4gc2hvdWxkVXBkYXRlZDtcbiAgICB9XG5cbiAgICBpZih0eXBlb2YgY2hpbGRyZW4gPT09ICdvYmplY3QnICYmIGNoaWxkcmVuICE9PSBudWxsKSB7XG4gICAgICBpZihjaGlsZHJlbi5wcm9wcy50eXBlID09PSAnY2hlY2tib3gnIHx8IGNoaWxkcmVuLnByb3BzLnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgc2hvdWxkVXBkYXRlZCA9IHNob3VsZFVwZGF0ZWQgfHxcbiAgICAgICAgICBjaGlsZHJlbi5wcm9wcy50eXBlICE9PSBuZXh0UHJvcHMuY2hpbGRyZW4ucHJvcHMudHlwZSB8fFxuICAgICAgICAgIGNoaWxkcmVuLnByb3BzLmNoZWNrZWQgIT09IG5leHRQcm9wcy5jaGlsZHJlbi5wcm9wcy5jaGVja2VkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hvdWxkVXBkYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3VsZFVwZGF0ZWQgPSBzaG91bGRVcGRhdGVkIHx8IGNoaWxkcmVuICE9PSBuZXh0UHJvcHMuY2hpbGRyZW47XG4gICAgfVxuXG4gICAgaWYoc2hvdWxkVXBkYXRlZCl7XG4gICAgICByZXR1cm4gc2hvdWxkVXBkYXRlZDtcbiAgICB9XG5cbiAgICBpZighKHRoaXMucHJvcHMuY2VsbEVkaXQgJiYgbmV4dFByb3BzLmNlbGxFZGl0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc2hvdWxkVXBkYXRlZFxuICAgICAgICB8fCB0aGlzLnByb3BzLmNlbGxFZGl0Lm1vZGUgIT09IG5leHRQcm9wcy5jZWxsRWRpdC5tb2RlO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNlbGxFZGl0KGUpe1xuICAgIGlmKHRoaXMucHJvcHMuY2VsbEVkaXQubW9kZSA9PSBDb25zdC5DRUxMX0VESVRfREJDTElDSyl7XG4gICAgICBpZihkb2N1bWVudC5zZWxlY3Rpb24gJiYgZG9jdW1lbnQuc2VsZWN0aW9uLmVtcHR5KSB7XG4gICAgICAgIGRvY3VtZW50LnNlbGVjdGlvbi5lbXB0eSgpO1xuICAgICAgfSBlbHNlIGlmKHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcbiAgICAgICAgICB2YXIgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgICAgICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vbkVkaXQoXG4gICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5yb3dJbmRleCxcbiAgICAgIGUuY3VycmVudFRhcmdldC5jZWxsSW5kZXgpO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgdmFyIHdpZHRoID0gdGhpcy5wcm9wcy53aWR0aCA9PSBudWxsP1xuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy53aWR0aDpwYXJzZUludCh0aGlzLnByb3BzLndpZHRoKTtcbiAgICB2YXIgdGRTdHlsZSA9IHtcbiAgICAgIHRleHRBbGlnbjogdGhpcy5wcm9wcy5kYXRhQWxpZ24sXG4gICAgICBkaXNwbGF5OiB0aGlzLnByb3BzLmhpZGRlbj9cIm5vbmVcIjpudWxsLFxuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgbWF4V2lkdGg6IHdpZHRoXG4gICAgfTtcbiAgICB2YXIgY2xhc3NuYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWU7XG4gICAgaWYodGhpcy5wcm9wcy53aWR0aCl7XG4gICAgICAgIGNsYXNzbmFtZSArPSBcIiBjb2wtbWQtXCIrd2lkdGg7XG4gICAgfVxuXG5cbiAgICB2YXIgb3B0cyA9IHt9O1xuICAgIGlmKHRoaXMucHJvcHMuY2VsbEVkaXQpe1xuICAgICAgaWYodGhpcy5wcm9wcy5jZWxsRWRpdC5tb2RlID09IENvbnN0LkNFTExfRURJVF9DTElDSyl7XG4gICAgICAgIG9wdHMub25DbGljayA9IHRoaXMuaGFuZGxlQ2VsbEVkaXQuYmluZCh0aGlzKTtcbiAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMuY2VsbEVkaXQubW9kZSA9PSBDb25zdC5DRUxMX0VESVRfREJDTElDSyl7XG4gICAgICAgIG9wdHMub25Eb3VibGVDbGljayA9IHRoaXMuaGFuZGxlQ2VsbEVkaXQuYmluZCh0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDx0ZCBzdHlsZT17dGRTdHlsZX0gY2xhc3NOYW1lPXtjbGFzc25hbWV9IHsuLi5vcHRzfT5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L3RkPlxuICAgIClcbiAgfVxufVxuVGFibGVDb2x1bW4ucHJvcFR5cGVzID0ge1xuICBkYXRhQWxpZ246IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGhpZGRlbjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGNsYXNzTmFtZTpSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5UYWJsZUNvbHVtbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGRhdGFBbGlnbjogXCJsZWZ0XCIsXG4gIGhpZGRlbjogZmFsc2UsXG4gIGNsYXNzTmFtZTpcIlwiXG59XG5leHBvcnQgZGVmYXVsdCBUYWJsZUNvbHVtbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL1RhYmxlQ29sdW1uLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb25zdCBmcm9tICcuL0NvbnN0JztcbmltcG9ydCBFZGl0b3IgZnJvbSAnLi9FZGl0b3InXG5pbXBvcnQgTm90aWZpZXIgZnJvbSAnLi9Ob3RpZmljYXRpb24uanMnO1xuaW1wb3J0IGNsYXNzU2V0IGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jbGFzcyBUYWJsZUVkaXRDb2x1bW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMudGltZW91dGVDbGVhcj0wO1xuICAgICAgICB0aGlzLnN0YXRlPXtcbiAgICAgICAgICAgIHNoYWtlRWRpdG9yOmZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gIGhhbmRsZUtleVByZXNzKGUpe1xuICAgIGlmIChlLmtleUNvZGUgPT0gMTMpIHsgLy9QcmVzc2VkIEVOVEVSXG4gICAgICBsZXQgdmFsdWUgPSBlLmN1cnJlbnRUYXJnZXQudHlwZSA9PSAnY2hlY2tib3gnP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nZXRDaGVja0JveFZhbHVlKGUpOmUuY3VycmVudFRhcmdldC52YWx1ZTtcblxuICAgICAgaWYoIXRoaXMudmFsaWRhdG9yKHZhbHVlKSl7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5wcm9wcy5jb21wbGV0ZUVkaXQoXG4gICAgICAgIHZhbHVlLCB0aGlzLnByb3BzLnJvd0luZGV4LCB0aGlzLnByb3BzLmNvbEluZGV4KTtcbiAgICB9ZWxzZSBpZihlLmtleUNvZGUgPT0gMjcpe1xuICAgICAgdGhpcy5wcm9wcy5jb21wbGV0ZUVkaXQoXG4gICAgICAgIG51bGwsIHRoaXMucHJvcHMucm93SW5kZXgsIHRoaXMucHJvcHMuY29sSW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUJsdXIoZSl7XG4gICAgaWYodGhpcy5wcm9wcy5ibHVyVG9TYXZlKXtcbiAgICAgIGxldCB2YWx1ZSA9IGUuY3VycmVudFRhcmdldC50eXBlID09ICdjaGVja2JveCc/XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dldENoZWNrQm94VmFsdWUoZSk6ZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgICAgaWYoIXRoaXMudmFsaWRhdG9yKHZhbHVlKSl7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5wcm9wcy5jb21wbGV0ZUVkaXQoXG4gICAgICAgICAgdmFsdWUsIHRoaXMucHJvcHMucm93SW5kZXgsIHRoaXMucHJvcHMuY29sSW5kZXgpO1xuICAgIH1cbiAgfVxuICB2YWxpZGF0b3IodmFsdWUpe1xuICAgICAgdmFyIHRzPXRoaXM7XG4gICAgICBpZih0cy5wcm9wcy5lZGl0YWJsZS52YWxpZGF0b3Ipe1xuICAgICAgICAgIHZhciB2YWxpZD10cy5wcm9wcy5lZGl0YWJsZS52YWxpZGF0b3IodmFsdWUpO1xuICAgICAgICAgIGlmKHZhbGlkIT09dHJ1ZSl7XG4gICAgICAgICAgICAgIHRzLnJlZnMubm90aWZpZXIubm90aWNlKCdlcnJvcicsdmFsaWQsXCJQcmVzc2VkIEVTQyBjYW4gY2FuY2VsXCIpO1xuICAgICAgICAgICAgICB2YXIgaW5wdXQgPSB0cy5yZWZzLmlucHV0UmVmO1xuICAgICAgICAgICAgICAvL2FuaW1hdGUgaW5wdXRcbiAgICAgICAgICAgICAgdHMuY2xlYXJUaW1lb3V0KCk7XG4gICAgICAgICAgICAgIHRzLnNldFN0YXRlKHtzaGFrZUVkaXRvcjp0cnVlfSk7XG4gICAgICAgICAgICAgIHRzLnRpbWVvdXRlQ2xlYXI9c2V0VGltZW91dChmdW5jdGlvbigpe3RzLnNldFN0YXRlKHtzaGFrZUVkaXRvcjpmYWxzZX0pO30sMzAwKTtcbiAgICAgICAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuXG4gIH1cbiAgY2xlYXJUaW1lb3V0KCl7XG4gICAgICBpZih0aGlzLnRpbWVvdXRlQ2xlYXIhPTApe1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRlQ2xlYXIpO1xuICAgICAgICAgIHRoaXMudGltZW91dGVDbGVhcj0wO1xuICAgICAgfVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICB2YXIgaW5wdXQgPSB0aGlzLnJlZnMuaW5wdXRSZWY7XG4gICAgICAvLyBpbnB1dC52YWx1ZSA9IHRoaXMucHJvcHMuY2hpbGRyZW58fCcnO1xuICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICB2YXIgZWRpdGFibGU9dGhpcy5wcm9wcy5lZGl0YWJsZSxcbiAgICAgICAgZm9ybWF0PXRoaXMucHJvcHMuZm9ybWF0LFxuICAgICAgICBhdHRyPXtcbiAgICAgICAgICAgIHJlZjpcImlucHV0UmVmXCIsXG4gICAgICAgICAgICBvbktleURvd246dGhpcy5oYW5kbGVLZXlQcmVzcy5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgb25CbHVyOnRoaXMuaGFuZGxlQmx1ci5iaW5kKHRoaXMpXG4gICAgICAgIH07XG4gICAgICAgIC8vcHV0IHBsYWNlaG9sZGVyIGlmIGV4aXN0XG4gICAgICAgIGVkaXRhYmxlLnBsYWNlaG9sZGVyJiYoYXR0ci5wbGFjZWhvbGRlcj1lZGl0YWJsZS5wbGFjZWhvbGRlcik7XG5cbiAgICB2YXIgZWRpdG9yQ2xhc3M9Y2xhc3NTZXQoeydhbmltYXRlZCc6dGhpcy5zdGF0ZS5zaGFrZUVkaXRvciwnc2hha2UnOnRoaXMuc3RhdGUuc2hha2VFZGl0b3J9KTtcbiAgICByZXR1cm4oXG4gICAgICAgIDx0ZCByZWY9XCJ0ZFwiIHN0eWxlPXt7cG9zaXRpb246J3JlbGF0aXZlJ319PlxuICAgICAgICAgICAge0VkaXRvcihlZGl0YWJsZSxhdHRyLGZvcm1hdCxlZGl0b3JDbGFzcyx0aGlzLnByb3BzLmNoaWxkcmVufHwnJyl9XG4gICAgICAgICAgICA8Tm90aWZpZXIgcmVmPVwibm90aWZpZXJcIj48L05vdGlmaWVyPlxuICAgICAgICA8L3RkPlxuICAgIClcbiAgfVxuXG4gIF9nZXRDaGVja0JveFZhbHVlKGUpe1xuICAgIGxldCB2YWx1ZSA9ICcnO1xuICAgIGxldCB2YWx1ZXMgPSBlLmN1cnJlbnRUYXJnZXQudmFsdWUuc3BsaXQoJzonKTtcbiAgICB2YWx1ZSA9IGUuY3VycmVudFRhcmdldC5jaGVja2VkP3ZhbHVlc1swXTp2YWx1ZXNbMV07XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbn1cblRhYmxlRWRpdENvbHVtbi5wcm9wVHlwZXMgPSB7XG4gIGNvbXBsZXRlRWRpdDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIHJvd0luZGV4OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICBjb2xJbmRleDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgYmx1clRvU2F2ZTogUmVhY3QuUHJvcFR5cGVzLmJvb2xcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgVGFibGVFZGl0Q29sdW1uO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvVGFibGVFZGl0Q29sdW1uLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbnZhciBFZGl0b3I9ZnVuY3Rpb24oZWRpdGFibGUsIGF0dHIsIGZvcm1hdCwgZWRpdG9yQ2xhc3MsIGRlZmF1bHRWYWx1ZSl7XG5cblxuICAgIGlmKGVkaXRhYmxlPT09dHJ1ZXx8dHlwZW9mIGVkaXRhYmxlPT09XCJzdHJpbmdcIil7Ly9zaW1wbGUgZGVjbGFyZVxuICAgICAgICB2YXIgdHlwZT1lZGl0YWJsZT09PXRydWU/J3RleHQnOmVkaXRhYmxlO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGlucHV0IHsuLi5hdHRyfSB0eXBlPXt0eXBlfSBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyhlZGl0b3JDbGFzc3x8XCJcIikrXCIgZm9ybS1jb250cm9sIGVkaXRvciBlZGl0LXRleHRcIn0gLz5cbiAgICAgICAgKVxuICAgIH0gZWxzZSBpZighZWRpdGFibGUpe1xuICAgICAgdmFyIHR5cGU9ZWRpdGFibGU9PT10cnVlPyd0ZXh0JzplZGl0YWJsZTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGlucHV0IHsuLi5hdHRyfSB0eXBlPXt0eXBlfSBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX0gZGlzYWJsZWQ9J2Rpc2FibGVkJ1xuICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyhlZGl0b3JDbGFzc3x8XCJcIikrXCIgZm9ybS1jb250cm9sIGVkaXRvciBlZGl0LXRleHRcIn0gLz5cbiAgICAgIClcbiAgICB9IGVsc2UgaWYoZWRpdGFibGUudHlwZSl7Ly9zdGFuZGFyZCBkZWNsYXJlXG4gICAgICAgIC8vcHV0IHN0eWxlIGlmIGV4aXN0XG4gICAgICAgIGVkaXRhYmxlLnN0eWxlJiYoYXR0ci5zdHlsZT1lZGl0YWJsZS5zdHlsZSk7XG5cbiAgICAgICAgLy9wdXQgY2xhc3MgaWYgZXhpc3RcbiAgICAgICAgYXR0ci5jbGFzc05hbWUgPSAoZWRpdG9yQ2xhc3N8fFwiXCIpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICBcIiBmb3JtLWNvbnRyb2wgZWRpdG9yIGVkaXQtXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRhYmxlLnR5cGUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgIChlZGl0YWJsZS5jbGFzc05hbWU/KFwiIFwiK2VkaXRhYmxlLmNsYXNzTmFtZSk6XCJcIik7XG5cbiAgICAgICAgaWYoZWRpdGFibGUudHlwZSA9PT0gJ3NlbGVjdCcpey8vcHJvY2VzcyBzZWxlY3QgaW5wdXRcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gW10sIHZhbHVlcz1lZGl0YWJsZS5vcHRpb25zLnZhbHVlcztcbiAgICAgICAgICAgIGlmKEFycmF5LmlzQXJyYXkodmFsdWVzKSl7Ly9vbmx5IGNhbiB1c2UgYXJycmF5IGRhdGEgZm9yIG9wdGlvbnNcbiAgICAgICAgICAgICAgICB2YXIgcm93VmFsdWU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucz12YWx1ZXMubWFwKGZ1bmN0aW9uKGQsaSl7XG4gICAgICAgICAgICAgICAgICAgIHJvd1ZhbHVlPWZvcm1hdD9mb3JtYXQoZCk6ZDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9eydvcHRpb24nK2l9IHZhbHVlPXtkfT57cm93VmFsdWV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICA8c2VsZWN0IHsuLi5hdHRyfSBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX0+e29wdGlvbnN9PC9zZWxlY3Q+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYoZWRpdGFibGUudHlwZSA9PT0gJ3RleHRhcmVhJyl7Ly9wcm9jZXNzIHRleHRhcmVhIGlucHV0XG4gICAgICAgICAgICAvL3B1dCAgb3RoZXIgaWYgZXhpc3RcbiAgICAgICAgICAgIGVkaXRhYmxlLmNvbHMmJihhdHRyLmNvbHM9ZWRpdGFibGUuY29scyk7XG4gICAgICAgICAgICBlZGl0YWJsZS5yb3dzJiYoYXR0ci5yb3dzPWVkaXRhYmxlLnJvd3MpO1xuICAgICAgICAgICAgdmFyIGtleVVwSGFuZGxlcj1hdHRyLm9uS2V5RG93bixzYXZlQnRuPW51bGw7XG4gICAgICAgICAgICBpZihrZXlVcEhhbmRsZXIpe1xuICAgICAgICAgICAgICAgIGF0dHIub25LZXlEb3duPWZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXlDb2RlICE9IDEzKSB7IC8vbm90IFByZXNzZWQgRU5URVJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleVVwSGFuZGxlcihlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgc2F2ZUJ0bj08YnV0dG8gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGJ0bi14cyB0ZXh0YXJlYS1zYXZlLWJ0blwiIG9uQ2xpY2s9e2tleVVwSGFuZGxlcn0+c2F2ZTwvYnV0dG8+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgey4uLmF0dHJ9IGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlfT48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICB7c2F2ZUJ0bn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmKGVkaXRhYmxlLnR5cGUgPT09ICdjaGVja2JveCcpe1xuICAgICAgICAgIGxldCB2YWx1ZXMgPSAndHJ1ZTpmYWxzZSc7XG4gICAgICAgICAgaWYoZWRpdGFibGUub3B0aW9ucyAmJiBlZGl0YWJsZS5vcHRpb25zLnZhbHVlcyl7XG4gICAgICAgICAgICAvLyB2YWx1ZXMgPSBlZGl0YWJsZS5vcHRpb25zLnZhbHVlcy5zcGxpdCgnOicpO1xuICAgICAgICAgICAgdmFsdWVzID0gZWRpdGFibGUub3B0aW9ucy52YWx1ZXM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGF0dHIuY2xhc3NOYW1lID0gYXR0ci5jbGFzc05hbWUucmVwbGFjZSgnZm9ybS1jb250cm9sJywnJyk7XG4gICAgICAgICAgYXR0ci5jbGFzc05hbWUgKz0gJyBjaGVja2JveCBwdWxsLXJpZ2h0JztcblxuICAgICAgICAgIGxldCBjaGVja2VkID0gZGVmYXVsdFZhbHVlICYmIGRlZmF1bHRWYWx1ZS50b1N0cmluZygpID09IHZhbHVlcy5zcGxpdCgnOicpWzBdP3RydWU6ZmFsc2U7XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGlucHV0IHsuLi5hdHRyfSB0eXBlPSdjaGVja2JveCcgdmFsdWU9e3ZhbHVlc30gZGVmYXVsdENoZWNrZWQ9e2NoZWNrZWR9Lz5cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2V7Ly9wcm9jZXNzIG90aGVyIGlucHV0IHR5cGUuIGFzIHBhc3N3b3JkLHVybCxlbWFpbC4uLlxuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgIDxpbnB1dCB7Li4uYXR0cn0gdHlwZT17dHlwZX0gZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL2RlZmF1bHQgcmV0dXJuIGZvciBvdGhlciBjYXNlIG9mIGVkaXRhYmxlXG4gICAgcmV0dXJuKFxuICAgICAgICA8aW5wdXQgey4uLmF0dHJ9IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXsoZWRpdG9yQ2xhc3N8fFwiXCIpK1wiIGZvcm0tY29udHJvbCBlZGl0b3IgZWRpdC10ZXh0XCJ9Lz5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3I7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9FZGl0b3IuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4vQ29uc3QnO1xuXG5pbXBvcnQge1xuICBUb2FzdENvbnRhaW5lcixcbiAgVG9hc3RNZXNzYWdlLFxufSBmcm9tIFwicmVhY3QtdG9hc3RyXCI7XG5cblxudmFyIFRvYXN0ck1lc3NhZ2VGYWN0b3J5PVJlYWN0LmNyZWF0ZUZhY3RvcnkoVG9hc3RNZXNzYWdlLmFuaW1hdGlvbik7XG5cbmNsYXNzIE5vdGlmaWNhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgLy8gYWxsb3cgdHlwZSBpcyBzdWNjZXNzLGluZm8sd2FybmluZyxlcnJvclxuICBub3RpY2UodHlwZSxtc2csdGl0bGUpe1xuICAgIHRoaXMucmVmcy50b2FzdHJbdHlwZV0oXG4gICAgICAgIG1zZyx0aXRsZSwge1xuICAgICAgICAgIG1vZGU6J3NpbmdsZScsXG4gICAgICAgICAgdGltZU91dDogNTAwMCxcbiAgICAgICAgICBleHRlbmRlZFRpbWVPdXQ6IDEwMDAsXG4gICAgICAgICAgc2hvd0FuaW1hdGlvbjogXCJhbmltYXRlZCAgYm91bmNlSW5cIixcbiAgICAgICAgICBoaWRlQW5pbWF0aW9uOiBcImFuaW1hdGVkIGJvdW5jZU91dFwiXG4gICAgICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuICAgICAgICA8VG9hc3RDb250YWluZXIgcmVmPVwidG9hc3RyXCIgdG9hc3RNZXNzYWdlRmFjdG9yeT17VG9hc3RyTWVzc2FnZUZhY3Rvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b2FzdC1jb250YWluZXJcIiAgY2xhc3NOYW1lPVwidG9hc3QtdG9wLXJpZ2h0XCI+PC9Ub2FzdENvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvTm90aWZpY2F0aW9uLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlRvYXN0TWVzc2FnZSA9IGV4cG9ydHMuVG9hc3RDb250YWluZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfVG9hc3RDb250YWluZXIgPSByZXF1aXJlKFwiLi9Ub2FzdENvbnRhaW5lclwiKTtcblxudmFyIF9Ub2FzdENvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ub2FzdENvbnRhaW5lcik7XG5cbnZhciBfVG9hc3RNZXNzYWdlID0gcmVxdWlyZShcIi4vVG9hc3RNZXNzYWdlXCIpO1xuXG52YXIgX1RvYXN0TWVzc2FnZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ub2FzdE1lc3NhZ2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLlRvYXN0Q29udGFpbmVyID0gX1RvYXN0Q29udGFpbmVyMi5kZWZhdWx0O1xuZXhwb3J0cy5Ub2FzdE1lc3NhZ2UgPSBfVG9hc3RNZXNzYWdlMi5kZWZhdWx0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LXRvYXN0ci9saWIvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0QWRkb25zVXBkYXRlID0gcmVxdWlyZShcInJlYWN0LWFkZG9ucy11cGRhdGVcIik7XG5cbnZhciBfcmVhY3RBZGRvbnNVcGRhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RBZGRvbnNVcGRhdGUpO1xuXG52YXIgX1RvYXN0TWVzc2FnZSA9IHJlcXVpcmUoXCIuL1RvYXN0TWVzc2FnZVwiKTtcblxudmFyIF9Ub2FzdE1lc3NhZ2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVG9hc3RNZXNzYWdlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgVG9hc3RDb250YWluZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVG9hc3RDb250YWluZXIsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRvYXN0Q29udGFpbmVyKCkge1xuICAgIHZhciBfT2JqZWN0JGdldFByb3RvdHlwZU87XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRvYXN0Q29udGFpbmVyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9PYmplY3QkZ2V0UHJvdG90eXBlTyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihUb2FzdENvbnRhaW5lcikpLmNhbGwuYXBwbHkoX09iamVjdCRnZXRQcm90b3R5cGVPLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICB0b2FzdHM6IFtdLFxuICAgICAgdG9hc3RJZDogMCxcbiAgICAgIHByZXZpb3VzTWVzc2FnZTogbnVsbFxuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFRvYXN0Q29udGFpbmVyLCBbe1xuICAgIGtleTogXCJlcnJvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlcnJvcihtZXNzYWdlLCB0aXRsZSwgb3B0aW9uc092ZXJyaWRlKSB7XG4gICAgICB0aGlzLl9ub3RpZnkodGhpcy5wcm9wcy50b2FzdFR5cGUuZXJyb3IsIG1lc3NhZ2UsIHRpdGxlLCBvcHRpb25zT3ZlcnJpZGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpbmZvXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluZm8obWVzc2FnZSwgdGl0bGUsIG9wdGlvbnNPdmVycmlkZSkge1xuICAgICAgdGhpcy5fbm90aWZ5KHRoaXMucHJvcHMudG9hc3RUeXBlLmluZm8sIG1lc3NhZ2UsIHRpdGxlLCBvcHRpb25zT3ZlcnJpZGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdWNjZXNzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1Y2Nlc3MobWVzc2FnZSwgdGl0bGUsIG9wdGlvbnNPdmVycmlkZSkge1xuICAgICAgdGhpcy5fbm90aWZ5KHRoaXMucHJvcHMudG9hc3RUeXBlLnN1Y2Nlc3MsIG1lc3NhZ2UsIHRpdGxlLCBvcHRpb25zT3ZlcnJpZGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ3YXJuaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSwgdGl0bGUsIG9wdGlvbnNPdmVycmlkZSkge1xuICAgICAgdGhpcy5fbm90aWZ5KHRoaXMucHJvcHMudG9hc3RUeXBlLndhcm5pbmcsIG1lc3NhZ2UsIHRpdGxlLCBvcHRpb25zT3ZlcnJpZGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjbGVhclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLnJlZnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfdGhpczIucmVmc1trZXldLmhpZGVUb2FzdChmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX25vdGlmeVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfbm90aWZ5KHR5cGUsIG1lc3NhZ2UsIHRpdGxlKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIG9wdGlvbnNPdmVycmlkZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMyB8fCBhcmd1bWVudHNbM10gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzNdO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5wcmV2ZW50RHVwbGljYXRlcykge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5wcmV2aW91c01lc3NhZ2UgPT09IG1lc3NhZ2UpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBrZXkgPSB0aGlzLnN0YXRlLnRvYXN0SWQrKztcbiAgICAgIHZhciB0b2FzdElkID0ga2V5O1xuICAgICAgdmFyIG5ld1RvYXN0ID0gKDAsIF9yZWFjdEFkZG9uc1VwZGF0ZTIuZGVmYXVsdCkob3B0aW9uc092ZXJyaWRlLCB7XG4gICAgICAgICRtZXJnZToge1xuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICAgICAgdG9hc3RJZDogdG9hc3RJZCxcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICByZWY6IFwidG9hc3RzX19cIiArIGtleSxcbiAgICAgICAgICBoYW5kbGVPbkNsaWNrOiBmdW5jdGlvbiBoYW5kbGVPbkNsaWNrKGUpIHtcbiAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBvcHRpb25zT3ZlcnJpZGUuaGFuZGxlT25DbGljaykge1xuICAgICAgICAgICAgICBvcHRpb25zT3ZlcnJpZGUuaGFuZGxlT25DbGljaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5faGFuZGxlX3RvYXN0X29uX2NsaWNrKGUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgaGFuZGxlUmVtb3ZlOiB0aGlzLl9oYW5kbGVfdG9hc3RfcmVtb3ZlLmJpbmQodGhpcylcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB2YXIgdG9hc3RPcGVyYXRpb24gPSBfZGVmaW5lUHJvcGVydHkoe30sIFwiXCIgKyAodGhpcy5wcm9wcy5uZXdlc3RPblRvcCA/IFwiJHVuc2hpZnRcIiA6IFwiJHB1c2hcIiksIFtuZXdUb2FzdF0pO1xuXG4gICAgICB2YXIgbmV4dFN0YXRlID0gKDAsIF9yZWFjdEFkZG9uc1VwZGF0ZTIuZGVmYXVsdCkodGhpcy5zdGF0ZSwge1xuICAgICAgICB0b2FzdHM6IHRvYXN0T3BlcmF0aW9uLFxuICAgICAgICBwcmV2aW91c01lc3NhZ2U6IHsgJHNldDogbWVzc2FnZSB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2hhbmRsZV90b2FzdF9vbl9jbGlja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlX3RvYXN0X29uX2NsaWNrKGV2ZW50KSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuICAgICAgaWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfaGFuZGxlX3RvYXN0X3JlbW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlX3RvYXN0X3JlbW92ZSh0b2FzdElkKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgdmFyIG9wZXJhdGlvbk5hbWUgPSBcIlwiICsgKHRoaXMucHJvcHMubmV3ZXN0T25Ub3AgPyBcInJlZHVjZVJpZ2h0XCIgOiBcInJlZHVjZVwiKTtcbiAgICAgIHRoaXMuc3RhdGUudG9hc3RzW29wZXJhdGlvbk5hbWVdKGZ1bmN0aW9uIChmb3VuZCwgdG9hc3QsIGluZGV4KSB7XG4gICAgICAgIGlmIChmb3VuZCB8fCB0b2FzdC50b2FzdElkICE9PSB0b2FzdElkKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzNC5zZXRTdGF0ZSgoMCwgX3JlYWN0QWRkb25zVXBkYXRlMi5kZWZhdWx0KShfdGhpczQuc3RhdGUsIHtcbiAgICAgICAgICB0b2FzdHM6IHsgJHNwbGljZTogW1tpbmRleCwgMV1dIH1cbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sIGZhbHNlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IFwiYXJpYS1saXZlXCI6IFwicG9saXRlXCIsIHJvbGU6IFwiYWxlcnRcIiB9KSxcbiAgICAgICAgdGhpcy5zdGF0ZS50b2FzdHMubWFwKGZ1bmN0aW9uICh0b2FzdCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczUucHJvcHMudG9hc3RNZXNzYWdlRmFjdG9yeSh0b2FzdCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBUb2FzdENvbnRhaW5lcjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblRvYXN0Q29udGFpbmVyLnByb3BUeXBlcyA9IHtcbiAgdG9hc3RUeXBlOiBfcmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBlcnJvcjogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgaW5mbzogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3VjY2VzczogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgd2FybmluZzogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmdcbiAgfSkuaXNSZXF1aXJlZCxcbiAgaWQ6IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRvYXN0TWVzc2FnZUZhY3Rvcnk6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBwcmV2ZW50RHVwbGljYXRlczogX3JlYWN0LlByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIG5ld2VzdE9uVG9wOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgb25DbGljazogX3JlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5Ub2FzdENvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIHRvYXN0VHlwZToge1xuICAgIGVycm9yOiBcImVycm9yXCIsXG4gICAgaW5mbzogXCJpbmZvXCIsXG4gICAgc3VjY2VzczogXCJzdWNjZXNzXCIsXG4gICAgd2FybmluZzogXCJ3YXJuaW5nXCJcbiAgfSxcbiAgaWQ6IFwidG9hc3QtY29udGFpbmVyXCIsXG4gIHRvYXN0TWVzc2FnZUZhY3Rvcnk6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVGYWN0b3J5KF9Ub2FzdE1lc3NhZ2UyLmRlZmF1bHQpLFxuICBwcmV2ZW50RHVwbGljYXRlczogZmFsc2UsXG4gIG5ld2VzdE9uVG9wOiB0cnVlLFxuICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge31cbn07XG5leHBvcnRzLmRlZmF1bHQgPSBUb2FzdENvbnRhaW5lcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC10b2FzdHIvbGliL1RvYXN0Q29udGFpbmVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgncmVhY3QvbGliL3VwZGF0ZScpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWFkZG9ucy11cGRhdGUvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIHVwZGF0ZVxuICovXG5cbi8qIGdsb2JhbCBoYXNPd25Qcm9wZXJ0eTp0cnVlICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJy4vT2JqZWN0LmFzc2lnbicpO1xudmFyIGtleU9mID0gcmVxdWlyZSgnZmJqcy9saWIva2V5T2YnKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9ICh7fSkuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIHNoYWxsb3dDb3B5KHgpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoeCkpIHtcbiAgICByZXR1cm4geC5jb25jYXQoKTtcbiAgfSBlbHNlIGlmICh4ICYmIHR5cGVvZiB4ID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBhc3NpZ24obmV3IHguY29uc3RydWN0b3IoKSwgeCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHg7XG4gIH1cbn1cblxudmFyIENPTU1BTkRfUFVTSCA9IGtleU9mKHsgJHB1c2g6IG51bGwgfSk7XG52YXIgQ09NTUFORF9VTlNISUZUID0ga2V5T2YoeyAkdW5zaGlmdDogbnVsbCB9KTtcbnZhciBDT01NQU5EX1NQTElDRSA9IGtleU9mKHsgJHNwbGljZTogbnVsbCB9KTtcbnZhciBDT01NQU5EX1NFVCA9IGtleU9mKHsgJHNldDogbnVsbCB9KTtcbnZhciBDT01NQU5EX01FUkdFID0ga2V5T2YoeyAkbWVyZ2U6IG51bGwgfSk7XG52YXIgQ09NTUFORF9BUFBMWSA9IGtleU9mKHsgJGFwcGx5OiBudWxsIH0pO1xuXG52YXIgQUxMX0NPTU1BTkRTX0xJU1QgPSBbQ09NTUFORF9QVVNILCBDT01NQU5EX1VOU0hJRlQsIENPTU1BTkRfU1BMSUNFLCBDT01NQU5EX1NFVCwgQ09NTUFORF9NRVJHRSwgQ09NTUFORF9BUFBMWV07XG5cbnZhciBBTExfQ09NTUFORFNfU0VUID0ge307XG5cbkFMTF9DT01NQU5EU19MSVNULmZvckVhY2goZnVuY3Rpb24gKGNvbW1hbmQpIHtcbiAgQUxMX0NPTU1BTkRTX1NFVFtjb21tYW5kXSA9IHRydWU7XG59KTtcblxuZnVuY3Rpb24gaW52YXJpYW50QXJyYXlDYXNlKHZhbHVlLCBzcGVjLCBjb21tYW5kKSB7XG4gICFBcnJheS5pc0FycmF5KHZhbHVlKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICd1cGRhdGUoKTogZXhwZWN0ZWQgdGFyZ2V0IG9mICVzIHRvIGJlIGFuIGFycmF5OyBnb3QgJXMuJywgY29tbWFuZCwgdmFsdWUpIDogaW52YXJpYW50KGZhbHNlKSA6IHVuZGVmaW5lZDtcbiAgdmFyIHNwZWNWYWx1ZSA9IHNwZWNbY29tbWFuZF07XG4gICFBcnJheS5pc0FycmF5KHNwZWNWYWx1ZSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAndXBkYXRlKCk6IGV4cGVjdGVkIHNwZWMgb2YgJXMgdG8gYmUgYW4gYXJyYXk7IGdvdCAlcy4gJyArICdEaWQgeW91IGZvcmdldCB0byB3cmFwIHlvdXIgcGFyYW1ldGVyIGluIGFuIGFycmF5PycsIGNvbW1hbmQsIHNwZWNWYWx1ZSkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB1cGRhdGUodmFsdWUsIHNwZWMpIHtcbiAgISh0eXBlb2Ygc3BlYyA9PT0gJ29iamVjdCcpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ3VwZGF0ZSgpOiBZb3UgcHJvdmlkZWQgYSBrZXkgcGF0aCB0byB1cGRhdGUoKSB0aGF0IGRpZCBub3QgY29udGFpbiBvbmUgJyArICdvZiAlcy4gRGlkIHlvdSBmb3JnZXQgdG8gaW5jbHVkZSB7JXM6IC4uLn0/JywgQUxMX0NPTU1BTkRTX0xJU1Quam9pbignLCAnKSwgQ09NTUFORF9TRVQpIDogaW52YXJpYW50KGZhbHNlKSA6IHVuZGVmaW5lZDtcblxuICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzcGVjLCBDT01NQU5EX1NFVCkpIHtcbiAgICAhKE9iamVjdC5rZXlzKHNwZWMpLmxlbmd0aCA9PT0gMSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnQ2Fubm90IGhhdmUgbW9yZSB0aGFuIG9uZSBrZXkgaW4gYW4gb2JqZWN0IHdpdGggJXMnLCBDT01NQU5EX1NFVCkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xuXG4gICAgcmV0dXJuIHNwZWNbQ09NTUFORF9TRVRdO1xuICB9XG5cbiAgdmFyIG5leHRWYWx1ZSA9IHNoYWxsb3dDb3B5KHZhbHVlKTtcblxuICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzcGVjLCBDT01NQU5EX01FUkdFKSkge1xuICAgIHZhciBtZXJnZU9iaiA9IHNwZWNbQ09NTUFORF9NRVJHRV07XG4gICAgIShtZXJnZU9iaiAmJiB0eXBlb2YgbWVyZ2VPYmogPT09ICdvYmplY3QnKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICd1cGRhdGUoKTogJXMgZXhwZWN0cyBhIHNwZWMgb2YgdHlwZSBcXCdvYmplY3RcXCc7IGdvdCAlcycsIENPTU1BTkRfTUVSR0UsIG1lcmdlT2JqKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG4gICAgIShuZXh0VmFsdWUgJiYgdHlwZW9mIG5leHRWYWx1ZSA9PT0gJ29iamVjdCcpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ3VwZGF0ZSgpOiAlcyBleHBlY3RzIGEgdGFyZ2V0IG9mIHR5cGUgXFwnb2JqZWN0XFwnOyBnb3QgJXMnLCBDT01NQU5EX01FUkdFLCBuZXh0VmFsdWUpIDogaW52YXJpYW50KGZhbHNlKSA6IHVuZGVmaW5lZDtcbiAgICBhc3NpZ24obmV4dFZhbHVlLCBzcGVjW0NPTU1BTkRfTUVSR0VdKTtcbiAgfVxuXG4gIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHNwZWMsIENPTU1BTkRfUFVTSCkpIHtcbiAgICBpbnZhcmlhbnRBcnJheUNhc2UodmFsdWUsIHNwZWMsIENPTU1BTkRfUFVTSCk7XG4gICAgc3BlY1tDT01NQU5EX1BVU0hdLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIG5leHRWYWx1ZS5wdXNoKGl0ZW0pO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc3BlYywgQ09NTUFORF9VTlNISUZUKSkge1xuICAgIGludmFyaWFudEFycmF5Q2FzZSh2YWx1ZSwgc3BlYywgQ09NTUFORF9VTlNISUZUKTtcbiAgICBzcGVjW0NPTU1BTkRfVU5TSElGVF0uZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgbmV4dFZhbHVlLnVuc2hpZnQoaXRlbSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzcGVjLCBDT01NQU5EX1NQTElDRSkpIHtcbiAgICAhQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnRXhwZWN0ZWQgJXMgdGFyZ2V0IHRvIGJlIGFuIGFycmF5OyBnb3QgJXMnLCBDT01NQU5EX1NQTElDRSwgdmFsdWUpIDogaW52YXJpYW50KGZhbHNlKSA6IHVuZGVmaW5lZDtcbiAgICAhQXJyYXkuaXNBcnJheShzcGVjW0NPTU1BTkRfU1BMSUNFXSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAndXBkYXRlKCk6IGV4cGVjdGVkIHNwZWMgb2YgJXMgdG8gYmUgYW4gYXJyYXkgb2YgYXJyYXlzOyBnb3QgJXMuICcgKyAnRGlkIHlvdSBmb3JnZXQgdG8gd3JhcCB5b3VyIHBhcmFtZXRlcnMgaW4gYW4gYXJyYXk/JywgQ09NTUFORF9TUExJQ0UsIHNwZWNbQ09NTUFORF9TUExJQ0VdKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG4gICAgc3BlY1tDT01NQU5EX1NQTElDRV0uZm9yRWFjaChmdW5jdGlvbiAoYXJncykge1xuICAgICAgIUFycmF5LmlzQXJyYXkoYXJncykgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAndXBkYXRlKCk6IGV4cGVjdGVkIHNwZWMgb2YgJXMgdG8gYmUgYW4gYXJyYXkgb2YgYXJyYXlzOyBnb3QgJXMuICcgKyAnRGlkIHlvdSBmb3JnZXQgdG8gd3JhcCB5b3VyIHBhcmFtZXRlcnMgaW4gYW4gYXJyYXk/JywgQ09NTUFORF9TUExJQ0UsIHNwZWNbQ09NTUFORF9TUExJQ0VdKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG4gICAgICBuZXh0VmFsdWUuc3BsaWNlLmFwcGx5KG5leHRWYWx1ZSwgYXJncyk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzcGVjLCBDT01NQU5EX0FQUExZKSkge1xuICAgICEodHlwZW9mIHNwZWNbQ09NTUFORF9BUFBMWV0gPT09ICdmdW5jdGlvbicpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ3VwZGF0ZSgpOiBleHBlY3RlZCBzcGVjIG9mICVzIHRvIGJlIGEgZnVuY3Rpb247IGdvdCAlcy4nLCBDT01NQU5EX0FQUExZLCBzcGVjW0NPTU1BTkRfQVBQTFldKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG4gICAgbmV4dFZhbHVlID0gc3BlY1tDT01NQU5EX0FQUExZXShuZXh0VmFsdWUpO1xuICB9XG5cbiAgZm9yICh2YXIgayBpbiBzcGVjKSB7XG4gICAgaWYgKCEoQUxMX0NPTU1BTkRTX1NFVC5oYXNPd25Qcm9wZXJ0eShrKSAmJiBBTExfQ09NTUFORFNfU0VUW2tdKSkge1xuICAgICAgbmV4dFZhbHVlW2tdID0gdXBkYXRlKHZhbHVlW2tdLCBzcGVjW2tdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV4dFZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVwZGF0ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvdXBkYXRlLmpzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBPYmplY3QuYXNzaWduXG4gKi9cblxuLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLW9iamVjdC5hc3NpZ25cblxuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2VzKSB7XG4gIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gdGFyZ2V0IGNhbm5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICB9XG5cbiAgdmFyIHRvID0gT2JqZWN0KHRhcmdldCk7XG4gIHZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbiAgZm9yICh2YXIgbmV4dEluZGV4ID0gMTsgbmV4dEluZGV4IDwgYXJndW1lbnRzLmxlbmd0aDsgbmV4dEluZGV4KyspIHtcbiAgICB2YXIgbmV4dFNvdXJjZSA9IGFyZ3VtZW50c1tuZXh0SW5kZXhdO1xuICAgIGlmIChuZXh0U291cmNlID09IG51bGwpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBmcm9tID0gT2JqZWN0KG5leHRTb3VyY2UpO1xuXG4gICAgLy8gV2UgZG9uJ3QgY3VycmVudGx5IHN1cHBvcnQgYWNjZXNzb3JzIG5vciBwcm94aWVzLiBUaGVyZWZvcmUgdGhpc1xuICAgIC8vIGNvcHkgY2Fubm90IHRocm93LiBJZiB3ZSBldmVyIHN1cHBvcnRlZCB0aGlzIHRoZW4gd2UgbXVzdCBoYW5kbGVcbiAgICAvLyBleGNlcHRpb25zIGFuZCBzaWRlLWVmZmVjdHMuIFdlIGRvbid0IHN1cHBvcnQgc3ltYm9scyBzbyB0aGV5IHdvbid0XG4gICAgLy8gYmUgdHJhbnNmZXJyZWQuXG5cbiAgICBmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuICAgICAgICB0b1trZXldID0gZnJvbVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0bztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NpZ247XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL09iamVjdC5hc3NpZ24uanNcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGtleU9mXG4gKi9cblxuLyoqXG4gKiBBbGxvd3MgZXh0cmFjdGlvbiBvZiBhIG1pbmlmaWVkIGtleS4gTGV0J3MgdGhlIGJ1aWxkIHN5c3RlbSBtaW5pZnkga2V5c1xuICogd2l0aG91dCBsb3NpbmcgdGhlIGFiaWxpdHkgdG8gZHluYW1pY2FsbHkgdXNlIGtleSBzdHJpbmdzIGFzIHZhbHVlc1xuICogdGhlbXNlbHZlcy4gUGFzcyBpbiBhbiBvYmplY3Qgd2l0aCBhIHNpbmdsZSBrZXkvdmFsIHBhaXIgYW5kIGl0IHdpbGwgcmV0dXJuXG4gKiB5b3UgdGhlIHN0cmluZyBrZXkgb2YgdGhhdCBzaW5nbGUgcmVjb3JkLiBTdXBwb3NlIHlvdSB3YW50IHRvIGdyYWIgdGhlXG4gKiB2YWx1ZSBmb3IgYSBrZXkgJ2NsYXNzTmFtZScgaW5zaWRlIG9mIGFuIG9iamVjdC4gS2V5L3ZhbCBtaW5pZmljYXRpb24gbWF5XG4gKiBoYXZlIGFsaWFzZWQgdGhhdCBrZXkgdG8gYmUgJ3hhMTInLiBrZXlPZih7Y2xhc3NOYW1lOiBudWxsfSkgd2lsbCByZXR1cm5cbiAqICd4YTEyJyBpbiB0aGF0IGNhc2UuIFJlc29sdmUga2V5cyB5b3Ugd2FudCB0byB1c2Ugb25jZSBhdCBzdGFydHVwIHRpbWUsIHRoZW5cbiAqIHJldXNlIHRob3NlIHJlc29sdXRpb25zLlxuICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGtleU9mID0gZnVuY3Rpb24gKG9uZUtleU9iaikge1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBvbmVLZXlPYmopIHtcbiAgICBpZiAoIW9uZUtleU9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgcmV0dXJuIGtleTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5T2Y7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZmJqcy9saWIva2V5T2YuanNcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGludmFyaWFudFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcignTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZianMvbGliL2ludmFyaWFudC5qc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMualF1ZXJ5ID0gZXhwb3J0cy5hbmltYXRpb24gPSB1bmRlZmluZWQ7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0QWRkb25zVXBkYXRlID0gcmVxdWlyZShcInJlYWN0LWFkZG9ucy11cGRhdGVcIik7XG5cbnZhciBfcmVhY3RBZGRvbnNVcGRhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RBZGRvbnNVcGRhdGUpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX2FuaW1hdGlvbk1peGluID0gcmVxdWlyZShcIi4vYW5pbWF0aW9uTWl4aW5cIik7XG5cbnZhciBfYW5pbWF0aW9uTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYW5pbWF0aW9uTWl4aW4pO1xuXG52YXIgX2pRdWVyeU1peGluID0gcmVxdWlyZShcIi4valF1ZXJ5TWl4aW5cIik7XG5cbnZhciBfalF1ZXJ5TWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfalF1ZXJ5TWl4aW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBub29wKCkge31cblxudmFyIFRvYXN0TWVzc2FnZVNwZWMgPSB7XG4gIGRpc3BsYXlOYW1lOiBcIlRvYXN0TWVzc2FnZVwiLFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHZhciBpY29uQ2xhc3NOYW1lcyA9IHtcbiAgICAgIGVycm9yOiBcInRvYXN0LWVycm9yXCIsXG4gICAgICBpbmZvOiBcInRvYXN0LWluZm9cIixcbiAgICAgIHN1Y2Nlc3M6IFwidG9hc3Qtc3VjY2Vzc1wiLFxuICAgICAgd2FybmluZzogXCJ0b2FzdC13YXJuaW5nXCJcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzTmFtZTogXCJ0b2FzdFwiLFxuICAgICAgaWNvbkNsYXNzTmFtZXM6IGljb25DbGFzc05hbWVzLFxuICAgICAgdGl0bGVDbGFzc05hbWU6IFwidG9hc3QtdGl0bGVcIixcbiAgICAgIG1lc3NhZ2VDbGFzc05hbWU6IFwidG9hc3QtbWVzc2FnZVwiLFxuICAgICAgdGFwVG9EaXNtaXNzOiB0cnVlLFxuICAgICAgY2xvc2VCdXR0b246IGZhbHNlXG4gICAgfTtcbiAgfSxcbiAgaGFuZGxlT25DbGljazogZnVuY3Rpb24gaGFuZGxlT25DbGljayhldmVudCkge1xuICAgIHRoaXMucHJvcHMuaGFuZGxlT25DbGljayhldmVudCk7XG4gICAgaWYgKHRoaXMucHJvcHMudGFwVG9EaXNtaXNzKSB7XG4gICAgICB0aGlzLmhpZGVUb2FzdCh0cnVlKTtcbiAgICB9XG4gIH0sXG4gIF9oYW5kbGVfY2xvc2VfYnV0dG9uX2NsaWNrOiBmdW5jdGlvbiBfaGFuZGxlX2Nsb3NlX2J1dHRvbl9jbGljayhldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuaGlkZVRvYXN0KHRydWUpO1xuICB9LFxuICBfaGFuZGxlX3JlbW92ZTogZnVuY3Rpb24gX2hhbmRsZV9yZW1vdmUoKSB7XG4gICAgdGhpcy5wcm9wcy5oYW5kbGVSZW1vdmUodGhpcy5wcm9wcy50b2FzdElkKTtcbiAgfSxcbiAgX3JlbmRlcl9jbG9zZV9idXR0b246IGZ1bmN0aW9uIF9yZW5kZXJfY2xvc2VfYnV0dG9uKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmNsb3NlQnV0dG9uID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgICAgY2xhc3NOYW1lOiBcInRvYXN0LWNsb3NlLWJ1dHRvblwiLCByb2xlOiBcImJ1dHRvblwiLFxuICAgICAgb25DbGljazogdGhpcy5faGFuZGxlX2Nsb3NlX2J1dHRvbl9jbGljayxcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7IF9faHRtbDogXCImdGltZXM7XCIgfVxuICAgIH0pIDogZmFsc2U7XG4gIH0sXG4gIF9yZW5kZXJfdGl0bGVfZWxlbWVudDogZnVuY3Rpb24gX3JlbmRlcl90aXRsZV9lbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnRpdGxlID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBjbGFzc05hbWU6IHRoaXMucHJvcHMudGl0bGVDbGFzc05hbWUgfSxcbiAgICAgIHRoaXMucHJvcHMudGl0bGVcbiAgICApIDogZmFsc2U7XG4gIH0sXG4gIF9yZW5kZXJfbWVzc2FnZV9lbGVtZW50OiBmdW5jdGlvbiBfcmVuZGVyX21lc3NhZ2VfZWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5tZXNzYWdlID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBjbGFzc05hbWU6IHRoaXMucHJvcHMubWVzc2FnZUNsYXNzTmFtZSB9LFxuICAgICAgdGhpcy5wcm9wcy5tZXNzYWdlXG4gICAgKSA6IGZhbHNlO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgaWNvbkNsYXNzTmFtZSA9IHRoaXMucHJvcHMuaWNvbkNsYXNzTmFtZSB8fCB0aGlzLnByb3BzLmljb25DbGFzc05hbWVzW3RoaXMucHJvcHMudHlwZV07XG5cbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGljb25DbGFzc05hbWUpLFxuICAgICAgICBzdHlsZTogdGhpcy5wcm9wcy5zdHlsZSxcbiAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVPbkNsaWNrLFxuICAgICAgICBvbk1vdXNlRW50ZXI6IHRoaXMuaGFuZGxlTW91c2VFbnRlcixcbiAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLmhhbmRsZU1vdXNlTGVhdmVcbiAgICAgIH0sXG4gICAgICB0aGlzLl9yZW5kZXJfY2xvc2VfYnV0dG9uKCksXG4gICAgICB0aGlzLl9yZW5kZXJfdGl0bGVfZWxlbWVudCgpLFxuICAgICAgdGhpcy5fcmVuZGVyX21lc3NhZ2VfZWxlbWVudCgpXG4gICAgKTtcbiAgfVxufTtcblxudmFyIGFuaW1hdGlvbiA9IGV4cG9ydHMuYW5pbWF0aW9uID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUNsYXNzKCgwLCBfcmVhY3RBZGRvbnNVcGRhdGUyLmRlZmF1bHQpKFRvYXN0TWVzc2FnZVNwZWMsIHtcbiAgZGlzcGxheU5hbWU6IHsgJHNldDogXCJUb2FzdE1lc3NhZ2UuYW5pbWF0aW9uXCIgfSxcbiAgbWl4aW5zOiB7ICRzZXQ6IFtfYW5pbWF0aW9uTWl4aW4yLmRlZmF1bHRdIH1cbn0pKTtcblxudmFyIGpRdWVyeSA9IGV4cG9ydHMualF1ZXJ5ID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUNsYXNzKCgwLCBfcmVhY3RBZGRvbnNVcGRhdGUyLmRlZmF1bHQpKFRvYXN0TWVzc2FnZVNwZWMsIHtcbiAgZGlzcGxheU5hbWU6IHsgJHNldDogXCJUb2FzdE1lc3NhZ2UualF1ZXJ5XCIgfSxcbiAgbWl4aW5zOiB7ICRzZXQ6IFtfalF1ZXJ5TWl4aW4yLmRlZmF1bHRdIH1cbn0pKTtcblxuLypcbiAqIGFzc2lnbiBkZWZhdWx0IG5vb3AgZnVuY3Rpb25zXG4gKi9cblRvYXN0TWVzc2FnZVNwZWMuaGFuZGxlTW91c2VFbnRlciA9IG5vb3A7XG5Ub2FzdE1lc3NhZ2VTcGVjLmhhbmRsZU1vdXNlTGVhdmUgPSBub29wO1xuVG9hc3RNZXNzYWdlU3BlYy5oaWRlVG9hc3QgPSBub29wO1xuXG52YXIgVG9hc3RNZXNzYWdlID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUNsYXNzKFRvYXN0TWVzc2FnZVNwZWMpO1xuXG5Ub2FzdE1lc3NhZ2UuYW5pbWF0aW9uID0gYW5pbWF0aW9uO1xuVG9hc3RNZXNzYWdlLmpRdWVyeSA9IGpRdWVyeTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVG9hc3RNZXNzYWdlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LXRvYXN0ci9saWIvVG9hc3RNZXNzYWdlL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1JlYWN0VHJhbnNpdGlvbkV2ZW50cyA9IHJlcXVpcmUoXCJyZWFjdC9saWIvUmVhY3RUcmFuc2l0aW9uRXZlbnRzXCIpO1xuXG52YXIgX1JlYWN0VHJhbnNpdGlvbkV2ZW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9SZWFjdFRyYW5zaXRpb25FdmVudHMpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfZWxlbWVudENsYXNzID0gcmVxdWlyZShcImVsZW1lbnQtY2xhc3NcIik7XG5cbnZhciBfZWxlbWVudENsYXNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2VsZW1lbnRDbGFzcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBUSUNLID0gMTc7XG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNpdGlvbjogbnVsbCwgLy8gc29tZSBleGFtcGxlcyBkZWZpbmVkIGluIGluZGV4LnNjc3MgKHNjYWxlLCBmYWRlSW5PdXQsIHJvdGF0ZSlcbiAgICAgIHNob3dBbmltYXRpb246IFwiYW5pbWF0ZWQgYm91bmNlSW5cIiwgLy8gb3Igb3RoZXIgYW5pbWF0aW9ucyBmcm9tIGFuaW1hdGUuY3NzXG4gICAgICBoaWRlQW5pbWF0aW9uOiBcImFuaW1hdGVkIGJvdW5jZU91dFwiLFxuICAgICAgdGltZU91dDogNTAwMCxcbiAgICAgIGV4dGVuZGVkVGltZU91dDogMTAwMFxuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuY2xhc3NOYW1lUXVldWUgPSBbXTtcbiAgICB0aGlzLmlzSGlkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5pbnRlcnZhbElkID0gbnVsbDtcbiAgfSxcbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLl9pc19tb3VudGVkID0gdHJ1ZTtcbiAgICB0aGlzLl9zaG93KCk7XG4gICAgdmFyIG5vZGUgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcyk7XG5cbiAgICB2YXIgb25IaWRlQ29tcGxldGUgPSBmdW5jdGlvbiBvbkhpZGVDb21wbGV0ZSgpIHtcbiAgICAgIGlmIChfdGhpcy5pc0hpZGluZykge1xuICAgICAgICBfdGhpcy5fc2V0X2lzX2hpZGluZyhmYWxzZSk7XG4gICAgICAgIF9SZWFjdFRyYW5zaXRpb25FdmVudHMyLmRlZmF1bHQucmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBvbkhpZGVDb21wbGV0ZSk7XG4gICAgICAgIF90aGlzLl9oYW5kbGVfcmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBfUmVhY3RUcmFuc2l0aW9uRXZlbnRzMi5kZWZhdWx0LmFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgb25IaWRlQ29tcGxldGUpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMudGltZU91dCA+IDApIHtcbiAgICAgIHRoaXMuX3NldF9pbnRlcnZhbF9pZChzZXRUaW1lb3V0KHRoaXMuaGlkZVRvYXN0LCB0aGlzLnByb3BzLnRpbWVPdXQpKTtcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLl9pc19tb3VudGVkID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuaW50ZXJ2YWxJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaW50ZXJ2YWxJZCk7XG4gICAgfVxuICB9LFxuICBfc2V0X3RyYW5zaXRpb246IGZ1bmN0aW9uIF9zZXRfdHJhbnNpdGlvbihoaWRlKSB7XG4gICAgdmFyIGFuaW1hdGlvblR5cGUgPSBoaWRlID8gXCJsZWF2ZVwiIDogXCJlbnRlclwiO1xuICAgIHZhciBub2RlID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIHZhciBjbGFzc05hbWUgPSB0aGlzLnByb3BzLnRyYW5zaXRpb24gKyBcIi1cIiArIGFuaW1hdGlvblR5cGU7XG4gICAgdmFyIGFjdGl2ZUNsYXNzTmFtZSA9IGNsYXNzTmFtZSArIFwiLWFjdGl2ZVwiO1xuXG4gICAgdmFyIGVuZExpc3RlbmVyID0gZnVuY3Rpb24gZW5kTGlzdGVuZXIoZSkge1xuICAgICAgaWYgKGUgJiYgZS50YXJnZXQgIT09IG5vZGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2xhc3NMaXN0ID0gKDAsIF9lbGVtZW50Q2xhc3MyLmRlZmF1bHQpKG5vZGUpO1xuICAgICAgY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgY2xhc3NMaXN0LnJlbW92ZShhY3RpdmVDbGFzc05hbWUpO1xuXG4gICAgICBfUmVhY3RUcmFuc2l0aW9uRXZlbnRzMi5kZWZhdWx0LnJlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgZW5kTGlzdGVuZXIpO1xuICAgIH07XG5cbiAgICBfUmVhY3RUcmFuc2l0aW9uRXZlbnRzMi5kZWZhdWx0LmFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgZW5kTGlzdGVuZXIpO1xuXG4gICAgKDAsIF9lbGVtZW50Q2xhc3MyLmRlZmF1bHQpKG5vZGUpLmFkZChjbGFzc05hbWUpO1xuXG4gICAgLy8gTmVlZCB0byBkbyB0aGlzIHRvIGFjdHVhbGx5IHRyaWdnZXIgYSB0cmFuc2l0aW9uLlxuICAgIHRoaXMuX3F1ZXVlX2NsYXNzKGFjdGl2ZUNsYXNzTmFtZSk7XG4gIH0sXG4gIF9jbGVhcl90cmFuc2l0aW9uOiBmdW5jdGlvbiBfY2xlYXJfdHJhbnNpdGlvbihoaWRlKSB7XG4gICAgdmFyIG5vZGUgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcyk7XG4gICAgdmFyIGFuaW1hdGlvblR5cGUgPSBoaWRlID8gXCJsZWF2ZVwiIDogXCJlbnRlclwiO1xuICAgIHZhciBjbGFzc05hbWUgPSB0aGlzLnByb3BzLnRyYW5zaXRpb24gKyBcIi1cIiArIGFuaW1hdGlvblR5cGU7XG4gICAgdmFyIGFjdGl2ZUNsYXNzTmFtZSA9IGNsYXNzTmFtZSArIFwiLWFjdGl2ZVwiO1xuXG4gICAgdmFyIGNsYXNzTGlzdCA9ICgwLCBfZWxlbWVudENsYXNzMi5kZWZhdWx0KShub2RlKTtcbiAgICBjbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgY2xhc3NMaXN0LnJlbW92ZShhY3RpdmVDbGFzc05hbWUpO1xuICB9LFxuICBfc2V0X2FuaW1hdGlvbjogZnVuY3Rpb24gX3NldF9hbmltYXRpb24oaGlkZSkge1xuICAgIHZhciBub2RlID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIHZhciBhbmltYXRpb25zID0gdGhpcy5fZ2V0X2FuaW1hdGlvbl9jbGFzc2VzKGhpZGUpO1xuICAgIHZhciBlbmRMaXN0ZW5lciA9IGZ1bmN0aW9uIGVuZExpc3RlbmVyKGUpIHtcbiAgICAgIGlmIChlICYmIGUudGFyZ2V0ICE9PSBub2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYW5pbWF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhbmltKSB7XG4gICAgICAgIHJldHVybiAoMCwgX2VsZW1lbnRDbGFzczIuZGVmYXVsdCkobm9kZSkucmVtb3ZlKGFuaW0pO1xuICAgICAgfSk7XG5cbiAgICAgIF9SZWFjdFRyYW5zaXRpb25FdmVudHMyLmRlZmF1bHQucmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBlbmRMaXN0ZW5lcik7XG4gICAgfTtcblxuICAgIF9SZWFjdFRyYW5zaXRpb25FdmVudHMyLmRlZmF1bHQuYWRkRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBlbmRMaXN0ZW5lcik7XG5cbiAgICBhbmltYXRpb25zLmZvckVhY2goZnVuY3Rpb24gKGFuaW0pIHtcbiAgICAgIHJldHVybiAoMCwgX2VsZW1lbnRDbGFzczIuZGVmYXVsdCkobm9kZSkuYWRkKGFuaW0pO1xuICAgIH0pO1xuICB9LFxuICBfZ2V0X2FuaW1hdGlvbl9jbGFzc2VzOiBmdW5jdGlvbiBfZ2V0X2FuaW1hdGlvbl9jbGFzc2VzKGhpZGUpIHtcbiAgICB2YXIgYW5pbWF0aW9ucyA9IGhpZGUgPyB0aGlzLnByb3BzLmhpZGVBbmltYXRpb24gOiB0aGlzLnByb3BzLnNob3dBbmltYXRpb247XG4gICAgaWYgKFwiW29iamVjdCBBcnJheV1cIiA9PT0gdG9TdHJpbmcuY2FsbChhbmltYXRpb25zKSkge1xuICAgICAgcmV0dXJuIGFuaW1hdGlvbnM7XG4gICAgfSBlbHNlIGlmIChcInN0cmluZ1wiID09PSB0eXBlb2YgYW5pbWF0aW9ucykge1xuICAgICAgcmV0dXJuIGFuaW1hdGlvbnMuc3BsaXQoXCIgXCIpO1xuICAgIH1cbiAgfSxcbiAgX2NsZWFyX2FuaW1hdGlvbjogZnVuY3Rpb24gX2NsZWFyX2FuaW1hdGlvbihoaWRlKSB7XG4gICAgdmFyIG5vZGUgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcyk7XG4gICAgdmFyIGFuaW1hdGlvbnMgPSB0aGlzLl9nZXRfYW5pbWF0aW9uX2NsYXNzZXMoaGlkZSk7XG4gICAgYW5pbWF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhbmltYXRpb24pIHtcbiAgICAgIHJldHVybiAoMCwgX2VsZW1lbnRDbGFzczIuZGVmYXVsdCkobm9kZSkucmVtb3ZlKGFuaW1hdGlvbik7XG4gICAgfSk7XG4gIH0sXG4gIF9xdWV1ZV9jbGFzczogZnVuY3Rpb24gX3F1ZXVlX2NsYXNzKGNsYXNzTmFtZSkge1xuICAgIHRoaXMuY2xhc3NOYW1lUXVldWUucHVzaChjbGFzc05hbWUpO1xuXG4gICAgaWYgKCF0aGlzLnRpbWVvdXQpIHtcbiAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQodGhpcy5fZmx1c2hfY2xhc3NfbmFtZV9xdWV1ZSwgVElDSyk7XG4gICAgfVxuICB9LFxuICBfZmx1c2hfY2xhc3NfbmFtZV9xdWV1ZTogZnVuY3Rpb24gX2ZsdXNoX2NsYXNzX25hbWVfcXVldWUoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5faXNfbW91bnRlZCkge1xuICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUoX3RoaXMyKTtcbiAgICAgICAgX3RoaXMyLmNsYXNzTmFtZVF1ZXVlLmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgICAgIHJldHVybiAoMCwgX2VsZW1lbnRDbGFzczIuZGVmYXVsdCkobm9kZSkuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9XG4gICAgdGhpcy5jbGFzc05hbWVRdWV1ZS5sZW5ndGggPSAwO1xuICAgIHRoaXMudGltZW91dCA9IG51bGw7XG4gIH0sXG4gIF9zaG93OiBmdW5jdGlvbiBfc2hvdygpIHtcbiAgICBpZiAodGhpcy5wcm9wcy50cmFuc2l0aW9uKSB7XG4gICAgICB0aGlzLl9zZXRfdHJhbnNpdGlvbigpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5zaG93QW5pbWF0aW9uKSB7XG4gICAgICB0aGlzLl9zZXRfYW5pbWF0aW9uKCk7XG4gICAgfVxuICB9LFxuICBoYW5kbGVNb3VzZUVudGVyOiBmdW5jdGlvbiBoYW5kbGVNb3VzZUVudGVyKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmludGVydmFsSWQpO1xuICAgIHRoaXMuX3NldF9pbnRlcnZhbF9pZChudWxsKTtcbiAgICBpZiAodGhpcy5pc0hpZGluZykge1xuICAgICAgdGhpcy5fc2V0X2lzX2hpZGluZyhmYWxzZSk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmhpZGVBbmltYXRpb24pIHtcbiAgICAgICAgdGhpcy5fY2xlYXJfYW5pbWF0aW9uKHRydWUpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnRyYW5zaXRpb24pIHtcbiAgICAgICAgdGhpcy5fY2xlYXJfdHJhbnNpdGlvbih0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGhhbmRsZU1vdXNlTGVhdmU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlTGVhdmUoKSB7XG4gICAgaWYgKCF0aGlzLmlzSGlkaW5nICYmICh0aGlzLnByb3BzLnRpbWVPdXQgPiAwIHx8IHRoaXMucHJvcHMuZXh0ZW5kZWRUaW1lT3V0ID4gMCkpIHtcbiAgICAgIHRoaXMuX3NldF9pbnRlcnZhbF9pZChzZXRUaW1lb3V0KHRoaXMuaGlkZVRvYXN0LCB0aGlzLnByb3BzLmV4dGVuZGVkVGltZU91dCkpO1xuICAgIH1cbiAgfSxcbiAgaGlkZVRvYXN0OiBmdW5jdGlvbiBoaWRlVG9hc3Qob3ZlcnJpZGUpIHtcbiAgICBpZiAodGhpcy5pc0hpZGluZyB8fCB0aGlzLmludGVydmFsSWQgPT09IG51bGwgJiYgIW92ZXJyaWRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fc2V0X2lzX2hpZGluZyh0cnVlKTtcbiAgICBpZiAodGhpcy5wcm9wcy50cmFuc2l0aW9uKSB7XG4gICAgICB0aGlzLl9zZXRfdHJhbnNpdGlvbih0cnVlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuaGlkZUFuaW1hdGlvbikge1xuICAgICAgdGhpcy5fc2V0X2FuaW1hdGlvbih0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faGFuZGxlX3JlbW92ZSgpO1xuICAgIH1cbiAgfSxcbiAgX3NldF9pbnRlcnZhbF9pZDogZnVuY3Rpb24gX3NldF9pbnRlcnZhbF9pZChpbnRlcnZhbElkKSB7XG4gICAgdGhpcy5pbnRlcnZhbElkID0gaW50ZXJ2YWxJZDtcbiAgfSxcbiAgX3NldF9pc19oaWRpbmc6IGZ1bmN0aW9uIF9zZXRfaXNfaGlkaW5nKGlzSGlkaW5nKSB7XG4gICAgdGhpcy5pc0hpZGluZyA9IGlzSGlkaW5nO1xuICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LXRvYXN0ci9saWIvVG9hc3RNZXNzYWdlL2FuaW1hdGlvbk1peGluLmpzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBSZWFjdFRyYW5zaXRpb25FdmVudHNcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IHJlcXVpcmUoJ2ZianMvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50Jyk7XG5cbi8qKlxuICogRVZFTlRfTkFNRV9NQVAgaXMgdXNlZCB0byBkZXRlcm1pbmUgd2hpY2ggZXZlbnQgZmlyZWQgd2hlbiBhXG4gKiB0cmFuc2l0aW9uL2FuaW1hdGlvbiBlbmRzLCBiYXNlZCBvbiB0aGUgc3R5bGUgcHJvcGVydHkgdXNlZCB0b1xuICogZGVmaW5lIHRoYXQgZXZlbnQuXG4gKi9cbnZhciBFVkVOVF9OQU1FX01BUCA9IHtcbiAgdHJhbnNpdGlvbmVuZDoge1xuICAgICd0cmFuc2l0aW9uJzogJ3RyYW5zaXRpb25lbmQnLFxuICAgICdXZWJraXRUcmFuc2l0aW9uJzogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgICdNb3pUcmFuc2l0aW9uJzogJ21velRyYW5zaXRpb25FbmQnLFxuICAgICdPVHJhbnNpdGlvbic6ICdvVHJhbnNpdGlvbkVuZCcsXG4gICAgJ21zVHJhbnNpdGlvbic6ICdNU1RyYW5zaXRpb25FbmQnXG4gIH0sXG5cbiAgYW5pbWF0aW9uZW5kOiB7XG4gICAgJ2FuaW1hdGlvbic6ICdhbmltYXRpb25lbmQnLFxuICAgICdXZWJraXRBbmltYXRpb24nOiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICAnTW96QW5pbWF0aW9uJzogJ21vekFuaW1hdGlvbkVuZCcsXG4gICAgJ09BbmltYXRpb24nOiAnb0FuaW1hdGlvbkVuZCcsXG4gICAgJ21zQW5pbWF0aW9uJzogJ01TQW5pbWF0aW9uRW5kJ1xuICB9XG59O1xuXG52YXIgZW5kRXZlbnRzID0gW107XG5cbmZ1bmN0aW9uIGRldGVjdEV2ZW50cygpIHtcbiAgdmFyIHRlc3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB2YXIgc3R5bGUgPSB0ZXN0RWwuc3R5bGU7XG5cbiAgLy8gT24gc29tZSBwbGF0Zm9ybXMsIGluIHBhcnRpY3VsYXIgc29tZSByZWxlYXNlcyBvZiBBbmRyb2lkIDQueCxcbiAgLy8gdGhlIHVuLXByZWZpeGVkIFwiYW5pbWF0aW9uXCIgYW5kIFwidHJhbnNpdGlvblwiIHByb3BlcnRpZXMgYXJlIGRlZmluZWQgb24gdGhlXG4gIC8vIHN0eWxlIG9iamVjdCBidXQgdGhlIGV2ZW50cyB0aGF0IGZpcmUgd2lsbCBzdGlsbCBiZSBwcmVmaXhlZCwgc28gd2UgbmVlZFxuICAvLyB0byBjaGVjayBpZiB0aGUgdW4tcHJlZml4ZWQgZXZlbnRzIGFyZSB1c2VhYmxlLCBhbmQgaWYgbm90IHJlbW92ZSB0aGVtXG4gIC8vIGZyb20gdGhlIG1hcFxuICBpZiAoISgnQW5pbWF0aW9uRXZlbnQnIGluIHdpbmRvdykpIHtcbiAgICBkZWxldGUgRVZFTlRfTkFNRV9NQVAuYW5pbWF0aW9uZW5kLmFuaW1hdGlvbjtcbiAgfVxuXG4gIGlmICghKCdUcmFuc2l0aW9uRXZlbnQnIGluIHdpbmRvdykpIHtcbiAgICBkZWxldGUgRVZFTlRfTkFNRV9NQVAudHJhbnNpdGlvbmVuZC50cmFuc2l0aW9uO1xuICB9XG5cbiAgZm9yICh2YXIgYmFzZUV2ZW50TmFtZSBpbiBFVkVOVF9OQU1FX01BUCkge1xuICAgIHZhciBiYXNlRXZlbnRzID0gRVZFTlRfTkFNRV9NQVBbYmFzZUV2ZW50TmFtZV07XG4gICAgZm9yICh2YXIgc3R5bGVOYW1lIGluIGJhc2VFdmVudHMpIHtcbiAgICAgIGlmIChzdHlsZU5hbWUgaW4gc3R5bGUpIHtcbiAgICAgICAgZW5kRXZlbnRzLnB1c2goYmFzZUV2ZW50c1tzdHlsZU5hbWVdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmlmIChFeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00pIHtcbiAgZGV0ZWN0RXZlbnRzKCk7XG59XG5cbi8vIFdlIHVzZSB0aGUgcmF3IHthZGR8cmVtb3ZlfUV2ZW50TGlzdGVuZXIoKSBjYWxsIGJlY2F1c2UgRXZlbnRMaXN0ZW5lclxuLy8gZG9lcyBub3Qga25vdyBob3cgdG8gcmVtb3ZlIGV2ZW50IGxpc3RlbmVycyBhbmQgd2UgcmVhbGx5IHNob3VsZFxuLy8gY2xlYW4gdXAuIEFsc28sIHRoZXNlIGV2ZW50cyBhcmUgbm90IHRyaWdnZXJlZCBpbiBvbGRlciBicm93c2Vyc1xuLy8gc28gd2Ugc2hvdWxkIGJlIEEtT0sgaGVyZS5cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lcikge1xuICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudExpc3RlbmVyLCBmYWxzZSk7XG59XG5cbnZhciBSZWFjdFRyYW5zaXRpb25FdmVudHMgPSB7XG4gIGFkZEVuZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIChub2RlLCBldmVudExpc3RlbmVyKSB7XG4gICAgaWYgKGVuZEV2ZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIElmIENTUyB0cmFuc2l0aW9ucyBhcmUgbm90IHN1cHBvcnRlZCwgdHJpZ2dlciBhbiBcImVuZCBhbmltYXRpb25cIlxuICAgICAgLy8gZXZlbnQgaW1tZWRpYXRlbHkuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dChldmVudExpc3RlbmVyLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZW5kRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGVuZEV2ZW50KSB7XG4gICAgICBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGVuZEV2ZW50LCBldmVudExpc3RlbmVyKTtcbiAgICB9KTtcbiAgfSxcblxuICByZW1vdmVFbmRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiAobm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgIGlmIChlbmRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVuZEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbmRFdmVudCkge1xuICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBlbmRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RUcmFuc2l0aW9uRXZlbnRzO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0L2xpYi9SZWFjdFRyYW5zaXRpb25FdmVudHMuanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIEV4ZWN1dGlvbkVudmlyb25tZW50XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2FuVXNlRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxuLyoqXG4gKiBTaW1wbGUsIGxpZ2h0d2VpZ2h0IG1vZHVsZSBhc3Npc3Rpbmcgd2l0aCB0aGUgZGV0ZWN0aW9uIGFuZCBjb250ZXh0IG9mXG4gKiBXb3JrZXIuIEhlbHBzIGF2b2lkIGNpcmN1bGFyIGRlcGVuZGVuY2llcyBhbmQgYWxsb3dzIGNvZGUgdG8gcmVhc29uIGFib3V0XG4gKiB3aGV0aGVyIG9yIG5vdCB0aGV5IGFyZSBpbiBhIFdvcmtlciwgZXZlbiBpZiB0aGV5IG5ldmVyIGluY2x1ZGUgdGhlIG1haW5cbiAqIGBSZWFjdFdvcmtlcmAgZGVwZW5kZW5jeS5cbiAqL1xudmFyIEV4ZWN1dGlvbkVudmlyb25tZW50ID0ge1xuXG4gIGNhblVzZURPTTogY2FuVXNlRE9NLFxuXG4gIGNhblVzZVdvcmtlcnM6IHR5cGVvZiBXb3JrZXIgIT09ICd1bmRlZmluZWQnLFxuXG4gIGNhblVzZUV2ZW50TGlzdGVuZXJzOiBjYW5Vc2VET00gJiYgISEod2luZG93LmFkZEV2ZW50TGlzdGVuZXIgfHwgd2luZG93LmF0dGFjaEV2ZW50KSxcblxuICBjYW5Vc2VWaWV3cG9ydDogY2FuVXNlRE9NICYmICEhd2luZG93LnNjcmVlbixcblxuICBpc0luV29ya2VyOiAhY2FuVXNlRE9NIC8vIEZvciBub3csIHRoaXMgaXMgdHJ1ZSAtIG1pZ2h0IGNoYW5nZSBpbiB0aGUgZnV0dXJlLlxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZianMvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50LmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0cykge1xuICByZXR1cm4gbmV3IEVsZW1lbnRDbGFzcyhvcHRzKVxufVxuXG5mdW5jdGlvbiBpbmRleE9mKGFyciwgcHJvcCkge1xuICBpZiAoYXJyLmluZGV4T2YpIHJldHVybiBhcnIuaW5kZXhPZihwcm9wKVxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKVxuICAgIGlmIChhcnJbaV0gPT09IHByb3ApIHJldHVybiBpXG4gIHJldHVybiAtMVxufVxuXG5mdW5jdGlvbiBFbGVtZW50Q2xhc3Mob3B0cykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgRWxlbWVudENsYXNzKSkgcmV0dXJuIG5ldyBFbGVtZW50Q2xhc3Mob3B0cylcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIGlmICghb3B0cykgb3B0cyA9IHt9XG5cbiAgLy8gc2ltaWxhciBkb2luZyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IGJ1dCB3b3JrcyBpbiBJRThcbiAgaWYgKG9wdHMubm9kZVR5cGUpIG9wdHMgPSB7ZWw6IG9wdHN9XG5cbiAgdGhpcy5vcHRzID0gb3B0c1xuICB0aGlzLmVsID0gb3B0cy5lbCB8fCBkb2N1bWVudC5ib2R5XG4gIGlmICh0eXBlb2YgdGhpcy5lbCAhPT0gJ29iamVjdCcpIHRoaXMuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuZWwpXG59XG5cbkVsZW1lbnRDbGFzcy5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7XG4gIHZhciBlbCA9IHRoaXMuZWxcbiAgaWYgKCFlbCkgcmV0dXJuXG4gIGlmIChlbC5jbGFzc05hbWUgPT09IFwiXCIpIHJldHVybiBlbC5jbGFzc05hbWUgPSBjbGFzc05hbWVcbiAgdmFyIGNsYXNzZXMgPSBlbC5jbGFzc05hbWUuc3BsaXQoJyAnKVxuICBpZiAoaW5kZXhPZihjbGFzc2VzLCBjbGFzc05hbWUpID4gLTEpIHJldHVybiBjbGFzc2VzXG4gIGNsYXNzZXMucHVzaChjbGFzc05hbWUpXG4gIGVsLmNsYXNzTmFtZSA9IGNsYXNzZXMuam9pbignICcpXG4gIHJldHVybiBjbGFzc2VzXG59XG5cbkVsZW1lbnRDbGFzcy5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7XG4gIHZhciBlbCA9IHRoaXMuZWxcbiAgaWYgKCFlbCkgcmV0dXJuXG4gIGlmIChlbC5jbGFzc05hbWUgPT09IFwiXCIpIHJldHVyblxuICB2YXIgY2xhc3NlcyA9IGVsLmNsYXNzTmFtZS5zcGxpdCgnICcpXG4gIHZhciBpZHggPSBpbmRleE9mKGNsYXNzZXMsIGNsYXNzTmFtZSlcbiAgaWYgKGlkeCA+IC0xKSBjbGFzc2VzLnNwbGljZShpZHgsIDEpXG4gIGVsLmNsYXNzTmFtZSA9IGNsYXNzZXMuam9pbignICcpXG4gIHJldHVybiBjbGFzc2VzXG59XG5cbkVsZW1lbnRDbGFzcy5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7XG4gIHZhciBlbCA9IHRoaXMuZWxcbiAgaWYgKCFlbCkgcmV0dXJuXG4gIHZhciBjbGFzc2VzID0gZWwuY2xhc3NOYW1lLnNwbGl0KCcgJylcbiAgcmV0dXJuIGluZGV4T2YoY2xhc3NlcywgY2xhc3NOYW1lKSA+IC0xXG59XG5cbkVsZW1lbnRDbGFzcy5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7XG4gIHZhciBlbCA9IHRoaXMuZWxcbiAgaWYgKCFlbCkgcmV0dXJuXG4gIGlmICh0aGlzLmhhcyhjbGFzc05hbWUpKSB0aGlzLnJlbW92ZShjbGFzc05hbWUpXG4gIGVsc2UgdGhpcy5hZGQoY2xhc3NOYW1lKVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZWxlbWVudC1jbGFzcy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBjYWxsX3Nob3dfbWV0aG9kKCRub2RlLCBwcm9wcykge1xuICAkbm9kZVtwcm9wcy5zaG93TWV0aG9kXSh7XG4gICAgZHVyYXRpb246IHByb3BzLnNob3dEdXJhdGlvbixcbiAgICBlYXNpbmc6IHByb3BzLnNob3dFYXNpbmdcbiAgfSk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGRpc3BsYXk6IFwibm9uZVwiIH0sXG4gICAgICAvLyBlZmZlY3RpdmUgJC5oaWRlKClcbiAgICAgIHNob3dNZXRob2Q6IFwiZmFkZUluXCIsIC8vIHNsaWRlRG93biwgYW5kIHNob3cgYXJlIGJ1aWx0IGludG8galF1ZXJ5XG4gICAgICBzaG93RHVyYXRpb246IDMwMCxcbiAgICAgIHNob3dFYXNpbmc6IFwic3dpbmdcIiwgLy8gYW5kIGxpbmVhciBhcmUgYnVpbHQgaW50byBqUXVlcnlcbiAgICAgIGhpZGVNZXRob2Q6IFwiZmFkZU91dFwiLFxuICAgICAgaGlkZUR1cmF0aW9uOiAxMDAwLFxuICAgICAgaGlkZUVhc2luZzogXCJzd2luZ1wiLFxuICAgICAgLy9cbiAgICAgIHRpbWVPdXQ6IDUwMDAsXG4gICAgICBleHRlbmRlZFRpbWVPdXQ6IDEwMDBcbiAgICB9O1xuICB9LFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW50ZXJ2YWxJZDogbnVsbCxcbiAgICAgIGlzSGlkaW5nOiBmYWxzZVxuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjYWxsX3Nob3dfbWV0aG9kKHRoaXMuX2dldF8kX25vZGUoKSwgdGhpcy5wcm9wcyk7XG4gICAgaWYgKHRoaXMucHJvcHMudGltZU91dCA+IDApIHtcbiAgICAgIHRoaXMuX3NldF9pbnRlcnZhbF9pZChzZXRUaW1lb3V0KHRoaXMuaGlkZVRvYXN0LCB0aGlzLnByb3BzLnRpbWVPdXQpKTtcbiAgICB9XG4gIH0sXG4gIGhhbmRsZU1vdXNlRW50ZXI6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlRW50ZXIoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuc3RhdGUuaW50ZXJ2YWxJZCk7XG4gICAgdGhpcy5fc2V0X2ludGVydmFsX2lkKG51bGwpO1xuICAgIHRoaXMuX3NldF9pc19oaWRpbmcoZmFsc2UpO1xuXG4gICAgY2FsbF9zaG93X21ldGhvZCh0aGlzLl9nZXRfJF9ub2RlKCkuc3RvcCh0cnVlLCB0cnVlKSwgdGhpcy5wcm9wcyk7XG4gIH0sXG4gIGhhbmRsZU1vdXNlTGVhdmU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlTGVhdmUoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmlzSGlkaW5nICYmICh0aGlzLnByb3BzLnRpbWVPdXQgPiAwIHx8IHRoaXMucHJvcHMuZXh0ZW5kZWRUaW1lT3V0ID4gMCkpIHtcbiAgICAgIHRoaXMuX3NldF9pbnRlcnZhbF9pZChzZXRUaW1lb3V0KHRoaXMuaGlkZVRvYXN0LCB0aGlzLnByb3BzLmV4dGVuZGVkVGltZU91dCkpO1xuICAgIH1cbiAgfSxcbiAgaGlkZVRvYXN0OiBmdW5jdGlvbiBoaWRlVG9hc3Qob3ZlcnJpZGUpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5pc0hpZGluZyB8fCB0aGlzLnN0YXRlLmludGVydmFsSWQgPT09IG51bGwgJiYgIW92ZXJyaWRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0hpZGluZzogdHJ1ZSB9KTtcblxuICAgIHRoaXMuX2dldF8kX25vZGUoKVt0aGlzLnByb3BzLmhpZGVNZXRob2RdKHtcbiAgICAgIGR1cmF0aW9uOiB0aGlzLnByb3BzLmhpZGVEdXJhdGlvbixcbiAgICAgIGVhc2luZzogdGhpcy5wcm9wcy5oaWRlRWFzaW5nLFxuICAgICAgY29tcGxldGU6IHRoaXMuX2hhbmRsZV9yZW1vdmVcbiAgICB9KTtcbiAgfSxcbiAgX2dldF8kX25vZGU6IGZ1bmN0aW9uIF9nZXRfJF9ub2RlKCkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4gICAgcmV0dXJuIGpRdWVyeShfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcykpO1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW5kZWYgKi9cbiAgfSxcbiAgX3NldF9pbnRlcnZhbF9pZDogZnVuY3Rpb24gX3NldF9pbnRlcnZhbF9pZChpbnRlcnZhbElkKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbnRlcnZhbElkOiBpbnRlcnZhbElkXG4gICAgfSk7XG4gIH0sXG4gIF9zZXRfaXNfaGlkaW5nOiBmdW5jdGlvbiBfc2V0X2lzX2hpZGluZyhpc0hpZGluZykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNIaWRpbmc6IGlzSGlkaW5nXG4gICAgfSk7XG4gIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtdG9hc3RyL2xpYi9Ub2FzdE1lc3NhZ2UvalF1ZXJ5TWl4aW4uanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQYWdlQnV0dG9uIGZyb20gJy4vUGFnZUJ1dHRvbi5qcyc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi4vQ29uc3QnO1xuXG5jbGFzcyBQYWdpbmF0aW9uTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY2hhbmdlUGFnZShwYWdlKSB7XG4gICAgaWYgKHBhZ2UgPT0gdGhpcy5wcm9wcy5wcmVQYWdlKSB7XG4gICAgICBwYWdlID0gdGhpcy5wcm9wcy5jdXJyUGFnZSAtIDEgPCAxID8gMSA6IHRoaXMucHJvcHMuY3VyclBhZ2UgLSAxO1xuICAgIH0gZWxzZSBpZiAocGFnZSA9PSB0aGlzLnByb3BzLm5leHRQYWdlKSB7XG4gICAgICBwYWdlID0gdGhpcy5wcm9wcy5jdXJyUGFnZSArIDEgPiB0aGlzLnRvdGFsUGFnZXMgPyB0aGlzLnRvdGFsUGFnZXMgOiB0aGlzLnByb3BzLmN1cnJQYWdlICsgMTtcbiAgICB9IGVsc2UgaWYgKHBhZ2UgPT0gdGhpcy5wcm9wcy5sYXN0UGFnZSkge1xuICAgICAgcGFnZSA9IHRoaXMudG90YWxQYWdlcztcbiAgICB9IGVsc2UgaWYgKHBhZ2UgPT0gdGhpcy5wcm9wcy5maXJzdFBhZ2UpIHtcbiAgICAgIHBhZ2UgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYWdlID0gcGFyc2VJbnQocGFnZSk7XG4gICAgfVxuXG4gICAgaWYgKHBhZ2UgIT0gdGhpcy5wcm9wcy5jdXJyUGFnZSkge1xuICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VQYWdlKHBhZ2UsIHRoaXMucHJvcHMuc2l6ZVBlclBhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVNpemVQZXJQYWdlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBzZWxlY3RTaXplID0gcGFyc2VJbnQoZS5jdXJyZW50VGFyZ2V0LnRleHQpO1xuICAgIGxldCB7IGN1cnJQYWdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChzZWxlY3RTaXplICE9IHRoaXMucHJvcHMuc2l6ZVBlclBhZ2UpIHtcbiAgICAgIHRoaXMudG90YWxQYWdlcyA9IE1hdGguY2VpbCh0aGlzLnByb3BzLmRhdGFTaXplIC8gc2VsZWN0U2l6ZSk7XG4gICAgICBpZiAoY3VyclBhZ2UgPiB0aGlzLnRvdGFsUGFnZXMpXG4gICAgICAgIGN1cnJQYWdlID0gdGhpcy50b3RhbFBhZ2VzO1xuXG4gICAgICB0aGlzLnByb3BzLmNoYW5nZVBhZ2UoY3VyclBhZ2UsIHNlbGVjdFNpemUpO1xuICAgICAgaWYodGhpcy5wcm9wcy5vblNpemVQZXJQYWdlTGlzdCl7XG4gICAgICAgIHRoaXMucHJvcHMub25TaXplUGVyUGFnZUxpc3Qoc2VsZWN0U2l6ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMudG90YWxQYWdlcyA9IE1hdGguY2VpbCh0aGlzLnByb3BzLmRhdGFTaXplIC8gdGhpcy5wcm9wcy5zaXplUGVyUGFnZSk7XG4gICAgdmFyIHBhZ2VCdG5zID0gdGhpcy5tYWtlUGFnZSgpO1xuICAgIHZhciBwYWdlTGlzdFN0eWxlID0ge1xuICAgICAgZmxvYXQ6IFwicmlnaHRcIixcbiAgICAgIG1hcmdpblRvcDogXCIwcHhcIiAgLy9vdmVycmlkZSB0aGUgbWFyZ2luLXRvcCBkZWZpbmVkIGluIC5wYWdpbmF0aW9uIGNsYXNzIGluIGJvb3RzdHJhcC5cbiAgICB9XG5cbiAgICB2YXIgc2l6ZVBlclBhZ2VMaXN0ID0gdGhpcy5wcm9wcy5zaXplUGVyUGFnZUxpc3QubWFwKChzaXplUGVyUGFnZSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGtleT17c2l6ZVBlclBhZ2V9IHJvbGU9XCJwcmVzZW50YXRpb25cIj5cbiAgICAgICAgICA8YSByb2xlPVwibWVudWl0ZW1cIiB0YWJJbmRleD1cIi0xXCIgaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLmNoYW5nZVNpemVQZXJQYWdlLmJpbmQodGhpcyl9PntzaXplUGVyUGFnZX08L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAxNSB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5zaXplUGVyUGFnZUxpc3QubGVuZ3RoID4gMSA/XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHQgZHJvcGRvd24tdG9nZ2xlXCIgdHlwZT1cImJ1dHRvblwiIGlkPVwicGFnZURyb3BEb3duXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLnNpemVQZXJQYWdlfVxuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZXRcIi8+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIiByb2xlPVwibWVudVwiIGFyaWEtbGFiZWxsZWRieT1cInBhZ2VEcm9wRG93blwiPlxuICAgICAgICAgICAgICB7c2l6ZVBlclBhZ2VMaXN0fVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA6IFwiXCJcbiAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCIgc3R5bGU9e3BhZ2VMaXN0U3R5bGV9PlxuICAgICAgICAgICAge3BhZ2VCdG5zfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgbWFrZVBhZ2UoKSB7XG4gICAgdmFyIHBhZ2VzID0gdGhpcy5nZXRQYWdlcygpO1xuICAgIHJldHVybiBwYWdlcy5tYXAoZnVuY3Rpb24gKHBhZ2UpIHtcbiAgICAgIHZhciBpc0FjdGl2ZSA9IHBhZ2UgPT09IHRoaXMucHJvcHMuY3VyclBhZ2U7XG4gICAgICB2YXIgZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIHZhciBoaWRkZW4gPSBmYWxzZTtcbiAgICAgIGlmKHRoaXMucHJvcHMuY3VyclBhZ2UgPT0gMSAmJlxuICAgICAgICAocGFnZSA9PT0gdGhpcy5wcm9wcy5maXJzdFBhZ2UgfHwgcGFnZSA9PT0gdGhpcy5wcm9wcy5wcmVQYWdlKSl7XG4gICAgICAgICAgZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIGhpZGRlbiA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZih0aGlzLnByb3BzLmN1cnJQYWdlID09IHRoaXMudG90YWxQYWdlcyAmJlxuICAgICAgICAocGFnZSA9PT0gdGhpcy5wcm9wcy5uZXh0UGFnZSB8fCBwYWdlID09PSB0aGlzLnByb3BzLmxhc3RQYWdlKSl7XG4gICAgICAgICAgZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIGhpZGRlbiA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UGFnZUJ1dHRvbiBjaGFuZ2VQYWdlPXt0aGlzLmNoYW5nZVBhZ2UuYmluZCh0aGlzKX0gYWN0aXZlPXtpc0FjdGl2ZX0gZGlzYWJsZT17ZGlzYWJsZWR9IGhpZGRlbj17aGlkZGVufSBrZXk9e3BhZ2V9PntwYWdlfTwvUGFnZUJ1dHRvbj5cbiAgICAgIClcbiAgICB9LCB0aGlzKTtcbiAgfVxuXG4gIGdldFBhZ2VzKCkge1xuICAgIHZhciBzdGFydFBhZ2UgPSAxLCBlbmRQYWdlID0gdGhpcy50b3RhbFBhZ2VzO1xuXG4gICAgc3RhcnRQYWdlID0gTWF0aC5tYXgodGhpcy5wcm9wcy5jdXJyUGFnZSAtIE1hdGguZmxvb3IodGhpcy5wcm9wcy5wYWdpbmF0aW9uU2l6ZSAvIDIpLCAxKTtcbiAgICBlbmRQYWdlID0gc3RhcnRQYWdlICsgdGhpcy5wcm9wcy5wYWdpbmF0aW9uU2l6ZSAtIDE7XG5cbiAgICBpZiAoZW5kUGFnZSA+IHRoaXMudG90YWxQYWdlcykge1xuICAgICAgZW5kUGFnZSA9IHRoaXMudG90YWxQYWdlcztcbiAgICAgIHN0YXJ0UGFnZSA9IGVuZFBhZ2UgLSB0aGlzLnByb3BzLnBhZ2luYXRpb25TaXplICsgMTtcbiAgICB9XG4gICAgdmFyIHBhZ2VzO1xuICAgIGlmKHN0YXJ0UGFnZSAhPSAxICYmIHRoaXMudG90YWxQYWdlcyA+IHRoaXMucHJvcHMucGFnaW5hdGlvblNpemUpIHtcbiAgICAgIHBhZ2VzID0gW3RoaXMucHJvcHMuZmlyc3RQYWdlLCB0aGlzLnByb3BzLnByZVBhZ2VdO1xuICAgIH0gZWxzZSBpZiAodGhpcy50b3RhbFBhZ2VzID4gMSkge1xuICAgICAgcGFnZXMgPSBbdGhpcy5wcm9wcy5wcmVQYWdlXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBwYWdlcyA9IFtdXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSBzdGFydFBhZ2U7IGkgPD0gZW5kUGFnZTsgaSsrKSB7XG4gICAgICBpZiAoaSA+IDApcGFnZXMucHVzaChpKTtcbiAgICB9XG4gICAgaWYgKGVuZFBhZ2UgIT0gdGhpcy50b3RhbFBhZ2VzKSB7XG4gICAgICBwYWdlcy5wdXNoKHRoaXMucHJvcHMubmV4dFBhZ2UpO1xuICAgICAgcGFnZXMucHVzaCh0aGlzLnByb3BzLmxhc3RQYWdlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudG90YWxQYWdlcyA+IDEpe1xuICAgICAgcGFnZXMucHVzaCh0aGlzLnByb3BzLm5leHRQYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhZ2VzO1xuICB9XG5cbiAgZ2V0Q3VycmVudFBhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY3VyclBhZ2U7XG4gIH1cblxuICBnZXRTaXplUGVyUGFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5zaXplUGVyUGFnZTtcbiAgfVxufVxuUGFnaW5hdGlvbkxpc3QucHJvcFR5cGVzID0ge1xuICBjdXJyUGFnZTogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgc2l6ZVBlclBhZ2U6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIGRhdGFTaXplOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICBjaGFuZ2VQYWdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgc2l6ZVBlclBhZ2VMaXN0OiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gIHBhZ2luYXRpb25TaXplOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICByZW1vdGU6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBvblNpemVQZXJQYWdlTGlzdDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIHByZVBhZ2U6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbn07XG5cblBhZ2luYXRpb25MaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgc2l6ZVBlclBhZ2U6IENvbnN0LlNJWkVfUEVSX1BBR0Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb25MaXN0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcGFnaW5hdGlvbi9QYWdpbmF0aW9uTGlzdC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NTZXQgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNsYXNzIFBhZ2VCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuICBwYWdlQnRuQ2xpY2soZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMuY2hhbmdlUGFnZShlLmN1cnJlbnRUYXJnZXQudGV4dCk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICB2YXIgY2xhc3NlcyA9IGNsYXNzU2V0KHtcbiAgICAgICAgJ2FjdGl2ZSc6IHRoaXMucHJvcHMuYWN0aXZlLFxuICAgICAgICAnZGlzYWJsZWQnOiB0aGlzLnByb3BzLmRpc2FibGUsXG4gICAgICAgICdoaWRkZW4nOiB0aGlzLnByb3BzLmhpZGRlblxuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXN9PjxhIGhyZWY9XCIjXCIgb25DbGljaz17dGhpcy5wYWdlQnRuQ2xpY2suYmluZCh0aGlzKX0+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9hPjwvbGk+XG4gICAgKVxuICB9XG59XG5QYWdlQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgY2hhbmdlUGFnZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIGFjdGl2ZTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGRpc2FibGU6IFJlYWN0LlByb3BUeXBlcy5ib29sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlQnV0dG9uO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcGFnaW5hdGlvbi9QYWdlQnV0dG9uLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc1NldCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBDb25zdCBmcm9tICcuLi9Db25zdCc7XG5pbXBvcnQgRWRpdG9yIGZyb20gJy4uL0VkaXRvcic7XG5pbXBvcnQgTm90aWZpZXIgZnJvbSAnLi4vTm90aWZpY2F0aW9uLmpzJztcblxuY2xhc3MgVG9vbEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnRpbWVvdXRlQ2xlYXI9MDtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNJbnNlcnRSb3dUcmlnZ2VyOiB0cnVlLFxuICAgICAgdmFsaWRhdGVTdGF0ZTpudWxsLFxuICAgICAgc2hha2VFZGl0b3I6ZmFsc2UsXG4gICAgICBzaG93U2VsZWN0ZWQ6IGZhbHNlXG4gICAgfTtcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG4gIH1cbiAgY2xlYXJUaW1lb3V0KCkge1xuICAgIGlmKHRoaXMudGltZW91dGVDbGVhcil7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0ZUNsZWFyKTtcbiAgICAgIHRoaXMudGltZW91dGVDbGVhcj0wO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrQW5kUGFyc2VGb3JtKCl7XG4gICAgdmFyIHRzPXRoaXMsbmV3T2JqID0ge30saXNWYWxpZD10cnVlLHRlbXBWYWx1ZSx0ZW1wTXNnLHZhbGlkYXRlU3RhdGU9e307XG4gICAgdGhpcy5wcm9wcy5jb2x1bW5zLmZvckVhY2goZnVuY3Rpb24oY29sdW1uLCBpKXtcbiAgICAgIGlmKGNvbHVtbi5hdXRvVmFsdWUpey8vd2hlbiB5b3Ugd2FudCBzYW1lIGF1dG8gZ2VuZXJhdGUgdmFsdWUgYW5kIG5vdCBhbGxvdyBlZGl0LCBleGFtcGxlIElEIGZpZWxkXG4gICAgICAgIHRlbXBWYWx1ZT10eXBlb2YgY29sdW1uLmF1dG9WYWx1ZT09J2Z1bmN0aW9uJz9jb2x1bW4uYXV0b1ZhbHVlKCk6KCdhdXRvdmFsdWUtJytuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgbGV0IGRvbSA9IHRoaXMucmVmc1tjb2x1bW4uZmllbGQraV07XG4gICAgICAgIHRlbXBWYWx1ZSA9IGRvbS52YWx1ZTtcblxuICAgICAgICBpZihjb2x1bW4uZWRpdGFibGUgJiYgY29sdW1uLmVkaXRhYmxlLnR5cGUgPT0gJ2NoZWNrYm94Jyl7XG4gICAgICAgICAgbGV0IHZhbHVlcyA9IGRvbS52YWx1ZS5zcGxpdCgnOicpO1xuICAgICAgICAgIHRlbXBWYWx1ZSA9IGRvbS5jaGVja2VkPyB2YWx1ZXNbMF06dmFsdWVzWzFdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoY29sdW1uLmVkaXRhYmxlJiZjb2x1bW4uZWRpdGFibGUudmFsaWRhdG9yKXsvL3Byb2Nlc3MgdmFsaWRhdGVcbiAgICAgICAgICB0ZW1wTXNnPSBjb2x1bW4uZWRpdGFibGUudmFsaWRhdG9yKHRlbXBWYWx1ZSlcbiAgICAgICAgICBpZih0ZW1wTXNnIT09dHJ1ZSl7XG4gICAgICAgICAgICBpc1ZhbGlkPWZhbHNlO1xuICAgICAgICAgICAgdmFsaWRhdGVTdGF0ZVtjb2x1bW4uZmllbGRdPXRlbXBNc2c7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG5ld09ialtjb2x1bW4uZmllbGRdID10ZW1wVmFsdWU7XG4gICAgfSwgdGhpcyk7XG5cbiAgICBpZihpc1ZhbGlkKXtcbiAgICAgIHJldHVybiBuZXdPYmo7XG4gICAgfWVsc2V7XG4gICAgICB0cy5jbGVhclRpbWVvdXQoKTtcbiAgICAgIC8vc2hvdyBlcnJvciBpbiBmb3JtIGFuZCBzaGFrZSBpdFxuICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGVTdGF0ZTp2YWxpZGF0ZVN0YXRlLHNoYWtlRWRpdG9yOnRydWV9KTtcbiAgICAgIC8vbm90aWZpZXIgZXJyb3JcbiAgICAgIHRzLnJlZnMubm90aWZpZXIubm90aWNlKCdlcnJvcicsXCJGb3JtIHZhbGlkYXRlIGVycm9ycywgcGxlYXNlIGNoZWNraW5nIVwiLFwiUHJlc3NlZCBFU0MgY2FuIGNhbmNlbFwiKTtcbiAgICAgIC8vY2xlYXIgYW5pbWF0ZSBjbGFzc1xuICAgICAgdHMudGltZW91dGVDbGVhcj1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dHMuc2V0U3RhdGUoe3NoYWtlRWRpdG9yOmZhbHNlfSk7fSwzMDApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU2F2ZUJ0bkNsaWNrKGUpe1xuICAgIHZhciBuZXdPYmogPSB0aGlzLmNoZWNrQW5kUGFyc2VGb3JtKCk7XG4gICAgaWYoIW5ld09iail7Ly92YWxpZGF0ZSBlcnJvcnNcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIG1zZyA9IHRoaXMucHJvcHMub25BZGRSb3cobmV3T2JqKTtcbiAgICBpZihtc2cpIHtcbiAgICAgIHZhciB0cz10aGlzO1xuICAgICAgdHMucmVmcy5ub3RpZmllci5ub3RpY2UoJ2Vycm9yJyxtc2csXCJQcmVzc2VkIEVTQyBjYW4gY2FuY2VsXCIpO1xuICAgICAgdHMuY2xlYXJUaW1lb3V0KCk7XG4gICAgICAvL3NoYWtlIGZvcm0gYW5kIGhhY2sgcHJldmVudCBtb2RhbCBoaWRlXG4gICAgICB0cy5zZXRTdGF0ZSh7c2hha2VFZGl0b3I6dHJ1ZSx2YWxpZGF0ZVN0YXRlOlwidGhpcyBpcyBoYWNrIGZvciBwcmV2ZW50IGJvb3RzdHJhcCBtb2RhbCBoaWRlXCJ9KTtcbiAgICAgIC8vY2xlYXIgYW5pbWF0ZSBjbGFzc1xuICAgICAgdHMudGltZW91dGVDbGVhcj1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dHMuc2V0U3RhdGUoe3NoYWtlRWRpdG9yOmZhbHNlfSk7fSwzMDApO1xuICAgIH0gZWxzZXtcbiAgICAgIC8vcmVzZXQgc3RhdGUgYW5kIGhpZGUgbW9kYWwgaGlkZVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHZhbGlkYXRlU3RhdGU6bnVsbCxcbiAgICAgICAgc2hha2VFZGl0b3I6ZmFsc2VcbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIitcIm1vZGFsLWJhY2tkcm9wXCIpLmNsaWNrKCk7XG4gICAgICB9KTtcbiAgICAgIC8vcmVzZXQgZm9ybVxuICAgICAgdGhpcy5yZWZzLmZvcm0ucmVzZXQoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTaG93T25seVRvZ2dsZSA9IGUgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd1NlbGVjdGVkOiAhdGhpcy5zdGF0ZS5zaG93U2VsZWN0ZWRcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLm9uU2hvd09ubHlTZWxlY3RlZCgpO1xuICB9XG5cbiAgaGFuZGxlRHJvcFJvd0J0bkNsaWNrKGUpe1xuICAgIHRoaXMucHJvcHMub25Ecm9wUm93KCk7XG4gIH1cblxuICBoYW5kbGVDbG9zZUJ0bihlKXtcbiAgICB0aGlzLnJlZnMud2FybmluZy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cblxuICBoYW5kbGVLZXlVcChlKXtcbiAgICB0aGlzLnByb3BzLm9uU2VhcmNoKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBoYW5kbGVFeHBvcnRDU1YoKSB7XG4gICAgdGhpcy5wcm9wcy5vbkV4cG9ydENTVigpO1xuICB9XG5cbiAgaGFuZGxlQ2xlYXJCdG5DbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnJlZnMuc2VhY2hJbnB1dC52YWx1ZSA9ICcnO1xuICAgIHRoaXMucHJvcHMub25TZWFyY2goJycpO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgdmFyIG1vZGFsQ2xhc3NOYW1lID0gXCJicy10YWJsZS1tb2RhbC1zbVwiK25ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIHZhciBpbnNlcnRCdG4gPSB0aGlzLnByb3BzLmVuYWJsZUluc2VydD9cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQWRkUm93QmVnaW59IGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyByZWFjdC1icy10YWJsZS1hZGQtYnRuXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PXsnLicrbW9kYWxDbGFzc05hbWV9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXCI+PC9pPiBOZXc8L2J1dHRvbj46bnVsbDtcblxuICAgIHZhciBkZWxldGVCdG4gPSB0aGlzLnByb3BzLmVuYWJsZURlbGV0ZT9cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmcgcmVhY3QtYnMtdGFibGUtZGVsLWJ0blwiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIGRhdGEtcGxhY2VtZW50PVwicmlnaHRcIiB0aXRsZT1cIkRyb3Agc2VsZWN0ZWQgcm93XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRHJvcFJvd0J0bkNsaWNrLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmFzaFwiPjwvaT4gRGVsZXRlXG4gICAgICAgICAgPC9idXR0b24+Om51bGw7XG5cbiAgICB2YXIgc2VhcmNoVGV4dElucHV0ID0gdGhpcy5yZW5kZXJTZWFyY2hQYW5lbCgpO1xuXG4gICAgdmFyIHNob3dTZWxlY3RlZE9ubHlCdG4gPSB0aGlzLnByb3BzLmVuYWJsZVNob3dPbmx5U2VsZWN0ZWQ/XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNob3dPbmx5VG9nZ2xlLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIGRhdGEtdG9nZ2xlPVwiYnV0dG9uXCIgYXJpYS1wcmVzc2VkPVwiZmFsc2VcIj5cbiAgICAgICAgeyB0aGlzLnN0YXRlLnNob3dTZWxlY3RlZD8gQ29uc3QuU0hPV19BTEwgOiBDb25zdC5TSE9XX09OTFlfU0VMRUNUIH1cbiAgICAgIDwvYnV0dG9uPjpudWxsO1xuXG4gICAgdmFyIG1vZGFsID0gdGhpcy5wcm9wcy5lbmFibGVJbnNlcnQ/dGhpcy5yZW5kZXJJbnNlcnRSb3dNb2RhbChtb2RhbENsYXNzTmFtZSk6bnVsbDtcbiAgICB2YXIgd2FybmluZ1N0eWxlID0ge1xuICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgICBtYXJnaW5Cb3R0b206IDBcbiAgICB9O1xuXG4gICAgdmFyIGV4cG9ydENTViA9IHRoaXMucHJvcHMuZW5hYmxlRXhwb3J0Q1NWID9cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUV4cG9ydENTVi5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1leHBvcnRcIj48L2k+IEV4cG9ydCB0byBDU1Y8L2J1dHRvbj4gOiBudWxsO1xuXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTYgY29sLW1kLTYgY29sLWxnLThcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cCBidG4tZ3JvdXAtc21cIiByb2xlPVwiZ3JvdXBcIj5cbiAgICAgICAgICAgIHtleHBvcnRDU1Z9XG4gICAgICAgICAgICB7aW5zZXJ0QnRufVxuICAgICAgICAgICAge2RlbGV0ZUJ0bn1cbiAgICAgICAgICAgIHtzaG93U2VsZWN0ZWRPbmx5QnRufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTYgY29sLW1kLTYgY29sLWxnLTRcIj5cbiAgICAgICAgICB7c2VhcmNoVGV4dElucHV0fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPE5vdGlmaWVyIHJlZj1cIm5vdGlmaWVyXCI+PC9Ob3RpZmllcj5cbiAgICAgICAge21vZGFsfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyU2VhcmNoUGFuZWwoKSB7XG4gICAgaWYodGhpcy5wcm9wcy5lbmFibGVTZWFyY2gpIHtcbiAgICAgIGxldCBjbGFzc05hbWVzID0gJ2Zvcm0tZ3JvdXAgZm9ybS1ncm91cC1zbSc7XG4gICAgICBsZXQgY2xlYXJCdG4gPSBudWxsO1xuICAgICAgaWYodGhpcy5wcm9wcy5jbGVhclNlYXJjaCkge1xuICAgICAgICBjbGVhckJ0biA9IChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1idG5cIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLmhhbmRsZUNsZWFyQnRuQ2xpY2sgfT5DbGVhcjwvYnV0dG9uPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKTtcbiAgICAgICAgY2xhc3NOYW1lcyA9ICdmb3JtLWdyb3VwIGZvcm0tZ3JvdXAtc20gaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtc20nO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+XG4gICAgICAgICAgPGlucHV0IHJlZj0nc2VhY2hJbnB1dCcgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnNlYXJjaFBsYWNlaG9sZGVyP3RoaXMucHJvcHMuc2VhcmNoUGxhY2Vob2xkZXI6J1NlYXJjaCd9XG4gICAgICAgICAgICBvbktleVVwPXt0aGlzLmhhbmRsZUtleVVwLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgIHsgY2xlYXJCdG4gfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckluc2VydFJvd01vZGFsKG1vZGFsQ2xhc3NOYW1lKXtcbiAgICB2YXIgdmFsaWRhdGVTdGF0ZT10aGlzLnN0YXRlLnZhbGlkYXRlU3RhdGV8fHt9O1xuICAgIHZhciBpbnB1dEZpZWxkID0gdGhpcy5wcm9wcy5jb2x1bW5zLm1hcChmdW5jdGlvbihjb2x1bW4sIGkpe1xuICAgICAgdmFyIGVkaXRhYmxlPWNvbHVtbi5lZGl0YWJsZSxcbiAgICAgICAgICBmb3JtYXQ9Y29sdW1uLmZvcm1hdCxcbiAgICAgICAgICBhdHRyPXtyZWY6Y29sdW1uLmZpZWxkK2kscGxhY2Vob2xkZXI6ZWRpdGFibGUucGxhY2Vob2xkZXI/ZWRpdGFibGUucGxhY2Vob2xkZXI6Y29sdW1uLm5hbWV9O1xuXG4gICAgICBpZihjb2x1bW4uYXV0b1ZhbHVlKXsvL3doZW4geW91IHdhbnQgc2FtZSBhdXRvIGdlbmVyYXRlIHZhbHVlIGFuZCBub3QgYWxsb3cgZWRpdCwgZXhhbXBsZSBJRCBmaWVsZFxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHZhciBlcnJvcj12YWxpZGF0ZVN0YXRlW2NvbHVtbi5maWVsZF0/KDxzcGFuIGNsYXNzTmFtZT1cImhlbHAtYmxvY2sgYmctZGFuZ2VyXCI+e3ZhbGlkYXRlU3RhdGVbY29sdW1uLmZpZWxkXX08L3NwYW4+KTpudWxsO1xuXG4gICAgICAvLyBsZXQgZWRpdG9yID0gRWRpdG9yKGVkaXRhYmxlLGF0dHIsZm9ybWF0KTtcbiAgICAgIC8vIGlmKGVkaXRvci5wcm9wcy50eXBlICYmIGVkaXRvci5wcm9wcy50eXBlID09ICdjaGVja2JveCcpe1xuICAgICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIiBrZXk9e2NvbHVtbi5maWVsZH0+XG4gICAgICAgICAgPGxhYmVsPntjb2x1bW4ubmFtZX08L2xhYmVsPlxuICAgICAgICAgIHtFZGl0b3IoZWRpdGFibGUsYXR0cixmb3JtYXQsJycpfVxuICAgICAgICAgIHtlcnJvcn1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0pO1xuICAgIHZhciBtb2RhbENsYXNzID0gY2xhc3NTZXQoXCJtb2RhbFwiLCBcImZhZGVcIiAsIG1vZGFsQ2xhc3NOYW1lLHtcbiAgICAgICdpbic6dGhpcy5zdGF0ZS5zaGFrZUVkaXRvcnx8dGhpcy5zdGF0ZS52YWxpZGF0ZVN0YXRlLy9oYWNrIHByZXZlbnQgYm9vdHN0cmFwIG1vZGFsIGhpZGUgYnkgcmVSZW5kZXJcbiAgICB9KTtcbiAgICB2YXIgZGlhbG9nQ2xhc3M9Y2xhc3NTZXQoXCJtb2RhbC1kaWFsb2dcIixcIm1vZGFsLXNtXCIse1xuICAgICAgXCJhbmltYXRlZFwiOnRoaXMuc3RhdGUuc2hha2VFZGl0b3IsXG4gICAgICBcInNoYWtlXCI6dGhpcy5zdGF0ZS5zaGFrZUVkaXRvclxuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj1cIm1vZGFsXCIgIGNsYXNzTmFtZT17bW9kYWxDbGFzc30gdGFiSW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtkaWFsb2dDbGFzc30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+TmV3IFJlY29yZDwvaDQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgICA8Zm9ybSByZWY9XCJmb3JtXCI+XG4gICAgICAgICAgICAgIHtpbnB1dEZpZWxkfVxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2F2ZUJ0bkNsaWNrLmJpbmQodGhpcyl9PlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuVG9vbEJhci5wcm9wVHlwZXMgPSB7XG4gIG9uQWRkUm93OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgb25Ecm9wUm93OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgb25TaG93T25seVNlbGVjdGVkOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgZW5hYmxlSW5zZXJ0OiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgZW5hYmxlRGVsZXRlOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgZW5hYmxlU2VhcmNoOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgZW5hYmxlU2hvd09ubHlTZWxlY3RlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGNvbHVtbnM6IFJlYWN0LlByb3BUeXBlcy5hcnJheSxcbiAgc2VhcmNoUGxhY2Vob2xkZXI6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGNsZWFyU2VhcmNoOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbFxufTtcblxuVG9vbEJhci5kZWZhdWx0UHJvcHMgPSB7XG4gIGVuYWJsZUluc2VydDogZmFsc2UsXG4gIGVuYWJsZURlbGV0ZTogZmFsc2UsXG4gIGVuYWJsZVNlYXJjaDogZmFsc2UsXG4gIGVuYWJsZVNob3dPbmx5U2VsZWN0ZWQ6IGZhbHNlLFxuICBjbGVhclNlYXJjaDogZmFsc2Vcbn1cbmV4cG9ydCBkZWZhdWx0IFRvb2xCYXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy90b29sYmFyL1Rvb2xCYXIuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4vQ29uc3QnO1xuaW1wb3J0IGNsYXNzU2V0IGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jbGFzcyBUYWJsZUZpbHRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmZpbHRlck9iaiA9IHt9O1xuICB9XG5cbiAgaGFuZGxlS2V5VXAoZSl7XG4gICAgaWYoZS5jdXJyZW50VGFyZ2V0LnZhbHVlLnRyaW0oKSA9PT0gXCJcIilcbiAgICAgIGRlbGV0ZSB0aGlzLmZpbHRlck9ialtlLmN1cnJlbnRUYXJnZXQubmFtZV07XG4gICAgZWxzZVxuICAgICAgdGhpcy5maWx0ZXJPYmpbZS5jdXJyZW50VGFyZ2V0Lm5hbWVdID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuXG4gICAgdGhpcy5wcm9wcy5vbkZpbHRlcih0aGlzLmZpbHRlck9iaik7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICB2YXIgdGFibGVDbGFzc2VzID0gY2xhc3NTZXQoXCJ0YWJsZVwiLCB7XG4gICAgICAndGFibGUtc3RyaXBlZCc6IHRoaXMucHJvcHMuc3RyaXBlZCxcbiAgICAgICd0YWJsZS1jb25kZW5zZWQnOiB0aGlzLnByb3BzLmNvbmRlbnNlZFxuICAgIH0pO1xuICAgIHZhciBzZWxlY3RSb3dIZWFkZXIgPSBudWxsO1xuXG4gICAgaWYodGhpcy5wcm9wcy5yb3dTZWxlY3RUeXBlID09IENvbnN0LlJPV19TRUxFQ1RfU0lOR0xFIHx8XG4gICAgICAgIHRoaXMucHJvcHMucm93U2VsZWN0VHlwZSA9PSBDb25zdC5ST1dfU0VMRUNUX01VTFRJKXtcbiAgICAgIGxldCBzdHlsZSA9IHtcbiAgICAgICAgd2lkdGg6MzUsXG4gICAgICAgIHBhZGRpbmdMZWZ0OiAwLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IDBcbiAgICAgIH1cbiAgICAgIHNlbGVjdFJvd0hlYWRlciA9ICg8dGggc3R5bGU9e3N0eWxlfSBrZXk9ey0xfT5GaWx0ZXI8L3RoPik7XG4gICAgfVxuICAgIHZhciBmaWx0ZXJGaWVsZCA9IHRoaXMucHJvcHMuY29sdW1ucy5tYXAoZnVuY3Rpb24oY29sdW1uKXtcbiAgICAgIHZhciB0aFN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiBjb2x1bW4uaGlkZGVuP1wibm9uZVwiOm51bGwsXG4gICAgICAgIHdpZHRoOiBjb2x1bW4ud2lkdGhcbiAgICAgIH07XG4gICAgICByZXR1cm4oXG4gICAgICAgIDx0aCBrZXk9e2NvbHVtbi5uYW1lfSBzdHlsZT17dGhTdHlsZX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aC1pbm5lciB0YWJsZS1oZWFkZXItY29sdW1uXCI+XG4gICAgICAgICAgICA8aW5wdXQgc2l6ZT1cIjEwXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj17Y29sdW1uLm5hbWV9IG5hbWU9e2NvbHVtbi5uYW1lfSBvbktleVVwPXt0aGlzLmhhbmRsZUtleVVwLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90aD5cbiAgICAgIClcbiAgICB9LCB0aGlzKTtcbiAgICByZXR1cm4oXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPXt0YWJsZUNsYXNzZXN9IHN0eWxlPXt7bWFyZ2luVG9wOjV9fT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0ciBzdHlsZT17e2JvcmRlckJvdHRvbVN0eWxlOiAnaGlkZGVuJ319PlxuICAgICAgICAgICAge3NlbGVjdFJvd0hlYWRlcn17ZmlsdGVyRmllbGR9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgIDwvdGFibGU+XG4gICAgKVxuICB9XG59XG5UYWJsZUZpbHRlci5wcm9wVHlwZXMgPSB7XG4gIGNvbHVtbnM6IFJlYWN0LlByb3BUeXBlcy5hcnJheSxcbiAgcm93U2VsZWN0VHlwZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgb25GaWx0ZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG59O1xuZXhwb3J0IGRlZmF1bHQgVGFibGVGaWx0ZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9UYWJsZUZpbHRlci5qc1xuICoqLyIsImltcG9ydCBDb25zdCBmcm9tIFwiLi4vQ29uc3RcIjtcbnZhciBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXI7XG5cbmZ1bmN0aW9uIF9zb3J0KGFyciwgc29ydEZpZWxkLCBvcmRlciwgc29ydEZ1bmMpIHtcbiAgb3JkZXIgPSBvcmRlci50b0xvd2VyQ2FzZSgpO1xuICBhcnIuc29ydCgoYSwgYikgPT4ge1xuICAgIGlmIChzb3J0RnVuYykge1xuICAgICAgcmV0dXJuIHNvcnRGdW5jKGEsIGIsIG9yZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG9yZGVyID09IENvbnN0LlNPUlRfREVTQykge1xuICAgICAgICByZXR1cm4gYVtzb3J0RmllbGRdID4gYltzb3J0RmllbGRdID8gLTEgOiAoKGFbc29ydEZpZWxkXSA8IGJbc29ydEZpZWxkXSkgPyAxIDogMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYVtzb3J0RmllbGRdIDwgYltzb3J0RmllbGRdID8gLTEgOiAoKGFbc29ydEZpZWxkXSA+IGJbc29ydEZpZWxkXSkgPyAxIDogMCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gYXJyO1xufVxuXG5leHBvcnQgY2xhc3MgVGFibGVEYXRhU2V0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHN1cGVyKGRhdGEpO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gIH1cblxuICBzZXREYXRhKGRhdGEpIHtcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIGRhdGEpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5kYXRhID0gbnVsbDtcbiAgfVxuXG4gIGdldERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGFibGVEYXRhU3RvcmUge1xuXG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMuY29sSW5mb3MgPSBudWxsO1xuICAgIHRoaXMuZmlsdGVyZWREYXRhID0gbnVsbDtcbiAgICB0aGlzLmlzT25GaWx0ZXIgPSBmYWxzZTtcbiAgICB0aGlzLmZpbHRlck9iaiA9IG51bGw7XG4gICAgdGhpcy5zZWFyY2hUZXh0ID0gbnVsbDtcbiAgICB0aGlzLnNvcnRPYmogPSBudWxsO1xuICAgIHRoaXMucGFnZU9iaiA9IHt9O1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcbiAgICB0aGlzLm11bHRpQ29sdW1uU2VhcmNoID0gZmFsc2U7XG4gICAgdGhpcy5zaG93T25seVNlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5yZW1vdGUgPSBmYWxzZTsgLy8gcmVtb3RlIGRhdGFcbiAgfVxuXG4gIHNldFByb3BzKHByb3BzKSB7XG4gICAgdGhpcy5rZXlGaWVsZCA9IHByb3BzLmtleUZpZWxkO1xuICAgIHRoaXMuZW5hYmxlUGFnaW5hdGlvbiA9IHByb3BzLmlzUGFnaW5hdGlvbjtcbiAgICB0aGlzLmNvbEluZm9zID0gcHJvcHMuY29sSW5mb3M7XG4gICAgdGhpcy5yZW1vdGUgPSBwcm9wcy5yZW1vdGU7XG4gICAgdGhpcy5tdWx0aUNvbHVtblNlYXJjaCA9IHByb3BzLm11bHRpQ29sdW1uU2VhcmNoO1xuICB9XG5cbiAgc2V0RGF0YShkYXRhKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICBpZiAodGhpcy5pc09uRmlsdGVyKSB7XG4gICAgICBpZiAobnVsbCAhPT0gdGhpcy5maWx0ZXJPYmopIHRoaXMuZmlsdGVyKHRoaXMuZmlsdGVyT2JqKTtcbiAgICAgIGlmIChudWxsICE9PSB0aGlzLnNlYXJjaFRleHQpIHRoaXMuc2VhcmNoKHRoaXMuc2VhcmNoVGV4dCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNvcnRPYmopIHtcbiAgICAgIHRoaXMuc29ydCh0aGlzLnNvcnRPYmoub3JkZXIsIHRoaXMuc29ydE9iai5zb3J0RmllbGQpO1xuICAgIH1cbiAgfVxuXG4gIGdldFNvcnRJbmZvKCkge1xuICAgIHJldHVybiB0aGlzLnNvcnRPYmo7XG4gIH1cblxuICBzZXRTZWxlY3RlZFJvd0tleShzZWxlY3RlZFJvd0tleXMpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gc2VsZWN0ZWRSb3dLZXlzO1xuICB9XG5cbiAgZ2V0U2VsZWN0ZWRSb3dLZXlzKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkO1xuICB9XG5cbiAgZ2V0Q3VycmVudERpc3BsYXlEYXRhKCkge1xuICAgIGlmICh0aGlzLmlzT25GaWx0ZXIpIHJldHVybiB0aGlzLmZpbHRlcmVkRGF0YTtcbiAgICBlbHNlIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cblxuICBpZ25vcmVOb25TZWxlY3RlZCgpIHtcbiAgICB0aGlzLnNob3dPbmx5U2VsZWN0ZWQgPSAhdGhpcy5zaG93T25seVNlbGVjdGVkO1xuICAgIGlmKHRoaXMuc2hvd09ubHlTZWxlY3RlZCl7XG4gICAgICB0aGlzLmlzT25GaWx0ZXIgPSB0cnVlO1xuICAgICAgdGhpcy5maWx0ZXJlZERhdGEgPSB0aGlzLmRhdGEuZmlsdGVyKCByb3cgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5zZWxlY3RlZC5maW5kKHggPT4gcm93W3RoaXMua2V5RmllbGRdID09PSB4KVxuICAgICAgICByZXR1cm4gdHlwZW9mIHJlc3VsdCAhPT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogZmFsc2U7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc09uRmlsdGVyID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgc29ydChvcmRlciwgc29ydEZpZWxkKSB7XG4gICAgdGhpcy5zb3J0T2JqID0ge1xuICAgICAgb3JkZXI6IG9yZGVyLFxuICAgICAgc29ydEZpZWxkOiBzb3J0RmllbGRcbiAgICB9O1xuXG4gICAgbGV0IGN1cnJlbnREaXNwbGF5RGF0YSA9IHRoaXMuZ2V0Q3VycmVudERpc3BsYXlEYXRhKCk7XG4gICAgaWYoIXRoaXMuY29sSW5mb3Nbc29ydEZpZWxkXSkgcmV0dXJuIHRoaXM7XG5cbiAgICBjb25zdCB7IHNvcnRGdW5jIH0gPSB0aGlzLmNvbEluZm9zW3NvcnRGaWVsZF07XG4gICAgY3VycmVudERpc3BsYXlEYXRhID0gX3NvcnQoY3VycmVudERpc3BsYXlEYXRhLCBzb3J0RmllbGQsIG9yZGVyLCBzb3J0RnVuYyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHBhZ2UocGFnZSwgc2l6ZVBlclBhZ2UpIHtcbiAgICB0aGlzLnBhZ2VPYmouZW5kID0gcGFnZSAqIHNpemVQZXJQYWdlIC0gMTtcbiAgICB0aGlzLnBhZ2VPYmouc3RhcnQgPSB0aGlzLnBhZ2VPYmouZW5kIC0gKHNpemVQZXJQYWdlIC0gMSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBlZGl0KG5ld1ZhbCwgcm93SW5kZXgsIGZpZWxkTmFtZSkge1xuICAgIGxldCBjdXJyZW50RGlzcGxheURhdGEgPSB0aGlzLmdldEN1cnJlbnREaXNwbGF5RGF0YSgpO1xuICAgIGxldCByb3dLZXlDYWNoZTtcbiAgICBpZiAoIXRoaXMuZW5hYmxlUGFnaW5hdGlvbikge1xuICAgICAgY3VycmVudERpc3BsYXlEYXRhW3Jvd0luZGV4XVtmaWVsZE5hbWVdID0gbmV3VmFsO1xuICAgICAgcm93S2V5Q2FjaGUgPSBjdXJyZW50RGlzcGxheURhdGFbcm93SW5kZXhdW3RoaXMua2V5RmllbGRdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50RGlzcGxheURhdGFbdGhpcy5wYWdlT2JqLnN0YXJ0ICsgcm93SW5kZXhdW2ZpZWxkTmFtZV0gPSBuZXdWYWw7XG4gICAgICByb3dLZXlDYWNoZSA9IGN1cnJlbnREaXNwbGF5RGF0YVt0aGlzLnBhZ2VPYmouc3RhcnQgKyByb3dJbmRleF1bdGhpcy5rZXlGaWVsZF07XG4gICAgfVxuICAgIGlmICh0aGlzLmlzT25GaWx0ZXIpIHtcbiAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgaWYgKHJvd1t0aGlzLmtleUZpZWxkXSA9PT0gcm93S2V5Q2FjaGUpIHtcbiAgICAgICAgICByb3dbZmllbGROYW1lXSA9IG5ld1ZhbDtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcyk7XG4gICAgICBpZiAobnVsbCAhPT0gdGhpcy5maWx0ZXJPYmopIHRoaXMuZmlsdGVyKHRoaXMuZmlsdGVyT2JqKTtcbiAgICAgIGlmIChudWxsICE9PSB0aGlzLnNlYXJjaFRleHQpIHRoaXMuc2VhcmNoKHRoaXMuc2VhcmNoVGV4dCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkKG5ld09iaikge1xuICAgIGlmICghbmV3T2JqW3RoaXMua2V5RmllbGRdIHx8IG5ld09ialt0aGlzLmtleUZpZWxkXS50b1N0cmluZygpID09PSAnJykge1xuICAgICAgdGhyb3cgdGhpcy5rZXlGaWVsZCArIFwiIGNhbid0IGJlIGVtcHR5IHZhbHVlLlwiO1xuICAgIH1cbiAgICBsZXQgY3VycmVudERpc3BsYXlEYXRhID0gdGhpcy5nZXRDdXJyZW50RGlzcGxheURhdGEoKTtcbiAgICBjdXJyZW50RGlzcGxheURhdGEuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICBpZiAocm93W3RoaXMua2V5RmllbGRdLnRvU3RyaW5nKCkgPT09IG5ld09ialt0aGlzLmtleUZpZWxkXS50b1N0cmluZygpKSB7XG4gICAgICAgIHRocm93IHRoaXMua2V5RmllbGQgKyBcIiBcIiArIG5ld09ialt0aGlzLmtleUZpZWxkXSArIFwiIGFscmVhZHkgZXhpc3RzXCI7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG5cbiAgICBjdXJyZW50RGlzcGxheURhdGEucHVzaChuZXdPYmopO1xuICAgIGlmICh0aGlzLmlzT25GaWx0ZXIpIHtcbiAgICAgIHRoaXMuZGF0YS5wdXNoKG5ld09iaik7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlKHJvd0tleSkge1xuICAgIGxldCBjdXJyZW50RGlzcGxheURhdGEgPSB0aGlzLmdldEN1cnJlbnREaXNwbGF5RGF0YSgpO1xuICAgIGxldCByZXN1bHQgPSBjdXJyZW50RGlzcGxheURhdGEuZmlsdGVyKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgIHJldHVybiByb3dLZXkuaW5kZXhPZihyb3dbdGhpcy5rZXlGaWVsZF0pID09IC0xO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgaWYgKHRoaXMuaXNPbkZpbHRlcikge1xuICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLmZpbHRlcihmdW5jdGlvbiAocm93KSB7XG4gICAgICAgIHJldHVybiByb3dLZXkuaW5kZXhPZihyb3dbdGhpcy5rZXlGaWVsZF0pID09IC0xO1xuICAgICAgfSwgdGhpcyk7XG4gICAgICB0aGlzLmZpbHRlcmVkRGF0YSA9IHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhID0gcmVzdWx0O1xuICAgIH1cbiAgfVxuXG4gIGZpbHRlcihmaWx0ZXJPYmopIHtcbiAgICBpZiAoT2JqZWN0LmtleXMoZmlsdGVyT2JqKS5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy5maWx0ZXJlZERhdGEgPSBudWxsO1xuICAgICAgdGhpcy5pc09uRmlsdGVyID0gZmFsc2U7XG4gICAgICB0aGlzLmZpbHRlck9iaiA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmlsdGVyT2JqID0gZmlsdGVyT2JqO1xuICAgICAgdGhpcy5maWx0ZXJlZERhdGEgPSB0aGlzLmRhdGEuZmlsdGVyKCByb3cgPT4ge1xuICAgICAgICBsZXQgdmFsaWQgPSB0cnVlO1xuICAgICAgICBsZXQgZmlsdGVyVmFsO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gZmlsdGVyT2JqKSB7XG4gICAgICAgICAgbGV0IHRhcmdldFZhbCA9IHJvd1trZXldO1xuXG4gICAgICAgICAgc3dpdGNoIChmaWx0ZXJPYmpba2V5XS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIENvbnN0LkZJTFRFUl9UWVBFLk5VTUJFUjpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZmlsdGVyVmFsID0gZmlsdGVyT2JqW2tleV0udmFsdWUubnVtYmVyO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgQ29uc3QuRklMVEVSX1RZUEUuQ1VTVE9NOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBmaWx0ZXJWYWwgPSAodHlwZW9mIGZpbHRlck9ialtrZXldLnZhbHVlID09PSBcIm9iamVjdFwiKSA/XG4gICAgICAgICAgICAgICAgICB1bmRlZmluZWQgOlxuICAgICAgICAgICAgICAgICAgKHR5cGVvZiBmaWx0ZXJPYmpba2V5XS52YWx1ZSA9PT0gXCJzdHJpbmdcIikgPyBmaWx0ZXJPYmpba2V5XS52YWx1ZS50b0xvd2VyQ2FzZSgpIDogZmlsdGVyT2JqW2tleV0udmFsdWU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICBmaWx0ZXJWYWwgPSAodHlwZW9mIGZpbHRlck9ialtrZXldLnZhbHVlID09PSBcInN0cmluZ1wiKSA/IGZpbHRlck9ialtrZXldLnZhbHVlLnRvTG93ZXJDYXNlKCkgOiBmaWx0ZXJPYmpba2V5XS52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGZpbHRlclZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgLy8gU3VwcG9ydCBvbGQgZmlsdGVyXG4gICAgICAgICAgICAgICAgZmlsdGVyVmFsID0gZmlsdGVyT2JqW2tleV0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5jb2xJbmZvc1trZXldKSB7XG4gICAgICAgICAgICBjb25zdCB7IGZvcm1hdCwgZmlsdGVyRm9ybWF0dGVkLCBmb3JtYXRFeHRyYURhdGEgfSA9IHRoaXMuY29sSW5mb3Nba2V5XTtcbiAgICAgICAgICAgIGlmKGZpbHRlckZvcm1hdHRlZCAmJiBmb3JtYXQpIHtcbiAgICAgICAgICAgICAgdGFyZ2V0VmFsID0gZm9ybWF0KHJvd1trZXldLCByb3csIGZvcm1hdEV4dHJhRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3dpdGNoIChmaWx0ZXJPYmpba2V5XS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIENvbnN0LkZJTFRFUl9UWVBFLk5VTUJFUjpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdmFsaWQgPSB0aGlzLmZpbHRlck51bWJlcih0YXJnZXRWYWwsIGZpbHRlclZhbCwgZmlsdGVyT2JqW2tleV0udmFsdWUuY29tcGFyYXRvcik7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBDb25zdC5GSUxURVJfVFlQRS5EQVRFOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2YWxpZCA9IHRoaXMuZmlsdGVyRGF0ZSh0YXJnZXRWYWwsIGZpbHRlclZhbCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBDb25zdC5GSUxURVJfVFlQRS5DVVNUT006XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZhbGlkID0gdGhpcy5maWx0ZXJDdXN0b20odGFyZ2V0VmFsLCBmaWx0ZXJWYWwsIGZpbHRlck9ialtrZXldLnZhbHVlKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgIHZhbGlkID0gdGhpcy5maWx0ZXJUZXh0KHRhcmdldFZhbCwgZmlsdGVyVmFsKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsaWQ7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuaXNPbkZpbHRlciA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZmlsdGVyTnVtYmVyKHRhcmdldFZhbCwgZmlsdGVyVmFsLCBjb21wYXJhdG9yKSB7XG4gICAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgICBzd2l0Y2ggKGNvbXBhcmF0b3IpIHtcbiAgICAgIGNhc2UgXCI9XCI6XG4gICAgICB7XG4gICAgICAgIGlmICh0YXJnZXRWYWwgIT0gZmlsdGVyVmFsKSB7XG4gICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgXCI+XCI6XG4gICAgICB7XG4gICAgICAgIGlmICh0YXJnZXRWYWwgPD0gZmlsdGVyVmFsKSB7XG4gICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgXCI+PVwiOlxuICAgICAge1xuICAgICAgICBpZiAodGFyZ2V0VmFsIDwgZmlsdGVyVmFsKSB7XG4gICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgXCI8XCI6XG4gICAgICB7XG4gICAgICAgIGlmICh0YXJnZXRWYWwgPj0gZmlsdGVyVmFsKSB7XG4gICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgXCI8PVwiOlxuICAgICAge1xuICAgICAgICBpZiAodGFyZ2V0VmFsID4gZmlsdGVyVmFsKSB7XG4gICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgXCIhPVwiOlxuICAgICAge1xuICAgICAgICBpZiAodGFyZ2V0VmFsID09IGZpbHRlclZhbCkge1xuICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiTnVtYmVyIGNvbXBhcmF0b3IgcHJvdmlkZWQgaXMgbm90IHN1cHBvcnRlZFwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWxpZDtcbiAgfVxuXG4gIGZpbHRlckRhdGUodGFyZ2V0VmFsLCBmaWx0ZXJWYWwpIHtcbiAgICByZXR1cm4gKHRhcmdldFZhbC5nZXREYXRlKCkgPT0gZmlsdGVyVmFsLmdldERhdGUoKSAmJlxuICAgICAgICB0YXJnZXRWYWwuZ2V0TW9udGgoKSA9PSBmaWx0ZXJWYWwuZ2V0TW9udGgoKSAmJlxuICAgICAgICB0YXJnZXRWYWwuZ2V0RnVsbFllYXIoKSA9PSBmaWx0ZXJWYWwuZ2V0RnVsbFllYXIoKSk7XG4gIH1cblxuICBmaWx0ZXJDdXN0b20odGFyZ2V0VmFsLCBmaWx0ZXJWYWwsIGNhbGxiYWNrSW5mbykge1xuICAgIGlmIChjYWxsYmFja0luZm8gIT0gbnVsbCAmJiB0eXBlb2YgY2FsbGJhY2tJbmZvID09PSBcIm9iamVjdFwiKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2tJbmZvLmNhbGxiYWNrKHRhcmdldFZhbCwgY2FsbGJhY2tJbmZvLmNhbGxiYWNrUGFyYW1ldGVycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbHRlclRleHQodGFyZ2V0VmFsLCBmaWx0ZXJWYWwpO1xuICB9XG5cbiAgZmlsdGVyVGV4dCh0YXJnZXRWYWwsIGZpbHRlclZhbCkge1xuICAgIGlmICh0YXJnZXRWYWwudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZmlsdGVyVmFsKSA9PSAtMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc2VhcmNoKHNlYXJjaFRleHQpIHtcbiAgICBpZiAoc2VhcmNoVGV4dC50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgIHRoaXMuZmlsdGVyZWREYXRhID0gbnVsbDtcbiAgICAgIHRoaXMuaXNPbkZpbHRlciA9IGZhbHNlO1xuICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gc2VhcmNoVGV4dDtcbiAgICAgIHZhciBzZWFyY2hUZXh0QXJyYXkgPSBbXTtcbiAgICAgIHRoaXMuZmlsdGVyZWREYXRhID0gdGhpcy5kYXRhLmZpbHRlciggcm93ID0+IHtcbiAgICAgICAgbGV0IHZhbGlkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMubXVsdGlDb2x1bW5TZWFyY2gpIHtcbiAgICAgICAgICBzZWFyY2hUZXh0QXJyYXkgPSBzZWFyY2hUZXh0LnNwbGl0KCcgJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VhcmNoVGV4dEFycmF5LnB1c2goc2VhcmNoVGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcm93KSB7XG4gICAgICAgICAgaWYgKHRoaXMuY29sSW5mb3Nba2V5XSAmJiByb3dba2V5XSkge1xuICAgICAgICAgICAgc2VhcmNoVGV4dEFycmF5LmZvckVhY2goIHRleHQgPT4ge1xuICAgICAgICAgICAgICBsZXQgZmlsdGVyVmFsID0gdGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICBsZXQgdGFyZ2V0VmFsID0gcm93W2tleV07XG4gICAgICAgICAgICAgIGNvbnN0IHsgZm9ybWF0LCBmaWx0ZXJGb3JtYXR0ZWQsIGZvcm1hdEV4dHJhRGF0YSwgaGlkZGVufSA9IHRoaXMuY29sSW5mb3Nba2V5XTtcbiAgICAgICAgICAgICAgaWYgKCFoaWRkZW4pIHtcbiAgICAgICAgICAgICAgICBpZihmaWx0ZXJGb3JtYXR0ZWQgJiYgZm9ybWF0KSB7XG4gICAgICAgICAgICAgICAgICB0YXJnZXRWYWwgPSBmb3JtYXQodGFyZ2V0VmFsLCByb3csIGZvcm1hdEV4dHJhRGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRWYWwudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZmlsdGVyVmFsKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHZhbGlkKSBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbGlkO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmlzT25GaWx0ZXIgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGdldERhdGFJZ25vcmluZ1BhZ2luYXRpb24oKSB7XG4gICAgbGV0IF9kYXRhID0gdGhpcy5nZXRDdXJyZW50RGlzcGxheURhdGEoKTtcbiAgICByZXR1cm4gX2RhdGE7XG4gIH1cblxuICBnZXQoKSB7XG4gICAgbGV0IF9kYXRhID0gdGhpcy5nZXRDdXJyZW50RGlzcGxheURhdGEoKTtcblxuICAgIGlmIChfZGF0YS5sZW5ndGggPT0gMCkgcmV0dXJuIF9kYXRhO1xuXG4gICAgaWYgKHRoaXMucmVtb3RlIHx8ICF0aGlzLmVuYWJsZVBhZ2luYXRpb24pIHtcbiAgICAgIHJldHVybiBfZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMucGFnZU9iai5zdGFydDsgaSA8PSB0aGlzLnBhZ2VPYmouZW5kOyBpKyspIHtcbiAgICAgICAgcmVzdWx0LnB1c2goX2RhdGFbaV0pO1xuICAgICAgICBpZiAoaSArIDEgPT0gX2RhdGEubGVuZ3RoKWJyZWFrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH1cblxuICBnZXRLZXlGaWVsZCgpIHtcbiAgICByZXR1cm4gdGhpcy5rZXlGaWVsZDtcbiAgfVxuXG4gIGdldERhdGFOdW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudERpc3BsYXlEYXRhKCkubGVuZ3RoO1xuICB9XG5cbiAgaXNDaGFuZ2VkUGFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYWdlT2JqLnN0YXJ0ICYmIHRoaXMucGFnZU9iai5lbmQgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBnZXRBbGxSb3drZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5tYXAoZnVuY3Rpb24gKHJvdykge1xuICAgICAgcmV0dXJuIHJvd1t0aGlzLmtleUZpZWxkXTtcbiAgICB9LCB0aGlzKTtcbiAgfVxuXG59XG47XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdG9yZS9UYWJsZURhdGFTdG9yZS5qc1xuICoqLyIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIHRoaXMuX2V2ZW50cyA9IHRoaXMuX2V2ZW50cyB8fCB7fTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxuRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24obikge1xuICBpZiAoIWlzTnVtYmVyKG4pIHx8IG4gPCAwIHx8IGlzTmFOKG4pKVxuICAgIHRocm93IFR5cGVFcnJvcignbiBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyJyk7XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgZXIsIGhhbmRsZXIsIGxlbiwgYXJncywgaSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKHR5cGUgPT09ICdlcnJvcicpIHtcbiAgICBpZiAoIXRoaXMuX2V2ZW50cy5lcnJvciB8fFxuICAgICAgICAoaXNPYmplY3QodGhpcy5fZXZlbnRzLmVycm9yKSAmJiAhdGhpcy5fZXZlbnRzLmVycm9yLmxlbmd0aCkpIHtcbiAgICAgIGVyID0gYXJndW1lbnRzWzFdO1xuICAgICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgICB9XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ1VuY2F1Z2h0LCB1bnNwZWNpZmllZCBcImVycm9yXCIgZXZlbnQuJyk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNVbmRlZmluZWQoaGFuZGxlcikpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAvLyBmYXN0IGNhc2VzXG4gICAgICBjYXNlIDE6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBzbG93ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0gMSk7XG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCBsZW47IGkrKylcbiAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QoaGFuZGxlcikpIHtcbiAgICBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0gMSk7XG4gICAgZm9yIChpID0gMTsgaSA8IGxlbjsgaSsrKVxuICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG5cbiAgICBsaXN0ZW5lcnMgPSBoYW5kbGVyLnNsaWNlKCk7XG4gICAgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgICBsaXN0ZW5lcnNbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICBpZiAodGhpcy5fZXZlbnRzLm5ld0xpc3RlbmVyKVxuICAgIHRoaXMuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICBpc0Z1bmN0aW9uKGxpc3RlbmVyLmxpc3RlbmVyKSA/XG4gICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICBlbHNlIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XG4gIGVsc2VcbiAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBbdGhpcy5fZXZlbnRzW3R5cGVdLCBsaXN0ZW5lcl07XG5cbiAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkgJiYgIXRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQpIHtcbiAgICB2YXIgbTtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHRoaXMuX21heExpc3RlbmVycykpIHtcbiAgICAgIG0gPSB0aGlzLl9tYXhMaXN0ZW5lcnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgICB9XG5cbiAgICBpZiAobSAmJiBtID4gMCAmJiB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoID4gbSkge1xuICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCA9IHRydWU7XG4gICAgICBjb25zb2xlLmVycm9yKCcobm9kZSkgd2FybmluZzogcG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2xlYWsgZGV0ZWN0ZWQuICVkIGxpc3RlbmVycyBhZGRlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICdVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byBpbmNyZWFzZSBsaW1pdC4nLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoKTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZS50cmFjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBub3Qgc3VwcG9ydGVkIGluIElFIDEwXG4gICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgdmFyIGZpcmVkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZygpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGcpO1xuXG4gICAgaWYgKCFmaXJlZCkge1xuICAgICAgZmlyZWQgPSB0cnVlO1xuICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBnLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHRoaXMub24odHlwZSwgZyk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBlbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWZmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZFxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBsaXN0LCBwb3NpdGlvbiwgbGVuZ3RoLCBpO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIGxpc3QgPSB0aGlzLl9ldmVudHNbdHlwZV07XG4gIGxlbmd0aCA9IGxpc3QubGVuZ3RoO1xuICBwb3NpdGlvbiA9IC0xO1xuXG4gIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fFxuICAgICAgKGlzRnVuY3Rpb24obGlzdC5saXN0ZW5lcikgJiYgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcblxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGxpc3QpKSB7XG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gPiAwOykge1xuICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8XG4gICAgICAgICAgKGxpc3RbaV0ubGlzdGVuZXIgJiYgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICBsaXN0Lmxlbmd0aCA9IDA7XG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0LnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIga2V5LCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICBpZiAoIXRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgZWxzZSBpZiAodGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGZvciAoa2V5IGluIHRoaXMuX2V2ZW50cykge1xuICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNGdW5jdGlvbihsaXN0ZW5lcnMpKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICB9IGVsc2Uge1xuICAgIC8vIExJRk8gb3JkZXJcbiAgICB3aGlsZSAobGlzdGVuZXJzLmxlbmd0aClcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2xpc3RlbmVycy5sZW5ndGggLSAxXSk7XG4gIH1cbiAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgcmV0O1xuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldCA9IFtdO1xuICBlbHNlIGlmIChpc0Z1bmN0aW9uKHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgcmV0ID0gW3RoaXMuX2V2ZW50c1t0eXBlXV07XG4gIGVsc2VcbiAgICByZXQgPSB0aGlzLl9ldmVudHNbdHlwZV0uc2xpY2UoKTtcbiAgcmV0dXJuIHJldDtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICB2YXIgcmV0O1xuICBpZiAoIWVtaXR0ZXIuX2V2ZW50cyB8fCAhZW1pdHRlci5fZXZlbnRzW3R5cGVdKVxuICAgIHJldCA9IDA7XG4gIGVsc2UgaWYgKGlzRnVuY3Rpb24oZW1pdHRlci5fZXZlbnRzW3R5cGVdKSlcbiAgICByZXQgPSAxO1xuICBlbHNlXG4gICAgcmV0ID0gZW1pdHRlci5fZXZlbnRzW3R5cGVdLmxlbmd0aDtcbiAgcmV0dXJuIHJldDtcbn07XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2V2ZW50cy9ldmVudHMuanNcbiAqKiBtb2R1bGUgaWQgPSAzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpe1xuICB2YXIgZmlsZXNhdmVyID0gcmVxdWlyZSgnLi9maWxlc2F2ZXInKTtcbiAgdmFyIHNhdmVBcyA9IGZpbGVzYXZlci5zYXZlQXNcbn1cblxuZnVuY3Rpb24gdG9TdHJpbmcoZGF0YSwga2V5cykge1xuICB2YXIgZGF0YVN0cmluZyA9IFwiXCI7XG4gIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGRhdGFTdHJpbmc7XG5cbiAgZGF0YVN0cmluZyArPSBrZXlzLmpvaW4oJywnKSArICdcXG4nXG5cbiAgZGF0YS5tYXAoZnVuY3Rpb24ocm93KSB7XG4gICAga2V5cy5tYXAoZnVuY3Rpb24oY29sLCBpKSB7XG4gICAgICBsZXQgY2VsbCA9IHR5cGVvZiByb3dbY29sXSAhPT0gJ3VuZGVmaW5lZCcgPyAoJ1wiJytyb3dbY29sXSsnXCInKSA6IFwiXCI7XG4gICAgICBkYXRhU3RyaW5nICs9IGNlbGw7XG4gICAgICBpZiAoaSsxIDwga2V5cy5sZW5ndGgpXG4gICAgICAgIGRhdGFTdHJpbmcgKz0gJywnO1xuICAgIH0pO1xuXG4gICAgZGF0YVN0cmluZyArPSAnXFxuJztcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGFTdHJpbmc7XG59O1xuXG52YXIgZXhwb3J0Q1NWID0gZnVuY3Rpb24oZGF0YSwga2V5cywgZmlsZW5hbWUpIHtcbiAgdmFyIGRhdGFTdHJpbmcgPSB0b1N0cmluZyhkYXRhLCBrZXlzKTtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgc2F2ZUFzKCBuZXcgQmxvYihbZGF0YVN0cmluZ10sIHt0eXBlOiBcInRleHQvcGxhaW47Y2hhcnNldD11dGYtOFwifSksIGZpbGVuYW1lIHx8ICdzcHJlYWRzaGVldC5jc3YnICk7XG4gIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgZXhwb3J0Q1NWO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY3N2X2V4cG9ydF91dGlsLmpzXG4gKiovIiwiLyogRmlsZVNhdmVyLmpzXG4gKiBBIHNhdmVBcygpIEZpbGVTYXZlciBpbXBsZW1lbnRhdGlvbi5cbiAqIDEuMS4yMDE1MTAwM1xuICpcbiAqIEJ5IEVsaSBHcmV5LCBodHRwOi8vZWxpZ3JleS5jb21cbiAqIExpY2Vuc2U6IE1JVFxuICogICBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2VsaWdyZXkvRmlsZVNhdmVyLmpzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWRcbiAqL1xuXG4vKmdsb2JhbCBzZWxmICovXG4vKmpzbGludCBiaXR3aXNlOiB0cnVlLCBpbmRlbnQ6IDQsIGxheGJyZWFrOiB0cnVlLCBsYXhjb21tYTogdHJ1ZSwgc21hcnR0YWJzOiB0cnVlLCBwbHVzcGx1czogdHJ1ZSAqL1xuXG4vKiEgQHNvdXJjZSBodHRwOi8vcHVybC5lbGlncmV5LmNvbS9naXRodWIvRmlsZVNhdmVyLmpzL2Jsb2IvbWFzdGVyL0ZpbGVTYXZlci5qcyAqL1xuXG52YXIgc2F2ZUFzID0gc2F2ZUFzIHx8IChmdW5jdGlvbih2aWV3KSB7XG5cdFwidXNlIHN0cmljdFwiO1xuXHQvLyBJRSA8MTAgaXMgZXhwbGljaXRseSB1bnN1cHBvcnRlZFxuXHRpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gXCJ1bmRlZmluZWRcIiAmJiAvTVNJRSBbMS05XVxcLi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXJcblx0XHQgIGRvYyA9IHZpZXcuZG9jdW1lbnRcblx0XHQgIC8vIG9ubHkgZ2V0IFVSTCB3aGVuIG5lY2Vzc2FyeSBpbiBjYXNlIEJsb2IuanMgaGFzbid0IG92ZXJyaWRkZW4gaXQgeWV0XG5cdFx0LCBnZXRfVVJMID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gdmlldy5VUkwgfHwgdmlldy53ZWJraXRVUkwgfHwgdmlldztcblx0XHR9XG5cdFx0LCBzYXZlX2xpbmsgPSBkb2MuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiLCBcImFcIilcblx0XHQsIGNhbl91c2Vfc2F2ZV9saW5rID0gXCJkb3dubG9hZFwiIGluIHNhdmVfbGlua1xuXHRcdCwgY2xpY2sgPSBmdW5jdGlvbihub2RlKSB7XG5cdFx0XHR2YXIgZXZlbnQgPSBuZXcgTW91c2VFdmVudChcImNsaWNrXCIpO1xuXHRcdFx0bm9kZS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblx0XHR9XG5cdFx0LCBpc19zYWZhcmkgPSAvVmVyc2lvblxcL1tcXGRcXC5dKy4qU2FmYXJpLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpXG5cdFx0LCB3ZWJraXRfcmVxX2ZzID0gdmlldy53ZWJraXRSZXF1ZXN0RmlsZVN5c3RlbVxuXHRcdCwgcmVxX2ZzID0gdmlldy5yZXF1ZXN0RmlsZVN5c3RlbSB8fCB3ZWJraXRfcmVxX2ZzIHx8IHZpZXcubW96UmVxdWVzdEZpbGVTeXN0ZW1cblx0XHQsIHRocm93X291dHNpZGUgPSBmdW5jdGlvbihleCkge1xuXHRcdFx0KHZpZXcuc2V0SW1tZWRpYXRlIHx8IHZpZXcuc2V0VGltZW91dCkoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHRocm93IGV4O1xuXHRcdFx0fSwgMCk7XG5cdFx0fVxuXHRcdCwgZm9yY2Vfc2F2ZWFibGVfdHlwZSA9IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCJcblx0XHQsIGZzX21pbl9zaXplID0gMFxuXHRcdC8vIFNlZSBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9Mzc1Mjk3I2M3IGFuZFxuXHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9lbGlncmV5L0ZpbGVTYXZlci5qcy9jb21taXQvNDg1OTMwYSNjb21taXRjb21tZW50LTg3NjgwNDdcblx0XHQvLyBmb3IgdGhlIHJlYXNvbmluZyBiZWhpbmQgdGhlIHRpbWVvdXQgYW5kIHJldm9jYXRpb24gZmxvd1xuXHRcdCwgYXJiaXRyYXJ5X3Jldm9rZV90aW1lb3V0ID0gNTAwIC8vIGluIG1zXG5cdFx0LCByZXZva2UgPSBmdW5jdGlvbihmaWxlKSB7XG5cdFx0XHR2YXIgcmV2b2tlciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAodHlwZW9mIGZpbGUgPT09IFwic3RyaW5nXCIpIHsgLy8gZmlsZSBpcyBhbiBvYmplY3QgVVJMXG5cdFx0XHRcdFx0Z2V0X1VSTCgpLnJldm9rZU9iamVjdFVSTChmaWxlKTtcblx0XHRcdFx0fSBlbHNlIHsgLy8gZmlsZSBpcyBhIEZpbGVcblx0XHRcdFx0XHRmaWxlLnJlbW92ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0aWYgKHZpZXcuY2hyb21lKSB7XG5cdFx0XHRcdHJldm9rZXIoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNldFRpbWVvdXQocmV2b2tlciwgYXJiaXRyYXJ5X3Jldm9rZV90aW1lb3V0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0LCBkaXNwYXRjaCA9IGZ1bmN0aW9uKGZpbGVzYXZlciwgZXZlbnRfdHlwZXMsIGV2ZW50KSB7XG5cdFx0XHRldmVudF90eXBlcyA9IFtdLmNvbmNhdChldmVudF90eXBlcyk7XG5cdFx0XHR2YXIgaSA9IGV2ZW50X3R5cGVzLmxlbmd0aDtcblx0XHRcdHdoaWxlIChpLS0pIHtcblx0XHRcdFx0dmFyIGxpc3RlbmVyID0gZmlsZXNhdmVyW1wib25cIiArIGV2ZW50X3R5cGVzW2ldXTtcblx0XHRcdFx0aWYgKHR5cGVvZiBsaXN0ZW5lciA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGxpc3RlbmVyLmNhbGwoZmlsZXNhdmVyLCBldmVudCB8fCBmaWxlc2F2ZXIpO1xuXHRcdFx0XHRcdH0gY2F0Y2ggKGV4KSB7XG5cdFx0XHRcdFx0XHR0aHJvd19vdXRzaWRlKGV4KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0LCBhdXRvX2JvbSA9IGZ1bmN0aW9uKGJsb2IpIHtcblx0XHRcdC8vIHByZXBlbmQgQk9NIGZvciBVVEYtOCBYTUwgYW5kIHRleHQvKiB0eXBlcyAoaW5jbHVkaW5nIEhUTUwpXG5cdFx0XHRpZiAoL15cXHMqKD86dGV4dFxcL1xcUyp8YXBwbGljYXRpb25cXC94bWx8XFxTKlxcL1xcUypcXCt4bWwpXFxzKjsuKmNoYXJzZXRcXHMqPVxccyp1dGYtOC9pLnRlc3QoYmxvYi50eXBlKSkge1xuXHRcdFx0XHRyZXR1cm4gbmV3IEJsb2IoW1wiXFx1ZmVmZlwiLCBibG9iXSwge3R5cGU6IGJsb2IudHlwZX0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGJsb2I7XG5cdFx0fVxuXHRcdCwgRmlsZVNhdmVyID0gZnVuY3Rpb24oYmxvYiwgbmFtZSwgbm9fYXV0b19ib20pIHtcblx0XHRcdGlmICghbm9fYXV0b19ib20pIHtcblx0XHRcdFx0YmxvYiA9IGF1dG9fYm9tKGJsb2IpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gRmlyc3QgdHJ5IGEuZG93bmxvYWQsIHRoZW4gd2ViIGZpbGVzeXN0ZW0sIHRoZW4gb2JqZWN0IFVSTHNcblx0XHRcdHZhclxuXHRcdFx0XHQgIGZpbGVzYXZlciA9IHRoaXNcblx0XHRcdFx0LCB0eXBlID0gYmxvYi50eXBlXG5cdFx0XHRcdCwgYmxvYl9jaGFuZ2VkID0gZmFsc2Vcblx0XHRcdFx0LCBvYmplY3RfdXJsXG5cdFx0XHRcdCwgdGFyZ2V0X3ZpZXdcblx0XHRcdFx0LCBkaXNwYXRjaF9hbGwgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRkaXNwYXRjaChmaWxlc2F2ZXIsIFwid3JpdGVzdGFydCBwcm9ncmVzcyB3cml0ZSB3cml0ZWVuZFwiLnNwbGl0KFwiIFwiKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gb24gYW55IGZpbGVzeXMgZXJyb3JzIHJldmVydCB0byBzYXZpbmcgd2l0aCBvYmplY3QgVVJMc1xuXHRcdFx0XHQsIGZzX2Vycm9yID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYgKHRhcmdldF92aWV3ICYmIGlzX3NhZmFyaSAmJiB0eXBlb2YgRmlsZVJlYWRlciAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHRcdFx0Ly8gU2FmYXJpIGRvZXNuJ3QgYWxsb3cgZG93bmxvYWRpbmcgb2YgYmxvYiB1cmxzXG5cdFx0XHRcdFx0XHR2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblx0XHRcdFx0XHRcdHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0dmFyIGJhc2U2NERhdGEgPSByZWFkZXIucmVzdWx0O1xuXHRcdFx0XHRcdFx0XHR0YXJnZXRfdmlldy5sb2NhdGlvbi5ocmVmID0gXCJkYXRhOmF0dGFjaG1lbnQvZmlsZVwiICsgYmFzZTY0RGF0YS5zbGljZShiYXNlNjREYXRhLnNlYXJjaCgvWyw7XS8pKTtcblx0XHRcdFx0XHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuRE9ORTtcblx0XHRcdFx0XHRcdFx0ZGlzcGF0Y2hfYWxsKCk7XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0cmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG5cdFx0XHRcdFx0XHRmaWxlc2F2ZXIucmVhZHlTdGF0ZSA9IGZpbGVzYXZlci5JTklUO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBkb24ndCBjcmVhdGUgbW9yZSBvYmplY3QgVVJMcyB0aGFuIG5lZWRlZFxuXHRcdFx0XHRcdGlmIChibG9iX2NoYW5nZWQgfHwgIW9iamVjdF91cmwpIHtcblx0XHRcdFx0XHRcdG9iamVjdF91cmwgPSBnZXRfVVJMKCkuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAodGFyZ2V0X3ZpZXcpIHtcblx0XHRcdFx0XHRcdHRhcmdldF92aWV3LmxvY2F0aW9uLmhyZWYgPSBvYmplY3RfdXJsO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR2YXIgbmV3X3RhYiA9IHZpZXcub3BlbihvYmplY3RfdXJsLCBcIl9ibGFua1wiKTtcblx0XHRcdFx0XHRcdGlmIChuZXdfdGFiID09IHVuZGVmaW5lZCAmJiBpc19zYWZhcmkpIHtcblx0XHRcdFx0XHRcdFx0Ly9BcHBsZSBkbyBub3QgYWxsb3cgd2luZG93Lm9wZW4sIHNlZSBodHRwOi8vYml0Lmx5LzFrWmZmUklcblx0XHRcdFx0XHRcdFx0dmlldy5sb2NhdGlvbi5ocmVmID0gb2JqZWN0X3VybFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRmaWxlc2F2ZXIucmVhZHlTdGF0ZSA9IGZpbGVzYXZlci5ET05FO1xuXHRcdFx0XHRcdGRpc3BhdGNoX2FsbCgpO1xuXHRcdFx0XHRcdHJldm9rZShvYmplY3RfdXJsKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQsIGFib3J0YWJsZSA9IGZ1bmN0aW9uKGZ1bmMpIHtcblx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRpZiAoZmlsZXNhdmVyLnJlYWR5U3RhdGUgIT09IGZpbGVzYXZlci5ET05FKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0XHQsIGNyZWF0ZV9pZl9ub3RfZm91bmQgPSB7Y3JlYXRlOiB0cnVlLCBleGNsdXNpdmU6IGZhbHNlfVxuXHRcdFx0XHQsIHNsaWNlXG5cdFx0XHQ7XG5cdFx0XHRmaWxlc2F2ZXIucmVhZHlTdGF0ZSA9IGZpbGVzYXZlci5JTklUO1xuXHRcdFx0aWYgKCFuYW1lKSB7XG5cdFx0XHRcdG5hbWUgPSBcImRvd25sb2FkXCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY2FuX3VzZV9zYXZlX2xpbmspIHtcblx0XHRcdFx0b2JqZWN0X3VybCA9IGdldF9VUkwoKS5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cdFx0XHRcdHNhdmVfbGluay5ocmVmID0gb2JqZWN0X3VybDtcblx0XHRcdFx0c2F2ZV9saW5rLmRvd25sb2FkID0gbmFtZTtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRjbGljayhzYXZlX2xpbmspO1xuXHRcdFx0XHRcdGRpc3BhdGNoX2FsbCgpO1xuXHRcdFx0XHRcdHJldm9rZShvYmplY3RfdXJsKTtcblx0XHRcdFx0XHRmaWxlc2F2ZXIucmVhZHlTdGF0ZSA9IGZpbGVzYXZlci5ET05FO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gT2JqZWN0IGFuZCB3ZWIgZmlsZXN5c3RlbSBVUkxzIGhhdmUgYSBwcm9ibGVtIHNhdmluZyBpbiBHb29nbGUgQ2hyb21lIHdoZW5cblx0XHRcdC8vIHZpZXdlZCBpbiBhIHRhYiwgc28gSSBmb3JjZSBzYXZlIHdpdGggYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXG5cdFx0XHQvLyBodHRwOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MTE1OFxuXHRcdFx0Ly8gVXBkYXRlOiBHb29nbGUgZXJyYW50bHkgY2xvc2VkIDkxMTU4LCBJIHN1Ym1pdHRlZCBpdCBhZ2Fpbjpcblx0XHRcdC8vIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0zODk2NDJcblx0XHRcdGlmICh2aWV3LmNocm9tZSAmJiB0eXBlICYmIHR5cGUgIT09IGZvcmNlX3NhdmVhYmxlX3R5cGUpIHtcblx0XHRcdFx0c2xpY2UgPSBibG9iLnNsaWNlIHx8IGJsb2Iud2Via2l0U2xpY2U7XG5cdFx0XHRcdGJsb2IgPSBzbGljZS5jYWxsKGJsb2IsIDAsIGJsb2Iuc2l6ZSwgZm9yY2Vfc2F2ZWFibGVfdHlwZSk7XG5cdFx0XHRcdGJsb2JfY2hhbmdlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHQvLyBTaW5jZSBJIGNhbid0IGJlIHN1cmUgdGhhdCB0aGUgZ3Vlc3NlZCBtZWRpYSB0eXBlIHdpbGwgdHJpZ2dlciBhIGRvd25sb2FkXG5cdFx0XHQvLyBpbiBXZWJLaXQsIEkgYXBwZW5kIC5kb3dubG9hZCB0byB0aGUgZmlsZW5hbWUuXG5cdFx0XHQvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NjU0NDBcblx0XHRcdGlmICh3ZWJraXRfcmVxX2ZzICYmIG5hbWUgIT09IFwiZG93bmxvYWRcIikge1xuXHRcdFx0XHRuYW1lICs9IFwiLmRvd25sb2FkXCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZSA9PT0gZm9yY2Vfc2F2ZWFibGVfdHlwZSB8fCB3ZWJraXRfcmVxX2ZzKSB7XG5cdFx0XHRcdHRhcmdldF92aWV3ID0gdmlldztcblx0XHRcdH1cblx0XHRcdGlmICghcmVxX2ZzKSB7XG5cdFx0XHRcdGZzX2Vycm9yKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGZzX21pbl9zaXplICs9IGJsb2Iuc2l6ZTtcblx0XHRcdHJlcV9mcyh2aWV3LlRFTVBPUkFSWSwgZnNfbWluX3NpemUsIGFib3J0YWJsZShmdW5jdGlvbihmcykge1xuXHRcdFx0XHRmcy5yb290LmdldERpcmVjdG9yeShcInNhdmVkXCIsIGNyZWF0ZV9pZl9ub3RfZm91bmQsIGFib3J0YWJsZShmdW5jdGlvbihkaXIpIHtcblx0XHRcdFx0XHR2YXIgc2F2ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0ZGlyLmdldEZpbGUobmFtZSwgY3JlYXRlX2lmX25vdF9mb3VuZCwgYWJvcnRhYmxlKGZ1bmN0aW9uKGZpbGUpIHtcblx0XHRcdFx0XHRcdFx0ZmlsZS5jcmVhdGVXcml0ZXIoYWJvcnRhYmxlKGZ1bmN0aW9uKHdyaXRlcikge1xuXHRcdFx0XHRcdFx0XHRcdHdyaXRlci5vbndyaXRlZW5kID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRhcmdldF92aWV3LmxvY2F0aW9uLmhyZWYgPSBmaWxlLnRvVVJMKCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRmaWxlc2F2ZXIucmVhZHlTdGF0ZSA9IGZpbGVzYXZlci5ET05FO1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGF0Y2goZmlsZXNhdmVyLCBcIndyaXRlZW5kXCIsIGV2ZW50KTtcblx0XHRcdFx0XHRcdFx0XHRcdHJldm9rZShmaWxlKTtcblx0XHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRcdHdyaXRlci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgZXJyb3IgPSB3cml0ZXIuZXJyb3I7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoZXJyb3IuY29kZSAhPT0gZXJyb3IuQUJPUlRfRVJSKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZzX2Vycm9yKCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0XHRcIndyaXRlc3RhcnQgcHJvZ3Jlc3Mgd3JpdGUgYWJvcnRcIi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihldmVudCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0d3JpdGVyW1wib25cIiArIGV2ZW50XSA9IGZpbGVzYXZlcltcIm9uXCIgKyBldmVudF07XG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0d3JpdGVyLndyaXRlKGJsb2IpO1xuXHRcdFx0XHRcdFx0XHRcdGZpbGVzYXZlci5hYm9ydCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0d3JpdGVyLmFib3J0KCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRmaWxlc2F2ZXIucmVhZHlTdGF0ZSA9IGZpbGVzYXZlci5ET05FO1xuXHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuV1JJVElORztcblx0XHRcdFx0XHRcdFx0fSksIGZzX2Vycm9yKTtcblx0XHRcdFx0XHRcdH0pLCBmc19lcnJvcik7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRkaXIuZ2V0RmlsZShuYW1lLCB7Y3JlYXRlOiBmYWxzZX0sIGFib3J0YWJsZShmdW5jdGlvbihmaWxlKSB7XG5cdFx0XHRcdFx0XHQvLyBkZWxldGUgZmlsZSBpZiBpdCBhbHJlYWR5IGV4aXN0c1xuXHRcdFx0XHRcdFx0ZmlsZS5yZW1vdmUoKTtcblx0XHRcdFx0XHRcdHNhdmUoKTtcblx0XHRcdFx0XHR9KSwgYWJvcnRhYmxlKGZ1bmN0aW9uKGV4KSB7XG5cdFx0XHRcdFx0XHRpZiAoZXguY29kZSA9PT0gZXguTk9UX0ZPVU5EX0VSUikge1xuXHRcdFx0XHRcdFx0XHRzYXZlKCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRmc19lcnJvcigpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pKTtcblx0XHRcdFx0fSksIGZzX2Vycm9yKTtcblx0XHRcdH0pLCBmc19lcnJvcik7XG5cdFx0fVxuXHRcdCwgRlNfcHJvdG8gPSBGaWxlU2F2ZXIucHJvdG90eXBlXG5cdFx0LCBzYXZlQXMgPSBmdW5jdGlvbihibG9iLCBuYW1lLCBub19hdXRvX2JvbSkge1xuXHRcdFx0cmV0dXJuIG5ldyBGaWxlU2F2ZXIoYmxvYiwgbmFtZSwgbm9fYXV0b19ib20pO1xuXHRcdH1cblx0O1xuXHQvLyBJRSAxMCsgKG5hdGl2ZSBzYXZlQXMpXG5cdGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiICYmIG5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKGJsb2IsIG5hbWUsIG5vX2F1dG9fYm9tKSB7XG5cdFx0XHRpZiAoIW5vX2F1dG9fYm9tKSB7XG5cdFx0XHRcdGJsb2IgPSBhdXRvX2JvbShibG9iKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBuYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYihibG9iLCBuYW1lIHx8IFwiZG93bmxvYWRcIik7XG5cdFx0fTtcblx0fVxuXG5cdEZTX3Byb3RvLmFib3J0ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGZpbGVzYXZlciA9IHRoaXM7XG5cdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuRE9ORTtcblx0XHRkaXNwYXRjaChmaWxlc2F2ZXIsIFwiYWJvcnRcIik7XG5cdH07XG5cdEZTX3Byb3RvLnJlYWR5U3RhdGUgPSBGU19wcm90by5JTklUID0gMDtcblx0RlNfcHJvdG8uV1JJVElORyA9IDE7XG5cdEZTX3Byb3RvLkRPTkUgPSAyO1xuXG5cdEZTX3Byb3RvLmVycm9yID1cblx0RlNfcHJvdG8ub253cml0ZXN0YXJ0ID1cblx0RlNfcHJvdG8ub25wcm9ncmVzcyA9XG5cdEZTX3Byb3RvLm9ud3JpdGUgPVxuXHRGU19wcm90by5vbmFib3J0ID1cblx0RlNfcHJvdG8ub25lcnJvciA9XG5cdEZTX3Byb3RvLm9ud3JpdGVlbmQgPVxuXHRcdG51bGw7XG5cblx0cmV0dXJuIHNhdmVBcztcbn0oXG5cdCAgIHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGZcblx0fHwgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3dcblx0fHwgdGhpcy5jb250ZW50XG4pKTtcbi8vIGBzZWxmYCBpcyB1bmRlZmluZWQgaW4gRmlyZWZveCBmb3IgQW5kcm9pZCBjb250ZW50IHNjcmlwdCBjb250ZXh0XG4vLyB3aGlsZSBgdGhpc2AgaXMgbnNJQ29udGVudEZyYW1lTWVzc2FnZU1hbmFnZXJcbi8vIHdpdGggYW4gYXR0cmlidXRlIGBjb250ZW50YCB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSB3aW5kb3dcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMuc2F2ZUFzID0gc2F2ZUFzO1xufSBlbHNlIGlmICgodHlwZW9mIGRlZmluZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkZWZpbmUgIT09IG51bGwpICYmIChkZWZpbmUuYW1kICE9IG51bGwpKSB7XG4gIGRlZmluZShbXSwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHNhdmVBcztcbiAgfSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9maWxlc2F2ZXIuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJkZWZpbmUgY2Fubm90IGJlIHVzZWQgaW5kaXJlY3RcIik7IH07XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogKHdlYnBhY2spL2J1aWxkaW4vYW1kLWRlZmluZS5qc1xuICoqIG1vZHVsZSBpZCA9IDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19hbWRfb3B0aW9uc19fO1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqICh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzXG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBDb25zdCBmcm9tICcuL0NvbnN0JztcbnZhciBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXI7XG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIHRoaXMuY3VycmVudEZpbHRlciA9IHt9O1xuICAgIH1cblxuICAgIGhhbmRsZUZpbHRlcihkYXRhRmllbGQsIHZhbHVlLCB0eXBlKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlclR5cGUgPSB0eXBlIHx8IENvbnN0LkZJTFRFUl9UWVBFLkNVU1RPTTtcblxuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAvLyB2YWx1ZSBvZiB0aGUgZmlsdGVyIGlzIGFuIG9iamVjdFxuICAgICAgICAgICAgbGV0IGhhc1ZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAobGV0IHByb3AgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlW3Byb3BdIHx8IHZhbHVlW3Byb3BdID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc1ZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIG9uZSBvZiB0aGUgb2JqZWN0IHByb3BlcnRpZXMgaXMgdW5kZWZpbmVkIG9yIGVtcHR5LCB3ZSByZW1vdmUgdGhlIGZpbHRlclxuICAgICAgICAgICAgKGhhc1ZhbHVlKSA/IHRoaXMuY3VycmVudEZpbHRlcltkYXRhRmllbGRdID0ge3ZhbHVlOiB2YWx1ZSwgdHlwZTogZmlsdGVyVHlwZX0gOiBkZWxldGUgdGhpcy5jdXJyZW50RmlsdGVyW2RhdGFGaWVsZF07XG4gICAgICAgIH0gZWxzZSBpZiAoIXZhbHVlIHx8IHZhbHVlLnRyaW0oKSA9PT0gXCJcIikge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuY3VycmVudEZpbHRlcltkYXRhRmllbGRdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RmlsdGVyW2RhdGFGaWVsZF0gPSB7dmFsdWU6IHZhbHVlLnRyaW0oKSwgdHlwZTogZmlsdGVyVHlwZX07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbWl0KCdvbkZpbHRlckNoYW5nZScsIHRoaXMuY3VycmVudEZpbHRlcik7XG4gICAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvRmlsdGVyLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc1NldCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBDb25zdCBmcm9tICcuL0NvbnN0JztcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgRGF0ZUZpbHRlciBmcm9tICcuL2ZpbHRlcnMvRGF0ZSc7XG5pbXBvcnQgVGV4dEZpbHRlciBmcm9tICcuL2ZpbHRlcnMvVGV4dCc7XG5pbXBvcnQgU2VsZWN0RmlsdGVyIGZyb20gJy4vZmlsdGVycy9TZWxlY3QnO1xuaW1wb3J0IE51bWJlckZpbHRlciBmcm9tICcuL2ZpbHRlcnMvTnVtYmVyJztcblxuY2xhc3MgVGFibGVIZWFkZXJDb2x1bW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5oYW5kbGVGaWx0ZXIgPSB0aGlzLmhhbmRsZUZpbHRlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ29sdW1uQ2xpY2soZSl7XG4gICAgaWYoIXRoaXMucHJvcHMuZGF0YVNvcnQpcmV0dXJuO1xuICAgIGxldCBvcmRlciA9IHRoaXMucHJvcHMuc29ydCA9PSBDb25zdC5TT1JUX0RFU0M/Q29uc3QuU09SVF9BU0M6Q29uc3QuU09SVF9ERVNDO1xuICAgIHRoaXMucHJvcHMub25Tb3J0KG9yZGVyLCB0aGlzLnByb3BzLmRhdGFGaWVsZCk7XG4gIH1cblxuICBoYW5kbGVGaWx0ZXIodmFsdWUsIHR5cGUpIHtcbiAgICB0aGlzLnByb3BzLmZpbHRlci5lbWl0dGVyLmhhbmRsZUZpbHRlcih0aGlzLnByb3BzLmRhdGFGaWVsZCwgdmFsdWUsIHR5cGUpO1xuICB9XG5cbiAgZ2V0RmlsdGVycygpIHtcbiAgICBzd2l0Y2ggKHRoaXMucHJvcHMuZmlsdGVyLnR5cGUpIHtcbiAgICAgIGNhc2UgQ29uc3QuRklMVEVSX1RZUEUuVEVYVDoge1xuICAgICAgICByZXR1cm4gPFRleHRGaWx0ZXIgey4uLnRoaXMucHJvcHMuZmlsdGVyfSBjb2x1bW5OYW1lPXt0aGlzLnByb3BzLmNoaWxkcmVufSBmaWx0ZXJIYW5kbGVyPXt0aGlzLmhhbmRsZUZpbHRlcn0gLz47XG4gICAgICB9XG4gICAgICBjYXNlIENvbnN0LkZJTFRFUl9UWVBFLlNFTEVDVDoge1xuICAgICAgICByZXR1cm4gPFNlbGVjdEZpbHRlciB7Li4udGhpcy5wcm9wcy5maWx0ZXJ9IGNvbHVtbk5hbWU9e3RoaXMucHJvcHMuY2hpbGRyZW59IGZpbHRlckhhbmRsZXI9e3RoaXMuaGFuZGxlRmlsdGVyfSAvPjtcbiAgICAgIH1cbiAgICAgIGNhc2UgQ29uc3QuRklMVEVSX1RZUEUuTlVNQkVSOiB7XG4gICAgICAgIHJldHVybiA8TnVtYmVyRmlsdGVyIHsuLi50aGlzLnByb3BzLmZpbHRlcn0gY29sdW1uTmFtZT17dGhpcy5wcm9wcy5jaGlsZHJlbn0gZmlsdGVySGFuZGxlcj17dGhpcy5oYW5kbGVGaWx0ZXJ9IC8+O1xuICAgICAgfVxuICAgICAgY2FzZSBDb25zdC5GSUxURVJfVFlQRS5EQVRFOiB7XG4gICAgICAgIHJldHVybiA8RGF0ZUZpbHRlciB7Li4udGhpcy5wcm9wcy5maWx0ZXJ9IGNvbHVtbk5hbWU9e3RoaXMucHJvcHMuY2hpbGRyZW59IGZpbHRlckhhbmRsZXI9e3RoaXMuaGFuZGxlRmlsdGVyfSAvPjtcbiAgICAgIH1cbiAgICAgIGNhc2UgQ29uc3QuRklMVEVSX1RZUEUuQ1VTVE9NOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmZpbHRlci5nZXRFbGVtZW50KHRoaXMuaGFuZGxlRmlsdGVyLCB0aGlzLnByb3BzLmZpbHRlci5jdXN0b21GaWx0ZXJQYXJhbWV0ZXJzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHRoaXMucmVmcy5pbm5lckRpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWZpZWxkXCIsIHRoaXMucHJvcHMuZGF0YUZpZWxkKTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHZhciB3aWR0aCA9IHRoaXMucHJvcHMud2lkdGghPT1udWxsP3BhcnNlSW50KHRoaXMucHJvcHMud2lkdGgpOm51bGw7XG4gICAgdmFyIHRoU3R5bGUgPSB7XG4gICAgICB0ZXh0QWxpZ246IHRoaXMucHJvcHMuZGF0YUFsaWduLFxuICAgICAgZGlzcGxheTogdGhpcy5wcm9wcy5oaWRkZW4/XCJub25lXCI6bnVsbCxcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIG1heFdpZHRoOiB3aWR0aFxuICAgIH07XG5cbiAgICBjb25zdCBkZWZhdWx0Q2FyZXQgPSAoIXRoaXMucHJvcHMuZGF0YVNvcnQpID8gbnVsbCA6IChcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9yZGVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZXRcIiBzdHlsZT17e21hcmdpbjogJzEwcHggMCAxMHB4IDVweCcsIGNvbG9yOiAnI2NjYyd9fT48L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHJvcHVwXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZXRcIiBzdHlsZT17e21hcmdpbjogJzEwcHggMCcsIGNvbG9yOiAnI2NjYyd9fT48L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvc3Bhbj5cbiAgICApO1xuICAgIGNvbnN0IHNvcnRDYXJldCA9IHRoaXMucHJvcHMuc29ydCA/IFV0aWwucmVuZGVyUmVhY3RTb3J0Q2FyZXQodGhpcy5wcm9wcy5zb3J0KSA6IGRlZmF1bHRDYXJldDtcblxuICAgIHZhciBjbGFzc2VzID0gdGhpcy5wcm9wcy5jbGFzc05hbWUrXCIgXCIrKHRoaXMucHJvcHMuZGF0YVNvcnQ/XCJzb3J0LWNvbHVtblwiOlwiXCIpO1xuICAgIHJldHVybihcbiAgICAgIDx0aCByZWY9J2hlYWRlci1jb2wnIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3R5bGU9e3RoU3R5bGV9PlxuICAgICAgICA8ZGl2IHJlZj1cImlubmVyRGl2XCIgY2xhc3NOYW1lPVwidGgtaW5uZXIgdGFibGUtaGVhZGVyLWNvbHVtblwiXG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDb2x1bW5DbGljay5iaW5kKHRoaXMpfT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn17c29ydENhcmV0fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMucHJvcHMuZmlsdGVyID8gdGhpcy5nZXRGaWx0ZXJzKCkgOiBudWxsfVxuICAgICAgPC90aD5cbiAgICApXG4gIH1cbn1cblxudmFyIGZpbHRlclR5cGVBcnJheSA9IFtdO1xuZm9yIChsZXQga2V5IGluIENvbnN0LkZJTFRFUl9UWVBFKSB7XG4gIGZpbHRlclR5cGVBcnJheS5wdXNoKENvbnN0LkZJTFRFUl9UWVBFW2tleV0pO1xufVxuXG5UYWJsZUhlYWRlckNvbHVtbi5wcm9wVHlwZXMgPSB7XG4gIGRhdGFGaWVsZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgZGF0YUFsaWduOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBkYXRhU29ydDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIG9uU29ydDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIGRhdGFGb3JtYXQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBpc0tleTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGVkaXRhYmxlOiBSZWFjdC5Qcm9wVHlwZXMuYW55LFxuICBoaWRkZW46IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6UmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgd2lkdGg6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIHNvcnRGdW5jOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgY29sdW1uQ2xhc3NOYW1lOiBSZWFjdC5Qcm9wVHlwZXMuYW55LFxuICBmaWx0ZXJGb3JtYXR0ZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBzb3J0OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBmb3JtYXRFeHRyYURhdGE6IFJlYWN0LlByb3BUeXBlcy5hbnksXG4gIGZpbHRlcjogUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICB0eXBlOiBSZWFjdC5Qcm9wVHlwZXMub25lT2YoZmlsdGVyVHlwZUFycmF5KSxcbiAgICBkZWxheTogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBvcHRpb25zOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3QsIC8vIGZvciBTZWxlY3RGaWx0ZXJcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5hcnJheU9mKFJlYWN0LlByb3BUeXBlcy5udW1iZXIpIC8vZm9yIE51bWJlckZpbHRlclxuICAgICAgICBdKSxcbiAgICBudW1iZXJDb21wYXJhdG9yczogUmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoUmVhY3QuUHJvcFR5cGVzLnN0cmluZyksXG4gICAgZW1pdHRlcjogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBwbGFjZWhvbGRlcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBnZXRFbGVtZW50OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBjdXN0b21GaWx0ZXJQYXJhbWV0ZXJzOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gIH0pXG59O1xuXG5UYWJsZUhlYWRlckNvbHVtbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGRhdGFBbGlnbjogXCJsZWZ0XCIsXG4gIGRhdGFTb3J0OiBmYWxzZSxcbiAgZGF0YUZvcm1hdDogdW5kZWZpbmVkLFxuICBpc0tleTogZmFsc2UsXG4gIGVkaXRhYmxlOiB0cnVlLFxuICBvblNvcnQ6IHVuZGVmaW5lZCxcbiAgaGlkZGVuOiBmYWxzZSxcbiAgY2xhc3NOYW1lOiBcIlwiLFxuICB3aWR0aDogbnVsbCxcbiAgc29ydEZ1bmM6IHVuZGVmaW5lZCxcbiAgY29sdW1uQ2xhc3NOYW1lOiAnJyxcbiAgZmlsdGVyRm9ybWF0dGVkOiBmYWxzZSxcbiAgc29ydDogdW5kZWZpbmVkLFxuICBmb3JtYXRFeHRyYURhdGE6IHVuZGVmaW5lZCxcbiAgZmlsdGVyOiB1bmRlZmluZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlSGVhZGVyQ29sdW1uO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvVGFibGVIZWFkZXJDb2x1bW4uanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4uL0NvbnN0JztcblxuY2xhc3MgRGF0ZUZpbHRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmZpbHRlciA9IHRoaXMuZmlsdGVyLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc2V0RGVmYXVsdERhdGUoKSB7XG4gICAgICAgIGxldCBkZWZhdWx0RGF0ZSAgPSBcIlwiO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgICAgIC8vIFNldCB0aGUgYXBwcm9wcmlhdGUgZm9ybWF0IGZvciB0aGUgaW5wdXQgdHlwZT1kYXRlLCBpLmUuIFwiWVlZWS1NTS1ERFwiXG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSBuZXcgRGF0ZSh0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSk7XG4gICAgICAgICAgICBkZWZhdWx0RGF0ZSA9IGAke2RlZmF1bHRWYWx1ZS5nZXRGdWxsWWVhcigpfS0keyhcIjBcIiArIChkZWZhdWx0VmFsdWUuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMil9LSR7KFwiMFwiICsgZGVmYXVsdFZhbHVlLmdldERhdGUoKSkuc2xpY2UoLTIpfWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlZmF1bHREYXRlO1xuICAgIH1cblxuICAgIGZpbHRlcihldmVudCkge1xuICAgICAgICBjb25zdCBkYXRlVmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIGlmIChkYXRlVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZmlsdGVySGFuZGxlcihuZXcgRGF0ZShkYXRlVmFsdWUpLCBDb25zdC5GSUxURVJfVFlQRS5EQVRFKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZmlsdGVySGFuZGxlcihudWxsLCBDb25zdC5GSUxURVJfVFlQRS5EQVRFKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCBkYXRlVmFsdWUgPSB0aGlzLnJlZnMuaW5wdXREYXRlLmRlZmF1bHRWYWx1ZTtcbiAgICAgICAgaWYgKGRhdGVWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5maWx0ZXJIYW5kbGVyKG5ldyBEYXRlKGRhdGVWYWx1ZSksIENvbnN0LkZJTFRFUl9UWVBFLkRBVEUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGlucHV0IHJlZj1cImlucHV0RGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsdGVyIGRhdGUtZmlsdGVyIGZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmZpbHRlcn1cbiAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RoaXMuc2V0RGVmYXVsdERhdGUoKX0gLz5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5EYXRlRmlsdGVyLnByb3BUeXBlcyA9IHtcbiAgICBmaWx0ZXJIYW5kbGVyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGRlZmF1bHRWYWx1ZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjb2x1bW5OYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXRlRmlsdGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZmlsdGVycy9EYXRlLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb25zdCBmcm9tICcuLi9Db25zdCc7XG5cbmNsYXNzIFRleHRGaWx0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLmZpbHRlciA9IHRoaXMuZmlsdGVyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy50aW1lb3V0ID0gbnVsbDtcblx0fVxuXG5cdGZpbHRlcihldmVudCkge1xuXHRcdGlmICh0aGlzLnRpbWVvdXQpIHtcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuXHRcdH1cblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRjb25zdCBmaWx0ZXJWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblx0XHR0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0c2VsZi5wcm9wcy5maWx0ZXJIYW5kbGVyKGZpbHRlclZhbHVlLCBDb25zdC5GSUxURVJfVFlQRS5URVhUKTtcblx0XHR9LCBzZWxmLnByb3BzLmRlbGF5KTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGlmICh0aGlzLnJlZnMuaW5wdXRUZXh0LmRlZmF1bHRWYWx1ZSkge1xuXHRcdFx0dGhpcy5wcm9wcy5maWx0ZXJIYW5kbGVyKHRoaXMucmVmcy5pbnB1dFRleHQuZGVmYXVsdFZhbHVlLCBDb25zdC5GSUxURVJfVFlQRS5URVhUKTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxpbnB1dCByZWY9XCJpbnB1dFRleHRcIlxuXHRcdFx0XHQgICBjbGFzc05hbWU9XCJmaWx0ZXIgdGV4dC1maWx0ZXIgZm9ybS1jb250cm9sXCJcblx0XHRcdFx0ICAgdHlwZT1cInRleHRcIlxuXHRcdFx0XHQgICBvbkNoYW5nZT17dGhpcy5maWx0ZXJ9XG5cdFx0XHRcdCAgIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyIHx8IGBFbnRlciAke3RoaXMucHJvcHMuY29sdW1uTmFtZX0uLi5gfVxuXHRcdFx0XHQgICBkZWZhdWx0VmFsdWU9eyh0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSkgPyB0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSA6IFwiXCJ9IC8+XG5cdFx0KTtcblx0fVxufTtcblxuVGV4dEZpbHRlci5wcm9wVHlwZXMgPSB7XG5cdGZpbHRlckhhbmRsZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cdGRlZmF1bHRWYWx1ZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcblx0ZGVsYXk6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG5cdHBsYWNlaG9sZGVyOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuXHRjb2x1bW5OYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5UZXh0RmlsdGVyLmRlZmF1bHRQcm9wcyA9IHtcblx0ZGVsYXk6IENvbnN0LkZJTFRFUl9ERUxBWVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0RmlsdGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZmlsdGVycy9UZXh0LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc1NldCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBDb25zdCBmcm9tICcuLi9Db25zdCc7XG5cbmNsYXNzIFNlbGVjdEZpbHRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuZmlsdGVyID0gdGhpcy5maWx0ZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aXNQbGFjZWhvbGRlclNlbGVjdGVkOiAodGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUgPT0gdW5kZWZpbmVkIHx8XG5cdFx0XHRcdFx0XHRcdFx0XHQhdGhpcy5wcm9wcy5vcHRpb25zLmhhc093blByb3BlcnR5KHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlKSlcblx0XHR9O1xuXHR9XG5cblx0ZmlsdGVyKGV2ZW50KSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7aXNQbGFjZWhvbGRlclNlbGVjdGVkOiAoZXZlbnQudGFyZ2V0LnZhbHVlID09PSBcIlwiKX0pO1xuXHRcdHRoaXMucHJvcHMuZmlsdGVySGFuZGxlcihldmVudC50YXJnZXQudmFsdWUsIENvbnN0LkZJTFRFUl9UWVBFLlNFTEVDVCk7XG5cdH1cblxuXHRnZXRPcHRpb25zKCkge1xuXHRcdGxldCBvcHRpb25UYWdzID0gW107XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMucHJvcHMub3B0aW9ucztcblx0XHRvcHRpb25UYWdzLnB1c2goPG9wdGlvbiBrZXk9XCItMVwiIHZhbHVlPVwiXCI+e3RoaXMucHJvcHMucGxhY2Vob2xkZXIgfHwgYFNlbGVjdCAke3RoaXMucHJvcHMuY29sdW1uTmFtZX0uLi5gfTwvb3B0aW9uPik7XG5cdFx0T2JqZWN0LmtleXMob3B0aW9ucykubWFwKChrZXkpID0+IHtcblx0XHRcdG9wdGlvblRhZ3MucHVzaCg8b3B0aW9uIGtleT17a2V5fSB2YWx1ZT17a2V5fT57b3B0aW9uc1trZXldfTwvb3B0aW9uPik7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIG9wdGlvblRhZ3M7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRpZiAodGhpcy5yZWZzLnNlbGVjdElucHV0LnZhbHVlKSB7XG5cdFx0XHR0aGlzLnByb3BzLmZpbHRlckhhbmRsZXIodGhpcy5yZWZzLnNlbGVjdElucHV0LnZhbHVlLCBDb25zdC5GSUxURVJfVFlQRS5TRUxFQ1QpO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHR2YXIgc2VsZWN0Q2xhc3MgPSBjbGFzc1NldChcImZpbHRlclwiLCBcInNlbGVjdC1maWx0ZXJcIiwgXCJmb3JtLWNvbnRyb2xcIixcblx0XHRcdFx0XHRcdFx0e1wicGxhY2Vob2xkZXItc2VsZWN0ZWRcIjogdGhpcy5zdGF0ZS5pc1BsYWNlaG9sZGVyU2VsZWN0ZWR9KTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8c2VsZWN0IHJlZj1cInNlbGVjdElucHV0XCJcblx0XHRcdFx0XHRjbGFzc05hbWU9e3NlbGVjdENsYXNzfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmZpbHRlcn1cblx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9eyh0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSAhPSB1bmRlZmluZWQpID8gdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUgOiBcIlwifT5cblx0XHRcdFx0e3RoaXMuZ2V0T3B0aW9ucygpfVxuXHRcdFx0PC9zZWxlY3Q+XG5cdFx0KTtcblx0fVxufTtcblxuU2VsZWN0RmlsdGVyLnByb3BUeXBlcyA9IHtcblx0ZmlsdGVySGFuZGxlcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblx0b3B0aW9uczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXHRwbGFjZWhvbGRlcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcblx0Y29sdW1uTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0RmlsdGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZmlsdGVycy9TZWxlY3QuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzU2V0IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4uL0NvbnN0JztcblxuY29uc3QgbGVnYWxDb21wYXJhdG9ycyA9IFtcIj1cIiwgXCI+XCIsIFwiPj1cIiwgXCI8XCIsIFwiPD1cIiwgXCIhPVwiXTtcblxuY2xhc3MgTnVtYmVyRmlsdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMubnVtYmVyQ29tcGFyYXRvcnMgPSB0aGlzLnByb3BzLm51bWJlckNvbXBhcmF0b3JzIHx8IGxlZ2FsQ29tcGFyYXRvcnM7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpc1BsYWNlaG9sZGVyU2VsZWN0ZWQ6ICh0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSA9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlLm51bWJlciA9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLm9wdGlvbnMgJiYgdGhpcy5wcm9wcy5vcHRpb25zLmluZGV4T2YodGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUubnVtYmVyKSA9PSAtMSkpXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25DaGFuZ2VOdW1iZXIgPSB0aGlzLm9uQ2hhbmdlTnVtYmVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VOdW1iZXJTZXQgPSB0aGlzLm9uQ2hhbmdlTnVtYmVyU2V0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VDb21wYXJhdG9yID0gdGhpcy5vbkNoYW5nZUNvbXBhcmF0b3IuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZU51bWJlcihldmVudCkge1xuICAgICAgICBpZiAodGhpcy5yZWZzLm51bWJlckZpbHRlckNvbXBhcmF0b3IudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50aW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3QgZmlsdGVyVmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLnByb3BzLmZpbHRlckhhbmRsZXIoe251bWJlcjogZmlsdGVyVmFsdWUsIGNvbXBhcmF0b3I6IHNlbGYucmVmcy5udW1iZXJGaWx0ZXJDb21wYXJhdG9yLnZhbHVlfSxcbiAgICAgICAgICAgICAgICBDb25zdC5GSUxURVJfVFlQRS5OVU1CRVIpO1xuICAgICAgICB9LCBzZWxmLnByb3BzLmRlbGF5KTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZU51bWJlclNldChldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpc1BsYWNlaG9sZGVyU2VsZWN0ZWQ6IChldmVudC50YXJnZXQudmFsdWUgPT09IFwiXCIpfSk7XG4gICAgICAgIGlmICh0aGlzLnJlZnMubnVtYmVyRmlsdGVyQ29tcGFyYXRvci52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMuZmlsdGVySGFuZGxlcih7bnVtYmVyOiBldmVudC50YXJnZXQudmFsdWUsIGNvbXBhcmF0b3I6IHRoaXMucmVmcy5udW1iZXJGaWx0ZXJDb21wYXJhdG9yLnZhbHVlfSxcbiAgICAgICAgICAgIENvbnN0LkZJTFRFUl9UWVBFLk5VTUJFUik7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VDb21wYXJhdG9yKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnJlZnMubnVtYmVyRmlsdGVyLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5maWx0ZXJIYW5kbGVyKHtudW1iZXI6IHRoaXMucmVmcy5udW1iZXJGaWx0ZXIudmFsdWUsIGNvbXBhcmF0b3I6IGV2ZW50LnRhcmdldC52YWx1ZX0sXG4gICAgICAgICAgICBDb25zdC5GSUxURVJfVFlQRS5OVU1CRVIpO1xuICAgIH1cblxuICAgIGdldENvbXBhcmF0b3JPcHRpb25zKCkge1xuICAgICAgICBsZXQgb3B0aW9uVGFncyA9IFtdO1xuICAgICAgICBvcHRpb25UYWdzLnB1c2goPG9wdGlvbiBrZXk9XCItMVwiPjwvb3B0aW9uPik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1iZXJDb21wYXJhdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgb3B0aW9uVGFncy5wdXNoKDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17dGhpcy5udW1iZXJDb21wYXJhdG9yc1tpXX0+e3RoaXMubnVtYmVyQ29tcGFyYXRvcnNbaV19PC9vcHRpb24+KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG9wdGlvblRhZ3M7XG4gICAgfVxuXG4gICAgZ2V0TnVtYmVyT3B0aW9ucygpIHtcbiAgICAgICAgbGV0IG9wdGlvblRhZ3MgPSBbXTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMucHJvcHMub3B0aW9ucztcblxuICAgICAgICBvcHRpb25UYWdzLnB1c2goPG9wdGlvbiBrZXk9XCItMVwiIHZhbHVlPVwiXCI+e3RoaXMucHJvcHMucGxhY2Vob2xkZXIgfHwgYFNlbGVjdCAke3RoaXMucHJvcHMuY29sdW1uTmFtZX0uLi5gfTwvb3B0aW9uPik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgb3B0aW9uVGFncy5wdXNoKDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17b3B0aW9uc1tpXX0+e29wdGlvbnNbaV19PC9vcHRpb24+KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG9wdGlvblRhZ3M7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlZnMubnVtYmVyRmlsdGVyQ29tcGFyYXRvci52YWx1ZSAmJiB0aGlzLnJlZnMubnVtYmVyRmlsdGVyLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmZpbHRlckhhbmRsZXIoe251bWJlcjogdGhpcy5yZWZzLm51bWJlckZpbHRlci52YWx1ZSxcbiAgICAgICAgICAgICAgICBjb21wYXJhdG9yOiB0aGlzLnJlZnMubnVtYmVyRmlsdGVyQ29tcGFyYXRvci52YWx1ZX0sXG4gICAgICAgICAgICAgICAgQ29uc3QuRklMVEVSX1RZUEUuTlVNQkVSKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHNlbGVjdENsYXNzID0gY2xhc3NTZXQoXCJzZWxlY3QtZmlsdGVyXCIsIFwibnVtYmVyLWZpbHRlci1pbnB1dFwiLCBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCJwbGFjZWhvbGRlci1zZWxlY3RlZFwiOiB0aGlzLnN0YXRlLmlzUGxhY2Vob2xkZXJTZWxlY3RlZCB9KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXIgbnVtYmVyLWZpbHRlclwiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgcmVmPVwibnVtYmVyRmlsdGVyQ29tcGFyYXRvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJudW1iZXItZmlsdGVyLWNvbXBhcmF0b3IgZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlQ29tcGFyYXRvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17KHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlKSA/IHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlLmNvbXBhcmF0b3IgOiBcIlwifT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuZ2V0Q29tcGFyYXRvck9wdGlvbnMoKX1cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICB7KHRoaXMucHJvcHMub3B0aW9ucykgPyA8c2VsZWN0IHJlZj1cIm51bWJlckZpbHRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3NlbGVjdENsYXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VOdW1iZXJTZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9eyh0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlLm51bWJlciA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmdldE51bWJlck9wdGlvbnMoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD4gOlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlZj1cIm51bWJlckZpbHRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJudW1iZXItZmlsdGVyLWlucHV0IGZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyIHx8IGBFbnRlciAke3RoaXMucHJvcHMuY29sdW1uTmFtZX0uLi5gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZU51bWJlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXsodGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZS5udW1iZXIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJ9IC8+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufTtcblxuTnVtYmVyRmlsdGVyLnByb3BUeXBlcyA9IHtcbiAgICBmaWx0ZXJIYW5kbGVyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9wdGlvbnM6IFJlYWN0LlByb3BUeXBlcy5hcnJheU9mKFJlYWN0LlByb3BUeXBlcy5udW1iZXIpLFxuICAgIGRlZmF1bHRWYWx1ZTogUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgbnVtYmVyOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBjb21wYXJhdG9yOiBSZWFjdC5Qcm9wVHlwZXMub25lT2YobGVnYWxDb21wYXJhdG9ycylcbiAgICB9KSxcbiAgICBkZWxheTogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBudW1iZXJDb21wYXJhdG9yczogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lKSB7XG4gICAgICAgIGlmICghcHJvcHNbcHJvcE5hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wc1twcm9wTmFtZV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjb21wYXJhdG9ySXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZWdhbENvbXBhcmF0b3JzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxlZ2FsQ29tcGFyYXRvcnNbal0gPT09IHByb3BzW3Byb3BOYW1lXVtpXSkge1xuICAgICAgICAgICAgICAgICAgICBjb21wYXJhdG9ySXNWYWxpZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghY29tcGFyYXRvcklzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKGBOdW1iZXIgY29tcGFyYXRvciBwcm92aWRlZCBpcyBub3Qgc3VwcG9ydGVkLiBVc2Ugb25seSAke2xlZ2FsQ29tcGFyYXRvcnN9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHBsYWNlaG9sZGVyOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbHVtbk5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbn07XG5cbk51bWJlckZpbHRlci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZGVsYXk6IENvbnN0LkZJTFRFUl9ERUxBWVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRmlsdGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZmlsdGVycy9OdW1iZXIuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9
>>>>>>> 47bce923ee48c931b71efde9e00c859b9db2a62c
