"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

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
        input.value = this.props.children;
        input.focus();
      }
    },
    render: {
      value: function render() {
        return React.createElement(
          "td",
          null,
          React.createElement("input", { ref: "inputRef", type: "text",
            onKeyDown: this.handleKeyPress.bind(this),
            onBlur: this.handleBlur.bind(this) })
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