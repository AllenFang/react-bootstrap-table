"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var classSet = _interopRequire(require("classnames"));

var Const = _interopRequire(require("../Const"));

var Editor = _interopRequire(require("../Editor"));

var Notifier = _interopRequire(require("../Notification.js"));

var ToolBar = (function (_React$Component) {
  function ToolBar(props) {
    _classCallCheck(this, ToolBar);

    _get(Object.getPrototypeOf(ToolBar.prototype), "constructor", this).call(this, props);
    this.timeouteClear = 0;
    this.state = {
      isInsertRowTrigger: true,
      validateState: null,
      shakeEditor: false
    };
  }

  _inherits(ToolBar, _React$Component);

  _createClass(ToolBar, {
    componentWillUnmount: {
      value: function componentWillUnmount() {
        this.clearTimeout();
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
        if (this.timeouteClear) {
          clearTimeout(this.timeouteClear);
          this.timeouteClear = 0;
        }
      })
    },
    checkAndParseForm: {
      value: function checkAndParseForm() {
        var ts = this,
            newObj = {},
            isValid = true,
            tempValue,
            tempMsg,
            validateState = {};
        this.props.columns.forEach(function (column, i) {
          if (column.autoValue) {
            //when you want same auto generate value and not allow edit, example ID field
            tempValue = typeof column.autoValue == "function" ? column.autoValue() : "autovalue-" + new Date().getTime();
          } else {
            tempValue = this.refs[column.field + i].getDOMNode().value;
            if (column.editable && column.editable.validator) {
              //process validate
              tempMsg = column.editable.validator(tempValue);
              if (tempMsg !== true) {
                isValid = false;
                validateState[column.field] = tempMsg;
              }
            }
          }

          newObj[column.field] = tempValue;
        }, this);

        if (isValid) {
          return newObj;
        } else {
          ts.clearTimeout();
          //show error in form and shake it
          this.setState({ validateState: validateState, shakeEditor: true });
          //notifier error
          ts.refs.notifier.notice("error", "Form validate errors, please checking!", "Pressed ESC can cancel");
          //clear animate class
          ts.timeouteClear = setTimeout(function () {
            ts.setState({ shakeEditor: false });
          }, 300);
          return null;
        }
      }
    },
    handleSaveBtnClick: {
      value: function handleSaveBtnClick(e) {
        var newObj = this.checkAndParseForm();
        if (!newObj) {
          //validate errors
          return;
        }
        var msg = this.props.onAddRow(newObj);
        if (msg) {
          var ts = this;
          ts.refs.notifier.notice("error", msg, "Pressed ESC can cancel");
          ts.clearTimeout();
          //shake form and hack prevent modal hide
          ts.setState({ shakeEditor: true, validateState: "this is hack for prevent bootstrap modal hide" });
          //clear animate class
          ts.timeouteClear = setTimeout(function () {
            ts.setState({ shakeEditor: false });
          }, 300);
        } else {
          //reset state and hide modal hide
          this.setState({
            validateState: null,
            shakeEditor: false
          });
          //reset form
          this.refs.form.getDOMNode().reset();
        }
      }
    },
    handleDropRowBtnClick: {
      value: function handleDropRowBtnClick(e) {
        this.props.onDropRow();
      }
    },
    handleCloseBtn: {
      value: function handleCloseBtn(e) {
        this.refs.warning.getDOMNode().style.display = "none";
      }
    },
    handleKeyUp: {
      value: function handleKeyUp(e) {
        this.props.onSearch(e.currentTarget.value);
      }
    },
    render: {
      value: function render() {
        var modalClassName = "bs-table-modal-sm" + new Date().getTime();
        var insertBtn = this.props.enableInsert ? React.createElement(
          "button",
          { type: "button", onClick: this.props.onAddRowBegin, className: "btn btn-info", "data-toggle": "modal", "data-target": "." + modalClassName },
          React.createElement("i", { className: "glyphicon glyphicon-plus" }),
          " New"
        ) : null;

        var deleteBtn = this.props.enableDelete ? React.createElement(
          "button",
          { type: "button", className: "btn btn-warning", "data-toggle": "tooltip", "data-placement": "right", title: "Drop selected row",
            onClick: this.handleDropRowBtnClick.bind(this) },
          React.createElement("i", { className: "glyphicon glyphicon-trash" }),
          " Delete"
        ) : null;
        var searchTextInput = this.props.enableSearch ? React.createElement("input", { type: "text", placeholder: this.props.searchPlaceholder ? this.props.searchPlaceholder : "Search", onKeyUp: this.handleKeyUp.bind(this) }) : null;
        var modal = this.props.enableInsert ? this.renderInsertRowModal(modalClassName) : null;
        var warningStyle = {
          display: "none",
          marginBottom: 0
        };
        return React.createElement(
          "div",
          null,
          React.createElement(
            "div",
            { className: "btn-group btn-group-xs", role: "group", "aria-label": "..." },
            insertBtn,
            deleteBtn
          ),
          searchTextInput,
          React.createElement(Notifier, { ref: "notifier" }),
          modal
        );
      }
    },
    renderInsertRowModal: {
      value: function renderInsertRowModal(modalClassName) {
        var validateState = this.state.validateState || {};
        var inputField = this.props.columns.map(function (column, i) {
          var editable = column.editable,
              format = column.format,
              attr = { ref: column.field + i, placeholder: editable.placeholder ? editable.placeholder : column.name };

          if (column.autoValue) {
            //when you want same auto generate value and not allow edit, example ID field
            return null;
          }
          var error = validateState[column.field] ? React.createElement(
            "span",
            { className: "help-block bg-danger" },
            validateState[column.field]
          ) : null;
          return React.createElement(
            "div",
            { className: "form-group", key: column.field },
            React.createElement(
              "label",
              null,
              column.name
            ),
            Editor(editable, attr, format),
            error
          );
        });
        var modalClass = classSet("modal", "fade", modalClassName, {
          "in": this.state.shakeEditor || this.state.validateState //hack prevent bootstrap modal hide by reRender
        });
        var dialogClass = classSet("modal-dialog", "modal-sm", {
          animated: this.state.shakeEditor,
          shake: this.state.shakeEditor
        });
        return React.createElement(
          "div",
          { ref: "modal", className: modalClass, tabIndex: "-1", role: "dialog" },
          React.createElement(
            "div",
            { className: dialogClass },
            React.createElement(
              "div",
              { className: "modal-content" },
              React.createElement(
                "div",
                { className: "modal-header" },
                React.createElement(
                  "button",
                  { type: "button", className: "close", "data-dismiss": "modal", "aria-label": "Close" },
                  React.createElement(
                    "span",
                    { "aria-hidden": "true" },
                    "×"
                  )
                ),
                React.createElement(
                  "h4",
                  { className: "modal-title" },
                  "New Record"
                )
              ),
              React.createElement(
                "div",
                { className: "modal-body" },
                React.createElement(
                  "form",
                  { ref: "form" },
                  inputField
                )
              ),
              React.createElement(
                "div",
                { className: "modal-footer" },
                React.createElement(
                  "button",
                  { type: "button", className: "btn btn-default", "data-dismiss": "modal" },
                  "Close"
                ),
                React.createElement(
                  "button",
                  { type: "button", className: "btn btn-info", onClick: this.handleSaveBtnClick.bind(this) },
                  "Save"
                )
              )
            )
          )
        );
      }
    }
  });

  return ToolBar;
})(React.Component);

ToolBar.propTypes = {
  onAddRow: React.PropTypes.func,
  onDropRow: React.PropTypes.func,
  enableInsert: React.PropTypes.bool,
  enableDelete: React.PropTypes.bool,
  enableSearch: React.PropTypes.bool,
  columns: React.PropTypes.array,
  searchPlaceholder: React.PropTypes.string
};

ToolBar.defaultProps = {
  enableInsert: false,
  enableDelete: false,
  enableSearch: false
};
module.exports = ToolBar;