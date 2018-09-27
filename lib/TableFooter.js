'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableFooter = function (_Component) {
  _inherits(TableFooter, _Component);

  function TableFooter() {
    _classCallCheck(this, TableFooter);

    return _possibleConstructorReturn(this, (TableFooter.__proto__ || Object.getPrototypeOf(TableFooter)).apply(this, arguments));
  }

  _createClass(TableFooter, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          hideSelectColumn = _props.hideSelectColumn,
          expandColumnVisible = _props.expandColumnVisible;

      var containerClasses = (0, _classnames2.default)('react-bs-container-footer', 'table-footer-wrapper');
      var tableClasses = (0, _classnames2.default)('table', 'table-hover', {
        'table-bordered': this.props.bordered,
        'table-condensed': this.props.condensed
      }, this.props.tableFooterClass);
      return _react2.default.createElement(
        'div',
        {
          ref: function ref(node) {
            return _this2.container = node;
          },
          className: containerClasses,
          style: this.props.style },
        this.props.children.map(function (footerItem, footerItemIndex) {
          return _react2.default.createElement(
            'span',
            { key: footerItemIndex },
            _react2.default.createElement(
              'table',
              { className: tableClasses },
              _react2.default.cloneElement(_this2.props.colGroups),
              _react2.default.createElement(
                'tfoot',
                null,
                _react2.default.createElement(
                  'tr',
                  { ref: function ref(node) {
                      return _this2.footer = node;
                    } },
                  hideSelectColumn ? null : _this2.renderSelectionOrExpandCol(),
                  !expandColumnVisible ? null : _this2.renderSelectionOrExpandCol(),
                  _this2.props.columns.map(function (columnItem, colIndex) {
                    if (!columnItem.hidden) {
                      var footerObj = footerItem.filter(function (item) {
                        return item.columnIndex === colIndex;
                      });
                      var footerData = void 0;
                      var thAlignment = 'left';
                      if (footerObj.length) {
                        thAlignment = footerObj[0].align;
                        if (footerObj[0].formatter) {
                          footerData = footerObj[0].formatter(_this2.props.footerFormatterReturnData);
                        } else {
                          footerData = footerObj[0].label;
                        }
                      } else {
                        footerData = '';
                      }
                      return _react2.default.createElement(
                        'th',
                        {
                          key: colIndex,
                          style: {
                            minWidth: _this2.props.columns[colIndex].width + 'px',
                            textAlign: thAlignment
                          } },
                        footerData
                      );
                    }
                  })
                )
              )
            )
          );
        })
      );
    }
  }, {
    key: 'renderSelectionOrExpandCol',
    value: function renderSelectionOrExpandCol() {
      return _react2.default.createElement('th', null);
    }
  }]);

  return TableFooter;
}(_react.Component);

TableFooter.propTypes = {
  tableHeaderClass: _propTypes2.default.string,
  style: _propTypes2.default.object,
  hideSelectColumn: _propTypes2.default.bool,
  expandColumnVisible: _propTypes2.default.bool,
  bordered: _propTypes2.default.bool,
  condensed: _propTypes2.default.bool,
  isFiltered: _propTypes2.default.bool,
  sortIndicator: _propTypes2.default.bool
};

var _default = TableFooter;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TableFooter, 'TableFooter', '/home/nogi/nogi/forks/react-bootstrap-table/src/TableFooter.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/nogi/nogi/forks/react-bootstrap-table/src/TableFooter.js');
}();

;