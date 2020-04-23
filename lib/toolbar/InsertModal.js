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

var _InsertModalHeader = require('./InsertModalHeader');

var _InsertModalHeader2 = _interopRequireDefault(_InsertModalHeader);

var _InsertModalFooter = require('./InsertModalFooter');

var _InsertModalFooter2 = _interopRequireDefault(_InsertModalFooter);

var _InsertModalBody = require('./InsertModalBody');

var _InsertModalBody2 = _interopRequireDefault(_InsertModalBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-console: 0 */

var defaultModalClassName = 'react-bs-table-insert-modal';

var InsertModal = function (_Component) {
  _inherits(InsertModal, _Component);

  function InsertModal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InsertModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InsertModal.__proto__ || Object.getPrototypeOf(InsertModal)).call.apply(_ref, [this].concat(args))), _this), _this.handleSave = function () {
      var _this2;

      return (_this2 = _this).__handleSave__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InsertModal, [{
    key: '__handleSave__REACT_HOT_LOADER__',
    value: function __handleSave__REACT_HOT_LOADER__() {
      return this.__handleSave__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleSave__REACT_HOT_LOADER__',
    value: function __handleSave__REACT_HOT_LOADER__() {
      if (this.body.getFieldValue) {
        this.props.onSave(this.body.getFieldValue());
      } else {
        console.error('Custom InsertModalBody should implement getFieldValue function\n        and should return an object presented as the new row that user input.');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          headerComponent = _props.headerComponent,
          footerComponent = _props.footerComponent,
          bodyComponent = _props.bodyComponent;
      var _props2 = this.props,
          columns = _props2.columns,
          validateState = _props2.validateState,
          ignoreEditable = _props2.ignoreEditable,
          onModalClose = _props2.onModalClose;

      var bodyAttr = { columns: columns, validateState: validateState, ignoreEditable: ignoreEditable };

      bodyComponent = bodyComponent && bodyComponent(columns, validateState, ignoreEditable);

      headerComponent = headerComponent && headerComponent(onModalClose, this.handleSave);

      footerComponent = footerComponent && footerComponent(onModalClose, this.handleSave);

      if (bodyComponent) {
        bodyComponent = _react2.default.cloneElement(bodyComponent, { ref: function ref(node) {
            return _this3.body = node;
          } });
      }

      if (headerComponent && headerComponent.type.name === _InsertModalHeader2.default.name) {
        var eventProps = {};
        if (!headerComponent.props.onModalClose) eventProps.onModalClose = onModalClose;
        if (!headerComponent.props.onSave) eventProps.onSave = this.handleSave;
        if (Object.keys(eventProps).length > 0) {
          headerComponent = _react2.default.cloneElement(headerComponent, eventProps);
        }
      } else if (headerComponent && headerComponent.type.name !== _InsertModalHeader2.default.name) {
        var className = headerComponent.props.className;

        if (typeof className === 'undefined' || className.indexOf('modal-header') === -1) {
          headerComponent = _react2.default.createElement(
            'div',
            { className: 'modal-header' },
            headerComponent
          );
        }
      }

      if (footerComponent && footerComponent.type.name === _InsertModalFooter2.default.name) {
        var _eventProps = {};
        if (!footerComponent.props.onModalClose) _eventProps.onModalClose = onModalClose;
        if (!footerComponent.props.onSave) _eventProps.onSave = this.handleSave;
        if (Object.keys(_eventProps).length > 0) {
          footerComponent = _react2.default.cloneElement(footerComponent, _eventProps);
        }
      } else if (footerComponent && footerComponent.type.name !== _InsertModalFooter2.default.name) {
        var _className = footerComponent.props.className;

        if (typeof _className === 'undefined' || _className.indexOf('modal-footer') === -1) {
          footerComponent = _react2.default.createElement(
            'div',
            { className: 'modal-footer' },
            footerComponent
          );
        }
      }

      return _react2.default.createElement(
        'div',
        { className: 'modal-content ' + defaultModalClassName },
        headerComponent || _react2.default.createElement(_InsertModalHeader2.default, {
          version: this.props.version,
          className: 'react-bs-table-inser-modal-header',
          onModalClose: onModalClose }),
        bodyComponent || _react2.default.createElement(_InsertModalBody2.default, _extends({ ref: function ref(node) {
            return _this3.body = node;
          } }, bodyAttr)),
        footerComponent || _react2.default.createElement(_InsertModalFooter2.default, {
          className: 'react-bs-table-inser-modal-footer',
          onModalClose: onModalClose,
          onSave: this.handleSave })
      );
    }
  }]);

  return InsertModal;
}(_react.Component);

var _default = InsertModal;
exports.default = _default;

InsertModal.propTypes = {
  version: _propTypes2.default.string.isRequired,
  columns: _propTypes2.default.array.isRequired,
  validateState: _propTypes2.default.object.isRequired,
  ignoreEditable: _propTypes2.default.bool,
  headerComponent: _propTypes2.default.func,
  bodyComponent: _propTypes2.default.func,
  footerComponent: _propTypes2.default.func,
  onModalClose: _propTypes2.default.func,
  onSave: _propTypes2.default.func
};

InsertModal.defaultProps = {};
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(defaultModalClassName, 'defaultModalClassName', '/home/nogi/nogi/forks/react-bootstrap-table/src/toolbar/InsertModal.js');

  __REACT_HOT_LOADER__.register(InsertModal, 'InsertModal', '/home/nogi/nogi/forks/react-bootstrap-table/src/toolbar/InsertModal.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/nogi/nogi/forks/react-bootstrap-table/src/toolbar/InsertModal.js');
}();

;