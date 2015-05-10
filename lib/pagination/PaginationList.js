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
    this.state = {
      currentPage: 1,
      sizePerPage: this.props.sizePerPage
    };
  }

  _inherits(PaginationList, _React$Component);

  _createClass(PaginationList, {
    changePage: {
      value: function changePage(page) {
        if (page == Const.PRE_PAGE) {
          page = this.state.currentPage - 1 < 1 ? 1 : this.state.currentPage - 1;
        } else if (page == Const.NEXT_PAGE) {
          page = this.state.currentPage + 1 > this.totalPages ? this.totalPages : this.state.currentPage + 1;
        } else if (page == Const.LAST_PAGE) {
          page = this.totalPages;
        } else if (page == Const.FIRST_PAGE) {
          page = 1;
        } else {
          page = parseInt(page);
        }

        if (page != this.state.currentPage) {
          this.setState({ currentPage: page });
          this.props.changePage(page, this.state.sizePerPage);
        }
      }
    },
    changeSizePerPage: {
      value: function changeSizePerPage(e) {
        e.preventDefault();
        var selectSize = parseInt(e.currentTarget.text);
        if (selectSize != this.state.sizePerPage) {
          this.totalPages = Math.ceil(this.props.dataSize / selectSize);
          if (this.state.currentPage > this.totalPages) this.state.currentPage = this.totalPages;
          this.setState({
            sizePerPage: selectSize,
            currentPage: this.state.currentPage
          });
          this.props.changePage(this.state.currentPage, selectSize);
        }
      }
    },
    render: {
      value: function render() {
        this.totalPages = Math.ceil(this.props.dataSize / this.state.sizePerPage);
        var pageBtns = this.makePage();
        var pageListStyle = {
          marginTop: "0px" //override the margin-top defined in .pagination class in bootstrap.
        };
        return React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-md-1" },
            React.createElement(
              "div",
              { className: "dropdown" },
              React.createElement(
                "button",
                { className: "btn btn-default dropdown-toggle", type: "button", id: "pageDropDown", "data-toggle": "dropdown", "aria-expanded": "true" },
                this.state.sizePerPage,
                React.createElement("span", { className: "caret" })
              ),
              React.createElement(
                "ul",
                { className: "dropdown-menu", role: "menu", "aria-labelledby": "pageDropDown" },
                React.createElement(
                  "li",
                  { role: "presentation" },
                  React.createElement(
                    "a",
                    { role: "menuitem", tabIndex: "-1", href: "#", onClick: this.changeSizePerPage.bind(this) },
                    "10"
                  )
                ),
                React.createElement(
                  "li",
                  { role: "presentation" },
                  React.createElement(
                    "a",
                    { role: "menuitem", tabIndex: "-1", href: "#", onClick: this.changeSizePerPage.bind(this) },
                    "25"
                  )
                ),
                React.createElement(
                  "li",
                  { role: "presentation" },
                  React.createElement(
                    "a",
                    { role: "menuitem", tabIndex: "-1", href: "#", onClick: this.changeSizePerPage.bind(this) },
                    "30"
                  )
                ),
                React.createElement(
                  "li",
                  { role: "presentation" },
                  React.createElement(
                    "a",
                    { role: "menuitem", tabIndex: "-1", href: "#", onClick: this.changeSizePerPage.bind(this) },
                    "50"
                  )
                )
              )
            )
          ),
          React.createElement(
            "div",
            { className: "col-md-6" },
            React.createElement(
              "ul",
              { className: "pagination", style: pageListStyle },
              pageBtns
            )
          )
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
            { changePage: this.changePage.bind(this), active: isActive, key: page },
            page
          );
        }, this);
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
        var pages = [Const.FIRST_PAGE, Const.PRE_PAGE];
        for (var i = startPage; i <= endPage; i++) {
          if (i > 0) pages.push(i);
        }
        pages.push(Const.NEXT_PAGE);
        pages.push(Const.LAST_PAGE);
        return pages;
      }
    },
    getCurrentPage: {
      value: function getCurrentPage() {
        return this.state.currentPage;
      }
    },
    getSizePerPage: {
      value: function getSizePerPage() {
        return this.state.sizePerPage;
      }
    }
  });

  return PaginationList;
})(React.Component);

PaginationList.propTypes = {
  sizePerPage: React.PropTypes.number,
  dataSize: React.PropTypes.number,
  changePage: React.PropTypes.func
};

PaginationList.defaultProps = {
  sizePerPage: Const.SIZE_PER_PAGE
};
module.exports = PaginationList;