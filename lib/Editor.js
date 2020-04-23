'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var editor = function editor(editable, attr, format, editorClass, defaultValue, ignoreEditable, row) {
  if (editable === true || editable === false && ignoreEditable || typeof editable === 'string') {
    // simple declare
    var type = editable ? 'text' : editable;
    return _react2.default.createElement('input', _extends({}, attr, { type: type, defaultValue: defaultValue,
      className: (editorClass || '') + ' form-control editor edit-text' }));
  } else if (!editable) {
    var _type = editable ? 'text' : editable;
    return _react2.default.createElement('input', _extends({}, attr, { type: _type, defaultValue: defaultValue,
      disabled: 'disabled',
      className: (editorClass || '') + ' form-control editor edit-text' }));
  } else if (editable && (editable.type === undefined || editable.type === null || editable.type.trim() === '')) {
    var _type2 = editable ? 'text' : editable;
    return _react2.default.createElement('input', _extends({}, attr, { type: _type2, defaultValue: defaultValue,
      className: (editorClass || '') + ' form-control editor edit-text' }));
  } else if (editable.type) {
    // standard declare
    // put style if exist
    editable.style && (attr.style = editable.style);
    // put class if exist
    attr.className = (editorClass || '') + ' form-control editor edit-' + editable.type + (editable.className ? ' ' + editable.className : '');

    if (editable.type === 'select') {
      // process select input
      var options = [];
      var values = editable.options.values;
      var _editable$options = editable.options,
          textKey = _editable$options.textKey,
          valueKey = _editable$options.valueKey;

      if (_util2.default.isFunction(values)) {
        values = values(row);
      }
      if (Array.isArray(values)) {
        // only can use arrray data for options
        var text = void 0;
        var value = void 0;
        options = values.map(function (option, i) {
          if ((typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object') {
            text = textKey ? option[textKey] : option.text;
            value = valueKey ? option[valueKey] : option.value;
          } else {
            text = format ? format(option) : option;
            value = option;
          }
          return _react2.default.createElement(
            'option',
            { key: 'option' + i, value: value },
            text
          );
        });
      }
      return _react2.default.createElement(
        'select',
        _extends({}, attr, { defaultValue: defaultValue }),
        options
      );
    } else if (editable.type === 'textarea') {
      // process textarea input
      // put other if exist
      editable.cols && (attr.cols = editable.cols);
      editable.rows && (attr.rows = editable.rows);
      var saveBtn = void 0;
      var keyUpHandler = attr.onKeyDown;
      if (keyUpHandler) {
        attr.onKeyDown = function (e) {
          if (e.keyCode !== 13) {
            // not Pressed ENTER
            keyUpHandler(e);
          }
        };
        saveBtn = _react2.default.createElement(
          'button',
          {
            className: 'btn btn-info btn-xs textarea-save-btn',
            onClick: keyUpHandler },
          'save'
        );
      }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('textarea', _extends({}, attr, { defaultValue: defaultValue })),
        saveBtn
      );
    } else if (editable.type === 'checkbox') {
      var _values = 'true:false';
      if (editable.options && editable.options.values) {
        // values = editable.options.values.split(':');
        _values = editable.options.values;
      }
      attr.className = attr.className.replace('form-control', '');
      attr.className += ' checkbox pull-right';

      var checked = defaultValue && defaultValue.toString() === _values.split(':')[0] ? true : false;

      return _react2.default.createElement('input', _extends({}, attr, { type: 'checkbox',
        value: _values, defaultChecked: checked }));
    } else if (editable.type === 'datetime') {
      return _react2.default.createElement('input', _extends({}, attr, { type: 'datetime-local', defaultValue: defaultValue }));
    } else {
      // process other input type. as password,url,email...
      return _react2.default.createElement('input', _extends({}, attr, { type: editable.type, defaultValue: defaultValue }));
    }
  }
  // default return for other case of editable
  return _react2.default.createElement('input', _extends({}, attr, { type: 'text',
    className: (editorClass || '') + ' form-control editor edit-text' }));
};

var _default = editor;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(editor, 'editor', '/home/nogi/nogi/forks/react-bootstrap-table/src/Editor.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/nogi/nogi/forks/react-bootstrap-table/src/Editor.js');
}();

;