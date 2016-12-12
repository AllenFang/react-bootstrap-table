'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableHeaderColumn = exports.BootstrapTable = undefined;

var _BootstrapTable = require('./BootstrapTable');

var _BootstrapTable2 = _interopRequireDefault(_BootstrapTable);

var _TableHeaderColumn = require('./TableHeaderColumn');

var _TableHeaderColumn2 = _interopRequireDefault(_TableHeaderColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window !== 'undefined') {
  window.BootstrapTable = _BootstrapTable2.default;
  window.TableHeaderColumn = _TableHeaderColumn2.default;
}
exports.BootstrapTable = _BootstrapTable2.default;
exports.TableHeaderColumn = _TableHeaderColumn2.default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;