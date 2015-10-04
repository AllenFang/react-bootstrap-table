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

function onAfterInsertRow(row){
  var newRowStr = "";

  for(var prop in row){
    newRowStr += prop+": " + row[prop] + " \n";
  }
  alert("The new row is:\n " + newRowStr);
}

var options = {
  afterInsertRow: onAfterInsertRow   // A hook for after insert rows
};

export default class InsertRowTable extends React.Component{
  render(){
    return (
      <BootstrapTable data={products} insertRow={true} options={options}>
          <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
};
