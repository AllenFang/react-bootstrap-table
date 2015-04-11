import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

// console.log(Table);
var products = [
  {
      id: 1,
      name: "Item name 1",
      price: 100
  },{
      id: 2,
      name: "Item name 2",
      price: 100
  },{
      id: 3,
      name: "Item name 3",
      price: 110
  },{
      id: 4,
      name: "Item name 4",
      price: 100
  },{
      id: 5,
      name: "Item name 5",
      price: 100
  },{
      id: 6,
      name: "Item name 6",
      price: 100
  }
];

function priceFormatter(cell, row){
  return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}

React.render(
  <BootstrapTable data={products} height="120" striped="true" hover="true">
      <TableHeaderColumn dataField="id" dataAlign="center" dataSort="true">Product ID</TableHeaderColumn>
      <TableHeaderColumn dataField="name" dataSort="true">Product Name</TableHeaderColumn>
      <TableHeaderColumn dataField="price" dataFormat={priceFormatter}>Product Price</TableHeaderColumn>
  </BootstrapTable>,
	document.getElementById("basic")
);
