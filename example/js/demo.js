import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

// console.log(Table);
var data = [
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
  }


];

React.render(
  <BootstrapTable data={data}>
      <TableHeaderColumn dataField="id">Item ID</TableHeaderColumn>
      <TableHeaderColumn dataField="name">Item Name</TableHeaderColumn>
      <TableHeaderColumn dataField="price">Item Price</TableHeaderColumn>
  </BootstrapTable>,
	document.getElementById("basic")
);
