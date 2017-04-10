# react-bootstrap-table

[![Join the chat at https://gitter.im/AllenFang/react-bootstrap-table](https://badges.gitter.im/AllenFang/react-bootstrap-table.svg)](https://gitter.im/AllenFang/react-bootstrap-table?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![NPM version][npm-badge]][npm] [![Build Status][travis-ci-image]][travis-ci-url]

[![Dependency Status][deps-badge]][deps]
[![devDependency Status][dev-deps-badge]][dev-deps]
[![peerDependency Status][peer-deps-badge]][peer-deps]   
It's a [react.js](http://facebook.github.io/react/) table for bootstrap, named react-bootstrap-table. It's a configurable, functional table component and make you build a Bootstrap Table more efficiency and easy in your React application, However ```react-bootstrap-table``` support these features:

- Striped, Borderless, Condensed table
- Column align, hidden, width, sort, title, styling
- Scrolling table
- Cell format
- Pagination
- Row selection
- Column filter with multi type
- Cell edit with multi type editor
- Insert & delete Row
- Table, row and column styling
- Search
- Export to CSV
- Rich function hooks
- Header colum span
- Remote mode
- Expandable row
- Key board Navigation
- Customization

![Example](http://i.imgur.com/Ov1wMse.png)
Explore more example on [examples](https://github.com/AllenFang/react-bootstrap-table/tree/master/examples/js) folder</br>
See more about [react-bootstrap-table](http://allenfang.github.io/react-bootstrap-table/index.html).</br>
Check [this](http://allenfang.github.io/react-bootstrap-table/advance.html) for more advance usage for ```react-bootstrap-table```. Feel free to ask more examples.</br>
Check the <a href='https://github.com/AllenFang/react-bootstrap-table/blob/master/CHANGELOG.md'>CHANGELOG</a> for more detail release notes.

## Notes
***```v3.0.0``` released, check [examples](https://github.com/AllenFang/react-bootstrap-table/tree/v3.0.0-dev/examples/js/custom) to learn how to customize the component. following
is the major things we completed in this release***
- Remove the `bootstrap.js` and `jQuery` dependencies
- More easy and have ability to customize the components(search, pagination, insert modal etc.)
- Key board Navigation

***```v2.10.0-beta.1``` is a revised version for fixing couples unalign column and incorrect height etc. If you have any unalign problems before `v2.9.2`, give this beta version a try and any feedback is welcome***

***```v3.0.0``` is under planning, check [Milestone to v3.0.0](https://github.com/AllenFang/react-bootstrap-table/issues/497).<br/>***

***After ```v2.4.4```, we move the css files to ```dist``` folder for allowing this repo can be hosted on [cdnjs](https://github.com/cdnjs/cdnjs)<br/>***

## Development
```react-bootstrap-table``` dependencies on react.js and Bootstrap 3, also written by ES6 and use gulp and browserify for building and bundling.

You can use the following commands to prepare development
```bash
$ git clone https://github.com/AllenFang/react-bootstrap-table.git
$ cd react-bootstrap-table
$ npm install
```
See the examples for `react-bootstrap-table`
```bash
$ npm start # see all examples, go to localhost:3004
```

## Usage
### a.Install
```bash
npm install react-bootstrap-table --save
```

### b.Import Module
To use react-bootstrap-table in your react app, you should import it first.
You can do this in two ways:

##### With a module bundler
With a module bundler like [webpack](https://webpack.github.io/) that supports either CommonJS or ES2015 modules, use as you would anything else.  
You can include source maps on your build system to debug on development. Don't forget to Uglify on production.

```js
// in ECMAScript 6
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// or in ECMAScript 5
var ReactBSTable = require('react-bootstrap-table');  
var BootstrapTable = ReactBSTable.BootstrapTable;
var TableHeaderColumn = ReactBSTable.TableHeaderColumn;
```
##### Browser global(window object)
In the `dist` folder you have a UMD bundle with source maps (`react-bootstrap-table.js`) as well as a minified version (`react-bootstrap-table.min.js`).

```html
<script src="path/to/react-bootstrap-table/dist/react-bootstrap-table.min.js" />
<script>
  var ReactBsTable = window.BootstrapTable;
  //...
<script/>
```

The UMD build is also available on [npmcdn](https://npmcdn.com):

```html
// source maps: https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table.js.map
<script src="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table.js"></script>
// or use the min version
<script src="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table.min.js"></script>
```

### c.Import CSS
Finally, you need to import the css file to your app, there are two css file you can choose.</br>
```react-bootstrap-table-all.min.css``` include toastr.</br>```react-bootstrap-table.min.css``` doesn't include toastr.</br>
**Notes: react-bootstrap-table use toastr to alarm some message to user.**
```html
<link rel="stylesheet" href="./dist/react-bootstrap-table-all.min.css">
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
### More react-bootstrap-table examples
The example source codes is in the [examples](https://github.com/AllenFang/react-bootstrap-table/tree/master/examples) folder. Run  the following commands for a live demo.</br>
```bash
$ git clone https://github.com/AllenFang/react-bootstrap-table.git
$ cd react-bootstrap-table
$ npm install
$ npm start # after start, open browser and go to http://localhost:3004
```

### [Documentation](http://allenfang.github.io/react-bootstrap-table/docs.html)

### Thanks
**[luqin](https://github.com/luqin)**  
Help this project to integrate a better examples demo, add travis & badge, code formatting, give a lot of suggestions and bugs report.   
**[Whien](https://github.com/madeinfree)**  
Implement a lots of awesome new feature and also fix some bugs and enhancements.   
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
