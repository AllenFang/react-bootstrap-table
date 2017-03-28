'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableRow = function (_Component) {
  _inherits(TableRow, _Component);

  function TableRow(props) {
    _classCallCheck(this, TableRow);

    var _this = _possibleConstructorReturn(this, (TableRow.__proto__ || Object.getPrototypeOf(TableRow)).call(this, props));

    _this.rowClick = function () {
      return _this.__rowClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.expandRow = function () {
      return _this.__expandRow__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.rowDoubleClick = function () {
      return _this.__rowDoubleClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.rowMouseOut = function () {
      return _this.__rowMouseOut__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.rowMouseOver = function () {
      return _this.__rowMouseOver__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.clickNum = 0;
    return _this;
  }

  _createClass(TableRow, [{
    key: '__rowClick__REACT_HOT_LOADER__',
    value: function __rowClick__REACT_HOT_LOADER__(e) {
      var _this2 = this;

      var rowIndex = this.props.index + 1;
      var cellIndex = e.target.cellIndex;
      if (this.props.onRowClick) this.props.onRowClick(rowIndex, cellIndex);
      var _props = this.props,
          selectRow = _props.selectRow,
          unselectableRow = _props.unselectableRow,
          isSelected = _props.isSelected,
          onSelectRow = _props.onSelectRow,
          onExpandRow = _props.onExpandRow;

      if (selectRow) {
        if (selectRow.clickToSelect && !unselectableRow) {
          onSelectRow(rowIndex, !isSelected, e);
        } else if (selectRow.clickToSelectAndEditCell && !unselectableRow) {
          this.clickNum++;
          /** if clickToSelectAndEditCell is enabled,
           *  there should be a delay to prevent a selection changed when
           *  user dblick to edit cell on same row but different cell
          **/
          setTimeout(function () {
            if (_this2.clickNum === 1) {
              onSelectRow(rowIndex, !isSelected, e);
              onExpandRow(rowIndex, cellIndex);
            }
            _this2.clickNum = 0;
          }, 200);
        } else {
          this.expandRow(rowIndex, cellIndex);
        }
      }
    }
  }, {
    key: '__expandRow__REACT_HOT_LOADER__',
    value: function __expandRow__REACT_HOT_LOADER__(rowIndex, cellIndex) {
      var _this3 = this;

      this.clickNum++;
      setTimeout(function () {
        if (_this3.clickNum === 1) {
          _this3.props.onExpandRow(rowIndex, cellIndex);
        }
        _this3.clickNum = 0;
      }, 200);
    }
  }, {
    key: '__rowDoubleClick__REACT_HOT_LOADER__',
    value: function __rowDoubleClick__REACT_HOT_LOADER__(e) {
      if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'SELECT' && e.target.tagName !== 'TEXTAREA') {
        if (this.props.onRowDoubleClick) {
          this.props.onRowDoubleClick(this.props.index);
        }
      }
    }
  }, {
    key: '__rowMouseOut__REACT_HOT_LOADER__',
    value: function __rowMouseOut__REACT_HOT_LOADER__(e) {
      var rowIndex = this.props.index;
      if (this.props.onRowMouseOut) {
        this.props.onRowMouseOut(rowIndex, e);
      }
    }
  }, {
    key: '__rowMouseOver__REACT_HOT_LOADER__',
    value: function __rowMouseOver__REACT_HOT_LOADER__(e) {
      var rowIndex = this.props.index;
      if (this.props.onRowMouseOver) {
        this.props.onRowMouseOver(rowIndex, e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      this.clickNum = 0;
      var trCss = {
        style: {
          backgroundColor: this.props.isSelected ? this.props.selectRow.bgColor : null
        },
        className: (0, _classnames2.default)(this.props.isSelected ? this.props.selectRow.className : null, this.props.className)
      };

      return _react2.default.createElement(
        'tr',
        _extends({}, trCss, {
          onMouseOver: this.rowMouseOver,
          onMouseOut: this.rowMouseOut,
          onClick: this.rowClick,
          onDoubleClick: this.rowDoubleClick }),
        this.props.children
      );
    }
  }]);

  return TableRow;
}(_react.Component);

TableRow.propTypes = {
  index: _react.PropTypes.number,
  isSelected: _react.PropTypes.bool,
  enableCellEdit: _react.PropTypes.bool,
  onRowClick: _react.PropTypes.func,
  onRowDoubleClick: _react.PropTypes.func,
  onSelectRow: _react.PropTypes.func,
  onExpandRow: _react.PropTypes.func,
  onRowMouseOut: _react.PropTypes.func,
  onRowMouseOver: _react.PropTypes.func,
  unselectableRow: _react.PropTypes.bool
};
TableRow.defaultProps = {
  onRowClick: undefined,
  onRowDoubleClick: undefined
};
var _default = TableRow;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TableRow, 'TableRow', '/Users/Benjamin/Development/github/react-bootstrap-table/src/TableRow.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Benjamin/Development/github/react-bootstrap-table/src/TableRow.js');
}();

;