"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var PageButton = _interopRequire(require("./PageButton.js"));

var Const = _interopRequire(require("../Const"));

var PaginationList = (function (_React$Component) {
  function PaginationList(props) {
    _classCallCheck(this, PaginationList);

    _get(Object.getPrototypeOf(PaginationList.prototype), "constructor", this).call(this, props);
    this.sizePerList = Const.SIZE_PER_LIST;
    this.totalPages = Math.ceil(this.props.dataSize / this.props.sizePerPage);
    this.state = { currentPage: 1 };
  }

  _inherits(PaginationList, _React$Component);

  _createClass(PaginationList, {
    changePage: {
      value: function changePage(page) {
        if (page != this.state.currentPage) {
          this.setState({ currentPage: page });
          this.props.changePage(page);
        }
      }
    },
    render: {
      value: function render() {
        var pageBtns = this.makePage();

        return React.createElement(
          "ul",
          { className: "pagination" },
          pageBtns
        );
      }
    },
    makePage: {
      value: function makePage() {
        var pages = this.getPages();
        return pages.map(function (page) {
          var isActive = page == this.state.currentPage ? true : false;

          return React.createElement(
            PageButton,
            { changePage: this.changePage.bind(this), active: isActive },
            page
          );
        }, this);
        return;
      }
    },
    getPages: {
      value: function getPages() {
        var startPage = 1,
            endPage = this.totalPages;

        startPage = Math.max(this.state.currentPage - Math.floor(this.sizePerList / 2), 1);
        endPage = startPage + this.sizePerList - 1;

        if (endPage > this.totalPages) {
          endPage = this.totalPages;
          startPage = endPage - this.sizePerList + 1;
        }
        var pages = [];
        for (var i = startPage; i <= endPage; i++) {
          if (i > 0) pages.push(i);
        }
        return pages;
      }
    }
  });

  return PaginationList;
})(React.Component);

PaginationList.propTypes = {
  sizePerPage: React.PropTypes.int,
  dataSize: React.PropTypes.int,
  changePage: React.PropTypes.func
};

PaginationList.defaultProps = {
  sizePerPage: Const.SIZE_PER_PAGE
};
module.exports = PaginationList;