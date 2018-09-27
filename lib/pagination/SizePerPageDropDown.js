'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sizePerPageDefaultClass = 'react-bs-table-sizePerPage-dropdown';

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
          onBlur = _props.onBlur,
          options = _props.options,
          className = _props.className,
          variation = _props.variation,
          btnContextual = _props.btnContextual,
          isBootstrap4 = _props.isBootstrap4,
          currSizePerPage = _props.currSizePerPage;


      if (hidden) return null;

      var openClass = open ? 'open show' : '';

      var renderOptions = function renderOptions() {
        var attrs = {
          className: 'dropdown-menu ' + openClass,
          role: 'menu',
          'aria-labelledby': 'pageDropDown'
        };
        var type = isBootstrap4 ? 'div' : 'ul';

        return _react2.default.createElement(type, attrs, options);
      };

      return _react2.default.createElement(
        'span',
        {
          className: variation + ' ' + openClass + ' ' + className + ' ' + sizePerPageDefaultClass },
        _react2.default.createElement(
          'button',
          { className: 'btn ' + btnContextual + ' dropdown-toggle',
            id: 'pageDropDown', 'data-toggle': 'dropdown',
            'aria-expanded': open,
            'aria-haspopup': !open,
            onClick: onClick,
            onBlur: onBlur },
          currSizePerPage,
          _react2.default.createElement(
            'span',
            null,
            ' ',
            _react2.default.createElement('span', { className: 'caret' })
          )
        ),
        renderOptions()
      );
    }
  }]);

  return SizePerPageDropDown;
}(_react.Component);

SizePerPageDropDown.propTypes = {
  open: _propTypes2.default.bool,
  hidden: _propTypes2.default.bool,
  btnContextual: _propTypes2.default.string,
  currSizePerPage: _propTypes2.default.string,
  options: _propTypes2.default.array,
  variation: _propTypes2.default.oneOf(['dropdown', 'dropup']),
  className: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  onBlur: _propTypes2.default.func
};
SizePerPageDropDown.defaultProps = {
  open: false,
  hidden: false,
  btnContextual: 'btn-default btn-secondary',
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

  __REACT_HOT_LOADER__.register(sizePerPageDefaultClass, 'sizePerPageDefaultClass', '/home/nogi/nogi/forks/react-bootstrap-table/src/pagination/SizePerPageDropDown.js');

  __REACT_HOT_LOADER__.register(SizePerPageDropDown, 'SizePerPageDropDown', '/home/nogi/nogi/forks/react-bootstrap-table/src/pagination/SizePerPageDropDown.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/nogi/nogi/forks/react-bootstrap-table/src/pagination/SizePerPageDropDown.js');
}();

;