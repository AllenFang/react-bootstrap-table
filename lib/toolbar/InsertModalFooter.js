'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Const = require('../Const');

var _Const2 = _interopRequireDefault(_Const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InsertModalFooter = function (_Component) {
  _inherits(InsertModalFooter, _Component);

  function InsertModalFooter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InsertModalFooter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InsertModalFooter.__proto__ || Object.getPrototypeOf(InsertModalFooter)).call.apply(_ref, [this].concat(args))), _this), _this.handleCloseBtnClick = function () {
      var _this2;

      return (_this2 = _this).__handleCloseBtnClick__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleSaveBtnClick = function () {
      var _this3;

      return (_this3 = _this).__handleSaveBtnClick__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InsertModalFooter, [{
    key: '__handleCloseBtnClick__REACT_HOT_LOADER__',
    value: function __handleCloseBtnClick__REACT_HOT_LOADER__(e) {
      var _props = this.props,
          beforeClose = _props.beforeClose,
          onModalClose = _props.onModalClose;

      beforeClose && beforeClose(e);
      onModalClose();
    }
  }, {
    key: '__handleSaveBtnClick__REACT_HOT_LOADER__',
    value: function __handleSaveBtnClick__REACT_HOT_LOADER__(e) {
      var _props2 = this.props,
          beforeSave = _props2.beforeSave,
          onSave = _props2.onSave;

      beforeSave && beforeSave(e);
      onSave();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          className = _props3.className,
          saveBtnText = _props3.saveBtnText,
          closeBtnText = _props3.closeBtnText,
          closeBtnContextual = _props3.closeBtnContextual,
          saveBtnContextual = _props3.saveBtnContextual,
          closeBtnClass = _props3.closeBtnClass,
          saveBtnClass = _props3.saveBtnClass,
          children = _props3.children;


      var content = children || _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          'button',
          {
            type: 'button',
            className: 'btn ' + closeBtnContextual + ' ' + closeBtnClass,
            onClick: this.handleCloseBtnClick },
          closeBtnText
        ),
        _react2.default.createElement(
          'button',
          {
            type: 'button',
            className: 'btn ' + saveBtnContextual + ' ' + saveBtnClass,
            onClick: this.handleSaveBtnClick },
          saveBtnText
        )
      );

      return _react2.default.createElement(
        'div',
        { className: 'modal-footer ' + className },
        content
      );
    }
  }]);

  return InsertModalFooter;
}(_react.Component);

InsertModalFooter.propTypes = {
  className: _react.PropTypes.string,
  saveBtnText: _react.PropTypes.string,
  closeBtnText: _react.PropTypes.string,
  closeBtnContextual: _react.PropTypes.string,
  saveBtnContextual: _react.PropTypes.string,
  closeBtnClass: _react.PropTypes.string,
  saveBtnClass: _react.PropTypes.string,
  beforeClose: _react.PropTypes.func,
  beforeSave: _react.PropTypes.func,
  onSave: _react.PropTypes.func,
  onModalClose: _react.PropTypes.func
};
InsertModalFooter.defaultProps = {
  className: '',
  saveBtnText: _Const2.default.SAVE_BTN_TEXT,
  closeBtnText: _Const2.default.CLOSE_BTN_TEXT,
  closeBtnContextual: 'btn-default',
  saveBtnContextual: 'btn-primary',
  closeBtnClass: '',
  saveBtnClass: '',
  beforeClose: undefined,
  beforeSave: undefined
};

var _default = InsertModalFooter;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(InsertModalFooter, 'InsertModalFooter', '/Users/Benjamin/Development/github/react-bootstrap-table/src/toolbar/InsertModalFooter.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Benjamin/Development/github/react-bootstrap-table/src/toolbar/InsertModalFooter.js');
}();

;