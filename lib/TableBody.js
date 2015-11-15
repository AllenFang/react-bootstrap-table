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

var _Const = require('./Const');

var _Const2 = _interopRequireDefault(_Const);

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

var _TableRow = require('./TableRow');

var _TableRow2 = _interopRequireDefault(_TableRow);

var _TableColumn = require('./TableColumn');

var _TableColumn2 = _interopRequireDefault(_TableColumn);

var _TableEditColumn = require('./TableEditColumn');

var _TableEditColumn2 = _interopRequireDefault(_TableEditColumn);

var _classnames = require('classnames');

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
      this.hardFixHeaderWidth();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.hardFixHeaderWidth();
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
              return column.format(value, data).replace(/<.*?>/g, '');
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
              var formattedValue = column.format(fieldValue, data);
              if (!_react2['default'].isValidElement(formattedValue)) {
                formattedValue = _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: formattedValue } });
              }
              return _react2['default'].createElement(
                _TableColumn2['default'],
                { dataAlign: column.align,
                  key: i,
                  className: tdClassName,
                  cellEdit: this.props.cellEdit,
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
              style: { textAlign: "center" } },
            'There is no data to display'
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
          { className: tableClasses },
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
        var style = {
          display: column.hidden ? "none" : null,
          width: column.width,
          minWidth: column.width
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
        //if edit cell, trigger row selections also
        var selected = this.props.selectedRowKeys.indexOf(this.props.data[rowIndex][this.props.keyField]) != -1;
        this.handleSelectRow(rowIndex + 1, !selected);
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
      return this.props.selectRow.mode == _Const2['default'].ROW_SELECT_SINGLE || this.props.selectRow.mode == _Const2['default'].ROW_SELECT_MULTI;
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
  onSelectRow: _react2['default'].PropTypes.func
};
exports['default'] = TableBody;
module.exports = exports['default'];