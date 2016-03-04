'use strict';
import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


var products = [];

function addProducts(quantity) {
  var startId = products.length;
  for (var i = 0; i < quantity; i++) {
    var id = startId + i;
    var fruits = ['banana', 'apple', 'orange', 'tomato', 'strawberries']
    products.push({
      id: id,
      name: "Fruit name is " + fruits[i],
      price: 2100 + i
    });
  }
}

addProducts(5);


export default class MultiSearchTable extends React.Component{
  render(){
    return (
      <BootstrapTable data={products} search={true} multiColumnSearch={true}>
          <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField="name" searchable>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField="price" searchable>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
};
