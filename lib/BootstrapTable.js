"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var classSet = _interopRequire(require("classnames"));

var TableHeader = _interopRequire(require("./TableHeader"));

var TableBody = _interopRequire(require("./TableBody"));

var BootstrapTable = (function (_React$Component) {
  function BootstrapTable() {
    _classCallCheck(this, BootstrapTable);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(BootstrapTable, _React$Component);

  _createClass(BootstrapTable, {
    componentDidMount: {
      value: function componentDidMount() {}
    },
    render: {
      value: function render() {
        var style = {
          height: this.props.height
        };

        var columns = this.props.children.map(function (column, i) {
          return { name: column.props.dataField, index: i };
        });

        return React.createElement(
          "div",
          { style: style },
          React.createElement(
            TableHeader,
            null,
            this.props.children
          ),
          React.createElement(TableBody, { data: this.props.data, columns: columns })
        );
      }
    }
  });

  return BootstrapTable;
})(React.Component);

BootstrapTable.propTypes = {
  height: React.PropTypes.string,
  data: React.PropTypes.array
};
BootstrapTable.defaultProps = {
  height: "100%"
};

module.exports = BootstrapTable;