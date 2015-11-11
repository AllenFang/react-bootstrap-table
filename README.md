# react-bootstrap-table

[![NPM version][npm-badge]][npm] [![Build Status][travis-ci-image]][travis-ci-url]

[![Dependency Status][deps-badge]][deps]
[![devDependency Status][dev-deps-badge]][dev-deps]
[![peerDependency Status][peer-deps-badge]][peer-deps]

It's a [react.js](http://facebook.github.io/react/) table for bootstrap, named reactbsTable. It's a configurable, functional table component and make you build a Bootstrap Table more efficiency and easy in your React application, However ```react-bootstrap-table``` support these features:

- column align
- column hidden
- scrolling table
- data sort
- cell format
- pagination
- row selection
- column filter
- cell edit with multi type editor
- insert & delete Row
- row and column style customize
- search
- export CSV file
- rich function hooks
- large columns table

You can see more about this component on [here](http://allenfang.github.io/react-bootstrap-table/index.html). and example is on [here](http://allenfang.github.io/react-bootstrap-table/example.html).
See <a href='https://github.com/AllenFang/react-bootstrap-table/blob/master/CHANGELOG.md'>CHANGELOG</a> for more detail release notes.

## Development
```react-bootstrap-table``` dependencies on react 0.14.x and Bootstrap 3 written by ES6 and use gulp and browserify for building and bundling.

You can use the following commands to prepare development
```
$ git clone https://github.com/AllenFang/react-bootstrap-table.git
$ cd react-bootstrap-table
$ npm install
```
Use gulp to build the react-bootstrap-table
```
$ gulp dev  #for development
$ gulp example-server #see all examples, go to localhost:3004
$ gulp prod #for production
```

## Usage
### Install
```
npm install react-bootstrap-table --save
```

### Import Module
Use react-bootstrap-table in your react app, you should import this component as first. About importing this component, there'r two way in the following you can choose:
##### Module(CommonJS/AMD)
```
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';  // in ECMAScript 6
// or in ECMAScript 5
var ReactBSTable = require("react-bootstrap-table");  
var BootstrapTable = ReactBSTable.BootstrapTable;
var TableHeaderColumn = ReactBSTable.TableHeaderColumn;
```
##### Browser global(window object)
```
<script src="path/to/react-bootstrap-table/dist/react-bootstrap-table.min.js" />
<script>
  var ReactBsTable = window.BootstrapTable;
  //...
<script/>
```

### Import CSS
Finally, you need to import the css file to your app, there are two css file you can choose.</br>
```react-bootstrap-table-all.min.css``` include toastr.</br>```react-bootstrap-table.min.css``` doesn't include toastr.</br>
**Notes: react-bootstrap-table use toastr to alarm some message to user.**
```
<link rel="stylesheet" href="./css/react-bootstrap-table-all.min.css">
```
CSS files you can find in the css folder.

### Quick Demo
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
  },........];
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
$ gulp example-server #after start, open browser and go to http://localhost:3004
```

### Documents

You can reference [here](http://allenfang.github.io/react-bootstrap-table/docs.html) on web site

#### The attributes on &lt;BootstrapTable&gt;:
| Attr         | Type   | Description                                            |
| -------------| ------ | -------------------------------------------------------|
| data         | Array  | Assign the data you want to display on table.          |
| height       | String | Set the height of table, default is 100%.              |
| bordered     | Bool   | Default is true, if false, become a borderless table   |
| striped      | Bool   | Same as Bootstrap table class ```.table-striped```, default is false. |
| hover        | Bool   | Same as Bootstrap table class ```.table-hover```, default is false. |
| condensed    | Bool   | Same as Bootstrap table class ```.table-condensed```, default is false. |
| columnFilter | Bool   | Set true to enable the column filter on table.         |
| pagination   | Bool   | Set true to enable pagination on table .               |
| insertRow    | Bool   | Set true to enable row insertion on table.             |
| deleteRow    | Bool   | Set true to enable row deletion on table.              |
| search       | Bool   | Set true to enable search function on table.           |
| multiColumnSearch | Bool | Set true to enable words search on multiple column function on table from a search box. |
| exportCSV | Bool | Set true to enable download to CSV (tab delimited). |
| csvFileName | String | Set CSV filename (e.g. items.csv). Default is spreadsheet.csv. |
| searchPlaceholder | String   | The place holder on search text fields          |
| keyField     | String | Same as ```isKey``` in &lt;TableHeaderColumn&gt;       |
| trClassName  | String or Function | Assign the row(tr) class, accept string or function, if use function, will pass ```rowData``` and ```rowIndex``` params and should return string presented class. for examples:</br>**function trClassFormat(rowData,rowIndex){**</br>&nbsp;&nbsp;&nbsp;**return rowIndex%2==0?"tr-odd":"tr-even";**</br>**}**      |
| selectRow | Object | Assign an object which have these properties as follow:</br>**```mode```**(required): radio/checkbox, to specify the selection is single or multiple.</br>**```clickToSelect```**(optional): if true, click on row will trigger row selection, default is false.</br>**```clickToSelectAndEditCell```**(optional): if true, click the row will trigger selection on that row, and also trigger cell editing if you enabled cell edit.</br>**```bgColor```**(optional): You can assign background color if row be selected.</br>**```selected```**(optional): it's for default selected row on table, give an array object which contain selected row keys.</br>**```onSelect```**(optional): accept a callback function, if a row be selected, this function will be called and pass the ```row``` and ```isSelected``` as params.</br>**```onSelectAll```**(optional): accept a callback function, if select all in ```checkbox``` mode, this function will be called and pass ```isSelected``` and ```currentSelectedAndDisplayData``` as params.</br>**```hideSelectColumn```**(optional): if true, the radio/checkbox column will be hidden, if you enable clickToSelect.</br> |
| cellEdit | Object | Use cellEdit and assign an object to enable cell edit on table, this object contain these properties:</br>**```mode```**(required): click/dbclick, to spectify which condition will trigger cell editing.</br>**```blurToSave```**(optional): if true, when mouse blur on input field will trigger a save on cell, default is false.</br>**```afterSaveCell```**(optional): accept a callback function, after save cell, this function will be called and pass ```row```, ```cellName``` and ```cellValue``` as params.</br> |
| options | Object | For some options setting on react-bootstrap-table, you can set the options attribute and give an object which contain the following properties</br>**```sortName```**: Assign a default sort field by this property</br>**```sortOrder```**(asc/desc): Assign a default sort order</br>**```afterTableComplete```**: Assign a callback function which will be called after table update</br>**```afterDeleteRow```**: Assign a callback function which will be called after row delete</br>**```afterInsertRow```**: Assign a callback function which will be called after row insert</br>**```page```**: accept a number, which means the page you want to show as default</br>**```sizePerPageList```**: you can change the dropdown list for size per page, accept an array object.</br>**```sizePerPage```**: means size per page you want to locate as default, accept a number.</br>**```paginationSize```**: define the pagination bar size, accept a number.</br>**```onPageChange```**: Assign a callback function which will be called after page changed and pass the ```page``` and ```sizePerPage``` as params.</br>**```onSortChange```**: Assign a callback function which will be called after trigger sorting and pass the ```sortName``` and ```sortOrder``` as params.</br> **```afterSearch```**: Assign a callback function which will be called after trigger searching and pass the ```search``` and ```result``` as params.</br> **```afterColumnFilter```**: Assign a callback function which will be called after trigger column filtering and pass the ```filterConds``` and ```result``` as params.</br>**```onRowClick```**: Assign a callback function which will be called after a row click and ```row``` as params|

#### The attributes in &lt;TableHeaderColumn&gt;:
| Attr         | Type   | Description                                            |
| ------------ | ------ | -------------------------------------------------------|
| isKey        | Bool   | To specify which column is unique, it's required.      |
| width        | String | Set the column width, ex: 70%, 150px.                  |
| dataField    | String | Means which field of data you want to show on column.  |
| dataAlign    | String | Set align in column,  value is left, center, right, start and end. |
| dataSort     | Bool   | True to enable table sorting.                          |
| dataFormat   | Function | To customize the column. Must give it as a function and pass ```cell```, ```row``` as params. This function should return a String or a React Component |
| hidden       | Bool   | True to hide column.                                   |
| className    | String or Function | Add custom css class on **table header** column, this attribute accept String or Function. If Function, will pass following data as parameters: ```cellData```,```rowData```,```rowIndex```,```columnIndex```. And this function should return a String which means the class you want to add.|
| columnClassName | String or Function | Add custom css class for **table body column**, this attribute accept string or function. If Function, will pass following data as parameters: ```fieldValue```,```row```,```rowIdx```,```colIdx```. And this function should return a String which means the class you want to add.|
| editable     | Bool or Object| True to set column editable, false is non-editable. If give Object, you can get more customization when editing cell, which object contain these properties:</br>{</br>&nbsp;&nbsp;type: //edit type, avaiable value is textarea, select, checkbox</br>&nbsp;&nbsp;validator: //give function for validation and pass cell value as param. This function should return Bool.</br>&nbsp;&nbsp;options:{</br>&nbsp;&nbsp;&nbsp;&nbsp;values:</br>&nbsp;&nbsp;&nbsp;&nbsp;//values means data in select or checkbox</br>&nbsp;&nbsp;&nbsp;&nbsp;//if checkbox, use : to separate value, ex: Y:N</br>&nbsp;&nbsp;}</br>}</br> |
| sortFunc | Function | Give a customize function for data sorting |

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

[npm-badge]: http://badge.fury.io/js/react-bootstrap-table.svg
[npm]: http://badge.fury.io/js/react-bootstrap-table

[deps-badge]: https://david-dm.org/AllenFang/react-bootstrap-table.svg
[deps]: https://david-dm.org/AllenFang/react-bootstrap-table

[dev-deps-badge]: https://david-dm.org/AllenFang/react-bootstrap-table/dev-status.svg
[dev-deps]: https://david-dm.org/AllenFang/react-bootstrap-table#info=devDependencies

[peer-deps-badge]: https://david-dm.org/AllenFang/react-bootstrap-table/peer-status.svg
[peer-deps]: https://david-dm.org/AllenFang/react-bootstrap-table#info=peerDependencies

[travis-ci-image]: https://travis-ci.org/AllenFang/react-bootstrap-table.svg
[travis-ci-url]: https://travis-ci.org/AllenFang/react-bootstrap-table

#### Todo List
1. Testing
2. Nested data
3. CSS tunning
