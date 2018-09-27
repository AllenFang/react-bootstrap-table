'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Const = require('../Const');

var _Const2 = _interopRequireDefault(_Const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var legalComparators = ['=', '>', '>=', '<', '<=', '!='];

var NumberFilter = function (_Component) {
  _inherits(NumberFilter, _Component);

  function NumberFilter(props) {
    _classCallCheck(this, NumberFilter);

    var _this = _possibleConstructorReturn(this, (NumberFilter.__proto__ || Object.getPrototypeOf(NumberFilter)).call(this, props));

    _this.numberComparators = _this.props.numberComparators || legalComparators;
    _this.timeout = null;
    _this.state = {
      isPlaceholderSelected: _this.props.defaultValue === undefined || _this.props.defaultValue.number === undefined || _this.props.options && _this.props.options.indexOf(_this.props.defaultValue.number) === -1
    };
    _this.onChangeNumber = _this.onChangeNumber.bind(_this);
    _this.onChangeNumberSet = _this.onChangeNumberSet.bind(_this);
    _this.onChangeComparator = _this.onChangeComparator.bind(_this);
    return _this;
  }

  _createClass(NumberFilter, [{
    key: 'onChangeNumber',
    value: function onChangeNumber(event) {
      var _this2 = this;

      var comparator = this.numberFilterComparator.value;
      if (comparator === '') {
        return;
      }
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      var filterValue = event.target.value;
      this.timeout = setTimeout(function () {
        _this2.props.filterHandler({ number: filterValue, comparator: comparator }, _Const2.default.FILTER_TYPE.NUMBER);
      }, this.props.delay);
    }
  }, {
    key: 'onChangeNumberSet',
    value: function onChangeNumberSet(event) {
      var comparator = this.numberFilterComparator.value;
      var value = event.target.value;

      this.setState(function () {
        return { isPlaceholderSelected: value === '' };
      });
      if (comparator === '') {
        return;
      }
      this.props.filterHandler({ number: value, comparator: comparator }, _Const2.default.FILTER_TYPE.NUMBER);
    }
  }, {
    key: 'onChangeComparator',
    value: function onChangeComparator(event) {
      var value = this.numberFilter.value;
      var comparator = event.target.value;
      if (value === '') {
        return;
      }
      this.props.filterHandler({ number: value, comparator: comparator }, _Const2.default.FILTER_TYPE.NUMBER);
    }
  }, {
    key: 'cleanFiltered',
    value: function cleanFiltered() {
      var value = this.props.defaultValue ? this.props.defaultValue.number : '';
      var comparator = this.props.defaultValue ? this.props.defaultValue.comparator : '';
      this.setState(function () {
        return { isPlaceholderSelected: value === '' };
      });
      this.numberFilterComparator.value = comparator;
      this.numberFilter.value = value;
      this.props.filterHandler({ number: value, comparator: comparator }, _Const2.default.FILTER_TYPE.NUMBER);
    }
  }, {
    key: 'applyFilter',
    value: function applyFilter(filterObj) {
      var number = filterObj.number,
          comparator = filterObj.comparator;

      this.setState(function () {
        return { isPlaceholderSelected: number === '' };
      });
      this.numberFilterComparator.value = comparator;
      this.numberFilter.value = number;
      this.props.filterHandler({ number: number, comparator: comparator }, _Const2.default.FILTER_TYPE.NUMBER);
    }
  }, {
    key: 'getComparatorOptions',
    value: function getComparatorOptions() {
      var optionTags = [];
      var withoutEmptyComparatorOption = this.props.withoutEmptyComparatorOption;

      if (!withoutEmptyComparatorOption) {
        optionTags.push(_react2.default.createElement('option', { key: '-1' }));
      }
      for (var i = 0; i < this.numberComparators.length; i++) {
        optionTags.push(_react2.default.createElement(
          'option',
          { key: i, value: this.numberComparators[i] },
          this.numberComparators[i]
        ));
      }
      return optionTags;
    }
  }, {
    key: 'getNumberOptions',
    value: function getNumberOptions() {
      var optionTags = [];
      var _props = this.props,
          options = _props.options,
          withoutEmptyNumberOption = _props.withoutEmptyNumberOption;

      if (!withoutEmptyNumberOption) {
        optionTags.push(_react2.default.createElement(
          'option',
          { key: '-1', value: '' },
          this.props.placeholder || 'Select ' + this.props.columnName + '...'
        ));
      }
      for (var i = 0; i < options.length; i++) {
        optionTags.push(_react2.default.createElement(
          'option',
          { key: i, value: options[i] },
          options[i]
        ));
      }
      return optionTags;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var comparator = this.numberFilterComparator.value;
      var number = this.numberFilter.value;
      if (comparator && number) {
        this.props.filterHandler({ number: number, comparator: comparator }, _Const2.default.FILTER_TYPE.NUMBER);
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

      var selectClass = (0, _classnames2.default)('select-filter', 'number-filter-input', 'form-control', { 'placeholder-selected': this.state.isPlaceholderSelected });

      return _react2.default.createElement(
        'div',
        { className: 'filter number-filter' },
        _react2.default.createElement(
          'select',
          { ref: function ref(n) {
              return _this3.numberFilterComparator = n;
            },
            style: this.props.style.comparator,
            className: 'number-filter-comparator form-control',
            onChange: this.onChangeComparator,
            defaultValue: this.props.defaultValue ? this.props.defaultValue.comparator : '' },
          this.getComparatorOptions()
        ),
        this.props.options ? _react2.default.createElement(
          'select',
          { ref: function ref(n) {
              return _this3.numberFilter = n;
            },
            className: selectClass,
            onChange: this.onChangeNumberSet,
            defaultValue: this.props.defaultValue ? this.props.defaultValue.number : '' },
          this.getNumberOptions()
        ) : _react2.default.createElement('input', { ref: function ref(n) {
            return _this3.numberFilter = n;
          },
          type: 'number',
          style: this.props.style.number,
          className: 'number-filter-input form-control',
          placeholder: this.props.placeholder || 'Enter ' + this.props.columnName + '...',
          onChange: this.onChangeNumber,
          defaultValue: this.props.defaultValue ? this.props.defaultValue.number : '' })
      );
    }
  }]);

  return NumberFilter;
}(_react.Component);

NumberFilter.propTypes = {
  filterHandler: _propTypes2.default.func.isRequired,
  options: _propTypes2.default.arrayOf(_propTypes2.default.number),
  defaultValue: _propTypes2.default.shape({
    number: _propTypes2.default.number,
    comparator: _propTypes2.default.oneOf(legalComparators)
  }),
  style: _propTypes2.default.shape({
    number: _propTypes2.default.oneOfType([_propTypes2.default.object]),
    comparator: _propTypes2.default.oneOfType([_propTypes2.default.object])
  }),
  delay: _propTypes2.default.number,
  /* eslint consistent-return: 0 */
  numberComparators: function numberComparators(props, propName) {
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
        return new Error('Number comparator provided is not supported.\n          Use only ' + legalComparators);
      }
    }
  },
  placeholder: _propTypes2.default.string,
  columnName: _propTypes2.default.any,
  withoutEmptyComparatorOption: _propTypes2.default.bool,
  withoutEmptyNumberOption: _propTypes2.default.bool
};

NumberFilter.defaultProps = {
  delay: _Const2.default.FILTER_DELAY,
  withoutEmptyComparatorOption: false,
  withoutEmptyNumberOption: false,
  style: {
    number: null,
    comparator: null
  }
};

var _default = NumberFilter;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(legalComparators, 'legalComparators', '/home/nogi/nogi/forks/react-bootstrap-table/src/filters/Number.js');

  __REACT_HOT_LOADER__.register(NumberFilter, 'NumberFilter', '/home/nogi/nogi/forks/react-bootstrap-table/src/filters/Number.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/nogi/nogi/forks/react-bootstrap-table/src/filters/Number.js');
}();

;