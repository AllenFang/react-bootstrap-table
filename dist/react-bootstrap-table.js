(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactBootstrapTable"] = factory(require("react"), require("react-dom"));
	else
		root["ReactBootstrapTable"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

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
<<<<<<< HEAD

	var _TableHeaderColumn = __webpack_require__(40);

	var _TableHeaderColumn2 = _interopRequireDefault(_TableHeaderColumn);

	var _storeTableDataStore = __webpack_require__(32);

=======
	
	var _TableHeaderColumn = __webpack_require__(40);
	
	var _TableHeaderColumn2 = _interopRequireDefault(_TableHeaderColumn);
	
	var _storeTableDataStore = __webpack_require__(32);
	
>>>>>>> 482f2f05d06706d701a06346b221d8a8409fcb1a
	if (typeof window !== 'undefined') {
	  window.BootstrapTable = _BootstrapTable2['default'];
	  window.TableHeaderColumn = _TableHeaderColumn2['default'];
	  window.TableDataSet = _storeTableDataStore.TableDataSet;
	}
	exports.BootstrapTable = _BootstrapTable2['default'];
	exports.TableHeaderColumn = _TableHeaderColumn2['default'];
	exports.TableDataSet = _storeTableDataStore.TableDataSet;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* eslint no-alert: 0 */
	/* eslint max-len: 0 */
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

	var _Const = __webpack_require__(3);

	var _Const2 = _interopRequireDefault(_Const);

	var _TableHeader = __webpack_require__(4);

	var _TableHeader2 = _interopRequireDefault(_TableHeader);

	var _TableBody = __webpack_require__(8);

	var _TableBody2 = _interopRequireDefault(_TableBody);
<<<<<<< HEAD

	var _paginationPaginationList = __webpack_require__(28);

	var _paginationPaginationList2 = _interopRequireDefault(_paginationPaginationList);

	var _toolbarToolBar = __webpack_require__(30);

	var _toolbarToolBar2 = _interopRequireDefault(_toolbarToolBar);

	var _TableFilter = __webpack_require__(31);

	var _TableFilter2 = _interopRequireDefault(_TableFilter);

	var _storeTableDataStore = __webpack_require__(32);

	var _util = __webpack_require__(34);

	var _util2 = _interopRequireDefault(_util);

	var _csv_export_util = __webpack_require__(35);

	var _csv_export_util2 = _interopRequireDefault(_csv_export_util);

	var _Filter = __webpack_require__(39);

=======
	
	var _paginationPaginationList = __webpack_require__(28);
	
	var _paginationPaginationList2 = _interopRequireDefault(_paginationPaginationList);
	
	var _toolbarToolBar = __webpack_require__(30);
	
	var _toolbarToolBar2 = _interopRequireDefault(_toolbarToolBar);
	
	var _TableFilter = __webpack_require__(31);
	
	var _TableFilter2 = _interopRequireDefault(_TableFilter);
	
	var _storeTableDataStore = __webpack_require__(32);
	
	var _util = __webpack_require__(34);
	
	var _util2 = _interopRequireDefault(_util);
	
	var _csv_export_util = __webpack_require__(35);
	
	var _csv_export_util2 = _interopRequireDefault(_csv_export_util);
	
	var _Filter = __webpack_require__(39);
	
>>>>>>> 482f2f05d06706d701a06346b221d8a8409fcb1a
	var BootstrapTable = (function (_Component) {
	  _inherits(BootstrapTable, _Component);

	  function BootstrapTable(props) {
	    var _this = this;

	    _classCallCheck(this, BootstrapTable);

	    _get(Object.getPrototypeOf(BootstrapTable.prototype), 'constructor', this).call(this, props);

	    this.handleSort = function (order, sortField) {
	      if (_this.props.options.onSortChange) {
	        _this.props.options.onSortChange(sortField, order, _this.props);
	      }

	      var result = _this.store.sort(order, sortField).get();
	      _this.setState({
	        data: result
	      });
	    };

	    this.handlePaginationData = function (page, sizePerPage) {
	      var onPageChange = _this.props.options.onPageChange;

	      if (onPageChange) {
	        onPageChange(page, sizePerPage);
	      }

	      if (_this.isRemoteDataSource()) {
	        return;
	      }

	      var result = _this.store.page(page, sizePerPage).get();
	      _this.setState({
	        data: result,
	        currPage: page,
	        sizePerPage: sizePerPage
	      });
	    };

	    this.handleMouseLeave = function () {
	      if (_this.props.options.onMouseLeave) {
	        _this.props.options.onMouseLeave();
	      }
	    };

	    this.handleMouseEnter = function () {
	      if (_this.props.options.onMouseEnter) {
	        _this.props.options.onMouseEnter();
	      }
	    };
<<<<<<< HEAD

	    this.handleRowMouseOut = function (row) {
=======
	
	    this.handleRowMouseOut = function (row, event) {
>>>>>>> 482f2f05d06706d701a06346b221d8a8409fcb1a
	      if (_this.props.options.onRowMouseOut) {
	        _this.props.options.onRowMouseOut(row, event);
	      }
	    };
<<<<<<< HEAD

	    this.handleRowMouseOver = function (row) {
=======
	
	    this.handleRowMouseOver = function (row, event) {
>>>>>>> 482f2f05d06706d701a06346b221d8a8409fcb1a
	      if (_this.props.options.onRowMouseOver) {
	        _this.props.options.onRowMouseOver(row, event);
	      }
	    };

	    this.handleRowClick = function (row) {
	      if (_this.props.options.onRowClick) {
	        _this.props.options.onRowClick(row);
	      }
	    };

	    this.handleSelectAllRow = function (e) {
	      var isSelected = e.currentTarget.checked;
	      var selectedRowKeys = [];
	      var result = true;
	      if (_this.props.selectRow.onSelectAll) {
	        result = _this.props.selectRow.onSelectAll(isSelected, isSelected ? _this.store.get() : []);
	      }

	      if (typeof result === 'undefined' || result !== false) {
	        if (isSelected) {
	          selectedRowKeys = _this.store.getAllRowkey();
	        }

	        _this.store.setSelectedRowKey(selectedRowKeys);
	        _this.setState({ selectedRowKeys: selectedRowKeys });
	      }
	    };

	    this.handleShowOnlySelected = function () {
	      _this.store.ignoreNonSelected();
	      var result = undefined;
	      if (_this.props.pagination) {
	        result = _this.store.page(1, _this.state.sizePerPage).get();
	      } else {
	        result = _this.store.get();
	      }
	      _this.setState({
	        data: result,
	        currPage: 1
	      });
	    };

	    this.handleSelectRow = function (row, isSelected) {
	      var result = true;
	      var currSelected = _this.store.getSelectedRowKeys();
	      var rowKey = row[_this.store.getKeyField()];
	      var selectRow = _this.props.selectRow;

	      if (selectRow.onSelect) {
	        result = selectRow.onSelect(row, isSelected);
	      }

	      if (typeof result === 'undefined' || result !== false) {
	        if (selectRow.mode === _Const2['default'].ROW_SELECT_SINGLE) {
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

	        _this.store.setSelectedRowKey(currSelected);
	        _this.setState({
	          selectedRowKeys: currSelected
	        });
	      }
	    };

	    this.handleAddRow = function (newObj) {
	      try {
	        _this.store.add(newObj);
	      } catch (e) {
	        return e;
	      }
	      _this._handleAfterAddingRow(newObj);
	    };

	    this.handleDropRow = function (rowKeys) {
	      var dropRowKeys = rowKeys ? rowKeys : _this.store.getSelectedRowKeys();
	      // add confirm before the delete action if that option is set.
	      if (dropRowKeys && dropRowKeys.length > 0) {
	        if (_this.props.options.handleConfirmDeleteRow) {
	          _this.props.options.handleConfirmDeleteRow(function () {
	            _this.deleteRow(dropRowKeys);
	          });
	        } else if (confirm('Are you sure want delete?')) {
	          _this.deleteRow(dropRowKeys);
	        }
	      }
	    };

	    this.handleFilterData = function (filterObj) {
	      _this.store.filter(filterObj);
	      var result = undefined;
	      if (_this.props.pagination) {
	        var sizePerPage = _this.state.sizePerPage;

	        result = _this.store.page(1, sizePerPage).get();
	      } else {
	        result = _this.store.get();
	      }
	      if (_this.props.options.afterColumnFilter) {
	        _this.props.options.afterColumnFilter(filterObj, _this.store.getDataIgnoringPagination());
	      }
	      _this.setState({
	        data: result,
	        currPage: 1
	      });
	    };

	    this.handleExportCSV = function () {
	      var result = _this.store.getDataIgnoringPagination();
	      var keys = [];
	      _this.props.children.map(function (column) {
	        if (column.props.hidden === false) {
	          keys.push(column.props.dataField);
	        }
	      });
	      (0, _csv_export_util2['default'])(result, keys, _this.props.csvFileName);
	    };

	    this.handleSearch = function (searchText) {
	      _this.store.search(searchText);
	      var result = undefined;
	      if (_this.props.pagination) {
	        var sizePerPage = _this.state.sizePerPage;

	        result = _this.store.page(1, sizePerPage).get();
	      } else {
	        result = _this.store.get();
	      }
	      if (_this.props.options.afterSearch) {
	        _this.props.options.afterSearch(searchText, _this.store.getDataIgnoringPagination());
	      }
	      _this.setState({
	        data: result,
	        currPage: 1
	      });
	    };

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
	          var width = parseFloat(computedStyle.width.replace('px', ''));
	          if (_this.isIE) {
	            var paddingLeftWidth = parseFloat(computedStyle.paddingLeft.replace('px', ''));
	            var paddingRightWidth = parseFloat(computedStyle.paddingRight.replace('px', ''));
	            var borderRightWidth = parseFloat(computedStyle.borderRightWidth.replace('px', ''));
	            var borderLeftWidth = parseFloat(computedStyle.borderLeftWidth.replace('px', ''));
	            width = width + paddingLeftWidth + paddingRightWidth + borderRightWidth + borderLeftWidth;
	          }
	          var lastPadding = cells.length - 1 === i ? scrollBarWidth : 0;
	          if (width <= 0) {
	            width = 120;
	            cell.width = width + lastPadding + 'px';
	          }
	          var result = width + lastPadding + 'px';
	          header.childNodes[i].style.width = result;
	          header.childNodes[i].style.minWidth = result;
	        }
	      }
	    };

	    this._adjustHeight = function () {
	      if (_this.props.height.indexOf('%') === -1) {
	        _this.refs.body.refs.container.style.height = parseFloat(_this.props.height, 10) - _this.refs.header.refs.container.offsetHeight + 'px';
	      }
	    };

	    this.isIE = false;
	    this._attachCellEditFunc();
	    if (_util2['default'].canUseDOM()) {
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
	      this.filter.on('onFilterChange', function (currentFilter) {
	        _this.handleFilterData(currentFilter);
	      });
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
	            throw 'Error. Multiple key column be detected in TableHeaderColumn.';
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
	      });

	      var colInfos = this.getColumnsDescription(props).reduce(function (prev, curr) {
	        prev[curr.name] = curr;
	        return prev;
	      }, {});

	      if (!isKeyFieldDefined && !keyField) {
	        throw 'Error. No any key column defined in TableHeaderColumn.\n            Use \'isKey={true}\' to specify a unique column after version 0.5.4.';
	      }

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
	      var _props = this.props;
	      var options = _props.options;
	      var pagination = _props.pagination;

	      var result = [];
	      if (options.sortName && options.sortOrder) {
	        this.store.sort(options.sortOrder, options.sortName);
	      }

	      if (pagination) {
	        var page = undefined;
	        var sizePerPage = undefined;
	        if (this.store.isChangedPage()) {
	          sizePerPage = this.state.sizePerPage;
	          page = this.state.currPage;
	        } else {
	          sizePerPage = options.sizePerPage || _Const2['default'].SIZE_PER_PAGE_LIST[0];
	          page = options.page || 1;
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
	      var options = nextProps.options;
	      var selectRow = nextProps.selectRow;

	      if (Array.isArray(nextProps.data)) {
	        this.store.setData(nextProps.data.slice());
	        var page = options.page || this.state.currPage;
	        var sizePerPage = options.sizePerPage || this.state.sizePerPage;

	        // #125
	        if (!options.page && page >= Math.ceil(nextProps.data.length / sizePerPage)) {
	          page = 1;
	        }
	        var sortInfo = this.store.getSortInfo();
	        var sortField = options.sortName || (sortInfo ? sortInfo.sortField : undefined);
	        var sortOrder = options.sortOrder || (sortInfo ? sortInfo.order : undefined);
	        if (sortField && sortOrder) this.store.sort(sortOrder, sortField);
	        var data = this.store.page(page, sizePerPage).get();
	        this.setState({
	          data: data,
	          currPage: page,
	          sizePerPage: sizePerPage
	        });
	      }
	      if (selectRow && selectRow.selected) {
	        // set default select rows to store.
	        var copy = selectRow.selected.slice();
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
	        this.filter.removeAllListeners('onFilterChange');
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this._adjustTable();
	      this._attachCellEditFunc();
	      if (this.props.options.afterTableComplete) {
	        this.props.options.afterTableComplete();
	      }
	    }
	  }, {
	    key: '_attachCellEditFunc',
	    value: function _attachCellEditFunc() {
	      var cellEdit = this.props.cellEdit;

	      if (cellEdit) {
	        this.props.cellEdit.__onCompleteEdit__ = this.handleEditCell.bind(this);
	        if (cellEdit.mode !== _Const2['default'].CELL_EDIT_NONE) {
	          this.props.selectRow.clickToSelect = false;
	        }
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
	      var style = {
	        height: this.props.height,
	        maxHeight: this.props.maxHeight
	      };

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
	            onMouseEnter: this.handleMouseEnter,
	            onMouseLeave: this.handleMouseLeave },
	          _react2['default'].createElement(
	            _TableHeader2['default'],
	            {
	              ref: 'header',
	              rowSelectType: this.props.selectRow.mode,
	              hideSelectColumn: this.props.selectRow.hideSelectColumn,
	              sortName: sortInfo ? sortInfo.sortField : undefined,
	              sortOrder: sortInfo ? sortInfo.order : undefined,
	              sortIndicator: sortIndicator,
	              onSort: this.handleSort,
	              onSelectAllRow: this.handleSelectAllRow,
	              bordered: this.props.bordered,
	              condensed: this.props.condensed,
	              isFiltered: this.filter ? true : false,
	              isSelectAll: isSelectAll },
	            this.props.children
	          ),
	          _react2['default'].createElement(_TableBody2['default'], { ref: 'body',
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
	            onRowClick: this.handleRowClick,
	            onRowMouseOver: this.handleRowMouseOver,
	            onRowMouseOut: this.handleRowMouseOut,
	            onSelectRow: this.handleSelectRow,
	            noDataText: this.props.options.noDataText })
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
	    key: 'handleEditCell',
	    value: function handleEditCell(newVal, rowIndex, colIndex) {
	      var _props$cellEdit = this.props.cellEdit;
	      var beforeSaveCell = _props$cellEdit.beforeSaveCell;
	      var afterSaveCell = _props$cellEdit.afterSaveCell;

	      var fieldName = undefined;
	      _react2['default'].Children.forEach(this.props.children, function (column, i) {
	        if (i === colIndex) {
	          fieldName = column.props.dataField;
	          return false;
	        }
	      });

	      if (beforeSaveCell) {
	        var isValid = beforeSaveCell(this.state.data[rowIndex], fieldName, newVal);
	        if (!isValid && typeof isValid !== 'undefined') {
	          this.setState({
	            data: this.store.get()
	          });
	          return;
	        }
	      }

	      var result = this.store.edit(newVal, rowIndex, fieldName).get();
	      this.setState({
	        data: result
	      });

	      if (afterSaveCell) {
	        afterSaveCell(this.state.data[rowIndex], fieldName, newVal);
	      }
	    }
	  }, {
	    key: 'handleAddRowAtBegin',
	    value: function handleAddRowAtBegin(newObj) {
	      try {
	        this.store.addAtBegin(newObj);
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
	    key: 'deleteRow',
	    value: function deleteRow(dropRowKeys) {
	      var result = undefined;
	      this.store.remove(dropRowKeys); // remove selected Row
	      this.store.setSelectedRowKey([]); // clear selected row key

	      if (this.props.pagination) {
	        var sizePerPage = this.state.sizePerPage;

	        var currLastPage = Math.ceil(this.store.getDataNum() / sizePerPage);
	        var currPage = this.state.currPage;

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
	    key: 'renderPagination',
	    value: function renderPagination() {
	      if (this.props.pagination) {
	        var dataSize = undefined;
	        if (this.isRemoteDataSource()) {
	          dataSize = this.props.fetchInfo.dataTotalSize;
	        } else {
	          dataSize = this.store.getDataNum();
	        }
	        var options = this.props.options;

	        return _react2['default'].createElement(
	          'div',
	          { className: 'react-bs-table-pagination' },
	          _react2['default'].createElement(_paginationPaginationList2['default'], {
	            ref: 'pagination',
	            currPage: this.state.currPage,
	            changePage: this.handlePaginationData,
	            sizePerPage: this.state.sizePerPage,
	            sizePerPageList: options.sizePerPageList || _Const2['default'].SIZE_PER_PAGE_LIST,
	            paginationSize: options.paginationSize || _Const2['default'].PAGINATION_SIZE,
	            remote: this.isRemoteDataSource(),
	            dataSize: dataSize,
	            onSizePerPageList: options.onSizePerPageList,
	            prePage: options.prePage || _Const2['default'].PRE_PAGE,
	            nextPage: options.nextPage || _Const2['default'].NEXT_PAGE,
	            firstPage: options.firstPage || _Const2['default'].FIRST_PAGE,
	            lastPage: options.lastPage || _Const2['default'].LAST_PAGE })
	        );
	      }
	      return null;
	    }
	  }, {
	    key: 'renderToolBar',
	    value: function renderToolBar() {
	      var _props2 = this.props;
	      var selectRow = _props2.selectRow;
	      var insertRow = _props2.insertRow;
	      var deleteRow = _props2.deleteRow;
	      var search = _props2.search;
	      var children = _props2.children;

	      var enableShowOnlySelected = selectRow && selectRow.showOnlySelected;
	      if (enableShowOnlySelected || insertRow || deleteRow || search || this.props.exportCSV) {
	        var columns = undefined;
	        if (Array.isArray(children)) {
	          columns = children.map(function (column) {
	            var props = column.props;

	            return {
	              name: props.children,
	              field: props.dataField,
	              // when you want same auto generate value and not allow edit, example ID field
	              autoValue: props.autoValue || false,
	              // for create editor, no params for column.editable() indicate that editor for new row
	              editable: props.editable && typeof props.editable === 'function' ? props.editable() : props.editable,
	              format: props.dataFormat ? function (value) {
	                return props.dataFormat(value, null, props.formatExtraData).replace(/<.*?>/g, '');
	              } : false
	            };
	          });
	        } else {
	          columns = [{
	            name: children.props.children,
	            field: children.props.dataField,
	            editable: children.props.editable
	          }];
	        }
	        return _react2['default'].createElement(
	          'div',
	          { className: 'react-bs-table-tool-bar' },
	          _react2['default'].createElement(_toolbarToolBar2['default'], {
	            clearSearch: this.props.options.clearSearch,
	            enableInsert: insertRow,
	            enableDelete: deleteRow,
	            enableSearch: search,
	            enableExportCSV: this.props.exportCSV,
	            enableShowOnlySelected: enableShowOnlySelected,
	            columns: columns,
	            searchPlaceholder: this.props.searchPlaceholder,
	            onAddRow: this.handleAddRow,
	            onDropRow: this.handleDropRow,
	            onSearch: this.handleSearch,
	            onExportCSV: this.handleExportCSV,
	            onShowOnlySelected: this.handleShowOnlySelected })
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
	          onFilter: this.handleFilterData });
	      } else {
	        return null;
	      }
	    }
	  }, {
	    key: '_handleAfterAddingRow',
	    value: function _handleAfterAddingRow(newObj) {
	      var result = undefined;
	      if (this.props.pagination) {
	        // if pagination is enabled and insert row be trigger, change to last page
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
	})(_react.Component);

	BootstrapTable.propTypes = {
	  keyField: _react.PropTypes.string,
	  height: _react.PropTypes.string,
	  maxHeight: _react.PropTypes.string,
	  data: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object]),
	  remote: _react.PropTypes.bool, // remote data, default is false
	  striped: _react.PropTypes.bool,
	  bordered: _react.PropTypes.bool,
	  hover: _react.PropTypes.bool,
	  condensed: _react.PropTypes.bool,
	  pagination: _react.PropTypes.bool,
	  searchPlaceholder: _react.PropTypes.string,
	  selectRow: _react.PropTypes.shape({
	    mode: _react.PropTypes.oneOf([_Const2['default'].ROW_SELECT_NONE, _Const2['default'].ROW_SELECT_SINGLE, _Const2['default'].ROW_SELECT_MULTI]),
	    bgColor: _react.PropTypes.string,
	    selected: _react.PropTypes.array,
	    onSelect: _react.PropTypes.func,
	    onSelectAll: _react.PropTypes.func,
	    clickToSelect: _react.PropTypes.bool,
	    hideSelectColumn: _react.PropTypes.bool,
	    clickToSelectAndEditCell: _react.PropTypes.bool,
	    showOnlySelected: _react.PropTypes.bool
	  }),
	  cellEdit: _react.PropTypes.shape({
	    mode: _react.PropTypes.string,
	    blurToSave: _react.PropTypes.bool,
	    beforeSaveCell: _react.PropTypes.func,
	    afterSaveCell: _react.PropTypes.func
	  }),
	  insertRow: _react.PropTypes.bool,
	  deleteRow: _react.PropTypes.bool,
	  search: _react.PropTypes.bool,
	  columnFilter: _react.PropTypes.bool,
	  trClassName: _react.PropTypes.any,
	  options: _react.PropTypes.shape({
	    clearSearch: _react.PropTypes.bool,
	    sortName: _react.PropTypes.string,
	    sortOrder: _react.PropTypes.string,
	    sortIndicator: _react.PropTypes.bool,
	    afterTableComplete: _react.PropTypes.func,
	    afterDeleteRow: _react.PropTypes.func,
	    afterInsertRow: _react.PropTypes.func,
	    afterSearch: _react.PropTypes.func,
	    afterColumnFilter: _react.PropTypes.func,
	    onRowClick: _react.PropTypes.func,
	    page: _react.PropTypes.number,
	    sizePerPageList: _react.PropTypes.array,
	    sizePerPage: _react.PropTypes.number,
	    paginationSize: _react.PropTypes.number,
	    onSortChange: _react.PropTypes.func,
	    onPageChange: _react.PropTypes.func,
	    onSizePerPageList: _react.PropTypes.func,
	    noDataText: _react.PropTypes.string,
	    handleConfirmDeleteRow: _react.PropTypes.func,
	    prePage: _react.PropTypes.string,
	    nextPage: _react.PropTypes.string,
	    firstPage: _react.PropTypes.string,
	    lastPage: _react.PropTypes.string
	  }),
	  fetchInfo: _react.PropTypes.shape({
	    dataTotalSize: _react.PropTypes.number
	  }),
	  exportCSV: _react.PropTypes.bool,
	  csvFileName: _react.PropTypes.string
	};
	BootstrapTable.defaultProps = {
	  height: '100%',
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
	    beforeSaveCell: undefined,
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
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  SORT_DESC: 'desc',
	  SORT_ASC: 'asc',
	  SIZE_PER_PAGE: 10,
	  NEXT_PAGE: '>',
	  LAST_PAGE: '>>',
	  PRE_PAGE: '<',
	  FIRST_PAGE: '<<',
	  ROW_SELECT_BG_COLOR: '',
	  ROW_SELECT_NONE: 'none',
	  ROW_SELECT_SINGLE: 'radio',
	  ROW_SELECT_MULTI: 'checkbox',
	  CELL_EDIT_NONE: 'none',
	  CELL_EDIT_CLICK: 'click',
	  CELL_EDIT_DBCLICK: 'dbclick',
	  SIZE_PER_PAGE_LIST: [10, 25, 30, 50],
	  PAGINATION_SIZE: 5,
	  NO_DATA_TEXT: 'There is no data to display',
	  SHOW_ONLY_SELECT: 'Show Selected Only',
	  SHOW_ALL: 'Show All',
	  FILTER_DELAY: 500,
	  FILTER_TYPE: {
	    TEXT: 'TextFilter',
	    REGEX: 'RegexFilter',
	    SELECT: 'SelectFilter',
	    NUMBER: 'NumberFilter',
	    DATE: 'DateFilter',
	    CUSTOM: 'CustomFilter'
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 4 */
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

	var _reactDom = __webpack_require__(5);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Const = __webpack_require__(3);

	var _Const2 = _interopRequireDefault(_Const);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _SelectRowHeaderColumn = __webpack_require__(7);

	var _SelectRowHeaderColumn2 = _interopRequireDefault(_SelectRowHeaderColumn);

	var Checkbox = (function (_Component) {
	  _inherits(Checkbox, _Component);

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
	      return _react2['default'].createElement('input', { className: 'react-bs-select-all',
	        type: 'checkbox',
	        checked: this.props.checked,
	        onChange: this.props.onChange });
	    }
	  }]);

	  return Checkbox;
	})(_react.Component);

	var TableHeader = (function (_Component2) {
	  _inherits(TableHeader, _Component2);

	  function TableHeader() {
	    _classCallCheck(this, TableHeader);

	    _get(Object.getPrototypeOf(TableHeader.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(TableHeader, [{
	    key: 'render',
	    value: function render() {
	      var containerClasses = (0, _classnames2['default'])('react-bs-container-header', 'table-header-wrapper');
	      var tableClasses = (0, _classnames2['default'])('table', 'table-hover', {
	        'table-bordered': this.props.bordered,
	        'table-condensed': this.props.condensed
	      });
	      var selectRowHeaderCol = null;
	      if (!this.props.hideSelectColumn) selectRowHeaderCol = this.renderSelectRowHeader();
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
	      if (this.props.rowSelectType === _Const2['default'].ROW_SELECT_SINGLE) {
	        return _react2['default'].createElement(_SelectRowHeaderColumn2['default'], null);
	      } else if (this.props.rowSelectType === _Const2['default'].ROW_SELECT_MULTI) {
	        return _react2['default'].createElement(
	          _SelectRowHeaderColumn2['default'],
	          null,
	          _react2['default'].createElement(Checkbox, {
	            onChange: this.props.onSelectAllRow,
	            checked: this.props.isSelectAll })
	        );
	      } else {
	        return null;
	      }
	    }
	  }, {
	    key: '_attachClearSortCaretFunc',
	    value: function _attachClearSortCaretFunc() {
	      var _props = this.props;
	      var sortIndicator = _props.sortIndicator;
	      var children = _props.children;
	      var sortName = _props.sortName;
	      var sortOrder = _props.sortOrder;
	      var onSort = _props.onSort;

	      if (Array.isArray(children)) {
	        for (var i = 0; i < children.length; i++) {
	          var field = children[i].props.dataField;
	          var sort = field === sortName ? sortOrder : undefined;
	          this.props.children[i] = _react2['default'].cloneElement(children[i], { key: i, onSort: onSort, sort: sort, sortIndicator: sortIndicator });
	        }
	      } else {
	        var field = children.props.dataField;
	        var sort = field === sortName ? sortOrder : undefined;
	        this.props.children = _react2['default'].cloneElement(children, { key: 0, onSort: onSort, sort: sort, sortIndicator: sortIndicator });
	      }
	    }
	  }]);

	  return TableHeader;
	})(_react.Component);

	TableHeader.propTypes = {
	  rowSelectType: _react.PropTypes.string,
	  onSort: _react.PropTypes.func,
	  onSelectAllRow: _react.PropTypes.func,
	  sortName: _react.PropTypes.string,
	  sortOrder: _react.PropTypes.string,
	  hideSelectColumn: _react.PropTypes.bool,
	  bordered: _react.PropTypes.bool,
	  condensed: _react.PropTypes.bool,
	  isFiltered: _react.PropTypes.bool,
	  isSelectAll: _react.PropTypes.oneOf([true, 'indeterminate', false]),
	  sortIndicator: _react.PropTypes.bool
	};

	exports['default'] = TableHeader;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
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
/* 7 */
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

	var SelectRowHeaderColumn = (function (_Component) {
	  _inherits(SelectRowHeaderColumn, _Component);

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
	})(_react.Component);

	SelectRowHeaderColumn.propTypes = {
	  children: _react.PropTypes.node
	};
	exports['default'] = SelectRowHeaderColumn;
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

	var _Const = __webpack_require__(3);

	var _Const2 = _interopRequireDefault(_Const);

	var _TableRow = __webpack_require__(9);

	var _TableRow2 = _interopRequireDefault(_TableRow);

	var _TableColumn = __webpack_require__(10);

	var _TableColumn2 = _interopRequireDefault(_TableColumn);

	var _TableEditColumn = __webpack_require__(11);

	var _TableEditColumn2 = _interopRequireDefault(_TableEditColumn);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var isFun = function isFun(obj) {
	  return obj && typeof obj === 'function';
	};

	var TableBody = (function (_Component) {
	  _inherits(TableBody, _Component);

	  function TableBody(props) {
	    var _this = this;

	    _classCallCheck(this, TableBody);

	    _get(Object.getPrototypeOf(TableBody.prototype), 'constructor', this).call(this, props);
<<<<<<< HEAD

	    this.handleRowMouseOut = function (rowIndex) {
=======
	
	    this.handleRowMouseOut = function (rowIndex, event) {
>>>>>>> 482f2f05d06706d701a06346b221d8a8409fcb1a
	      var targetRow = _this.props.data[rowIndex];
	      _this.props.onRowMouseOut(targetRow, event);
	    };
<<<<<<< HEAD

	    this.handleRowMouseOver = function (rowIndex) {
=======
	
	    this.handleRowMouseOver = function (rowIndex, event) {
>>>>>>> 482f2f05d06706d701a06346b221d8a8409fcb1a
	      var targetRow = _this.props.data[rowIndex];
	      _this.props.onRowMouseOver(targetRow, event);
	    };

	    this.handleRowClick = function (rowIndex) {
	      var selectedRow = undefined;
	      var _props = _this.props;
	      var data = _props.data;
	      var onRowClick = _props.onRowClick;

	      data.forEach(function (row, i) {
	        if (i === rowIndex - 1) {
	          selectedRow = row;
	        }
	      });
	      onRowClick(selectedRow);
	    };

	    this.handleSelectRow = function (rowIndex, isSelected) {
	      var selectedRow = undefined;
	      var _props2 = _this.props;
	      var data = _props2.data;
	      var onSelectRow = _props2.onSelectRow;

	      data.forEach(function (row, i) {
	        if (i === rowIndex - 1) {
	          selectedRow = row;
	          return false;
	        }
	      });
	      onSelectRow(selectedRow, isSelected);
	    };

	    this.handleSelectRowColumChange = function (e) {
	      if (!_this.props.selectRow.clickToSelect || !_this.props.selectRow.clickToSelectAndEditCell) {
	        _this.handleSelectRow(e.currentTarget.parentElement.parentElement.rowIndex + 1, e.currentTarget.checked);
	      }
	    };

	    this.handleEditCell = function (rowIndex, columnIndex) {
	      _this.editing = true;
	      if (_this._isSelectRowDefined()) {
	        columnIndex--;
	        if (_this.props.selectRow.hideSelectColumn) columnIndex++;
	      }
	      rowIndex--;
	      var stateObj = {
	        currEditCell: {
	          rid: rowIndex,
	          cid: columnIndex
	        }
	      };

	      if (_this.props.selectRow.clickToSelectAndEditCell) {
	        _this.handleSelectRow(rowIndex + 1, true);
	      }
	      _this.setState(stateObj);
	    };

	    this.handleCompleteEditCell = function (newVal, rowIndex, columnIndex) {
	      _this.setState({ currEditCell: null });
	      if (newVal !== null) {
	        _this.props.cellEdit.__onCompleteEdit__(newVal, rowIndex, columnIndex);
	      }
	    };

	    this.state = {
	      currEditCell: null
	    };
	    this.editing = false;
	  }

	  _createClass(TableBody, [{
	    key: 'render',
	    value: function render() {
	      var tableClasses = (0, _classnames2['default'])('table', {
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
	          this.state.currEditCell !== null && this.state.currEditCell.rid === r && this.state.currEditCell.cid === i) {
	            var editable = column.editable;
	            var format = column.format ? function (value) {
	              return column.format(value, data, column.formatExtraData).replace(/<.*?>/g, '');
	            } : false;

	            if (isFun(column.editable)) {
	              editable = column.editable(fieldValue, data, r, i);
	            }

	            return _react2['default'].createElement(
	              _TableEditColumn2['default'],
	              {
	                completeEdit: this.handleCompleteEditCell,
	                // add by bluespring for column editor customize
	                editable: editable,
	                format: column.format ? format : false,
	                key: i,
	                blurToSave: this.props.cellEdit.blurToSave,
	                rowIndex: r,
	                colIndex: i },
	              fieldValue
	            );
	          } else {
	            // add by bluespring for className customize
	            var columnChild = fieldValue;
	            var tdClassName = column.className;
	            if (isFun(column.className)) {
	              tdClassName = column.className(fieldValue, data, r, i);
	            }

	            if (typeof column.format !== 'undefined') {
	              var formattedValue = column.format(fieldValue, data, column.formatExtraData);
	              if (!_react2['default'].isValidElement(formattedValue)) {
	                columnChild = _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: formattedValue } });
	              } else {
	                columnChild = formattedValue;
	              }
	            }
	            return _react2['default'].createElement(
	              _TableColumn2['default'],
	              { key: i,
	                dataAlign: column.align,
	                className: tdClassName,
	                cellEdit: this.props.cellEdit,
	                hidden: column.hidden,
	                onEdit: this.handleEditCell,
	                width: column.width },
	              columnChild
	            );
	          }
	        }, this);

	        var selected = this.props.selectedRowKeys.indexOf(data[this.props.keyField]) !== -1;
	        var selectRowColumn = isSelectRowDefined && !this.props.selectRow.hideSelectColumn ? this.renderSelectRowColumn(selected) : null;
	        // add by bluespring for className customize
	        var trClassName = this.props.trClassName;
	        if (isFun(this.props.trClassName)) {
	          trClassName = this.props.trClassName(data, r);
	        }
	        return _react2['default'].createElement(
	          _TableRow2['default'],
	          { isSelected: selected, key: r, className: trClassName,
	            selectRow: isSelectRowDefined ? this.props.selectRow : undefined,
	            enableCellEdit: this.props.cellEdit.mode !== _Const2['default'].CELL_EDIT_NONE,
	            onRowClick: this.handleRowClick,
	            onRowMouseOver: this.handleRowMouseOver,
	            onRowMouseOut: this.handleRowMouseOut,
	            onSelectRow: this.handleSelectRow },
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
	        if (!this.props.selectRow.hideSelectColumn) {
	          selectRowHeader = _react2['default'].createElement('col', { style: style, key: -1 });
	        }
	      }
	      var theader = this.props.columns.map(function (column, i) {
	        var width = column.width === null ? column.width : parseInt(column.width, 10);
	        var style = {
	          display: column.hidden ? 'none' : null,
	          width: width,
	          minWidth: width
	          /** add min-wdth to fix user assign column width
	          not eq offsetWidth in large column table **/
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
	    key: 'renderSelectRowColumn',
	    value: function renderSelectRowColumn(selected) {
	      if (this.props.selectRow.mode === _Const2['default'].ROW_SELECT_SINGLE) {
	        return _react2['default'].createElement(
	          _TableColumn2['default'],
	          { dataAlign: 'center' },
	          _react2['default'].createElement('input', { type: 'radio', checked: selected,
	            onChange: this.handleSelectRowColumChange })
	        );
	      } else {
	        return _react2['default'].createElement(
	          _TableColumn2['default'],
	          { dataAlign: 'center' },
	          _react2['default'].createElement('input', { type: 'checkbox', checked: selected,
	            onChange: this.handleSelectRowColumChange })
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
	})(_react.Component);

	TableBody.propTypes = {
	  data: _react.PropTypes.array,
	  columns: _react.PropTypes.array,
	  striped: _react.PropTypes.bool,
	  bordered: _react.PropTypes.bool,
	  hover: _react.PropTypes.bool,
	  condensed: _react.PropTypes.bool,
	  keyField: _react.PropTypes.string,
	  selectedRowKeys: _react.PropTypes.array,
	  onRowClick: _react.PropTypes.func,
	  onSelectRow: _react.PropTypes.func,
	  noDataText: _react.PropTypes.string,
	  style: _react.PropTypes.object
	};
	exports['default'] = TableBody;
	module.exports = exports['default'];

/***/ },
/* 9 */
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

	var TableRow = (function (_Component) {
	  _inherits(TableRow, _Component);

	  function TableRow(props) {
	    var _this = this;

	    _classCallCheck(this, TableRow);

	    _get(Object.getPrototypeOf(TableRow.prototype), 'constructor', this).call(this, props);

	    this.rowClick = function (e) {
	      if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'SELECT' && e.target.tagName !== 'TEXTAREA') {
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
	    };

	    this.rowMouseOut = function (e) {
	      if (_this.props.onRowMouseOut) {
	        _this.props.onRowMouseOut(e.currentTarget.rowIndex, e);
	      }
	    };

	    this.rowMouseOver = function (e) {
	      if (_this.props.onRowMouseOver) {
	        _this.props.onRowMouseOver(e.currentTarget.rowIndex, e);
	      }
	    };

	    this.clickNum = 0;
	  }

	  _createClass(TableRow, [{
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
	            onMouseOver: this.rowMouseOver,
	            onMouseOut: this.rowMouseOut,
	            onClick: this.rowClick }),
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
	})(_react.Component);

	TableRow.propTypes = {
	  isSelected: _react.PropTypes.bool,
	  enableCellEdit: _react.PropTypes.bool,
	  onRowClick: _react.PropTypes.func,
	  onSelectRow: _react.PropTypes.func,
	  onRowMouseOut: _react.PropTypes.func,
	  onRowMouseOver: _react.PropTypes.func
	};
	TableRow.defaultProps = {
	  onRowClick: undefined
	};
	exports['default'] = TableRow;
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

	var _Const = __webpack_require__(3);

	var _Const2 = _interopRequireDefault(_Const);

	var TableColumn = (function (_Component) {
	  _inherits(TableColumn, _Component);

	  function TableColumn(props) {
	    var _this = this;

	    _classCallCheck(this, TableColumn);

	    _get(Object.getPrototypeOf(TableColumn.prototype), 'constructor', this).call(this, props);

	    this.handleCellEdit = function (e) {
	      if (_this.props.cellEdit.mode === _Const2['default'].CELL_EDIT_DBCLICK) {
	        if (document.selection && document.selection.empty) {
	          document.selection.empty();
	        } else if (window.getSelection) {
	          var sel = window.getSelection();
	          sel.removeAllRanges();
	        }
	      }
	      _this.props.onEdit(e.currentTarget.parentElement.rowIndex + 1, e.currentTarget.cellIndex);
	    };
	  }

	  /* eslint no-unused-vars: [0, { "args": "after-used" }] */

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
	    key: 'render',
	    value: function render() {
	      var tdStyle = {
	        textAlign: this.props.dataAlign,
	        display: this.props.hidden ? 'none' : null
	      };

	      var opts = {};
	      if (this.props.cellEdit) {
	        if (this.props.cellEdit.mode === _Const2['default'].CELL_EDIT_CLICK) {
	          opts.onClick = this.handleCellEdit;
	        } else if (this.props.cellEdit.mode === _Const2['default'].CELL_EDIT_DBCLICK) {
	          opts.onDoubleClick = this.handleCellEdit;
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
	})(_react.Component);

	TableColumn.propTypes = {
	  dataAlign: _react.PropTypes.string,
	  hidden: _react.PropTypes.bool,
	  className: _react.PropTypes.string,
	  children: _react.PropTypes.node
	};

	TableColumn.defaultProps = {
	  dataAlign: 'left',
	  hidden: false,
	  className: ''
	};
	exports['default'] = TableColumn;
	module.exports = exports['default'];

/***/ },
/* 11 */
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

	var _Editor = __webpack_require__(12);

	var _Editor2 = _interopRequireDefault(_Editor);

	var _NotificationJs = __webpack_require__(13);

	var _NotificationJs2 = _interopRequireDefault(_NotificationJs);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var TableEditColumn = (function (_Component) {
	  _inherits(TableEditColumn, _Component);

	  function TableEditColumn(props) {
	    var _this = this;

	    _classCallCheck(this, TableEditColumn);

	    _get(Object.getPrototypeOf(TableEditColumn.prototype), 'constructor', this).call(this, props);

	    this.handleKeyPress = function (e) {
	      if (e.keyCode === 13) {
	        // Pressed ENTER
	        var value = e.currentTarget.type === 'checkbox' ? _this._getCheckBoxValue(e) : e.currentTarget.value;

	        if (!_this.validator(value)) {
	          return;
	        }
	        _this.props.completeEdit(value, _this.props.rowIndex, _this.props.colIndex);
	      } else if (e.keyCode === 27) {
	        _this.props.completeEdit(null, _this.props.rowIndex, _this.props.colIndex);
	      }
	    };

	    this.handleBlur = function (e) {
	      if (_this.props.blurToSave) {
	        var value = e.currentTarget.type === 'checkbox' ? _this._getCheckBoxValue(e) : e.currentTarget.value;
	        if (!_this.validator(value)) {
	          return;
	        }
	        _this.props.completeEdit(value, _this.props.rowIndex, _this.props.colIndex);
	      }
	    };

	    this.timeouteClear = 0;
	    this.state = {
	      shakeEditor: false
	    };
	  }

	  _createClass(TableEditColumn, [{
	    key: 'validator',
	    value: function validator(value) {
	      var ts = this;
	      if (ts.props.editable.validator) {
	        var valid = ts.props.editable.validator(value);
	        if (!valid) {
	          ts.refs.notifier.notice('error', valid, 'Pressed ESC can cancel');
	          var input = ts.refs.inputRef;
	          // animate input
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
	      if (this.timeouteClear !== 0) {
	        clearTimeout(this.timeouteClear);
	        this.timeouteClear = 0;
	      }
	    })
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.refs.inputRef.focus();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.clearTimeout();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var editable = _props.editable;
	      var format = _props.format;
	      var children = _props.children;
	      var shakeEditor = this.state.shakeEditor;

	      var attr = {
	        ref: 'inputRef',
	        onKeyDown: this.handleKeyPress,
	        onBlur: this.handleBlur
	      };
	      // put placeholder if exist
	      editable.placeholder && (attr.placeholder = editable.placeholder);

	      var editorClass = (0, _classnames2['default'])({ 'animated': shakeEditor, 'shake': shakeEditor });
	      return _react2['default'].createElement(
	        'td',
	        { ref: 'td', style: { position: 'relative' } },
	        (0, _Editor2['default'])(editable, attr, format, editorClass, children || ''),
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
	})(_react.Component);

	TableEditColumn.propTypes = {
	  completeEdit: _react.PropTypes.func,
	  rowIndex: _react.PropTypes.number,
	  colIndex: _react.PropTypes.number,
	  blurToSave: _react.PropTypes.bool,
	  editable: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
	  format: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.func]),
	  children: _react.PropTypes.node
	};

	exports['default'] = TableEditColumn;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var editor = function editor(editable, attr, format, editorClass, defaultValue) {
	  if (editable === true || typeof editable === 'string') {
	    // simple declare
	    var type = editable ? 'text' : editable;
	    return _react2['default'].createElement('input', _extends({}, attr, { type: type, defaultValue: defaultValue,
	      className: (editorClass || '') + ' form-control editor edit-text' }));
	  } else if (!editable) {
	    var type = editable ? 'text' : editable;
	    return _react2['default'].createElement('input', _extends({}, attr, { type: type, defaultValue: defaultValue,
	      disabled: 'disabled',
	      className: (editorClass || '') + ' form-control editor edit-text' }));
	  } else if (editable.type) {
	    // standard declare
	    // put style if exist
	    editable.style && (attr.style = editable.style);
	    // put class if exist
	    attr.className = (editorClass || '') + ' form-control editor edit-' + editable.type + (editable.className ? ' ' + editable.className : '');

	    if (editable.type === 'select') {
	      // process select input
	      var options = [];
	      var values = editable.options.values;
	      if (Array.isArray(values)) {
	        (function () {
	          // only can use arrray data for options
	          var rowValue = undefined;
	          options = values.map(function (d, i) {
	            rowValue = format ? format(d) : d;
	            return _react2['default'].createElement(
	              'option',
	              { key: 'option' + i, value: d },
	              rowValue
	            );
	          });
	        })();
	      }
	      return _react2['default'].createElement(
	        'select',
	        _extends({}, attr, { defaultValue: defaultValue }),
	        options
	      );
	    } else if (editable.type === 'textarea') {
	      var _ret2 = (function () {
	        // process textarea input
	        // put other if exist
	        editable.cols && (attr.cols = editable.cols);
	        editable.rows && (attr.rows = editable.rows);
	        var saveBtn = undefined;
	        var keyUpHandler = attr.onKeyDown;
	        if (keyUpHandler) {
	          attr.onKeyDown = function (e) {
	            if (e.keyCode !== 13) {
	              // not Pressed ENTER
	              keyUpHandler(e);
	            }
	          };
	          saveBtn = _react2['default'].createElement(
	            'button',
	            {
	              className: 'btn btn-info btn-xs textarea-save-btn',
	              onClick: keyUpHandler },
	            'save'
	          );
	        }
	        return {
	          v: _react2['default'].createElement(
	            'div',
	            null,
	            _react2['default'].createElement('textarea', _extends({}, attr, { defaultValue: defaultValue })),
	            saveBtn
	          )
	        };
	      })();

	      if (typeof _ret2 === 'object') return _ret2.v;
	    } else if (editable.type === 'checkbox') {
	      var values = 'true:false';
	      if (editable.options && editable.options.values) {
	        // values = editable.options.values.split(':');
	        values = editable.options.values;
	      }
	      attr.className = attr.className.replace('form-control', '');
	      attr.className += ' checkbox pull-right';

	      var checked = defaultValue && defaultValue.toString() === values.split(':')[0] ? true : false;

	      return _react2['default'].createElement('input', _extends({}, attr, { type: 'checkbox',
	        value: values, defaultChecked: checked }));
	    } else {
	      // process other input type. as password,url,email...
	      return _react2['default'].createElement('input', _extends({}, attr, { type: 'text', defaultValue: defaultValue }));
	    }
	  }
	  // default return for other case of editable
	  return _react2['default'].createElement('input', _extends({}, attr, { type: 'text',
	    className: (editorClass || '') + ' form-control editor edit-text' }));
	};

	exports['default'] = editor;
	module.exports = exports['default'];

/***/ },
/* 13 */
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

	var _reactToastr = __webpack_require__(14);

	var ToastrMessageFactory = _react2['default'].createFactory(_reactToastr.ToastMessage.animation);

	var Notification = (function (_Component) {
	  _inherits(Notification, _Component);

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
	        showAnimation: 'animated  bounceIn',
	        hideAnimation: 'animated bounceOut'
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(_reactToastr.ToastContainer, { ref: 'toastr',
	        toastMessageFactory: ToastrMessageFactory,
	        id: 'toast-container',
	        className: 'toast-top-right' });
	    }
	  }]);

	  return Notification;
	})(_react.Component);

	exports['default'] = Notification;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ToastMessage = exports.ToastContainer = undefined;

	var _ToastContainer = __webpack_require__(15);

	var _ToastContainer2 = _interopRequireDefault(_ToastContainer);

	var _ToastMessage = __webpack_require__(22);

	var _ToastMessage2 = _interopRequireDefault(_ToastMessage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.ToastContainer = _ToastContainer2.default;
	exports.ToastMessage = _ToastMessage2.default;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsUpdate = __webpack_require__(16);

	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

	var _ToastMessage = __webpack_require__(22);

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
<<<<<<< HEAD

=======
	
>>>>>>> 482f2f05d06706d701a06346b221d8a8409fcb1a
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
<<<<<<< HEAD

=======
	
>>>>>>> 482f2f05d06706d701a06346b221d8a8409fcb1a
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
<<<<<<< HEAD

=======
	
>>>>>>> 482f2f05d06706d701a06346b221d8a8409fcb1a
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
<<<<<<< HEAD

=======
	
>>>>>>> 482f2f05d06706d701a06346b221d8a8409fcb1a
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(17);

/***/ },
/* 17 */
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

	var assign = __webpack_require__(19);
	var keyOf = __webpack_require__(20);
	var invariant = __webpack_require__(21);
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ },
/* 18 */
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
/* 19 */
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
/* 20 */
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
/* 21 */
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.jQuery = exports.animation = undefined;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsUpdate = __webpack_require__(16);

	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _animationMixin = __webpack_require__(23);

	var _animationMixin2 = _interopRequireDefault(_animationMixin);
<<<<<<< HEAD

	var _jQueryMixin = __webpack_require__(27);

=======
	
	var _jQueryMixin = __webpack_require__(27);
	
>>>>>>> 482f2f05d06706d701a06346b221d8a8409fcb1a
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
<<<<<<< HEAD

	var _ReactTransitionEvents = __webpack_require__(24);

=======
	
	var _ReactTransitionEvents = __webpack_require__(24);
	
>>>>>>> 482f2f05d06706d701a06346b221d8a8409fcb1a
	var _ReactTransitionEvents2 = _interopRequireDefault(_ReactTransitionEvents);

	var _reactDom = __webpack_require__(5);

	var _reactDom2 = _interopRequireDefault(_reactDom);
<<<<<<< HEAD

	var _elementClass = __webpack_require__(26);

	var _elementClass2 = _interopRequireDefault(_elementClass);

=======
	
	var _elementClass = __webpack_require__(26);
	
	var _elementClass2 = _interopRequireDefault(_elementClass);
	
>>>>>>> 482f2f05d06706d701a06346b221d8a8409fcb1a
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
<<<<<<< HEAD

	      var classList = (0, _elementClass2.default)(node);
	      classList.remove(className);
	      classList.remove(activeClassName);

=======
	
	      var classList = (0, _elementClass2.default)(node);
	      classList.remove(className);
	      classList.remove(activeClassName);
	
>>>>>>> 482f2f05d06706d701a06346b221d8a8409fcb1a
	      _ReactTransitionEvents2.default.removeEndEventListener(node, endListener);
	    };

	    _ReactTransitionEvents2.default.addEndEventListener(node, endListener);
<<<<<<< HEAD

	    (0, _elementClass2.default)(node).add(className);

=======
	
	    (0, _elementClass2.default)(node).add(className);
	
>>>>>>> 482f2f05d06706d701a06346b221d8a8409fcb1a
	    // Need to do this to actually trigger a transition.
	    this._queue_class(activeClassName);
	  },
	  _clear_transition: function _clear_transition(hide) {
	    var node = _reactDom2.default.findDOMNode(this);
	    var animationType = hide ? "leave" : "enter";
	    var className = this.props.transition + "-" + animationType;
	    var activeClassName = className + "-active";
<<<<<<< HEAD

=======
	
>>>>>>> 482f2f05d06706d701a06346b221d8a8409fcb1a
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
<<<<<<< HEAD

=======
	
>>>>>>> 482f2f05d06706d701a06346b221d8a8409fcb1a
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

<<<<<<< HEAD
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

	var ExecutionEnvironment = __webpack_require__(25);

	/**
=======
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
	
	var ExecutionEnvironment = __webpack_require__(25);
	
	/**
>>>>>>> 482f2f05d06706d701a06346b221d8a8409fcb1a
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
/* 25 */
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
/* 26 */
/***/ function(module, exports) {

	module.exports = function(opts) {
	  return new ElementClass(opts)
	}
<<<<<<< HEAD

=======
	
>>>>>>> 482f2f05d06706d701a06346b221d8a8409fcb1a
	function indexOf(arr, prop) {
	  if (arr.indexOf) return arr.indexOf(prop)
	  for (var i = 0, len = arr.length; i < len; i++)
	    if (arr[i] === prop) return i
	  return -1
	}
<<<<<<< HEAD

=======
	
>>>>>>> 482f2f05d06706d701a06346b221d8a8409fcb1a
	function ElementClass(opts) {
	  if (!(this instanceof ElementClass)) return new ElementClass(opts)
	  var self = this
	  if (!opts) opts = {}
<<<<<<< HEAD

	  // similar doing instanceof HTMLElement but works in IE8
	  if (opts.nodeType) opts = {el: opts}

=======
	
	  // similar doing instanceof HTMLElement but works in IE8
	  if (opts.nodeType) opts = {el: opts}
	
>>>>>>> 482f2f05d06706d701a06346b221d8a8409fcb1a
	  this.opts = opts
	  this.el = opts.el || document.body
	  if (typeof this.el !== 'object') this.el = document.querySelector(this.el)
	}
<<<<<<< HEAD

=======
	
>>>>>>> 482f2f05d06706d701a06346b221d8a8409fcb1a
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
<<<<<<< HEAD

=======
	
>>>>>>> 482f2f05d06706d701a06346b221d8a8409fcb1a
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
<<<<<<< HEAD

=======
	
>>>>>>> 482f2f05d06706d701a06346b221d8a8409fcb1a
	ElementClass.prototype.has = function(className) {
	  var el = this.el
	  if (!el) return
	  var classes = el.className.split(' ')
	  return indexOf(classes, className) > -1
	}
<<<<<<< HEAD

=======
	
>>>>>>> 482f2f05d06706d701a06346b221d8a8409fcb1a
	ElementClass.prototype.toggle = function(className) {
	  var el = this.el
	  if (!el) return
	  if (this.has(className)) this.remove(className)
	  else this.add(className)
	}


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactDom = __webpack_require__(5);

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
/* 28 */
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
<<<<<<< HEAD

	var _PageButtonJs = __webpack_require__(29);

=======
	
	var _PageButtonJs = __webpack_require__(29);
	
>>>>>>> 482f2f05d06706d701a06346b221d8a8409fcb1a
	var _PageButtonJs2 = _interopRequireDefault(_PageButtonJs);

	var _Const = __webpack_require__(3);

	var _Const2 = _interopRequireDefault(_Const);

	var PaginationList = (function (_Component) {
	  _inherits(PaginationList, _Component);

	  function PaginationList() {
	    var _this = this;

	    _classCallCheck(this, PaginationList);

	    _get(Object.getPrototypeOf(PaginationList.prototype), 'constructor', this).apply(this, arguments);

	    this.changePage = function (page) {
	      var _props = _this.props;
	      var prePage = _props.prePage;
	      var currPage = _props.currPage;
	      var nextPage = _props.nextPage;
	      var lastPage = _props.lastPage;
	      var firstPage = _props.firstPage;
	      var sizePerPage = _props.sizePerPage;

	      if (page === prePage) {
	        page = currPage - 1 < 1 ? 1 : currPage - 1;
	      } else if (page === nextPage) {
	        page = currPage + 1 > _this.totalPages ? _this.totalPages : currPage + 1;
	      } else if (page === lastPage) {
	        page = _this.totalPages;
	      } else if (page === firstPage) {
	        page = 1;
	      } else {
	        page = parseInt(page, 10);
	      }

	      if (page !== currPage) {
	        _this.props.changePage(page, sizePerPage);
	      }
	    };

	    this.changeSizePerPage = function (e) {
	      e.preventDefault();

	      var selectSize = parseInt(e.currentTarget.text, 10);
	      var currPage = _this.props.currPage;

	      if (selectSize !== _this.props.sizePerPage) {
	        _this.totalPages = Math.ceil(_this.props.dataSize / selectSize);
	        if (currPage > _this.totalPages) currPage = _this.totalPages;

	        _this.props.changePage(currPage, selectSize);
	        if (_this.props.onSizePerPageList) {
	          _this.props.onSizePerPageList(selectSize);
	        }
	      }
	    };
	  }

	  _createClass(PaginationList, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props2 = this.props;
	      var dataSize = _props2.dataSize;
	      var sizePerPage = _props2.sizePerPage;
	      var sizePerPageList = _props2.sizePerPageList;

	      this.totalPages = Math.ceil(dataSize / sizePerPage);
	      var pageBtns = this.makePage();
	      var pageListStyle = {
	        float: 'right',
	        // override the margin-top defined in .pagination class in bootstrap.
	        marginTop: '0px'
	      };

	      var sizePerPageOptions = sizePerPageList.map(function (_sizePerPage) {
	        return _react2['default'].createElement(
	          'li',
	          { key: _sizePerPage, role: 'presentation' },
	          _react2['default'].createElement(
	            'a',
	            { role: 'menuitem',
	              tabIndex: '-1', href: '#',
	              onClick: _this2.changeSizePerPage },
	            _sizePerPage
	          )
	        );
	      });

	      return _react2['default'].createElement(
	        'div',
	        { className: 'row', style: { marginTop: 15 } },
	        sizePerPageList.length > 1 ? _react2['default'].createElement(
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
	                { className: 'btn btn-default dropdown-toggle',
	                  type: 'button', id: 'pageDropDown', 'data-toggle': 'dropdown',
	                  'aria-expanded': 'true' },
	                sizePerPage,
	                _react2['default'].createElement(
	                  'span',
	                  null,
	                  ' ',
	                  _react2['default'].createElement('span', { className: 'caret' })
	                )
	              ),
	              _react2['default'].createElement(
	                'ul',
	                { className: 'dropdown-menu', role: 'menu', 'aria-labelledby': 'pageDropDown' },
	                sizePerPageOptions
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
	        if (this.props.currPage === 1 && (page === this.props.firstPage || page === this.props.prePage)) {
	          disabled = true;
	          hidden = true;
	        }
	        if (this.props.currPage === this.totalPages && (page === this.props.nextPage || page === this.props.lastPage)) {
	          disabled = true;
	          hidden = true;
	        }
	        return _react2['default'].createElement(
	          _PageButtonJs2['default'],
	          { key: page,
	            changePage: this.changePage,
	            active: isActive,
	            disable: disabled,
	            hidden: hidden },
	          page
	        );
	      }, this);
	    }
	  }, {
	    key: 'getPages',
	    value: function getPages() {
	      var pages = undefined;
	      var startPage = 1;
	      var endPage = this.totalPages;

	      startPage = Math.max(this.props.currPage - Math.floor(this.props.paginationSize / 2), 1);
	      endPage = startPage + this.props.paginationSize - 1;

	      if (endPage > this.totalPages) {
	        endPage = this.totalPages;
	        startPage = endPage - this.props.paginationSize + 1;
	      }

	      if (startPage !== 1 && this.totalPages > this.props.paginationSize) {
	        pages = [this.props.firstPage, this.props.prePage];
	      } else if (this.totalPages > 1) {
	        pages = [this.props.prePage];
	      } else {
	        pages = [];
	      }

	      for (var i = startPage; i <= endPage; i++) {
	        if (i > 0) pages.push(i);
	      }

	      if (endPage !== this.totalPages) {
	        pages.push(this.props.nextPage);
	        pages.push(this.props.lastPage);
	      } else if (this.totalPages > 1) {
	        pages.push(this.props.nextPage);
	      }
	      return pages;
	    }
	  }]);

	  return PaginationList;
	})(_react.Component);

	PaginationList.propTypes = {
	  currPage: _react.PropTypes.number,
	  sizePerPage: _react.PropTypes.number,
	  dataSize: _react.PropTypes.number,
	  changePage: _react.PropTypes.func,
	  sizePerPageList: _react.PropTypes.array,
	  paginationSize: _react.PropTypes.number,
	  remote: _react.PropTypes.bool,
	  onSizePerPageList: _react.PropTypes.func,
	  prePage: _react.PropTypes.string
	};

	PaginationList.defaultProps = {
	  sizePerPage: _Const2['default'].SIZE_PER_PAGE
	};

	exports['default'] = PaginationList;
	module.exports = exports['default'];

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

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var PageButton = (function (_Component) {
	  _inherits(PageButton, _Component);

	  function PageButton(props) {
	    var _this = this;

	    _classCallCheck(this, PageButton);

	    _get(Object.getPrototypeOf(PageButton.prototype), 'constructor', this).call(this, props);

	    this.pageBtnClick = function (e) {
	      e.preventDefault();
	      _this.props.changePage(e.currentTarget.textContent);
	    };
	  }

	  _createClass(PageButton, [{
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
	          { href: '#', onClick: this.pageBtnClick },
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return PageButton;
	})(_react.Component);

	PageButton.propTypes = {
	  changePage: _react.PropTypes.func,
	  active: _react.PropTypes.bool,
	  disable: _react.PropTypes.bool,
	  hidden: _react.PropTypes.bool,
	  children: _react.PropTypes.node
	};

	exports['default'] = PageButton;
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

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Const = __webpack_require__(3);

	var _Const2 = _interopRequireDefault(_Const);

	var _Editor = __webpack_require__(12);

	var _Editor2 = _interopRequireDefault(_Editor);

	var _NotificationJs = __webpack_require__(13);

	var _NotificationJs2 = _interopRequireDefault(_NotificationJs);

	var ToolBar = (function (_Component) {
	  _inherits(ToolBar, _Component);

	  function ToolBar(props) {
	    var _this = this;

	    _classCallCheck(this, ToolBar);

	    _get(Object.getPrototypeOf(ToolBar.prototype), 'constructor', this).call(this, props);

	    this.handleSaveBtnClick = function () {
	      var newObj = _this.checkAndParseForm();
	      if (!newObj) {
	        // validate errors
	        return;
	      }
	      var msg = _this.props.onAddRow(newObj);
	      if (msg) {
	        _this.refs.notifier.notice('error', msg, 'Pressed ESC can cancel');
	        _this.clearTimeout();
	        // shake form and hack prevent modal hide
	        _this.setState({
	          shakeEditor: true,
	          validateState: 'this is hack for prevent bootstrap modal hide'
	        });
	        // clear animate class
	        _this.timeouteClear = setTimeout(function () {
	          _this.setState({ shakeEditor: false });
	        }, 300);
	      } else {
	        // reset state and hide modal hide
	        _this.setState({
	          validateState: null,
	          shakeEditor: false
	        }, function () {
	          document.querySelector('.modal-backdrop').click();
	          document.querySelector('.' + _this.modalClassName).click();
	        });
	        // reset form
	        _this.refs.form.reset();
	      }
	    };

	    this.handleShowOnlyToggle = function () {
	      _this.setState({
	        showSelected: !_this.state.showSelected
	      });
	      _this.props.onShowOnlySelected();
	    };

	    this.handleDropRowBtnClick = function () {
	      _this.props.onDropRow();
	    };

	    this.handleKeyUp = function (e) {
	      _this.props.onSearch(e.currentTarget.value);
	    };

	    this.handleExportCSV = function () {
	      _this.props.onExportCSV();
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
	      var _this2 = this;

	      var newObj = {};
	      var validateState = {};
	      var isValid = true;
	      var tempValue = undefined;
	      var tempMsg = undefined;

	      this.props.columns.forEach(function (column, i) {
	        if (column.autoValue) {
	          // when you want same auto generate value and not allow edit, example ID field
	          var time = new Date().getTime();
	          tempValue = typeof column.autoValue === 'function' ? column.autoValue() : 'autovalue-' + time;
	        } else {
	          var dom = this.refs[column.field + i];
	          tempValue = dom.value;

	          if (column.editable && column.editable.type === 'checkbox') {
	            var values = tempValue.split(':');
	            tempValue = dom.checked ? values[0] : values[1];
	          }

	          if (column.editable && column.editable.validator) {
	            // process validate
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
	        this.clearTimeout();
	        // show error in form and shake it
	        this.setState({ validateState: validateState, shakeEditor: true });
	        // notifier error
	        this.refs.notifier.notice('error', 'Form validate errors, please checking!', 'Pressed ESC can cancel');
	        // clear animate class
	        this.timeouteClear = setTimeout(function () {
	          _this2.setState({ shakeEditor: false });
	        }, 300);
	        return null;
	      }
	    }
	  }, {
	    key: 'handleCloseBtn',
	    value: function handleCloseBtn() {
	      this.refs.warning.style.display = 'none';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      this.modalClassName = 'bs-table-modal-sm' + new Date().getTime();
	      var insertBtn = null;
	      var deleteBtn = null;
	      var exportCSV = null;
	      var showSelectedOnlyBtn = null;

	      if (this.props.enableInsert) {
	        insertBtn = _react2['default'].createElement(
	          'button',
	          { type: 'button',
	            className: 'btn btn-info react-bs-table-add-btn',
	            'data-toggle': 'modal',
	            'data-target': '.' + this.modalClassName },
	          _react2['default'].createElement('i', { className: 'glyphicon glyphicon-plus' }),
	          ' New'
	        );
	      }

	      if (this.props.enableDelete) {
	        deleteBtn = _react2['default'].createElement(
	          'button',
	          { type: 'button',
	            className: 'btn btn-warning react-bs-table-del-btn',
	            'data-toggle': 'tooltip',
	            'data-placement': 'right',
	            title: 'Drop selected row',
	            onClick: this.handleDropRowBtnClick },
	          _react2['default'].createElement('i', { className: 'glyphicon glyphicon-trash' }),
	          ' Delete'
	        );
	      }

	      if (this.props.enableShowOnlySelected) {
	        showSelectedOnlyBtn = _react2['default'].createElement(
	          'button',
	          { type: 'button',
	            onClick: this.handleShowOnlyToggle,
	            className: 'btn btn-primary',
	            'data-toggle': 'button',
	            'aria-pressed': 'false' },
	          this.state.showSelected ? _Const2['default'].SHOW_ALL : _Const2['default'].SHOW_ONLY_SELECT
	        );
	      }

	      if (this.props.enableExportCSV) {
	        exportCSV = _react2['default'].createElement(
	          'button',
	          { type: 'button',
	            className: 'btn btn-success',
	            onClick: this.handleExportCSV },
	          _react2['default'].createElement('i', { className: 'glyphicon glyphicon-export' }),
	          ' Export to CSV'
	        );
	      }

	      var searchTextInput = this.renderSearchPanel();
	      var modal = this.props.enableInsert ? this.renderInsertRowModal() : null;

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
	          _react2['default'].createElement('input', { ref: 'seachInput',
	            className: 'form-control',
	            type: 'text',
	            placeholder: this.props.searchPlaceholder ? this.props.searchPlaceholder : 'Search',
	            onKeyUp: this.handleKeyUp }),
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
	      var shakeEditor = this.state.shakeEditor;
	      var inputField = this.props.columns.map(function (column, i) {
	        var editable = column.editable;
	        var format = column.format;
	        var field = column.field;
	        var name = column.name;
	        var autoValue = column.autoValue;

	        var attr = {
	          ref: field + i,
	          placeholder: editable.placeholder ? editable.placeholder : name
	        };

	        if (autoValue) {
	          // when you want same auto generate value
	          // and not allow edit, for example ID field
	          return null;
	        }
	        var error = validateState[field] ? _react2['default'].createElement(
	          'span',
	          { className: 'help-block bg-danger' },
	          validateState[field]
	        ) : null;

	        // let editor = Editor(editable,attr,format);
	        // if(editor.props.type && editor.props.type == 'checkbox'){
	        return _react2['default'].createElement(
	          'div',
	          { className: 'form-group', key: field },
	          _react2['default'].createElement(
	            'label',
	            null,
	            name
	          ),
	          (0, _Editor2['default'])(editable, attr, format, ''),
	          error
	        );
	      });
	      var modalClass = (0, _classnames2['default'])('modal', 'fade', this.modalClassName, {
	        // hack prevent bootstrap modal hide by reRender
	        'in': shakeEditor || this.state.validateState
	      });
	      var dialogClass = (0, _classnames2['default'])('modal-dialog', 'modal-sm', {
	        'animated': shakeEditor,
	        'shake': shakeEditor
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
	                { type: 'button',
	                  className: 'close',
	                  'data-dismiss': 'modal',
	                  'aria-label': 'Close' },
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
	                { type: 'button',
	                  className: 'btn btn-default',
	                  'data-dismiss': 'modal' },
	                'Close'
	              ),
	              _react2['default'].createElement(
	                'button',
	                { type: 'button',
	                  className: 'btn btn-info',
	                  onClick: this.handleSaveBtnClick },
	                'Save'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return ToolBar;
	})(_react.Component);

	ToolBar.propTypes = {
	  onAddRow: _react.PropTypes.func,
	  onDropRow: _react.PropTypes.func,
	  onShowOnlySelected: _react.PropTypes.func,
	  enableInsert: _react.PropTypes.bool,
	  enableDelete: _react.PropTypes.bool,
	  enableSearch: _react.PropTypes.bool,
	  enableShowOnlySelected: _react.PropTypes.bool,
	  columns: _react.PropTypes.array,
	  searchPlaceholder: _react.PropTypes.string,
	  clearSearch: _react.PropTypes.bool
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

	var _Const = __webpack_require__(3);

	var _Const2 = _interopRequireDefault(_Const);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var TableFilter = (function (_Component) {
	  _inherits(TableFilter, _Component);

	  function TableFilter(props) {
	    var _this = this;

	    _classCallCheck(this, TableFilter);

	    _get(Object.getPrototypeOf(TableFilter.prototype), 'constructor', this).call(this, props);

	    this.handleKeyUp = function (e) {
	      var _e$currentTarget = e.currentTarget;
	      var value = _e$currentTarget.value;
	      var name = _e$currentTarget.name;

	      if (value.trim() === '') {
	        delete _this.filterObj[name];
	      } else {
	        _this.filterObj[name] = value;
	      }
	      _this.props.onFilter(_this.filterObj);
	    };

	    this.filterObj = {};
	  }

	  _createClass(TableFilter, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var striped = _props.striped;
	      var condensed = _props.condensed;
	      var rowSelectType = _props.rowSelectType;
	      var columns = _props.columns;

	      var tableClasses = (0, _classnames2['default'])('table', {
	        'table-striped': striped,
	        'table-condensed': condensed
	      });
	      var selectRowHeader = null;

	      if (rowSelectType === _Const2['default'].ROW_SELECT_SINGLE || rowSelectType === _Const2['default'].ROW_SELECT_MULTI) {
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

	      var filterField = columns.map(function (column) {
	        var hidden = column.hidden;
	        var width = column.width;
	        var name = column.name;

	        var thStyle = {
	          display: hidden ? 'none' : null,
	          width: width
	        };
	        return _react2['default'].createElement(
	          'th',
	          { key: name, style: thStyle },
	          _react2['default'].createElement(
	            'div',
	            { className: 'th-inner table-header-column' },
	            _react2['default'].createElement('input', { size: '10', type: 'text',
	              placeholder: name, name: name, onKeyUp: this.handleKeyUp })
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
	})(_react.Component);

	TableFilter.propTypes = {
	  columns: _react.PropTypes.array,
	  rowSelectType: _react.PropTypes.string,
	  onFilter: _react.PropTypes.func
	};
	exports['default'] = TableFilter;
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* eslint no-nested-ternary: 0 */
	/* eslint guard-for-in: 0 */
	/* eslint no-console: 0 */
	/* eslint eqeqeq: 0 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Const = __webpack_require__(3);

	var _Const2 = _interopRequireDefault(_Const);
<<<<<<< HEAD

	var EventEmitter = __webpack_require__(33).EventEmitter;

=======
	
	var EventEmitter = __webpack_require__(33).EventEmitter;
	
>>>>>>> 482f2f05d06706d701a06346b221d8a8409fcb1a
	function _sort(arr, sortField, order, sortFunc) {
	  order = order.toLowerCase();
	  arr.sort(function (a, b) {
	    if (sortFunc) {
	      return sortFunc(a, b, order, sortField);
	    } else {
	      if (order === _Const2['default'].SORT_DESC) {
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
	        if (this.filterObj !== null) this.filter(this.filterObj);
	        if (this.searchText !== null) this.search(this.searchText);
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
	      this.sortObj = { order: order, sortField: sortField };

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
	        if (this.filterObj !== null) this.filter(this.filterObj);
	        if (this.searchText !== null) this.search(this.searchText);
	      }
	      return this;
	    }
	  }, {
	    key: 'addAtBegin',
	    value: function addAtBegin(newObj) {
	      if (!newObj[this.keyField] || newObj[this.keyField].toString() === '') {
	        throw this.keyField + ' can\'t be empty value.';
	      }
	      var currentDisplayData = this.getCurrentDisplayData();
	      currentDisplayData.forEach(function (row) {
	        if (row[this.keyField].toString() === newObj[this.keyField].toString()) {
	          throw this.keyField + ' ' + newObj[this.keyField] + ' already exists';
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
	        throw this.keyField + ' can\'t be empty value.';
	      }
	      var currentDisplayData = this.getCurrentDisplayData();
	      currentDisplayData.forEach(function (row) {
	        if (row[this.keyField].toString() === newObj[this.keyField].toString()) {
	          throw this.keyField + ' ' + newObj[this.keyField] + ' already exists';
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
	      var _this2 = this;

	      var currentDisplayData = this.getCurrentDisplayData();
	      var result = currentDisplayData.filter(function (row) {
	        return rowKey.indexOf(row[_this2.keyField]) === -1;
	      });

	      if (this.isOnFilter) {
	        this.data = this.data.filter(function (row) {
	          return rowKey.indexOf(row[_this2.keyField]) === -1;
	        });
	        this.filteredData = result;
	      } else {
	        this.data = result;
	      }
	    }
	  }, {
	    key: 'filter',
	    value: function filter(filterObj) {
	      var _this3 = this;

	      if (Object.keys(filterObj).length === 0) {
	        this.filteredData = null;
	        this.isOnFilter = false;
	        this.filterObj = null;
	        if (this.searchText !== null) this.search(this.searchText);
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
	                  filterVal = typeof filterObj[key].value === 'object' ? undefined : typeof filterObj[key].value === 'string' ? filterObj[key].value.toLowerCase() : filterObj[key].value;
	                  break;
	                }
	              case _Const2['default'].FILTER_TYPE.REGEX:
	                {
	                  filterVal = filterObj[key].value;
	                  break;
	                }
	              default:
	                {
	                  filterVal = typeof filterObj[key].value === 'string' ? filterObj[key].value.toLowerCase() : filterObj[key].value;
	                  if (filterVal === undefined) {
	                    // Support old filter
	                    filterVal = filterObj[key].toLowerCase();
	                  }
	                  break;
	                }
	            }

	            if (_this3.colInfos[key]) {
	              var _colInfos$key = _this3.colInfos[key];
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
	                  valid = _this3.filterNumber(targetVal, filterVal, filterObj[key].value.comparator);
	                  break;
	                }
	              case _Const2['default'].FILTER_TYPE.DATE:
	                {
	                  valid = _this3.filterDate(targetVal, filterVal);
	                  break;
	                }
	              case _Const2['default'].FILTER_TYPE.REGEX:
	                {
	                  valid = _this3.filterRegex(targetVal, filterVal);
	                  break;
	                }
	              case _Const2['default'].FILTER_TYPE.CUSTOM:
	                {
	                  valid = _this3.filterCustom(targetVal, filterVal, filterObj[key].value);
	                  break;
	                }
	              default:
	                {
	                  valid = _this3.filterText(targetVal, filterVal);
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
	        case '=':
	          {
	            if (targetVal != filterVal) {
	              valid = false;
	            }
	            break;
	          }
	        case '>':
	          {
	            if (targetVal <= filterVal) {
	              valid = false;
	            }
	            break;
	          }
	        case '>=':
	          {
	            if (targetVal < filterVal) {
	              valid = false;
	            }
	            break;
	          }
	        case '<':
	          {
	            if (targetVal >= filterVal) {
	              valid = false;
	            }
	            break;
	          }
	        case '<=':
	          {
	            if (targetVal > filterVal) {
	              valid = false;
	            }
	            break;
	          }
	        case '!=':
	          {
	            if (targetVal == filterVal) {
	              valid = false;
	            }
	            break;
	          }
	        default:
	          {
	            console.error('Number comparator provided is not supported');
	            break;
	          }
	      }
	      return valid;
	    }
	  }, {
	    key: 'filterDate',
	    value: function filterDate(targetVal, filterVal) {
	      return targetVal.getDate() === filterVal.getDate() && targetVal.getMonth() === filterVal.getMonth() && targetVal.getFullYear() === filterVal.getFullYear();
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
	      if (callbackInfo !== null && typeof callbackInfo === 'object') {
	        return callbackInfo.callback(targetVal, callbackInfo.callbackParameters);
	      }

	      return this.filterText(targetVal, filterVal);
	    }
	  }, {
	    key: 'filterText',
	    value: function filterText(targetVal, filterVal) {
	      if (targetVal.toString().toLowerCase().indexOf(filterVal) === -1) {
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
	      var _this4 = this;

	      if (searchText.trim() === '') {
	        this.filteredData = null;
	        this.isOnFilter = false;
	        this.searchText = null;
	        if (this.filterObj !== null) this.filter(this.filterObj);
	      } else {
	        (function () {
	          _this4.searchText = searchText;
	          var searchTextArray = [];

	          if (_this4.multiColumnSearch) {
	            searchTextArray = searchText.split(' ');
	          } else {
	            searchTextArray.push(searchText);
	          }

	          var source = _this4.isOnFilter ? _this4.filteredData : _this4.data;

	          _this4.filteredData = source.filter(function (row) {
	            var keys = Object.keys(row);
	            var valid = false;
	            // for loops are ugly, but performance matters here.
	            // And you cant break from a forEach.
	            // http://jsperf.com/for-vs-foreach/66
	            for (var i = 0, keysLength = keys.length; i < keysLength; i++) {
	              var key = keys[i];
	              if (_this4.colInfos[key] && row[key]) {
	                var _colInfos$key2 = _this4.colInfos[key];
	                var format = _colInfos$key2.format;
	                var filterFormatted = _colInfos$key2.filterFormatted;
	                var formatExtraData = _colInfos$key2.formatExtraData;
	                var searchable = _colInfos$key2.searchable;

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
	          _this4.isOnFilter = true;
	        })();
	      }
	    }
	  }, {
	    key: 'getDataIgnoringPagination',
	    value: function getDataIgnoringPagination() {
	      return this.getCurrentDisplayData();
	    }
	  }, {
	    key: 'get',
	    value: function get() {
	      var _data = this.getCurrentDisplayData();

	      if (_data.length === 0) return _data;

	      if (this.remote || !this.enablePagination) {
	        return _data;
	      } else {
	        var result = [];
	        for (var i = this.pageObj.start; i <= this.pageObj.end; i++) {
	          result.push(_data[i]);
	          if (i + 1 === _data.length) break;
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
	      var _this5 = this;

	      return this.data.map(function (row) {
	        return row[_this5.keyField];
	      });
	    }
	  }]);

	  return TableDataStore;
	})();

	exports.TableDataStore = TableDataStore;

/***/ },
/* 33 */
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
<<<<<<< HEAD

=======
	
>>>>>>> 482f2f05d06706d701a06346b221d8a8409fcb1a
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
<<<<<<< HEAD

=======
	
>>>>>>> 482f2f05d06706d701a06346b221d8a8409fcb1a
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Const = __webpack_require__(3);

	var _Const2 = _interopRequireDefault(_Const);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	exports['default'] = {
	  renderReactSortCaret: function renderReactSortCaret(order) {
	    var orderClass = (0, _classnames2['default'])('order', {
	      'dropup': order === _Const2['default'].SORT_ASC
	    });
	    return _react2['default'].createElement(
	      'span',
	      { className: orderClass },
	      _react2['default'].createElement('span', { className: 'caret', style: { margin: '0px 5px' } })
	    );
	  },

	  getScrollBarWidth: function getScrollBarWidth() {
	    var inner = document.createElement('p');
	    inner.style.width = '100%';
	    inner.style.height = '200px';

	    var outer = document.createElement('div');
	    outer.style.position = 'absolute';
	    outer.style.top = '0px';
	    outer.style.left = '0px';
	    outer.style.visibility = 'hidden';
	    outer.style.width = '200px';
	    outer.style.height = '150px';
	    outer.style.overflow = 'hidden';
	    outer.appendChild(inner);

	    document.body.appendChild(outer);
	    var w1 = inner.offsetWidth;
	    outer.style.overflow = 'scroll';
	    var w2 = inner.offsetWidth;
	    if (w1 === w2) w2 = outer.clientWidth;

	    document.body.removeChild(outer);

	    return w1 - w2;
	  },

	  canUseDOM: function canUseDOM() {
	    return typeof window !== 'undefined' && typeof window.document !== 'undefined';
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* eslint block-scoped-var: 0 */
	/* eslint vars-on-top: 0 */
	/* eslint no-var: 0 */
	/* eslint no-unused-vars: 0 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	if (typeof window !== 'undefined') {
	  var filesaver = __webpack_require__(36);
	  var saveAs = filesaver.saveAs;
	}

	function toString(data, keys) {
	  var dataString = '';
	  if (data.length === 0) return dataString;

	  dataString += keys.join(',') + '\n';

	  data.map(function (row) {
	    keys.map(function (col, i) {
	      var cell = typeof row[col] !== 'undefined' ? '"' + row[col] + '"' : '';
	      dataString += cell;
	      if (i + 1 < keys.length) dataString += ',';
	    });

	    dataString += '\n';
	  });

	  return dataString;
	}

	var exportCSV = function exportCSV(data, keys, filename) {
	  var dataString = toString(data, keys);
	  if (typeof window !== 'undefined') {
	    saveAs(new Blob([dataString], { type: 'text/plain;charset=utf-8' }), filename || 'spreadsheet.csv');
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

	var _Const = __webpack_require__(3);

	var _Const2 = _interopRequireDefault(_Const);
<<<<<<< HEAD

	var _events = __webpack_require__(33);

=======
	
	var _events = __webpack_require__(33);
	
>>>>>>> 482f2f05d06706d701a06346b221d8a8409fcb1a
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

	      if (value !== null && typeof value === 'object') {
	        // value of the filter is an object
	        var hasValue = true;
	        for (var prop in value) {
	          if (!value[prop] || value[prop] === '') {
	            hasValue = false;
	            break;
	          }
	        }
	        // if one of the object properties is undefined or empty, we remove the filter
	        if (hasValue) {
	          this.currentFilter[dataField] = { value: value, type: filterType };
	        } else {
	          delete this.currentFilter[dataField];
	        }
	      } else if (!value || value.trim() === '') {
	        delete this.currentFilter[dataField];
	      } else {
	        this.currentFilter[dataField] = { value: value.trim(), type: filterType };
	      }
	      this.emit('onFilterChange', this.currentFilter);
	    }
	  }]);

	  return Filter;
	})(_events.EventEmitter);

	exports.Filter = Filter;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* eslint default-case: 0 */
	/* eslint guard-for-in: 0 */
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

	var _Const = __webpack_require__(3);

	var _Const2 = _interopRequireDefault(_Const);
<<<<<<< HEAD

	var _util = __webpack_require__(34);

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

=======
	
	var _util = __webpack_require__(34);
	
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
	
>>>>>>> 482f2f05d06706d701a06346b221d8a8409fcb1a
	var _filtersNumber2 = _interopRequireDefault(_filtersNumber);

	var TableHeaderColumn = (function (_Component) {
	  _inherits(TableHeaderColumn, _Component);

	  function TableHeaderColumn(props) {
	    var _this = this;

	    _classCallCheck(this, TableHeaderColumn);

	    _get(Object.getPrototypeOf(TableHeaderColumn.prototype), 'constructor', this).call(this, props);

	    this.handleColumnClick = function () {
	      if (!_this.props.dataSort) return;
	      var order = _this.props.sort === _Const2['default'].SORT_DESC ? _Const2['default'].SORT_ASC : _Const2['default'].SORT_DESC;
	      _this.props.onSort(order, _this.props.dataField);
	    };

	    this.handleFilter = this.handleFilter.bind(this);
	  }

	  _createClass(TableHeaderColumn, [{
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
	            return _react2['default'].createElement(_filtersText2['default'], _extends({}, this.props.filter, {
	              columnName: this.props.children, filterHandler: this.handleFilter }));
	          }
	        case _Const2['default'].FILTER_TYPE.REGEX:
	          {
	            return _react2['default'].createElement(_filtersRegex2['default'], _extends({}, this.props.filter, {
	              columnName: this.props.children, filterHandler: this.handleFilter }));
	          }
	        case _Const2['default'].FILTER_TYPE.SELECT:
	          {
	            return _react2['default'].createElement(_filtersSelect2['default'], _extends({}, this.props.filter, {
	              columnName: this.props.children, filterHandler: this.handleFilter }));
	          }
	        case _Const2['default'].FILTER_TYPE.NUMBER:
	          {
	            return _react2['default'].createElement(_filtersNumber2['default'], _extends({}, this.props.filter, {
	              columnName: this.props.children, filterHandler: this.handleFilter }));
	          }
	        case _Const2['default'].FILTER_TYPE.DATE:
	          {
	            return _react2['default'].createElement(_filtersDate2['default'], _extends({}, this.props.filter, {
	              columnName: this.props.children, filterHandler: this.handleFilter }));
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
	      this.refs['header-col'].setAttribute('data-field', this.props.dataField);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var defaultCaret = undefined;
	      var thStyle = {
	        textAlign: this.props.dataAlign,
	        display: this.props.hidden ? 'none' : null
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
	      var classes = this.props.className + ' ' + (this.props.dataSort ? 'sort-column' : '');

	      return _react2['default'].createElement(
	        'th',
	        { ref: 'header-col',
	          className: classes,
	          style: thStyle,
	          title: this.props.children,
	          onClick: this.handleColumnClick },
	        this.props.children,
	        sortCaret,
	        _react2['default'].createElement(
	          'div',
	          { onClick: function (e) {
	              return e.stopPropagation();
	            } },
	          this.props.filter ? this.getFilters() : null
	        )
	      );
	    }
	  }]);

	  return TableHeaderColumn;
	})(_react.Component);

	var filterTypeArray = [];
	for (var key in _Const2['default'].FILTER_TYPE) {
	  filterTypeArray.push(_Const2['default'].FILTER_TYPE[key]);
	}

	TableHeaderColumn.propTypes = {
	  dataField: _react.PropTypes.string,
	  dataAlign: _react.PropTypes.string,
	  dataSort: _react.PropTypes.bool,
	  onSort: _react.PropTypes.func,
	  dataFormat: _react.PropTypes.func,
	  isKey: _react.PropTypes.bool,
	  editable: _react.PropTypes.any,
	  hidden: _react.PropTypes.bool,
	  searchable: _react.PropTypes.bool,
	  className: _react.PropTypes.string,
	  width: _react.PropTypes.string,
	  sortFunc: _react.PropTypes.func,
	  columnClassName: _react.PropTypes.any,
	  filterFormatted: _react.PropTypes.bool,
	  sort: _react.PropTypes.string,
	  formatExtraData: _react.PropTypes.any,
	  filter: _react.PropTypes.shape({
	    type: _react.PropTypes.oneOf(filterTypeArray),
	    delay: _react.PropTypes.number,
	    options: _react.PropTypes.oneOfType([_react.PropTypes.object, // for SelectFilter
	    _react.PropTypes.arrayOf(_react.PropTypes.number) // for NumberFilter
	    ]),
	    numberComparators: _react.PropTypes.arrayOf(_react.PropTypes.string),
	    emitter: _react.PropTypes.object,
	    placeholder: _react.PropTypes.string,
	    getElement: _react.PropTypes.func,
	    customFilterParameters: _react.PropTypes.object
	  }),
	  sortIndicator: _react.PropTypes.bool
	};

	TableHeaderColumn.defaultProps = {
	  dataAlign: 'left',
	  dataSort: false,
	  dataFormat: undefined,
	  isKey: false,
	  editable: true,
	  onSort: undefined,
	  hidden: false,
	  searchable: true,
	  className: '',
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

	/* eslint quotes: 0 */
	/* eslint max-len: 0 */
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

	var _Const = __webpack_require__(3);

	var _Const2 = _interopRequireDefault(_Const);

	var DateFilter = (function (_Component) {
	  _inherits(DateFilter, _Component);

	  function DateFilter(props) {
	    _classCallCheck(this, DateFilter);

	    _get(Object.getPrototypeOf(DateFilter.prototype), 'constructor', this).call(this, props);
	    this.filter = this.filter.bind(this);
	  }

	  _createClass(DateFilter, [{
	    key: 'setDefaultDate',
	    value: function setDefaultDate() {
	      var defaultDate = '';
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
	})(_react.Component);

	DateFilter.propTypes = {
	  filterHandler: _react.PropTypes.func.isRequired,
	  defaultValue: _react.PropTypes.object,
	  columnName: _react.PropTypes.string
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

	var _Const = __webpack_require__(3);

	var _Const2 = _interopRequireDefault(_Const);

	var TextFilter = (function (_Component) {
	  _inherits(TextFilter, _Component);

	  function TextFilter(props) {
	    _classCallCheck(this, TextFilter);

	    _get(Object.getPrototypeOf(TextFilter.prototype), 'constructor', this).call(this, props);
	    this.filter = this.filter.bind(this);
	    this.timeout = null;
	  }

	  _createClass(TextFilter, [{
	    key: 'filter',
	    value: function filter(event) {
	      var _this = this;

	      if (this.timeout) {
	        clearTimeout(this.timeout);
	      }
	      var filterValue = event.target.value;
	      this.timeout = setTimeout(function () {
	        _this.props.filterHandler(filterValue, _Const2['default'].FILTER_TYPE.TEXT);
	      }, this.props.delay);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var defaultValue = this.refs.inputText.defaultValue;
	      if (defaultValue) {
	        this.props.filterHandler(defaultValue, _Const2['default'].FILTER_TYPE.TEXT);
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
	      var _props = this.props;
	      var placeholder = _props.placeholder;
	      var columnName = _props.columnName;
	      var defaultValue = _props.defaultValue;

	      return _react2['default'].createElement('input', { ref: 'inputText',
	        className: 'filter text-filter form-control',
	        type: 'text',
	        onChange: this.filter,
	        placeholder: placeholder || 'Enter ' + columnName + '...',
	        defaultValue: defaultValue ? defaultValue : '' });
	    }
	  }]);

	  return TextFilter;
	})(_react.Component);

	TextFilter.propTypes = {
	  filterHandler: _react.PropTypes.func.isRequired,
	  defaultValue: _react.PropTypes.string,
	  delay: _react.PropTypes.number,
	  placeholder: _react.PropTypes.string,
	  columnName: _react.PropTypes.string
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

	var _Const = __webpack_require__(3);

	var _Const2 = _interopRequireDefault(_Const);

	var RegexFilter = (function (_Component) {
	  _inherits(RegexFilter, _Component);

	  function RegexFilter(props) {
	    _classCallCheck(this, RegexFilter);

	    _get(Object.getPrototypeOf(RegexFilter.prototype), 'constructor', this).call(this, props);
	    this.filter = this.filter.bind(this);
	    this.timeout = null;
	  }

	  _createClass(RegexFilter, [{
	    key: 'filter',
	    value: function filter(event) {
	      var _this = this;

	      if (this.timeout) {
	        clearTimeout(this.timeout);
	      }
	      var filterValue = event.target.value;
	      this.timeout = setTimeout(function () {
	        _this.props.filterHandler(filterValue, _Const2['default'].FILTER_TYPE.REGEX);
	      }, this.props.delay);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var value = this.refs.inputText.defaultValue;
	      if (value) {
	        this.props.filterHandler(value, _Const2['default'].FILTER_TYPE.REGEX);
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
	      var _props = this.props;
	      var defaultValue = _props.defaultValue;
	      var placeholder = _props.placeholder;
	      var columnName = _props.columnName;

	      return _react2['default'].createElement('input', { ref: 'inputText',
	        className: 'filter text-filter form-control',
	        type: 'text',
	        onChange: this.filter,
	        placeholder: placeholder || 'Enter Regex for ' + columnName + '...',
	        defaultValue: defaultValue ? defaultValue : '' });
	    }
	  }]);

	  return RegexFilter;
	})(_react.Component);

	RegexFilter.propTypes = {
	  filterHandler: _react.PropTypes.func.isRequired,
	  defaultValue: _react.PropTypes.string,
	  delay: _react.PropTypes.number,
	  placeholder: _react.PropTypes.string,
	  columnName: _react.PropTypes.string
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

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Const = __webpack_require__(3);

	var _Const2 = _interopRequireDefault(_Const);

	var SelectFilter = (function (_Component) {
	  _inherits(SelectFilter, _Component);

	  function SelectFilter(props) {
	    _classCallCheck(this, SelectFilter);

	    _get(Object.getPrototypeOf(SelectFilter.prototype), 'constructor', this).call(this, props);
	    this.filter = this.filter.bind(this);
	    this.state = {
	      isPlaceholderSelected: this.props.defaultValue === undefined || !this.props.options.hasOwnProperty(this.props.defaultValue)
	    };
	  }

	  _createClass(SelectFilter, [{
	    key: 'filter',
	    value: function filter(event) {
	      var value = event.target.value;

	      this.setState({ isPlaceholderSelected: value === '' });
	      this.props.filterHandler(value, _Const2['default'].FILTER_TYPE.SELECT);
	    }
	  }, {
	    key: 'getOptions',
	    value: function getOptions() {
	      var optionTags = [];
	      var _props = this.props;
	      var options = _props.options;
	      var placeholder = _props.placeholder;
	      var columnName = _props.columnName;

	      optionTags.push(_react2['default'].createElement(
	        'option',
	        { key: '-1', value: '' },
	        placeholder || 'Select ' + columnName + '...'
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
	      var value = this.refs.selectInput.value;
	      if (value) {
	        this.props.filterHandler(value, _Const2['default'].FILTER_TYPE.SELECT);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var selectClass = (0, _classnames2['default'])('filter', 'select-filter', 'form-control', { 'placeholder-selected': this.state.isPlaceholderSelected });

	      return _react2['default'].createElement(
	        'select',
	        { ref: 'selectInput',
	          className: selectClass,
	          onChange: this.filter,
	          defaultValue: this.props.defaultValue !== undefined ? this.props.defaultValue : '' },
	        this.getOptions()
	      );
	    }
	  }]);

	  return SelectFilter;
	})(_react.Component);

	SelectFilter.propTypes = {
	  filterHandler: _react.PropTypes.func.isRequired,
	  options: _react.PropTypes.object.isRequired,
	  placeholder: _react.PropTypes.string,
	  columnName: _react.PropTypes.string
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

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Const = __webpack_require__(3);

	var _Const2 = _interopRequireDefault(_Const);

	var legalComparators = ['=', '>', '>=', '<', '<=', '!='];

	var NumberFilter = (function (_Component) {
	  _inherits(NumberFilter, _Component);

	  function NumberFilter(props) {
	    _classCallCheck(this, NumberFilter);

	    _get(Object.getPrototypeOf(NumberFilter.prototype), 'constructor', this).call(this, props);
	    this.numberComparators = this.props.numberComparators || legalComparators;
	    this.timeout = null;
	    this.state = {
	      isPlaceholderSelected: this.props.defaultValue === undefined || this.props.defaultValue.number === undefined || this.props.options && this.props.options.indexOf(this.props.defaultValue.number) === -1
	    };
	    this.onChangeNumber = this.onChangeNumber.bind(this);
	    this.onChangeNumberSet = this.onChangeNumberSet.bind(this);
	    this.onChangeComparator = this.onChangeComparator.bind(this);
	  }

	  _createClass(NumberFilter, [{
	    key: 'onChangeNumber',
	    value: function onChangeNumber(event) {
	      var _this = this;

	      var comparator = this.refs.numberFilterComparator.value;
	      if (comparator === '') {
	        return;
	      }
	      if (this.timeout) {
	        clearTimeout(this.timeout);
	      }
	      var filterValue = event.target.value;
	      this.timeout = setTimeout(function () {
	        _this.props.filterHandler({ number: filterValue, comparator: comparator }, _Const2['default'].FILTER_TYPE.NUMBER);
	      }, this.props.delay);
	    }
	  }, {
	    key: 'onChangeNumberSet',
	    value: function onChangeNumberSet(event) {
	      var comparator = this.refs.numberFilterComparator.value;
	      var value = event.target.value;

	      this.setState({ isPlaceholderSelected: value === '' });
	      if (comparator === '') {
	        return;
	      }
	      this.props.filterHandler({ number: value, comparator: comparator }, _Const2['default'].FILTER_TYPE.NUMBER);
	    }
	  }, {
	    key: 'onChangeComparator',
	    value: function onChangeComparator(event) {
	      var value = this.refs.numberFilter.value;
	      var comparator = event.target.value;
	      if (value === '') {
	        return;
	      }
	      this.props.filterHandler({ number: value, comparator: comparator }, _Const2['default'].FILTER_TYPE.NUMBER);
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
	      }
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
	      }
	      return optionTags;
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var comparator = this.refs.numberFilterComparator.value;
	      var number = this.refs.numberFilter.value;
	      if (comparator && number) {
	        this.props.filterHandler({ number: number, comparator: comparator }, _Const2['default'].FILTER_TYPE.NUMBER);
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
	      var selectClass = (0, _classnames2['default'])('select-filter', 'number-filter-input', 'form-control', { 'placeholder-selected': this.state.isPlaceholderSelected });

	      return _react2['default'].createElement(
	        'div',
	        { className: 'filter number-filter' },
	        _react2['default'].createElement(
	          'select',
	          { ref: 'numberFilterComparator',
	            className: 'number-filter-comparator form-control',
	            onChange: this.onChangeComparator,
	            defaultValue: this.props.defaultValue ? this.props.defaultValue.comparator : '' },
	          this.getComparatorOptions()
	        ),
	        this.props.options ? _react2['default'].createElement(
	          'select',
	          { ref: 'numberFilter',
	            className: selectClass,
	            onChange: this.onChangeNumberSet,
	            defaultValue: this.props.defaultValue ? this.props.defaultValue.number : '' },
	          this.getNumberOptions()
	        ) : _react2['default'].createElement('input', { ref: 'numberFilter',
	          type: 'number',
	          className: 'number-filter-input form-control',
	          placeholder: this.props.placeholder || 'Enter ' + this.props.columnName + '...',
	          onChange: this.onChangeNumber,
	          defaultValue: this.props.defaultValue ? this.props.defaultValue.number : '' })
	      );
	    }
	  }]);

	  return NumberFilter;
	})(_react.Component);

	NumberFilter.propTypes = {
	  filterHandler: _react.PropTypes.func.isRequired,
	  options: _react.PropTypes.arrayOf(_react.PropTypes.number),
	  defaultValue: _react.PropTypes.shape({
	    number: _react.PropTypes.number,
	    comparator: _react.PropTypes.oneOf(legalComparators)
	  }),
	  delay: _react.PropTypes.number,
	  /* eslint consistent-return: 0 */
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
	        return new Error('Number comparator provided is not supported.\n          Use only ' + legalComparators);
	      }
	    }
	  },
	  placeholder: _react.PropTypes.string,
	  columnName: _react.PropTypes.string
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
//# sourceMappingURL=react-bootstrap-table.js.map
=======
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmOGNjYjM0OWJjM2I5MTMzNTU2YSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Jvb3RzdHJhcFRhYmxlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9Iiwid2VicGFjazovLy8uL3NyYy9Db25zdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVGFibGVIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0RE9NXCIsXCJjb21tb25qczJcIjpcInJlYWN0LWRvbVwiLFwiY29tbW9uanNcIjpcInJlYWN0LWRvbVwiLFwiYW1kXCI6XCJyZWFjdC1kb21cIn0iLCJ3ZWJwYWNrOi8vLy4vfi9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9TZWxlY3RSb3dIZWFkZXJDb2x1bW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RhYmxlQm9keS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVGFibGVSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RhYmxlQ29sdW1uLmpzIiwid2VicGFjazovLy8uL3NyYy9UYWJsZUVkaXRDb2x1bW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtdG9hc3RyL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXRvYXN0ci9saWIvVG9hc3RDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1hZGRvbnMtdXBkYXRlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL3VwZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9PYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vZmJqcy9saWIva2V5T2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9mYmpzL2xpYi9pbnZhcmlhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC10b2FzdHIvbGliL1RvYXN0TWVzc2FnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXRvYXN0ci9saWIvVG9hc3RNZXNzYWdlL2FuaW1hdGlvbk1peGluLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL1JlYWN0VHJhbnNpdGlvbkV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL34vZWxlbWVudC1jbGFzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXRvYXN0ci9saWIvVG9hc3RNZXNzYWdlL2pRdWVyeU1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdpbmF0aW9uL1BhZ2luYXRpb25MaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdpbmF0aW9uL1BhZ2VCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xiYXIvVG9vbEJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVGFibGVGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL1RhYmxlRGF0YVN0b3JlLmpzIiwid2VicGFjazovLy8uL34vZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3N2X2V4cG9ydF91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9maWxlc2F2ZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9GaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RhYmxlSGVhZGVyQ29sdW1uLmpzIiwid2VicGFjazovLy8uL3NyYy9maWx0ZXJzL0RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpbHRlcnMvVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmlsdGVycy9SZWdleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmlsdGVycy9TZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpbHRlcnMvTnVtYmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OzJDQ3RDMkIsQ0FBa0I7Ozs7OENBQ2YsRUFBcUI7Ozs7Z0RBQ3RCLEVBQXdCOztBQUVyRCxLQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtBQUNqQyxTQUFNLENBQUMsY0FBYyw4QkFBaUIsQ0FBQztBQUN2QyxTQUFNLENBQUMsaUJBQWlCLGlDQUFvQixDQUFDO0FBQzdDLFNBQU0sQ0FBQyxZQUFZLG9DQUFlLENBQUM7RUFDcEM7c0JBQ2M7QUFDYixpQkFBYztBQUNkLG9CQUFpQjtBQUNqQixlQUFZO0VBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDWDJDLENBQU87Ozs7a0NBQ2pDLENBQVM7Ozs7d0NBQ0gsQ0FBZTs7OztzQ0FDakIsQ0FBYTs7OztxREFDUixFQUE2Qjs7OzsyQ0FDcEMsRUFBbUI7Ozs7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNkJBQTRCLFVBQVU7Ozs7Ozs7QUMxRnRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEJBQXlCLDhCQUE4QjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qjs7Ozs7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUE4QyxnQkFBZ0I7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0I7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0RBQXFEO0FBQ3JELE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBOztBQUVBLDJCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7O0FBRUEsNEI7Ozs7Ozs7QUNqREE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7QUFDRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBZ0MsaUJBQWlCO0FBQ2pELE1BQUs7QUFDTCxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsUUFBTyx1Q0FBdUM7QUFDOUM7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxRQUFPLHlDQUF5QztBQUNoRDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBZ0IsaUNBQWlDO0FBQ2pELFlBQVc7QUFDWCxFQUFDOztBQUVEO0FBQ0EsaUJBQWdCLDhCQUE4QjtBQUM5QyxZQUFXO0FBQ1gsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxnQzs7Ozs7O0FDOUhBOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFPOztBQUVQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsSUFB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsU0FBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLGdCQUFlLFNBQVM7QUFDeEI7O0FBRUE7QUFDQTtBQUNBLGdCQUFlLFNBQVM7QUFDeEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBRztBQUNILHFCQUFvQixTQUFTO0FBQzdCO0FB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LElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUMvQyxXQUFJLGlCQUFpQixHQUFHLEtBQUssQ0FBQztBQUM5QixZQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ2hELGFBQUksZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQzlDLDRCQUFpQixHQUFHLElBQUksQ0FBQztBQUN6QixpQkFBTTtVQUNQO1FBQ0Y7QUFDRCxXQUFJLENBQUMsaUJBQWlCLEVBQUU7QUFDdEIsZ0JBQU8sSUFBSSxLQUFLLHVFQUNILGdCQUFnQixDQUFHLENBQUM7UUFDbEM7TUFDRjtJQUNGO0FBQ0QsY0FBVyxFQUFFLGlCQUFVLE1BQU07QUFDN0IsYUFBVSxFQUFFLGlCQUFVLE1BQU07RUFDN0IsQ0FBQzs7QUFFRixhQUFZLENBQUMsWUFBWSxHQUFHO0FBQzFCLFFBQUssRUFBRSxtQkFBTSxZQUFZO0VBQzFCLENBQUM7O3NCQUVhLFlBQVkiLCJmaWxlIjoicmVhY3QtYm9vdHN0cmFwLXRhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUmVhY3RCb290c3RyYXBUYWJsZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJSZWFjdEJvb3RzdHJhcFRhYmxlXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0sIHJvb3RbXCJSZWFjdERPTVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X18pIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGY4Y2NiMzQ5YmMzYjkxMzM1NTZhXG4gKiovIiwiaW1wb3J0IEJvb3RzdHJhcFRhYmxlIGZyb20gJy4vQm9vdHN0cmFwVGFibGUnO1xuaW1wb3J0IFRhYmxlSGVhZGVyQ29sdW1uIGZyb20gJy4vVGFibGVIZWFkZXJDb2x1bW4nO1xuaW1wb3J0IHsgVGFibGVEYXRhU2V0IH0gZnJvbSAnLi9zdG9yZS9UYWJsZURhdGFTdG9yZSc7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICB3aW5kb3cuQm9vdHN0cmFwVGFibGUgPSBCb290c3RyYXBUYWJsZTtcbiAgd2luZG93LlRhYmxlSGVhZGVyQ29sdW1uID0gVGFibGVIZWFkZXJDb2x1bW47XG4gIHdpbmRvdy5UYWJsZURhdGFTZXQgPSBUYWJsZURhdGFTZXQ7XG59XG5leHBvcnQgZGVmYXVsdCB7XG4gIEJvb3RzdHJhcFRhYmxlLFxuICBUYWJsZUhlYWRlckNvbHVtbixcbiAgVGFibGVEYXRhU2V0XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCIvKiBlc2xpbnQgbm8tYWxlcnQ6IDAgKi9cbi8qIGVzbGludCBtYXgtbGVuOiAwICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi9Db25zdCc7XG5pbXBvcnQgVGFibGVIZWFkZXIgZnJvbSAnLi9UYWJsZUhlYWRlcic7XG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJy4vVGFibGVCb2R5JztcbmltcG9ydCBQYWdpbmF0aW9uTGlzdCBmcm9tICcuL3BhZ2luYXRpb24vUGFnaW5hdGlvbkxpc3QnO1xuaW1wb3J0IFRvb2xCYXIgZnJvbSAnLi90b29sYmFyL1Rvb2xCYXInO1xuaW1wb3J0IFRhYmxlRmlsdGVyIGZyb20gJy4vVGFibGVGaWx0ZXInO1xuaW1wb3J0IHsgVGFibGVEYXRhU3RvcmUgfSBmcm9tICcuL3N0b3JlL1RhYmxlRGF0YVN0b3JlJztcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgZXhwb3J0Q1NWIGZyb20gJy4vY3N2X2V4cG9ydF91dGlsJztcbmltcG9ydCB7IEZpbHRlciB9IGZyb20gJy4vRmlsdGVyJztcblxuY2xhc3MgQm9vdHN0cmFwVGFibGUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaXNJRSA9IGZhbHNlO1xuICAgIHRoaXMuX2F0dGFjaENlbGxFZGl0RnVuYygpO1xuICAgIGlmIChVdGlsLmNhblVzZURPTSgpKSB7XG4gICAgICB0aGlzLmlzSUUgPSBkb2N1bWVudC5kb2N1bWVudE1vZGU7XG4gICAgfVxuICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzLnByb3BzLmRhdGEpKSB7XG4gICAgICB0aGlzLnN0b3JlID0gbmV3IFRhYmxlRGF0YVN0b3JlKHRoaXMucHJvcHMuZGF0YS5nZXREYXRhKCkpO1xuICAgICAgdGhpcy5wcm9wcy5kYXRhLmNsZWFyKCk7XG4gICAgICB0aGlzLnByb3BzLmRhdGEub24oJ2NoYW5nZScsIChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmUuc2V0RGF0YShkYXRhKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZGF0YTogdGhpcy5nZXRUYWJsZURhdGEoKVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb3B5ID0gdGhpcy5wcm9wcy5kYXRhLnNsaWNlKCk7XG4gICAgICB0aGlzLnN0b3JlID0gbmV3IFRhYmxlRGF0YVN0b3JlKGNvcHkpO1xuICAgIH1cblxuICAgIHRoaXMuaW5pdFRhYmxlKHRoaXMucHJvcHMpO1xuXG4gICAgaWYgKHRoaXMuZmlsdGVyKSB7XG4gICAgICB0aGlzLmZpbHRlci5vbignb25GaWx0ZXJDaGFuZ2UnLCAoY3VycmVudEZpbHRlcikgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZUZpbHRlckRhdGEoY3VycmVudEZpbHRlcik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RSb3cgJiYgdGhpcy5wcm9wcy5zZWxlY3RSb3cuc2VsZWN0ZWQpIHtcbiAgICAgIGNvbnN0IGNvcHkgPSB0aGlzLnByb3BzLnNlbGVjdFJvdy5zZWxlY3RlZC5zbGljZSgpO1xuICAgICAgdGhpcy5zdG9yZS5zZXRTZWxlY3RlZFJvd0tleShjb3B5KTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YTogdGhpcy5nZXRUYWJsZURhdGEoKSxcbiAgICAgIGN1cnJQYWdlOiB0aGlzLnByb3BzLm9wdGlvbnMucGFnZSB8fCAxLFxuICAgICAgc2l6ZVBlclBhZ2U6IHRoaXMucHJvcHMub3B0aW9ucy5zaXplUGVyUGFnZSB8fCBDb25zdC5TSVpFX1BFUl9QQUdFX0xJU1RbMF0sXG4gICAgICBzZWxlY3RlZFJvd0tleXM6IHRoaXMuc3RvcmUuZ2V0U2VsZWN0ZWRSb3dLZXlzKClcbiAgICB9O1xuICB9XG5cbiAgaW5pdFRhYmxlKHByb3BzKSB7XG4gICAgbGV0IHsga2V5RmllbGQgfSA9IHByb3BzO1xuXG4gICAgY29uc3QgaXNLZXlGaWVsZERlZmluZWQgPSB0eXBlb2Yga2V5RmllbGQgPT09ICdzdHJpbmcnICYmIGtleUZpZWxkLmxlbmd0aDtcbiAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKHByb3BzLmNoaWxkcmVuLCBjb2x1bW4gPT4ge1xuICAgICAgaWYgKGNvbHVtbi5wcm9wcy5pc0tleSkge1xuICAgICAgICBpZiAoa2V5RmllbGQpIHtcbiAgICAgICAgICB0aHJvdyAnRXJyb3IuIE11bHRpcGxlIGtleSBjb2x1bW4gYmUgZGV0ZWN0ZWQgaW4gVGFibGVIZWFkZXJDb2x1bW4uJztcbiAgICAgICAgfVxuICAgICAgICBrZXlGaWVsZCA9IGNvbHVtbi5wcm9wcy5kYXRhRmllbGQ7XG4gICAgICB9XG4gICAgICBpZiAoY29sdW1uLnByb3BzLmZpbHRlcikge1xuICAgICAgICAvLyBhIGNvbHVtbiBjb250YWlucyBhIGZpbHRlclxuICAgICAgICBpZiAoIXRoaXMuZmlsdGVyKSB7XG4gICAgICAgICAgLy8gZmlyc3QgdGltZSBjcmVhdGUgdGhlIGZpbHRlciBvbiB0aGUgQm9vdHN0cmFwVGFibGVcbiAgICAgICAgICB0aGlzLmZpbHRlciA9IG5ldyBGaWx0ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBwYXNzIHRoZSBmaWx0ZXIgdG8gY29sdW1uIHdpdGggZmlsdGVyXG4gICAgICAgIGNvbHVtbi5wcm9wcy5maWx0ZXIuZW1pdHRlciA9IHRoaXMuZmlsdGVyO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgY29sSW5mb3MgPSB0aGlzLmdldENvbHVtbnNEZXNjcmlwdGlvbihwcm9wcykucmVkdWNlKCggcHJldiwgY3VyciApID0+IHtcbiAgICAgIHByZXZbY3Vyci5uYW1lXSA9IGN1cnI7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9LCB7fSk7XG5cbiAgICBpZiAoIWlzS2V5RmllbGREZWZpbmVkICYmICFrZXlGaWVsZCkge1xuICAgICAgdGhyb3cgYEVycm9yLiBObyBhbnkga2V5IGNvbHVtbiBkZWZpbmVkIGluIFRhYmxlSGVhZGVyQ29sdW1uLlxuICAgICAgICAgICAgVXNlICdpc0tleT17dHJ1ZX0nIHRvIHNwZWNpZnkgYSB1bmlxdWUgY29sdW1uIGFmdGVyIHZlcnNpb24gMC41LjQuYDtcbiAgICB9XG5cbiAgICB0aGlzLnN0b3JlLnNldFByb3BzKHtcbiAgICAgIGlzUGFnaW5hdGlvbjogcHJvcHMucGFnaW5hdGlvbixcbiAgICAgIGtleUZpZWxkOiBrZXlGaWVsZCxcbiAgICAgIGNvbEluZm9zOiBjb2xJbmZvcyxcbiAgICAgIG11bHRpQ29sdW1uU2VhcmNoOiBwcm9wcy5tdWx0aUNvbHVtblNlYXJjaCxcbiAgICAgIHJlbW90ZTogdGhpcy5pc1JlbW90ZURhdGFTb3VyY2UoKVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0VGFibGVEYXRhKCkge1xuICAgIGNvbnN0IHsgb3B0aW9ucywgcGFnaW5hdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgaWYgKG9wdGlvbnMuc29ydE5hbWUgJiYgb3B0aW9ucy5zb3J0T3JkZXIpIHtcbiAgICAgIHRoaXMuc3RvcmUuc29ydChvcHRpb25zLnNvcnRPcmRlciwgb3B0aW9ucy5zb3J0TmFtZSk7XG4gICAgfVxuXG4gICAgaWYgKHBhZ2luYXRpb24pIHtcbiAgICAgIGxldCBwYWdlO1xuICAgICAgbGV0IHNpemVQZXJQYWdlO1xuICAgICAgaWYgKHRoaXMuc3RvcmUuaXNDaGFuZ2VkUGFnZSgpKSB7XG4gICAgICAgIHNpemVQZXJQYWdlID0gdGhpcy5zdGF0ZS5zaXplUGVyUGFnZTtcbiAgICAgICAgcGFnZSA9IHRoaXMuc3RhdGUuY3VyclBhZ2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaXplUGVyUGFnZSA9IG9wdGlvbnMuc2l6ZVBlclBhZ2UgfHwgQ29uc3QuU0laRV9QRVJfUEFHRV9MSVNUWzBdO1xuICAgICAgICBwYWdlID0gb3B0aW9ucy5wYWdlIHx8IDE7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSB0aGlzLnN0b3JlLnBhZ2UocGFnZSwgc2l6ZVBlclBhZ2UpLmdldCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSB0aGlzLnN0b3JlLmdldCgpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0Q29sdW1uc0Rlc2NyaXB0aW9uKHsgY2hpbGRyZW4gfSkge1xuICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjb2x1bW4sIGkpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IGNvbHVtbi5wcm9wcy5kYXRhRmllbGQsXG4gICAgICAgIGFsaWduOiBjb2x1bW4ucHJvcHMuZGF0YUFsaWduLFxuICAgICAgICBzb3J0OiBjb2x1bW4ucHJvcHMuZGF0YVNvcnQsXG4gICAgICAgIGZvcm1hdDogY29sdW1uLnByb3BzLmRhdGFGb3JtYXQsXG4gICAgICAgIGZvcm1hdEV4dHJhRGF0YTogY29sdW1uLnByb3BzLmZvcm1hdEV4dHJhRGF0YSxcbiAgICAgICAgZmlsdGVyRm9ybWF0dGVkOiBjb2x1bW4ucHJvcHMuZmlsdGVyRm9ybWF0dGVkLFxuICAgICAgICBlZGl0YWJsZTogY29sdW1uLnByb3BzLmVkaXRhYmxlLFxuICAgICAgICBoaWRkZW46IGNvbHVtbi5wcm9wcy5oaWRkZW4sXG4gICAgICAgIHNlYXJjaGFibGU6IGNvbHVtbi5wcm9wcy5zZWFyY2hhYmxlLFxuICAgICAgICBjbGFzc05hbWU6IGNvbHVtbi5wcm9wcy5jb2x1bW5DbGFzc05hbWUsXG4gICAgICAgIHdpZHRoOiBjb2x1bW4ucHJvcHMud2lkdGgsXG4gICAgICAgIHRleHQ6IGNvbHVtbi5wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgc29ydEZ1bmM6IGNvbHVtbi5wcm9wcy5zb3J0RnVuYyxcbiAgICAgICAgaW5kZXg6IGlcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHRoaXMuaW5pdFRhYmxlKG5leHRQcm9wcyk7XG4gICAgY29uc3QgeyBvcHRpb25zLCBzZWxlY3RSb3cgfSA9IG5leHRQcm9wcztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShuZXh0UHJvcHMuZGF0YSkpIHtcbiAgICAgIHRoaXMuc3RvcmUuc2V0RGF0YShuZXh0UHJvcHMuZGF0YS5zbGljZSgpKTtcbiAgICAgIGxldCBwYWdlID0gb3B0aW9ucy5wYWdlIHx8IHRoaXMuc3RhdGUuY3VyclBhZ2U7XG4gICAgICBjb25zdCBzaXplUGVyUGFnZSA9IG9wdGlvbnMuc2l6ZVBlclBhZ2UgfHwgdGhpcy5zdGF0ZS5zaXplUGVyUGFnZTtcblxuICAgICAgLy8gIzEyNVxuICAgICAgaWYgKCFvcHRpb25zLnBhZ2UgJiZcbiAgICAgICAgcGFnZSA+PSBNYXRoLmNlaWwobmV4dFByb3BzLmRhdGEubGVuZ3RoIC8gc2l6ZVBlclBhZ2UpKSB7XG4gICAgICAgIHBhZ2UgPSAxO1xuICAgICAgfVxuICAgICAgY29uc3Qgc29ydEluZm8gPSB0aGlzLnN0b3JlLmdldFNvcnRJbmZvKCk7XG4gICAgICBjb25zdCBzb3J0RmllbGQgPSBvcHRpb25zLnNvcnROYW1lIHx8IChzb3J0SW5mbyA/IHNvcnRJbmZvLnNvcnRGaWVsZCA6IHVuZGVmaW5lZCk7XG4gICAgICBjb25zdCBzb3J0T3JkZXIgPSBvcHRpb25zLnNvcnRPcmRlciB8fCAoc29ydEluZm8gPyBzb3J0SW5mby5vcmRlciA6IHVuZGVmaW5lZCk7XG4gICAgICBpZiAoc29ydEZpZWxkICYmIHNvcnRPcmRlcikgdGhpcy5zdG9yZS5zb3J0KHNvcnRPcmRlciwgc29ydEZpZWxkKTtcbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnN0b3JlLnBhZ2UocGFnZSwgc2l6ZVBlclBhZ2UpLmdldCgpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRhdGEsXG4gICAgICAgIGN1cnJQYWdlOiBwYWdlLFxuICAgICAgICBzaXplUGVyUGFnZVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChzZWxlY3RSb3cgJiYgc2VsZWN0Um93LnNlbGVjdGVkKSB7XG4gICAgICAvLyBzZXQgZGVmYXVsdCBzZWxlY3Qgcm93cyB0byBzdG9yZS5cbiAgICAgIGNvbnN0IGNvcHkgPSBzZWxlY3RSb3cuc2VsZWN0ZWQuc2xpY2UoKTtcbiAgICAgIHRoaXMuc3RvcmUuc2V0U2VsZWN0ZWRSb3dLZXkoY29weSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2VsZWN0ZWRSb3dLZXlzOiBjb3B5XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl9hZGp1c3RUYWJsZSgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9hZGp1c3RUYWJsZSk7XG4gICAgdGhpcy5yZWZzLmJvZHkucmVmcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsSGVhZGVyKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9hZGp1c3RUYWJsZSk7XG4gICAgdGhpcy5yZWZzLmJvZHkucmVmcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsSGVhZGVyKTtcbiAgICBpZiAodGhpcy5maWx0ZXIpIHtcbiAgICAgIHRoaXMuZmlsdGVyLnJlbW92ZUFsbExpc3RlbmVycygnb25GaWx0ZXJDaGFuZ2UnKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5fYWRqdXN0VGFibGUoKTtcbiAgICB0aGlzLl9hdHRhY2hDZWxsRWRpdEZ1bmMoKTtcbiAgICBpZiAodGhpcy5wcm9wcy5vcHRpb25zLmFmdGVyVGFibGVDb21wbGV0ZSkge1xuICAgICAgdGhpcy5wcm9wcy5vcHRpb25zLmFmdGVyVGFibGVDb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIF9hdHRhY2hDZWxsRWRpdEZ1bmMoKSB7XG4gICAgY29uc3QgeyBjZWxsRWRpdCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoY2VsbEVkaXQpIHtcbiAgICAgIHRoaXMucHJvcHMuY2VsbEVkaXQuX19vbkNvbXBsZXRlRWRpdF9fID0gdGhpcy5oYW5kbGVFZGl0Q2VsbC5iaW5kKHRoaXMpO1xuICAgICAgaWYgKGNlbGxFZGl0Lm1vZGUgIT09IENvbnN0LkNFTExfRURJVF9OT05FKSB7XG4gICAgICAgIHRoaXMucHJvcHMuc2VsZWN0Um93LmNsaWNrVG9TZWxlY3QgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGluIHRoZSBjdXJyZW50IGNvbmZpZ3VyYXRpb24sXG4gICAqIHRoZSBkYXRhZ3JpZCBzaG91bGQgbG9hZCBpdHMgZGF0YSByZW1vdGVseS5cbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgW3Byb3BzXSBPcHRpb25hbC4gSWYgbm90IGdpdmVuLCB0aGlzLnByb3BzIHdpbGwgYmUgdXNlZFxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgaXNSZW1vdGVEYXRhU291cmNlKHByb3BzKSB7XG4gICAgcmV0dXJuIChwcm9wcyB8fCB0aGlzLnByb3BzKS5yZW1vdGU7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0LFxuICAgICAgbWF4SGVpZ2h0OiB0aGlzLnByb3BzLm1heEhlaWdodFxuICAgIH07XG5cbiAgICBjb25zdCBjb2x1bW5zID0gdGhpcy5nZXRDb2x1bW5zRGVzY3JpcHRpb24odGhpcy5wcm9wcyk7XG4gICAgY29uc3Qgc29ydEluZm8gPSB0aGlzLnN0b3JlLmdldFNvcnRJbmZvKCk7XG4gICAgY29uc3QgcGFnaW5hdGlvbiA9IHRoaXMucmVuZGVyUGFnaW5hdGlvbigpO1xuICAgIGNvbnN0IHRvb2xCYXIgPSB0aGlzLnJlbmRlclRvb2xCYXIoKTtcbiAgICBjb25zdCB0YWJsZUZpbHRlciA9IHRoaXMucmVuZGVyVGFibGVGaWx0ZXIoY29sdW1ucyk7XG4gICAgY29uc3QgaXNTZWxlY3RBbGwgPSB0aGlzLmlzU2VsZWN0QWxsKCk7XG4gICAgbGV0IHNvcnRJbmRpY2F0b3IgPSB0aGlzLnByb3BzLm9wdGlvbnMuc29ydEluZGljYXRvcjtcbiAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMub3B0aW9ucy5zb3J0SW5kaWNhdG9yID09PSAndW5kZWZpbmVkJykgc29ydEluZGljYXRvciA9IHRydWU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWFjdC1icy10YWJsZS1jb250YWluZXInPlxuICAgICAgICB7IHRvb2xCYXIgfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVhY3QtYnMtdGFibGUnIHJlZj0ndGFibGUnIHN0eWxlPXsgc3R5bGUgfVxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsgdGhpcy5oYW5kbGVNb3VzZUVudGVyIH1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17IHRoaXMuaGFuZGxlTW91c2VMZWF2ZSB9PlxuICAgICAgICAgIDxUYWJsZUhlYWRlclxuICAgICAgICAgICAgcmVmPSdoZWFkZXInXG4gICAgICAgICAgICByb3dTZWxlY3RUeXBlPXsgdGhpcy5wcm9wcy5zZWxlY3RSb3cubW9kZSB9XG4gICAgICAgICAgICBoaWRlU2VsZWN0Q29sdW1uPXsgdGhpcy5wcm9wcy5zZWxlY3RSb3cuaGlkZVNlbGVjdENvbHVtbiB9XG4gICAgICAgICAgICBzb3J0TmFtZT17IHNvcnRJbmZvID8gc29ydEluZm8uc29ydEZpZWxkIDogdW5kZWZpbmVkIH1cbiAgICAgICAgICAgIHNvcnRPcmRlcj17IHNvcnRJbmZvID8gc29ydEluZm8ub3JkZXIgOiB1bmRlZmluZWQgfVxuICAgICAgICAgICAgc29ydEluZGljYXRvcj17IHNvcnRJbmRpY2F0b3IgfVxuICAgICAgICAgICAgb25Tb3J0PXsgdGhpcy5oYW5kbGVTb3J0IH1cbiAgICAgICAgICAgIG9uU2VsZWN0QWxsUm93PXsgdGhpcy5oYW5kbGVTZWxlY3RBbGxSb3cgfVxuICAgICAgICAgICAgYm9yZGVyZWQ9eyB0aGlzLnByb3BzLmJvcmRlcmVkIH1cbiAgICAgICAgICAgIGNvbmRlbnNlZD17IHRoaXMucHJvcHMuY29uZGVuc2VkIH1cbiAgICAgICAgICAgIGlzRmlsdGVyZWQ9eyB0aGlzLmZpbHRlciA/IHRydWUgOiBmYWxzZSB9XG4gICAgICAgICAgICBpc1NlbGVjdEFsbD17IGlzU2VsZWN0QWxsIH0+XG4gICAgICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgPFRhYmxlQm9keSByZWY9J2JvZHknXG4gICAgICAgICAgICBzdHlsZT17IHN0eWxlIH1cbiAgICAgICAgICAgIGRhdGE9eyB0aGlzLnN0YXRlLmRhdGEgfVxuICAgICAgICAgICAgY29sdW1ucz17IGNvbHVtbnMgfVxuICAgICAgICAgICAgdHJDbGFzc05hbWU9eyB0aGlzLnByb3BzLnRyQ2xhc3NOYW1lIH1cbiAgICAgICAgICAgIHN0cmlwZWQ9eyB0aGlzLnByb3BzLnN0cmlwZWQgfVxuICAgICAgICAgICAgYm9yZGVyZWQ9eyB0aGlzLnByb3BzLmJvcmRlcmVkIH1cbiAgICAgICAgICAgIGhvdmVyPXsgdGhpcy5wcm9wcy5ob3ZlciB9XG4gICAgICAgICAgICBrZXlGaWVsZD17IHRoaXMuc3RvcmUuZ2V0S2V5RmllbGQoKSB9XG4gICAgICAgICAgICBjb25kZW5zZWQ9eyB0aGlzLnByb3BzLmNvbmRlbnNlZCB9XG4gICAgICAgICAgICBzZWxlY3RSb3c9eyB0aGlzLnByb3BzLnNlbGVjdFJvdyB9XG4gICAgICAgICAgICBjZWxsRWRpdD17IHRoaXMucHJvcHMuY2VsbEVkaXQgfVxuICAgICAgICAgICAgc2VsZWN0ZWRSb3dLZXlzPXsgdGhpcy5zdGF0ZS5zZWxlY3RlZFJvd0tleXMgfVxuICAgICAgICAgICAgb25Sb3dDbGljaz17IHRoaXMuaGFuZGxlUm93Q2xpY2sgfVxuICAgICAgICAgICAgb25Sb3dNb3VzZU92ZXI9eyB0aGlzLmhhbmRsZVJvd01vdXNlT3ZlciB9XG4gICAgICAgICAgICBvblJvd01vdXNlT3V0PXsgdGhpcy5oYW5kbGVSb3dNb3VzZU91dCB9XG4gICAgICAgICAgICBvblNlbGVjdFJvdz17IHRoaXMuaGFuZGxlU2VsZWN0Um93IH1cbiAgICAgICAgICAgIG5vRGF0YVRleHQ9eyB0aGlzLnByb3BzLm9wdGlvbnMubm9EYXRhVGV4dCB9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7IHRhYmxlRmlsdGVyIH1cbiAgICAgICAgeyBwYWdpbmF0aW9uIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBpc1NlbGVjdEFsbCgpIHtcbiAgICBjb25zdCBkZWZhdWx0U2VsZWN0Um93S2V5cyA9IHRoaXMuc3RvcmUuZ2V0U2VsZWN0ZWRSb3dLZXlzKCk7XG4gICAgY29uc3QgYWxsUm93S2V5cyA9IHRoaXMuc3RvcmUuZ2V0QWxsUm93a2V5KCk7XG4gICAgaWYgKGRlZmF1bHRTZWxlY3RSb3dLZXlzLmxlbmd0aCAhPT0gYWxsUm93S2V5cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0U2VsZWN0Um93S2V5cy5sZW5ndGggPT09IDAgPyBmYWxzZSA6ICdpbmRldGVybWluYXRlJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgY2xlYW5TZWxlY3RlZCgpIHtcbiAgICB0aGlzLnN0b3JlLnNldFNlbGVjdGVkUm93S2V5KFtdKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkUm93S2V5czogW11cbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVNvcnQgPSAob3JkZXIsIHNvcnRGaWVsZCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9wdGlvbnMub25Tb3J0Q2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9wdGlvbnMub25Tb3J0Q2hhbmdlKHNvcnRGaWVsZCwgb3JkZXIsIHRoaXMucHJvcHMpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuc3RvcmUuc29ydChvcmRlciwgc29ydEZpZWxkKS5nZXQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRhdGE6IHJlc3VsdFxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlUGFnaW5hdGlvbkRhdGEgPSAocGFnZSwgc2l6ZVBlclBhZ2UpID0+IHtcbiAgICBjb25zdCB7IG9uUGFnZUNoYW5nZSB9ID0gdGhpcy5wcm9wcy5vcHRpb25zO1xuICAgIGlmIChvblBhZ2VDaGFuZ2UpIHtcbiAgICAgIG9uUGFnZUNoYW5nZShwYWdlLCBzaXplUGVyUGFnZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNSZW1vdGVEYXRhU291cmNlKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnN0b3JlLnBhZ2UocGFnZSwgc2l6ZVBlclBhZ2UpLmdldCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF0YTogcmVzdWx0LFxuICAgICAgY3VyclBhZ2U6IHBhZ2UsXG4gICAgICBzaXplUGVyUGFnZVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5vcHRpb25zLm9uTW91c2VMZWF2ZSkge1xuICAgICAgdGhpcy5wcm9wcy5vcHRpb25zLm9uTW91c2VMZWF2ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU1vdXNlRW50ZXIgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub3B0aW9ucy5vbk1vdXNlRW50ZXIpIHtcbiAgICAgIHRoaXMucHJvcHMub3B0aW9ucy5vbk1vdXNlRW50ZXIoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVSb3dNb3VzZU91dCA9IChyb3csIGV2ZW50KSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub3B0aW9ucy5vblJvd01vdXNlT3V0KSB7XG4gICAgICB0aGlzLnByb3BzLm9wdGlvbnMub25Sb3dNb3VzZU91dChyb3csIGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVSb3dNb3VzZU92ZXIgPSAocm93LCBldmVudCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9wdGlvbnMub25Sb3dNb3VzZU92ZXIpIHtcbiAgICAgIHRoaXMucHJvcHMub3B0aW9ucy5vblJvd01vdXNlT3Zlcihyb3csIGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVSb3dDbGljayA9IHJvdyA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub3B0aW9ucy5vblJvd0NsaWNrKSB7XG4gICAgICB0aGlzLnByb3BzLm9wdGlvbnMub25Sb3dDbGljayhyb3cpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVNlbGVjdEFsbFJvdyA9IGUgPT4ge1xuICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBlLmN1cnJlbnRUYXJnZXQuY2hlY2tlZDtcbiAgICBsZXQgc2VsZWN0ZWRSb3dLZXlzID0gW107XG4gICAgbGV0IHJlc3VsdCA9IHRydWU7XG4gICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0Um93Lm9uU2VsZWN0QWxsKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLnByb3BzLnNlbGVjdFJvdy5vblNlbGVjdEFsbChpc1NlbGVjdGVkLFxuICAgICAgICBpc1NlbGVjdGVkID8gdGhpcy5zdG9yZS5nZXQoKSA6IFtdKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ3VuZGVmaW5lZCcgfHwgcmVzdWx0ICE9PSBmYWxzZSkge1xuICAgICAgaWYgKGlzU2VsZWN0ZWQpIHtcbiAgICAgICAgc2VsZWN0ZWRSb3dLZXlzID0gdGhpcy5zdG9yZS5nZXRBbGxSb3drZXkoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdG9yZS5zZXRTZWxlY3RlZFJvd0tleShzZWxlY3RlZFJvd0tleXMpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkUm93S2V5cyB9KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTaG93T25seVNlbGVjdGVkID0gKCkgPT4ge1xuICAgIHRoaXMuc3RvcmUuaWdub3JlTm9uU2VsZWN0ZWQoKTtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGlmICh0aGlzLnByb3BzLnBhZ2luYXRpb24pIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuc3RvcmUucGFnZSgxLCB0aGlzLnN0YXRlLnNpemVQZXJQYWdlKS5nZXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gdGhpcy5zdG9yZS5nZXQoKTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhOiByZXN1bHQsXG4gICAgICBjdXJyUGFnZTogMVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlU2VsZWN0Um93ID0gKHJvdywgaXNTZWxlY3RlZCkgPT4ge1xuICAgIGxldCByZXN1bHQgPSB0cnVlO1xuICAgIGxldCBjdXJyU2VsZWN0ZWQgPSB0aGlzLnN0b3JlLmdldFNlbGVjdGVkUm93S2V5cygpO1xuICAgIGNvbnN0IHJvd0tleSA9IHJvd1sgdGhpcy5zdG9yZS5nZXRLZXlGaWVsZCgpIF07XG4gICAgY29uc3QgeyBzZWxlY3RSb3cgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHNlbGVjdFJvdy5vblNlbGVjdCkge1xuICAgICAgcmVzdWx0ID0gc2VsZWN0Um93Lm9uU2VsZWN0KHJvdywgaXNTZWxlY3RlZCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICd1bmRlZmluZWQnIHx8IHJlc3VsdCAhPT0gZmFsc2UpIHtcbiAgICAgIGlmIChzZWxlY3RSb3cubW9kZSA9PT0gQ29uc3QuUk9XX1NFTEVDVF9TSU5HTEUpIHtcbiAgICAgICAgY3VyclNlbGVjdGVkID0gaXNTZWxlY3RlZCA/IFsgcm93S2V5IF0gOiBbXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpc1NlbGVjdGVkKSB7XG4gICAgICAgICAgY3VyclNlbGVjdGVkLnB1c2gocm93S2V5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdXJyU2VsZWN0ZWQgPSBjdXJyU2VsZWN0ZWQuZmlsdGVyKGtleSA9PiByb3dLZXkgIT09IGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zdG9yZS5zZXRTZWxlY3RlZFJvd0tleShjdXJyU2VsZWN0ZWQpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGVkUm93S2V5czogY3VyclNlbGVjdGVkXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVFZGl0Q2VsbChuZXdWYWwsIHJvd0luZGV4LCBjb2xJbmRleCkge1xuICAgIGNvbnN0IHsgYmVmb3JlU2F2ZUNlbGwsIGFmdGVyU2F2ZUNlbGwgfSA9IHRoaXMucHJvcHMuY2VsbEVkaXQ7XG4gICAgbGV0IGZpZWxkTmFtZTtcbiAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKHRoaXMucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uKGNvbHVtbiwgaSkge1xuICAgICAgaWYgKGkgPT09IGNvbEluZGV4KSB7XG4gICAgICAgIGZpZWxkTmFtZSA9IGNvbHVtbi5wcm9wcy5kYXRhRmllbGQ7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChiZWZvcmVTYXZlQ2VsbCkge1xuICAgICAgY29uc3QgaXNWYWxpZCA9IGJlZm9yZVNhdmVDZWxsKHRoaXMuc3RhdGUuZGF0YVtyb3dJbmRleF0sIGZpZWxkTmFtZSwgbmV3VmFsKTtcbiAgICAgIGlmICghaXNWYWxpZCAmJiB0eXBlb2YgaXNWYWxpZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZGF0YTogdGhpcy5zdG9yZS5nZXQoKVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuc3RvcmUuZWRpdChuZXdWYWwsIHJvd0luZGV4LCBmaWVsZE5hbWUpLmdldCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF0YTogcmVzdWx0XG4gICAgfSk7XG5cbiAgICBpZiAoYWZ0ZXJTYXZlQ2VsbCkge1xuICAgICAgYWZ0ZXJTYXZlQ2VsbCh0aGlzLnN0YXRlLmRhdGFbcm93SW5kZXhdLCBmaWVsZE5hbWUsIG5ld1ZhbCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQWRkUm93QXRCZWdpbihuZXdPYmopIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5zdG9yZS5hZGRBdEJlZ2luKG5ld09iaik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIHRoaXMuX2hhbmRsZUFmdGVyQWRkaW5nUm93KG5ld09iaik7XG4gIH1cblxuICBoYW5kbGVBZGRSb3cgPSBuZXdPYmogPT4ge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnN0b3JlLmFkZChuZXdPYmopO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICB0aGlzLl9oYW5kbGVBZnRlckFkZGluZ1JvdyhuZXdPYmopO1xuICB9XG5cbiAgZ2V0U2l6ZVBlclBhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuc2l6ZVBlclBhZ2U7XG4gIH1cblxuICBnZXRDdXJyZW50UGFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5jdXJyUGFnZTtcbiAgfVxuXG4gIGhhbmRsZURyb3BSb3cgPSByb3dLZXlzID0+IHtcbiAgICBjb25zdCBkcm9wUm93S2V5cyA9IHJvd0tleXMgPyByb3dLZXlzIDogdGhpcy5zdG9yZS5nZXRTZWxlY3RlZFJvd0tleXMoKTtcbiAgICAvLyBhZGQgY29uZmlybSBiZWZvcmUgdGhlIGRlbGV0ZSBhY3Rpb24gaWYgdGhhdCBvcHRpb24gaXMgc2V0LlxuICAgIGlmIChkcm9wUm93S2V5cyAmJiBkcm9wUm93S2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vcHRpb25zLmhhbmRsZUNvbmZpcm1EZWxldGVSb3cpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vcHRpb25zLmhhbmRsZUNvbmZpcm1EZWxldGVSb3coKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZGVsZXRlUm93KGRyb3BSb3dLZXlzKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB3YW50IGRlbGV0ZT8nKSkge1xuICAgICAgICB0aGlzLmRlbGV0ZVJvdyhkcm9wUm93S2V5cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGVsZXRlUm93KGRyb3BSb3dLZXlzKSB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICB0aGlzLnN0b3JlLnJlbW92ZShkcm9wUm93S2V5cyk7ICAvLyByZW1vdmUgc2VsZWN0ZWQgUm93XG4gICAgdGhpcy5zdG9yZS5zZXRTZWxlY3RlZFJvd0tleShbXSk7ICAvLyBjbGVhciBzZWxlY3RlZCByb3cga2V5XG5cbiAgICBpZiAodGhpcy5wcm9wcy5wYWdpbmF0aW9uKSB7XG4gICAgICBjb25zdCB7IHNpemVQZXJQYWdlIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgY29uc3QgY3Vyckxhc3RQYWdlID0gTWF0aC5jZWlsKHRoaXMuc3RvcmUuZ2V0RGF0YU51bSgpIC8gc2l6ZVBlclBhZ2UpO1xuICAgICAgbGV0IHsgY3VyclBhZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgICBpZiAoY3VyclBhZ2UgPiBjdXJyTGFzdFBhZ2UpIGN1cnJQYWdlID0gY3Vyckxhc3RQYWdlO1xuICAgICAgcmVzdWx0ID0gdGhpcy5zdG9yZS5wYWdlKGN1cnJQYWdlLCBzaXplUGVyUGFnZSkuZ2V0KCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGF0YTogcmVzdWx0LFxuICAgICAgICBzZWxlY3RlZFJvd0tleXM6IHRoaXMuc3RvcmUuZ2V0U2VsZWN0ZWRSb3dLZXlzKCksXG4gICAgICAgIGN1cnJQYWdlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gdGhpcy5zdG9yZS5nZXQoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkYXRhOiByZXN1bHQsXG4gICAgICAgIHNlbGVjdGVkUm93S2V5czogdGhpcy5zdG9yZS5nZXRTZWxlY3RlZFJvd0tleXMoKVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm9wdGlvbnMuYWZ0ZXJEZWxldGVSb3cpIHtcbiAgICAgIHRoaXMucHJvcHMub3B0aW9ucy5hZnRlckRlbGV0ZVJvdyhkcm9wUm93S2V5cyk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRmlsdGVyRGF0YSA9IGZpbHRlck9iaiA9PiB7XG4gICAgdGhpcy5zdG9yZS5maWx0ZXIoZmlsdGVyT2JqKTtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGlmICh0aGlzLnByb3BzLnBhZ2luYXRpb24pIHtcbiAgICAgIGNvbnN0IHsgc2l6ZVBlclBhZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgICByZXN1bHQgPSB0aGlzLnN0b3JlLnBhZ2UoMSwgc2l6ZVBlclBhZ2UpLmdldCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSB0aGlzLnN0b3JlLmdldCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5vcHRpb25zLmFmdGVyQ29sdW1uRmlsdGVyKSB7XG4gICAgICB0aGlzLnByb3BzLm9wdGlvbnMuYWZ0ZXJDb2x1bW5GaWx0ZXIoZmlsdGVyT2JqLFxuICAgICAgICB0aGlzLnN0b3JlLmdldERhdGFJZ25vcmluZ1BhZ2luYXRpb24oKSk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF0YTogcmVzdWx0LFxuICAgICAgY3VyclBhZ2U6IDFcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUV4cG9ydENTViA9ICgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnN0b3JlLmdldERhdGFJZ25vcmluZ1BhZ2luYXRpb24oKTtcbiAgICBjb25zdCBrZXlzID0gW107XG4gICAgdGhpcy5wcm9wcy5jaGlsZHJlbi5tYXAoZnVuY3Rpb24oY29sdW1uKSB7XG4gICAgICBpZiAoY29sdW1uLnByb3BzLmhpZGRlbiA9PT0gZmFsc2UpIHtcbiAgICAgICAga2V5cy5wdXNoKGNvbHVtbi5wcm9wcy5kYXRhRmllbGQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGV4cG9ydENTVihyZXN1bHQsIGtleXMsIHRoaXMucHJvcHMuY3N2RmlsZU5hbWUpO1xuICB9XG5cbiAgaGFuZGxlU2VhcmNoID0gc2VhcmNoVGV4dCA9PiB7XG4gICAgdGhpcy5zdG9yZS5zZWFyY2goc2VhcmNoVGV4dCk7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBpZiAodGhpcy5wcm9wcy5wYWdpbmF0aW9uKSB7XG4gICAgICBjb25zdCB7IHNpemVQZXJQYWdlIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgcmVzdWx0ID0gdGhpcy5zdG9yZS5wYWdlKDEsIHNpemVQZXJQYWdlKS5nZXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gdGhpcy5zdG9yZS5nZXQoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMub3B0aW9ucy5hZnRlclNlYXJjaCkge1xuICAgICAgdGhpcy5wcm9wcy5vcHRpb25zLmFmdGVyU2VhcmNoKHNlYXJjaFRleHQsXG4gICAgICAgIHRoaXMuc3RvcmUuZ2V0RGF0YUlnbm9yaW5nUGFnaW5hdGlvbigpKTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhOiByZXN1bHQsXG4gICAgICBjdXJyUGFnZTogMVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyUGFnaW5hdGlvbigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5wYWdpbmF0aW9uKSB7XG4gICAgICBsZXQgZGF0YVNpemU7XG4gICAgICBpZiAodGhpcy5pc1JlbW90ZURhdGFTb3VyY2UoKSkge1xuICAgICAgICBkYXRhU2l6ZSA9IHRoaXMucHJvcHMuZmV0Y2hJbmZvLmRhdGFUb3RhbFNpemU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhU2l6ZSA9IHRoaXMuc3RvcmUuZ2V0RGF0YU51bSgpO1xuICAgICAgfVxuICAgICAgY29uc3QgeyBvcHRpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlYWN0LWJzLXRhYmxlLXBhZ2luYXRpb24nPlxuICAgICAgICAgIDxQYWdpbmF0aW9uTGlzdFxuICAgICAgICAgICAgcmVmPSdwYWdpbmF0aW9uJ1xuICAgICAgICAgICAgY3VyclBhZ2U9eyB0aGlzLnN0YXRlLmN1cnJQYWdlIH1cbiAgICAgICAgICAgIGNoYW5nZVBhZ2U9eyB0aGlzLmhhbmRsZVBhZ2luYXRpb25EYXRhIH1cbiAgICAgICAgICAgIHNpemVQZXJQYWdlPXsgdGhpcy5zdGF0ZS5zaXplUGVyUGFnZSB9XG4gICAgICAgICAgICBzaXplUGVyUGFnZUxpc3Q9eyBvcHRpb25zLnNpemVQZXJQYWdlTGlzdCB8fCBDb25zdC5TSVpFX1BFUl9QQUdFX0xJU1QgfVxuICAgICAgICAgICAgcGFnaW5hdGlvblNpemU9eyBvcHRpb25zLnBhZ2luYXRpb25TaXplIHx8IENvbnN0LlBBR0lOQVRJT05fU0laRSB9XG4gICAgICAgICAgICByZW1vdGU9eyB0aGlzLmlzUmVtb3RlRGF0YVNvdXJjZSgpIH1cbiAgICAgICAgICAgIGRhdGFTaXplPXsgZGF0YVNpemUgfVxuICAgICAgICAgICAgb25TaXplUGVyUGFnZUxpc3Q9eyBvcHRpb25zLm9uU2l6ZVBlclBhZ2VMaXN0IH1cbiAgICAgICAgICAgIHByZVBhZ2U9eyBvcHRpb25zLnByZVBhZ2UgfHwgQ29uc3QuUFJFX1BBR0UgfVxuICAgICAgICAgICAgbmV4dFBhZ2U9eyBvcHRpb25zLm5leHRQYWdlIHx8IENvbnN0Lk5FWFRfUEFHRSB9XG4gICAgICAgICAgICBmaXJzdFBhZ2U9eyBvcHRpb25zLmZpcnN0UGFnZSB8fCBDb25zdC5GSVJTVF9QQUdFIH1cbiAgICAgICAgICAgIGxhc3RQYWdlPXsgb3B0aW9ucy5sYXN0UGFnZSB8fCBDb25zdC5MQVNUX1BBR0UgfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmVuZGVyVG9vbEJhcigpIHtcbiAgICBjb25zdCB7IHNlbGVjdFJvdywgaW5zZXJ0Um93LCBkZWxldGVSb3csIHNlYXJjaCwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZW5hYmxlU2hvd09ubHlTZWxlY3RlZCA9IHNlbGVjdFJvdyAmJiBzZWxlY3RSb3cuc2hvd09ubHlTZWxlY3RlZDtcbiAgICBpZiAoZW5hYmxlU2hvd09ubHlTZWxlY3RlZFxuICAgICAgICB8fCBpbnNlcnRSb3dcbiAgICAgICAgfHwgZGVsZXRlUm93XG4gICAgICAgIHx8IHNlYXJjaFxuICAgICAgICB8fCB0aGlzLnByb3BzLmV4cG9ydENTVikge1xuICAgICAgbGV0IGNvbHVtbnM7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgY29sdW1ucyA9IGNoaWxkcmVuLm1hcChmdW5jdGlvbihjb2x1bW4pIHtcbiAgICAgICAgICBjb25zdCB7IHByb3BzIH0gPSBjb2x1bW47XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IHByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgICAgZmllbGQ6IHByb3BzLmRhdGFGaWVsZCxcbiAgICAgICAgICAgIC8vIHdoZW4geW91IHdhbnQgc2FtZSBhdXRvIGdlbmVyYXRlIHZhbHVlIGFuZCBub3QgYWxsb3cgZWRpdCwgZXhhbXBsZSBJRCBmaWVsZFxuICAgICAgICAgICAgYXV0b1ZhbHVlOiBwcm9wcy5hdXRvVmFsdWUgfHwgZmFsc2UsXG4gICAgICAgICAgICAvLyBmb3IgY3JlYXRlIGVkaXRvciwgbm8gcGFyYW1zIGZvciBjb2x1bW4uZWRpdGFibGUoKSBpbmRpY2F0ZSB0aGF0IGVkaXRvciBmb3IgbmV3IHJvd1xuICAgICAgICAgICAgZWRpdGFibGU6IHByb3BzLmVkaXRhYmxlICYmICh0eXBlb2YgcHJvcHMuZWRpdGFibGUgPT09ICdmdW5jdGlvbicpID8gcHJvcHMuZWRpdGFibGUoKSA6IHByb3BzLmVkaXRhYmxlLFxuICAgICAgICAgICAgZm9ybWF0OiBwcm9wcy5kYXRhRm9ybWF0ID8gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb3BzLmRhdGFGb3JtYXQodmFsdWUsIG51bGwsIHByb3BzLmZvcm1hdEV4dHJhRGF0YSkucmVwbGFjZSgvPC4qPz4vZywgJycpO1xuICAgICAgICAgICAgfSA6IGZhbHNlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2x1bW5zID0gWyB7XG4gICAgICAgICAgbmFtZTogY2hpbGRyZW4ucHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgZmllbGQ6IGNoaWxkcmVuLnByb3BzLmRhdGFGaWVsZCxcbiAgICAgICAgICBlZGl0YWJsZTogY2hpbGRyZW4ucHJvcHMuZWRpdGFibGVcbiAgICAgICAgfSBdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlYWN0LWJzLXRhYmxlLXRvb2wtYmFyJz5cbiAgICAgICAgICA8VG9vbEJhclxuICAgICAgICAgICAgY2xlYXJTZWFyY2g9eyB0aGlzLnByb3BzLm9wdGlvbnMuY2xlYXJTZWFyY2ggfVxuICAgICAgICAgICAgZW5hYmxlSW5zZXJ0PXsgaW5zZXJ0Um93IH1cbiAgICAgICAgICAgIGVuYWJsZURlbGV0ZT17IGRlbGV0ZVJvdyB9XG4gICAgICAgICAgICBlbmFibGVTZWFyY2g9eyBzZWFyY2ggfVxuICAgICAgICAgICAgZW5hYmxlRXhwb3J0Q1NWPXsgdGhpcy5wcm9wcy5leHBvcnRDU1YgfVxuICAgICAgICAgICAgZW5hYmxlU2hvd09ubHlTZWxlY3RlZD17IGVuYWJsZVNob3dPbmx5U2VsZWN0ZWQgfVxuICAgICAgICAgICAgY29sdW1ucz17IGNvbHVtbnMgfVxuICAgICAgICAgICAgc2VhcmNoUGxhY2Vob2xkZXI9eyB0aGlzLnByb3BzLnNlYXJjaFBsYWNlaG9sZGVyIH1cbiAgICAgICAgICAgIG9uQWRkUm93PXsgdGhpcy5oYW5kbGVBZGRSb3cgfVxuICAgICAgICAgICAgb25Ecm9wUm93PXsgdGhpcy5oYW5kbGVEcm9wUm93IH1cbiAgICAgICAgICAgIG9uU2VhcmNoPXsgdGhpcy5oYW5kbGVTZWFyY2ggfVxuICAgICAgICAgICAgb25FeHBvcnRDU1Y9eyB0aGlzLmhhbmRsZUV4cG9ydENTViB9XG4gICAgICAgICAgICBvblNob3dPbmx5U2VsZWN0ZWQ9eyB0aGlzLmhhbmRsZVNob3dPbmx5U2VsZWN0ZWQgfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyVGFibGVGaWx0ZXIoY29sdW1ucykge1xuICAgIGlmICh0aGlzLnByb3BzLmNvbHVtbkZpbHRlcikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRhYmxlRmlsdGVyIGNvbHVtbnM9eyBjb2x1bW5zIH1cbiAgICAgICAgICByb3dTZWxlY3RUeXBlPXsgdGhpcy5wcm9wcy5zZWxlY3RSb3cubW9kZSB9XG4gICAgICAgICAgb25GaWx0ZXI9eyB0aGlzLmhhbmRsZUZpbHRlckRhdGEgfS8+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBfc2Nyb2xsSGVhZGVyID0gKGUpID0+IHtcbiAgICB0aGlzLnJlZnMuaGVhZGVyLnJlZnMuY29udGFpbmVyLnNjcm9sbExlZnQgPSBlLmN1cnJlbnRUYXJnZXQuc2Nyb2xsTGVmdDtcbiAgfVxuXG4gIF9hZGp1c3RUYWJsZSA9ICgpID0+IHtcbiAgICB0aGlzLl9hZGp1c3RIZWFkZXJXaWR0aCgpO1xuICAgIHRoaXMuX2FkanVzdEhlaWdodCgpO1xuICB9XG5cbiAgX2FkanVzdEhlYWRlcldpZHRoID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMucmVmcy5oZWFkZXIucmVmcy5oZWFkZXI7XG4gICAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gdGhpcy5yZWZzLmhlYWRlci5yZWZzLmNvbnRhaW5lcjtcbiAgICBjb25zdCB0Ym9keSA9IHRoaXMucmVmcy5ib2R5LnJlZnMudGJvZHk7XG4gICAgY29uc3QgZmlyc3RSb3cgPSB0Ym9keS5jaGlsZE5vZGVzWzBdO1xuICAgIGNvbnN0IGlzU2Nyb2xsID0gaGVhZGVyQ29udGFpbmVyLm9mZnNldFdpZHRoICE9PSB0Ym9keS5wYXJlbnROb2RlLm9mZnNldFdpZHRoO1xuICAgIGNvbnN0IHNjcm9sbEJhcldpZHRoID0gaXNTY3JvbGwgPyBVdGlsLmdldFNjcm9sbEJhcldpZHRoKCkgOiAwO1xuICAgIGlmIChmaXJzdFJvdyAmJiB0aGlzLnN0b3JlLmdldERhdGFOdW0oKSkge1xuICAgICAgY29uc3QgY2VsbHMgPSBmaXJzdFJvdy5jaGlsZE5vZGVzO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjZWxsID0gY2VsbHNbaV07XG4gICAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGNlbGwpO1xuICAgICAgICBsZXQgd2lkdGggPSBwYXJzZUZsb2F0KGNvbXB1dGVkU3R5bGUud2lkdGgucmVwbGFjZSgncHgnLCAnJykpO1xuICAgICAgICBpZiAodGhpcy5pc0lFKSB7XG4gICAgICAgICAgY29uc3QgcGFkZGluZ0xlZnRXaWR0aCA9IHBhcnNlRmxvYXQoY29tcHV0ZWRTdHlsZS5wYWRkaW5nTGVmdC5yZXBsYWNlKCdweCcsICcnKSk7XG4gICAgICAgICAgY29uc3QgcGFkZGluZ1JpZ2h0V2lkdGggPSBwYXJzZUZsb2F0KGNvbXB1dGVkU3R5bGUucGFkZGluZ1JpZ2h0LnJlcGxhY2UoJ3B4JywgJycpKTtcbiAgICAgICAgICBjb25zdCBib3JkZXJSaWdodFdpZHRoID0gcGFyc2VGbG9hdChjb21wdXRlZFN0eWxlLmJvcmRlclJpZ2h0V2lkdGgucmVwbGFjZSgncHgnLCAnJykpO1xuICAgICAgICAgIGNvbnN0IGJvcmRlckxlZnRXaWR0aCA9IHBhcnNlRmxvYXQoY29tcHV0ZWRTdHlsZS5ib3JkZXJMZWZ0V2lkdGgucmVwbGFjZSgncHgnLCAnJykpO1xuICAgICAgICAgIHdpZHRoID0gd2lkdGggKyBwYWRkaW5nTGVmdFdpZHRoICsgcGFkZGluZ1JpZ2h0V2lkdGggKyBib3JkZXJSaWdodFdpZHRoICsgYm9yZGVyTGVmdFdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxhc3RQYWRkaW5nID0gKGNlbGxzLmxlbmd0aCAtIDEgPT09IGkgPyBzY3JvbGxCYXJXaWR0aCA6IDApO1xuICAgICAgICBpZiAod2lkdGggPD0gMCkge1xuICAgICAgICAgIHdpZHRoID0gMTIwO1xuICAgICAgICAgIGNlbGwud2lkdGggPSB3aWR0aCArIGxhc3RQYWRkaW5nICsgJ3B4JztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN1bHQgPSB3aWR0aCArIGxhc3RQYWRkaW5nICsgJ3B4JztcbiAgICAgICAgaGVhZGVyLmNoaWxkTm9kZXNbaV0uc3R5bGUud2lkdGggPSByZXN1bHQ7XG4gICAgICAgIGhlYWRlci5jaGlsZE5vZGVzW2ldLnN0eWxlLm1pbldpZHRoID0gcmVzdWx0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9hZGp1c3RIZWlnaHQgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuaGVpZ2h0LmluZGV4T2YoJyUnKSA9PT0gLTEpIHtcbiAgICAgIHRoaXMucmVmcy5ib2R5LnJlZnMuY29udGFpbmVyLnN0eWxlLmhlaWdodCA9XG4gICAgICAgIHBhcnNlRmxvYXQodGhpcy5wcm9wcy5oZWlnaHQsIDEwKSAtIHRoaXMucmVmcy5oZWFkZXIucmVmcy5jb250YWluZXIub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlQWZ0ZXJBZGRpbmdSb3cobmV3T2JqKSB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBpZiAodGhpcy5wcm9wcy5wYWdpbmF0aW9uKSB7XG4gICAgICAvLyBpZiBwYWdpbmF0aW9uIGlzIGVuYWJsZWQgYW5kIGluc2VydCByb3cgYmUgdHJpZ2dlciwgY2hhbmdlIHRvIGxhc3QgcGFnZVxuICAgICAgY29uc3QgeyBzaXplUGVyUGFnZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGNvbnN0IGN1cnJMYXN0UGFnZSA9IE1hdGguY2VpbCh0aGlzLnN0b3JlLmdldERhdGFOdW0oKSAvIHNpemVQZXJQYWdlKTtcbiAgICAgIHJlc3VsdCA9IHRoaXMuc3RvcmUucGFnZShjdXJyTGFzdFBhZ2UsIHNpemVQZXJQYWdlKS5nZXQoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkYXRhOiByZXN1bHQsXG4gICAgICAgIGN1cnJQYWdlOiBjdXJyTGFzdFBhZ2VcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSB0aGlzLnN0b3JlLmdldCgpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRhdGE6IHJlc3VsdFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMub3B0aW9ucy5hZnRlckluc2VydFJvdykge1xuICAgICAgdGhpcy5wcm9wcy5vcHRpb25zLmFmdGVySW5zZXJ0Um93KG5ld09iaik7XG4gICAgfVxuICB9XG59XG5cbkJvb3RzdHJhcFRhYmxlLnByb3BUeXBlcyA9IHtcbiAga2V5RmllbGQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbWF4SGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkYXRhOiBQcm9wVHlwZXMub25lT2ZUeXBlKFsgUHJvcFR5cGVzLmFycmF5LCBQcm9wVHlwZXMub2JqZWN0IF0pLFxuICByZW1vdGU6IFByb3BUeXBlcy5ib29sLCAvLyByZW1vdGUgZGF0YSwgZGVmYXVsdCBpcyBmYWxzZVxuICBzdHJpcGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgYm9yZGVyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBob3ZlcjogUHJvcFR5cGVzLmJvb2wsXG4gIGNvbmRlbnNlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHBhZ2luYXRpb246IFByb3BUeXBlcy5ib29sLFxuICBzZWFyY2hQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VsZWN0Um93OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIG1vZGU6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICBDb25zdC5ST1dfU0VMRUNUX05PTkUsXG4gICAgICBDb25zdC5ST1dfU0VMRUNUX1NJTkdMRSxcbiAgICAgIENvbnN0LlJPV19TRUxFQ1RfTVVMVElcbiAgICBdKSxcbiAgICBiZ0NvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNlbGVjdGVkOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2VsZWN0QWxsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjbGlja1RvU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBoaWRlU2VsZWN0Q29sdW1uOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjbGlja1RvU2VsZWN0QW5kRWRpdENlbGw6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3dPbmx5U2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sXG4gIH0pLFxuICBjZWxsRWRpdDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBtb2RlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGJsdXJUb1NhdmU6IFByb3BUeXBlcy5ib29sLFxuICAgIGJlZm9yZVNhdmVDZWxsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBhZnRlclNhdmVDZWxsOiBQcm9wVHlwZXMuZnVuY1xuICB9KSxcbiAgaW5zZXJ0Um93OiBQcm9wVHlwZXMuYm9vbCxcbiAgZGVsZXRlUm93OiBQcm9wVHlwZXMuYm9vbCxcbiAgc2VhcmNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgY29sdW1uRmlsdGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgdHJDbGFzc05hbWU6IFByb3BUeXBlcy5hbnksXG4gIG9wdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgY2xlYXJTZWFyY2g6IFByb3BUeXBlcy5ib29sLFxuICAgIHNvcnROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNvcnRPcmRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzb3J0SW5kaWNhdG9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBhZnRlclRhYmxlQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIGFmdGVyRGVsZXRlUm93OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBhZnRlckluc2VydFJvdzogUHJvcFR5cGVzLmZ1bmMsXG4gICAgYWZ0ZXJTZWFyY2g6IFByb3BUeXBlcy5mdW5jLFxuICAgIGFmdGVyQ29sdW1uRmlsdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblJvd0NsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBwYWdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHNpemVQZXJQYWdlTGlzdDogUHJvcFR5cGVzLmFycmF5LFxuICAgIHNpemVQZXJQYWdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHBhZ2luYXRpb25TaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG9uU29ydENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25QYWdlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNpemVQZXJQYWdlTGlzdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbm9EYXRhVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBoYW5kbGVDb25maXJtRGVsZXRlUm93OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBwcmVQYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG5leHRQYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZpcnN0UGFnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsYXN0UGFnZTogUHJvcFR5cGVzLnN0cmluZ1xuICB9KSxcbiAgZmV0Y2hJbmZvOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGRhdGFUb3RhbFNpemU6IFByb3BUeXBlcy5udW1iZXJcbiAgfSksXG4gIGV4cG9ydENTVjogUHJvcFR5cGVzLmJvb2wsXG4gIGNzdkZpbGVOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuQm9vdHN0cmFwVGFibGUuZGVmYXVsdFByb3BzID0ge1xuICBoZWlnaHQ6ICcxMDAlJyxcbiAgbWF4SGVpZ2h0OiB1bmRlZmluZWQsXG4gIHN0cmlwZWQ6IGZhbHNlLFxuICBib3JkZXJlZDogdHJ1ZSxcbiAgaG92ZXI6IGZhbHNlLFxuICBjb25kZW5zZWQ6IGZhbHNlLFxuICBwYWdpbmF0aW9uOiBmYWxzZSxcbiAgc2VhcmNoUGxhY2Vob2xkZXI6IHVuZGVmaW5lZCxcbiAgc2VsZWN0Um93OiB7XG4gICAgbW9kZTogQ29uc3QuUk9XX1NFTEVDVF9OT05FLFxuICAgIGJnQ29sb3I6IENvbnN0LlJPV19TRUxFQ1RfQkdfQ09MT1IsXG4gICAgc2VsZWN0ZWQ6IFtdLFxuICAgIG9uU2VsZWN0OiB1bmRlZmluZWQsXG4gICAgb25TZWxlY3RBbGw6IHVuZGVmaW5lZCxcbiAgICBjbGlja1RvU2VsZWN0OiBmYWxzZSxcbiAgICBoaWRlU2VsZWN0Q29sdW1uOiBmYWxzZSxcbiAgICBjbGlja1RvU2VsZWN0QW5kRWRpdENlbGw6IGZhbHNlLFxuICAgIHNob3dPbmx5U2VsZWN0ZWQ6IGZhbHNlXG4gIH0sXG4gIGNlbGxFZGl0OiB7XG4gICAgbW9kZTogQ29uc3QuQ0VMTF9FRElUX05PTkUsXG4gICAgYmx1clRvU2F2ZTogZmFsc2UsXG4gICAgYmVmb3JlU2F2ZUNlbGw6IHVuZGVmaW5lZCxcbiAgICBhZnRlclNhdmVDZWxsOiB1bmRlZmluZWRcbiAgfSxcbiAgaW5zZXJ0Um93OiBmYWxzZSxcbiAgZGVsZXRlUm93OiBmYWxzZSxcbiAgc2VhcmNoOiBmYWxzZSxcbiAgbXVsdGlDb2x1bW5TZWFyY2g6IGZhbHNlLFxuICBjb2x1bW5GaWx0ZXI6IGZhbHNlLFxuICB0ckNsYXNzTmFtZTogJycsXG4gIG9wdGlvbnM6IHtcbiAgICBjbGVhclNlYXJjaDogZmFsc2UsXG4gICAgc29ydE5hbWU6IHVuZGVmaW5lZCxcbiAgICBzb3J0T3JkZXI6IHVuZGVmaW5lZCxcbiAgICBzb3J0SW5kaWNhdG9yOiB0cnVlLFxuICAgIGFmdGVyVGFibGVDb21wbGV0ZTogdW5kZWZpbmVkLFxuICAgIGFmdGVyRGVsZXRlUm93OiB1bmRlZmluZWQsXG4gICAgYWZ0ZXJJbnNlcnRSb3c6IHVuZGVmaW5lZCxcbiAgICBhZnRlclNlYXJjaDogdW5kZWZpbmVkLFxuICAgIGFmdGVyQ29sdW1uRmlsdGVyOiB1bmRlZmluZWQsXG4gICAgb25Sb3dDbGljazogdW5kZWZpbmVkLFxuICAgIG9uTW91c2VMZWF2ZTogdW5kZWZpbmVkLFxuICAgIG9uTW91c2VFbnRlcjogdW5kZWZpbmVkLFxuICAgIG9uUm93TW91c2VPdXQ6IHVuZGVmaW5lZCxcbiAgICBvblJvd01vdXNlT3ZlcjogdW5kZWZpbmVkLFxuICAgIHBhZ2U6IHVuZGVmaW5lZCxcbiAgICBzaXplUGVyUGFnZUxpc3Q6IENvbnN0LlNJWkVfUEVSX1BBR0VfTElTVCxcbiAgICBzaXplUGVyUGFnZTogdW5kZWZpbmVkLFxuICAgIHBhZ2luYXRpb25TaXplOiBDb25zdC5QQUdJTkFUSU9OX1NJWkUsXG4gICAgb25TaXplUGVyUGFnZUxpc3Q6IHVuZGVmaW5lZCxcbiAgICBub0RhdGFUZXh0OiB1bmRlZmluZWQsXG4gICAgaGFuZGxlQ29uZmlybURlbGV0ZVJvdzogdW5kZWZpbmVkLFxuICAgIHByZVBhZ2U6IENvbnN0LlBSRV9QQUdFLFxuICAgIG5leHRQYWdlOiBDb25zdC5ORVhUX1BBR0UsXG4gICAgZmlyc3RQYWdlOiBDb25zdC5GSVJTVF9QQUdFLFxuICAgIGxhc3RQYWdlOiBDb25zdC5MQVNUX1BBR0VcbiAgfSxcbiAgZmV0Y2hJbmZvOiB7XG4gICAgZGF0YVRvdGFsU2l6ZTogMFxuICB9LFxuICBleHBvcnRDU1Y6IGZhbHNlLFxuICBjc3ZGaWxlTmFtZTogdW5kZWZpbmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb290c3RyYXBUYWJsZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL0Jvb3RzdHJhcFRhYmxlLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIn1cbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCB7XG4gIFNPUlRfREVTQzogJ2Rlc2MnLFxuICBTT1JUX0FTQzogJ2FzYycsXG4gIFNJWkVfUEVSX1BBR0U6IDEwLFxuICBORVhUX1BBR0U6ICc+JyxcbiAgTEFTVF9QQUdFOiAnPj4nLFxuICBQUkVfUEFHRTogJzwnLFxuICBGSVJTVF9QQUdFOiAnPDwnLFxuICBST1dfU0VMRUNUX0JHX0NPTE9SOiAnJyxcbiAgUk9XX1NFTEVDVF9OT05FOiAnbm9uZScsXG4gIFJPV19TRUxFQ1RfU0lOR0xFOiAncmFkaW8nLFxuICBST1dfU0VMRUNUX01VTFRJOiAnY2hlY2tib3gnLFxuICBDRUxMX0VESVRfTk9ORTogJ25vbmUnLFxuICBDRUxMX0VESVRfQ0xJQ0s6ICdjbGljaycsXG4gIENFTExfRURJVF9EQkNMSUNLOiAnZGJjbGljaycsXG4gIFNJWkVfUEVSX1BBR0VfTElTVDogWyAxMCwgMjUsIDMwLCA1MCBdLFxuICBQQUdJTkFUSU9OX1NJWkU6IDUsXG4gIE5PX0RBVEFfVEVYVDogJ1RoZXJlIGlzIG5vIGRhdGEgdG8gZGlzcGxheScsXG4gIFNIT1dfT05MWV9TRUxFQ1Q6ICdTaG93IFNlbGVjdGVkIE9ubHknLFxuICBTSE9XX0FMTDogJ1Nob3cgQWxsJyxcbiAgRklMVEVSX0RFTEFZOiA1MDAsXG4gIEZJTFRFUl9UWVBFOiB7XG4gICAgVEVYVDogJ1RleHRGaWx0ZXInLFxuICAgIFJFR0VYOiAnUmVnZXhGaWx0ZXInLFxuICAgIFNFTEVDVDogJ1NlbGVjdEZpbHRlcicsXG4gICAgTlVNQkVSOiAnTnVtYmVyRmlsdGVyJyxcbiAgICBEQVRFOiAnRGF0ZUZpbHRlcicsXG4gICAgQ1VTVE9NOiAnQ3VzdG9tRmlsdGVyJ1xuICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvQ29uc3QuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBDb25zdCBmcm9tICcuL0NvbnN0JztcbmltcG9ydCBjbGFzc1NldCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBTZWxlY3RSb3dIZWFkZXJDb2x1bW4gZnJvbSAnLi9TZWxlY3RSb3dIZWFkZXJDb2x1bW4nO1xuXG5jbGFzcyBDaGVja2JveCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkgeyB0aGlzLnVwZGF0ZSh0aGlzLnByb3BzLmNoZWNrZWQpOyB9XG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHsgdGhpcy51cGRhdGUocHJvcHMuY2hlY2tlZCk7IH1cbiAgdXBkYXRlKGNoZWNrZWQpIHtcbiAgICBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS5pbmRldGVybWluYXRlID0gY2hlY2tlZCA9PT0gJ2luZGV0ZXJtaW5hdGUnO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGlucHV0IGNsYXNzTmFtZT0ncmVhY3QtYnMtc2VsZWN0LWFsbCdcbiAgICAgICAgdHlwZT0nY2hlY2tib3gnXG4gICAgICAgIGNoZWNrZWQ9eyB0aGlzLnByb3BzLmNoZWNrZWQgfVxuICAgICAgICBvbkNoYW5nZT17IHRoaXMucHJvcHMub25DaGFuZ2UgfSAvPlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgVGFibGVIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjb250YWluZXJDbGFzc2VzID0gY2xhc3NTZXQoJ3JlYWN0LWJzLWNvbnRhaW5lci1oZWFkZXInLCAndGFibGUtaGVhZGVyLXdyYXBwZXInKTtcbiAgICBjb25zdCB0YWJsZUNsYXNzZXMgPSBjbGFzc1NldCgndGFibGUnLCAndGFibGUtaG92ZXInLCB7XG4gICAgICAndGFibGUtYm9yZGVyZWQnOiB0aGlzLnByb3BzLmJvcmRlcmVkLFxuICAgICAgJ3RhYmxlLWNvbmRlbnNlZCc6IHRoaXMucHJvcHMuY29uZGVuc2VkXG4gICAgfSk7XG4gICAgbGV0IHNlbGVjdFJvd0hlYWRlckNvbCA9IG51bGw7XG4gICAgaWYgKCF0aGlzLnByb3BzLmhpZGVTZWxlY3RDb2x1bW4pIHNlbGVjdFJvd0hlYWRlckNvbCA9IHRoaXMucmVuZGVyU2VsZWN0Um93SGVhZGVyKCk7XG4gICAgdGhpcy5fYXR0YWNoQ2xlYXJTb3J0Q2FyZXRGdW5jKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9J2NvbnRhaW5lcicgY2xhc3NOYW1lPXsgY29udGFpbmVyQ2xhc3NlcyB9PlxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXsgdGFibGVDbGFzc2VzIH0+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyIHJlZj0naGVhZGVyJz5cbiAgICAgICAgICAgICAgeyBzZWxlY3RSb3dIZWFkZXJDb2wgfVxuICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlclNlbGVjdFJvd0hlYWRlcigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5yb3dTZWxlY3RUeXBlID09PSBDb25zdC5ST1dfU0VMRUNUX1NJTkdMRSkge1xuICAgICAgcmV0dXJuICg8U2VsZWN0Um93SGVhZGVyQ29sdW1uIC8+KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMucm93U2VsZWN0VHlwZSA9PT0gQ29uc3QuUk9XX1NFTEVDVF9NVUxUSSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFNlbGVjdFJvd0hlYWRlckNvbHVtbj5cbiAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5wcm9wcy5vblNlbGVjdEFsbFJvdyB9XG4gICAgICAgICAgICBjaGVja2VkPXsgdGhpcy5wcm9wcy5pc1NlbGVjdEFsbCB9Lz5cbiAgICAgICAgPC9TZWxlY3RSb3dIZWFkZXJDb2x1bW4+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBfYXR0YWNoQ2xlYXJTb3J0Q2FyZXRGdW5jKCkge1xuICAgIGNvbnN0IHsgc29ydEluZGljYXRvciwgY2hpbGRyZW4sIHNvcnROYW1lLCBzb3J0T3JkZXIsIG9uU29ydCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBjaGlsZHJlbltpXS5wcm9wcy5kYXRhRmllbGQ7XG4gICAgICAgIGNvbnN0IHNvcnQgPSBmaWVsZCA9PT0gc29ydE5hbWUgPyBzb3J0T3JkZXIgOiB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5baV0gPVxuICAgICAgICAgIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbltpXSxcbiAgICAgICAgICAgIHsga2V5OiBpLCBvblNvcnQsIHNvcnQsIHNvcnRJbmRpY2F0b3IgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gY2hpbGRyZW4ucHJvcHMuZGF0YUZpZWxkO1xuICAgICAgY29uc3Qgc29ydCA9IGZpZWxkID09PSBzb3J0TmFtZSA/IHNvcnRPcmRlciA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW4gPVxuICAgICAgICBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sXG4gICAgICAgICAgeyBrZXk6IDAsIG9uU29ydCwgc29ydCwgc29ydEluZGljYXRvciB9KTtcbiAgICB9XG4gIH1cbn1cblRhYmxlSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgcm93U2VsZWN0VHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25Tb3J0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TZWxlY3RBbGxSb3c6IFByb3BUeXBlcy5mdW5jLFxuICBzb3J0TmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc29ydE9yZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBoaWRlU2VsZWN0Q29sdW1uOiBQcm9wVHlwZXMuYm9vbCxcbiAgYm9yZGVyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBjb25kZW5zZWQ6IFByb3BUeXBlcy5ib29sLFxuICBpc0ZpbHRlcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgaXNTZWxlY3RBbGw6IFByb3BUeXBlcy5vbmVPZihbIHRydWUsICdpbmRldGVybWluYXRlJywgZmFsc2UgXSksXG4gIHNvcnRJbmRpY2F0b3I6IFByb3BUeXBlcy5ib29sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYWJsZUhlYWRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL1RhYmxlSGVhZGVyLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0RE9NXCIsXCJjb21tb25qczJcIjpcInJlYWN0LWRvbVwiLFwiY29tbW9uanNcIjpcInJlYWN0LWRvbVwiLFwiYW1kXCI6XCJyZWFjdC1kb21cIn1cbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE2IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZykpO1xuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NsYXNzbmFtZXMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFNlbGVjdFJvd0hlYWRlckNvbHVtbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8dGggc3R5bGU9eyB7IHRleHRBbGlnbjogJ2NlbnRlcicgfSB9PlxuICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuICAgICAgPC90aD5cbiAgICApO1xuICB9XG59XG5TZWxlY3RSb3dIZWFkZXJDb2x1bW4ucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGVcbn07XG5leHBvcnQgZGVmYXVsdCBTZWxlY3RSb3dIZWFkZXJDb2x1bW47XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9TZWxlY3RSb3dIZWFkZXJDb2x1bW4uanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi9Db25zdCc7XG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnLi9UYWJsZVJvdyc7XG5pbXBvcnQgVGFibGVDb2x1bW4gZnJvbSAnLi9UYWJsZUNvbHVtbic7XG5pbXBvcnQgVGFibGVFZGl0Q29sdW1uIGZyb20gJy4vVGFibGVFZGl0Q29sdW1uJztcbmltcG9ydCBjbGFzc1NldCBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3QgaXNGdW4gPSBmdW5jdGlvbihvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiAodHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJyk7XG59O1xuXG5jbGFzcyBUYWJsZUJvZHkgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyRWRpdENlbGw6IG51bGxcbiAgICB9O1xuICAgIHRoaXMuZWRpdGluZyA9IGZhbHNlO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRhYmxlQ2xhc3NlcyA9IGNsYXNzU2V0KCd0YWJsZScsIHtcbiAgICAgICd0YWJsZS1zdHJpcGVkJzogdGhpcy5wcm9wcy5zdHJpcGVkLFxuICAgICAgJ3RhYmxlLWJvcmRlcmVkJzogdGhpcy5wcm9wcy5ib3JkZXJlZCxcbiAgICAgICd0YWJsZS1ob3Zlcic6IHRoaXMucHJvcHMuaG92ZXIsXG4gICAgICAndGFibGUtY29uZGVuc2VkJzogdGhpcy5wcm9wcy5jb25kZW5zZWRcbiAgICB9KTtcblxuICAgIGNvbnN0IGlzU2VsZWN0Um93RGVmaW5lZCA9IHRoaXMuX2lzU2VsZWN0Um93RGVmaW5lZCgpO1xuICAgIGNvbnN0IHRhYmxlSGVhZGVyID0gdGhpcy5yZW5kZXJUYWJsZUhlYWRlcihpc1NlbGVjdFJvd0RlZmluZWQpO1xuXG4gICAgY29uc3QgdGFibGVSb3dzID0gdGhpcy5wcm9wcy5kYXRhLm1hcChmdW5jdGlvbihkYXRhLCByKSB7XG4gICAgICBjb25zdCB0YWJsZUNvbHVtbnMgPSB0aGlzLnByb3BzLmNvbHVtbnMubWFwKGZ1bmN0aW9uKGNvbHVtbiwgaSkge1xuICAgICAgICBjb25zdCBmaWVsZFZhbHVlID0gZGF0YVtjb2x1bW4ubmFtZV07XG4gICAgICAgIGlmICh0aGlzLmVkaXRpbmcgJiZcbiAgICAgICAgICBjb2x1bW4ubmFtZSAhPT0gdGhpcy5wcm9wcy5rZXlGaWVsZCAmJiAvLyBLZXkgZmllbGQgY2FuJ3QgYmUgZWRpdFxuICAgICAgICAgIGNvbHVtbi5lZGl0YWJsZSAmJiAvLyBjb2x1bW4gaXMgZWRpdGFibGU/IGRlZmF1bHQgaXMgdHJ1ZSwgdXNlciBjYW4gc2V0IGl0IGZhbHNlXG4gICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyRWRpdENlbGwgIT09IG51bGwgJiZcbiAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJFZGl0Q2VsbC5yaWQgPT09IHIgJiZcbiAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJFZGl0Q2VsbC5jaWQgPT09IGkpIHtcbiAgICAgICAgICBsZXQgZWRpdGFibGUgPSBjb2x1bW4uZWRpdGFibGU7XG4gICAgICAgICAgY29uc3QgZm9ybWF0ID0gY29sdW1uLmZvcm1hdCA/IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gY29sdW1uLmZvcm1hdCh2YWx1ZSwgZGF0YSwgY29sdW1uLmZvcm1hdEV4dHJhRGF0YSkucmVwbGFjZSgvPC4qPz4vZywgJycpO1xuICAgICAgICAgIH0gOiBmYWxzZTtcblxuICAgICAgICAgIGlmIChpc0Z1bihjb2x1bW4uZWRpdGFibGUpKSB7XG4gICAgICAgICAgICBlZGl0YWJsZSA9IGNvbHVtbi5lZGl0YWJsZShmaWVsZFZhbHVlLCBkYXRhLCByLCBpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8VGFibGVFZGl0Q29sdW1uXG4gICAgICAgICAgICAgICAgY29tcGxldGVFZGl0PXsgdGhpcy5oYW5kbGVDb21wbGV0ZUVkaXRDZWxsIH1cbiAgICAgICAgICAgICAgICAvLyBhZGQgYnkgYmx1ZXNwcmluZyBmb3IgY29sdW1uIGVkaXRvciBjdXN0b21pemVcbiAgICAgICAgICAgICAgICBlZGl0YWJsZT17IGVkaXRhYmxlIH1cbiAgICAgICAgICAgICAgICBmb3JtYXQ9eyBjb2x1bW4uZm9ybWF0ID8gZm9ybWF0IDogZmFsc2UgfVxuICAgICAgICAgICAgICAgIGtleT17IGkgfVxuICAgICAgICAgICAgICAgIGJsdXJUb1NhdmU9eyB0aGlzLnByb3BzLmNlbGxFZGl0LmJsdXJUb1NhdmUgfVxuICAgICAgICAgICAgICAgIHJvd0luZGV4PXsgciB9XG4gICAgICAgICAgICAgICAgY29sSW5kZXg9eyBpIH0+XG4gICAgICAgICAgICAgICAgeyBmaWVsZFZhbHVlIH1cbiAgICAgICAgICAgICAgPC9UYWJsZUVkaXRDb2x1bW4+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGFkZCBieSBibHVlc3ByaW5nIGZvciBjbGFzc05hbWUgY3VzdG9taXplXG4gICAgICAgICAgbGV0IGNvbHVtbkNoaWxkID0gZmllbGRWYWx1ZTtcbiAgICAgICAgICBsZXQgdGRDbGFzc05hbWUgPSBjb2x1bW4uY2xhc3NOYW1lO1xuICAgICAgICAgIGlmIChpc0Z1bihjb2x1bW4uY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgdGRDbGFzc05hbWUgPSBjb2x1bW4uY2xhc3NOYW1lKGZpZWxkVmFsdWUsIGRhdGEsIHIsIGkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgY29sdW1uLmZvcm1hdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZFZhbHVlID0gY29sdW1uLmZvcm1hdChmaWVsZFZhbHVlLCBkYXRhLCBjb2x1bW4uZm9ybWF0RXh0cmFEYXRhKTtcbiAgICAgICAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoZm9ybWF0dGVkVmFsdWUpKSB7XG4gICAgICAgICAgICAgIGNvbHVtbkNoaWxkID0gKFxuICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogZm9ybWF0dGVkVmFsdWUgfSB9PjwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29sdW1uQ2hpbGQgPSBmb3JtYXR0ZWRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUYWJsZUNvbHVtbiBrZXk9eyBpIH1cbiAgICAgICAgICAgICAgZGF0YUFsaWduPXsgY29sdW1uLmFsaWduIH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgdGRDbGFzc05hbWUgfVxuICAgICAgICAgICAgICBjZWxsRWRpdD17IHRoaXMucHJvcHMuY2VsbEVkaXQgfVxuICAgICAgICAgICAgICBoaWRkZW49eyBjb2x1bW4uaGlkZGVuIH1cbiAgICAgICAgICAgICAgb25FZGl0PXsgdGhpcy5oYW5kbGVFZGl0Q2VsbCB9XG4gICAgICAgICAgICAgIHdpZHRoPXsgY29sdW1uLndpZHRoIH0+XG4gICAgICAgICAgICAgIHsgY29sdW1uQ2hpbGQgfVxuICAgICAgICAgICAgPC9UYWJsZUNvbHVtbj5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzKTtcblxuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLnByb3BzLnNlbGVjdGVkUm93S2V5cy5pbmRleE9mKGRhdGFbdGhpcy5wcm9wcy5rZXlGaWVsZF0pICE9PSAtMTtcbiAgICAgIGNvbnN0IHNlbGVjdFJvd0NvbHVtbiA9IGlzU2VsZWN0Um93RGVmaW5lZCAmJiAhdGhpcy5wcm9wcy5zZWxlY3RSb3cuaGlkZVNlbGVjdENvbHVtbiA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclNlbGVjdFJvd0NvbHVtbihzZWxlY3RlZCkgOiBudWxsO1xuICAgICAgLy8gYWRkIGJ5IGJsdWVzcHJpbmcgZm9yIGNsYXNzTmFtZSBjdXN0b21pemVcbiAgICAgIGxldCB0ckNsYXNzTmFtZSA9IHRoaXMucHJvcHMudHJDbGFzc05hbWU7XG4gICAgICBpZiAoaXNGdW4odGhpcy5wcm9wcy50ckNsYXNzTmFtZSkpIHtcbiAgICAgICAgdHJDbGFzc05hbWUgPSB0aGlzLnByb3BzLnRyQ2xhc3NOYW1lKGRhdGEsIHIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRhYmxlUm93IGlzU2VsZWN0ZWQ9eyBzZWxlY3RlZCB9IGtleT17IHIgfSBjbGFzc05hbWU9eyB0ckNsYXNzTmFtZSB9XG4gICAgICAgICAgc2VsZWN0Um93PXsgaXNTZWxlY3RSb3dEZWZpbmVkID8gdGhpcy5wcm9wcy5zZWxlY3RSb3cgOiB1bmRlZmluZWQgfVxuICAgICAgICAgIGVuYWJsZUNlbGxFZGl0PXsgdGhpcy5wcm9wcy5jZWxsRWRpdC5tb2RlICE9PSBDb25zdC5DRUxMX0VESVRfTk9ORSB9XG4gICAgICAgICAgb25Sb3dDbGljaz17IHRoaXMuaGFuZGxlUm93Q2xpY2sgfVxuICAgICAgICAgIG9uUm93TW91c2VPdmVyPXsgdGhpcy5oYW5kbGVSb3dNb3VzZU92ZXIgfVxuICAgICAgICAgIG9uUm93TW91c2VPdXQ9eyB0aGlzLmhhbmRsZVJvd01vdXNlT3V0IH1cbiAgICAgICAgICBvblNlbGVjdFJvdz17IHRoaXMuaGFuZGxlU2VsZWN0Um93IH0+XG4gICAgICAgICAgeyBzZWxlY3RSb3dDb2x1bW4gfVxuICAgICAgICAgIHsgdGFibGVDb2x1bW5zIH1cbiAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICk7XG4gICAgfSwgdGhpcyk7XG5cbiAgICBpZiAodGFibGVSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGFibGVSb3dzLnB1c2goXG4gICAgICAgIDxUYWJsZVJvdyBrZXk9JyMjdGFibGUtZW1wdHkjIyc+XG4gICAgICAgICAgPHRkIGNvbFNwYW49eyB0aGlzLnByb3BzLmNvbHVtbnMubGVuZ3RoICsgKGlzU2VsZWN0Um93RGVmaW5lZCA/IDEgOiAwKSB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncmVhY3QtYnMtdGFibGUtbm8tZGF0YSc+XG4gICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5ub0RhdGFUZXh0IHx8IENvbnN0Lk5PX0RBVEFfVEVYVCB9XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpcy5lZGl0aW5nID0gZmFsc2U7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9J2NvbnRhaW5lcicgY2xhc3NOYW1lPSdyZWFjdC1icy1jb250YWluZXItYm9keScgc3R5bGU9eyB0aGlzLnByb3BzLnN0eWxlIH0+XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9eyB0YWJsZUNsYXNzZXMgfT5cbiAgICAgICAgICB7IHRhYmxlSGVhZGVyIH1cbiAgICAgICAgICA8dGJvZHkgcmVmPSd0Ym9keSc+XG4gICAgICAgICAgICB7IHRhYmxlUm93cyB9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJUYWJsZUhlYWRlcihpc1NlbGVjdFJvd0RlZmluZWQpIHtcbiAgICBsZXQgc2VsZWN0Um93SGVhZGVyID0gbnVsbDtcblxuICAgIGlmIChpc1NlbGVjdFJvd0RlZmluZWQpIHtcbiAgICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgIG1pbldpZHRoOiAzMFxuICAgICAgfTtcbiAgICAgIGlmICghdGhpcy5wcm9wcy5zZWxlY3RSb3cuaGlkZVNlbGVjdENvbHVtbikge1xuICAgICAgICBzZWxlY3RSb3dIZWFkZXIgPSAoPGNvbCBzdHlsZT17IHN0eWxlIH0ga2V5PXsgLTEgfT48L2NvbD4pO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB0aGVhZGVyID0gdGhpcy5wcm9wcy5jb2x1bW5zLm1hcChmdW5jdGlvbihjb2x1bW4sIGkpIHtcbiAgICAgIGNvbnN0IHdpZHRoID0gY29sdW1uLndpZHRoID09PSBudWxsID8gY29sdW1uLndpZHRoIDogcGFyc2VJbnQoY29sdW1uLndpZHRoLCAxMCk7XG4gICAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogY29sdW1uLmhpZGRlbiA/ICdub25lJyA6IG51bGwsXG4gICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgbWluV2lkdGg6IHdpZHRoXG4gICAgICAgIC8qKiBhZGQgbWluLXdkdGggdG8gZml4IHVzZXIgYXNzaWduIGNvbHVtbiB3aWR0aFxuICAgICAgICBub3QgZXEgb2Zmc2V0V2lkdGggaW4gbGFyZ2UgY29sdW1uIHRhYmxlICoqL1xuICAgICAgfTtcbiAgICAgIHJldHVybiAoPGNvbCBzdHlsZT17IHN0eWxlIH0ga2V5PXsgaSB9IGNsYXNzTmFtZT17IGNvbHVtbi5jbGFzc05hbWUgfT48L2NvbD4pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxjb2xncm91cCByZWY9J2hlYWRlcic+XG4gICAgICAgIHsgc2VsZWN0Um93SGVhZGVyIH17IHRoZWFkZXIgfVxuICAgICAgPC9jb2xncm91cD5cbiAgICApO1xuICB9XG5cbiAgaGFuZGxlUm93TW91c2VPdXQgPSAocm93SW5kZXgsIGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0Um93ID0gdGhpcy5wcm9wcy5kYXRhW3Jvd0luZGV4XTtcbiAgICB0aGlzLnByb3BzLm9uUm93TW91c2VPdXQodGFyZ2V0Um93LCBldmVudCk7XG4gIH1cblxuICBoYW5kbGVSb3dNb3VzZU92ZXIgPSAocm93SW5kZXgsIGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0Um93ID0gdGhpcy5wcm9wcy5kYXRhW3Jvd0luZGV4XTtcbiAgICB0aGlzLnByb3BzLm9uUm93TW91c2VPdmVyKHRhcmdldFJvdywgZXZlbnQpO1xuICB9XG5cbiAgaGFuZGxlUm93Q2xpY2sgPSByb3dJbmRleCA9PiB7XG4gICAgbGV0IHNlbGVjdGVkUm93O1xuICAgIGNvbnN0IHsgZGF0YSwgb25Sb3dDbGljayB9ID0gdGhpcy5wcm9wcztcbiAgICBkYXRhLmZvckVhY2goKHJvdywgaSkgPT4ge1xuICAgICAgaWYgKGkgPT09IHJvd0luZGV4IC0gMSkge1xuICAgICAgICBzZWxlY3RlZFJvdyA9IHJvdztcbiAgICAgIH1cbiAgICB9KTtcbiAgICBvblJvd0NsaWNrKHNlbGVjdGVkUm93KTtcbiAgfVxuXG4gIGhhbmRsZVNlbGVjdFJvdyA9IChyb3dJbmRleCwgaXNTZWxlY3RlZCkgPT4ge1xuICAgIGxldCBzZWxlY3RlZFJvdztcbiAgICBjb25zdCB7IGRhdGEsIG9uU2VsZWN0Um93IH0gPSB0aGlzLnByb3BzO1xuICAgIGRhdGEuZm9yRWFjaCgocm93LCBpKSA9PiB7XG4gICAgICBpZiAoaSA9PT0gcm93SW5kZXggLSAxKSB7XG4gICAgICAgIHNlbGVjdGVkUm93ID0gcm93O1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgb25TZWxlY3RSb3coc2VsZWN0ZWRSb3csIGlzU2VsZWN0ZWQpO1xuICB9XG5cbiAgaGFuZGxlU2VsZWN0Um93Q29sdW1DaGFuZ2UgPSBlID0+IHtcbiAgICBpZiAoIXRoaXMucHJvcHMuc2VsZWN0Um93LmNsaWNrVG9TZWxlY3QgfHxcbiAgICAgICF0aGlzLnByb3BzLnNlbGVjdFJvdy5jbGlja1RvU2VsZWN0QW5kRWRpdENlbGwpIHtcbiAgICAgIHRoaXMuaGFuZGxlU2VsZWN0Um93KFxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJvd0luZGV4ICsgMSxcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUVkaXRDZWxsID0gKHJvd0luZGV4LCBjb2x1bW5JbmRleCkgPT4ge1xuICAgIHRoaXMuZWRpdGluZyA9IHRydWU7XG4gICAgaWYgKHRoaXMuX2lzU2VsZWN0Um93RGVmaW5lZCgpKSB7XG4gICAgICBjb2x1bW5JbmRleC0tO1xuICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0Um93LmhpZGVTZWxlY3RDb2x1bW4pIGNvbHVtbkluZGV4Kys7XG4gICAgfVxuICAgIHJvd0luZGV4LS07XG4gICAgY29uc3Qgc3RhdGVPYmogPSB7XG4gICAgICBjdXJyRWRpdENlbGw6IHtcbiAgICAgICAgcmlkOiByb3dJbmRleCxcbiAgICAgICAgY2lkOiBjb2x1bW5JbmRleFxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RSb3cuY2xpY2tUb1NlbGVjdEFuZEVkaXRDZWxsKSB7XG4gICAgICB0aGlzLmhhbmRsZVNlbGVjdFJvdyhyb3dJbmRleCArIDEsIHRydWUpO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlT2JqKTtcbiAgfVxuXG4gIGhhbmRsZUNvbXBsZXRlRWRpdENlbGwgPSAobmV3VmFsLCByb3dJbmRleCwgY29sdW1uSW5kZXgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY3VyckVkaXRDZWxsOiBudWxsIH0pO1xuICAgIGlmIChuZXdWYWwgIT09IG51bGwpIHtcbiAgICAgIHRoaXMucHJvcHMuY2VsbEVkaXQuX19vbkNvbXBsZXRlRWRpdF9fKG5ld1ZhbCwgcm93SW5kZXgsIGNvbHVtbkluZGV4KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJTZWxlY3RSb3dDb2x1bW4oc2VsZWN0ZWQpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RSb3cubW9kZSA9PT0gQ29uc3QuUk9XX1NFTEVDVF9TSU5HTEUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUYWJsZUNvbHVtbiBkYXRhQWxpZ249J2NlbnRlcic+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBjaGVja2VkPXsgc2VsZWN0ZWQgfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLmhhbmRsZVNlbGVjdFJvd0NvbHVtQ2hhbmdlIH0vPlxuICAgICAgICA8L1RhYmxlQ29sdW1uPlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRhYmxlQ29sdW1uIGRhdGFBbGlnbj0nY2VudGVyJz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNoZWNrZWQ9eyBzZWxlY3RlZCB9XG4gICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLmhhbmRsZVNlbGVjdFJvd0NvbHVtQ2hhbmdlIH0vPlxuICAgICAgICA8L1RhYmxlQ29sdW1uPlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBfaXNTZWxlY3RSb3dEZWZpbmVkKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnNlbGVjdFJvdy5tb2RlID09PSBDb25zdC5ST1dfU0VMRUNUX1NJTkdMRSB8fFxuICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0Um93Lm1vZGUgPT09IENvbnN0LlJPV19TRUxFQ1RfTVVMVEk7XG4gIH1cbn1cblRhYmxlQm9keS5wcm9wVHlwZXMgPSB7XG4gIGRhdGE6IFByb3BUeXBlcy5hcnJheSxcbiAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LFxuICBzdHJpcGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgYm9yZGVyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBob3ZlcjogUHJvcFR5cGVzLmJvb2wsXG4gIGNvbmRlbnNlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGtleUZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWxlY3RlZFJvd0tleXM6IFByb3BUeXBlcy5hcnJheSxcbiAgb25Sb3dDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2VsZWN0Um93OiBQcm9wVHlwZXMuZnVuYyxcbiAgbm9EYXRhVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3Rcbn07XG5leHBvcnQgZGVmYXVsdCBUYWJsZUJvZHk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9UYWJsZUJvZHkuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFRhYmxlUm93IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmNsaWNrTnVtID0gMDtcbiAgfVxuXG4gIHJvd0NsaWNrID0gZSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgIT09ICdJTlBVVCcgJiZcbiAgICAgICAgZS50YXJnZXQudGFnTmFtZSAhPT0gJ1NFTEVDVCcgJiZcbiAgICAgICAgZS50YXJnZXQudGFnTmFtZSAhPT0gJ1RFWFRBUkVBJykge1xuICAgICAgY29uc3Qgcm93SW5kZXggPSBlLmN1cnJlbnRUYXJnZXQucm93SW5kZXggKyAxO1xuICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0Um93KSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdFJvdy5jbGlja1RvU2VsZWN0KSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdFJvdyhyb3dJbmRleCwgIXRoaXMucHJvcHMuaXNTZWxlY3RlZCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5zZWxlY3RSb3cuY2xpY2tUb1NlbGVjdEFuZEVkaXRDZWxsKSB7XG4gICAgICAgICAgdGhpcy5jbGlja051bSsrO1xuICAgICAgICAgIC8qKiBpZiBjbGlja1RvU2VsZWN0QW5kRWRpdENlbGwgaXMgZW5hYmxlZCxcbiAgICAgICAgICAgKiAgdGhlcmUgc2hvdWxkIGJlIGEgZGVsYXkgdG8gcHJldmVudCBhIHNlbGVjdGlvbiBjaGFuZ2VkIHdoZW5cbiAgICAgICAgICAgKiAgdXNlciBkYmxpY2sgdG8gZWRpdCBjZWxsIG9uIHNhbWUgcm93IGJ1dCBkaWZmZXJlbnQgY2VsbFxuICAgICAgICAgICoqL1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2xpY2tOdW0gPT09IDEpIHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdFJvdyhyb3dJbmRleCwgIXRoaXMucHJvcHMuaXNTZWxlY3RlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNsaWNrTnVtID0gMDtcbiAgICAgICAgICB9LCAyMDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wcm9wcy5vblJvd0NsaWNrKSB0aGlzLnByb3BzLm9uUm93Q2xpY2socm93SW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIHJvd01vdXNlT3V0ID0gZSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub25Sb3dNb3VzZU91dCkge1xuICAgICAgdGhpcy5wcm9wcy5vblJvd01vdXNlT3V0KGUuY3VycmVudFRhcmdldC5yb3dJbmRleCwgZSk7XG4gICAgfVxuICB9XG5cbiAgcm93TW91c2VPdmVyID0gZSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub25Sb3dNb3VzZU92ZXIpIHtcbiAgICAgIHRoaXMucHJvcHMub25Sb3dNb3VzZU92ZXIoZS5jdXJyZW50VGFyZ2V0LnJvd0luZGV4LCBlKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5jbGlja051bSA9IDA7XG4gICAgY29uc3QgdHJDc3MgPSB7XG4gICAgICBzdHlsZToge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMucHJvcHMuaXNTZWxlY3RlZCA/IHRoaXMucHJvcHMuc2VsZWN0Um93LmJnQ29sb3IgOiBudWxsXG4gICAgICB9LFxuICAgICAgY2xhc3NOYW1lOiAoXG4gICAgICAgIHRoaXMucHJvcHMuaXNTZWxlY3RlZCAmJiB0aGlzLnByb3BzLnNlbGVjdFJvdy5jbGFzc05hbWUgP1xuICAgICAgICB0aGlzLnByb3BzLnNlbGVjdFJvdy5jbGFzc05hbWUgOiAnJykgKyAodGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgJycpXG4gICAgfTtcblxuICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdFJvdyAmJiAodGhpcy5wcm9wcy5zZWxlY3RSb3cuY2xpY2tUb1NlbGVjdCB8fFxuICAgICAgdGhpcy5wcm9wcy5zZWxlY3RSb3cuY2xpY2tUb1NlbGVjdEFuZEVkaXRDZWxsKSB8fCB0aGlzLnByb3BzLm9uUm93Q2xpY2spIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDx0ciB7IC4uLnRyQ3NzIH1cbiAgICAgICAgICAgIG9uTW91c2VPdmVyPXsgdGhpcy5yb3dNb3VzZU92ZXIgfVxuICAgICAgICAgICAgb25Nb3VzZU91dD17IHRoaXMucm93TW91c2VPdXQgfVxuICAgICAgICAgICAgb25DbGljaz17IHRoaXMucm93Q2xpY2sgfT57IHRoaXMucHJvcHMuY2hpbGRyZW4gfTwvdHI+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8dHIgeyAuLi50ckNzcyB9PnsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9PC90cj5cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5UYWJsZVJvdy5wcm9wVHlwZXMgPSB7XG4gIGlzU2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICBlbmFibGVDZWxsRWRpdDogUHJvcFR5cGVzLmJvb2wsXG4gIG9uUm93Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdFJvdzogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uUm93TW91c2VPdXQ6IFByb3BUeXBlcy5mdW5jLFxuICBvblJvd01vdXNlT3ZlcjogUHJvcFR5cGVzLmZ1bmNcbn07XG5UYWJsZVJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uUm93Q2xpY2s6IHVuZGVmaW5lZFxufTtcbmV4cG9ydCBkZWZhdWx0IFRhYmxlUm93O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvVGFibGVSb3cuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi9Db25zdCc7XG5cbmNsYXNzIFRhYmxlQ29sdW1uIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICAvKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFswLCB7IFwiYXJnc1wiOiBcImFmdGVyLXVzZWRcIiB9XSAqL1xuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBzaG91bGRVcGRhdGVkID0gdGhpcy5wcm9wcy53aWR0aCAhPT0gbmV4dFByb3BzLndpZHRoXG4gICAgICB8fCB0aGlzLnByb3BzLmNsYXNzTmFtZSAhPT0gbmV4dFByb3BzLmNsYXNzTmFtZVxuICAgICAgfHwgdGhpcy5wcm9wcy5oaWRkZW4gIT09IG5leHRQcm9wcy5oaWRkZW5cbiAgICAgIHx8IHRoaXMucHJvcHMuZGF0YUFsaWduICE9PSBuZXh0UHJvcHMuZGF0YUFsaWduXG4gICAgICB8fCB0eXBlb2YgY2hpbGRyZW4gIT09IHR5cGVvZiBuZXh0UHJvcHMuY2hpbGRyZW5cbiAgICAgIHx8ICgnJyArIHRoaXMucHJvcHMub25FZGl0KS50b1N0cmluZygpICE9PSAoJycgKyBuZXh0UHJvcHMub25FZGl0KS50b1N0cmluZygpO1xuXG4gICAgaWYgKHNob3VsZFVwZGF0ZWQpIHtcbiAgICAgIHJldHVybiBzaG91bGRVcGRhdGVkO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdvYmplY3QnICYmIGNoaWxkcmVuICE9PSBudWxsICYmIGNoaWxkcmVuLnByb3BzICE9PSBudWxsKSB7XG4gICAgICBpZiAoY2hpbGRyZW4ucHJvcHMudHlwZSA9PT0gJ2NoZWNrYm94JyB8fCBjaGlsZHJlbi5wcm9wcy50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgIHNob3VsZFVwZGF0ZWQgPSBzaG91bGRVcGRhdGVkIHx8XG4gICAgICAgICAgY2hpbGRyZW4ucHJvcHMudHlwZSAhPT0gbmV4dFByb3BzLmNoaWxkcmVuLnByb3BzLnR5cGUgfHxcbiAgICAgICAgICBjaGlsZHJlbi5wcm9wcy5jaGVja2VkICE9PSBuZXh0UHJvcHMuY2hpbGRyZW4ucHJvcHMuY2hlY2tlZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3VsZFVwZGF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzaG91bGRVcGRhdGVkID0gc2hvdWxkVXBkYXRlZCB8fCBjaGlsZHJlbiAhPT0gbmV4dFByb3BzLmNoaWxkcmVuO1xuICAgIH1cblxuICAgIGlmIChzaG91bGRVcGRhdGVkKSB7XG4gICAgICByZXR1cm4gc2hvdWxkVXBkYXRlZDtcbiAgICB9XG5cbiAgICBpZiAoISh0aGlzLnByb3BzLmNlbGxFZGl0ICYmIG5leHRQcm9wcy5jZWxsRWRpdCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHNob3VsZFVwZGF0ZWRcbiAgICAgICAgfHwgdGhpcy5wcm9wcy5jZWxsRWRpdC5tb2RlICE9PSBuZXh0UHJvcHMuY2VsbEVkaXQubW9kZTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDZWxsRWRpdCA9IGUgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLmNlbGxFZGl0Lm1vZGUgPT09IENvbnN0LkNFTExfRURJVF9EQkNMSUNLKSB7XG4gICAgICBpZiAoZG9jdW1lbnQuc2VsZWN0aW9uICYmIGRvY3VtZW50LnNlbGVjdGlvbi5lbXB0eSkge1xuICAgICAgICBkb2N1bWVudC5zZWxlY3Rpb24uZW1wdHkoKTtcbiAgICAgIH0gZWxzZSBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xuICAgICAgICBjb25zdCBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vbkVkaXQoXG4gICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5yb3dJbmRleCArIDEsXG4gICAgICBlLmN1cnJlbnRUYXJnZXQuY2VsbEluZGV4KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0ZFN0eWxlID0ge1xuICAgICAgdGV4dEFsaWduOiB0aGlzLnByb3BzLmRhdGFBbGlnbixcbiAgICAgIGRpc3BsYXk6IHRoaXMucHJvcHMuaGlkZGVuID8gJ25vbmUnIDogbnVsbFxuICAgIH07XG5cbiAgICBjb25zdCBvcHRzID0ge307XG4gICAgaWYgKHRoaXMucHJvcHMuY2VsbEVkaXQpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmNlbGxFZGl0Lm1vZGUgPT09IENvbnN0LkNFTExfRURJVF9DTElDSykge1xuICAgICAgICBvcHRzLm9uQ2xpY2sgPSB0aGlzLmhhbmRsZUNlbGxFZGl0O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmNlbGxFZGl0Lm1vZGUgPT09IENvbnN0LkNFTExfRURJVF9EQkNMSUNLKSB7XG4gICAgICAgIG9wdHMub25Eb3VibGVDbGljayA9IHRoaXMuaGFuZGxlQ2VsbEVkaXQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8dGQgc3R5bGU9eyB0ZFN0eWxlIH0gY2xhc3NOYW1lPXsgdGhpcy5wcm9wcy5jbGFzc05hbWUgfSB7IC4uLm9wdHMgfT5cbiAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cbiAgICAgIDwvdGQ+XG4gICAgKTtcbiAgfVxufVxuVGFibGVDb2x1bW4ucHJvcFR5cGVzID0ge1xuICBkYXRhQWxpZ246IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhpZGRlbjogUHJvcFR5cGVzLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlXG59O1xuXG5UYWJsZUNvbHVtbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGRhdGFBbGlnbjogJ2xlZnQnLFxuICBoaWRkZW46IGZhbHNlLFxuICBjbGFzc05hbWU6ICcnXG59O1xuZXhwb3J0IGRlZmF1bHQgVGFibGVDb2x1bW47XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9UYWJsZUNvbHVtbi5qc1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBlZGl0b3IgZnJvbSAnLi9FZGl0b3InO1xuaW1wb3J0IE5vdGlmaWVyIGZyb20gJy4vTm90aWZpY2F0aW9uLmpzJztcbmltcG9ydCBjbGFzc1NldCBmcm9tICdjbGFzc25hbWVzJztcblxuY2xhc3MgVGFibGVFZGl0Q29sdW1uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy50aW1lb3V0ZUNsZWFyID0gMDtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hha2VFZGl0b3I6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUtleVByZXNzID0gZSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIC8vIFByZXNzZWQgRU5URVJcbiAgICAgIGNvbnN0IHZhbHVlID0gZS5jdXJyZW50VGFyZ2V0LnR5cGUgPT09ICdjaGVja2JveCcgP1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2dldENoZWNrQm94VmFsdWUoZSkgOiBlLmN1cnJlbnRUYXJnZXQudmFsdWU7XG5cbiAgICAgIGlmICghdGhpcy52YWxpZGF0b3IodmFsdWUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJvcHMuY29tcGxldGVFZGl0KHZhbHVlLCB0aGlzLnByb3BzLnJvd0luZGV4LCB0aGlzLnByb3BzLmNvbEluZGV4KTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgIHRoaXMucHJvcHMuY29tcGxldGVFZGl0KFxuICAgICAgICBudWxsLCB0aGlzLnByb3BzLnJvd0luZGV4LCB0aGlzLnByb3BzLmNvbEluZGV4KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVCbHVyID0gZSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuYmx1clRvU2F2ZSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBlLmN1cnJlbnRUYXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94JyA/XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2V0Q2hlY2tCb3hWYWx1ZShlKSA6IGUuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICAgIGlmICghdGhpcy52YWxpZGF0b3IodmFsdWUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJvcHMuY29tcGxldGVFZGl0KFxuICAgICAgICAgIHZhbHVlLCB0aGlzLnByb3BzLnJvd0luZGV4LCB0aGlzLnByb3BzLmNvbEluZGV4KTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0b3IodmFsdWUpIHtcbiAgICBjb25zdCB0cyA9IHRoaXM7XG4gICAgaWYgKHRzLnByb3BzLmVkaXRhYmxlLnZhbGlkYXRvcikge1xuICAgICAgY29uc3QgdmFsaWQgPSB0cy5wcm9wcy5lZGl0YWJsZS52YWxpZGF0b3IodmFsdWUpO1xuICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICB0cy5yZWZzLm5vdGlmaWVyLm5vdGljZSgnZXJyb3InLCB2YWxpZCwgJ1ByZXNzZWQgRVNDIGNhbiBjYW5jZWwnKTtcbiAgICAgICAgY29uc3QgaW5wdXQgPSB0cy5yZWZzLmlucHV0UmVmO1xuICAgICAgICAvLyBhbmltYXRlIGlucHV0XG4gICAgICAgIHRzLmNsZWFyVGltZW91dCgpO1xuICAgICAgICB0cy5zZXRTdGF0ZSh7IHNoYWtlRWRpdG9yOiB0cnVlIH0pO1xuICAgICAgICB0cy50aW1lb3V0ZUNsZWFyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdHMuc2V0U3RhdGUoeyBzaGFrZUVkaXRvcjogZmFsc2UgfSk7XG4gICAgICAgIH0sIDMwMCk7XG4gICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY2xlYXJUaW1lb3V0KCkge1xuICAgIGlmICh0aGlzLnRpbWVvdXRlQ2xlYXIgIT09IDApIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRlQ2xlYXIpO1xuICAgICAgdGhpcy50aW1lb3V0ZUNsZWFyID0gMDtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5yZWZzLmlucHV0UmVmLmZvY3VzKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmNsZWFyVGltZW91dCgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZWRpdGFibGUsIGZvcm1hdCwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzaGFrZUVkaXRvciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBhdHRyID0ge1xuICAgICAgcmVmOiAnaW5wdXRSZWYnLFxuICAgICAgb25LZXlEb3duOiB0aGlzLmhhbmRsZUtleVByZXNzLFxuICAgICAgb25CbHVyOiB0aGlzLmhhbmRsZUJsdXJcbiAgICB9O1xuICAgIC8vIHB1dCBwbGFjZWhvbGRlciBpZiBleGlzdFxuICAgIGVkaXRhYmxlLnBsYWNlaG9sZGVyICYmIChhdHRyLnBsYWNlaG9sZGVyID0gZWRpdGFibGUucGxhY2Vob2xkZXIpO1xuXG4gICAgY29uc3QgZWRpdG9yQ2xhc3MgPSBjbGFzc1NldCh7ICdhbmltYXRlZCc6IHNoYWtlRWRpdG9yLCAnc2hha2UnOiBzaGFrZUVkaXRvciB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPHRkIHJlZj0ndGQnIHN0eWxlPXsgeyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9IH0+XG4gICAgICAgIHsgZWRpdG9yKGVkaXRhYmxlLCBhdHRyLCBmb3JtYXQsIGVkaXRvckNsYXNzLCBjaGlsZHJlbiB8fCAnJykgfVxuICAgICAgICA8Tm90aWZpZXIgcmVmPSdub3RpZmllcicvPlxuICAgICAgPC90ZD5cbiAgICApO1xuICB9XG5cbiAgX2dldENoZWNrQm94VmFsdWUoZSkge1xuICAgIGxldCB2YWx1ZSA9ICcnO1xuICAgIGNvbnN0IHZhbHVlcyA9IGUuY3VycmVudFRhcmdldC52YWx1ZS5zcGxpdCgnOicpO1xuICAgIHZhbHVlID0gZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPyB2YWx1ZXNbMF0gOiB2YWx1ZXNbMV07XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59XG5cblRhYmxlRWRpdENvbHVtbi5wcm9wVHlwZXMgPSB7XG4gIGNvbXBsZXRlRWRpdDogUHJvcFR5cGVzLmZ1bmMsXG4gIHJvd0luZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb2xJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgYmx1clRvU2F2ZTogUHJvcFR5cGVzLmJvb2wsXG4gIGVkaXRhYmxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFsgUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5vYmplY3QgXSksXG4gIGZvcm1hdDogUHJvcFR5cGVzLm9uZU9mVHlwZShbIFByb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMuZnVuYyBdKSxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlRWRpdENvbHVtbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL1RhYmxlRWRpdENvbHVtbi5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGVkaXRvciA9IGZ1bmN0aW9uKGVkaXRhYmxlLCBhdHRyLCBmb3JtYXQsIGVkaXRvckNsYXNzLCBkZWZhdWx0VmFsdWUpIHtcbiAgaWYgKGVkaXRhYmxlID09PSB0cnVlIHx8IHR5cGVvZiBlZGl0YWJsZSA9PT0gJ3N0cmluZycpIHsgLy8gc2ltcGxlIGRlY2xhcmVcbiAgICBjb25zdCB0eXBlID0gZWRpdGFibGUgPyAndGV4dCcgOiBlZGl0YWJsZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGlucHV0IHsgLi4uYXR0ciB9IHR5cGU9eyB0eXBlIH0gZGVmYXVsdFZhbHVlPXsgZGVmYXVsdFZhbHVlIH1cbiAgICAgICAgICBjbGFzc05hbWU9eyAoIGVkaXRvckNsYXNzIHx8ICcnKSArICcgZm9ybS1jb250cm9sIGVkaXRvciBlZGl0LXRleHQnIH0gLz5cbiAgICApO1xuICB9IGVsc2UgaWYgKCFlZGl0YWJsZSkge1xuICAgIGNvbnN0IHR5cGUgPSBlZGl0YWJsZSA/ICd0ZXh0JyA6IGVkaXRhYmxlO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxpbnB1dCB7IC4uLmF0dHIgfSB0eXBlPXsgdHlwZSB9IGRlZmF1bHRWYWx1ZT17IGRlZmF1bHRWYWx1ZSB9XG4gICAgICAgICAgZGlzYWJsZWQ9J2Rpc2FibGVkJ1xuICAgICAgICAgIGNsYXNzTmFtZT17ICggZWRpdG9yQ2xhc3MgfHwgJycpICsgJyBmb3JtLWNvbnRyb2wgZWRpdG9yIGVkaXQtdGV4dCcgfSAvPlxuICAgICk7XG4gIH0gZWxzZSBpZiAoZWRpdGFibGUudHlwZSkgey8vIHN0YW5kYXJkIGRlY2xhcmVcbiAgICAvLyBwdXQgc3R5bGUgaWYgZXhpc3RcbiAgICBlZGl0YWJsZS5zdHlsZSAmJiAoYXR0ci5zdHlsZSA9IGVkaXRhYmxlLnN0eWxlKTtcbiAgICAvLyBwdXQgY2xhc3MgaWYgZXhpc3RcbiAgICBhdHRyLmNsYXNzTmFtZSA9IChlZGl0b3JDbGFzcyB8fCAnJykgK1xuICAgICAgICAgICAgICAgICAgICAgJyBmb3JtLWNvbnRyb2wgZWRpdG9yIGVkaXQtJyArXG4gICAgICAgICAgICAgICAgICAgICBlZGl0YWJsZS50eXBlICtcbiAgICAgICAgICAgICAgICAgICAgIChlZGl0YWJsZS5jbGFzc05hbWUgPyAoJyAnICsgZWRpdGFibGUuY2xhc3NOYW1lKSA6ICcnKTtcblxuICAgIGlmIChlZGl0YWJsZS50eXBlID09PSAnc2VsZWN0Jykgey8vIHByb2Nlc3Mgc2VsZWN0IGlucHV0XG4gICAgICBsZXQgb3B0aW9ucyA9IFtdO1xuICAgICAgY29uc3QgdmFsdWVzID0gZWRpdGFibGUub3B0aW9ucy52YWx1ZXM7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZXMpKSB7Ly8gb25seSBjYW4gdXNlIGFycnJheSBkYXRhIGZvciBvcHRpb25zXG4gICAgICAgIGxldCByb3dWYWx1ZTtcbiAgICAgICAgb3B0aW9ucyA9IHZhbHVlcy5tYXAoKGQsIGkpID0+IHtcbiAgICAgICAgICByb3dWYWx1ZSA9IGZvcm1hdCA/IGZvcm1hdChkKSA6IGQ7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXsgJ29wdGlvbicgKyBpIH0gdmFsdWU9eyBkIH0+eyByb3dWYWx1ZSB9PC9vcHRpb24+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c2VsZWN0IHsgLi4uYXR0ciB9IGRlZmF1bHRWYWx1ZT17IGRlZmF1bHRWYWx1ZSB9PlxuICAgICAgICAgIHsgb3B0aW9ucyB9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGVkaXRhYmxlLnR5cGUgPT09ICd0ZXh0YXJlYScpIHsvLyBwcm9jZXNzIHRleHRhcmVhIGlucHV0XG4gICAgICAvLyBwdXQgb3RoZXIgaWYgZXhpc3RcbiAgICAgIGVkaXRhYmxlLmNvbHMgJiYgKGF0dHIuY29scyA9IGVkaXRhYmxlLmNvbHMpO1xuICAgICAgZWRpdGFibGUucm93cyAmJiAoYXR0ci5yb3dzID0gZWRpdGFibGUucm93cyk7XG4gICAgICBsZXQgc2F2ZUJ0bjtcbiAgICAgIGNvbnN0IGtleVVwSGFuZGxlciA9IGF0dHIub25LZXlEb3duO1xuICAgICAgaWYgKGtleVVwSGFuZGxlcikge1xuICAgICAgICBhdHRyLm9uS2V5RG93biA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICBpZiAoZS5rZXlDb2RlICE9PSAxMykgeyAvLyBub3QgUHJlc3NlZCBFTlRFUlxuICAgICAgICAgICAga2V5VXBIYW5kbGVyKGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgc2F2ZUJ0biA9IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9J2J0biBidG4taW5mbyBidG4teHMgdGV4dGFyZWEtc2F2ZS1idG4nXG4gICAgICAgICAgICBvbkNsaWNrPXsga2V5VXBIYW5kbGVyIH0+XG4gICAgICAgICAgICBzYXZlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDx0ZXh0YXJlYSB7IC4uLmF0dHIgfSBkZWZhdWx0VmFsdWU9eyBkZWZhdWx0VmFsdWUgfT48L3RleHRhcmVhPlxuICAgICAgICAgIHsgc2F2ZUJ0biB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGVkaXRhYmxlLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIGxldCB2YWx1ZXMgPSAndHJ1ZTpmYWxzZSc7XG4gICAgICBpZiAoZWRpdGFibGUub3B0aW9ucyAmJiBlZGl0YWJsZS5vcHRpb25zLnZhbHVlcykge1xuICAgICAgICAvLyB2YWx1ZXMgPSBlZGl0YWJsZS5vcHRpb25zLnZhbHVlcy5zcGxpdCgnOicpO1xuICAgICAgICB2YWx1ZXMgPSBlZGl0YWJsZS5vcHRpb25zLnZhbHVlcztcbiAgICAgIH1cbiAgICAgIGF0dHIuY2xhc3NOYW1lID0gYXR0ci5jbGFzc05hbWUucmVwbGFjZSgnZm9ybS1jb250cm9sJywgJycpO1xuICAgICAgYXR0ci5jbGFzc05hbWUgKz0gJyBjaGVja2JveCBwdWxsLXJpZ2h0JztcblxuICAgICAgY29uc3QgY2hlY2tlZCA9IGRlZmF1bHRWYWx1ZSAmJlxuICAgICAgICBkZWZhdWx0VmFsdWUudG9TdHJpbmcoKSA9PT0gdmFsdWVzLnNwbGl0KCc6JylbMF0gPyB0cnVlIDogZmFsc2U7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxpbnB1dCB7IC4uLmF0dHIgfSB0eXBlPSdjaGVja2JveCdcbiAgICAgICAgICB2YWx1ZT17IHZhbHVlcyB9IGRlZmF1bHRDaGVja2VkPXsgY2hlY2tlZCB9Lz5cbiAgICAgICk7XG4gICAgfSBlbHNlIHsvLyBwcm9jZXNzIG90aGVyIGlucHV0IHR5cGUuIGFzIHBhc3N3b3JkLHVybCxlbWFpbC4uLlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGlucHV0IHsgLi4uYXR0ciB9IHR5cGU9J3RleHQnIGRlZmF1bHRWYWx1ZT17IGRlZmF1bHRWYWx1ZSB9Lz5cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIC8vIGRlZmF1bHQgcmV0dXJuIGZvciBvdGhlciBjYXNlIG9mIGVkaXRhYmxlXG4gIHJldHVybiAoXG4gICAgPGlucHV0IHsuLi5hdHRyfSB0eXBlPSd0ZXh0J1xuICAgICAgY2xhc3NOYW1lPXsgKGVkaXRvckNsYXNzIHx8ICcnKSArICcgZm9ybS1jb250cm9sIGVkaXRvciBlZGl0LXRleHQnIH0vPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZWRpdG9yO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvRWRpdG9yLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIFRvYXN0TWVzc2FnZSB9IGZyb20gJ3JlYWN0LXRvYXN0cic7XG5cblxuY29uc3QgVG9hc3RyTWVzc2FnZUZhY3RvcnkgPSBSZWFjdC5jcmVhdGVGYWN0b3J5KFRvYXN0TWVzc2FnZS5hbmltYXRpb24pO1xuXG5jbGFzcyBOb3RpZmljYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAvLyBhbGxvdyB0eXBlIGlzIHN1Y2Nlc3MsaW5mbyx3YXJuaW5nLGVycm9yXG4gIG5vdGljZSh0eXBlLCBtc2csIHRpdGxlKSB7XG4gICAgdGhpcy5yZWZzLnRvYXN0clt0eXBlXShcbiAgICAgIG1zZywgdGl0bGUsIHtcbiAgICAgICAgbW9kZTogJ3NpbmdsZScsXG4gICAgICAgIHRpbWVPdXQ6IDUwMDAsXG4gICAgICAgIGV4dGVuZGVkVGltZU91dDogMTAwMCxcbiAgICAgICAgc2hvd0FuaW1hdGlvbjogJ2FuaW1hdGVkICBib3VuY2VJbicsXG4gICAgICAgIGhpZGVBbmltYXRpb246ICdhbmltYXRlZCBib3VuY2VPdXQnXG4gICAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFRvYXN0Q29udGFpbmVyIHJlZj0ndG9hc3RyJ1xuICAgICAgICB0b2FzdE1lc3NhZ2VGYWN0b3J5PXsgVG9hc3RyTWVzc2FnZUZhY3RvcnkgfVxuICAgICAgICBpZD0ndG9hc3QtY29udGFpbmVyJ1xuICAgICAgICBjbGFzc05hbWU9J3RvYXN0LXRvcC1yaWdodCcvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvTm90aWZpY2F0aW9uLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlRvYXN0TWVzc2FnZSA9IGV4cG9ydHMuVG9hc3RDb250YWluZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfVG9hc3RDb250YWluZXIgPSByZXF1aXJlKFwiLi9Ub2FzdENvbnRhaW5lclwiKTtcblxudmFyIF9Ub2FzdENvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ub2FzdENvbnRhaW5lcik7XG5cbnZhciBfVG9hc3RNZXNzYWdlID0gcmVxdWlyZShcIi4vVG9hc3RNZXNzYWdlXCIpO1xuXG52YXIgX1RvYXN0TWVzc2FnZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ub2FzdE1lc3NhZ2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLlRvYXN0Q29udGFpbmVyID0gX1RvYXN0Q29udGFpbmVyMi5kZWZhdWx0O1xuZXhwb3J0cy5Ub2FzdE1lc3NhZ2UgPSBfVG9hc3RNZXNzYWdlMi5kZWZhdWx0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LXRvYXN0ci9saWIvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0QWRkb25zVXBkYXRlID0gcmVxdWlyZShcInJlYWN0LWFkZG9ucy11cGRhdGVcIik7XG5cbnZhciBfcmVhY3RBZGRvbnNVcGRhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RBZGRvbnNVcGRhdGUpO1xuXG52YXIgX1RvYXN0TWVzc2FnZSA9IHJlcXVpcmUoXCIuL1RvYXN0TWVzc2FnZVwiKTtcblxudmFyIF9Ub2FzdE1lc3NhZ2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVG9hc3RNZXNzYWdlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgVG9hc3RDb250YWluZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVG9hc3RDb250YWluZXIsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRvYXN0Q29udGFpbmVyKCkge1xuICAgIHZhciBfT2JqZWN0JGdldFByb3RvdHlwZU87XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRvYXN0Q29udGFpbmVyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9PYmplY3QkZ2V0UHJvdG90eXBlTyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihUb2FzdENvbnRhaW5lcikpLmNhbGwuYXBwbHkoX09iamVjdCRnZXRQcm90b3R5cGVPLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICB0b2FzdHM6IFtdLFxuICAgICAgdG9hc3RJZDogMCxcbiAgICAgIHByZXZpb3VzTWVzc2FnZTogbnVsbFxuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFRvYXN0Q29udGFpbmVyLCBbe1xuICAgIGtleTogXCJlcnJvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlcnJvcihtZXNzYWdlLCB0aXRsZSwgb3B0aW9uc092ZXJyaWRlKSB7XG4gICAgICB0aGlzLl9ub3RpZnkodGhpcy5wcm9wcy50b2FzdFR5cGUuZXJyb3IsIG1lc3NhZ2UsIHRpdGxlLCBvcHRpb25zT3ZlcnJpZGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpbmZvXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluZm8obWVzc2FnZSwgdGl0bGUsIG9wdGlvbnNPdmVycmlkZSkge1xuICAgICAgdGhpcy5fbm90aWZ5KHRoaXMucHJvcHMudG9hc3RUeXBlLmluZm8sIG1lc3NhZ2UsIHRpdGxlLCBvcHRpb25zT3ZlcnJpZGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdWNjZXNzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1Y2Nlc3MobWVzc2FnZSwgdGl0bGUsIG9wdGlvbnNPdmVycmlkZSkge1xuICAgICAgdGhpcy5fbm90aWZ5KHRoaXMucHJvcHMudG9hc3RUeXBlLnN1Y2Nlc3MsIG1lc3NhZ2UsIHRpdGxlLCBvcHRpb25zT3ZlcnJpZGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ3YXJuaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSwgdGl0bGUsIG9wdGlvbnNPdmVycmlkZSkge1xuICAgICAgdGhpcy5fbm90aWZ5KHRoaXMucHJvcHMudG9hc3RUeXBlLndhcm5pbmcsIG1lc3NhZ2UsIHRpdGxlLCBvcHRpb25zT3ZlcnJpZGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjbGVhclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLnJlZnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfdGhpczIucmVmc1trZXldLmhpZGVUb2FzdChmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX25vdGlmeVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfbm90aWZ5KHR5cGUsIG1lc3NhZ2UsIHRpdGxlKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIG9wdGlvbnNPdmVycmlkZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMyB8fCBhcmd1bWVudHNbM10gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzNdO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5wcmV2ZW50RHVwbGljYXRlcykge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5wcmV2aW91c01lc3NhZ2UgPT09IG1lc3NhZ2UpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBrZXkgPSB0aGlzLnN0YXRlLnRvYXN0SWQrKztcbiAgICAgIHZhciB0b2FzdElkID0ga2V5O1xuICAgICAgdmFyIG5ld1RvYXN0ID0gKDAsIF9yZWFjdEFkZG9uc1VwZGF0ZTIuZGVmYXVsdCkob3B0aW9uc092ZXJyaWRlLCB7XG4gICAgICAgICRtZXJnZToge1xuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICAgICAgdG9hc3RJZDogdG9hc3RJZCxcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICByZWY6IFwidG9hc3RzX19cIiArIGtleSxcbiAgICAgICAgICBoYW5kbGVPbkNsaWNrOiBmdW5jdGlvbiBoYW5kbGVPbkNsaWNrKGUpIHtcbiAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBvcHRpb25zT3ZlcnJpZGUuaGFuZGxlT25DbGljaykge1xuICAgICAgICAgICAgICBvcHRpb25zT3ZlcnJpZGUuaGFuZGxlT25DbGljaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5faGFuZGxlX3RvYXN0X29uX2NsaWNrKGUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgaGFuZGxlUmVtb3ZlOiB0aGlzLl9oYW5kbGVfdG9hc3RfcmVtb3ZlLmJpbmQodGhpcylcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB2YXIgdG9hc3RPcGVyYXRpb24gPSBfZGVmaW5lUHJvcGVydHkoe30sIFwiXCIgKyAodGhpcy5wcm9wcy5uZXdlc3RPblRvcCA/IFwiJHVuc2hpZnRcIiA6IFwiJHB1c2hcIiksIFtuZXdUb2FzdF0pO1xuXG4gICAgICB2YXIgbmV4dFN0YXRlID0gKDAsIF9yZWFjdEFkZG9uc1VwZGF0ZTIuZGVmYXVsdCkodGhpcy5zdGF0ZSwge1xuICAgICAgICB0b2FzdHM6IHRvYXN0T3BlcmF0aW9uLFxuICAgICAgICBwcmV2aW91c01lc3NhZ2U6IHsgJHNldDogbWVzc2FnZSB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2hhbmRsZV90b2FzdF9vbl9jbGlja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlX3RvYXN0X29uX2NsaWNrKGV2ZW50KSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuICAgICAgaWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfaGFuZGxlX3RvYXN0X3JlbW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlX3RvYXN0X3JlbW92ZSh0b2FzdElkKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgdmFyIG9wZXJhdGlvbk5hbWUgPSBcIlwiICsgKHRoaXMucHJvcHMubmV3ZXN0T25Ub3AgPyBcInJlZHVjZVJpZ2h0XCIgOiBcInJlZHVjZVwiKTtcbiAgICAgIHRoaXMuc3RhdGUudG9hc3RzW29wZXJhdGlvbk5hbWVdKGZ1bmN0aW9uIChmb3VuZCwgdG9hc3QsIGluZGV4KSB7XG4gICAgICAgIGlmIChmb3VuZCB8fCB0b2FzdC50b2FzdElkICE9PSB0b2FzdElkKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzNC5zZXRTdGF0ZSgoMCwgX3JlYWN0QWRkb25zVXBkYXRlMi5kZWZhdWx0KShfdGhpczQuc3RhdGUsIHtcbiAgICAgICAgICB0b2FzdHM6IHsgJHNwbGljZTogW1tpbmRleCwgMV1dIH1cbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sIGZhbHNlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IFwiYXJpYS1saXZlXCI6IFwicG9saXRlXCIsIHJvbGU6IFwiYWxlcnRcIiB9KSxcbiAgICAgICAgdGhpcy5zdGF0ZS50b2FzdHMubWFwKGZ1bmN0aW9uICh0b2FzdCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczUucHJvcHMudG9hc3RNZXNzYWdlRmFjdG9yeSh0b2FzdCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBUb2FzdENvbnRhaW5lcjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblRvYXN0Q29udGFpbmVyLnByb3BUeXBlcyA9IHtcbiAgdG9hc3RUeXBlOiBfcmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBlcnJvcjogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgaW5mbzogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3VjY2VzczogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgd2FybmluZzogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmdcbiAgfSkuaXNSZXF1aXJlZCxcbiAgaWQ6IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRvYXN0TWVzc2FnZUZhY3Rvcnk6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBwcmV2ZW50RHVwbGljYXRlczogX3JlYWN0LlByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIG5ld2VzdE9uVG9wOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgb25DbGljazogX3JlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5Ub2FzdENvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIHRvYXN0VHlwZToge1xuICAgIGVycm9yOiBcImVycm9yXCIsXG4gICAgaW5mbzogXCJpbmZvXCIsXG4gICAgc3VjY2VzczogXCJzdWNjZXNzXCIsXG4gICAgd2FybmluZzogXCJ3YXJuaW5nXCJcbiAgfSxcbiAgaWQ6IFwidG9hc3QtY29udGFpbmVyXCIsXG4gIHRvYXN0TWVzc2FnZUZhY3Rvcnk6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVGYWN0b3J5KF9Ub2FzdE1lc3NhZ2UyLmRlZmF1bHQpLFxuICBwcmV2ZW50RHVwbGljYXRlczogZmFsc2UsXG4gIG5ld2VzdE9uVG9wOiB0cnVlLFxuICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge31cbn07XG5leHBvcnRzLmRlZmF1bHQgPSBUb2FzdENvbnRhaW5lcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC10b2FzdHIvbGliL1RvYXN0Q29udGFpbmVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgncmVhY3QvbGliL3VwZGF0ZScpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWFkZG9ucy11cGRhdGUvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIHVwZGF0ZVxuICovXG5cbi8qIGdsb2JhbCBoYXNPd25Qcm9wZXJ0eTp0cnVlICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJy4vT2JqZWN0LmFzc2lnbicpO1xudmFyIGtleU9mID0gcmVxdWlyZSgnZmJqcy9saWIva2V5T2YnKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9ICh7fSkuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIHNoYWxsb3dDb3B5KHgpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoeCkpIHtcbiAgICByZXR1cm4geC5jb25jYXQoKTtcbiAgfSBlbHNlIGlmICh4ICYmIHR5cGVvZiB4ID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBhc3NpZ24obmV3IHguY29uc3RydWN0b3IoKSwgeCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHg7XG4gIH1cbn1cblxudmFyIENPTU1BTkRfUFVTSCA9IGtleU9mKHsgJHB1c2g6IG51bGwgfSk7XG52YXIgQ09NTUFORF9VTlNISUZUID0ga2V5T2YoeyAkdW5zaGlmdDogbnVsbCB9KTtcbnZhciBDT01NQU5EX1NQTElDRSA9IGtleU9mKHsgJHNwbGljZTogbnVsbCB9KTtcbnZhciBDT01NQU5EX1NFVCA9IGtleU9mKHsgJHNldDogbnVsbCB9KTtcbnZhciBDT01NQU5EX01FUkdFID0ga2V5T2YoeyAkbWVyZ2U6IG51bGwgfSk7XG52YXIgQ09NTUFORF9BUFBMWSA9IGtleU9mKHsgJGFwcGx5OiBudWxsIH0pO1xuXG52YXIgQUxMX0NPTU1BTkRTX0xJU1QgPSBbQ09NTUFORF9QVVNILCBDT01NQU5EX1VOU0hJRlQsIENPTU1BTkRfU1BMSUNFLCBDT01NQU5EX1NFVCwgQ09NTUFORF9NRVJHRSwgQ09NTUFORF9BUFBMWV07XG5cbnZhciBBTExfQ09NTUFORFNfU0VUID0ge307XG5cbkFMTF9DT01NQU5EU19MSVNULmZvckVhY2goZnVuY3Rpb24gKGNvbW1hbmQpIHtcbiAgQUxMX0NPTU1BTkRTX1NFVFtjb21tYW5kXSA9IHRydWU7XG59KTtcblxuZnVuY3Rpb24gaW52YXJpYW50QXJyYXlDYXNlKHZhbHVlLCBzcGVjLCBjb21tYW5kKSB7XG4gICFBcnJheS5pc0FycmF5KHZhbHVlKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICd1cGRhdGUoKTogZXhwZWN0ZWQgdGFyZ2V0IG9mICVzIHRvIGJlIGFuIGFycmF5OyBnb3QgJXMuJywgY29tbWFuZCwgdmFsdWUpIDogaW52YXJpYW50KGZhbHNlKSA6IHVuZGVmaW5lZDtcbiAgdmFyIHNwZWNWYWx1ZSA9IHNwZWNbY29tbWFuZF07XG4gICFBcnJheS5pc0FycmF5KHNwZWNWYWx1ZSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAndXBkYXRlKCk6IGV4cGVjdGVkIHNwZWMgb2YgJXMgdG8gYmUgYW4gYXJyYXk7IGdvdCAlcy4gJyArICdEaWQgeW91IGZvcmdldCB0byB3cmFwIHlvdXIgcGFyYW1ldGVyIGluIGFuIGFycmF5PycsIGNvbW1hbmQsIHNwZWNWYWx1ZSkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB1cGRhdGUodmFsdWUsIHNwZWMpIHtcbiAgISh0eXBlb2Ygc3BlYyA9PT0gJ29iamVjdCcpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ3VwZGF0ZSgpOiBZb3UgcHJvdmlkZWQgYSBrZXkgcGF0aCB0byB1cGRhdGUoKSB0aGF0IGRpZCBub3QgY29udGFpbiBvbmUgJyArICdvZiAlcy4gRGlkIHlvdSBmb3JnZXQgdG8gaW5jbHVkZSB7JXM6IC4uLn0/JywgQUxMX0NPTU1BTkRTX0xJU1Quam9pbignLCAnKSwgQ09NTUFORF9TRVQpIDogaW52YXJpYW50KGZhbHNlKSA6IHVuZGVmaW5lZDtcblxuICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzcGVjLCBDT01NQU5EX1NFVCkpIHtcbiAgICAhKE9iamVjdC5rZXlzKHNwZWMpLmxlbmd0aCA9PT0gMSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnQ2Fubm90IGhhdmUgbW9yZSB0aGFuIG9uZSBrZXkgaW4gYW4gb2JqZWN0IHdpdGggJXMnLCBDT01NQU5EX1NFVCkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xuXG4gICAgcmV0dXJuIHNwZWNbQ09NTUFORF9TRVRdO1xuICB9XG5cbiAgdmFyIG5leHRWYWx1ZSA9IHNoYWxsb3dDb3B5KHZhbHVlKTtcblxuICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzcGVjLCBDT01NQU5EX01FUkdFKSkge1xuICAgIHZhciBtZXJnZU9iaiA9IHNwZWNbQ09NTUFORF9NRVJHRV07XG4gICAgIShtZXJnZU9iaiAmJiB0eXBlb2YgbWVyZ2VPYmogPT09ICdvYmplY3QnKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICd1cGRhdGUoKTogJXMgZXhwZWN0cyBhIHNwZWMgb2YgdHlwZSBcXCdvYmplY3RcXCc7IGdvdCAlcycsIENPTU1BTkRfTUVSR0UsIG1lcmdlT2JqKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG4gICAgIShuZXh0VmFsdWUgJiYgdHlwZW9mIG5leHRWYWx1ZSA9PT0gJ29iamVjdCcpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ3VwZGF0ZSgpOiAlcyBleHBlY3RzIGEgdGFyZ2V0IG9mIHR5cGUgXFwnb2JqZWN0XFwnOyBnb3QgJXMnLCBDT01NQU5EX01FUkdFLCBuZXh0VmFsdWUpIDogaW52YXJpYW50KGZhbHNlKSA6IHVuZGVmaW5lZDtcbiAgICBhc3NpZ24obmV4dFZhbHVlLCBzcGVjW0NPTU1BTkRfTUVSR0VdKTtcbiAgfVxuXG4gIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHNwZWMsIENPTU1BTkRfUFVTSCkpIHtcbiAgICBpbnZhcmlhbnRBcnJheUNhc2UodmFsdWUsIHNwZWMsIENPTU1BTkRfUFVTSCk7XG4gICAgc3BlY1tDT01NQU5EX1BVU0hdLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIG5leHRWYWx1ZS5wdXNoKGl0ZW0pO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc3BlYywgQ09NTUFORF9VTlNISUZUKSkge1xuICAgIGludmFyaWFudEFycmF5Q2FzZSh2YWx1ZSwgc3BlYywgQ09NTUFORF9VTlNISUZUKTtcbiAgICBzcGVjW0NPTU1BTkRfVU5TSElGVF0uZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgbmV4dFZhbHVlLnVuc2hpZnQoaXRlbSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzcGVjLCBDT01NQU5EX1NQTElDRSkpIHtcbiAgICAhQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnRXhwZWN0ZWQgJXMgdGFyZ2V0IHRvIGJlIGFuIGFycmF5OyBnb3QgJXMnLCBDT01NQU5EX1NQTElDRSwgdmFsdWUpIDogaW52YXJpYW50KGZhbHNlKSA6IHVuZGVmaW5lZDtcbiAgICAhQXJyYXkuaXNBcnJheShzcGVjW0NPTU1BTkRfU1BMSUNFXSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAndXBkYXRlKCk6IGV4cGVjdGVkIHNwZWMgb2YgJXMgdG8gYmUgYW4gYXJyYXkgb2YgYXJyYXlzOyBnb3QgJXMuICcgKyAnRGlkIHlvdSBmb3JnZXQgdG8gd3JhcCB5b3VyIHBhcmFtZXRlcnMgaW4gYW4gYXJyYXk/JywgQ09NTUFORF9TUExJQ0UsIHNwZWNbQ09NTUFORF9TUExJQ0VdKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG4gICAgc3BlY1tDT01NQU5EX1NQTElDRV0uZm9yRWFjaChmdW5jdGlvbiAoYXJncykge1xuICAgICAgIUFycmF5LmlzQXJyYXkoYXJncykgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAndXBkYXRlKCk6IGV4cGVjdGVkIHNwZWMgb2YgJXMgdG8gYmUgYW4gYXJyYXkgb2YgYXJyYXlzOyBnb3QgJXMuICcgKyAnRGlkIHlvdSBmb3JnZXQgdG8gd3JhcCB5b3VyIHBhcmFtZXRlcnMgaW4gYW4gYXJyYXk/JywgQ09NTUFORF9TUExJQ0UsIHNwZWNbQ09NTUFORF9TUExJQ0VdKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG4gICAgICBuZXh0VmFsdWUuc3BsaWNlLmFwcGx5KG5leHRWYWx1ZSwgYXJncyk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzcGVjLCBDT01NQU5EX0FQUExZKSkge1xuICAgICEodHlwZW9mIHNwZWNbQ09NTUFORF9BUFBMWV0gPT09ICdmdW5jdGlvbicpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ3VwZGF0ZSgpOiBleHBlY3RlZCBzcGVjIG9mICVzIHRvIGJlIGEgZnVuY3Rpb247IGdvdCAlcy4nLCBDT01NQU5EX0FQUExZLCBzcGVjW0NPTU1BTkRfQVBQTFldKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG4gICAgbmV4dFZhbHVlID0gc3BlY1tDT01NQU5EX0FQUExZXShuZXh0VmFsdWUpO1xuICB9XG5cbiAgZm9yICh2YXIgayBpbiBzcGVjKSB7XG4gICAgaWYgKCEoQUxMX0NPTU1BTkRTX1NFVC5oYXNPd25Qcm9wZXJ0eShrKSAmJiBBTExfQ09NTUFORFNfU0VUW2tdKSkge1xuICAgICAgbmV4dFZhbHVlW2tdID0gdXBkYXRlKHZhbHVlW2tdLCBzcGVjW2tdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV4dFZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVwZGF0ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC9saWIvdXBkYXRlLmpzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBPYmplY3QuYXNzaWduXG4gKi9cblxuLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLW9iamVjdC5hc3NpZ25cblxuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2VzKSB7XG4gIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gdGFyZ2V0IGNhbm5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICB9XG5cbiAgdmFyIHRvID0gT2JqZWN0KHRhcmdldCk7XG4gIHZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbiAgZm9yICh2YXIgbmV4dEluZGV4ID0gMTsgbmV4dEluZGV4IDwgYXJndW1lbnRzLmxlbmd0aDsgbmV4dEluZGV4KyspIHtcbiAgICB2YXIgbmV4dFNvdXJjZSA9IGFyZ3VtZW50c1tuZXh0SW5kZXhdO1xuICAgIGlmIChuZXh0U291cmNlID09IG51bGwpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBmcm9tID0gT2JqZWN0KG5leHRTb3VyY2UpO1xuXG4gICAgLy8gV2UgZG9uJ3QgY3VycmVudGx5IHN1cHBvcnQgYWNjZXNzb3JzIG5vciBwcm94aWVzLiBUaGVyZWZvcmUgdGhpc1xuICAgIC8vIGNvcHkgY2Fubm90IHRocm93LiBJZiB3ZSBldmVyIHN1cHBvcnRlZCB0aGlzIHRoZW4gd2UgbXVzdCBoYW5kbGVcbiAgICAvLyBleGNlcHRpb25zIGFuZCBzaWRlLWVmZmVjdHMuIFdlIGRvbid0IHN1cHBvcnQgc3ltYm9scyBzbyB0aGV5IHdvbid0XG4gICAgLy8gYmUgdHJhbnNmZXJyZWQuXG5cbiAgICBmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuICAgICAgICB0b1trZXldID0gZnJvbVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0bztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NpZ247XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvbGliL09iamVjdC5hc3NpZ24uanNcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGtleU9mXG4gKi9cblxuLyoqXG4gKiBBbGxvd3MgZXh0cmFjdGlvbiBvZiBhIG1pbmlmaWVkIGtleS4gTGV0J3MgdGhlIGJ1aWxkIHN5c3RlbSBtaW5pZnkga2V5c1xuICogd2l0aG91dCBsb3NpbmcgdGhlIGFiaWxpdHkgdG8gZHluYW1pY2FsbHkgdXNlIGtleSBzdHJpbmdzIGFzIHZhbHVlc1xuICogdGhlbXNlbHZlcy4gUGFzcyBpbiBhbiBvYmplY3Qgd2l0aCBhIHNpbmdsZSBrZXkvdmFsIHBhaXIgYW5kIGl0IHdpbGwgcmV0dXJuXG4gKiB5b3UgdGhlIHN0cmluZyBrZXkgb2YgdGhhdCBzaW5nbGUgcmVjb3JkLiBTdXBwb3NlIHlvdSB3YW50IHRvIGdyYWIgdGhlXG4gKiB2YWx1ZSBmb3IgYSBrZXkgJ2NsYXNzTmFtZScgaW5zaWRlIG9mIGFuIG9iamVjdC4gS2V5L3ZhbCBtaW5pZmljYXRpb24gbWF5XG4gKiBoYXZlIGFsaWFzZWQgdGhhdCBrZXkgdG8gYmUgJ3hhMTInLiBrZXlPZih7Y2xhc3NOYW1lOiBudWxsfSkgd2lsbCByZXR1cm5cbiAqICd4YTEyJyBpbiB0aGF0IGNhc2UuIFJlc29sdmUga2V5cyB5b3Ugd2FudCB0byB1c2Ugb25jZSBhdCBzdGFydHVwIHRpbWUsIHRoZW5cbiAqIHJldXNlIHRob3NlIHJlc29sdXRpb25zLlxuICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGtleU9mID0gZnVuY3Rpb24gKG9uZUtleU9iaikge1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBvbmVLZXlPYmopIHtcbiAgICBpZiAoIW9uZUtleU9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgcmV0dXJuIGtleTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5T2Y7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZmJqcy9saWIva2V5T2YuanNcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGludmFyaWFudFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcignTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZianMvbGliL2ludmFyaWFudC5qc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMualF1ZXJ5ID0gZXhwb3J0cy5hbmltYXRpb24gPSB1bmRlZmluZWQ7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0QWRkb25zVXBkYXRlID0gcmVxdWlyZShcInJlYWN0LWFkZG9ucy11cGRhdGVcIik7XG5cbnZhciBfcmVhY3RBZGRvbnNVcGRhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RBZGRvbnNVcGRhdGUpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX2FuaW1hdGlvbk1peGluID0gcmVxdWlyZShcIi4vYW5pbWF0aW9uTWl4aW5cIik7XG5cbnZhciBfYW5pbWF0aW9uTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYW5pbWF0aW9uTWl4aW4pO1xuXG52YXIgX2pRdWVyeU1peGluID0gcmVxdWlyZShcIi4valF1ZXJ5TWl4aW5cIik7XG5cbnZhciBfalF1ZXJ5TWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfalF1ZXJ5TWl4aW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBub29wKCkge31cblxudmFyIFRvYXN0TWVzc2FnZVNwZWMgPSB7XG4gIGRpc3BsYXlOYW1lOiBcIlRvYXN0TWVzc2FnZVwiLFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHZhciBpY29uQ2xhc3NOYW1lcyA9IHtcbiAgICAgIGVycm9yOiBcInRvYXN0LWVycm9yXCIsXG4gICAgICBpbmZvOiBcInRvYXN0LWluZm9cIixcbiAgICAgIHN1Y2Nlc3M6IFwidG9hc3Qtc3VjY2Vzc1wiLFxuICAgICAgd2FybmluZzogXCJ0b2FzdC13YXJuaW5nXCJcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzTmFtZTogXCJ0b2FzdFwiLFxuICAgICAgaWNvbkNsYXNzTmFtZXM6IGljb25DbGFzc05hbWVzLFxuICAgICAgdGl0bGVDbGFzc05hbWU6IFwidG9hc3QtdGl0bGVcIixcbiAgICAgIG1lc3NhZ2VDbGFzc05hbWU6IFwidG9hc3QtbWVzc2FnZVwiLFxuICAgICAgdGFwVG9EaXNtaXNzOiB0cnVlLFxuICAgICAgY2xvc2VCdXR0b246IGZhbHNlXG4gICAgfTtcbiAgfSxcbiAgaGFuZGxlT25DbGljazogZnVuY3Rpb24gaGFuZGxlT25DbGljayhldmVudCkge1xuICAgIHRoaXMucHJvcHMuaGFuZGxlT25DbGljayhldmVudCk7XG4gICAgaWYgKHRoaXMucHJvcHMudGFwVG9EaXNtaXNzKSB7XG4gICAgICB0aGlzLmhpZGVUb2FzdCh0cnVlKTtcbiAgICB9XG4gIH0sXG4gIF9oYW5kbGVfY2xvc2VfYnV0dG9uX2NsaWNrOiBmdW5jdGlvbiBfaGFuZGxlX2Nsb3NlX2J1dHRvbl9jbGljayhldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuaGlkZVRvYXN0KHRydWUpO1xuICB9LFxuICBfaGFuZGxlX3JlbW92ZTogZnVuY3Rpb24gX2hhbmRsZV9yZW1vdmUoKSB7XG4gICAgdGhpcy5wcm9wcy5oYW5kbGVSZW1vdmUodGhpcy5wcm9wcy50b2FzdElkKTtcbiAgfSxcbiAgX3JlbmRlcl9jbG9zZV9idXR0b246IGZ1bmN0aW9uIF9yZW5kZXJfY2xvc2VfYnV0dG9uKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmNsb3NlQnV0dG9uID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgICAgY2xhc3NOYW1lOiBcInRvYXN0LWNsb3NlLWJ1dHRvblwiLCByb2xlOiBcImJ1dHRvblwiLFxuICAgICAgb25DbGljazogdGhpcy5faGFuZGxlX2Nsb3NlX2J1dHRvbl9jbGljayxcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7IF9faHRtbDogXCImdGltZXM7XCIgfVxuICAgIH0pIDogZmFsc2U7XG4gIH0sXG4gIF9yZW5kZXJfdGl0bGVfZWxlbWVudDogZnVuY3Rpb24gX3JlbmRlcl90aXRsZV9lbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnRpdGxlID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBjbGFzc05hbWU6IHRoaXMucHJvcHMudGl0bGVDbGFzc05hbWUgfSxcbiAgICAgIHRoaXMucHJvcHMudGl0bGVcbiAgICApIDogZmFsc2U7XG4gIH0sXG4gIF9yZW5kZXJfbWVzc2FnZV9lbGVtZW50OiBmdW5jdGlvbiBfcmVuZGVyX21lc3NhZ2VfZWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5tZXNzYWdlID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBjbGFzc05hbWU6IHRoaXMucHJvcHMubWVzc2FnZUNsYXNzTmFtZSB9LFxuICAgICAgdGhpcy5wcm9wcy5tZXNzYWdlXG4gICAgKSA6IGZhbHNlO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgaWNvbkNsYXNzTmFtZSA9IHRoaXMucHJvcHMuaWNvbkNsYXNzTmFtZSB8fCB0aGlzLnByb3BzLmljb25DbGFzc05hbWVzW3RoaXMucHJvcHMudHlwZV07XG5cbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGljb25DbGFzc05hbWUpLFxuICAgICAgICBzdHlsZTogdGhpcy5wcm9wcy5zdHlsZSxcbiAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVPbkNsaWNrLFxuICAgICAgICBvbk1vdXNlRW50ZXI6IHRoaXMuaGFuZGxlTW91c2VFbnRlcixcbiAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLmhhbmRsZU1vdXNlTGVhdmVcbiAgICAgIH0sXG4gICAgICB0aGlzLl9yZW5kZXJfY2xvc2VfYnV0dG9uKCksXG4gICAgICB0aGlzLl9yZW5kZXJfdGl0bGVfZWxlbWVudCgpLFxuICAgICAgdGhpcy5fcmVuZGVyX21lc3NhZ2VfZWxlbWVudCgpXG4gICAgKTtcbiAgfVxufTtcblxudmFyIGFuaW1hdGlvbiA9IGV4cG9ydHMuYW5pbWF0aW9uID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUNsYXNzKCgwLCBfcmVhY3RBZGRvbnNVcGRhdGUyLmRlZmF1bHQpKFRvYXN0TWVzc2FnZVNwZWMsIHtcbiAgZGlzcGxheU5hbWU6IHsgJHNldDogXCJUb2FzdE1lc3NhZ2UuYW5pbWF0aW9uXCIgfSxcbiAgbWl4aW5zOiB7ICRzZXQ6IFtfYW5pbWF0aW9uTWl4aW4yLmRlZmF1bHRdIH1cbn0pKTtcblxudmFyIGpRdWVyeSA9IGV4cG9ydHMualF1ZXJ5ID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUNsYXNzKCgwLCBfcmVhY3RBZGRvbnNVcGRhdGUyLmRlZmF1bHQpKFRvYXN0TWVzc2FnZVNwZWMsIHtcbiAgZGlzcGxheU5hbWU6IHsgJHNldDogXCJUb2FzdE1lc3NhZ2UualF1ZXJ5XCIgfSxcbiAgbWl4aW5zOiB7ICRzZXQ6IFtfalF1ZXJ5TWl4aW4yLmRlZmF1bHRdIH1cbn0pKTtcblxuLypcbiAqIGFzc2lnbiBkZWZhdWx0IG5vb3AgZnVuY3Rpb25zXG4gKi9cblRvYXN0TWVzc2FnZVNwZWMuaGFuZGxlTW91c2VFbnRlciA9IG5vb3A7XG5Ub2FzdE1lc3NhZ2VTcGVjLmhhbmRsZU1vdXNlTGVhdmUgPSBub29wO1xuVG9hc3RNZXNzYWdlU3BlYy5oaWRlVG9hc3QgPSBub29wO1xuXG52YXIgVG9hc3RNZXNzYWdlID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUNsYXNzKFRvYXN0TWVzc2FnZVNwZWMpO1xuXG5Ub2FzdE1lc3NhZ2UuYW5pbWF0aW9uID0gYW5pbWF0aW9uO1xuVG9hc3RNZXNzYWdlLmpRdWVyeSA9IGpRdWVyeTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVG9hc3RNZXNzYWdlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LXRvYXN0ci9saWIvVG9hc3RNZXNzYWdlL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1JlYWN0VHJhbnNpdGlvbkV2ZW50cyA9IHJlcXVpcmUoXCJyZWFjdC9saWIvUmVhY3RUcmFuc2l0aW9uRXZlbnRzXCIpO1xuXG52YXIgX1JlYWN0VHJhbnNpdGlvbkV2ZW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9SZWFjdFRyYW5zaXRpb25FdmVudHMpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfZWxlbWVudENsYXNzID0gcmVxdWlyZShcImVsZW1lbnQtY2xhc3NcIik7XG5cbnZhciBfZWxlbWVudENsYXNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2VsZW1lbnRDbGFzcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBUSUNLID0gMTc7XG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNpdGlvbjogbnVsbCwgLy8gc29tZSBleGFtcGxlcyBkZWZpbmVkIGluIGluZGV4LnNjc3MgKHNjYWxlLCBmYWRlSW5PdXQsIHJvdGF0ZSlcbiAgICAgIHNob3dBbmltYXRpb246IFwiYW5pbWF0ZWQgYm91bmNlSW5cIiwgLy8gb3Igb3RoZXIgYW5pbWF0aW9ucyBmcm9tIGFuaW1hdGUuY3NzXG4gICAgICBoaWRlQW5pbWF0aW9uOiBcImFuaW1hdGVkIGJvdW5jZU91dFwiLFxuICAgICAgdGltZU91dDogNTAwMCxcbiAgICAgIGV4dGVuZGVkVGltZU91dDogMTAwMFxuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuY2xhc3NOYW1lUXVldWUgPSBbXTtcbiAgICB0aGlzLmlzSGlkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5pbnRlcnZhbElkID0gbnVsbDtcbiAgfSxcbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLl9pc19tb3VudGVkID0gdHJ1ZTtcbiAgICB0aGlzLl9zaG93KCk7XG4gICAgdmFyIG5vZGUgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcyk7XG5cbiAgICB2YXIgb25IaWRlQ29tcGxldGUgPSBmdW5jdGlvbiBvbkhpZGVDb21wbGV0ZSgpIHtcbiAgICAgIGlmIChfdGhpcy5pc0hpZGluZykge1xuICAgICAgICBfdGhpcy5fc2V0X2lzX2hpZGluZyhmYWxzZSk7XG4gICAgICAgIF9SZWFjdFRyYW5zaXRpb25FdmVudHMyLmRlZmF1bHQucmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBvbkhpZGVDb21wbGV0ZSk7XG4gICAgICAgIF90aGlzLl9oYW5kbGVfcmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBfUmVhY3RUcmFuc2l0aW9uRXZlbnRzMi5kZWZhdWx0LmFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgb25IaWRlQ29tcGxldGUpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMudGltZU91dCA+IDApIHtcbiAgICAgIHRoaXMuX3NldF9pbnRlcnZhbF9pZChzZXRUaW1lb3V0KHRoaXMuaGlkZVRvYXN0LCB0aGlzLnByb3BzLnRpbWVPdXQpKTtcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLl9pc19tb3VudGVkID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuaW50ZXJ2YWxJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaW50ZXJ2YWxJZCk7XG4gICAgfVxuICB9LFxuICBfc2V0X3RyYW5zaXRpb246IGZ1bmN0aW9uIF9zZXRfdHJhbnNpdGlvbihoaWRlKSB7XG4gICAgdmFyIGFuaW1hdGlvblR5cGUgPSBoaWRlID8gXCJsZWF2ZVwiIDogXCJlbnRlclwiO1xuICAgIHZhciBub2RlID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIHZhciBjbGFzc05hbWUgPSB0aGlzLnByb3BzLnRyYW5zaXRpb24gKyBcIi1cIiArIGFuaW1hdGlvblR5cGU7XG4gICAgdmFyIGFjdGl2ZUNsYXNzTmFtZSA9IGNsYXNzTmFtZSArIFwiLWFjdGl2ZVwiO1xuXG4gICAgdmFyIGVuZExpc3RlbmVyID0gZnVuY3Rpb24gZW5kTGlzdGVuZXIoZSkge1xuICAgICAgaWYgKGUgJiYgZS50YXJnZXQgIT09IG5vZGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2xhc3NMaXN0ID0gKDAsIF9lbGVtZW50Q2xhc3MyLmRlZmF1bHQpKG5vZGUpO1xuICAgICAgY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgY2xhc3NMaXN0LnJlbW92ZShhY3RpdmVDbGFzc05hbWUpO1xuXG4gICAgICBfUmVhY3RUcmFuc2l0aW9uRXZlbnRzMi5kZWZhdWx0LnJlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgZW5kTGlzdGVuZXIpO1xuICAgIH07XG5cbiAgICBfUmVhY3RUcmFuc2l0aW9uRXZlbnRzMi5kZWZhdWx0LmFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgZW5kTGlzdGVuZXIpO1xuXG4gICAgKDAsIF9lbGVtZW50Q2xhc3MyLmRlZmF1bHQpKG5vZGUpLmFkZChjbGFzc05hbWUpO1xuXG4gICAgLy8gTmVlZCB0byBkbyB0aGlzIHRvIGFjdHVhbGx5IHRyaWdnZXIgYSB0cmFuc2l0aW9uLlxuICAgIHRoaXMuX3F1ZXVlX2NsYXNzKGFjdGl2ZUNsYXNzTmFtZSk7XG4gIH0sXG4gIF9jbGVhcl90cmFuc2l0aW9uOiBmdW5jdGlvbiBfY2xlYXJfdHJhbnNpdGlvbihoaWRlKSB7XG4gICAgdmFyIG5vZGUgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcyk7XG4gICAgdmFyIGFuaW1hdGlvblR5cGUgPSBoaWRlID8gXCJsZWF2ZVwiIDogXCJlbnRlclwiO1xuICAgIHZhciBjbGFzc05hbWUgPSB0aGlzLnByb3BzLnRyYW5zaXRpb24gKyBcIi1cIiArIGFuaW1hdGlvblR5cGU7XG4gICAgdmFyIGFjdGl2ZUNsYXNzTmFtZSA9IGNsYXNzTmFtZSArIFwiLWFjdGl2ZVwiO1xuXG4gICAgdmFyIGNsYXNzTGlzdCA9ICgwLCBfZWxlbWVudENsYXNzMi5kZWZhdWx0KShub2RlKTtcbiAgICBjbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgY2xhc3NMaXN0LnJlbW92ZShhY3RpdmVDbGFzc05hbWUpO1xuICB9LFxuICBfc2V0X2FuaW1hdGlvbjogZnVuY3Rpb24gX3NldF9hbmltYXRpb24oaGlkZSkge1xuICAgIHZhciBub2RlID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIHZhciBhbmltYXRpb25zID0gdGhpcy5fZ2V0X2FuaW1hdGlvbl9jbGFzc2VzKGhpZGUpO1xuICAgIHZhciBlbmRMaXN0ZW5lciA9IGZ1bmN0aW9uIGVuZExpc3RlbmVyKGUpIHtcbiAgICAgIGlmIChlICYmIGUudGFyZ2V0ICE9PSBub2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYW5pbWF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhbmltKSB7XG4gICAgICAgIHJldHVybiAoMCwgX2VsZW1lbnRDbGFzczIuZGVmYXVsdCkobm9kZSkucmVtb3ZlKGFuaW0pO1xuICAgICAgfSk7XG5cbiAgICAgIF9SZWFjdFRyYW5zaXRpb25FdmVudHMyLmRlZmF1bHQucmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBlbmRMaXN0ZW5lcik7XG4gICAgfTtcblxuICAgIF9SZWFjdFRyYW5zaXRpb25FdmVudHMyLmRlZmF1bHQuYWRkRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBlbmRMaXN0ZW5lcik7XG5cbiAgICBhbmltYXRpb25zLmZvckVhY2goZnVuY3Rpb24gKGFuaW0pIHtcbiAgICAgIHJldHVybiAoMCwgX2VsZW1lbnRDbGFzczIuZGVmYXVsdCkobm9kZSkuYWRkKGFuaW0pO1xuICAgIH0pO1xuICB9LFxuICBfZ2V0X2FuaW1hdGlvbl9jbGFzc2VzOiBmdW5jdGlvbiBfZ2V0X2FuaW1hdGlvbl9jbGFzc2VzKGhpZGUpIHtcbiAgICB2YXIgYW5pbWF0aW9ucyA9IGhpZGUgPyB0aGlzLnByb3BzLmhpZGVBbmltYXRpb24gOiB0aGlzLnByb3BzLnNob3dBbmltYXRpb247XG4gICAgaWYgKFwiW29iamVjdCBBcnJheV1cIiA9PT0gdG9TdHJpbmcuY2FsbChhbmltYXRpb25zKSkge1xuICAgICAgcmV0dXJuIGFuaW1hdGlvbnM7XG4gICAgfSBlbHNlIGlmIChcInN0cmluZ1wiID09PSB0eXBlb2YgYW5pbWF0aW9ucykge1xuICAgICAgcmV0dXJuIGFuaW1hdGlvbnMuc3BsaXQoXCIgXCIpO1xuICAgIH1cbiAgfSxcbiAgX2NsZWFyX2FuaW1hdGlvbjogZnVuY3Rpb24gX2NsZWFyX2FuaW1hdGlvbihoaWRlKSB7XG4gICAgdmFyIG5vZGUgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcyk7XG4gICAgdmFyIGFuaW1hdGlvbnMgPSB0aGlzLl9nZXRfYW5pbWF0aW9uX2NsYXNzZXMoaGlkZSk7XG4gICAgYW5pbWF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhbmltYXRpb24pIHtcbiAgICAgIHJldHVybiAoMCwgX2VsZW1lbnRDbGFzczIuZGVmYXVsdCkobm9kZSkucmVtb3ZlKGFuaW1hdGlvbik7XG4gICAgfSk7XG4gIH0sXG4gIF9xdWV1ZV9jbGFzczogZnVuY3Rpb24gX3F1ZXVlX2NsYXNzKGNsYXNzTmFtZSkge1xuICAgIHRoaXMuY2xhc3NOYW1lUXVldWUucHVzaChjbGFzc05hbWUpO1xuXG4gICAgaWYgKCF0aGlzLnRpbWVvdXQpIHtcbiAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQodGhpcy5fZmx1c2hfY2xhc3NfbmFtZV9xdWV1ZSwgVElDSyk7XG4gICAgfVxuICB9LFxuICBfZmx1c2hfY2xhc3NfbmFtZV9xdWV1ZTogZnVuY3Rpb24gX2ZsdXNoX2NsYXNzX25hbWVfcXVldWUoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5faXNfbW91bnRlZCkge1xuICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUoX3RoaXMyKTtcbiAgICAgICAgX3RoaXMyLmNsYXNzTmFtZVF1ZXVlLmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgICAgIHJldHVybiAoMCwgX2VsZW1lbnRDbGFzczIuZGVmYXVsdCkobm9kZSkuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9XG4gICAgdGhpcy5jbGFzc05hbWVRdWV1ZS5sZW5ndGggPSAwO1xuICAgIHRoaXMudGltZW91dCA9IG51bGw7XG4gIH0sXG4gIF9zaG93OiBmdW5jdGlvbiBfc2hvdygpIHtcbiAgICBpZiAodGhpcy5wcm9wcy50cmFuc2l0aW9uKSB7XG4gICAgICB0aGlzLl9zZXRfdHJhbnNpdGlvbigpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5zaG93QW5pbWF0aW9uKSB7XG4gICAgICB0aGlzLl9zZXRfYW5pbWF0aW9uKCk7XG4gICAgfVxuICB9LFxuICBoYW5kbGVNb3VzZUVudGVyOiBmdW5jdGlvbiBoYW5kbGVNb3VzZUVudGVyKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmludGVydmFsSWQpO1xuICAgIHRoaXMuX3NldF9pbnRlcnZhbF9pZChudWxsKTtcbiAgICBpZiAodGhpcy5pc0hpZGluZykge1xuICAgICAgdGhpcy5fc2V0X2lzX2hpZGluZyhmYWxzZSk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmhpZGVBbmltYXRpb24pIHtcbiAgICAgICAgdGhpcy5fY2xlYXJfYW5pbWF0aW9uKHRydWUpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnRyYW5zaXRpb24pIHtcbiAgICAgICAgdGhpcy5fY2xlYXJfdHJhbnNpdGlvbih0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGhhbmRsZU1vdXNlTGVhdmU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlTGVhdmUoKSB7XG4gICAgaWYgKCF0aGlzLmlzSGlkaW5nICYmICh0aGlzLnByb3BzLnRpbWVPdXQgPiAwIHx8IHRoaXMucHJvcHMuZXh0ZW5kZWRUaW1lT3V0ID4gMCkpIHtcbiAgICAgIHRoaXMuX3NldF9pbnRlcnZhbF9pZChzZXRUaW1lb3V0KHRoaXMuaGlkZVRvYXN0LCB0aGlzLnByb3BzLmV4dGVuZGVkVGltZU91dCkpO1xuICAgIH1cbiAgfSxcbiAgaGlkZVRvYXN0OiBmdW5jdGlvbiBoaWRlVG9hc3Qob3ZlcnJpZGUpIHtcbiAgICBpZiAodGhpcy5pc0hpZGluZyB8fCB0aGlzLmludGVydmFsSWQgPT09IG51bGwgJiYgIW92ZXJyaWRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fc2V0X2lzX2hpZGluZyh0cnVlKTtcbiAgICBpZiAodGhpcy5wcm9wcy50cmFuc2l0aW9uKSB7XG4gICAgICB0aGlzLl9zZXRfdHJhbnNpdGlvbih0cnVlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuaGlkZUFuaW1hdGlvbikge1xuICAgICAgdGhpcy5fc2V0X2FuaW1hdGlvbih0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faGFuZGxlX3JlbW92ZSgpO1xuICAgIH1cbiAgfSxcbiAgX3NldF9pbnRlcnZhbF9pZDogZnVuY3Rpb24gX3NldF9pbnRlcnZhbF9pZChpbnRlcnZhbElkKSB7XG4gICAgdGhpcy5pbnRlcnZhbElkID0gaW50ZXJ2YWxJZDtcbiAgfSxcbiAgX3NldF9pc19oaWRpbmc6IGZ1bmN0aW9uIF9zZXRfaXNfaGlkaW5nKGlzSGlkaW5nKSB7XG4gICAgdGhpcy5pc0hpZGluZyA9IGlzSGlkaW5nO1xuICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LXRvYXN0ci9saWIvVG9hc3RNZXNzYWdlL2FuaW1hdGlvbk1peGluLmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBSZWFjdFRyYW5zaXRpb25FdmVudHNcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IHJlcXVpcmUoJ2ZianMvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50Jyk7XG5cbi8qKlxuICogRVZFTlRfTkFNRV9NQVAgaXMgdXNlZCB0byBkZXRlcm1pbmUgd2hpY2ggZXZlbnQgZmlyZWQgd2hlbiBhXG4gKiB0cmFuc2l0aW9uL2FuaW1hdGlvbiBlbmRzLCBiYXNlZCBvbiB0aGUgc3R5bGUgcHJvcGVydHkgdXNlZCB0b1xuICogZGVmaW5lIHRoYXQgZXZlbnQuXG4gKi9cbnZhciBFVkVOVF9OQU1FX01BUCA9IHtcbiAgdHJhbnNpdGlvbmVuZDoge1xuICAgICd0cmFuc2l0aW9uJzogJ3RyYW5zaXRpb25lbmQnLFxuICAgICdXZWJraXRUcmFuc2l0aW9uJzogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgICdNb3pUcmFuc2l0aW9uJzogJ21velRyYW5zaXRpb25FbmQnLFxuICAgICdPVHJhbnNpdGlvbic6ICdvVHJhbnNpdGlvbkVuZCcsXG4gICAgJ21zVHJhbnNpdGlvbic6ICdNU1RyYW5zaXRpb25FbmQnXG4gIH0sXG5cbiAgYW5pbWF0aW9uZW5kOiB7XG4gICAgJ2FuaW1hdGlvbic6ICdhbmltYXRpb25lbmQnLFxuICAgICdXZWJraXRBbmltYXRpb24nOiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICAnTW96QW5pbWF0aW9uJzogJ21vekFuaW1hdGlvbkVuZCcsXG4gICAgJ09BbmltYXRpb24nOiAnb0FuaW1hdGlvbkVuZCcsXG4gICAgJ21zQW5pbWF0aW9uJzogJ01TQW5pbWF0aW9uRW5kJ1xuICB9XG59O1xuXG52YXIgZW5kRXZlbnRzID0gW107XG5cbmZ1bmN0aW9uIGRldGVjdEV2ZW50cygpIHtcbiAgdmFyIHRlc3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB2YXIgc3R5bGUgPSB0ZXN0RWwuc3R5bGU7XG5cbiAgLy8gT24gc29tZSBwbGF0Zm9ybXMsIGluIHBhcnRpY3VsYXIgc29tZSByZWxlYXNlcyBvZiBBbmRyb2lkIDQueCxcbiAgLy8gdGhlIHVuLXByZWZpeGVkIFwiYW5pbWF0aW9uXCIgYW5kIFwidHJhbnNpdGlvblwiIHByb3BlcnRpZXMgYXJlIGRlZmluZWQgb24gdGhlXG4gIC8vIHN0eWxlIG9iamVjdCBidXQgdGhlIGV2ZW50cyB0aGF0IGZpcmUgd2lsbCBzdGlsbCBiZSBwcmVmaXhlZCwgc28gd2UgbmVlZFxuICAvLyB0byBjaGVjayBpZiB0aGUgdW4tcHJlZml4ZWQgZXZlbnRzIGFyZSB1c2VhYmxlLCBhbmQgaWYgbm90IHJlbW92ZSB0aGVtXG4gIC8vIGZyb20gdGhlIG1hcFxuICBpZiAoISgnQW5pbWF0aW9uRXZlbnQnIGluIHdpbmRvdykpIHtcbiAgICBkZWxldGUgRVZFTlRfTkFNRV9NQVAuYW5pbWF0aW9uZW5kLmFuaW1hdGlvbjtcbiAgfVxuXG4gIGlmICghKCdUcmFuc2l0aW9uRXZlbnQnIGluIHdpbmRvdykpIHtcbiAgICBkZWxldGUgRVZFTlRfTkFNRV9NQVAudHJhbnNpdGlvbmVuZC50cmFuc2l0aW9uO1xuICB9XG5cbiAgZm9yICh2YXIgYmFzZUV2ZW50TmFtZSBpbiBFVkVOVF9OQU1FX01BUCkge1xuICAgIHZhciBiYXNlRXZlbnRzID0gRVZFTlRfTkFNRV9NQVBbYmFzZUV2ZW50TmFtZV07XG4gICAgZm9yICh2YXIgc3R5bGVOYW1lIGluIGJhc2VFdmVudHMpIHtcbiAgICAgIGlmIChzdHlsZU5hbWUgaW4gc3R5bGUpIHtcbiAgICAgICAgZW5kRXZlbnRzLnB1c2goYmFzZUV2ZW50c1tzdHlsZU5hbWVdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmlmIChFeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00pIHtcbiAgZGV0ZWN0RXZlbnRzKCk7XG59XG5cbi8vIFdlIHVzZSB0aGUgcmF3IHthZGR8cmVtb3ZlfUV2ZW50TGlzdGVuZXIoKSBjYWxsIGJlY2F1c2UgRXZlbnRMaXN0ZW5lclxuLy8gZG9lcyBub3Qga25vdyBob3cgdG8gcmVtb3ZlIGV2ZW50IGxpc3RlbmVycyBhbmQgd2UgcmVhbGx5IHNob3VsZFxuLy8gY2xlYW4gdXAuIEFsc28sIHRoZXNlIGV2ZW50cyBhcmUgbm90IHRyaWdnZXJlZCBpbiBvbGRlciBicm93c2Vyc1xuLy8gc28gd2Ugc2hvdWxkIGJlIEEtT0sgaGVyZS5cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lcikge1xuICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudExpc3RlbmVyLCBmYWxzZSk7XG59XG5cbnZhciBSZWFjdFRyYW5zaXRpb25FdmVudHMgPSB7XG4gIGFkZEVuZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIChub2RlLCBldmVudExpc3RlbmVyKSB7XG4gICAgaWYgKGVuZEV2ZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIElmIENTUyB0cmFuc2l0aW9ucyBhcmUgbm90IHN1cHBvcnRlZCwgdHJpZ2dlciBhbiBcImVuZCBhbmltYXRpb25cIlxuICAgICAgLy8gZXZlbnQgaW1tZWRpYXRlbHkuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dChldmVudExpc3RlbmVyLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZW5kRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGVuZEV2ZW50KSB7XG4gICAgICBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGVuZEV2ZW50LCBldmVudExpc3RlbmVyKTtcbiAgICB9KTtcbiAgfSxcblxuICByZW1vdmVFbmRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiAobm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgIGlmIChlbmRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVuZEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbmRFdmVudCkge1xuICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBlbmRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RUcmFuc2l0aW9uRXZlbnRzO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0L2xpYi9SZWFjdFRyYW5zaXRpb25FdmVudHMuanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIEV4ZWN1dGlvbkVudmlyb25tZW50XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2FuVXNlRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxuLyoqXG4gKiBTaW1wbGUsIGxpZ2h0d2VpZ2h0IG1vZHVsZSBhc3Npc3Rpbmcgd2l0aCB0aGUgZGV0ZWN0aW9uIGFuZCBjb250ZXh0IG9mXG4gKiBXb3JrZXIuIEhlbHBzIGF2b2lkIGNpcmN1bGFyIGRlcGVuZGVuY2llcyBhbmQgYWxsb3dzIGNvZGUgdG8gcmVhc29uIGFib3V0XG4gKiB3aGV0aGVyIG9yIG5vdCB0aGV5IGFyZSBpbiBhIFdvcmtlciwgZXZlbiBpZiB0aGV5IG5ldmVyIGluY2x1ZGUgdGhlIG1haW5cbiAqIGBSZWFjdFdvcmtlcmAgZGVwZW5kZW5jeS5cbiAqL1xudmFyIEV4ZWN1dGlvbkVudmlyb25tZW50ID0ge1xuXG4gIGNhblVzZURPTTogY2FuVXNlRE9NLFxuXG4gIGNhblVzZVdvcmtlcnM6IHR5cGVvZiBXb3JrZXIgIT09ICd1bmRlZmluZWQnLFxuXG4gIGNhblVzZUV2ZW50TGlzdGVuZXJzOiBjYW5Vc2VET00gJiYgISEod2luZG93LmFkZEV2ZW50TGlzdGVuZXIgfHwgd2luZG93LmF0dGFjaEV2ZW50KSxcblxuICBjYW5Vc2VWaWV3cG9ydDogY2FuVXNlRE9NICYmICEhd2luZG93LnNjcmVlbixcblxuICBpc0luV29ya2VyOiAhY2FuVXNlRE9NIC8vIEZvciBub3csIHRoaXMgaXMgdHJ1ZSAtIG1pZ2h0IGNoYW5nZSBpbiB0aGUgZnV0dXJlLlxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZianMvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50LmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0cykge1xuICByZXR1cm4gbmV3IEVsZW1lbnRDbGFzcyhvcHRzKVxufVxuXG5mdW5jdGlvbiBpbmRleE9mKGFyciwgcHJvcCkge1xuICBpZiAoYXJyLmluZGV4T2YpIHJldHVybiBhcnIuaW5kZXhPZihwcm9wKVxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKVxuICAgIGlmIChhcnJbaV0gPT09IHByb3ApIHJldHVybiBpXG4gIHJldHVybiAtMVxufVxuXG5mdW5jdGlvbiBFbGVtZW50Q2xhc3Mob3B0cykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgRWxlbWVudENsYXNzKSkgcmV0dXJuIG5ldyBFbGVtZW50Q2xhc3Mob3B0cylcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIGlmICghb3B0cykgb3B0cyA9IHt9XG5cbiAgLy8gc2ltaWxhciBkb2luZyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IGJ1dCB3b3JrcyBpbiBJRThcbiAgaWYgKG9wdHMubm9kZVR5cGUpIG9wdHMgPSB7ZWw6IG9wdHN9XG5cbiAgdGhpcy5vcHRzID0gb3B0c1xuICB0aGlzLmVsID0gb3B0cy5lbCB8fCBkb2N1bWVudC5ib2R5XG4gIGlmICh0eXBlb2YgdGhpcy5lbCAhPT0gJ29iamVjdCcpIHRoaXMuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuZWwpXG59XG5cbkVsZW1lbnRDbGFzcy5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7XG4gIHZhciBlbCA9IHRoaXMuZWxcbiAgaWYgKCFlbCkgcmV0dXJuXG4gIGlmIChlbC5jbGFzc05hbWUgPT09IFwiXCIpIHJldHVybiBlbC5jbGFzc05hbWUgPSBjbGFzc05hbWVcbiAgdmFyIGNsYXNzZXMgPSBlbC5jbGFzc05hbWUuc3BsaXQoJyAnKVxuICBpZiAoaW5kZXhPZihjbGFzc2VzLCBjbGFzc05hbWUpID4gLTEpIHJldHVybiBjbGFzc2VzXG4gIGNsYXNzZXMucHVzaChjbGFzc05hbWUpXG4gIGVsLmNsYXNzTmFtZSA9IGNsYXNzZXMuam9pbignICcpXG4gIHJldHVybiBjbGFzc2VzXG59XG5cbkVsZW1lbnRDbGFzcy5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7XG4gIHZhciBlbCA9IHRoaXMuZWxcbiAgaWYgKCFlbCkgcmV0dXJuXG4gIGlmIChlbC5jbGFzc05hbWUgPT09IFwiXCIpIHJldHVyblxuICB2YXIgY2xhc3NlcyA9IGVsLmNsYXNzTmFtZS5zcGxpdCgnICcpXG4gIHZhciBpZHggPSBpbmRleE9mKGNsYXNzZXMsIGNsYXNzTmFtZSlcbiAgaWYgKGlkeCA+IC0xKSBjbGFzc2VzLnNwbGljZShpZHgsIDEpXG4gIGVsLmNsYXNzTmFtZSA9IGNsYXNzZXMuam9pbignICcpXG4gIHJldHVybiBjbGFzc2VzXG59XG5cbkVsZW1lbnRDbGFzcy5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7XG4gIHZhciBlbCA9IHRoaXMuZWxcbiAgaWYgKCFlbCkgcmV0dXJuXG4gIHZhciBjbGFzc2VzID0gZWwuY2xhc3NOYW1lLnNwbGl0KCcgJylcbiAgcmV0dXJuIGluZGV4T2YoY2xhc3NlcywgY2xhc3NOYW1lKSA+IC0xXG59XG5cbkVsZW1lbnRDbGFzcy5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7XG4gIHZhciBlbCA9IHRoaXMuZWxcbiAgaWYgKCFlbCkgcmV0dXJuXG4gIGlmICh0aGlzLmhhcyhjbGFzc05hbWUpKSB0aGlzLnJlbW92ZShjbGFzc05hbWUpXG4gIGVsc2UgdGhpcy5hZGQoY2xhc3NOYW1lKVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZWxlbWVudC1jbGFzcy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBjYWxsX3Nob3dfbWV0aG9kKCRub2RlLCBwcm9wcykge1xuICAkbm9kZVtwcm9wcy5zaG93TWV0aG9kXSh7XG4gICAgZHVyYXRpb246IHByb3BzLnNob3dEdXJhdGlvbixcbiAgICBlYXNpbmc6IHByb3BzLnNob3dFYXNpbmdcbiAgfSk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGRpc3BsYXk6IFwibm9uZVwiIH0sXG4gICAgICAvLyBlZmZlY3RpdmUgJC5oaWRlKClcbiAgICAgIHNob3dNZXRob2Q6IFwiZmFkZUluXCIsIC8vIHNsaWRlRG93biwgYW5kIHNob3cgYXJlIGJ1aWx0IGludG8galF1ZXJ5XG4gICAgICBzaG93RHVyYXRpb246IDMwMCxcbiAgICAgIHNob3dFYXNpbmc6IFwic3dpbmdcIiwgLy8gYW5kIGxpbmVhciBhcmUgYnVpbHQgaW50byBqUXVlcnlcbiAgICAgIGhpZGVNZXRob2Q6IFwiZmFkZU91dFwiLFxuICAgICAgaGlkZUR1cmF0aW9uOiAxMDAwLFxuICAgICAgaGlkZUVhc2luZzogXCJzd2luZ1wiLFxuICAgICAgLy9cbiAgICAgIHRpbWVPdXQ6IDUwMDAsXG4gICAgICBleHRlbmRlZFRpbWVPdXQ6IDEwMDBcbiAgICB9O1xuICB9LFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW50ZXJ2YWxJZDogbnVsbCxcbiAgICAgIGlzSGlkaW5nOiBmYWxzZVxuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjYWxsX3Nob3dfbWV0aG9kKHRoaXMuX2dldF8kX25vZGUoKSwgdGhpcy5wcm9wcyk7XG4gICAgaWYgKHRoaXMucHJvcHMudGltZU91dCA+IDApIHtcbiAgICAgIHRoaXMuX3NldF9pbnRlcnZhbF9pZChzZXRUaW1lb3V0KHRoaXMuaGlkZVRvYXN0LCB0aGlzLnByb3BzLnRpbWVPdXQpKTtcbiAgICB9XG4gIH0sXG4gIGhhbmRsZU1vdXNlRW50ZXI6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlRW50ZXIoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuc3RhdGUuaW50ZXJ2YWxJZCk7XG4gICAgdGhpcy5fc2V0X2ludGVydmFsX2lkKG51bGwpO1xuICAgIHRoaXMuX3NldF9pc19oaWRpbmcoZmFsc2UpO1xuXG4gICAgY2FsbF9zaG93X21ldGhvZCh0aGlzLl9nZXRfJF9ub2RlKCkuc3RvcCh0cnVlLCB0cnVlKSwgdGhpcy5wcm9wcyk7XG4gIH0sXG4gIGhhbmRsZU1vdXNlTGVhdmU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlTGVhdmUoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmlzSGlkaW5nICYmICh0aGlzLnByb3BzLnRpbWVPdXQgPiAwIHx8IHRoaXMucHJvcHMuZXh0ZW5kZWRUaW1lT3V0ID4gMCkpIHtcbiAgICAgIHRoaXMuX3NldF9pbnRlcnZhbF9pZChzZXRUaW1lb3V0KHRoaXMuaGlkZVRvYXN0LCB0aGlzLnByb3BzLmV4dGVuZGVkVGltZU91dCkpO1xuICAgIH1cbiAgfSxcbiAgaGlkZVRvYXN0OiBmdW5jdGlvbiBoaWRlVG9hc3Qob3ZlcnJpZGUpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5pc0hpZGluZyB8fCB0aGlzLnN0YXRlLmludGVydmFsSWQgPT09IG51bGwgJiYgIW92ZXJyaWRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0hpZGluZzogdHJ1ZSB9KTtcblxuICAgIHRoaXMuX2dldF8kX25vZGUoKVt0aGlzLnByb3BzLmhpZGVNZXRob2RdKHtcbiAgICAgIGR1cmF0aW9uOiB0aGlzLnByb3BzLmhpZGVEdXJhdGlvbixcbiAgICAgIGVhc2luZzogdGhpcy5wcm9wcy5oaWRlRWFzaW5nLFxuICAgICAgY29tcGxldGU6IHRoaXMuX2hhbmRsZV9yZW1vdmVcbiAgICB9KTtcbiAgfSxcbiAgX2dldF8kX25vZGU6IGZ1bmN0aW9uIF9nZXRfJF9ub2RlKCkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4gICAgcmV0dXJuIGpRdWVyeShfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcykpO1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW5kZWYgKi9cbiAgfSxcbiAgX3NldF9pbnRlcnZhbF9pZDogZnVuY3Rpb24gX3NldF9pbnRlcnZhbF9pZChpbnRlcnZhbElkKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbnRlcnZhbElkOiBpbnRlcnZhbElkXG4gICAgfSk7XG4gIH0sXG4gIF9zZXRfaXNfaGlkaW5nOiBmdW5jdGlvbiBfc2V0X2lzX2hpZGluZyhpc0hpZGluZykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNIaWRpbmc6IGlzSGlkaW5nXG4gICAgfSk7XG4gIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtdG9hc3RyL2xpYi9Ub2FzdE1lc3NhZ2UvalF1ZXJ5TWl4aW4uanNcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBhZ2VCdXR0b24gZnJvbSAnLi9QYWdlQnV0dG9uLmpzJztcbmltcG9ydCBDb25zdCBmcm9tICcuLi9Db25zdCc7XG5cbmNsYXNzIFBhZ2luYXRpb25MaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjaGFuZ2VQYWdlID0gcGFnZSA9PiB7XG4gICAgY29uc3QgeyBwcmVQYWdlLCBjdXJyUGFnZSwgbmV4dFBhZ2UsIGxhc3RQYWdlLCBmaXJzdFBhZ2UsIHNpemVQZXJQYWdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChwYWdlID09PSBwcmVQYWdlKSB7XG4gICAgICBwYWdlID0gY3VyclBhZ2UgLSAxIDwgMSA/IDEgOiBjdXJyUGFnZSAtIDE7XG4gICAgfSBlbHNlIGlmIChwYWdlID09PSBuZXh0UGFnZSkge1xuICAgICAgcGFnZSA9IGN1cnJQYWdlICsgMSA+IHRoaXMudG90YWxQYWdlcyA/IHRoaXMudG90YWxQYWdlcyA6IGN1cnJQYWdlICsgMTtcbiAgICB9IGVsc2UgaWYgKHBhZ2UgPT09IGxhc3RQYWdlKSB7XG4gICAgICBwYWdlID0gdGhpcy50b3RhbFBhZ2VzO1xuICAgIH0gZWxzZSBpZiAocGFnZSA9PT0gZmlyc3RQYWdlKSB7XG4gICAgICBwYWdlID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFnZSA9IHBhcnNlSW50KHBhZ2UsIDEwKTtcbiAgICB9XG5cbiAgICBpZiAocGFnZSAhPT0gY3VyclBhZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMuY2hhbmdlUGFnZShwYWdlLCBzaXplUGVyUGFnZSk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU2l6ZVBlclBhZ2UgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBzZWxlY3RTaXplID0gcGFyc2VJbnQoZS5jdXJyZW50VGFyZ2V0LnRleHQsIDEwKTtcbiAgICBsZXQgeyBjdXJyUGFnZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoc2VsZWN0U2l6ZSAhPT0gdGhpcy5wcm9wcy5zaXplUGVyUGFnZSkge1xuICAgICAgdGhpcy50b3RhbFBhZ2VzID0gTWF0aC5jZWlsKHRoaXMucHJvcHMuZGF0YVNpemUgLyBzZWxlY3RTaXplKTtcbiAgICAgIGlmIChjdXJyUGFnZSA+IHRoaXMudG90YWxQYWdlcykgY3VyclBhZ2UgPSB0aGlzLnRvdGFsUGFnZXM7XG5cbiAgICAgIHRoaXMucHJvcHMuY2hhbmdlUGFnZShjdXJyUGFnZSwgc2VsZWN0U2l6ZSk7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vblNpemVQZXJQYWdlTGlzdCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uU2l6ZVBlclBhZ2VMaXN0KHNlbGVjdFNpemUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGFTaXplLCBzaXplUGVyUGFnZSwgc2l6ZVBlclBhZ2VMaXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMudG90YWxQYWdlcyA9IE1hdGguY2VpbChkYXRhU2l6ZSAvIHNpemVQZXJQYWdlKTtcbiAgICBjb25zdCBwYWdlQnRucyA9IHRoaXMubWFrZVBhZ2UoKTtcbiAgICBjb25zdCBwYWdlTGlzdFN0eWxlID0ge1xuICAgICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgICAvLyBvdmVycmlkZSB0aGUgbWFyZ2luLXRvcCBkZWZpbmVkIGluIC5wYWdpbmF0aW9uIGNsYXNzIGluIGJvb3RzdHJhcC5cbiAgICAgIG1hcmdpblRvcDogJzBweCdcbiAgICB9O1xuXG4gICAgY29uc3Qgc2l6ZVBlclBhZ2VPcHRpb25zID0gc2l6ZVBlclBhZ2VMaXN0Lm1hcCgoX3NpemVQZXJQYWdlKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGkga2V5PXsgX3NpemVQZXJQYWdlIH0gcm9sZT0ncHJlc2VudGF0aW9uJz5cbiAgICAgICAgICA8YSByb2xlPSdtZW51aXRlbSdcbiAgICAgICAgICAgIHRhYkluZGV4PSctMScgaHJlZj0nIydcbiAgICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLmNoYW5nZVNpemVQZXJQYWdlIH0+eyBfc2l6ZVBlclBhZ2UgfTwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdycgc3R5bGU9eyB7IG1hcmdpblRvcDogMTUgfSB9PlxuICAgICAgICB7XG4gICAgICAgICAgc2l6ZVBlclBhZ2VMaXN0Lmxlbmd0aCA+IDFcbiAgICAgICAgICA/IDxkaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Ryb3Bkb3duJz5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWRlZmF1bHQgZHJvcGRvd24tdG9nZ2xlJ1xuICAgICAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nIGlkPSdwYWdlRHJvcERvd24nIGRhdGEtdG9nZ2xlPSdkcm9wZG93bidcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD0ndHJ1ZSc+XG4gICAgICAgICAgICAgICAgICAgIHsgc2l6ZVBlclBhZ2UgfVxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICB7ICcgJyB9XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjYXJldCcvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2Ryb3Bkb3duLW1lbnUnIHJvbGU9J21lbnUnIGFyaWEtbGFiZWxsZWRieT0ncGFnZURyb3BEb3duJz5cbiAgICAgICAgICAgICAgICAgICAgeyBzaXplUGVyUGFnZU9wdGlvbnMgfVxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0ncGFnaW5hdGlvbicgc3R5bGU9eyBwYWdlTGlzdFN0eWxlIH0+XG4gICAgICAgICAgICAgICAgICB7IHBhZ2VCdG5zIH1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDogPGRpdiBjbGFzc05hbWU9J2NvbC1tZC0xMic+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J3BhZ2luYXRpb24nIHN0eWxlPXsgcGFnZUxpc3RTdHlsZSB9PlxuICAgICAgICAgICAgICAgIHsgcGFnZUJ0bnMgfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBtYWtlUGFnZSgpIHtcbiAgICBjb25zdCBwYWdlcyA9IHRoaXMuZ2V0UGFnZXMoKTtcbiAgICByZXR1cm4gcGFnZXMubWFwKGZ1bmN0aW9uKHBhZ2UpIHtcbiAgICAgIGNvbnN0IGlzQWN0aXZlID0gcGFnZSA9PT0gdGhpcy5wcm9wcy5jdXJyUGFnZTtcbiAgICAgIGxldCBkaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgbGV0IGhpZGRlbiA9IGZhbHNlO1xuICAgICAgaWYgKHRoaXMucHJvcHMuY3VyclBhZ2UgPT09IDEgJiZcbiAgICAgICAgKHBhZ2UgPT09IHRoaXMucHJvcHMuZmlyc3RQYWdlIHx8IHBhZ2UgPT09IHRoaXMucHJvcHMucHJlUGFnZSkpIHtcbiAgICAgICAgZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBoaWRkZW4gPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMuY3VyclBhZ2UgPT09IHRoaXMudG90YWxQYWdlcyAmJlxuICAgICAgICAocGFnZSA9PT0gdGhpcy5wcm9wcy5uZXh0UGFnZSB8fCBwYWdlID09PSB0aGlzLnByb3BzLmxhc3RQYWdlKSkge1xuICAgICAgICBkaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGhpZGRlbiA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UGFnZUJ1dHRvbiBrZXk9eyBwYWdlIH1cbiAgICAgICAgICBjaGFuZ2VQYWdlPXsgdGhpcy5jaGFuZ2VQYWdlIH1cbiAgICAgICAgICBhY3RpdmU9eyBpc0FjdGl2ZSB9XG4gICAgICAgICAgZGlzYWJsZT17IGRpc2FibGVkIH1cbiAgICAgICAgICBoaWRkZW49eyBoaWRkZW4gfT5cbiAgICAgICAgICB7IHBhZ2UgfVxuICAgICAgICA8L1BhZ2VCdXR0b24+XG4gICAgICApO1xuICAgIH0sIHRoaXMpO1xuICB9XG5cbiAgZ2V0UGFnZXMoKSB7XG4gICAgbGV0IHBhZ2VzO1xuICAgIGxldCBzdGFydFBhZ2UgPSAxO1xuICAgIGxldCBlbmRQYWdlID0gdGhpcy50b3RhbFBhZ2VzO1xuXG4gICAgc3RhcnRQYWdlID0gTWF0aC5tYXgodGhpcy5wcm9wcy5jdXJyUGFnZSAtIE1hdGguZmxvb3IodGhpcy5wcm9wcy5wYWdpbmF0aW9uU2l6ZSAvIDIpLCAxKTtcbiAgICBlbmRQYWdlID0gc3RhcnRQYWdlICsgdGhpcy5wcm9wcy5wYWdpbmF0aW9uU2l6ZSAtIDE7XG5cbiAgICBpZiAoZW5kUGFnZSA+IHRoaXMudG90YWxQYWdlcykge1xuICAgICAgZW5kUGFnZSA9IHRoaXMudG90YWxQYWdlcztcbiAgICAgIHN0YXJ0UGFnZSA9IGVuZFBhZ2UgLSB0aGlzLnByb3BzLnBhZ2luYXRpb25TaXplICsgMTtcbiAgICB9XG5cbiAgICBpZiAoc3RhcnRQYWdlICE9PSAxICYmIHRoaXMudG90YWxQYWdlcyA+IHRoaXMucHJvcHMucGFnaW5hdGlvblNpemUpIHtcbiAgICAgIHBhZ2VzID0gWyB0aGlzLnByb3BzLmZpcnN0UGFnZSwgdGhpcy5wcm9wcy5wcmVQYWdlIF07XG4gICAgfSBlbHNlIGlmICh0aGlzLnRvdGFsUGFnZXMgPiAxKSB7XG4gICAgICBwYWdlcyA9IFsgdGhpcy5wcm9wcy5wcmVQYWdlIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhZ2VzID0gW107XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0UGFnZTsgaSA8PSBlbmRQYWdlOyBpKyspIHtcbiAgICAgIGlmIChpID4gMCkgcGFnZXMucHVzaChpKTtcbiAgICB9XG5cbiAgICBpZiAoZW5kUGFnZSAhPT0gdGhpcy50b3RhbFBhZ2VzKSB7XG4gICAgICBwYWdlcy5wdXNoKHRoaXMucHJvcHMubmV4dFBhZ2UpO1xuICAgICAgcGFnZXMucHVzaCh0aGlzLnByb3BzLmxhc3RQYWdlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudG90YWxQYWdlcyA+IDEpIHtcbiAgICAgIHBhZ2VzLnB1c2godGhpcy5wcm9wcy5uZXh0UGFnZSk7XG4gICAgfVxuICAgIHJldHVybiBwYWdlcztcbiAgfVxufVxuUGFnaW5hdGlvbkxpc3QucHJvcFR5cGVzID0ge1xuICBjdXJyUGFnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgc2l6ZVBlclBhZ2U6IFByb3BUeXBlcy5udW1iZXIsXG4gIGRhdGFTaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjaGFuZ2VQYWdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2l6ZVBlclBhZ2VMaXN0OiBQcm9wVHlwZXMuYXJyYXksXG4gIHBhZ2luYXRpb25TaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICByZW1vdGU6IFByb3BUeXBlcy5ib29sLFxuICBvblNpemVQZXJQYWdlTGlzdDogUHJvcFR5cGVzLmZ1bmMsXG4gIHByZVBhZ2U6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cblBhZ2luYXRpb25MaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgc2l6ZVBlclBhZ2U6IENvbnN0LlNJWkVfUEVSX1BBR0Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb25MaXN0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcGFnaW5hdGlvbi9QYWdpbmF0aW9uTGlzdC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc1NldCBmcm9tICdjbGFzc25hbWVzJztcblxuY2xhc3MgUGFnZUJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBwYWdlQnRuQ2xpY2sgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VQYWdlKGUuY3VycmVudFRhcmdldC50ZXh0Q29udGVudCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IGNsYXNzU2V0KHtcbiAgICAgICdhY3RpdmUnOiB0aGlzLnByb3BzLmFjdGl2ZSxcbiAgICAgICdkaXNhYmxlZCc6IHRoaXMucHJvcHMuZGlzYWJsZSxcbiAgICAgICdoaWRkZW4nOiB0aGlzLnByb3BzLmhpZGRlblxuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPXsgY2xhc3NlcyB9PlxuICAgICAgICA8YSBocmVmPScjJyBvbkNsaWNrPXsgdGhpcy5wYWdlQnRuQ2xpY2sgfT57IHRoaXMucHJvcHMuY2hpbGRyZW4gfTwvYT5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxufVxuUGFnZUJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGNoYW5nZVBhZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgaGlkZGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlQnV0dG9uO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcGFnaW5hdGlvbi9QYWdlQnV0dG9uLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzU2V0IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4uL0NvbnN0JztcbmltcG9ydCBlZGl0b3IgZnJvbSAnLi4vRWRpdG9yJztcbmltcG9ydCBOb3RpZmllciBmcm9tICcuLi9Ob3RpZmljYXRpb24uanMnO1xuXG5jbGFzcyBUb29sQmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnRpbWVvdXRlQ2xlYXIgPSAwO1xuICAgIHRoaXMubW9kYWxDbGFzc05hbWU7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzSW5zZXJ0Um93VHJpZ2dlcjogdHJ1ZSxcbiAgICAgIHZhbGlkYXRlU3RhdGU6IG51bGwsXG4gICAgICBzaGFrZUVkaXRvcjogZmFsc2UsXG4gICAgICBzaG93U2VsZWN0ZWQ6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG4gIH1cblxuICBjbGVhclRpbWVvdXQoKSB7XG4gICAgaWYgKHRoaXMudGltZW91dGVDbGVhcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dGVDbGVhcik7XG4gICAgICB0aGlzLnRpbWVvdXRlQ2xlYXIgPSAwO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrQW5kUGFyc2VGb3JtKCkge1xuICAgIGNvbnN0IG5ld09iaiA9IHt9O1xuICAgIGNvbnN0IHZhbGlkYXRlU3RhdGUgPSB7fTtcbiAgICBsZXQgaXNWYWxpZCA9IHRydWU7XG4gICAgbGV0IHRlbXBWYWx1ZTtcbiAgICBsZXQgdGVtcE1zZztcblxuICAgIHRoaXMucHJvcHMuY29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uKGNvbHVtbiwgaSkge1xuICAgICAgaWYgKGNvbHVtbi5hdXRvVmFsdWUpIHtcbiAgICAgICAgLy8gd2hlbiB5b3Ugd2FudCBzYW1lIGF1dG8gZ2VuZXJhdGUgdmFsdWUgYW5kIG5vdCBhbGxvdyBlZGl0LCBleGFtcGxlIElEIGZpZWxkXG4gICAgICAgIGNvbnN0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdGVtcFZhbHVlID0gdHlwZW9mIGNvbHVtbi5hdXRvVmFsdWUgPT09ICdmdW5jdGlvbicgP1xuICAgICAgICAgIGNvbHVtbi5hdXRvVmFsdWUoKSA6XG4gICAgICAgICAgKGBhdXRvdmFsdWUtJHt0aW1lfWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZG9tID0gdGhpcy5yZWZzW2NvbHVtbi5maWVsZCArIGldO1xuICAgICAgICB0ZW1wVmFsdWUgPSBkb20udmFsdWU7XG5cbiAgICAgICAgaWYgKGNvbHVtbi5lZGl0YWJsZSAmJiBjb2x1bW4uZWRpdGFibGUudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IHRlbXBWYWx1ZS5zcGxpdCgnOicpO1xuICAgICAgICAgIHRlbXBWYWx1ZSA9IGRvbS5jaGVja2VkID8gdmFsdWVzWzBdIDogdmFsdWVzWzFdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbHVtbi5lZGl0YWJsZSAmJiBjb2x1bW4uZWRpdGFibGUudmFsaWRhdG9yKSB7IC8vIHByb2Nlc3MgdmFsaWRhdGVcbiAgICAgICAgICB0ZW1wTXNnID0gY29sdW1uLmVkaXRhYmxlLnZhbGlkYXRvcih0ZW1wVmFsdWUpO1xuICAgICAgICAgIGlmICh0ZW1wTXNnICE9PSB0cnVlKSB7XG4gICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICB2YWxpZGF0ZVN0YXRlW2NvbHVtbi5maWVsZF0gPSB0ZW1wTXNnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBuZXdPYmpbY29sdW1uLmZpZWxkXSA9IHRlbXBWYWx1ZTtcbiAgICB9LCB0aGlzKTtcblxuICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gbmV3T2JqO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyVGltZW91dCgpO1xuICAgICAgLy8gc2hvdyBlcnJvciBpbiBmb3JtIGFuZCBzaGFrZSBpdFxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRlU3RhdGUsIHNoYWtlRWRpdG9yOiB0cnVlIH0pO1xuICAgICAgLy8gbm90aWZpZXIgZXJyb3JcbiAgICAgIHRoaXMucmVmcy5ub3RpZmllci5ub3RpY2UoXG4gICAgICAgICdlcnJvcicsXG4gICAgICAgICdGb3JtIHZhbGlkYXRlIGVycm9ycywgcGxlYXNlIGNoZWNraW5nIScsXG4gICAgICAgICdQcmVzc2VkIEVTQyBjYW4gY2FuY2VsJyk7XG4gICAgICAvLyBjbGVhciBhbmltYXRlIGNsYXNzXG4gICAgICB0aGlzLnRpbWVvdXRlQ2xlYXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNoYWtlRWRpdG9yOiBmYWxzZSB9KTtcbiAgICAgIH0sIDMwMCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTYXZlQnRuQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3T2JqID0gdGhpcy5jaGVja0FuZFBhcnNlRm9ybSgpO1xuICAgIGlmICghbmV3T2JqKSB7IC8vIHZhbGlkYXRlIGVycm9yc1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtc2cgPSB0aGlzLnByb3BzLm9uQWRkUm93KG5ld09iaik7XG4gICAgaWYgKG1zZykge1xuICAgICAgdGhpcy5yZWZzLm5vdGlmaWVyLm5vdGljZSgnZXJyb3InLCBtc2csICdQcmVzc2VkIEVTQyBjYW4gY2FuY2VsJyk7XG4gICAgICB0aGlzLmNsZWFyVGltZW91dCgpO1xuICAgICAgLy8gc2hha2UgZm9ybSBhbmQgaGFjayBwcmV2ZW50IG1vZGFsIGhpZGVcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzaGFrZUVkaXRvcjogdHJ1ZSxcbiAgICAgICAgdmFsaWRhdGVTdGF0ZTogJ3RoaXMgaXMgaGFjayBmb3IgcHJldmVudCBib290c3RyYXAgbW9kYWwgaGlkZSdcbiAgICAgIH0pO1xuICAgICAgLy8gY2xlYXIgYW5pbWF0ZSBjbGFzc1xuICAgICAgdGhpcy50aW1lb3V0ZUNsZWFyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaGFrZUVkaXRvcjogZmFsc2UgfSk7XG4gICAgICB9LCAzMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyByZXNldCBzdGF0ZSBhbmQgaGlkZSBtb2RhbCBoaWRlXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdmFsaWRhdGVTdGF0ZTogbnVsbCxcbiAgICAgICAgc2hha2VFZGl0b3I6IGZhbHNlXG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1iYWNrZHJvcCcpLmNsaWNrKCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5tb2RhbENsYXNzTmFtZSkuY2xpY2soKTtcbiAgICAgIH0pO1xuICAgICAgLy8gcmVzZXQgZm9ybVxuICAgICAgdGhpcy5yZWZzLmZvcm0ucmVzZXQoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTaG93T25seVRvZ2dsZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dTZWxlY3RlZDogIXRoaXMuc3RhdGUuc2hvd1NlbGVjdGVkXG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy5vblNob3dPbmx5U2VsZWN0ZWQoKTtcbiAgfVxuXG4gIGhhbmRsZURyb3BSb3dCdG5DbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uRHJvcFJvdygpO1xuICB9XG5cbiAgaGFuZGxlQ2xvc2VCdG4oKSB7XG4gICAgdGhpcy5yZWZzLndhcm5pbmcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuXG4gIGhhbmRsZUtleVVwID0gZSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblNlYXJjaChlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICB9XG5cbiAgaGFuZGxlRXhwb3J0Q1NWID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25FeHBvcnRDU1YoKTtcbiAgfVxuXG4gIGhhbmRsZUNsZWFyQnRuQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5yZWZzLnNlYWNoSW5wdXQudmFsdWUgPSAnJztcbiAgICB0aGlzLnByb3BzLm9uU2VhcmNoKCcnKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLm1vZGFsQ2xhc3NOYW1lID0gJ2JzLXRhYmxlLW1vZGFsLXNtJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGxldCBpbnNlcnRCdG4gPSBudWxsO1xuICAgIGxldCBkZWxldGVCdG4gPSBudWxsO1xuICAgIGxldCBleHBvcnRDU1YgPSBudWxsO1xuICAgIGxldCBzaG93U2VsZWN0ZWRPbmx5QnRuID0gbnVsbDtcblxuICAgIGlmICh0aGlzLnByb3BzLmVuYWJsZUluc2VydCkge1xuICAgICAgaW5zZXJ0QnRuID0gKFxuICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICBjbGFzc05hbWU9J2J0biBidG4taW5mbyByZWFjdC1icy10YWJsZS1hZGQtYnRuJ1xuICAgICAgICAgIGRhdGEtdG9nZ2xlPSdtb2RhbCdcbiAgICAgICAgICBkYXRhLXRhcmdldD17ICcuJyArIHRoaXMubW9kYWxDbGFzc05hbWUgfT5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9J2dseXBoaWNvbiBnbHlwaGljb24tcGx1cyc+PC9pPiBOZXdcbiAgICAgICAgPC9idXR0b24+XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmVuYWJsZURlbGV0ZSkge1xuICAgICAgZGVsZXRlQnRuID0gKFxuICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICBjbGFzc05hbWU9J2J0biBidG4td2FybmluZyByZWFjdC1icy10YWJsZS1kZWwtYnRuJ1xuICAgICAgICAgIGRhdGEtdG9nZ2xlPSd0b29sdGlwJ1xuICAgICAgICAgIGRhdGEtcGxhY2VtZW50PSdyaWdodCdcbiAgICAgICAgICB0aXRsZT0nRHJvcCBzZWxlY3RlZCByb3cnXG4gICAgICAgICAgb25DbGljaz17IHRoaXMuaGFuZGxlRHJvcFJvd0J0bkNsaWNrIH0+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPSdnbHlwaGljb24gZ2x5cGhpY29uLXRyYXNoJz48L2k+IERlbGV0ZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuZW5hYmxlU2hvd09ubHlTZWxlY3RlZCkge1xuICAgICAgc2hvd1NlbGVjdGVkT25seUJ0biA9IChcbiAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nXG4gICAgICAgICAgb25DbGljaz17IHRoaXMuaGFuZGxlU2hvd09ubHlUb2dnbGUgfVxuICAgICAgICAgIGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5J1xuICAgICAgICAgIGRhdGEtdG9nZ2xlPSdidXR0b24nXG4gICAgICAgICAgYXJpYS1wcmVzc2VkPSdmYWxzZSc+XG4gICAgICAgICAgeyB0aGlzLnN0YXRlLnNob3dTZWxlY3RlZCA/IENvbnN0LlNIT1dfQUxMIDogQ29uc3QuU0hPV19PTkxZX1NFTEVDVCB9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5lbmFibGVFeHBvcnRDU1YpIHtcbiAgICAgIGV4cG9ydENTViA9IChcbiAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nXG4gICAgICAgICAgY2xhc3NOYW1lPSdidG4gYnRuLXN1Y2Nlc3MnXG4gICAgICAgICAgb25DbGljaz17IHRoaXMuaGFuZGxlRXhwb3J0Q1NWIH0+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9J2dseXBoaWNvbiBnbHlwaGljb24tZXhwb3J0Jz48L2k+IEV4cG9ydCB0byBDU1ZcbiAgICAgICAgPC9idXR0b24+XG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHNlYXJjaFRleHRJbnB1dCA9IHRoaXMucmVuZGVyU2VhcmNoUGFuZWwoKTtcbiAgICBjb25zdCBtb2RhbCA9IHRoaXMucHJvcHMuZW5hYmxlSW5zZXJ0ID8gdGhpcy5yZW5kZXJJbnNlcnRSb3dNb2RhbCgpIDogbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMiBjb2wtc20tNiBjb2wtbWQtNiBjb2wtbGctOCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J0bi1ncm91cCBidG4tZ3JvdXAtc20nIHJvbGU9J2dyb3VwJz5cbiAgICAgICAgICAgIHsgZXhwb3J0Q1NWIH1cbiAgICAgICAgICAgIHsgaW5zZXJ0QnRuIH1cbiAgICAgICAgICAgIHsgZGVsZXRlQnRuIH1cbiAgICAgICAgICAgIHsgc2hvd1NlbGVjdGVkT25seUJ0biB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTEyIGNvbC1zbS02IGNvbC1tZC02IGNvbC1sZy00Jz5cbiAgICAgICAgICB7IHNlYXJjaFRleHRJbnB1dCB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Tm90aWZpZXIgcmVmPSdub3RpZmllcicgLz5cbiAgICAgICAgeyBtb2RhbCB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyU2VhcmNoUGFuZWwoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZW5hYmxlU2VhcmNoKSB7XG4gICAgICBsZXQgY2xhc3NOYW1lcyA9ICdmb3JtLWdyb3VwIGZvcm0tZ3JvdXAtc20gcmVhY3QtYnMtdGFibGUtc2VhcmNoLWZvcm0nO1xuICAgICAgbGV0IGNsZWFyQnRuID0gbnVsbDtcbiAgICAgIGlmICh0aGlzLnByb3BzLmNsZWFyU2VhcmNoKSB7XG4gICAgICAgIGNsZWFyQnRuID0gKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAtYnRuJz5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidG4gYnRuLWRlZmF1bHQnXG4gICAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgICAgb25DbGljaz17IHRoaXMuaGFuZGxlQ2xlYXJCdG5DbGljayB9PlxuICAgICAgICAgICAgICBDbGVhclxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApO1xuICAgICAgICBjbGFzc05hbWVzICs9ICcgaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtc20nO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGNsYXNzTmFtZXMgfT5cbiAgICAgICAgICA8aW5wdXQgcmVmPSdzZWFjaElucHV0J1xuICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXG4gICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI9eyB0aGlzLnByb3BzLnNlYXJjaFBsYWNlaG9sZGVyID8gdGhpcy5wcm9wcy5zZWFyY2hQbGFjZWhvbGRlciA6ICdTZWFyY2gnIH1cbiAgICAgICAgICAgIG9uS2V5VXA9eyB0aGlzLmhhbmRsZUtleVVwIH0vPlxuICAgICAgICAgICAgeyBjbGVhckJ0biB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVySW5zZXJ0Um93TW9kYWwoKSB7XG4gICAgY29uc3QgdmFsaWRhdGVTdGF0ZSA9IHRoaXMuc3RhdGUudmFsaWRhdGVTdGF0ZSB8fCB7fTtcbiAgICBjb25zdCBzaGFrZUVkaXRvciA9IHRoaXMuc3RhdGUuc2hha2VFZGl0b3I7XG4gICAgY29uc3QgaW5wdXRGaWVsZCA9IHRoaXMucHJvcHMuY29sdW1ucy5tYXAoZnVuY3Rpb24oY29sdW1uLCBpKSB7XG4gICAgICBjb25zdCB7IGVkaXRhYmxlLCBmb3JtYXQsIGZpZWxkLCBuYW1lLCBhdXRvVmFsdWUgfSA9IGNvbHVtbjtcbiAgICAgIGNvbnN0IGF0dHIgPSB7XG4gICAgICAgIHJlZjogZmllbGQgKyBpLFxuICAgICAgICBwbGFjZWhvbGRlcjogZWRpdGFibGUucGxhY2Vob2xkZXIgPyBlZGl0YWJsZS5wbGFjZWhvbGRlciA6IG5hbWVcbiAgICAgIH07XG5cbiAgICAgIGlmIChhdXRvVmFsdWUpIHtcbiAgICAgICAgLy8gd2hlbiB5b3Ugd2FudCBzYW1lIGF1dG8gZ2VuZXJhdGUgdmFsdWVcbiAgICAgICAgLy8gYW5kIG5vdCBhbGxvdyBlZGl0LCBmb3IgZXhhbXBsZSBJRCBmaWVsZFxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGVycm9yID0gdmFsaWRhdGVTdGF0ZVtmaWVsZF0gP1xuICAgICAgICAoPHNwYW4gY2xhc3NOYW1lPSdoZWxwLWJsb2NrIGJnLWRhbmdlcic+eyB2YWxpZGF0ZVN0YXRlW2ZpZWxkXSB9PC9zcGFuPikgOlxuICAgICAgICBudWxsO1xuXG4gICAgICAvLyBsZXQgZWRpdG9yID0gRWRpdG9yKGVkaXRhYmxlLGF0dHIsZm9ybWF0KTtcbiAgICAgIC8vIGlmKGVkaXRvci5wcm9wcy50eXBlICYmIGVkaXRvci5wcm9wcy50eXBlID09ICdjaGVja2JveCcpe1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnIGtleT17IGZpZWxkIH0+XG4gICAgICAgICAgPGxhYmVsPnsgbmFtZSB9PC9sYWJlbD5cbiAgICAgICAgICB7IGVkaXRvcihlZGl0YWJsZSwgYXR0ciwgZm9ybWF0LCAnJykgfVxuICAgICAgICAgIHsgZXJyb3IgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSk7XG4gICAgY29uc3QgbW9kYWxDbGFzcyA9IGNsYXNzU2V0KCdtb2RhbCcsICdmYWRlJywgdGhpcy5tb2RhbENsYXNzTmFtZSwge1xuICAgICAgLy8gaGFjayBwcmV2ZW50IGJvb3RzdHJhcCBtb2RhbCBoaWRlIGJ5IHJlUmVuZGVyXG4gICAgICAnaW4nOiBzaGFrZUVkaXRvciB8fCB0aGlzLnN0YXRlLnZhbGlkYXRlU3RhdGVcbiAgICB9KTtcbiAgICBjb25zdCBkaWFsb2dDbGFzcyA9IGNsYXNzU2V0KCdtb2RhbC1kaWFsb2cnLCAnbW9kYWwtc20nLCB7XG4gICAgICAnYW5pbWF0ZWQnOiBzaGFrZUVkaXRvcixcbiAgICAgICdzaGFrZSc6IHNoYWtlRWRpdG9yXG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPSdtb2RhbCcgY2xhc3NOYW1lPXsgbW9kYWxDbGFzcyB9IHRhYkluZGV4PSctMScgcm9sZT0nZGlhbG9nJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBkaWFsb2dDbGFzcyB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1jb250ZW50Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1oZWFkZXInPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Nsb3NlJ1xuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz0nbW9kYWwnXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD0nQ2xvc2UnPlxuICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPSd0cnVlJz4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0nbW9kYWwtdGl0bGUnPk5ldyBSZWNvcmQ8L2g0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtYm9keSc+XG4gICAgICAgICAgICAgIDxmb3JtIHJlZj0nZm9ybSc+XG4gICAgICAgICAgICAgIHsgaW5wdXRGaWVsZCB9XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWZvb3Rlcic+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYnRuIGJ0bi1kZWZhdWx0J1xuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz0nbW9kYWwnPlxuICAgICAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J0biBidG4taW5mbydcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5oYW5kbGVTYXZlQnRuQ2xpY2sgfT5cbiAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Ub29sQmFyLnByb3BUeXBlcyA9IHtcbiAgb25BZGRSb3c6IFByb3BUeXBlcy5mdW5jLFxuICBvbkRyb3BSb3c6IFByb3BUeXBlcy5mdW5jLFxuICBvblNob3dPbmx5U2VsZWN0ZWQ6IFByb3BUeXBlcy5mdW5jLFxuICBlbmFibGVJbnNlcnQ6IFByb3BUeXBlcy5ib29sLFxuICBlbmFibGVEZWxldGU6IFByb3BUeXBlcy5ib29sLFxuICBlbmFibGVTZWFyY2g6IFByb3BUeXBlcy5ib29sLFxuICBlbmFibGVTaG93T25seVNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LFxuICBzZWFyY2hQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xlYXJTZWFyY2g6IFByb3BUeXBlcy5ib29sXG59O1xuXG5Ub29sQmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgZW5hYmxlSW5zZXJ0OiBmYWxzZSxcbiAgZW5hYmxlRGVsZXRlOiBmYWxzZSxcbiAgZW5hYmxlU2VhcmNoOiBmYWxzZSxcbiAgZW5hYmxlU2hvd09ubHlTZWxlY3RlZDogZmFsc2UsXG4gIGNsZWFyU2VhcmNoOiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9vbEJhcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Rvb2xiYXIvVG9vbEJhci5qc1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb25zdCBmcm9tICcuL0NvbnN0JztcbmltcG9ydCBjbGFzc1NldCBmcm9tICdjbGFzc25hbWVzJztcblxuY2xhc3MgVGFibGVGaWx0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuZmlsdGVyT2JqID0ge307XG4gIH1cblxuICBoYW5kbGVLZXlVcCA9IGUgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUsIG5hbWUgfSA9IGUuY3VycmVudFRhcmdldDtcbiAgICBpZiAodmFsdWUudHJpbSgpID09PSAnJykge1xuICAgICAgZGVsZXRlIHRoaXMuZmlsdGVyT2JqW25hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbHRlck9ialtuYW1lXSA9IHZhbHVlO1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uRmlsdGVyKHRoaXMuZmlsdGVyT2JqKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0cmlwZWQsIGNvbmRlbnNlZCwgcm93U2VsZWN0VHlwZSwgY29sdW1ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB0YWJsZUNsYXNzZXMgPSBjbGFzc1NldCgndGFibGUnLCB7XG4gICAgICAndGFibGUtc3RyaXBlZCc6IHN0cmlwZWQsXG4gICAgICAndGFibGUtY29uZGVuc2VkJzogY29uZGVuc2VkXG4gICAgfSk7XG4gICAgbGV0IHNlbGVjdFJvd0hlYWRlciA9IG51bGw7XG5cbiAgICBpZiAocm93U2VsZWN0VHlwZSA9PT0gQ29uc3QuUk9XX1NFTEVDVF9TSU5HTEUgfHxcbiAgICAgICAgcm93U2VsZWN0VHlwZSA9PT0gQ29uc3QuUk9XX1NFTEVDVF9NVUxUSSkge1xuICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOiAzNSxcbiAgICAgICAgcGFkZGluZ0xlZnQ6IDAsXG4gICAgICAgIHBhZGRpbmdSaWdodDogMFxuICAgICAgfTtcbiAgICAgIHNlbGVjdFJvd0hlYWRlciA9ICg8dGggc3R5bGU9eyBzdHlsZSB9IGtleT17IC0xIH0+RmlsdGVyPC90aD4pO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbHRlckZpZWxkID0gY29sdW1ucy5tYXAoZnVuY3Rpb24oY29sdW1uKSB7XG4gICAgICBjb25zdCB7IGhpZGRlbiwgd2lkdGgsIG5hbWUgfSA9IGNvbHVtbjtcbiAgICAgIGNvbnN0IHRoU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6IGhpZGRlbiA/ICdub25lJyA6IG51bGwsXG4gICAgICAgIHdpZHRoXG4gICAgICB9O1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHRoIGtleT17IG5hbWUgfSBzdHlsZT17IHRoU3R5bGUgfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGgtaW5uZXIgdGFibGUtaGVhZGVyLWNvbHVtbic+XG4gICAgICAgICAgICA8aW5wdXQgc2l6ZT0nMTAnIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsgbmFtZSB9IG5hbWU9eyBuYW1lIH0gb25LZXlVcD17IHRoaXMuaGFuZGxlS2V5VXAgfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGg+XG4gICAgICApO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9eyB0YWJsZUNsYXNzZXMgfSBzdHlsZT17IHsgbWFyZ2luVG9wOiA1IH0gfT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0ciBzdHlsZT17IHsgYm9yZGVyQm90dG9tU3R5bGU6ICdoaWRkZW4nIH0gfT5cbiAgICAgICAgICAgIHsgc2VsZWN0Um93SGVhZGVyIH17IGZpbHRlckZpZWxkIH1cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgPC90YWJsZT5cbiAgICApO1xuICB9XG59XG5UYWJsZUZpbHRlci5wcm9wVHlwZXMgPSB7XG4gIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgcm93U2VsZWN0VHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25GaWx0ZXI6IFByb3BUeXBlcy5mdW5jXG59O1xuZXhwb3J0IGRlZmF1bHQgVGFibGVGaWx0ZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9UYWJsZUZpbHRlci5qc1xuICoqLyIsIi8qIGVzbGludCBuby1uZXN0ZWQtdGVybmFyeTogMCAqL1xuLyogZXNsaW50IGd1YXJkLWZvci1pbjogMCAqL1xuLyogZXNsaW50IG5vLWNvbnNvbGU6IDAgKi9cbi8qIGVzbGludCBlcWVxZXE6IDAgKi9cbmltcG9ydCBDb25zdCBmcm9tICcuLi9Db25zdCc7XG5jb25zdCBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXI7XG5cbmZ1bmN0aW9uIF9zb3J0KGFyciwgc29ydEZpZWxkLCBvcmRlciwgc29ydEZ1bmMpIHtcbiAgb3JkZXIgPSBvcmRlci50b0xvd2VyQ2FzZSgpO1xuICBhcnIuc29ydCgoYSwgYikgPT4ge1xuICAgIGlmIChzb3J0RnVuYykge1xuICAgICAgcmV0dXJuIHNvcnRGdW5jKGEsIGIsIG9yZGVyLCBzb3J0RmllbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAob3JkZXIgPT09IENvbnN0LlNPUlRfREVTQykge1xuICAgICAgICByZXR1cm4gYVtzb3J0RmllbGRdID4gYltzb3J0RmllbGRdID8gLTEgOiAoKGFbc29ydEZpZWxkXSA8IGJbc29ydEZpZWxkXSkgPyAxIDogMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYVtzb3J0RmllbGRdIDwgYltzb3J0RmllbGRdID8gLTEgOiAoKGFbc29ydEZpZWxkXSA+IGJbc29ydEZpZWxkXSkgPyAxIDogMCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gYXJyO1xufVxuXG5leHBvcnQgY2xhc3MgVGFibGVEYXRhU2V0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHN1cGVyKGRhdGEpO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gIH1cblxuICBzZXREYXRhKGRhdGEpIHtcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIGRhdGEpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5kYXRhID0gbnVsbDtcbiAgfVxuXG4gIGdldERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGFibGVEYXRhU3RvcmUge1xuXG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMuY29sSW5mb3MgPSBudWxsO1xuICAgIHRoaXMuZmlsdGVyZWREYXRhID0gbnVsbDtcbiAgICB0aGlzLmlzT25GaWx0ZXIgPSBmYWxzZTtcbiAgICB0aGlzLmZpbHRlck9iaiA9IG51bGw7XG4gICAgdGhpcy5zZWFyY2hUZXh0ID0gbnVsbDtcbiAgICB0aGlzLnNvcnRPYmogPSBudWxsO1xuICAgIHRoaXMucGFnZU9iaiA9IHt9O1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcbiAgICB0aGlzLm11bHRpQ29sdW1uU2VhcmNoID0gZmFsc2U7XG4gICAgdGhpcy5zaG93T25seVNlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5yZW1vdGUgPSBmYWxzZTsgLy8gcmVtb3RlIGRhdGFcbiAgfVxuXG4gIHNldFByb3BzKHByb3BzKSB7XG4gICAgdGhpcy5rZXlGaWVsZCA9IHByb3BzLmtleUZpZWxkO1xuICAgIHRoaXMuZW5hYmxlUGFnaW5hdGlvbiA9IHByb3BzLmlzUGFnaW5hdGlvbjtcbiAgICB0aGlzLmNvbEluZm9zID0gcHJvcHMuY29sSW5mb3M7XG4gICAgdGhpcy5yZW1vdGUgPSBwcm9wcy5yZW1vdGU7XG4gICAgdGhpcy5tdWx0aUNvbHVtblNlYXJjaCA9IHByb3BzLm11bHRpQ29sdW1uU2VhcmNoO1xuICB9XG5cbiAgc2V0RGF0YShkYXRhKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICBpZiAodGhpcy5pc09uRmlsdGVyKSB7XG4gICAgICBpZiAodGhpcy5maWx0ZXJPYmogIT09IG51bGwpIHRoaXMuZmlsdGVyKHRoaXMuZmlsdGVyT2JqKTtcbiAgICAgIGlmICh0aGlzLnNlYXJjaFRleHQgIT09IG51bGwpIHRoaXMuc2VhcmNoKHRoaXMuc2VhcmNoVGV4dCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNvcnRPYmopIHtcbiAgICAgIHRoaXMuc29ydCh0aGlzLnNvcnRPYmoub3JkZXIsIHRoaXMuc29ydE9iai5zb3J0RmllbGQpO1xuICAgIH1cbiAgfVxuXG4gIGdldFNvcnRJbmZvKCkge1xuICAgIHJldHVybiB0aGlzLnNvcnRPYmo7XG4gIH1cblxuICBzZXRTZWxlY3RlZFJvd0tleShzZWxlY3RlZFJvd0tleXMpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gc2VsZWN0ZWRSb3dLZXlzO1xuICB9XG5cbiAgZ2V0U2VsZWN0ZWRSb3dLZXlzKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkO1xuICB9XG5cbiAgZ2V0Q3VycmVudERpc3BsYXlEYXRhKCkge1xuICAgIGlmICh0aGlzLmlzT25GaWx0ZXIpIHJldHVybiB0aGlzLmZpbHRlcmVkRGF0YTtcbiAgICBlbHNlIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cblxuICBpZ25vcmVOb25TZWxlY3RlZCgpIHtcbiAgICB0aGlzLnNob3dPbmx5U2VsZWN0ZWQgPSAhdGhpcy5zaG93T25seVNlbGVjdGVkO1xuICAgIGlmICh0aGlzLnNob3dPbmx5U2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuaXNPbkZpbHRlciA9IHRydWU7XG4gICAgICB0aGlzLmZpbHRlcmVkRGF0YSA9IHRoaXMuZGF0YS5maWx0ZXIoIHJvdyA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuc2VsZWN0ZWQuZmluZCh4ID0+IHJvd1t0aGlzLmtleUZpZWxkXSA9PT0geCk7XG4gICAgICAgIHJldHVybiB0eXBlb2YgcmVzdWx0ICE9PSAndW5kZWZpbmVkJyA/IHRydWUgOiBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzT25GaWx0ZXIgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBzb3J0KG9yZGVyLCBzb3J0RmllbGQpIHtcbiAgICB0aGlzLnNvcnRPYmogPSB7IG9yZGVyLCBzb3J0RmllbGQgfTtcblxuICAgIGxldCBjdXJyZW50RGlzcGxheURhdGEgPSB0aGlzLmdldEN1cnJlbnREaXNwbGF5RGF0YSgpO1xuICAgIGlmICghdGhpcy5jb2xJbmZvc1tzb3J0RmllbGRdKSByZXR1cm4gdGhpcztcblxuICAgIGNvbnN0IHsgc29ydEZ1bmMgfSA9IHRoaXMuY29sSW5mb3Nbc29ydEZpZWxkXTtcbiAgICBjdXJyZW50RGlzcGxheURhdGEgPSBfc29ydChjdXJyZW50RGlzcGxheURhdGEsIHNvcnRGaWVsZCwgb3JkZXIsIHNvcnRGdW5jKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcGFnZShwYWdlLCBzaXplUGVyUGFnZSkge1xuICAgIHRoaXMucGFnZU9iai5lbmQgPSBwYWdlICogc2l6ZVBlclBhZ2UgLSAxO1xuICAgIHRoaXMucGFnZU9iai5zdGFydCA9IHRoaXMucGFnZU9iai5lbmQgLSAoc2l6ZVBlclBhZ2UgLSAxKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGVkaXQobmV3VmFsLCByb3dJbmRleCwgZmllbGROYW1lKSB7XG4gICAgY29uc3QgY3VycmVudERpc3BsYXlEYXRhID0gdGhpcy5nZXRDdXJyZW50RGlzcGxheURhdGEoKTtcbiAgICBsZXQgcm93S2V5Q2FjaGU7XG4gICAgaWYgKCF0aGlzLmVuYWJsZVBhZ2luYXRpb24pIHtcbiAgICAgIGN1cnJlbnREaXNwbGF5RGF0YVtyb3dJbmRleF1bZmllbGROYW1lXSA9IG5ld1ZhbDtcbiAgICAgIHJvd0tleUNhY2hlID0gY3VycmVudERpc3BsYXlEYXRhW3Jvd0luZGV4XVt0aGlzLmtleUZpZWxkXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudERpc3BsYXlEYXRhW3RoaXMucGFnZU9iai5zdGFydCArIHJvd0luZGV4XVtmaWVsZE5hbWVdID0gbmV3VmFsO1xuICAgICAgcm93S2V5Q2FjaGUgPSBjdXJyZW50RGlzcGxheURhdGFbdGhpcy5wYWdlT2JqLnN0YXJ0ICsgcm93SW5kZXhdW3RoaXMua2V5RmllbGRdO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc09uRmlsdGVyKSB7XG4gICAgICB0aGlzLmRhdGEuZm9yRWFjaChmdW5jdGlvbihyb3cpIHtcbiAgICAgICAgaWYgKHJvd1t0aGlzLmtleUZpZWxkXSA9PT0gcm93S2V5Q2FjaGUpIHtcbiAgICAgICAgICByb3dbZmllbGROYW1lXSA9IG5ld1ZhbDtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcyk7XG4gICAgICBpZiAodGhpcy5maWx0ZXJPYmogIT09IG51bGwpIHRoaXMuZmlsdGVyKHRoaXMuZmlsdGVyT2JqKTtcbiAgICAgIGlmICh0aGlzLnNlYXJjaFRleHQgIT09IG51bGwpIHRoaXMuc2VhcmNoKHRoaXMuc2VhcmNoVGV4dCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkQXRCZWdpbihuZXdPYmopIHtcbiAgICBpZiAoIW5ld09ialt0aGlzLmtleUZpZWxkXSB8fCBuZXdPYmpbdGhpcy5rZXlGaWVsZF0udG9TdHJpbmcoKSA9PT0gJycpIHtcbiAgICAgIHRocm93IGAke3RoaXMua2V5RmllbGR9IGNhbid0IGJlIGVtcHR5IHZhbHVlLmA7XG4gICAgfVxuICAgIGNvbnN0IGN1cnJlbnREaXNwbGF5RGF0YSA9IHRoaXMuZ2V0Q3VycmVudERpc3BsYXlEYXRhKCk7XG4gICAgY3VycmVudERpc3BsYXlEYXRhLmZvckVhY2goZnVuY3Rpb24ocm93KSB7XG4gICAgICBpZiAocm93W3RoaXMua2V5RmllbGRdLnRvU3RyaW5nKCkgPT09IG5ld09ialt0aGlzLmtleUZpZWxkXS50b1N0cmluZygpKSB7XG4gICAgICAgIHRocm93IGAke3RoaXMua2V5RmllbGR9ICR7bmV3T2JqW3RoaXMua2V5RmllbGRdfSBhbHJlYWR5IGV4aXN0c2A7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gICAgY3VycmVudERpc3BsYXlEYXRhLnVuc2hpZnQobmV3T2JqKTtcbiAgICBpZiAodGhpcy5pc09uRmlsdGVyKSB7XG4gICAgICB0aGlzLmRhdGEudW5zaGlmdChuZXdPYmopO1xuICAgIH1cbiAgfVxuXG4gIGFkZChuZXdPYmopIHtcbiAgICBpZiAoIW5ld09ialt0aGlzLmtleUZpZWxkXSB8fCBuZXdPYmpbdGhpcy5rZXlGaWVsZF0udG9TdHJpbmcoKSA9PT0gJycpIHtcbiAgICAgIHRocm93IGAke3RoaXMua2V5RmllbGR9IGNhbid0IGJlIGVtcHR5IHZhbHVlLmA7XG4gICAgfVxuICAgIGNvbnN0IGN1cnJlbnREaXNwbGF5RGF0YSA9IHRoaXMuZ2V0Q3VycmVudERpc3BsYXlEYXRhKCk7XG4gICAgY3VycmVudERpc3BsYXlEYXRhLmZvckVhY2goZnVuY3Rpb24ocm93KSB7XG4gICAgICBpZiAocm93W3RoaXMua2V5RmllbGRdLnRvU3RyaW5nKCkgPT09IG5ld09ialt0aGlzLmtleUZpZWxkXS50b1N0cmluZygpKSB7XG4gICAgICAgIHRocm93IGAke3RoaXMua2V5RmllbGR9ICR7bmV3T2JqW3RoaXMua2V5RmllbGRdfSBhbHJlYWR5IGV4aXN0c2A7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG5cbiAgICBjdXJyZW50RGlzcGxheURhdGEucHVzaChuZXdPYmopO1xuICAgIGlmICh0aGlzLmlzT25GaWx0ZXIpIHtcbiAgICAgIHRoaXMuZGF0YS5wdXNoKG5ld09iaik7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlKHJvd0tleSkge1xuICAgIGNvbnN0IGN1cnJlbnREaXNwbGF5RGF0YSA9IHRoaXMuZ2V0Q3VycmVudERpc3BsYXlEYXRhKCk7XG4gICAgY29uc3QgcmVzdWx0ID0gY3VycmVudERpc3BsYXlEYXRhLmZpbHRlcihyb3cgPT4ge1xuICAgICAgcmV0dXJuIHJvd0tleS5pbmRleE9mKHJvd1t0aGlzLmtleUZpZWxkXSkgPT09IC0xO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuaXNPbkZpbHRlcikge1xuICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLmZpbHRlcihyb3cgPT4ge1xuICAgICAgICByZXR1cm4gcm93S2V5LmluZGV4T2Yocm93W3RoaXMua2V5RmllbGRdKSA9PT0gLTE7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZmlsdGVyZWREYXRhID0gcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGEgPSByZXN1bHQ7XG4gICAgfVxuICB9XG5cbiAgZmlsdGVyKGZpbHRlck9iaikge1xuICAgIGlmIChPYmplY3Qua2V5cyhmaWx0ZXJPYmopLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5maWx0ZXJlZERhdGEgPSBudWxsO1xuICAgICAgdGhpcy5pc09uRmlsdGVyID0gZmFsc2U7XG4gICAgICB0aGlzLmZpbHRlck9iaiA9IG51bGw7XG4gICAgICBpZiAodGhpcy5zZWFyY2hUZXh0ICE9PSBudWxsKSB0aGlzLnNlYXJjaCh0aGlzLnNlYXJjaFRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbHRlck9iaiA9IGZpbHRlck9iajtcbiAgICAgIHRoaXMuZmlsdGVyZWREYXRhID0gdGhpcy5kYXRhLmZpbHRlciggcm93ID0+IHtcbiAgICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgbGV0IGZpbHRlclZhbDtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZmlsdGVyT2JqKSB7XG4gICAgICAgICAgbGV0IHRhcmdldFZhbCA9IHJvd1trZXldO1xuXG4gICAgICAgICAgc3dpdGNoIChmaWx0ZXJPYmpba2V5XS50eXBlKSB7XG4gICAgICAgICAgY2FzZSBDb25zdC5GSUxURVJfVFlQRS5OVU1CRVI6IHtcbiAgICAgICAgICAgIGZpbHRlclZhbCA9IGZpbHRlck9ialtrZXldLnZhbHVlLm51bWJlcjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIENvbnN0LkZJTFRFUl9UWVBFLkNVU1RPTToge1xuICAgICAgICAgICAgZmlsdGVyVmFsID0gKHR5cGVvZiBmaWx0ZXJPYmpba2V5XS52YWx1ZSA9PT0gJ29iamVjdCcpID9cbiAgICAgICAgICAgICAgdW5kZWZpbmVkIDpcbiAgICAgICAgICAgICAgKHR5cGVvZiBmaWx0ZXJPYmpba2V5XS52YWx1ZSA9PT0gJ3N0cmluZycpID9cbiAgICAgICAgICAgICAgICBmaWx0ZXJPYmpba2V5XS52YWx1ZS50b0xvd2VyQ2FzZSgpIDpcbiAgICAgICAgICAgICAgICBmaWx0ZXJPYmpba2V5XS52YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIENvbnN0LkZJTFRFUl9UWVBFLlJFR0VYOiB7XG4gICAgICAgICAgICBmaWx0ZXJWYWwgPSBmaWx0ZXJPYmpba2V5XS52YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICBmaWx0ZXJWYWwgPSAodHlwZW9mIGZpbHRlck9ialtrZXldLnZhbHVlID09PSAnc3RyaW5nJykgP1xuICAgICAgICAgICAgICBmaWx0ZXJPYmpba2V5XS52YWx1ZS50b0xvd2VyQ2FzZSgpIDpcbiAgICAgICAgICAgICAgZmlsdGVyT2JqW2tleV0udmFsdWU7XG4gICAgICAgICAgICBpZiAoZmlsdGVyVmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgLy8gU3VwcG9ydCBvbGQgZmlsdGVyXG4gICAgICAgICAgICAgIGZpbHRlclZhbCA9IGZpbHRlck9ialtrZXldLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuY29sSW5mb3Nba2V5XSkge1xuICAgICAgICAgICAgY29uc3QgeyBmb3JtYXQsIGZpbHRlckZvcm1hdHRlZCwgZm9ybWF0RXh0cmFEYXRhIH0gPSB0aGlzLmNvbEluZm9zW2tleV07XG4gICAgICAgICAgICBpZiAoZmlsdGVyRm9ybWF0dGVkICYmIGZvcm1hdCkge1xuICAgICAgICAgICAgICB0YXJnZXRWYWwgPSBmb3JtYXQocm93W2tleV0sIHJvdywgZm9ybWF0RXh0cmFEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzd2l0Y2ggKGZpbHRlck9ialtrZXldLnR5cGUpIHtcbiAgICAgICAgICBjYXNlIENvbnN0LkZJTFRFUl9UWVBFLk5VTUJFUjoge1xuICAgICAgICAgICAgdmFsaWQgPSB0aGlzLmZpbHRlck51bWJlcih0YXJnZXRWYWwsIGZpbHRlclZhbCwgZmlsdGVyT2JqW2tleV0udmFsdWUuY29tcGFyYXRvcik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSBDb25zdC5GSUxURVJfVFlQRS5EQVRFOiB7XG4gICAgICAgICAgICB2YWxpZCA9IHRoaXMuZmlsdGVyRGF0ZSh0YXJnZXRWYWwsIGZpbHRlclZhbCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSBDb25zdC5GSUxURVJfVFlQRS5SRUdFWDoge1xuICAgICAgICAgICAgdmFsaWQgPSB0aGlzLmZpbHRlclJlZ2V4KHRhcmdldFZhbCwgZmlsdGVyVmFsKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIENvbnN0LkZJTFRFUl9UWVBFLkNVU1RPTToge1xuICAgICAgICAgICAgdmFsaWQgPSB0aGlzLmZpbHRlckN1c3RvbSh0YXJnZXRWYWwsIGZpbHRlclZhbCwgZmlsdGVyT2JqW2tleV0udmFsdWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIHZhbGlkID0gdGhpcy5maWx0ZXJUZXh0KHRhcmdldFZhbCwgZmlsdGVyVmFsKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWxpZDtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5pc09uRmlsdGVyID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmaWx0ZXJOdW1iZXIodGFyZ2V0VmFsLCBmaWx0ZXJWYWwsIGNvbXBhcmF0b3IpIHtcbiAgICBsZXQgdmFsaWQgPSB0cnVlO1xuICAgIHN3aXRjaCAoY29tcGFyYXRvcikge1xuICAgIGNhc2UgJz0nOiB7XG4gICAgICBpZiAodGFyZ2V0VmFsICE9IGZpbHRlclZhbCkge1xuICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgJz4nOiB7XG4gICAgICBpZiAodGFyZ2V0VmFsIDw9IGZpbHRlclZhbCkge1xuICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgJz49Jzoge1xuICAgICAgaWYgKHRhcmdldFZhbCA8IGZpbHRlclZhbCkge1xuICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgJzwnOiB7XG4gICAgICBpZiAodGFyZ2V0VmFsID49IGZpbHRlclZhbCkge1xuICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgJzw9Jzoge1xuICAgICAgaWYgKHRhcmdldFZhbCA+IGZpbHRlclZhbCkge1xuICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgJyE9Jzoge1xuICAgICAgaWYgKHRhcmdldFZhbCA9PSBmaWx0ZXJWYWwpIHtcbiAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb25zb2xlLmVycm9yKCdOdW1iZXIgY29tcGFyYXRvciBwcm92aWRlZCBpcyBub3Qgc3VwcG9ydGVkJyk7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWxpZDtcbiAgfVxuXG4gIGZpbHRlckRhdGUodGFyZ2V0VmFsLCBmaWx0ZXJWYWwpIHtcbiAgICByZXR1cm4gKHRhcmdldFZhbC5nZXREYXRlKCkgPT09IGZpbHRlclZhbC5nZXREYXRlKCkgJiZcbiAgICAgICAgdGFyZ2V0VmFsLmdldE1vbnRoKCkgPT09IGZpbHRlclZhbC5nZXRNb250aCgpICYmXG4gICAgICAgIHRhcmdldFZhbC5nZXRGdWxsWWVhcigpID09PSBmaWx0ZXJWYWwuZ2V0RnVsbFllYXIoKSk7XG4gIH1cblxuICBmaWx0ZXJSZWdleCh0YXJnZXRWYWwsIGZpbHRlclZhbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbmV3IFJlZ0V4cChmaWx0ZXJWYWwsICdpJykudGVzdCh0YXJnZXRWYWwpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgcmVndWxhciBleHByZXNzaW9uJyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmaWx0ZXJDdXN0b20odGFyZ2V0VmFsLCBmaWx0ZXJWYWwsIGNhbGxiYWNrSW5mbykge1xuICAgIGlmIChjYWxsYmFja0luZm8gIT09IG51bGwgJiYgdHlwZW9mIGNhbGxiYWNrSW5mbyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBjYWxsYmFja0luZm8uY2FsbGJhY2sodGFyZ2V0VmFsLCBjYWxsYmFja0luZm8uY2FsbGJhY2tQYXJhbWV0ZXJzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5maWx0ZXJUZXh0KHRhcmdldFZhbCwgZmlsdGVyVmFsKTtcbiAgfVxuXG4gIGZpbHRlclRleHQodGFyZ2V0VmFsLCBmaWx0ZXJWYWwpIHtcbiAgICBpZiAodGFyZ2V0VmFsLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlclZhbCkgPT09IC0xKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyogR2VuZXJhbCBzZWFyY2ggZnVuY3Rpb25cbiAgICogSXQgd2lsbCBzZWFyY2ggZm9yIHRoZSB0ZXh0IGlmIHRoZSBpbnB1dCBpbmNsdWRlcyB0aGF0IHRleHQ7XG4gICAqL1xuICBzZWFyY2goc2VhcmNoVGV4dCkge1xuICAgIGlmIChzZWFyY2hUZXh0LnRyaW0oKSA9PT0gJycpIHtcbiAgICAgIHRoaXMuZmlsdGVyZWREYXRhID0gbnVsbDtcbiAgICAgIHRoaXMuaXNPbkZpbHRlciA9IGZhbHNlO1xuICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gbnVsbDtcbiAgICAgIGlmICh0aGlzLmZpbHRlck9iaiAhPT0gbnVsbCkgdGhpcy5maWx0ZXIodGhpcy5maWx0ZXJPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlYXJjaFRleHQgPSBzZWFyY2hUZXh0O1xuICAgICAgbGV0IHNlYXJjaFRleHRBcnJheSA9IFtdO1xuXG4gICAgICBpZiAodGhpcy5tdWx0aUNvbHVtblNlYXJjaCkge1xuICAgICAgICBzZWFyY2hUZXh0QXJyYXkgPSBzZWFyY2hUZXh0LnNwbGl0KCcgJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWFyY2hUZXh0QXJyYXkucHVzaChzZWFyY2hUZXh0KTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc291cmNlID0gdGhpcy5pc09uRmlsdGVyID8gdGhpcy5maWx0ZXJlZERhdGEgOiB0aGlzLmRhdGE7XG5cbiAgICAgIHRoaXMuZmlsdGVyZWREYXRhID0gc291cmNlLmZpbHRlciggcm93ID0+IHtcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHJvdyk7XG4gICAgICAgIGxldCB2YWxpZCA9IGZhbHNlO1xuICAgICAgICAvLyBmb3IgbG9vcHMgYXJlIHVnbHksIGJ1dCBwZXJmb3JtYW5jZSBtYXR0ZXJzIGhlcmUuXG4gICAgICAgIC8vIEFuZCB5b3UgY2FudCBicmVhayBmcm9tIGEgZm9yRWFjaC5cbiAgICAgICAgLy8gaHR0cDovL2pzcGVyZi5jb20vZm9yLXZzLWZvcmVhY2gvNjZcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGtleXNMZW5ndGggPSBrZXlzLmxlbmd0aDsgaSA8IGtleXNMZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG4gICAgICAgICAgaWYgKHRoaXMuY29sSW5mb3Nba2V5XSAmJiByb3dba2V5XSkge1xuICAgICAgICAgICAgY29uc3QgeyBmb3JtYXQsIGZpbHRlckZvcm1hdHRlZCwgZm9ybWF0RXh0cmFEYXRhLCBzZWFyY2hhYmxlIH0gPSB0aGlzLmNvbEluZm9zW2tleV07XG4gICAgICAgICAgICBsZXQgdGFyZ2V0VmFsID0gcm93W2tleV07XG4gICAgICAgICAgICBpZiAoc2VhcmNoYWJsZSkge1xuICAgICAgICAgICAgICBpZiAoZmlsdGVyRm9ybWF0dGVkICYmIGZvcm1hdCkge1xuICAgICAgICAgICAgICAgIHRhcmdldFZhbCA9IGZvcm1hdCh0YXJnZXRWYWwsIHJvdywgZm9ybWF0RXh0cmFEYXRhKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMCwgdGV4dExlbmd0aCA9IHNlYXJjaFRleHRBcnJheS5sZW5ndGg7IGogPCB0ZXh0TGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXJWYWwgPSBzZWFyY2hUZXh0QXJyYXlbal0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0VmFsLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlclZhbCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbGlkO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmlzT25GaWx0ZXIgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGdldERhdGFJZ25vcmluZ1BhZ2luYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudERpc3BsYXlEYXRhKCk7XG4gIH1cblxuICBnZXQoKSB7XG4gICAgY29uc3QgX2RhdGEgPSB0aGlzLmdldEN1cnJlbnREaXNwbGF5RGF0YSgpO1xuXG4gICAgaWYgKF9kYXRhLmxlbmd0aCA9PT0gMCkgcmV0dXJuIF9kYXRhO1xuXG4gICAgaWYgKHRoaXMucmVtb3RlIHx8ICF0aGlzLmVuYWJsZVBhZ2luYXRpb24pIHtcbiAgICAgIHJldHVybiBfZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICBmb3IgKGxldCBpID0gdGhpcy5wYWdlT2JqLnN0YXJ0OyBpIDw9IHRoaXMucGFnZU9iai5lbmQ7IGkrKykge1xuICAgICAgICByZXN1bHQucHVzaChfZGF0YVtpXSk7XG4gICAgICAgIGlmIChpICsgMSA9PT0gX2RhdGEubGVuZ3RoKSBicmVhaztcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9XG5cbiAgZ2V0S2V5RmllbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMua2V5RmllbGQ7XG4gIH1cblxuICBnZXREYXRhTnVtKCkge1xuICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnREaXNwbGF5RGF0YSgpLmxlbmd0aDtcbiAgfVxuXG4gIGlzQ2hhbmdlZFBhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFnZU9iai5zdGFydCAmJiB0aGlzLnBhZ2VPYmouZW5kID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgZ2V0QWxsUm93a2V5KCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEubWFwKHJvdyA9PiB7XG4gICAgICByZXR1cm4gcm93W3RoaXMua2V5RmllbGRdO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdG9yZS9UYWJsZURhdGFTdG9yZS5qc1xuICoqLyIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIHRoaXMuX2V2ZW50cyA9IHRoaXMuX2V2ZW50cyB8fCB7fTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxuRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24obikge1xuICBpZiAoIWlzTnVtYmVyKG4pIHx8IG4gPCAwIHx8IGlzTmFOKG4pKVxuICAgIHRocm93IFR5cGVFcnJvcignbiBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyJyk7XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgZXIsIGhhbmRsZXIsIGxlbiwgYXJncywgaSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKHR5cGUgPT09ICdlcnJvcicpIHtcbiAgICBpZiAoIXRoaXMuX2V2ZW50cy5lcnJvciB8fFxuICAgICAgICAoaXNPYmplY3QodGhpcy5fZXZlbnRzLmVycm9yKSAmJiAhdGhpcy5fZXZlbnRzLmVycm9yLmxlbmd0aCkpIHtcbiAgICAgIGVyID0gYXJndW1lbnRzWzFdO1xuICAgICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgICB9XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ1VuY2F1Z2h0LCB1bnNwZWNpZmllZCBcImVycm9yXCIgZXZlbnQuJyk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNVbmRlZmluZWQoaGFuZGxlcikpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAvLyBmYXN0IGNhc2VzXG4gICAgICBjYXNlIDE6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBzbG93ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0gMSk7XG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCBsZW47IGkrKylcbiAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QoaGFuZGxlcikpIHtcbiAgICBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0gMSk7XG4gICAgZm9yIChpID0gMTsgaSA8IGxlbjsgaSsrKVxuICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG5cbiAgICBsaXN0ZW5lcnMgPSBoYW5kbGVyLnNsaWNlKCk7XG4gICAgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgICBsaXN0ZW5lcnNbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICBpZiAodGhpcy5fZXZlbnRzLm5ld0xpc3RlbmVyKVxuICAgIHRoaXMuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICBpc0Z1bmN0aW9uKGxpc3RlbmVyLmxpc3RlbmVyKSA/XG4gICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICBlbHNlIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XG4gIGVsc2VcbiAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBbdGhpcy5fZXZlbnRzW3R5cGVdLCBsaXN0ZW5lcl07XG5cbiAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkgJiYgIXRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQpIHtcbiAgICB2YXIgbTtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHRoaXMuX21heExpc3RlbmVycykpIHtcbiAgICAgIG0gPSB0aGlzLl9tYXhMaXN0ZW5lcnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgICB9XG5cbiAgICBpZiAobSAmJiBtID4gMCAmJiB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoID4gbSkge1xuICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCA9IHRydWU7XG4gICAgICBjb25zb2xlLmVycm9yKCcobm9kZSkgd2FybmluZzogcG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2xlYWsgZGV0ZWN0ZWQuICVkIGxpc3RlbmVycyBhZGRlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICdVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byBpbmNyZWFzZSBsaW1pdC4nLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoKTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZS50cmFjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBub3Qgc3VwcG9ydGVkIGluIElFIDEwXG4gICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgdmFyIGZpcmVkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZygpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGcpO1xuXG4gICAgaWYgKCFmaXJlZCkge1xuICAgICAgZmlyZWQgPSB0cnVlO1xuICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBnLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHRoaXMub24odHlwZSwgZyk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBlbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWZmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZFxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBsaXN0LCBwb3NpdGlvbiwgbGVuZ3RoLCBpO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIGxpc3QgPSB0aGlzLl9ldmVudHNbdHlwZV07XG4gIGxlbmd0aCA9IGxpc3QubGVuZ3RoO1xuICBwb3NpdGlvbiA9IC0xO1xuXG4gIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fFxuICAgICAgKGlzRnVuY3Rpb24obGlzdC5saXN0ZW5lcikgJiYgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcblxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGxpc3QpKSB7XG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gPiAwOykge1xuICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8XG4gICAgICAgICAgKGxpc3RbaV0ubGlzdGVuZXIgJiYgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICBsaXN0Lmxlbmd0aCA9IDA7XG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0LnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIga2V5LCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICBpZiAoIXRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgZWxzZSBpZiAodGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGZvciAoa2V5IGluIHRoaXMuX2V2ZW50cykge1xuICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNGdW5jdGlvbihsaXN0ZW5lcnMpKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICB9IGVsc2Uge1xuICAgIC8vIExJRk8gb3JkZXJcbiAgICB3aGlsZSAobGlzdGVuZXJzLmxlbmd0aClcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2xpc3RlbmVycy5sZW5ndGggLSAxXSk7XG4gIH1cbiAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgcmV0O1xuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldCA9IFtdO1xuICBlbHNlIGlmIChpc0Z1bmN0aW9uKHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgcmV0ID0gW3RoaXMuX2V2ZW50c1t0eXBlXV07XG4gIGVsc2VcbiAgICByZXQgPSB0aGlzLl9ldmVudHNbdHlwZV0uc2xpY2UoKTtcbiAgcmV0dXJuIHJldDtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICB2YXIgcmV0O1xuICBpZiAoIWVtaXR0ZXIuX2V2ZW50cyB8fCAhZW1pdHRlci5fZXZlbnRzW3R5cGVdKVxuICAgIHJldCA9IDA7XG4gIGVsc2UgaWYgKGlzRnVuY3Rpb24oZW1pdHRlci5fZXZlbnRzW3R5cGVdKSlcbiAgICByZXQgPSAxO1xuICBlbHNlXG4gICAgcmV0ID0gZW1pdHRlci5fZXZlbnRzW3R5cGVdLmxlbmd0aDtcbiAgcmV0dXJuIHJldDtcbn07XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2V2ZW50cy9ldmVudHMuanNcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb25zdCBmcm9tICcuL0NvbnN0JztcbmltcG9ydCBjbGFzc1NldCBmcm9tICdjbGFzc25hbWVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICByZW5kZXJSZWFjdFNvcnRDYXJldChvcmRlcikge1xuICAgIGNvbnN0IG9yZGVyQ2xhc3MgPSBjbGFzc1NldCgnb3JkZXInLCB7XG4gICAgICAnZHJvcHVwJzogb3JkZXIgPT09IENvbnN0LlNPUlRfQVNDXG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17IG9yZGVyQ2xhc3MgfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjYXJldCcgc3R5bGU9eyB7IG1hcmdpbjogJzBweCA1cHgnIH0gfT48L3NwYW4+XG4gICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfSxcblxuICBnZXRTY3JvbGxCYXJXaWR0aCgpIHtcbiAgICBjb25zdCBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbm5lci5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICBpbm5lci5zdHlsZS5oZWlnaHQgPSAnMjAwcHgnO1xuXG4gICAgY29uc3Qgb3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvdXRlci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgb3V0ZXIuc3R5bGUudG9wID0gJzBweCc7XG4gICAgb3V0ZXIuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgIG91dGVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICBvdXRlci5zdHlsZS53aWR0aCA9ICcyMDBweCc7XG4gICAgb3V0ZXIuc3R5bGUuaGVpZ2h0ID0gJzE1MHB4JztcbiAgICBvdXRlci5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIG91dGVyLmFwcGVuZENoaWxkKGlubmVyKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3V0ZXIpO1xuICAgIGNvbnN0IHcxID0gaW5uZXIub2Zmc2V0V2lkdGg7XG4gICAgb3V0ZXIuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgICBsZXQgdzIgPSBpbm5lci5vZmZzZXRXaWR0aDtcbiAgICBpZiAodzEgPT09IHcyKSB3MiA9IG91dGVyLmNsaWVudFdpZHRoO1xuXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChvdXRlcik7XG5cbiAgICByZXR1cm4gKHcxIC0gdzIpO1xuICB9LFxuXG4gIGNhblVzZURPTSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCc7XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsLmpzXG4gKiovIiwiLyogZXNsaW50IGJsb2NrLXNjb3BlZC12YXI6IDAgKi9cbi8qIGVzbGludCB2YXJzLW9uLXRvcDogMCAqL1xuLyogZXNsaW50IG5vLXZhcjogMCAqL1xuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiAwICovXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgY29uc3QgZmlsZXNhdmVyID0gcmVxdWlyZSgnLi9maWxlc2F2ZXInKTtcbiAgdmFyIHNhdmVBcyA9IGZpbGVzYXZlci5zYXZlQXM7XG59XG5cbmZ1bmN0aW9uIHRvU3RyaW5nKGRhdGEsIGtleXMpIHtcbiAgbGV0IGRhdGFTdHJpbmcgPSAnJztcbiAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSByZXR1cm4gZGF0YVN0cmluZztcblxuICBkYXRhU3RyaW5nICs9IGtleXMuam9pbignLCcpICsgJ1xcbic7XG5cbiAgZGF0YS5tYXAoZnVuY3Rpb24ocm93KSB7XG4gICAga2V5cy5tYXAoZnVuY3Rpb24oY29sLCBpKSB7XG4gICAgICBjb25zdCBjZWxsID0gdHlwZW9mIHJvd1tjb2xdICE9PSAndW5kZWZpbmVkJyA/ICgnXCInICsgcm93W2NvbF0gKyAnXCInKSA6ICcnO1xuICAgICAgZGF0YVN0cmluZyArPSBjZWxsO1xuICAgICAgaWYgKGkgKyAxIDwga2V5cy5sZW5ndGgpIGRhdGFTdHJpbmcgKz0gJywnO1xuICAgIH0pO1xuXG4gICAgZGF0YVN0cmluZyArPSAnXFxuJztcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGFTdHJpbmc7XG59XG5cbmNvbnN0IGV4cG9ydENTViA9IGZ1bmN0aW9uKGRhdGEsIGtleXMsIGZpbGVuYW1lKSB7XG4gIGNvbnN0IGRhdGFTdHJpbmcgPSB0b1N0cmluZyhkYXRhLCBrZXlzKTtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgc2F2ZUFzKG5ldyBCbG9iKFsgZGF0YVN0cmluZyBdLFxuICAgICAgICB7IHR5cGU6ICd0ZXh0L3BsYWluO2NoYXJzZXQ9dXRmLTgnIH0pLFxuICAgICAgICBmaWxlbmFtZSB8fCAnc3ByZWFkc2hlZXQuY3N2Jyk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV4cG9ydENTVjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2Nzdl9leHBvcnRfdXRpbC5qc1xuICoqLyIsIi8qIEZpbGVTYXZlci5qc1xuICogQSBzYXZlQXMoKSBGaWxlU2F2ZXIgaW1wbGVtZW50YXRpb24uXG4gKiAxLjEuMjAxNTEwMDNcbiAqXG4gKiBCeSBFbGkgR3JleSwgaHR0cDovL2VsaWdyZXkuY29tXG4gKiBMaWNlbnNlOiBNSVRcbiAqICAgU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lbGlncmV5L0ZpbGVTYXZlci5qcy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kXG4gKi9cblxuLypnbG9iYWwgc2VsZiAqL1xuLypqc2xpbnQgYml0d2lzZTogdHJ1ZSwgaW5kZW50OiA0LCBsYXhicmVhazogdHJ1ZSwgbGF4Y29tbWE6IHRydWUsIHNtYXJ0dGFiczogdHJ1ZSwgcGx1c3BsdXM6IHRydWUgKi9cblxuLyohIEBzb3VyY2UgaHR0cDovL3B1cmwuZWxpZ3JleS5jb20vZ2l0aHViL0ZpbGVTYXZlci5qcy9ibG9iL21hc3Rlci9GaWxlU2F2ZXIuanMgKi9cblxudmFyIHNhdmVBcyA9IHNhdmVBcyB8fCAoZnVuY3Rpb24odmlldykge1xuXHRcInVzZSBzdHJpY3RcIjtcblx0Ly8gSUUgPDEwIGlzIGV4cGxpY2l0bHkgdW5zdXBwb3J0ZWRcblx0aWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09IFwidW5kZWZpbmVkXCIgJiYgL01TSUUgWzEtOV1cXC4vLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyXG5cdFx0ICBkb2MgPSB2aWV3LmRvY3VtZW50XG5cdFx0ICAvLyBvbmx5IGdldCBVUkwgd2hlbiBuZWNlc3NhcnkgaW4gY2FzZSBCbG9iLmpzIGhhc24ndCBvdmVycmlkZGVuIGl0IHlldFxuXHRcdCwgZ2V0X1VSTCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIHZpZXcuVVJMIHx8IHZpZXcud2Via2l0VVJMIHx8IHZpZXc7XG5cdFx0fVxuXHRcdCwgc2F2ZV9saW5rID0gZG9jLmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIiwgXCJhXCIpXG5cdFx0LCBjYW5fdXNlX3NhdmVfbGluayA9IFwiZG93bmxvYWRcIiBpbiBzYXZlX2xpbmtcblx0XHQsIGNsaWNrID0gZnVuY3Rpb24obm9kZSkge1xuXHRcdFx0dmFyIGV2ZW50ID0gbmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiKTtcblx0XHRcdG5vZGUuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cdFx0fVxuXHRcdCwgaXNfc2FmYXJpID0gL1ZlcnNpb25cXC9bXFxkXFwuXSsuKlNhZmFyaS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KVxuXHRcdCwgd2Via2l0X3JlcV9mcyA9IHZpZXcud2Via2l0UmVxdWVzdEZpbGVTeXN0ZW1cblx0XHQsIHJlcV9mcyA9IHZpZXcucmVxdWVzdEZpbGVTeXN0ZW0gfHwgd2Via2l0X3JlcV9mcyB8fCB2aWV3Lm1velJlcXVlc3RGaWxlU3lzdGVtXG5cdFx0LCB0aHJvd19vdXRzaWRlID0gZnVuY3Rpb24oZXgpIHtcblx0XHRcdCh2aWV3LnNldEltbWVkaWF0ZSB8fCB2aWV3LnNldFRpbWVvdXQpKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR0aHJvdyBleDtcblx0XHRcdH0sIDApO1xuXHRcdH1cblx0XHQsIGZvcmNlX3NhdmVhYmxlX3R5cGUgPSBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiXG5cdFx0LCBmc19taW5fc2l6ZSA9IDBcblx0XHQvLyBTZWUgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTM3NTI5NyNjNyBhbmRcblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vZWxpZ3JleS9GaWxlU2F2ZXIuanMvY29tbWl0LzQ4NTkzMGEjY29tbWl0Y29tbWVudC04NzY4MDQ3XG5cdFx0Ly8gZm9yIHRoZSByZWFzb25pbmcgYmVoaW5kIHRoZSB0aW1lb3V0IGFuZCByZXZvY2F0aW9uIGZsb3dcblx0XHQsIGFyYml0cmFyeV9yZXZva2VfdGltZW91dCA9IDUwMCAvLyBpbiBtc1xuXHRcdCwgcmV2b2tlID0gZnVuY3Rpb24oZmlsZSkge1xuXHRcdFx0dmFyIHJldm9rZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKHR5cGVvZiBmaWxlID09PSBcInN0cmluZ1wiKSB7IC8vIGZpbGUgaXMgYW4gb2JqZWN0IFVSTFxuXHRcdFx0XHRcdGdldF9VUkwoKS5yZXZva2VPYmplY3RVUkwoZmlsZSk7XG5cdFx0XHRcdH0gZWxzZSB7IC8vIGZpbGUgaXMgYSBGaWxlXG5cdFx0XHRcdFx0ZmlsZS5yZW1vdmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdGlmICh2aWV3LmNocm9tZSkge1xuXHRcdFx0XHRyZXZva2VyKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZXRUaW1lb3V0KHJldm9rZXIsIGFyYml0cmFyeV9yZXZva2VfdGltZW91dCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdCwgZGlzcGF0Y2ggPSBmdW5jdGlvbihmaWxlc2F2ZXIsIGV2ZW50X3R5cGVzLCBldmVudCkge1xuXHRcdFx0ZXZlbnRfdHlwZXMgPSBbXS5jb25jYXQoZXZlbnRfdHlwZXMpO1xuXHRcdFx0dmFyIGkgPSBldmVudF90eXBlcy5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoaS0tKSB7XG5cdFx0XHRcdHZhciBsaXN0ZW5lciA9IGZpbGVzYXZlcltcIm9uXCIgKyBldmVudF90eXBlc1tpXV07XG5cdFx0XHRcdGlmICh0eXBlb2YgbGlzdGVuZXIgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRsaXN0ZW5lci5jYWxsKGZpbGVzYXZlciwgZXZlbnQgfHwgZmlsZXNhdmVyKTtcblx0XHRcdFx0XHR9IGNhdGNoIChleCkge1xuXHRcdFx0XHRcdFx0dGhyb3dfb3V0c2lkZShleCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdCwgYXV0b19ib20gPSBmdW5jdGlvbihibG9iKSB7XG5cdFx0XHQvLyBwcmVwZW5kIEJPTSBmb3IgVVRGLTggWE1MIGFuZCB0ZXh0LyogdHlwZXMgKGluY2x1ZGluZyBIVE1MKVxuXHRcdFx0aWYgKC9eXFxzKig/OnRleHRcXC9cXFMqfGFwcGxpY2F0aW9uXFwveG1sfFxcUypcXC9cXFMqXFwreG1sKVxccyo7LipjaGFyc2V0XFxzKj1cXHMqdXRmLTgvaS50ZXN0KGJsb2IudHlwZSkpIHtcblx0XHRcdFx0cmV0dXJuIG5ldyBCbG9iKFtcIlxcdWZlZmZcIiwgYmxvYl0sIHt0eXBlOiBibG9iLnR5cGV9KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBibG9iO1xuXHRcdH1cblx0XHQsIEZpbGVTYXZlciA9IGZ1bmN0aW9uKGJsb2IsIG5hbWUsIG5vX2F1dG9fYm9tKSB7XG5cdFx0XHRpZiAoIW5vX2F1dG9fYm9tKSB7XG5cdFx0XHRcdGJsb2IgPSBhdXRvX2JvbShibG9iKTtcblx0XHRcdH1cblx0XHRcdC8vIEZpcnN0IHRyeSBhLmRvd25sb2FkLCB0aGVuIHdlYiBmaWxlc3lzdGVtLCB0aGVuIG9iamVjdCBVUkxzXG5cdFx0XHR2YXJcblx0XHRcdFx0ICBmaWxlc2F2ZXIgPSB0aGlzXG5cdFx0XHRcdCwgdHlwZSA9IGJsb2IudHlwZVxuXHRcdFx0XHQsIGJsb2JfY2hhbmdlZCA9IGZhbHNlXG5cdFx0XHRcdCwgb2JqZWN0X3VybFxuXHRcdFx0XHQsIHRhcmdldF92aWV3XG5cdFx0XHRcdCwgZGlzcGF0Y2hfYWxsID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0ZGlzcGF0Y2goZmlsZXNhdmVyLCBcIndyaXRlc3RhcnQgcHJvZ3Jlc3Mgd3JpdGUgd3JpdGVlbmRcIi5zcGxpdChcIiBcIikpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIG9uIGFueSBmaWxlc3lzIGVycm9ycyByZXZlcnQgdG8gc2F2aW5nIHdpdGggb2JqZWN0IFVSTHNcblx0XHRcdFx0LCBmc19lcnJvciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmICh0YXJnZXRfdmlldyAmJiBpc19zYWZhcmkgJiYgdHlwZW9mIEZpbGVSZWFkZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0XHRcdC8vIFNhZmFyaSBkb2Vzbid0IGFsbG93IGRvd25sb2FkaW5nIG9mIGJsb2IgdXJsc1xuXHRcdFx0XHRcdFx0dmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cdFx0XHRcdFx0XHRyZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBiYXNlNjREYXRhID0gcmVhZGVyLnJlc3VsdDtcblx0XHRcdFx0XHRcdFx0dGFyZ2V0X3ZpZXcubG9jYXRpb24uaHJlZiA9IFwiZGF0YTphdHRhY2htZW50L2ZpbGVcIiArIGJhc2U2NERhdGEuc2xpY2UoYmFzZTY0RGF0YS5zZWFyY2goL1ssO10vKSk7XG5cdFx0XHRcdFx0XHRcdGZpbGVzYXZlci5yZWFkeVN0YXRlID0gZmlsZXNhdmVyLkRPTkU7XG5cdFx0XHRcdFx0XHRcdGRpc3BhdGNoX2FsbCgpO1xuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuXHRcdFx0XHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuSU5JVDtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gZG9uJ3QgY3JlYXRlIG1vcmUgb2JqZWN0IFVSTHMgdGhhbiBuZWVkZWRcblx0XHRcdFx0XHRpZiAoYmxvYl9jaGFuZ2VkIHx8ICFvYmplY3RfdXJsKSB7XG5cdFx0XHRcdFx0XHRvYmplY3RfdXJsID0gZ2V0X1VSTCgpLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHRhcmdldF92aWV3KSB7XG5cdFx0XHRcdFx0XHR0YXJnZXRfdmlldy5sb2NhdGlvbi5ocmVmID0gb2JqZWN0X3VybDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dmFyIG5ld190YWIgPSB2aWV3Lm9wZW4ob2JqZWN0X3VybCwgXCJfYmxhbmtcIik7XG5cdFx0XHRcdFx0XHRpZiAobmV3X3RhYiA9PSB1bmRlZmluZWQgJiYgaXNfc2FmYXJpKSB7XG5cdFx0XHRcdFx0XHRcdC8vQXBwbGUgZG8gbm90IGFsbG93IHdpbmRvdy5vcGVuLCBzZWUgaHR0cDovL2JpdC5seS8xa1pmZlJJXG5cdFx0XHRcdFx0XHRcdHZpZXcubG9jYXRpb24uaHJlZiA9IG9iamVjdF91cmxcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuRE9ORTtcblx0XHRcdFx0XHRkaXNwYXRjaF9hbGwoKTtcblx0XHRcdFx0XHRyZXZva2Uob2JqZWN0X3VybCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0LCBhYm9ydGFibGUgPSBmdW5jdGlvbihmdW5jKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0aWYgKGZpbGVzYXZlci5yZWFkeVN0YXRlICE9PSBmaWxlc2F2ZXIuRE9ORSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0LCBjcmVhdGVfaWZfbm90X2ZvdW5kID0ge2NyZWF0ZTogdHJ1ZSwgZXhjbHVzaXZlOiBmYWxzZX1cblx0XHRcdFx0LCBzbGljZVxuXHRcdFx0O1xuXHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuSU5JVDtcblx0XHRcdGlmICghbmFtZSkge1xuXHRcdFx0XHRuYW1lID0gXCJkb3dubG9hZFwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGNhbl91c2Vfc2F2ZV9saW5rKSB7XG5cdFx0XHRcdG9iamVjdF91cmwgPSBnZXRfVVJMKCkuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXHRcdFx0XHRzYXZlX2xpbmsuaHJlZiA9IG9iamVjdF91cmw7XG5cdFx0XHRcdHNhdmVfbGluay5kb3dubG9hZCA9IG5hbWU7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0Y2xpY2soc2F2ZV9saW5rKTtcblx0XHRcdFx0XHRkaXNwYXRjaF9hbGwoKTtcblx0XHRcdFx0XHRyZXZva2Uob2JqZWN0X3VybCk7XG5cdFx0XHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuRE9ORTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdC8vIE9iamVjdCBhbmQgd2ViIGZpbGVzeXN0ZW0gVVJMcyBoYXZlIGEgcHJvYmxlbSBzYXZpbmcgaW4gR29vZ2xlIENocm9tZSB3aGVuXG5cdFx0XHQvLyB2aWV3ZWQgaW4gYSB0YWIsIHNvIEkgZm9yY2Ugc2F2ZSB3aXRoIGFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVxuXHRcdFx0Ly8gaHR0cDovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTExNThcblx0XHRcdC8vIFVwZGF0ZTogR29vZ2xlIGVycmFudGx5IGNsb3NlZCA5MTE1OCwgSSBzdWJtaXR0ZWQgaXQgYWdhaW46XG5cdFx0XHQvLyBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9Mzg5NjQyXG5cdFx0XHRpZiAodmlldy5jaHJvbWUgJiYgdHlwZSAmJiB0eXBlICE9PSBmb3JjZV9zYXZlYWJsZV90eXBlKSB7XG5cdFx0XHRcdHNsaWNlID0gYmxvYi5zbGljZSB8fCBibG9iLndlYmtpdFNsaWNlO1xuXHRcdFx0XHRibG9iID0gc2xpY2UuY2FsbChibG9iLCAwLCBibG9iLnNpemUsIGZvcmNlX3NhdmVhYmxlX3R5cGUpO1xuXHRcdFx0XHRibG9iX2NoYW5nZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gU2luY2UgSSBjYW4ndCBiZSBzdXJlIHRoYXQgdGhlIGd1ZXNzZWQgbWVkaWEgdHlwZSB3aWxsIHRyaWdnZXIgYSBkb3dubG9hZFxuXHRcdFx0Ly8gaW4gV2ViS2l0LCBJIGFwcGVuZCAuZG93bmxvYWQgdG8gdGhlIGZpbGVuYW1lLlxuXHRcdFx0Ly8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTY1NDQwXG5cdFx0XHRpZiAod2Via2l0X3JlcV9mcyAmJiBuYW1lICE9PSBcImRvd25sb2FkXCIpIHtcblx0XHRcdFx0bmFtZSArPSBcIi5kb3dubG9hZFwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGUgPT09IGZvcmNlX3NhdmVhYmxlX3R5cGUgfHwgd2Via2l0X3JlcV9mcykge1xuXHRcdFx0XHR0YXJnZXRfdmlldyA9IHZpZXc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXJlcV9mcykge1xuXHRcdFx0XHRmc19lcnJvcigpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRmc19taW5fc2l6ZSArPSBibG9iLnNpemU7XG5cdFx0XHRyZXFfZnModmlldy5URU1QT1JBUlksIGZzX21pbl9zaXplLCBhYm9ydGFibGUoZnVuY3Rpb24oZnMpIHtcblx0XHRcdFx0ZnMucm9vdC5nZXREaXJlY3RvcnkoXCJzYXZlZFwiLCBjcmVhdGVfaWZfbm90X2ZvdW5kLCBhYm9ydGFibGUoZnVuY3Rpb24oZGlyKSB7XG5cdFx0XHRcdFx0dmFyIHNhdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGRpci5nZXRGaWxlKG5hbWUsIGNyZWF0ZV9pZl9ub3RfZm91bmQsIGFib3J0YWJsZShmdW5jdGlvbihmaWxlKSB7XG5cdFx0XHRcdFx0XHRcdGZpbGUuY3JlYXRlV3JpdGVyKGFib3J0YWJsZShmdW5jdGlvbih3cml0ZXIpIHtcblx0XHRcdFx0XHRcdFx0XHR3cml0ZXIub253cml0ZWVuZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0YXJnZXRfdmlldy5sb2NhdGlvbi5ocmVmID0gZmlsZS50b1VSTCgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuRE9ORTtcblx0XHRcdFx0XHRcdFx0XHRcdGRpc3BhdGNoKGZpbGVzYXZlciwgXCJ3cml0ZWVuZFwiLCBldmVudCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXZva2UoZmlsZSk7XG5cdFx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0XHR3cml0ZXIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yID0gd3JpdGVyLmVycm9yO1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGVycm9yLmNvZGUgIT09IGVycm9yLkFCT1JUX0VSUikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRmc19lcnJvcigpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdFx0XCJ3cml0ZXN0YXJ0IHByb2dyZXNzIHdyaXRlIGFib3J0XCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHdyaXRlcltcIm9uXCIgKyBldmVudF0gPSBmaWxlc2F2ZXJbXCJvblwiICsgZXZlbnRdO1xuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdHdyaXRlci53cml0ZShibG9iKTtcblx0XHRcdFx0XHRcdFx0XHRmaWxlc2F2ZXIuYWJvcnQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHdyaXRlci5hYm9ydCgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuRE9ORTtcblx0XHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRcdGZpbGVzYXZlci5yZWFkeVN0YXRlID0gZmlsZXNhdmVyLldSSVRJTkc7XG5cdFx0XHRcdFx0XHRcdH0pLCBmc19lcnJvcik7XG5cdFx0XHRcdFx0XHR9KSwgZnNfZXJyb3IpO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0ZGlyLmdldEZpbGUobmFtZSwge2NyZWF0ZTogZmFsc2V9LCBhYm9ydGFibGUoZnVuY3Rpb24oZmlsZSkge1xuXHRcdFx0XHRcdFx0Ly8gZGVsZXRlIGZpbGUgaWYgaXQgYWxyZWFkeSBleGlzdHNcblx0XHRcdFx0XHRcdGZpbGUucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHRzYXZlKCk7XG5cdFx0XHRcdFx0fSksIGFib3J0YWJsZShmdW5jdGlvbihleCkge1xuXHRcdFx0XHRcdFx0aWYgKGV4LmNvZGUgPT09IGV4Lk5PVF9GT1VORF9FUlIpIHtcblx0XHRcdFx0XHRcdFx0c2F2ZSgpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0ZnNfZXJyb3IoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KSk7XG5cdFx0XHRcdH0pLCBmc19lcnJvcik7XG5cdFx0XHR9KSwgZnNfZXJyb3IpO1xuXHRcdH1cblx0XHQsIEZTX3Byb3RvID0gRmlsZVNhdmVyLnByb3RvdHlwZVxuXHRcdCwgc2F2ZUFzID0gZnVuY3Rpb24oYmxvYiwgbmFtZSwgbm9fYXV0b19ib20pIHtcblx0XHRcdHJldHVybiBuZXcgRmlsZVNhdmVyKGJsb2IsIG5hbWUsIG5vX2F1dG9fYm9tKTtcblx0XHR9XG5cdDtcblx0Ly8gSUUgMTArIChuYXRpdmUgc2F2ZUFzKVxuXHRpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gXCJ1bmRlZmluZWRcIiAmJiBuYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYikge1xuXHRcdHJldHVybiBmdW5jdGlvbihibG9iLCBuYW1lLCBub19hdXRvX2JvbSkge1xuXHRcdFx0aWYgKCFub19hdXRvX2JvbSkge1xuXHRcdFx0XHRibG9iID0gYXV0b19ib20oYmxvYik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IoYmxvYiwgbmFtZSB8fCBcImRvd25sb2FkXCIpO1xuXHRcdH07XG5cdH1cblxuXHRGU19wcm90by5hYm9ydCA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBmaWxlc2F2ZXIgPSB0aGlzO1xuXHRcdGZpbGVzYXZlci5yZWFkeVN0YXRlID0gZmlsZXNhdmVyLkRPTkU7XG5cdFx0ZGlzcGF0Y2goZmlsZXNhdmVyLCBcImFib3J0XCIpO1xuXHR9O1xuXHRGU19wcm90by5yZWFkeVN0YXRlID0gRlNfcHJvdG8uSU5JVCA9IDA7XG5cdEZTX3Byb3RvLldSSVRJTkcgPSAxO1xuXHRGU19wcm90by5ET05FID0gMjtcblxuXHRGU19wcm90by5lcnJvciA9XG5cdEZTX3Byb3RvLm9ud3JpdGVzdGFydCA9XG5cdEZTX3Byb3RvLm9ucHJvZ3Jlc3MgPVxuXHRGU19wcm90by5vbndyaXRlID1cblx0RlNfcHJvdG8ub25hYm9ydCA9XG5cdEZTX3Byb3RvLm9uZXJyb3IgPVxuXHRGU19wcm90by5vbndyaXRlZW5kID1cblx0XHRudWxsO1xuXG5cdHJldHVybiBzYXZlQXM7XG59KFxuXHQgICB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmXG5cdHx8IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93XG5cdHx8IHRoaXMuY29udGVudFxuKSk7XG4vLyBgc2VsZmAgaXMgdW5kZWZpbmVkIGluIEZpcmVmb3ggZm9yIEFuZHJvaWQgY29udGVudCBzY3JpcHQgY29udGV4dFxuLy8gd2hpbGUgYHRoaXNgIGlzIG5zSUNvbnRlbnRGcmFtZU1lc3NhZ2VNYW5hZ2VyXG4vLyB3aXRoIGFuIGF0dHJpYnV0ZSBgY29udGVudGAgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgd2luZG93XG5cbmlmICh0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzLnNhdmVBcyA9IHNhdmVBcztcbn0gZWxzZSBpZiAoKHR5cGVvZiBkZWZpbmUgIT09IFwidW5kZWZpbmVkXCIgJiYgZGVmaW5lICE9PSBudWxsKSAmJiAoZGVmaW5lLmFtZCAhPSBudWxsKSkge1xuICBkZWZpbmUoW10sIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBzYXZlQXM7XG4gIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZmlsZXNhdmVyLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHsgdGhyb3cgbmV3IEVycm9yKFwiZGVmaW5lIGNhbm5vdCBiZSB1c2VkIGluZGlyZWN0XCIpOyB9O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqICh3ZWJwYWNrKS9idWlsZGluL2FtZC1kZWZpbmUuanNcbiAqKiBtb2R1bGUgaWQgPSAzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfYW1kX29wdGlvbnNfXztcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAod2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgQ29uc3QgZnJvbSAnLi9Db25zdCc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdldmVudHMnO1xuXG5leHBvcnQgY2xhc3MgRmlsdGVyIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHN1cGVyKGRhdGEpO1xuICAgIHRoaXMuY3VycmVudEZpbHRlciA9IHt9O1xuICB9XG5cbiAgaGFuZGxlRmlsdGVyKGRhdGFGaWVsZCwgdmFsdWUsIHR5cGUpIHtcbiAgICBjb25zdCBmaWx0ZXJUeXBlID0gdHlwZSB8fCBDb25zdC5GSUxURVJfVFlQRS5DVVNUT007XG5cbiAgICBpZiAodmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgLy8gdmFsdWUgb2YgdGhlIGZpbHRlciBpcyBhbiBvYmplY3RcbiAgICAgIGxldCBoYXNWYWx1ZSA9IHRydWU7XG4gICAgICBmb3IgKGNvbnN0IHByb3AgaW4gdmFsdWUpIHtcbiAgICAgICAgaWYgKCF2YWx1ZVtwcm9wXSB8fCB2YWx1ZVtwcm9wXSA9PT0gJycpIHtcbiAgICAgICAgICBoYXNWYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBpZiBvbmUgb2YgdGhlIG9iamVjdCBwcm9wZXJ0aWVzIGlzIHVuZGVmaW5lZCBvciBlbXB0eSwgd2UgcmVtb3ZlIHRoZSBmaWx0ZXJcbiAgICAgIGlmIChoYXNWYWx1ZSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRGaWx0ZXJbZGF0YUZpZWxkXSA9IHsgdmFsdWU6IHZhbHVlLCB0eXBlOiBmaWx0ZXJUeXBlIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWxldGUgdGhpcy5jdXJyZW50RmlsdGVyW2RhdGFGaWVsZF07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghdmFsdWUgfHwgdmFsdWUudHJpbSgpID09PSAnJykge1xuICAgICAgZGVsZXRlIHRoaXMuY3VycmVudEZpbHRlcltkYXRhRmllbGRdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnRGaWx0ZXJbZGF0YUZpZWxkXSA9IHsgdmFsdWU6IHZhbHVlLnRyaW0oKSwgdHlwZTogZmlsdGVyVHlwZSB9O1xuICAgIH1cbiAgICB0aGlzLmVtaXQoJ29uRmlsdGVyQ2hhbmdlJywgdGhpcy5jdXJyZW50RmlsdGVyKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvRmlsdGVyLmpzXG4gKiovIiwiLyogZXNsaW50IGRlZmF1bHQtY2FzZTogMCAqL1xuLyogZXNsaW50IGd1YXJkLWZvci1pbjogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbnN0IGZyb20gJy4vQ29uc3QnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJztcbmltcG9ydCBEYXRlRmlsdGVyIGZyb20gJy4vZmlsdGVycy9EYXRlJztcbmltcG9ydCBUZXh0RmlsdGVyIGZyb20gJy4vZmlsdGVycy9UZXh0JztcbmltcG9ydCBSZWdleEZpbHRlciBmcm9tICcuL2ZpbHRlcnMvUmVnZXgnO1xuaW1wb3J0IFNlbGVjdEZpbHRlciBmcm9tICcuL2ZpbHRlcnMvU2VsZWN0JztcbmltcG9ydCBOdW1iZXJGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL051bWJlcic7XG5cbmNsYXNzIFRhYmxlSGVhZGVyQ29sdW1uIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmhhbmRsZUZpbHRlciA9IHRoaXMuaGFuZGxlRmlsdGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDb2x1bW5DbGljayA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMucHJvcHMuZGF0YVNvcnQpIHJldHVybjtcbiAgICBjb25zdCBvcmRlciA9IHRoaXMucHJvcHMuc29ydCA9PT0gQ29uc3QuU09SVF9ERVNDID8gQ29uc3QuU09SVF9BU0MgOiBDb25zdC5TT1JUX0RFU0M7XG4gICAgdGhpcy5wcm9wcy5vblNvcnQob3JkZXIsIHRoaXMucHJvcHMuZGF0YUZpZWxkKTtcbiAgfVxuXG4gIGhhbmRsZUZpbHRlcih2YWx1ZSwgdHlwZSkge1xuICAgIHRoaXMucHJvcHMuZmlsdGVyLmVtaXR0ZXIuaGFuZGxlRmlsdGVyKHRoaXMucHJvcHMuZGF0YUZpZWxkLCB2YWx1ZSwgdHlwZSk7XG4gIH1cblxuICBnZXRGaWx0ZXJzKCkge1xuICAgIHN3aXRjaCAodGhpcy5wcm9wcy5maWx0ZXIudHlwZSkge1xuICAgIGNhc2UgQ29uc3QuRklMVEVSX1RZUEUuVEVYVDoge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRleHRGaWx0ZXIgeyAuLi50aGlzLnByb3BzLmZpbHRlciB9XG4gICAgICAgICAgY29sdW1uTmFtZT17IHRoaXMucHJvcHMuY2hpbGRyZW4gfSBmaWx0ZXJIYW5kbGVyPXsgdGhpcy5oYW5kbGVGaWx0ZXIgfSAvPlxuICAgICAgKTtcbiAgICB9XG4gICAgY2FzZSBDb25zdC5GSUxURVJfVFlQRS5SRUdFWDoge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFJlZ2V4RmlsdGVyIHsgLi4udGhpcy5wcm9wcy5maWx0ZXIgfVxuICAgICAgICAgIGNvbHVtbk5hbWU9eyB0aGlzLnByb3BzLmNoaWxkcmVuIH0gZmlsdGVySGFuZGxlcj17IHRoaXMuaGFuZGxlRmlsdGVyIH0gLz5cbiAgICAgICk7XG4gICAgfVxuICAgIGNhc2UgQ29uc3QuRklMVEVSX1RZUEUuU0VMRUNUOiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U2VsZWN0RmlsdGVyIHsgLi4udGhpcy5wcm9wcy5maWx0ZXIgfVxuICAgICAgICAgIGNvbHVtbk5hbWU9eyB0aGlzLnByb3BzLmNoaWxkcmVuIH0gZmlsdGVySGFuZGxlcj17IHRoaXMuaGFuZGxlRmlsdGVyIH0gLz5cbiAgICAgICk7XG4gICAgfVxuICAgIGNhc2UgQ29uc3QuRklMVEVSX1RZUEUuTlVNQkVSOiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TnVtYmVyRmlsdGVyIHsgLi4udGhpcy5wcm9wcy5maWx0ZXIgfVxuICAgICAgICAgIGNvbHVtbk5hbWU9eyB0aGlzLnByb3BzLmNoaWxkcmVuIH0gZmlsdGVySGFuZGxlcj17IHRoaXMuaGFuZGxlRmlsdGVyIH0gLz5cbiAgICAgICk7XG4gICAgfVxuICAgIGNhc2UgQ29uc3QuRklMVEVSX1RZUEUuREFURToge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPERhdGVGaWx0ZXIgeyAuLi50aGlzLnByb3BzLmZpbHRlciB9XG4gICAgICAgICAgY29sdW1uTmFtZT17IHRoaXMucHJvcHMuY2hpbGRyZW4gfSBmaWx0ZXJIYW5kbGVyPXsgdGhpcy5oYW5kbGVGaWx0ZXIgfSAvPlxuICAgICAgKTtcbiAgICB9XG4gICAgY2FzZSBDb25zdC5GSUxURVJfVFlQRS5DVVNUT006IHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmZpbHRlci5nZXRFbGVtZW50KHRoaXMuaGFuZGxlRmlsdGVyLFxuICAgICAgICAgIHRoaXMucHJvcHMuZmlsdGVyLmN1c3RvbUZpbHRlclBhcmFtZXRlcnMpO1xuICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnJlZnNbJ2hlYWRlci1jb2wnXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZmllbGQnLCB0aGlzLnByb3BzLmRhdGFGaWVsZCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGRlZmF1bHRDYXJldDtcbiAgICBjb25zdCB0aFN0eWxlID0ge1xuICAgICAgdGV4dEFsaWduOiB0aGlzLnByb3BzLmRhdGFBbGlnbixcbiAgICAgIGRpc3BsYXk6IHRoaXMucHJvcHMuaGlkZGVuID8gJ25vbmUnIDogbnVsbFxuICAgIH07XG4gICAgaWYgKHRoaXMucHJvcHMuc29ydEluZGljYXRvcikge1xuICAgICAgZGVmYXVsdENhcmV0ID0gKCF0aGlzLnByb3BzLmRhdGFTb3J0KSA/IG51bGwgOiAoXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nb3JkZXInPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZHJvcGRvd24nPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjYXJldCcgc3R5bGU9eyB7IG1hcmdpbjogJzEwcHggMCAxMHB4IDVweCcsIGNvbG9yOiAnI2NjYycgfSB9Pjwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkcm9wdXAnPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjYXJldCcgc3R5bGU9eyB7IG1hcmdpbjogJzEwcHggMCcsIGNvbG9yOiAnI2NjYycgfSB9Pjwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IHNvcnRDYXJldCA9IHRoaXMucHJvcHMuc29ydCA/IFV0aWwucmVuZGVyUmVhY3RTb3J0Q2FyZXQodGhpcy5wcm9wcy5zb3J0KSA6IGRlZmF1bHRDYXJldDtcbiAgICBjb25zdCBjbGFzc2VzID0gdGhpcy5wcm9wcy5jbGFzc05hbWUgKyAnICcgKyAodGhpcy5wcm9wcy5kYXRhU29ydCA/ICdzb3J0LWNvbHVtbicgOiAnJyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRoIHJlZj0naGVhZGVyLWNvbCdcbiAgICAgICAgICBjbGFzc05hbWU9eyBjbGFzc2VzIH1cbiAgICAgICAgICBzdHlsZT17IHRoU3R5bGUgfVxuICAgICAgICAgIHRpdGxlPXsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG4gICAgICAgICAgb25DbGljaz17IHRoaXMuaGFuZGxlQ29sdW1uQ2xpY2sgfT5cbiAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH17IHNvcnRDYXJldCB9XG4gICAgICAgIDxkaXYgb25DbGljaz17IGUgPT4gZS5zdG9wUHJvcGFnYXRpb24oKSB9PlxuICAgICAgICAgIHsgdGhpcy5wcm9wcy5maWx0ZXIgPyB0aGlzLmdldEZpbHRlcnMoKSA6IG51bGwgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGg+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBmaWx0ZXJUeXBlQXJyYXkgPSBbXTtcbmZvciAoY29uc3Qga2V5IGluIENvbnN0LkZJTFRFUl9UWVBFKSB7XG4gIGZpbHRlclR5cGVBcnJheS5wdXNoKENvbnN0LkZJTFRFUl9UWVBFW2tleV0pO1xufVxuXG5UYWJsZUhlYWRlckNvbHVtbi5wcm9wVHlwZXMgPSB7XG4gIGRhdGFGaWVsZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGF0YUFsaWduOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkYXRhU29ydDogUHJvcFR5cGVzLmJvb2wsXG4gIG9uU29ydDogUHJvcFR5cGVzLmZ1bmMsXG4gIGRhdGFGb3JtYXQ6IFByb3BUeXBlcy5mdW5jLFxuICBpc0tleTogUHJvcFR5cGVzLmJvb2wsXG4gIGVkaXRhYmxlOiBQcm9wVHlwZXMuYW55LFxuICBoaWRkZW46IFByb3BUeXBlcy5ib29sLFxuICBzZWFyY2hhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB3aWR0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc29ydEZ1bmM6IFByb3BUeXBlcy5mdW5jLFxuICBjb2x1bW5DbGFzc05hbWU6IFByb3BUeXBlcy5hbnksXG4gIGZpbHRlckZvcm1hdHRlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHNvcnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZvcm1hdEV4dHJhRGF0YTogUHJvcFR5cGVzLmFueSxcbiAgZmlsdGVyOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHR5cGU6IFByb3BUeXBlcy5vbmVPZihmaWx0ZXJUeXBlQXJyYXkpLFxuICAgIGRlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm9iamVjdCwgLy8gZm9yIFNlbGVjdEZpbHRlclxuICAgICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlcikgLy8gZm9yIE51bWJlckZpbHRlclxuICAgIF0pLFxuICAgIG51bWJlckNvbXBhcmF0b3JzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgICBlbWl0dGVyOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGdldEVsZW1lbnQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIGN1c3RvbUZpbHRlclBhcmFtZXRlcnM6IFByb3BUeXBlcy5vYmplY3RcbiAgfSksXG4gIHNvcnRJbmRpY2F0b3I6IFByb3BUeXBlcy5ib29sXG59O1xuXG5UYWJsZUhlYWRlckNvbHVtbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGRhdGFBbGlnbjogJ2xlZnQnLFxuICBkYXRhU29ydDogZmFsc2UsXG4gIGRhdGFGb3JtYXQ6IHVuZGVmaW5lZCxcbiAgaXNLZXk6IGZhbHNlLFxuICBlZGl0YWJsZTogdHJ1ZSxcbiAgb25Tb3J0OiB1bmRlZmluZWQsXG4gIGhpZGRlbjogZmFsc2UsXG4gIHNlYXJjaGFibGU6IHRydWUsXG4gIGNsYXNzTmFtZTogJycsXG4gIHdpZHRoOiBudWxsLFxuICBzb3J0RnVuYzogdW5kZWZpbmVkLFxuICBjb2x1bW5DbGFzc05hbWU6ICcnLFxuICBmaWx0ZXJGb3JtYXR0ZWQ6IGZhbHNlLFxuICBzb3J0OiB1bmRlZmluZWQsXG4gIGZvcm1hdEV4dHJhRGF0YTogdW5kZWZpbmVkLFxuICBmaWx0ZXI6IHVuZGVmaW5lZCxcbiAgc29ydEluZGljYXRvcjogdHJ1ZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFibGVIZWFkZXJDb2x1bW47XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9UYWJsZUhlYWRlckNvbHVtbi5qc1xuICoqLyIsIi8qIGVzbGludCBxdW90ZXM6IDAgKi9cbi8qIGVzbGludCBtYXgtbGVuOiAwICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi4vQ29uc3QnO1xuXG5jbGFzcyBEYXRlRmlsdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5maWx0ZXIgPSB0aGlzLmZpbHRlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2V0RGVmYXVsdERhdGUoKSB7XG4gICAgbGV0IGRlZmF1bHREYXRlID0gJyc7XG4gICAgaWYgKHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIC8vIFNldCB0aGUgYXBwcm9wcmlhdGUgZm9ybWF0IGZvciB0aGUgaW5wdXQgdHlwZT1kYXRlLCBpLmUuIFwiWVlZWS1NTS1ERFwiXG4gICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSBuZXcgRGF0ZSh0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSk7XG4gICAgICBkZWZhdWx0RGF0ZSA9IGAke2RlZmF1bHRWYWx1ZS5nZXRGdWxsWWVhcigpfS0keyhcIjBcIiArIChkZWZhdWx0VmFsdWUuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMil9LSR7KFwiMFwiICsgZGVmYXVsdFZhbHVlLmdldERhdGUoKSkuc2xpY2UoLTIpfWA7XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0RGF0ZTtcbiAgfVxuXG4gIGZpbHRlcihldmVudCkge1xuICAgIGNvbnN0IGRhdGVWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBpZiAoZGF0ZVZhbHVlKSB7XG4gICAgICB0aGlzLnByb3BzLmZpbHRlckhhbmRsZXIobmV3IERhdGUoZGF0ZVZhbHVlKSwgQ29uc3QuRklMVEVSX1RZUEUuREFURSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMuZmlsdGVySGFuZGxlcihudWxsLCBDb25zdC5GSUxURVJfVFlQRS5EQVRFKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBkYXRlVmFsdWUgPSB0aGlzLnJlZnMuaW5wdXREYXRlLmRlZmF1bHRWYWx1ZTtcbiAgICBpZiAoZGF0ZVZhbHVlKSB7XG4gICAgICB0aGlzLnByb3BzLmZpbHRlckhhbmRsZXIobmV3IERhdGUoZGF0ZVZhbHVlKSwgQ29uc3QuRklMVEVSX1RZUEUuREFURSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxpbnB1dCByZWY9J2lucHV0RGF0ZSdcbiAgICAgICAgICAgY2xhc3NOYW1lPSdmaWx0ZXIgZGF0ZS1maWx0ZXIgZm9ybS1jb250cm9sJ1xuICAgICAgICAgICB0eXBlPSdkYXRlJ1xuICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMuZmlsdGVyIH1cbiAgICAgICAgICAgZGVmYXVsdFZhbHVlPXsgdGhpcy5zZXREZWZhdWx0RGF0ZSgpIH0gLz5cbiAgICApO1xuICB9XG59XG5cbkRhdGVGaWx0ZXIucHJvcFR5cGVzID0ge1xuICBmaWx0ZXJIYW5kbGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5vYmplY3QsXG4gIGNvbHVtbk5hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhdGVGaWx0ZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9maWx0ZXJzL0RhdGUuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi4vQ29uc3QnO1xuXG5jbGFzcyBUZXh0RmlsdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5maWx0ZXIgPSB0aGlzLmZpbHRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMudGltZW91dCA9IG51bGw7XG4gIH1cblxuICBmaWx0ZXIoZXZlbnQpIHtcbiAgICBpZiAodGhpcy50aW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICB9XG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLmZpbHRlckhhbmRsZXIoZmlsdGVyVmFsdWUsIENvbnN0LkZJTFRFUl9UWVBFLlRFWFQpO1xuICAgIH0sIHRoaXMucHJvcHMuZGVsYXkpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgZGVmYXVsdFZhbHVlID0gdGhpcy5yZWZzLmlucHV0VGV4dC5kZWZhdWx0VmFsdWU7XG4gICAgaWYgKGRlZmF1bHRWYWx1ZSkge1xuICAgICAgdGhpcy5wcm9wcy5maWx0ZXJIYW5kbGVyKGRlZmF1bHRWYWx1ZSwgQ29uc3QuRklMVEVSX1RZUEUuVEVYVCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwbGFjZWhvbGRlciwgY29sdW1uTmFtZSwgZGVmYXVsdFZhbHVlIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8aW5wdXQgcmVmPSdpbnB1dFRleHQnXG4gICAgICAgIGNsYXNzTmFtZT0nZmlsdGVyIHRleHQtZmlsdGVyIGZvcm0tY29udHJvbCdcbiAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgb25DaGFuZ2U9eyB0aGlzLmZpbHRlciB9XG4gICAgICAgIHBsYWNlaG9sZGVyPXsgcGxhY2Vob2xkZXIgfHwgYEVudGVyICR7Y29sdW1uTmFtZX0uLi5gIH1cbiAgICAgICAgZGVmYXVsdFZhbHVlPXsgZGVmYXVsdFZhbHVlID8gZGVmYXVsdFZhbHVlIDogJycgfSAvPlxuICAgICk7XG4gIH1cbn1cblxuVGV4dEZpbHRlci5wcm9wVHlwZXMgPSB7XG4gIGZpbHRlckhhbmRsZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjb2x1bW5OYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5UZXh0RmlsdGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGVsYXk6IENvbnN0LkZJTFRFUl9ERUxBWVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dEZpbHRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2ZpbHRlcnMvVGV4dC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb25zdCBmcm9tICcuLi9Db25zdCc7XG5cbmNsYXNzIFJlZ2V4RmlsdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5maWx0ZXIgPSB0aGlzLmZpbHRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMudGltZW91dCA9IG51bGw7XG4gIH1cblxuICBmaWx0ZXIoZXZlbnQpIHtcbiAgICBpZiAodGhpcy50aW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICB9XG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLmZpbHRlckhhbmRsZXIoZmlsdGVyVmFsdWUsIENvbnN0LkZJTFRFUl9UWVBFLlJFR0VYKTtcbiAgICB9LCB0aGlzLnByb3BzLmRlbGF5KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5yZWZzLmlucHV0VGV4dC5kZWZhdWx0VmFsdWU7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnByb3BzLmZpbHRlckhhbmRsZXIodmFsdWUsIENvbnN0LkZJTFRFUl9UWVBFLlJFR0VYKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRlZmF1bHRWYWx1ZSwgcGxhY2Vob2xkZXIsIGNvbHVtbk5hbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxpbnB1dCByZWY9J2lucHV0VGV4dCdcbiAgICAgICAgICBjbGFzc05hbWU9J2ZpbHRlciB0ZXh0LWZpbHRlciBmb3JtLWNvbnRyb2wnXG4gICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICBvbkNoYW5nZT17IHRoaXMuZmlsdGVyIH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17IHBsYWNlaG9sZGVyIHx8IGBFbnRlciBSZWdleCBmb3IgJHtjb2x1bW5OYW1lfS4uLmAgfVxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17IChkZWZhdWx0VmFsdWUpID8gZGVmYXVsdFZhbHVlIDogJycgfSAvPlxuICAgICk7XG4gIH1cbn1cblxuUmVnZXhGaWx0ZXIucHJvcFR5cGVzID0ge1xuICBmaWx0ZXJIYW5kbGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgY29sdW1uTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuUmVnZXhGaWx0ZXIuZGVmYXVsdFByb3BzID0ge1xuICBkZWxheTogQ29uc3QuRklMVEVSX0RFTEFZXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWdleEZpbHRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2ZpbHRlcnMvUmVnZXguanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NTZXQgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi4vQ29uc3QnO1xuXG5jbGFzcyBTZWxlY3RGaWx0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmZpbHRlciA9IHRoaXMuZmlsdGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzUGxhY2Vob2xkZXJTZWxlY3RlZDogKHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgICAgIXRoaXMucHJvcHMub3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSh0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSkpXG4gICAgfTtcbiAgfVxuXG4gIGZpbHRlcihldmVudCkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNQbGFjZWhvbGRlclNlbGVjdGVkOiAodmFsdWUgPT09ICcnKSB9KTtcbiAgICB0aGlzLnByb3BzLmZpbHRlckhhbmRsZXIodmFsdWUsIENvbnN0LkZJTFRFUl9UWVBFLlNFTEVDVCk7XG4gIH1cblxuICBnZXRPcHRpb25zKCkge1xuICAgIGNvbnN0IG9wdGlvblRhZ3MgPSBbXTtcbiAgICBjb25zdCB7IG9wdGlvbnMsIHBsYWNlaG9sZGVyLCBjb2x1bW5OYW1lIH0gPSB0aGlzLnByb3BzO1xuICAgIG9wdGlvblRhZ3MucHVzaCgoXG4gICAgICA8b3B0aW9uIGtleT0nLTEnIHZhbHVlPScnPnsgcGxhY2Vob2xkZXIgfHwgYFNlbGVjdCAke2NvbHVtbk5hbWV9Li4uYCB9PC9vcHRpb24+XG4gICAgKSk7XG4gICAgT2JqZWN0LmtleXMob3B0aW9ucykubWFwKGtleSA9PiB7XG4gICAgICBvcHRpb25UYWdzLnB1c2goPG9wdGlvbiBrZXk9eyBrZXkgfSB2YWx1ZT17IGtleSB9Pnsgb3B0aW9uc1trZXldIH08L29wdGlvbj4pO1xuICAgIH0pO1xuICAgIHJldHVybiBvcHRpb25UYWdzO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnJlZnMuc2VsZWN0SW5wdXQudmFsdWU7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnByb3BzLmZpbHRlckhhbmRsZXIodmFsdWUsIENvbnN0LkZJTFRFUl9UWVBFLlNFTEVDVCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNlbGVjdENsYXNzID0gY2xhc3NTZXQoJ2ZpbHRlcicsICdzZWxlY3QtZmlsdGVyJywgJ2Zvcm0tY29udHJvbCcsXG4gICAgICAgICAgICAgIHsgJ3BsYWNlaG9sZGVyLXNlbGVjdGVkJzogdGhpcy5zdGF0ZS5pc1BsYWNlaG9sZGVyU2VsZWN0ZWQgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHNlbGVjdCByZWY9J3NlbGVjdElucHV0J1xuICAgICAgICAgIGNsYXNzTmFtZT17IHNlbGVjdENsYXNzIH1cbiAgICAgICAgICBvbkNoYW5nZT17IHRoaXMuZmlsdGVyIH1cbiAgICAgICAgICBkZWZhdWx0VmFsdWU9eyAodGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCkgPyB0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSA6ICcnIH0gPlxuICAgICAgICB7IHRoaXMuZ2V0T3B0aW9ucygpIH1cbiAgICAgIDwvc2VsZWN0PlxuICAgICk7XG4gIH1cbn1cblxuU2VsZWN0RmlsdGVyLnByb3BUeXBlcyA9IHtcbiAgZmlsdGVySGFuZGxlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb3B0aW9uczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgY29sdW1uTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0RmlsdGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZmlsdGVycy9TZWxlY3QuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NTZXQgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi4vQ29uc3QnO1xuXG5jb25zdCBsZWdhbENvbXBhcmF0b3JzID0gWyAnPScsICc+JywgJz49JywgJzwnLCAnPD0nLCAnIT0nIF07XG5cbmNsYXNzIE51bWJlckZpbHRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMubnVtYmVyQ29tcGFyYXRvcnMgPSB0aGlzLnByb3BzLm51bWJlckNvbXBhcmF0b3JzIHx8IGxlZ2FsQ29tcGFyYXRvcnM7XG4gICAgdGhpcy50aW1lb3V0ID0gbnVsbDtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNQbGFjZWhvbGRlclNlbGVjdGVkOiAodGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICB0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZS5udW1iZXIgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAodGhpcy5wcm9wcy5vcHRpb25zICYmXG4gICAgICAgICAgdGhpcy5wcm9wcy5vcHRpb25zLmluZGV4T2YodGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUubnVtYmVyKSA9PT0gLTEpKVxuICAgIH07XG4gICAgdGhpcy5vbkNoYW5nZU51bWJlciA9IHRoaXMub25DaGFuZ2VOdW1iZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQ2hhbmdlTnVtYmVyU2V0ID0gdGhpcy5vbkNoYW5nZU51bWJlclNldC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25DaGFuZ2VDb21wYXJhdG9yID0gdGhpcy5vbkNoYW5nZUNvbXBhcmF0b3IuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uQ2hhbmdlTnVtYmVyKGV2ZW50KSB7XG4gICAgY29uc3QgY29tcGFyYXRvciA9IHRoaXMucmVmcy5udW1iZXJGaWx0ZXJDb21wYXJhdG9yLnZhbHVlO1xuICAgIGlmIChjb21wYXJhdG9yID09PSAnJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy50aW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICB9XG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLmZpbHRlckhhbmRsZXIoeyBudW1iZXI6IGZpbHRlclZhbHVlLCBjb21wYXJhdG9yIH0sIENvbnN0LkZJTFRFUl9UWVBFLk5VTUJFUik7XG4gICAgfSwgdGhpcy5wcm9wcy5kZWxheSk7XG4gIH1cblxuICBvbkNoYW5nZU51bWJlclNldChldmVudCkge1xuICAgIGNvbnN0IGNvbXBhcmF0b3IgPSB0aGlzLnJlZnMubnVtYmVyRmlsdGVyQ29tcGFyYXRvci52YWx1ZTtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzUGxhY2Vob2xkZXJTZWxlY3RlZDogKHZhbHVlID09PSAnJykgfSk7XG4gICAgaWYgKGNvbXBhcmF0b3IgPT09ICcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucHJvcHMuZmlsdGVySGFuZGxlcih7IG51bWJlcjogdmFsdWUsIGNvbXBhcmF0b3IgfSwgQ29uc3QuRklMVEVSX1RZUEUuTlVNQkVSKTtcbiAgfVxuXG4gIG9uQ2hhbmdlQ29tcGFyYXRvcihldmVudCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5yZWZzLm51bWJlckZpbHRlci52YWx1ZTtcbiAgICBjb25zdCBjb21wYXJhdG9yID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGlmICh2YWx1ZSA9PT0gJycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5maWx0ZXJIYW5kbGVyKHsgbnVtYmVyOiB2YWx1ZSwgY29tcGFyYXRvciB9LCBDb25zdC5GSUxURVJfVFlQRS5OVU1CRVIpO1xuICB9XG5cbiAgZ2V0Q29tcGFyYXRvck9wdGlvbnMoKSB7XG4gICAgY29uc3Qgb3B0aW9uVGFncyA9IFtdO1xuICAgIG9wdGlvblRhZ3MucHVzaCg8b3B0aW9uIGtleT0nLTEnPjwvb3B0aW9uPik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bWJlckNvbXBhcmF0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBvcHRpb25UYWdzLnB1c2goXG4gICAgICAgIDxvcHRpb24ga2V5PXsgaSB9IHZhbHVlPXsgdGhpcy5udW1iZXJDb21wYXJhdG9yc1tpXSB9PlxuICAgICAgICAgIHsgdGhpcy5udW1iZXJDb21wYXJhdG9yc1tpXSB9XG4gICAgICAgIDwvb3B0aW9uPlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvblRhZ3M7XG4gIH1cblxuICBnZXROdW1iZXJPcHRpb25zKCkge1xuICAgIGNvbnN0IG9wdGlvblRhZ3MgPSBbXTtcbiAgICBjb25zdCB7IG9wdGlvbnMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBvcHRpb25UYWdzLnB1c2goXG4gICAgICA8b3B0aW9uIGtleT0nLTEnIHZhbHVlPScnPlxuICAgICAgICB7IHRoaXMucHJvcHMucGxhY2Vob2xkZXIgfHwgYFNlbGVjdCAke3RoaXMucHJvcHMuY29sdW1uTmFtZX0uLi5gIH1cbiAgICAgIDwvb3B0aW9uPlxuICAgICk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBvcHRpb25UYWdzLnB1c2goPG9wdGlvbiBrZXk9eyBpIH0gdmFsdWU9eyBvcHRpb25zW2ldIH0+eyBvcHRpb25zW2ldIH08L29wdGlvbj4pO1xuICAgIH1cbiAgICByZXR1cm4gb3B0aW9uVGFncztcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IGNvbXBhcmF0b3IgPSB0aGlzLnJlZnMubnVtYmVyRmlsdGVyQ29tcGFyYXRvci52YWx1ZTtcbiAgICBjb25zdCBudW1iZXIgPSB0aGlzLnJlZnMubnVtYmVyRmlsdGVyLnZhbHVlO1xuICAgIGlmIChjb21wYXJhdG9yICYmIG51bWJlcikge1xuICAgICAgdGhpcy5wcm9wcy5maWx0ZXJIYW5kbGVyKHsgbnVtYmVyLCBjb21wYXJhdG9yIH0sIENvbnN0LkZJTFRFUl9UWVBFLk5VTUJFUik7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2VsZWN0Q2xhc3MgPSBjbGFzc1NldChcbiAgICAgICdzZWxlY3QtZmlsdGVyJywgJ251bWJlci1maWx0ZXItaW5wdXQnLCAnZm9ybS1jb250cm9sJyxcbiAgICAgIHsgJ3BsYWNlaG9sZGVyLXNlbGVjdGVkJzogdGhpcy5zdGF0ZS5pc1BsYWNlaG9sZGVyU2VsZWN0ZWQgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbHRlciBudW1iZXItZmlsdGVyJz5cbiAgICAgICAgPHNlbGVjdCByZWY9J251bWJlckZpbHRlckNvbXBhcmF0b3InXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdudW1iZXItZmlsdGVyLWNvbXBhcmF0b3IgZm9ybS1jb250cm9sJ1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZUNvbXBhcmF0b3IgfVxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17XG4gICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUpID8gdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUuY29tcGFyYXRvciA6ICcnXG4gICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICB7IHRoaXMuZ2V0Q29tcGFyYXRvck9wdGlvbnMoKSB9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICB7XG4gICAgICAgICAgKHRoaXMucHJvcHMub3B0aW9ucykgP1xuICAgICAgICAgICAgPHNlbGVjdCByZWY9J251bWJlckZpbHRlcidcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgc2VsZWN0Q2xhc3MgfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VOdW1iZXJTZXQgfVxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e1xuICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSkgPyB0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZS5udW1iZXIgOiAnJ1xuICAgICAgICAgICAgICB9PlxuICAgICAgICAgICAgICB7IHRoaXMuZ2V0TnVtYmVyT3B0aW9ucygpIH1cbiAgICAgICAgICAgIDwvc2VsZWN0PiA6XG4gICAgICAgICAgICA8aW5wdXQgcmVmPSdudW1iZXJGaWx0ZXInXG4gICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xuICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbnVtYmVyLWZpbHRlci1pbnB1dCBmb3JtLWNvbnRyb2wnXG4gICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eyB0aGlzLnByb3BzLnBsYWNlaG9sZGVyIHx8IGBFbnRlciAke3RoaXMucHJvcHMuY29sdW1uTmFtZX0uLi5gIH1cbiAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VOdW1iZXIgfVxuICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17XG4gICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUpID8gdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUubnVtYmVyIDogJydcbiAgICAgICAgICAgICAgICAgICB9IC8+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTnVtYmVyRmlsdGVyLnByb3BUeXBlcyA9IHtcbiAgZmlsdGVySGFuZGxlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlciksXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBudW1iZXI6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgY29tcGFyYXRvcjogUHJvcFR5cGVzLm9uZU9mKGxlZ2FsQ29tcGFyYXRvcnMpXG4gIH0pLFxuICBkZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgLyogZXNsaW50IGNvbnNpc3RlbnQtcmV0dXJuOiAwICovXG4gIG51bWJlckNvbXBhcmF0b3JzOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUpIHtcbiAgICBpZiAoIXByb3BzW3Byb3BOYW1lXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzW3Byb3BOYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNvbXBhcmF0b3JJc1ZhbGlkID0gZmFsc2U7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlZ2FsQ29tcGFyYXRvcnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKGxlZ2FsQ29tcGFyYXRvcnNbal0gPT09IHByb3BzW3Byb3BOYW1lXVtpXSkge1xuICAgICAgICAgIGNvbXBhcmF0b3JJc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFjb21wYXJhdG9ySXNWYWxpZCkge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKGBOdW1iZXIgY29tcGFyYXRvciBwcm92aWRlZCBpcyBub3Qgc3VwcG9ydGVkLlxuICAgICAgICAgIFVzZSBvbmx5ICR7bGVnYWxDb21wYXJhdG9yc31gKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjb2x1bW5OYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5OdW1iZXJGaWx0ZXIuZGVmYXVsdFByb3BzID0ge1xuICBkZWxheTogQ29uc3QuRklMVEVSX0RFTEFZXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJGaWx0ZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9maWx0ZXJzL051bWJlci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=
>>>>>>> 482f2f05d06706d701a06346b221d8a8409fcb1a
