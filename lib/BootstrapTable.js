'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var _PaginationList = require('./pagination/PaginationList');

var _PaginationList2 = _interopRequireDefault(_PaginationList);

var _ToolBar = require('./toolbar/ToolBar');

var _ToolBar2 = _interopRequireDefault(_ToolBar);

var _TableFilter = require('./TableFilter');

var _TableFilter2 = _interopRequireDefault(_TableFilter);

var _TableDataStore = require('./store/TableDataStore');

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

var _csv_export_util = require('./csv_export_util');

var _csv_export_util2 = _interopRequireDefault(_csv_export_util);

var _Filter = require('./Filter');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-alert: 0 */
/* eslint max-len: 0 */


var BootstrapTable = function (_Component) {
  _inherits(BootstrapTable, _Component);

  function BootstrapTable(props) {
    _classCallCheck(this, BootstrapTable);

    var _this = _possibleConstructorReturn(this, (BootstrapTable.__proto__ || Object.getPrototypeOf(BootstrapTable)).call(this, props));

    _this.handleSort = function () {
      return _this.__handleSort__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleExpandRow = function () {
      return _this.__handleExpandRow__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handlePaginationData = function () {
      return _this.__handlePaginationData__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleMouseLeave = function () {
      return _this.__handleMouseLeave__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleMouseEnter = function () {
      return _this.__handleMouseEnter__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleRowMouseOut = function () {
      return _this.__handleRowMouseOut__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleRowMouseOver = function () {
      return _this.__handleRowMouseOver__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleNavigateCell = function () {
      return _this.__handleNavigateCell__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleRowClick = function () {
      return _this.__handleRowClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleRowDoubleClick = function () {
      return _this.__handleRowDoubleClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleSelectAllRow = function () {
      return _this.__handleSelectAllRow__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleShowOnlySelected = function () {
      return _this.__handleShowOnlySelected__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleSelectRow = function () {
      return _this.__handleSelectRow__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleAddRow = function () {
      return _this.__handleAddRow__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.getPageByRowKey = function () {
      return _this.__getPageByRowKey__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleDropRow = function () {
      return _this.__handleDropRow__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleFilterData = function () {
      return _this.__handleFilterData__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleExportCSV = function () {
      return _this.__handleExportCSV__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleSearch = function () {
      return _this.__handleSearch__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this._scrollTop = function () {
      return _this.___scrollTop__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this._scrollHeader = function () {
      return _this.___scrollHeader__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.isIE = false;
    _this._attachCellEditFunc();
    if (_util2.default.canUseDOM()) {
      _this.isIE = document.documentMode;
    }
    _this.store = new _TableDataStore.TableDataStore(_this.props.data ? _this.props.data.slice() : []);

    _this.initTable(_this.props);

    if (_this.props.selectRow && _this.props.selectRow.selected) {
      var copy = _this.props.selectRow.selected.slice();
      _this.store.setSelectedRowKey(copy);
    }
    var currPage = _Const2.default.PAGE_START_INDEX;
    if (typeof _this.props.options.page !== 'undefined') {
      currPage = _this.props.options.page;
    } else if (typeof _this.props.options.pageStartIndex !== 'undefined') {
      currPage = _this.props.options.pageStartIndex;
    }

    _this._adjustHeaderWidth = _this._adjustHeaderWidth.bind(_this);
    _this._adjustHeight = _this._adjustHeight.bind(_this);
    _this._adjustTable = _this._adjustTable.bind(_this);

    _this.state = {
      data: _this.getTableData(),
      currPage: currPage,
      expanding: _this.props.options.expanding || [],
      sizePerPage: _this.props.options.sizePerPage || _Const2.default.SIZE_PER_PAGE_LIST[0],
      selectedRowKeys: _this.store.getSelectedRowKeys(),
      reset: false,
      x: _this.props.keyBoardNav ? 0 : -1,
      y: _this.props.keyBoardNav ? 0 : -1
    };
    return _this;
  }

  _createClass(BootstrapTable, [{
    key: 'initTable',
    value: function initTable(props) {
      var _this2 = this;

      var keyField = props.keyField;


      var isKeyFieldDefined = typeof keyField === 'string' && keyField.length;
      _react2.default.Children.forEach(props.children, function (column) {
        if (column.props.isKey) {
          if (keyField) {
            throw new Error('Error. Multiple key column be detected in TableHeaderColumn.');
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

      if (this.filter) {
        this.filter.removeAllListeners('onFilterChange');
        this.filter.on('onFilterChange', function (currentFilter) {
          _this2.handleFilterData(currentFilter);
        });
      }

      this.colInfos = this.getColumnsDescription(props).reduce(function (prev, curr) {
        prev[curr.name] = curr;
        return prev;
      }, {});

      if (!isKeyFieldDefined && !keyField) {
        throw new Error('Error. No any key column defined in TableHeaderColumn.\n            Use \'isKey={true}\' to specify a unique column after version 0.5.4.');
      }

      this.store.setProps({
        isPagination: props.pagination,
        keyField: keyField,
        colInfos: this.colInfos,
        multiColumnSearch: props.multiColumnSearch,
        multiColumnSort: props.multiColumnSort,
        remote: this.props.remote
      });
    }
  }, {
    key: 'getTableData',
    value: function getTableData() {
      var result = [];
      var _props = this.props,
          options = _props.options,
          pagination = _props.pagination;

      var sortName = options.defaultSortName || options.sortName;
      var sortOrder = options.defaultSortOrder || options.sortOrder;
      var searchText = options.defaultSearch;
      if (sortName && sortOrder) {
        this.store.setSortInfo(sortOrder, sortName);
        this.store.sort();
      }

      if (searchText) {
        this.store.search(searchText);
      }

      if (pagination) {
        var page = void 0;
        var sizePerPage = void 0;
        if (this.store.isChangedPage()) {
          sizePerPage = this.state.sizePerPage;
          page = this.state.currPage;
        } else {
          sizePerPage = options.sizePerPage || _Const2.default.SIZE_PER_PAGE_LIST[0];
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

      var rowCount = 0;
      _react2.default.Children.forEach(children, function (column) {
        if (Number(column.props.row) > rowCount) {
          rowCount = Number(column.props.row);
        }
      });
      return _react2.default.Children.map(children, function (column, i) {
        var rowIndex = column.props.row ? Number(column.props.row) : 0;
        var rowSpan = column.props.rowSpan ? Number(column.props.rowSpan) : 1;
        if (rowSpan + rowIndex === rowCount + 1) {
          return {
            name: column.props.dataField,
            align: column.props.dataAlign,
            sort: column.props.dataSort,
            format: column.props.dataFormat,
            formatExtraData: column.props.formatExtraData,
            filterFormatted: column.props.filterFormatted,
            filterValue: column.props.filterValue,
            editable: column.props.editable,
            customEditor: column.props.customEditor,
            hidden: column.props.hidden,
            hiddenOnInsert: column.props.hiddenOnInsert,
            searchable: column.props.searchable,
            className: column.props.columnClassName,
            editClassName: column.props.editColumnClassName,
            invalidEditColumnClassName: column.props.invalidEditColumnClassName,
            columnTitle: column.props.columnTitle,
            width: column.props.width,
            text: column.props.headerText || column.props.children,
            sortFunc: column.props.sortFunc,
            sortFuncExtraData: column.props.sortFuncExtraData,
            export: column.props.export,
            expandable: column.props.expandable,
            index: i,
            attrs: column.props.tdAttr,
            style: column.props.tdStyle
          };
        }
      });
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.store.clean();
      this.setState({
        data: this.getTableData(),
        currPage: 1,
        expanding: [],
        sizePerPage: _Const2.default.SIZE_PER_PAGE_LIST[0],
        selectedRowKeys: this.store.getSelectedRowKeys(),
        reset: true
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.initTable(nextProps);
      var options = nextProps.options,
          selectRow = nextProps.selectRow;


      this.store.setData(nextProps.data.slice());

      // from #481
      var page = this.state.currPage;
      if (this.props.options.page !== options.page) {
        page = options.page;
      }
      // from #481
      var sizePerPage = this.state.sizePerPage;
      if (this.props.options.sizePerPage !== options.sizePerPage) {
        sizePerPage = options.sizePerPage;
      }

      if (this.isRemoteDataSource()) {
        var data = nextProps.data.slice();
        if (nextProps.pagination && !this.allowRemote(_Const2.default.REMOTE_PAGE)) {
          data = this.store.page(page, sizePerPage).get();
        }
        this.setState({
          data: data,
          currPage: page,
          sizePerPage: sizePerPage,
          reset: false
        });
      } else {
        // #125
        // remove !options.page for #709
        if (page > Math.ceil(nextProps.data.length / sizePerPage)) {
          page = 1;
        }
        var sortList = this.store.getSortInfo();
        var sortField = options.sortName;
        var sortOrder = options.sortOrder;
        if (sortField && sortOrder) {
          this.store.setSortInfo(sortOrder, sortField);
          this.store.sort();
        } else if (sortList.length > 0) {
          this.store.sort();
        }
        var _data = this.store.page(page, sizePerPage).get();
        this.setState({
          data: _data,
          currPage: page,
          sizePerPage: sizePerPage,
          reset: false
        });
      }

      if (selectRow && selectRow.selected) {
        // set default select rows to store.
        var copy = selectRow.selected.slice();
        this.store.setSelectedRowKey(copy);
        this.setState({
          selectedRowKeys: copy,
          reset: false
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._adjustTable();
      window.addEventListener('resize', this._adjustTable);
      this.refs.body.refs.container.addEventListener('scroll', this._scrollHeader);
      if (this.props.scrollTop) {
        this._scrollTop();
      }
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
        if (cellEdit.mode !== _Const2.default.CELL_EDIT_NONE) {
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
      var _ref2 = props || this.props,
          remote = _ref2.remote;

      return remote === true || typeof remote === 'function';
    }

    /**
     * Returns true if this action can be handled remote store
     * From #990, Sometimes, we need some actions as remote, some actions are handled by default
     * so function will tell you the target action is can be handled as remote or not.
     * @param  {String}  [action] Required.
     * @param  {Object}  [props] Optional. If not given, this.props will be used
     * @return {Boolean}
     */

  }, {
    key: 'allowRemote',
    value: function allowRemote(action, props) {
      var _ref3 = props || this.props,
          remote = _ref3.remote;

      if (typeof remote === 'function') {
        var remoteObj = remote(_Const2.default.REMOTE);
        return remoteObj[action];
      } else {
        return remote;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var style = {
        height: this.props.height,
        maxHeight: this.props.maxHeight
      };

      var columns = this.getColumnsDescription(this.props);
      var sortList = this.store.getSortInfo();
      var pagination = this.renderPagination();
      var toolBar = this.renderToolBar();
      var tableFilter = this.renderTableFilter(columns);
      var isSelectAll = this.isSelectAll();
      var expandColumnOptions = this.props.expandColumnOptions;
      if (typeof expandColumnOptions.expandColumnBeforeSelectColumn === 'undefined') {
        expandColumnOptions.expandColumnBeforeSelectColumn = true;
      }
      var colGroups = _util2.default.renderColGroup(columns, this.props.selectRow, expandColumnOptions);
      var sortIndicator = this.props.options.sortIndicator;
      if (typeof this.props.options.sortIndicator === 'undefined') sortIndicator = true;
      var _props$options$pagina = this.props.options.paginationPosition,
          paginationPosition = _props$options$pagina === undefined ? _Const2.default.PAGINATION_POS_BOTTOM : _props$options$pagina;

      var showPaginationOnTop = paginationPosition !== _Const2.default.PAGINATION_POS_BOTTOM;
      var showPaginationOnBottom = paginationPosition !== _Const2.default.PAGINATION_POS_TOP;

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('react-bs-table-container', this.props.className, this.props.containerClass),
          style: this.props.containerStyle },
        toolBar,
        showPaginationOnTop ? pagination : null,
        _react2.default.createElement(
          'div',
          { ref: 'table',
            className: (0, _classnames2.default)('react-bs-table', this.props.tableContainerClass),
            style: _extends({}, style, this.props.tableStyle),
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave },
          _react2.default.createElement(
            _TableHeader2.default,
            {
              ref: 'header',
              colGroups: colGroups,
              headerContainerClass: this.props.headerContainerClass,
              tableHeaderClass: this.props.tableHeaderClass,
              style: this.props.headerStyle,
              rowSelectType: this.props.selectRow.mode,
              customComponent: this.props.selectRow.customComponent,
              hideSelectColumn: this.props.selectRow.hideSelectColumn,
              sortList: sortList,
              sortIndicator: sortIndicator,
              onSort: this.handleSort,
              onSelectAllRow: this.handleSelectAllRow,
              bordered: this.props.bordered,
              condensed: this.props.condensed,
              isFiltered: this.filter ? true : false,
              isSelectAll: isSelectAll,
              reset: this.state.reset,
              expandColumnVisible: expandColumnOptions.expandColumnVisible,
              expandColumnComponent: expandColumnOptions.expandColumnComponent,
              expandColumnBeforeSelectColumn: expandColumnOptions.expandColumnBeforeSelectColumn },
            this.props.children
          ),
          _react2.default.createElement(_TableBody2.default, { ref: 'body',
            bodyContainerClass: this.props.bodyContainerClass,
            tableBodyClass: this.props.tableBodyClass,
            style: _extends({}, style, this.props.bodyStyle),
            data: this.state.data,
            expandComponent: this.props.expandComponent,
            expandableRow: this.props.expandableRow,
            expandRowBgColor: this.props.options.expandRowBgColor,
            expandBy: this.props.options.expandBy || _Const2.default.EXPAND_BY_ROW,
            columns: columns,
            trClassName: this.props.trClassName,
            striped: this.props.striped,
            bordered: this.props.bordered,
            hover: this.props.hover,
            keyField: this.store.getKeyField(),
            condensed: this.props.condensed,
            selectRow: this.props.selectRow,
            expandColumnOptions: this.props.expandColumnOptions,
            cellEdit: this.props.cellEdit,
            selectedRowKeys: this.state.selectedRowKeys,
            onRowClick: this.handleRowClick,
            onRowDoubleClick: this.handleRowDoubleClick,
            onRowMouseOver: this.handleRowMouseOver,
            onRowMouseOut: this.handleRowMouseOut,
            onSelectRow: this.handleSelectRow,
            noDataText: this.props.options.noDataText,
            withoutNoDataText: this.props.options.withoutNoDataText,
            expanding: this.state.expanding,
            onExpand: this.handleExpandRow,
            beforeShowError: this.props.options.beforeShowError,
            keyBoardNav: this.props.keyBoardNav,
            onNavigateCell: this.handleNavigateCell,
            x: this.state.x,
            y: this.state.y })
        ),
        tableFilter,
        showPaginationOnBottom ? pagination : null
      );
    }
  }, {
    key: 'isSelectAll',
    value: function isSelectAll() {
      if (this.store.isEmpty()) return false;
      var unselectable = this.props.selectRow.unselectable;
      var defaultSelectRowKeys = this.store.getSelectedRowKeys();
      var allRowKeys = this.store.getAllRowkey();

      if (defaultSelectRowKeys.length === 0) return false;
      var match = 0;
      var noFound = 0;
      var unSelectableCnt = 0;
      defaultSelectRowKeys.forEach(function (selected) {
        if (allRowKeys.indexOf(selected) !== -1) match++;else noFound++;
        if (unselectable && unselectable.indexOf(selected) !== -1) unSelectableCnt++;
      });

      if (noFound === defaultSelectRowKeys.length) return false;
      if (match === allRowKeys.length) {
        return true;
      } else {
        if (unselectable && match <= unSelectableCnt && unSelectableCnt === unselectable.length) return false;else return 'indeterminate';
      }
      // return (match === allRowKeys.length) ? true : 'indeterminate';
    }
  }, {
    key: 'cleanSelected',
    value: function cleanSelected() {
      this.store.setSelectedRowKey([]);
      this.setState({
        selectedRowKeys: [],
        reset: false
      });
    }
  }, {
    key: '__handleSort__REACT_HOT_LOADER__',
    value: function __handleSort__REACT_HOT_LOADER__(order, sortField) {
      if (this.props.options.onSortChange) {
        this.props.options.onSortChange(sortField, order, this.props);
      }
      this.store.setSortInfo(order, sortField);
      if (this.allowRemote(_Const2.default.REMOTE_SORT)) {
        return;
      }

      var result = this.store.sort().get();
      this.setState({
        data: result,
        reset: false
      });
    }
  }, {
    key: '__handleExpandRow__REACT_HOT_LOADER__',
    value: function __handleExpandRow__REACT_HOT_LOADER__(expanding) {
      var _this3 = this;

      this.setState({ expanding: expanding, reset: false }, function () {
        _this3._adjustHeaderWidth();
      });
    }
  }, {
    key: '__handlePaginationData__REACT_HOT_LOADER__',
    value: function __handlePaginationData__REACT_HOT_LOADER__(page, sizePerPage) {
      var _props$options = this.props.options,
          onPageChange = _props$options.onPageChange,
          pageStartIndex = _props$options.pageStartIndex;

      if (onPageChange) {
        onPageChange(page, sizePerPage);
      }

      this.setState({
        currPage: page,
        sizePerPage: sizePerPage,
        reset: false
      });

      if (this.allowRemote(_Const2.default.REMOTE_PAGE)) {
        return;
      }

      // We calculate an offset here in order to properly fetch the indexed data,
      // despite the page start index not always being 1
      var normalizedPage = void 0;
      if (pageStartIndex !== undefined) {
        var offset = Math.abs(_Const2.default.PAGE_START_INDEX - pageStartIndex);
        normalizedPage = page + offset;
      } else {
        normalizedPage = page;
      }

      var result = this.store.page(normalizedPage, sizePerPage).get();

      this.setState({ data: result, reset: false });
    }
  }, {
    key: '__handleMouseLeave__REACT_HOT_LOADER__',
    value: function __handleMouseLeave__REACT_HOT_LOADER__() {
      if (this.props.options.onMouseLeave) {
        this.props.options.onMouseLeave();
      }
    }
  }, {
    key: '__handleMouseEnter__REACT_HOT_LOADER__',
    value: function __handleMouseEnter__REACT_HOT_LOADER__() {
      if (this.props.options.onMouseEnter) {
        this.props.options.onMouseEnter();
      }
    }
  }, {
    key: '__handleRowMouseOut__REACT_HOT_LOADER__',
    value: function __handleRowMouseOut__REACT_HOT_LOADER__(row, event) {
      if (this.props.options.onRowMouseOut) {
        this.props.options.onRowMouseOut(row, event);
      }
    }
  }, {
    key: '__handleRowMouseOver__REACT_HOT_LOADER__',
    value: function __handleRowMouseOver__REACT_HOT_LOADER__(row, event) {
      if (this.props.options.onRowMouseOver) {
        this.props.options.onRowMouseOver(row, event);
      }
    }
  }, {
    key: '__handleNavigateCell__REACT_HOT_LOADER__',
    value: function __handleNavigateCell__REACT_HOT_LOADER__(_ref4) {
      var offSetX = _ref4.x,
          offSetY = _ref4.y,
          lastEditCell = _ref4.lastEditCell;
      var pagination = this.props.pagination;
      var _state = this.state,
          x = _state.x,
          y = _state.y,
          currPage = _state.currPage;

      x += offSetX;
      y += offSetY;
      // currPage += 1;
      // console.log(currPage);

      var columns = this.store.getColInfos();
      var visibleRowSize = this.state.data.length;
      var visibleColumnSize = Object.keys(columns).filter(function (k) {
        return !columns[k].hidden;
      }).length;

      if (y >= visibleRowSize) {
        currPage++;
        var lastPage = pagination ? this.refs.pagination.getLastPage() : -1;
        if (currPage <= lastPage) {
          this.handlePaginationData(currPage, this.state.sizePerPage);
        } else {
          return;
        }
        y = 0;
      } else if (y < 0) {
        currPage--;
        if (currPage > 0) {
          this.handlePaginationData(currPage, this.state.sizePerPage);
        } else {
          return;
        }
        y = visibleRowSize - 1;
      } else if (x >= visibleColumnSize) {
        if (y + 1 === visibleRowSize) {
          currPage++;
          var _lastPage = pagination ? this.refs.pagination.getLastPage() : -1;
          if (currPage <= _lastPage) {
            this.handlePaginationData(currPage, this.state.sizePerPage);
          } else {
            return;
          }
          y = 0;
        } else {
          y++;
        }
        x = lastEditCell ? 1 : 0;
      } else if (x < 0) {
        x = visibleColumnSize - 1;
        if (y === 0) {
          currPage--;
          if (currPage > 0) {
            this.handlePaginationData(currPage, this.state.sizePerPage);
          } else {
            return;
          }
          y = this.state.sizePerPage - 1;
        } else {
          y--;
        }
      }
      this.setState({
        x: x, y: y, currPage: currPage, reset: false
      });
    }
  }, {
    key: '__handleRowClick__REACT_HOT_LOADER__',
    value: function __handleRowClick__REACT_HOT_LOADER__(row, rowIndex, cellIndex) {
      var _props2 = this.props,
          options = _props2.options,
          keyBoardNav = _props2.keyBoardNav;

      if (options.onRowClick) {
        options.onRowClick(row);
      }
      if (keyBoardNav) {
        var _ref5 = (typeof keyBoardNav === 'undefined' ? 'undefined' : _typeof(keyBoardNav)) === 'object' ? keyBoardNav : {},
            clickToNav = _ref5.clickToNav;

        clickToNav = clickToNav === false ? clickToNav : true;
        if (clickToNav) {
          this.setState({
            x: cellIndex,
            y: rowIndex,
            reset: false
          });
        }
      }
    }
  }, {
    key: '__handleRowDoubleClick__REACT_HOT_LOADER__',
    value: function __handleRowDoubleClick__REACT_HOT_LOADER__(row) {
      if (this.props.options.onRowDoubleClick) {
        this.props.options.onRowDoubleClick(row);
      }
    }
  }, {
    key: '__handleSelectAllRow__REACT_HOT_LOADER__',
    value: function __handleSelectAllRow__REACT_HOT_LOADER__(e) {
      var isSelected = e.currentTarget.checked;
      var keyField = this.store.getKeyField();
      var _props$selectRow = this.props.selectRow,
          onSelectAll = _props$selectRow.onSelectAll,
          unselectable = _props$selectRow.unselectable,
          selected = _props$selectRow.selected;

      var selectedRowKeys = [];
      var result = true;
      var rows = isSelected ? this.store.get() : this.store.getRowByKey(this.state.selectedRowKeys);

      if (unselectable && unselectable.length > 0) {
        if (isSelected) {
          rows = rows.filter(function (r) {
            return unselectable.indexOf(r[keyField]) === -1 || selected && selected.indexOf(r[keyField]) !== -1;
          });
        } else {
          rows = rows.filter(function (r) {
            return unselectable.indexOf(r[keyField]) === -1;
          });
        }
      }

      if (onSelectAll) {
        result = this.props.selectRow.onSelectAll(isSelected, rows);
      }

      if (typeof result == 'undefined' || result !== false) {
        if (isSelected) {
          selectedRowKeys = Array.isArray(result) ? result : rows.map(function (r) {
            return r[keyField];
          });
        } else {
          if (unselectable && selected) {
            selectedRowKeys = selected.filter(function (r) {
              return unselectable.indexOf(r) > -1;
            });
          }
        }

        this.store.setSelectedRowKey(selectedRowKeys);
        this.setState({ selectedRowKeys: selectedRowKeys, reset: false });
      }
    }
  }, {
    key: '__handleShowOnlySelected__REACT_HOT_LOADER__',
    value: function __handleShowOnlySelected__REACT_HOT_LOADER__() {
      this.store.ignoreNonSelected();
      var result = void 0;
      if (this.props.pagination) {
        result = this.store.page(1, this.state.sizePerPage).get();
      } else {
        result = this.store.get();
      }
      this.setState({
        data: result,
        reset: false,
        currPage: this.props.options.pageStartIndex || _Const2.default.PAGE_START_INDEX
      });
    }
  }, {
    key: '__handleSelectRow__REACT_HOT_LOADER__',
    value: function __handleSelectRow__REACT_HOT_LOADER__(row, isSelected, e) {
      var result = true;
      var currSelected = this.store.getSelectedRowKeys();
      var rowKey = row[this.store.getKeyField()];
      var selectRow = this.props.selectRow;

      if (selectRow.onSelect) {
        result = selectRow.onSelect(row, isSelected, e);
      }

      if (typeof result === 'undefined' || result !== false) {
        if (selectRow.mode === _Const2.default.ROW_SELECT_SINGLE) {
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
          selectedRowKeys: currSelected,
          reset: false
        });
      }
    }
  }, {
    key: 'handleEditCell',
    value: function handleEditCell(newVal, rowIndex, colIndex) {
      var onCellEdit = this.props.options.onCellEdit;
      var _props$cellEdit = this.props.cellEdit,
          beforeSaveCell = _props$cellEdit.beforeSaveCell,
          afterSaveCell = _props$cellEdit.afterSaveCell;

      var columns = this.getColumnsDescription(this.props);
      var fieldName = columns[colIndex].name;

      if (beforeSaveCell) {
        var isValid = beforeSaveCell(this.state.data[rowIndex], fieldName, newVal);
        if (!isValid && typeof isValid !== 'undefined') {
          this.setState({
            data: this.store.get(),
            reset: false
          });
          return;
        }
      }

      if (onCellEdit) {
        newVal = onCellEdit(this.state.data[rowIndex], fieldName, newVal);
      }

      if (this.allowRemote(_Const2.default.REMOTE_CELL_EDIT)) {
        if (afterSaveCell) {
          afterSaveCell(this.state.data[rowIndex], fieldName, newVal);
        }
        return;
      }

      var result = this.store.edit(newVal, rowIndex, fieldName).get();
      this.setState({
        data: result,
        reset: false
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
      this._handleAfterAddingRow(newObj, true);
    }
  }, {
    key: '__handleAddRow__REACT_HOT_LOADER__',
    value: function __handleAddRow__REACT_HOT_LOADER__(newObj) {
      var onAddRow = this.props.options.onAddRow;

      if (onAddRow) {
        var colInfos = this.store.getColInfos();
        onAddRow(newObj, colInfos);
      }

      if (this.allowRemote(_Const2.default.REMOTE_INSERT_ROW)) {
        if (this.props.options.afterInsertRow) {
          this.props.options.afterInsertRow(newObj);
        }
        return null;
      }

      try {
        this.store.add(newObj);
      } catch (e) {
        return e.message;
      }
      this._handleAfterAddingRow(newObj, false);
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
    key: 'getTableDataIgnorePaging',
    value: function getTableDataIgnorePaging() {
      return this.store.getCurrentDisplayData();
    }
  }, {
    key: '__getPageByRowKey__REACT_HOT_LOADER__',
    value: function __getPageByRowKey__REACT_HOT_LOADER__(rowKey) {
      var sizePerPage = this.state.sizePerPage;

      var currentData = this.store.getCurrentDisplayData();
      var keyField = this.store.getKeyField();
      var result = currentData.findIndex(function (x) {
        return x[keyField] === rowKey;
      });
      if (result > -1) {
        return parseInt(result / sizePerPage, 10) + 1;
      } else {
        return result;
      }
    }
  }, {
    key: '__handleDropRow__REACT_HOT_LOADER__',
    value: function __handleDropRow__REACT_HOT_LOADER__(rowKeys) {
      var _this4 = this;

      var dropRowKeys = rowKeys ? rowKeys : this.store.getSelectedRowKeys();
      // add confirm before the delete action if that option is set.
      if (dropRowKeys && dropRowKeys.length > 0) {
        if (this.props.options.handleConfirmDeleteRow) {
          this.props.options.handleConfirmDeleteRow(function () {
            _this4.deleteRow(dropRowKeys);
          }, dropRowKeys);
        } else if (confirm('Are you sure you want to delete?')) {
          this.deleteRow(dropRowKeys);
        }
      }
    }
  }, {
    key: 'deleteRow',
    value: function deleteRow(dropRowKeys) {
      var onDeleteRow = this.props.options.onDeleteRow;

      if (onDeleteRow) {
        onDeleteRow(dropRowKeys);
      }

      this.store.setSelectedRowKey([]); // clear selected row key

      if (this.allowRemote(_Const2.default.REMOTE_DROP_ROW)) {
        if (this.props.options.afterDeleteRow) {
          this.props.options.afterDeleteRow(dropRowKeys);
        }
        return;
      }

      this.store.remove(dropRowKeys); // remove selected Row
      var result = void 0;
      if (this.props.pagination) {
        var sizePerPage = this.state.sizePerPage;

        var currLastPage = Math.ceil(this.store.getDataNum() / sizePerPage);
        var currPage = this.state.currPage;

        if (currPage > currLastPage) currPage = currLastPage;
        result = this.store.page(currPage, sizePerPage).get();
        this.setState({
          data: result,
          selectedRowKeys: this.store.getSelectedRowKeys(),
          currPage: currPage,
          reset: false
        });
      } else {
        result = this.store.get();
        this.setState({
          data: result,
          reset: false,
          selectedRowKeys: this.store.getSelectedRowKeys()
        });
      }
      if (this.props.options.afterDeleteRow) {
        this.props.options.afterDeleteRow(dropRowKeys);
      }
    }
  }, {
    key: '__handleFilterData__REACT_HOT_LOADER__',
    value: function __handleFilterData__REACT_HOT_LOADER__(filterObj) {
      var onFilterChange = this.props.options.onFilterChange;

      if (onFilterChange) {
        var colInfos = this.store.getColInfos();
        onFilterChange(filterObj, colInfos);
      }

      this.setState({
        currPage: this.props.options.pageStartIndex || _Const2.default.PAGE_START_INDEX,
        reset: false
      });

      if (this.allowRemote(_Const2.default.REMOTE_FILTER)) {
        if (this.props.options.afterColumnFilter) {
          this.props.options.afterColumnFilter(filterObj, this.store.getDataIgnoringPagination());
        }
        return;
      }

      this.store.filter(filterObj);

      var sortList = this.store.getSortInfo();

      if (sortList.length > 0) {
        this.store.sort();
      }

      var result = void 0;

      if (this.props.pagination) {
        var sizePerPage = this.state.sizePerPage;

        result = this.store.page(1, sizePerPage).get();
      } else {
        result = this.store.get();
      }
      if (this.props.options.afterColumnFilter) {
        this.props.options.afterColumnFilter(filterObj, this.store.getDataIgnoringPagination());
      }
      this.setState({
        data: result,
        reset: false
      });
    }
  }, {
    key: '__handleExportCSV__REACT_HOT_LOADER__',
    value: function __handleExportCSV__REACT_HOT_LOADER__() {
      var result = {};

      var csvFileName = this.props.csvFileName;
      var onExportToCSV = this.props.options.onExportToCSV;

      if (onExportToCSV) {
        result = onExportToCSV();
      } else {
        result = this.store.getDataIgnoringPagination();
      }

      var keys = [];
      this.props.children.map(function (column) {
        if (column.props.export === true || typeof column.props.export === 'undefined' && column.props.hidden === false) {
          keys.push({
            field: column.props.dataField,
            format: column.props.csvFormat,
            extraData: column.props.csvFormatExtraData,
            header: column.props.csvHeader || column.props.dataField,
            row: Number(column.props.row) || 0,
            rowSpan: Number(column.props.rowSpan) || 1,
            colSpan: Number(column.props.colSpan) || 1
          });
        }
      });

      if (typeof csvFileName === 'function') {
        csvFileName = csvFileName();
      }

      (0, _csv_export_util2.default)(result, keys, csvFileName);
    }
  }, {
    key: '__handleSearch__REACT_HOT_LOADER__',
    value: function __handleSearch__REACT_HOT_LOADER__(searchText) {
      // Set search field if this function being called outside
      // but it's not necessary if calling fron inside.
      if (this.refs.toolbar) {
        this.refs.toolbar.setSearchInput(searchText);
      }
      var onSearchChange = this.props.options.onSearchChange;

      if (onSearchChange) {
        var colInfos = this.store.getColInfos();
        onSearchChange(searchText, colInfos, this.props.multiColumnSearch);
      }

      this.setState({
        currPage: this.props.options.pageStartIndex || _Const2.default.PAGE_START_INDEX,
        reset: false
      });

      if (this.allowRemote(_Const2.default.REMOTE_SEARCH)) {
        if (this.props.options.afterSearch) {
          this.props.options.afterSearch(searchText, this.store.getDataIgnoringPagination());
        }
        return;
      }

      this.store.search(searchText);

      var sortList = this.store.getSortInfo();

      if (sortList.length > 0) {
        this.store.sort();
      }

      var result = void 0;
      if (this.props.pagination) {
        var sizePerPage = this.state.sizePerPage;

        result = this.store.page(1, sizePerPage).get();
      } else {
        result = this.store.get();
      }
      if (this.props.options.afterSearch) {
        this.props.options.afterSearch(searchText, this.store.getDataIgnoringPagination());
      }
      this.setState({
        data: result,
        reset: false
      });
    }
  }, {
    key: 'renderPagination',
    value: function renderPagination() {
      if (this.props.pagination) {
        var dataSize = void 0;
        if (this.allowRemote(_Const2.default.REMOTE_PAGE)) {
          dataSize = this.props.fetchInfo.dataTotalSize;
        } else {
          dataSize = this.store.getDataNum();
        }
        var options = this.props.options;

        var withFirstAndLast = options.withFirstAndLast === undefined ? true : options.withFirstAndLast;
        if (Math.ceil(dataSize / this.state.sizePerPage) <= 1 && this.props.ignoreSinglePage) return null;
        return _react2.default.createElement(
          'div',
          { className: 'react-bs-table-pagination' },
          _react2.default.createElement(_PaginationList2.default, {
            ref: 'pagination',
            withFirstAndLast: withFirstAndLast,
            alwaysShowAllBtns: options.alwaysShowAllBtns,
            currPage: this.state.currPage,
            changePage: this.handlePaginationData,
            sizePerPage: this.state.sizePerPage,
            sizePerPageList: options.sizePerPageList || _Const2.default.SIZE_PER_PAGE_LIST,
            pageStartIndex: options.pageStartIndex,
            paginationShowsTotal: options.paginationShowsTotal,
            paginationSize: options.paginationSize || _Const2.default.PAGINATION_SIZE,
            dataSize: dataSize,
            onSizePerPageList: options.onSizePerPageList,
            prePage: options.prePage || _Const2.default.PRE_PAGE,
            nextPage: options.nextPage || _Const2.default.NEXT_PAGE,
            firstPage: options.firstPage || _Const2.default.FIRST_PAGE,
            lastPage: options.lastPage || _Const2.default.LAST_PAGE,
            prePageTitle: options.prePageTitle || _Const2.default.PRE_PAGE_TITLE,
            nextPageTitle: options.nextPageTitle || _Const2.default.NEXT_PAGE_TITLE,
            firstPageTitle: options.firstPageTitle || _Const2.default.FIRST_PAGE_TITLE,
            lastPageTitle: options.lastPageTitle || _Const2.default.LAST_PAGE_TITLE,
            hideSizePerPage: options.hideSizePerPage,
            sizePerPageDropDown: options.sizePerPageDropDown,
            hidePageListOnlyOnePage: options.hidePageListOnlyOnePage,
            paginationPanel: options.paginationPanel,
            open: false })
        );
      }
      return null;
    }
  }, {
    key: 'renderToolBar',
    value: function renderToolBar() {
      var _props3 = this.props,
          exportCSV = _props3.exportCSV,
          selectRow = _props3.selectRow,
          insertRow = _props3.insertRow,
          deleteRow = _props3.deleteRow,
          search = _props3.search,
          children = _props3.children;

      var enableShowOnlySelected = selectRow && selectRow.showOnlySelected;
      var print = typeof this.props.options.printToolBar === 'undefined' ? true : this.props.options.printToolBar;
      if (enableShowOnlySelected || insertRow || deleteRow || search || exportCSV || this.props.options.searchPanel || this.props.options.btnGroup || this.props.options.toolBar) {
        var columns = void 0;
        if (Array.isArray(children)) {
          columns = children.map(function (column, r) {
            var props = column.props;

            return {
              name: props.headerText || props.children,
              field: props.dataField,
              hiddenOnInsert: props.hiddenOnInsert,
              // when you want same auto generate value and not allow edit, example ID field
              autoValue: props.autoValue || false,
              // for create editor, no params for column.editable() indicate that editor for new row
              editable: props.editable && typeof props.editable === 'function' ? props.editable() : props.editable,
              format: props.dataFormat ? function (value) {
                return props.dataFormat(value, null, props.formatExtraData, r).replace(/<.*?>/g, '');
              } : false
            };
          });
        } else {
          columns = [{
            name: children.props.headerText || children.props.children,
            field: children.props.dataField,
            editable: children.props.editable,
            hiddenOnInsert: children.props.hiddenOnInsert
          }];
        }
        return _react2.default.createElement(
          'div',
          { className: 'react-bs-table-tool-bar ' + (print ? '' : 'hidden-print') },
          _react2.default.createElement(_ToolBar2.default, {
            ref: 'toolbar',
            defaultSearch: this.props.options.defaultSearch,
            clearSearch: this.props.options.clearSearch,
            searchPosition: this.props.options.searchPosition,
            searchDelayTime: this.props.options.searchDelayTime,
            enableInsert: insertRow,
            enableDelete: deleteRow,
            enableSearch: search,
            enableExportCSV: exportCSV,
            enableShowOnlySelected: enableShowOnlySelected,
            columns: columns,
            searchPlaceholder: this.props.searchPlaceholder,
            exportCSVText: this.props.options.exportCSVText,
            insertText: this.props.options.insertText,
            deleteText: this.props.options.deleteText,
            saveText: this.props.options.saveText,
            closeText: this.props.options.closeText,
            ignoreEditable: this.props.options.ignoreEditable,
            onAddRow: this.handleAddRow,
            onDropRow: this.handleDropRow,
            onSearch: this.handleSearch,
            onExportCSV: this.handleExportCSV,
            onShowOnlySelected: this.handleShowOnlySelected,
            insertModalHeader: this.props.options.insertModalHeader,
            insertModalFooter: this.props.options.insertModalFooter,
            insertModalBody: this.props.options.insertModalBody,
            insertModal: this.props.options.insertModal,
            insertBtn: this.props.options.insertBtn,
            deleteBtn: this.props.options.deleteBtn,
            showSelectedOnlyBtn: this.props.options.showSelectedOnlyBtn,
            exportCSVBtn: this.props.options.exportCSVBtn,
            clearSearchBtn: this.props.options.clearSearchBtn,
            searchField: this.props.options.searchField,
            searchPanel: this.props.options.searchPanel,
            btnGroup: this.props.options.btnGroup,
            toolBar: this.props.options.toolBar,
            reset: this.state.reset })
        );
      } else {
        return null;
      }
    }
  }, {
    key: 'renderTableFilter',
    value: function renderTableFilter(columns) {
      if (this.props.columnFilter) {
        return _react2.default.createElement(_TableFilter2.default, { columns: columns,
          rowSelectType: this.props.selectRow.mode,
          onFilter: this.handleFilterData });
      } else {
        return null;
      }
    }
  }, {
    key: '___scrollTop__REACT_HOT_LOADER__',
    value: function ___scrollTop__REACT_HOT_LOADER__() {
      var scrollTop = this.props.scrollTop;

      if (scrollTop === _Const2.default.SCROLL_TOP) {
        this.refs.body.refs.container.scrollTop = 0;
      } else if (scrollTop === _Const2.default.SCROLL_BOTTOM) {
        this.refs.body.refs.container.scrollTop = this.refs.body.refs.container.scrollHeight;
      } else if (typeof scrollTop === 'number' && !isNaN(scrollTop)) {
        this.refs.body.refs.container.scrollTop = scrollTop;
      }
    }
  }, {
    key: '___scrollHeader__REACT_HOT_LOADER__',
    value: function ___scrollHeader__REACT_HOT_LOADER__(e) {
      this.refs.header.refs.container.scrollLeft = e.currentTarget.scrollLeft;
    }
  }, {
    key: '_adjustTable',
    value: function _adjustTable() {
      this._adjustHeight();
      if (!this.props.printable) {
        this._adjustHeaderWidth();
      }
    }
  }, {
    key: '_adjustHeaderWidth',
    value: function _adjustHeaderWidth() {
      var header = this.refs.header.getHeaderColGrouop();
      var tbody = this.refs.body.refs.tbody;
      var bodyHeader = this.refs.body.getHeaderColGrouop();
      var firstRow = tbody.childNodes[0];
      var isScroll = tbody.parentNode.getBoundingClientRect().height > tbody.parentNode.parentNode.getBoundingClientRect().height;

      var scrollBarWidth = isScroll ? _util2.default.getScrollBarWidth() : 0;
      if (firstRow && this.store.getDataNum()) {
        if (isScroll) {
          var cells = firstRow.childNodes;
          for (var i = 0; i < cells.length; i++) {
            var cell = cells[i];
            var computedStyle = window.getComputedStyle(cell);
            var width = parseFloat(computedStyle.width.replace('px', ''));
            if (this.isIE) {
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
            header[i].style.width = result;
            header[i].style.minWidth = result;
            if (cells.length - 1 === i) {
              bodyHeader[i].style.width = width + 'px';
              bodyHeader[i].style.minWidth = width + 'px';
            } else {
              bodyHeader[i].style.width = result;
              bodyHeader[i].style.minWidth = result;
            }
          }
        }
      } else {
        _react2.default.Children.forEach(this.props.children, function (child, i) {
          if (child.props.width) {
            header[i].style.width = child.props.width + 'px';
            header[i].style.minWidth = child.props.width + 'px';
          }
        });
      }
    }
  }, {
    key: '_adjustHeight',
    value: function _adjustHeight() {
      var height = this.props.height;
      var maxHeight = this.props.maxHeight;

      if (typeof height === 'number' && !isNaN(height) || height.indexOf('%') === -1) {
        this.refs.body.refs.container.style.height = parseFloat(height, 10) - this.refs.header.refs.container.offsetHeight + 'px';
      }
      if (maxHeight) {
        maxHeight = typeof maxHeight === 'number' ? maxHeight : parseInt(maxHeight.replace('px', ''), 10);

        this.refs.body.refs.container.style.maxHeight = maxHeight - this.refs.header.refs.container.offsetHeight + 'px';
      }
    }
  }, {
    key: '_handleAfterAddingRow',
    value: function _handleAfterAddingRow(newObj, atTheBeginning) {
      var result = void 0;
      if (this.props.pagination) {
        // if pagination is enabled and inserting row at the end,
        // change page to the last page
        // otherwise, change it to the first page
        var sizePerPage = this.state.sizePerPage;


        if (atTheBeginning) {
          var firstPage = this.props.options.pageStartIndex || _Const2.default.PAGE_START_INDEX;
          result = this.store.page(firstPage, sizePerPage).get();
          this.setState({
            data: result,
            currPage: firstPage,
            reset: false
          });
        } else {
          var currLastPage = Math.ceil(this.store.getDataNum() / sizePerPage);
          result = this.store.page(currLastPage, sizePerPage).get();
          this.setState({
            data: result,
            currPage: currLastPage,
            reset: false
          });
        }
      } else {
        result = this.store.get();
        this.setState({
          data: result,
          reset: false
        });
      }

      if (this.props.options.afterInsertRow) {
        this.props.options.afterInsertRow(newObj);
      }
    }
  }]);

  return BootstrapTable;
}(_react.Component);

BootstrapTable.propTypes = {
  keyField: _react.PropTypes.string,
  height: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  maxHeight: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  data: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object]),
  remote: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.func]), // remote data, default is false
  scrollTop: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  striped: _react.PropTypes.bool,
  bordered: _react.PropTypes.bool,
  hover: _react.PropTypes.bool,
  condensed: _react.PropTypes.bool,
  pagination: _react.PropTypes.bool,
  printable: _react.PropTypes.bool,
  keyBoardNav: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
  searchPlaceholder: _react.PropTypes.string,
  selectRow: _react.PropTypes.shape({
    mode: _react.PropTypes.oneOf([_Const2.default.ROW_SELECT_NONE, _Const2.default.ROW_SELECT_SINGLE, _Const2.default.ROW_SELECT_MULTI]),
    customComponent: _react.PropTypes.func,
    bgColor: _react.PropTypes.string,
    selected: _react.PropTypes.array,
    onSelect: _react.PropTypes.func,
    onSelectAll: _react.PropTypes.func,
    clickToSelect: _react.PropTypes.bool,
    hideSelectColumn: _react.PropTypes.bool,
    clickToSelectAndEditCell: _react.PropTypes.bool,
    clickToExpand: _react.PropTypes.bool,
    showOnlySelected: _react.PropTypes.bool,
    unselectable: _react.PropTypes.array,
    columnWidth: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
  }),
  cellEdit: _react.PropTypes.shape({
    mode: _react.PropTypes.string,
    blurToSave: _react.PropTypes.bool,
    beforeSaveCell: _react.PropTypes.func,
    afterSaveCell: _react.PropTypes.func,
    nonEditableRows: _react.PropTypes.func
  }),
  insertRow: _react.PropTypes.bool,
  deleteRow: _react.PropTypes.bool,
  search: _react.PropTypes.bool,
  columnFilter: _react.PropTypes.bool,
  trClassName: _react.PropTypes.any,
  tableStyle: _react.PropTypes.object,
  containerStyle: _react.PropTypes.object,
  headerStyle: _react.PropTypes.object,
  bodyStyle: _react.PropTypes.object,
  containerClass: _react.PropTypes.string,
  tableContainerClass: _react.PropTypes.string,
  headerContainerClass: _react.PropTypes.string,
  bodyContainerClass: _react.PropTypes.string,
  tableHeaderClass: _react.PropTypes.string,
  tableBodyClass: _react.PropTypes.string,
  options: _react.PropTypes.shape({
    clearSearch: _react.PropTypes.bool,
    sortName: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array]),
    sortOrder: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array]),
    defaultSortName: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array]),
    defaultSortOrder: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array]),
    sortIndicator: _react.PropTypes.bool,
    afterTableComplete: _react.PropTypes.func,
    afterDeleteRow: _react.PropTypes.func,
    afterInsertRow: _react.PropTypes.func,
    afterSearch: _react.PropTypes.func,
    afterColumnFilter: _react.PropTypes.func,
    onRowClick: _react.PropTypes.func,
    onRowDoubleClick: _react.PropTypes.func,
    page: _react.PropTypes.number,
    pageStartIndex: _react.PropTypes.number,
    paginationShowsTotal: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.func]),
    sizePerPageList: _react.PropTypes.array,
    sizePerPage: _react.PropTypes.number,
    paginationSize: _react.PropTypes.number,
    paginationPosition: _react.PropTypes.oneOf([_Const2.default.PAGINATION_POS_TOP, _Const2.default.PAGINATION_POS_BOTTOM, _Const2.default.PAGINATION_POS_BOTH]),
    hideSizePerPage: _react.PropTypes.bool,
    hidePageListOnlyOnePage: _react.PropTypes.bool,
    alwaysShowAllBtns: _react.PropTypes.bool,
    withFirstAndLast: _react.PropTypes.bool,
    onSortChange: _react.PropTypes.func,
    onPageChange: _react.PropTypes.func,
    onSizePerPageList: _react.PropTypes.func,
    onFilterChange: _react2.default.PropTypes.func,
    onSearchChange: _react2.default.PropTypes.func,
    onAddRow: _react2.default.PropTypes.func,
    onExportToCSV: _react2.default.PropTypes.func,
    onCellEdit: _react2.default.PropTypes.func,
    noDataText: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]),
    withoutNoDataText: _react2.default.PropTypes.bool,
    handleConfirmDeleteRow: _react.PropTypes.func,
    prePage: _react.PropTypes.string,
    nextPage: _react.PropTypes.string,
    firstPage: _react.PropTypes.string,
    lastPage: _react.PropTypes.string,
    prePageTitle: _react.PropTypes.string,
    nextPageTitle: _react.PropTypes.string,
    firstPageTitle: _react.PropTypes.string,
    lastPageTitle: _react.PropTypes.string,
    searchDelayTime: _react.PropTypes.number,
    exportCSVText: _react.PropTypes.string,
    insertText: _react.PropTypes.string,
    deleteText: _react.PropTypes.string,
    saveText: _react.PropTypes.string,
    closeText: _react.PropTypes.string,
    ignoreEditable: _react.PropTypes.bool,
    defaultSearch: _react.PropTypes.string,
    insertModalHeader: _react.PropTypes.func,
    insertModalBody: _react.PropTypes.func,
    insertModalFooter: _react.PropTypes.func,
    insertModal: _react.PropTypes.func,
    insertBtn: _react.PropTypes.func,
    deleteBtn: _react.PropTypes.func,
    showSelectedOnlyBtn: _react.PropTypes.func,
    exportCSVBtn: _react.PropTypes.func,
    clearSearchBtn: _react.PropTypes.func,
    searchField: _react.PropTypes.func,
    searchPanel: _react.PropTypes.func,
    btnGroup: _react.PropTypes.func,
    toolBar: _react.PropTypes.func,
    sizePerPageDropDown: _react.PropTypes.func,
    paginationPanel: _react.PropTypes.func,
    searchPosition: _react.PropTypes.string,
    expandRowBgColor: _react.PropTypes.string,
    expandBy: _react.PropTypes.string,
    expanding: _react.PropTypes.array,
    beforeShowError: _react.PropTypes.func,
    printToolBar: _react.PropTypes.bool
  }),
  fetchInfo: _react.PropTypes.shape({
    dataTotalSize: _react.PropTypes.number
  }),
  exportCSV: _react.PropTypes.bool,
  csvFileName: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
  ignoreSinglePage: _react.PropTypes.bool,
  expandableRow: _react.PropTypes.func,
  expandComponent: _react.PropTypes.func,
  expandColumnOptions: _react.PropTypes.shape({
    columnWidth: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    expandColumnVisible: _react.PropTypes.bool,
    expandColumnComponent: _react.PropTypes.func,
    expandColumnBeforeSelectColumn: _react.PropTypes.bool
  })
};
BootstrapTable.defaultProps = {
  scrollTop: undefined,
  expandComponent: undefined,
  expandableRow: undefined,
  expandColumnOptions: {
    expandColumnVisible: false,
    expandColumnComponent: undefined,
    expandColumnBeforeSelectColumn: true
  },
  height: '100%',
  maxHeight: undefined,
  striped: false,
  bordered: true,
  hover: false,
  condensed: false,
  pagination: false,
  printable: false,
  keyBoardNav: false,
  searchPlaceholder: undefined,
  selectRow: {
    mode: _Const2.default.ROW_SELECT_NONE,
    bgColor: _Const2.default.ROW_SELECT_BG_COLOR,
    selected: [],
    onSelect: undefined,
    onSelectAll: undefined,
    clickToSelect: false,
    hideSelectColumn: false,
    clickToSelectAndEditCell: false,
    clickToExpand: false,
    showOnlySelected: false,
    unselectable: [],
    customComponent: undefined
  },
  cellEdit: {
    mode: _Const2.default.CELL_EDIT_NONE,
    blurToSave: false,
    beforeSaveCell: undefined,
    afterSaveCell: undefined,
    nonEditableRows: undefined
  },
  insertRow: false,
  deleteRow: false,
  search: false,
  multiColumnSearch: false,
  multiColumnSort: 1,
  columnFilter: false,
  trClassName: '',
  tableStyle: undefined,
  containerStyle: undefined,
  headerStyle: undefined,
  bodyStyle: undefined,
  containerClass: null,
  tableContainerClass: null,
  headerContainerClass: null,
  bodyContainerClass: null,
  tableHeaderClass: null,
  tableBodyClass: null,
  options: {
    clearSearch: false,
    sortName: undefined,
    sortOrder: undefined,
    defaultSortName: undefined,
    defaultSortOrder: undefined,
    sortIndicator: true,
    afterTableComplete: undefined,
    afterDeleteRow: undefined,
    afterInsertRow: undefined,
    afterSearch: undefined,
    afterColumnFilter: undefined,
    onRowClick: undefined,
    onRowDoubleClick: undefined,
    onMouseLeave: undefined,
    onMouseEnter: undefined,
    onRowMouseOut: undefined,
    onRowMouseOver: undefined,
    page: undefined,
    paginationShowsTotal: false,
    sizePerPageList: _Const2.default.SIZE_PER_PAGE_LIST,
    sizePerPage: undefined,
    paginationSize: _Const2.default.PAGINATION_SIZE,
    paginationPosition: _Const2.default.PAGINATION_POS_BOTTOM,
    hideSizePerPage: false,
    hidePageListOnlyOnePage: false,
    alwaysShowAllBtns: false,
    withFirstAndLast: true,
    onSizePerPageList: undefined,
    noDataText: undefined,
    withoutNoDataText: false,
    handleConfirmDeleteRow: undefined,
    prePage: _Const2.default.PRE_PAGE,
    nextPage: _Const2.default.NEXT_PAGE,
    firstPage: _Const2.default.FIRST_PAGE,
    lastPage: _Const2.default.LAST_PAGE,
    prePageTitle: _Const2.default.PRE_PAGE_TITLE,
    nextPageTitle: _Const2.default.NEXT_PAGE_TITLE,
    firstPageTitle: _Const2.default.FIRST_PAGE_TITLE,
    lastPageTitle: _Const2.default.LAST_PAGE_TITLE,
    pageStartIndex: undefined,
    searchDelayTime: undefined,
    exportCSVText: _Const2.default.EXPORT_CSV_TEXT,
    insertText: _Const2.default.INSERT_BTN_TEXT,
    deleteText: _Const2.default.DELETE_BTN_TEXT,
    saveText: _Const2.default.SAVE_BTN_TEXT,
    closeText: _Const2.default.CLOSE_BTN_TEXT,
    ignoreEditable: false,
    defaultSearch: '',
    insertModalHeader: undefined,
    insertModalBody: undefined,
    insertModalFooter: undefined,
    insertModal: undefined,
    insertBtn: undefined,
    deleteBtn: undefined,
    showSelectedOnlyBtn: undefined,
    exportCSVBtn: undefined,
    clearSearchBtn: undefined,
    searchField: undefined,
    searchPanel: undefined,
    btnGroup: undefined,
    toolBar: undefined,
    sizePerPageDropDown: undefined,
    paginationPanel: undefined,
    searchPosition: 'right',
    expandRowBgColor: undefined,
    expandBy: _Const2.default.EXPAND_BY_ROW,
    expanding: [],
    beforeShowError: undefined,
    printToolBar: true
  },
  fetchInfo: {
    dataTotalSize: 0
  },
  exportCSV: false,
  csvFileName: 'spreadsheet.csv',
  ignoreSinglePage: false
};

var _default = BootstrapTable;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(BootstrapTable, 'BootstrapTable', '/Users/Benjamin/Development/github/react-bootstrap-table/src/BootstrapTable.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Benjamin/Development/github/react-bootstrap-table/src/BootstrapTable.js');
}();

;