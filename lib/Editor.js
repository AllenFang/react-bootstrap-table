'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Editor = function Editor(editable, attr, format, editorClass, defaultValue) {

    if (editable === true || typeof editable === "string") {
        //simple declare
        var type = editable === true ? 'text' : editable;
        return _react2['default'].createElement('input', _extends({}, attr, { type: type, defaultValue: defaultValue,
            className: (editorClass || "") + " form-control editor edit-text" }));
    } else if (!editable) {
        var type = editable === true ? 'text' : editable;
        return _react2['default'].createElement('input', _extends({}, attr, { type: type, defaultValue: defaultValue, disabled: 'disabled',
            className: (editorClass || "") + " form-control editor edit-text" }));
    } else if (editable.type) {
        //standard declare
        //put style if exist
        editable.style && (attr.style = editable.style);

        //put class if exist
        attr.className = (editorClass || "") + " form-control editor edit-" + editable.type + (editable.className ? " " + editable.className : "");

        if (editable.type === 'select') {
            //process select input
            var options = [],
                values = editable.options.values;
            if (Array.isArray(values)) {
                //only can use arrray data for options
                var rowValue;
                options = values.map(function (d, i) {
                    rowValue = format ? format(d) : d;
                    return _react2['default'].createElement(
                        'option',
                        { key: 'option' + i, value: d },
                        rowValue
                    );
                });
            }
            return _react2['default'].createElement(
                'select',
                _extends({}, attr, { defaultValue: defaultValue }),
                options
            );
        } else if (editable.type === 'textarea') {
            //process textarea input
            //put  other if exist
            editable.cols && (attr.cols = editable.cols);
            editable.rows && (attr.rows = editable.rows);
            var keyUpHandler = attr.onKeyDown,
                saveBtn = null;
            if (keyUpHandler) {
                attr.onKeyDown = function (e) {
                    if (e.keyCode != 13) {
                        //not Pressed ENTER
                        keyUpHandler(e);
                    }
                };
                saveBtn = _react2['default'].createElement(
                    'butto',
                    { className: 'btn btn-info btn-xs textarea-save-btn', onClick: keyUpHandler },
                    'save'
                );
            }

            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement('textarea', _extends({}, attr, { defaultValue: defaultValue })),
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

            var checked = defaultValue && defaultValue.toString() == _values.split(':')[0] ? true : false;

            return _react2['default'].createElement('input', _extends({}, attr, { type: 'checkbox', value: _values, defaultChecked: checked }));
        } else {
            //process other input type. as password,url,email...
            return _react2['default'].createElement('input', _extends({}, attr, { type: type, defaultValue: defaultValue }));
        }
    }
    //default return for other case of editable
    return _react2['default'].createElement('input', _extends({}, attr, { type: 'text', className: (editorClass || "") + " form-control editor edit-text" }));
};

exports['default'] = Editor;
module.exports = exports['default'];