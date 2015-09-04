"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var classSet = _interopRequire(require("classnames"));

var Const = _interopRequire(require("../Const"));

var ToolBar = (function (_React$Component) {
  function ToolBar(props) {
    _classCallCheck(this, ToolBar);

    _get(Object.getPrototypeOf(ToolBar.prototype), "constructor", this).call(this, props);
    this.state = {
      isInsertRowTrigger: true
    };
  }

  _inherits(ToolBar, _React$Component);

  _createClass(ToolBar, {
    handleSaveBtnClick: {
      value: function handleSaveBtnClick(e) {
        var newObj = {};
        this.props.columns.forEach(function (column, i) {
          newObj[column.field] = this.refs[column.field + i].getDOMNode().value;
        }, this);
        var msg = this.props.onAddRow(newObj);
        if (msg) {
          this.refs.warning.getDOMNode().style.display = "block";
          this.refs.warningText.getDOMNode().textContent = msg;
        } else {
          this.refs.warning.getDOMNode().style.display = "none";
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
          { type: "button", className: "btn btn-default", "data-toggle": "modal", "data-target": "." + modalClassName },
          "New"
        ) : null;

        var deleteBtn = this.props.enableDelete ? React.createElement(
          "button",
          { type: "button", className: "btn btn-default", "data-toggle": "tooltip", "data-placement": "right", title: "Drop selected row",
            onClick: this.handleDropRowBtnClick.bind(this) },
          "Delete"
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
            { className: "btn-group btn-group-sm", role: "group", "aria-label": "..." },
            insertBtn,
            deleteBtn
          ),
          searchTextInput,
          React.createElement(
            "div",
            { ref: "warning", className: "alert alert-warning", style: warningStyle },
            React.createElement(
              "button",
              { type: "button", className: "close", "aria-label": "Close", onClick: this.handleCloseBtn.bind(this) },
              React.createElement(
                "span",
                { "aria-hidden": "true" },
                "×"
              )
            ),
            React.createElement(
              "strong",
              null,
              "Warning! "
            ),
            React.createElement("font", { ref: "warningText" })
          ),
          modal
        );
      }
    },
    renderInsertRowModal: {
      value: function renderInsertRowModal(modalClassName) {

        var inputField = this.props.columns.map(function (column, i) {
          return React.createElement(
            "div",
            { className: "form-group", key: column.field },
            React.createElement(
              "label",
              null,
              column.name
            ),
            React.createElement("input", { ref: column.field + i, type: "text", className: "form-control", placeholder: column.name })
          );
        });
        var modalClass = classSet("modal", "fade", modalClassName);
        return React.createElement(
          "div",
          { className: modalClass, tabIndex: "-1", role: "dialog", "aria-hidden": "true" },
          React.createElement(
            "div",
            { className: "modal-dialog modal-sm" },
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
                inputField
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
                  { type: "button", className: "btn btn-primary", "data-dismiss": "modal", onClick: this.handleSaveBtnClick.bind(this) },
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