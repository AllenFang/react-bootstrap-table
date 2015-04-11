"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var classSet = _interopRequire(require("classnames"));

var TableHeader = (function (_React$Component) {
  function TableHeader(props) {
    _classCallCheck(this, TableHeader);

    _get(Object.getPrototypeOf(TableHeader.prototype), "constructor", this).call(this, props);
    this.props.children.forEach(function (reactElm) {
      reactElm.props.clearSortCaret = this.clearSortCaret.bind(this);
    }, this);
  }

  _inherits(TableHeader, _React$Component);

  _createClass(TableHeader, {
    clearSortCaret: {
      value: function clearSortCaret(order, sortField) {
        var row = this.refs.header.getDOMNode();
        for (var i = 0; i < row.childElementCount; i++) {
          var column = row.childNodes[i].childNodes[0];
          if (column.getElementsByClassName("order").length > 0) {
            column.removeChild(column.getElementsByClassName("order")[0]);
          }
        }
        this.props.onSort(order, sortField);
      }
    },
    render: {
      value: function render() {
        var containerClasses = classSet("table-header");
        var rowStyle = {
          borderBottomStyle: "hidden"
        };
        return React.createElement(
          "div",
          { className: containerClasses },
          React.createElement(
            "table",
            { className: "table table-hover table-bordered" },
            React.createElement(
              "thead",
              null,
              React.createElement(
                "tr",
                { ref: "header", style: rowStyle },
                this.props.children
              )
            )
          )
        );
      }
    }
  });

  return TableHeader;
})(React.Component);

module.exports = TableHeader;