"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var classSet = _interopRequire(require("classnames"));

var TableHeader = (function (_React$Component) {
  function TableHeader() {
    _classCallCheck(this, TableHeader);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(TableHeader, _React$Component);

  _createClass(TableHeader, {
    render: {
      value: function render() {
        var divStyle = {
          height: 37,
          borderBottomWidth: 1,
          borderBottomStyle: "solid",
          borderBottomColor: "rgb(221, 221, 221)"
        };

        var tableStyle = {
          tableLayout: "fixed"
        };

        return React.createElement(
          "div",
          { style: divStyle },
          React.createElement(
            "table",
            { className: "table table-hover table-bordered", style: tableStyle },
            React.createElement(
              "thead",
              null,
              React.createElement(
                "tr",
                null,
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