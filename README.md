# react-bootstrap-table
It's a react table for bootstrap, named reactbsTable

As you know, the basic bootstrap table function like striped, bordered, hover and condensed are supported.

In addition, reactbsTable support data align, sorting, cell format, pagination, row selection and cell edit.

You can see the [home page](http://allenfang.github.io/react-bootstrap-table/index.html). and example is on [here](http://allenfang.github.io/react-bootstrap-table/example.html).

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
  <BootstrapTable data={products} height="120" striped={true} hover={true}>
      <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
      <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
      <TableHeaderColumn dataField="price" dataFormat={priceFormatter}>Product Price</TableHeaderColumn>
  </BootstrapTable>,
	document.getElementById("basic")
);
```

The reactbsTable setting

The attributes in BootstrapTable:</br>
Use ```data``` to specify the data that you want to display on table.</br>
Use ```height``` to set the table height, default is 100%.</br>
Use ```striped``` to set table be a striped columns. Like bootstrap table class ```.table-striped```.</br>
Use ```hover``` to enable table hover. Like bootstrap table class ```.table-hover```.</br>
Use ```condensed``` to set a condensed table. Like bootstrap table class ```.table-condensed```.</br>
Use ```pagination``` to enable the pagnation on table.</br>
Use ```selectRow``` to enable the row selection on table</br>
    ```selectRow``` accept a object which conatin these properties for row selection: </br>
        ```mode```(required): radio/checkbox, to specify the selection is single or multiple.</br>
        ```clickToSelect```(optional): if true, click on row will trigger row selection, default is false.</br>
        ```bgColor```(optional): You can assign background color if row be selected.</br>
        ```onSelect```(optional): accept a callback function, if a row be selected, this function will be called.</br>
        ```onSelectAll```(optional): accept a callback function, if select all in ```checkbox``` mode, this function will be called.</br>

Use ```cellEdit``` to enable the cell editing on table</br>
    ```cellEdit``` accept a object which contain these properties in blow: </br>
        ```mode```(required): click/dbclick, to spectify which condition will trigger cell editing.</br>
        ```blurToSave```(optional): if true, when mouse blur on input field will trigger a save on cell, default is false.</br>
        ```afterSaveCell```(optional): accept a callback function, after save cell, this function will be called.</br>

The attributes in TableHeaderColumn:</br>
Use ```isKey``` to specify which column is unique.</br>
Use ```dataField``` to specify which column you want to show on this column.</br>
Use ```dataAlign``` to set align in column. Available value is left, center, right, start and end.</br>
Use ```dataSort``` to enable the sorting in column. Default value is false(disabled).</br>
Use ```dataFormat``` to customize this column.Must give it as a function.</br>
