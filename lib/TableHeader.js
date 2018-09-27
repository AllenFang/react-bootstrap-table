'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Const = require('./Const');

var _Const2 = _interopRequireDefault(_Const);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _SelectRowHeaderColumn = require('./SelectRowHeaderColumn');

var _SelectRowHeaderColumn2 = _interopRequireDefault(_SelectRowHeaderColumn);

var _ExpandRowHeaderColumn = require('./ExpandRowHeaderColumn');

var _ExpandRowHeaderColumn2 = _interopRequireDefault(_ExpandRowHeaderColumn);

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    return _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
  }

  _createClass(Checkbox, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.update(this.props.checked);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.update(props.checked);
    }
  }, {
    key: 'update',
    value: function update(checked) {
      _reactDom2.default.findDOMNode(this).indeterminate = checked === 'indeterminate';
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('input', { className: 'react-bs-select-all',
        type: 'checkbox',
        checked: this.props.checked,
        onChange: this.props.onChange });
    }
  }]);

  return Checkbox;
}(_react.Component);

function getSortOrder(sortList, field, enableSort) {
  if (!enableSort) return undefined;
  var result = sortList.filter(function (sortObj) {
    return sortObj.sortField === field;
  });
  if (result.length > 0) {
    return result[0].order;
  } else {
    return undefined;
  }
}

var TableHeader = function (_Component2) {
  _inherits(TableHeader, _Component2);

  function TableHeader() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, TableHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = TableHeader.__proto__ || Object.getPrototypeOf(TableHeader)).call.apply(_ref, [this].concat(args))), _this2), _this2.getHeaderColGrouop = function () {
      var _this3;

      return (_this3 = _this2).__getHeaderColGrouop__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(TableHeader, [{
    key: '__getHeaderColGrouop__REACT_HOT_LOADER__',
    value: function __getHeaderColGrouop__REACT_HOT_LOADER__() {
      return this.__getHeaderColGrouop__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          sortIndicator = _props.sortIndicator,
          sortList = _props.sortList,
          onSort = _props.onSort,
          reset = _props.reset,
          version = _props.version,
          condensed = _props.condensed,
          bordered = _props.bordered,
          expandedColumnHeaderComponent = _props.expandedColumnHeaderComponent,
          noAnyExpand = _props.noAnyExpand,
          toggleExpandAllChilds = _props.toggleExpandAllChilds,
          expandAll = _props.expandAll;

      var containerClasses = (0, _classnames2.default)('react-bs-container-header', 'table-header-wrapper', this.props.headerContainerClass);
      var customTableClasses = {
        'table-bordered': bordered
      };
      if (condensed) {
        if (_util2.default.isBootstrap4(version)) customTableClasses['table-sm'] = true;else customTableClasses['table-condensed'] = true;
      }
      var tableClasses = (0, _classnames2.default)('table', 'table-hover', customTableClasses, this.props.tableHeaderClass);

      var rowCount = Math.max.apply(Math, _toConsumableArray(_react2.default.Children.map(this.props.children, function (elm) {
        return elm && elm.props.row ? Number(elm.props.row) : 0;
      })));

      var rows = [];
      var rowKey = 0;

      rows[0] = [];
      rows[0].push([this.props.expandColumnVisible && this.props.expandColumnBeforeSelectColumn && _react2.default.createElement(_ExpandRowHeaderColumn2.default, { key: 'expandCol', rowCount: rowCount + 1,
        expandedColumnHeaderComponent: expandedColumnHeaderComponent,
        noAnyExpand: noAnyExpand,
        expandAll: expandAll,
        toggleExpandAllChilds: toggleExpandAllChilds })], [this.renderSelectRowHeader(rowCount + 1, rowKey++)], [this.props.expandColumnVisible && !this.props.expandColumnBeforeSelectColumn && _react2.default.createElement(_ExpandRowHeaderColumn2.default, { key: 'expandCol', rowCount: rowCount + 1,
        expandedColumnHeaderComponent: expandedColumnHeaderComponent,
        noAnyExpand: noAnyExpand,
        expandAll: expandAll,
        toggleExpandAllChilds: toggleExpandAllChilds })]);

      _react2.default.Children.forEach(this.props.children, function (elm) {
        if (elm === null || elm === undefined) {
          // Skip null or undefined elements.
          return;
        }
        var _elm$props = elm.props,
            dataField = _elm$props.dataField,
            dataSort = _elm$props.dataSort;

        var sort = getSortOrder(sortList, dataField, dataSort);
        var rowIndex = elm.props.row ? Number(elm.props.row) : 0;
        var rowSpan = elm.props.rowSpan ? Number(elm.props.rowSpan) : 1;
        if (rows[rowIndex] === undefined) {
          rows[rowIndex] = [];
        }
        if (rowSpan + rowIndex === rowCount + 1) {
          rows[rowIndex].push(_react2.default.cloneElement(elm, { reset: reset, key: rowKey++, onSort: onSort, sort: sort, sortIndicator: sortIndicator, isOnlyHead: false, version: version }));
        } else {
          rows[rowIndex].push(_react2.default.cloneElement(elm, { key: rowKey++, isOnlyHead: true, version: version }));
        }
      });

      var trs = rows.map(function (row, indexRow) {
        return _react2.default.createElement(
          'tr',
          { key: indexRow },
          row
        );
      });

      return _react2.default.createElement(
        'div',
        {
          ref: function ref(node) {
            return _this4.container = node;
          },
          className: containerClasses,
          style: this.props.style },
        _react2.default.createElement(
          'table',
          { className: tableClasses },
          _react2.default.cloneElement(this.props.colGroups, { ref: function ref(node) {
              return _this4.headerGrp = node;
            } }),
          _react2.default.createElement(
            'thead',
            { ref: function ref(node) {
                return _this4.header = node;
              } },
            trs
          )
        )
      );
    }
  }, {
    key: '__getHeaderColGrouop__REACT_HOT_LOADER__',
    value: function __getHeaderColGrouop__REACT_HOT_LOADER__() {
      return this.headerGrp.childNodes;
    }
  }, {
    key: 'renderSelectRowHeader',
    value: function renderSelectRowHeader(rowCount, rowKey) {
      if (this.props.hideSelectColumn) {
        return null;
      } else if (this.props.customComponent) {
        var CustomComponent = this.props.customComponent;
        return _react2.default.createElement(
          _SelectRowHeaderColumn2.default,
          { key: rowKey, rowCount: rowCount },
          _react2.default.createElement(CustomComponent, { type: 'checkbox', checked: this.props.isSelectAll,
            indeterminate: this.props.isSelectAll === 'indeterminate', disabled: false,
            onChange: this.props.onSelectAllRow, rowIndex: 'Header' })
        );
      } else if (this.props.rowSelectType === _Const2.default.ROW_SELECT_SINGLE) {
        return _react2.default.createElement(_SelectRowHeaderColumn2.default, { key: rowKey, rowCount: rowCount });
      } else if (this.props.rowSelectType === _Const2.default.ROW_SELECT_MULTI) {
        return _react2.default.createElement(
          _SelectRowHeaderColumn2.default,
          { key: rowKey, rowCount: rowCount },
          _react2.default.createElement(Checkbox, {
            onChange: this.props.onSelectAllRow,
            checked: this.props.isSelectAll })
        );
      } else {
        return null;
      }
    }
  }]);

  return TableHeader;
}(_react.Component);

