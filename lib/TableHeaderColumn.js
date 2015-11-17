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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Const = require('./Const');

var _Const2 = _interopRequireDefault(_Const);

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

var TableHeaderColumn = (function (_React$Component) {
  _inherits(TableHeaderColumn, _React$Component);

  function TableHeaderColumn() {
    _classCallCheck(this, TableHeaderColumn);

    _get(Object.getPrototypeOf(TableHeaderColumn.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(TableHeaderColumn, [{
    key: 'handleColumnClick',
    value: function handleColumnClick(e) {
      if (!this.props.dataSort) return;
      var dom = this.refs.innerDiv;
      this.order = this.order == _Const2['default'].SORT_DESC ? _Const2['default'].SORT_ASC : _Const2['default'].SORT_DESC;
      this.props.clearSortCaret(this.order, this.props.dataField);
      dom.appendChild(_util2['default'].renderSortCaret(this.order));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.refs.innerDiv.setAttribute("data-field", this.props.dataField);
    }
  }, {
    key: 'renderSortDefaultEl',
    value: function renderSortDefaultEl() {
      return _react2['default'].createElement('i', { className: 'fa fa-sort custom-fa' });
    }
  }, {
    key: 'render',
    value: function render() {
      var thStyle = {
        textAlign: this.props.dataAlign,
        display: this.props.hidden ? "none" : null,
        width: this.props.width
      };

      var classes = this.props.className + " " + (this.props.dataSort ? "sort-column" : "");
      var defaultSortEl = this.props.dataSort ? this.renderSortDefaultEl() : null;

      var overlayInfoEl = null;
      var innerDivClasses = "th-inner table-header-column";
      if (this.props.overlayInfo) {
        overlayInfoEl = this.props.overlayInfo;
        innerDivClasses += " with-overlay-trigger";
      }

      return _react2['default'].createElement(
        'th',
        { className: classes, style: thStyle },
        _react2['default'].createElement(
          'div',
          { ref: 'innerDiv', className: innerDivClasses,
            onClick: this.handleColumnClick.bind(this) },
          this.props.children,
          defaultSortEl
        ),
        overlayInfoEl
      );
    }
  }]);

  return TableHeaderColumn;
})(_react2['default'].Component);

TableHeaderColumn.propTypes = {
  dataField: _react2['default'].PropTypes.string,
  dataAlign: _react2['default'].PropTypes.string,
  dataSort: _react2['default'].PropTypes.bool,
  clearSortCaret: _react2['default'].PropTypes.func,
  dataFormat: _react2['default'].PropTypes.func,
  isKey: _react2['default'].PropTypes.bool,
  editable: _react2['default'].PropTypes.any,
  hidden: _react2['default'].PropTypes.bool,
  className: _react2['default'].PropTypes.string,
  width: _react2['default'].PropTypes.string,
  sortFunc: _react2['default'].PropTypes.func,
  columnClassName: _react2['default'].PropTypes.any
};

TableHeaderColumn.defaultProps = {
  dataAlign: "left",
  dataSort: false,
  dataFormat: undefined,
  isKey: false,
  editable: true,
  clearSortCaret: undefined,
  hidden: false,
  className: "",
  width: null,
  sortFunc: undefined,
  columnClassName: ''
};

exports['default'] = TableHeaderColumn;
module.exports = exports['default'];