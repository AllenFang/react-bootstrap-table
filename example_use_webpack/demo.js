'use strict';
require('../css/react-bootstrap-table.css');
import React from 'react';
import {BootstrapTable, TableHeaderColumn} from '../src/';


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

addProducts(70);

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

function onAfterTableComplete(){
  console.log('Table render complete.');
}

function onAfterDeleteRow(rowKeys){
  console.log("onAfterDeleteRow");
  console.log(rowKeys);
}

function onAfterInsertRow(row){
  console.log("onAfterInsertRow");
  console.log(row);
}

var selectRowProp = {
  mode: "checkbox",
  clickToSelect: true,
  selected: [], //default select on table
  bgColor: "rgb(238, 193, 213)",
  onSelect: onRowSelect,
  onSelectAll: onSelectAll
};

var cellEditProp = {
  mode: "click",
  blurToSave: true,
  afterSaveCell: onAfterSaveCell
};

var options = {
  sortName: "name",  //default sort column name
  sortOrder: "desc",  //default sort order
  afterTableComplete: onAfterTableComplete, // A hook for after table render complete.
  afterDeleteRow: onAfterDeleteRow,  // A hook for after droping rows.
  afterInsertRow: onAfterInsertRow   // A hook for after insert rows
};


function priceFormatter(cell, row){
  return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}

function trClassNameFormat(rowData,rIndex){
  return rIndex%3==0?"haha":"";
}

React.render(
  <BootstrapTable data={products} trClassName={trClassNameFormat} striped={true} hover={true} pagination={true} selectRow={selectRowProp} cellEdit={cellEditProp}
                  insertRow={true} deleteRow={true} search={true} columnFilter={true} options={options}>
      <TableHeaderColumn dataField="id" dataAlign="center" dataSort={true} isKey={true}>Product ID</TableHeaderColumn>
      <TableHeaderColumn dataField="name" className="good" dataSort={true} editable={{type:'textarea'}}>Product Name</TableHeaderColumn>
      <TableHeaderColumn dataField="price" dataFormat={priceFormatter} editable={{type:'select',datas:[1,2,3,4,5]}}>Product Price</TableHeaderColumn>
  </BootstrapTable>,
	document.getElementById("basic")
);
