'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SizePerPageDropDown = function (_Component) {
  _inherits(SizePerPageDropDown, _Component);

  function SizePerPageDropDown() {
    _classCallCheck(this, SizePerPageDropDown);

    return _possibleConstructorReturn(this, (SizePerPageDropDown.__proto__ || Object.getPrototypeOf(SizePerPageDropDown)).apply(this, arguments));
  }

  _createClass(SizePerPageDropDown, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          open = _props.open,
          hidden = _props.hidden,
          onClick = _props.onClick,
          options = _props.options,
          className = _props.className,
          variation = _props.variation,
          btnContextual = _props.btnContextual,
          currSizePerPage = _props.currSizePerPage;


      var openClass = open ? 'open' : '';
      var dropDownStyle = { visibility: hidden ? 'hidden' : 'visible' };

      return _react2.default.createElement(
        'span',
        { className: variation + ' ' + openClass + ' ' + className, style: dropDownStyle },
        _react2.default.createElement(
          'button',
          { className: 'btn ' + btnContextual + ' dropdown-toggle',
            id: 'pageDropDown', 'data-toggle': 'dropdown',
            'aria-expanded': open,
            onClick: onClick },
          currSizePerPage,
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
          options
        )
      );
    }
  }]);

  return SizePerPageDropDown;
}(_react.Component);

SizePerPageDropDown.propTypes = {
  open: _react.PropTypes.bool,
  hidden: _react.PropTypes.bool,
  btnContextual: _react.PropTypes.string,
  currSizePerPage: _react.PropTypes.string,
  options: _react.PropTypes.array,
  variation: _react.PropTypes.oneOf(['dropdown', 'dropup']),
  className: _react.PropTypes.string,
  onClick: _react.PropTypes.func
};
SizePerPageDropDown.defaultProps = {
  open: false,
  hidden: false,
  btnContextual: 'btn-default',
  variation: 'dropdown',
  className: ''
};

var _default = SizePerPageDropDown;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SizePerPageDropDown, 'SizePerPageDropDown', '/Users/Benjamin/Development/github/react-bootstrap-table/src/pagination/SizePerPageDropDown.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Benjamin/Development/github/react-bootstrap-table/src/pagination/SizePerPageDropDown.js');
}();

;