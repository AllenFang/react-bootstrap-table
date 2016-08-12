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

var _Const = require('../Const');

var _Const2 = _interopRequireDefault(_Const);

var TextFilter = (function (_Component) {
  _inherits(TextFilter, _Component);

  function TextFilter(props) {
    _classCallCheck(this, TextFilter);

    _get(Object.getPrototypeOf(TextFilter.prototype), 'constructor', this).call(this, props);
    this.filter = this.filter.bind(this);
    this.timeout = null;
  }

  _createClass(TextFilter, [{
    key: 'filter',
    value: function filter(event) {
      var _this = this;

      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      var filterValue = event.target.value;
      this.timeout = setTimeout(function () {
        _this.props.filterHandler(filterValue, _Const2['default'].FILTER_TYPE.TEXT);
      }, this.props.delay);
    }
  }, {
    key: 'cleanFiltered',
    value: function cleanFiltered() {
      var value = this.props.defaultValue ? this.props.defaultValue : '';
      this.refs.inputText.value = value;
      this.props.filterHandler(value, _Const2['default'].FILTER_TYPE.TEXT);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var defaultValue = this.refs.inputText.value;
      if (defaultValue) {
        this.props.filterHandler(defaultValue, _Const2['default'].FILTER_TYPE.TEXT);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var placeholder = _props.placeholder;
      var columnName = _props.columnName;
      var defaultValue = _props.defaultValue;

      return _react2['default'].createElement('input', { ref: 'inputText',
        className: 'filter text-filter form-control',
        type: 'text',
        onChange: this.filter,
        placeholder: placeholder || 'Enter ' + columnName + '...',
        defaultValue: defaultValue ? defaultValue : '' });
    }
  }]);

  return TextFilter;
})(_react.Component);

TextFilter.propTypes = {
  filterHandler: _react.PropTypes.func.isRequired,
  defaultValue: _react.PropTypes.string,
  delay: _react.PropTypes.number,
  placeholder: _react.PropTypes.string,
  columnName: _react.PropTypes.string
};

TextFilter.defaultProps = {
  delay: _Const2['default'].FILTER_DELAY
};

exports['default'] = TextFilter;
module.exports = exports['default'];