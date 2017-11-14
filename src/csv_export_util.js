/* eslint block-scoped-var: 0 */
/* eslint vars-on-top: 0 */
/* eslint no-var: 0 */
/* eslint no-unused-vars: 0 */
import Util from './util';
import Const from './Const';

if (Util.canUseDOM()) {
  const filesaver = require('./filesaver');
  var saveAs = filesaver.saveAs;
}

function toString(data, keys, separator, excludeCSVHeader) {
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

  const firstRow = excludeCSVHeader ? 1 : 0;
  for (let i = firstRow; i <= rowCount; i++) {
    dataString += headCells.map(x => {
      if ((x.row + (x.rowSpan - 1)) === i) {
        return `"${x.header}"`;
      }
      if (x.row === i && x.rowSpan > 1) {
        return '';
      }
    }).filter(key => {
      return typeof key !== 'undefined';
    }).join(separator) + '\n';
  }

  keys = keys.filter(key => {
    return key.field !== undefined;
  });

  data.map(function(row) {
    keys.map(function(col, i) {
      const { field, format, extraData, type } = col;
      let value = typeof format !== 'undefined' ? format(row[field], row, extraData) : row[field];
      value = type === Const.CSV_NUMBER_TYPE ? Number(value) : `"${value}"`;
      const cell = typeof value !== 'undefined' ? value : '';
      dataString += cell;
      if (i + 1 < keys.length) dataString += separator;
    });

    dataString += '\n';
  });

  return dataString;
}

const exportCSV = function(data, keys, filename, separator, noAutoBOM, excludeCSVHeader) {
  const dataString = toString(data, keys, separator, excludeCSVHeader);
  if (typeof window !== 'undefined') {
    noAutoBOM = noAutoBOM === undefined ? true : noAutoBOM;
    saveAs(new Blob([ '\ufeff', dataString ],
        { type: 'text/plain;charset=utf-8' }),
        filename, noAutoBOM);
  }
};

export default exportCSV;
