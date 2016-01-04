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

function customConfirm(next){
  if (confirm("(It's a custom confirm function)Are you sure you want to delete?")){
      //If the confirmation is true, call the function that
      //continues the deletion of the record.
      next();
  }
}

var options = {
  handleConfirmDeleteRow: customConfirm
}

//If you want to enable deleteRow, you must enable row selection also.
var selectRowProp = {
  mode: "checkbox"
};

export default class DeleteRowCustomComfirmTable extends React.Component{
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
