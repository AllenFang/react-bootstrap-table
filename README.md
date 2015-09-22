# react-bootstrap-table
It's a react table for bootstrap, named reactbsTable

As you know, the basic bootstrap table function like striped, bordered, hover and condensed are supported.

In addition, reactbsTable support these features:

* column align
* column hidden
* scrolling table
* data sort
* cell format
* pagination
* row selection
* column filter
* cell edit
* Insert & Delete Row
* Search

You can see the [home page](http://allenfang.github.io/react-bootstrap-table/index.html). and example is on [here](http://allenfang.github.io/react-bootstrap-table/example.html).

### Release Notes
v0.8.2 support hidden column.

v0.8.0 Update data on the fly.

v0.7.2 react-bootstrap-table supported search on table.

v0.7.1 react-bootstrap-table supported column filter on table.

v0.6.0, react-bootstrap-table supported insert and delete row on table.

After v0.5.4, the <code>isKey</code> attribute is required by <code>TableHeaderColumn</code> for specifying which column is unique. You can see the example in th Usage section or [here](http://allenfang.github.io/react-bootstrap-table/start.html)

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

### API&Attribute

You can reference [here](http://allenfang.github.io/react-bootstrap-table/docs.html) on web site

####The attributes in &lt;BootstrapTable&gt;:</br>
Use ```data``` to specify the data that you want to display on table.</br>
Use ```height``` to set the table height, default is 100%.</br>
Use ```striped``` to set table be a striped columns. Like bootstrap table class ```.table-striped```.</br>
Use ```hover``` to enable table hover. Like bootstrap table class ```.table-hover```.</br>
Use ```condensed``` to set a condensed table. Like bootstrap table class ```.table-condensed```.</br>
Use ```pagination``` to enable the pagnation on table.</br>
Use ```insertRow``` to enable the insert row on table.</br>
Use ```deleteRow``` to enable the delete row on table.</br>
Use ```columnFilter``` to enable the column filter on table.</br>
Use ```search``` to enable the search on table.</br>
Use ```searchPlaceholder``` to change the placeholder text in the search field.</br>
Use ```selectRow``` to enable the row selection on table, this attribute accept an object which contain these properties.</br>
- ```mode```(required): radio/checkbox, to specify the selection is single or multiple.</br>
- ```clickToSelect```(optional): if true, click on row will trigger row selection, default is false.</br>
- ```clickToSelectAndEditCell```(optional): if true, click the row will trigger selection on that row, and also trigger cell editing if you enabled cell edit.</br>
- ```bgColor```(optional): You can assign background color if row be selected.</br>
- ```selected```(optional): it's for default selected row on table, give an array object which contain selected row keys.</br>
- ```onSelect```(optional): accept a callback function, if a row be selected, this function will be called.</br>
- ```onSelectAll```(optional): accept a callback function, if select all in ```checkbox``` mode, this function will be called.</br>

Use ```cellEdit``` to enable the cell editing on table, it accept a object which contain these properties</br>
- ```mode```(required): click/dbclick, to spectify which condition will trigger cell editing.</br>
- ```blurToSave```(optional): if true, when mouse blur on input field will trigger a save on cell, default is false.</br>
- ```afterSaveCell```(optional): accept a callback function, after save cell, this function will be called.</br>

Use ```options``` to set other settings for react-bootstrap-table, this prop accept an object which include these properties:<br/>
- ```sortName```: Assign a default sort field by this property</br>
- ```sortOrder```(asc/desc): Assign a default sort order</br>
- ```afterTableComplete```: Assign a callback function which will be called after table update</br>
- ```afterDeleteRow```: Assign a callback function which will be called after row delete</br>
- ```afterInsertRow```: Assign a callback function which will be called after row insert</br>


####The attributes in &lt;TableHeaderColumn&gt;:</br>
Use ```isKey``` to specify which column is unique.</br>
Use ```width``` to set the width on column</br>
Use ```dataField``` to specify which column you want to show on this column.</br>
Use ```dataAlign``` to set align in column. Available value is left, center, right, start and end.</br>
Use ```dataSort``` to enable the sorting in column. Default value is false(disabled).</br>
Use ```dataFormat``` to customize this column.Must give it as a function.</br>
Use ```hidden``` to enable hidden column.</br>
Use ```className``` to add custom css class for table column</br>
Use ```sortFunc``` to customize your sort function.</br>

#### About TableDataSet
After v0.8.0, react-bootstrap-table provide the ability of updating table data on fly. How to do it?

- Import TableDataSet
```
var ReactBsTable  = require('react-bootstrap-table');
var TableDataSet = ReactBsTable.TableDataSet; //import TableDataSet
```
- Create a TableDataSet object with you data.
```
var dataSet = new TableDataSet(products);
```
- Pass this object to data
```
<BootstrapTable data={dataSet}>
   ...
</BootstrapTable>
```
- If you want to reset or update table data in any time, you can:
```
dataSet.setData(newproducts);
```
