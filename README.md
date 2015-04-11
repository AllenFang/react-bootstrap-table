# react-bootstrap-table
It's a react table for bootstrap, named reactbsTable

As you know, the basic bootstrap table function like striped, bordered, hover and condensed are supported.

In addition, reactbsTable support data align, sorting and cell format.

### Development
reactbsTable dependencies on react 0.13.x and Bootstrap 3

reactbsTable written by ES6 and use gulp and browserify to build

Use following command to prepare development
```
$ git clone https://github.com/AllenFang/react-bootstrap-table.git
$ cd react-bootstrap-table
$ npm install
```
Use gulp to build the reactbsTable
```
$ gulp dev  #for development
$ gulp prod #for production
```

### Usage
Download reactbsTable first.
```
npm install react-bootstrap-table --save
```
Use reactbsTable in your react app

You can import reactbsTable in module(CommonJS/AMD)
```
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';  // in ECMAScript 6
// or
var ReactBSTable = require("react-bootstrap-table");  
var BootstrapTable = ReactBSTable.BootstrapTable;
var TableHeaderColumn = ReactBSTable.TableHeaderColumn;
```
or in browser(window object)
```
<script src="path/to/react-bootstrap-table/react-bootstrap-table.min.js" />
```
the react-bootstrap-dropdown.min.js file you can find in the dist folder

Finally, you need import the css file to your app
```
<link rel="stylesheet" href="./css/react-bootstrap-table.min.css">
```
the react-bootstrap-table.min.css file you can find in the css folder

After import reactbsTable, use it in your react app

You can find more detail example code in example folder

```
// products will be presented by reactbsTable
var products = [
  {
      id: 1,
      name: "Item name 1",
      price: 100
  },{
      id: 2,
      name: "Item name 2",
      price: 100
  },{
      id: 3,
      name: "Item name 3",
      price: 110
  },{
      id: 4,
      name: "Item name 4",
      price: 100
  },{
      id: 5,
      name: "Item name 5",
      price: 100
  },{
      id: 6,
      name: "Item name 6",
      price: 100
  }
];
// It's a data format example.
function priceFormatter(cell, row){
  return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}

React.render(
  <BootstrapTable data={products} height="120" striped="true" hover="true">
      <TableHeaderColumn dataField="id" dataAlign="center" dataSort="true">Product ID</TableHeaderColumn>
      <TableHeaderColumn dataField="name" dataSort="true">Product Name</TableHeaderColumn>
      <TableHeaderColumn dataField="price" dataFormat={priceFormatter}>Product Price</TableHeaderColumn>
  </BootstrapTable>,
	document.getElementById("basic")
);
```

The reactbsTable setting   

The attributes in BootstrapTable:   
Use ```data``` to specify the data that you want to display on table.   
Use ```height``` to set the table height, default is 100%.   
Use ```striped``` to set table be a striped columns. Like bootstrap table class ```.table-striped```.   
Use ```hover``` to enable table hover. Like bootstrap table class ```.table-hover```.   
Use ```condensed``` to set a condensed table. Like bootstrap table class ```.table-condensed```.   

The attributes in TableHeaderColumn:   
Use ```dataField``` to specidy which column you want to show on this column.   
Use ```dataAlign``` to set align in column. Available value is left, center, right, start and end.   
Use ```dataSort``` to enable the sorting in column. Default value is false(disabled).   
Use ```dataFormat``` to customize this column.Must give it as a function.         
