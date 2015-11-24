'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
if (typeof window !== 'undefined') {
  var filesaver = require('./filesaver');
  var saveAs = filesaver.saveAs;
}

function toString(data, keys) {
  var dataString = "";
  if (data.length === 0) return dataString;

  dataString += keys.join(',') + '\n';

  data.map(function (row) {
    keys.map(function (col) {
      var cell = row[col] ? '"' + row[col] + '"' : "";
      dataString += cell + ',';
    });

    dataString += '\n';
  });

  return dataString;
};

var exportCSV = function exportCSV(data, keys, filename) {
  var dataString = toString(data, keys);
  if (typeof window !== 'undefined') {
    saveAs(new Blob([dataString], { type: "text/plain;charset=utf-8" }), filename || 'spreadsheet.csv');
  }
};

exports['default'] = exportCSV;
module.exports = exports['default'];