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
      price: 2100 + i
    });
  }
}

addProducts(5);

function columnClassNameFormat(fieldValue,row,rowIdx,colIdx){
  //fieldValue is column value
  //row is whole row object
  //rowIdx is index of row
  //colIdx is index of column
  return rowIdx % 2 == 0?'td-column-function-even-example':'td-column-function-odd-example';
}

export default class TrClassStringTable extends React.Component{
  render(){
    return (
      <BootstrapTable data={products}>
          <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField="price" columnClassName={columnClassNameFormat}>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
};
