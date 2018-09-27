'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _PageButton = require('./PageButton.js');

var _PageButton2 = _interopRequireDefault(_PageButton);

var _SizePerPageDropDown = require('./SizePerPageDropDown');

var _SizePerPageDropDown2 = _interopRequireDefault(_SizePerPageDropDown);

var _Const = require('../Const');

var _Const2 = _interopRequireDefault(_Const);

var _util = require('../util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PaginationList = function (_Component) {
  _inherits(PaginationList, _Component);

  function PaginationList(props) {
    _classCallCheck(this, PaginationList);

    var _this = _possibleConstructorReturn(this, (PaginationList.__proto__ || Object.getPrototypeOf(PaginationList)).call(this, props));

    _this.changePage = function () {
      return _this.__changePage__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.changeSizePerPage = function () {
      return _this.__changeSizePerPage__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.toggleDropDown = function () {
      return _this.__toggleDropDown__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.closeDropDown = function () {
      return _this.__closeDropDown__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = {
      open: _this.props.open
    };
    return _this;
  }

  _createClass(PaginationList, [{
    key: '__closeDropDown__REACT_HOT_LOADER__',
    value: function __closeDropDown__REACT_HOT_LOADER__() {
      return this.__closeDropDown__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__toggleDropDown__REACT_HOT_LOADER__',
    value: function __toggleDropDown__REACT_HOT_LOADER__() {
      return this.__toggleDropDown__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__changeSizePerPage__REACT_HOT_LOADER__',
    value: function __changeSizePerPage__REACT_HOT_LOADER__() {
      return this.__changeSizePerPage__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__changePage__REACT_HOT_LOADER__',
    value: function __changePage__REACT_HOT_LOADER__() {
      return this.__changePage__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      var keepSizePerPageState = this.props.keepSizePerPageState;

      if (!keepSizePerPageState) {
        this.closeDropDown();
      }
    }
  }, {
    key: '__changePage__REACT_HOT_LOADER__',
    value: function __changePage__REACT_HOT_LOADER__(page) {
      var _props = this.props,
          pageStartIndex = _props.pageStartIndex,
          prePage = _props.prePage,
          currPage = _props.currPage,
          nextPage = _props.nextPage,
          lastPage = _props.lastPage,
          firstPage = _props.firstPage,
          sizePerPage = _props.sizePerPage,
          keepSizePerPageState = _props.keepSizePerPageState;


      if (page === prePage) {
        page = currPage - 1 < pageStartIndex ? pageStartIndex : currPage - 1;
      } else if (page === nextPage) {
        page = currPage + 1 > this.lastPage ? this.lastPage : currPage + 1;
      } else if (page === lastPage) {
        page = this.lastPage;
      } else if (page === firstPage) {
        page = pageStartIndex;
      } else {
        page = parseInt(page, 10);
      }

      if (keepSizePerPageState) {
        this.closeDropDown();
      }

      if (page !== currPage) {
        this.props.changePage(page, sizePerPage);
      }
    }
  }, {
    key: '__changeSizePerPage__REACT_HOT_LOADER__',
    value: function __changeSizePerPage__REACT_HOT_LOADER__(pageNum) {
      var selectSize = typeof pageNum === 'string' ? parseInt(pageNum, 10) : pageNum;
      var currPage = this.props.currPage;

      if (selectSize !== this.props.sizePerPage) {
        this.totalPages = Math.ceil(this.props.dataSize / selectSize);
        this.lastPage = this.props.pageStartIndex + this.totalPages - 1;
        if (currPage > this.lastPage) currPage = this.lastPage;
        this.props.changePage(currPage, selectSize);
        if (this.props.onSizePerPageList) {
          this.props.onSizePerPageList(selectSize);
        }
      }

      this.closeDropDown();
    }
  }, {
    key: '__toggleDropDown__REACT_HOT_LOADER__',
    value: function __toggleDropDown__REACT_HOT_LOADER__() {
      var _this2 = this;

      this.setState(function () {
        return {
          open: !_this2.state.open
        };
      });
    }
  }, {
    key: '__closeDropDown__REACT_HOT_LOADER__',
    value: function __closeDropDown__REACT_HOT_LOADER__() {
      this.setState(function () {
        return {
          open: false
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          currPage = _props2.currPage,
          dataSize = _props2.dataSize,
          sizePerPage = _props2.sizePerPage,
          sizePerPageList = _props2.sizePerPageList,
          paginationShowsTotal = _props2.paginationShowsTotal,
          pageStartIndex = _props2.pageStartIndex,
          paginationPanel = _props2.paginationPanel,
          hidePageListOnlyOnePage = _props2.hidePageListOnlyOnePage;

      this.totalPages = Math.ceil(dataSize / sizePerPage);
      this.lastPage = this.props.pageStartIndex + this.totalPages - 1;
      var pageBtns = this.makePage(_util2.default.isFunction(paginationPanel));
      var dropdown = this.makeDropDown();

      var offset = Math.abs(_Const2.default.PAGE_START_INDEX - pageStartIndex);
      var start = (currPage - pageStartIndex) * sizePerPage;
      start = dataSize === 0 ? 0 : start + 1;
      var to = Math.min(sizePerPage * (currPage + offset) - 1, dataSize);
      if (to >= dataSize) to--;
      var total = paginationShowsTotal ? _react2.default.createElement(
        'span',
        null,
        'Showing rows ',
        start,
        ' to\xA0',
        to + 1,
        ' of\xA0',
        dataSize
      ) : null;

      if (_util2.default.isFunction(paginationShowsTotal)) {
        total = paginationShowsTotal(start, to + 1, dataSize);
      }

      var content = paginationPanel && paginationPanel({
        currPage: currPage,
        sizePerPage: sizePerPage,
        sizePerPageList: sizePerPageList,
        pageStartIndex: pageStartIndex,
        totalPages: this.totalPages,
        changePage: this.changePage,
        toggleDropDown: this.toggleDropDown,
        changeSizePerPage: this.changeSizePerPage,
        components: {
          totalText: total,
          sizePerPageDropdown: dropdown,
          pageList: pageBtns
        }
      });

      var hidePageList = hidePageListOnlyOnePage && this.totalPages === 1 ? 'none' : 'block';
      return _react2.default.createElement(
        'div',
        { className: 'row', style: { marginTop: 15 } },
        content || [_react2.default.createElement(
          'div',
          { key: 'paging-left', className: 'col-md-6 col-xs-6 col-sm-6 col-lg-6' },
          total,
          sizePerPageList.length > 1 ? dropdown : null
        ), _react2.default.createElement(
          'div',
          { key: 'paging-right', style: { display: hidePageList },
            className: 'col-md-6 col-xs-6 col-sm-6 col-lg-6' },
          pageBtns
        )]
      );
    }
  }, {
    key: 'makeDropDown',
    value: function makeDropDown() {
      var _this3 = this;

      var dropdown = void 0;
      var dropdownProps = void 0;
      var sizePerPageText = '';
      var _props3 = this.props,
          sizePerPageDropDown = _props3.sizePerPageDropDown,
          hideSizePerPage = _props3.hideSizePerPage,
          sizePerPage = _props3.sizePerPage,
          sizePerPageList = _props3.sizePerPageList;

      if (sizePerPageDropDown) {
        dropdown = sizePerPageDropDown({
          open: this.state.open,
          hideSizePerPage: hideSizePerPage,
          currSizePerPage: String(sizePerPage),
          sizePerPageList: sizePerPageList,
          toggleDropDown: this.toggleDropDown,
          changeSizePerPage: this.changeSizePerPage,
          onBlur: this.closeDropDown
        });
        if (dropdown.type.name === _SizePerPageDropDown2.default.name) {
          dropdownProps = dropdown.props;
        } else {
          return dropdown;
        }
      }

      if (dropdownProps || !dropdown) {
        var isBootstrap4 = _util2.default.isBootstrap4(this.props.version);
        var sizePerPageOptions = sizePerPageList.map(function (_sizePerPage) {
          var pageText = _sizePerPage.text || _sizePerPage;
          var pageNum = _sizePerPage.value || _sizePerPage;
          if (sizePerPage === pageNum) sizePerPageText = pageText;
          if (isBootstrap4) {
            return _react2.default.createElement(
              'a',
              {
                href: '#',
                tabIndex: '-1',
                key: pageText,
                className: 'dropdown-item',
                onMouseDown: function onMouseDown(e) {
                  e.preventDefault();
                  _this3.changeSizePerPage(pageNum);
                } },
              pageText
            );
          } else {
            return _react2.default.createElement(
              'li',
              { key: pageText, role: 'presentation', className: 'dropdown-item' },
              _react2.default.createElement(
                'a',
                { role: 'menuitem',
                  tabIndex: '-1', href: '#',
                  'data-page': pageNum,
                  onMouseDown: function onMouseDown(e) {
                    e.preventDefault();
                    _this3.changeSizePerPage(pageNum);
                  } },
                pageText
              )
            );
          }
        });
        dropdown = _react2.default.createElement(_SizePerPageDropDown2.default, _extends({
          open: this.state.open,
          hidden: hideSizePerPage,
          currSizePerPage: String(sizePerPageText),
          options: sizePerPageOptions,
          onClick: this.toggleDropDown,
          onBlur: this.closeDropDown,
          isBootstrap4: isBootstrap4
        }, dropdownProps));
      }
      return dropdown;
    }
  }, {
    key: 'makePage',
    value: function makePage() {
      var _this4 = this;

      var isCustomPagingPanel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var pages = this.getPages();
      var isStart = function isStart(page, _ref) {
        var currPage = _ref.currPage,
            pageStartIndex = _ref.pageStartIndex,
            firstPage = _ref.firstPage,
            prePage = _ref.prePage;
        return currPage === pageStartIndex && (page === firstPage || page === prePage);
      };
      var isEnd = function isEnd(page, _ref2) {
        var currPage = _ref2.currPage,
            nextPage = _ref2.nextPage,
            lastPage = _ref2.lastPage;
        return currPage === _this4.lastPage && (page === nextPage || page === lastPage);
      };
      var pageBtns = pages.filter(function (page) {
        if (this.props.alwaysShowAllBtns) {
          return true;
        }
        return isStart(page, this.props) || isEnd(page, this.props) ? false : true;
      }, this).map(function (page, index) {
        var isActive = page === this.props.currPage;
        var isDisabled = isStart(page, this.props) || isEnd(page, this.props) ? true : false;
        var title = page + '';
        var pageNumber = page;

        if (page === this.props.nextPage) {
          title = this.props.nextPageTitle;
          pageNumber = this.props.currPage + 1;
        } else if (page === this.props.prePage) {
          title = this.props.prePageTitle;
          pageNumber = this.props.currPage - 1;
        } else if (page === this.props.firstPage) {
          title = this.props.firstPageTitle;
          pageNumber = this.props.pageStartIndex;
        } else if (page === this.props.lastPage) {
          title = this.props.lastPageTitle;
          pageNumber = this.getLastPage();
        }

        return _react2.default.createElement(
          _PageButton2.default,
          { key: index,
            title: title,
            changePage: this.changePage,
            active: isActive,
            disable: isDisabled,
            pageNumber: pageNumber },
          page
        );
      }, this);
      var classname = (0, _classnames2.default)(isCustomPagingPanel ? null : 'react-bootstrap-table-page-btns-ul', 'pagination');
      return _react2.default.createElement(
        'ul',
        { className: classname },
        pageBtns
      );
    }
  }, {
    key: 'getLastPage',
    value: function getLastPage() {
      return this.lastPage;
    }
  }, {
    key: 'getPages',
    value: function getPages() {
      var pages = void 0;
      var endPage = this.totalPages;
      if (endPage <= 0) return [];
      var startPage = Math.max(this.props.currPage - Math.floor(this.props.paginationSize / 2), this.props.pageStartIndex);
      endPage = startPage + this.props.paginationSize - 1;

      if (endPage > this.lastPage) {
        endPage = this.lastPage;
        startPage = endPage - this.props.paginationSize + 1;
      }

      if (startPage !== this.props.pageStartIndex && this.totalPages > this.props.paginationSize && this.props.withFirstAndLast) {
        pages = [this.props.firstPage, this.props.prePage];
      } else if (this.totalPages > 1 || this.props.alwaysShowAllBtns) {
        pages = [this.props.prePage];
      } else {
        pages = [];
      }

      for (var i = startPage; i <= endPage; i++) {
        if (i >= this.props.pageStartIndex) pages.push(i);
      }

      if (endPage <= this.lastPage && pages.length > 1) {
        pages.push(this.props.nextPage);
      }
      if (endPage !== this.lastPage && this.props.withFirstAndLast) {
        pages.push(this.props.lastPage);
      }

      return pages;
    }
  }]);

  return PaginationList;
}(_react.Component);

PaginationList.propTypes = {
  currPage: _propTypes2.default.number,
  sizePerPage: _propTypes2.default.number,
  dataSize: _propTypes2.default.number,
  changePage: _propTypes2.default.func,
  sizePerPageList: _propTypes2.default.array,
  paginationShowsTotal: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func]),
  paginationSize: _propTypes2.default.number,
  onSizePerPageList: _propTypes2.default.func,
  prePage: _propTypes2.default.any,
  nextPage: _propTypes2.default.any,
  firstPage: _propTypes2.default.any,
  lastPage: _propTypes2.default.any,
  pageStartIndex: _propTypes2.default.number,
  hideSizePerPage: _propTypes2.default.bool,
  alwaysShowAllBtns: _propTypes2.default.bool,
  withFirstAndLast: _propTypes2.default.bool,
  sizePerPageDropDown: _propTypes2.default.func,
  paginationPanel: _propTypes2.default.func,
  prePageTitle: _propTypes2.default.string,
  nextPageTitle: _propTypes2.default.string,
  firstPageTitle: _propTypes2.default.string,
  lastPageTitle: _propTypes2.default.string,
  hidePageListOnlyOnePage: _propTypes2.default.bool,
  keepSizePerPageState: _propTypes2.default.bool
};

PaginationList.defaultProps = {
  sizePerPage: _Const2.default.SIZE_PER_PAGE,
  pageStartIndex: _Const2.default.PAGE_START_INDEX
};

var _default = PaginationList;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PaginationList, 'PaginationList', '/home/nogi/nogi/forks/react-bootstrap-table/src/pagination/PaginationList.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/nogi/nogi/forks/react-bootstrap-table/src/pagination/PaginationList.js');
}();

;