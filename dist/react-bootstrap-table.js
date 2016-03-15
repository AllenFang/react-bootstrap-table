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
	
	var _util = __webpack_require__(7);
	
	var _util2 = _interopRequireDefault(_util);
	
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
	
	    this._adjustTable = function () {
	      _this._adjustHeaderWidth();
	      _this._adjustHeight();
	    };
	
	    this._adjustHeaderWidth = function () {
	      var header = _this.refs.header.refs.header;
	      var headerContainer = _this.refs.header.refs.container;
	      var tbody = _this.refs.body.refs.tbody;
	      var firstRow = tbody.childNodes[0];
	      var isScroll = headerContainer.offsetWidth !== tbody.parentNode.offsetWidth;
	      var scrollBarWidth = isScroll ? _util2['default'].getScrollBarWidth() : 0;
	      if (firstRow && _this.store.getDataNum()) {
	        var cells = firstRow.childNodes;
	        for (var i = 0; i < cells.length; i++) {
	          var cell = cells[i];
	          var computedStyle = getComputedStyle(cell);
	          var width = parseFloat(computedStyle.width.replace("px", ""));
	          if (_this.isIE) {
	            var paddingLeftWidth = parseFloat(computedStyle.paddingLeft.replace("px", ""));
	            var paddingRightWidth = parseFloat(computedStyle.paddingRight.replace("px", ""));
	            var borderRightWidth = parseFloat(computedStyle.borderRightWidth.replace("px", ""));
	            var borderLeftWidth = parseFloat(computedStyle.borderLeftWidth.replace("px", ""));
	            width = width + paddingLeftWidth + paddingRightWidth + borderRightWidth + borderLeftWidth;
	          }
	          var lastPadding = cells.length - 1 == i ? scrollBarWidth : 0;
	          if (width <= 0) {
	            width = 120;
	            cell.width = width + lastPadding + "px";
	          }
	          var result = width + lastPadding + "px";
	          header.childNodes[i].style.width = result;
	          header.childNodes[i].style.minWidth = result;
	        }
	      }
	    };
	
	    this._adjustHeight = function () {
	      if (_this.props.height.indexOf('%') === -1) {
	        _this.refs.body.refs.container.style.height = parseFloat(_this.props.height) - _this.refs.header.refs.container.offsetHeight + "px";
	      }
	    };
	
	    this.isIE = false;
	    this._attachCellEditFunc();
	    if (typeof 'window' !== undefined && document) {
	      this.isIE = document.documentMode;
	    }
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
	
	      return _react2['default'].Children.map(children, function (column, i) {
	        return {
	          name: column.props.dataField,
	          align: column.props.dataAlign,
	          sort: column.props.dataSort,
	          format: column.props.dataFormat,
	          formatExtraData: column.props.formatExtraData,
	          filterFormatted: column.props.filterFormatted,
	          editable: column.props.editable,
	          hidden: column.props.hidden,
	          searchable: column.props.searchable,
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
	        var page = nextProps.options.page || this.state.currPage;
	        var sizePerPage = nextProps.options.sizePerPage || this.state.sizePerPage;
	
	        // #125
	        if (!nextProps.options.page && page >= Math.ceil(nextProps.data.length / sizePerPage)) {
	          page = 1;
	        }
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
	      this._adjustTable();
	      window.addEventListener('resize', this._adjustTable);
	      this.refs.body.refs.container.addEventListener('scroll', this._scrollHeader);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('resize', this._adjustTable);
	      this.refs.body.refs.container.removeEventListener('scroll', this._scrollHeader);
	      if (this.filter) {
	        this.filter.removeAllListeners("onFilterChange");
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this._adjustTable();
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
	      var sortIndicator = this.props.options.sortIndicator;
	      if (typeof this.props.options.sortIndicator === 'undefined') sortIndicator = true;
	      return _react2['default'].createElement(
	        'div',
	        { className: 'react-bs-table-container' },
	        toolBar,
	        _react2['default'].createElement(
	          'div',
	          { className: 'react-bs-table', ref: 'table', style: style,
	            onMouseEnter: this.handleMouseEnter.bind(this),
	            onMouseLeave: this.handleMouseLeave.bind(this) },
	          _react2['default'].createElement(
	            _TableHeader2['default'],
	            {
	              ref: 'header',
	              rowSelectType: this.props.selectRow.mode,
	              hideSelectColumn: this.props.selectRow.hideSelectColumn,
	              sortName: sortInfo ? sortInfo.sortField : undefined,
	              sortOrder: sortInfo ? sortInfo.order : undefined,
	              sortIndicator: sortIndicator,
	              onSort: this.handleSort.bind(this),
	              onSelectAllRow: this.handleSelectAllRow.bind(this),
	              bordered: this.props.bordered,
	              condensed: this.props.condensed,
	              isFiltered: this.filter ? true : false,
	              isSelectAll: isSelectAll },
	            this.props.children
	          ),
	          _react2['default'].createElement(_TableBody2['default'], {
	            ref: 'body',
	            style: style,
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
	    key: 'handleAddRowAtBegin',
	    value: function handleAddRowAtBegin(newObj) {
	      var result = undefined;
	      try {
	        this.store.addAtBegin(newObj);
	      } catch (e) {
	        return e;
	      }
	      this._handleAfterAddingRow(newObj);
	    }
	  }, {
	    key: 'handleAddRow',
	    value: function handleAddRow(newObj) {
	      var result = undefined;
	      try {
	        this.store.add(newObj);
	      } catch (e) {
	        return e;
	      }
	      this._handleAfterAddingRow(newObj);
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
	          { className: 'react-bs-table-pagination' },
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
	          { className: 'react-bs-table-tool-bar' },
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
	  }, {
	    key: '_handleAfterAddingRow',
	    value: function _handleAfterAddingRow(newObj) {
	      var result = undefined;
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
	    sortIndicator: _react2['default'].PropTypes.bool,
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
	    sortIndicator: true,
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
	    REGEX: "RegexFilter",
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
	  }
	
	  _createClass(TableHeader, [{
	    key: 'render',
	    value: function render() {
	      var containerClasses = (0, _classnames2['default'])("react-bs-container-header", "table-header-wrapper");
	      var tableClasses = (0, _classnames2['default'])("table", "table-hover", {
	        "table-bordered": this.props.bordered,
	        "table-condensed": this.props.condensed
	      });
	      var selectRowHeaderCol = this.props.hideSelectColumn ? null : this.renderSelectRowHeader();
	      this._attachClearSortCaretFunc();
	
	      return _react2['default'].createElement(
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
	      );
	    }
	  }, {
	    key: 'renderSelectRowHeader',
	    value: function renderSelectRowHeader() {
	      if (this.props.rowSelectType == _Const2['default'].ROW_SELECT_SINGLE) {
	        return _react2['default'].createElement(_SelectRowHeaderColumn2['default'], null);
	      } else if (this.props.rowSelectType == _Const2['default'].ROW_SELECT_MULTI) {
	        return _react2['default'].createElement(
	          _SelectRowHeaderColumn2['default'],
	          null,
	          _react2['default'].createElement(Checkbox, { onChange: this.props.onSelectAllRow, checked: this.props.isSelectAll })
	        );
	      } else {
	        return null;
	      }
	    }
	  }, {
	    key: '_attachClearSortCaretFunc',
	    value: function _attachClearSortCaretFunc() {
	      var sortIndicator = this.props.sortIndicator;
	
	      if (Array.isArray(this.props.children)) {
	        for (var i = 0; i < this.props.children.length; i++) {
	          var field = this.props.children[i].props.dataField;
	          var sort = field === this.props.sortName ? this.props.sortOrder : undefined;
	          this.props.children[i] = _react2['default'].cloneElement(this.props.children[i], { key: i, onSort: this.props.onSort, sort: sort, sortIndicator: sortIndicator });
	        }
	      } else {
	        var field = this.props.children.props.dataField;
	        var sort = field === this.props.sortName ? this.props.sortOrder : undefined;
	        this.props.children = _react2['default'].cloneElement(this.props.children, { key: 0, onSort: this.props.onSort, sort: sort, sortIndicator: sortIndicator });
	      }
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
	  isSelectAll: _react2['default'].PropTypes.oneOf([true, 'indeterminate', false]),
	  sortIndicator: _react2['default'].PropTypes.bool
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
	
	  renderReactSortCaret: function renderReactSortCaret(order) {
	    var orderClass = (0, _classnames2['default'])("order", {
	      'dropup': order == _Const2['default'].SORT_ASC
	    });
	    return _react2['default'].createElement(
	      'span',
	      { className: orderClass },
	      _react2['default'].createElement('span', { className: 'caret', style: { margin: '0px 5px' } })
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
	      return _react2['default'].createElement(
	        'th',
	        { style: { textAlign: 'center' } },
	        this.props.children
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
	    key: 'render',
	    value: function render() {
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
	
	      return _react2['default'].createElement(
	        'div',
	        { ref: 'container', className: 'react-bs-container-body', style: this.props.style },
	        _react2['default'].createElement(
	          'table',
	          { className: tableClasses },
	          tableHeader,
	          _react2['default'].createElement(
	            'tbody',
	            { ref: 'tbody' },
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
	          width: 30,
	          minWidth: 30
	        };
	        selectRowHeader = this.props.selectRow.hideSelectColumn ? null : _react2['default'].createElement('col', { style: style, key: -1 });
	      }
	      var theader = this.props.columns.map(function (column, i) {
	        var width = column.width == null ? column.width : parseInt(column.width);
	        var style = {
	          display: column.hidden ? "none" : null,
	          width: width,
	          minWidth: width
	          /** add min-wdth to fix user assign column width not eq offsetWidth in large column table **/
	        };
	        return _react2['default'].createElement('col', { style: style, key: i, className: column.className });
	      });
	
	      return _react2['default'].createElement(
	        'colgroup',
	        { ref: 'header' },
	        selectRowHeader,
	        theader
	      );
	    }
	  }, {
	    key: 'handleRowMouseOut',
	    value: function handleRowMouseOut(rowIndex) {
	      var targetRow = this.props.data[rowIndex];
	      this.props.onRowMouseOut(targetRow);
	    }
	  }, {
	    key: 'handleRowMouseOver',
	    value: function handleRowMouseOver(rowIndex) {
	      var targetRow = this.props.data[rowIndex];
	      this.props.onRowMouseOver(targetRow);
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
	        this.handleSelectRow(e.currentTarget.parentElement.parentElement.rowIndex + 1, e.currentTarget.checked);
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
	          { dataAlign: 'center' },
	          _react2['default'].createElement('input', { type: 'radio', checked: selected, onChange: this.handleSelectRowColumChange.bind(this) })
	        );
	      } else {
	        return _react2['default'].createElement(
	          _TableColumn2['default'],
	          { dataAlign: 'center' },
	          _react2['default'].createElement('input', { type: 'checkbox', checked: selected, onChange: this.handleSelectRowColumChange.bind(this) })
	        );
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
	  // height: React.PropTypes.string,
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
	  noDataText: _react2['default'].PropTypes.string,
	  style: _react2['default'].PropTypes.object
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
	          var rowIndex = e.currentTarget.rowIndex + 1;
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
	  onSelectRow: _react2['default'].PropTypes.func,
	  onRowMouseOut: _react2['default'].PropTypes.func,
	  onRowMouseOver: _react2['default'].PropTypes.func
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
	
	      if (typeof children === 'object' && children !== null && children.props !== null) {
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
	      this.props.onEdit(e.currentTarget.parentElement.rowIndex + 1, e.currentTarget.cellIndex);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var tdStyle = {
	        textAlign: this.props.dataAlign,
	        display: this.props.hidden ? "none" : null
	      };
	
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
	        _extends({ style: tdStyle, className: this.props.className }, opts),
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
	        this.props.sizePerPageList.length > 1 ? _react2['default'].createElement(
	          'div',
	          null,
	          _react2['default'].createElement(
	            'div',
	            { className: 'col-md-6' },
	            _react2['default'].createElement(
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
	            )
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
	        ) : _react2['default'].createElement(
	          'div',
	          { className: 'col-md-12' },
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
	      this.props.changePage(e.currentTarget.textContent);
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
	    this.modalClassName;
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
	      var _this2 = this;
	
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
	          document.querySelector("." + _this2.modalClassName).click();
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
	      this.modalClassName = "bs-table-modal-sm" + new Date().getTime();
	      var insertBtn = this.props.enableInsert ? _react2['default'].createElement(
	        'button',
	        { type: 'button', onClick: this.props.onAddRowBegin, className: 'btn btn-info react-bs-table-add-btn', 'data-toggle': 'modal', 'data-target': '.' + this.modalClassName },
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
	
	      var modal = this.props.enableInsert ? this.renderInsertRowModal() : null;
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
	        var classNames = 'form-group form-group-sm react-bs-table-search-form';
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
	          classNames += ' input-group input-group-sm';
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
	    value: function renderInsertRowModal() {
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
	      var modalClass = (0, _classnames2['default'])("modal", "fade", this.modalClassName, {
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
	      return sortFunc(a, b, order, sortField);
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
	    key: 'addAtBegin',
	    value: function addAtBegin(newObj) {
	      if (!newObj[this.keyField] || newObj[this.keyField].toString() === '') {
	        throw this.keyField + " can't be empty value.";
	      }
	      var currentDisplayData = this.getCurrentDisplayData();
	      currentDisplayData.forEach(function (row) {
	        if (row[this.keyField].toString() === newObj[this.keyField].toString()) {
	          throw this.keyField + " " + newObj[this.keyField] + " already exists";
	        }
	      }, this);
	      currentDisplayData.unshift(newObj);
	      if (this.isOnFilter) {
	        this.data.unshift(newObj);
	      }
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
	        if (null !== this.searchText) this.search(this.searchText);
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
	              case _Const2['default'].FILTER_TYPE.REGEX:
	                {
	                  filterVal = filterObj[key].value;
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
	              case _Const2['default'].FILTER_TYPE.REGEX:
	                {
	                  valid = _this2.filterRegex(targetVal, filterVal);
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
	    key: 'filterRegex',
	    value: function filterRegex(targetVal, filterVal) {
	      try {
	        return new RegExp(filterVal, 'i').test(targetVal);
	      } catch (e) {
	        console.error('Invalid regular expression');
	        return true;
	      }
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
	
	    /* General search function
	     * It will search for the text if the input includes that text;
	     */
	  }, {
	    key: 'search',
	    value: function search(searchText) {
	      var _this3 = this;
	
	      if (searchText.trim() === "") {
	        this.filteredData = null;
	        this.isOnFilter = false;
	        this.searchText = null;
	        if (null !== this.filterObj) this.filter(this.filterObj);
	      } else {
	        (function () {
	          _this3.searchText = searchText;
	          var searchTextArray = [];
	
	          if (_this3.multiColumnSearch) {
	            searchTextArray = searchText.split(' ');
	          } else {
	            searchTextArray.push(searchText);
	          }
	
	          var source = _this3.isOnFilter ? _this3.filteredData : _this3.data;
	
	          _this3.filteredData = source.filter(function (row) {
	            var keys = Object.keys(row);
	            var valid = false;
	            // for loops are ugly, but performance matters here.
	            // And you cant break from a forEach.
	            // http://jsperf.com/for-vs-foreach/66
	            for (var i = 0, keysLength = keys.length; i < keysLength; i++) {
	              var key = keys[i];
	              if (_this3.colInfos[key] && row[key]) {
	                var _colInfos$key2 = _this3.colInfos[key];
	                var format = _colInfos$key2.format;
	                var filterFormatted = _colInfos$key2.filterFormatted;
	                var formatExtraData = _colInfos$key2.formatExtraData;
	                var searchable = _colInfos$key2.searchable;
	                var hidden = _colInfos$key2.hidden;
	
	                var targetVal = row[key];
	                if (searchable) {
	                  if (filterFormatted && format) {
	                    targetVal = format(targetVal, row, formatExtraData);
	                  }
	                  for (var j = 0, textLength = searchTextArray.length; j < textLength; j++) {
	                    var filterVal = searchTextArray[j].toLowerCase();
	                    if (targetVal.toString().toLowerCase().indexOf(filterVal) !== -1) {
	                      valid = true;
	                      break;
	                    }
	                  }
	                }
	              }
	            }
	            return valid;
	          });
	          _this3.isOnFilter = true;
	        })();
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
	
	var _filtersRegex = __webpack_require__(43);
	
	var _filtersRegex2 = _interopRequireDefault(_filtersRegex);
	
	var _filtersSelect = __webpack_require__(44);
	
	var _filtersSelect2 = _interopRequireDefault(_filtersSelect);
	
	var _filtersNumber = __webpack_require__(45);
	
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
	        case _Const2['default'].FILTER_TYPE.REGEX:
	          {
	            return _react2['default'].createElement(_filtersRegex2['default'], _extends({}, this.props.filter, { columnName: this.props.children, filterHandler: this.handleFilter }));
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
	      this.refs["header-col"].setAttribute("data-field", this.props.dataField);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var defaultCaret = undefined;
	      var thStyle = {
	        textAlign: this.props.dataAlign,
	        display: this.props.hidden ? "none" : null
	      };
	      if (this.props.sortIndicator) {
	        defaultCaret = !this.props.dataSort ? null : _react2['default'].createElement(
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
	      }
	      var sortCaret = this.props.sort ? _util2['default'].renderReactSortCaret(this.props.sort) : defaultCaret;
	
	      var classes = this.props.className + " " + (this.props.dataSort ? "sort-column" : "");
	      return _react2['default'].createElement(
	        'th',
	        { ref: 'header-col',
	          className: classes,
	          style: thStyle,
	          title: this.props.children,
	          onClick: this.handleColumnClick.bind(this) },
	        this.props.children,
	        sortCaret,
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
	  searchable: _react2['default'].PropTypes.bool,
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
	  }),
	  sortIndicator: _react2['default'].PropTypes.bool
	};
	
	TableHeaderColumn.defaultProps = {
	  dataAlign: "left",
	  dataSort: false,
	  dataFormat: undefined,
	  isKey: false,
	  editable: true,
	  onSort: undefined,
	  hidden: false,
	  searchable: true,
	  className: "",
	  width: null,
	  sortFunc: undefined,
	  columnClassName: '',
	  filterFormatted: false,
	  sort: undefined,
	  formatExtraData: undefined,
	  filter: undefined,
	  sortIndicator: true
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
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				clearTimeout(this.timeout);
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
	
	var _Const = __webpack_require__(4);
	
	var _Const2 = _interopRequireDefault(_Const);
	
	var RegexFilter = (function (_React$Component) {
		_inherits(RegexFilter, _React$Component);
	
		function RegexFilter(props) {
			_classCallCheck(this, RegexFilter);
	
			_get(Object.getPrototypeOf(RegexFilter.prototype), 'constructor', this).call(this, props);
			this.filter = this.filter.bind(this);
			this.timeout = null;
		}
	
		_createClass(RegexFilter, [{
			key: 'filter',
			value: function filter(event) {
				if (this.timeout) {
					clearTimeout(this.timeout);
				}
				var self = this;
				var filterValue = event.target.value;
				this.timeout = setTimeout(function () {
					self.props.filterHandler(filterValue, _Const2['default'].FILTER_TYPE.REGEX);
				}, self.props.delay);
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				if (this.refs.inputText.defaultValue) {
					this.props.filterHandler(this.refs.inputText.defaultValue, _Const2['default'].FILTER_TYPE.REGEX);
				}
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				clearTimeout(this.timeout);
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2['default'].createElement('input', { ref: 'inputText',
					className: 'filter text-filter form-control',
					type: 'text',
					onChange: this.filter,
					placeholder: this.props.placeholder || 'Enter Regex for ' + this.props.columnName + '...',
					defaultValue: this.props.defaultValue ? this.props.defaultValue : "" });
			}
		}]);
	
		return RegexFilter;
	})(_react2['default'].Component);
	
	;
	
	RegexFilter.propTypes = {
		filterHandler: _react2['default'].PropTypes.func.isRequired,
		defaultValue: _react2['default'].PropTypes.string,
		delay: _react2['default'].PropTypes.number,
		placeholder: _react2['default'].PropTypes.string,
		columnName: _react2['default'].PropTypes.string
	};
	
	RegexFilter.defaultProps = {
		delay: _Const2['default'].FILTER_DELAY
	};
	
	exports['default'] = RegexFilter;
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
/* 45 */
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
	        this.timeout = null;
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
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            clearTimeout(this.timeout);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwMmI3Y2E5MDA5MGIxNGNmM2Y0ZCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Jvb3RzdHJhcFRhYmxlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9Iiwid2VicGFjazovLy8uL34vY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RhYmxlSGVhZGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdERPTVwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1kb21cIixcImNvbW1vbmpzXCI6XCJyZWFjdC1kb21cIixcImFtZFwiOlwicmVhY3QtZG9tXCJ9Iiwid2VicGFjazovLy8uL3NyYy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9TZWxlY3RSb3dIZWFkZXJDb2x1bW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RhYmxlQm9keS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVGFibGVSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RhYmxlQ29sdW1uLmpzIiwid2VicGFjazovLy8uL3NyYy9UYWJsZUVkaXRDb2x1bW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtdG9hc3RyL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXRvYXN0ci9saWIvVG9hc3RDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1hZGRvbnMtdXBkYXRlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL3VwZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9PYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vZmJqcy9saWIva2V5T2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9mYmpzL2xpYi9pbnZhcmlhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC10b2FzdHIvbGliL1RvYXN0TWVzc2FnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXRvYXN0ci9saWIvVG9hc3RNZXNzYWdlL2FuaW1hdGlvbk1peGluLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL1JlYWN0VHJhbnNpdGlvbkV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL34vZWxlbWVudC1jbGFzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXRvYXN0ci9saWIvVG9hc3RNZXNzYWdlL2pRdWVyeU1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdpbmF0aW9uL1BhZ2luYXRpb25MaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdpbmF0aW9uL1BhZ2VCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xiYXIvVG9vbEJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVGFibGVGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL1RhYmxlRGF0YVN0b3JlLmpzIiwid2VicGFjazovLy8uL34vZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3N2X2V4cG9ydF91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9maWxlc2F2ZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9GaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RhYmxlSGVhZGVyQ29sdW1uLmpzIiwid2VicGFjazovLy8uL3NyYy9maWx0ZXJzL0RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpbHRlcnMvVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmlsdGVycy9SZWdleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmlsdGVycy9TZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpbHRlcnMvTnVtYmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OzJDQ3RDMkIsQ0FBa0I7Ozs7OENBQ2YsRUFBcUI7Ozs7Z0RBQ3hCLEVBQXdCOztBQUVuRCxLQUFHLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBQztBQUMvQixTQUFNLENBQUMsY0FBYyw4QkFBaUIsQ0FBQztBQUN2QyxTQUFNLENBQUMsaUJBQWlCLGlDQUFvQixDQUFDO0FBQzdDLFNBQU0sQ0FBQyxZQUFZLG9DQUFlLENBQUM7RUFDcEM7c0JBQ2M7QUFDYixpQkFBYztBQUNkLG9CQUFpQjtBQUNqQixlQUFZO0VBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ2JpQixDQUFPOzs7O3VDQUNKLENBQVk7Ozs7a0NBQ2YsQ0FBUzs7Ozt3Q0FDSCxDQUFlOzs7O3NDQUNqQixDQUFhOzs7O3FEQUNSLEVBQTZCOzs7OzJDQUNw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QU87O0FBRVA7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUN4TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW1CLFdBQVc7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FB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QUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBRztBQUNILHFCQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDNVNBLEtBQUcsT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFDO0FBQy9CLE9BQUksU0FBUyxHQUFHLG1CQUFPLENBQUMsRUFBYSxDQUFDLENBQUM7QUFDdkMsT0FBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU07RUFDOUI7O0FBRUQsVUFBUyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRTtBQUM1QixPQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDcEIsT0FBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxPQUFPLFVBQVUs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LENBQUM7QUFDekIsMkJBQU07a0JBQ1Q7Y0FDSjtBQUNELGlCQUFJLENBQUMsaUJBQWlCLEVBQUU7QUFDcEIsd0JBQU8sSUFBSSxLQUFLLDREQUEwRCxnQkFBZ0IsQ0FBRyxDQUFDO2NBQ2pHO1VBQ0o7TUFDSjtBQUNELGdCQUFXLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07QUFDbkMsZUFBVSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNO0VBQ3JDLENBQUM7O0FBRUYsYUFBWSxDQUFDLFlBQVksR0FBRztBQUN4QixVQUFLLEVBQUUsbUJBQU0sWUFBWTtFQUM1QixDQUFDOztzQkFFYSxZQUFZIiwiZmlsZSI6InJlYWN0LWJvb3RzdHJhcC10YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCIsIFwicmVhY3QtZG9tXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlJlYWN0Qm9vdHN0cmFwVGFibGVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUmVhY3RCb290c3RyYXBUYWJsZVwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdLCByb290W1wiUmVhY3RET01cIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAwMmI3Y2E5MDA5MGIxNGNmM2Y0ZFxuICoqLyIsImltcG9ydCBCb290c3RyYXBUYWJsZSBmcm9tICcuL0Jvb3RzdHJhcFRhYmxlJztcbmltcG9ydCBUYWJsZUhlYWRlckNvbHVtbiBmcm9tICcuL1RhYmxlSGVhZGVyQ29sdW1uJztcbmltcG9ydCB7VGFibGVEYXRhU2V0fSBmcm9tICcuL3N0b3JlL1RhYmxlRGF0YVN0b3JlJztcblxuaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpe1xuICB3aW5kb3cuQm9vdHN0cmFwVGFibGUgPSBCb290c3RyYXBUYWJsZTtcbiAgd2luZG93LlRhYmxlSGVhZGVyQ29sdW1uID0gVGFibGVIZWFkZXJDb2x1bW47XG4gIHdpbmRvdy5UYWJsZURhdGFTZXQgPSBUYWJsZURhdGFTZXQ7XG59XG5leHBvcnQgZGVmYXVsdCB7XG4gIEJvb3RzdHJhcFRhYmxlLFxuICBUYWJsZUhlYWRlckNvbHVtbixcbiAgVGFibGVEYXRhU2V0XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzU2V0IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4vQ29uc3QnO1xuaW1wb3J0IFRhYmxlSGVhZGVyIGZyb20gJy4vVGFibGVIZWFkZXInO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tICcuL1RhYmxlQm9keSc7XG5pbXBvcnQgUGFnaW5hdGlvbkxpc3QgZnJvbSAnLi9wYWdpbmF0aW9uL1BhZ2luYXRpb25MaXN0JztcbmltcG9ydCBUb29sQmFyIGZyb20gJy4vdG9vbGJhci9Ub29sQmFyJztcbmltcG9ydCBUYWJsZUZpbHRlciBmcm9tICcuL1RhYmxlRmlsdGVyJztcbmltcG9ydCB7VGFibGVEYXRhU3RvcmV9IGZyb20gJy4vc3RvcmUvVGFibGVEYXRhU3RvcmUnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJztcbmltcG9ydCBleHBvcnRDU1YgZnJvbSAnLi9jc3ZfZXhwb3J0X3V0aWwnO1xuaW1wb3J0IHtGaWx0ZXJ9IGZyb20gJy4vRmlsdGVyJztcblxuY2xhc3MgQm9vdHN0cmFwVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaXNJRSA9IGZhbHNlO1xuICAgIHRoaXMuX2F0dGFjaENlbGxFZGl0RnVuYygpO1xuICAgIGlmICh0eXBlb2YgJ3dpbmRvdycgIT09IHVuZGVmaW5lZCAmJiBkb2N1bWVudCkge1xuICAgICAgdGhpcy5pc0lFID0gZG9jdW1lbnQuZG9jdW1lbnRNb2RlO1xuICAgIH1cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpcy5wcm9wcy5kYXRhKSkge1xuICAgICAgdGhpcy5zdG9yZSA9IG5ldyBUYWJsZURhdGFTdG9yZSh0aGlzLnByb3BzLmRhdGEuZ2V0RGF0YSgpKTtcbiAgICAgIHRoaXMucHJvcHMuZGF0YS5jbGVhcigpO1xuICAgICAgdGhpcy5wcm9wcy5kYXRhLm9uKCdjaGFuZ2UnLCAoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLnN0b3JlLnNldERhdGEoZGF0YSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGRhdGE6IHRoaXMuZ2V0VGFibGVEYXRhKClcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgY29weSA9IHRoaXMucHJvcHMuZGF0YS5zbGljZSgpO1xuICAgICAgdGhpcy5zdG9yZSA9IG5ldyBUYWJsZURhdGFTdG9yZShjb3B5KTtcbiAgICB9XG5cbiAgICB0aGlzLmluaXRUYWJsZSh0aGlzLnByb3BzKTtcblxuICAgIGlmICh0aGlzLmZpbHRlcikge1xuICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICB0aGlzLmZpbHRlci5vbignb25GaWx0ZXJDaGFuZ2UnLCAoY3VycmVudEZpbHRlcikgPT4ge1xuICAgICAgICBzZWxmLmhhbmRsZUZpbHRlckRhdGEoY3VycmVudEZpbHRlcik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RSb3cgJiYgdGhpcy5wcm9wcy5zZWxlY3RSb3cuc2VsZWN0ZWQpIHtcbiAgICAgIGxldCBjb3B5ID0gdGhpcy5wcm9wcy5zZWxlY3RSb3cuc2VsZWN0ZWQuc2xpY2UoKTtcbiAgICAgIHRoaXMuc3RvcmUuc2V0U2VsZWN0ZWRSb3dLZXkoY29weSk7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGE6IHRoaXMuZ2V0VGFibGVEYXRhKCksXG4gICAgICBjdXJyUGFnZTogdGhpcy5wcm9wcy5vcHRpb25zLnBhZ2UgfHwgMSxcbiAgICAgIHNpemVQZXJQYWdlOiB0aGlzLnByb3BzLm9wdGlvbnMuc2l6ZVBlclBhZ2UgfHwgQ29uc3QuU0laRV9QRVJfUEFHRV9MSVNUWzBdLFxuICAgICAgc2VsZWN0ZWRSb3dLZXlzOiB0aGlzLnN0b3JlLmdldFNlbGVjdGVkUm93S2V5cygpXG4gICAgfTtcbiAgfVxuXG4gIGluaXRUYWJsZShwcm9wcyl7XG4gICAgbGV0IHtrZXlGaWVsZH0gPSBwcm9wcztcblxuICAgIGNvbnN0IGlzS2V5RmllbGREZWZpbmVkID0gdHlwZW9mIGtleUZpZWxkID09PSAnc3RyaW5nJyAmJiBrZXlGaWVsZC5sZW5ndGg7XG4gICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChwcm9wcy5jaGlsZHJlbiwgY29sdW1uPT4ge1xuICAgICAgaWYgKGNvbHVtbi5wcm9wcy5pc0tleSkge1xuICAgICAgICBpZiAoa2V5RmllbGQpIHtcbiAgICAgICAgICB0aHJvdyBcIkVycm9yLiBNdWx0aXBsZSBrZXkgY29sdW1uIGJlIGRldGVjdGVkIGluIFRhYmxlSGVhZGVyQ29sdW1uLlwiO1xuICAgICAgICB9XG4gICAgICAgIGtleUZpZWxkID0gY29sdW1uLnByb3BzLmRhdGFGaWVsZDtcbiAgICAgIH1cbiAgICAgIGlmIChjb2x1bW4ucHJvcHMuZmlsdGVyKSB7XG4gICAgICAgIC8vIGEgY29sdW1uIGNvbnRhaW5zIGEgZmlsdGVyXG4gICAgICAgIGlmICghdGhpcy5maWx0ZXIpIHtcbiAgICAgICAgICAvLyBmaXJzdCB0aW1lIGNyZWF0ZSB0aGUgZmlsdGVyIG9uIHRoZSBCb290c3RyYXBUYWJsZVxuICAgICAgICAgIHRoaXMuZmlsdGVyID0gbmV3IEZpbHRlcigpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHBhc3MgdGhlIGZpbHRlciB0byBjb2x1bW4gd2l0aCBmaWx0ZXJcbiAgICAgICAgY29sdW1uLnByb3BzLmZpbHRlci5lbWl0dGVyID0gdGhpcy5maWx0ZXI7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG5cbiAgICBsZXQgY29sSW5mb3MgPSB0aGlzLmdldENvbHVtbnNEZXNjcmlwdGlvbihwcm9wcykucmVkdWNlKCggcHJldiwgY3VyciApID0+IHtcbiAgICAgIHByZXZbY3Vyci5uYW1lXSA9IGN1cnI7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9LCB7fSk7XG5cbiAgICBpZiAoIWlzS2V5RmllbGREZWZpbmVkICYmICFrZXlGaWVsZClcbiAgICAgIHRocm93IGBFcnJvci4gTm8gYW55IGtleSBjb2x1bW4gZGVmaW5lZCBpbiBUYWJsZUhlYWRlckNvbHVtbi5cbiAgICAgICAgICAgIFVzZSAnaXNLZXk9e3RydWV9JyB0byBzcGVjaWZ5IGEgdW5pcXVlIGNvbHVtbiBhZnRlciB2ZXJzaW9uIDAuNS40LmA7XG5cbiAgICB0aGlzLnN0b3JlLnNldFByb3BzKHtcbiAgICAgIGlzUGFnaW5hdGlvbjogcHJvcHMucGFnaW5hdGlvbixcbiAgICAgIGtleUZpZWxkOiBrZXlGaWVsZCxcbiAgICAgIGNvbEluZm9zOiBjb2xJbmZvcyxcbiAgICAgIG11bHRpQ29sdW1uU2VhcmNoOiBwcm9wcy5tdWx0aUNvbHVtblNlYXJjaCxcbiAgICAgIHJlbW90ZTogdGhpcy5pc1JlbW90ZURhdGFTb3VyY2UoKVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0VGFibGVEYXRhKCkge1xuICAgICBsZXQgcmVzdWx0ID0gW107XG5cbiAgICAgaWYodGhpcy5wcm9wcy5vcHRpb25zLnNvcnROYW1lICYmIHRoaXMucHJvcHMub3B0aW9ucy5zb3J0T3JkZXIpXG4gICAgICAgdGhpcy5zdG9yZS5zb3J0KHRoaXMucHJvcHMub3B0aW9ucy5zb3J0T3JkZXIsIHRoaXMucHJvcHMub3B0aW9ucy5zb3J0TmFtZSk7XG5cbiAgICAgaWYgKHRoaXMucHJvcHMucGFnaW5hdGlvbikge1xuICAgICAgIGxldCBwYWdlLCBzaXplUGVyUGFnZTtcbiAgICAgICBpZiAodGhpcy5zdG9yZS5pc0NoYW5nZWRQYWdlKCkpIHtcbiAgICAgICAgc2l6ZVBlclBhZ2UgPSB0aGlzLnN0YXRlLnNpemVQZXJQYWdlO1xuICAgICAgICBwYWdlID0gdGhpcy5zdGF0ZS5jdXJyUGFnZTtcbiAgICAgICB9IGVsc2Uge1xuICAgICAgICAgc2l6ZVBlclBhZ2UgPSB0aGlzLnByb3BzLm9wdGlvbnMuc2l6ZVBlclBhZ2UgfHwgQ29uc3QuU0laRV9QRVJfUEFHRV9MSVNUWzBdO1xuICAgICAgICAgcGFnZSA9IHRoaXMucHJvcHMub3B0aW9ucy5wYWdlIHx8IDE7XG4gICAgICAgfVxuICAgICAgIHJlc3VsdCA9IHRoaXMuc3RvcmUucGFnZShwYWdlLCBzaXplUGVyUGFnZSkuZ2V0KCk7XG4gICAgIH0gZWxzZSB7XG4gICAgICAgcmVzdWx0ID0gdGhpcy5zdG9yZS5nZXQoKTtcbiAgICAgfVxuICAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0Q29sdW1uc0Rlc2NyaXB0aW9uKHsgY2hpbGRyZW4gfSkge1xuICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjb2x1bW4sIGkpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IGNvbHVtbi5wcm9wcy5kYXRhRmllbGQsXG4gICAgICAgIGFsaWduOiBjb2x1bW4ucHJvcHMuZGF0YUFsaWduLFxuICAgICAgICBzb3J0OiBjb2x1bW4ucHJvcHMuZGF0YVNvcnQsXG4gICAgICAgIGZvcm1hdDogY29sdW1uLnByb3BzLmRhdGFGb3JtYXQsXG4gICAgICAgIGZvcm1hdEV4dHJhRGF0YTogY29sdW1uLnByb3BzLmZvcm1hdEV4dHJhRGF0YSxcbiAgICAgICAgZmlsdGVyRm9ybWF0dGVkOiBjb2x1bW4ucHJvcHMuZmlsdGVyRm9ybWF0dGVkLFxuICAgICAgICBlZGl0YWJsZTogY29sdW1uLnByb3BzLmVkaXRhYmxlLFxuICAgICAgICBoaWRkZW46IGNvbHVtbi5wcm9wcy5oaWRkZW4sXG4gICAgICAgIHNlYXJjaGFibGU6IGNvbHVtbi5wcm9wcy5zZWFyY2hhYmxlLFxuICAgICAgICBjbGFzc05hbWU6IGNvbHVtbi5wcm9wcy5jb2x1bW5DbGFzc05hbWUsXG4gICAgICAgIHdpZHRoOiBjb2x1bW4ucHJvcHMud2lkdGgsXG4gICAgICAgIHRleHQ6IGNvbHVtbi5wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgc29ydEZ1bmM6IGNvbHVtbi5wcm9wcy5zb3J0RnVuYyxcbiAgICAgICAgaW5kZXg6IGlcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHRoaXMuaW5pdFRhYmxlKG5leHRQcm9wcyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobmV4dFByb3BzLmRhdGEpKSB7XG4gICAgICB0aGlzLnN0b3JlLnNldERhdGEobmV4dFByb3BzLmRhdGEuc2xpY2UoKSk7XG4gICAgICBsZXQgcGFnZSA9IG5leHRQcm9wcy5vcHRpb25zLnBhZ2UgfHwgdGhpcy5zdGF0ZS5jdXJyUGFnZTtcbiAgICAgIGxldCBzaXplUGVyUGFnZSA9IG5leHRQcm9wcy5vcHRpb25zLnNpemVQZXJQYWdlIHx8IHRoaXMuc3RhdGUuc2l6ZVBlclBhZ2U7XG5cbiAgICAgIC8vICMxMjVcbiAgICAgIGlmKCFuZXh0UHJvcHMub3B0aW9ucy5wYWdlICYmXG4gICAgICAgIHBhZ2UgPj0gTWF0aC5jZWlsKG5leHRQcm9wcy5kYXRhLmxlbmd0aCAvIHNpemVQZXJQYWdlKSl7XG4gICAgICAgIHBhZ2UgPSAxO1xuICAgICAgfVxuICAgICAgbGV0IHNvcnRJbmZvID0gdGhpcy5zdG9yZS5nZXRTb3J0SW5mbygpO1xuICAgICAgbGV0IHNvcnRGaWVsZCA9IG5leHRQcm9wcy5vcHRpb25zLnNvcnROYW1lIHx8IChzb3J0SW5mbyA/IHNvcnRJbmZvLnNvcnRGaWVsZCA6IHVuZGVmaW5lZCk7XG4gICAgICBsZXQgc29ydE9yZGVyID0gbmV4dFByb3BzLm9wdGlvbnMuc29ydE9yZGVyIHx8IChzb3J0SW5mbyA/IHNvcnRJbmZvLm9yZGVyIDogdW5kZWZpbmVkKTtcbiAgICAgIGlmKHNvcnRGaWVsZCAmJiBzb3J0T3JkZXIpIHRoaXMuc3RvcmUuc29ydChzb3J0T3JkZXIsIHNvcnRGaWVsZCk7XG4gICAgICBsZXQgZGF0YSA9IHRoaXMuc3RvcmUucGFnZShwYWdlLCBzaXplUGVyUGFnZSkuZ2V0KCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgY3VyclBhZ2U6IHBhZ2UsXG4gICAgICAgIHNpemVQZXJQYWdlOiBzaXplUGVyUGFnZVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChuZXh0UHJvcHMuc2VsZWN0Um93ICYmIG5leHRQcm9wcy5zZWxlY3RSb3cuc2VsZWN0ZWQpIHtcbiAgICAgIC8vc2V0IGRlZmF1bHQgc2VsZWN0IHJvd3MgdG8gc3RvcmUuXG4gICAgICBsZXQgY29weSA9IG5leHRQcm9wcy5zZWxlY3RSb3cuc2VsZWN0ZWQuc2xpY2UoKTtcbiAgICAgIHRoaXMuc3RvcmUuc2V0U2VsZWN0ZWRSb3dLZXkoY29weSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2VsZWN0ZWRSb3dLZXlzOiBjb3B5XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl9hZGp1c3RUYWJsZSgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9hZGp1c3RUYWJsZSk7XG4gICAgdGhpcy5yZWZzLmJvZHkucmVmcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsSGVhZGVyKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9hZGp1c3RUYWJsZSk7XG4gICAgdGhpcy5yZWZzLmJvZHkucmVmcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsSGVhZGVyKTtcbiAgICBpZiAodGhpcy5maWx0ZXIpIHtcbiAgICAgIHRoaXMuZmlsdGVyLnJlbW92ZUFsbExpc3RlbmVycyhcIm9uRmlsdGVyQ2hhbmdlXCIpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLl9hZGp1c3RUYWJsZSgpO1xuICAgIHRoaXMuX2F0dGFjaENlbGxFZGl0RnVuYygpO1xuICAgIGlmICh0aGlzLnByb3BzLm9wdGlvbnMuYWZ0ZXJUYWJsZUNvbXBsZXRlKVxuICAgICAgdGhpcy5wcm9wcy5vcHRpb25zLmFmdGVyVGFibGVDb21wbGV0ZSgpO1xuICB9XG5cbiAgX2F0dGFjaENlbGxFZGl0RnVuYygpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5jZWxsRWRpdCkge1xuICAgICAgdGhpcy5wcm9wcy5jZWxsRWRpdC5fX29uQ29tcGxldGVFZGl0X18gPSB0aGlzLmhhbmRsZUVkaXRDZWxsLmJpbmQodGhpcyk7XG4gICAgICBpZiAodGhpcy5wcm9wcy5jZWxsRWRpdC5tb2RlICE9PSBDb25zdC5DRUxMX0VESVRfTk9ORSlcbiAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RSb3cuY2xpY2tUb1NlbGVjdCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgaW4gdGhlIGN1cnJlbnQgY29uZmlndXJhdGlvbixcbiAgICogdGhlIGRhdGFncmlkIHNob3VsZCBsb2FkIGl0cyBkYXRhIHJlbW90ZWx5LlxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICBbcHJvcHNdIE9wdGlvbmFsLiBJZiBub3QgZ2l2ZW4sIHRoaXMucHJvcHMgd2lsbCBiZSB1c2VkXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBpc1JlbW90ZURhdGFTb3VyY2UocHJvcHMpIHtcbiAgICByZXR1cm4gKHByb3BzIHx8IHRoaXMucHJvcHMpLnJlbW90ZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgY2hpbGRyZW5zID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICB2YXIgc3R5bGUgPSB7XG4gICAgICBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0LFxuICAgICAgbWF4SGVpZ2h0OiB0aGlzLnByb3BzLm1heEhlaWdodFxuICAgIH07XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pKSB7XG4gICAgICBjaGlsZHJlbnMgPSBbdGhpcy5wcm9wcy5jaGlsZHJlbl07XG4gICAgfVxuICAgIHZhciBjb2x1bW5zID0gdGhpcy5nZXRDb2x1bW5zRGVzY3JpcHRpb24odGhpcy5wcm9wcyk7XG4gICAgdmFyIHNvcnRJbmZvID0gdGhpcy5zdG9yZS5nZXRTb3J0SW5mbygpO1xuICAgIHZhciBwYWdpbmF0aW9uID0gdGhpcy5yZW5kZXJQYWdpbmF0aW9uKCk7XG4gICAgdmFyIHRvb2xCYXIgPSB0aGlzLnJlbmRlclRvb2xCYXIoKTtcbiAgICB2YXIgdGFibGVGaWx0ZXIgPSB0aGlzLnJlbmRlclRhYmxlRmlsdGVyKGNvbHVtbnMpO1xuICAgIHZhciBpc1NlbGVjdEFsbCA9IHRoaXMuaXNTZWxlY3RBbGwoKTtcbiAgICBsZXQgc29ydEluZGljYXRvciA9IHRoaXMucHJvcHMub3B0aW9ucy5zb3J0SW5kaWNhdG9yO1xuICAgIGlmKHR5cGVvZiB0aGlzLnByb3BzLm9wdGlvbnMuc29ydEluZGljYXRvciA9PT0gJ3VuZGVmaW5lZCcpIHNvcnRJbmRpY2F0b3IgPSB0cnVlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWJzLXRhYmxlLWNvbnRhaW5lclwiPlxuICAgICAgICB7dG9vbEJhcn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1icy10YWJsZVwiIHJlZj1cInRhYmxlXCIgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZU1vdXNlRW50ZXIuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVNb3VzZUxlYXZlLmJpbmQodGhpcyl9PlxuICAgICAgICAgIDxUYWJsZUhlYWRlclxuICAgICAgICAgICAgcmVmPVwiaGVhZGVyXCJcbiAgICAgICAgICAgIHJvd1NlbGVjdFR5cGU9e3RoaXMucHJvcHMuc2VsZWN0Um93Lm1vZGV9XG4gICAgICAgICAgICBoaWRlU2VsZWN0Q29sdW1uPXt0aGlzLnByb3BzLnNlbGVjdFJvdy5oaWRlU2VsZWN0Q29sdW1ufVxuICAgICAgICAgICAgc29ydE5hbWU9e3NvcnRJbmZvID8gc29ydEluZm8uc29ydEZpZWxkIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgc29ydE9yZGVyPXtzb3J0SW5mbyA/IHNvcnRJbmZvLm9yZGVyIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgc29ydEluZGljYXRvcj17c29ydEluZGljYXRvcn1cbiAgICAgICAgICAgIG9uU29ydD17dGhpcy5oYW5kbGVTb3J0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICBvblNlbGVjdEFsbFJvdz17dGhpcy5oYW5kbGVTZWxlY3RBbGxSb3cuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIGJvcmRlcmVkPXt0aGlzLnByb3BzLmJvcmRlcmVkfVxuICAgICAgICAgICAgY29uZGVuc2VkPXt0aGlzLnByb3BzLmNvbmRlbnNlZH1cbiAgICAgICAgICAgIGlzRmlsdGVyZWQ9e3RoaXMuZmlsdGVyID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgaXNTZWxlY3RBbGw9e2lzU2VsZWN0QWxsfT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgPFRhYmxlQm9keVxuICAgICAgICAgICAgcmVmPVwiYm9keVwiXG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9XG4gICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgdHJDbGFzc05hbWU9e3RoaXMucHJvcHMudHJDbGFzc05hbWV9XG4gICAgICAgICAgICBzdHJpcGVkPXt0aGlzLnByb3BzLnN0cmlwZWR9XG4gICAgICAgICAgICBib3JkZXJlZD17dGhpcy5wcm9wcy5ib3JkZXJlZH1cbiAgICAgICAgICAgIGhvdmVyPXt0aGlzLnByb3BzLmhvdmVyfVxuICAgICAgICAgICAga2V5RmllbGQ9e3RoaXMuc3RvcmUuZ2V0S2V5RmllbGQoKX1cbiAgICAgICAgICAgIGNvbmRlbnNlZD17dGhpcy5wcm9wcy5jb25kZW5zZWR9XG4gICAgICAgICAgICBzZWxlY3RSb3c9e3RoaXMucHJvcHMuc2VsZWN0Um93fVxuICAgICAgICAgICAgY2VsbEVkaXQ9e3RoaXMucHJvcHMuY2VsbEVkaXR9XG4gICAgICAgICAgICBzZWxlY3RlZFJvd0tleXM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRSb3dLZXlzfVxuICAgICAgICAgICAgb25Sb3dDbGljaz17dGhpcy5oYW5kbGVSb3dDbGljay5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgb25Sb3dNb3VzZU92ZXI9e3RoaXMuaGFuZGxlUm93TW91c2VPdmVyLmJpbmQodGhpcyl9XG4gICAgICAgICAgICBvblJvd01vdXNlT3V0PXt0aGlzLmhhbmRsZVJvd01vdXNlT3V0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICBvblNlbGVjdFJvdz17dGhpcy5oYW5kbGVTZWxlY3RSb3cuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIG5vRGF0YVRleHQ9e3RoaXMucHJvcHMub3B0aW9ucy5ub0RhdGFUZXh0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGFibGVGaWx0ZXJ9XG4gICAgICAgIHtwYWdpbmF0aW9ufVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgaXNTZWxlY3RBbGwoKXtcbiAgICB2YXIgZGVmYXVsdFNlbGVjdFJvd0tleXMgPSB0aGlzLnN0b3JlLmdldFNlbGVjdGVkUm93S2V5cygpO1xuICAgIHZhciBhbGxSb3dLZXlzID0gdGhpcy5zdG9yZS5nZXRBbGxSb3drZXkoKTtcbiAgICBpZihkZWZhdWx0U2VsZWN0Um93S2V5cy5sZW5ndGggIT09IGFsbFJvd0tleXMubGVuZ3RoKXtcbiAgICAgIHJldHVybiBkZWZhdWx0U2VsZWN0Um93S2V5cy5sZW5ndGggPT09IDAgPyBmYWxzZSA6ICdpbmRldGVybWluYXRlJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgY2xlYW5TZWxlY3RlZCgpIHtcbiAgICB0aGlzLnN0b3JlLnNldFNlbGVjdGVkUm93S2V5KFtdKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkUm93S2V5czogW11cbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVNvcnQob3JkZXIsIHNvcnRGaWVsZCkge1xuICAgIGlmICh0aGlzLnByb3BzLm9wdGlvbnMub25Tb3J0Q2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9wdGlvbnMub25Tb3J0Q2hhbmdlKHNvcnRGaWVsZCwgb3JkZXIsIHRoaXMucHJvcHMpO1xuICAgIH1cblxuICAgIGxldCByZXN1bHQgPSB0aGlzLnN0b3JlLnNvcnQob3JkZXIsIHNvcnRGaWVsZCkuZ2V0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhOiByZXN1bHRcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVBhZ2luYXRpb25EYXRhKHBhZ2UsIHNpemVQZXJQYWdlKSB7XG4gICAgY29uc3Qge29uUGFnZUNoYW5nZX0gPSB0aGlzLnByb3BzLm9wdGlvbnM7XG4gICAgaWYgKG9uUGFnZUNoYW5nZSkge1xuICAgICAgb25QYWdlQ2hhbmdlKHBhZ2UsIHNpemVQZXJQYWdlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc1JlbW90ZURhdGFTb3VyY2UoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCByZXN1bHQgPSB0aGlzLnN0b3JlLnBhZ2UocGFnZSwgc2l6ZVBlclBhZ2UpLmdldCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF0YTogcmVzdWx0LFxuICAgICAgY3VyclBhZ2U6IHBhZ2UsXG4gICAgICBzaXplUGVyUGFnZVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlTW91c2VMZWF2ZSgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vcHRpb25zLm9uTW91c2VMZWF2ZSkge1xuICAgICAgdGhpcy5wcm9wcy5vcHRpb25zLm9uTW91c2VMZWF2ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU1vdXNlRW50ZXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub3B0aW9ucy5vbk1vdXNlRW50ZXIpIHtcbiAgICAgIHRoaXMucHJvcHMub3B0aW9ucy5vbk1vdXNlRW50ZXIoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVSb3dNb3VzZU91dChyb3cpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vcHRpb25zLm9uUm93TW91c2VPdXQpIHtcbiAgICAgIHRoaXMucHJvcHMub3B0aW9ucy5vblJvd01vdXNlT3V0KHJvdyk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUm93TW91c2VPdmVyKHJvdykge1xuICAgIGlmICh0aGlzLnByb3BzLm9wdGlvbnMub25Sb3dNb3VzZU92ZXIpIHtcbiAgICAgIHRoaXMucHJvcHMub3B0aW9ucy5vblJvd01vdXNlT3Zlcihyb3cpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVJvd0NsaWNrKHJvdykge1xuICAgIGlmICh0aGlzLnByb3BzLm9wdGlvbnMub25Sb3dDbGljaykge1xuICAgICAgdGhpcy5wcm9wcy5vcHRpb25zLm9uUm93Q2xpY2socm93KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTZWxlY3RBbGxSb3coZSkge1xuICAgIHZhciBpc1NlbGVjdGVkID0gZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQ7XG4gICAgbGV0IHNlbGVjdGVkUm93S2V5cyA9IFtdO1xuICAgIGxldCByZXN1bHQgPSB0cnVlO1xuICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdFJvdy5vblNlbGVjdEFsbCkge1xuICAgICAgcmVzdWx0ID0gdGhpcy5wcm9wcy5zZWxlY3RSb3cub25TZWxlY3RBbGwoaXNTZWxlY3RlZCxcbiAgICAgICAgaXNTZWxlY3RlZCA/IHRoaXMuc3RvcmUuZ2V0KCkgOiBbXSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICd1bmRlZmluZWQnIHx8IHJlc3VsdCAhPT0gZmFsc2UpIHtcbiAgICAgIGlmIChpc1NlbGVjdGVkKSB7XG4gICAgICAgIHNlbGVjdGVkUm93S2V5cyA9IHRoaXMuc3RvcmUuZ2V0QWxsUm93a2V5KCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RvcmUuc2V0U2VsZWN0ZWRSb3dLZXkoc2VsZWN0ZWRSb3dLZXlzKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZFJvd0tleXM6IHNlbGVjdGVkUm93S2V5c1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU2hvd09ubHlTZWxlY3RlZCgpIHtcbiAgICB0aGlzLnN0b3JlLmlnbm9yZU5vblNlbGVjdGVkKCk7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBpZiAodGhpcy5wcm9wcy5wYWdpbmF0aW9uKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLnN0b3JlLnBhZ2UoMSwgdGhpcy5zdGF0ZS5zaXplUGVyUGFnZSkuZ2V0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuc3RvcmUuZ2V0KCk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF0YTogcmVzdWx0LFxuICAgICAgY3VyclBhZ2U6IDEsXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVTZWxlY3RSb3cocm93LCBpc1NlbGVjdGVkKSB7XG4gICAgbGV0IGN1cnJTZWxlY3RlZCA9IHRoaXMuc3RvcmUuZ2V0U2VsZWN0ZWRSb3dLZXlzKCk7XG4gICAgbGV0IHJvd0tleSA9IHJvd1t0aGlzLnN0b3JlLmdldEtleUZpZWxkKCldO1xuICAgIGxldCByZXN1bHQgPSB0cnVlO1xuICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdFJvdy5vblNlbGVjdCkge1xuICAgICAgcmVzdWx0ID0gdGhpcy5wcm9wcy5zZWxlY3RSb3cub25TZWxlY3Qocm93LCBpc1NlbGVjdGVkKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ3VuZGVmaW5lZCcgfHwgcmVzdWx0ICE9PSBmYWxzZSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0Um93Lm1vZGUgPT09IENvbnN0LlJPV19TRUxFQ1RfU0lOR0xFKSB7XG4gICAgICAgIGN1cnJTZWxlY3RlZCA9IGlzU2VsZWN0ZWQgPyBbcm93S2V5XSA6IFtdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXNTZWxlY3RlZCkge1xuICAgICAgICAgIGN1cnJTZWxlY3RlZC5wdXNoKHJvd0tleSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3VyclNlbGVjdGVkID0gY3VyclNlbGVjdGVkLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gcm93S2V5ICE9PSBrZXk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zdG9yZS5zZXRTZWxlY3RlZFJvd0tleShjdXJyU2VsZWN0ZWQpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGVkUm93S2V5czogY3VyclNlbGVjdGVkXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVFZGl0Q2VsbChuZXdWYWwsIHJvd0luZGV4LCBjb2xJbmRleCkge1xuICAgIGxldCBmaWVsZE5hbWU7XG4gICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaCh0aGlzLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoY29sdW1uLCBpKSB7XG4gICAgICBpZiAoaSA9PSBjb2xJbmRleCkge1xuICAgICAgICBmaWVsZE5hbWUgPSBjb2x1bW4ucHJvcHMuZGF0YUZpZWxkO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5zdG9yZS5lZGl0KG5ld1ZhbCwgcm93SW5kZXgsIGZpZWxkTmFtZSkuZ2V0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhOiByZXN1bHRcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLnByb3BzLmNlbGxFZGl0LmFmdGVyU2F2ZUNlbGwpIHtcbiAgICAgIHRoaXMucHJvcHMuY2VsbEVkaXQuYWZ0ZXJTYXZlQ2VsbCh0aGlzLnN0YXRlLmRhdGFbcm93SW5kZXhdLCBmaWVsZE5hbWUsIG5ld1ZhbCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQWRkUm93QmVnaW4oKSB7XG4gICAgaWYgKHRoaXMucmVmcy5ib2R5KSB7XG4gICAgICAvLyB0aGlzLnJlZnMuYm9keS5jYW5jZWxFZGl0KCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQWRkUm93QXRCZWdpbihuZXdPYmopIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnN0b3JlLmFkZEF0QmVnaW4obmV3T2JqKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgdGhpcy5faGFuZGxlQWZ0ZXJBZGRpbmdSb3cobmV3T2JqKTtcbiAgfVxuXG4gIGhhbmRsZUFkZFJvdyhuZXdPYmopIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnN0b3JlLmFkZChuZXdPYmopO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICB0aGlzLl9oYW5kbGVBZnRlckFkZGluZ1JvdyhuZXdPYmopO1xuICB9XG5cbiAgZ2V0U2l6ZVBlclBhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuc2l6ZVBlclBhZ2U7XG4gIH1cblxuICBnZXRDdXJyZW50UGFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5jdXJyUGFnZTtcbiAgfVxuXG4gIGhhbmRsZURyb3BSb3cocm93S2V5cykge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBsZXQgZHJvcFJvd0tleXMgPSByb3dLZXlzP3Jvd0tleXM6dGhpcy5zdG9yZS5nZXRTZWxlY3RlZFJvd0tleXMoKTtcbiAgICAvL2FkZCBjb25maXJtIGJlZm9yZSB0aGUgZGVsZXRlIGFjdGlvbiBpZiB0aGF0IG9wdGlvbiBpcyBzZXQuXG4gICAgaWYgKGRyb3BSb3dLZXlzICYmIGRyb3BSb3dLZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9wdGlvbnMuaGFuZGxlQ29uZmlybURlbGV0ZVJvdyl7XG4gICAgICAgIHRoaXMucHJvcHMub3B0aW9ucy5oYW5kbGVDb25maXJtRGVsZXRlUm93KFxuICAgICAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0aGF0LmRlbGV0ZVJvdyhkcm9wUm93S2V5cyk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChjb25maXJtKCdBcmUgeW91IHN1cmUgd2FudCBkZWxldGU/JykpIHtcbiAgICAgICAgdGhpcy5kZWxldGVSb3coZHJvcFJvd0tleXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZVJvdyhkcm9wUm93S2V5cyl7XG5cbiAgICBsZXQgcmVzdWx0O1xuICAgIHRoaXMuc3RvcmUucmVtb3ZlKGRyb3BSb3dLZXlzKTsgIC8vcmVtb3ZlIHNlbGVjdGVkIFJvd1xuICAgIHRoaXMuc3RvcmUuc2V0U2VsZWN0ZWRSb3dLZXkoW10pOyAgLy9jbGVhciBzZWxlY3RlZCByb3cga2V5XG5cbiAgICBpZiAodGhpcy5wcm9wcy5wYWdpbmF0aW9uKSB7XG4gICAgICBjb25zdCB7IHNpemVQZXJQYWdlIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgbGV0IHsgY3VyclBhZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgICBsZXQgY3Vyckxhc3RQYWdlID0gTWF0aC5jZWlsKHRoaXMuc3RvcmUuZ2V0RGF0YU51bSgpIC8gc2l6ZVBlclBhZ2UpO1xuICAgICAgaWYgKGN1cnJQYWdlID4gY3Vyckxhc3RQYWdlKVxuICAgICAgICBjdXJyUGFnZSA9IGN1cnJMYXN0UGFnZTtcbiAgICAgIHJlc3VsdCA9IHRoaXMuc3RvcmUucGFnZShjdXJyUGFnZSwgc2l6ZVBlclBhZ2UpLmdldCgpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRhdGE6IHJlc3VsdCxcbiAgICAgICAgc2VsZWN0ZWRSb3dLZXlzOiB0aGlzLnN0b3JlLmdldFNlbGVjdGVkUm93S2V5cygpLFxuICAgICAgICBjdXJyUGFnZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuc3RvcmUuZ2V0KCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGF0YTogcmVzdWx0LFxuICAgICAgICBzZWxlY3RlZFJvd0tleXM6IHRoaXMuc3RvcmUuZ2V0U2VsZWN0ZWRSb3dLZXlzKClcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5vcHRpb25zLmFmdGVyRGVsZXRlUm93KSB7XG4gICAgICB0aGlzLnByb3BzLm9wdGlvbnMuYWZ0ZXJEZWxldGVSb3coZHJvcFJvd0tleXMpO1xuICAgIH1cblxuICB9XG5cbiAgaGFuZGxlRmlsdGVyRGF0YShmaWx0ZXJPYmopIHtcbiAgICB0aGlzLnN0b3JlLmZpbHRlcihmaWx0ZXJPYmopO1xuICAgIGxldCByZXN1bHQ7XG4gICAgaWYgKHRoaXMucHJvcHMucGFnaW5hdGlvbikge1xuICAgICAgY29uc3QgeyBzaXplUGVyUGFnZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIHJlc3VsdCA9IHRoaXMuc3RvcmUucGFnZSgxLCBzaXplUGVyUGFnZSkuZ2V0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuc3RvcmUuZ2V0KCk7XG4gICAgfVxuICAgIGlmKHRoaXMucHJvcHMub3B0aW9ucy5hZnRlckNvbHVtbkZpbHRlcilcbiAgICAgIHRoaXMucHJvcHMub3B0aW9ucy5hZnRlckNvbHVtbkZpbHRlcihmaWx0ZXJPYmosXG4gICAgICAgIHRoaXMuc3RvcmUuZ2V0RGF0YUlnbm9yaW5nUGFnaW5hdGlvbigpKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRhdGE6IHJlc3VsdCxcbiAgICAgIGN1cnJQYWdlOiAxXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVFeHBvcnRDU1YoKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuc3RvcmUuZ2V0RGF0YUlnbm9yaW5nUGFnaW5hdGlvbigpO1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdGhpcy5wcm9wcy5jaGlsZHJlbi5tYXAoZnVuY3Rpb24oY29sdW1uKSB7XG4gICAgICBpZiAoY29sdW1uLnByb3BzLmhpZGRlbiA9PT0gZmFsc2UpIHtcbiAgICAgICAga2V5cy5wdXNoKGNvbHVtbi5wcm9wcy5kYXRhRmllbGQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGV4cG9ydENTVihyZXN1bHQsIGtleXMsIHRoaXMucHJvcHMuY3N2RmlsZU5hbWUpO1xuICB9XG5cbiAgaGFuZGxlU2VhcmNoKHNlYXJjaFRleHQpIHtcbiAgICB0aGlzLnN0b3JlLnNlYXJjaChzZWFyY2hUZXh0KTtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGlmICh0aGlzLnByb3BzLnBhZ2luYXRpb24pIHtcbiAgICAgIGNvbnN0IHsgc2l6ZVBlclBhZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgICByZXN1bHQgPSB0aGlzLnN0b3JlLnBhZ2UoMSwgc2l6ZVBlclBhZ2UpLmdldCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSB0aGlzLnN0b3JlLmdldCgpO1xuICAgIH1cbiAgICBpZih0aGlzLnByb3BzLm9wdGlvbnMuYWZ0ZXJTZWFyY2gpXG4gICAgICB0aGlzLnByb3BzLm9wdGlvbnMuYWZ0ZXJTZWFyY2goc2VhcmNoVGV4dCwgdGhpcy5zdG9yZS5nZXREYXRhSWdub3JpbmdQYWdpbmF0aW9uKCkpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF0YTogcmVzdWx0LFxuICAgICAgY3VyclBhZ2U6IDFcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlclBhZ2luYXRpb24oKSB7XG4gICAgaWYgKHRoaXMucHJvcHMucGFnaW5hdGlvbikge1xuICAgICAgbGV0IGRhdGFTaXplO1xuICAgICAgaWYgKHRoaXMuaXNSZW1vdGVEYXRhU291cmNlKCkpIHtcbiAgICAgICAgZGF0YVNpemUgPSB0aGlzLnByb3BzLmZldGNoSW5mby5kYXRhVG90YWxTaXplO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YVNpemUgPSB0aGlzLnN0b3JlLmdldERhdGFOdW0oKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtYnMtdGFibGUtcGFnaW5hdGlvblwiPlxuICAgICAgICAgIDxQYWdpbmF0aW9uTGlzdFxuICAgICAgICAgICAgcmVmPVwicGFnaW5hdGlvblwiXG4gICAgICAgICAgICBjdXJyUGFnZT17IHRoaXMuc3RhdGUuY3VyclBhZ2UgfVxuICAgICAgICAgICAgY2hhbmdlUGFnZT17dGhpcy5oYW5kbGVQYWdpbmF0aW9uRGF0YS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgc2l6ZVBlclBhZ2U9eyB0aGlzLnN0YXRlLnNpemVQZXJQYWdlIH1cbiAgICAgICAgICAgIHNpemVQZXJQYWdlTGlzdD17dGhpcy5wcm9wcy5vcHRpb25zLnNpemVQZXJQYWdlTGlzdCB8fCBDb25zdC5TSVpFX1BFUl9QQUdFX0xJU1R9XG4gICAgICAgICAgICBwYWdpbmF0aW9uU2l6ZT17dGhpcy5wcm9wcy5vcHRpb25zLnBhZ2luYXRpb25TaXplIHx8IENvbnN0LlBBR0lOQVRJT05fU0laRX1cbiAgICAgICAgICAgIHJlbW90ZT17dGhpcy5pc1JlbW90ZURhdGFTb3VyY2UoKX1cbiAgICAgICAgICAgIGRhdGFTaXplPXtkYXRhU2l6ZX1cbiAgICAgICAgICAgIG9uU2l6ZVBlclBhZ2VMaXN0PXt0aGlzLnByb3BzLm9wdGlvbnMub25TaXplUGVyUGFnZUxpc3R9XG4gICAgICAgICAgICBwcmVQYWdlPXt0aGlzLnByb3BzLm9wdGlvbnMucHJlUGFnZSB8fCBDb25zdC5QUkVfUEFHRX1cbiAgICAgICAgICAgIG5leHRQYWdlPXt0aGlzLnByb3BzLm9wdGlvbnMubmV4dFBhZ2UgfHwgQ29uc3QuTkVYVF9QQUdFfVxuICAgICAgICAgICAgZmlyc3RQYWdlPXt0aGlzLnByb3BzLm9wdGlvbnMuZmlyc3RQYWdlIHx8IENvbnN0LkZJUlNUX1BBR0V9XG4gICAgICAgICAgICBsYXN0UGFnZT17dGhpcy5wcm9wcy5vcHRpb25zLmxhc3RQYWdlIHx8IENvbnN0LkxBU1RfUEFHRX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmVuZGVyVG9vbEJhcigpIHtcbiAgICBsZXQgZW5hYmxlU2hvd09ubHlTZWxlY3RlZCA9IHRoaXMucHJvcHMuc2VsZWN0Um93ICYmIHRoaXMucHJvcHMuc2VsZWN0Um93LnNob3dPbmx5U2VsZWN0ZWQ7XG4gICAgaWYgKGVuYWJsZVNob3dPbmx5U2VsZWN0ZWRcbiAgICAgICAgfHwgdGhpcy5wcm9wcy5pbnNlcnRSb3dcbiAgICAgICAgfHwgdGhpcy5wcm9wcy5kZWxldGVSb3dcbiAgICAgICAgfHwgdGhpcy5wcm9wcy5zZWFyY2hcbiAgICAgICAgfHwgdGhpcy5wcm9wcy5leHBvcnRDU1YpIHtcbiAgICAgIGxldCBjb2x1bW5zO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5wcm9wcy5jaGlsZHJlbikpIHtcbiAgICAgICAgY29sdW1ucyA9IHRoaXMucHJvcHMuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgICB2YXIgcHJvcHMgPSBjb2x1bW4ucHJvcHM7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IHByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgICAgZmllbGQ6IHByb3BzLmRhdGFGaWVsZCxcbiAgICAgICAgICAgIC8vd2hlbiB5b3Ugd2FudCBzYW1lIGF1dG8gZ2VuZXJhdGUgdmFsdWUgYW5kIG5vdCBhbGxvdyBlZGl0LCBleGFtcGxlIElEIGZpZWxkXG4gICAgICAgICAgICBhdXRvVmFsdWU6IHByb3BzLmF1dG9WYWx1ZSB8fCBmYWxzZSxcbiAgICAgICAgICAgIC8vZm9yIGNyZWF0ZSBlZGl0b3IsIG5vIHBhcmFtcyBmb3IgY29sdW1uLmVkaXRhYmxlKCkgaW5kaWNhdGUgdGhhdCBlZGl0b3IgZm9yIG5ldyByb3dcbiAgICAgICAgICAgIGVkaXRhYmxlOiBwcm9wcy5lZGl0YWJsZSAmJiAodHlwZW9mIHByb3BzLmVkaXRhYmxlID09PSBcImZ1bmN0aW9uXCIpID8gcHJvcHMuZWRpdGFibGUoKSA6IHByb3BzLmVkaXRhYmxlLFxuICAgICAgICAgICAgZm9ybWF0OiBwcm9wcy5kYXRhRm9ybWF0ID8gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgICAgICByZXR1cm4gcHJvcHMuZGF0YUZvcm1hdCh2YWx1ZSwgbnVsbCwgcHJvcHMuZm9ybWF0RXh0cmFEYXRhKS5yZXBsYWNlKC88Lio/Pi9nLCcnKTtcbiAgICAgICAgICAgIH0gOiBmYWxzZVxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29sdW1ucyA9IFt7XG4gICAgICAgICAgbmFtZTogdGhpcy5wcm9wcy5jaGlsZHJlbi5wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBmaWVsZDogdGhpcy5wcm9wcy5jaGlsZHJlbi5wcm9wcy5kYXRhRmllbGQsXG4gICAgICAgICAgZWRpdGFibGU6IHRoaXMucHJvcHMuY2hpbGRyZW4ucHJvcHMuZWRpdGFibGVcbiAgICAgICAgfV07XG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWJzLXRhYmxlLXRvb2wtYmFyXCI+XG4gICAgICAgICAgPFRvb2xCYXJcbiAgICAgICAgICAgIGNsZWFyU2VhcmNoPXt0aGlzLnByb3BzLm9wdGlvbnMuY2xlYXJTZWFyY2h9XG4gICAgICAgICAgICBlbmFibGVJbnNlcnQ9e3RoaXMucHJvcHMuaW5zZXJ0Um93fVxuICAgICAgICAgICAgZW5hYmxlRGVsZXRlPXt0aGlzLnByb3BzLmRlbGV0ZVJvd31cbiAgICAgICAgICAgIGVuYWJsZVNlYXJjaD17dGhpcy5wcm9wcy5zZWFyY2h9XG4gICAgICAgICAgICBlbmFibGVFeHBvcnRDU1Y9e3RoaXMucHJvcHMuZXhwb3J0Q1NWfVxuICAgICAgICAgICAgZW5hYmxlU2hvd09ubHlTZWxlY3RlZD17ZW5hYmxlU2hvd09ubHlTZWxlY3RlZH1cbiAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICBzZWFyY2hQbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5zZWFyY2hQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgIG9uQWRkUm93PXt0aGlzLmhhbmRsZUFkZFJvdy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgb25BZGRSb3dCZWdpbj17dGhpcy5oYW5kbGVBZGRSb3dCZWdpbi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgb25Ecm9wUm93PXt0aGlzLmhhbmRsZURyb3BSb3cuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIG9uU2VhcmNoPXt0aGlzLmhhbmRsZVNlYXJjaC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgb25FeHBvcnRDU1Y9e3RoaXMuaGFuZGxlRXhwb3J0Q1NWLmJpbmQodGhpcyl9XG4gICAgICAgICAgICBvblNob3dPbmx5U2VsZWN0ZWQ9e3RoaXMuaGFuZGxlU2hvd09ubHlTZWxlY3RlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICByZW5kZXJUYWJsZUZpbHRlcihjb2x1bW5zKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuY29sdW1uRmlsdGVyKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGFibGVGaWx0ZXIgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgICAgICAgIHJvd1NlbGVjdFR5cGU9e3RoaXMucHJvcHMuc2VsZWN0Um93Lm1vZGV9XG4gICAgICAgICAgICAgICAgICAgICBvbkZpbHRlcj17dGhpcy5oYW5kbGVGaWx0ZXJEYXRhLmJpbmQodGhpcyl9Lz5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIF9zY3JvbGxIZWFkZXIgPSAoZSkgPT4ge1xuICAgIHRoaXMucmVmcy5oZWFkZXIucmVmcy5jb250YWluZXIuc2Nyb2xsTGVmdCA9IGUuY3VycmVudFRhcmdldC5zY3JvbGxMZWZ0O1xuICB9XG5cbiAgX2FkanVzdFRhYmxlID0gKCkgPT4ge1xuICAgIHRoaXMuX2FkanVzdEhlYWRlcldpZHRoKCk7XG4gICAgdGhpcy5fYWRqdXN0SGVpZ2h0KCk7XG4gIH1cblxuICBfYWRqdXN0SGVhZGVyV2lkdGggPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gdGhpcy5yZWZzLmhlYWRlci5yZWZzLmhlYWRlcjtcbiAgICBjb25zdCBoZWFkZXJDb250YWluZXIgPSB0aGlzLnJlZnMuaGVhZGVyLnJlZnMuY29udGFpbmVyO1xuICAgIGNvbnN0IHRib2R5ID0gdGhpcy5yZWZzLmJvZHkucmVmcy50Ym9keTtcbiAgICBjb25zdCBmaXJzdFJvdyA9IHRib2R5LmNoaWxkTm9kZXNbMF07XG4gICAgY29uc3QgaXNTY3JvbGwgPSBoZWFkZXJDb250YWluZXIub2Zmc2V0V2lkdGggIT09IHRib2R5LnBhcmVudE5vZGUub2Zmc2V0V2lkdGg7XG4gICAgY29uc3Qgc2Nyb2xsQmFyV2lkdGggPSBpc1Njcm9sbD9VdGlsLmdldFNjcm9sbEJhcldpZHRoKCk6MDtcbiAgICBpZiAoZmlyc3RSb3cgJiYgdGhpcy5zdG9yZS5nZXREYXRhTnVtKCkpIHtcbiAgICAgIGNvbnN0IGNlbGxzID0gZmlyc3RSb3cuY2hpbGROb2RlcztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGNlbGxzW2ldO1xuICAgICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShjZWxsKTtcbiAgICAgICAgbGV0IHdpZHRoID0gcGFyc2VGbG9hdChjb21wdXRlZFN0eWxlLndpZHRoLnJlcGxhY2UoXCJweFwiLCBcIlwiKSk7XG4gICAgICAgIGlmICh0aGlzLmlzSUUpIHtcbiAgICAgICAgICBjb25zdCBwYWRkaW5nTGVmdFdpZHRoID0gcGFyc2VGbG9hdChjb21wdXRlZFN0eWxlLnBhZGRpbmdMZWZ0LnJlcGxhY2UoXCJweFwiLCBcIlwiKSk7XG4gICAgICAgICAgY29uc3QgcGFkZGluZ1JpZ2h0V2lkdGggPSBwYXJzZUZsb2F0KGNvbXB1dGVkU3R5bGUucGFkZGluZ1JpZ2h0LnJlcGxhY2UoXCJweFwiLCBcIlwiKSk7XG4gICAgICAgICAgY29uc3QgYm9yZGVyUmlnaHRXaWR0aCA9IHBhcnNlRmxvYXQoY29tcHV0ZWRTdHlsZS5ib3JkZXJSaWdodFdpZHRoLnJlcGxhY2UoXCJweFwiLCBcIlwiKSk7XG4gICAgICAgICAgY29uc3QgYm9yZGVyTGVmdFdpZHRoID0gcGFyc2VGbG9hdChjb21wdXRlZFN0eWxlLmJvcmRlckxlZnRXaWR0aC5yZXBsYWNlKFwicHhcIiwgXCJcIikpO1xuICAgICAgICAgIHdpZHRoID0gd2lkdGggKyBwYWRkaW5nTGVmdFdpZHRoICsgcGFkZGluZ1JpZ2h0V2lkdGggKyBib3JkZXJSaWdodFdpZHRoICsgYm9yZGVyTGVmdFdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxhc3RQYWRkaW5nID0gKGNlbGxzLmxlbmd0aCAtMSA9PSBpID8gc2Nyb2xsQmFyV2lkdGggOiAwKTtcbiAgICAgICAgaWYgKHdpZHRoIDw9IDApIHtcbiAgICAgICAgICB3aWR0aCA9IDEyMDtcbiAgICAgICAgICBjZWxsLndpZHRoID0gd2lkdGggKyBsYXN0UGFkZGluZyArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN1bHQgPSB3aWR0aCArIGxhc3RQYWRkaW5nICsgXCJweFwiO1xuICAgICAgICBoZWFkZXIuY2hpbGROb2Rlc1tpXS5zdHlsZS53aWR0aCA9IHJlc3VsdDtcbiAgICAgICAgaGVhZGVyLmNoaWxkTm9kZXNbaV0uc3R5bGUubWluV2lkdGggPSByZXN1bHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2FkanVzdEhlaWdodCA9ICgpID0+IHtcbiAgICBpZih0aGlzLnByb3BzLmhlaWdodC5pbmRleE9mKCclJykgPT09IC0xKSB7XG4gICAgICB0aGlzLnJlZnMuYm9keS5yZWZzLmNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPVxuICAgICAgICBwYXJzZUZsb2F0KHRoaXMucHJvcHMuaGVpZ2h0KSAtIHRoaXMucmVmcy5oZWFkZXIucmVmcy5jb250YWluZXIub2Zmc2V0SGVpZ2h0ICsgXCJweFwiO1xuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVBZnRlckFkZGluZ1JvdyhuZXdPYmopIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGlmICh0aGlzLnByb3BzLnBhZ2luYXRpb24pIHtcbiAgICAgIC8vaWYgcGFnaW5hdGlvbiBpcyBlbmFibGVkIGFuZCBpbnNlcnQgcm93IGJlIHRyaWdnZXIsIGNoYW5nZSB0byBsYXN0IHBhZ2VcbiAgICAgIGNvbnN0IHsgc2l6ZVBlclBhZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgICBjb25zdCBjdXJyTGFzdFBhZ2UgPSBNYXRoLmNlaWwodGhpcy5zdG9yZS5nZXREYXRhTnVtKCkgLyBzaXplUGVyUGFnZSk7XG4gICAgICByZXN1bHQgPSB0aGlzLnN0b3JlLnBhZ2UoY3Vyckxhc3RQYWdlLCBzaXplUGVyUGFnZSkuZ2V0KCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGF0YTogcmVzdWx0LFxuICAgICAgICBjdXJyUGFnZTogY3Vyckxhc3RQYWdlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuc3RvcmUuZ2V0KCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGF0YTogcmVzdWx0XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vcHRpb25zLmFmdGVySW5zZXJ0Um93KSB7XG4gICAgICB0aGlzLnByb3BzLm9wdGlvbnMuYWZ0ZXJJbnNlcnRSb3cobmV3T2JqKTtcbiAgICB9XG4gIH1cbn1cblxuQm9vdHN0cmFwVGFibGUucHJvcFR5cGVzID0ge1xuICBrZXlGaWVsZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgaGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBtYXhIZWlnaHQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGRhdGE6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1JlYWN0LlByb3BUeXBlcy5hcnJheSwgUmVhY3QuUHJvcFR5cGVzLm9iamVjdF0pLFxuICByZW1vdGU6IFJlYWN0LlByb3BUeXBlcy5ib29sLCAvLyByZW1vdGUgZGF0YSwgZGVmYXVsdCBpcyBmYWxzZVxuICBzdHJpcGVkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgYm9yZGVyZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBob3ZlcjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGNvbmRlbnNlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIHBhZ2luYXRpb246IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBzZWFyY2hQbGFjZWhvbGRlcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VsZWN0Um93OiBSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgIG1vZGU6IFJlYWN0LlByb3BUeXBlcy5vbmVPZihbXG4gICAgICBDb25zdC5ST1dfU0VMRUNUX05PTkUsXG4gICAgICBDb25zdC5ST1dfU0VMRUNUX1NJTkdMRSxcbiAgICAgIENvbnN0LlJPV19TRUxFQ1RfTVVMVElcbiAgICBdKSxcbiAgICBiZ0NvbG9yOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNlbGVjdGVkOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gICAgb25TZWxlY3Q6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2VsZWN0QWxsOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBjbGlja1RvU2VsZWN0OiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBoaWRlU2VsZWN0Q29sdW1uOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBjbGlja1RvU2VsZWN0QW5kRWRpdENlbGw6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIHNob3dPbmx5U2VsZWN0ZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sXG4gIH0pLFxuICBjZWxsRWRpdDogUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBtb2RlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGJsdXJUb1NhdmU6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGFmdGVyU2F2ZUNlbGw6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG4gIH0pLFxuICBpbnNlcnRSb3c6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBkZWxldGVSb3c6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBzZWFyY2g6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBjb2x1bW5GaWx0ZXI6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICB0ckNsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLmFueSxcbiAgb3B0aW9uczogUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjbGVhclNlYXJjaDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgc29ydE5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgc29ydE9yZGVyOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNvcnRJbmRpY2F0b3I6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGFmdGVyVGFibGVDb21wbGV0ZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgYWZ0ZXJEZWxldGVSb3c6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIGFmdGVySW5zZXJ0Um93OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBhZnRlclNlYXJjaDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgYWZ0ZXJDb2x1bW5GaWx0ZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uUm93Q2xpY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIHBhZ2U6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgc2l6ZVBlclBhZ2VMaXN0OiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gICAgc2l6ZVBlclBhZ2U6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgcGFnaW5hdGlvblNpemU6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgb25Tb3J0Q2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvblBhZ2VDaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2l6ZVBlclBhZ2VMaXN0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBub0RhdGFUZXh0OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGhhbmRsZUNvbmZpcm1EZWxldGVSb3c6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIHByZVBhZ2U6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgbmV4dFBhZ2U6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgZmlyc3RQYWdlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxhc3RQYWdlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG4gIH0pLFxuICBmZXRjaEluZm86IFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4gICAgZGF0YVRvdGFsU2l6ZTogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgfSksXG4gIGV4cG9ydENTVjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGNzdkZpbGVOYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG59O1xuQm9vdHN0cmFwVGFibGUuZGVmYXVsdFByb3BzID0ge1xuICBoZWlnaHQ6IFwiMTAwJVwiLFxuICBtYXhIZWlnaHQ6IHVuZGVmaW5lZCxcbiAgc3RyaXBlZDogZmFsc2UsXG4gIGJvcmRlcmVkOiB0cnVlLFxuICBob3ZlcjogZmFsc2UsXG4gIGNvbmRlbnNlZDogZmFsc2UsXG4gIHBhZ2luYXRpb246IGZhbHNlLFxuICBzZWFyY2hQbGFjZWhvbGRlcjogdW5kZWZpbmVkLFxuICBzZWxlY3RSb3c6IHtcbiAgICBtb2RlOiBDb25zdC5ST1dfU0VMRUNUX05PTkUsXG4gICAgYmdDb2xvcjogQ29uc3QuUk9XX1NFTEVDVF9CR19DT0xPUixcbiAgICBzZWxlY3RlZDogW10sXG4gICAgb25TZWxlY3Q6IHVuZGVmaW5lZCxcbiAgICBvblNlbGVjdEFsbDogdW5kZWZpbmVkLFxuICAgIGNsaWNrVG9TZWxlY3Q6IGZhbHNlLFxuICAgIGhpZGVTZWxlY3RDb2x1bW46IGZhbHNlLFxuICAgIGNsaWNrVG9TZWxlY3RBbmRFZGl0Q2VsbDogZmFsc2UsXG4gICAgc2hvd09ubHlTZWxlY3RlZDogZmFsc2VcbiAgfSxcbiAgY2VsbEVkaXQ6IHtcbiAgICBtb2RlOiBDb25zdC5DRUxMX0VESVRfTk9ORSxcbiAgICBibHVyVG9TYXZlOiBmYWxzZSxcbiAgICBhZnRlclNhdmVDZWxsOiB1bmRlZmluZWRcbiAgfSxcbiAgaW5zZXJ0Um93OiBmYWxzZSxcbiAgZGVsZXRlUm93OiBmYWxzZSxcbiAgc2VhcmNoOiBmYWxzZSxcbiAgbXVsdGlDb2x1bW5TZWFyY2g6IGZhbHNlLFxuICBjb2x1bW5GaWx0ZXI6IGZhbHNlLFxuICB0ckNsYXNzTmFtZTogJycsXG4gIG9wdGlvbnM6IHtcbiAgICBjbGVhclNlYXJjaDogZmFsc2UsXG4gICAgc29ydE5hbWU6IHVuZGVmaW5lZCxcbiAgICBzb3J0T3JkZXI6IHVuZGVmaW5lZCxcbiAgICBzb3J0SW5kaWNhdG9yOiB0cnVlLFxuICAgIGFmdGVyVGFibGVDb21wbGV0ZTogdW5kZWZpbmVkLFxuICAgIGFmdGVyRGVsZXRlUm93OiB1bmRlZmluZWQsXG4gICAgYWZ0ZXJJbnNlcnRSb3c6IHVuZGVmaW5lZCxcbiAgICBhZnRlclNlYXJjaDogdW5kZWZpbmVkLFxuICAgIGFmdGVyQ29sdW1uRmlsdGVyOiB1bmRlZmluZWQsXG4gICAgb25Sb3dDbGljazogdW5kZWZpbmVkLFxuICAgIG9uTW91c2VMZWF2ZTogdW5kZWZpbmVkLFxuICAgIG9uTW91c2VFbnRlcjogdW5kZWZpbmVkLFxuICAgIG9uUm93TW91c2VPdXQ6IHVuZGVmaW5lZCxcbiAgICBvblJvd01vdXNlT3ZlcjogdW5kZWZpbmVkLFxuICAgIHBhZ2U6IHVuZGVmaW5lZCxcbiAgICBzaXplUGVyUGFnZUxpc3Q6IENvbnN0LlNJWkVfUEVSX1BBR0VfTElTVCxcbiAgICBzaXplUGVyUGFnZTogdW5kZWZpbmVkLFxuICAgIHBhZ2luYXRpb25TaXplOiBDb25zdC5QQUdJTkFUSU9OX1NJWkUsXG4gICAgb25TaXplUGVyUGFnZUxpc3Q6IHVuZGVmaW5lZCxcbiAgICBub0RhdGFUZXh0OiB1bmRlZmluZWQsXG4gICAgaGFuZGxlQ29uZmlybURlbGV0ZVJvdzogdW5kZWZpbmVkLFxuICAgIHByZVBhZ2U6IENvbnN0LlBSRV9QQUdFLFxuICAgIG5leHRQYWdlOiBDb25zdC5ORVhUX1BBR0UsXG4gICAgZmlyc3RQYWdlOiBDb25zdC5GSVJTVF9QQUdFLFxuICAgIGxhc3RQYWdlOiBDb25zdC5MQVNUX1BBR0VcbiAgfSxcbiAgZmV0Y2hJbmZvOiB7XG4gICAgZGF0YVRvdGFsU2l6ZTogMCxcbiAgfSxcbiAgZXhwb3J0Q1NWOiBmYWxzZSxcbiAgY3N2RmlsZU5hbWU6IHVuZGVmaW5lZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9vdHN0cmFwVGFibGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9Cb290c3RyYXBUYWJsZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9XG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jbGFzc25hbWVzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQge1xuICBTT1JUX0RFU0M6IFwiZGVzY1wiLFxuICBTT1JUX0FTQzogXCJhc2NcIixcbiAgU0laRV9QRVJfUEFHRTogMTAsXG4gIE5FWFRfUEFHRTogXCI+XCIsXG4gIExBU1RfUEFHRTogXCI+PlwiLFxuICBQUkVfUEFHRTogXCI8XCIsXG4gIEZJUlNUX1BBR0U6IFwiPDxcIixcbiAgUk9XX1NFTEVDVF9CR19DT0xPUjogXCJcIixcbiAgUk9XX1NFTEVDVF9OT05FOiBcIm5vbmVcIixcbiAgUk9XX1NFTEVDVF9TSU5HTEU6IFwicmFkaW9cIixcbiAgUk9XX1NFTEVDVF9NVUxUSTogXCJjaGVja2JveFwiLFxuICBDRUxMX0VESVRfTk9ORTogXCJub25lXCIsXG4gIENFTExfRURJVF9DTElDSzogXCJjbGlja1wiLFxuICBDRUxMX0VESVRfREJDTElDSzogXCJkYmNsaWNrXCIsXG4gIFNJWkVfUEVSX1BBR0VfTElTVDogWzEwLCAyNSwgMzAsIDUwXSxcbiAgUEFHSU5BVElPTl9TSVpFOiA1LFxuICBOT19EQVRBX1RFWFQ6IFwiVGhlcmUgaXMgbm8gZGF0YSB0byBkaXNwbGF5XCIsXG4gIFNIT1dfT05MWV9TRUxFQ1Q6IFwiU2hvdyBTZWxlY3RlZCBPbmx5XCIsXG4gIFNIT1dfQUxMOiBcIlNob3cgQWxsXCIsXG4gIEZJTFRFUl9ERUxBWTogNTAwLFxuICBGSUxURVJfVFlQRToge1xuICAgIFRFWFQ6IFwiVGV4dEZpbHRlclwiLFxuICAgIFJFR0VYOiBcIlJlZ2V4RmlsdGVyXCIsXG4gICAgU0VMRUNUOiBcIlNlbGVjdEZpbHRlclwiLFxuICAgIE5VTUJFUjogXCJOdW1iZXJGaWx0ZXJcIixcbiAgICBEQVRFOiBcIkRhdGVGaWx0ZXJcIixcbiAgICBDVVNUT006IFwiQ3VzdG9tRmlsdGVyXCJcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvQ29uc3QuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi9Db25zdCc7XG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IGNsYXNzU2V0IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFNlbGVjdFJvd0hlYWRlckNvbHVtbiBmcm9tICcuL1NlbGVjdFJvd0hlYWRlckNvbHVtbic7XG5cbmNsYXNzIENoZWNrYm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb21wb25lbnREaWRNb3VudCgpIHsgdGhpcy51cGRhdGUodGhpcy5wcm9wcy5jaGVja2VkKTsgfVxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7IHRoaXMudXBkYXRlKHByb3BzLmNoZWNrZWQpOyB9XG4gIHVwZGF0ZShjaGVja2VkKSB7XG4gICAgUmVhY3RET00uZmluZERPTU5vZGUodGhpcykuaW5kZXRlcm1pbmF0ZSA9IGNoZWNrZWQgPT09ICdpbmRldGVybWluYXRlJztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGlucHV0IGNsYXNzTmFtZT0ncmVhY3QtYnMtc2VsZWN0LWFsbCcgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17dGhpcy5wcm9wcy5jaGVja2VkfSBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoYW5nZX0gLz5cbiAgfVxufVxuXG5jbGFzcyBUYWJsZUhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHZhciBjb250YWluZXJDbGFzc2VzID0gY2xhc3NTZXQoXCJyZWFjdC1icy1jb250YWluZXItaGVhZGVyXCIsXG4gICAgICBcInRhYmxlLWhlYWRlci13cmFwcGVyXCIpO1xuICAgIHZhciB0YWJsZUNsYXNzZXMgPSBjbGFzc1NldChcInRhYmxlXCIsIFwidGFibGUtaG92ZXJcIiwge1xuICAgICAgICBcInRhYmxlLWJvcmRlcmVkXCI6IHRoaXMucHJvcHMuYm9yZGVyZWQsXG4gICAgICAgIFwidGFibGUtY29uZGVuc2VkXCI6IHRoaXMucHJvcHMuY29uZGVuc2VkXG4gICAgfSk7XG4gICAgdmFyIHNlbGVjdFJvd0hlYWRlckNvbCA9IHRoaXMucHJvcHMuaGlkZVNlbGVjdENvbHVtbj9udWxsOnRoaXMucmVuZGVyU2VsZWN0Um93SGVhZGVyKCk7XG4gICAgdGhpcy5fYXR0YWNoQ2xlYXJTb3J0Q2FyZXRGdW5jKCk7XG5cbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IHJlZj1cImNvbnRhaW5lclwiIGNsYXNzTmFtZT17Y29udGFpbmVyQ2xhc3Nlc30+XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e3RhYmxlQ2xhc3Nlc30+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyIHJlZj1cImhlYWRlclwiPlxuICAgICAgICAgICAgICB7c2VsZWN0Um93SGVhZGVyQ29sfVxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJlbmRlclNlbGVjdFJvd0hlYWRlcigpe1xuICAgIGlmKHRoaXMucHJvcHMucm93U2VsZWN0VHlwZSA9PSBDb25zdC5ST1dfU0VMRUNUX1NJTkdMRSkge1xuICAgICAgcmV0dXJuICg8U2VsZWN0Um93SGVhZGVyQ29sdW1uPjwvU2VsZWN0Um93SGVhZGVyQ29sdW1uPik7XG4gICAgfWVsc2UgaWYodGhpcy5wcm9wcy5yb3dTZWxlY3RUeXBlID09IENvbnN0LlJPV19TRUxFQ1RfTVVMVEkpe1xuICAgICAgcmV0dXJuICg8U2VsZWN0Um93SGVhZGVyQ29sdW1uPlxuICAgICAgICAgIDxDaGVja2JveCBvbkNoYW5nZT17dGhpcy5wcm9wcy5vblNlbGVjdEFsbFJvd30gY2hlY2tlZD17dGhpcy5wcm9wcy5pc1NlbGVjdEFsbH0vPlxuICAgICAgICA8L1NlbGVjdFJvd0hlYWRlckNvbHVtbj5cbiAgICAgICk7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBfYXR0YWNoQ2xlYXJTb3J0Q2FyZXRGdW5jKCl7XG4gICAgbGV0IHsgc29ydEluZGljYXRvciB9ID0gdGhpcy5wcm9wcztcbiAgICBpZihBcnJheS5pc0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pKXtcbiAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5wcm9wcy5jaGlsZHJlbi5sZW5ndGg7aSsrKXtcbiAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLnByb3BzLmNoaWxkcmVuW2ldLnByb3BzLmRhdGFGaWVsZDtcbiAgICAgICAgY29uc3Qgc29ydCA9IGZpZWxkID09PSB0aGlzLnByb3BzLnNvcnROYW1lID8gdGhpcy5wcm9wcy5zb3J0T3JkZXIgOiB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5baV0gPVxuICAgICAgICAgIFJlYWN0LmNsb25lRWxlbWVudCh0aGlzLnByb3BzLmNoaWxkcmVuW2ldLFxuICAgICAgICAgICAgeyBrZXk6IGksIG9uU29ydDogdGhpcy5wcm9wcy5vblNvcnQsIHNvcnQsIHNvcnRJbmRpY2F0b3IgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5wcm9wcy5jaGlsZHJlbi5wcm9wcy5kYXRhRmllbGQ7XG4gICAgICBjb25zdCBzb3J0ID0gZmllbGQgPT09IHRoaXMucHJvcHMuc29ydE5hbWUgPyB0aGlzLnByb3BzLnNvcnRPcmRlciA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW4gPVxuICAgICAgICBSZWFjdC5jbG9uZUVsZW1lbnQodGhpcy5wcm9wcy5jaGlsZHJlbiwge2tleTogMCwgb25Tb3J0OiB0aGlzLnByb3BzLm9uU29ydCwgc29ydCwgc29ydEluZGljYXRvcn0pO1xuICAgIH1cbiAgfVxufVxuVGFibGVIZWFkZXIucHJvcFR5cGVzID0ge1xuICByb3dTZWxlY3RUeXBlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBvblNvcnQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdEFsbFJvdzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIHNvcnROYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBzb3J0T3JkZXI6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGhpZGVTZWxlY3RDb2x1bW46IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBib3JkZXJlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGNvbmRlbnNlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGlzRmlsdGVyZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBpc1NlbGVjdEFsbDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mKFt0cnVlLCAnaW5kZXRlcm1pbmF0ZScsIGZhbHNlXSksXG4gIHNvcnRJbmRpY2F0b3I6IFJlYWN0LlByb3BUeXBlcy5ib29sXG59O1xuXG5UYWJsZUhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG59O1xuZXhwb3J0IGRlZmF1bHQgVGFibGVIZWFkZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9UYWJsZUhlYWRlci5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82X187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdERPTVwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1kb21cIixcImNvbW1vbmpzXCI6XCJyZWFjdC1kb21cIixcImFtZFwiOlwicmVhY3QtZG9tXCJ9XG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb25zdCBmcm9tICcuL0NvbnN0JztcbmltcG9ydCBjbGFzc1NldCBmcm9tICdjbGFzc25hbWVzJztcbmV4cG9ydCBkZWZhdWx0IHtcblxuICByZW5kZXJSZWFjdFNvcnRDYXJldChvcmRlcil7XG4gICAgdmFyIG9yZGVyQ2xhc3MgPSBjbGFzc1NldChcIm9yZGVyXCIsIHtcbiAgICAgICdkcm9wdXAnOiBvcmRlciA9PSBDb25zdC5TT1JUX0FTQ1xuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e29yZGVyQ2xhc3N9PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJldFwiIHN0eWxlPXt7bWFyZ2luOiAnMHB4IDVweCd9fT48L3NwYW4+XG4gICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfSxcblxuICBnZXRTY3JvbGxCYXJXaWR0aCgpe1xuICAgIHZhciBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbm5lci5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgIGlubmVyLnN0eWxlLmhlaWdodCA9IFwiMjAwcHhcIjtcblxuICAgIHZhciBvdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG91dGVyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIG91dGVyLnN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgb3V0ZXIuc3R5bGUubGVmdCA9IFwiMHB4XCI7XG4gICAgb3V0ZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgb3V0ZXIuc3R5bGUud2lkdGggPSBcIjIwMHB4XCI7XG4gICAgb3V0ZXIuc3R5bGUuaGVpZ2h0ID0gXCIxNTBweFwiO1xuICAgIG91dGVyLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICBvdXRlci5hcHBlbmRDaGlsZCAoaW5uZXIpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCAob3V0ZXIpO1xuICAgIHZhciB3MSA9IGlubmVyLm9mZnNldFdpZHRoO1xuICAgIG91dGVyLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gICAgdmFyIHcyID0gaW5uZXIub2Zmc2V0V2lkdGg7XG4gICAgaWYgKHcxID09IHcyKSB3MiA9IG91dGVyLmNsaWVudFdpZHRoO1xuXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCAob3V0ZXIpO1xuXG4gICAgcmV0dXJuICh3MSAtIHcyKTtcbiAgfVxuXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NTZXQgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi9Db25zdCc7XG5cbmNsYXNzIFNlbGVjdFJvd0hlYWRlckNvbHVtbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4oXG4gICAgICA8dGggc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInfX0+XG4gICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG4gICAgICA8L3RoPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RSb3dIZWFkZXJDb2x1bW47XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9TZWxlY3RSb3dIZWFkZXJDb2x1bW4uanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4vQ29uc3QnO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJy4vVGFibGVSb3cnO1xuaW1wb3J0IFRhYmxlQ29sdW1uIGZyb20gJy4vVGFibGVDb2x1bW4nO1xuaW1wb3J0IFRhYmxlRWRpdENvbHVtbiBmcm9tICcuL1RhYmxlRWRpdENvbHVtbic7XG5pbXBvcnQgY2xhc3NTZXQgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbnZhciBpc0Z1bj1mdW5jdGlvbihvYmope1xuICByZXR1cm4gb2JqJiYodHlwZW9mIG9iaj09PVwiZnVuY3Rpb25cIik7XG5cbn07XG5jbGFzcyBUYWJsZUJvZHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGN1cnJFZGl0Q2VsbDogbnVsbFxuICAgIH07XG4gICAgdGhpcy5lZGl0aW5nID0gZmFsc2U7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICB2YXIgdGFibGVDbGFzc2VzID0gY2xhc3NTZXQoXCJ0YWJsZVwiLCB7XG4gICAgICAndGFibGUtc3RyaXBlZCc6IHRoaXMucHJvcHMuc3RyaXBlZCxcbiAgICAgICd0YWJsZS1ib3JkZXJlZCc6IHRoaXMucHJvcHMuYm9yZGVyZWQsXG4gICAgICAndGFibGUtaG92ZXInOiB0aGlzLnByb3BzLmhvdmVyLFxuICAgICAgJ3RhYmxlLWNvbmRlbnNlZCc6IHRoaXMucHJvcHMuY29uZGVuc2VkXG4gICAgfSk7XG5cbiAgICB2YXIgaXNTZWxlY3RSb3dEZWZpbmVkID0gdGhpcy5faXNTZWxlY3RSb3dEZWZpbmVkKCk7XG4gICAgdmFyIHRhYmxlSGVhZGVyID0gdGhpcy5yZW5kZXJUYWJsZUhlYWRlcihpc1NlbGVjdFJvd0RlZmluZWQpO1xuXG4gICAgdmFyIHRhYmxlUm93cyA9IHRoaXMucHJvcHMuZGF0YS5tYXAoZnVuY3Rpb24oZGF0YSwgcil7XG4gICAgICB2YXIgdGFibGVDb2x1bW5zID0gdGhpcy5wcm9wcy5jb2x1bW5zLm1hcChmdW5jdGlvbihjb2x1bW4sIGkpe1xuICAgICAgICB2YXIgZmllbGRWYWx1ZSA9IGRhdGFbY29sdW1uLm5hbWVdO1xuICAgICAgICBpZih0aGlzLmVkaXRpbmcgJiZcbiAgICAgICAgICBjb2x1bW4ubmFtZSAhPT0gdGhpcy5wcm9wcy5rZXlGaWVsZCAmJiAvLyBLZXkgZmllbGQgY2FuJ3QgYmUgZWRpdFxuICAgICAgICAgIGNvbHVtbi5lZGl0YWJsZSAmJiAvLyBjb2x1bW4gaXMgZWRpdGFibGU/IGRlZmF1bHQgaXMgdHJ1ZSwgdXNlciBjYW4gc2V0IGl0IGZhbHNlXG4gICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyRWRpdENlbGwgIT0gbnVsbCAmJlxuICAgICAgICAgIHRoaXMuc3RhdGUuY3VyckVkaXRDZWxsLnJpZCA9PSByICYmXG4gICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyRWRpdENlbGwuY2lkID09IGkpe1xuICAgICAgICAgICAgdmFyIGZvcm1hdD1jb2x1bW4uZm9ybWF0P2Z1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICAgICAgcmV0dXJuIGNvbHVtbi5mb3JtYXQodmFsdWUsIGRhdGEsIGNvbHVtbi5mb3JtYXRFeHRyYURhdGEpLnJlcGxhY2UoLzwuKj8+L2csJycpO1xuICAgICAgICAgICAgfTpmYWxzZTtcblxuICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgPFRhYmxlRWRpdENvbHVtbiBjb21wbGV0ZUVkaXQ9e3RoaXMuaGFuZGxlQ29tcGxldGVFZGl0Q2VsbC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYWRkIGJ5IGJsdWVzcHJpbmcgZm9yIGNvbHVtbiBlZGl0b3IgY3VzdG9taXplXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdGFibGU9e2lzRnVuKGNvbHVtbi5lZGl0YWJsZSk/Y29sdW1uLmVkaXRhYmxlKGZpZWxkVmFsdWUsZGF0YSxyLGkpOmNvbHVtbi5lZGl0YWJsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9e2NvbHVtbi5mb3JtYXQ/Zm9ybWF0OmZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibHVyVG9TYXZlPXt0aGlzLnByb3BzLmNlbGxFZGl0LmJsdXJUb1NhdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93SW5kZXg9e3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sSW5kZXg9e2l9PlxuICAgICAgICAgICAgICAgIHtmaWVsZFZhbHVlfVxuICAgICAgICAgICAgICA8L1RhYmxlRWRpdENvbHVtbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgIC8vYWRkIGJ5IGJsdWVzcHJpbmcgZm9yIGNsYXNzTmFtZSBjdXN0b21pemVcbiAgICAgICAgICB2YXIgdGRDbGFzc05hbWU9aXNGdW4oY29sdW1uLmNsYXNzTmFtZSk/Y29sdW1uLmNsYXNzTmFtZShmaWVsZFZhbHVlLGRhdGEscixpKTpjb2x1bW4uY2xhc3NOYW1lO1xuXG4gICAgICAgICAgaWYodHlwZW9mIGNvbHVtbi5mb3JtYXQgIT09IFwidW5kZWZpbmVkXCIpe1xuICAgICAgICAgICAgdmFyIGZvcm1hdHRlZFZhbHVlID0gY29sdW1uLmZvcm1hdChmaWVsZFZhbHVlLCBkYXRhLCBjb2x1bW4uZm9ybWF0RXh0cmFEYXRhKTtcbiAgICAgICAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoZm9ybWF0dGVkVmFsdWUpKSB7XG4gICAgICAgICAgICAgIGZvcm1hdHRlZFZhbHVlID0gPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogZm9ybWF0dGVkVmFsdWV9fT48L2Rpdj47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgIDxUYWJsZUNvbHVtbiBkYXRhQWxpZ249e2NvbHVtbi5hbGlnbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGRDbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsRWRpdD17dGhpcy5wcm9wcy5jZWxsRWRpdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbj17Y29sdW1uLmhpZGRlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRWRpdD17dGhpcy5oYW5kbGVFZGl0Q2VsbC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e2NvbHVtbi53aWR0aH0+XG4gICAgICAgICAgICAgICAge2Zvcm1hdHRlZFZhbHVlfVxuICAgICAgICAgICAgICA8L1RhYmxlQ29sdW1uPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgPFRhYmxlQ29sdW1uIGRhdGFBbGlnbj17Y29sdW1uLmFsaWdufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0ZENsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxFZGl0PXt0aGlzLnByb3BzLmNlbGxFZGl0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuPXtjb2x1bW4uaGlkZGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FZGl0PXt0aGlzLmhhbmRsZUVkaXRDZWxsLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17Y29sdW1uLndpZHRofT5cbiAgICAgICAgICAgICAgICB7ZmllbGRWYWx1ZX1cbiAgICAgICAgICAgICAgPC9UYWJsZUNvbHVtbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMpO1xuICAgICAgdmFyIHNlbGVjdGVkID0gdGhpcy5wcm9wcy5zZWxlY3RlZFJvd0tleXMuaW5kZXhPZihkYXRhW3RoaXMucHJvcHMua2V5RmllbGRdKSAhPSAtMTtcbiAgICAgIHZhciBzZWxlY3RSb3dDb2x1bW4gPSBpc1NlbGVjdFJvd0RlZmluZWQgJiYgIXRoaXMucHJvcHMuc2VsZWN0Um93LmhpZGVTZWxlY3RDb2x1bW4/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclNlbGVjdFJvd0NvbHVtbihzZWxlY3RlZCk6bnVsbDtcbiAgICAgIC8vYWRkIGJ5IGJsdWVzcHJpbmcgZm9yIGNsYXNzTmFtZSBjdXN0b21pemVcbiAgICAgIHZhciB0ckNsYXNzTmFtZT1pc0Z1bih0aGlzLnByb3BzLnRyQ2xhc3NOYW1lKT90aGlzLnByb3BzLnRyQ2xhc3NOYW1lKGRhdGEscik6dGhpcy5wcm9wcy50ckNsYXNzTmFtZTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUYWJsZVJvdyBpc1NlbGVjdGVkPXtzZWxlY3RlZH0ga2V5PXtyfSBjbGFzc05hbWU9e3RyQ2xhc3NOYW1lfVxuICAgICAgICAgIHNlbGVjdFJvdz17aXNTZWxlY3RSb3dEZWZpbmVkP3RoaXMucHJvcHMuc2VsZWN0Um93OnVuZGVmaW5lZH1cbiAgICAgICAgICBlbmFibGVDZWxsRWRpdD17dGhpcy5wcm9wcy5jZWxsRWRpdC5tb2RlICE9PSBDb25zdC5DRUxMX0VESVRfTk9ORX1cbiAgICAgICAgICBvblJvd0NsaWNrPXt0aGlzLmhhbmRsZVJvd0NsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgICAgb25Sb3dNb3VzZU92ZXI9e3RoaXMuaGFuZGxlUm93TW91c2VPdmVyLmJpbmQodGhpcyl9XG4gICAgICAgICAgb25Sb3dNb3VzZU91dD17dGhpcy5oYW5kbGVSb3dNb3VzZU91dC5iaW5kKHRoaXMpfVxuICAgICAgICAgIG9uU2VsZWN0Um93PXt0aGlzLmhhbmRsZVNlbGVjdFJvdy5iaW5kKHRoaXMpfT5cbiAgICAgICAgICB7c2VsZWN0Um93Q29sdW1ufVxuICAgICAgICAgIHt0YWJsZUNvbHVtbnN9XG4gICAgICAgIDwvVGFibGVSb3c+XG4gICAgICApXG4gICAgfSwgdGhpcyk7XG5cbiAgICBpZih0YWJsZVJvd3MubGVuZ3RoID09PSAwKXtcbiAgICAgIHRhYmxlUm93cy5wdXNoKFxuICAgICAgPFRhYmxlUm93IGtleT1cIiMjdGFibGUtZW1wdHkjI1wiPlxuICAgICAgICA8dGQgY29sU3Bhbj17dGhpcy5wcm9wcy5jb2x1bW5zLmxlbmd0aCsoaXNTZWxlY3RSb3dEZWZpbmVkPzE6MCl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyZWFjdC1icy10YWJsZS1uby1kYXRhXCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5ub0RhdGFUZXh0fHxDb25zdC5OT19EQVRBX1RFWFR9XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L1RhYmxlUm93Pik7XG4gICAgfVxuXG4gICAgdGhpcy5lZGl0aW5nID0gZmFsc2U7XG5cbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IHJlZj1cImNvbnRhaW5lclwiIGNsYXNzTmFtZT0ncmVhY3QtYnMtY29udGFpbmVyLWJvZHknIHN0eWxlPXsgdGhpcy5wcm9wcy5zdHlsZSB9PlxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXt0YWJsZUNsYXNzZXN9PlxuICAgICAgICAgIHt0YWJsZUhlYWRlcn1cbiAgICAgICAgICA8dGJvZHkgcmVmPVwidGJvZHlcIj5cbiAgICAgICAgICAgIHt0YWJsZVJvd3N9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJlbmRlclRhYmxlSGVhZGVyKGlzU2VsZWN0Um93RGVmaW5lZCl7XG4gICAgdmFyIHNlbGVjdFJvd0hlYWRlciA9IG51bGw7XG5cbiAgICBpZihpc1NlbGVjdFJvd0RlZmluZWQpe1xuICAgICAgbGV0IHN0eWxlID0ge1xuICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgIG1pbldpZHRoOiAzMFxuICAgICAgfVxuICAgICAgc2VsZWN0Um93SGVhZGVyID0gdGhpcy5wcm9wcy5zZWxlY3RSb3cuaGlkZVNlbGVjdENvbHVtbj9udWxsOig8Y29sIHN0eWxlPXtzdHlsZX0ga2V5PXstMX0+PC9jb2w+KTtcbiAgICB9XG4gICAgdmFyIHRoZWFkZXIgPSB0aGlzLnByb3BzLmNvbHVtbnMubWFwKGZ1bmN0aW9uKGNvbHVtbiwgaSl7XG4gICAgICBsZXQgd2lkdGggPSBjb2x1bW4ud2lkdGggPT0gbnVsbD9jb2x1bW4ud2lkdGg6cGFyc2VJbnQoY29sdW1uLndpZHRoKTtcbiAgICAgIGxldCBzdHlsZT17XG4gICAgICAgIGRpc3BsYXk6IGNvbHVtbi5oaWRkZW4/XCJub25lXCI6bnVsbCxcbiAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICBtaW5XaWR0aDogd2lkdGhcbiAgICAgICAgLyoqIGFkZCBtaW4td2R0aCB0byBmaXggdXNlciBhc3NpZ24gY29sdW1uIHdpZHRoIG5vdCBlcSBvZmZzZXRXaWR0aCBpbiBsYXJnZSBjb2x1bW4gdGFibGUgKiovXG4gICAgICB9O1xuICAgICAgcmV0dXJuICg8Y29sIHN0eWxlPXtzdHlsZX0ga2V5PXtpfSBjbGFzc05hbWU9e2NvbHVtbi5jbGFzc05hbWV9PjwvY29sPik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4oXG4gICAgICA8Y29sZ3JvdXAgcmVmPVwiaGVhZGVyXCI+XG4gICAgICAgIHtzZWxlY3RSb3dIZWFkZXJ9e3RoZWFkZXJ9XG4gICAgICA8L2NvbGdyb3VwPlxuICAgIClcbiAgfVxuXG4gIGhhbmRsZVJvd01vdXNlT3V0KHJvd0luZGV4KXtcbiAgICBjb25zdCB0YXJnZXRSb3cgPSB0aGlzLnByb3BzLmRhdGFbcm93SW5kZXhdO1xuICAgIHRoaXMucHJvcHMub25Sb3dNb3VzZU91dCh0YXJnZXRSb3cpO1xuICB9XG5cbiAgaGFuZGxlUm93TW91c2VPdmVyKHJvd0luZGV4KXtcbiAgICBjb25zdCB0YXJnZXRSb3cgPSB0aGlzLnByb3BzLmRhdGFbcm93SW5kZXhdO1xuICAgIHRoaXMucHJvcHMub25Sb3dNb3VzZU92ZXIodGFyZ2V0Um93KTtcbiAgfVxuXG4gIGhhbmRsZVJvd0NsaWNrKHJvd0luZGV4KXtcbiAgICB2YXIga2V5LCBzZWxlY3RlZFJvdztcbiAgICB0aGlzLnByb3BzLmRhdGEuZm9yRWFjaChmdW5jdGlvbihyb3csIGkpe1xuICAgICAgaWYoaSA9PSByb3dJbmRleC0xKXtcbiAgICAgICAga2V5ID0gcm93W3RoaXMucHJvcHMua2V5RmllbGRdO1xuICAgICAgICBzZWxlY3RlZFJvdyA9IHJvdztcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgICB0aGlzLnByb3BzLm9uUm93Q2xpY2soc2VsZWN0ZWRSb3cpO1xuICB9XG5cbiAgaGFuZGxlU2VsZWN0Um93KHJvd0luZGV4LCBpc1NlbGVjdGVkKXtcbiAgICB2YXIga2V5LCBzZWxlY3RlZFJvdztcbiAgICB0aGlzLnByb3BzLmRhdGEuZm9yRWFjaChmdW5jdGlvbihyb3csIGkpe1xuICAgICAgaWYoaSA9PSByb3dJbmRleC0xKXtcbiAgICAgICAga2V5ID0gcm93W3RoaXMucHJvcHMua2V5RmllbGRdO1xuICAgICAgICBzZWxlY3RlZFJvdyA9IHJvdztcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICAgIHRoaXMucHJvcHMub25TZWxlY3RSb3coc2VsZWN0ZWRSb3csIGlzU2VsZWN0ZWQpO1xuICB9XG5cbiAgaGFuZGxlU2VsZWN0Um93Q29sdW1DaGFuZ2UoZSl7XG4gICAgaWYoIXRoaXMucHJvcHMuc2VsZWN0Um93LmNsaWNrVG9TZWxlY3QgfHwgIXRoaXMucHJvcHMuc2VsZWN0Um93LmNsaWNrVG9TZWxlY3RBbmRFZGl0Q2VsbCl7XG4gICAgICB0aGlzLmhhbmRsZVNlbGVjdFJvdyhcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yb3dJbmRleCsxLCBlLmN1cnJlbnRUYXJnZXQuY2hlY2tlZCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRWRpdENlbGwocm93SW5kZXgsIGNvbHVtbkluZGV4KXtcbiAgICB0aGlzLmVkaXRpbmcgPSB0cnVlO1xuICAgIGlmKHRoaXMuX2lzU2VsZWN0Um93RGVmaW5lZCgpKXtcbiAgICAgIGNvbHVtbkluZGV4LS07XG4gICAgICBpZih0aGlzLnByb3BzLnNlbGVjdFJvdy5oaWRlU2VsZWN0Q29sdW1uKVxuICAgICAgICBjb2x1bW5JbmRleCsrO1xuICAgIH1cbiAgICByb3dJbmRleC0tO1xuICAgIHZhciBzdGF0ZU9iaiA9IHtcbiAgICAgIGN1cnJFZGl0Q2VsbDoge1xuICAgICAgICByaWQ6IHJvd0luZGV4LFxuICAgICAgICBjaWQ6IGNvbHVtbkluZGV4XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmKHRoaXMucHJvcHMuc2VsZWN0Um93LmNsaWNrVG9TZWxlY3RBbmRFZGl0Q2VsbCl7XG4gICAgICB0aGlzLmhhbmRsZVNlbGVjdFJvdyhyb3dJbmRleCsxLCB0cnVlKTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZU9iaik7XG4gIH1cblxuICBjYW5jZWxFZGl0KCl7XG4gICAgdmFyIGN1cnJFZGl0Q2VsbD10aGlzLnN0YXRlLmN1cnJFZGl0Q2VsbDtcbiAgICBpZihjdXJyRWRpdENlbGwpe1xuICAgICAgdGhpcy5oYW5kbGVDb21wbGV0ZUVkaXRDZWxsKG51bGwsY3VyckVkaXRDZWxsLnJpZCxjdXJyRWRpdENlbGwuY2lkKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDb21wbGV0ZUVkaXRDZWxsKG5ld1ZhbCwgcm93SW5kZXgsIGNvbHVtbkluZGV4KXtcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyRWRpdENlbGw6IG51bGx9KTtcbiAgICBpZihudWxsICE9IG5ld1ZhbClcbiAgICAgIHRoaXMucHJvcHMuY2VsbEVkaXQuX19vbkNvbXBsZXRlRWRpdF9fKG5ld1ZhbCwgcm93SW5kZXgsIGNvbHVtbkluZGV4KTtcbiAgfVxuXG4gIHJlbmRlclNlbGVjdFJvd0NvbHVtbihzZWxlY3RlZCl7XG4gICAgaWYodGhpcy5wcm9wcy5zZWxlY3RSb3cubW9kZSA9PSBDb25zdC5ST1dfU0VMRUNUX1NJTkdMRSkge1xuICAgICAgcmV0dXJuICg8VGFibGVDb2x1bW4gZGF0YUFsaWduPVwiY2VudGVyXCI+PGlucHV0IHR5cGU9XCJyYWRpb1wiIGNoZWNrZWQ9e3NlbGVjdGVkfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWxlY3RSb3dDb2x1bUNoYW5nZS5iaW5kKHRoaXMpfS8+PC9UYWJsZUNvbHVtbj4pO1xuICAgIH1lbHNlIHtcbiAgICAgIHJldHVybiAoPFRhYmxlQ29sdW1uIGRhdGFBbGlnbj1cImNlbnRlclwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtzZWxlY3RlZH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0Um93Q29sdW1DaGFuZ2UuYmluZCh0aGlzKX0vPjwvVGFibGVDb2x1bW4+KTtcbiAgICB9XG4gIH1cblxuICBfaXNTZWxlY3RSb3dEZWZpbmVkKCl7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuc2VsZWN0Um93Lm1vZGUgPT09IENvbnN0LlJPV19TRUxFQ1RfU0lOR0xFIHx8XG4gICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RSb3cubW9kZSA9PT0gQ29uc3QuUk9XX1NFTEVDVF9NVUxUSTtcbiAgfVxufVxuVGFibGVCb2R5LnByb3BUeXBlcyA9IHtcbiAgLy8gaGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBkYXRhOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gIGNvbHVtbnM6IFJlYWN0LlByb3BUeXBlcy5hcnJheSxcbiAgc3RyaXBlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGJvcmRlcmVkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgaG92ZXI6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBjb25kZW5zZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBrZXlGaWVsZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VsZWN0ZWRSb3dLZXlzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gIG9uUm93Q2xpY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdFJvdzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIG5vRGF0YVRleHQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG59O1xuZXhwb3J0IGRlZmF1bHQgVGFibGVCb2R5O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvVGFibGVCb2R5LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb25zdCBmcm9tICcuL0NvbnN0JztcblxuY2xhc3MgVGFibGVSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5jbGlja051bSA9IDA7XG4gIH1cblxuICByb3dDbGljayhlKXtcbiAgICBpZihlLnRhcmdldC50YWdOYW1lICE9PSBcIklOUFVUXCIgJiZcbiAgICAgICAgZS50YXJnZXQudGFnTmFtZSAhPT0gXCJTRUxFQ1RcIiAmJlxuICAgICAgICBlLnRhcmdldC50YWdOYW1lICE9PSBcIlRFWFRBUkVBXCIpIHtcbiAgICAgIGNvbnN0IHJvd0luZGV4ID0gZS5jdXJyZW50VGFyZ2V0LnJvd0luZGV4ICsgMTtcbiAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdFJvdykge1xuICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdFJvdy5jbGlja1RvU2VsZWN0KSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0Um93KHJvd0luZGV4LCAhdGhpcy5wcm9wcy5pc1NlbGVjdGVkKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuc2VsZWN0Um93LmNsaWNrVG9TZWxlY3RBbmRFZGl0Q2VsbCkge1xuICAgICAgICAgICAgdGhpcy5jbGlja051bSsrO1xuICAgICAgICAgICAgLyoqIGlmIGNsaWNrVG9TZWxlY3RBbmRFZGl0Q2VsbCBpcyBlbmFibGVkLFxuICAgICAgICAgICAgICogIHRoZXJlIHNob3VsZCBiZSBhIGRlbGF5IHRvIHByZXZlbnQgYSBzZWxlY3Rpb24gY2hhbmdlZCB3aGVuXG4gICAgICAgICAgICAgKiAgdXNlciBkYmxpY2sgdG8gZWRpdCBjZWxsIG9uIHNhbWUgcm93IGJ1dCBkaWZmZXJlbnQgY2VsbFxuICAgICAgICAgICAgKiovXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgaWYodGhpcy5jbGlja051bSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25TZWxlY3RSb3cocm93SW5kZXgsICF0aGlzLnByb3BzLmlzU2VsZWN0ZWQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuY2xpY2tOdW0gPSAwO1xuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wcm9wcy5vblJvd0NsaWNrKSB0aGlzLnByb3BzLm9uUm93Q2xpY2socm93SW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIHJvd01vdXNlT3V0KGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblJvd01vdXNlT3V0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uUm93TW91c2VPdXQoZS5jdXJyZW50VGFyZ2V0LnJvd0luZGV4KTtcbiAgICB9XG4gIH1cblxuICByb3dNb3VzZU92ZXIoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uUm93TW91c2VPdmVyKSB7XG4gICAgICB0aGlzLnByb3BzLm9uUm93TW91c2VPdmVyKGUuY3VycmVudFRhcmdldC5yb3dJbmRleCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgdGhpcy5jbGlja051bSA9IDA7XG4gICAgdmFyIHRyQ3NzPXtcbiAgICAgIHN0eWxlOntcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLnByb3BzLmlzU2VsZWN0ZWQ/dGhpcy5wcm9wcy5zZWxlY3RSb3cuYmdDb2xvcjpudWxsXG4gICAgICB9LFxuICAgICAgY2xhc3NOYW1lOih0aGlzLnByb3BzLmlzU2VsZWN0ZWQgJiYgdGhpcy5wcm9wcy5zZWxlY3RSb3cuY2xhc3NOYW1lID8gdGhpcy5wcm9wcy5zZWxlY3RSb3cuY2xhc3NOYW1lIDogJycpICsgKHRoaXMucHJvcHMuY2xhc3NOYW1lfHwnJylcbiAgICB9O1xuXG4gICAgaWYodGhpcy5wcm9wcy5zZWxlY3RSb3cgJiYgKHRoaXMucHJvcHMuc2VsZWN0Um93LmNsaWNrVG9TZWxlY3QgfHxcbiAgICAgIHRoaXMucHJvcHMuc2VsZWN0Um93LmNsaWNrVG9TZWxlY3RBbmRFZGl0Q2VsbCkgfHwgdGhpcy5wcm9wcy5vblJvd0NsaWNrKXtcbiAgICAgIHJldHVybihcbiAgICAgICAgPHRyIHsuLi50ckNzc31cbiAgICAgICAgICAgIG9uTW91c2VPdmVyPXt0aGlzLnJvd01vdXNlT3Zlci5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgb25Nb3VzZU91dD17dGhpcy5yb3dNb3VzZU91dC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5yb3dDbGljay5iaW5kKHRoaXMpfT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L3RyPlxuICAgICAgKVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuKFxuICAgICAgICA8dHIgey4uLnRyQ3NzfT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L3RyPlxuICAgICAgKVxuICAgIH1cbiAgfVxufVxuVGFibGVSb3cucHJvcFR5cGVzID0ge1xuICBpc1NlbGVjdGVkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgZW5hYmxlQ2VsbEVkaXQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBvblJvd0NsaWNrOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgb25TZWxlY3RSb3c6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBvblJvd01vdXNlT3V0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgb25Sb3dNb3VzZU92ZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG59O1xuVGFibGVSb3cuZGVmYXVsdFByb3BzID0ge1xuICBvblJvd0NsaWNrOiB1bmRlZmluZWRcbn1cbmV4cG9ydCBkZWZhdWx0IFRhYmxlUm93O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvVGFibGVSb3cuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4vQ29uc3QnO1xuXG5jbGFzcyBUYWJsZUNvbHVtbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IHNob3VsZFVwZGF0ZWQgPSB0aGlzLnByb3BzLndpZHRoICE9PSBuZXh0UHJvcHMud2lkdGhcbiAgICAgIHx8IHRoaXMucHJvcHMuY2xhc3NOYW1lICE9PSBuZXh0UHJvcHMuY2xhc3NOYW1lXG4gICAgICB8fCB0aGlzLnByb3BzLmhpZGRlbiAhPT0gbmV4dFByb3BzLmhpZGRlblxuICAgICAgfHwgdGhpcy5wcm9wcy5kYXRhQWxpZ24gIT09IG5leHRQcm9wcy5kYXRhQWxpZ25cbiAgICAgIHx8IHR5cGVvZiBjaGlsZHJlbiAhPT0gdHlwZW9mIG5leHRQcm9wcy5jaGlsZHJlblxuICAgICAgfHwgKCcnK3RoaXMucHJvcHMub25FZGl0KS50b1N0cmluZygpICE9PSAoJycrbmV4dFByb3BzLm9uRWRpdCkudG9TdHJpbmcoKVxuXG4gICAgaWYoc2hvdWxkVXBkYXRlZCl7XG4gICAgICByZXR1cm4gc2hvdWxkVXBkYXRlZDtcbiAgICB9XG5cbiAgICBpZih0eXBlb2YgY2hpbGRyZW4gPT09ICdvYmplY3QnICYmIGNoaWxkcmVuICE9PSBudWxsICYmIGNoaWxkcmVuLnByb3BzICE9PSBudWxsKSB7XG4gICAgICBpZihjaGlsZHJlbi5wcm9wcy50eXBlID09PSAnY2hlY2tib3gnIHx8IGNoaWxkcmVuLnByb3BzLnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgc2hvdWxkVXBkYXRlZCA9IHNob3VsZFVwZGF0ZWQgfHxcbiAgICAgICAgICBjaGlsZHJlbi5wcm9wcy50eXBlICE9PSBuZXh0UHJvcHMuY2hpbGRyZW4ucHJvcHMudHlwZSB8fFxuICAgICAgICAgIGNoaWxkcmVuLnByb3BzLmNoZWNrZWQgIT09IG5leHRQcm9wcy5jaGlsZHJlbi5wcm9wcy5jaGVja2VkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hvdWxkVXBkYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3VsZFVwZGF0ZWQgPSBzaG91bGRVcGRhdGVkIHx8IGNoaWxkcmVuICE9PSBuZXh0UHJvcHMuY2hpbGRyZW47XG4gICAgfVxuXG4gICAgaWYoc2hvdWxkVXBkYXRlZCl7XG4gICAgICByZXR1cm4gc2hvdWxkVXBkYXRlZDtcbiAgICB9XG5cbiAgICBpZighKHRoaXMucHJvcHMuY2VsbEVkaXQgJiYgbmV4dFByb3BzLmNlbGxFZGl0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc2hvdWxkVXBkYXRlZFxuICAgICAgICB8fCB0aGlzLnByb3BzLmNlbGxFZGl0Lm1vZGUgIT09IG5leHRQcm9wcy5jZWxsRWRpdC5tb2RlO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNlbGxFZGl0KGUpe1xuICAgIGlmKHRoaXMucHJvcHMuY2VsbEVkaXQubW9kZSA9PSBDb25zdC5DRUxMX0VESVRfREJDTElDSyl7XG4gICAgICBpZihkb2N1bWVudC5zZWxlY3Rpb24gJiYgZG9jdW1lbnQuc2VsZWN0aW9uLmVtcHR5KSB7XG4gICAgICAgIGRvY3VtZW50LnNlbGVjdGlvbi5lbXB0eSgpO1xuICAgICAgfSBlbHNlIGlmKHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcbiAgICAgICAgICB2YXIgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgICAgICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vbkVkaXQoXG4gICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5yb3dJbmRleCsxLFxuICAgICAgZS5jdXJyZW50VGFyZ2V0LmNlbGxJbmRleCk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICB2YXIgdGRTdHlsZSA9IHtcbiAgICAgIHRleHRBbGlnbjogdGhpcy5wcm9wcy5kYXRhQWxpZ24sXG4gICAgICBkaXNwbGF5OiB0aGlzLnByb3BzLmhpZGRlbj9cIm5vbmVcIjpudWxsXG4gICAgfTtcblxuICAgIHZhciBvcHRzID0ge307XG4gICAgaWYodGhpcy5wcm9wcy5jZWxsRWRpdCl7XG4gICAgICBpZih0aGlzLnByb3BzLmNlbGxFZGl0Lm1vZGUgPT0gQ29uc3QuQ0VMTF9FRElUX0NMSUNLKXtcbiAgICAgICAgb3B0cy5vbkNsaWNrID0gdGhpcy5oYW5kbGVDZWxsRWRpdC5iaW5kKHRoaXMpO1xuICAgICAgfWVsc2UgaWYodGhpcy5wcm9wcy5jZWxsRWRpdC5tb2RlID09IENvbnN0LkNFTExfRURJVF9EQkNMSUNLKXtcbiAgICAgICAgb3B0cy5vbkRvdWJsZUNsaWNrID0gdGhpcy5oYW5kbGVDZWxsRWRpdC5iaW5kKHRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPHRkIHN0eWxlPXt0ZFN0eWxlfSBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfSB7Li4ub3B0c30+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC90ZD5cbiAgICApXG4gIH1cbn1cblRhYmxlQ29sdW1uLnByb3BUeXBlcyA9IHtcbiAgZGF0YUFsaWduOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBoaWRkZW46IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6UmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuVGFibGVDb2x1bW4uZGVmYXVsdFByb3BzID0ge1xuICBkYXRhQWxpZ246IFwibGVmdFwiLFxuICBoaWRkZW46IGZhbHNlLFxuICBjbGFzc05hbWU6XCJcIlxufVxuZXhwb3J0IGRlZmF1bHQgVGFibGVDb2x1bW47XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9UYWJsZUNvbHVtbi5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi9Db25zdCc7XG5pbXBvcnQgRWRpdG9yIGZyb20gJy4vRWRpdG9yJ1xuaW1wb3J0IE5vdGlmaWVyIGZyb20gJy4vTm90aWZpY2F0aW9uLmpzJztcbmltcG9ydCBjbGFzc1NldCBmcm9tICdjbGFzc25hbWVzJztcblxuY2xhc3MgVGFibGVFZGl0Q29sdW1uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnRpbWVvdXRlQ2xlYXI9MDtcbiAgICAgICAgdGhpcy5zdGF0ZT17XG4gICAgICAgICAgICBzaGFrZUVkaXRvcjpmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICBoYW5kbGVLZXlQcmVzcyhlKXtcbiAgICBpZiAoZS5rZXlDb2RlID09IDEzKSB7IC8vUHJlc3NlZCBFTlRFUlxuICAgICAgbGV0IHZhbHVlID0gZS5jdXJyZW50VGFyZ2V0LnR5cGUgPT0gJ2NoZWNrYm94Jz9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2V0Q2hlY2tCb3hWYWx1ZShlKTplLmN1cnJlbnRUYXJnZXQudmFsdWU7XG5cbiAgICAgIGlmKCF0aGlzLnZhbGlkYXRvcih2YWx1ZSkpe1xuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJvcHMuY29tcGxldGVFZGl0KFxuICAgICAgICB2YWx1ZSwgdGhpcy5wcm9wcy5yb3dJbmRleCwgdGhpcy5wcm9wcy5jb2xJbmRleCk7XG4gICAgfWVsc2UgaWYoZS5rZXlDb2RlID09IDI3KXtcbiAgICAgIHRoaXMucHJvcHMuY29tcGxldGVFZGl0KFxuICAgICAgICBudWxsLCB0aGlzLnByb3BzLnJvd0luZGV4LCB0aGlzLnByb3BzLmNvbEluZGV4KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVCbHVyKGUpe1xuICAgIGlmKHRoaXMucHJvcHMuYmx1clRvU2F2ZSl7XG4gICAgICBsZXQgdmFsdWUgPSBlLmN1cnJlbnRUYXJnZXQudHlwZSA9PSAnY2hlY2tib3gnP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nZXRDaGVja0JveFZhbHVlKGUpOmUuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICAgIGlmKCF0aGlzLnZhbGlkYXRvcih2YWx1ZSkpe1xuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJvcHMuY29tcGxldGVFZGl0KFxuICAgICAgICAgIHZhbHVlLCB0aGlzLnByb3BzLnJvd0luZGV4LCB0aGlzLnByb3BzLmNvbEluZGV4KTtcbiAgICB9XG4gIH1cbiAgdmFsaWRhdG9yKHZhbHVlKXtcbiAgICAgIHZhciB0cz10aGlzO1xuICAgICAgaWYodHMucHJvcHMuZWRpdGFibGUudmFsaWRhdG9yKXtcbiAgICAgICAgICB2YXIgdmFsaWQ9dHMucHJvcHMuZWRpdGFibGUudmFsaWRhdG9yKHZhbHVlKTtcbiAgICAgICAgICBpZih2YWxpZCE9PXRydWUpe1xuICAgICAgICAgICAgICB0cy5yZWZzLm5vdGlmaWVyLm5vdGljZSgnZXJyb3InLHZhbGlkLFwiUHJlc3NlZCBFU0MgY2FuIGNhbmNlbFwiKTtcbiAgICAgICAgICAgICAgdmFyIGlucHV0ID0gdHMucmVmcy5pbnB1dFJlZjtcbiAgICAgICAgICAgICAgLy9hbmltYXRlIGlucHV0XG4gICAgICAgICAgICAgIHRzLmNsZWFyVGltZW91dCgpO1xuICAgICAgICAgICAgICB0cy5zZXRTdGF0ZSh7c2hha2VFZGl0b3I6dHJ1ZX0pO1xuICAgICAgICAgICAgICB0cy50aW1lb3V0ZUNsZWFyPXNldFRpbWVvdXQoZnVuY3Rpb24oKXt0cy5zZXRTdGF0ZSh7c2hha2VFZGl0b3I6ZmFsc2V9KTt9LDMwMCk7XG4gICAgICAgICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcblxuICB9XG4gIGNsZWFyVGltZW91dCgpe1xuICAgICAgaWYodGhpcy50aW1lb3V0ZUNsZWFyIT0wKXtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0ZUNsZWFyKTtcbiAgICAgICAgICB0aGlzLnRpbWVvdXRlQ2xlYXI9MDtcbiAgICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgdmFyIGlucHV0ID0gdGhpcy5yZWZzLmlucHV0UmVmO1xuICAgICAgLy8gaW5wdXQudmFsdWUgPSB0aGlzLnByb3BzLmNoaWxkcmVufHwnJztcbiAgICAgIGlucHV0LmZvY3VzKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmNsZWFyVGltZW91dCgpO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgdmFyIGVkaXRhYmxlPXRoaXMucHJvcHMuZWRpdGFibGUsXG4gICAgICAgIGZvcm1hdD10aGlzLnByb3BzLmZvcm1hdCxcbiAgICAgICAgYXR0cj17XG4gICAgICAgICAgICByZWY6XCJpbnB1dFJlZlwiLFxuICAgICAgICAgICAgb25LZXlEb3duOnRoaXMuaGFuZGxlS2V5UHJlc3MuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIG9uQmx1cjp0aGlzLmhhbmRsZUJsdXIuYmluZCh0aGlzKVxuICAgICAgICB9O1xuICAgICAgICAvL3B1dCBwbGFjZWhvbGRlciBpZiBleGlzdFxuICAgICAgICBlZGl0YWJsZS5wbGFjZWhvbGRlciYmKGF0dHIucGxhY2Vob2xkZXI9ZWRpdGFibGUucGxhY2Vob2xkZXIpO1xuXG4gICAgdmFyIGVkaXRvckNsYXNzPWNsYXNzU2V0KHsnYW5pbWF0ZWQnOnRoaXMuc3RhdGUuc2hha2VFZGl0b3IsJ3NoYWtlJzp0aGlzLnN0YXRlLnNoYWtlRWRpdG9yfSk7XG4gICAgcmV0dXJuKFxuICAgICAgICA8dGQgcmVmPVwidGRcIiBzdHlsZT17e3Bvc2l0aW9uOidyZWxhdGl2ZSd9fT5cbiAgICAgICAgICAgIHtFZGl0b3IoZWRpdGFibGUsYXR0cixmb3JtYXQsZWRpdG9yQ2xhc3MsdGhpcy5wcm9wcy5jaGlsZHJlbnx8JycpfVxuICAgICAgICAgICAgPE5vdGlmaWVyIHJlZj1cIm5vdGlmaWVyXCI+PC9Ob3RpZmllcj5cbiAgICAgICAgPC90ZD5cbiAgICApXG4gIH1cblxuICBfZ2V0Q2hlY2tCb3hWYWx1ZShlKXtcbiAgICBsZXQgdmFsdWUgPSAnJztcbiAgICBsZXQgdmFsdWVzID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlLnNwbGl0KCc6Jyk7XG4gICAgdmFsdWUgPSBlLmN1cnJlbnRUYXJnZXQuY2hlY2tlZD92YWx1ZXNbMF06dmFsdWVzWzFdO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG59XG5UYWJsZUVkaXRDb2x1bW4ucHJvcFR5cGVzID0ge1xuICBjb21wbGV0ZUVkaXQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICByb3dJbmRleDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgY29sSW5kZXg6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIGJsdXJUb1NhdmU6IFJlYWN0LlByb3BUeXBlcy5ib29sXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlRWRpdENvbHVtbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL1RhYmxlRWRpdENvbHVtbi5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG52YXIgRWRpdG9yPWZ1bmN0aW9uKGVkaXRhYmxlLCBhdHRyLCBmb3JtYXQsIGVkaXRvckNsYXNzLCBkZWZhdWx0VmFsdWUpe1xuXG5cbiAgICBpZihlZGl0YWJsZT09PXRydWV8fHR5cGVvZiBlZGl0YWJsZT09PVwic3RyaW5nXCIpey8vc2ltcGxlIGRlY2xhcmVcbiAgICAgICAgdmFyIHR5cGU9ZWRpdGFibGU9PT10cnVlPyd0ZXh0JzplZGl0YWJsZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxpbnB1dCB7Li4uYXR0cn0gdHlwZT17dHlwZX0gZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsoZWRpdG9yQ2xhc3N8fFwiXCIpK1wiIGZvcm0tY29udHJvbCBlZGl0b3IgZWRpdC10ZXh0XCJ9IC8+XG4gICAgICAgIClcbiAgICB9IGVsc2UgaWYoIWVkaXRhYmxlKXtcbiAgICAgIHZhciB0eXBlPWVkaXRhYmxlPT09dHJ1ZT8ndGV4dCc6ZWRpdGFibGU7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIDxpbnB1dCB7Li4uYXR0cn0gdHlwZT17dHlwZX0gZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9IGRpc2FibGVkPSdkaXNhYmxlZCdcbiAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsoZWRpdG9yQ2xhc3N8fFwiXCIpK1wiIGZvcm0tY29udHJvbCBlZGl0b3IgZWRpdC10ZXh0XCJ9IC8+XG4gICAgICApXG4gICAgfSBlbHNlIGlmKGVkaXRhYmxlLnR5cGUpey8vc3RhbmRhcmQgZGVjbGFyZVxuICAgICAgICAvL3B1dCBzdHlsZSBpZiBleGlzdFxuICAgICAgICBlZGl0YWJsZS5zdHlsZSYmKGF0dHIuc3R5bGU9ZWRpdGFibGUuc3R5bGUpO1xuXG4gICAgICAgIC8vcHV0IGNsYXNzIGlmIGV4aXN0XG4gICAgICAgIGF0dHIuY2xhc3NOYW1lID0gKGVkaXRvckNsYXNzfHxcIlwiKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgXCIgZm9ybS1jb250cm9sIGVkaXRvciBlZGl0LVwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0YWJsZS50eXBlICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAoZWRpdGFibGUuY2xhc3NOYW1lPyhcIiBcIitlZGl0YWJsZS5jbGFzc05hbWUpOlwiXCIpO1xuXG4gICAgICAgIGlmKGVkaXRhYmxlLnR5cGUgPT09ICdzZWxlY3QnKXsvL3Byb2Nlc3Mgc2VsZWN0IGlucHV0XG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IFtdLCB2YWx1ZXM9ZWRpdGFibGUub3B0aW9ucy52YWx1ZXM7XG4gICAgICAgICAgICBpZihBcnJheS5pc0FycmF5KHZhbHVlcykpey8vb25seSBjYW4gdXNlIGFycnJheSBkYXRhIGZvciBvcHRpb25zXG4gICAgICAgICAgICAgICAgdmFyIHJvd1ZhbHVlO1xuICAgICAgICAgICAgICAgIG9wdGlvbnM9dmFsdWVzLm1hcChmdW5jdGlvbihkLGkpe1xuICAgICAgICAgICAgICAgICAgICByb3dWYWx1ZT1mb3JtYXQ/Zm9ybWF0KGQpOmQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXsnb3B0aW9uJytpfSB2YWx1ZT17ZH0+e3Jvd1ZhbHVlfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgPHNlbGVjdCB7Li4uYXR0cn0gZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9PntvcHRpb25zfTwvc2VsZWN0PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmKGVkaXRhYmxlLnR5cGUgPT09ICd0ZXh0YXJlYScpey8vcHJvY2VzcyB0ZXh0YXJlYSBpbnB1dFxuICAgICAgICAgICAgLy9wdXQgIG90aGVyIGlmIGV4aXN0XG4gICAgICAgICAgICBlZGl0YWJsZS5jb2xzJiYoYXR0ci5jb2xzPWVkaXRhYmxlLmNvbHMpO1xuICAgICAgICAgICAgZWRpdGFibGUucm93cyYmKGF0dHIucm93cz1lZGl0YWJsZS5yb3dzKTtcbiAgICAgICAgICAgIHZhciBrZXlVcEhhbmRsZXI9YXR0ci5vbktleURvd24sc2F2ZUJ0bj1udWxsO1xuICAgICAgICAgICAgaWYoa2V5VXBIYW5kbGVyKXtcbiAgICAgICAgICAgICAgICBhdHRyLm9uS2V5RG93bj1mdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUua2V5Q29kZSAhPSAxMykgeyAvL25vdCBQcmVzc2VkIEVOVEVSXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlVcEhhbmRsZXIoZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHNhdmVCdG49PGJ1dHRvIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBidG4teHMgdGV4dGFyZWEtc2F2ZS1idG5cIiBvbkNsaWNrPXtrZXlVcEhhbmRsZXJ9PnNhdmU8L2J1dHRvPlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHsuLi5hdHRyfSBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX0+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAge3NhdmVCdG59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZihlZGl0YWJsZS50eXBlID09PSAnY2hlY2tib3gnKXtcbiAgICAgICAgICBsZXQgdmFsdWVzID0gJ3RydWU6ZmFsc2UnO1xuICAgICAgICAgIGlmKGVkaXRhYmxlLm9wdGlvbnMgJiYgZWRpdGFibGUub3B0aW9ucy52YWx1ZXMpe1xuICAgICAgICAgICAgLy8gdmFsdWVzID0gZWRpdGFibGUub3B0aW9ucy52YWx1ZXMuc3BsaXQoJzonKTtcbiAgICAgICAgICAgIHZhbHVlcyA9IGVkaXRhYmxlLm9wdGlvbnMudmFsdWVzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhdHRyLmNsYXNzTmFtZSA9IGF0dHIuY2xhc3NOYW1lLnJlcGxhY2UoJ2Zvcm0tY29udHJvbCcsJycpO1xuICAgICAgICAgIGF0dHIuY2xhc3NOYW1lICs9ICcgY2hlY2tib3ggcHVsbC1yaWdodCc7XG5cbiAgICAgICAgICBsZXQgY2hlY2tlZCA9IGRlZmF1bHRWYWx1ZSAmJiBkZWZhdWx0VmFsdWUudG9TdHJpbmcoKSA9PSB2YWx1ZXMuc3BsaXQoJzonKVswXT90cnVlOmZhbHNlO1xuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxpbnB1dCB7Li4uYXR0cn0gdHlwZT0nY2hlY2tib3gnIHZhbHVlPXt2YWx1ZXN9IGRlZmF1bHRDaGVja2VkPXtjaGVja2VkfS8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNley8vcHJvY2VzcyBvdGhlciBpbnB1dCB0eXBlLiBhcyBwYXNzd29yZCx1cmwsZW1haWwuLi5cbiAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICA8aW5wdXQgey4uLmF0dHJ9IHR5cGU9e3R5cGV9IGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlfS8+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy9kZWZhdWx0IHJldHVybiBmb3Igb3RoZXIgY2FzZSBvZiBlZGl0YWJsZVxuICAgIHJldHVybihcbiAgICAgICAgPGlucHV0IHsuLi5hdHRyfSB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17KGVkaXRvckNsYXNzfHxcIlwiKStcIiBmb3JtLWNvbnRyb2wgZWRpdG9yIGVkaXQtdGV4dFwifS8+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvRWRpdG9yLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb25zdCBmcm9tICcuL0NvbnN0JztcblxuaW1wb3J0IHtcbiAgVG9hc3RDb250YWluZXIsXG4gIFRvYXN0TWVzc2FnZSxcbn0gZnJvbSBcInJlYWN0LXRvYXN0clwiO1xuXG5cbnZhciBUb2FzdHJNZXNzYWdlRmFjdG9yeT1SZWFjdC5jcmVhdGVGYWN0b3J5KFRvYXN0TWVzc2FnZS5hbmltYXRpb24pO1xuXG5jbGFzcyBOb3RpZmljYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIC8vIGFsbG93IHR5cGUgaXMgc3VjY2VzcyxpbmZvLHdhcm5pbmcsZXJyb3JcbiAgbm90aWNlKHR5cGUsbXNnLHRpdGxlKXtcbiAgICB0aGlzLnJlZnMudG9hc3RyW3R5cGVdKFxuICAgICAgICBtc2csdGl0bGUsIHtcbiAgICAgICAgICBtb2RlOidzaW5nbGUnLFxuICAgICAgICAgIHRpbWVPdXQ6IDUwMDAsXG4gICAgICAgICAgZXh0ZW5kZWRUaW1lT3V0OiAxMDAwLFxuICAgICAgICAgIHNob3dBbmltYXRpb246IFwiYW5pbWF0ZWQgIGJvdW5jZUluXCIsXG4gICAgICAgICAgaGlkZUFuaW1hdGlvbjogXCJhbmltYXRlZCBib3VuY2VPdXRcIlxuICAgICAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybihcbiAgICAgICAgPFRvYXN0Q29udGFpbmVyIHJlZj1cInRvYXN0clwiIHRvYXN0TWVzc2FnZUZhY3Rvcnk9e1RvYXN0ck1lc3NhZ2VGYWN0b3J5fVxuICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9hc3QtY29udGFpbmVyXCIgIGNsYXNzTmFtZT1cInRvYXN0LXRvcC1yaWdodFwiPjwvVG9hc3RDb250YWluZXI+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL05vdGlmaWNhdGlvbi5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5Ub2FzdE1lc3NhZ2UgPSBleHBvcnRzLlRvYXN0Q29udGFpbmVyID0gdW5kZWZpbmVkO1xuXG52YXIgX1RvYXN0Q29udGFpbmVyID0gcmVxdWlyZShcIi4vVG9hc3RDb250YWluZXJcIik7XG5cbnZhciBfVG9hc3RDb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVG9hc3RDb250YWluZXIpO1xuXG52YXIgX1RvYXN0TWVzc2FnZSA9IHJlcXVpcmUoXCIuL1RvYXN0TWVzc2FnZVwiKTtcblxudmFyIF9Ub2FzdE1lc3NhZ2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVG9hc3RNZXNzYWdlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5Ub2FzdENvbnRhaW5lciA9IF9Ub2FzdENvbnRhaW5lcjIuZGVmYXVsdDtcbmV4cG9ydHMuVG9hc3RNZXNzYWdlID0gX1RvYXN0TWVzc2FnZTIuZGVmYXVsdDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC10b2FzdHIvbGliL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdEFkZG9uc1VwZGF0ZSA9IHJlcXVpcmUoXCJyZWFjdC1hZGRvbnMtdXBkYXRlXCIpO1xuXG52YXIgX3JlYWN0QWRkb25zVXBkYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0QWRkb25zVXBkYXRlKTtcblxudmFyIF9Ub2FzdE1lc3NhZ2UgPSByZXF1aXJlKFwiLi9Ub2FzdE1lc3NhZ2VcIik7XG5cbnZhciBfVG9hc3RNZXNzYWdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RvYXN0TWVzc2FnZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFRvYXN0Q29udGFpbmVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFRvYXN0Q29udGFpbmVyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUb2FzdENvbnRhaW5lcigpIHtcbiAgICB2YXIgX09iamVjdCRnZXRQcm90b3R5cGVPO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUb2FzdENvbnRhaW5lcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfT2JqZWN0JGdldFByb3RvdHlwZU8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoVG9hc3RDb250YWluZXIpKS5jYWxsLmFwcGx5KF9PYmplY3QkZ2V0UHJvdG90eXBlTywgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgdG9hc3RzOiBbXSxcbiAgICAgIHRvYXN0SWQ6IDAsXG4gICAgICBwcmV2aW91c01lc3NhZ2U6IG51bGxcbiAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhUb2FzdENvbnRhaW5lciwgW3tcbiAgICBrZXk6IFwiZXJyb3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXJyb3IobWVzc2FnZSwgdGl0bGUsIG9wdGlvbnNPdmVycmlkZSkge1xuICAgICAgdGhpcy5fbm90aWZ5KHRoaXMucHJvcHMudG9hc3RUeXBlLmVycm9yLCBtZXNzYWdlLCB0aXRsZSwgb3B0aW9uc092ZXJyaWRlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaW5mb1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbmZvKG1lc3NhZ2UsIHRpdGxlLCBvcHRpb25zT3ZlcnJpZGUpIHtcbiAgICAgIHRoaXMuX25vdGlmeSh0aGlzLnByb3BzLnRvYXN0VHlwZS5pbmZvLCBtZXNzYWdlLCB0aXRsZSwgb3B0aW9uc092ZXJyaWRlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3VjY2Vzc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdWNjZXNzKG1lc3NhZ2UsIHRpdGxlLCBvcHRpb25zT3ZlcnJpZGUpIHtcbiAgICAgIHRoaXMuX25vdGlmeSh0aGlzLnByb3BzLnRvYXN0VHlwZS5zdWNjZXNzLCBtZXNzYWdlLCB0aXRsZSwgb3B0aW9uc092ZXJyaWRlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwid2FybmluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UsIHRpdGxlLCBvcHRpb25zT3ZlcnJpZGUpIHtcbiAgICAgIHRoaXMuX25vdGlmeSh0aGlzLnByb3BzLnRvYXN0VHlwZS53YXJuaW5nLCBtZXNzYWdlLCB0aXRsZSwgb3B0aW9uc092ZXJyaWRlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2xlYXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgT2JqZWN0LmtleXModGhpcy5yZWZzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX3RoaXMyLnJlZnNba2V5XS5oaWRlVG9hc3QoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9ub3RpZnlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX25vdGlmeSh0eXBlLCBtZXNzYWdlLCB0aXRsZSkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBvcHRpb25zT3ZlcnJpZGUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDMgfHwgYXJndW1lbnRzWzNdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1szXTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMucHJldmVudER1cGxpY2F0ZXMpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucHJldmlvdXNNZXNzYWdlID09PSBtZXNzYWdlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIga2V5ID0gdGhpcy5zdGF0ZS50b2FzdElkKys7XG4gICAgICB2YXIgdG9hc3RJZCA9IGtleTtcbiAgICAgIHZhciBuZXdUb2FzdCA9ICgwLCBfcmVhY3RBZGRvbnNVcGRhdGUyLmRlZmF1bHQpKG9wdGlvbnNPdmVycmlkZSwge1xuICAgICAgICAkbWVyZ2U6IHtcbiAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICAgIHRvYXN0SWQ6IHRvYXN0SWQsXG4gICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgcmVmOiBcInRvYXN0c19fXCIgKyBrZXksXG4gICAgICAgICAgaGFuZGxlT25DbGljazogZnVuY3Rpb24gaGFuZGxlT25DbGljayhlKSB7XG4gICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09PSB0eXBlb2Ygb3B0aW9uc092ZXJyaWRlLmhhbmRsZU9uQ2xpY2spIHtcbiAgICAgICAgICAgICAgb3B0aW9uc092ZXJyaWRlLmhhbmRsZU9uQ2xpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBfdGhpczMuX2hhbmRsZV90b2FzdF9vbl9jbGljayhlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhhbmRsZVJlbW92ZTogdGhpcy5faGFuZGxlX3RvYXN0X3JlbW92ZS5iaW5kKHRoaXMpXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdmFyIHRvYXN0T3BlcmF0aW9uID0gX2RlZmluZVByb3BlcnR5KHt9LCBcIlwiICsgKHRoaXMucHJvcHMubmV3ZXN0T25Ub3AgPyBcIiR1bnNoaWZ0XCIgOiBcIiRwdXNoXCIpLCBbbmV3VG9hc3RdKTtcblxuICAgICAgdmFyIG5leHRTdGF0ZSA9ICgwLCBfcmVhY3RBZGRvbnNVcGRhdGUyLmRlZmF1bHQpKHRoaXMuc3RhdGUsIHtcbiAgICAgICAgdG9hc3RzOiB0b2FzdE9wZXJhdGlvbixcbiAgICAgICAgcHJldmlvdXNNZXNzYWdlOiB7ICRzZXQ6IG1lc3NhZ2UgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9oYW5kbGVfdG9hc3Rfb25fY2xpY2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZV90b2FzdF9vbl9jbGljayhldmVudCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcbiAgICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2hhbmRsZV90b2FzdF9yZW1vdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZV90b2FzdF9yZW1vdmUodG9hc3RJZCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciBvcGVyYXRpb25OYW1lID0gXCJcIiArICh0aGlzLnByb3BzLm5ld2VzdE9uVG9wID8gXCJyZWR1Y2VSaWdodFwiIDogXCJyZWR1Y2VcIik7XG4gICAgICB0aGlzLnN0YXRlLnRvYXN0c1tvcGVyYXRpb25OYW1lXShmdW5jdGlvbiAoZm91bmQsIHRvYXN0LCBpbmRleCkge1xuICAgICAgICBpZiAoZm91bmQgfHwgdG9hc3QudG9hc3RJZCAhPT0gdG9hc3RJZCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBfdGhpczQuc2V0U3RhdGUoKDAsIF9yZWFjdEFkZG9uc1VwZGF0ZTIuZGVmYXVsdCkoX3RoaXM0LnN0YXRlLCB7XG4gICAgICAgICAgdG9hc3RzOiB7ICRzcGxpY2U6IFtbaW5kZXgsIDFdXSB9XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LCBmYWxzZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBcImFyaWEtbGl2ZVwiOiBcInBvbGl0ZVwiLCByb2xlOiBcImFsZXJ0XCIgfSksXG4gICAgICAgIHRoaXMuc3RhdGUudG9hc3RzLm1hcChmdW5jdGlvbiAodG9hc3QpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXM1LnByb3BzLnRvYXN0TWVzc2FnZUZhY3RvcnkodG9hc3QpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVG9hc3RDb250YWluZXI7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5Ub2FzdENvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gIHRvYXN0VHlwZTogX3JlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4gICAgZXJyb3I6IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGluZm86IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN1Y2Nlc3M6IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHdhcm5pbmc6IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG4gIH0pLmlzUmVxdWlyZWQsXG4gIGlkOiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0b2FzdE1lc3NhZ2VGYWN0b3J5OiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcHJldmVudER1cGxpY2F0ZXM6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBuZXdlc3RPblRvcDogX3JlYWN0LlByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIG9uQ2xpY2s6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuVG9hc3RDb250YWluZXIuZGVmYXVsdFByb3BzID0ge1xuICB0b2FzdFR5cGU6IHtcbiAgICBlcnJvcjogXCJlcnJvclwiLFxuICAgIGluZm86IFwiaW5mb1wiLFxuICAgIHN1Y2Nlc3M6IFwic3VjY2Vzc1wiLFxuICAgIHdhcm5pbmc6IFwid2FybmluZ1wiXG4gIH0sXG4gIGlkOiBcInRvYXN0LWNvbnRhaW5lclwiLFxuICB0b2FzdE1lc3NhZ2VGYWN0b3J5OiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRmFjdG9yeShfVG9hc3RNZXNzYWdlMi5kZWZhdWx0KSxcbiAgcHJldmVudER1cGxpY2F0ZXM6IGZhbHNlLFxuICBuZXdlc3RPblRvcDogdHJ1ZSxcbiAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHt9XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gVG9hc3RDb250YWluZXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtdG9hc3RyL2xpYi9Ub2FzdENvbnRhaW5lci5qc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ3JlYWN0L2xpYi91cGRhdGUnKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1hZGRvbnMtdXBkYXRlL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSB1cGRhdGVcbiAqL1xuXG4vKiBnbG9iYWwgaGFzT3duUHJvcGVydHk6dHJ1ZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCcuL09iamVjdC5hc3NpZ24nKTtcbnZhciBrZXlPZiA9IHJlcXVpcmUoJ2ZianMvbGliL2tleU9mJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgaGFzT3duUHJvcGVydHkgPSAoe30pLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBzaGFsbG93Q29weSh4KSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHgpKSB7XG4gICAgcmV0dXJuIHguY29uY2F0KCk7XG4gIH0gZWxzZSBpZiAoeCAmJiB0eXBlb2YgeCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gYXNzaWduKG5ldyB4LmNvbnN0cnVjdG9yKCksIHgpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4O1xuICB9XG59XG5cbnZhciBDT01NQU5EX1BVU0ggPSBrZXlPZih7ICRwdXNoOiBudWxsIH0pO1xudmFyIENPTU1BTkRfVU5TSElGVCA9IGtleU9mKHsgJHVuc2hpZnQ6IG51bGwgfSk7XG52YXIgQ09NTUFORF9TUExJQ0UgPSBrZXlPZih7ICRzcGxpY2U6IG51bGwgfSk7XG52YXIgQ09NTUFORF9TRVQgPSBrZXlPZih7ICRzZXQ6IG51bGwgfSk7XG52YXIgQ09NTUFORF9NRVJHRSA9IGtleU9mKHsgJG1lcmdlOiBudWxsIH0pO1xudmFyIENPTU1BTkRfQVBQTFkgPSBrZXlPZih7ICRhcHBseTogbnVsbCB9KTtcblxudmFyIEFMTF9DT01NQU5EU19MSVNUID0gW0NPTU1BTkRfUFVTSCwgQ09NTUFORF9VTlNISUZULCBDT01NQU5EX1NQTElDRSwgQ09NTUFORF9TRVQsIENPTU1BTkRfTUVSR0UsIENPTU1BTkRfQVBQTFldO1xuXG52YXIgQUxMX0NPTU1BTkRTX1NFVCA9IHt9O1xuXG5BTExfQ09NTUFORFNfTElTVC5mb3JFYWNoKGZ1bmN0aW9uIChjb21tYW5kKSB7XG4gIEFMTF9DT01NQU5EU19TRVRbY29tbWFuZF0gPSB0cnVlO1xufSk7XG5cbmZ1bmN0aW9uIGludmFyaWFudEFycmF5Q2FzZSh2YWx1ZSwgc3BlYywgY29tbWFuZCkge1xuICAhQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAndXBkYXRlKCk6IGV4cGVjdGVkIHRhcmdldCBvZiAlcyB0byBiZSBhbiBhcnJheTsgZ290ICVzLicsIGNvbW1hbmQsIHZhbHVlKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG4gIHZhciBzcGVjVmFsdWUgPSBzcGVjW2NvbW1hbmRdO1xuICAhQXJyYXkuaXNBcnJheShzcGVjVmFsdWUpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ3VwZGF0ZSgpOiBleHBlY3RlZCBzcGVjIG9mICVzIHRvIGJlIGFuIGFycmF5OyBnb3QgJXMuICcgKyAnRGlkIHlvdSBmb3JnZXQgdG8gd3JhcCB5b3VyIHBhcmFtZXRlciBpbiBhbiBhcnJheT8nLCBjb21tYW5kLCBzcGVjVmFsdWUpIDogaW52YXJpYW50KGZhbHNlKSA6IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gdXBkYXRlKHZhbHVlLCBzcGVjKSB7XG4gICEodHlwZW9mIHNwZWMgPT09ICdvYmplY3QnKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICd1cGRhdGUoKTogWW91IHByb3ZpZGVkIGEga2V5IHBhdGggdG8gdXBkYXRlKCkgdGhhdCBkaWQgbm90IGNvbnRhaW4gb25lICcgKyAnb2YgJXMuIERpZCB5b3UgZm9yZ2V0IHRvIGluY2x1ZGUgeyVzOiAuLi59PycsIEFMTF9DT01NQU5EU19MSVNULmpvaW4oJywgJyksIENPTU1BTkRfU0VUKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG5cbiAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc3BlYywgQ09NTUFORF9TRVQpKSB7XG4gICAgIShPYmplY3Qua2V5cyhzcGVjKS5sZW5ndGggPT09IDEpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ0Nhbm5vdCBoYXZlIG1vcmUgdGhhbiBvbmUga2V5IGluIGFuIG9iamVjdCB3aXRoICVzJywgQ09NTUFORF9TRVQpIDogaW52YXJpYW50KGZhbHNlKSA6IHVuZGVmaW5lZDtcblxuICAgIHJldHVybiBzcGVjW0NPTU1BTkRfU0VUXTtcbiAgfVxuXG4gIHZhciBuZXh0VmFsdWUgPSBzaGFsbG93Q29weSh2YWx1ZSk7XG5cbiAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc3BlYywgQ09NTUFORF9NRVJHRSkpIHtcbiAgICB2YXIgbWVyZ2VPYmogPSBzcGVjW0NPTU1BTkRfTUVSR0VdO1xuICAgICEobWVyZ2VPYmogJiYgdHlwZW9mIG1lcmdlT2JqID09PSAnb2JqZWN0JykgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAndXBkYXRlKCk6ICVzIGV4cGVjdHMgYSBzcGVjIG9mIHR5cGUgXFwnb2JqZWN0XFwnOyBnb3QgJXMnLCBDT01NQU5EX01FUkdFLCBtZXJnZU9iaikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xuICAgICEobmV4dFZhbHVlICYmIHR5cGVvZiBuZXh0VmFsdWUgPT09ICdvYmplY3QnKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICd1cGRhdGUoKTogJXMgZXhwZWN0cyBhIHRhcmdldCBvZiB0eXBlIFxcJ29iamVjdFxcJzsgZ290ICVzJywgQ09NTUFORF9NRVJHRSwgbmV4dFZhbHVlKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG4gICAgYXNzaWduKG5leHRWYWx1ZSwgc3BlY1tDT01NQU5EX01FUkdFXSk7XG4gIH1cblxuICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzcGVjLCBDT01NQU5EX1BVU0gpKSB7XG4gICAgaW52YXJpYW50QXJyYXlDYXNlKHZhbHVlLCBzcGVjLCBDT01NQU5EX1BVU0gpO1xuICAgIHNwZWNbQ09NTUFORF9QVVNIXS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICBuZXh0VmFsdWUucHVzaChpdGVtKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHNwZWMsIENPTU1BTkRfVU5TSElGVCkpIHtcbiAgICBpbnZhcmlhbnRBcnJheUNhc2UodmFsdWUsIHNwZWMsIENPTU1BTkRfVU5TSElGVCk7XG4gICAgc3BlY1tDT01NQU5EX1VOU0hJRlRdLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIG5leHRWYWx1ZS51bnNoaWZ0KGl0ZW0pO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc3BlYywgQ09NTUFORF9TUExJQ0UpKSB7XG4gICAgIUFycmF5LmlzQXJyYXkodmFsdWUpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ0V4cGVjdGVkICVzIHRhcmdldCB0byBiZSBhbiBhcnJheTsgZ290ICVzJywgQ09NTUFORF9TUExJQ0UsIHZhbHVlKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG4gICAgIUFycmF5LmlzQXJyYXkoc3BlY1tDT01NQU5EX1NQTElDRV0pID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ3VwZGF0ZSgpOiBleHBlY3RlZCBzcGVjIG9mICVzIHRvIGJlIGFuIGFycmF5IG9mIGFycmF5czsgZ290ICVzLiAnICsgJ0RpZCB5b3UgZm9yZ2V0IHRvIHdyYXAgeW91ciBwYXJhbWV0ZXJzIGluIGFuIGFycmF5PycsIENPTU1BTkRfU1BMSUNFLCBzcGVjW0NPTU1BTkRfU1BMSUNFXSkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xuICAgIHNwZWNbQ09NTUFORF9TUExJQ0VdLmZvckVhY2goZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICFBcnJheS5pc0FycmF5KGFyZ3MpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ3VwZGF0ZSgpOiBleHBlY3RlZCBzcGVjIG9mICVzIHRvIGJlIGFuIGFycmF5IG9mIGFycmF5czsgZ290ICVzLiAnICsgJ0RpZCB5b3UgZm9yZ2V0IHRvIHdyYXAgeW91ciBwYXJhbWV0ZXJzIGluIGFuIGFycmF5PycsIENPTU1BTkRfU1BMSUNFLCBzcGVjW0NPTU1BTkRfU1BMSUNFXSkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xuICAgICAgbmV4dFZhbHVlLnNwbGljZS5hcHBseShuZXh0VmFsdWUsIGFyZ3MpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc3BlYywgQ09NTUFORF9BUFBMWSkpIHtcbiAgICAhKHR5cGVvZiBzcGVjW0NPTU1BTkRfQVBQTFldID09PSAnZnVuY3Rpb24nKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICd1cGRhdGUoKTogZXhwZWN0ZWQgc3BlYyBvZiAlcyB0byBiZSBhIGZ1bmN0aW9uOyBnb3QgJXMuJywgQ09NTUFORF9BUFBMWSwgc3BlY1tDT01NQU5EX0FQUExZXSkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xuICAgIG5leHRWYWx1ZSA9IHNwZWNbQ09NTUFORF9BUFBMWV0obmV4dFZhbHVlKTtcbiAgfVxuXG4gIGZvciAodmFyIGsgaW4gc3BlYykge1xuICAgIGlmICghKEFMTF9DT01NQU5EU19TRVQuaGFzT3duUHJvcGVydHkoaykgJiYgQUxMX0NPTU1BTkRTX1NFVFtrXSkpIHtcbiAgICAgIG5leHRWYWx1ZVtrXSA9IHVwZGF0ZSh2YWx1ZVtrXSwgc3BlY1trXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5leHRWYWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB1cGRhdGU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL3VwZGF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgc2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgT2JqZWN0LmFzc2lnblxuICovXG5cbi8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1vYmplY3QuYXNzaWduXG5cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlcykge1xuICBpZiAodGFyZ2V0ID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIHRhcmdldCBjYW5ub3QgYmUgbnVsbCBvciB1bmRlZmluZWQnKTtcbiAgfVxuXG4gIHZhciB0byA9IE9iamVjdCh0YXJnZXQpO1xuICB2YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4gIGZvciAodmFyIG5leHRJbmRleCA9IDE7IG5leHRJbmRleCA8IGFyZ3VtZW50cy5sZW5ndGg7IG5leHRJbmRleCsrKSB7XG4gICAgdmFyIG5leHRTb3VyY2UgPSBhcmd1bWVudHNbbmV4dEluZGV4XTtcbiAgICBpZiAobmV4dFNvdXJjZSA9PSBudWxsKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIgZnJvbSA9IE9iamVjdChuZXh0U291cmNlKTtcblxuICAgIC8vIFdlIGRvbid0IGN1cnJlbnRseSBzdXBwb3J0IGFjY2Vzc29ycyBub3IgcHJveGllcy4gVGhlcmVmb3JlIHRoaXNcbiAgICAvLyBjb3B5IGNhbm5vdCB0aHJvdy4gSWYgd2UgZXZlciBzdXBwb3J0ZWQgdGhpcyB0aGVuIHdlIG11c3QgaGFuZGxlXG4gICAgLy8gZXhjZXB0aW9ucyBhbmQgc2lkZS1lZmZlY3RzLiBXZSBkb24ndCBzdXBwb3J0IHN5bWJvbHMgc28gdGhleSB3b24ndFxuICAgIC8vIGJlIHRyYW5zZmVycmVkLlxuXG4gICAgZm9yICh2YXIga2V5IGluIGZyb20pIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcbiAgICAgICAgdG9ba2V5XSA9IGZyb21ba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzaWduO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0L2xpYi9PYmplY3QuYXNzaWduLmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBrZXlPZlxuICovXG5cbi8qKlxuICogQWxsb3dzIGV4dHJhY3Rpb24gb2YgYSBtaW5pZmllZCBrZXkuIExldCdzIHRoZSBidWlsZCBzeXN0ZW0gbWluaWZ5IGtleXNcbiAqIHdpdGhvdXQgbG9zaW5nIHRoZSBhYmlsaXR5IHRvIGR5bmFtaWNhbGx5IHVzZSBrZXkgc3RyaW5ncyBhcyB2YWx1ZXNcbiAqIHRoZW1zZWx2ZXMuIFBhc3MgaW4gYW4gb2JqZWN0IHdpdGggYSBzaW5nbGUga2V5L3ZhbCBwYWlyIGFuZCBpdCB3aWxsIHJldHVyblxuICogeW91IHRoZSBzdHJpbmcga2V5IG9mIHRoYXQgc2luZ2xlIHJlY29yZC4gU3VwcG9zZSB5b3Ugd2FudCB0byBncmFiIHRoZVxuICogdmFsdWUgZm9yIGEga2V5ICdjbGFzc05hbWUnIGluc2lkZSBvZiBhbiBvYmplY3QuIEtleS92YWwgbWluaWZpY2F0aW9uIG1heVxuICogaGF2ZSBhbGlhc2VkIHRoYXQga2V5IHRvIGJlICd4YTEyJy4ga2V5T2Yoe2NsYXNzTmFtZTogbnVsbH0pIHdpbGwgcmV0dXJuXG4gKiAneGExMicgaW4gdGhhdCBjYXNlLiBSZXNvbHZlIGtleXMgeW91IHdhbnQgdG8gdXNlIG9uY2UgYXQgc3RhcnR1cCB0aW1lLCB0aGVuXG4gKiByZXVzZSB0aG9zZSByZXNvbHV0aW9ucy5cbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBrZXlPZiA9IGZ1bmN0aW9uIChvbmVLZXlPYmopIHtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gb25lS2V5T2JqKSB7XG4gICAgaWYgKCFvbmVLZXlPYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHJldHVybiBrZXk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGtleU9mO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZianMvbGliL2tleU9mLmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBpbnZhcmlhbnRcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgKyAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KSk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9mYmpzL2xpYi9pbnZhcmlhbnQuanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmpRdWVyeSA9IGV4cG9ydHMuYW5pbWF0aW9uID0gdW5kZWZpbmVkO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdEFkZG9uc1VwZGF0ZSA9IHJlcXVpcmUoXCJyZWFjdC1hZGRvbnMtdXBkYXRlXCIpO1xuXG52YXIgX3JlYWN0QWRkb25zVXBkYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0QWRkb25zVXBkYXRlKTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9hbmltYXRpb25NaXhpbiA9IHJlcXVpcmUoXCIuL2FuaW1hdGlvbk1peGluXCIpO1xuXG52YXIgX2FuaW1hdGlvbk1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FuaW1hdGlvbk1peGluKTtcblxudmFyIF9qUXVlcnlNaXhpbiA9IHJlcXVpcmUoXCIuL2pRdWVyeU1peGluXCIpO1xuXG52YXIgX2pRdWVyeU1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2pRdWVyeU1peGluKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnZhciBUb2FzdE1lc3NhZ2VTcGVjID0ge1xuICBkaXNwbGF5TmFtZTogXCJUb2FzdE1lc3NhZ2VcIixcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICB2YXIgaWNvbkNsYXNzTmFtZXMgPSB7XG4gICAgICBlcnJvcjogXCJ0b2FzdC1lcnJvclwiLFxuICAgICAgaW5mbzogXCJ0b2FzdC1pbmZvXCIsXG4gICAgICBzdWNjZXNzOiBcInRvYXN0LXN1Y2Nlc3NcIixcbiAgICAgIHdhcm5pbmc6IFwidG9hc3Qtd2FybmluZ1wiXG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBjbGFzc05hbWU6IFwidG9hc3RcIixcbiAgICAgIGljb25DbGFzc05hbWVzOiBpY29uQ2xhc3NOYW1lcyxcbiAgICAgIHRpdGxlQ2xhc3NOYW1lOiBcInRvYXN0LXRpdGxlXCIsXG4gICAgICBtZXNzYWdlQ2xhc3NOYW1lOiBcInRvYXN0LW1lc3NhZ2VcIixcbiAgICAgIHRhcFRvRGlzbWlzczogdHJ1ZSxcbiAgICAgIGNsb3NlQnV0dG9uOiBmYWxzZVxuICAgIH07XG4gIH0sXG4gIGhhbmRsZU9uQ2xpY2s6IGZ1bmN0aW9uIGhhbmRsZU9uQ2xpY2soZXZlbnQpIHtcbiAgICB0aGlzLnByb3BzLmhhbmRsZU9uQ2xpY2soZXZlbnQpO1xuICAgIGlmICh0aGlzLnByb3BzLnRhcFRvRGlzbWlzcykge1xuICAgICAgdGhpcy5oaWRlVG9hc3QodHJ1ZSk7XG4gICAgfVxuICB9LFxuICBfaGFuZGxlX2Nsb3NlX2J1dHRvbl9jbGljazogZnVuY3Rpb24gX2hhbmRsZV9jbG9zZV9idXR0b25fY2xpY2soZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmhpZGVUb2FzdCh0cnVlKTtcbiAgfSxcbiAgX2hhbmRsZV9yZW1vdmU6IGZ1bmN0aW9uIF9oYW5kbGVfcmVtb3ZlKCkge1xuICAgIHRoaXMucHJvcHMuaGFuZGxlUmVtb3ZlKHRoaXMucHJvcHMudG9hc3RJZCk7XG4gIH0sXG4gIF9yZW5kZXJfY2xvc2VfYnV0dG9uOiBmdW5jdGlvbiBfcmVuZGVyX2Nsb3NlX2J1dHRvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jbG9zZUJ1dHRvbiA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJ0b2FzdC1jbG9zZS1idXR0b25cIiwgcm9sZTogXCJidXR0b25cIixcbiAgICAgIG9uQ2xpY2s6IHRoaXMuX2hhbmRsZV9jbG9zZV9idXR0b25fY2xpY2ssXG4gICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDogeyBfX2h0bWw6IFwiJnRpbWVzO1wiIH1cbiAgICB9KSA6IGZhbHNlO1xuICB9LFxuICBfcmVuZGVyX3RpdGxlX2VsZW1lbnQ6IGZ1bmN0aW9uIF9yZW5kZXJfdGl0bGVfZWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy50aXRsZSA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgY2xhc3NOYW1lOiB0aGlzLnByb3BzLnRpdGxlQ2xhc3NOYW1lIH0sXG4gICAgICB0aGlzLnByb3BzLnRpdGxlXG4gICAgKSA6IGZhbHNlO1xuICB9LFxuICBfcmVuZGVyX21lc3NhZ2VfZWxlbWVudDogZnVuY3Rpb24gX3JlbmRlcl9tZXNzYWdlX2VsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMubWVzc2FnZSA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgY2xhc3NOYW1lOiB0aGlzLnByb3BzLm1lc3NhZ2VDbGFzc05hbWUgfSxcbiAgICAgIHRoaXMucHJvcHMubWVzc2FnZVxuICAgICkgOiBmYWxzZTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGljb25DbGFzc05hbWUgPSB0aGlzLnByb3BzLmljb25DbGFzc05hbWUgfHwgdGhpcy5wcm9wcy5pY29uQ2xhc3NOYW1lc1t0aGlzLnByb3BzLnR5cGVdO1xuXG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyLmRlZmF1bHQpKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBpY29uQ2xhc3NOYW1lKSxcbiAgICAgICAgc3R5bGU6IHRoaXMucHJvcHMuc3R5bGUsXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlT25DbGljayxcbiAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLmhhbmRsZU1vdXNlRW50ZXIsXG4gICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5oYW5kbGVNb3VzZUxlYXZlXG4gICAgICB9LFxuICAgICAgdGhpcy5fcmVuZGVyX2Nsb3NlX2J1dHRvbigpLFxuICAgICAgdGhpcy5fcmVuZGVyX3RpdGxlX2VsZW1lbnQoKSxcbiAgICAgIHRoaXMuX3JlbmRlcl9tZXNzYWdlX2VsZW1lbnQoKVxuICAgICk7XG4gIH1cbn07XG5cbnZhciBhbmltYXRpb24gPSBleHBvcnRzLmFuaW1hdGlvbiA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVDbGFzcygoMCwgX3JlYWN0QWRkb25zVXBkYXRlMi5kZWZhdWx0KShUb2FzdE1lc3NhZ2VTcGVjLCB7XG4gIGRpc3BsYXlOYW1lOiB7ICRzZXQ6IFwiVG9hc3RNZXNzYWdlLmFuaW1hdGlvblwiIH0sXG4gIG1peGluczogeyAkc2V0OiBbX2FuaW1hdGlvbk1peGluMi5kZWZhdWx0XSB9XG59KSk7XG5cbnZhciBqUXVlcnkgPSBleHBvcnRzLmpRdWVyeSA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVDbGFzcygoMCwgX3JlYWN0QWRkb25zVXBkYXRlMi5kZWZhdWx0KShUb2FzdE1lc3NhZ2VTcGVjLCB7XG4gIGRpc3BsYXlOYW1lOiB7ICRzZXQ6IFwiVG9hc3RNZXNzYWdlLmpRdWVyeVwiIH0sXG4gIG1peGluczogeyAkc2V0OiBbX2pRdWVyeU1peGluMi5kZWZhdWx0XSB9XG59KSk7XG5cbi8qXG4gKiBhc3NpZ24gZGVmYXVsdCBub29wIGZ1bmN0aW9uc1xuICovXG5Ub2FzdE1lc3NhZ2VTcGVjLmhhbmRsZU1vdXNlRW50ZXIgPSBub29wO1xuVG9hc3RNZXNzYWdlU3BlYy5oYW5kbGVNb3VzZUxlYXZlID0gbm9vcDtcblRvYXN0TWVzc2FnZVNwZWMuaGlkZVRvYXN0ID0gbm9vcDtcblxudmFyIFRvYXN0TWVzc2FnZSA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVDbGFzcyhUb2FzdE1lc3NhZ2VTcGVjKTtcblxuVG9hc3RNZXNzYWdlLmFuaW1hdGlvbiA9IGFuaW1hdGlvbjtcblRvYXN0TWVzc2FnZS5qUXVlcnkgPSBqUXVlcnk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRvYXN0TWVzc2FnZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC10b2FzdHIvbGliL1RvYXN0TWVzc2FnZS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9SZWFjdFRyYW5zaXRpb25FdmVudHMgPSByZXF1aXJlKFwicmVhY3QvbGliL1JlYWN0VHJhbnNpdGlvbkV2ZW50c1wiKTtcblxudmFyIF9SZWFjdFRyYW5zaXRpb25FdmVudHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmVhY3RUcmFuc2l0aW9uRXZlbnRzKTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG52YXIgX2VsZW1lbnRDbGFzcyA9IHJlcXVpcmUoXCJlbGVtZW50LWNsYXNzXCIpO1xuXG52YXIgX2VsZW1lbnRDbGFzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9lbGVtZW50Q2xhc3MpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgVElDSyA9IDE3O1xudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zaXRpb246IG51bGwsIC8vIHNvbWUgZXhhbXBsZXMgZGVmaW5lZCBpbiBpbmRleC5zY3NzIChzY2FsZSwgZmFkZUluT3V0LCByb3RhdGUpXG4gICAgICBzaG93QW5pbWF0aW9uOiBcImFuaW1hdGVkIGJvdW5jZUluXCIsIC8vIG9yIG90aGVyIGFuaW1hdGlvbnMgZnJvbSBhbmltYXRlLmNzc1xuICAgICAgaGlkZUFuaW1hdGlvbjogXCJhbmltYXRlZCBib3VuY2VPdXRcIixcbiAgICAgIHRpbWVPdXQ6IDUwMDAsXG4gICAgICBleHRlbmRlZFRpbWVPdXQ6IDEwMDBcbiAgICB9O1xuICB9LFxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLmNsYXNzTmFtZVF1ZXVlID0gW107XG4gICAgdGhpcy5pc0hpZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IG51bGw7XG4gIH0sXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdGhpcy5faXNfbW91bnRlZCA9IHRydWU7XG4gICAgdGhpcy5fc2hvdygpO1xuICAgIHZhciBub2RlID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgdmFyIG9uSGlkZUNvbXBsZXRlID0gZnVuY3Rpb24gb25IaWRlQ29tcGxldGUoKSB7XG4gICAgICBpZiAoX3RoaXMuaXNIaWRpbmcpIHtcbiAgICAgICAgX3RoaXMuX3NldF9pc19oaWRpbmcoZmFsc2UpO1xuICAgICAgICBfUmVhY3RUcmFuc2l0aW9uRXZlbnRzMi5kZWZhdWx0LnJlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgb25IaWRlQ29tcGxldGUpO1xuICAgICAgICBfdGhpcy5faGFuZGxlX3JlbW92ZSgpO1xuICAgICAgfVxuICAgIH07XG4gICAgX1JlYWN0VHJhbnNpdGlvbkV2ZW50czIuZGVmYXVsdC5hZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIG9uSGlkZUNvbXBsZXRlKTtcblxuICAgIGlmICh0aGlzLnByb3BzLnRpbWVPdXQgPiAwKSB7XG4gICAgICB0aGlzLl9zZXRfaW50ZXJ2YWxfaWQoc2V0VGltZW91dCh0aGlzLmhpZGVUb2FzdCwgdGhpcy5wcm9wcy50aW1lT3V0KSk7XG4gICAgfVxuICB9LFxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5faXNfbW91bnRlZCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmludGVydmFsSWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmludGVydmFsSWQpO1xuICAgIH1cbiAgfSxcbiAgX3NldF90cmFuc2l0aW9uOiBmdW5jdGlvbiBfc2V0X3RyYW5zaXRpb24oaGlkZSkge1xuICAgIHZhciBhbmltYXRpb25UeXBlID0gaGlkZSA/IFwibGVhdmVcIiA6IFwiZW50ZXJcIjtcbiAgICB2YXIgbm9kZSA9IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICB2YXIgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy50cmFuc2l0aW9uICsgXCItXCIgKyBhbmltYXRpb25UeXBlO1xuICAgIHZhciBhY3RpdmVDbGFzc05hbWUgPSBjbGFzc05hbWUgKyBcIi1hY3RpdmVcIjtcblxuICAgIHZhciBlbmRMaXN0ZW5lciA9IGZ1bmN0aW9uIGVuZExpc3RlbmVyKGUpIHtcbiAgICAgIGlmIChlICYmIGUudGFyZ2V0ICE9PSBub2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNsYXNzTGlzdCA9ICgwLCBfZWxlbWVudENsYXNzMi5kZWZhdWx0KShub2RlKTtcbiAgICAgIGNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgIGNsYXNzTGlzdC5yZW1vdmUoYWN0aXZlQ2xhc3NOYW1lKTtcblxuICAgICAgX1JlYWN0VHJhbnNpdGlvbkV2ZW50czIuZGVmYXVsdC5yZW1vdmVFbmRFdmVudExpc3RlbmVyKG5vZGUsIGVuZExpc3RlbmVyKTtcbiAgICB9O1xuXG4gICAgX1JlYWN0VHJhbnNpdGlvbkV2ZW50czIuZGVmYXVsdC5hZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIGVuZExpc3RlbmVyKTtcblxuICAgICgwLCBfZWxlbWVudENsYXNzMi5kZWZhdWx0KShub2RlKS5hZGQoY2xhc3NOYW1lKTtcblxuICAgIC8vIE5lZWQgdG8gZG8gdGhpcyB0byBhY3R1YWxseSB0cmlnZ2VyIGEgdHJhbnNpdGlvbi5cbiAgICB0aGlzLl9xdWV1ZV9jbGFzcyhhY3RpdmVDbGFzc05hbWUpO1xuICB9LFxuICBfY2xlYXJfdHJhbnNpdGlvbjogZnVuY3Rpb24gX2NsZWFyX3RyYW5zaXRpb24oaGlkZSkge1xuICAgIHZhciBub2RlID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIHZhciBhbmltYXRpb25UeXBlID0gaGlkZSA/IFwibGVhdmVcIiA6IFwiZW50ZXJcIjtcbiAgICB2YXIgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy50cmFuc2l0aW9uICsgXCItXCIgKyBhbmltYXRpb25UeXBlO1xuICAgIHZhciBhY3RpdmVDbGFzc05hbWUgPSBjbGFzc05hbWUgKyBcIi1hY3RpdmVcIjtcblxuICAgIHZhciBjbGFzc0xpc3QgPSAoMCwgX2VsZW1lbnRDbGFzczIuZGVmYXVsdCkobm9kZSk7XG4gICAgY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgIGNsYXNzTGlzdC5yZW1vdmUoYWN0aXZlQ2xhc3NOYW1lKTtcbiAgfSxcbiAgX3NldF9hbmltYXRpb246IGZ1bmN0aW9uIF9zZXRfYW5pbWF0aW9uKGhpZGUpIHtcbiAgICB2YXIgbm9kZSA9IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICB2YXIgYW5pbWF0aW9ucyA9IHRoaXMuX2dldF9hbmltYXRpb25fY2xhc3NlcyhoaWRlKTtcbiAgICB2YXIgZW5kTGlzdGVuZXIgPSBmdW5jdGlvbiBlbmRMaXN0ZW5lcihlKSB7XG4gICAgICBpZiAoZSAmJiBlLnRhcmdldCAhPT0gbm9kZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFuaW1hdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYW5pbSkge1xuICAgICAgICByZXR1cm4gKDAsIF9lbGVtZW50Q2xhc3MyLmRlZmF1bHQpKG5vZGUpLnJlbW92ZShhbmltKTtcbiAgICAgIH0pO1xuXG4gICAgICBfUmVhY3RUcmFuc2l0aW9uRXZlbnRzMi5kZWZhdWx0LnJlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgZW5kTGlzdGVuZXIpO1xuICAgIH07XG5cbiAgICBfUmVhY3RUcmFuc2l0aW9uRXZlbnRzMi5kZWZhdWx0LmFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgZW5kTGlzdGVuZXIpO1xuXG4gICAgYW5pbWF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhbmltKSB7XG4gICAgICByZXR1cm4gKDAsIF9lbGVtZW50Q2xhc3MyLmRlZmF1bHQpKG5vZGUpLmFkZChhbmltKTtcbiAgICB9KTtcbiAgfSxcbiAgX2dldF9hbmltYXRpb25fY2xhc3NlczogZnVuY3Rpb24gX2dldF9hbmltYXRpb25fY2xhc3NlcyhoaWRlKSB7XG4gICAgdmFyIGFuaW1hdGlvbnMgPSBoaWRlID8gdGhpcy5wcm9wcy5oaWRlQW5pbWF0aW9uIDogdGhpcy5wcm9wcy5zaG93QW5pbWF0aW9uO1xuICAgIGlmIChcIltvYmplY3QgQXJyYXldXCIgPT09IHRvU3RyaW5nLmNhbGwoYW5pbWF0aW9ucykpIHtcbiAgICAgIHJldHVybiBhbmltYXRpb25zO1xuICAgIH0gZWxzZSBpZiAoXCJzdHJpbmdcIiA9PT0gdHlwZW9mIGFuaW1hdGlvbnMpIHtcbiAgICAgIHJldHVybiBhbmltYXRpb25zLnNwbGl0KFwiIFwiKTtcbiAgICB9XG4gIH0sXG4gIF9jbGVhcl9hbmltYXRpb246IGZ1bmN0aW9uIF9jbGVhcl9hbmltYXRpb24oaGlkZSkge1xuICAgIHZhciBub2RlID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIHZhciBhbmltYXRpb25zID0gdGhpcy5fZ2V0X2FuaW1hdGlvbl9jbGFzc2VzKGhpZGUpO1xuICAgIGFuaW1hdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYW5pbWF0aW9uKSB7XG4gICAgICByZXR1cm4gKDAsIF9lbGVtZW50Q2xhc3MyLmRlZmF1bHQpKG5vZGUpLnJlbW92ZShhbmltYXRpb24pO1xuICAgIH0pO1xuICB9LFxuICBfcXVldWVfY2xhc3M6IGZ1bmN0aW9uIF9xdWV1ZV9jbGFzcyhjbGFzc05hbWUpIHtcbiAgICB0aGlzLmNsYXNzTmFtZVF1ZXVlLnB1c2goY2xhc3NOYW1lKTtcblxuICAgIGlmICghdGhpcy50aW1lb3V0KSB7XG4gICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KHRoaXMuX2ZsdXNoX2NsYXNzX25hbWVfcXVldWUsIFRJQ0spO1xuICAgIH1cbiAgfSxcbiAgX2ZsdXNoX2NsYXNzX25hbWVfcXVldWU6IGZ1bmN0aW9uIF9mbHVzaF9jbGFzc19uYW1lX3F1ZXVlKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuX2lzX21vdW50ZWQpIHtcbiAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBub2RlID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKF90aGlzMik7XG4gICAgICAgIF90aGlzMi5jbGFzc05hbWVRdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICAgICAgICByZXR1cm4gKDAsIF9lbGVtZW50Q2xhc3MyLmRlZmF1bHQpKG5vZGUpLmFkZChjbGFzc05hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pKCk7XG4gICAgfVxuICAgIHRoaXMuY2xhc3NOYW1lUXVldWUubGVuZ3RoID0gMDtcbiAgICB0aGlzLnRpbWVvdXQgPSBudWxsO1xuICB9LFxuICBfc2hvdzogZnVuY3Rpb24gX3Nob3coKSB7XG4gICAgaWYgKHRoaXMucHJvcHMudHJhbnNpdGlvbikge1xuICAgICAgdGhpcy5fc2V0X3RyYW5zaXRpb24oKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuc2hvd0FuaW1hdGlvbikge1xuICAgICAgdGhpcy5fc2V0X2FuaW1hdGlvbigpO1xuICAgIH1cbiAgfSxcbiAgaGFuZGxlTW91c2VFbnRlcjogZnVuY3Rpb24gaGFuZGxlTW91c2VFbnRlcigpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5pbnRlcnZhbElkKTtcbiAgICB0aGlzLl9zZXRfaW50ZXJ2YWxfaWQobnVsbCk7XG4gICAgaWYgKHRoaXMuaXNIaWRpbmcpIHtcbiAgICAgIHRoaXMuX3NldF9pc19oaWRpbmcoZmFsc2UpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5oaWRlQW5pbWF0aW9uKSB7XG4gICAgICAgIHRoaXMuX2NsZWFyX2FuaW1hdGlvbih0cnVlKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy50cmFuc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuX2NsZWFyX3RyYW5zaXRpb24odHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBoYW5kbGVNb3VzZUxlYXZlOiBmdW5jdGlvbiBoYW5kbGVNb3VzZUxlYXZlKCkge1xuICAgIGlmICghdGhpcy5pc0hpZGluZyAmJiAodGhpcy5wcm9wcy50aW1lT3V0ID4gMCB8fCB0aGlzLnByb3BzLmV4dGVuZGVkVGltZU91dCA+IDApKSB7XG4gICAgICB0aGlzLl9zZXRfaW50ZXJ2YWxfaWQoc2V0VGltZW91dCh0aGlzLmhpZGVUb2FzdCwgdGhpcy5wcm9wcy5leHRlbmRlZFRpbWVPdXQpKTtcbiAgICB9XG4gIH0sXG4gIGhpZGVUb2FzdDogZnVuY3Rpb24gaGlkZVRvYXN0KG92ZXJyaWRlKSB7XG4gICAgaWYgKHRoaXMuaXNIaWRpbmcgfHwgdGhpcy5pbnRlcnZhbElkID09PSBudWxsICYmICFvdmVycmlkZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3NldF9pc19oaWRpbmcodHJ1ZSk7XG4gICAgaWYgKHRoaXMucHJvcHMudHJhbnNpdGlvbikge1xuICAgICAgdGhpcy5fc2V0X3RyYW5zaXRpb24odHJ1ZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmhpZGVBbmltYXRpb24pIHtcbiAgICAgIHRoaXMuX3NldF9hbmltYXRpb24odHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hhbmRsZV9yZW1vdmUoKTtcbiAgICB9XG4gIH0sXG4gIF9zZXRfaW50ZXJ2YWxfaWQ6IGZ1bmN0aW9uIF9zZXRfaW50ZXJ2YWxfaWQoaW50ZXJ2YWxJZCkge1xuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IGludGVydmFsSWQ7XG4gIH0sXG4gIF9zZXRfaXNfaGlkaW5nOiBmdW5jdGlvbiBfc2V0X2lzX2hpZGluZyhpc0hpZGluZykge1xuICAgIHRoaXMuaXNIaWRpbmcgPSBpc0hpZGluZztcbiAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC10b2FzdHIvbGliL1RvYXN0TWVzc2FnZS9hbmltYXRpb25NaXhpbi5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgUmVhY3RUcmFuc2l0aW9uRXZlbnRzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9FeGVjdXRpb25FbnZpcm9ubWVudCcpO1xuXG4vKipcbiAqIEVWRU5UX05BTUVfTUFQIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHdoaWNoIGV2ZW50IGZpcmVkIHdoZW4gYVxuICogdHJhbnNpdGlvbi9hbmltYXRpb24gZW5kcywgYmFzZWQgb24gdGhlIHN0eWxlIHByb3BlcnR5IHVzZWQgdG9cbiAqIGRlZmluZSB0aGF0IGV2ZW50LlxuICovXG52YXIgRVZFTlRfTkFNRV9NQVAgPSB7XG4gIHRyYW5zaXRpb25lbmQ6IHtcbiAgICAndHJhbnNpdGlvbic6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAnV2Via2l0VHJhbnNpdGlvbic6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICAnTW96VHJhbnNpdGlvbic6ICdtb3pUcmFuc2l0aW9uRW5kJyxcbiAgICAnT1RyYW5zaXRpb24nOiAnb1RyYW5zaXRpb25FbmQnLFxuICAgICdtc1RyYW5zaXRpb24nOiAnTVNUcmFuc2l0aW9uRW5kJ1xuICB9LFxuXG4gIGFuaW1hdGlvbmVuZDoge1xuICAgICdhbmltYXRpb24nOiAnYW5pbWF0aW9uZW5kJyxcbiAgICAnV2Via2l0QW5pbWF0aW9uJzogJ3dlYmtpdEFuaW1hdGlvbkVuZCcsXG4gICAgJ01vekFuaW1hdGlvbic6ICdtb3pBbmltYXRpb25FbmQnLFxuICAgICdPQW5pbWF0aW9uJzogJ29BbmltYXRpb25FbmQnLFxuICAgICdtc0FuaW1hdGlvbic6ICdNU0FuaW1hdGlvbkVuZCdcbiAgfVxufTtcblxudmFyIGVuZEV2ZW50cyA9IFtdO1xuXG5mdW5jdGlvbiBkZXRlY3RFdmVudHMoKSB7XG4gIHZhciB0ZXN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdmFyIHN0eWxlID0gdGVzdEVsLnN0eWxlO1xuXG4gIC8vIE9uIHNvbWUgcGxhdGZvcm1zLCBpbiBwYXJ0aWN1bGFyIHNvbWUgcmVsZWFzZXMgb2YgQW5kcm9pZCA0LngsXG4gIC8vIHRoZSB1bi1wcmVmaXhlZCBcImFuaW1hdGlvblwiIGFuZCBcInRyYW5zaXRpb25cIiBwcm9wZXJ0aWVzIGFyZSBkZWZpbmVkIG9uIHRoZVxuICAvLyBzdHlsZSBvYmplY3QgYnV0IHRoZSBldmVudHMgdGhhdCBmaXJlIHdpbGwgc3RpbGwgYmUgcHJlZml4ZWQsIHNvIHdlIG5lZWRcbiAgLy8gdG8gY2hlY2sgaWYgdGhlIHVuLXByZWZpeGVkIGV2ZW50cyBhcmUgdXNlYWJsZSwgYW5kIGlmIG5vdCByZW1vdmUgdGhlbVxuICAvLyBmcm9tIHRoZSBtYXBcbiAgaWYgKCEoJ0FuaW1hdGlvbkV2ZW50JyBpbiB3aW5kb3cpKSB7XG4gICAgZGVsZXRlIEVWRU5UX05BTUVfTUFQLmFuaW1hdGlvbmVuZC5hbmltYXRpb247XG4gIH1cblxuICBpZiAoISgnVHJhbnNpdGlvbkV2ZW50JyBpbiB3aW5kb3cpKSB7XG4gICAgZGVsZXRlIEVWRU5UX05BTUVfTUFQLnRyYW5zaXRpb25lbmQudHJhbnNpdGlvbjtcbiAgfVxuXG4gIGZvciAodmFyIGJhc2VFdmVudE5hbWUgaW4gRVZFTlRfTkFNRV9NQVApIHtcbiAgICB2YXIgYmFzZUV2ZW50cyA9IEVWRU5UX05BTUVfTUFQW2Jhc2VFdmVudE5hbWVdO1xuICAgIGZvciAodmFyIHN0eWxlTmFtZSBpbiBiYXNlRXZlbnRzKSB7XG4gICAgICBpZiAoc3R5bGVOYW1lIGluIHN0eWxlKSB7XG4gICAgICAgIGVuZEV2ZW50cy5wdXNoKGJhc2VFdmVudHNbc3R5bGVOYW1lXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5pZiAoRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NKSB7XG4gIGRldGVjdEV2ZW50cygpO1xufVxuXG4vLyBXZSB1c2UgdGhlIHJhdyB7YWRkfHJlbW92ZX1FdmVudExpc3RlbmVyKCkgY2FsbCBiZWNhdXNlIEV2ZW50TGlzdGVuZXJcbi8vIGRvZXMgbm90IGtub3cgaG93IHRvIHJlbW92ZSBldmVudCBsaXN0ZW5lcnMgYW5kIHdlIHJlYWxseSBzaG91bGRcbi8vIGNsZWFuIHVwLiBBbHNvLCB0aGVzZSBldmVudHMgYXJlIG5vdCB0cmlnZ2VyZWQgaW4gb2xkZXIgYnJvd3NlcnNcbi8vIHNvIHdlIHNob3VsZCBiZSBBLU9LIGhlcmUuXG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnROYW1lLCBldmVudExpc3RlbmVyKSB7XG4gIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xufVxuXG52YXIgUmVhY3RUcmFuc2l0aW9uRXZlbnRzID0ge1xuICBhZGRFbmRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiAobm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgIGlmIChlbmRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBJZiBDU1MgdHJhbnNpdGlvbnMgYXJlIG5vdCBzdXBwb3J0ZWQsIHRyaWdnZXIgYW4gXCJlbmQgYW5pbWF0aW9uXCJcbiAgICAgIC8vIGV2ZW50IGltbWVkaWF0ZWx5LlxuICAgICAgd2luZG93LnNldFRpbWVvdXQoZXZlbnRMaXN0ZW5lciwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVuZEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbmRFdmVudCkge1xuICAgICAgYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBlbmRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH0sXG5cbiAgcmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gKG5vZGUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgICBpZiAoZW5kRXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbmRFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZW5kRXZlbnQpIHtcbiAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZW5kRXZlbnQsIGV2ZW50TGlzdGVuZXIpO1xuICAgIH0pO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0VHJhbnNpdGlvbkV2ZW50cztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvUmVhY3RUcmFuc2l0aW9uRXZlbnRzLmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBFeGVjdXRpb25FbnZpcm9ubWVudFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbi8qKlxuICogU2ltcGxlLCBsaWdodHdlaWdodCBtb2R1bGUgYXNzaXN0aW5nIHdpdGggdGhlIGRldGVjdGlvbiBhbmQgY29udGV4dCBvZlxuICogV29ya2VyLiBIZWxwcyBhdm9pZCBjaXJjdWxhciBkZXBlbmRlbmNpZXMgYW5kIGFsbG93cyBjb2RlIHRvIHJlYXNvbiBhYm91dFxuICogd2hldGhlciBvciBub3QgdGhleSBhcmUgaW4gYSBXb3JrZXIsIGV2ZW4gaWYgdGhleSBuZXZlciBpbmNsdWRlIHRoZSBtYWluXG4gKiBgUmVhY3RXb3JrZXJgIGRlcGVuZGVuY3kuXG4gKi9cbnZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IHtcblxuICBjYW5Vc2VET006IGNhblVzZURPTSxcblxuICBjYW5Vc2VXb3JrZXJzOiB0eXBlb2YgV29ya2VyICE9PSAndW5kZWZpbmVkJyxcblxuICBjYW5Vc2VFdmVudExpc3RlbmVyczogY2FuVXNlRE9NICYmICEhKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyIHx8IHdpbmRvdy5hdHRhY2hFdmVudCksXG5cbiAgY2FuVXNlVmlld3BvcnQ6IGNhblVzZURPTSAmJiAhIXdpbmRvdy5zY3JlZW4sXG5cbiAgaXNJbldvcmtlcjogIWNhblVzZURPTSAvLyBGb3Igbm93LCB0aGlzIGlzIHRydWUgLSBtaWdodCBjaGFuZ2UgaW4gdGhlIGZ1dHVyZS5cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFeGVjdXRpb25FbnZpcm9ubWVudDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9mYmpzL2xpYi9FeGVjdXRpb25FbnZpcm9ubWVudC5qc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdHMpIHtcbiAgcmV0dXJuIG5ldyBFbGVtZW50Q2xhc3Mob3B0cylcbn1cblxuZnVuY3Rpb24gaW5kZXhPZihhcnIsIHByb3ApIHtcbiAgaWYgKGFyci5pbmRleE9mKSByZXR1cm4gYXJyLmluZGV4T2YocHJvcClcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFyci5sZW5ndGg7IGkgPCBsZW47IGkrKylcbiAgICBpZiAoYXJyW2ldID09PSBwcm9wKSByZXR1cm4gaVxuICByZXR1cm4gLTFcbn1cblxuZnVuY3Rpb24gRWxlbWVudENsYXNzKG9wdHMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEVsZW1lbnRDbGFzcykpIHJldHVybiBuZXcgRWxlbWVudENsYXNzKG9wdHMpXG4gIHZhciBzZWxmID0gdGhpc1xuICBpZiAoIW9wdHMpIG9wdHMgPSB7fVxuXG4gIC8vIHNpbWlsYXIgZG9pbmcgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCBidXQgd29ya3MgaW4gSUU4XG4gIGlmIChvcHRzLm5vZGVUeXBlKSBvcHRzID0ge2VsOiBvcHRzfVxuXG4gIHRoaXMub3B0cyA9IG9wdHNcbiAgdGhpcy5lbCA9IG9wdHMuZWwgfHwgZG9jdW1lbnQuYm9keVxuICBpZiAodHlwZW9mIHRoaXMuZWwgIT09ICdvYmplY3QnKSB0aGlzLmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmVsKVxufVxuXG5FbGVtZW50Q2xhc3MucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICB2YXIgZWwgPSB0aGlzLmVsXG4gIGlmICghZWwpIHJldHVyblxuICBpZiAoZWwuY2xhc3NOYW1lID09PSBcIlwiKSByZXR1cm4gZWwuY2xhc3NOYW1lID0gY2xhc3NOYW1lXG4gIHZhciBjbGFzc2VzID0gZWwuY2xhc3NOYW1lLnNwbGl0KCcgJylcbiAgaWYgKGluZGV4T2YoY2xhc3NlcywgY2xhc3NOYW1lKSA+IC0xKSByZXR1cm4gY2xhc3Nlc1xuICBjbGFzc2VzLnB1c2goY2xhc3NOYW1lKVxuICBlbC5jbGFzc05hbWUgPSBjbGFzc2VzLmpvaW4oJyAnKVxuICByZXR1cm4gY2xhc3Nlc1xufVxuXG5FbGVtZW50Q2xhc3MucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICB2YXIgZWwgPSB0aGlzLmVsXG4gIGlmICghZWwpIHJldHVyblxuICBpZiAoZWwuY2xhc3NOYW1lID09PSBcIlwiKSByZXR1cm5cbiAgdmFyIGNsYXNzZXMgPSBlbC5jbGFzc05hbWUuc3BsaXQoJyAnKVxuICB2YXIgaWR4ID0gaW5kZXhPZihjbGFzc2VzLCBjbGFzc05hbWUpXG4gIGlmIChpZHggPiAtMSkgY2xhc3Nlcy5zcGxpY2UoaWR4LCAxKVxuICBlbC5jbGFzc05hbWUgPSBjbGFzc2VzLmpvaW4oJyAnKVxuICByZXR1cm4gY2xhc3Nlc1xufVxuXG5FbGVtZW50Q2xhc3MucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICB2YXIgZWwgPSB0aGlzLmVsXG4gIGlmICghZWwpIHJldHVyblxuICB2YXIgY2xhc3NlcyA9IGVsLmNsYXNzTmFtZS5zcGxpdCgnICcpXG4gIHJldHVybiBpbmRleE9mKGNsYXNzZXMsIGNsYXNzTmFtZSkgPiAtMVxufVxuXG5FbGVtZW50Q2xhc3MucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICB2YXIgZWwgPSB0aGlzLmVsXG4gIGlmICghZWwpIHJldHVyblxuICBpZiAodGhpcy5oYXMoY2xhc3NOYW1lKSkgdGhpcy5yZW1vdmUoY2xhc3NOYW1lKVxuICBlbHNlIHRoaXMuYWRkKGNsYXNzTmFtZSlcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2VsZW1lbnQtY2xhc3MvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gY2FsbF9zaG93X21ldGhvZCgkbm9kZSwgcHJvcHMpIHtcbiAgJG5vZGVbcHJvcHMuc2hvd01ldGhvZF0oe1xuICAgIGR1cmF0aW9uOiBwcm9wcy5zaG93RHVyYXRpb24sXG4gICAgZWFzaW5nOiBwcm9wcy5zaG93RWFzaW5nXG4gIH0pO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdHlsZToge1xuICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIiB9LFxuICAgICAgLy8gZWZmZWN0aXZlICQuaGlkZSgpXG4gICAgICBzaG93TWV0aG9kOiBcImZhZGVJblwiLCAvLyBzbGlkZURvd24sIGFuZCBzaG93IGFyZSBidWlsdCBpbnRvIGpRdWVyeVxuICAgICAgc2hvd0R1cmF0aW9uOiAzMDAsXG4gICAgICBzaG93RWFzaW5nOiBcInN3aW5nXCIsIC8vIGFuZCBsaW5lYXIgYXJlIGJ1aWx0IGludG8galF1ZXJ5XG4gICAgICBoaWRlTWV0aG9kOiBcImZhZGVPdXRcIixcbiAgICAgIGhpZGVEdXJhdGlvbjogMTAwMCxcbiAgICAgIGhpZGVFYXNpbmc6IFwic3dpbmdcIixcbiAgICAgIC8vXG4gICAgICB0aW1lT3V0OiA1MDAwLFxuICAgICAgZXh0ZW5kZWRUaW1lT3V0OiAxMDAwXG4gICAgfTtcbiAgfSxcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGludGVydmFsSWQ6IG51bGwsXG4gICAgICBpc0hpZGluZzogZmFsc2VcbiAgICB9O1xuICB9LFxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY2FsbF9zaG93X21ldGhvZCh0aGlzLl9nZXRfJF9ub2RlKCksIHRoaXMucHJvcHMpO1xuICAgIGlmICh0aGlzLnByb3BzLnRpbWVPdXQgPiAwKSB7XG4gICAgICB0aGlzLl9zZXRfaW50ZXJ2YWxfaWQoc2V0VGltZW91dCh0aGlzLmhpZGVUb2FzdCwgdGhpcy5wcm9wcy50aW1lT3V0KSk7XG4gICAgfVxuICB9LFxuICBoYW5kbGVNb3VzZUVudGVyOiBmdW5jdGlvbiBoYW5kbGVNb3VzZUVudGVyKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnN0YXRlLmludGVydmFsSWQpO1xuICAgIHRoaXMuX3NldF9pbnRlcnZhbF9pZChudWxsKTtcbiAgICB0aGlzLl9zZXRfaXNfaGlkaW5nKGZhbHNlKTtcblxuICAgIGNhbGxfc2hvd19tZXRob2QodGhpcy5fZ2V0XyRfbm9kZSgpLnN0b3AodHJ1ZSwgdHJ1ZSksIHRoaXMucHJvcHMpO1xuICB9LFxuICBoYW5kbGVNb3VzZUxlYXZlOiBmdW5jdGlvbiBoYW5kbGVNb3VzZUxlYXZlKCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5pc0hpZGluZyAmJiAodGhpcy5wcm9wcy50aW1lT3V0ID4gMCB8fCB0aGlzLnByb3BzLmV4dGVuZGVkVGltZU91dCA+IDApKSB7XG4gICAgICB0aGlzLl9zZXRfaW50ZXJ2YWxfaWQoc2V0VGltZW91dCh0aGlzLmhpZGVUb2FzdCwgdGhpcy5wcm9wcy5leHRlbmRlZFRpbWVPdXQpKTtcbiAgICB9XG4gIH0sXG4gIGhpZGVUb2FzdDogZnVuY3Rpb24gaGlkZVRvYXN0KG92ZXJyaWRlKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaXNIaWRpbmcgfHwgdGhpcy5zdGF0ZS5pbnRlcnZhbElkID09PSBudWxsICYmICFvdmVycmlkZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgaXNIaWRpbmc6IHRydWUgfSk7XG5cbiAgICB0aGlzLl9nZXRfJF9ub2RlKClbdGhpcy5wcm9wcy5oaWRlTWV0aG9kXSh7XG4gICAgICBkdXJhdGlvbjogdGhpcy5wcm9wcy5oaWRlRHVyYXRpb24sXG4gICAgICBlYXNpbmc6IHRoaXMucHJvcHMuaGlkZUVhc2luZyxcbiAgICAgIGNvbXBsZXRlOiB0aGlzLl9oYW5kbGVfcmVtb3ZlXG4gICAgfSk7XG4gIH0sXG4gIF9nZXRfJF9ub2RlOiBmdW5jdGlvbiBfZ2V0XyRfbm9kZSgpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuICAgIHJldHVybiBqUXVlcnkoX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpKTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVuZGVmICovXG4gIH0sXG4gIF9zZXRfaW50ZXJ2YWxfaWQ6IGZ1bmN0aW9uIF9zZXRfaW50ZXJ2YWxfaWQoaW50ZXJ2YWxJZCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW50ZXJ2YWxJZDogaW50ZXJ2YWxJZFxuICAgIH0pO1xuICB9LFxuICBfc2V0X2lzX2hpZGluZzogZnVuY3Rpb24gX3NldF9pc19oaWRpbmcoaXNIaWRpbmcpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzSGlkaW5nOiBpc0hpZGluZ1xuICAgIH0pO1xuICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LXRvYXN0ci9saWIvVG9hc3RNZXNzYWdlL2pRdWVyeU1peGluLmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGFnZUJ1dHRvbiBmcm9tICcuL1BhZ2VCdXR0b24uanMnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4uL0NvbnN0JztcblxuY2xhc3MgUGFnaW5hdGlvbkxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNoYW5nZVBhZ2UocGFnZSkge1xuICAgIGlmIChwYWdlID09IHRoaXMucHJvcHMucHJlUGFnZSkge1xuICAgICAgcGFnZSA9IHRoaXMucHJvcHMuY3VyclBhZ2UgLSAxIDwgMSA/IDEgOiB0aGlzLnByb3BzLmN1cnJQYWdlIC0gMTtcbiAgICB9IGVsc2UgaWYgKHBhZ2UgPT0gdGhpcy5wcm9wcy5uZXh0UGFnZSkge1xuICAgICAgcGFnZSA9IHRoaXMucHJvcHMuY3VyclBhZ2UgKyAxID4gdGhpcy50b3RhbFBhZ2VzID8gdGhpcy50b3RhbFBhZ2VzIDogdGhpcy5wcm9wcy5jdXJyUGFnZSArIDE7XG4gICAgfSBlbHNlIGlmIChwYWdlID09IHRoaXMucHJvcHMubGFzdFBhZ2UpIHtcbiAgICAgIHBhZ2UgPSB0aGlzLnRvdGFsUGFnZXM7XG4gICAgfSBlbHNlIGlmIChwYWdlID09IHRoaXMucHJvcHMuZmlyc3RQYWdlKSB7XG4gICAgICBwYWdlID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFnZSA9IHBhcnNlSW50KHBhZ2UpO1xuICAgIH1cblxuICAgIGlmIChwYWdlICE9IHRoaXMucHJvcHMuY3VyclBhZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMuY2hhbmdlUGFnZShwYWdlLCB0aGlzLnByb3BzLnNpemVQZXJQYWdlKTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTaXplUGVyUGFnZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3Qgc2VsZWN0U2l6ZSA9IHBhcnNlSW50KGUuY3VycmVudFRhcmdldC50ZXh0KTtcbiAgICBsZXQgeyBjdXJyUGFnZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoc2VsZWN0U2l6ZSAhPSB0aGlzLnByb3BzLnNpemVQZXJQYWdlKSB7XG4gICAgICB0aGlzLnRvdGFsUGFnZXMgPSBNYXRoLmNlaWwodGhpcy5wcm9wcy5kYXRhU2l6ZSAvIHNlbGVjdFNpemUpO1xuICAgICAgaWYgKGN1cnJQYWdlID4gdGhpcy50b3RhbFBhZ2VzKVxuICAgICAgICBjdXJyUGFnZSA9IHRoaXMudG90YWxQYWdlcztcblxuICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VQYWdlKGN1cnJQYWdlLCBzZWxlY3RTaXplKTtcbiAgICAgIGlmKHRoaXMucHJvcHMub25TaXplUGVyUGFnZUxpc3Qpe1xuICAgICAgICB0aGlzLnByb3BzLm9uU2l6ZVBlclBhZ2VMaXN0KHNlbGVjdFNpemUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSBNYXRoLmNlaWwodGhpcy5wcm9wcy5kYXRhU2l6ZSAvIHRoaXMucHJvcHMuc2l6ZVBlclBhZ2UpO1xuICAgIHZhciBwYWdlQnRucyA9IHRoaXMubWFrZVBhZ2UoKTtcbiAgICB2YXIgcGFnZUxpc3RTdHlsZSA9IHtcbiAgICAgIGZsb2F0OiBcInJpZ2h0XCIsXG4gICAgICBtYXJnaW5Ub3A6IFwiMHB4XCIgIC8vb3ZlcnJpZGUgdGhlIG1hcmdpbi10b3AgZGVmaW5lZCBpbiAucGFnaW5hdGlvbiBjbGFzcyBpbiBib290c3RyYXAuXG4gICAgfVxuXG4gICAgdmFyIHNpemVQZXJQYWdlTGlzdCA9IHRoaXMucHJvcHMuc2l6ZVBlclBhZ2VMaXN0Lm1hcCgoc2l6ZVBlclBhZ2UpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBrZXk9e3NpemVQZXJQYWdlfSByb2xlPVwicHJlc2VudGF0aW9uXCI+XG4gICAgICAgICAgPGEgcm9sZT1cIm1lbnVpdGVtXCIgdGFiSW5kZXg9XCItMVwiIGhyZWY9XCIjXCIgb25DbGljaz17dGhpcy5jaGFuZ2VTaXplUGVyUGFnZS5iaW5kKHRoaXMpfT57c2l6ZVBlclBhZ2V9PC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogMTUgfX0+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLnNpemVQZXJQYWdlTGlzdC5sZW5ndGggPiAxXG4gICAgICAgICAgPyA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0IGRyb3Bkb3duLXRvZ2dsZVwiIHR5cGU9XCJidXR0b25cIiBpZD1cInBhZ2VEcm9wRG93blwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2l6ZVBlclBhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJldFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiIHJvbGU9XCJtZW51XCIgYXJpYS1sYWJlbGxlZGJ5PVwicGFnZURyb3BEb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3NpemVQZXJQYWdlTGlzdH1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCIgc3R5bGU9e3BhZ2VMaXN0U3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICB7cGFnZUJ0bnN9XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCIgc3R5bGU9e3BhZ2VMaXN0U3R5bGV9PlxuICAgICAgICAgICAgICAgIHtwYWdlQnRuc31cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBtYWtlUGFnZSgpIHtcbiAgICB2YXIgcGFnZXMgPSB0aGlzLmdldFBhZ2VzKCk7XG4gICAgcmV0dXJuIHBhZ2VzLm1hcChmdW5jdGlvbiAocGFnZSkge1xuICAgICAgdmFyIGlzQWN0aXZlID0gcGFnZSA9PT0gdGhpcy5wcm9wcy5jdXJyUGFnZTtcbiAgICAgIHZhciBkaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgdmFyIGhpZGRlbiA9IGZhbHNlO1xuICAgICAgaWYodGhpcy5wcm9wcy5jdXJyUGFnZSA9PSAxICYmXG4gICAgICAgIChwYWdlID09PSB0aGlzLnByb3BzLmZpcnN0UGFnZSB8fCBwYWdlID09PSB0aGlzLnByb3BzLnByZVBhZ2UpKXtcbiAgICAgICAgICBkaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgaGlkZGVuID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmKHRoaXMucHJvcHMuY3VyclBhZ2UgPT0gdGhpcy50b3RhbFBhZ2VzICYmXG4gICAgICAgIChwYWdlID09PSB0aGlzLnByb3BzLm5leHRQYWdlIHx8IHBhZ2UgPT09IHRoaXMucHJvcHMubGFzdFBhZ2UpKXtcbiAgICAgICAgICBkaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgaGlkZGVuID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxQYWdlQnV0dG9uIGNoYW5nZVBhZ2U9e3RoaXMuY2hhbmdlUGFnZS5iaW5kKHRoaXMpfSBhY3RpdmU9e2lzQWN0aXZlfSBkaXNhYmxlPXtkaXNhYmxlZH0gaGlkZGVuPXtoaWRkZW59IGtleT17cGFnZX0+e3BhZ2V9PC9QYWdlQnV0dG9uPlxuICAgICAgKVxuICAgIH0sIHRoaXMpO1xuICB9XG5cbiAgZ2V0UGFnZXMoKSB7XG4gICAgdmFyIHN0YXJ0UGFnZSA9IDEsIGVuZFBhZ2UgPSB0aGlzLnRvdGFsUGFnZXM7XG5cbiAgICBzdGFydFBhZ2UgPSBNYXRoLm1heCh0aGlzLnByb3BzLmN1cnJQYWdlIC0gTWF0aC5mbG9vcih0aGlzLnByb3BzLnBhZ2luYXRpb25TaXplIC8gMiksIDEpO1xuICAgIGVuZFBhZ2UgPSBzdGFydFBhZ2UgKyB0aGlzLnByb3BzLnBhZ2luYXRpb25TaXplIC0gMTtcblxuICAgIGlmIChlbmRQYWdlID4gdGhpcy50b3RhbFBhZ2VzKSB7XG4gICAgICBlbmRQYWdlID0gdGhpcy50b3RhbFBhZ2VzO1xuICAgICAgc3RhcnRQYWdlID0gZW5kUGFnZSAtIHRoaXMucHJvcHMucGFnaW5hdGlvblNpemUgKyAxO1xuICAgIH1cbiAgICB2YXIgcGFnZXM7XG4gICAgaWYoc3RhcnRQYWdlICE9IDEgJiYgdGhpcy50b3RhbFBhZ2VzID4gdGhpcy5wcm9wcy5wYWdpbmF0aW9uU2l6ZSkge1xuICAgICAgcGFnZXMgPSBbdGhpcy5wcm9wcy5maXJzdFBhZ2UsIHRoaXMucHJvcHMucHJlUGFnZV07XG4gICAgfSBlbHNlIGlmICh0aGlzLnRvdGFsUGFnZXMgPiAxKSB7XG4gICAgICBwYWdlcyA9IFt0aGlzLnByb3BzLnByZVBhZ2VdO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHBhZ2VzID0gW11cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IHN0YXJ0UGFnZTsgaSA8PSBlbmRQYWdlOyBpKyspIHtcbiAgICAgIGlmIChpID4gMClwYWdlcy5wdXNoKGkpO1xuICAgIH1cbiAgICBpZiAoZW5kUGFnZSAhPSB0aGlzLnRvdGFsUGFnZXMpIHtcbiAgICAgIHBhZ2VzLnB1c2godGhpcy5wcm9wcy5uZXh0UGFnZSk7XG4gICAgICBwYWdlcy5wdXNoKHRoaXMucHJvcHMubGFzdFBhZ2UpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50b3RhbFBhZ2VzID4gMSl7XG4gICAgICBwYWdlcy5wdXNoKHRoaXMucHJvcHMubmV4dFBhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gcGFnZXM7XG4gIH1cbn1cblBhZ2luYXRpb25MaXN0LnByb3BUeXBlcyA9IHtcbiAgY3VyclBhZ2U6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIHNpemVQZXJQYWdlOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICBkYXRhU2l6ZTogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgY2hhbmdlUGFnZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIHNpemVQZXJQYWdlTGlzdDogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuICBwYWdpbmF0aW9uU2l6ZTogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgcmVtb3RlOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgb25TaXplUGVyUGFnZUxpc3Q6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBwcmVQYWdlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5QYWdpbmF0aW9uTGlzdC5kZWZhdWx0UHJvcHMgPSB7XG4gIHNpemVQZXJQYWdlOiBDb25zdC5TSVpFX1BFUl9QQUdFXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uTGlzdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3BhZ2luYXRpb24vUGFnaW5hdGlvbkxpc3QuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzU2V0IGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jbGFzcyBQYWdlQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cbiAgcGFnZUJ0bkNsaWNrKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLmNoYW5nZVBhZ2UoZS5jdXJyZW50VGFyZ2V0LnRleHRDb250ZW50KTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHZhciBjbGFzc2VzID0gY2xhc3NTZXQoe1xuICAgICAgICAnYWN0aXZlJzogdGhpcy5wcm9wcy5hY3RpdmUsXG4gICAgICAgICdkaXNhYmxlZCc6IHRoaXMucHJvcHMuZGlzYWJsZSxcbiAgICAgICAgJ2hpZGRlbic6IHRoaXMucHJvcHMuaGlkZGVuXG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlc30+PGEgaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLnBhZ2VCdG5DbGljay5iaW5kKHRoaXMpfT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2E+PC9saT5cbiAgICApXG4gIH1cbn1cblBhZ2VCdXR0b24ucHJvcFR5cGVzID0ge1xuICBjaGFuZ2VQYWdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgYWN0aXZlOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgZGlzYWJsZTogUmVhY3QuUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VCdXR0b247XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wYWdpbmF0aW9uL1BhZ2VCdXR0b24uanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzU2V0IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4uL0NvbnN0JztcbmltcG9ydCBFZGl0b3IgZnJvbSAnLi4vRWRpdG9yJztcbmltcG9ydCBOb3RpZmllciBmcm9tICcuLi9Ob3RpZmljYXRpb24uanMnO1xuXG5jbGFzcyBUb29sQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuICAgIHRoaXMudGltZW91dGVDbGVhcj0wO1xuICAgIHRoaXMubW9kYWxDbGFzc05hbWU7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzSW5zZXJ0Um93VHJpZ2dlcjogdHJ1ZSxcbiAgICAgIHZhbGlkYXRlU3RhdGU6bnVsbCxcbiAgICAgIHNoYWtlRWRpdG9yOmZhbHNlLFxuICAgICAgc2hvd1NlbGVjdGVkOiBmYWxzZVxuICAgIH07XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICB0aGlzLmNsZWFyVGltZW91dCgpO1xuICB9XG4gIGNsZWFyVGltZW91dCgpIHtcbiAgICBpZih0aGlzLnRpbWVvdXRlQ2xlYXIpe1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dGVDbGVhcik7XG4gICAgICB0aGlzLnRpbWVvdXRlQ2xlYXI9MDtcbiAgICB9XG4gIH1cblxuICBjaGVja0FuZFBhcnNlRm9ybSgpe1xuICAgIHZhciB0cz10aGlzLG5ld09iaiA9IHt9LGlzVmFsaWQ9dHJ1ZSx0ZW1wVmFsdWUsdGVtcE1zZyx2YWxpZGF0ZVN0YXRlPXt9O1xuICAgIHRoaXMucHJvcHMuY29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uKGNvbHVtbiwgaSl7XG4gICAgICBpZihjb2x1bW4uYXV0b1ZhbHVlKXsvL3doZW4geW91IHdhbnQgc2FtZSBhdXRvIGdlbmVyYXRlIHZhbHVlIGFuZCBub3QgYWxsb3cgZWRpdCwgZXhhbXBsZSBJRCBmaWVsZFxuICAgICAgICB0ZW1wVmFsdWU9dHlwZW9mIGNvbHVtbi5hdXRvVmFsdWU9PSdmdW5jdGlvbic/Y29sdW1uLmF1dG9WYWx1ZSgpOignYXV0b3ZhbHVlLScrbmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGxldCBkb20gPSB0aGlzLnJlZnNbY29sdW1uLmZpZWxkK2ldO1xuICAgICAgICB0ZW1wVmFsdWUgPSBkb20udmFsdWU7XG5cbiAgICAgICAgaWYoY29sdW1uLmVkaXRhYmxlICYmIGNvbHVtbi5lZGl0YWJsZS50eXBlID09ICdjaGVja2JveCcpe1xuICAgICAgICAgIGxldCB2YWx1ZXMgPSBkb20udmFsdWUuc3BsaXQoJzonKTtcbiAgICAgICAgICB0ZW1wVmFsdWUgPSBkb20uY2hlY2tlZD8gdmFsdWVzWzBdOnZhbHVlc1sxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGNvbHVtbi5lZGl0YWJsZSYmY29sdW1uLmVkaXRhYmxlLnZhbGlkYXRvcil7Ly9wcm9jZXNzIHZhbGlkYXRlXG4gICAgICAgICAgdGVtcE1zZz0gY29sdW1uLmVkaXRhYmxlLnZhbGlkYXRvcih0ZW1wVmFsdWUpXG4gICAgICAgICAgaWYodGVtcE1zZyE9PXRydWUpe1xuICAgICAgICAgICAgaXNWYWxpZD1mYWxzZTtcbiAgICAgICAgICAgIHZhbGlkYXRlU3RhdGVbY29sdW1uLmZpZWxkXT10ZW1wTXNnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBuZXdPYmpbY29sdW1uLmZpZWxkXSA9dGVtcFZhbHVlO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgaWYoaXNWYWxpZCl7XG4gICAgICByZXR1cm4gbmV3T2JqO1xuICAgIH1lbHNle1xuICAgICAgdHMuY2xlYXJUaW1lb3V0KCk7XG4gICAgICAvL3Nob3cgZXJyb3IgaW4gZm9ybSBhbmQgc2hha2UgaXRcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlU3RhdGU6dmFsaWRhdGVTdGF0ZSxzaGFrZUVkaXRvcjp0cnVlfSk7XG4gICAgICAvL25vdGlmaWVyIGVycm9yXG4gICAgICB0cy5yZWZzLm5vdGlmaWVyLm5vdGljZSgnZXJyb3InLFwiRm9ybSB2YWxpZGF0ZSBlcnJvcnMsIHBsZWFzZSBjaGVja2luZyFcIixcIlByZXNzZWQgRVNDIGNhbiBjYW5jZWxcIik7XG4gICAgICAvL2NsZWFyIGFuaW1hdGUgY2xhc3NcbiAgICAgIHRzLnRpbWVvdXRlQ2xlYXI9c2V0VGltZW91dChmdW5jdGlvbigpe3RzLnNldFN0YXRlKHtzaGFrZUVkaXRvcjpmYWxzZX0pO30sMzAwKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVNhdmVCdG5DbGljayhlKXtcbiAgICB2YXIgbmV3T2JqID0gdGhpcy5jaGVja0FuZFBhcnNlRm9ybSgpO1xuICAgIGlmKCFuZXdPYmopey8vdmFsaWRhdGUgZXJyb3JzXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBtc2cgPSB0aGlzLnByb3BzLm9uQWRkUm93KG5ld09iaik7XG4gICAgaWYobXNnKSB7XG4gICAgICB2YXIgdHM9dGhpcztcbiAgICAgIHRzLnJlZnMubm90aWZpZXIubm90aWNlKCdlcnJvcicsbXNnLFwiUHJlc3NlZCBFU0MgY2FuIGNhbmNlbFwiKTtcbiAgICAgIHRzLmNsZWFyVGltZW91dCgpO1xuICAgICAgLy9zaGFrZSBmb3JtIGFuZCBoYWNrIHByZXZlbnQgbW9kYWwgaGlkZVxuICAgICAgdHMuc2V0U3RhdGUoe3NoYWtlRWRpdG9yOnRydWUsdmFsaWRhdGVTdGF0ZTpcInRoaXMgaXMgaGFjayBmb3IgcHJldmVudCBib290c3RyYXAgbW9kYWwgaGlkZVwifSk7XG4gICAgICAvL2NsZWFyIGFuaW1hdGUgY2xhc3NcbiAgICAgIHRzLnRpbWVvdXRlQ2xlYXI9c2V0VGltZW91dChmdW5jdGlvbigpe3RzLnNldFN0YXRlKHtzaGFrZUVkaXRvcjpmYWxzZX0pO30sMzAwKTtcbiAgICB9IGVsc2V7XG4gICAgICAvL3Jlc2V0IHN0YXRlIGFuZCBoaWRlIG1vZGFsIGhpZGVcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB2YWxpZGF0ZVN0YXRlOm51bGwsXG4gICAgICAgIHNoYWtlRWRpdG9yOmZhbHNlXG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIrXCJtb2RhbC1iYWNrZHJvcFwiKS5jbGljaygpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiK3RoaXMubW9kYWxDbGFzc05hbWUpLmNsaWNrKCk7XG4gICAgICB9KTtcbiAgICAgIC8vcmVzZXQgZm9ybVxuICAgICAgdGhpcy5yZWZzLmZvcm0ucmVzZXQoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTaG93T25seVRvZ2dsZSA9IGUgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd1NlbGVjdGVkOiAhdGhpcy5zdGF0ZS5zaG93U2VsZWN0ZWRcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLm9uU2hvd09ubHlTZWxlY3RlZCgpO1xuICB9XG5cbiAgaGFuZGxlRHJvcFJvd0J0bkNsaWNrKGUpe1xuICAgIHRoaXMucHJvcHMub25Ecm9wUm93KCk7XG4gIH1cblxuICBoYW5kbGVDbG9zZUJ0bihlKXtcbiAgICB0aGlzLnJlZnMud2FybmluZy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cblxuICBoYW5kbGVLZXlVcChlKXtcbiAgICB0aGlzLnByb3BzLm9uU2VhcmNoKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBoYW5kbGVFeHBvcnRDU1YoKSB7XG4gICAgdGhpcy5wcm9wcy5vbkV4cG9ydENTVigpO1xuICB9XG5cbiAgaGFuZGxlQ2xlYXJCdG5DbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnJlZnMuc2VhY2hJbnB1dC52YWx1ZSA9ICcnO1xuICAgIHRoaXMucHJvcHMub25TZWFyY2goJycpO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgdGhpcy5tb2RhbENsYXNzTmFtZSA9IFwiYnMtdGFibGUtbW9kYWwtc21cIituZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB2YXIgaW5zZXJ0QnRuID0gdGhpcy5wcm9wcy5lbmFibGVJbnNlcnQ/XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5wcm9wcy5vbkFkZFJvd0JlZ2lufSBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gcmVhY3QtYnMtdGFibGUtYWRkLWJ0blwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD17Jy4nK3RoaXMubW9kYWxDbGFzc05hbWV9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXCI+PC9pPiBOZXc8L2J1dHRvbj46bnVsbDtcblxuICAgIHZhciBkZWxldGVCdG4gPSB0aGlzLnByb3BzLmVuYWJsZURlbGV0ZT9cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmcgcmVhY3QtYnMtdGFibGUtZGVsLWJ0blwiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIGRhdGEtcGxhY2VtZW50PVwicmlnaHRcIiB0aXRsZT1cIkRyb3Agc2VsZWN0ZWQgcm93XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRHJvcFJvd0J0bkNsaWNrLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmFzaFwiPjwvaT4gRGVsZXRlXG4gICAgICAgICAgPC9idXR0b24+Om51bGw7XG5cbiAgICB2YXIgc2VhcmNoVGV4dElucHV0ID0gdGhpcy5yZW5kZXJTZWFyY2hQYW5lbCgpO1xuXG4gICAgdmFyIHNob3dTZWxlY3RlZE9ubHlCdG4gPSB0aGlzLnByb3BzLmVuYWJsZVNob3dPbmx5U2VsZWN0ZWQ/XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNob3dPbmx5VG9nZ2xlLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIGRhdGEtdG9nZ2xlPVwiYnV0dG9uXCIgYXJpYS1wcmVzc2VkPVwiZmFsc2VcIj5cbiAgICAgICAgeyB0aGlzLnN0YXRlLnNob3dTZWxlY3RlZD8gQ29uc3QuU0hPV19BTEwgOiBDb25zdC5TSE9XX09OTFlfU0VMRUNUIH1cbiAgICAgIDwvYnV0dG9uPjpudWxsO1xuXG4gICAgdmFyIG1vZGFsID0gdGhpcy5wcm9wcy5lbmFibGVJbnNlcnQ/dGhpcy5yZW5kZXJJbnNlcnRSb3dNb2RhbCgpOm51bGw7XG4gICAgdmFyIHdhcm5pbmdTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICAgICAgbWFyZ2luQm90dG9tOiAwXG4gICAgfTtcblxuICAgIHZhciBleHBvcnRDU1YgPSB0aGlzLnByb3BzLmVuYWJsZUV4cG9ydENTViA/XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCIgb25DbGljaz17dGhpcy5oYW5kbGVFeHBvcnRDU1YuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tZXhwb3J0XCI+PC9pPiBFeHBvcnQgdG8gQ1NWPC9idXR0b24+IDogbnVsbDtcblxuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS02IGNvbC1tZC02IGNvbC1sZy04XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXAgYnRuLWdyb3VwLXNtXCIgcm9sZT1cImdyb3VwXCI+XG4gICAgICAgICAgICB7ZXhwb3J0Q1NWfVxuICAgICAgICAgICAge2luc2VydEJ0bn1cbiAgICAgICAgICAgIHtkZWxldGVCdG59XG4gICAgICAgICAgICB7c2hvd1NlbGVjdGVkT25seUJ0bn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS02IGNvbC1tZC02IGNvbC1sZy00XCI+XG4gICAgICAgICAge3NlYXJjaFRleHRJbnB1dH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxOb3RpZmllciByZWY9XCJub3RpZmllclwiPjwvTm90aWZpZXI+XG4gICAgICAgIHttb2RhbH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJlbmRlclNlYXJjaFBhbmVsKCkge1xuICAgIGlmKHRoaXMucHJvcHMuZW5hYmxlU2VhcmNoKSB7XG4gICAgICBsZXQgY2xhc3NOYW1lcyA9ICdmb3JtLWdyb3VwIGZvcm0tZ3JvdXAtc20gcmVhY3QtYnMtdGFibGUtc2VhcmNoLWZvcm0nO1xuICAgICAgbGV0IGNsZWFyQnRuID0gbnVsbDtcbiAgICAgIGlmKHRoaXMucHJvcHMuY2xlYXJTZWFyY2gpIHtcbiAgICAgICAgY2xlYXJCdG4gPSAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYnRuXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5oYW5kbGVDbGVhckJ0bkNsaWNrIH0+Q2xlYXI8L2J1dHRvbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG4gICAgICAgIGNsYXNzTmFtZXMgKz0gJyBpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1zbSc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfT5cbiAgICAgICAgICA8aW5wdXQgcmVmPSdzZWFjaElucHV0JyBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMuc2VhcmNoUGxhY2Vob2xkZXI/dGhpcy5wcm9wcy5zZWFyY2hQbGFjZWhvbGRlcjonU2VhcmNoJ31cbiAgICAgICAgICAgIG9uS2V5VXA9e3RoaXMuaGFuZGxlS2V5VXAuYmluZCh0aGlzKX0vPlxuICAgICAgICAgICAgeyBjbGVhckJ0biB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVySW5zZXJ0Um93TW9kYWwoKXtcbiAgICB2YXIgdmFsaWRhdGVTdGF0ZT10aGlzLnN0YXRlLnZhbGlkYXRlU3RhdGV8fHt9O1xuICAgIHZhciBpbnB1dEZpZWxkID0gdGhpcy5wcm9wcy5jb2x1bW5zLm1hcChmdW5jdGlvbihjb2x1bW4sIGkpe1xuICAgICAgdmFyIGVkaXRhYmxlPWNvbHVtbi5lZGl0YWJsZSxcbiAgICAgICAgICBmb3JtYXQ9Y29sdW1uLmZvcm1hdCxcbiAgICAgICAgICBhdHRyPXtyZWY6Y29sdW1uLmZpZWxkK2kscGxhY2Vob2xkZXI6ZWRpdGFibGUucGxhY2Vob2xkZXI/ZWRpdGFibGUucGxhY2Vob2xkZXI6Y29sdW1uLm5hbWV9O1xuXG4gICAgICBpZihjb2x1bW4uYXV0b1ZhbHVlKXsvL3doZW4geW91IHdhbnQgc2FtZSBhdXRvIGdlbmVyYXRlIHZhbHVlIGFuZCBub3QgYWxsb3cgZWRpdCwgZXhhbXBsZSBJRCBmaWVsZFxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHZhciBlcnJvcj12YWxpZGF0ZVN0YXRlW2NvbHVtbi5maWVsZF0/KDxzcGFuIGNsYXNzTmFtZT1cImhlbHAtYmxvY2sgYmctZGFuZ2VyXCI+e3ZhbGlkYXRlU3RhdGVbY29sdW1uLmZpZWxkXX08L3NwYW4+KTpudWxsO1xuXG4gICAgICAvLyBsZXQgZWRpdG9yID0gRWRpdG9yKGVkaXRhYmxlLGF0dHIsZm9ybWF0KTtcbiAgICAgIC8vIGlmKGVkaXRvci5wcm9wcy50eXBlICYmIGVkaXRvci5wcm9wcy50eXBlID09ICdjaGVja2JveCcpe1xuICAgICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIiBrZXk9e2NvbHVtbi5maWVsZH0+XG4gICAgICAgICAgPGxhYmVsPntjb2x1bW4ubmFtZX08L2xhYmVsPlxuICAgICAgICAgIHtFZGl0b3IoZWRpdGFibGUsYXR0cixmb3JtYXQsJycpfVxuICAgICAgICAgIHtlcnJvcn1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0pO1xuICAgIHZhciBtb2RhbENsYXNzID0gY2xhc3NTZXQoXCJtb2RhbFwiLCBcImZhZGVcIiAsIHRoaXMubW9kYWxDbGFzc05hbWUse1xuICAgICAgJ2luJzp0aGlzLnN0YXRlLnNoYWtlRWRpdG9yfHx0aGlzLnN0YXRlLnZhbGlkYXRlU3RhdGUvL2hhY2sgcHJldmVudCBib290c3RyYXAgbW9kYWwgaGlkZSBieSByZVJlbmRlclxuICAgIH0pO1xuICAgIHZhciBkaWFsb2dDbGFzcz1jbGFzc1NldChcIm1vZGFsLWRpYWxvZ1wiLFwibW9kYWwtc21cIix7XG4gICAgICBcImFuaW1hdGVkXCI6dGhpcy5zdGF0ZS5zaGFrZUVkaXRvcixcbiAgICAgIFwic2hha2VcIjp0aGlzLnN0YXRlLnNoYWtlRWRpdG9yXG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPVwibW9kYWxcIiAgY2xhc3NOYW1lPXttb2RhbENsYXNzfSB0YWJJbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2RpYWxvZ0NsYXNzfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj48c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj5OZXcgUmVjb3JkPC9oND5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgIDxmb3JtIHJlZj1cImZvcm1cIj5cbiAgICAgICAgICAgICAge2lucHV0RmllbGR9XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiAgb25DbGljaz17dGhpcy5oYW5kbGVTYXZlQnRuQ2xpY2suYmluZCh0aGlzKX0+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5Ub29sQmFyLnByb3BUeXBlcyA9IHtcbiAgb25BZGRSb3c6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBvbkRyb3BSb3c6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBvblNob3dPbmx5U2VsZWN0ZWQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBlbmFibGVJbnNlcnQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBlbmFibGVEZWxldGU6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBlbmFibGVTZWFyY2g6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBlbmFibGVTaG93T25seVNlbGVjdGVkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgY29sdW1uczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuICBzZWFyY2hQbGFjZWhvbGRlcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xlYXJTZWFyY2g6IFJlYWN0LlByb3BUeXBlcy5ib29sXG59O1xuXG5Ub29sQmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgZW5hYmxlSW5zZXJ0OiBmYWxzZSxcbiAgZW5hYmxlRGVsZXRlOiBmYWxzZSxcbiAgZW5hYmxlU2VhcmNoOiBmYWxzZSxcbiAgZW5hYmxlU2hvd09ubHlTZWxlY3RlZDogZmFsc2UsXG4gIGNsZWFyU2VhcmNoOiBmYWxzZVxufVxuZXhwb3J0IGRlZmF1bHQgVG9vbEJhcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Rvb2xiYXIvVG9vbEJhci5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi9Db25zdCc7XG5pbXBvcnQgY2xhc3NTZXQgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNsYXNzIFRhYmxlRmlsdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuZmlsdGVyT2JqID0ge307XG4gIH1cblxuICBoYW5kbGVLZXlVcChlKXtcbiAgICBpZihlLmN1cnJlbnRUYXJnZXQudmFsdWUudHJpbSgpID09PSBcIlwiKVxuICAgICAgZGVsZXRlIHRoaXMuZmlsdGVyT2JqW2UuY3VycmVudFRhcmdldC5uYW1lXTtcbiAgICBlbHNlXG4gICAgICB0aGlzLmZpbHRlck9ialtlLmN1cnJlbnRUYXJnZXQubmFtZV0gPSBlLmN1cnJlbnRUYXJnZXQudmFsdWU7XG5cbiAgICB0aGlzLnByb3BzLm9uRmlsdGVyKHRoaXMuZmlsdGVyT2JqKTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHZhciB0YWJsZUNsYXNzZXMgPSBjbGFzc1NldChcInRhYmxlXCIsIHtcbiAgICAgICd0YWJsZS1zdHJpcGVkJzogdGhpcy5wcm9wcy5zdHJpcGVkLFxuICAgICAgJ3RhYmxlLWNvbmRlbnNlZCc6IHRoaXMucHJvcHMuY29uZGVuc2VkXG4gICAgfSk7XG4gICAgdmFyIHNlbGVjdFJvd0hlYWRlciA9IG51bGw7XG5cbiAgICBpZih0aGlzLnByb3BzLnJvd1NlbGVjdFR5cGUgPT0gQ29uc3QuUk9XX1NFTEVDVF9TSU5HTEUgfHxcbiAgICAgICAgdGhpcy5wcm9wcy5yb3dTZWxlY3RUeXBlID09IENvbnN0LlJPV19TRUxFQ1RfTVVMVEkpe1xuICAgICAgbGV0IHN0eWxlID0ge1xuICAgICAgICB3aWR0aDozNSxcbiAgICAgICAgcGFkZGluZ0xlZnQ6IDAsXG4gICAgICAgIHBhZGRpbmdSaWdodDogMFxuICAgICAgfVxuICAgICAgc2VsZWN0Um93SGVhZGVyID0gKDx0aCBzdHlsZT17c3R5bGV9IGtleT17LTF9PkZpbHRlcjwvdGg+KTtcbiAgICB9XG4gICAgdmFyIGZpbHRlckZpZWxkID0gdGhpcy5wcm9wcy5jb2x1bW5zLm1hcChmdW5jdGlvbihjb2x1bW4pe1xuICAgICAgdmFyIHRoU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6IGNvbHVtbi5oaWRkZW4/XCJub25lXCI6bnVsbCxcbiAgICAgICAgd2lkdGg6IGNvbHVtbi53aWR0aFxuICAgICAgfTtcbiAgICAgIHJldHVybihcbiAgICAgICAgPHRoIGtleT17Y29sdW1uLm5hbWV9IHN0eWxlPXt0aFN0eWxlfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRoLWlubmVyIHRhYmxlLWhlYWRlci1jb2x1bW5cIj5cbiAgICAgICAgICAgIDxpbnB1dCBzaXplPVwiMTBcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPXtjb2x1bW4ubmFtZX0gbmFtZT17Y29sdW1uLm5hbWV9IG9uS2V5VXA9e3RoaXMuaGFuZGxlS2V5VXAuYmluZCh0aGlzKX0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RoPlxuICAgICAgKVxuICAgIH0sIHRoaXMpO1xuICAgIHJldHVybihcbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9e3RhYmxlQ2xhc3Nlc30gc3R5bGU9e3ttYXJnaW5Ub3A6NX19PlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyIHN0eWxlPXt7Ym9yZGVyQm90dG9tU3R5bGU6ICdoaWRkZW4nfX0+XG4gICAgICAgICAgICB7c2VsZWN0Um93SGVhZGVyfXtmaWx0ZXJGaWVsZH1cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgPC90YWJsZT5cbiAgICApXG4gIH1cbn1cblRhYmxlRmlsdGVyLnByb3BUeXBlcyA9IHtcbiAgY29sdW1uczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuICByb3dTZWxlY3RUeXBlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBvbkZpbHRlcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbn07XG5leHBvcnQgZGVmYXVsdCBUYWJsZUZpbHRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL1RhYmxlRmlsdGVyLmpzXG4gKiovIiwiaW1wb3J0IENvbnN0IGZyb20gXCIuLi9Db25zdFwiO1xudmFyIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlcjtcblxuZnVuY3Rpb24gX3NvcnQoYXJyLCBzb3J0RmllbGQsIG9yZGVyLCBzb3J0RnVuYykge1xuICBvcmRlciA9IG9yZGVyLnRvTG93ZXJDYXNlKCk7XG4gIGFyci5zb3J0KChhLCBiKSA9PiB7XG4gICAgaWYgKHNvcnRGdW5jKSB7XG4gICAgICByZXR1cm4gc29ydEZ1bmMoYSwgYiwgb3JkZXIsIHNvcnRGaWVsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChvcmRlciA9PSBDb25zdC5TT1JUX0RFU0MpIHtcbiAgICAgICAgcmV0dXJuIGFbc29ydEZpZWxkXSA+IGJbc29ydEZpZWxkXSA/IC0xIDogKChhW3NvcnRGaWVsZF0gPCBiW3NvcnRGaWVsZF0pID8gMSA6IDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGFbc29ydEZpZWxkXSA8IGJbc29ydEZpZWxkXSA/IC0xIDogKChhW3NvcnRGaWVsZF0gPiBiW3NvcnRGaWVsZF0pID8gMSA6IDApO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGFycjtcbn1cblxuZXhwb3J0IGNsYXNzIFRhYmxlRGF0YVNldCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICBzdXBlcihkYXRhKTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICB9XG5cbiAgc2V0RGF0YShkYXRhKSB7XG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCBkYXRhKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuZGF0YSA9IG51bGw7XG4gIH1cblxuICBnZXREYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRhYmxlRGF0YVN0b3JlIHtcblxuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLmNvbEluZm9zID0gbnVsbDtcbiAgICB0aGlzLmZpbHRlcmVkRGF0YSA9IG51bGw7XG4gICAgdGhpcy5pc09uRmlsdGVyID0gZmFsc2U7XG4gICAgdGhpcy5maWx0ZXJPYmogPSBudWxsO1xuICAgIHRoaXMuc2VhcmNoVGV4dCA9IG51bGw7XG4gICAgdGhpcy5zb3J0T2JqID0gbnVsbDtcbiAgICB0aGlzLnBhZ2VPYmogPSB7fTtcbiAgICB0aGlzLnNlbGVjdGVkID0gW107XG4gICAgdGhpcy5tdWx0aUNvbHVtblNlYXJjaCA9IGZhbHNlO1xuICAgIHRoaXMuc2hvd09ubHlTZWxlY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMucmVtb3RlID0gZmFsc2U7IC8vIHJlbW90ZSBkYXRhXG4gIH1cblxuICBzZXRQcm9wcyhwcm9wcykge1xuICAgIHRoaXMua2V5RmllbGQgPSBwcm9wcy5rZXlGaWVsZDtcbiAgICB0aGlzLmVuYWJsZVBhZ2luYXRpb24gPSBwcm9wcy5pc1BhZ2luYXRpb247XG4gICAgdGhpcy5jb2xJbmZvcyA9IHByb3BzLmNvbEluZm9zO1xuICAgIHRoaXMucmVtb3RlID0gcHJvcHMucmVtb3RlO1xuICAgIHRoaXMubXVsdGlDb2x1bW5TZWFyY2ggPSBwcm9wcy5tdWx0aUNvbHVtblNlYXJjaDtcbiAgfVxuXG4gIHNldERhdGEoZGF0YSkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgaWYgKHRoaXMuaXNPbkZpbHRlcikge1xuICAgICAgaWYgKG51bGwgIT09IHRoaXMuZmlsdGVyT2JqKSB0aGlzLmZpbHRlcih0aGlzLmZpbHRlck9iaik7XG4gICAgICBpZiAobnVsbCAhPT0gdGhpcy5zZWFyY2hUZXh0KSB0aGlzLnNlYXJjaCh0aGlzLnNlYXJjaFRleHQpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zb3J0T2JqKSB7XG4gICAgICB0aGlzLnNvcnQodGhpcy5zb3J0T2JqLm9yZGVyLCB0aGlzLnNvcnRPYmouc29ydEZpZWxkKTtcbiAgICB9XG4gIH1cblxuICBnZXRTb3J0SW5mbygpIHtcbiAgICByZXR1cm4gdGhpcy5zb3J0T2JqO1xuICB9XG5cbiAgc2V0U2VsZWN0ZWRSb3dLZXkoc2VsZWN0ZWRSb3dLZXlzKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHNlbGVjdGVkUm93S2V5cztcbiAgfVxuXG4gIGdldFNlbGVjdGVkUm93S2V5cygpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZDtcbiAgfVxuXG4gIGdldEN1cnJlbnREaXNwbGF5RGF0YSgpIHtcbiAgICBpZiAodGhpcy5pc09uRmlsdGVyKSByZXR1cm4gdGhpcy5maWx0ZXJlZERhdGE7XG4gICAgZWxzZSByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG5cbiAgaWdub3JlTm9uU2VsZWN0ZWQoKSB7XG4gICAgdGhpcy5zaG93T25seVNlbGVjdGVkID0gIXRoaXMuc2hvd09ubHlTZWxlY3RlZDtcbiAgICBpZih0aGlzLnNob3dPbmx5U2VsZWN0ZWQpe1xuICAgICAgdGhpcy5pc09uRmlsdGVyID0gdHJ1ZTtcbiAgICAgIHRoaXMuZmlsdGVyZWREYXRhID0gdGhpcy5kYXRhLmZpbHRlciggcm93ID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuc2VsZWN0ZWQuZmluZCh4ID0+IHJvd1t0aGlzLmtleUZpZWxkXSA9PT0geClcbiAgICAgICAgcmV0dXJuIHR5cGVvZiByZXN1bHQgIT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNPbkZpbHRlciA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHNvcnQob3JkZXIsIHNvcnRGaWVsZCkge1xuICAgIHRoaXMuc29ydE9iaiA9IHtcbiAgICAgIG9yZGVyOiBvcmRlcixcbiAgICAgIHNvcnRGaWVsZDogc29ydEZpZWxkXG4gICAgfTtcblxuICAgIGxldCBjdXJyZW50RGlzcGxheURhdGEgPSB0aGlzLmdldEN1cnJlbnREaXNwbGF5RGF0YSgpO1xuICAgIGlmKCF0aGlzLmNvbEluZm9zW3NvcnRGaWVsZF0pIHJldHVybiB0aGlzO1xuXG4gICAgY29uc3QgeyBzb3J0RnVuYyB9ID0gdGhpcy5jb2xJbmZvc1tzb3J0RmllbGRdO1xuICAgIGN1cnJlbnREaXNwbGF5RGF0YSA9IF9zb3J0KGN1cnJlbnREaXNwbGF5RGF0YSwgc29ydEZpZWxkLCBvcmRlciwgc29ydEZ1bmMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwYWdlKHBhZ2UsIHNpemVQZXJQYWdlKSB7XG4gICAgdGhpcy5wYWdlT2JqLmVuZCA9IHBhZ2UgKiBzaXplUGVyUGFnZSAtIDE7XG4gICAgdGhpcy5wYWdlT2JqLnN0YXJ0ID0gdGhpcy5wYWdlT2JqLmVuZCAtIChzaXplUGVyUGFnZSAtIDEpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZWRpdChuZXdWYWwsIHJvd0luZGV4LCBmaWVsZE5hbWUpIHtcbiAgICBsZXQgY3VycmVudERpc3BsYXlEYXRhID0gdGhpcy5nZXRDdXJyZW50RGlzcGxheURhdGEoKTtcbiAgICBsZXQgcm93S2V5Q2FjaGU7XG4gICAgaWYgKCF0aGlzLmVuYWJsZVBhZ2luYXRpb24pIHtcbiAgICAgIGN1cnJlbnREaXNwbGF5RGF0YVtyb3dJbmRleF1bZmllbGROYW1lXSA9IG5ld1ZhbDtcbiAgICAgIHJvd0tleUNhY2hlID0gY3VycmVudERpc3BsYXlEYXRhW3Jvd0luZGV4XVt0aGlzLmtleUZpZWxkXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudERpc3BsYXlEYXRhW3RoaXMucGFnZU9iai5zdGFydCArIHJvd0luZGV4XVtmaWVsZE5hbWVdID0gbmV3VmFsO1xuICAgICAgcm93S2V5Q2FjaGUgPSBjdXJyZW50RGlzcGxheURhdGFbdGhpcy5wYWdlT2JqLnN0YXJ0ICsgcm93SW5kZXhdW3RoaXMua2V5RmllbGRdO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc09uRmlsdGVyKSB7XG4gICAgICB0aGlzLmRhdGEuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgIGlmIChyb3dbdGhpcy5rZXlGaWVsZF0gPT09IHJvd0tleUNhY2hlKSB7XG4gICAgICAgICAgcm93W2ZpZWxkTmFtZV0gPSBuZXdWYWw7XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMpO1xuICAgICAgaWYgKG51bGwgIT09IHRoaXMuZmlsdGVyT2JqKSB0aGlzLmZpbHRlcih0aGlzLmZpbHRlck9iaik7XG4gICAgICBpZiAobnVsbCAhPT0gdGhpcy5zZWFyY2hUZXh0KSB0aGlzLnNlYXJjaCh0aGlzLnNlYXJjaFRleHQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZEF0QmVnaW4obmV3T2JqKSB7XG4gICAgaWYgKCFuZXdPYmpbdGhpcy5rZXlGaWVsZF0gfHwgbmV3T2JqW3RoaXMua2V5RmllbGRdLnRvU3RyaW5nKCkgPT09ICcnKSB7XG4gICAgICB0aHJvdyB0aGlzLmtleUZpZWxkICsgXCIgY2FuJ3QgYmUgZW1wdHkgdmFsdWUuXCI7XG4gICAgfVxuICAgIGxldCBjdXJyZW50RGlzcGxheURhdGEgPSB0aGlzLmdldEN1cnJlbnREaXNwbGF5RGF0YSgpO1xuICAgIGN1cnJlbnREaXNwbGF5RGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgIGlmIChyb3dbdGhpcy5rZXlGaWVsZF0udG9TdHJpbmcoKSA9PT0gbmV3T2JqW3RoaXMua2V5RmllbGRdLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgdGhyb3cgdGhpcy5rZXlGaWVsZCArIFwiIFwiICsgbmV3T2JqW3RoaXMua2V5RmllbGRdICsgXCIgYWxyZWFkeSBleGlzdHNcIjtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgICBjdXJyZW50RGlzcGxheURhdGEudW5zaGlmdChuZXdPYmopO1xuICAgIGlmICh0aGlzLmlzT25GaWx0ZXIpIHtcbiAgICAgIHRoaXMuZGF0YS51bnNoaWZ0KG5ld09iaik7XG4gICAgfVxuICB9XG5cbiAgYWRkKG5ld09iaikge1xuICAgIGlmICghbmV3T2JqW3RoaXMua2V5RmllbGRdIHx8IG5ld09ialt0aGlzLmtleUZpZWxkXS50b1N0cmluZygpID09PSAnJykge1xuICAgICAgdGhyb3cgdGhpcy5rZXlGaWVsZCArIFwiIGNhbid0IGJlIGVtcHR5IHZhbHVlLlwiO1xuICAgIH1cbiAgICBsZXQgY3VycmVudERpc3BsYXlEYXRhID0gdGhpcy5nZXRDdXJyZW50RGlzcGxheURhdGEoKTtcbiAgICBjdXJyZW50RGlzcGxheURhdGEuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICBpZiAocm93W3RoaXMua2V5RmllbGRdLnRvU3RyaW5nKCkgPT09IG5ld09ialt0aGlzLmtleUZpZWxkXS50b1N0cmluZygpKSB7XG4gICAgICAgIHRocm93IHRoaXMua2V5RmllbGQgKyBcIiBcIiArIG5ld09ialt0aGlzLmtleUZpZWxkXSArIFwiIGFscmVhZHkgZXhpc3RzXCI7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG5cbiAgICBjdXJyZW50RGlzcGxheURhdGEucHVzaChuZXdPYmopO1xuICAgIGlmICh0aGlzLmlzT25GaWx0ZXIpIHtcbiAgICAgIHRoaXMuZGF0YS5wdXNoKG5ld09iaik7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlKHJvd0tleSkge1xuICAgIGxldCBjdXJyZW50RGlzcGxheURhdGEgPSB0aGlzLmdldEN1cnJlbnREaXNwbGF5RGF0YSgpO1xuICAgIGxldCByZXN1bHQgPSBjdXJyZW50RGlzcGxheURhdGEuZmlsdGVyKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgIHJldHVybiByb3dLZXkuaW5kZXhPZihyb3dbdGhpcy5rZXlGaWVsZF0pID09IC0xO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgaWYgKHRoaXMuaXNPbkZpbHRlcikge1xuICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLmZpbHRlcihmdW5jdGlvbiAocm93KSB7XG4gICAgICAgIHJldHVybiByb3dLZXkuaW5kZXhPZihyb3dbdGhpcy5rZXlGaWVsZF0pID09IC0xO1xuICAgICAgfSwgdGhpcyk7XG4gICAgICB0aGlzLmZpbHRlcmVkRGF0YSA9IHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhID0gcmVzdWx0O1xuICAgIH1cbiAgfVxuXG4gIGZpbHRlcihmaWx0ZXJPYmopIHtcbiAgICBpZiAoT2JqZWN0LmtleXMoZmlsdGVyT2JqKS5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy5maWx0ZXJlZERhdGEgPSBudWxsO1xuICAgICAgdGhpcy5pc09uRmlsdGVyID0gZmFsc2U7XG4gICAgICB0aGlzLmZpbHRlck9iaiA9IG51bGw7XG4gICAgICBpZiAobnVsbCAhPT0gdGhpcy5zZWFyY2hUZXh0KSB0aGlzLnNlYXJjaCh0aGlzLnNlYXJjaFRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbHRlck9iaiA9IGZpbHRlck9iajtcbiAgICAgIHRoaXMuZmlsdGVyZWREYXRhID0gdGhpcy5kYXRhLmZpbHRlciggcm93ID0+IHtcbiAgICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgbGV0IGZpbHRlclZhbDtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGZpbHRlck9iaikge1xuICAgICAgICAgIGxldCB0YXJnZXRWYWwgPSByb3dba2V5XTtcblxuICAgICAgICAgIHN3aXRjaCAoZmlsdGVyT2JqW2tleV0udHlwZSkge1xuICAgICAgICAgICAgY2FzZSBDb25zdC5GSUxURVJfVFlQRS5OVU1CRVI6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGZpbHRlclZhbCA9IGZpbHRlck9ialtrZXldLnZhbHVlLm51bWJlcjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIENvbnN0LkZJTFRFUl9UWVBFLkNVU1RPTTpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZmlsdGVyVmFsID0gKHR5cGVvZiBmaWx0ZXJPYmpba2V5XS52YWx1ZSA9PT0gXCJvYmplY3RcIikgP1xuICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkIDpcbiAgICAgICAgICAgICAgICAgICh0eXBlb2YgZmlsdGVyT2JqW2tleV0udmFsdWUgPT09IFwic3RyaW5nXCIpID8gZmlsdGVyT2JqW2tleV0udmFsdWUudG9Mb3dlckNhc2UoKSA6IGZpbHRlck9ialtrZXldLnZhbHVlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgQ29uc3QuRklMVEVSX1RZUEUuUkVHRVg6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGZpbHRlclZhbCA9IGZpbHRlck9ialtrZXldLnZhbHVlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgZmlsdGVyVmFsID0gKHR5cGVvZiBmaWx0ZXJPYmpba2V5XS52YWx1ZSA9PT0gXCJzdHJpbmdcIikgPyBmaWx0ZXJPYmpba2V5XS52YWx1ZS50b0xvd2VyQ2FzZSgpIDogZmlsdGVyT2JqW2tleV0udmFsdWU7XG4gICAgICAgICAgICAgIGlmIChmaWx0ZXJWYWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQgb2xkIGZpbHRlclxuICAgICAgICAgICAgICAgIGZpbHRlclZhbCA9IGZpbHRlck9ialtrZXldLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuY29sSW5mb3Nba2V5XSkge1xuICAgICAgICAgICAgY29uc3QgeyBmb3JtYXQsIGZpbHRlckZvcm1hdHRlZCwgZm9ybWF0RXh0cmFEYXRhIH0gPSB0aGlzLmNvbEluZm9zW2tleV07XG4gICAgICAgICAgICBpZihmaWx0ZXJGb3JtYXR0ZWQgJiYgZm9ybWF0KSB7XG4gICAgICAgICAgICAgIHRhcmdldFZhbCA9IGZvcm1hdChyb3dba2V5XSwgcm93LCBmb3JtYXRFeHRyYURhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHN3aXRjaCAoZmlsdGVyT2JqW2tleV0udHlwZSkge1xuICAgICAgICAgICAgY2FzZSBDb25zdC5GSUxURVJfVFlQRS5OVU1CRVI6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZhbGlkID0gdGhpcy5maWx0ZXJOdW1iZXIodGFyZ2V0VmFsLCBmaWx0ZXJWYWwsIGZpbHRlck9ialtrZXldLnZhbHVlLmNvbXBhcmF0b3IpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgQ29uc3QuRklMVEVSX1RZUEUuREFURTpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdmFsaWQgPSB0aGlzLmZpbHRlckRhdGUodGFyZ2V0VmFsLCBmaWx0ZXJWYWwpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgQ29uc3QuRklMVEVSX1RZUEUuUkVHRVg6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZhbGlkID0gdGhpcy5maWx0ZXJSZWdleCh0YXJnZXRWYWwsIGZpbHRlclZhbCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBDb25zdC5GSUxURVJfVFlQRS5DVVNUT006XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZhbGlkID0gdGhpcy5maWx0ZXJDdXN0b20odGFyZ2V0VmFsLCBmaWx0ZXJWYWwsIGZpbHRlck9ialtrZXldLnZhbHVlKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgIHZhbGlkID0gdGhpcy5maWx0ZXJUZXh0KHRhcmdldFZhbCwgZmlsdGVyVmFsKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsaWQ7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuaXNPbkZpbHRlciA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZmlsdGVyTnVtYmVyKHRhcmdldFZhbCwgZmlsdGVyVmFsLCBjb21wYXJhdG9yKSB7XG4gICAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgICBzd2l0Y2ggKGNvbXBhcmF0b3IpIHtcbiAgICAgIGNhc2UgXCI9XCI6XG4gICAgICB7XG4gICAgICAgIGlmICh0YXJnZXRWYWwgIT0gZmlsdGVyVmFsKSB7XG4gICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgXCI+XCI6XG4gICAgICB7XG4gICAgICAgIGlmICh0YXJnZXRWYWwgPD0gZmlsdGVyVmFsKSB7XG4gICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgXCI+PVwiOlxuICAgICAge1xuICAgICAgICBpZiAodGFyZ2V0VmFsIDwgZmlsdGVyVmFsKSB7XG4gICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgXCI8XCI6XG4gICAgICB7XG4gICAgICAgIGlmICh0YXJnZXRWYWwgPj0gZmlsdGVyVmFsKSB7XG4gICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgXCI8PVwiOlxuICAgICAge1xuICAgICAgICBpZiAodGFyZ2V0VmFsID4gZmlsdGVyVmFsKSB7XG4gICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgXCIhPVwiOlxuICAgICAge1xuICAgICAgICBpZiAodGFyZ2V0VmFsID09IGZpbHRlclZhbCkge1xuICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiTnVtYmVyIGNvbXBhcmF0b3IgcHJvdmlkZWQgaXMgbm90IHN1cHBvcnRlZFwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWxpZDtcbiAgfVxuXG4gIGZpbHRlckRhdGUodGFyZ2V0VmFsLCBmaWx0ZXJWYWwpIHtcbiAgICByZXR1cm4gKHRhcmdldFZhbC5nZXREYXRlKCkgPT0gZmlsdGVyVmFsLmdldERhdGUoKSAmJlxuICAgICAgICB0YXJnZXRWYWwuZ2V0TW9udGgoKSA9PSBmaWx0ZXJWYWwuZ2V0TW9udGgoKSAmJlxuICAgICAgICB0YXJnZXRWYWwuZ2V0RnVsbFllYXIoKSA9PSBmaWx0ZXJWYWwuZ2V0RnVsbFllYXIoKSk7XG4gIH1cblxuICBmaWx0ZXJSZWdleCh0YXJnZXRWYWwsIGZpbHRlclZhbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbmV3IFJlZ0V4cChmaWx0ZXJWYWwsICdpJykudGVzdCh0YXJnZXRWYWwpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgcmVndWxhciBleHByZXNzaW9uJyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmaWx0ZXJDdXN0b20odGFyZ2V0VmFsLCBmaWx0ZXJWYWwsIGNhbGxiYWNrSW5mbykge1xuICAgIGlmIChjYWxsYmFja0luZm8gIT0gbnVsbCAmJiB0eXBlb2YgY2FsbGJhY2tJbmZvID09PSBcIm9iamVjdFwiKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2tJbmZvLmNhbGxiYWNrKHRhcmdldFZhbCwgY2FsbGJhY2tJbmZvLmNhbGxiYWNrUGFyYW1ldGVycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbHRlclRleHQodGFyZ2V0VmFsLCBmaWx0ZXJWYWwpO1xuICB9XG5cbiAgZmlsdGVyVGV4dCh0YXJnZXRWYWwsIGZpbHRlclZhbCkge1xuICAgIGlmICh0YXJnZXRWYWwudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZmlsdGVyVmFsKSA9PSAtMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyogR2VuZXJhbCBzZWFyY2ggZnVuY3Rpb25cbiAgICogSXQgd2lsbCBzZWFyY2ggZm9yIHRoZSB0ZXh0IGlmIHRoZSBpbnB1dCBpbmNsdWRlcyB0aGF0IHRleHQ7XG4gICAqL1xuICBzZWFyY2goc2VhcmNoVGV4dCkge1xuICAgIGlmIChzZWFyY2hUZXh0LnRyaW0oKSA9PT0gXCJcIikge1xuICAgICAgdGhpcy5maWx0ZXJlZERhdGEgPSBudWxsO1xuICAgICAgdGhpcy5pc09uRmlsdGVyID0gZmFsc2U7XG4gICAgICB0aGlzLnNlYXJjaFRleHQgPSBudWxsO1xuICAgICAgaWYgKG51bGwgIT09IHRoaXMuZmlsdGVyT2JqKSB0aGlzLmZpbHRlcih0aGlzLmZpbHRlck9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VhcmNoVGV4dCA9IHNlYXJjaFRleHQ7XG4gICAgICBsZXQgc2VhcmNoVGV4dEFycmF5ID0gW107XG5cbiAgICAgIGlmICh0aGlzLm11bHRpQ29sdW1uU2VhcmNoKSB7XG4gICAgICAgIHNlYXJjaFRleHRBcnJheSA9IHNlYXJjaFRleHQuc3BsaXQoJyAnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlYXJjaFRleHRBcnJheS5wdXNoKHNlYXJjaFRleHQpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzb3VyY2UgPSB0aGlzLmlzT25GaWx0ZXIgPyB0aGlzLmZpbHRlcmVkRGF0YSA6IHRoaXMuZGF0YTtcblxuICAgICAgdGhpcy5maWx0ZXJlZERhdGEgPSBzb3VyY2UuZmlsdGVyKCByb3cgPT4ge1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocm93KTtcbiAgICAgICAgbGV0IHZhbGlkID0gZmFsc2U7XG4gICAgICAgIC8vIGZvciBsb29wcyBhcmUgdWdseSwgYnV0IHBlcmZvcm1hbmNlIG1hdHRlcnMgaGVyZS5cbiAgICAgICAgLy8gQW5kIHlvdSBjYW50IGJyZWFrIGZyb20gYSBmb3JFYWNoLlxuICAgICAgICAvLyBodHRwOi8vanNwZXJmLmNvbS9mb3ItdnMtZm9yZWFjaC82NlxuICAgICAgICBmb3IgKGxldCBpID0gMCwga2V5c0xlbmd0aCA9IGtleXMubGVuZ3RoOyBpIDwga2V5c0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAodGhpcy5jb2xJbmZvc1trZXldICYmIHJvd1trZXldKSB7XG4gICAgICAgICAgICBjb25zdCB7IGZvcm1hdCwgZmlsdGVyRm9ybWF0dGVkLCBmb3JtYXRFeHRyYURhdGEsIHNlYXJjaGFibGUsIGhpZGRlbiB9ID0gdGhpcy5jb2xJbmZvc1trZXldO1xuICAgICAgICAgICAgbGV0IHRhcmdldFZhbCA9IHJvd1trZXldO1xuICAgICAgICAgICAgaWYgKHNlYXJjaGFibGUpIHtcbiAgICAgICAgICAgICAgaWYgKGZpbHRlckZvcm1hdHRlZCAmJiBmb3JtYXQpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRWYWwgPSBmb3JtYXQodGFyZ2V0VmFsLCByb3csIGZvcm1hdEV4dHJhRGF0YSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAsIHRleHRMZW5ndGggPSBzZWFyY2hUZXh0QXJyYXkubGVuZ3RoOyBqIDwgdGV4dExlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyVmFsID0gc2VhcmNoVGV4dEFycmF5W2pdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldFZhbC50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXJWYWwpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWxpZDtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5pc09uRmlsdGVyID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBnZXREYXRhSWdub3JpbmdQYWdpbmF0aW9uKCkge1xuICAgIGxldCBfZGF0YSA9IHRoaXMuZ2V0Q3VycmVudERpc3BsYXlEYXRhKCk7XG4gICAgcmV0dXJuIF9kYXRhO1xuICB9XG5cbiAgZ2V0KCkge1xuICAgIGxldCBfZGF0YSA9IHRoaXMuZ2V0Q3VycmVudERpc3BsYXlEYXRhKCk7XG5cbiAgICBpZiAoX2RhdGEubGVuZ3RoID09IDApIHJldHVybiBfZGF0YTtcblxuICAgIGlmICh0aGlzLnJlbW90ZSB8fCAhdGhpcy5lbmFibGVQYWdpbmF0aW9uKSB7XG4gICAgICByZXR1cm4gX2RhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnBhZ2VPYmouc3RhcnQ7IGkgPD0gdGhpcy5wYWdlT2JqLmVuZDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKF9kYXRhW2ldKTtcbiAgICAgICAgaWYgKGkgKyAxID09IF9kYXRhLmxlbmd0aClicmVhaztcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9XG5cbiAgZ2V0S2V5RmllbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMua2V5RmllbGQ7XG4gIH1cblxuICBnZXREYXRhTnVtKCkge1xuICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnREaXNwbGF5RGF0YSgpLmxlbmd0aDtcbiAgfVxuXG4gIGlzQ2hhbmdlZFBhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFnZU9iai5zdGFydCAmJiB0aGlzLnBhZ2VPYmouZW5kID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgZ2V0QWxsUm93a2V5KCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEubWFwKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgIHJldHVybiByb3dbdGhpcy5rZXlGaWVsZF07XG4gICAgfSwgdGhpcyk7XG4gIH1cblxufVxuO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RvcmUvVGFibGVEYXRhU3RvcmUuanNcbiAqKi8iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICB0aGlzLl9ldmVudHMgPSB0aGlzLl9ldmVudHMgfHwge307XG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbkV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uKG4pIHtcbiAgaWYgKCFpc051bWJlcihuKSB8fCBuIDwgMCB8fCBpc05hTihuKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ24gbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlcicpO1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGVyLCBoYW5kbGVyLCBsZW4sIGFyZ3MsIGksIGxpc3RlbmVycztcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmICh0eXBlID09PSAnZXJyb3InKSB7XG4gICAgaWYgKCF0aGlzLl9ldmVudHMuZXJyb3IgfHxcbiAgICAgICAgKGlzT2JqZWN0KHRoaXMuX2V2ZW50cy5lcnJvcikgJiYgIXRoaXMuX2V2ZW50cy5lcnJvci5sZW5ndGgpKSB7XG4gICAgICBlciA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgICAgfVxuICAgICAgdGhyb3cgVHlwZUVycm9yKCdVbmNhdWdodCwgdW5zcGVjaWZpZWQgXCJlcnJvclwiIGV2ZW50LicpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZXIgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzVW5kZWZpbmVkKGhhbmRsZXIpKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAoaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgLy8gZmFzdCBjYXNlc1xuICAgICAgY2FzZSAxOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gc2xvd2VyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICBhcmdzID0gbmV3IEFycmF5KGxlbiAtIDEpO1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgbGVuOyBpKyspXG4gICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGhhbmRsZXIpKSB7XG4gICAgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiAtIDEpO1xuICAgIGZvciAoaSA9IDE7IGkgPCBsZW47IGkrKylcbiAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuXG4gICAgbGlzdGVuZXJzID0gaGFuZGxlci5zbGljZSgpO1xuICAgIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgbGlzdGVuZXJzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIG07XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgaWYgKHRoaXMuX2V2ZW50cy5uZXdMaXN0ZW5lcilcbiAgICB0aGlzLmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgaXNGdW5jdGlvbihsaXN0ZW5lci5saXN0ZW5lcikgP1xuICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgZWxzZSBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xuICBlbHNlXG4gICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gW3RoaXMuX2V2ZW50c1t0eXBlXSwgbGlzdGVuZXJdO1xuXG4gIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pICYmICF0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkKSB7XG4gICAgdmFyIG07XG4gICAgaWYgKCFpc1VuZGVmaW5lZCh0aGlzLl9tYXhMaXN0ZW5lcnMpKSB7XG4gICAgICBtID0gdGhpcy5fbWF4TGlzdGVuZXJzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgaWYgKG0gJiYgbSA+IDAgJiYgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCA+IG0pIHtcbiAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQgPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcignKG5vZGUpIHdhcm5pbmc6IHBvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgJyArXG4gICAgICAgICAgICAgICAgICAgICdsZWFrIGRldGVjdGVkLiAlZCBsaXN0ZW5lcnMgYWRkZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAnVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gaW5jcmVhc2UgbGltaXQuJyxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUudHJhY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gbm90IHN1cHBvcnRlZCBpbiBJRSAxMFxuICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIHZhciBmaXJlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGcoKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBnKTtcblxuICAgIGlmICghZmlyZWQpIHtcbiAgICAgIGZpcmVkID0gdHJ1ZTtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgZy5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICB0aGlzLm9uKHR5cGUsIGcpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gZW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWRcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbGlzdCwgcG9zaXRpb24sIGxlbmd0aCwgaTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXR1cm4gdGhpcztcblxuICBsaXN0ID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuICBsZW5ndGggPSBsaXN0Lmxlbmd0aDtcbiAgcG9zaXRpb24gPSAtMTtcblxuICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHxcbiAgICAgIChpc0Z1bmN0aW9uKGxpc3QubGlzdGVuZXIpICYmIGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG5cbiAgfSBlbHNlIGlmIChpc09iamVjdChsaXN0KSkge1xuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tID4gMDspIHtcbiAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fFxuICAgICAgICAgIChsaXN0W2ldLmxpc3RlbmVyICYmIGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgbGlzdC5sZW5ndGggPSAwO1xuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdC5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGtleSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgaWYgKCF0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBmb3IgKGtleSBpbiB0aGlzLl9ldmVudHMpIHtcbiAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzRnVuY3Rpb24obGlzdGVuZXJzKSkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBMSUZPIG9yZGVyXG4gICAgd2hpbGUgKGxpc3RlbmVycy5sZW5ndGgpXG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tsaXN0ZW5lcnMubGVuZ3RoIC0gMV0pO1xuICB9XG4gIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIHJldDtcbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXQgPSBbXTtcbiAgZWxzZSBpZiAoaXNGdW5jdGlvbih0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIHJldCA9IFt0aGlzLl9ldmVudHNbdHlwZV1dO1xuICBlbHNlXG4gICAgcmV0ID0gdGhpcy5fZXZlbnRzW3R5cGVdLnNsaWNlKCk7XG4gIHJldHVybiByZXQ7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgdmFyIHJldDtcbiAgaWYgKCFlbWl0dGVyLl9ldmVudHMgfHwgIWVtaXR0ZXIuX2V2ZW50c1t0eXBlXSlcbiAgICByZXQgPSAwO1xuICBlbHNlIGlmIChpc0Z1bmN0aW9uKGVtaXR0ZXIuX2V2ZW50c1t0eXBlXSkpXG4gICAgcmV0ID0gMTtcbiAgZWxzZVxuICAgIHJldCA9IGVtaXR0ZXIuX2V2ZW50c1t0eXBlXS5sZW5ndGg7XG4gIHJldHVybiByZXQ7XG59O1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9ldmVudHMvZXZlbnRzLmpzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKXtcbiAgdmFyIGZpbGVzYXZlciA9IHJlcXVpcmUoJy4vZmlsZXNhdmVyJyk7XG4gIHZhciBzYXZlQXMgPSBmaWxlc2F2ZXIuc2F2ZUFzXG59XG5cbmZ1bmN0aW9uIHRvU3RyaW5nKGRhdGEsIGtleXMpIHtcbiAgdmFyIGRhdGFTdHJpbmcgPSBcIlwiO1xuICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHJldHVybiBkYXRhU3RyaW5nO1xuXG4gIGRhdGFTdHJpbmcgKz0ga2V5cy5qb2luKCcsJykgKyAnXFxuJ1xuXG4gIGRhdGEubWFwKGZ1bmN0aW9uKHJvdykge1xuICAgIGtleXMubWFwKGZ1bmN0aW9uKGNvbCwgaSkge1xuICAgICAgbGV0IGNlbGwgPSB0eXBlb2Ygcm93W2NvbF0gIT09ICd1bmRlZmluZWQnID8gKCdcIicrcm93W2NvbF0rJ1wiJykgOiBcIlwiO1xuICAgICAgZGF0YVN0cmluZyArPSBjZWxsO1xuICAgICAgaWYgKGkrMSA8IGtleXMubGVuZ3RoKVxuICAgICAgICBkYXRhU3RyaW5nICs9ICcsJztcbiAgICB9KTtcblxuICAgIGRhdGFTdHJpbmcgKz0gJ1xcbic7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhU3RyaW5nO1xufTtcblxudmFyIGV4cG9ydENTViA9IGZ1bmN0aW9uKGRhdGEsIGtleXMsIGZpbGVuYW1lKSB7XG4gIHZhciBkYXRhU3RyaW5nID0gdG9TdHJpbmcoZGF0YSwga2V5cyk7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHNhdmVBcyggbmV3IEJsb2IoW2RhdGFTdHJpbmddLCB7dHlwZTogXCJ0ZXh0L3BsYWluO2NoYXJzZXQ9dXRmLThcIn0pLCBmaWxlbmFtZSB8fCAnc3ByZWFkc2hlZXQuY3N2JyApO1xuICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV4cG9ydENTVjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2Nzdl9leHBvcnRfdXRpbC5qc1xuICoqLyIsIi8qIEZpbGVTYXZlci5qc1xuICogQSBzYXZlQXMoKSBGaWxlU2F2ZXIgaW1wbGVtZW50YXRpb24uXG4gKiAxLjEuMjAxNTEwMDNcbiAqXG4gKiBCeSBFbGkgR3JleSwgaHR0cDovL2VsaWdyZXkuY29tXG4gKiBMaWNlbnNlOiBNSVRcbiAqICAgU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lbGlncmV5L0ZpbGVTYXZlci5qcy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kXG4gKi9cblxuLypnbG9iYWwgc2VsZiAqL1xuLypqc2xpbnQgYml0d2lzZTogdHJ1ZSwgaW5kZW50OiA0LCBsYXhicmVhazogdHJ1ZSwgbGF4Y29tbWE6IHRydWUsIHNtYXJ0dGFiczogdHJ1ZSwgcGx1c3BsdXM6IHRydWUgKi9cblxuLyohIEBzb3VyY2UgaHR0cDovL3B1cmwuZWxpZ3JleS5jb20vZ2l0aHViL0ZpbGVTYXZlci5qcy9ibG9iL21hc3Rlci9GaWxlU2F2ZXIuanMgKi9cblxudmFyIHNhdmVBcyA9IHNhdmVBcyB8fCAoZnVuY3Rpb24odmlldykge1xuXHRcInVzZSBzdHJpY3RcIjtcblx0Ly8gSUUgPDEwIGlzIGV4cGxpY2l0bHkgdW5zdXBwb3J0ZWRcblx0aWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09IFwidW5kZWZpbmVkXCIgJiYgL01TSUUgWzEtOV1cXC4vLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyXG5cdFx0ICBkb2MgPSB2aWV3LmRvY3VtZW50XG5cdFx0ICAvLyBvbmx5IGdldCBVUkwgd2hlbiBuZWNlc3NhcnkgaW4gY2FzZSBCbG9iLmpzIGhhc24ndCBvdmVycmlkZGVuIGl0IHlldFxuXHRcdCwgZ2V0X1VSTCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIHZpZXcuVVJMIHx8IHZpZXcud2Via2l0VVJMIHx8IHZpZXc7XG5cdFx0fVxuXHRcdCwgc2F2ZV9saW5rID0gZG9jLmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIiwgXCJhXCIpXG5cdFx0LCBjYW5fdXNlX3NhdmVfbGluayA9IFwiZG93bmxvYWRcIiBpbiBzYXZlX2xpbmtcblx0XHQsIGNsaWNrID0gZnVuY3Rpb24obm9kZSkge1xuXHRcdFx0dmFyIGV2ZW50ID0gbmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiKTtcblx0XHRcdG5vZGUuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cdFx0fVxuXHRcdCwgaXNfc2FmYXJpID0gL1ZlcnNpb25cXC9bXFxkXFwuXSsuKlNhZmFyaS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KVxuXHRcdCwgd2Via2l0X3JlcV9mcyA9IHZpZXcud2Via2l0UmVxdWVzdEZpbGVTeXN0ZW1cblx0XHQsIHJlcV9mcyA9IHZpZXcucmVxdWVzdEZpbGVTeXN0ZW0gfHwgd2Via2l0X3JlcV9mcyB8fCB2aWV3Lm1velJlcXVlc3RGaWxlU3lzdGVtXG5cdFx0LCB0aHJvd19vdXRzaWRlID0gZnVuY3Rpb24oZXgpIHtcblx0XHRcdCh2aWV3LnNldEltbWVkaWF0ZSB8fCB2aWV3LnNldFRpbWVvdXQpKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR0aHJvdyBleDtcblx0XHRcdH0sIDApO1xuXHRcdH1cblx0XHQsIGZvcmNlX3NhdmVhYmxlX3R5cGUgPSBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiXG5cdFx0LCBmc19taW5fc2l6ZSA9IDBcblx0XHQvLyBTZWUgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTM3NTI5NyNjNyBhbmRcblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vZWxpZ3JleS9GaWxlU2F2ZXIuanMvY29tbWl0LzQ4NTkzMGEjY29tbWl0Y29tbWVudC04NzY4MDQ3XG5cdFx0Ly8gZm9yIHRoZSByZWFzb25pbmcgYmVoaW5kIHRoZSB0aW1lb3V0IGFuZCByZXZvY2F0aW9uIGZsb3dcblx0XHQsIGFyYml0cmFyeV9yZXZva2VfdGltZW91dCA9IDUwMCAvLyBpbiBtc1xuXHRcdCwgcmV2b2tlID0gZnVuY3Rpb24oZmlsZSkge1xuXHRcdFx0dmFyIHJldm9rZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKHR5cGVvZiBmaWxlID09PSBcInN0cmluZ1wiKSB7IC8vIGZpbGUgaXMgYW4gb2JqZWN0IFVSTFxuXHRcdFx0XHRcdGdldF9VUkwoKS5yZXZva2VPYmplY3RVUkwoZmlsZSk7XG5cdFx0XHRcdH0gZWxzZSB7IC8vIGZpbGUgaXMgYSBGaWxlXG5cdFx0XHRcdFx0ZmlsZS5yZW1vdmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdGlmICh2aWV3LmNocm9tZSkge1xuXHRcdFx0XHRyZXZva2VyKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZXRUaW1lb3V0KHJldm9rZXIsIGFyYml0cmFyeV9yZXZva2VfdGltZW91dCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdCwgZGlzcGF0Y2ggPSBmdW5jdGlvbihmaWxlc2F2ZXIsIGV2ZW50X3R5cGVzLCBldmVudCkge1xuXHRcdFx0ZXZlbnRfdHlwZXMgPSBbXS5jb25jYXQoZXZlbnRfdHlwZXMpO1xuXHRcdFx0dmFyIGkgPSBldmVudF90eXBlcy5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoaS0tKSB7XG5cdFx0XHRcdHZhciBsaXN0ZW5lciA9IGZpbGVzYXZlcltcIm9uXCIgKyBldmVudF90eXBlc1tpXV07XG5cdFx0XHRcdGlmICh0eXBlb2YgbGlzdGVuZXIgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRsaXN0ZW5lci5jYWxsKGZpbGVzYXZlciwgZXZlbnQgfHwgZmlsZXNhdmVyKTtcblx0XHRcdFx0XHR9IGNhdGNoIChleCkge1xuXHRcdFx0XHRcdFx0dGhyb3dfb3V0c2lkZShleCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdCwgYXV0b19ib20gPSBmdW5jdGlvbihibG9iKSB7XG5cdFx0XHQvLyBwcmVwZW5kIEJPTSBmb3IgVVRGLTggWE1MIGFuZCB0ZXh0LyogdHlwZXMgKGluY2x1ZGluZyBIVE1MKVxuXHRcdFx0aWYgKC9eXFxzKig/OnRleHRcXC9cXFMqfGFwcGxpY2F0aW9uXFwveG1sfFxcUypcXC9cXFMqXFwreG1sKVxccyo7LipjaGFyc2V0XFxzKj1cXHMqdXRmLTgvaS50ZXN0KGJsb2IudHlwZSkpIHtcblx0XHRcdFx0cmV0dXJuIG5ldyBCbG9iKFtcIlxcdWZlZmZcIiwgYmxvYl0sIHt0eXBlOiBibG9iLnR5cGV9KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBibG9iO1xuXHRcdH1cblx0XHQsIEZpbGVTYXZlciA9IGZ1bmN0aW9uKGJsb2IsIG5hbWUsIG5vX2F1dG9fYm9tKSB7XG5cdFx0XHRpZiAoIW5vX2F1dG9fYm9tKSB7XG5cdFx0XHRcdGJsb2IgPSBhdXRvX2JvbShibG9iKTtcblx0XHRcdH1cblx0XHRcdC8vIEZpcnN0IHRyeSBhLmRvd25sb2FkLCB0aGVuIHdlYiBmaWxlc3lzdGVtLCB0aGVuIG9iamVjdCBVUkxzXG5cdFx0XHR2YXJcblx0XHRcdFx0ICBmaWxlc2F2ZXIgPSB0aGlzXG5cdFx0XHRcdCwgdHlwZSA9IGJsb2IudHlwZVxuXHRcdFx0XHQsIGJsb2JfY2hhbmdlZCA9IGZhbHNlXG5cdFx0XHRcdCwgb2JqZWN0X3VybFxuXHRcdFx0XHQsIHRhcmdldF92aWV3XG5cdFx0XHRcdCwgZGlzcGF0Y2hfYWxsID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0ZGlzcGF0Y2goZmlsZXNhdmVyLCBcIndyaXRlc3RhcnQgcHJvZ3Jlc3Mgd3JpdGUgd3JpdGVlbmRcIi5zcGxpdChcIiBcIikpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIG9uIGFueSBmaWxlc3lzIGVycm9ycyByZXZlcnQgdG8gc2F2aW5nIHdpdGggb2JqZWN0IFVSTHNcblx0XHRcdFx0LCBmc19lcnJvciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmICh0YXJnZXRfdmlldyAmJiBpc19zYWZhcmkgJiYgdHlwZW9mIEZpbGVSZWFkZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0XHRcdC8vIFNhZmFyaSBkb2Vzbid0IGFsbG93IGRvd25sb2FkaW5nIG9mIGJsb2IgdXJsc1xuXHRcdFx0XHRcdFx0dmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cdFx0XHRcdFx0XHRyZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBiYXNlNjREYXRhID0gcmVhZGVyLnJlc3VsdDtcblx0XHRcdFx0XHRcdFx0dGFyZ2V0X3ZpZXcubG9jYXRpb24uaHJlZiA9IFwiZGF0YTphdHRhY2htZW50L2ZpbGVcIiArIGJhc2U2NERhdGEuc2xpY2UoYmFzZTY0RGF0YS5zZWFyY2goL1ssO10vKSk7XG5cdFx0XHRcdFx0XHRcdGZpbGVzYXZlci5yZWFkeVN0YXRlID0gZmlsZXNhdmVyLkRPTkU7XG5cdFx0XHRcdFx0XHRcdGRpc3BhdGNoX2FsbCgpO1xuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuXHRcdFx0XHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuSU5JVDtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gZG9uJ3QgY3JlYXRlIG1vcmUgb2JqZWN0IFVSTHMgdGhhbiBuZWVkZWRcblx0XHRcdFx0XHRpZiAoYmxvYl9jaGFuZ2VkIHx8ICFvYmplY3RfdXJsKSB7XG5cdFx0XHRcdFx0XHRvYmplY3RfdXJsID0gZ2V0X1VSTCgpLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHRhcmdldF92aWV3KSB7XG5cdFx0XHRcdFx0XHR0YXJnZXRfdmlldy5sb2NhdGlvbi5ocmVmID0gb2JqZWN0X3VybDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dmFyIG5ld190YWIgPSB2aWV3Lm9wZW4ob2JqZWN0X3VybCwgXCJfYmxhbmtcIik7XG5cdFx0XHRcdFx0XHRpZiAobmV3X3RhYiA9PSB1bmRlZmluZWQgJiYgaXNfc2FmYXJpKSB7XG5cdFx0XHRcdFx0XHRcdC8vQXBwbGUgZG8gbm90IGFsbG93IHdpbmRvdy5vcGVuLCBzZWUgaHR0cDovL2JpdC5seS8xa1pmZlJJXG5cdFx0XHRcdFx0XHRcdHZpZXcubG9jYXRpb24uaHJlZiA9IG9iamVjdF91cmxcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuRE9ORTtcblx0XHRcdFx0XHRkaXNwYXRjaF9hbGwoKTtcblx0XHRcdFx0XHRyZXZva2Uob2JqZWN0X3VybCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0LCBhYm9ydGFibGUgPSBmdW5jdGlvbihmdW5jKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0aWYgKGZpbGVzYXZlci5yZWFkeVN0YXRlICE9PSBmaWxlc2F2ZXIuRE9ORSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0LCBjcmVhdGVfaWZfbm90X2ZvdW5kID0ge2NyZWF0ZTogdHJ1ZSwgZXhjbHVzaXZlOiBmYWxzZX1cblx0XHRcdFx0LCBzbGljZVxuXHRcdFx0O1xuXHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuSU5JVDtcblx0XHRcdGlmICghbmFtZSkge1xuXHRcdFx0XHRuYW1lID0gXCJkb3dubG9hZFwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGNhbl91c2Vfc2F2ZV9saW5rKSB7XG5cdFx0XHRcdG9iamVjdF91cmwgPSBnZXRfVVJMKCkuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXHRcdFx0XHRzYXZlX2xpbmsuaHJlZiA9IG9iamVjdF91cmw7XG5cdFx0XHRcdHNhdmVfbGluay5kb3dubG9hZCA9IG5hbWU7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0Y2xpY2soc2F2ZV9saW5rKTtcblx0XHRcdFx0XHRkaXNwYXRjaF9hbGwoKTtcblx0XHRcdFx0XHRyZXZva2Uob2JqZWN0X3VybCk7XG5cdFx0XHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuRE9ORTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdC8vIE9iamVjdCBhbmQgd2ViIGZpbGVzeXN0ZW0gVVJMcyBoYXZlIGEgcHJvYmxlbSBzYXZpbmcgaW4gR29vZ2xlIENocm9tZSB3aGVuXG5cdFx0XHQvLyB2aWV3ZWQgaW4gYSB0YWIsIHNvIEkgZm9yY2Ugc2F2ZSB3aXRoIGFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVxuXHRcdFx0Ly8gaHR0cDovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTExNThcblx0XHRcdC8vIFVwZGF0ZTogR29vZ2xlIGVycmFudGx5IGNsb3NlZCA5MTE1OCwgSSBzdWJtaXR0ZWQgaXQgYWdhaW46XG5cdFx0XHQvLyBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9Mzg5NjQyXG5cdFx0XHRpZiAodmlldy5jaHJvbWUgJiYgdHlwZSAmJiB0eXBlICE9PSBmb3JjZV9zYXZlYWJsZV90eXBlKSB7XG5cdFx0XHRcdHNsaWNlID0gYmxvYi5zbGljZSB8fCBibG9iLndlYmtpdFNsaWNlO1xuXHRcdFx0XHRibG9iID0gc2xpY2UuY2FsbChibG9iLCAwLCBibG9iLnNpemUsIGZvcmNlX3NhdmVhYmxlX3R5cGUpO1xuXHRcdFx0XHRibG9iX2NoYW5nZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gU2luY2UgSSBjYW4ndCBiZSBzdXJlIHRoYXQgdGhlIGd1ZXNzZWQgbWVkaWEgdHlwZSB3aWxsIHRyaWdnZXIgYSBkb3dubG9hZFxuXHRcdFx0Ly8gaW4gV2ViS2l0LCBJIGFwcGVuZCAuZG93bmxvYWQgdG8gdGhlIGZpbGVuYW1lLlxuXHRcdFx0Ly8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTY1NDQwXG5cdFx0XHRpZiAod2Via2l0X3JlcV9mcyAmJiBuYW1lICE9PSBcImRvd25sb2FkXCIpIHtcblx0XHRcdFx0bmFtZSArPSBcIi5kb3dubG9hZFwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGUgPT09IGZvcmNlX3NhdmVhYmxlX3R5cGUgfHwgd2Via2l0X3JlcV9mcykge1xuXHRcdFx0XHR0YXJnZXRfdmlldyA9IHZpZXc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXJlcV9mcykge1xuXHRcdFx0XHRmc19lcnJvcigpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRmc19taW5fc2l6ZSArPSBibG9iLnNpemU7XG5cdFx0XHRyZXFfZnModmlldy5URU1QT1JBUlksIGZzX21pbl9zaXplLCBhYm9ydGFibGUoZnVuY3Rpb24oZnMpIHtcblx0XHRcdFx0ZnMucm9vdC5nZXREaXJlY3RvcnkoXCJzYXZlZFwiLCBjcmVhdGVfaWZfbm90X2ZvdW5kLCBhYm9ydGFibGUoZnVuY3Rpb24oZGlyKSB7XG5cdFx0XHRcdFx0dmFyIHNhdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGRpci5nZXRGaWxlKG5hbWUsIGNyZWF0ZV9pZl9ub3RfZm91bmQsIGFib3J0YWJsZShmdW5jdGlvbihmaWxlKSB7XG5cdFx0XHRcdFx0XHRcdGZpbGUuY3JlYXRlV3JpdGVyKGFib3J0YWJsZShmdW5jdGlvbih3cml0ZXIpIHtcblx0XHRcdFx0XHRcdFx0XHR3cml0ZXIub253cml0ZWVuZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0YXJnZXRfdmlldy5sb2NhdGlvbi5ocmVmID0gZmlsZS50b1VSTCgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuRE9ORTtcblx0XHRcdFx0XHRcdFx0XHRcdGRpc3BhdGNoKGZpbGVzYXZlciwgXCJ3cml0ZWVuZFwiLCBldmVudCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXZva2UoZmlsZSk7XG5cdFx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0XHR3cml0ZXIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yID0gd3JpdGVyLmVycm9yO1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGVycm9yLmNvZGUgIT09IGVycm9yLkFCT1JUX0VSUikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRmc19lcnJvcigpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdFx0XCJ3cml0ZXN0YXJ0IHByb2dyZXNzIHdyaXRlIGFib3J0XCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHdyaXRlcltcIm9uXCIgKyBldmVudF0gPSBmaWxlc2F2ZXJbXCJvblwiICsgZXZlbnRdO1xuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdHdyaXRlci53cml0ZShibG9iKTtcblx0XHRcdFx0XHRcdFx0XHRmaWxlc2F2ZXIuYWJvcnQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHdyaXRlci5hYm9ydCgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuRE9ORTtcblx0XHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRcdGZpbGVzYXZlci5yZWFkeVN0YXRlID0gZmlsZXNhdmVyLldSSVRJTkc7XG5cdFx0XHRcdFx0XHRcdH0pLCBmc19lcnJvcik7XG5cdFx0XHRcdFx0XHR9KSwgZnNfZXJyb3IpO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0ZGlyLmdldEZpbGUobmFtZSwge2NyZWF0ZTogZmFsc2V9LCBhYm9ydGFibGUoZnVuY3Rpb24oZmlsZSkge1xuXHRcdFx0XHRcdFx0Ly8gZGVsZXRlIGZpbGUgaWYgaXQgYWxyZWFkeSBleGlzdHNcblx0XHRcdFx0XHRcdGZpbGUucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHRzYXZlKCk7XG5cdFx0XHRcdFx0fSksIGFib3J0YWJsZShmdW5jdGlvbihleCkge1xuXHRcdFx0XHRcdFx0aWYgKGV4LmNvZGUgPT09IGV4Lk5PVF9GT1VORF9FUlIpIHtcblx0XHRcdFx0XHRcdFx0c2F2ZSgpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0ZnNfZXJyb3IoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KSk7XG5cdFx0XHRcdH0pLCBmc19lcnJvcik7XG5cdFx0XHR9KSwgZnNfZXJyb3IpO1xuXHRcdH1cblx0XHQsIEZTX3Byb3RvID0gRmlsZVNhdmVyLnByb3RvdHlwZVxuXHRcdCwgc2F2ZUFzID0gZnVuY3Rpb24oYmxvYiwgbmFtZSwgbm9fYXV0b19ib20pIHtcblx0XHRcdHJldHVybiBuZXcgRmlsZVNhdmVyKGJsb2IsIG5hbWUsIG5vX2F1dG9fYm9tKTtcblx0XHR9XG5cdDtcblx0Ly8gSUUgMTArIChuYXRpdmUgc2F2ZUFzKVxuXHRpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gXCJ1bmRlZmluZWRcIiAmJiBuYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYikge1xuXHRcdHJldHVybiBmdW5jdGlvbihibG9iLCBuYW1lLCBub19hdXRvX2JvbSkge1xuXHRcdFx0aWYgKCFub19hdXRvX2JvbSkge1xuXHRcdFx0XHRibG9iID0gYXV0b19ib20oYmxvYik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IoYmxvYiwgbmFtZSB8fCBcImRvd25sb2FkXCIpO1xuXHRcdH07XG5cdH1cblxuXHRGU19wcm90by5hYm9ydCA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBmaWxlc2F2ZXIgPSB0aGlzO1xuXHRcdGZpbGVzYXZlci5yZWFkeVN0YXRlID0gZmlsZXNhdmVyLkRPTkU7XG5cdFx0ZGlzcGF0Y2goZmlsZXNhdmVyLCBcImFib3J0XCIpO1xuXHR9O1xuXHRGU19wcm90by5yZWFkeVN0YXRlID0gRlNfcHJvdG8uSU5JVCA9IDA7XG5cdEZTX3Byb3RvLldSSVRJTkcgPSAxO1xuXHRGU19wcm90by5ET05FID0gMjtcblxuXHRGU19wcm90by5lcnJvciA9XG5cdEZTX3Byb3RvLm9ud3JpdGVzdGFydCA9XG5cdEZTX3Byb3RvLm9ucHJvZ3Jlc3MgPVxuXHRGU19wcm90by5vbndyaXRlID1cblx0RlNfcHJvdG8ub25hYm9ydCA9XG5cdEZTX3Byb3RvLm9uZXJyb3IgPVxuXHRGU19wcm90by5vbndyaXRlZW5kID1cblx0XHRudWxsO1xuXG5cdHJldHVybiBzYXZlQXM7XG59KFxuXHQgICB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmXG5cdHx8IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93XG5cdHx8IHRoaXMuY29udGVudFxuKSk7XG4vLyBgc2VsZmAgaXMgdW5kZWZpbmVkIGluIEZpcmVmb3ggZm9yIEFuZHJvaWQgY29udGVudCBzY3JpcHQgY29udGV4dFxuLy8gd2hpbGUgYHRoaXNgIGlzIG5zSUNvbnRlbnRGcmFtZU1lc3NhZ2VNYW5hZ2VyXG4vLyB3aXRoIGFuIGF0dHJpYnV0ZSBgY29udGVudGAgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgd2luZG93XG5cbmlmICh0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzLnNhdmVBcyA9IHNhdmVBcztcbn0gZWxzZSBpZiAoKHR5cGVvZiBkZWZpbmUgIT09IFwidW5kZWZpbmVkXCIgJiYgZGVmaW5lICE9PSBudWxsKSAmJiAoZGVmaW5lLmFtZCAhPSBudWxsKSkge1xuICBkZWZpbmUoW10sIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBzYXZlQXM7XG4gIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZmlsZXNhdmVyLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHsgdGhyb3cgbmV3IEVycm9yKFwiZGVmaW5lIGNhbm5vdCBiZSB1c2VkIGluZGlyZWN0XCIpOyB9O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqICh3ZWJwYWNrKS9idWlsZGluL2FtZC1kZWZpbmUuanNcbiAqKiBtb2R1bGUgaWQgPSAzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfYW1kX29wdGlvbnNfXztcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAod2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgQ29uc3QgZnJvbSAnLi9Db25zdCc7XG52YXIgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyO1xuXG5leHBvcnQgY2xhc3MgRmlsdGVyIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICB0aGlzLmN1cnJlbnRGaWx0ZXIgPSB7fTtcbiAgICB9XG5cbiAgICBoYW5kbGVGaWx0ZXIoZGF0YUZpZWxkLCB2YWx1ZSwgdHlwZSkge1xuICAgICAgICBjb25zdCBmaWx0ZXJUeXBlID0gdHlwZSB8fCBDb25zdC5GSUxURVJfVFlQRS5DVVNUT007XG5cbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgLy8gdmFsdWUgb2YgdGhlIGZpbHRlciBpcyBhbiBvYmplY3RcbiAgICAgICAgICAgIGxldCBoYXNWYWx1ZSA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZVtwcm9wXSB8fCB2YWx1ZVtwcm9wXSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICBoYXNWYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiBvbmUgb2YgdGhlIG9iamVjdCBwcm9wZXJ0aWVzIGlzIHVuZGVmaW5lZCBvciBlbXB0eSwgd2UgcmVtb3ZlIHRoZSBmaWx0ZXJcbiAgICAgICAgICAgIChoYXNWYWx1ZSkgPyB0aGlzLmN1cnJlbnRGaWx0ZXJbZGF0YUZpZWxkXSA9IHt2YWx1ZTogdmFsdWUsIHR5cGU6IGZpbHRlclR5cGV9IDogZGVsZXRlIHRoaXMuY3VycmVudEZpbHRlcltkYXRhRmllbGRdO1xuICAgICAgICB9IGVsc2UgaWYgKCF2YWx1ZSB8fCB2YWx1ZS50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRGaWx0ZXJbZGF0YUZpZWxkXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEZpbHRlcltkYXRhRmllbGRdID0ge3ZhbHVlOiB2YWx1ZS50cmltKCksIHR5cGU6IGZpbHRlclR5cGV9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW1pdCgnb25GaWx0ZXJDaGFuZ2UnLCB0aGlzLmN1cnJlbnRGaWx0ZXIpO1xuICAgIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL0ZpbHRlci5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NTZXQgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi9Db25zdCc7XG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IERhdGVGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL0RhdGUnO1xuaW1wb3J0IFRleHRGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1RleHQnO1xuaW1wb3J0IFJlZ2V4RmlsdGVyIGZyb20gJy4vZmlsdGVycy9SZWdleCc7XG5pbXBvcnQgU2VsZWN0RmlsdGVyIGZyb20gJy4vZmlsdGVycy9TZWxlY3QnO1xuaW1wb3J0IE51bWJlckZpbHRlciBmcm9tICcuL2ZpbHRlcnMvTnVtYmVyJztcblxuY2xhc3MgVGFibGVIZWFkZXJDb2x1bW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5oYW5kbGVGaWx0ZXIgPSB0aGlzLmhhbmRsZUZpbHRlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ29sdW1uQ2xpY2soZSl7XG4gICAgaWYoIXRoaXMucHJvcHMuZGF0YVNvcnQpcmV0dXJuO1xuICAgIGxldCBvcmRlciA9IHRoaXMucHJvcHMuc29ydCA9PSBDb25zdC5TT1JUX0RFU0M/Q29uc3QuU09SVF9BU0M6Q29uc3QuU09SVF9ERVNDO1xuICAgIHRoaXMucHJvcHMub25Tb3J0KG9yZGVyLCB0aGlzLnByb3BzLmRhdGFGaWVsZCk7XG4gIH1cblxuICBoYW5kbGVGaWx0ZXIodmFsdWUsIHR5cGUpIHtcbiAgICB0aGlzLnByb3BzLmZpbHRlci5lbWl0dGVyLmhhbmRsZUZpbHRlcih0aGlzLnByb3BzLmRhdGFGaWVsZCwgdmFsdWUsIHR5cGUpO1xuICB9XG5cbiAgZ2V0RmlsdGVycygpIHtcbiAgICBzd2l0Y2ggKHRoaXMucHJvcHMuZmlsdGVyLnR5cGUpIHtcbiAgICAgIGNhc2UgQ29uc3QuRklMVEVSX1RZUEUuVEVYVDoge1xuICAgICAgICByZXR1cm4gPFRleHRGaWx0ZXIgey4uLnRoaXMucHJvcHMuZmlsdGVyfSBjb2x1bW5OYW1lPXt0aGlzLnByb3BzLmNoaWxkcmVufSBmaWx0ZXJIYW5kbGVyPXt0aGlzLmhhbmRsZUZpbHRlcn0gLz47XG4gICAgICB9XG4gICAgICBjYXNlIENvbnN0LkZJTFRFUl9UWVBFLlJFR0VYOiB7XG4gICAgICAgIHJldHVybiA8UmVnZXhGaWx0ZXIgey4uLnRoaXMucHJvcHMuZmlsdGVyfSBjb2x1bW5OYW1lPXt0aGlzLnByb3BzLmNoaWxkcmVufSBmaWx0ZXJIYW5kbGVyPXt0aGlzLmhhbmRsZUZpbHRlcn0gLz47XG4gICAgICB9XG4gICAgICBjYXNlIENvbnN0LkZJTFRFUl9UWVBFLlNFTEVDVDoge1xuICAgICAgICByZXR1cm4gPFNlbGVjdEZpbHRlciB7Li4udGhpcy5wcm9wcy5maWx0ZXJ9IGNvbHVtbk5hbWU9e3RoaXMucHJvcHMuY2hpbGRyZW59IGZpbHRlckhhbmRsZXI9e3RoaXMuaGFuZGxlRmlsdGVyfSAvPjtcbiAgICAgIH1cbiAgICAgIGNhc2UgQ29uc3QuRklMVEVSX1RZUEUuTlVNQkVSOiB7XG4gICAgICAgIHJldHVybiA8TnVtYmVyRmlsdGVyIHsuLi50aGlzLnByb3BzLmZpbHRlcn0gY29sdW1uTmFtZT17dGhpcy5wcm9wcy5jaGlsZHJlbn0gZmlsdGVySGFuZGxlcj17dGhpcy5oYW5kbGVGaWx0ZXJ9IC8+O1xuICAgICAgfVxuICAgICAgY2FzZSBDb25zdC5GSUxURVJfVFlQRS5EQVRFOiB7XG4gICAgICAgIHJldHVybiA8RGF0ZUZpbHRlciB7Li4udGhpcy5wcm9wcy5maWx0ZXJ9IGNvbHVtbk5hbWU9e3RoaXMucHJvcHMuY2hpbGRyZW59IGZpbHRlckhhbmRsZXI9e3RoaXMuaGFuZGxlRmlsdGVyfSAvPjtcbiAgICAgIH1cbiAgICAgIGNhc2UgQ29uc3QuRklMVEVSX1RZUEUuQ1VTVE9NOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmZpbHRlci5nZXRFbGVtZW50KHRoaXMuaGFuZGxlRmlsdGVyLCB0aGlzLnByb3BzLmZpbHRlci5jdXN0b21GaWx0ZXJQYXJhbWV0ZXJzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHRoaXMucmVmc1tcImhlYWRlci1jb2xcIl0uc2V0QXR0cmlidXRlKFwiZGF0YS1maWVsZFwiLCB0aGlzLnByb3BzLmRhdGFGaWVsZCk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICBsZXQgZGVmYXVsdENhcmV0O1xuICAgIHZhciB0aFN0eWxlID0ge1xuICAgICAgdGV4dEFsaWduOiB0aGlzLnByb3BzLmRhdGFBbGlnbixcbiAgICAgIGRpc3BsYXk6IHRoaXMucHJvcHMuaGlkZGVuP1wibm9uZVwiOm51bGxcbiAgICB9O1xuICAgIGlmKHRoaXMucHJvcHMuc29ydEluZGljYXRvcikge1xuICAgICAgZGVmYXVsdENhcmV0ID0gKCF0aGlzLnByb3BzLmRhdGFTb3J0KSA/IG51bGwgOiAoXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9yZGVyXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmV0XCIgc3R5bGU9e3ttYXJnaW46ICcxMHB4IDAgMTBweCA1cHgnLCBjb2xvcjogJyNjY2MnfX0+PC9zcGFuPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkcm9wdXBcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmV0XCIgc3R5bGU9e3ttYXJnaW46ICcxMHB4IDAnLCBjb2xvcjogJyNjY2MnfX0+PC9zcGFuPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3Qgc29ydENhcmV0ID0gdGhpcy5wcm9wcy5zb3J0ID8gVXRpbC5yZW5kZXJSZWFjdFNvcnRDYXJldCh0aGlzLnByb3BzLnNvcnQpIDogZGVmYXVsdENhcmV0O1xuXG4gICAgdmFyIGNsYXNzZXMgPSB0aGlzLnByb3BzLmNsYXNzTmFtZStcIiBcIisodGhpcy5wcm9wcy5kYXRhU29ydD9cInNvcnQtY29sdW1uXCI6XCJcIik7XG4gICAgcmV0dXJuKFxuICAgICAgPHRoIHJlZj0naGVhZGVyLWNvbCdcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XG4gICAgICAgICAgc3R5bGU9e3RoU3R5bGV9XG4gICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDb2x1bW5DbGljay5iaW5kKHRoaXMpfT5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59e3NvcnRDYXJldH1cbiAgICAgICAge3RoaXMucHJvcHMuZmlsdGVyID8gdGhpcy5nZXRGaWx0ZXJzKCkgOiBudWxsfVxuICAgICAgPC90aD5cbiAgICApXG4gIH1cbn1cblxudmFyIGZpbHRlclR5cGVBcnJheSA9IFtdO1xuZm9yIChsZXQga2V5IGluIENvbnN0LkZJTFRFUl9UWVBFKSB7XG4gIGZpbHRlclR5cGVBcnJheS5wdXNoKENvbnN0LkZJTFRFUl9UWVBFW2tleV0pO1xufVxuXG5UYWJsZUhlYWRlckNvbHVtbi5wcm9wVHlwZXMgPSB7XG4gIGRhdGFGaWVsZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgZGF0YUFsaWduOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBkYXRhU29ydDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIG9uU29ydDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIGRhdGFGb3JtYXQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBpc0tleTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGVkaXRhYmxlOiBSZWFjdC5Qcm9wVHlwZXMuYW55LFxuICBoaWRkZW46IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBzZWFyY2hhYmxlOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgY2xhc3NOYW1lOlJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIHdpZHRoOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBzb3J0RnVuYzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIGNvbHVtbkNsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLmFueSxcbiAgZmlsdGVyRm9ybWF0dGVkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgc29ydDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgZm9ybWF0RXh0cmFEYXRhOiBSZWFjdC5Qcm9wVHlwZXMuYW55LFxuICBmaWx0ZXI6IFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4gICAgdHlwZTogUmVhY3QuUHJvcFR5cGVzLm9uZU9mKGZpbHRlclR5cGVBcnJheSksXG4gICAgZGVsYXk6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgb3B0aW9uczogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LCAvLyBmb3IgU2VsZWN0RmlsdGVyXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuYXJyYXlPZihSZWFjdC5Qcm9wVHlwZXMubnVtYmVyKSAvL2ZvciBOdW1iZXJGaWx0ZXJcbiAgICAgICAgXSksXG4gICAgbnVtYmVyQ29tcGFyYXRvcnM6IFJlYWN0LlByb3BUeXBlcy5hcnJheU9mKFJlYWN0LlByb3BUeXBlcy5zdHJpbmcpLFxuICAgIGVtaXR0ZXI6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgcGxhY2Vob2xkZXI6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgZ2V0RWxlbWVudDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgY3VzdG9tRmlsdGVyUGFyYW1ldGVyczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICB9KSxcbiAgc29ydEluZGljYXRvcjogUmVhY3QuUHJvcFR5cGVzLmJvb2xcbn07XG5cblRhYmxlSGVhZGVyQ29sdW1uLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGF0YUFsaWduOiBcImxlZnRcIixcbiAgZGF0YVNvcnQ6IGZhbHNlLFxuICBkYXRhRm9ybWF0OiB1bmRlZmluZWQsXG4gIGlzS2V5OiBmYWxzZSxcbiAgZWRpdGFibGU6IHRydWUsXG4gIG9uU29ydDogdW5kZWZpbmVkLFxuICBoaWRkZW46IGZhbHNlLFxuICBzZWFyY2hhYmxlOiB0cnVlLFxuICBjbGFzc05hbWU6IFwiXCIsXG4gIHdpZHRoOiBudWxsLFxuICBzb3J0RnVuYzogdW5kZWZpbmVkLFxuICBjb2x1bW5DbGFzc05hbWU6ICcnLFxuICBmaWx0ZXJGb3JtYXR0ZWQ6IGZhbHNlLFxuICBzb3J0OiB1bmRlZmluZWQsXG4gIGZvcm1hdEV4dHJhRGF0YTogdW5kZWZpbmVkLFxuICBmaWx0ZXI6IHVuZGVmaW5lZCxcbiAgc29ydEluZGljYXRvcjogdHJ1ZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFibGVIZWFkZXJDb2x1bW47XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9UYWJsZUhlYWRlckNvbHVtbi5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi4vQ29uc3QnO1xuXG5jbGFzcyBEYXRlRmlsdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gdGhpcy5maWx0ZXIuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzZXREZWZhdWx0RGF0ZSgpIHtcbiAgICAgICAgbGV0IGRlZmF1bHREYXRlICA9IFwiXCI7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgICAgICAgLy8gU2V0IHRoZSBhcHByb3ByaWF0ZSBmb3JtYXQgZm9yIHRoZSBpbnB1dCB0eXBlPWRhdGUsIGkuZS4gXCJZWVlZLU1NLUREXCJcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IG5ldyBEYXRlKHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgICAgIGRlZmF1bHREYXRlID0gYCR7ZGVmYXVsdFZhbHVlLmdldEZ1bGxZZWFyKCl9LSR7KFwiMFwiICsgKGRlZmF1bHRWYWx1ZS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKX0tJHsoXCIwXCIgKyBkZWZhdWx0VmFsdWUuZ2V0RGF0ZSgpKS5zbGljZSgtMil9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVmYXVsdERhdGU7XG4gICAgfVxuXG4gICAgZmlsdGVyKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGRhdGVWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgaWYgKGRhdGVWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5maWx0ZXJIYW5kbGVyKG5ldyBEYXRlKGRhdGVWYWx1ZSksIENvbnN0LkZJTFRFUl9UWVBFLkRBVEUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5maWx0ZXJIYW5kbGVyKG51bGwsIENvbnN0LkZJTFRFUl9UWVBFLkRBVEUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IGRhdGVWYWx1ZSA9IHRoaXMucmVmcy5pbnB1dERhdGUuZGVmYXVsdFZhbHVlO1xuICAgICAgICBpZiAoZGF0ZVZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmZpbHRlckhhbmRsZXIobmV3IERhdGUoZGF0ZVZhbHVlKSwgQ29uc3QuRklMVEVSX1RZUEUuREFURSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aW5wdXQgcmVmPVwiaW5wdXREYXRlXCJcbiAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWx0ZXIgZGF0ZS1maWx0ZXIgZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZmlsdGVyfVxuICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5zZXREZWZhdWx0RGF0ZSgpfSAvPlxuICAgICAgICApO1xuICAgIH1cbn07XG5cbkRhdGVGaWx0ZXIucHJvcFR5cGVzID0ge1xuICAgIGZpbHRlckhhbmRsZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZGVmYXVsdFZhbHVlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIGNvbHVtbk5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhdGVGaWx0ZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9maWx0ZXJzL0RhdGUuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4uL0NvbnN0JztcblxuY2xhc3MgVGV4dEZpbHRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuZmlsdGVyID0gdGhpcy5maWx0ZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLnRpbWVvdXQgPSBudWxsO1xuXHR9XG5cblx0ZmlsdGVyKGV2ZW50KSB7XG5cdFx0aWYgKHRoaXMudGltZW91dCkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG5cdFx0fVxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGNvbnN0IGZpbHRlclZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXHRcdHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRzZWxmLnByb3BzLmZpbHRlckhhbmRsZXIoZmlsdGVyVmFsdWUsIENvbnN0LkZJTFRFUl9UWVBFLlRFWFQpO1xuXHRcdH0sIHNlbGYucHJvcHMuZGVsYXkpO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0aWYgKHRoaXMucmVmcy5pbnB1dFRleHQuZGVmYXVsdFZhbHVlKSB7XG5cdFx0XHR0aGlzLnByb3BzLmZpbHRlckhhbmRsZXIodGhpcy5yZWZzLmlucHV0VGV4dC5kZWZhdWx0VmFsdWUsIENvbnN0LkZJTFRFUl9UWVBFLlRFWFQpO1xuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8aW5wdXQgcmVmPVwiaW5wdXRUZXh0XCJcblx0XHRcdFx0ICAgY2xhc3NOYW1lPVwiZmlsdGVyIHRleHQtZmlsdGVyIGZvcm0tY29udHJvbFwiXG5cdFx0XHRcdCAgIHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0ICAgb25DaGFuZ2U9e3RoaXMuZmlsdGVyfVxuXHRcdFx0XHQgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlciB8fCBgRW50ZXIgJHt0aGlzLnByb3BzLmNvbHVtbk5hbWV9Li4uYH1cblx0XHRcdFx0ICAgZGVmYXVsdFZhbHVlPXsodGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUpID8gdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUgOiBcIlwifSAvPlxuXHRcdCk7XG5cdH1cbn07XG5cblRleHRGaWx0ZXIucHJvcFR5cGVzID0ge1xuXHRmaWx0ZXJIYW5kbGVyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXHRkZWZhdWx0VmFsdWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG5cdGRlbGF5OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuXHRwbGFjZWhvbGRlcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcblx0Y29sdW1uTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuVGV4dEZpbHRlci5kZWZhdWx0UHJvcHMgPSB7XG5cdGRlbGF5OiBDb25zdC5GSUxURVJfREVMQVlcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dEZpbHRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2ZpbHRlcnMvVGV4dC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi4vQ29uc3QnO1xuXG5jbGFzcyBSZWdleEZpbHRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuZmlsdGVyID0gdGhpcy5maWx0ZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLnRpbWVvdXQgPSBudWxsO1xuXHR9XG5cblx0ZmlsdGVyKGV2ZW50KSB7XG5cdFx0aWYgKHRoaXMudGltZW91dCkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG5cdFx0fVxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGNvbnN0IGZpbHRlclZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXHRcdHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRzZWxmLnByb3BzLmZpbHRlckhhbmRsZXIoZmlsdGVyVmFsdWUsIENvbnN0LkZJTFRFUl9UWVBFLlJFR0VYKTtcblx0XHR9LCBzZWxmLnByb3BzLmRlbGF5KTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGlmICh0aGlzLnJlZnMuaW5wdXRUZXh0LmRlZmF1bHRWYWx1ZSkge1xuXHRcdFx0dGhpcy5wcm9wcy5maWx0ZXJIYW5kbGVyKHRoaXMucmVmcy5pbnB1dFRleHQuZGVmYXVsdFZhbHVlLCBDb25zdC5GSUxURVJfVFlQRS5SRUdFWCk7XG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxpbnB1dCByZWY9XCJpbnB1dFRleHRcIlxuXHRcdFx0XHQgICBjbGFzc05hbWU9XCJmaWx0ZXIgdGV4dC1maWx0ZXIgZm9ybS1jb250cm9sXCJcblx0XHRcdFx0ICAgdHlwZT1cInRleHRcIlxuXHRcdFx0XHQgICBvbkNoYW5nZT17dGhpcy5maWx0ZXJ9XG5cdFx0XHRcdCAgIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyIHx8IGBFbnRlciBSZWdleCBmb3IgJHt0aGlzLnByb3BzLmNvbHVtbk5hbWV9Li4uYH1cblx0XHRcdFx0ICAgZGVmYXVsdFZhbHVlPXsodGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUpID8gdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUgOiBcIlwifSAvPlxuXHRcdCk7XG5cdH1cbn07XG5cblJlZ2V4RmlsdGVyLnByb3BUeXBlcyA9IHtcblx0ZmlsdGVySGFuZGxlcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblx0ZGVmYXVsdFZhbHVlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuXHRkZWxheTogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcblx0cGxhY2Vob2xkZXI6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG5cdGNvbHVtbk5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbn07XG5cblJlZ2V4RmlsdGVyLmRlZmF1bHRQcm9wcyA9IHtcblx0ZGVsYXk6IENvbnN0LkZJTFRFUl9ERUxBWVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWdleEZpbHRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2ZpbHRlcnMvUmVnZXguanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzU2V0IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4uL0NvbnN0JztcblxuY2xhc3MgU2VsZWN0RmlsdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5maWx0ZXIgPSB0aGlzLmZpbHRlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRpc1BsYWNlaG9sZGVyU2VsZWN0ZWQ6ICh0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSA9PSB1bmRlZmluZWQgfHxcblx0XHRcdFx0XHRcdFx0XHRcdCF0aGlzLnByb3BzLm9wdGlvbnMuaGFzT3duUHJvcGVydHkodGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUpKVxuXHRcdH07XG5cdH1cblxuXHRmaWx0ZXIoZXZlbnQpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtpc1BsYWNlaG9sZGVyU2VsZWN0ZWQ6IChldmVudC50YXJnZXQudmFsdWUgPT09IFwiXCIpfSk7XG5cdFx0dGhpcy5wcm9wcy5maWx0ZXJIYW5kbGVyKGV2ZW50LnRhcmdldC52YWx1ZSwgQ29uc3QuRklMVEVSX1RZUEUuU0VMRUNUKTtcblx0fVxuXG5cdGdldE9wdGlvbnMoKSB7XG5cdFx0bGV0IG9wdGlvblRhZ3MgPSBbXTtcblx0XHRjb25zdCBvcHRpb25zID0gdGhpcy5wcm9wcy5vcHRpb25zO1xuXHRcdG9wdGlvblRhZ3MucHVzaCg8b3B0aW9uIGtleT1cIi0xXCIgdmFsdWU9XCJcIj57dGhpcy5wcm9wcy5wbGFjZWhvbGRlciB8fCBgU2VsZWN0ICR7dGhpcy5wcm9wcy5jb2x1bW5OYW1lfS4uLmB9PC9vcHRpb24+KTtcblx0XHRPYmplY3Qua2V5cyhvcHRpb25zKS5tYXAoKGtleSkgPT4ge1xuXHRcdFx0b3B0aW9uVGFncy5wdXNoKDxvcHRpb24ga2V5PXtrZXl9IHZhbHVlPXtrZXl9PntvcHRpb25zW2tleV19PC9vcHRpb24+KTtcblx0XHR9KTtcblx0XHRyZXR1cm4gb3B0aW9uVGFncztcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGlmICh0aGlzLnJlZnMuc2VsZWN0SW5wdXQudmFsdWUpIHtcblx0XHRcdHRoaXMucHJvcHMuZmlsdGVySGFuZGxlcih0aGlzLnJlZnMuc2VsZWN0SW5wdXQudmFsdWUsIENvbnN0LkZJTFRFUl9UWVBFLlNFTEVDVCk7XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBzZWxlY3RDbGFzcyA9IGNsYXNzU2V0KFwiZmlsdGVyXCIsIFwic2VsZWN0LWZpbHRlclwiLCBcImZvcm0tY29udHJvbFwiLFxuXHRcdFx0XHRcdFx0XHR7XCJwbGFjZWhvbGRlci1zZWxlY3RlZFwiOiB0aGlzLnN0YXRlLmlzUGxhY2Vob2xkZXJTZWxlY3RlZH0pO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWxlY3QgcmVmPVwic2VsZWN0SW5wdXRcIlxuXHRcdFx0XHRcdGNsYXNzTmFtZT17c2VsZWN0Q2xhc3N9XG5cdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuZmlsdGVyfVxuXHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17KHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlICE9IHVuZGVmaW5lZCkgPyB0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSA6IFwiXCJ9PlxuXHRcdFx0XHR7dGhpcy5nZXRPcHRpb25zKCl9XG5cdFx0XHQ8L3NlbGVjdD5cblx0XHQpO1xuXHR9XG59O1xuXG5TZWxlY3RGaWx0ZXIucHJvcFR5cGVzID0ge1xuXHRmaWx0ZXJIYW5kbGVyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXHRvcHRpb25zOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cdHBsYWNlaG9sZGVyOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuXHRjb2x1bW5OYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RGaWx0ZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9maWx0ZXJzL1NlbGVjdC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NTZXQgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi4vQ29uc3QnO1xuXG5jb25zdCBsZWdhbENvbXBhcmF0b3JzID0gW1wiPVwiLCBcIj5cIiwgXCI+PVwiLCBcIjxcIiwgXCI8PVwiLCBcIiE9XCJdO1xuXG5jbGFzcyBOdW1iZXJGaWx0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5udW1iZXJDb21wYXJhdG9ycyA9IHRoaXMucHJvcHMubnVtYmVyQ29tcGFyYXRvcnMgfHwgbGVnYWxDb21wYXJhdG9ycztcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzUGxhY2Vob2xkZXJTZWxlY3RlZDogKHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlID09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUubnVtYmVyID09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMub3B0aW9ucyAmJiB0aGlzLnByb3BzLm9wdGlvbnMuaW5kZXhPZih0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZS5udW1iZXIpID09IC0xKSlcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZU51bWJlciA9IHRoaXMub25DaGFuZ2VOdW1iZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZU51bWJlclNldCA9IHRoaXMub25DaGFuZ2VOdW1iZXJTZXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZUNvbXBhcmF0b3IgPSB0aGlzLm9uQ2hhbmdlQ29tcGFyYXRvci5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlTnVtYmVyKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnJlZnMubnVtYmVyRmlsdGVyQ29tcGFyYXRvci52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYucHJvcHMuZmlsdGVySGFuZGxlcih7bnVtYmVyOiBmaWx0ZXJWYWx1ZSwgY29tcGFyYXRvcjogc2VsZi5yZWZzLm51bWJlckZpbHRlckNvbXBhcmF0b3IudmFsdWV9LFxuICAgICAgICAgICAgICAgIENvbnN0LkZJTFRFUl9UWVBFLk5VTUJFUik7XG4gICAgICAgIH0sIHNlbGYucHJvcHMuZGVsYXkpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlTnVtYmVyU2V0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzUGxhY2Vob2xkZXJTZWxlY3RlZDogKGV2ZW50LnRhcmdldC52YWx1ZSA9PT0gXCJcIil9KTtcbiAgICAgICAgaWYgKHRoaXMucmVmcy5udW1iZXJGaWx0ZXJDb21wYXJhdG9yLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5maWx0ZXJIYW5kbGVyKHtudW1iZXI6IGV2ZW50LnRhcmdldC52YWx1ZSwgY29tcGFyYXRvcjogdGhpcy5yZWZzLm51bWJlckZpbHRlckNvbXBhcmF0b3IudmFsdWV9LFxuICAgICAgICAgICAgQ29uc3QuRklMVEVSX1RZUEUuTlVNQkVSKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZUNvbXBhcmF0b3IoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMucmVmcy5udW1iZXJGaWx0ZXIudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLmZpbHRlckhhbmRsZXIoe251bWJlcjogdGhpcy5yZWZzLm51bWJlckZpbHRlci52YWx1ZSwgY29tcGFyYXRvcjogZXZlbnQudGFyZ2V0LnZhbHVlfSxcbiAgICAgICAgICAgIENvbnN0LkZJTFRFUl9UWVBFLk5VTUJFUik7XG4gICAgfVxuXG4gICAgZ2V0Q29tcGFyYXRvck9wdGlvbnMoKSB7XG4gICAgICAgIGxldCBvcHRpb25UYWdzID0gW107XG4gICAgICAgIG9wdGlvblRhZ3MucHVzaCg8b3B0aW9uIGtleT1cIi0xXCI+PC9vcHRpb24+KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bWJlckNvbXBhcmF0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBvcHRpb25UYWdzLnB1c2goPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXt0aGlzLm51bWJlckNvbXBhcmF0b3JzW2ldfT57dGhpcy5udW1iZXJDb21wYXJhdG9yc1tpXX08L29wdGlvbj4pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gb3B0aW9uVGFncztcbiAgICB9XG5cbiAgICBnZXROdW1iZXJPcHRpb25zKCkge1xuICAgICAgICBsZXQgb3B0aW9uVGFncyA9IFtdO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5wcm9wcy5vcHRpb25zO1xuXG4gICAgICAgIG9wdGlvblRhZ3MucHVzaCg8b3B0aW9uIGtleT1cIi0xXCIgdmFsdWU9XCJcIj57dGhpcy5wcm9wcy5wbGFjZWhvbGRlciB8fCBgU2VsZWN0ICR7dGhpcy5wcm9wcy5jb2x1bW5OYW1lfS4uLmB9PC9vcHRpb24+KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBvcHRpb25UYWdzLnB1c2goPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtvcHRpb25zW2ldfT57b3B0aW9uc1tpXX08L29wdGlvbj4pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gb3B0aW9uVGFncztcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVmcy5udW1iZXJGaWx0ZXJDb21wYXJhdG9yLnZhbHVlICYmIHRoaXMucmVmcy5udW1iZXJGaWx0ZXIudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZmlsdGVySGFuZGxlcih7bnVtYmVyOiB0aGlzLnJlZnMubnVtYmVyRmlsdGVyLnZhbHVlLFxuICAgICAgICAgICAgICAgIGNvbXBhcmF0b3I6IHRoaXMucmVmcy5udW1iZXJGaWx0ZXJDb21wYXJhdG9yLnZhbHVlfSxcbiAgICAgICAgICAgICAgICBDb25zdC5GSUxURVJfVFlQRS5OVU1CRVIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHNlbGVjdENsYXNzID0gY2xhc3NTZXQoXCJzZWxlY3QtZmlsdGVyXCIsIFwibnVtYmVyLWZpbHRlci1pbnB1dFwiLCBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCJwbGFjZWhvbGRlci1zZWxlY3RlZFwiOiB0aGlzLnN0YXRlLmlzUGxhY2Vob2xkZXJTZWxlY3RlZCB9KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXIgbnVtYmVyLWZpbHRlclwiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgcmVmPVwibnVtYmVyRmlsdGVyQ29tcGFyYXRvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJudW1iZXItZmlsdGVyLWNvbXBhcmF0b3IgZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlQ29tcGFyYXRvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17KHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlKSA/IHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlLmNvbXBhcmF0b3IgOiBcIlwifT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuZ2V0Q29tcGFyYXRvck9wdGlvbnMoKX1cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICB7KHRoaXMucHJvcHMub3B0aW9ucykgPyA8c2VsZWN0IHJlZj1cIm51bWJlckZpbHRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3NlbGVjdENsYXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VOdW1iZXJTZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9eyh0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlLm51bWJlciA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmdldE51bWJlck9wdGlvbnMoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD4gOlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlZj1cIm51bWJlckZpbHRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJudW1iZXItZmlsdGVyLWlucHV0IGZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyIHx8IGBFbnRlciAke3RoaXMucHJvcHMuY29sdW1uTmFtZX0uLi5gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZU51bWJlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXsodGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZS5udW1iZXIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJ9IC8+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufTtcblxuTnVtYmVyRmlsdGVyLnByb3BUeXBlcyA9IHtcbiAgICBmaWx0ZXJIYW5kbGVyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9wdGlvbnM6IFJlYWN0LlByb3BUeXBlcy5hcnJheU9mKFJlYWN0LlByb3BUeXBlcy5udW1iZXIpLFxuICAgIGRlZmF1bHRWYWx1ZTogUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgbnVtYmVyOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBjb21wYXJhdG9yOiBSZWFjdC5Qcm9wVHlwZXMub25lT2YobGVnYWxDb21wYXJhdG9ycylcbiAgICB9KSxcbiAgICBkZWxheTogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBudW1iZXJDb21wYXJhdG9yczogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lKSB7XG4gICAgICAgIGlmICghcHJvcHNbcHJvcE5hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wc1twcm9wTmFtZV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjb21wYXJhdG9ySXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZWdhbENvbXBhcmF0b3JzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxlZ2FsQ29tcGFyYXRvcnNbal0gPT09IHByb3BzW3Byb3BOYW1lXVtpXSkge1xuICAgICAgICAgICAgICAgICAgICBjb21wYXJhdG9ySXNWYWxpZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghY29tcGFyYXRvcklzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKGBOdW1iZXIgY29tcGFyYXRvciBwcm92aWRlZCBpcyBub3Qgc3VwcG9ydGVkLiBVc2Ugb25seSAke2xlZ2FsQ29tcGFyYXRvcnN9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHBsYWNlaG9sZGVyOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbHVtbk5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbn07XG5cbk51bWJlckZpbHRlci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZGVsYXk6IENvbnN0LkZJTFRFUl9ERUxBWVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRmlsdGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZmlsdGVycy9OdW1iZXIuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9