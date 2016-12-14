'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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
      if (!this.props.dataSort) return;
      var order = this.props.sort === _Const2.default.SORT_DESC ? _Const2.default.SORT_ASC : _Const2.default.SORT_DESC;
      this.props.onSort(order, this.props.dataField);
    }
  }, {
    key: 'handleFilter',
    value: function handleFilter(value, type) {
      this.props.filter.emitter.handleFilter(this.props.dataField, value, type);
    }
  }, {
    key: 'getFilters',
    value: function getFilters() {
      switch (this.props.filter.type) {
        case _Const2.default.FILTER_TYPE.TEXT:
          {
            return _react2.default.createElement(_Text2.default, _extends({ ref: 'textFilter' }, this.props.filter, {
              columnName: this.props.children, filterHandler: this.handleFilter }));
          }
        case _Const2.default.FILTER_TYPE.REGEX:
          {
            return _react2.default.createElement(_Regex2.default, _extends({ ref: 'regexFilter' }, this.props.filter, {
              columnName: this.props.children, filterHandler: this.handleFilter }));
          }
        case _Const2.default.FILTER_TYPE.SELECT:
          {
            return _react2.default.createElement(_Select2.default, _extends({ ref: 'selectFilter' }, this.props.filter, {
              columnName: this.props.children, filterHandler: this.handleFilter }));
          }
        case _Const2.default.FILTER_TYPE.NUMBER:
          {
            return _react2.default.createElement(_Number2.default, _extends({ ref: 'numberFilter' }, this.props.filter, {
              columnName: this.props.children, filterHandler: this.handleFilter }));
          }
        case _Const2.default.FILTER_TYPE.DATE:
          {
            return _react2.default.createElement(_Date2.default, _extends({ ref: 'dateFilter' }, this.props.filter, {
              columnName: this.props.children, filterHandler: this.handleFilter }));
          }
        case _Const2.default.FILTER_TYPE.CUSTOM:
          {
            var elm = this.props.filter.getElement(this.handleFilter, this.props.filter.customFilterParameters);

            return _react2.default.cloneElement(elm, { ref: 'customFilter' });
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
      var defaultCaret = void 0;
      var _props = this.props,
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
          className = _props.className;

      var thStyle = {
        textAlign: headerAlign || dataAlign,
        display: hidden ? 'none' : null
      };
      if (sortIndicator) {
        defaultCaret = !dataSort ? null : _react2.default.createElement(
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
      var sortCaret = sort ? _util2.default.renderReactSortCaret(sort) : defaultCaret;
      if (caretRender) {
        sortCaret = caretRender(sort, dataField);
      }
      var classes = (0, _classnames2.default)(typeof className === 'function' ? className() : className, dataSort ? 'sort-column' : '');

      var title = headerTitle && typeof children === 'string' ? { title: children } : null;
      return _react2.default.createElement(
        'th',
        _extends({ ref: 'header-col',
          className: classes,
          style: thStyle,
          onClick: this.handleColumnClick
        }, title),
        children,
        sortCaret,
        _react2.default.createElement(
          'div',
          { onClick: function onClick(e) {
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
        case _Const2.default.FILTER_TYPE.TEXT:
          {
            this.refs.textFilter.cleanFiltered();
            break;
          }
        case _Const2.default.FILTER_TYPE.REGEX:
          {
            this.refs.regexFilter.cleanFiltered();
            break;
          }
        case _Const2.default.FILTER_TYPE.SELECT:
          {
            this.refs.selectFilter.cleanFiltered();
            break;
          }
        case _Const2.default.FILTER_TYPE.NUMBER:
          {
            this.refs.numberFilter.cleanFiltered();
            break;
          }
        case _Const2.default.FILTER_TYPE.DATE:
          {
            this.refs.dateFilter.cleanFiltered();
            break;
          }
        case _Const2.default.FILTER_TYPE.CUSTOM:
          {
            this.refs.customFilter.cleanFiltered();
            break;
          }
      }
    }
  }, {
    key: 'applyFilter',
    value: function applyFilter(val) {
      if (this.props.filter === undefined) return;
      switch (this.props.filter.type) {
        case _Const2.default.FILTER_TYPE.TEXT:
          {
            this.refs.textFilter.applyFilter(val);
            break;
          }
        case _Const2.default.FILTER_TYPE.REGEX:
          {
            this.refs.regexFilter.applyFilter(val);
            break;
          }
        case _Const2.default.FILTER_TYPE.SELECT:
          {
            this.refs.selectFilter.applyFilter(val);
            break;
          }
        case _Const2.default.FILTER_TYPE.NUMBER:
          {
            this.refs.numberFilter.applyFilter(val);
            break;
          }
        case _Const2.default.FILTER_TYPE.DATE:
          {
            this.refs.dateFilter.applyFilter(val);
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
  dataField: _react.PropTypes.string,
  dataAlign: _react.PropTypes.string,
  headerAlign: _react.PropTypes.string,
  headerTitle: _react.PropTypes.bool,
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
  className: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
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
  export: _react.PropTypes.bool
};

TableHeaderColumn.defaultProps = {
  dataAlign: 'left',
  headerAlign: undefined,
  headerTitle: true,
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

var _default = TableHeaderColumn;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TableHeaderColumn, 'TableHeaderColumn', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/TableHeaderColumn.js');

  __REACT_HOT_LOADER__.register(filterTypeArray, 'filterTypeArray', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/TableHeaderColumn.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/TableHeaderColumn.js');
}();

;