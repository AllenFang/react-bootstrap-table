"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var classSet = _interopRequire(require("classnames"));

var Const = _interopRequire(require("./Const"));

var Util = _interopRequire(require("./util"));

var TableHeaderColumn = (function (_React$Component) {
  function TableHeaderColumn() {
    _classCallCheck(this, TableHeaderColumn);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(TableHeaderColumn, _React$Component);

  _createClass(TableHeaderColumn, {
    handleColumnClick: {
      value: function handleColumnClick(e) {
        if (!this.props.dataSort) {
          return;
        }var dom = this.refs.innerDiv.getDOMNode();
        this.order = this.order == Const.SORT_DESC ? Const.SORT_ASC : Const.SORT_DESC;
        this.props.clearSortCaret(this.order, this.props.dataField);
        dom.appendChild(Util.renderSortCaret(this.order));
      }
    },
    componentDidMount: {
      value: function componentDidMount() {
        this.refs.innerDiv.getDOMNode().setAttribute("data-field", this.props.dataField);
      }
    },
    render: {
      value: function render() {
        var thStyle = {
          textAlign: this.props.dataAlign,
          display: this.props.hidden ? "none" : null,
          width: this.props.width
        };

        var classes = this.props.className + " " + (this.props.dataSort ? "sort-column" : "");
        return React.createElement(
          "th",
          { className: classes, style: thStyle },
          React.createElement(
            "div",
            { ref: "innerDiv", className: "th-inner table-header-column",
              onClick: this.handleColumnClick.bind(this) },
            this.props.children
          )
        );
      }
    }
  });

  return TableHeaderColumn;
})(React.Component);

TableHeaderColumn.propTypes = {
  dataField: React.PropTypes.string,
  dataAlign: React.PropTypes.string,
  dataSort: React.PropTypes.bool,
  clearSortCaret: React.PropTypes.func,
  dataFormat: React.PropTypes.func,
  isKey: React.PropTypes.bool,
  editable: React.PropTypes.bool,
  hidden: React.PropTypes.bool,
  className: React.PropTypes.string,
  width: React.PropTypes.string,
  sortFunc: React.PropTypes.func
};

TableHeaderColumn.defaultProps = {
  dataAlign: "left",
  dataSort: false,
  dataFormat: undefined,
  isKey: false,
  editable: true,
  clearSortCaret: undefined,
  hidden: false,
  className: "",
  width: null,
  sortFunc: undefined
};

module.exports = TableHeaderColumn;