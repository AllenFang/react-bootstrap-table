var React = require('react');
var ReactBsTable  = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

var products = [
{
    id: 1,
    name: "Product1",
    price: 120
},{
    id: 2,
    name: "Product2",
    price: 80
},{
    id: 3,
    name: "Product3",
    price: 207
},{
    id: 4,
    name: "Product4",
    price: 100
},{
    id: 5,
    name: "Product5",
    price: 150
},{
    id: 6,
    name: "Product6",
    price: 160
}
];

var product1 = [], product2 = [],product3 = [],product4 = [],
product5 = [],product6 = [],product7 = [],product8 = [],
product9 = [],product10 = [],product11 = [];

for(var i=1;i<=6;i++){
  var p = {
    id: i,
    name: "Product"+i,
    price: 100+i
  }

  product1.push(p);product2.push(p);product4.push(p);product5.push(p);
  product6.push(p);
  product10.push(p);product11.push(p);product3.push(p);


  product7.push({
    id: i,
    name: "Product"+i,
    price: 100+i
  });
  product8.push({
    id: i,
    name: "Product"+i,
    price: 100+i
  });
  product9.push({
    id: i,
    name: "Product"+i,
    price: 100+i
  });
}

var productLong = [];
for(var i=0;i<60;i++){
  productLong.push({
    id: i,
    name: "Item name " + i,
    price: 100+i
  });
}

function priceFormatter(cell, row){
  return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}

React.render(
  <BootstrapTable data={product1} >
      <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
      <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
      <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
  </BootstrapTable>,
	document.getElementById("basic")
);

React.render(
  <BootstrapTable data={product2} striped={true} hover={true} condensed={true}>
      <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
      <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
      <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
  </BootstrapTable>,
	document.getElementById("style")
);

React.render(
  <BootstrapTable data={product3} height="120">
      <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
      <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
      <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
  </BootstrapTable>,
	document.getElementById("scroll")
);

React.render(
  <BootstrapTable data={product4} >
      <TableHeaderColumn dataField="id" isKey={true} dataAlign="right">Product ID</TableHeaderColumn>
      <TableHeaderColumn dataField="name" dataAlign="center">Product Name</TableHeaderColumn>
      <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
  </BootstrapTable>,
	document.getElementById("align")
);

React.render(
  <BootstrapTable data={product5} >
      <TableHeaderColumn dataField="id" isKey={true} dataSort={true}>Product ID</TableHeaderColumn>
      <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
      <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
  </BootstrapTable>,
	document.getElementById("sort")
);

React.render(
  <BootstrapTable data={product6} >
      <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
      <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
      <TableHeaderColumn dataField="price" dataFormat={priceFormatter}>Product Price</TableHeaderColumn>
  </BootstrapTable>,
	document.getElementById("format")
);

React.render(
  <BootstrapTable height="400" data={productLong} pagination={true}>
      <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
      <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
      <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
  </BootstrapTable>,
	document.getElementById("pagnation")
);

function onRowSelect(row, isSelected){
  console.log(row);
  console.log("selected: " + isSelected)
}

function onSelectAll(isSelected){
  console.log("is select all: " + isSelected);
}
var selectRowProp = {
  mode: "radio",
  clickToSelect: true,
  bgColor: "rgb(238, 193, 213)",
  onSelect: onRowSelect
};
React.render(
  <BootstrapTable data={product7} selectRow={selectRowProp}>
      <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
      <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
      <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
  </BootstrapTable>,
	document.getElementById("select-single")
);

var selectRowProp1 = {
  mode: "checkbox",
  clickToSelect: true,
  bgColor: "rgb(238, 193, 213)",
  onSelect: onRowSelect,
  onSelectAll: onSelectAll
};

React.render(
  <BootstrapTable data={product8} selectRow={selectRowProp1}>
      <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
      <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
      <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
  </BootstrapTable>,
	document.getElementById("select-multiple")
);
function onAfterSaveCell(row, cellName, cellValue){
  console.log("Save cell '"+cellName+"' with value '"+cellValue+"'");
  console.log("Thw whole row :");
  console.log(row);
}
var cellEditProp = {
  mode: "click",
  blurToSave: true,
  afterSaveCell: onAfterSaveCell
}

React.render(
  <BootstrapTable data={product9} cellEdit={cellEditProp}>
      <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
      <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
      <TableHeaderColumn dataField="price" editable={false}>Product Price</TableHeaderColumn>
  </BootstrapTable>,
	document.getElementById("cell-edit-div")
);
