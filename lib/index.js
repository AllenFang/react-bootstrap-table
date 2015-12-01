'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _BootstrapTable = require('./BootstrapTable');

var _BootstrapTable2 = _interopRequireDefault(_BootstrapTable);

var _TableHeaderColumn = require('./TableHeaderColumn');

var _TableHeaderColumn2 = _interopRequireDefault(_TableHeaderColumn);

var _storeTableDataStore = require('./store/TableDataStore');

if (typeof window !== 'undefined') {
  window.BootstrapTable = _BootstrapTable2['default'];
  window.TableHeaderColumn = _TableHeaderColumn2['default'];
  window.TableDataSet = _storeTableDataStore.TableDataSet;
}
exports['default'] = {
  BootstrapTable: _BootstrapTable2['default'],
  TableHeaderColumn: _TableHeaderColumn2['default'],
  TableDataSet: _storeTableDataStore.TableDataSet
};
module.exports = exports['default'];