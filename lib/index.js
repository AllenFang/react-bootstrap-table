'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _BootstrapTable = require('./BootstrapTable');

var _BootstrapTable2 = _interopRequireDefault(_BootstrapTable);

var _TableHeaderColumn = require('./TableHeaderColumn');

var _TableHeaderColumn2 = _interopRequireDefault(_TableHeaderColumn);

if (typeof window !== 'undefined') {
  window.BootstrapTable = _BootstrapTable2['default'];
  window.TableHeaderColumn = _TableHeaderColumn2['default'];
}
exports.BootstrapTable = _BootstrapTable2['default'];
exports.TableHeaderColumn = _TableHeaderColumn2['default'];