/* eslint default-case: 0 */
/* eslint guard-for-in: 0 */
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

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

var _filtersDate = require('./filters/Date');

var _filtersDate2 = _interopRequireDefault(_filtersDate);

var _filtersText = require('./filters/Text');

var _filtersText2 = _interopRequireDefault(_filtersText);

var _filtersRegex = require('./filters/Regex');

var _filtersRegex2 = _interopRequireDefault(_filtersRegex);

var _filtersSelect = require('./filters/Select');

var _filtersSelect2 = _interopRequireDefault(_filtersSelect);

var _filtersNumber = require('./filters/Number');

var _filtersNumber2 = _interopRequireDefault(_filtersNumber);

var TableHeaderColumn = (function (_Component) {
  _inherits(TableHeaderColumn, _Component);

  function TableHeaderColumn(props) {
    var _this = this;

    _classCallCheck(this, TableHeaderColumn);

    _get(Object.getPrototypeOf(TableHeaderColumn.prototype), 'constructor', this).call(this, props);

    this.handleColumnClick = function () {
      if (!_this.props.dataSort) return;
      var order = _this.props.sort === _Const2['default'].SORT_DESC ? _Const2['default'].SORT_ASC : _Const2['default'].SORT_DESC;
      _this.props.onSort(order, _this.props.dataField);
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  _createClass(TableHeaderColumn, [{
    key: 'handleFilter',
    value: function handleFilter(value, type) {
      this.props.filter.emitter.handleFilter(this.props.dataField, value, type);
    }
  }, {
    key: 'getFilters',
    value: function getFilters() {
      switch (this.props.filter.type) {
        case _Const2['default'].FILTER_TYPE.TEXT:
          {
            return _react2['default'].createElement(_filtersText2['default'], _extends({ ref: 'textFilter' }, this.props.filter, {
              columnName: this.props.children, filterHandler: this.handleFilter }));
          }
        case _Const2['default'].FILTER_TYPE.REGEX:
          {
            return _react2['default'].createElement(_filtersRegex2['default'], _extends({ ref: 'regexFilter' }, this.props.filter, {
              columnName: this.props.children, filterHandler: this.handleFilter }));
          }
        case _Const2['default'].FILTER_TYPE.SELECT:
          {
            return _react2['default'].createElement(_filtersSelect2['default'], _extends({ ref: 'selectFilter' }, this.props.filter, {
              columnName: this.props.children, filterHandler: this.handleFilter }));
          }
        case _Const2['default'].FILTER_TYPE.NUMBER:
          {
            return _react2['default'].createElement(_filtersNumber2['default'], _extends({ ref: 'numberFilter' }, this.props.filter, {
              columnName: this.props.children, filterHandler: this.handleFilter }));
          }
        case _Const2['default'].FILTER_TYPE.DATE:
          {
            return _react2['default'].createElement(_filtersDate2['default'], _extends({ ref: 'dateFilter' }, this.props.filter, {
              columnName: this.props.children, filterHandler: this.handleFilter }));
          }
        case _Const2['default'].FILTER_TYPE.CUSTOM:
          {
            return this.props.filter.getElement(this.handleFilter, this.props.filter.customFilterParameters);
          }
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.refs['header-col'].setAttribute('data-field', this.props.dataField);
    }
  }, {
    key: 'render',
    value: function render() {
      var defaultCaret = undefined;
      var _props = this.props;
      var dataAlign = _props.dataAlign;
      var headerAlign = _props.headerAlign;
      var hidden = _props.hidden;
      var sort = _props.sort;
      var dataSort = _props.dataSort;
      var sortIndicator = _props.sortIndicator;
      var children = _props.children;
      var caretRender = _props.caretRender;

      var thStyle = {
        textAlign: headerAlign || dataAlign,
        display: hidden ? 'none' : null
      };
      if (sortIndicator) {
        defaultCaret = !dataSort ? null : _react2['default'].createElement(
          'span',
          { className: 'order' },
          _react2['default'].createElement(
            'span',
            { className: 'dropdown' },
            _react2['default'].createElement('span', { className: 'caret', style: { margin: '10px 0 10px 5px', color: '#ccc' } })
          ),
          _react2['default'].createElement(
            'span',
            { className: 'dropup' },
            _react2['default'].createElement('span', { className: 'caret', style: { margin: '10px 0', color: '#ccc' } })
          )
        );
      }
      var sortCaret = sort ? _util2['default'].renderReactSortCaret(sort) : defaultCaret;
      if (caretRender) {
        sortCaret = caretRender(sort);
      }

      var classes = this.props.className + ' ' + (dataSort ? 'sort-column' : '');
      var title = typeof children === 'string' ? { title: children } : null;
      return _react2['default'].createElement(
        'th',
        _extends({ ref: 'header-col',
          className: classes,
          style: thStyle,
          onClick: this.handleColumnClick
        }, title),
        children,
        sortCaret,
        _react2['default'].createElement(
          'div',
          { onClick: function (e) {
              return e.stopPropagation();
            } },
          this.props.filter ? this.getFilters() : null
        )
      );
    }
  }, {
    key: 'cleanFiltered',
    value: function cleanFiltered() {
      if (this.props.filter === undefined) {
        return;
      }

      switch (this.props.filter.type) {
        case _Const2['default'].FILTER_TYPE.TEXT:
          {
            this.refs.textFilter.cleanFiltered();
            break;
          }
        case _Const2['default'].FILTER_TYPE.REGEX:
          {
            this.refs.regexFilter.cleanFiltered();
            break;
          }
        case _Const2['default'].FILTER_TYPE.SELECT:
          {
            this.refs.selectFilter.cleanFiltered();
            break;
          }
        case _Const2['default'].FILTER_TYPE.NUMBER:
          {
            this.refs.numberFilter.cleanFiltered();
            break;
          }
        case _Const2['default'].FILTER_TYPE.DATE:
          {
            this.refs.dateFilter.cleanFiltered();
            break;
          }
      }
    }
  }]);

  return TableHeaderColumn;
})(_react.Component);

var filterTypeArray = [];
for (var key in _Const2['default'].FILTER_TYPE) {
  filterTypeArray.push(_Const2['default'].FILTER_TYPE[key]);
}

TableHeaderColumn.propTypes = {
  dataField: _react.PropTypes.string,
  dataAlign: _react.PropTypes.string,
  headerAlign: _react.PropTypes.string,
  dataSort: _react.PropTypes.bool,
  onSort: _react.PropTypes.func,
  dataFormat: _react.PropTypes.func,
  csvFormat: _react.PropTypes.func,
  csvHeader: _react.PropTypes.string,
  isKey: _react.PropTypes.bool,
  editable: _react.PropTypes.any,
  hidden: _react.PropTypes.bool,
  hiddenOnInsert: _react.PropTypes.bool,
  searchable: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  width: _react.PropTypes.string,
  sortFunc: _react.PropTypes.func,
  sortFuncExtraData: _react.PropTypes.any,
  columnClassName: _react.PropTypes.any,
  columnTitle: _react.PropTypes.bool,
  filterFormatted: _react.PropTypes.bool,
  filterValue: _react.PropTypes.func,
  sort: _react.PropTypes.string,
  caretRender: _react.PropTypes.func,
  formatExtraData: _react.PropTypes.any,
  filter: _react.PropTypes.shape({
    type: _react.PropTypes.oneOf(filterTypeArray),
    delay: _react.PropTypes.number,
    options: _react.PropTypes.oneOfType([_react.PropTypes.object, // for SelectFilter
    _react.PropTypes.arrayOf(_react.PropTypes.number) // for NumberFilter
    ]),
    numberComparators: _react.PropTypes.arrayOf(_react.PropTypes.string),
    emitter: _react.PropTypes.object,
    placeholder: _react.PropTypes.string,
    getElement: _react.PropTypes.func,
    customFilterParameters: _react.PropTypes.object
  }),
  sortIndicator: _react.PropTypes.bool,
  'export': _react.PropTypes.bool
};

TableHeaderColumn.defaultProps = {
  dataAlign: 'left',
  headerAlign: undefined,
  dataSort: false,
  dataFormat: undefined,
  csvFormat: undefined,
  csvHeader: undefined,
  isKey: false,
  editable: true,
  onSort: undefined,
  hidden: false,
  hiddenOnInsert: false,
  searchable: true,
  className: '',
  columnTitle: false,
  width: null,
  sortFunc: undefined,
  columnClassName: '',
  filterFormatted: false,
  filterValue: undefined,
  sort: undefined,
  formatExtraData: undefined,
  sortFuncExtraData: undefined,
  filter: undefined,
  sortIndicator: true
};

exports['default'] = TableHeaderColumn;
module.exports = exports['default'];