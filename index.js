var React = require('react');
var ReactBsTable  = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;


var productLong = [];
for(var i=0;i<60;i++){
  productLong.push({
    id: i,
    name: "Item name " + i,
    price: 100+i
  });
}

var selectRowProp = {
  mode: "checkbox",
  clickToSelect: true,
  bgColor: "rgb(238, 193, 213)"
};

function priceFormatter(cell, row){
  return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}

React.render(
  <BootstrapTable data={productLong} striped={true} hover={true} condensed={false} pagination={true} selectRow={selectRowProp}
    insertRow={true} deleteRow={true}>
      <TableHeaderColumn dataField="id" isKey={true} dataAlign="right" dataSort={true}>Product ID</TableHeaderColumn>
      <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
      <TableHeaderColumn dataField="price" dataAlign="center" dataFormat={priceFormatter}>Product Price</TableHeaderColumn>
  </BootstrapTable>,
	document.getElementById("index")
);
