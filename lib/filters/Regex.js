'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Const = require('../Const');

var _Const2 = _interopRequireDefault(_Const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RegexFilter = function (_Component) {
  _inherits(RegexFilter, _Component);

  function RegexFilter(props) {
    _classCallCheck(this, RegexFilter);

    var _this = _possibleConstructorReturn(this, (RegexFilter.__proto__ || Object.getPrototypeOf(RegexFilter)).call(this, props));

    _this.filter = _this.filter.bind(_this);
    _this.timeout = null;
    return _this;
  }

  _createClass(RegexFilter, [{
    key: 'filter',
    value: function filter(event) {
      var _this2 = this;

      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      var filterValue = event.target.value;
      this.timeout = setTimeout(function () {
        _this2.props.filterHandler(filterValue, _Const2.default.FILTER_TYPE.REGEX);
      }, this.props.delay);
    }
  }, {
    key: 'cleanFiltered',
    value: function cleanFiltered() {
      var value = this.props.defaultValue ? this.props.defaultValue : '';
      this.inputText.value = value;
      this.props.filterHandler(value, _Const2.default.FILTER_TYPE.TEXT);
    }
  }, {
    key: 'applyFilter',
    value: function applyFilter(filterRegx) {
      this.inputText.value = filterRegx;
      this.props.filterHandler(filterRegx, _Const2.default.FILTER_TYPE.REGEX);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var value = this.inputText.value;
      if (value) {
        this.props.filterHandler(value, _Const2.default.FILTER_TYPE.REGEX);
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
      var _this3 = this;

      var _props = this.props,
          defaultValue = _props.defaultValue,
          placeholder = _props.placeholder,
          columnName = _props.columnName,
          style = _props.style;

      return _react2.default.createElement('input', { ref: function ref(n) {
          return _this3.inputText = n;
        },
        className: 'filter text-filter form-control',
        type: 'text',
        style: style,
        onChange: this.filter,
        placeholder: placeholder || 'Enter Regex for ' + columnName + '...',
        defaultValue: defaultValue ? defaultValue : '' });
    }
  }]);

  return RegexFilter;
}(_react.Component);

RegexFilter.propTypes = {
  filterHandler: _propTypes2.default.func.isRequired,
  defaultValue: _propTypes2.default.string,
  delay: _propTypes2.default.number,
  placeholder: _propTypes2.default.string,
  columnName: _propTypes2.default.any,
  style: _propTypes2.default.oneOfType([_propTypes2.default.object])
};

RegexFilter.defaultProps = {
  delay: _Const2.default.FILTER_DELAY
};

var _default = RegexFilter;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RegexFilter, 'RegexFilter', '/home/nogi/nogi/forks/react-bootstrap-table/src/filters/Regex.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/nogi/nogi/forks/react-bootstrap-table/src/filters/Regex.js');
}();

;