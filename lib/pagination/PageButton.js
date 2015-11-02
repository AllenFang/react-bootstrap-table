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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var PageButton = (function (_React$Component) {
  _inherits(PageButton, _React$Component);

  function PageButton(props) {
    _classCallCheck(this, PageButton);

    _get(Object.getPrototypeOf(PageButton.prototype), 'constructor', this).call(this, props);
  }

  _createClass(PageButton, [{
    key: 'pageBtnClick',
    value: function pageBtnClick(e) {
      e.preventDefault();
      this.props.changePage(e.currentTarget.text);
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = this.props.active ? (0, _classnames2['default'])("active") : null;
      return _react2['default'].createElement(
        'li',
        { className: classes },
        _react2['default'].createElement(
          'a',
          { href: '#', onClick: this.pageBtnClick.bind(this) },
          this.props.children
        )
      );
    }
  }]);

  return PageButton;
})(_react2['default'].Component);

PageButton.propTypes = {
  changePage: _react2['default'].PropTypes.func,
  active: _react2['default'].PropTypes.bool
};

exports['default'] = PageButton;
module.exports = exports['default'];