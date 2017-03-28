'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Editor = require('../Editor');

var _Editor2 = _interopRequireDefault(_Editor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/display-name: 0 */


var InsertModalBody = function (_Component) {
  _inherits(InsertModalBody, _Component);

  function InsertModalBody() {
    _classCallCheck(this, InsertModalBody);

    return _possibleConstructorReturn(this, (InsertModalBody.__proto__ || Object.getPrototypeOf(InsertModalBody)).apply(this, arguments));
  }

  _createClass(InsertModalBody, [{
    key: 'getFieldValue',
    value: function getFieldValue() {
      var _this2 = this;

      var newRow = {};
      this.props.columns.forEach(function (column, i) {
        var inputVal = void 0;
        if (column.autoValue) {
          // when you want same auto generate value and not allow edit, example ID field
          var time = new Date().getTime();
          inputVal = typeof column.autoValue === 'function' ? column.autoValue() : 'autovalue-' + time;
        } else if (column.hiddenOnInsert || !column.field) {
          inputVal = '';
        } else {
          var dom = _this2.refs[column.field + i];
          inputVal = dom.value;

          if (column.editable && column.editable.type === 'checkbox') {
            var values = inputVal.split(':');
            inputVal = dom.checked ? values[0] : values[1];
          }
        }
        newRow[column.field] = inputVal;
      }, this);
      return newRow;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          columns = _props.columns,
          validateState = _props.validateState,
          ignoreEditable = _props.ignoreEditable;

      return _react2.default.createElement(
        'div',
        { className: 'modal-body' },
        columns.map(function (column, i) {
          var editable = column.editable,
              format = column.format,
              field = column.field,
              name = column.name,
              autoValue = column.autoValue,
              hiddenOnInsert = column.hiddenOnInsert;

          var attr = {
            ref: field + i,
            placeholder: editable.placeholder ? editable.placeholder : name
          };

          if (autoValue || hiddenOnInsert || !column.field) {
            // when you want same auto generate value
            // and not allow edit, for example ID field
            return null;
          }
          var error = validateState[field] ? _react2.default.createElement(
            'span',
            { className: 'help-block bg-danger' },
            validateState[field]
          ) : null;
          return _react2.default.createElement(
            'div',
            { className: 'form-group', key: field },
            _react2.default.createElement(
              'label',
              null,
              name
            ),
            (0, _Editor2.default)(editable, attr, format, '', undefined, ignoreEditable),
            error
          );
        })
      );
    }
  }]);

  return InsertModalBody;
}(_react.Component);

InsertModalBody.propTypes = {
  columns: _react.PropTypes.array,
  validateState: _react.PropTypes.object,
  ignoreEditable: _react.PropTypes.bool
};

InsertModalBody.defaultProps = {
  validateState: {},
  ignoreEditable: false
};

var _default = InsertModalBody;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(InsertModalBody, 'InsertModalBody', '/Users/Benjamin/Development/github/react-bootstrap-table/src/toolbar/InsertModalBody.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Benjamin/Development/github/react-bootstrap-table/src/toolbar/InsertModalBody.js');
}();

;