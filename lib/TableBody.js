'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

var _Const = require('./Const');

var _Const2 = _interopRequireDefault(_Const);

var _TableRow = require('./TableRow');

var _TableRow2 = _interopRequireDefault(_TableRow);

var _TableColumn = require('./TableColumn');

var _TableColumn2 = _interopRequireDefault(_TableColumn);

var _TableEditColumn = require('./TableEditColumn');

var _TableEditColumn2 = _interopRequireDefault(_TableEditColumn);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ExpandComponent = require('./ExpandComponent');

var _ExpandComponent2 = _interopRequireDefault(_ExpandComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableBody = function (_Component) {
  _inherits(TableBody, _Component);

  function TableBody(props) {
    _classCallCheck(this, TableBody);

    var _this = _possibleConstructorReturn(this, (TableBody.__proto__ || Object.getPrototypeOf(TableBody)).call(this, props));

    _this.handleCellKeyDown = function () {
      return _this.__handleCellKeyDown__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleRowMouseOut = function () {
      return _this.__handleRowMouseOut__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleRowMouseOver = function () {
      return _this.__handleRowMouseOver__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleRowClick = function () {
      return _this.__handleRowClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleRowDoubleClick = function () {
      return _this.__handleRowDoubleClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleSelectRow = function () {
      return _this.__handleSelectRow__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleSelectRowColumChange = function () {
      return _this.__handleSelectRowColumChange__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleClickCell = function () {
      return _this.__handleClickCell__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleEditCell = function () {
      return _this.__handleEditCell__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.nextEditableCell = function () {
      return _this.__nextEditableCell__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleCompleteEditCell = function () {
      return _this.__handleCompleteEditCell__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.cancelEditCell = function () {
      return _this.__cancelEditCell__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleClickonSelectColumn = function () {
      return _this.__handleClickonSelectColumn__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.getHeaderColGrouop = function () {
      return _this.__getHeaderColGrouop__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = {
      currEditCell: null
    };
    return _this;
  }

  _createClass(TableBody, [{
    key: '__getHeaderColGrouop__REACT_HOT_LOADER__',
    value: function __getHeaderColGrouop__REACT_HOT_LOADER__() {
      return this.__getHeaderColGrouop__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleClickonSelectColumn__REACT_HOT_LOADER__',
    value: function __handleClickonSelectColumn__REACT_HOT_LOADER__() {
      return this.__handleClickonSelectColumn__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__cancelEditCell__REACT_HOT_LOADER__',
    value: function __cancelEditCell__REACT_HOT_LOADER__() {
      return this.__cancelEditCell__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleCompleteEditCell__REACT_HOT_LOADER__',
    value: function __handleCompleteEditCell__REACT_HOT_LOADER__() {
      return this.__handleCompleteEditCell__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__nextEditableCell__REACT_HOT_LOADER__',
    value: function __nextEditableCell__REACT_HOT_LOADER__() {
      return this.__nextEditableCell__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleEditCell__REACT_HOT_LOADER__',
    value: function __handleEditCell__REACT_HOT_LOADER__() {
      return this.__handleEditCell__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleClickCell__REACT_HOT_LOADER__',
    value: function __handleClickCell__REACT_HOT_LOADER__() {
      return this.__handleClickCell__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleSelectRowColumChange__REACT_HOT_LOADER__',
    value: function __handleSelectRowColumChange__REACT_HOT_LOADER__() {
      return this.__handleSelectRowColumChange__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleSelectRow__REACT_HOT_LOADER__',
    value: function __handleSelectRow__REACT_HOT_LOADER__() {
      return this.__handleSelectRow__REACT_HOT_LOADER__.apply(this, arguments);
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
    key: '__handleCellKeyDown__REACT_HOT_LOADER__',
    value: function __handleCellKeyDown__REACT_HOT_LOADER__() {
      return this.__handleCellKeyDown__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          cellEdit = _props.cellEdit,
          beforeShowError = _props.beforeShowError,
          x = _props.x,
          y = _props.y,
          keyBoardNav = _props.keyBoardNav,
          trStyle = _props.trStyle,
          version = _props.version;

      var customTableClasses = {
        'table-striped': this.props.striped,
        'table-bordered': this.props.bordered,
        'table-hover': this.props.hover
      };
      if (this.props.condensed) {
        if (_util2.default.isBootstrap4(version)) customTableClasses['table-sm'] = true;else customTableClasses['table-condensed'] = true;
      }
      var tableClasses = (0, _classnames2.default)('table', customTableClasses, this.props.tableBodyClass);

      var noneditableRows = cellEdit.nonEditableRows && cellEdit.nonEditableRows() || [];
      var unselectable = this.props.selectRow.unselectable || [];
      var isSelectRowDefined = _util2.default.isSelectRowDefined(this.props.selectRow.mode);
      var tableHeader = _util2.default.renderColGroup(this.props.columns, this.props.selectRow, this.props.expandColumnOptions, version);
      var inputType = this.props.selectRow.mode === _Const2.default.ROW_SELECT_SINGLE ? 'radio' : 'checkbox';
      var CustomComponent = this.props.selectRow.customComponent;
      var enableKeyBoardNav = keyBoardNav === true || (typeof keyBoardNav === 'undefined' ? 'undefined' : _typeof(keyBoardNav)) === 'object';
      var customEditAndNavStyle = (typeof keyBoardNav === 'undefined' ? 'undefined' : _typeof(keyBoardNav)) === 'object' ? keyBoardNav.customStyleOnEditCell : null;
      var customNavStyle = (typeof keyBoardNav === 'undefined' ? 'undefined' : _typeof(keyBoardNav)) === 'object' ? keyBoardNav.customStyle : null;
      var ExpandColumnCustomComponent = this.props.expandColumnOptions.expandColumnComponent;
      var expandColSpan = this.props.columns.filter(function (col) {
        return col && !col.hidden;
      }).length;
      if (isSelectRowDefined && !this.props.selectRow.hideSelectColumn) {
        expandColSpan += 1;
      }
      var tabIndex = 1;
      if (this.props.expandColumnOptions.expandColumnVisible) {
        expandColSpan += 1;
      }

      var tableRows = this.props.data.map(function (data, r) {
        var tableColumns = this.props.columns.filter(function (_) {
          return _ != null;
        }).map(function (column, i) {
          var fieldValue = data[column.name];
          var isFocusCell = r === y && i === x;
          if (column.name !== this.props.keyField && // Key field can't be edit
          column.editable && // column is editable? default is true, user can set it false
          column.editable.readOnly !== true && this.state.currEditCell !== null && this.state.currEditCell.rid === r && this.state.currEditCell.cid === i && noneditableRows.indexOf(data[this.props.keyField]) === -1) {
            var editable = column.editable;
            var format = column.format ? function (value) {
              return column.format(value, data, column.formatExtraData, r).replace(/<.*?>/g, '');
            } : false;
            if (_util2.default.isFunction(column.editable)) {
              editable = column.editable(fieldValue, data, r, i);
            }

            return _react2.default.createElement(_TableEditColumn2.default, {
              completeEdit: this.handleCompleteEditCell
              // add by bluespring for column editor customize
              , editable: editable,
              attrs: column.editAttrs,
              customEditor: column.customEditor,
              format: column.format ? format : false,
              key: i,
              blurToSave: cellEdit.blurToSave,
              blurToEscape: cellEdit.blurToEscape,
              onTab: this.handleEditCell,
              rowIndex: r,
              colIndex: i,
              row: data,
              fieldValue: fieldValue,
              className: column.editClassName,
              invalidColumnClassName: column.invalidEditColumnClassName,
              beforeShowError: beforeShowError,
              isFocus: isFocusCell,
              customStyleWithNav: customEditAndNavStyle });
          } else {
            // add by bluespring for className customize
            var formattedValue = void 0;
            var columnChild = fieldValue && fieldValue.toString();
            var columnTitle = null;
            var tdClassName = column.className;
            var tdStyles = column.style;
            if (_util2.default.isFunction(column.className)) {
              tdClassName = column.className(fieldValue, data, r, i);
            }

            if (_util2.default.isFunction(column.style)) {
              tdStyles = column.style(fieldValue, data, r, i);
            }

            if (typeof column.format !== 'undefined') {
              formattedValue = column.format(fieldValue, data, column.formatExtraData, r);
              if (!_react2.default.isValidElement(formattedValue)) {
                columnChild = _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: formattedValue } });
              } else {
                columnChild = formattedValue;
              }
            }
            if (_util2.default.isFunction(column.columnTitle)) {
              columnTitle = column.columnTitle(fieldValue, data, r, i);
            } else if (typeof column.columnTitle === 'string') {
              columnTitle = column.columnTitle;
            } else if (column.columnTitle) {
              if (formattedValue) columnTitle = formattedValue.toString();else if (fieldValue) columnTitle = fieldValue.toString();
            }
            return _react2.default.createElement(
              _TableColumn2.default,
              { key: i,
                cIndex: i,
                rIndex: r,
                dataAlign: column.align,
                className: tdClassName,
                columnTitle: columnTitle,
                cellEdit: cellEdit,
                hidden: column.hidden,
                onEdit: this.handleEditCell,
                width: column.width,
                onClick: this.handleClickCell,
                attrs: column.attrs,
                style: tdStyles,
                tabIndex: tabIndex++ + '',
                isFocus: isFocusCell,
                keyBoardNav: enableKeyBoardNav,
                onKeyDown: this.handleCellKeyDown,
                customNavStyle: customNavStyle,
                row: data,
                withoutTabIndex: this.props.withoutTabIndex },
              columnChild
            );
          }
        }, this);
        var key = data[this.props.keyField];
        var disable = unselectable.indexOf(key) !== -1;
        var selected = this.props.selectedRowKeys.indexOf(key) !== -1;
        var selectRowColumn = isSelectRowDefined && !this.props.selectRow.hideSelectColumn ? this.renderSelectRowColumn(selected, inputType, disable, CustomComponent, r, data) : null;
        var expandedRowColumn = this.renderExpandRowColumn(this.props.expandableRow && this.props.expandableRow(data), this.props.expanding.indexOf(key) > -1, ExpandColumnCustomComponent, r);
        var haveExpandContent = this.props.expandableRow && this.props.expandableRow(data);
        var isExpanding = haveExpandContent && this.props.expanding.indexOf(key) > -1;
        var hideRowOnExpand = this.props.hideRowOnExpand;
        // add by bluespring for className customize

        var trClassName = this.props.trClassName;
        if (_util2.default.isFunction(this.props.trClassName)) {
          trClassName = this.props.trClassName(data, r);
        }
        if (isExpanding && this.props.expandParentClass) {
          trClassName += _util2.default.isFunction(this.props.expandParentClass) ? ' ' + this.props.expandParentClass(data, r) : ' ' + this.props.expandParentClass;
        }
        var result = [_react2.default.createElement(
          _TableRow2.default,
          { isSelected: selected, key: key, className: trClassName,
            index: r,
            row: data,
            selectRow: isSelectRowDefined ? this.props.selectRow : undefined,
            enableCellEdit: cellEdit.mode !== _Const2.default.CELL_EDIT_NONE,
            onRowClick: this.handleRowClick,
            onRowDoubleClick: this.handleRowDoubleClick,
            onRowMouseOver: this.handleRowMouseOver,
            onRowMouseOut: this.handleRowMouseOut,
            onSelectRow: this.handleSelectRow,
            onExpandRow: this.handleClickCell,
            unselectableRow: disable,
            style: trStyle,
            hidden: isExpanding && hideRowOnExpand,
            dbClickToEdit: cellEdit.mode === _Const2.default.CELL_EDIT_DBCLICK },
          this.props.expandColumnOptions.expandColumnVisible && this.props.expandColumnOptions.expandColumnBeforeSelectColumn && expandedRowColumn,
          selectRowColumn,
          this.props.expandColumnOptions.expandColumnVisible && !this.props.expandColumnOptions.expandColumnBeforeSelectColumn && expandedRowColumn,
          tableColumns
        )];

        if (haveExpandContent) {
          var expandBodyClass = _util2.default.isFunction(this.props.expandBodyClass) ? this.props.expandBodyClass(data, r, isExpanding) : this.props.expandBodyClass;
          result.push(_react2.default.createElement(
            _ExpandComponent2.default,
            {
              key: key + '-expand',
              row: data,
              className: expandBodyClass,
              bgColor: this.props.expandRowBgColor || this.props.selectRow.bgColor || undefined,
              hidden: !isExpanding,
              colSpan: expandColSpan,
              width: "100%" },
            this.props.expandComponent(data)
          ));
        }
        return result;
      }, this);

      if (tableRows.length === 0 && !this.props.withoutNoDataText) {
        var colSpan = this.props.columns.filter(function (c) {
          return !c.hidden;
        }).length + (isSelectRowDefined && !this.props.selectRow.hideSelectColumn ? 1 : 0) + (this.props.expandColumnOptions.expandColumnVisible ? 1 : 0);
        tableRows = [_react2.default.createElement(
          _TableRow2.default,
          { key: '##table-empty##', style: trStyle },
          _react2.default.createElement(
            'td',
            { 'data-toggle': 'collapse',
              colSpan: colSpan,
              className: 'react-bs-table-no-data' },
            this.props.noDataText || _Const2.default.NO_DATA_TEXT
          )
        )];
      }

      return _react2.default.createElement(
        'div',
        {
          ref: function ref(node) {
            return _this2.container = node;
          },
          className: (0, _classnames2.default)('react-bs-container-body', this.props.bodyContainerClass),
          style: this.props.style },
        _react2.default.createElement(
          'table',
          { className: tableClasses },
          _react2.default.cloneElement(tableHeader, { ref: function ref(node) {
              return _this2.header = node;
            } }),
          _react2.default.createElement(
            'tbody',
            { ref: function ref(node) {
                return _this2.tbody = node;
              } },
            tableRows
          )
        )
      );
    }
  }, {
    key: '__handleCellKeyDown__REACT_HOT_LOADER__',
    value: function __handleCellKeyDown__REACT_HOT_LOADER__(e, lastEditCell) {
      e.preventDefault();
      var _props2 = this.props,
          keyBoardNav = _props2.keyBoardNav,
          onNavigateCell = _props2.onNavigateCell,
          cellEdit = _props2.cellEdit,
          selectedRowKeys = _props2.selectedRowKeys;

      var offset = void 0;
      if (e.keyCode === 37) {
        offset = { x: -1, y: 0 };
      } else if (e.keyCode === 38) {
        offset = { x: 0, y: -1 };
      } else if (e.keyCode === 39 || e.keyCode === 9) {
        offset = { x: 1, y: 0 };
        if (e.keyCode === 9 && lastEditCell) {
          offset = _extends({}, offset, {
            lastEditCell: lastEditCell
          });
        }
      } else if (e.keyCode === 40) {
        offset = { x: 0, y: 1 };
      } else if (e.keyCode === 13) {
        var rowIndex = e.target.parentElement.rowIndex + 1;
        var enterToEdit = (typeof keyBoardNav === 'undefined' ? 'undefined' : _typeof(keyBoardNav)) === 'object' ? keyBoardNav.enterToEdit : false;
        var enterToExpand = (typeof keyBoardNav === 'undefined' ? 'undefined' : _typeof(keyBoardNav)) === 'object' ? keyBoardNav.enterToExpand : false;
        var enterToSelect = (typeof keyBoardNav === 'undefined' ? 'undefined' : _typeof(keyBoardNav)) === 'object' ? keyBoardNav.enterToSelect : false;

        if (cellEdit && enterToEdit) {
          this.handleEditCell(rowIndex, e.currentTarget.cellIndex, '', e);
        }

        if (enterToExpand) {
          this.handleClickCell(e, this.props.y + 1, this.props.x);
        }

        if (enterToSelect) {
          var isSelected = selectedRowKeys.indexOf(this.props.data[rowIndex - 1][this.props.keyField]) !== -1;
          this.handleSelectRow(rowIndex, !isSelected, e);
        }
      }
      if (offset && keyBoardNav) {
        onNavigateCell(offset);
      }
    }
  }, {
    key: '__handleRowMouseOut__REACT_HOT_LOADER__',
    value: function __handleRowMouseOut__REACT_HOT_LOADER__(rowIndex, event) {
      var targetRow = this.props.data[rowIndex];
      this.props.onRowMouseOut(targetRow, event);
    }
  }, {
    key: '__handleRowMouseOver__REACT_HOT_LOADER__',
    value: function __handleRowMouseOver__REACT_HOT_LOADER__(rowIndex, event) {
      var targetRow = this.props.data[rowIndex];
      this.props.onRowMouseOver(targetRow, event);
    }
  }, {
    key: '__handleRowClick__REACT_HOT_LOADER__',
    value: function __handleRowClick__REACT_HOT_LOADER__(rowIndex, cellIndex, event) {
      var _props3 = this.props,
          onRowClick = _props3.onRowClick,
          selectRow = _props3.selectRow;

      if (_util2.default.isSelectRowDefined(selectRow.mode)) cellIndex--;
      if (this._isExpandColumnVisible()) cellIndex--;
      onRowClick(this.props.data[rowIndex - 1], rowIndex - 1, cellIndex, event);
    }
  }, {
    key: '__handleRowDoubleClick__REACT_HOT_LOADER__',
    value: function __handleRowDoubleClick__REACT_HOT_LOADER__(rowIndex, event) {
      var onRowDoubleClick = this.props.onRowDoubleClick;

      var targetRow = this.props.data[rowIndex];
      onRowDoubleClick(targetRow, event);
    }
  }, {
    key: '__handleSelectRow__REACT_HOT_LOADER__',
    value: function __handleSelectRow__REACT_HOT_LOADER__(rowIndex, isSelected, e) {
      var selectedRow = void 0;
      var _props4 = this.props,
          data = _props4.data,
          onSelectRow = _props4.onSelectRow;

      data.forEach(function (row, i) {
        if (i === rowIndex - 1) {
          selectedRow = row;
          return false;
        }
      });
      onSelectRow(selectedRow, isSelected, e, rowIndex - 1);
    }
  }, {
    key: '__handleSelectRowColumChange__REACT_HOT_LOADER__',
    value: function __handleSelectRowColumChange__REACT_HOT_LOADER__(e, rowIndex) {
      if (!this.props.selectRow.clickToSelect || !this.props.selectRow.clickToSelectAndEditCell) {
        this.handleSelectRow(rowIndex + 1, e.currentTarget.checked, e);
      }
    }
  }, {
    key: '__handleClickCell__REACT_HOT_LOADER__',
    value: function __handleClickCell__REACT_HOT_LOADER__(event, rowIndex) {
      var columnIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
      var _props5 = this.props,
          columns = _props5.columns,
          keyField = _props5.keyField,
          expandBy = _props5.expandBy,
          expandableRow = _props5.expandableRow,
          _props5$selectRow = _props5.selectRow,
          mode = _props5$selectRow.mode,
          clickToExpand = _props5$selectRow.clickToExpand,
          hideSelectColumn = _props5$selectRow.hideSelectColumn,
          onlyOneExpanding = _props5.onlyOneExpanding;

      var isSelectRowDefined = _util2.default.isSelectRowDefined(mode);
      var selectRowAndExpand = isSelectRowDefined && !clickToExpand ? false : true;
      columnIndex = isSelectRowDefined && !hideSelectColumn ? columnIndex - 1 : columnIndex;
      columnIndex = this._isExpandColumnVisible() ? columnIndex - 1 : columnIndex;
      if (expandableRow && selectRowAndExpand && (expandBy === _Const2.default.EXPAND_BY_ROW ||
      /* Below will allow expanding trigger by clicking on selection column
      if configure as expanding by column */
      expandBy === _Const2.default.EXPAND_BY_COL && columnIndex < 0 || expandBy === _Const2.default.EXPAND_BY_COL && columns[columnIndex].expandable)) {
        var expanding = this.props.expanding;
        var rowKey = this.props.data[rowIndex - 1][keyField];
        var isRowExpanding = expanding.indexOf(rowKey) > -1;

        if (isRowExpanding) {
          // collapse
          expanding = expanding.filter(function (k) {
            return k !== rowKey;
          });
        } else {
          // expand
          if (onlyOneExpanding) expanding = [rowKey];else expanding.push(rowKey);
        }
        this.props.onExpand(expanding, rowKey, isRowExpanding, event);
      }
    }
  }, {
    key: '__handleEditCell__REACT_HOT_LOADER__',
    value: function __handleEditCell__REACT_HOT_LOADER__(rowIndex, columnIndex, action, e) {
      var selectRow = this.props.selectRow;

      var defineSelectRow = _util2.default.isSelectRowDefined(selectRow.mode);
      var expandColumnVisible = this._isExpandColumnVisible();
      if (defineSelectRow) {
        columnIndex--;
        if (selectRow.hideSelectColumn) columnIndex++;
      }
      if (expandColumnVisible) {
        columnIndex--;
      }
      rowIndex--;

      if (action === 'tab') {
        if (defineSelectRow && !selectRow.hideSelectColumn) columnIndex++;
        if (expandColumnVisible) columnIndex++;
        this.handleCompleteEditCell(e.target.value, rowIndex, columnIndex - 1);
        if (columnIndex >= this.props.columns.length) {
          this.handleCellKeyDown(e, true);
        } else {
          this.handleCellKeyDown(e);
        }

        var _nextEditableCell = this.nextEditableCell(rowIndex, columnIndex),
            nextRIndex = _nextEditableCell.nextRIndex,
            nextCIndex = _nextEditableCell.nextCIndex;

        rowIndex = nextRIndex;
        columnIndex = nextCIndex;
      }

      var stateObj = {
        currEditCell: {
          rid: rowIndex,
          cid: columnIndex
        }
      };

      if (this.props.selectRow.clickToSelectAndEditCell && this.props.cellEdit.mode !== _Const2.default.CELL_EDIT_DBCLICK) {
        var selected = this.props.selectedRowKeys.indexOf(this.props.data[rowIndex][this.props.keyField]) !== -1;
        this.handleSelectRow(rowIndex + 1, !selected, e);
      }
      this.setState(function () {
        return stateObj;
      });
    }
  }, {
    key: '__nextEditableCell__REACT_HOT_LOADER__',
    value: function __nextEditableCell__REACT_HOT_LOADER__(rIndex, cIndex) {
      var keyField = this.props.keyField;

      var nextRIndex = rIndex;
      var nextCIndex = cIndex;
      var row = void 0;
      var column = void 0;
      do {
        if (nextCIndex >= this.props.columns.length) {
          nextRIndex++;
          nextCIndex = 0;
        }
        row = this.props.data[nextRIndex];
        column = this.props.columns[nextCIndex];
        if (!row) break;
        var editable = column.editable;
        if (_util2.default.isFunction(column.editable)) {
          editable = column.editable(column, row, nextRIndex, nextCIndex);
        }
        if (editable && editable.readOnly !== true && !column.hidden && keyField !== column.name) {
          break;
        } else {
          nextCIndex++;
        }
      } while (row);
      return { nextRIndex: nextRIndex, nextCIndex: nextCIndex };
    }
  }, {
    key: '__handleCompleteEditCell__REACT_HOT_LOADER__',
    value: function __handleCompleteEditCell__REACT_HOT_LOADER__(newVal, rowIndex, columnIndex) {
      if (newVal !== null) {
        var result = this.props.onEditCell(newVal, rowIndex, columnIndex);
        if (result !== _Const2.default.AWAIT_BEFORE_CELL_EDIT) {
          this.setState(function () {
            return { currEditCell: null };
          });
        }
      } else {
        this.setState(function () {
          return { currEditCell: null };
        });
      }
    }
  }, {
    key: '__cancelEditCell__REACT_HOT_LOADER__',
    value: function __cancelEditCell__REACT_HOT_LOADER__() {
      this.setState(function () {
        return { currEditCell: null };
      });
    }
  }, {
    key: '__handleClickonSelectColumn__REACT_HOT_LOADER__',
    value: function __handleClickonSelectColumn__REACT_HOT_LOADER__(e, isSelect, rowIndex, row) {
      e.stopPropagation();
      if (e.target.tagName === 'TD' && (this.props.selectRow.clickToSelect || this.props.selectRow.clickToSelectAndEditCell)) {
        var unselectable = this.props.selectRow.unselectable || [];
        if (unselectable.indexOf(row[this.props.keyField]) === -1) {
          this.handleSelectRow(rowIndex + 1, isSelect, e);
          this.handleClickCell(e, rowIndex + 1);
        }
      }
    }
  }, {
    key: 'renderSelectRowColumn',
    value: function renderSelectRowColumn(selected, inputType, disabled) {
      var CustomComponent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      var _this3 = this;

      var rowIndex = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
      var row = arguments[5];

      return _react2.default.createElement(
        'td',
        { onClick: function onClick(e) {
            _this3.handleClickonSelectColumn(e, !selected, rowIndex, row);
          }, style: { textAlign: 'center' } },
        CustomComponent ? _react2.default.createElement(CustomComponent, { type: inputType, checked: selected, disabled: disabled,
          rowIndex: rowIndex,
          onChange: function onChange(e) {
            return _this3.handleSelectRowColumChange(e, rowIndex);
          } }) : _react2.default.createElement('input', { type: inputType, checked: selected, disabled: disabled,
          onChange: function onChange(e) {
            return _this3.handleSelectRowColumChange(e, rowIndex);
          } })
      );
    }
  }, {
    key: 'renderExpandRowColumn',
    value: function renderExpandRowColumn(isExpandableRow, isExpanded, CustomComponent) {
      var _this4 = this;

      var rowIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      var content = null;
      if (CustomComponent) {
        content = _react2.default.createElement(CustomComponent, { isExpandableRow: isExpandableRow, isExpanded: isExpanded });
      } else if (isExpandableRow) {
        content = isExpanded ? _react2.default.createElement('span', { className: 'fa fa-minus glyphicon glyphicon-minus' }) : _react2.default.createElement('span', { className: 'fa fa-plus glyphicon glyphicon-plus' });
      } else {
        content = ' ';
      }

      return _react2.default.createElement(
        'td',
        {
          className: 'react-bs-table-expand-cell',
          onClick: function onClick(e) {
            return _this4.handleClickCell(e, rowIndex + 1);
          } },
        content
      );
    }
  }, {
    key: '_isExpandColumnVisible',
    value: function _isExpandColumnVisible() {
      return this.props.expandColumnOptions.expandColumnVisible;
    }
  }, {
    key: '__getHeaderColGrouop__REACT_HOT_LOADER__',
    value: function __getHeaderColGrouop__REACT_HOT_LOADER__() {
      return this.header.childNodes;
    }
  }]);

  return TableBody;
}(_react.Component);

TableBody.propTypes = {
  version: _propTypes2.default.string,
  data: _propTypes2.default.array,
  columns: _propTypes2.default.array,
  striped: _propTypes2.default.bool,
  bordered: _propTypes2.default.bool,
  hover: _propTypes2.default.bool,
  condensed: _propTypes2.default.bool,
  keyField: _propTypes2.default.string,
  selectedRowKeys: _propTypes2.default.array,
  onRowClick: _propTypes2.default.func,
  onRowDoubleClick: _propTypes2.default.func,
  onSelectRow: _propTypes2.default.func,
  noDataText: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  withoutNoDataText: _propTypes2.default.bool,
  style: _propTypes2.default.object,
  tableBodyClass: _propTypes2.default.string,
  bodyContainerClass: _propTypes2.default.string,
  expandableRow: _propTypes2.default.func,
  expandComponent: _propTypes2.default.func,
  expandRowBgColor: _propTypes2.default.string,
  expandBy: _propTypes2.default.string,
  expanding: _propTypes2.default.array,
  onExpand: _propTypes2.default.func,
  expandBodyClass: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  expandParentClass: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  onlyOneExpanding: _propTypes2.default.bool,
  beforeShowError: _propTypes2.default.func,
  keyBoardNav: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.object]),
  x: _propTypes2.default.number,
  y: _propTypes2.default.number,
  onNavigateCell: _propTypes2.default.func,
  withoutTabIndex: _propTypes2.default.bool,
  hideRowOnExpand: _propTypes2.default.bool
};
var _default = TableBody;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TableBody, 'TableBody', '/home/nogi/nogi/forks/react-bootstrap-table/src/TableBody.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/nogi/nogi/forks/react-bootstrap-table/src/TableBody.js');
}();

;