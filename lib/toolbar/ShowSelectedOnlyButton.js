'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Const = require('../Const');

var _Const2 = _interopRequireDefault(_Const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var showSelectedOnlyBtnDefaultClass = 'react-bs-table-show-sel-only-btn';

var ShowSelectedOnlyButton = function (_Component) {
  _inherits(ShowSelectedOnlyButton, _Component);

  function ShowSelectedOnlyButton() {
    _classCallCheck(this, ShowSelectedOnlyButton);

    return _possibleConstructorReturn(this, (ShowSelectedOnlyButton.__proto__ || Object.getPrototypeOf(ShowSelectedOnlyButton)).apply(this, arguments));
  }

  _createClass(ShowSelectedOnlyButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          btnContextual = _props.btnContextual,
          className = _props.className,
          onClick = _props.onClick,
          toggle = _props.toggle,
          showAllText = _props.showAllText,
          showOnlySelectText = _props.showOnlySelectText,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['btnContextual', 'className', 'onClick', 'toggle', 'showAllText', 'showOnlySelectText', 'children']);

      var content = children || _react2.default.createElement(
        'span',
        null,
        toggle ? showOnlySelectText : showAllText
      );
      return _react2.default.createElement(
        'button',
        _extends({ type: 'button',
          'aria-pressed': 'false',
          'data-toggle': 'button',
          className: 'btn ' + btnContextual + ' ' + showSelectedOnlyBtnDefaultClass + ' ' + className,
          onClick: onClick
        }, rest),
        content
      );
    }
  }]);

  return ShowSelectedOnlyButton;
}(_react.Component);

ShowSelectedOnlyButton.propTypes = {
  showAllText: _react.PropTypes.string,
  showOnlySelectText: _react.PropTypes.string,
  toggle: _react.PropTypes.bool,
  btnContextual: _react.PropTypes.string,
  className: _react.PropTypes.string,
  onClick: _react.PropTypes.func
};
ShowSelectedOnlyButton.defaultProps = {
  showAllText: _Const2.default.SHOW_ALL,
  showOnlySelectText: _Const2.default.SHOW_ONLY_SELECT,
  toggle: false,
  btnContextual: 'btn-primary',
  className: '',
  onClick: undefined
};

var _default = ShowSelectedOnlyButton;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(showSelectedOnlyBtnDefaultClass, 'showSelectedOnlyBtnDefaultClass', '/Users/Benjamin/Development/github/react-bootstrap-table/src/toolbar/ShowSelectedOnlyButton.js');

  __REACT_HOT_LOADER__.register(ShowSelectedOnlyButton, 'ShowSelectedOnlyButton', '/Users/Benjamin/Development/github/react-bootstrap-table/src/toolbar/ShowSelectedOnlyButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Benjamin/Development/github/react-bootstrap-table/src/toolbar/ShowSelectedOnlyButton.js');
}();

;