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

var _Editor = require('./Editor');

var _Editor2 = _interopRequireDefault(_Editor);

var _Notification = require('./Notification.js');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableEditColumn = function (_Component) {
  _inherits(TableEditColumn, _Component);

  function TableEditColumn(props) {
    _classCallCheck(this, TableEditColumn);

    var _this = _possibleConstructorReturn(this, (TableEditColumn.__proto__ || Object.getPrototypeOf(TableEditColumn)).call(this, props));

    _this.handleKeyPress = function () {
      return _this.__handleKeyPress__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleBlur = function () {
      return _this.__handleBlur__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleCustomUpdate = function () {
      return _this.__handleCustomUpdate__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.notifyToastr = function () {
      return _this.__notifyToastr__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleClick = function () {
      return _this.__handleClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.getInputRef = function () {
      return _this.__getInputRef__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.getHandleKeyPress = function () {
      return _this.__getHandleKeyPress__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.getHandleBlur = function () {
      return _this.__getHandleBlur__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.timeouteClear = 0;
    var _this$props = _this.props,
        fieldValue = _this$props.fieldValue,
        row = _this$props.row,
        className = _this$props.className;

    _this.focusInEditor = _this.focusInEditor.bind(_this);
    _this.state = {
      shakeEditor: false,
      className: _util2.default.isFunction(className) ? className(fieldValue, row) : className
    };
    return _this;
  }

  _createClass(TableEditColumn, [{
    key: '__getHandleBlur__REACT_HOT_LOADER__',
    value: function __getHandleBlur__REACT_HOT_LOADER__() {
      return this.__getHandleBlur__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__getHandleKeyPress__REACT_HOT_LOADER__',
    value: function __getHandleKeyPress__REACT_HOT_LOADER__() {
      return this.__getHandleKeyPress__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__getInputRef__REACT_HOT_LOADER__',
    value: function __getInputRef__REACT_HOT_LOADER__() {
      return this.__getInputRef__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleClick__REACT_HOT_LOADER__',
    value: function __handleClick__REACT_HOT_LOADER__() {
      return this.__handleClick__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__notifyToastr__REACT_HOT_LOADER__',
    value: function __notifyToastr__REACT_HOT_LOADER__() {
      return this.__notifyToastr__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleCustomUpdate__REACT_HOT_LOADER__',
    value: function __handleCustomUpdate__REACT_HOT_LOADER__() {
      return this.__handleCustomUpdate__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleBlur__REACT_HOT_LOADER__',
    value: function __handleBlur__REACT_HOT_LOADER__() {
      return this.__handleBlur__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleKeyPress__REACT_HOT_LOADER__',
    value: function __handleKeyPress__REACT_HOT_LOADER__() {
      return this.__handleKeyPress__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: 'valueShortCircuit',
    value: function valueShortCircuit(value) {
      return value === null || typeof value === 'undefined' ? '' : value;
    }
  }, {
    key: '__handleKeyPress__REACT_HOT_LOADER__',
    value: function __handleKeyPress__REACT_HOT_LOADER__(e) {
      if (e.keyCode === 13 || e.keyCode === 9) {
        // Pressed ENTER or TAB
        var value = e.currentTarget.type === 'checkbox' ? this._getCheckBoxValue(e) : e.currentTarget.value;

        if (e.keyCode === 9 && this.props.blurToSave || !this.validator(value)) {
          return;
        }

        if (e.keyCode === 13) {
          this.props.completeEdit(value, this.props.rowIndex, this.props.colIndex);
        } else {
          this.props.onTab(this.props.rowIndex + 1, this.props.colIndex + 1, 'tab', e);
          e.preventDefault();
        }
      } else if (e.keyCode === 27) {
        this.props.completeEdit(null, this.props.rowIndex, this.props.colIndex);
      } else if (e.type === 'click' && !this.props.blurToSave) {
        // textarea click save button
        var _value = e.target.parentElement.firstChild.value;
        if (!this.validator(_value)) {
          return;
        }
        this.props.completeEdit(_value, this.props.rowIndex, this.props.colIndex);
      }
    }
  }, {
    key: '__handleBlur__REACT_HOT_LOADER__',
    value: function __handleBlur__REACT_HOT_LOADER__(e) {
      e.stopPropagation();
      if (this.props.blurToSave) {
        var value = e.currentTarget.type === 'checkbox' ? this._getCheckBoxValue(e) : e.currentTarget.value;
        if (!this.validator(value)) {
          return false;
        }
        this.props.completeEdit(value, this.props.rowIndex, this.props.colIndex);
      } else if (this.props.blurToEscape) {
        this.props.completeEdit(null, this.props.rowIndex, this.props.colIndex);
      }
    }
  }, {
    key: '__handleCustomUpdate__REACT_HOT_LOADER__',


    // modified by iuculanop
    // BEGIN
    value: function __handleCustomUpdate__REACT_HOT_LOADER__(value) {
      if (!this.validator(value)) {
        return;
      }
      this.props.completeEdit(value, this.props.rowIndex, this.props.colIndex);
    }
  }, {
    key: 'validator',
    value: function validator(value) {
      var ts = this;
      var valid = true;
      if (ts.props.editable.validator) {
        var checkVal = ts.props.editable.validator(value, this.props.row);
        var responseType = typeof checkVal === 'undefined' ? 'undefined' : _typeof(checkVal);
        if (responseType !== 'object' && checkVal !== true) {
          valid = false;
          this.notifyToastr('error', checkVal, '');
        } else if (responseType === 'object' && checkVal.isValid !== true) {
          valid = false;
          this.notifyToastr(checkVal.notification.type, checkVal.notification.msg, checkVal.notification.title);
        }
        if (!valid) {
          // animate input
          ts.clearTimeout();
          var _props = this.props,
              invalidColumnClassName = _props.invalidColumnClassName,
              row = _props.row;

          var className = _util2.default.isFunction(invalidColumnClassName) ? invalidColumnClassName(value, row) : invalidColumnClassName;
          ts.setState({ shakeEditor: true, className: className });
          ts.timeouteClear = setTimeout(function () {
            ts.setState({ shakeEditor: false });
          }, 300);
          this.focusInEditor();
          return valid;
        }
      }
      return valid;
    }
    // END

  }, {
    key: '__notifyToastr__REACT_HOT_LOADER__',
    value: function __notifyToastr__REACT_HOT_LOADER__(type, message, title) {
      var toastr = true;
      var beforeShowError = this.props.beforeShowError;

      if (beforeShowError) {
        toastr = beforeShowError(type, message, title);
      }
      if (toastr) {
        (0, _Notification.notice)(type, message, title);
      }
    }
  }, {
    key: 'clearTimeout',
    value: function (_clearTimeout) {
      function clearTimeout() {
        return _clearTimeout.apply(this, arguments);
      }

      clearTimeout.toString = function () {
        return _clearTimeout.toString();
      };

      return clearTimeout;
    }(function () {
      if (this.timeouteClear !== 0) {
        clearTimeout(this.timeouteClear);
        this.timeouteClear = 0;
      }
    })
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.focusInEditor();
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
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearTimeout();
    }
  }, {
    key: 'focusInEditor',
    value: function focusInEditor() {
      if (this.inputRef && _util2.default.isFunction(this.inputRef.focus)) {
        this.inputRef.focus();
      }
    }
  }, {
    key: '__handleClick__REACT_HOT_LOADER__',
    value: function __handleClick__REACT_HOT_LOADER__(e) {
      if (e.target.tagName !== 'TD') {
        e.stopPropagation();
      }
    }
  }, {
    key: '__getInputRef__REACT_HOT_LOADER__',
    value: function __getInputRef__REACT_HOT_LOADER__(userRef) {
      var _this2 = this;

      return function (ref) {
        _this2.inputRef = ref;
        if (_util2.default.isFunction(userRef)) {
          userRef(ref);
        } else if (typeof userRef === 'string') {
          throw new Error('Ref must be a function');
        }
      };
    }
  }, {
    key: '__getHandleKeyPress__REACT_HOT_LOADER__',
    value: function __getHandleKeyPress__REACT_HOT_LOADER__(customHandler) {
      var _this3 = this;

      return function (e) {
        _this3.handleKeyPress(e);
        if (_util2.default.isFunction(customHandler)) {
          customHandler(e);
        }
      };
    }
  }, {
    key: '__getHandleBlur__REACT_HOT_LOADER__',
    value: function __getHandleBlur__REACT_HOT_LOADER__(customHandler) {
      var _this4 = this;

      return function (e) {
        _this4.handleBlur(e);
        if (_util2.default.isFunction(customHandler)) {
          customHandler(e);
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          editable = _props2.editable,
          format = _props2.format,
          customEditor = _props2.customEditor,
          isFocus = _props2.isFocus,
          customStyleWithNav = _props2.customStyleWithNav,
          row = _props2.row,
          attrs = _props2.attrs;
      var shakeEditor = this.state.shakeEditor;

      var attr = _extends({}, editable.attrs, {
        ref: this.getInputRef(editable.attrs && editable.attrs.ref),
        onKeyDown: this.getHandleKeyPress(editable.attrs && editable.attrs.onKeyDown),
        onBlur: this.getHandleBlur(editable.attrs && editable.attrs.onBlur)
      });
      var style = { position: 'relative' };
      var fieldValue = this.props.fieldValue;
      var className = this.state.className;


      if (editable.placeholder) {
        attr.placeholder = editable.placeholder;
        /* eslint-disable no-console */
        console.warn('Setting editable.placeholder is deprecated. Use editable.attrs to set input attributes');
        /* eslint-enable no-console */
      }

      var editorClass = (0, _classnames2.default)({ 'animated': shakeEditor, 'shake': shakeEditor });
      fieldValue = fieldValue === 0 ? '0' : fieldValue;
      var cellEditor = void 0;
      if (customEditor) {
        var customEditorProps = _extends({
          row: row
        }, attr, {
          defaultValue: this.valueShortCircuit(fieldValue)
        }, customEditor.customEditorParameters);
        cellEditor = customEditor.getElement(this.handleCustomUpdate, customEditorProps);
      } else {
        cellEditor = (0, _Editor2.default)(editable, attr, format, editorClass, this.valueShortCircuit(fieldValue), null, row);
      }

      if (isFocus) {
        if (customStyleWithNav) {
          var customStyle = _util2.default.isFunction(customStyleWithNav) ? customStyleWithNav(fieldValue, row) : customStyleWithNav;
          style = _extends({}, style, customStyle);
        } else {
          className = className + ' default-focus-cell';
        }
      }

      return _react2.default.createElement(
        'td',
        _extends({}, attrs, {
          style: style,
          className: className,
          onClick: this.handleClick }),
        cellEditor
      );
    }
  }, {
    key: '_getCheckBoxValue',
    value: function _getCheckBoxValue(e) {
      var value = '';
      var values = e.currentTarget.value.split(':');
      value = e.currentTarget.checked ? values[0] : values[1];
      return value;
    }
  }]);

  return TableEditColumn;
}(_react.Component);

TableEditColumn.propTypes = {
  completeEdit: _propTypes2.default.func,
  rowIndex: _propTypes2.default.number,
  colIndex: _propTypes2.default.number,
  blurToSave: _propTypes2.default.bool,
  blurToEscape: _propTypes2.default.bool,
  editable: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.object]),
  format: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func]),
  row: _propTypes2.default.any,
  fieldValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool, _propTypes2.default.number, _propTypes2.default.array, _propTypes2.default.object]),
  className: _propTypes2.default.any,
  beforeShowError: _propTypes2.default.func,
  isFocus: _propTypes2.default.bool,
  attrs: _propTypes2.default.object,
  customStyleWithNav: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object])
};

var _default = TableEditColumn;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TableEditColumn, 'TableEditColumn', '/home/nogi/nogi/forks/react-bootstrap-table/src/TableEditColumn.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/nogi/nogi/forks/react-bootstrap-table/src/TableEditColumn.js');
}();

;