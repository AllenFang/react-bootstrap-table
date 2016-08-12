/* eslint no-alert: 0 */
/* eslint max-len: 0 */
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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

var _csv_export_util = require('./csv_export_util');

var _csv_export_util2 = _interopRequireDefault(_csv_export_util);

var _Filter = require('./Filter');

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

      if (_this.isRemoteDataSource()) {
        _this.store.setSortInfo(order, sortField);
        return;
      }

      var result = _this.store.sort(order, sortField).get();
      _this.setState({
        data: result
      });
    };

    this.handlePaginationData = function (page, sizePerPage) {
      var _props$options = _this.props.options;
      var onPageChange = _props$options.onPageChange;
      var pageStartIndex = _props$options.pageStartIndex;

      if (onPageChange) {
        onPageChange(page, sizePerPage);
      }

      _this.setState({
        currPage: page,
        sizePerPage: sizePerPage
      });

      if (_this.isRemoteDataSource()) {
        return;
      }

      // We calculate an offset here in order to properly fetch the indexed data,
      // despite the page start index not always being 1
      var normalizedPage = undefined;
      if (pageStartIndex !== undefined) {
        var offset = Math.abs(_Const2['default'].PAGE_START_INDEX - pageStartIndex);
        normalizedPage = page + offset;
      } else {
        normalizedPage = page;
      }

      var result = _this.store.page(normalizedPage, sizePerPage).get();

      _this.setState({ data: result });
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

    this.handleRowMouseOut = function (row, event) {
      if (_this.props.options.onRowMouseOut) {
        _this.props.options.onRowMouseOut(row, event);
      }
    };

    this.handleRowMouseOver = function (row, event) {
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
      var keyField = _this.store.getKeyField();
      var _props$selectRow = _this.props.selectRow;
      var onSelectAll = _props$selectRow.onSelectAll;
      var unselectable = _props$selectRow.unselectable;

      var selectedRowKeys = [];
      var result = true;
      var rows = _this.store.get();

      if (isSelected && unselectable && unselectable.length > 0) {
        rows = rows.filter(function (r) {
          return unselectable.indexOf(r[keyField]) === -1;
        });
      }

      if (onSelectAll) {
        result = _this.props.selectRow.onSelectAll(isSelected, isSelected ? rows : _this.store.getRowByKey(_this.state.selectedRowKeys));
      }

      if (typeof result == 'undefined' || result !== false) {
        if (isSelected) {
          selectedRowKeys = Array.isArray(result) ? result : rows.map(function (r) {
            return r[keyField];
          });
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
        currPage: _this.props.options.pageStartIndex || _Const2['default'].PAGE_START_INDEX
      });
    };

    this.handleSelectRow = function (row, isSelected, e) {
      var result = true;
      var currSelected = _this.store.getSelectedRowKeys();
      var rowKey = row[_this.store.getKeyField()];
      var selectRow = _this.props.selectRow;

      if (selectRow.onSelect) {
        result = selectRow.onSelect(row, isSelected, e);
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
      var onAddRow = _this.props.options.onAddRow;

      if (onAddRow) {
        var colInfos = _this.store.getColInfos();
        onAddRow(newObj, colInfos);
      }

      if (_this.isRemoteDataSource()) {
        if (_this.props.options.afterInsertRow) {
          _this.props.options.afterInsertRow(newObj);
        }
        return null;
      }

      try {
        _this.store.add(newObj);
      } catch (e) {
        return e;
      }
      _this._handleAfterAddingRow(newObj);
    };

    this.getPageByRowKey = function (rowKey) {
      var sizePerPage = _this.state.sizePerPage;

      var currentData = _this.store.getCurrentDisplayData();
      var keyField = _this.store.getKeyField();
      var result = currentData.findIndex(function (x) {
        return x[keyField] === rowKey;
      });
      if (result > -1) {
        return parseInt(result / sizePerPage, 10) + 1;
      } else {
        return result;
      }
    };

    this.handleDropRow = function (rowKeys) {
      var dropRowKeys = rowKeys ? rowKeys : _this.store.getSelectedRowKeys();
      // add confirm before the delete action if that option is set.
      if (dropRowKeys && dropRowKeys.length > 0) {
        if (_this.props.options.handleConfirmDeleteRow) {
          _this.props.options.handleConfirmDeleteRow(function () {
            _this.deleteRow(dropRowKeys);
          }, dropRowKeys);
        } else if (confirm('Are you sure you want to delete?')) {
          _this.deleteRow(dropRowKeys);
        }
      }
    };

    this.handleFilterData = function (filterObj) {
      var onFilterChange = _this.props.options.onFilterChange;

      if (onFilterChange) {
        var colInfos = _this.store.getColInfos();
        onFilterChange(filterObj, colInfos);
      }

      _this.setState({
        currPage: _this.props.options.pageStartIndex || _Const2['default'].PAGE_START_INDEX
      });

      if (_this.isRemoteDataSource()) {
        if (_this.props.options.afterColumnFilter) {
          _this.props.options.afterColumnFilter(filterObj, _this.store.getDataIgnoringPagination());
        }
        return;
      }

      _this.store.filter(filterObj);

      var sortObj = _this.store.getSortInfo();

      if (sortObj) {
        _this.store.sort(sortObj.order, sortObj.sortField);
      }

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
        data: result
      });
    };

    this.handleExportCSV = function () {
      var result = {};

      var csvFileName = _this.props.csvFileName;
      var onExportToCSV = _this.props.options.onExportToCSV;

      if (onExportToCSV) {
        result = onExportToCSV();
      } else {
        result = _this.store.getDataIgnoringPagination();
      }

      var keys = [];
      _this.props.children.map(function (column) {
        if (column.props['export'] === true || typeof column.props['export'] === 'undefined' && column.props.hidden === false) {
          keys.push({
            field: column.props.dataField,
            format: column.props.csvFormat,
            header: column.props.csvHeader || column.props.dataField
          });
        }
      });

      if (typeof csvFileName === 'function') {
        csvFileName = csvFileName();
      }

      (0, _csv_export_util2['default'])(result, keys, csvFileName);
    };

    this.handleSearch = function (searchText) {
      var onSearchChange = _this.props.options.onSearchChange;

      if (onSearchChange) {
        var colInfos = _this.store.getColInfos();
        onSearchChange(searchText, colInfos, _this.props.multiColumnSearch);
      }

      _this.setState({
        currPage: _this.props.options.pageStartIndex || _Const2['default'].PAGE_START_INDEX
      });

      if (_this.isRemoteDataSource()) {
        if (_this.props.options.afterSearch) {
          _this.props.options.afterSearch(searchText, _this.store.getDataIgnoringPagination());
        }
        return;
      }

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
        data: result
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
      if (typeof _this.props.height === 'number' && !isNaN(_this.props.height) || _this.props.height.indexOf('%') === -1) {
        _this.refs.body.refs.container.style.height = parseFloat(_this.props.height, 10) - _this.refs.header.refs.container.offsetHeight + 'px';
      }
    };

    this.isIE = false;
    this._attachCellEditFunc();
    if (_util2['default'].canUseDOM()) {
      this.isIE = document.documentMode;
    }

    this.store = new _storeTableDataStore.TableDataStore(this.props.data.slice());

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
    var currPage = _Const2['default'].PAGE_START_INDEX;
    if (typeof this.props.options.page !== 'undefined') {
      currPage = this.props.options.page;
    } else if (typeof this.props.options.pageStartIndex !== 'undefined') {
      currPage = this.props.options.pageStartIndex;
    }

    this.state = {
      data: this.getTableData(),
      currPage: currPage,
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

      this.colInfos = this.getColumnsDescription(props).reduce(function (prev, curr) {
        prev[curr.name] = curr;
        return prev;
      }, {});

      if (!isKeyFieldDefined && !keyField) {
        throw 'Error. No any key column defined in TableHeaderColumn.\n            Use \'isKey={true}\' to specify a unique column after version 0.5.4.';
      }

      this.store.setProps({
        isPagination: props.pagination,
        keyField: keyField,
        colInfos: this.colInfos,
        multiColumnSearch: props.multiColumnSearch,
        remote: this.isRemoteDataSource()
      });
    }
  }, {
    key: 'getTableData',
    value: function getTableData() {
      var result = [];
      var _props = this.props;
      var options = _props.options;
      var pagination = _props.pagination;

      var sortName = options.defaultSortName || options.sortName;
      var sortOrder = options.defaultSortOrder || options.sortOrder;
      var searchText = options.defaultSearch;
      if (sortName && sortOrder) {
        this.store.sort(sortOrder, sortName);
      }

      if (searchText) {
        this.store.search(searchText);
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
          filterValue: column.props.filterValue,
          editable: column.props.editable,
          customEditor: column.props.customEditor,
          hidden: column.props.hidden,
          hiddenOnInsert: column.props.hiddenOnInsert,
          searchable: column.props.searchable,
          className: column.props.columnClassName,
          columnTitle: column.props.columnTitle,
          width: column.props.width,
          text: column.props.children,
          sortFunc: column.props.sortFunc,
          sortFuncExtraData: column.props.sortFuncExtraData,
          'export': column.props['export'],
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
        this.setState({
          data: nextProps.data.slice(),
          currPage: page
        });
      } else {
        // #125
        if (!options.page && page > Math.ceil(nextProps.data.length / sizePerPage)) {
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
        { className: 'react-bs-table-container', style: this.props.containerStyle },
        toolBar,
        _react2['default'].createElement(
          'div',
          { className: 'react-bs-table', ref: 'table', style: _extends({}, style, this.props.tableStyle),
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave },
          _react2['default'].createElement(
            _TableHeader2['default'],
            {
              ref: 'header',
              tableHeaderClass: this.props.tableHeaderClass,
              style: this.props.headerStyle,
              rowSelectType: this.props.selectRow.mode,
              customComponent: this.props.selectRow.customComponent,
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
            tableBodyClass: this.props.tableBodyClass,
            style: _extends({}, style, this.props.bodyStyle),
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
      if (this.store.isEmpty()) return false;

      var defaultSelectRowKeys = this.store.getSelectedRowKeys();
      var allRowKeys = this.store.getAllRowkey();

      if (defaultSelectRowKeys.length === 0) return false;
      var match = 0;
      var noFound = 0;
      defaultSelectRowKeys.forEach(function (selected) {
        if (allRowKeys.indexOf(selected) !== -1) match++;else noFound++;
      });

      if (noFound === defaultSelectRowKeys.length) return false;
      return match === allRowKeys.length ? true : 'indeterminate';
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
    key: 'getTableDataIgnorePaging',
    value: function getTableDataIgnorePaging() {
      return this.store.getCurrentDisplayData();
    }
  }, {
    key: 'deleteRow',
    value: function deleteRow(dropRowKeys) {
      var onDeleteRow = this.props.options.onDeleteRow;

      if (onDeleteRow) {
        onDeleteRow(dropRowKeys);
      }

      this.store.setSelectedRowKey([]); // clear selected row key

      if (this.isRemoteDataSource()) {
        if (this.props.options.afterDeleteRow) {
          this.props.options.afterDeleteRow(dropRowKeys);
        }
        return;
      }

      this.store.remove(dropRowKeys); // remove selected Row
      var result = undefined;
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

        if (Math.ceil(dataSize / this.state.sizePerPage) <= 1 && this.props.ignoreSinglePage) return null;
        return _react2['default'].createElement(
          'div',
          { className: 'react-bs-table-pagination' },
          _react2['default'].createElement(_paginationPaginationList2['default'], {
            ref: 'pagination',
            currPage: this.state.currPage,
            changePage: this.handlePaginationData,
            sizePerPage: this.state.sizePerPage,
            sizePerPageList: options.sizePerPageList || _Const2['default'].SIZE_PER_PAGE_LIST,
            pageStartIndex: options.pageStartIndex,
            paginationShowsTotal: options.paginationShowsTotal,
            paginationSize: options.paginationSize || _Const2['default'].PAGINATION_SIZE,
            remote: this.isRemoteDataSource(),
            dataSize: dataSize,
            onSizePerPageList: options.onSizePerPageList,
            prePage: options.prePage || _Const2['default'].PRE_PAGE,
            nextPage: options.nextPage || _Const2['default'].NEXT_PAGE,
            firstPage: options.firstPage || _Const2['default'].FIRST_PAGE,
            lastPage: options.lastPage || _Const2['default'].LAST_PAGE,
            hideSizePerPage: options.hideSizePerPage })
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
          columns = children.map(function (column, r) {
            var props = column.props;

            return {
              name: props.children,
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
            name: children.props.children,
            field: children.props.dataField,
            editable: children.props.editable,
            hiddenOnInsert: children.props.hiddenOnInsert
          }];
        }
        return _react2['default'].createElement(
          'div',
          { className: 'react-bs-table-tool-bar' },
          _react2['default'].createElement(_toolbarToolBar2['default'], {
            defaultSearch: this.props.options.defaultSearch,
            clearSearch: this.props.options.clearSearch,
            searchDelayTime: this.props.options.searchDelayTime,
            enableInsert: insertRow,
            enableDelete: deleteRow,
            enableSearch: search,
            enableExportCSV: this.props.exportCSV,
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
  height: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  maxHeight: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
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
    customComponent: _react.PropTypes.func,
    bgColor: _react.PropTypes.string,
    selected: _react.PropTypes.array,
    onSelect: _react.PropTypes.func,
    onSelectAll: _react.PropTypes.func,
    clickToSelect: _react.PropTypes.bool,
    hideSelectColumn: _react.PropTypes.bool,
    clickToSelectAndEditCell: _react.PropTypes.bool,
    showOnlySelected: _react.PropTypes.bool,
    unselectable: _react.PropTypes.array
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
  tableStyle: _react.PropTypes.object,
  containerStyle: _react.PropTypes.object,
  headerStyle: _react.PropTypes.object,
  bodyStyle: _react.PropTypes.object,
  tableHeaderClass: _react.PropTypes.string,
  tableBodyClass: _react.PropTypes.string,
  options: _react.PropTypes.shape({
    clearSearch: _react.PropTypes.bool,
    sortName: _react.PropTypes.string,
    sortOrder: _react.PropTypes.string,
    defaultSortName: _react.PropTypes.string,
    defaultSortOrder: _react.PropTypes.string,
    sortIndicator: _react.PropTypes.bool,
    afterTableComplete: _react.PropTypes.func,
    afterDeleteRow: _react.PropTypes.func,
    afterInsertRow: _react.PropTypes.func,
    afterSearch: _react.PropTypes.func,
    afterColumnFilter: _react.PropTypes.func,
    onRowClick: _react.PropTypes.func,
    page: _react.PropTypes.number,
    pageStartIndex: _react.PropTypes.number,
    paginationShowsTotal: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.func]),
    sizePerPageList: _react.PropTypes.array,
    sizePerPage: _react.PropTypes.number,
    paginationSize: _react.PropTypes.number,
    hideSizePerPage: _react.PropTypes.bool,
    onSortChange: _react.PropTypes.func,
    onPageChange: _react.PropTypes.func,
    onSizePerPageList: _react.PropTypes.func,
    onFilterChange: _react2['default'].PropTypes.func,
    onSearchChange: _react2['default'].PropTypes.func,
    onAddRow: _react2['default'].PropTypes.func,
    onExportToCSV: _react2['default'].PropTypes.func,
    noDataText: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]),
    handleConfirmDeleteRow: _react.PropTypes.func,
    prePage: _react.PropTypes.string,
    nextPage: _react.PropTypes.string,
    firstPage: _react.PropTypes.string,
    lastPage: _react.PropTypes.string,
    searchDelayTime: _react.PropTypes.number,
    exportCSVText: _react.PropTypes.string,
    insertText: _react.PropTypes.string,
    deleteText: _react.PropTypes.string,
    saveText: _react.PropTypes.string,
    closeText: _react.PropTypes.string,
    ignoreEditable: _react.PropTypes.bool,
    defaultSearch: _react.PropTypes.string
  }),
  fetchInfo: _react.PropTypes.shape({
    dataTotalSize: _react.PropTypes.number
  }),
  exportCSV: _react.PropTypes.bool,
  csvFileName: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
  ignoreSinglePage: _react.PropTypes.bool
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
    showOnlySelected: false,
    unselectable: [],
    customComponent: undefined
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
  tableStyle: undefined,
  containerStyle: undefined,
  headerStyle: undefined,
  bodyStyle: undefined,
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
    onMouseLeave: undefined,
    onMouseEnter: undefined,
    onRowMouseOut: undefined,
    onRowMouseOver: undefined,
    page: undefined,
    paginationShowsTotal: false,
    sizePerPageList: _Const2['default'].SIZE_PER_PAGE_LIST,
    sizePerPage: undefined,
    paginationSize: _Const2['default'].PAGINATION_SIZE,
    hideSizePerPage: false,
    onSizePerPageList: undefined,
    noDataText: undefined,
    handleConfirmDeleteRow: undefined,
    prePage: _Const2['default'].PRE_PAGE,
    nextPage: _Const2['default'].NEXT_PAGE,
    firstPage: _Const2['default'].FIRST_PAGE,
    lastPage: _Const2['default'].LAST_PAGE,
    pageStartIndex: undefined,
    searchDelayTime: undefined,
    exportCSVText: _Const2['default'].EXPORT_CSV_TEXT,
    insertText: _Const2['default'].INSERT_BTN_TEXT,
    deleteText: _Const2['default'].DELETE_BTN_TEXT,
    saveText: _Const2['default'].SAVE_BTN_TEXT,
    closeText: _Const2['default'].CLOSE_BTN_TEXT,
    ignoreEditable: false,
    defaultSearch: ''
  },
  fetchInfo: {
    dataTotalSize: 0
  },
  exportCSV: false,
  csvFileName: 'spreadsheet.csv',
  ignoreSinglePage: false
};

exports['default'] = BootstrapTable;
module.exports = exports['default'];