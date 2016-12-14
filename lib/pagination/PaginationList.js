'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PageButton = require('./PageButton.js');

var _PageButton2 = _interopRequireDefault(_PageButton);

var _Const = require('../Const');

var _Const2 = _interopRequireDefault(_Const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PaginationList = function (_Component) {
  _inherits(PaginationList, _Component);

  function PaginationList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PaginationList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PaginationList.__proto__ || Object.getPrototypeOf(PaginationList)).call.apply(_ref, [this].concat(args))), _this), _this.changePage = function () {
      var _this2;

      return (_this2 = _this).__changePage__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.changeSizePerPage = function () {
      var _this3;

      return (_this3 = _this).__changeSizePerPage__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PaginationList, [{
    key: '__changePage__REACT_HOT_LOADER__',
    value: function __changePage__REACT_HOT_LOADER__(page) {
      var _props = this.props,
          pageStartIndex = _props.pageStartIndex,
          prePage = _props.prePage,
          currPage = _props.currPage,
          nextPage = _props.nextPage,
          lastPage = _props.lastPage,
          firstPage = _props.firstPage,
          sizePerPage = _props.sizePerPage;


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

      if (page !== currPage) {
        this.props.changePage(page, sizePerPage);
      }
    }
  }, {
    key: '__changeSizePerPage__REACT_HOT_LOADER__',
    value: function __changeSizePerPage__REACT_HOT_LOADER__(e) {
      e.preventDefault();

      var selectSize = parseInt(e.currentTarget.getAttribute('data-page'), 10);
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
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props2 = this.props,
          currPage = _props2.currPage,
          dataSize = _props2.dataSize,
          sizePerPage = _props2.sizePerPage,
          sizePerPageList = _props2.sizePerPageList,
          paginationShowsTotal = _props2.paginationShowsTotal,
          pageStartIndex = _props2.pageStartIndex,
          hideSizePerPage = _props2.hideSizePerPage;

      var sizePerPageText = '';
      this.totalPages = Math.ceil(dataSize / sizePerPage);
      this.lastPage = this.props.pageStartIndex + this.totalPages - 1;
      var pageBtns = this.makePage();
      var pageListStyle = {
        float: 'right',
        // override the margin-top defined in .pagination class in bootstrap.
        marginTop: '0px'
      };

      var sizePerPageOptions = sizePerPageList.map(function (_sizePerPage) {
        var pageText = _sizePerPage.text || _sizePerPage;
        var pageNum = _sizePerPage.value || _sizePerPage;
        if (sizePerPage === pageNum) sizePerPageText = pageText;
        return _react2.default.createElement(
          'li',
          { key: pageText, role: 'presentation' },
          _react2.default.createElement(
            'a',
            { role: 'menuitem',
              tabIndex: '-1', href: '#',
              'data-page': pageNum,
              onClick: _this4.changeSizePerPage },
            pageText
          )
        );
      });

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

      if (typeof paginationShowsTotal === 'function') {
        total = paginationShowsTotal(start, to + 1, dataSize);
      }

      var dropDownStyle = {
        visibility: hideSizePerPage ? 'hidden' : 'visible'
      };

      return _react2.default.createElement(
        'div',
        { className: 'row', style: { marginTop: 15 } },
        sizePerPageList.length > 1 ? _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'col-md-6' },
            total,
            ' ',
            _react2.default.createElement(
              'span',
              { className: 'dropdown', style: dropDownStyle },
              _react2.default.createElement(
                'button',
                { className: 'btn btn-default dropdown-toggle',
                  type: 'button', id: 'pageDropDown', 'data-toggle': 'dropdown',
                  'aria-expanded': 'true' },
                sizePerPageText,
                _react2.default.createElement(
                  'span',
                  null,
                  ' ',
                  _react2.default.createElement('span', { className: 'caret' })
                )
              ),
              _react2.default.createElement(
                'ul',
                { className: 'dropdown-menu', role: 'menu', 'aria-labelledby': 'pageDropDown' },
                sizePerPageOptions
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-6' },
            _react2.default.createElement(
              'ul',
              { className: 'pagination', style: pageListStyle },
              pageBtns
            )
          )
        ) : _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'col-md-6' },
            total
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-6' },
            _react2.default.createElement(
              'ul',
              { className: 'pagination', style: pageListStyle },
              pageBtns
            )
          )
        )
      );
    }
  }, {
    key: 'makePage',
    value: function makePage() {
      var pages = this.getPages();
      return pages.map(function (page) {
        var isActive = page === this.props.currPage;
        var disabled = false;
        var hidden = false;
        if (this.props.currPage === this.props.pageStartIndex && (page === this.props.firstPage || page === this.props.prePage)) {
          disabled = true;
          hidden = true;
        }
        if (this.props.currPage === this.lastPage && (page === this.props.nextPage || page === this.props.lastPage)) {
          disabled = true;
          hidden = true;
        }
        return _react2.default.createElement(
          _PageButton2.default,
          { key: page,
            changePage: this.changePage,
            active: isActive,
            disable: disabled,
            hidden: hidden },
          page
        );
      }, this);
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

      if (startPage !== this.props.pageStartIndex && this.totalPages > this.props.paginationSize) {
        pages = [this.props.firstPage, this.props.prePage];
      } else if (this.totalPages > 1) {
        pages = [this.props.prePage];
      } else {
        pages = [];
      }

      for (var i = startPage; i <= endPage; i++) {
        if (i >= this.props.pageStartIndex) pages.push(i);
      }

      if (endPage < this.lastPage) {
        pages.push(this.props.nextPage);
        pages.push(this.props.lastPage);
      } else if (endPage === this.lastPage && this.props.currPage !== this.lastPage) {
        pages.push(this.props.nextPage);
      }

      return pages;
    }
  }]);

  return PaginationList;
}(_react.Component);

PaginationList.propTypes = {
  currPage: _react.PropTypes.number,
  sizePerPage: _react.PropTypes.number,
  dataSize: _react.PropTypes.number,
  changePage: _react.PropTypes.func,
  sizePerPageList: _react.PropTypes.array,
  paginationShowsTotal: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.func]),
  paginationSize: _react.PropTypes.number,
  remote: _react.PropTypes.bool,
  onSizePerPageList: _react.PropTypes.func,
  prePage: _react.PropTypes.string,
  pageStartIndex: _react.PropTypes.number,
  hideSizePerPage: _react.PropTypes.bool
};

PaginationList.defaultProps = {
  sizePerPage: _Const2.default.SIZE_PER_PAGE,
  pageStartIndex: _Const2.default.PAGE_START_INDEX
};

var _default = PaginationList;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PaginationList, 'PaginationList', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/pagination/PaginationList.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/pagination/PaginationList.js');
}();

;