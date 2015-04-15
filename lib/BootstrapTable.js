"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var classSet = _interopRequire(require("classnames"));

var Const = _interopRequire(require("./Const"));

var TableHeader = _interopRequire(require("./TableHeader"));

var TableBody = _interopRequire(require("./TableBody"));

var PaginationList = _interopRequire(require("./pagination/PaginationList"));

var BootstrapTable = (function (_React$Component) {
  function BootstrapTable(props) {
    _classCallCheck(this, BootstrapTable);

    _get(Object.getPrototypeOf(BootstrapTable.prototype), "constructor", this).call(this, props);
    this.state = {
      data: this.props.data
    };
    this.sortTable = false;
    this.order = Const.SORT_DESC;
    this.sortField = null;
  }

  _inherits(BootstrapTable, _React$Component);

  _createClass(BootstrapTable, {
    componentWillMount: {
      value: function componentWillMount() {
        if (this.props.pagination) this.handlePaginationData(1, Const.SIZE_PER_PAGE);
      }
    },
    componentDidMount: {
      value: function componentDidMount() {
        this._adjustHeaderWidth();
      }
    },
    componentDidUpdate: {
      value: function componentDidUpdate() {
        this._adjustHeaderWidth();
      }
    },
    render: {
      value: function render() {
        var style = {
          height: this.props.height,
          marginBottom: "37px"
        };

        var columns = this.props.children.map(function (column, i) {
          if (column.props.dataSort) this.sortTable = true;
          return {
            name: column.props.dataField,
            align: column.props.dataAlign,
            sort: column.props.dataSort,
            format: column.props.dataFormat,
            index: i
          };
        }, this);

        var pagination = this.renderPagination();
        return React.createElement(
          "div",
          null,
          React.createElement(
            "div",
            { ref: "table", style: style },
            React.createElement(
              TableHeader,
              { onSort: this.handleSort.bind(this) },
              this.props.children
            ),
            React.createElement(TableBody, { data: this.state.data, columns: columns,
              striped: this.props.striped,
              hover: this.props.hover,
              condensed: this.props.condensed })
          ),
          React.createElement(
            "div",
            null,
            pagination
          )
        );
      }
    },
    handleSort: {
      value: function handleSort(order, sortField) {
        this.order = order;
        this.sortField = sortField;

        this.setState({ data: this._sort(this.state.data, order, sortField) });
      }
    },
    handlePaginationData: {
      value: function handlePaginationData(page, sizePerPage) {
        var end = page * sizePerPage - 1;
        var start = end - (sizePerPage - 1);
        var arr = [];
        for (var i = start; i <= end; i++) {
          arr.push(this.props.data[i]);
          if (i + 1 == this.props.data.length) break;
        }

        if (this.sortTable && null != this.sortField) arr = this._sort(arr, this.order, this.sortField);
        this.setState({ data: arr });
      }
    },
    _sort: {
      value: function _sort(arr, order, sortField) {
        arr.sort(function (a, b) {
          if (order == Const.SORT_ASC) {
            return a[sortField] > b[sortField] ? -1 : a[sortField] < b[sortField] ? 1 : 0;
          } else {
            return a[sortField] < b[sortField] ? -1 : a[sortField] > b[sortField] ? 1 : 0;
          }
        });
        return arr;
      }
    },
    _adjustHeaderWidth: {
      value: function _adjustHeaderWidth() {
        this.refs.table.getDOMNode().childNodes[0].childNodes[0].style.width = this.refs.table.getDOMNode().childNodes[1].childNodes[0].offsetWidth - 1 + "px";
      }
    },
    renderPagination: {
      value: function renderPagination() {
        if (this.props.pagination) {
          return React.createElement(PaginationList, { changePage: this.handlePaginationData.bind(this),
            sizePerPage: Const.SIZE_PER_PAGE,
            dataSize: this.props.data.length });
        } else {
          return null;
        }
      }
    }
  });

  return BootstrapTable;
})(React.Component);

BootstrapTable.propTypes = {
  height: React.PropTypes.string,
  data: React.PropTypes.array,
  striped: React.PropTypes.bool,
  hover: React.PropTypes.bool,
  condensed: React.PropTypes.bool,
  pagination: React.PropTypes.bool
};
BootstrapTable.defaultProps = {
  height: "100%",
  striped: false,
  hover: false,
  condensed: false,
  pagination: false
};

module.exports = BootstrapTable;