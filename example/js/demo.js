import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

var product = [];
for(var i=0;i<80;i++){
  product.push({
    id: i,
    name: "Item name " + i,
    price: 100+i
  });
}
var selectRowProp = {
  mode: "radio"
};
function priceFormatter(cell, row){
  return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}

React.render(
  <BootstrapTable data={product} height="400" striped={true} hover={true} pagination={true} selectRow={selectRowProp}>
      <TableHeaderColumn dataField="id" dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
      <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
      <TableHeaderColumn dataField="price" dataFormat={priceFormatter}>Product Price</TableHeaderColumn>
  </BootstrapTable>,
	document.getElementById("basic")
);
