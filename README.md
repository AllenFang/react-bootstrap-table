# react-bootstrap-table
It's a react.js table for bootstrap, named reactbsTable. It's a configurable, functional table component and make you build a Bootstrap Table more efficiency and easy in your React application, However ```react-bootstrap-table``` support these features:

- column align
- column hidden
- scrolling table
- data sort
- cell format
- pagination
- row selection
- column filter
- cell edit with multi type editor
- Insert & Delete Row
- row and column style customize
- Search

You can see more about this component on [here](http://allenfang.github.io/react-bootstrap-table/index.html). and example is on [here](http://allenfang.github.io/react-bootstrap-table/example.html).

## Development
```react-bootstrap-table``` dependencies on react 0.13.x and Bootstrap 3 written by ES6 and use gulp and browserify for building and bundling.

You can use the following commands to prepare development
```
$ git clone https://github.com/AllenFang/react-bootstrap-table.git
$ cd react-bootstrap-table
$ npm install
```
Use gulp to build the react-bootstrap-table
```
$ gulp dev  #for development
$ gulp example-server #see all examples, go to localhost:3004/example-list.html
$ gulp prod #for production
```

## Usage
Download react-bootstrap-table first.
```
npm install react-bootstrap-table --save
```
Use ```react-bootstrap-table``` in your react app, you should import ```react-bootstrap-table``` as first. About importing this component, there'r two way in the following you can choose:
#### Module(CommonJS/AMD)
```
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';  // in ECMAScript 6
// or in ECMAScript 5
var ReactBSTable = require("react-bootstrap-table");  
var BootstrapTable = ReactBSTable.BootstrapTable;
var TableHeaderColumn = ReactBSTable.TableHeaderColumn;
```
#### Browser global(window object)
```
<script src="path/to/react-bootstrap-table/dist/react-bootstrap-table.min.js" />
<script>
  var ReactBsTable = window.BootstrapTable;
  //...
<script/>
```

Finally, you need to import the css file to your app
```
<link rel="stylesheet" href="./css/react-bootstrap-table.min.css">
```
The ```react-bootstrap-table.min.css``` file you can find in the css folder.After import css file, you can start to write your react application with ```react-bootstrap-table```. In the below, it's a simple demo for using ```react-bootstrap-table```:

```
// products will be presented by react-bootstrap-table
var products = [{
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
}];
// It's a data format example.
function priceFormatter(cell, row){
  return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}

React.render(
  <BootstrapTable data={products} striped={true} hover={true}>
      <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
      <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
      <TableHeaderColumn dataField="price" dataFormat={priceFormatter}>Product Price</TableHeaderColumn>
  </BootstrapTable>,
	document.getElementById("app")
);
```
### See react-bootstrap-table examples
```
$ git clone https://github.com/AllenFang/react-bootstrap-table.git
$ cd react-bootstrap-table
$ npm install
$ gulp example-server #after start, open browser and go to http://localhost:3004/example-list.html
```

### API&Attribute

You can reference [here](http://allenfang.github.io/react-bootstrap-table/docs.html) on web site

####The attributes in &lt;BootstrapTable&gt;:</br>
Use ```data``` to specify the data that you want to display on table.</br>
Use ```height``` to set the table height, default is 100%.</br>
Use ```bordered``` to set the table border, default is true.</br>
Use ```striped``` to set table be a striped columns. Like bootstrap table class ```.table-striped```.</br>
Use ```hover``` to enable table hover. Like bootstrap table class ```.table-hover```.</br>
Use ```condensed``` to set a condensed table. Like bootstrap table class ```.table-condensed```.</br>
Use ```pagination``` to enable the pagnation on table.</br>
Use ```insertRow``` to enable the insert row on table.</br>
Use ```deleteRow``` to enable the delete row on table.</br>
Use ```columnFilter``` to enable the column filter on table.</br>
Use ```search``` to enable the search on table.</br>
Use ```searchPlaceholder``` to change the placeholder text in the search field.</br>
Use  ```trClassName``` to set tr row class,accept string or function. if use function,will pass rowData and rowIndex params.</br>
Use ```selectRow``` to enable the row selection on table, this attribute accept an object which contain these properties.</br>
- ```mode```(required): radio/checkbox, to specify the selection is single or multiple.</br>
- ```clickToSelect```(optional): if true, click on row will trigger row selection, default is false.</br>
- ```hideSelectColumn```(optional): if true, the radio/checkbox column will be hidden, if you enable clickToSelect.</br>
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
- ```page```: accept a number, which means the page you want to show as default</br>
- ```sizePerPageList```: you can change the dropdown list for size per page, accept an array object.</br>
- ```sizePerPage```: means size per page you want to locate as default, accept a number.</br>
- ```paginationSize```: define the pagination bar size, accept a number.</br>


####The attributes in &lt;TableHeaderColumn&gt;:</br>
Use ```isKey``` to specify which column is unique.</br>
Use ```width``` to set the width on column</br>
Use ```dataField``` to specify which column you want to show on this column.</br>
Use ```dataAlign``` to set align in column. Available value is left, center, right, start and end.</br>
Use ```dataSort``` to enable the sorting in column. Default value is false(disabled).</br>
Use ```dataFormat``` to customize this column.Must give it as a function.</br>
Use ```hidden``` to enable hidden column.</br>
Use ```className``` to add custom css class for table header column,accept string or function. if use function,will pass cellData,rowData,rowIndex,columnIndex for params</br>
Use ```columnClassName``` to add custom css class for table body column, accept string or function. If use function will pass fieldValue,row,rowIdx,colIdx</br>
Use  ```editable ``` to specify column editable,accept boolean or input type string or config object or function, default is true. This attribute only works on cellEdit be setted in <BootstrapTable> certainly. if use function,will pass cellData,rowData,rowIndex,columnIndex for params, and expect return the config object or input type string</br>
editable config object include these properties:</br>
- ```type ```(required): indicate input type. support type is:select,textarea,text and password...
- ```style ```(optional):input style,react foramt
- ```className ```(optional):input class
- ```datas ```(required): only required on type is select, array of data for option in select
-  ```cols ```(optional):only use on type is textarea, number for textarea cols
-   ```rows ```(optional):only use on type is textarea, number for textarea rows

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
