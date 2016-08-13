'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PageButtonJs = require('./PageButton.js');

var _PageButtonJs2 = _interopRequireDefault(_PageButtonJs);

var _Const = require('../Const');

var _Const2 = _interopRequireDefault(_Const);

var PaginationList = (function (_Component) {
  _inherits(PaginationList, _Component);

  function PaginationList() {
    var _this = this;

    _classCallCheck(this, PaginationList);

    _get(Object.getPrototypeOf(PaginationList.prototype), 'constructor', this).apply(this, arguments);

    this.changePage = function (page) {
      var _props = _this.props;
      var pageStartIndex = _props.pageStartIndex;
      var prePage = _props.prePage;
      var currPage = _props.currPage;
      var nextPage = _props.nextPage;
      var lastPage = _props.lastPage;
      var firstPage = _props.firstPage;
      var sizePerPage = _props.sizePerPage;

      if (page === prePage) {
        page = currPage - 1 < pageStartIndex ? pageStartIndex : currPage - 1;
      } else if (page === nextPage) {
        page = currPage + 1 > _this.lastPage ? _this.lastPage : currPage + 1;
      } else if (page === lastPage) {
        page = _this.lastPage;
      } else if (page === firstPage) {
        page = pageStartIndex;
      } else {
        page = parseInt(page, 10);
      }

      if (page !== currPage) {
        _this.props.changePage(page, sizePerPage);
      }
    };

    this.changeSizePerPage = function (e) {
      e.preventDefault();

      var selectSize = parseInt(e.currentTarget.text, 10);
      var currPage = _this.props.currPage;

      if (selectSize !== _this.props.sizePerPage) {
        _this.totalPages = Math.ceil(_this.props.dataSize / selectSize);
        _this.lastPage = _this.props.pageStartIndex + _this.totalPages - 1;
        if (currPage > _this.lastPage) currPage = _this.lastPage;
        _this.props.changePage(currPage, selectSize);
        if (_this.props.onSizePerPageList) {
          _this.props.onSizePerPageList(selectSize);
        }
      }
    };
  }

  _createClass(PaginationList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props;
      var currPage = _props2.currPage;
      var dataSize = _props2.dataSize;
      var sizePerPage = _props2.sizePerPage;
      var sizePerPageList = _props2.sizePerPageList;
      var paginationShowsTotal = _props2.paginationShowsTotal;
      var pageStartIndex = _props2.pageStartIndex;
      var hideSizePerPage = _props2.hideSizePerPage;

      this.totalPages = Math.ceil(dataSize / sizePerPage);
      this.lastPage = this.props.pageStartIndex + this.totalPages - 1;
      var pageBtns = this.makePage();
      var pageListStyle = {
        float: 'right',
        // override the margin-top defined in .pagination class in bootstrap.
        marginTop: '0px'
      };

      var sizePerPageOptions = sizePerPageList.map(function (_sizePerPage) {
        return _react2['default'].createElement(
          'li',
          { key: _sizePerPage, role: 'presentation' },
          _react2['default'].createElement(
            'a',
            { role: 'menuitem',
              tabIndex: '-1', href: '#',
              onClick: _this2.changeSizePerPage },
            _sizePerPage
          )
        );
      });

      var offset = Math.abs(_Const2['default'].PAGE_START_INDEX - pageStartIndex);
      var start = (currPage - pageStartIndex) * sizePerPage;
      var to = Math.min(sizePerPage * (currPage + offset) - 1, dataSize);
      var total = paginationShowsTotal ? _react2['default'].createElement(
        'span',
        null,
        'Showing rows ',
        start,
        ' to ',
        to,
        ' of ',
        dataSize
      ) : null;

      if (typeof paginationShowsTotal === 'function') {
        total = paginationShowsTotal(start, to, dataSize);
      }

      var dropDownStyle = {
        visibility: hideSizePerPage ? 'hidden' : 'visible'
      };

      return _react2['default'].createElement(
        'div',
        { className: 'row', style: { marginTop: 15 } },
        sizePerPageList.length > 1 ? _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'div',
            { className: 'col-md-6' },
            total,
            ' ',
            _react2['default'].createElement(
              'span',
              { className: 'dropdown', style: dropDownStyle },
              _react2['default'].createElement(
                'button',
                { className: 'btn btn-default dropdown-toggle',
                  type: 'button', id: 'pageDropDown', 'data-toggle': 'dropdown',
                  'aria-expanded': 'true' },
                sizePerPage,
                _react2['default'].createElement(
                  'span',
                  null,
                  ' ',
                  _react2['default'].createElement('span', { className: 'caret' })
                )
              ),
              _react2['default'].createElement(
                'ul',
                { className: 'dropdown-menu', role: 'menu', 'aria-labelledby': 'pageDropDown' },
                sizePerPageOptions
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col-md-6' },
            _react2['default'].createElement(
              'ul',
              { className: 'pagination', style: pageListStyle },
              pageBtns
            )
          )
        ) : _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'div',
            { className: 'col-md-6' },
            total
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col-md-6' },
            _react2['default'].createElement(
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
        return _react2['default'].createElement(
          _PageButtonJs2['default'],
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
      var pages = undefined;
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
})(_react.Component);

PaginationList.propTypes = {
  currPage: _react.PropTypes.number,
  sizePerPage: _react.PropTypes.number,
  dataSize: _react.PropTypes.number,
  changePage: _react.PropTypes.func,
  sizePerPageList: _react.PropTypes.array,
  paginationShowsTotal: _react.PropTypes.bool,
  paginationSize: _react.PropTypes.number,
  remote: _react.PropTypes.bool,
  onSizePerPageList: _react.PropTypes.func,
  prePage: _react.PropTypes.string,
  pageStartIndex: _react.PropTypes.number,
  hideSizePerPage: _react.PropTypes.bool
};

PaginationList.defaultProps = {
  sizePerPage: _Const2['default'].SIZE_PER_PAGE,
  pageStartIndex: _Const2['default'].PAGE_START_INDEX
};

exports['default'] = PaginationList;
module.exports = exports['default'];