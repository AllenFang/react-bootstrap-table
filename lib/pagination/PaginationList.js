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

var PaginationList = (function (_React$Component) {
  _inherits(PaginationList, _React$Component);

  function PaginationList(props) {
    _classCallCheck(this, PaginationList);

    _get(Object.getPrototypeOf(PaginationList.prototype), 'constructor', this).call(this, props);
    this.state = {
      currentPage: this.props.currPage,
      sizePerPage: this.props.sizePerPage
    };
  }

  _createClass(PaginationList, [{
    key: 'changePage',
    value: function changePage(page) {
      if (page == _Const2['default'].PRE_PAGE) {
        page = this.state.currentPage - 1 < 1 ? 1 : this.state.currentPage - 1;
      } else if (page == _Const2['default'].NEXT_PAGE) {
        page = this.state.currentPage + 1 > this.totalPages ? this.totalPages : this.state.currentPage + 1;
      } else if (page == _Const2['default'].LAST_PAGE) {
        page = this.totalPages;
      } else if (page == _Const2['default'].FIRST_PAGE) {
        page = 1;
      } else {
        page = parseInt(page);
      }

      if (page != this.state.currentPage) {
        this.setState({ currentPage: page });
        this.props.changePage(page, this.state.sizePerPage);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.remote) {
        if (nextProps.currPage || nextProps.sizePerPage) {
          this.setState({
            currentPage: nextProps.currPage,
            sizePerPage: nextProps.sizePerPage
          });
        }
      }
    }
  }, {
    key: 'changeSizePerPage',
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
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      this.totalPages = Math.ceil(this.props.dataSize / this.state.sizePerPage);
      var pageBtns = this.makePage();
      var pageListStyle = {
        marginTop: "0px" //override the margin-top defined in .pagination class in bootstrap.
      };

      var sizePerPageList = this.props.sizePerPageList.map(function (sizePerPage) {
        return _react2['default'].createElement(
          'li',
          { key: sizePerPage, role: 'presentation' },
          _react2['default'].createElement(
            'a',
            { role: 'menuitem', tabIndex: '-1', href: '#', onClick: _this.changeSizePerPage.bind(_this) },
            sizePerPage
          )
        );
      });

      return _react2['default'].createElement(
        'div',
        { className: 'row' },
        _react2['default'].createElement(
          'div',
          { className: 'col-md-1' },
          _react2['default'].createElement(
            'div',
            { className: 'dropdown' },
            _react2['default'].createElement(
              'button',
              { className: 'btn btn-default dropdown-toggle', type: 'button', id: 'pageDropDown', 'data-toggle': 'dropdown',
                'aria-expanded': 'true' },
              this.state.sizePerPage,
              _react2['default'].createElement('span', { className: 'caret' })
            ),
            _react2['default'].createElement(
              'ul',
              { className: 'dropdown-menu', role: 'menu', 'aria-labelledby': 'pageDropDown' },
              sizePerPageList
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
      );
    }
  }, {
    key: 'makePage',
    value: function makePage() {
      var pages = this.getPages();
      return pages.map(function (page) {
        var isActive = page === this.state.currentPage;
        return _react2['default'].createElement(
          _PageButtonJs2['default'],
          { changePage: this.changePage.bind(this), active: isActive, key: page },
          page
        );
      }, this);
    }
  }, {
    key: 'getPages',
    value: function getPages() {
      var startPage = 1,
          endPage = this.totalPages;

      startPage = Math.max(this.state.currentPage - Math.floor(this.props.paginationSize / 2), 1);
      endPage = startPage + this.props.paginationSize - 1;

      if (endPage > this.totalPages) {
        endPage = this.totalPages;
        startPage = endPage - this.props.paginationSize + 1;
      }
      var pages = [_Const2['default'].FIRST_PAGE, _Const2['default'].PRE_PAGE];
      for (var i = startPage; i <= endPage; i++) {
        if (i > 0) pages.push(i);
      }
      pages.push(_Const2['default'].NEXT_PAGE);
      pages.push(_Const2['default'].LAST_PAGE);
      return pages;
    }
  }, {
    key: 'getCurrentPage',
    value: function getCurrentPage() {
      return this.state.currentPage;
    }
  }, {
    key: 'getSizePerPage',
    value: function getSizePerPage() {
      return this.state.sizePerPage;
    }
  }]);

  return PaginationList;
})(_react2['default'].Component);

PaginationList.propTypes = {
  currPage: _react2['default'].PropTypes.number,
  sizePerPage: _react2['default'].PropTypes.number,
  dataSize: _react2['default'].PropTypes.number,
  changePage: _react2['default'].PropTypes.func,
  sizePerPageList: _react2['default'].PropTypes.array,
  paginationSize: _react2['default'].PropTypes.number,
  remote: _react2['default'].PropTypes.bool
};

PaginationList.defaultProps = {
  sizePerPage: _Const2['default'].SIZE_PER_PAGE
};

exports['default'] = PaginationList;
module.exports = exports['default'];