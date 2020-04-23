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

var _Const = require('../Const');

var _Const2 = _interopRequireDefault(_Const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var deleteBtnDefaultClass = 'react-bs-table-del-btn';

var DeleteButton = function (_Component) {
  _inherits(DeleteButton, _Component);

  function DeleteButton() {
    _classCallCheck(this, DeleteButton);

    return _possibleConstructorReturn(this, (DeleteButton.__proto__ || Object.getPrototypeOf(DeleteButton)).apply(this, arguments));
  }

  _createClass(DeleteButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          btnContextual = _props.btnContextual,
          className = _props.className,
          onClick = _props.onClick,
          btnGlyphicon = _props.btnGlyphicon,
          btnText = _props.btnText,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['btnContextual', 'className', 'onClick', 'btnGlyphicon', 'btnText', 'children']);

      var content = children || _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement('i', { className: 'fa glyphicon ' + btnGlyphicon }),
        ' ',
        btnText
      );
      return _react2.default.createElement(
        'button',
        _extends({ type: 'button',
          className: 'btn ' + btnContextual + ' ' + deleteBtnDefaultClass + ' ' + className,
          onClick: onClick
        }, rest),
        content
      );
    }
  }]);

  return DeleteButton;
}(_react.Component);

DeleteButton.propTypes = {
  btnText: _propTypes2.default.string,
  btnContextual: _propTypes2.default.string,
  className: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  btnGlyphicon: _propTypes2.default.string
};
DeleteButton.defaultProps = {
  btnText: _Const2.default.DELETE_BTN_TEXT,
  btnContextual: 'btn-warning',
  className: '',
  onClick: undefined,
  btnGlyphicon: 'glyphicon-trash fa-trash'
};

var _default = DeleteButton;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(deleteBtnDefaultClass, 'deleteBtnDefaultClass', '/home/nogi/nogi/forks/react-bootstrap-table/src/toolbar/DeleteButton.js');

  __REACT_HOT_LOADER__.register(DeleteButton, 'DeleteButton', '/home/nogi/nogi/forks/react-bootstrap-table/src/toolbar/DeleteButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/nogi/nogi/forks/react-bootstrap-table/src/toolbar/DeleteButton.js');
}();

;