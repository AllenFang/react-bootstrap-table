'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _filesaver = require('./filesaver');

var _filesaver2 = _interopRequireDefault(_filesaver);

var saveAs = _filesaver2['default'].saveAs;

function toString(data, keys) {
  var dataString = "";
  if (data.length === 0) return dataString;

  dataString += keys.join(',') + '\n';

  data.map(function (row) {
    keys.map(function (col) {
      var cell = row[col] ? row[col] : "";
      dataString += row[col] + ',';
    });

    dataString += '\n';
  });

  return dataString;
};

var exportCSV = function exportCSV(data, keys, filename) {
  var dataString = toString(data, keys);
  saveAs(new Blob([dataString], { type: "text/plain;charset=utf-8" }), filename || 'spreadsheet.csv');
};

exports['default'] = exportCSV;
module.exports = exports['default'];