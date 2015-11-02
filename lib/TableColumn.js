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

var TableColumn = (function (_React$Component) {
  _inherits(TableColumn, _React$Component);

  function TableColumn(props) {
    _classCallCheck(this, TableColumn);

    _get(Object.getPrototypeOf(TableColumn.prototype), 'constructor', this).call(this, props);
  }

  _createClass(TableColumn, [{
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
      this.props.onEdit(e.currentTarget.parentElement.rowIndex, e.currentTarget.cellIndex);
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