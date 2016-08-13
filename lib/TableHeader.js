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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Const = require('./Const');

var _Const2 = _interopRequireDefault(_Const);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _SelectRowHeaderColumn = require('./SelectRowHeaderColumn');

var _SelectRowHeaderColumn2 = _interopRequireDefault(_SelectRowHeaderColumn);

var Checkbox = (function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    _get(Object.getPrototypeOf(Checkbox.prototype), 'constructor', this).apply(this, arguments);
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
      _reactDom2['default'].findDOMNode(this).indeterminate = checked === 'indeterminate';
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement('input', { className: 'react-bs-select-all',
        type: 'checkbox',
        checked: this.props.checked,
        onChange: this.props.onChange });
    }
  }]);

  return Checkbox;
})(_react.Component);

var TableHeader = (function (_Component2) {
  _inherits(TableHeader, _Component2);

  function TableHeader() {
    _classCallCheck(this, TableHeader);

    _get(Object.getPrototypeOf(TableHeader.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(TableHeader, [{
    key: 'render',
    value: function render() {
      var _this = this;

      var containerClasses = (0, _classnames2['default'])('react-bs-container-header', 'table-header-wrapper');
      var tableClasses = (0, _classnames2['default'])('table', 'table-hover', {
        'table-bordered': this.props.bordered,
        'table-condensed': this.props.condensed
      }, this.props.tableHeaderClass);
      var selectRowHeaderCol = null;
      if (!this.props.hideSelectColumn) selectRowHeaderCol = this.renderSelectRowHeader();
      var i = 0;
      return _react2['default'].createElement(
        'div',
        { ref: 'container', className: containerClasses, style: this.props.style },
        _react2['default'].createElement(
          'table',
          { className: tableClasses },
          _react2['default'].createElement(
            'thead',
            null,
            _react2['default'].createElement(
              'tr',
              { ref: 'header' },
              selectRowHeaderCol,
              _react2['default'].Children.map(this.props.children, function (elm) {
                var _props = _this.props;
                var sortIndicator = _props.sortIndicator;
                var sortName = _props.sortName;
                var sortOrder = _props.sortOrder;
                var onSort = _props.onSort;
                var _elm$props = elm.props;
                var dataField = _elm$props.dataField;
                var dataSort = _elm$props.dataSort;

                var sort = dataSort && dataField === sortName ? sortOrder : undefined;
                return _react2['default'].cloneElement(elm, { key: i++, onSort: onSort, sort: sort, sortIndicator: sortIndicator });
              })
            )
          )
        )
      );
    }
  }, {
    key: 'renderSelectRowHeader',
    value: function renderSelectRowHeader() {
      if (this.props.customComponent) {
        var CustomComponent = this.props.customComponent;
        var checkedStatus = this.props.isSelectAll !== 'indeterminate' ? this.props.isSelectAll : '';
        var indeterminate = this.props.isSelectAll === 'indeterminate' ? 'indeterminate' : '';
        return _react2['default'].createElement(CustomComponent, { type: 'checkbox', checked: checkedStatus,
          indeterminate: indeterminate, disabled: false,
          onChange: this.props.onSelectAllRow, rowIndex: 'Header' });
      } else if (this.props.rowSelectType === _Const2['default'].ROW_SELECT_SINGLE) {
        return _react2['default'].createElement(_SelectRowHeaderColumn2['default'], null);
      } else if (this.props.rowSelectType === _Const2['default'].ROW_SELECT_MULTI) {
        return _react2['default'].createElement(
          _SelectRowHeaderColumn2['default'],
          null,
          _react2['default'].createElement(Checkbox, {
            onChange: this.props.onSelectAllRow,
            checked: this.props.isSelectAll })
        );
      } else {
        return null;
      }
    }
  }]);

  return TableHeader;
})(_react.Component);

TableHeader.propTypes = {
  tableHeaderClass: _react.PropTypes.string,
  style: _react.PropTypes.object,
  rowSelectType: _react.PropTypes.string,
  onSort: _react.PropTypes.func,
  onSelectAllRow: _react.PropTypes.func,
  sortName: _react.PropTypes.string,
  sortOrder: _react.PropTypes.string,
  hideSelectColumn: _react.PropTypes.bool,
  bordered: _react.PropTypes.bool,
  condensed: _react.PropTypes.bool,
  isFiltered: _react.PropTypes.bool,
  isSelectAll: _react.PropTypes.oneOf([true, 'indeterminate', false]),
  sortIndicator: _react.PropTypes.bool,
  customComponent: _react.PropTypes.func
};

exports['default'] = TableHeader;
module.exports = exports['default'];