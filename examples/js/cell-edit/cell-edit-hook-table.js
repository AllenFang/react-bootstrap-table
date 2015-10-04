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

function onAfterSaveCell(row, cellName, cellValue){
  alert("Save cell '"+cellName+"' with value '"+cellValue+"'");

  var rowStr = "";
  for(var prop in row){
    rowStr += prop+": "+ row[prop] + "\n";
  }

  alert("Thw whole row :\n"+rowStr);
}

var cellEditProp = {
  mode: "click",
  blurToSave: true,
  afterSaveCell: onAfterSaveCell  //a hook for after saving cell
};

export default class BlurToSaveTable extends React.Component{
  render(){
    return (
      <BootstrapTable data={products} cellEdit={cellEditProp}>
          <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
};
