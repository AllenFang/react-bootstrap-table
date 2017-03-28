'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (_util2.default.canUseDOM()) {
  var filesaver = require('./filesaver');
  var saveAs = filesaver.saveAs;
} /* eslint block-scoped-var: 0 */
/* eslint vars-on-top: 0 */
/* eslint no-var: 0 */
/* eslint no-unused-vars: 0 */


function toString(data, keys) {
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

  var _loop = function _loop(i) {
    dataString += headCells.map(function (x) {
      if (x.row + (x.rowSpan - 1) === i) {
        return x.header;
      }
      if (x.row === i && x.rowSpan > 1) {
        return '';
      }
    }).filter(function (key) {
      return typeof key !== 'undefined';
    }).join(',') + '\n';
  };

  for (var i = 0; i <= rowCount; i++) {
    _loop(i);
  }

  keys = keys.filter(function (key) {
    return key.field !== undefined;
  });

  data.map(function (row) {
    keys.map(function (col, i) {
      var field = col.field,
          format = col.format,
          extraData = col.extraData;

      var value = typeof format !== 'undefined' ? format(row[field], row, extraData) : row[field];
      var cell = typeof value !== 'undefined' ? '"' + value + '"' : '';
      dataString += cell;
      if (i + 1 < keys.length) dataString += ',';
    });

    dataString += '\n';
  });

  return dataString;
}

var exportCSV = function exportCSV(data, keys, filename) {
  var dataString = toString(data, keys);
  if (typeof window !== 'undefined') {
    saveAs(new Blob([dataString], { type: 'text/plain;charset=utf-8' }), filename, true);
  }
};

var _default = exportCSV;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(saveAs, 'saveAs', '/Users/Benjamin/Development/github/react-bootstrap-table/src/csv_export_util.js');

  __REACT_HOT_LOADER__.register(toString, 'toString', '/Users/Benjamin/Development/github/react-bootstrap-table/src/csv_export_util.js');

  __REACT_HOT_LOADER__.register(exportCSV, 'exportCSV', '/Users/Benjamin/Development/github/react-bootstrap-table/src/csv_export_util.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Benjamin/Development/github/react-bootstrap-table/src/csv_export_util.js');
}();

;