# react-bootstrap-table

[![Join the chat at https://gitter.im/AllenFang/react-bootstrap-table](https://badges.gitter.im/AllenFang/react-bootstrap-table.svg)](https://gitter.im/AllenFang/react-bootstrap-table?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

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

You can see more about [react-bootstrap-table](http://allenfang.github.io/react-bootstrap-table/index.html).
[Here](https://github.com/AllenFang/react-bootstrap-table/tree/master/examples/js) are a lots of examples.</br>
You can check [this](http://allenfang.github.io/react-bootstrap-table/advance.html) for more advance usage for ```react-bootstrap-table```. Feel free to ask more examples.</br>
Check the <a href='https://github.com/AllenFang/react-bootstrap-table/blob/master/CHANGELOG.md'>CHANGELOG</a> for more detail release notes.

## Development
```react-bootstrap-table``` dependencies on react 0.14.x and Bootstrap 3 written by ES6 and use gulp and browserify for building and bundling.

You can use the following commands to prepare development
```bash
$ git clone https://github.com/AllenFang/react-bootstrap-table.git
$ cd react-bootstrap-table
$ npm install
```
Use gulp to build the react-bootstrap-table
```bash
$ gulp dev  #for development
$ gulp example-server #see all examples, go to localhost:3004
$ gulp prod #for production
```

## Usage
### a.Install
```bash
npm install react-bootstrap-table --save
```

### b.Import Module
Use react-bootstrap-table in your react app, you should import this component as first. About importing this component, there'r two way in the following you can choose:
##### Module(CommonJS/AMD)
```js
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';  // in ECMAScript 6
// or in ECMAScript 5
var ReactBSTable = require("react-bootstrap-table");  
var BootstrapTable = ReactBSTable.BootstrapTable;
var TableHeaderColumn = ReactBSTable.TableHeaderColumn;
```
##### Browser global(window object)
```html
<script src="path/to/react-bootstrap-table/dist/react-bootstrap-table.min.js" />
<script>
  var ReactBsTable = window.BootstrapTable;
  //...
<script/>
```

### c.Import CSS
Finally, you need to import the css file to your app, there are two css file you can choose.</br>
```react-bootstrap-table-all.min.css``` include toastr.</br>```react-bootstrap-table.min.css``` doesn't include toastr.</br>
**Notes: react-bootstrap-table use toastr to alarm some message to user.**
```html
<link rel="stylesheet" href="./css/react-bootstrap-table-all.min.css">
```
CSS files you can find in the css folder.

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
### See react-bootstrap-table examples
The example source codes is in the [examples](https://github.com/AllenFang/react-bootstrap-table/tree/master/examples) folder. Run  the following commands for a live demo.</br>
```bash
$ git clone https://github.com/AllenFang/react-bootstrap-table.git
$ cd react-bootstrap-table
$ npm install
$ gulp example-server #after start, open browser and go to http://localhost:3004
```

### Documentation
Please see:  [docs](http://allenfang.github.io/react-bootstrap-table/docs.html)

### Thanks
**[luqin](https://github.com/luqin)**  
Help this project to integrate a better examples demo, add travis & badge, code formatting, give a lot of suggestions and bugs report.  
**[khinlatt](https://github.com/khinlatt)**  
Contribute export csv, multi-search and bug fixing.  
**[dana](https://github.com/dana2208)**  
Contribute a new colum-filter design and great feedback given.  
**[tbaeg](https://github.com/tbaeg)**  
Bugs report and give some bootstrap and css suggestions actively.  
**[bluedarker](https://github.com/bluedarker)**  
Contribute the edit format & validation on cell editing and row insertion. Improve the custom styling.  
**[Sofia Silva](https://github.com/staminaloops)**  
Bug reports and fixing actively.  
**[frontsideair](https://github.com/frontsideair)**  
Fixing bugs and give improvement for functionality.  
**[aaronhayes](https://github.com/aaronhayes)**  
Bugs report and enhance the cell formatting.  
**[Reggino](https://github.com/Reggino)**  
Implement the TableDataSet component.  

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
