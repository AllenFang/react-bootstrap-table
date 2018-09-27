'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Const = require('./Const');

var _Const2 = _interopRequireDefault(_Const);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  renderReactSortCaret: function renderReactSortCaret(order, isBootstrap4) {
    var orderClass = void 0;
    if (isBootstrap4) {
      orderClass = (0, _classnames2.default)('fa', {
        'fa-sort-asc': order === _Const2.default.SORT_ASC,
        'fa-sort-desc': order === _Const2.default.SORT_DESC
      });
      return _react2.default.createElement('span', { className: orderClass, style: { margin: '10px 5px' } });
    } else {
      orderClass = (0, _classnames2.default)('order', {
        'dropup': order === _Const2.default.SORT_ASC
      });
      return _react2.default.createElement(
        'span',
        { className: orderClass },
        _react2.default.createElement('span', { className: 'caret', style: { margin: '10px 5px' } })
      );
    }
  },
  isFunction: function isFunction(obj) {
    return obj && typeof obj === 'function';
  },
  getScrollBarWidth: function getScrollBarWidth() {
    var inner = document.createElement('p');
    inner.style.width = '100%';
    inner.style.height = '200px';

    var outer = document.createElement('div');
    outer.style.position = 'absolute';
    outer.style.top = '0px';
    outer.style.left = '0px';
    outer.style.visibility = 'hidden';
    outer.style.width = '200px';
    outer.style.height = '150px';
    outer.style.overflow = 'hidden';
    outer.appendChild(inner);

    document.body.appendChild(outer);
    var w1 = inner.getBoundingClientRect().width;
    outer.style.overflow = 'scroll';
    var w2 = inner.getBoundingClientRect().width;

    if (w1 === w2) w2 = outer.clientWidth;

    document.body.removeChild(outer);

    return w1 - w2;
  },
  canUseDOM: function canUseDOM() {
    return typeof window !== 'undefined' && typeof window.document !== 'undefined';
  },


  // We calculate an offset here in order to properly fetch the indexed data,
  // despite the page start index not always being 1
  getNormalizedPage: function getNormalizedPage(pageStartIndex, page) {
    pageStartIndex = this.getFirstPage(pageStartIndex);
    if (page === undefined) page = pageStartIndex;
    var offset = Math.abs(_Const2.default.PAGE_START_INDEX - pageStartIndex);
    return page + offset;
  },
  getFirstPage: function getFirstPage(pageStartIndex) {
    return pageStartIndex !== undefined ? pageStartIndex : _Const2.default.PAGE_START_INDEX;
  },
  isBootstrap4: function isBootstrap4(version) {
    return version === '4';
  },
  isSelectRowDefined: function isSelectRowDefined(mode) {
    return mode === _Const2.default.ROW_SELECT_SINGLE || mode === _Const2.default.ROW_SELECT_MULTI;
  },
  renderColGroup: function renderColGroup(columns, selectRow) {
    var expandColumnOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var version = arguments[3];

    var selectRowHeader = null;
    var expandRowHeader = null;
    var isBootstrap4 = this.isBootstrap4(version);
    var isSelectRowDefined = this.isSelectRowDefined(selectRow.mode);
    var columnWidth = isBootstrap4 ? '38px' : '30px';
    if (isSelectRowDefined) {
      var style = {
        width: selectRow.columnWidth || columnWidth,
        minWidth: selectRow.columnWidth || columnWidth
      };
      if (!selectRow.hideSelectColumn) {
        selectRowHeader = _react2.default.createElement('col', { key: 'select-col', style: style });
      }
    }
    if (expandColumnOptions.expandColumnVisible) {
      var _style = {
        width: expandColumnOptions.columnWidth || columnWidth,
        minWidth: expandColumnOptions.columnWidth || columnWidth
      };
      expandRowHeader = _react2.default.createElement('col', { key: 'expand-col', style: _style });
    }
    var theader = columns.map(function (column, i) {
      var style = {
        display: column.hidden ? 'none' : null
      };
      if (column.width) {
        var width = !isNaN(column.width) ? column.width + 'px' : column.width;
        style.width = width;
        /** add min-wdth to fix user assign column width
        not eq offsetWidth in large column table **/
        style.minWidth = width;
      }
      return _react2.default.createElement('col', { style: style, key: i });
    });

    return _react2.default.createElement(
      'colgroup',
      null,
      expandColumnOptions.expandColumnVisible && expandColumnOptions.expandColumnBeforeSelectColumn && expandRowHeader,
      selectRowHeader,
      expandColumnOptions.expandColumnVisible && !expandColumnOptions.expandColumnBeforeSelectColumn && expandRowHeader,
      theader
    );
  }
}; /* eslint react/display-name: 0 */

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/nogi/nogi/forks/react-bootstrap-table/src/util.js');
}();

;