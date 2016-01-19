if(typeof window !== 'undefined'){
  var filesaver = require('./filesaver');
  var saveAs = filesaver.saveAs
}

function toString(data, keys) {
  var dataString = "";
  if (data.length === 0) return dataString;

  dataString += keys.join(',') + '\n'

  data.map(function(row) {
    keys.map(function(col, i) {
      let cell = typeof row[col] !== 'undefined' ? ('"'+row[col]+'"') : "";
      dataString += cell;
      if (i+1 < keys.length)
        dataString += ',';
    });

    dataString += '\n';
  });

  return dataString;
};

var exportCSV = function(data, keys, filename) {
  var dataString = toString(data, keys);
  if (typeof window !== 'undefined') {
    saveAs( new Blob([dataString], {type: "text/plain;charset=utf-8"}), filename || 'spreadsheet.csv' );
  }

};

export default exportCSV;
