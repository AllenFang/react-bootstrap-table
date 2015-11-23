'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Const = require('./Const');

var _Const2 = _interopRequireDefault(_Const);

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _SelectRowHeaderColumn = require('./SelectRowHeaderColumn');

var _SelectRowHeaderColumn2 = _interopRequireDefault(_SelectRowHeaderColumn);

var TableHeader = (function (_React$Component) {
  _inherits(TableHeader, _React$Component);

  function TableHeader(props) {
    _classCallCheck(this, TableHeader);

    _get(Object.getPrototypeOf(TableHeader.prototype), 'constructor', this).call(this, props);
  }

  _createClass(TableHeader, [{
    key: 'clearSortCaret',
    value: function clearSortCaret(order, sortField) {
      var row = this.refs.header;
      for (var i = 0; i < row.childElementCount; i++) {
        var column = row.childNodes[i].childNodes[0];
        if (column.getElementsByClassName("order").length > 0) {
          column.removeChild(column.getElementsByClassName("order")[0]);
        }
      }
      this.props.onSort(order, sortField);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      //default sorting
      if (this.props.sortName) {
        this.clearSortCaret(this.props.sortOrder, this.props.sortName);
        var row = this.refs.header;
        for (var i = 0; i < row.childElementCount; i++) {
          var column = row.childNodes[i].childNodes[0];
          if (column.getAttribute('data-field') === this.props.sortName) {
            column.appendChild(_util2['default'].renderSortCaret(this.props.sortOrder));
            break;
          }
        }
      }
    }
  }, {
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
          _react2['default'].createElement('input', { type: 'checkbox', onChange: this.props.onSelectAllRow })
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
          this.props.children[i] = _react2['default'].cloneElement(this.props.children[i], { key: i, clearSortCaret: this.clearSortCaret.bind(this) });
        }
      } else {
        this.props.children = _react2['default'].cloneElement(this.props.children, { key: 0, clearSortCaret: this.clearSortCaret.bind(this) });
      }
    }
  }, {
    key: 'fitHeader',
    value: function fitHeader(headerProps, isVerticalScrollBar) {
      if (Array.isArray(this.props.children)) {
        var startPosition = (this.props.rowSelectType == _Const2['default'].ROW_SELECT_SINGLE || this.props.rowSelectType == _Const2['default'].ROW_SELECT_MULTI) && !this.props.hideSelectColumn ? 1 : 0;
        for (var i = 0; i < this.props.children.length; i++) {
          this.props.children[i] = _react2['default'].cloneElement(this.props.children[i], { width: headerProps[i + startPosition].width + "px" });
        }
      } else {
        this.props.children = _react2['default'].cloneElement(this.props.children, { width: headerProps[0].width + "px" });
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
  condensed: _react2['default'].PropTypes.bool
};

TableHeader.defaultProps = {};
exports['default'] = TableHeader;
module.exports = exports['default'];