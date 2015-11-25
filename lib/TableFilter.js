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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var TableFilter = (function (_React$Component) {
  _inherits(TableFilter, _React$Component);

  function TableFilter(props) {
    _classCallCheck(this, TableFilter);

    _get(Object.getPrototypeOf(TableFilter.prototype), 'constructor', this).call(this, props);
    this.filterObj = {};
  }

  _createClass(TableFilter, [{
    key: 'handleKeyUp',
    value: function handleKeyUp(e) {
      if (e.currentTarget.value.trim() === "") delete this.filterObj[e.currentTarget.name];else this.filterObj[e.currentTarget.name] = e.currentTarget.value;

      this.props.onFilter(this.filterObj);
    }
  }, {
    key: 'render',
    value: function render() {
      var tableClasses = (0, _classnames2['default'])("table", {
        'table-striped': this.props.striped,
        'table-condensed': this.props.condensed
      });
      var selectRowHeader = null;

      if (this.props.rowSelectType == _Const2['default'].ROW_SELECT_SINGLE || this.props.rowSelectType == _Const2['default'].ROW_SELECT_MULTI) {
        var style = {
          width: 35,
          paddingLeft: 0,
          paddingRight: 0
        };
        selectRowHeader = _react2['default'].createElement(
          'th',
          { style: style, key: -1 },
          'Filter'
        );
      }
      var filterField = this.props.columns.map(function (column) {
        var thStyle = {
          display: column.hidden ? "none" : null,
          width: column.width
        };
        return _react2['default'].createElement(
          'th',
          { key: column.name, style: thStyle },
          _react2['default'].createElement(
            'div',
            { className: 'th-inner table-header-column' },
            _react2['default'].createElement('input', { size: '10', type: 'text', placeholder: column.name, name: column.name, onKeyUp: this.handleKeyUp.bind(this) })
          )
        );
      }, this);
      return _react2['default'].createElement(
        'table',
        { className: tableClasses, style: { marginTop: 5 } },
        _react2['default'].createElement(
          'thead',
          null,
          _react2['default'].createElement(
            'tr',
            { style: { borderBottomStyle: 'hidden' } },
            selectRowHeader,
            filterField
          )
        )
      );
    }
  }]);

  return TableFilter;
})(_react2['default'].Component);

TableFilter.propTypes = {
  columns: _react2['default'].PropTypes.array,
  rowSelectType: _react2['default'].PropTypes.string,
  onFilter: _react2['default'].PropTypes.func
};
exports['default'] = TableFilter;
module.exports = exports['default'];