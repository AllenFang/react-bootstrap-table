import filesaver from './filesaver';
var saveAs = filesaver.saveAs;

function toString(data, keys) {
  var dataString = "";
  if (data.length === 0) return dataString;
  
  dataString += keys.join('\t') + '\n'

  data.map(function(row) {
    keys.map(function(col) {
      var cell = row[col] ? row[col] : "";
      dataString += row[col] + '\t';
    });

    dataString += '\n';
  });

  return dataString;
};

var exportCSV = function(data, keys, filename) {
  var dataString = toString(data, keys);
  saveAs( new Blob([dataString], {type: "text/plain;charset=utf-8"}), filename || 'spreadsheet.csv' );
};

export default exportCSV;
