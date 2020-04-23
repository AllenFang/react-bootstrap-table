'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = require('../util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InsertModalHeader = function (_Component) {
  _inherits(InsertModalHeader, _Component);

  function InsertModalHeader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InsertModalHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InsertModalHeader.__proto__ || Object.getPrototypeOf(InsertModalHeader)).call.apply(_ref, [this].concat(args))), _this), _this.handleCloseBtnClick = function () {
      var _this2;

      return (_this2 = _this).__handleCloseBtnClick__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InsertModalHeader, [{
    key: '__handleCloseBtnClick__REACT_HOT_LOADER__',
    value: function __handleCloseBtnClick__REACT_HOT_LOADER__() {
      return this.__handleCloseBtnClick__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleCloseBtnClick__REACT_HOT_LOADER__',
    value: function __handleCloseBtnClick__REACT_HOT_LOADER__(e) {
      var _props = this.props,
          onModalClose = _props.onModalClose,
          beforeClose = _props.beforeClose;

      beforeClose && beforeClose(e);
      onModalClose();
    }
  }, {
    key: 'renderContent',
    value: function renderContent(closeBtn) {
      var _props2 = this.props,
          version = _props2.version,
          titleText = _props2.title;

      var title = _react2.default.createElement(
        'h4',
        { key: 'title', className: 'modal-title' },
        titleText
      );
      if (_util2.default.isBootstrap4(version)) {
        return [title, closeBtn];
      } else {
        return _react2.default.createElement(
          'span',
          null,
          closeBtn,
          title
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          hideClose = _props3.hideClose,
          className = _props3.className,
          children = _props3.children;


      var closeBtn = hideClose ? null : _react2.default.createElement(
        'button',
        { type: 'button',
          className: 'close', onClick: this.handleCloseBtnClick },
        _react2.default.createElement(
          'span',
          { 'aria-hidden': 'true' },
          '\xD7'
        ),
        _react2.default.createElement(
          'span',
          { className: 'sr-only' },
          'Close'
        )
      );

      var content = children || this.renderContent(closeBtn);

      return _react2.default.createElement(
        'div',
        { className: 'modal-header ' + className },
        content
      );
    }
  }]);

  return InsertModalHeader;
}(_react.Component);

InsertModalHeader.propTypes = {
  version: _propTypes2.default.string,
  className: _propTypes2.default.string,
  title: _propTypes2.default.string,
  onModalClose: _propTypes2.default.func,
  hideClose: _propTypes2.default.bool,
  beforeClose: _propTypes2.default.func
};
InsertModalHeader.defaultProps = {
  version: '3',
  className: '',
  title: 'Add Row',
  onModalClose: undefined,
  hideClose: false,
  beforeClose: undefined
};

var _default = InsertModalHeader;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(InsertModalHeader, 'InsertModalHeader', '/home/nogi/nogi/forks/react-bootstrap-table/src/toolbar/InsertModalHeader.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/nogi/nogi/forks/react-bootstrap-table/src/toolbar/InsertModalHeader.js');
}();

;