'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactSAlert = require('react-s-alert');

var _reactSAlert2 = _interopRequireDefault(_reactSAlert);

var _Const = require('./Const');

var _Const2 = _interopRequireDefault(_Const);

var _TableHeaderColumn = require('./TableHeaderColumn');

var _TableHeaderColumn2 = _interopRequireDefault(_TableHeaderColumn);

var _TableHeader = require('./TableHeader');

var _TableHeader2 = _interopRequireDefault(_TableHeader);

var _TableFooter = require('./TableFooter');

var _TableFooter2 = _interopRequireDefault(_TableFooter);

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

    _this.handleEditCell = function () {
      return _this.__handleEditCell__REACT_HOT_LOADER__.apply(_this, arguments);
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

    _this._scrollFooter = function () {
      return _this.___scrollFooter__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.isIE = false;
    if (_util2.default.canUseDOM()) {
      _this.isIE = document.documentMode;
    }
    _this.store = new _TableDataStore.TableDataStore(_this.props.data ? _this.props.data.slice() : []);
    _this.isVerticalScroll = false;
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
    _this.toggleExpandAllChilds = _this.toggleExpandAllChilds.bind(_this);

    var expandedKeys = [];
    if (_this.props.options.expandAllChilds !== null && _this.props.options.expandAllChilds !== undefined && _this.props.options.expandAllChilds) {
      expandedKeys = _this.store.getAllRowkey();
    } else if (_this.props.options.expanding !== undefined && _this.props.options.expanding !== null) {
      expandedKeys = _this.props.options.expanding;
    }

    _this.state = {
      data: _this.getTableData(),
      currPage: currPage,
      expanding: expandedKeys,
      sizePerPage: _this.props.options.sizePerPage || _Const2.default.SIZE_PER_PAGE_LIST[0],
      selectedRowKeys: _this.store.getSelectedRowKeys(),
      reset: false,
      x: _this.props.keyBoardNav ? 0 : -1,
      y: _this.props.keyBoardNav ? 0 : -1
    };
    return _this;
  }

  _createClass(BootstrapTable, [{
    key: '___scrollFooter__REACT_HOT_LOADER__',
    value: function ___scrollFooter__REACT_HOT_LOADER__() {
      return this.___scrollFooter__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '___scrollHeader__REACT_HOT_LOADER__',
    value: function ___scrollHeader__REACT_HOT_LOADER__() {
      return this.___scrollHeader__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '___scrollTop__REACT_HOT_LOADER__',
    value: function ___scrollTop__REACT_HOT_LOADER__() {
      return this.___scrollTop__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleSearch__REACT_HOT_LOADER__',
    value: function __handleSearch__REACT_HOT_LOADER__() {
      return this.__handleSearch__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleExportCSV__REACT_HOT_LOADER__',
    value: function __handleExportCSV__REACT_HOT_LOADER__() {
      return this.__handleExportCSV__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleFilterData__REACT_HOT_LOADER__',
    value: function __handleFilterData__REACT_HOT_LOADER__() {
      return this.__handleFilterData__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleDropRow__REACT_HOT_LOADER__',
    value: function __handleDropRow__REACT_HOT_LOADER__() {
      return this.__handleDropRow__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__getPageByRowKey__REACT_HOT_LOADER__',
    value: function __getPageByRowKey__REACT_HOT_LOADER__() {
      return this.__getPageByRowKey__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleAddRow__REACT_HOT_LOADER__',
    value: function __handleAddRow__REACT_HOT_LOADER__() {
      return this.__handleAddRow__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleEditCell__REACT_HOT_LOADER__',
    value: function __handleEditCell__REACT_HOT_LOADER__() {
      return this.__handleEditCell__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleSelectRow__REACT_HOT_LOADER__',
    value: function __handleSelectRow__REACT_HOT_LOADER__() {
      return this.__handleSelectRow__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleShowOnlySelected__REACT_HOT_LOADER__',
    value: function __handleShowOnlySelected__REACT_HOT_LOADER__() {
      return this.__handleShowOnlySelected__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleSelectAllRow__REACT_HOT_LOADER__',
    value: function __handleSelectAllRow__REACT_HOT_LOADER__() {
      return this.__handleSelectAllRow__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleRowDoubleClick__REACT_HOT_LOADER__',
    value: function __handleRowDoubleClick__REACT_HOT_LOADER__() {
      return this.__handleRowDoubleClick__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleRowClick__REACT_HOT_LOADER__',
    value: function __handleRowClick__REACT_HOT_LOADER__() {
      return this.__handleRowClick__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleNavigateCell__REACT_HOT_LOADER__',
    value: function __handleNavigateCell__REACT_HOT_LOADER__() {
      return this.__handleNavigateCell__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleRowMouseOver__REACT_HOT_LOADER__',
    value: function __handleRowMouseOver__REACT_HOT_LOADER__() {
      return this.__handleRowMouseOver__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleRowMouseOut__REACT_HOT_LOADER__',
    value: function __handleRowMouseOut__REACT_HOT_LOADER__() {
      return this.__handleRowMouseOut__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleMouseEnter__REACT_HOT_LOADER__',
    value: function __handleMouseEnter__REACT_HOT_LOADER__() {
      return this.__handleMouseEnter__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleMouseLeave__REACT_HOT_LOADER__',
    value: function __handleMouseLeave__REACT_HOT_LOADER__() {
      return this.__handleMouseLeave__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handlePaginationData__REACT_HOT_LOADER__',
    value: function __handlePaginationData__REACT_HOT_LOADER__() {
      return this.__handlePaginationData__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleExpandRow__REACT_HOT_LOADER__',
    value: function __handleExpandRow__REACT_HOT_LOADER__() {
      return this.__handleExpandRow__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleSort__REACT_HOT_LOADER__',
    value: function __handleSort__REACT_HOT_LOADER__() {
      return this.__handleSort__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: 'initTable',
    value: function initTable(props) {
      var _this2 = this;

      // If columns changed, clean removed columns that had filters
      if (props.children !== this.props.children && this.filter) {
        var nextDataFields = _react2.default.Children.map(props.children, function (column) {
          return column.props.dataField;
        });
        _react2.default.Children.forEach(this.props.children, function (column) {
          var _column$props = column.props,
              dataField = _column$props.dataField,
              filter = _column$props.filter;

          if (filter && !nextDataFields.includes(dataField)) {
            // Clear filter
            _this2.filter.handleFilter(dataField, '', filter.type, filter);
          }
        });
      }

      var keyField = props.keyField;


      var isKeyFieldDefined = typeof keyField === 'string' && keyField.length;
      _react2.default.Children.forEach(props.children, function (column) {
        if (column === null || column === undefined) {
          // Skip null and undefined value
          return;
        }
        if (column.props.isKey) {
          if (keyField) {
            throw new Error('Error. Multiple key column detected in TableHeaderColumn.');
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

      // if a column filter was created, add 'onFilterChange' listener
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
        strictSearch: props.strictSearch,
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
        if (!this.allowRemote(_Const2.default.REMOTE_SORT)) {
          this.store.sort();
        }
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
      var _this3 = this;

      var children = _ref.children;

      var rowCount = 0;
      _react2.default.Children.forEach(children, function (column) {
        if (column === null || column === undefined) {
          // Skip null and undefined value
          return;
        }

        if (Number(column.props.row) > rowCount) {
          rowCount = Number(column.props.row);
        }
      });
      return _react2.default.Children.map(children, function (column, i) {
        if (column === null || column === undefined) {
          // Return null for empty objects
          return null;
        }

        var rowIndex = column.props.row ? Number(column.props.row) : 0;
        var rowSpan = column.props.rowSpan ? Number(column.props.rowSpan) : 1;
        if (rowSpan + rowIndex === rowCount + 1) {
          var columnDescription = _this3.getColumnDescription(column);

          columnDescription.index = i;
          return columnDescription;
        }
      });
    }
  }, {
    key: 'getColumnDescription',
    value: function getColumnDescription(column) {
      var columnDescription = {
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
        attrs: column.props.tdAttr,
        editAttrs: column.props.editTdAttr,
        style: column.props.tdStyle
      };

      if (column.type.name !== _TableHeaderColumn2.default.name && _react2.default.isValidElement(column.props.children)) {
        columnDescription = _extends({}, columnDescription, this.getColumnDescription(_react2.default.Children.only(column.props.children)));
      }

      return columnDescription;
    }
  }, {
    key: 'reset',
    value: function reset() {
      var _this4 = this;

      var pageStartIndex = this.props.options.pageStartIndex;

      this.store.clean();
      this.body.setState({ currEditCell: null });
      this.setState(function () {
        return {
          data: _this4.getTableData(),
          currPage: _util2.default.getFirstPage(pageStartIndex),
          expanding: [],
          sizePerPage: _Const2.default.SIZE_PER_PAGE_LIST[0],
          selectedRowKeys: [],
          reset: true
        };
      });
    }

    /* eslint-disable */

  }, {
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      /* eslint-enable */
      this.initTable(nextProps);
      var options = nextProps.options,
          selectRow = nextProps.selectRow;
      var replace = nextProps.replace;

      replace = replace || this.props.replace;

      if (!nextProps.data) {
        return;
      }
      this.store.setData(nextProps.data.slice());

      if (!replace) {
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
          var newState = { sizePerPage: sizePerPage, reset: false, currPage: page };
          var data = nextProps.data.slice();
          if (nextProps.pagination && !this.allowRemote(_Const2.default.REMOTE_PAGE)) {
            data = this.store.page(page, sizePerPage).get();
          }

          if (this.store.isOnFilter) {
            if (this.store.searchText) this.handleSearch(this.store.searchText);
            if (this.store.filterObj) this.handleFilterData(this.store.filterObj);
            newState.currPage = _util2.default.getFirstPage(nextProps.options.pageStartIndex);
          } else {
            if (!this.allowRemote(_Const2.default.REMOTE_SORT)) {
              data = this.store.sort().get();
            } else {
              var currentOptions = this.props.options;

              var sortName = options.sortName;
              var sortOrder = options.sortOrder;
              if (currentOptions.sortName !== sortName || currentOptions.sortOrder !== sortOrder) {
                this.store.setSortInfo(sortOrder, options.sortName);
              }
            }
            newState.data = data;
          }
          this.setState(function () {
            return newState;
          });
        } else {
          // #125
          // remove !options.page for #709
          if (page > Math.ceil(nextProps.data.length / sizePerPage)) {
            page = 1;
          }
          var sortList = this.store.getSortInfo();
          var sortField = options.sortName;
          var _sortOrder = options.sortOrder;
          if (sortField && _sortOrder) {
            this.store.setSortInfo(_sortOrder, sortField);
            this.store.sort();
          } else if (sortList.length > 0) {
            this.store.sort();
          }
          var _data = this.store.page(page, sizePerPage).get();
          this.setState(function () {
            return {
              data: _data,
              currPage: page,
              sizePerPage: sizePerPage,
              reset: false
            };
          });

          if (this.store.isSearching && options.afterSearch) {
            options.afterSearch(this.store.searchText, this.store.getDataIgnoringPagination());
          }

          if (this.store.isFiltering && options.afterColumnFilter) {
            options.afterColumnFilter(this.store.filterObj, this.store.getDataIgnoringPagination());
          }
        }

        // If setting the expanded rows is being handled externally
        // then overwrite the current expanded rows.
        if (this.props.options.expanding !== options.expanding) {
          this.setState(function () {
            return {
              expanding: options.expanding || []
            };
          });
        }

        if (selectRow && selectRow.selected) {
          // set default select rows to store.
          var copy = selectRow.selected.slice();
          this.store.setSelectedRowKey(copy);
          this.setState(function () {
            return {
              selectedRowKeys: copy,
              reset: false
            };
          });
        }

        if (selectRow && selectRow.mode !== 'none' && this.state.y !== 0) {
          // If user switched to select row, reset the focus to the first cell
          this.setState(function () {
            return {
              y: 0,
              x: 0
            };
          });
        }
      } else {
        this.reset();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._adjustTable();
      window.addEventListener('resize', this._adjustTable);
      this.body.container.addEventListener('scroll', this._scrollHeader);
      if (this.props.footer) {
        this.body.container.addEventListener('scroll', this._scrollFooter);
      }
      if (this.props.scrollTop) {
        this._scrollTop();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this._adjustTable);
      if (this.body && this.body.container) {
        this.body.container.removeEventListener('scroll', this._scrollHeader);
        if (this.props.footer) {
          this.body.container.removeEventListener('scroll', this._scrollFooter);
        }
      }
      if (this.filter) {
        this.filter.removeAllListeners('onFilterChange');
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._adjustTable();
      if (this.props.options.afterTableComplete) {
        this.props.options.afterTableComplete();
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

      return remote === true || _util2.default.isFunction(remote);
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
      var _this5 = this;

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
      var colGroups = _util2.default.renderColGroup(columns, this.props.selectRow, expandColumnOptions, this.props.version);
      var tableFooter = this.renderTableFooter(this.props.footerData, this.state.data, columns, colGroups);
      var sortIndicator = this.props.options.sortIndicator;
      if (typeof this.props.options.sortIndicator === 'undefined') sortIndicator = true;

      var _props$options$pagina = this.props.options.paginationPosition,
          paginationPosition = _props$options$pagina === undefined ? _Const2.default.PAGINATION_POS_BOTTOM : _props$options$pagina;

      var showPaginationOnTop = paginationPosition !== _Const2.default.PAGINATION_POS_BOTTOM;
      var showPaginationOnBottom = paginationPosition !== _Const2.default.PAGINATION_POS_TOP;
      var selectRow = _extends({}, this.props.selectRow);
      if (this.props.cellEdit && this.props.cellEdit.mode !== _Const2.default.CELL_EDIT_NONE) {
        selectRow.clickToSelect = false;
      }

      var _props$options$toolba = this.props.options.toolbarPosition,
          toolbarPosition = _props$options$toolba === undefined ? _Const2.default.TOOLBAR_POS_TOP : _props$options$toolba;

      var showToolbarOnTop = toolbarPosition !== _Const2.default.TOOLBAR_POS_BOTTOM;
      var showToolbarOnBottom = toolbarPosition !== _Const2.default.TOOLBAR_POS_TOP;
      var _props$options$hideRo = this.props.options.hideRowOnExpand,
          hideRowOnExpand = _props$options$hideRo === undefined ? false : _props$options$hideRo;

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('react-bs-table-container', this.props.className, this.props.containerClass),
          style: this.props.containerStyle },
        showToolbarOnTop ? toolBar : null,
        showPaginationOnTop ? pagination : null,
        _react2.default.createElement(
          'div',
          { ref: function ref(node) {
              return _this5.table = node;
            },
            className: (0, _classnames2.default)('react-bs-table', { 'react-bs-table-bordered': this.props.bordered }, this.props.tableContainerClass),
            style: _extends({}, style, this.props.tableStyle),
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave },
          _react2.default.createElement(
            _TableHeader2.default,
            {
              ref: function ref(node) {
                return _this5.header = node;
              },
              version: this.props.version,
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
              expandedColumnHeaderComponent: expandColumnOptions.expandedColumnHeaderComponent,
              noAnyExpand: this.state.expanding.length === 0,
              expandAll: this.props.options.expandAll,
              toggleExpandAllChilds: this.toggleExpandAllChilds,
              expandColumnBeforeSelectColumn: expandColumnOptions.expandColumnBeforeSelectColumn },
            this.props.children
          ),
          _react2.default.createElement(_TableBody2.default, {
            ref: function ref(node) {
              return _this5.body = node;
            },
            bodyContainerClass: this.props.bodyContainerClass,
            tableBodyClass: this.props.tableBodyClass,
            style: _extends({}, style, this.props.bodyStyle),
            data: this.state.data,
            version: this.props.version,
            expandComponent: this.props.expandComponent,
            expandableRow: this.props.expandableRow,
            expandRowBgColor: this.props.options.expandRowBgColor,
            expandBy: this.props.options.expandBy || _Const2.default.EXPAND_BY_ROW,
            expandBodyClass: this.props.options.expandBodyClass,
            expandParentClass: this.props.options.expandParentClass,
            columns: columns,
            trClassName: this.props.trClassName,
            trStyle: this.props.trStyle,
            striped: this.props.striped,
            bordered: this.props.bordered,
            hover: this.props.hover,
            keyField: this.store.getKeyField(),
            condensed: this.props.condensed,
            selectRow: selectRow,
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
            onlyOneExpanding: this.props.options.onlyOneExpanding,
            beforeShowError: this.props.options.beforeShowError,
            keyBoardNav: this.props.keyBoardNav,
            onNavigateCell: this.handleNavigateCell,
            x: this.state.x,
            y: this.state.y,
            withoutTabIndex: this.props.withoutTabIndex,
            hideRowOnExpand: hideRowOnExpand,
            onEditCell: this.handleEditCell }),
          tableFooter
        ),
        tableFilter,
        showPaginationOnBottom ? pagination : null,
        showToolbarOnBottom ? toolBar : null,
        this.props.renderAlert ? _react2.default.createElement(_reactSAlert2.default, { stack: { limit: 3 } }) : null
      );
    }
  }, {
    key: 'isSelectAll',
    value: function isSelectAll() {
      if (this.store.isEmpty()) return false;
      var _props$selectRow = this.props.selectRow,
          unselectable = _props$selectRow.unselectable,
          onlyUnselectVisible = _props$selectRow.onlyUnselectVisible;

      var keyField = this.store.getKeyField();
      var allRowKeys = onlyUnselectVisible ? this.store.get().map(function (r) {
        return r[keyField];
      }) : this.store.getAllRowkey();
      var defaultSelectRowKeys = this.store.getSelectedRowKeys();

      if (onlyUnselectVisible) {
        defaultSelectRowKeys = defaultSelectRowKeys.filter(function (x) {
          return x !== allRowKeys;
        });
      }

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
      this.setState(function () {
        return {
          selectedRowKeys: [],
          reset: false
        };
      });
    }
  }, {
    key: 'cleanSort',
    value: function cleanSort() {
      this.store.cleanSortInfo();
      this.setState(function () {
        return {
          reset: false
        };
      });
    }
  }, {
    key: '__handleSort__REACT_HOT_LOADER__',
    value: function __handleSort__REACT_HOT_LOADER__(order, sortField) {
      var _props2 = this.props,
          sort = _props2.autoCollapse.sort,
          options = _props2.options;

      if (options.onSortChange) {
        options.onSortChange(sortField, order, this.props);
      }
      this.store.setSortInfo(order, sortField);
      if (this.allowRemote(_Const2.default.REMOTE_SORT)) {
        if (sort) {
          this.setState(function () {
            return {
              expanding: []
            };
          });
        }
        return;
      }

      var result = this.store.sort().get();
      this.setState(function () {
        var newState = {
          data: result,
          reset: false
        };
        if (sort) newState.expanding = [];
        return newState;
      });
    }
  }, {
    key: '__handleExpandRow__REACT_HOT_LOADER__',
    value: function __handleExpandRow__REACT_HOT_LOADER__(expanding, rowKey, isRowExpanding, event) {
      var _this6 = this;

      var onExpand = this.props.options.onExpand;

      if (onExpand) {
        onExpand(rowKey, !isRowExpanding, event);
      }
      this.setState(function () {
        return { expanding: expanding, reset: false };
      }, function () {
        _this6._adjustHeaderWidth();
      });
    }
  }, {
    key: 'toggleExpandAllChilds',
    value: function toggleExpandAllChilds() {
      var _this7 = this;

      var expanding = this.state.expanding;

      if (expanding.length > 0) {
        this.setState(function () {
          return {
            expanding: [],
            reset: false
          };
        });
      } else {
        this.setState(function () {
          return {
            expanding: _this7.store.getAllRowkey(),
            reset: false
          };
        });
      }
    }
  }, {
    key: '__handlePaginationData__REACT_HOT_LOADER__',
    value: function __handlePaginationData__REACT_HOT_LOADER__(page, sizePerPage) {
      var _props$options = this.props.options,
          onPageChange = _props$options.onPageChange,
          pageStartIndex = _props$options.pageStartIndex;

      var emptyTable = this.store.isEmpty();
      if (onPageChange) {
        onPageChange(page, sizePerPage);
      }

      var state = {
        sizePerPage: sizePerPage,
        reset: false
      };
      if (!emptyTable) state.currPage = page;
      this.setState(function () {
        return state;
      });

      if (this.allowRemote(_Const2.default.REMOTE_PAGE) || emptyTable) {
        return;
      }

      var result = this.store.page(_util2.default.getNormalizedPage(pageStartIndex, page), sizePerPage).get();
      this.setState(function () {
        return { data: result, reset: false };
      });
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


      var columns = this.store.getColInfos();
      var visibleColumnIndices = Object.keys(columns).map(function (k, index) {
        return columns[k].hidden ? -1 : index;
      }).filter(function (k) {
        return k !== -1;
      });

      if (visibleColumnIndices.indexOf(x) === 0 && offSetX < 0) {
        x = -1;
      } else if (visibleColumnIndices.indexOf(x) === visibleColumnIndices.length - 1 && offSetX >= 1) {
        x = Object.keys(columns).length;
      } else {
        x = visibleColumnIndices[visibleColumnIndices.indexOf(x) + offSetX];
      }
      y += offSetY;

      var visibleRowSize = this.state.data.length;
      var visibleColumnSize = Object.keys(columns).filter(function (k) {
        return !columns[k].hidden;
      }).length;
      var hiddenColumnSize = Object.keys(columns).filter(function (k) {
        return columns[k].hidden;
      }).length;

      if (y >= visibleRowSize) {
        currPage++;
        var lastPage = pagination ? this.pagination.getLastPage() : -1;
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
      } else if (x - hiddenColumnSize >= visibleColumnSize) {
        if (y + 1 === visibleRowSize) {
          currPage++;
          var _lastPage = pagination ? this.pagination.getLastPage() : -1;
          if (currPage <= _lastPage) {
            this.handlePaginationData(currPage, this.state.sizePerPage);
          } else {
            return;
          }
          y = 0;
        } else {
          y++;
        }
        x = lastEditCell ? visibleColumnIndices[1] : visibleColumnIndices[0];
      } else if (x < 0) {
        x = visibleColumnIndices[visibleColumnIndices.length - 1];
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
      this.setState(function () {
        return {
          x: x, y: y, currPage: currPage, reset: false
        };
      });
    }
  }, {
    key: '__handleRowClick__REACT_HOT_LOADER__',
    value: function __handleRowClick__REACT_HOT_LOADER__(row, rowIndex, columnIndex, event) {
      var _props3 = this.props,
          options = _props3.options,
          keyBoardNav = _props3.keyBoardNav;

      if (options.onRowClick) {
        options.onRowClick(row, columnIndex, rowIndex, event);
      }
      if (keyBoardNav) {
        var _ref5 = (typeof keyBoardNav === 'undefined' ? 'undefined' : _typeof(keyBoardNav)) === 'object' ? keyBoardNav : {},
            clickToNav = _ref5.clickToNav;

        clickToNav = clickToNav === false ? clickToNav : true;
        if (clickToNav) {
          this.setState(function () {
            return {
              x: columnIndex,
              y: rowIndex,
              reset: false
            };
          });
        }
      }
    }
  }, {
    key: '__handleRowDoubleClick__REACT_HOT_LOADER__',
    value: function __handleRowDoubleClick__REACT_HOT_LOADER__(row, event) {
      if (this.props.options.onRowDoubleClick) {
        this.props.options.onRowDoubleClick(row, event);
      }
    }
  }, {
    key: '__handleSelectAllRow__REACT_HOT_LOADER__',
    value: function __handleSelectAllRow__REACT_HOT_LOADER__(e) {
      var isSelected = e.currentTarget.checked;
      var keyField = this.store.getKeyField();
      var _props$selectRow2 = this.props.selectRow,
          onSelectAll = _props$selectRow2.onSelectAll,
          unselectable = _props$selectRow2.unselectable,
          selected = _props$selectRow2.selected,
          onlyUnselectVisible = _props$selectRow2.onlyUnselectVisible;

      var selectedRowKeys = onlyUnselectVisible ? this.state.selectedRowKeys : [];
      var result = true;
      var rows = this.store.get();

      // onlyUnselectVisible default is false, #1276
      if (!isSelected && !onlyUnselectVisible) {
        rows = this.store.getRowByKey(this.state.selectedRowKeys);
      }

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
          if (Array.isArray(result)) {
            selectedRowKeys = result;
          } else {
            var currentRowKeys = rows.map(function (r) {
              return r[keyField];
            });
            // onlyUnselectVisible default is false, #1276
            if (onlyUnselectVisible) {
              selectedRowKeys = selectedRowKeys.concat(currentRowKeys);
            } else {
              selectedRowKeys = currentRowKeys;
            }
          }
        } else {
          if (unselectable && selected) {
            selectedRowKeys = selected.filter(function (r) {
              return unselectable.indexOf(r) > -1;
            });
          } else if (onlyUnselectVisible) {
            var _currentRowKeys = rows.map(function (r) {
              return r[keyField];
            });
            selectedRowKeys = selectedRowKeys.filter(function (k) {
              return _currentRowKeys.indexOf(k) === -1;
            });
          }
        }

        this.store.setSelectedRowKey(selectedRowKeys);
        this.setState(function () {
          return { selectedRowKeys: selectedRowKeys, reset: false };
        });
      }
    }
  }, {
    key: '__handleShowOnlySelected__REACT_HOT_LOADER__',
    value: function __handleShowOnlySelected__REACT_HOT_LOADER__() {
      this.store.ignoreNonSelected();
      var pageStartIndex = this.props.options.pageStartIndex;

      var result = void 0;
      if (this.props.pagination) {
        result = this.store.page(_util2.default.getNormalizedPage(pageStartIndex), this.state.sizePerPage).get();
      } else {
        result = this.store.get();
      }
      this.setState(function () {
        return {
          data: result,
          reset: false,
          currPage: _util2.default.getFirstPage(pageStartIndex)
        };
      });
    }
  }, {
    key: '__handleSelectRow__REACT_HOT_LOADER__',
    value: function __handleSelectRow__REACT_HOT_LOADER__(row, isSelected, e, rowIndex) {
      var result = true;
      var currSelected = this.store.getSelectedRowKeys();
      var rowKey = row[this.store.getKeyField()];
      var selectRow = this.props.selectRow;

      if (selectRow.onSelect) {
        result = selectRow.onSelect(row, isSelected, e, rowIndex);
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
        this.setState(function () {
          return {
            selectedRowKeys: currSelected,
            reset: false
          };
        });
      }
    }
  }, {
    key: '__handleEditCell__REACT_HOT_LOADER__',
    value: function __handleEditCell__REACT_HOT_LOADER__(newVal, rowIndex, colIndex) {
      var _this8 = this;

      var beforeSaveCell = this.props.cellEdit.beforeSaveCell;

      var columns = this.getColumnsDescription(this.props);
      var fieldName = columns[colIndex].name;

      var invalid = function invalid() {
        _this8.setState(function () {
          return {
            data: _this8.store.get(),
            reset: false
          };
        });
        return;
      };

      if (beforeSaveCell) {
        var beforeSaveCellCB = function beforeSaveCellCB(result) {
          _this8.body.cancelEditCell();
          if (result || result === undefined) {
            _this8.editCell(newVal, rowIndex, colIndex);
          } else {
            invalid();
          }
        };
        var props = { rowIndex: rowIndex, colIndex: colIndex };
        var isValid = beforeSaveCell(this.state.data[rowIndex], fieldName, newVal, beforeSaveCellCB, props);
        if (isValid === false && typeof isValid !== 'undefined') {
          return invalid();
        } else if (isValid === _Const2.default.AWAIT_BEFORE_CELL_EDIT) {
          /* eslint consistent-return: 0 */
          return isValid;
        }
      }
      this.editCell(newVal, rowIndex, colIndex);
    }
  }, {
    key: 'editCell',
    value: function editCell(newVal, rowIndex, colIndex) {
      var onCellEdit = this.props.options.onCellEdit;
      var afterSaveCell = this.props.cellEdit.afterSaveCell;

      var columns = this.getColumnsDescription(this.props);
      var fieldName = columns[colIndex].name;
      var props = { rowIndex: rowIndex, colIndex: colIndex };
      if (onCellEdit) {
        newVal = onCellEdit(this.state.data[rowIndex], fieldName, newVal);
      }

      if (this.allowRemote(_Const2.default.REMOTE_CELL_EDIT)) {
        if (afterSaveCell) {
          afterSaveCell(this.state.data[rowIndex], fieldName, newVal, props);
        }
        return;
      }

      var result = this.store.edit(newVal, rowIndex, fieldName).get();
      this.setState(function () {
        return {
          data: result,
          reset: false
        };
      });

      if (afterSaveCell) {
        afterSaveCell(this.state.data[rowIndex], fieldName, newVal, props);
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
      var _this9 = this;

      var isAsync = false;
      var onAddRow = this.props.options.onAddRow;


      var afterHandleAddRow = function afterHandleAddRow(errMsg) {
        if (isAsync) {
          _this9.toolbar.afterHandleSaveBtnClick(errMsg);
        } else {
          return errMsg;
        }
      };

      var afterAddRowCB = function afterAddRowCB(errMsg) {
        if (typeof errMsg !== 'undefined' && errMsg !== '') return afterHandleAddRow(errMsg);
        if (_this9.allowRemote(_Const2.default.REMOTE_INSERT_ROW)) {
          if (_this9.props.options.afterInsertRow) {
            _this9.props.options.afterInsertRow(newObj);
          }
          return afterHandleAddRow();
        }

        try {
          _this9.store.add(newObj);
        } catch (e) {
          return afterHandleAddRow(e.message);
        }
        _this9._handleAfterAddingRow(newObj, false);
        return afterHandleAddRow();
      };

      if (onAddRow) {
        var colInfos = this.store.getColInfos();
        var errMsg = onAddRow(newObj, colInfos, afterAddRowCB);

        if (errMsg !== '' && errMsg !== false) {
          return errMsg;
        } else if (typeof errMsg === 'undefined') {
          return afterAddRowCB();
        } else {
          isAsync = true;
          return !isAsync;
        }
      } else {
        return afterAddRowCB();
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
      var _this10 = this;

      var dropRowKeys = rowKeys ? rowKeys : this.store.getSelectedRowKeys();
      // add confirm before the delete action if that option is set.
      if (dropRowKeys && dropRowKeys.length > 0) {
        if (this.props.options.handleConfirmDeleteRow) {
          this.props.options.handleConfirmDeleteRow(function () {
            _this10.deleteRow(dropRowKeys);
          }, dropRowKeys);
        } else if (confirm('Are you sure you want to delete?')) {
          this.deleteRow(dropRowKeys);
        }
      }
    }
  }, {
    key: 'deleteRow',
    value: function deleteRow(dropRowKeys) {
      var _this11 = this;

      var dropRow = this.store.getRowByKey(dropRowKeys);
      var _props$options2 = this.props.options,
          onDeleteRow = _props$options2.onDeleteRow,
          afterDeleteRow = _props$options2.afterDeleteRow,
          pageStartIndex = _props$options2.pageStartIndex;


      if (onDeleteRow) {
        onDeleteRow(dropRowKeys, dropRow);
      }

      this.store.setSelectedRowKey([]); // clear selected row key

      if (this.allowRemote(_Const2.default.REMOTE_DROP_ROW)) {
        if (afterDeleteRow) {
          afterDeleteRow(dropRowKeys, dropRow);
        }
        return;
      }

      this.store.remove(dropRowKeys); // remove selected Row
      var result = void 0;
      if (this.props.pagination) {
        // debugger;
        var sizePerPage = this.state.sizePerPage;

        var currLastPage = Math.ceil(this.store.getDataNum() / sizePerPage);
        var currPage = this.state.currPage;

        if (currPage > currLastPage) currPage = currLastPage;
        // console.log(Util.getNormalizedPage(currPage));
        result = this.store.page(_util2.default.getNormalizedPage(pageStartIndex, currPage), sizePerPage).get();
        this.setState(function () {
          return {
            data: result,
            selectedRowKeys: _this11.store.getSelectedRowKeys(),
            currPage: currPage,
            reset: false
          };
        });
      } else {
        result = this.store.get();
        this.setState(function () {
          return {
            data: result,
            reset: false,
            selectedRowKeys: _this11.store.getSelectedRowKeys()
          };
        });
      }
      if (afterDeleteRow) {
        afterDeleteRow(dropRowKeys, dropRow);
      }
    }
  }, {
    key: '__handleFilterData__REACT_HOT_LOADER__',
    value: function __handleFilterData__REACT_HOT_LOADER__(filterObj) {
      var _props4 = this.props,
          filter = _props4.autoCollapse.filter,
          options = _props4.options;
      var onFilterChange = options.onFilterChange,
          pageStartIndex = options.pageStartIndex;

      if (onFilterChange) {
        var colInfos = this.store.getColInfos();
        onFilterChange(filterObj, colInfos);
      }

      this.setState(function () {
        var newState = {
          currPage: _util2.default.getFirstPage(pageStartIndex),
          reset: false
        };
        if (filter) newState.expanding = [];
        return newState;
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

        result = this.store.page(_util2.default.getNormalizedPage(pageStartIndex), sizePerPage).get();
      } else {
        result = this.store.get();
      }
      if (this.props.options.afterColumnFilter) {
        this.props.options.afterColumnFilter(filterObj, this.store.getDataIgnoringPagination());
      }
      this.setState(function () {
        return {
          data: result,
          reset: false
        };
      });
    }
  }, {
    key: '__handleExportCSV__REACT_HOT_LOADER__',
    value: function __handleExportCSV__REACT_HOT_LOADER__() {
      var result = {};

      var csvFileName = this.props.csvFileName;
      var _props$options3 = this.props.options,
          onExportToCSV = _props$options3.onExportToCSV,
          exportCSVSeparator = _props$options3.exportCSVSeparator,
          noAutoBOM = _props$options3.noAutoBOM,
          excludeCSVHeader = _props$options3.excludeCSVHeader;

      if (onExportToCSV) {
        result = onExportToCSV();
      } else {
        result = this.store.getDataIgnoringPagination();
      }
      var separator = exportCSVSeparator || _Const2.default.DEFAULT_CSV_SEPARATOR;
      var keys = [];
      this.props.children.filter(function (_) {
        return _ != null;
      }).map(function (column) {
        if (column.props.export === true || typeof column.props.export === 'undefined' && column.props.hidden === false) {
          keys.push({
            field: column.props.dataField,
            type: column.props.csvFieldType,
            format: column.props.csvFormat,
            extraData: column.props.csvFormatExtraData,
            header: column.props.csvHeader || column.props.dataField,
            row: Number(column.props.row) || 0,
            rowSpan: Number(column.props.rowSpan) || 1,
            colSpan: Number(column.props.colSpan) || 1
          });
        }
      });

      if (_util2.default.isFunction(csvFileName)) {
        csvFileName = csvFileName();
      }

      (0, _csv_export_util2.default)(result, keys, csvFileName, separator, noAutoBOM, excludeCSVHeader);
    }
  }, {
    key: '__handleSearch__REACT_HOT_LOADER__',
    value: function __handleSearch__REACT_HOT_LOADER__(searchText) {
      // Set search field if this function being called outside
      // but it's not necessary if calling fron inside.
      if (this.toolbar) {
        this.toolbar.setSearchInput(searchText);
      }
      var search = this.props.autoCollapse.search;
      var _props$options4 = this.props.options,
          onSearchChange = _props$options4.onSearchChange,
          pageStartIndex = _props$options4.pageStartIndex;

      if (onSearchChange) {
        var colInfos = this.store.getColInfos();
        onSearchChange(searchText, colInfos, this.props.multiColumnSearch);
      }

      this.setState(function () {
        var newState = {
          currPage: _util2.default.getFirstPage(pageStartIndex),
          reset: false
        };
        if (search) newState.expanding = [];
        return newState;
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

        result = this.store.page(_util2.default.getNormalizedPage(pageStartIndex), sizePerPage).get();
      } else {
        result = this.store.get();
      }
      if (this.props.options.afterSearch) {
        this.props.options.afterSearch(searchText, this.store.getDataIgnoringPagination());
      }
      this.setState(function () {
        return {
          data: result,
          reset: false
        };
      });
    }
  }, {
    key: 'renderPagination',
    value: function renderPagination() {
      var _this12 = this;

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
            ref: function ref(node) {
              return _this12.pagination = node;
            },
            version: this.props.version,
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
            keepSizePerPageState: options.keepSizePerPageState,
            open: false })
        );
      }
      return null;
    }
  }, {
    key: 'renderToolBar',
    value: function renderToolBar() {
      var _this13 = this;

      var _props5 = this.props,
          exportCSV = _props5.exportCSV,
          selectRow = _props5.selectRow,
          insertRow = _props5.insertRow,
          deleteRow = _props5.deleteRow,
          search = _props5.search,
          children = _props5.children,
          keyField = _props5.keyField;

      var enableShowOnlySelected = selectRow && selectRow.showOnlySelected;
      var print = typeof this.props.options.printToolBar === 'undefined' ? true : this.props.options.printToolBar;
      if (enableShowOnlySelected || insertRow || deleteRow || search || exportCSV || this.props.options.searchPanel || this.props.options.btnGroup || this.props.options.toolBar) {
        var columns = void 0;
        if (Array.isArray(children)) {
          columns = children.filter(function (_) {
            return _ != null;
          }).map(function (column, r) {
            if (!column) return;
            var props = column.props;

            var isKey = props.isKey || keyField === props.dataField;
            return {
              isKey: isKey,
              name: props.headerText || props.children,
              field: props.dataField,
              hiddenOnInsert: props.hiddenOnInsert,
              keyValidator: props.keyValidator,
              customInsertEditor: props.customInsertEditor,
              // when you want same auto generate value and not allow edit, example ID field
              autoValue: props.autoValue || false,
              // for create editor, no params for column.editable() indicate that editor for new row
              editable: props.editable && _util2.default.isFunction(props.editable === 'function') ? props.editable() : props.editable,
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
            customInsertEditor: children.props.customInsertEditor,
            hiddenOnInsert: children.props.hiddenOnInsert,
            keyValidator: children.props.keyValidator
          }];
        }
        return _react2.default.createElement(
          'div',
          { className: 'react-bs-table-tool-bar ' + (print ? '' : 'hidden-print') },
          _react2.default.createElement(_ToolBar2.default, {
            ref: function ref(node) {
              return _this13.toolbar = node;
            },
            version: this.props.version,
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
            reset: this.state.reset,
            isValidKey: this.store.isValidKey,
            insertFailIndicator: this.props.options.insertFailIndicator || _Const2.default.INSERT_FAIL_INDICATOR })
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
    key: 'renderTableFooter',
    value: function renderTableFooter(footerData, footerFormatterReturnData, columns, colGroups) {
      var _this14 = this;

      if (this.props.footer) {
        var hideSelectColumn = true;
        var mode = this.props.selectRow.mode;

        var isSelectRowDefined = _util2.default.isSelectRowDefined(mode);
        if (isSelectRowDefined) {
          hideSelectColumn = this.props.selectRow.hideSelectColumn;
        }
        return _react2.default.createElement(
          _TableFooter2.default,
          {
            ref: function ref(node) {
              return _this14.footer = node;
            },
            columns: columns,
            colGroups: colGroups,
            footerFormatterReturnData: footerFormatterReturnData,
            tableFooterClass: this.props.tableFooterClass,
            style: this.props.headerStyle,
            hideSelectColumn: hideSelectColumn,
            expandColumnVisible: this.props.expandColumnOptions.expandColumnVisible,
            bordered: this.props.bordered,
            condensed: this.props.condensed,
            isFiltered: this.filter ? true : false,
            showStickyColumn: this.props.showStickyColumn },
          footerData
        );
      }
      return null;
    }
  }, {
    key: '___scrollTop__REACT_HOT_LOADER__',
    value: function ___scrollTop__REACT_HOT_LOADER__() {
      var scrollTop = this.props.scrollTop;

      if (scrollTop === _Const2.default.SCROLL_TOP) {
        this.body.container.scrollTop = 0;
      } else if (scrollTop === _Const2.default.SCROLL_BOTTOM) {
        this.body.container.scrollTop = this.body.container.scrollHeight;
      } else if (typeof scrollTop === 'number' && !isNaN(scrollTop)) {
        this.body.container.scrollTop = scrollTop;
      }
    }
  }, {
    key: '___scrollHeader__REACT_HOT_LOADER__',
    value: function ___scrollHeader__REACT_HOT_LOADER__(e) {
      this.header.container.scrollLeft = e.currentTarget.scrollLeft;
    }
  }, {
    key: '___scrollFooter__REACT_HOT_LOADER__',
    value: function ___scrollFooter__REACT_HOT_LOADER__(e) {
      if (this.props.footer) {
        this.footer.container.scrollLeft = e.currentTarget.scrollLeft;
      }
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
      var header = this.header.getHeaderColGrouop();
      var tbody = this.body.tbody;
      var bodyHeader = this.body.getHeaderColGrouop();
      var firstRow = tbody.childNodes[0];
      var isScroll = tbody.parentNode.getBoundingClientRect().height > tbody.parentNode.parentNode.getBoundingClientRect().height;

      var scrollBarWidth = isScroll ? _util2.default.getScrollBarWidth() : 0;
      if (firstRow && this.store.getDataNum()) {
        if (isScroll || this.isVerticalScroll !== isScroll) {
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
        for (var _i in bodyHeader) {
          if (bodyHeader.hasOwnProperty(_i)) {
            var child = bodyHeader[_i];
            if (child.style) {
              if (child.style.width) {
                header[_i].style.width = child.style.width;
              }
              if (child.style.minWidth) {
                header[_i].style.minWidth = child.style.minWidth;
              }
            }
          }
        }
      }
      this.isVerticalScroll = isScroll;
    }
  }, {
    key: '_adjustHeight',
    value: function _adjustHeight() {
      var height = this.props.height;
      var maxHeight = this.props.maxHeight;

      if (typeof height === 'number' && !isNaN(height) || height.indexOf('%') === -1) {
        this.body.container.style.height = parseFloat(height, 10) - this.header.container.offsetHeight + 'px';
      }
      if (maxHeight) {
        maxHeight = typeof maxHeight === 'number' ? maxHeight : parseInt(maxHeight.replace('px', ''), 10);

        this.body.container.style.maxHeight = maxHeight - this.header.container.offsetHeight + 'px';
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
          var pageStartIndex = this.props.options.pageStartIndex;

          result = this.store.page(_util2.default.getNormalizedPage(pageStartIndex), sizePerPage).get();
          this.setState(function () {
            return {
              data: result,
              currPage: _util2.default.getFirstPage(pageStartIndex),
              reset: false
            };
          });
        } else {
          var currLastPage = Math.ceil(this.store.getDataNum() / sizePerPage);
          result = this.store.page(currLastPage, sizePerPage).get();
          this.setState(function () {
            return {
              data: result,
              currPage: currLastPage,
              reset: false
            };
          });
        }
      } else {
        result = this.store.get();
        this.setState(function () {
          return {
            data: result,
            reset: false
          };
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
  keyField: _propTypes2.default.string,
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  maxHeight: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  data: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]),
  version: _propTypes2.default.string, // bootstrap version
  remote: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func]), // remote data, default is false
  replace: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func]),
  scrollTop: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  striped: _propTypes2.default.bool,
  bordered: _propTypes2.default.bool,
  hover: _propTypes2.default.bool,
  condensed: _propTypes2.default.bool,
  pagination: _propTypes2.default.bool,
  printable: _propTypes2.default.bool,
  withoutTabIndex: _propTypes2.default.bool,
  keyBoardNav: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.object]),
  searchPlaceholder: _propTypes2.default.string,
  selectRow: _propTypes2.default.shape({
    mode: _propTypes2.default.oneOf([_Const2.default.ROW_SELECT_NONE, _Const2.default.ROW_SELECT_SINGLE, _Const2.default.ROW_SELECT_MULTI]),
    customComponent: _propTypes2.default.func,
    bgColor: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    selected: _propTypes2.default.array,
    onSelect: _propTypes2.default.func,
    onSelectAll: _propTypes2.default.func,
    clickToSelect: _propTypes2.default.bool,
    hideSelectColumn: _propTypes2.default.bool,
    clickToSelectAndEditCell: _propTypes2.default.bool,
    clickToExpand: _propTypes2.default.bool,
    showOnlySelected: _propTypes2.default.bool,
    unselectable: _propTypes2.default.array,
    columnWidth: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    onlyUnselectVisible: _propTypes2.default.bool
  }),
  cellEdit: _propTypes2.default.shape({
    mode: _propTypes2.default.string,
    blurToSave: _propTypes2.default.bool,
    blurToEscape: _propTypes2.default.bool,
    beforeSaveCell: _propTypes2.default.func,
    afterSaveCell: _propTypes2.default.func,
    nonEditableRows: _propTypes2.default.func
  }),
  insertRow: _propTypes2.default.bool,
  deleteRow: _propTypes2.default.bool,
  search: _propTypes2.default.bool,
  multiColumnSearch: _propTypes2.default.bool,
  strictSearch: _propTypes2.default.bool,
  columnFilter: _propTypes2.default.bool,
  trClassName: _propTypes2.default.any,
  trStyle: _propTypes2.default.any,
  tableStyle: _propTypes2.default.object,
  containerStyle: _propTypes2.default.object,
  headerStyle: _propTypes2.default.object,
  bodyStyle: _propTypes2.default.object,
  containerClass: _propTypes2.default.string,
  tableContainerClass: _propTypes2.default.string,
  headerContainerClass: _propTypes2.default.string,
  bodyContainerClass: _propTypes2.default.string,
  tableHeaderClass: _propTypes2.default.string,
  tableBodyClass: _propTypes2.default.string,
  tableFooterClass: _propTypes2.default.string,
  options: _propTypes2.default.shape({
    clearSearch: _propTypes2.default.bool,
    sortName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
    sortOrder: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
    defaultSortName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
    defaultSortOrder: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
    sortIndicator: _propTypes2.default.bool,
    afterTableComplete: _propTypes2.default.func,
    afterDeleteRow: _propTypes2.default.func,
    afterInsertRow: _propTypes2.default.func,
    afterSearch: _propTypes2.default.func,
    afterColumnFilter: _propTypes2.default.func,
    onRowClick: _propTypes2.default.func,
    onRowDoubleClick: _propTypes2.default.func,
    page: _propTypes2.default.number,
    pageStartIndex: _propTypes2.default.number,
    paginationShowsTotal: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func]),
    sizePerPageList: _propTypes2.default.array,
    sizePerPage: _propTypes2.default.number,
    paginationSize: _propTypes2.default.number,
    paginationPosition: _propTypes2.default.oneOf([_Const2.default.PAGINATION_POS_TOP, _Const2.default.PAGINATION_POS_BOTTOM, _Const2.default.PAGINATION_POS_BOTH]),
    toolbarPosition: _propTypes2.default.oneOf([_Const2.default.TOOLBAR_POS_TOP, _Const2.default.TOOLBAR_POS_BOTTOM, _Const2.default.TOOLBAR_POS_BOTH]),
    hideSizePerPage: _propTypes2.default.bool,
    hidePageListOnlyOnePage: _propTypes2.default.bool,
    alwaysShowAllBtns: _propTypes2.default.bool,
    withFirstAndLast: _propTypes2.default.bool,
    keepSizePerPageState: _propTypes2.default.bool,
    onSortChange: _propTypes2.default.func,
    onPageChange: _propTypes2.default.func,
    onSizePerPageList: _propTypes2.default.func,
    onFilterChange: _propTypes2.default.func,
    onSearchChange: _propTypes2.default.func,
    onAddRow: _propTypes2.default.func,
    onExportToCSV: _propTypes2.default.func,
    onCellEdit: _propTypes2.default.func,
    noDataText: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
    withoutNoDataText: _propTypes2.default.bool,
    handleConfirmDeleteRow: _propTypes2.default.func,
    prePage: _propTypes2.default.any,
    nextPage: _propTypes2.default.any,
    firstPage: _propTypes2.default.any,
    lastPage: _propTypes2.default.any,
    prePageTitle: _propTypes2.default.string,
    nextPageTitle: _propTypes2.default.string,
    firstPageTitle: _propTypes2.default.string,
    lastPageTitle: _propTypes2.default.string,
    searchDelayTime: _propTypes2.default.number,
    excludeCSVHeader: _propTypes2.default.bool,
    exportCSVText: _propTypes2.default.string,
    exportCSVSeparator: _propTypes2.default.string,
    insertText: _propTypes2.default.string,
    deleteText: _propTypes2.default.string,
    saveText: _propTypes2.default.string,
    closeText: _propTypes2.default.string,
    ignoreEditable: _propTypes2.default.bool,
    defaultSearch: _propTypes2.default.string,
    insertModalHeader: _propTypes2.default.func,
    insertModalBody: _propTypes2.default.func,
    insertModalFooter: _propTypes2.default.func,
    insertModal: _propTypes2.default.func,
    insertBtn: _propTypes2.default.func,
    deleteBtn: _propTypes2.default.func,
    showSelectedOnlyBtn: _propTypes2.default.func,
    exportCSVBtn: _propTypes2.default.func,
    clearSearchBtn: _propTypes2.default.func,
    searchField: _propTypes2.default.func,
    searchPanel: _propTypes2.default.func,
    btnGroup: _propTypes2.default.func,
    toolBar: _propTypes2.default.func,
    sizePerPageDropDown: _propTypes2.default.func,
    paginationPanel: _propTypes2.default.func,
    searchPosition: _propTypes2.default.string,
    expandRowBgColor: _propTypes2.default.string,
    expandBy: _propTypes2.default.string,
    expanding: _propTypes2.default.array,
    onExpand: _propTypes2.default.func,
    onlyOneExpanding: _propTypes2.default.bool,
    expandBodyClass: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    expandParentClass: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    beforeShowError: _propTypes2.default.func,
    printToolBar: _propTypes2.default.bool,
    insertFailIndicator: _propTypes2.default.string,
    noAutoBOM: _propTypes2.default.bool,
    expandAll: _propTypes2.default.bool,
    hideRowOnExpand: _propTypes2.default.bool
  }),
  fetchInfo: _propTypes2.default.shape({
    dataTotalSize: _propTypes2.default.number
  }),
  renderAlert: _propTypes2.default.bool,
  exportCSV: _propTypes2.default.bool,
  csvFileName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  ignoreSinglePage: _propTypes2.default.bool,
  expandableRow: _propTypes2.default.func,
  expandComponent: _propTypes2.default.func,
  autoCollapse: _propTypes2.default.shape({
    sort: _propTypes2.default.bool,
    filter: _propTypes2.default.bool,
    search: _propTypes2.default.bool
  }),
  expandColumnOptions: _propTypes2.default.shape({
    columnWidth: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    expandColumnVisible: _propTypes2.default.bool,
    expandColumnComponent: _propTypes2.default.func,
    expandedColumnHeaderComponent: _propTypes2.default.func,
    expandColumnBeforeSelectColumn: _propTypes2.default.bool
  }),
  footer: _propTypes2.default.bool
};
BootstrapTable.defaultProps = {
  version: '3',
  replace: false,
  scrollTop: undefined,
  expandComponent: undefined,
  expandableRow: undefined,
  expandColumnOptions: {
    expandColumnVisible: false,
    expandColumnComponent: undefined,
    expandedColumnHeaderComponent: undefined,
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
  withoutTabIndex: false,
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
    customComponent: undefined,
    onlyUnselectVisible: false
  },
  cellEdit: {
    mode: _Const2.default.CELL_EDIT_NONE,
    blurToSave: false,
    blurToEscape: false,
    beforeSaveCell: undefined,
    afterSaveCell: undefined,
    nonEditableRows: undefined
  },
  insertRow: false,
  deleteRow: false,
  search: false,
  multiColumnSearch: false,
  strictSearch: undefined,
  multiColumnSort: 1,
  columnFilter: false,
  trClassName: '',
  trStyle: undefined,
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
  tableFooterClass: null,
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
    toolbarPosition: _Const2.default.TOOLBAR_POS_TOP,
    hideSizePerPage: false,
    hidePageListOnlyOnePage: false,
    alwaysShowAllBtns: false,
    withFirstAndLast: true,
    keepSizePerPageState: false,
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
    pageStartIndex: 1,
    searchDelayTime: undefined,
    excludeCSVHeader: false,
    exportCSVText: _Const2.default.EXPORT_CSV_TEXT,
    exportCSVSeparator: _Const2.default.DEFAULT_CSV_SEPARATOR,
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
    onExpand: undefined,
    onlyOneExpanding: false,
    expandBodyClass: null,
    expandParentClass: null,
    beforeShowError: undefined,
    printToolBar: true,
    insertFailIndicator: _Const2.default.INSERT_FAIL_INDICATOR,
    noAutoBOM: true,
    expandAll: false,
    hideRowOnExpand: false
  },
  fetchInfo: {
    dataTotalSize: 0
  },
  renderAlert: true,
  exportCSV: false,
  csvFileName: 'spreadsheet.csv',
  ignoreSinglePage: false,
  autoCollapse: {
    sort: _Const2.default.AUTO_COLLAPSE_WHEN_SORT,
    filter: _Const2.default.AUTO_COLLAPSE_WHEN_FILTER,
    search: _Const2.default.AUTO_COLLAPSE_WHEN_SEARCH
  },
  footer: false
};

var _default = BootstrapTable;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(BootstrapTable, 'BootstrapTable', '/home/nogi/nogi/forks/react-bootstrap-table/src/BootstrapTable.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/nogi/nogi/forks/react-bootstrap-table/src/BootstrapTable.js');
}();

;