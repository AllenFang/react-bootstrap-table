import React from 'react';
import {BootstrapTable, TableHeaderColumn, TableDataStore} from 'react-bootstrap-table';

var products = [];
var store = new TableDataStore(products);

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
  store.setData(products);
}

addProducts(10);

function onRowSelect(row, isSelected){
  console.log(row);
  console.log("selected: " + isSelected)
}

function onSelectAll(isSelected){
  console.log("is select all: " + isSelected);
}

function onAfterSaveCell(row, cellName, cellValue){
  console.log("Save cell '"+cellName+"' with value '"+cellValue+"'");
  console.log("Thw whole row :");
  console.log(row);
}

var selectRowProp = {
  mode: "checkbox",
  clickToSelect: true,
  bgColor: "rgb(238, 193, 213)",
  onSelect: onRowSelect,
  onSelectAll: onSelectAll
};

var cellEditProp = {
  mode: "click",
  blurToSave: true,
  afterSaveCell: onAfterSaveCell
}


function priceFormatter(cell, row){
  return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}

window.setTimeout(function () {
  //adding 10 products to reactifity
  addProducts(10);
}, 1000);

React.render(
  <BootstrapTable store={store} striped={true} hover={true} pagination={true} selectRow={selectRowProp} cellEdit={cellEditProp}
                  insertRow={true} deleteRow={true} columnFilter={true}>
      <TableHeaderColumn dataField="id" dataAlign="center" dataSort={true} isKey={true}>Product ID</TableHeaderColumn>
      <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
      <TableHeaderColumn dataField="price" dataFormat={priceFormatter} editable={false}>Product Price</TableHeaderColumn>
  </BootstrapTable>,
	document.getElementById("basic")
);
