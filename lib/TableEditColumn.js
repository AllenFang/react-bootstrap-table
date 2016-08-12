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

var _Editor = require('./Editor');

var _Editor2 = _interopRequireDefault(_Editor);

var _NotificationJs = require('./Notification.js');

var _NotificationJs2 = _interopRequireDefault(_NotificationJs);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var TableEditColumn = (function (_Component) {
  _inherits(TableEditColumn, _Component);

  function TableEditColumn(props) {
    var _this = this;

    _classCallCheck(this, TableEditColumn);

    _get(Object.getPrototypeOf(TableEditColumn.prototype), 'constructor', this).call(this, props);

    this.handleKeyPress = function (e) {
      if (e.keyCode === 13) {
        // Pressed ENTER
        var value = e.currentTarget.type === 'checkbox' ? _this._getCheckBoxValue(e) : e.currentTarget.value;

        if (!_this.validator(value)) {
          return;
        }
        _this.props.completeEdit(value, _this.props.rowIndex, _this.props.colIndex);
      } else if (e.keyCode === 27) {
        _this.props.completeEdit(null, _this.props.rowIndex, _this.props.colIndex);
      } else if (e.type === 'click') {
        // textarea click save button
        var value = e.target.parentElement.firstChild.value;
        if (!_this.validator(value)) {
          return;
        }
        _this.props.completeEdit(value, _this.props.rowIndex, _this.props.colIndex);
      }
    };

    this.handleBlur = function (e) {
      e.stopPropagation();
      if (_this.props.blurToSave) {
        var value = e.currentTarget.type === 'checkbox' ? _this._getCheckBoxValue(e) : e.currentTarget.value;
        if (!_this.validator(value)) {
          return;
        }
        _this.props.completeEdit(value, _this.props.rowIndex, _this.props.colIndex);
      }
    };

    this.handleCustomUpdate = function (value) {
      _this.props.completeEdit(value, _this.props.rowIndex, _this.props.colIndex);
    };

    this.timeouteClear = 0;
    this.state = {
      shakeEditor: false
    };
  }

  _createClass(TableEditColumn, [{
    key: 'validator',
    value: function validator(value) {
      var ts = this;
      if (ts.props.editable.validator) {
        var valid = ts.props.editable.validator(value);
        if (valid !== true) {
          ts.refs.notifier.notice('error', valid, 'Pressed ESC can cancel');
          var input = ts.refs.inputRef;
          // animate input
          ts.clearTimeout();
          ts.setState({ shakeEditor: true });
          ts.timeouteClear = setTimeout(function () {
            ts.setState({ shakeEditor: false });
          }, 300);
          input.focus();
          return false;
        }
      }
      return true;
    }
  }, {
    key: 'clearTimeout',
    value: (function (_clearTimeout) {
      function clearTimeout() {
        return _clearTimeout.apply(this, arguments);
      }

      clearTimeout.toString = function () {
        return _clearTimeout.toString();
      };

      return clearTimeout;
    })(function () {
      if (this.timeouteClear !== 0) {
        clearTimeout(this.timeouteClear);
        this.timeouteClear = 0;
      }
    })
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.refs.inputRef.focus();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearTimeout();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var editable = _props.editable;
      var format = _props.format;
      var fieldValue = _props.fieldValue;
      var customEditor = _props.customEditor;
      var shakeEditor = this.state.shakeEditor;

      var attr = {
        ref: 'inputRef',
        onKeyDown: this.handleKeyPress,
        onBlur: this.handleBlur
      };
      // put placeholder if exist
      editable.placeholder && (attr.placeholder = editable.placeholder);

      var editorClass = (0, _classnames2['default'])({ 'animated': shakeEditor, 'shake': shakeEditor });
      var cellEditor = undefined;
      if (customEditor) {
        var customEditorProps = _extends({}, attr, {
          defaultValue: fieldValue || ''
        }, customEditor.customEditorParameters);
        cellEditor = customEditor.getElement(this.handleCustomUpdate, customEditorProps);
      } else {
        cellEditor = (0, _Editor2['default'])(editable, attr, format, editorClass, fieldValue || '');
      }

      return _react2['default'].createElement(
        'td',
        { ref: 'td', style: { position: 'relative' } },
        cellEditor,
        _react2['default'].createElement(_NotificationJs2['default'], { ref: 'notifier' })
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
})(_react.Component);

TableEditColumn.propTypes = {
  completeEdit: _react.PropTypes.func,
  rowIndex: _react.PropTypes.number,
  colIndex: _react.PropTypes.number,
  blurToSave: _react.PropTypes.bool,
  editable: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
  format: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.func]),
  fieldValue: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.bool, _react.PropTypes.number, _react.PropTypes.array, _react.PropTypes.object])
};

exports['default'] = TableEditColumn;
module.exports = exports['default'];