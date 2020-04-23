'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

var _Const = require('./Const');

var _Const2 = _interopRequireDefault(_Const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint block-scoped-var: 0 */
/* eslint vars-on-top: 0 */
/* eslint no-var: 0 */
/* eslint no-unused-vars: 0 */
if (_util2.default.canUseDOM()) {
  var filesaver = require('./filesaver');
  var saveAs = filesaver.saveAs;
}

function toString(data, keys, separator, excludeCSVHeader) {
  var dataString = '';
  if (data.length === 0) return dataString;

  var headCells = [];
  var rowCount = 0;
  keys.forEach(function (key) {
    if (key.row > rowCount) {
      rowCount = key.row;
    }
    // rowCount += (key.rowSpan + key.colSpan - 1);
    for (var index = 0; index < key.colSpan; index++) {
      headCells.push(key);
    }
  });

  var firstRow = excludeCSVHeader ? 1 : 0;

  var _loop = function _loop(i) {
    dataString += headCells.map(function (x) {
      if (x.row + (x.rowSpan - 1) === i) {
        return '"' + x.header + '"';
      }
      if (x.row === i && x.rowSpan > 1) {
        return '';
      }
    }).filter(function (key) {
      return typeof key !== 'undefined';
    }).join(separator) + '\n';
  };

  for (var i = firstRow; i <= rowCount; i++) {
    _loop(i);
  }

  keys = keys.filter(function (key) {
    return key.field !== undefined;
  });

  data.map(function (row) {
    keys.map(function (col, i) {
      var field = col.field,
          format = col.format,
          extraData = col.extraData,
          type = col.type;

      var value = typeof format !== 'undefined' ? format(row[field], row, extraData) : row[field];
      value = type === _Const2.default.CSV_NUMBER_TYPE ? Number(value) : '"' + value + '"';
      var cell = typeof value !== 'undefined' ? value : '';
      dataString += cell;
      if (i + 1 < keys.length) dataString += separator;
    });

    dataString += '\n';
  });

  return dataString;
}

var exportCSV = function exportCSV(data, keys, filename, separator, noAutoBOM, excludeCSVHeader) {
  var dataString = toString(data, keys, separator, excludeCSVHeader);
  if (typeof window !== 'undefined') {
    noAutoBOM = noAutoBOM === undefined ? true : noAutoBOM;
    saveAs(new Blob(['\uFEFF', dataString], { type: 'text/plain;charset=utf-8' }), filename, noAutoBOM);
  }
};

var _default = exportCSV;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(saveAs, 'saveAs', '/home/nogi/nogi/forks/react-bootstrap-table/src/csv_export_util.js');

  __REACT_HOT_LOADER__.register(toString, 'toString', '/home/nogi/nogi/forks/react-bootstrap-table/src/csv_export_util.js');

  __REACT_HOT_LOADER__.register(exportCSV, 'exportCSV', '/home/nogi/nogi/forks/react-bootstrap-table/src/csv_export_util.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/nogi/nogi/forks/react-bootstrap-table/src/csv_export_util.js');
}();

;