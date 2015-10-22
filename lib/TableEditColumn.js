"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var Const = _interopRequire(require("./Const"));

var Editor = _interopRequire(require("./Editor"));

var Notifier = _interopRequire(require("./Notification.js"));

var classSet = _interopRequire(require("classnames"));

var TableEditColumn = (function (_React$Component) {
    function TableEditColumn(props) {
        _classCallCheck(this, TableEditColumn);

        _get(Object.getPrototypeOf(TableEditColumn.prototype), "constructor", this).call(this, props);
        this.timeouteClear = 0;
        this.state = {
            shakeEditor: false
        };
    }

    _inherits(TableEditColumn, _React$Component);

    _createClass(TableEditColumn, {
        handleKeyPress: {
            value: function handleKeyPress(e) {
                if (e.keyCode == 13) {
                    //Pressed ENTER
                    var value = e.currentTarget.type == "checkbox" ? this._getCheckBoxValue(e) : e.currentTarget.value;

                    if (!this.validator(value)) {
                        return;
                    }
                    this.props.completeEdit(value, this.props.rowIndex, this.props.colIndex);
                } else if (e.keyCode == 27) {
                    this.props.completeEdit(null, this.props.rowIndex, this.props.colIndex);
                }
            }
        },
        handleBlur: {
            value: function handleBlur(e) {
                if (this.props.blurToSave) {
                    var value = e.currentTarget.type == "checkbox" ? this._getCheckBoxValue(e) : e.currentTarget.value;
                    if (!this.validator(value)) {
                        return;
                    }
                    this.props.completeEdit(value, this.props.rowIndex, this.props.colIndex);
                }
            }
        },
        validator: {
            value: function validator(value) {
                var ts = this;
                if (ts.props.editable.validator) {
                    var valid = ts.props.editable.validator(value);
                    if (valid !== true) {
                        ts.refs.notifier.notice("error", valid, "Pressed ESC can cancel");
                        var input = ts.refs.inputRef;
                        //animate input
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
        },
        clearTimeout: {
            value: (function (_clearTimeout) {
                var _clearTimeoutWrapper = function clearTimeout() {
                    return _clearTimeout.apply(this, arguments);
                };

                _clearTimeoutWrapper.toString = function () {
                    return _clearTimeout.toString();
                };

                return _clearTimeoutWrapper;
            })(function () {
                if (this.timeouteClear != 0) {
                    clearTimeout(this.timeouteClear);
                    this.timeouteClear = 0;
                }
            })
        },
        componentDidMount: {
            value: function componentDidMount() {
                var input = this.refs.inputRef;
                // input.value = this.props.children||'';
                input.focus();
            }
        },
        componentWillUnmount: {
            value: function componentWillUnmount() {
                this.clearTimeout();
            }
        },
        render: {
            value: function render() {
                var editable = this.props.editable,
                    format = this.props.format,
                    attr = {
                    ref: "inputRef",
                    onKeyDown: this.handleKeyPress.bind(this),
                    onBlur: this.handleBlur.bind(this)
                };
                //put placeholder if exist
                editable.placeholder && (attr.placeholder = editable.placeholder);

                var editorClass = classSet({ animated: this.state.shakeEditor, shake: this.state.shakeEditor });
                return React.createElement(
                    "td",
                    { ref: "td", style: { position: "relative" } },
                    Editor(editable, attr, format, editorClass, this.props.children || ""),
                    React.createElement(Notifier, { ref: "notifier" })
                );
            }
        },
        _getCheckBoxValue: {
            value: function _getCheckBoxValue(e) {
                var value = "";
                var values = e.currentTarget.value.split(":");
                value = e.currentTarget.checked ? values[0] : values[1];
                return value;
            }
        }
    });

    return TableEditColumn;
})(React.Component);

TableEditColumn.propTypes = {
    completeEdit: React.PropTypes.func,
    rowIndex: React.PropTypes.number,
    colIndex: React.PropTypes.number,
    blurToSave: React.PropTypes.bool
};

module.exports = TableEditColumn;