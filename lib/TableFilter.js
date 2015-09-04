"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var Const = _interopRequire(require("./Const"));

var classSet = _interopRequire(require("classnames"));

var TableFilter = (function (_React$Component) {
  function TableFilter(props) {
    _classCallCheck(this, TableFilter);

    _get(Object.getPrototypeOf(TableFilter.prototype), "constructor", this).call(this, props);
    this.filterObj = {};
  }

  _inherits(TableFilter, _React$Component);

  _createClass(TableFilter, {
    handleKeyUp: {
      value: function handleKeyUp(e) {
        if (e.currentTarget.value.trim() === "") delete this.filterObj[e.currentTarget.name];else this.filterObj[e.currentTarget.name] = e.currentTarget.value;

        this.props.onFilter(this.filterObj);
      }
    },
    render: {
      value: function render() {
        var tableClasses = classSet("table", {
          "table-striped": this.props.striped,
          "table-condensed": this.props.condensed
        });
        var selectRowHeader = null;

        if (this.props.rowSelectType == Const.ROW_SELECT_SINGLE || this.props.rowSelectType == Const.ROW_SELECT_MULTI) {
          var style = {
            width: 35,
            paddingLeft: 0,
            paddingRight: 0
          };
          selectRowHeader = React.createElement(
            "th",
            { style: style, key: -1 },
            "Filter"
          );
        }
        var filterField = this.props.columns.map(function (column) {
          var thStyle = {
            display: column.hidden ? "none" : null,
            width: column.width
          };
          return React.createElement(
            "th",
            { key: column.name, style: thStyle },
            React.createElement(
              "div",
              { className: "th-inner table-header-column" },
              React.createElement("input", { type: "text", placeholder: column.name, name: column.name, onKeyUp: this.handleKeyUp.bind(this) })
            )
          );
        }, this);
        return React.createElement(
          "table",
          { className: tableClasses, style: { marginTop: 5 } },
          React.createElement(
            "thead",
            null,
            React.createElement(
              "tr",
              { style: { borderBottomStyle: "hidden" } },
              selectRowHeader,
              filterField
            )
          )
        );
      }
    }
  });

  return TableFilter;
})(React.Component);

TableFilter.propTypes = {
  columns: React.PropTypes.array,
  rowSelectType: React.PropTypes.string,
  onFilter: React.PropTypes.func
};
module.exports = TableFilter;