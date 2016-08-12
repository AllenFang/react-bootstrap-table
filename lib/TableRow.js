'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var TableRow = (function (_Component) {
  _inherits(TableRow, _Component);

  function TableRow(props) {
    var _this = this;

    _classCallCheck(this, TableRow);

    _get(Object.getPrototypeOf(TableRow.prototype), 'constructor', this).call(this, props);

    this.rowClick = function (e) {
      if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'SELECT' && e.target.tagName !== 'TEXTAREA') {
        (function () {
          var rowIndex = e.currentTarget.rowIndex + 1;
          var _props = _this.props;
          var selectRow = _props.selectRow;
          var unselectableRow = _props.unselectableRow;
          var isSelected = _props.isSelected;
          var onSelectRow = _props.onSelectRow;

          if (selectRow) {
            if (selectRow.clickToSelect && !unselectableRow) {
              onSelectRow(rowIndex, !isSelected, e);
            } else if (selectRow.clickToSelectAndEditCell && !unselectableRow) {
              _this.clickNum++;
              /** if clickToSelectAndEditCell is enabled,
               *  there should be a delay to prevent a selection changed when
               *  user dblick to edit cell on same row but different cell
              **/
              setTimeout(function () {
                if (_this.clickNum === 1) {
                  onSelectRow(rowIndex, !isSelected, e);
                }
                _this.clickNum = 0;
              }, 200);
            }
          }
          if (_this.props.onRowClick) _this.props.onRowClick(rowIndex);
        })();
      }
    };

    this.rowMouseOut = function (e) {
      if (_this.props.onRowMouseOut) {
        _this.props.onRowMouseOut(e.currentTarget.rowIndex, e);
      }
    };

    this.rowMouseOver = function (e) {
      if (_this.props.onRowMouseOver) {
        _this.props.onRowMouseOver(e.currentTarget.rowIndex, e);
      }
    };

    this.clickNum = 0;
  }

  _createClass(TableRow, [{
    key: 'render',
    value: function render() {
      this.clickNum = 0;
      var trCss = {
        style: {
          backgroundColor: this.props.isSelected ? this.props.selectRow.bgColor : null
        },
        className: (0, _classnames2['default'])(this.props.isSelected ? this.props.selectRow.className : null, this.props.className)
      };

      if (this.props.selectRow && (this.props.selectRow.clickToSelect || this.props.selectRow.clickToSelectAndEditCell) || this.props.onRowClick) {
        return _react2['default'].createElement(
          'tr',
          _extends({}, trCss, {
            onMouseOver: this.rowMouseOver,
            onMouseOut: this.rowMouseOut,
            onClick: this.rowClick }),
          this.props.children
        );
      } else {
        return _react2['default'].createElement(
          'tr',
          trCss,
          this.props.children
        );
      }
    }
  }]);

  return TableRow;
})(_react.Component);

TableRow.propTypes = {
  isSelected: _react.PropTypes.bool,
  enableCellEdit: _react.PropTypes.bool,
  onRowClick: _react.PropTypes.func,
  onSelectRow: _react.PropTypes.func,
  onRowMouseOut: _react.PropTypes.func,
  onRowMouseOver: _react.PropTypes.func,
  unselectableRow: _react.PropTypes.bool
};
TableRow.defaultProps = {
  onRowClick: undefined
};
exports['default'] = TableRow;
module.exports = exports['default'];