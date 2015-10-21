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

function onRowSelect(row, isSelected){
  var rowStr = "";
  for(var prop in row){
    rowStr+=prop+": '"+row[prop]+"' ";
  }
  alert("is selected: " + isSelected + ", " + rowStr);
}

function onSelectAll(isSelected, currentDisplayAndSelectedData){
  alert("is select all: " + isSelected);
  alert("Current display and selected data: ");
  for(let i=0;i<currentDisplayAndSelectedData.length;i++){
    alert(currentDisplayAndSelectedData[i]);
  }
}

var selectRowProp = {
  mode: "checkbox",
  clickToSelect: true,
  onSelect: onRowSelect,
  onSelectAll: onSelectAll
};

export default class SelectHookTable extends React.Component{
  render(){
    return (
      <BootstrapTable data={products} selectRow={selectRowProp}>
          <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
};
