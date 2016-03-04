'use strict';
import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


var products = [];

function addProducts(quantity) {
  var startId = products.length;
  for (var i = 0; i < quantity; i++) {
    var id = startId + i;
    products.push({
      id: id,
      name: "Item name " + id,
      price: 100 + i
    });
  }
}

addProducts(5);

function numberSortFunc(a, b, order, sortField){   //order is desc or asc
  if(order == 'desc'){
    return a[sortField] - b[sortField];
  } else{
    return b[sortField] - a[sortField];
  }
}

export default class CustomSortTable extends React.Component{
  render(){
    return (
      <BootstrapTable data={products}>
          <TableHeaderColumn dataField="id" isKey={true} dataSort={true} sortFunc={numberSortFunc}>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField="price" dataSort={true} sortFunc={numberSortFunc}>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
};
