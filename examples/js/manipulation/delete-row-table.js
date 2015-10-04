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

function onAfterDeleteRow(rowKeys){
  alert("The rowkey you drop: "+rowKeys);
}

var options = {
  afterDeleteRow: onAfterDeleteRow,  // A hook for after droping rows.
}

//If you want to enable deleteRow, you must enable row selection also.
var selectRowProp = {
  mode: "checkbox"
};

export default class DeleteRowTable extends React.Component{
  render(){
    return (
      <BootstrapTable data={products} deleteRow={true} selectRow={selectRowProp} options={options}>
          <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
};
