"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var TableRow = _interopRequire(require("./TableRow"));

var TableColumn = _interopRequire(require("./TableColumn"));

var TableBody = (function (_React$Component) {
  function TableBody() {
    _classCallCheck(this, TableBody);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(TableBody, _React$Component);

  _createClass(TableBody, {
    render: {
      value: function render() {
        var self = this;
        var divStyle = {
          overflowX: "auto",
          overflowY: "auto",
          height: "100%"
        };

        var tableStyle = {
          marginTop: 0,
          tableLayout: "fixed"
        };

        var tableRows = this.props.data.map(function (data) {
          var tableColumns = self.props.columns.map(function (column) {
            var fieldValue = data[column.name];
            return React.createElement(
              TableColumn,
              null,
              fieldValue
            );
          });

          return React.createElement(
            TableRow,
            null,
            tableColumns
          );
        });

        return React.createElement(
          "div",
          { style: divStyle },
          React.createElement(
            "table",
            { className: "table table-hover table-bordered", style: tableStyle },
            tableRows
          )
        );
      }
    }
  });

  return TableBody;
})(React.Component);

TableBody.propTypes = {
  data: React.PropTypes.array,
  columns: React.PropTypes.array
};
module.exports = TableBody;