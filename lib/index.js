"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var BootstrapTable = _interopRequire(require("./BootstrapTable"));

var TableHeaderColumn = _interopRequire(require("./TableHeaderColumn"));

var TableDataSet = require("./store/TableDataStore").TableDataSet;

if (typeof window !== 'undefined') {
  window.BootstrapTable = BootstrapTable;
  window.TableHeaderColumn = TableHeaderColumn;
}
module.exports = {
  BootstrapTable: BootstrapTable,
  TableHeaderColumn: TableHeaderColumn,
  TableDataSet: TableDataSet
};
