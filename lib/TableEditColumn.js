"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = _interopRequire(require("react"));

var Const = _interopRequire(require("./Const"));

var TableEditColumn = (function (_React$Component) {
  function TableEditColumn() {
    _classCallCheck(this, TableEditColumn);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(TableEditColumn, _React$Component);

  _createClass(TableEditColumn, {
    handleKeyPress: {
      value: function handleKeyPress(e) {
        if (e.keyCode == 13) {
          //Pressed ENTER
          this.props.completeEdit(e.currentTarget.value, this.props.rowIndex, this.props.colIndex);
        } else if (e.keyCode == 27) {
          this.props.completeEdit(null, this.props.rowIndex, this.props.colIndex);
        }
      }
    },
    handleBlur: {
      value: function handleBlur(e) {
        if (this.props.blurToSave) {
          this.props.completeEdit(e.currentTarget.value, this.props.rowIndex, this.props.colIndex);
        }
      }
    },
    componentDidMount: {
      value: function componentDidMount() {
        var input = this.refs.inputRef.getDOMNode();
        input.value = this.props.children || "";
        console.info(input.value);
        input.focus();
      }
    },
    render: {
      value: function render() {
        var editable = this.props.editable,
            attr = {
          ref: "inputRef",
          onKeyDown: this.handleKeyPress.bind(this),
          onBlur: this.handleBlur.bind(this)
        };
        //put placeholder if exist
        editable.placeholder && (attr.placeholder = editable.placeholder);

        if (editable === true || typeof editable === "string") {
          //simple declare
          var type = editable === true ? "text" : editable;
          return React.createElement(
            "td",
            { style: { position: "relative" } },
            React.createElement("input", _extends({}, attr, { type: type, className: "form-control editor edit-text" }))
          );
        } else if (editable.type) {
          //standard declare
          //put style if exist
          editable.style && (attr.style = editable.style);

          //put class if exist
          attr.className = "form-control editor edit-" + editable.type + (editable.className ? " " + editable.className : "");

          if (editable.type == "select") {
            //process select input
            var options = [],
                datas = editable.datas,
                format = this.props.format;
            if (Array.isArray(datas)) {
              //only can use arrray data for options
              var rowValue;
              datas.map(function (d, i) {
                rowValue = format ? format(d) : d;
                options.push(React.createElement(
                  "option",
                  { key: "option" + i, value: d },
                  rowValue
                ));
              });
            }
            return React.createElement(
              "td",
              { style: { position: "relative" } },
              React.createElement(
                "select",
                attr,
                options
              )
            );
          } else if (editable.type == "textarea") {
            //process textarea input
            //put  other if exist
            editable.cols && (attr.cols = editable.cols);
            editable.rows && (attr.rows = editable.rows);

            return React.createElement(
              "td",
              { style: { position: "relative" } },
              React.createElement("textarea", attr)
            );
          } else {
            //process other input type. as password,url,email...
            return React.createElement(
              "td",
              { style: { position: "relative" } },
              React.createElement("input", _extends({}, attr, { type: type }))
            );
          }
        }
        //default return for other case of editable
        return React.createElement(
          "td",
          { style: { position: "relative" } },
          React.createElement("input", _extends({}, attr, { type: "text", className: "editor edit-text" }))
        );
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