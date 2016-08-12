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

var _Const = require('../Const');

var _Const2 = _interopRequireDefault(_Const);

var SelectFilter = (function (_Component) {
  _inherits(SelectFilter, _Component);

  function SelectFilter(props) {
    _classCallCheck(this, SelectFilter);

    _get(Object.getPrototypeOf(SelectFilter.prototype), 'constructor', this).call(this, props);
    this.filter = this.filter.bind(this);
    this.state = {
      isPlaceholderSelected: this.props.defaultValue === undefined || !this.props.options.hasOwnProperty(this.props.defaultValue)
    };
  }

  _createClass(SelectFilter, [{
    key: 'filter',
    value: function filter(event) {
      var value = event.target.value;

      this.setState({ isPlaceholderSelected: value === '' });
      this.props.filterHandler(value, _Const2['default'].FILTER_TYPE.SELECT);
    }
  }, {
    key: 'cleanFiltered',
    value: function cleanFiltered() {
      var value = this.props.defaultValue !== undefined ? this.props.defaultValue : '';
      this.setState({ isPlaceholderSelected: value === '' });
      this.refs.selectInput.value = value;
      this.props.filterHandler(value, _Const2['default'].FILTER_TYPE.SELECT);
    }
  }, {
    key: 'getOptions',
    value: function getOptions() {
      var optionTags = [];
      var _props = this.props;
      var options = _props.options;
      var placeholder = _props.placeholder;
      var columnName = _props.columnName;

      optionTags.push(_react2['default'].createElement(
        'option',
        { key: '-1', value: '' },
        placeholder || 'Select ' + columnName + '...'
      ));
      Object.keys(options).map(function (key) {
        optionTags.push(_react2['default'].createElement(
          'option',
          { key: key, value: key },
          options[key]
        ));
      });
      return optionTags;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var value = this.refs.selectInput.value;
      if (value) {
        this.props.filterHandler(value, _Const2['default'].FILTER_TYPE.SELECT);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var selectClass = (0, _classnames2['default'])('filter', 'select-filter', 'form-control', { 'placeholder-selected': this.state.isPlaceholderSelected });

      return _react2['default'].createElement(
        'select',
        { ref: 'selectInput',
          className: selectClass,
          onChange: this.filter,
          defaultValue: this.props.defaultValue !== undefined ? this.props.defaultValue : '' },
        this.getOptions()
      );
    }
  }]);

  return SelectFilter;
})(_react.Component);

SelectFilter.propTypes = {
  filterHandler: _react.PropTypes.func.isRequired,
  options: _react.PropTypes.object.isRequired,
  placeholder: _react.PropTypes.string,
  columnName: _react.PropTypes.string
};

exports['default'] = SelectFilter;
module.exports = exports['default'];