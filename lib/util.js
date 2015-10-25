"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _Const = require('./Const');

var _Const2 = _interopRequireDefault(_Const);

exports["default"] = {

  renderSortCaret: function renderSortCaret(order) {
    var wrap = document.createElement("span");
    wrap.className = "order";
    if (order == _Const2["default"].SORT_ASC) wrap.className += " dropup";
    var inner = document.createElement("span");
    inner.className = "caret";
    inner.style.margin = "10px 5px";
    wrap.appendChild(inner);
    return wrap;
  }

};
module.exports = exports["default"];