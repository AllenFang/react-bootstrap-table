'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Const = require('./Const');

var _Const2 = _interopRequireDefault(_Const);

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableColumn = function (_Component) {
  _inherits(TableColumn, _Component);

  function TableColumn(props) {
    _classCallCheck(this, TableColumn);

    var _this = _possibleConstructorReturn(this, (TableColumn.__proto__ || Object.getPrototypeOf(TableColumn)).call(this, props));

    _this.handleCellEdit = function () {
      return _this.__handleCellEdit__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleCellClick = function () {
      return _this.__handleCellClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleKeyDown = function () {
      return _this.__handleKeyDown__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    return _this;
  }
  /* eslint no-unused-vars: [0, { "args": "after-used" }] */


  _createClass(TableColumn, [{
    key: '__handleKeyDown__REACT_HOT_LOADER__',
    value: function __handleKeyDown__REACT_HOT_LOADER__() {
      return this.__handleKeyDown__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleCellClick__REACT_HOT_LOADER__',
    value: function __handleCellClick__REACT_HOT_LOADER__() {
      return this.__handleCellClick__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleCellEdit__REACT_HOT_LOADER__',
    value: function __handleCellEdit__REACT_HOT_LOADER__() {
      return this.__handleCellEdit__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var children = this.props.children;

      var shouldUpdated = this.props.width !== nextProps.width || this.props.className !== nextProps.className || this.props.hidden !== nextProps.hidden || this.props.dataAlign !== nextProps.dataAlign || this.props.isFocus !== nextProps.isFocus || (typeof children === 'undefined' ? 'undefined' : _typeof(children)) !== _typeof(nextProps.children) || ('' + this.props.onEdit).toString() !== ('' + nextProps.onEdit).toString();

      if (shouldUpdated) {
        return shouldUpdated;
      }

      if ((typeof children === 'undefined' ? 'undefined' : _typeof(children)) === 'object' && children !== null && children.props !== null) {
        if (children.props.type === 'checkbox' || children.props.type === 'radio') {
          shouldUpdated = shouldUpdated || children.props.type !== nextProps.children.props.type || children.props.checked !== nextProps.children.props.checked || children.props.disabled !== nextProps.children.props.disabled;
        } else {
          shouldUpdated = true;
        }
      } else {
        shouldUpdated = shouldUpdated || children !== nextProps.children;
      }

      if (shouldUpdated) {
        return shouldUpdated;
      }

      if (!(this.props.cellEdit && nextProps.cellEdit)) {
        return false;
      } else {
        return shouldUpdated || this.props.cellEdit.mode !== nextProps.cellEdit.mode;
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var dom = _reactDom2.default.findDOMNode(this);
      if (this.props.isFocus) {
        dom.focus();
      } else {
        dom.blur();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var dom = _reactDom2.default.findDOMNode(this);
      if (this.props.isFocus) {
        dom.focus();
      } else {
        dom.blur();
      }
    }
  }, {
    key: '__handleCellEdit__REACT_HOT_LOADER__',
    value: function __handleCellEdit__REACT_HOT_LOADER__(e) {
      try {
        if (this.props.cellEdit.mode === _Const2.default.CELL_EDIT_DBCLICK) {
          if (document.selection && document.selection.empty) {
            document.selection.empty();
          } else if (window.getSelection) {
            var sel = window.getSelection();
            sel.removeAllRanges();
          }
        }
      } catch (err) {} /* eslint no-empty: 0 */
      this.props.onEdit(this.props.rIndex + 1, e.currentTarget.cellIndex, e);
      if (this.props.cellEdit.mode !== _Const2.default.CELL_EDIT_DBCLICK) {
        this.props.onClick(e, this.props.rIndex + 1, e.currentTarget.cellIndex);
      }
    }
  }, {
    key: '__handleCellClick__REACT_HOT_LOADER__',
    value: function __handleCellClick__REACT_HOT_LOADER__(e) {
      var _props = this.props,
          onClick = _props.onClick,
          rIndex = _props.rIndex;

      if (onClick) {
        onClick(e, rIndex + 1, e.currentTarget.cellIndex);
      }
    }
  }, {
    key: '__handleKeyDown__REACT_HOT_LOADER__',
    value: function __handleKeyDown__REACT_HOT_LOADER__(e) {
      if (this.props.keyBoardNav) {
        this.props.onKeyDown(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          columnTitle = _props2.columnTitle,
          dataAlign = _props2.dataAlign,
          hidden = _props2.hidden,
          cellEdit = _props2.cellEdit,
          attrs = _props2.attrs,
          style = _props2.style,
          isFocus = _props2.isFocus,
          keyBoardNav = _props2.keyBoardNav,
          tabIndex = _props2.tabIndex,
          customNavStyle = _props2.customNavStyle,
          withoutTabIndex = _props2.withoutTabIndex,
          row = _props2.row;
      var className = this.props.className;


      var tdStyle = _extends({
        textAlign: dataAlign,
        display: hidden ? 'none' : null
      }, style);

      var opts = {};

      if (cellEdit) {
        if (cellEdit.mode === _Const2.default.CELL_EDIT_CLICK) {
          opts.onClick = this.handleCellEdit;
        } else if (cellEdit.mode === _Const2.default.CELL_EDIT_DBCLICK) {
          opts.onDoubleClick = this.handleCellEdit;
        } else {
          opts.onClick = this.handleCellClick;
        }
      }

      if (keyBoardNav && isFocus) {
        opts.onKeyDown = this.handleKeyDown;
      }

      if (isFocus) {
        if (customNavStyle) {
          var cusmtStyle = _util2.default.isFunction(customNavStyle) ? customNavStyle(children, row) : customNavStyle;
          tdStyle = _extends({}, tdStyle, cusmtStyle);
        } else {
          className = className + ' default-focus-cell';
        }
      }

      var attr = {};
      if (!withoutTabIndex) attr.tabIndex = tabIndex;
      return _react2.default.createElement(
        'td',
        _extends({}, attr, { style: tdStyle,
          title: columnTitle,
          className: className
        }, opts, attrs),
        typeof children === 'boolean' ? children.toString() : children
      );
    }
  }]);

  return TableColumn;
}(_react.Component);

TableColumn.propTypes = {
  rIndex: _propTypes2.default.number,
  dataAlign: _propTypes2.default.string,
  hidden: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  columnTitle: _propTypes2.default.string,
  children: _propTypes2.default.node,
  onClick: _propTypes2.default.func,
  attrs: _propTypes2.default.object,
  style: _propTypes2.default.object,
  isFocus: _propTypes2.default.bool,
  onKeyDown: _propTypes2.default.func,
  tabIndex: _propTypes2.default.string,
  withoutTabIndex: _propTypes2.default.bool,
  keyBoardNav: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.object]),
  customNavStyle: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object]),
  row: _propTypes2.default.any /* only used on custom styling for navigation */
};

TableColumn.defaultProps = {
  dataAlign: 'left',
  withoutTabIndex: false,
  hidden: false,
  className: '',
  isFocus: false,
  keyBoardNav: false
};
var _default = TableColumn;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TableColumn, 'TableColumn', '/home/nogi/nogi/forks/react-bootstrap-table/src/TableColumn.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/nogi/nogi/forks/react-bootstrap-table/src/TableColumn.js');
}();

;