'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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

var isFun = function isFun(obj) {
  return obj && typeof obj === 'function';
};

var TableBody = (function (_Component) {
  _inherits(TableBody, _Component);

  function TableBody(props) {
    var _this = this;

    _classCallCheck(this, TableBody);

    _get(Object.getPrototypeOf(TableBody.prototype), 'constructor', this).call(this, props);

    this.handleRowMouseOut = function (rowIndex, event) {
      var targetRow = _this.props.data[rowIndex];
      _this.props.onRowMouseOut(targetRow, event);
    };

    this.handleRowMouseOver = function (rowIndex, event) {
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

    this.handleSelectRow = function (rowIndex, isSelected, e) {
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
      onSelectRow(selectedRow, isSelected, e);
    };

    this.handleSelectRowColumChange = function (e, rowIndex) {
      if (!_this.props.selectRow.clickToSelect || !_this.props.selectRow.clickToSelectAndEditCell) {
        _this.handleSelectRow(rowIndex + 1, e.currentTarget.checked, e);
      }
    };

    this.handleEditCell = function (rowIndex, columnIndex, e) {
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

      if (_this.props.selectRow.clickToSelectAndEditCell && _this.props.cellEdit.mode !== _Const2['default'].CELL_EDIT_DBCLICK) {
        var selected = _this.props.selectedRowKeys.indexOf(_this.props.data[rowIndex][_this.props.keyField]) !== -1;
        _this.handleSelectRow(rowIndex + 1, !selected, e);
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
      }, this.props.tableBodyClass);

      var unselectable = this.props.selectRow.unselectable || [];
      var isSelectRowDefined = this._isSelectRowDefined();
      var tableHeader = this.renderTableHeader(isSelectRowDefined);
      var inputType = this.props.selectRow.mode === _Const2['default'].ROW_SELECT_SINGLE ? 'radio' : 'checkbox';
      var CustomComponent = this.props.selectRow.customComponent;

      var tableRows = this.props.data.map(function (data, r) {
        var tableColumns = this.props.columns.map(function (column, i) {
          var fieldValue = data[column.name];
          if (this.editing && column.name !== this.props.keyField && // Key field can't be edit
          column.editable && // column is editable? default is true, user can set it false
          this.state.currEditCell !== null && this.state.currEditCell.rid === r && this.state.currEditCell.cid === i) {
            var editable = column.editable;
            var format = column.format ? function (value) {
              return column.format(value, data, column.formatExtraData, r).replace(/<.*?>/g, '');
            } : false;
            if (isFun(column.editable)) {
              editable = column.editable(fieldValue, data, r, i);
            }

            return _react2['default'].createElement(_TableEditColumn2['default'], {
              completeEdit: this.handleCompleteEditCell,
              // add by bluespring for column editor customize
              editable: editable,
              customEditor: column.customEditor,
              format: column.format ? format : false,
              key: i,
              blurToSave: this.props.cellEdit.blurToSave,
              rowIndex: r,
              colIndex: i,
              fieldValue: fieldValue });
          } else {
            // add by bluespring for className customize
            var columnChild = fieldValue;
            var columnTitle = null;
            var tdClassName = column.className;
            if (isFun(column.className)) {
              tdClassName = column.className(fieldValue, data, r, i);
            }

            if (typeof column.format !== 'undefined') {
              var formattedValue = column.format(fieldValue, data, column.formatExtraData, r);
              if (!_react2['default'].isValidElement(formattedValue)) {
                columnChild = _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: formattedValue } });
              } else {
                columnChild = formattedValue;
                columnTitle = column.columnTitle && formattedValue ? formattedValue.toString() : null;
              }
            } else {
              columnTitle = column.columnTitle && fieldValue ? fieldValue.toString() : null;
            }
            return _react2['default'].createElement(
              _TableColumn2['default'],
              { key: i,
                dataAlign: column.align,
                className: tdClassName,
                columnTitle: columnTitle,
                cellEdit: this.props.cellEdit,
                hidden: column.hidden,
                onEdit: this.handleEditCell,
                width: column.width },
              columnChild
            );
          }
        }, this);
        var key = data[this.props.keyField];
        var disable = unselectable.indexOf(key) !== -1;
        var selected = this.props.selectedRowKeys.indexOf(key) !== -1;
        var selectRowColumn = isSelectRowDefined && !this.props.selectRow.hideSelectColumn ? this.renderSelectRowColumn(selected, inputType, disable, CustomComponent, r) : null;
        // add by bluespring for className customize
        var trClassName = this.props.trClassName;
        if (isFun(this.props.trClassName)) {
          trClassName = this.props.trClassName(data, r);
        }
        return _react2['default'].createElement(
          _TableRow2['default'],
          { isSelected: selected, key: key, className: trClassName,
            selectRow: isSelectRowDefined ? this.props.selectRow : undefined,
            enableCellEdit: this.props.cellEdit.mode !== _Const2['default'].CELL_EDIT_NONE,
            onRowClick: this.handleRowClick,
            onRowMouseOver: this.handleRowMouseOver,
            onRowMouseOut: this.handleRowMouseOut,
            onSelectRow: this.handleSelectRow,
            unselectableRow: disable },
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
        var style = {
          display: column.hidden ? 'none' : null
        };
        if (column.width) {
          var width = parseInt(column.width, 10);
          style.width = width;
          /** add min-wdth to fix user assign column width
          not eq offsetWidth in large column table **/
          style.minWidth = width;
        }
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
    value: function renderSelectRowColumn(selected, inputType, disabled) {
      var _this2 = this;

      var CustomComponent = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];
      var rowIndex = arguments.length <= 4 || arguments[4] === undefined ? null : arguments[4];

      return _react2['default'].createElement(
        _TableColumn2['default'],
        { dataAlign: 'center', padding: '0px' },
        CustomComponent ? _react2['default'].createElement(CustomComponent, { type: inputType, checked: selected, disabled: disabled,
          rowIndex: rowIndex,
          onChange: function (e) {
            return _this2.handleSelectRowColumChange(e, e.currentTarget.parentElement.parentElement.parentElement.rowIndex);
          } }) : _react2['default'].createElement('input', { type: inputType, checked: selected, disabled: disabled,
          onChange: function (e) {
            return _this2.handleSelectRowColumChange(e, e.currentTarget.parentElement.parentElement.rowIndex);
          } })
      );
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
  noDataText: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]),
  style: _react.PropTypes.object,
  tableBodyClass: _react.PropTypes.string
};
exports['default'] = TableBody;
module.exports = exports['default'];