/* eslint quotes: 0 */
/* eslint max-len: 0 */
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

var legalComparators = ['=', '>', '>=', '<', '<=', '!='];

function dateParser(d) {
  return d.getFullYear() + '-' + ("0" + (d.getMonth() + 1)).slice(-2) + '-' + ("0" + d.getDate()).slice(-2);
}

var DateFilter = (function (_Component) {
  _inherits(DateFilter, _Component);

  function DateFilter(props) {
    _classCallCheck(this, DateFilter);

    _get(Object.getPrototypeOf(DateFilter.prototype), 'constructor', this).call(this, props);
    this.dateComparators = this.props.dateComparators || legalComparators;
    this.filter = this.filter.bind(this);
    this.onChangeComparator = this.onChangeComparator.bind(this);
  }

  _createClass(DateFilter, [{
    key: 'setDefaultDate',
    value: function setDefaultDate() {
      var defaultDate = '';
      var defaultValue = this.props.defaultValue;

      if (defaultValue && defaultValue.date) {
        // Set the appropriate format for the input type=date, i.e. "YYYY-MM-DD"
        defaultDate = dateParser(new Date(defaultValue.date));
      }
      return defaultDate;
    }
  }, {
    key: 'onChangeComparator',
    value: function onChangeComparator(event) {
      var date = this.refs.inputDate.value;
      var comparator = event.target.value;
      if (date === '') {
        return;
      }
      date = new Date(date);
      this.props.filterHandler({ date: date, comparator: comparator }, _Const2['default'].FILTER_TYPE.DATE);
    }
  }, {
    key: 'getComparatorOptions',
    value: function getComparatorOptions() {
      var optionTags = [];
      optionTags.push(_react2['default'].createElement('option', { key: '-1' }));
      for (var i = 0; i < this.dateComparators.length; i++) {
        optionTags.push(_react2['default'].createElement(
          'option',
          { key: i, value: this.dateComparators[i] },
          this.dateComparators[i]
        ));
      }
      return optionTags;
    }
  }, {
    key: 'filter',
    value: function filter(event) {
      var comparator = this.refs.dateFilterComparator.value;
      var dateValue = event.target.value;
      if (dateValue) {
        this.props.filterHandler({ date: new Date(dateValue), comparator: comparator }, _Const2['default'].FILTER_TYPE.DATE);
      } else {
        this.props.filterHandler(null, _Const2['default'].FILTER_TYPE.DATE);
      }
    }
  }, {
    key: 'cleanFiltered',
    value: function cleanFiltered() {
      var value = this.setDefaultDate();
      var comparator = this.props.defaultValue ? this.props.defaultValue.comparator : '';
      this.setState({ isPlaceholderSelected: value === '' });
      this.refs.dateFilterComparator.value = comparator;
      this.refs.inputDate.value = value;
      this.props.filterHandler({ date: new Date(value), comparator: comparator }, _Const2['default'].FILTER_TYPE.DATE);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var comparator = this.refs.dateFilterComparator.value;
      var dateValue = this.refs.inputDate.value;
      if (comparator && dateValue) {
        this.props.filterHandler({ date: new Date(dateValue), comparator: comparator }, _Const2['default'].FILTER_TYPE.DATE);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var defaultValue = this.props.defaultValue;

      return _react2['default'].createElement(
        'div',
        { className: 'filter date-filter' },
        _react2['default'].createElement(
          'select',
          { ref: 'dateFilterComparator',
            className: 'date-filter-comparator form-control',
            onChange: this.onChangeComparator,
            defaultValue: defaultValue ? defaultValue.comparator : '' },
          this.getComparatorOptions()
        ),
        _react2['default'].createElement('input', { ref: 'inputDate',
          className: 'filter date-filter-input form-control',
          type: 'date',
          onChange: this.filter,
          defaultValue: this.setDefaultDate() })
      );
    }
  }]);

  return DateFilter;
})(_react.Component);

DateFilter.propTypes = {
  filterHandler: _react.PropTypes.func.isRequired,
  defaultValue: _react.PropTypes.shape({
    date: _react.PropTypes.object,
    comparator: _react.PropTypes.oneOf(legalComparators)
  }),
  /* eslint consistent-return: 0 */
  dateComparators: function dateComparators(props, propName) {
    if (!props[propName]) {
      return;
    }
    for (var i = 0; i < props[propName].length; i++) {
      var comparatorIsValid = false;
      for (var j = 0; j < legalComparators.length; j++) {
        if (legalComparators[j] === props[propName][i]) {
          comparatorIsValid = true;
          break;
        }
      }
      if (!comparatorIsValid) {
        return new Error('Date comparator provided is not supported.\n          Use only ' + legalComparators);
      }
    }
  },
  columnName: _react.PropTypes.string
};

exports['default'] = DateFilter;
module.exports = exports['default'];