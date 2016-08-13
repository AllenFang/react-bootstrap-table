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
      _this.props.onEdit(e.currentTarget.parentElement.rowIndex + 1, e.currentTarget.cellIndex, e);
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
        display: this.props.hidden ? 'none' : null,
        padding: this.props.padding ? this.props.padding : '8px'
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
        _extends({ style: tdStyle,
          title: this.props.columnTitle,
          className: this.props.className
        }, opts),
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
  columnTitle: _react.PropTypes.string,
  children: _react.PropTypes.node
};

TableColumn.defaultProps = {
  dataAlign: 'left',
  hidden: false,
  className: ''
};
exports['default'] = TableColumn;
module.exports = exports['default'];