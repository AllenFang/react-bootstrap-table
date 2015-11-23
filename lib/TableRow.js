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

var TableRow = (function (_React$Component) {
  _inherits(TableRow, _React$Component);

  function TableRow() {
    _classCallCheck(this, TableRow);

    _get(Object.getPrototypeOf(TableRow.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(TableRow, [{
    key: 'rowClick',
    value: function rowClick(e) {
      if (e.target.tagName !== "INPUT") {
        if (this.props.selectRow && this.props.selectRow.clickToSelect) this.props.onSelectRow(e.currentTarget.rowIndex, !this.props.isSelected);
        if (this.props.onRowClick) this.props.onRowClick(e.currentTarget.rowIndex);
      }
    }
  }, {
    key: 'render',
    value: function render() {

      var trCss = {
        style: {
          backgroundColor: this.props.isSelected ? this.props.selectRow.bgColor : null
        },
        className: this.props.className || ''
      };

      if (this.props.selectRow && !this.props.enableCellEdit && (this.props.selectRow.clickToSelect || this.props.selectRow.clickToSelectAndEditCell) || this.props.onRowClick) {
        return _react2['default'].createElement(
          'tr',
          _extends({}, trCss, { onClick: this.rowClick.bind(this) }),
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