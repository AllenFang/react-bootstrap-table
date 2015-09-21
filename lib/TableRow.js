"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var Const = _interopRequire(require("./Const"));

var TableRow = (function (_React$Component) {
  function TableRow() {
    _classCallCheck(this, TableRow);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(TableRow, _React$Component);

  _createClass(TableRow, {
    rowClick: {
      value: function rowClick(e) {
        if (e.target.tagName !== "INPUT") this.props.onSelectRow(e.currentTarget.rowIndex, !this.props.isSelected);
      }
    },
    render: {
      value: function render() {

        var rowStyle = {
          backgroundColor: this.props.isSelected ? this.props.selectRow.bgColor : null
        };

        if (this.props.selectRow && !this.props.enableCellEdit && (this.props.selectRow.clickToSelect || this.props.selectRow.clickToSelectAndEditCell)) {
          return React.createElement(
            "tr",
            { style: rowStyle, onClick: this.rowClick.bind(this) },
            this.props.children
          );
        } else {
          return React.createElement(
            "tr",
            { style: rowStyle },
            this.props.children
          );
        }
      }
    }
  });

  return TableRow;
})(React.Component);

TableRow.propTypes = {
  isSelected: React.PropTypes.bool,
  enableCellEdit: React.PropTypes.bool,
  onSelectRow: React.PropTypes.func
};
module.exports = TableRow;