/* global saveAs */
if (typeof window !== 'undefined') {
  const filesaver = require('./filesaver');
  /* eslint no-unused-vars: [2, { "varsIgnorePattern": "saveAs" }] */
  const saveAs = filesaver.saveAs;
}

function toString(data, keys) {
  let dataString = '';
  if (data.length === 0) return dataString;

  dataString += keys.join(',') + '\n';

  data.map(function(row) {
    keys.map(function(col, i) {
      const cell = typeof row[col] !== 'undefined' ? ('"' + row[col] + '"') : '';
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
        filename || 'spreadsheet.csv');
  }
};

export default exportCSV;
