/* eslint block-scoped-var: 0 */
/* eslint vars-on-top: 0 */
/* eslint no-var: 0 */
/* eslint no-unused-vars: 0 */
import Util from './util';

if (Util.canUseDOM()) {
  const filesaver = require('./filesaver');
  var saveAs = filesaver.saveAs;
}

function toString(data, keys) {
  let dataString = '';
  if (data.length === 0) return dataString;

  const headCells = [];
  let rowCount = 0;
  keys.forEach(key => {
    if (key.row > rowCount) {
      rowCount = key.row;
    }
    // rowCount += (key.rowSpan + key.colSpan - 1);
    for (var index = 0; index < key.colSpan; index++) {
      headCells.push(key);
    }
  });

  for (let i = 0; i <= rowCount; i++) {
    dataString += headCells.map(x => {
      if ((x.row + (x.rowSpan - 1)) === i) {
        return x.header;
      }
      if (x.row === i && x.rowSpan > 1) {
        return '';
      }
    }).filter(key => {
      return typeof key !== 'undefined';
    }).join(',') + '\n';
  }

  keys = keys.filter(key => {
    return key.field !== undefined;
  });

  data.map(function(row) {
    keys.map(function(col, i) {
      const { field, format } = col;
      const value = typeof format !== 'undefined' ? format(row[field], row) : row[field];
      const cell = typeof value !== 'undefined' ? ('"' + value + '"') : '';
      dataString += cell;
      if (i + 1 < keys.length) dataString += ',';
    });

    dataString += '\n';
  });

  return dataString;
}

const exportCSV = function(data, keys, filename) {
  const dataString = toString(data, keys);
  if (typeof window !== 'undefined') {
    saveAs(new Blob([ dataString ],
        { type: 'text/plain;charset=utf-8' }),
        filename, true);
  }
};

export default exportCSV;