TableHeader.propTypes = {
  headerContainerClass: _propTypes2.default.string,
  tableHeaderClass: _propTypes2.default.string,
  style: _propTypes2.default.object,
  rowSelectType: _propTypes2.default.string,
  onSort: _propTypes2.default.func,
  onSelectAllRow: _propTypes2.default.func,
  sortList: _propTypes2.default.array,
  hideSelectColumn: _propTypes2.default.bool,
  bordered: _propTypes2.default.bool,
  condensed: _propTypes2.default.bool,
  isFiltered: _propTypes2.default.bool,
  isSelectAll: _propTypes2.default.oneOf([true, 'indeterminate', false]),
  sortIndicator: _propTypes2.default.bool,
  customComponent: _propTypes2.default.func,
  colGroups: _propTypes2.default.element,
  reset: _propTypes2.default.bool,
  expandColumnVisible: _propTypes2.default.bool,
  expandColumnComponent: _propTypes2.default.func,
  expandedColumnHeaderComponent: _propTypes2.default.func,
  expandColumnBeforeSelectColumn: _propTypes2.default.bool,
  version: _propTypes2.default.string,
  noAnyExpand: _propTypes2.default.bool,
  expandAll: _propTypes2.default.bool,
  toggleExpandAllChilds: _propTypes2.default.func
};

var _default = TableHeader;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Checkbox, 'Checkbox', '/home/nogi/nogi/forks/react-bootstrap-table/src/TableHeader.js');

  __REACT_HOT_LOADER__.register(getSortOrder, 'getSortOrder', '/home/nogi/nogi/forks/react-bootstrap-table/src/TableHeader.js');

  __REACT_HOT_LOADER__.register(TableHeader, 'TableHeader', '/home/nogi/nogi/forks/react-bootstrap-table/src/TableHeader.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/nogi/nogi/forks/react-bootstrap-table/src/TableHeader.js');
}();

;