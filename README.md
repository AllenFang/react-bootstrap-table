# react-bootstrap-table-extras
This module is extension of https://github.com/AllenFang/react-bootstrap-table
## Usage
### a.Install
```bash
npm install react-bootstrap-table-extras --save
```

### b.Import Module
To use react-bootstrap-table-extras in your react app, you should import it first.
You can do this in two ways:

##### With a module bundler
With a module bundler like [webpack](https://webpack.github.io/) that supports either CommonJS or ES2015 modules, use as you would anything else.  
You can include source maps on your build system to debug on development. Don't forget to Uglify on production.

```js
// in ECMAScript 6
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table-extras';
// or in ECMAScript 5
var ReactBSTable = require('react-bootstrap-table-extras');  
var BootstrapTable = ReactBSTable.BootstrapTable;
var TableHeaderColumn = ReactBSTable.TableHeaderColumn;
```

### c.Import CSS
Finally, you need to import the css file to your app:
```html
<link rel="stylesheet" href="./dist/react-bootstrap-table.min.css">
```
The CSS files you can find in the css folder.

### Quick Demo
```js
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
