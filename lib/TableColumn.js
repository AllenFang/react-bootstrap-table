"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = _interopRequire(require("react"));

var Const = _interopRequire(require("./Const"));

var TableColumn = (function (_React$Component) {
  function TableColumn(props) {
    _classCallCheck(this, TableColumn);

    _get(Object.getPrototypeOf(TableColumn.prototype), "constructor", this).call(this, props);
  }

  _inherits(TableColumn, _React$Component);

  _createClass(TableColumn, {
    handleCellEdit: {
      value: function handleCellEdit(e) {
        if (this.props.cellEdit.mode == Const.CELL_EDIT_DBCLICK) {
          if (document.selection && document.selection.empty) {
            document.selection.empty();
          } else if (window.getSelection) {
            var sel = window.getSelection();
            sel.removeAllRanges();
          }
        }
        this.props.onEdit(e.currentTarget.parentElement.rowIndex, e.currentTarget.cellIndex);
      }
    },
    render: {
      value: function render() {
        var tdStyle = {
          textAlign: this.props.dataAlign,
          display: this.props.hidden ? "none" : null
        };

        var opts = {};
        if (this.props.cellEdit) {
          if (this.props.cellEdit.mode == Const.CELL_EDIT_CLICK) {
            opts.onClick = this.handleCellEdit.bind(this);
          } else if (this.props.cellEdit.mode == Const.CELL_EDIT_DBCLICK) {
            opts.onDoubleClick = this.handleCellEdit.bind(this);
          }
        }
        return React.createElement(
          "td",
          _extends({ style: tdStyle, className: this.props.className }, opts),
          this.props.children
        );
      }
    }
  });

  return TableColumn;
})(React.Component);

TableColumn.propTypes = {
  dataAlign: React.PropTypes.string,
  hidden: React.PropTypes.bool,
  className: React.PropTypes.string
};

TableColumn.defaultProps = {
  dataAlign: "left",
  hidden: false,
  className: ""
};
module.exports = TableColumn;