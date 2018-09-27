'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Const = require('./Const');

var _Const2 = _interopRequireDefault(_Const);

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

var _Date = require('./filters/Date');

var _Date2 = _interopRequireDefault(_Date);

var _Text = require('./filters/Text');

var _Text2 = _interopRequireDefault(_Text);

var _Regex = require('./filters/Regex');

var _Regex2 = _interopRequireDefault(_Regex);

var _Select = require('./filters/Select');

var _Select2 = _interopRequireDefault(_Select);

var _Number = require('./filters/Number');

var _Number2 = _interopRequireDefault(_Number);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint default-case: 0 */
/* eslint guard-for-in: 0 */


var TableHeaderColumn = function (_Component) {
  _inherits(TableHeaderColumn, _Component);

  function TableHeaderColumn(props) {
    _classCallCheck(this, TableHeaderColumn);

    var _this = _possibleConstructorReturn(this, (TableHeaderColumn.__proto__ || Object.getPrototypeOf(TableHeaderColumn)).call(this, props));

    _this.handleColumnClick = function () {
      return _this.__handleColumnClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleFilter = _this.handleFilter.bind(_this);
    return _this;
  }

  _createClass(TableHeaderColumn, [{
    key: '__handleColumnClick__REACT_HOT_LOADER__',
    value: function __handleColumnClick__REACT_HOT_LOADER__() {
      return this.__handleColumnClick__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.reset) {
        this.cleanFiltered();
      }

      // If column not displaying the same dataField, reset the filter accordingly
      if (nextProps.filter && nextProps.dataField !== this.props.dataField) {
        var emitter = nextProps.filter.emitter || {};
        var currentFilter = emitter.currentFilter || {};
        var filter = currentFilter[nextProps.dataField];
        var value = filter ? filter.value : '';

        var _ref = this.getFilters(nextProps) || {},
            ref = _ref.ref;

        if (this.refs[ref]) {
          this.refs[ref].setState({ value: value });
        }
      }
    }
  }, {
    key: '__handleColumnClick__REACT_HOT_LOADER__',
    value: function __handleColumnClick__REACT_HOT_LOADER__() {
      if (this.props.isOnlyHead || !this.props.dataSort) return;
      var order = this.props.sort;

      if (!order && this.props.defaultASC) order = _Const2.default.SORT_ASC;else order = this.props.sort === _Const2.default.SORT_DESC ? _Const2.default.SORT_ASC : _Const2.default.SORT_DESC;
      this.props.onSort(order, this.props.dataField);
    }
  }, {
    key: 'handleFilter',
    value: function handleFilter(value, type) {
      var filter = this.props.filter;

      filter.emitter.handleFilter(this.props.dataField, value, type, filter);
    }
  }, {
    key: 'getFilters',
    value: function getFilters() {
      var _this2 = this;

      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var headerText = props.headerText,
          children = props.children;

      switch (props.filter.type) {
        case _Const2.default.FILTER_TYPE.TEXT:
          {
            return _react2.default.createElement(_Text2.default, _extends({ ref: function ref(n) {
                return _this2.textFilter = n;
              } }, props.filter, {
              columnName: headerText || children, filterHandler: this.handleFilter }));
          }
        case _Const2.default.FILTER_TYPE.REGEX:
          {
            return _react2.default.createElement(_Regex2.default, _extends({ ref: function ref(n) {
                return _this2.regexFilter = n;
              } }, props.filter, {
              columnName: headerText || children, filterHandler: this.handleFilter }));
          }
        case _Const2.default.FILTER_TYPE.SELECT:
          {
            return _react2.default.createElement(_Select2.default, _extends({ ref: function ref(n) {
                return _this2.selectFilter = n;
              } }, props.filter, {
              columnName: headerText || children, filterHandler: this.handleFilter }));
          }
        case _Const2.default.FILTER_TYPE.NUMBER:
          {
            return _react2.default.createElement(_Number2.default, _extends({ ref: function ref(n) {
                return _this2.numberFilter = n;
              } }, props.filter, {
              columnName: headerText || children, filterHandler: this.handleFilter }));
          }
        case _Const2.default.FILTER_TYPE.DATE:
          {
            return _react2.default.createElement(_Date2.default, _extends({ ref: function ref(n) {
                return _this2.dateFilter = n;
              } }, props.filter, {
              columnName: headerText || children, filterHandler: this.handleFilter }));
          }
        case _Const2.default.FILTER_TYPE.CUSTOM:
          {
            var elm = props.filter.getElement(this.handleFilter, props.filter.customFilterParameters);

            return _react2.default.cloneElement(elm, { ref: function ref(n) {
                return _this2.customFilter = n;
              } });
          }
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.headerCol.setAttribute('data-field', this.props.dataField);
    }
  }, {
    key: 'renderDefaultCaret',
    value: function renderDefaultCaret(dataSort, isBootstrap4) {
      if (!dataSort) return null;
      if (isBootstrap4) {
        return _react2.default.createElement('span', { className: 'order fa fa-sort',
          style: { margin: '10px 0 10px 5px', color: '#ccc' } });
      } else {
        return _react2.default.createElement(
          'span',
          { className: 'order' },
          _react2.default.createElement(
            'span',
            { className: 'dropdown' },
            _react2.default.createElement('span', { className: 'caret', style: { margin: '10px 0 10px 5px', color: '#ccc' } })
          ),
          _react2.default.createElement(
            'span',
            { className: 'dropup' },
            _react2.default.createElement('span', { className: 'caret', style: { margin: '10px 0', color: '#ccc' } })
          )
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var defaultCaret = void 0;
      var sortCaret = void 0;
      var sortClass = void 0;
      var _props = this.props,
          headerText = _props.headerText,
          dataAlign = _props.dataAlign,
          dataField = _props.dataField,
          headerAlign = _props.headerAlign,
          headerTitle = _props.headerTitle,
          hidden = _props.hidden,
          sort = _props.sort,
          dataSort = _props.dataSort,
          sortIndicator = _props.sortIndicator,
          children = _props.children,
          caretRender = _props.caretRender,
          className = _props.className,
          isOnlyHead = _props.isOnlyHead,
          version = _props.version,
          customSortClass = _props.sortHeaderColumnClassName,
          style = _props.thStyle;

      var thStyle = _extends({
        textAlign: headerAlign || dataAlign,
        display: hidden ? 'none' : null
      }, style);
      var isBootstrap4 = _util2.default.isBootstrap4(version);
      if (!isOnlyHead) {
        if (sortIndicator) {
          defaultCaret = this.renderDefaultCaret(dataSort, isBootstrap4);
        }
        sortCaret = sort ? _util2.default.renderReactSortCaret(sort, isBootstrap4) : defaultCaret;
        if (caretRender) {
          sortCaret = caretRender(sort, dataField);
        }
      }

      if (sort) {
        sortClass = _util2.default.isFunction(customSortClass) ? customSortClass(sort, dataField) : customSortClass;
      }
      var classes = (0, _classnames2.default)(_util2.default.isFunction(className) ? className() : className, !isOnlyHead && dataSort ? 'sort-column' : '', sortClass);

      var attr = {};
      if (headerTitle) {
        if (typeof children === 'string' && !headerText) {
          attr.title = children;
        } else {
          attr.title = headerText;
        }
      }
      return _react2.default.createElement(
        'th',
        _extends({ ref: function ref(node) {
            return _this3.headerCol = node;
          },
          className: classes,
          style: thStyle,
          onClick: this.handleColumnClick,
          rowSpan: this.props.rowSpan,
          colSpan: this.props.colSpan,
          'data-is-only-head': this.props.isOnlyHead
        }, attr),
        children,
        sortCaret,
        _react2.default.createElement(
          'div',
          { onClick: function onClick(e) {
              return e.stopPropagation();
            } },
          this.props.filter && !isOnlyHead ? this.getFilters() : null
        )
      );
    }
  }, {
    key: 'cleanFiltered',
    value: function cleanFiltered() {
      if (!this.props.filter) return;

      switch (this.props.filter.type) {
        case _Const2.default.FILTER_TYPE.TEXT:
          {
            this.textFilter.cleanFiltered();
            break;
          }
        case _Const2.default.FILTER_TYPE.REGEX:
          {
            this.regexFilter.cleanFiltered();
            break;
          }
        case _Const2.default.FILTER_TYPE.SELECT:
          {
            this.selectFilter.cleanFiltered();
            break;
          }
        case _Const2.default.FILTER_TYPE.NUMBER:
          {
            this.numberFilter.cleanFiltered();
            break;
          }
        case _Const2.default.FILTER_TYPE.DATE:
          {
            this.dateFilter.cleanFiltered();
            break;
          }
        case _Const2.default.FILTER_TYPE.CUSTOM:
          {
            this.customFilter.cleanFiltered();
            break;
          }
      }
    }
  }, {
    key: 'applyFilter',
    value: function applyFilter(val) {
      if (!this.props.filter) return;
      switch (this.props.filter.type) {
        case _Const2.default.FILTER_TYPE.TEXT:
          {
            this.textFilter.applyFilter(val);
            break;
          }
        case _Const2.default.FILTER_TYPE.REGEX:
          {
            this.regexFilter.applyFilter(val);
            break;
          }
        case _Const2.default.FILTER_TYPE.SELECT:
          {
            this.selectFilter.applyFilter(val);
            break;
          }
        case _Const2.default.FILTER_TYPE.NUMBER:
          {
            this.numberFilter.applyFilter(val);
            break;
          }
        case _Const2.default.FILTER_TYPE.DATE:
          {
            this.dateFilter.applyFilter(val);
            break;
          }
      }
    }
  }]);

  return TableHeaderColumn;
}(_react.Component);

var filterTypeArray = [];
for (var key in _Const2.default.FILTER_TYPE) {
  filterTypeArray.push(_Const2.default.FILTER_TYPE[key]);
}

TableHeaderColumn.propTypes = {
  dataField: _propTypes2.default.string,
  dataAlign: _propTypes2.default.string,
  headerAlign: _propTypes2.default.string,
  headerTitle: _propTypes2.default.bool,
  headerText: _propTypes2.default.string,
  dataSort: _propTypes2.default.bool,
  onSort: _propTypes2.default.func,
  dataFormat: _propTypes2.default.func,
  csvFormat: _propTypes2.default.func,
  csvHeader: _propTypes2.default.string,
  csvFieldType: _propTypes2.default.oneOf([_Const2.default.CSV_STRING_TYPE, _Const2.default.CSV_NUMBER_TYPE]),
  isKey: _propTypes2.default.bool,
  editable: _propTypes2.default.any,
  hidden: _propTypes2.default.bool,
  hiddenOnInsert: _propTypes2.default.bool,
  searchable: _propTypes2.default.bool,
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  width: _propTypes2.default.string,
  sortFunc: _propTypes2.default.func,
  sortFuncExtraData: _propTypes2.default.any,
  sortHeaderColumnClassName: _propTypes2.default.any,
  columnClassName: _propTypes2.default.any,
  editColumnClassName: _propTypes2.default.any,
  invalidEditColumnClassName: _propTypes2.default.any,
  columnTitle: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func, _propTypes2.default.string]),
  filterFormatted: _propTypes2.default.bool,
  filterValue: _propTypes2.default.func,
  sort: _propTypes2.default.string,
  caretRender: _propTypes2.default.func,
  formatExtraData: _propTypes2.default.any,
  csvFormatExtraData: _propTypes2.default.any,
  filter: _propTypes2.default.shape({
    type: _propTypes2.default.oneOf(filterTypeArray),
    delay: _propTypes2.default.number,
    options: _propTypes2.default.oneOfType([_propTypes2.default.object, // for SelectFilter
    _propTypes2.default.arrayOf(_propTypes2.default.number) // for NumberFilter
    ]),
    numberComparators: _propTypes2.default.arrayOf(_propTypes2.default.string),
    emitter: _propTypes2.default.object,
    placeholder: _propTypes2.default.string,
    getElement: _propTypes2.default.func,
    customFilterParameters: _propTypes2.default.object,
    condition: _propTypes2.default.oneOf([_Const2.default.FILTER_COND_EQ, _Const2.default.FILTER_COND_LIKE])
  }),
  sortIndicator: _propTypes2.default.bool,
  export: _propTypes2.default.bool,
  expandable: _propTypes2.default.bool,
  tdAttr: _propTypes2.default.object,
  editTdAttr: _propTypes2.default.object,
  tdStyle: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object]),
  thStyle: _propTypes2.default.object,
  keyValidator: _propTypes2.default.bool,
  defaultASC: _propTypes2.default.bool
};

TableHeaderColumn.defaultProps = {
  dataAlign: 'left',
  headerAlign: undefined,
  headerTitle: true,
  dataSort: false,
  dataFormat: undefined,
  csvFormat: undefined,
  csvHeader: undefined,
  csvFieldType: _Const2.default.CSV_STRING_TYPE,
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
  editColumnClassName: '',
  invalidEditColumnClassName: '',
  filterFormatted: false,
  filterValue: undefined,
  sort: undefined,
  formatExtraData: undefined,
  sortFuncExtraData: undefined,
  filter: undefined,
  sortIndicator: true,
  expandable: true,
  tdAttr: undefined,
  editTdAttr: undefined,
  tdStyle: undefined,
  thStyle: undefined,
  keyValidator: false,
  defaultASC: false
};

var _default = TableHeaderColumn;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TableHeaderColumn, 'TableHeaderColumn', '/home/nogi/nogi/forks/react-bootstrap-table/src/TableHeaderColumn.js');

  __REACT_HOT_LOADER__.register(filterTypeArray, 'filterTypeArray', '/home/nogi/nogi/forks/react-bootstrap-table/src/TableHeaderColumn.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/nogi/nogi/forks/react-bootstrap-table/src/TableHeaderColumn.js');
}();

;