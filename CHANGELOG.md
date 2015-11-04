<a name="v1.2.6"></a>
# [v1.2.6](https://github.com/AllenFang/react-bootstrap-table/compare/v1.2.5...v1.2.6) (2015-11-03)
### Features
* Support multi search([4874169](https://github.com/AllenFang/react-bootstrap-table/commit/487416991a4bcb15336c5c0871ce7281b4c095d7))
	* Add ```multiColumnSearch={true}``` on ```<BootstrapTable>```
	* In search input text, you can use space to split search text, for example: **"usa france japan"** to search table which contain usa or feance or japan.

### Bug fixes
* Upgrade to **react-toastr@2.2.2**([2459c24](https://github.com/AllenFang/react-bootstrap-table/commit/2459c24e6dc4dd659b415cae0b039d05d116337e))


<a name="v1.2.5"></a>
# [v1.2.5](https://github.com/AllenFang/react-bootstrap-table/compare/v1.2.4...v1.2.5) (2015-10-27)
### Bug fixes
* Fix header and body unalign([3f44200](https://github.com/AllenFang/react-bootstrap-table/commit/3f4420054e5d6386b878d1d352910066251f038a))

<a name="v1.2.4"></a>
# [v1.2.4](https://github.com/AllenFang/react-bootstrap-table/compare/v1.2.3...v1.2.4) (2015-10-26)
### Enhancement
* The gap between table and pagination([c1a886b](https://github.com/AllenFang/react-bootstrap-table/commit/c1a886bc3817f38466938bf9f8e78112b97bc656))
* Ensure default checkbox in editor is String([0ef45d0](https://github.com/AllenFang/react-bootstrap-table/commit/0ef45d0ed16d0bb09f277708c0315378bf78869e))
* Support ```keyField```([2fab4d8](https://github.com/AllenFang/react-bootstrap-table/commit/2fab4d8fd37cb2c3df548342d6d9568646a6bfaa))
	* Set ```keyField``` in ```<BootstrapTable>``` to specify which column is key.
	* Actually, this attribute is as same as the ```isKey``` in ```<TableHeaderColumn>```. So you can choose on to assign which column is key.

### Features
* Add ```onPageChange``` hook
```javascript

	function onPageChange(page, sizePerPage){
		...
	}

	var options = {
		onPageChange: onPageChange
	}

	<BootstrapTable
          data={products}
          pagination={true}
          options={options}
        >...
}
```
* Add ```onSortChange``` hook
```javascript

	function onSortChange(sortName, sortOrder){
		...
	}

	var options = {
		onSortChange: onSortChange
	}

	<BootstrapTable
          data={products}
          options={options}
        >...
}
```

<a name="v1.2.3"></a>
# [v1.2.3](https://github.com/AllenFang/react-bootstrap-table/compare/v1.2.2...v1.2.3) (2015-10-24)

### Enhancement
* Split toastr css with react-bootstrap-table css([06defe2](https://github.com/AllenFang/react-bootstrap-table/commit/06defe2bcb9330b870e83919f5b9747824dc027e))
	* ```react-bootstrap-table-all.min.css``` include toastr css
	* ```react-bootstrap-table.min.css``` doesn't include toastr css
* Updat dependencies for **node@4.2.1**([a3a7b0c](https://github.com/AllenFang/react-bootstrap-table/commit/a3a7b0cabba7fb0a6c5a003ae743c2111830f3bf))
* Remove deprecated .getDOMNode() calls([37b5c7e](https://github.com/AllenFang/react-bootstrap-table/commit/37b5c7eb47ae385ef4f8b29c6016882879997e00))
* Update examples UI and add react-router([4166580](https://github.com/AllenFang/react-bootstrap-table/commit/4166580fc8876de80dd57e3e0712a155c8611e6f))
	* use ```npm start``` or ```gulp example-server``` to watch examples on localhost:3004
  ![Examples](http://i.imgur.com/OS3KnvA.png)



<a name="v1.2.2"></a>
# [v1.2.2](https://github.com/AllenFang/react-bootstrap-table/compare/v1.2.1...v1.2.2) (2015-10-21)

### Bug fixes
* Table Scroll error([20ed3aa](https://github.com/AllenFang/react-bootstrap-table/commit/20ed3aa5eee0b1e4b4d0d7355d654d73b6bcc13f))


<a name="v1.2.1"></a>
# [v1.2.1](https://github.com/AllenFang/react-bootstrap-table/compare/v1.2.0...v1.2.1) (2015-10-19)

### Bug fixes
* Update TableDataSet missing pagination([46c93ce](https://github.com/AllenFang/react-bootstrap-table/commit/46c93ce88898122678b614c6b90ea97adefea3da))
	* More discussion on [#70](https://github.com/AllenFang/react-bootstrap-table/issues/70)

### Features
* Get selected Data only show in table when onSelectAll be called([9d391ee](https://github.com/AllenFang/react-bootstrap-table/commit/9d391ee10a06b4ff53b5b19684b2cfedb23331ea))
```javascript
  function onSelectAll(isSelected, currentDisplayAndSelectedData){
     //..
}
```

<a name="v1.2.0"></a>
# [v1.2.0](https://github.com/AllenFang/react-bootstrap-table/compare/v1.0.3...v1.2.0) (2015-10-13)

### Bug fixes
* Remove toastr's css hard dependency([28e0b11](https://github.com/AllenFang/react-bootstrap-table/commit/28e0b11e358ebd794d91dc93cbcfab85f2fe100b))

### Features
* Upgrade to **react@1.4.0**([ad78516](https://github.com/AllenFang/react-bootstrap-table/commit/ad785168f1024061ed368e89afc0b6a07eca0722))

<a name="v1.0.3"></a>
# [v1.0.3](https://github.com/AllenFang/react-bootstrap-table/compare/v1.0.2...v1.0.3) (2015-10-10)

### Bug fixes
* Fix window is undefinde if use react-bootstrap-table in isomorphic([f5db238](https://github.com/AllenFang/react-bootstrap-table/commit/f5db2384746d97edafb929b3d91047274a647818))

### Features
* Adding Table with borderless feature([43e484f](https://github.com/AllenFang/react-bootstrap-table/commit/43e484f88a2bb01420f251cbcf1ad479b472c85b))
  * See it on [#63](https://github.com/AllenFang/react-bootstrap-table/pull/63)

<a name="v1.0.2"></a>
# [v1.0.2](https://github.com/AllenFang/react-bootstrap-table/compare/v1.0.1...v1.0.2) (2015-10-09)  

### Bug fixes
* Fix wrong path of toastr


<a name="v1.0.1"></a>
# [v1.0.1](https://github.com/AllenFang/react-bootstrap-table/compare/v1.0.0...v1.0.1) (2015-10-08)  

### Bug fixes
* Wrong Dependencies with react-toastr and toastr([bd16999](https://github.com/AllenFang/react-bootstrap-table/commit/bd16999ac7a7a73276f149ccaa5f82421940a8ed))

<a name="v1.0.0"></a>
# [v1.0.0](https://github.com/AllenFang/react-bootstrap-table/compare/v0.9.17...v1.0.0) (2015-10-04)

### Bug fixes
* Fix key warning in PaginationList warning([9057e1c](https://github.com/AllenFang/react-bootstrap-table/commit/9057e1c93289e59009ac40401fc385362b427f40))  
* Fix default sorting bug([3eb6dbe](https://github.com/AllenFang/react-bootstrap-table/commit/3eb6dbe5cc83d70899fb24d32130a535ec2a68f9))

### Features
* Separate classname of header and body column
  * Set className in &lt;TableHeaderColumn&gt; to define class on header
  * Set columnClassName on &lt;TableHeaderColumn&gt; to define class on body's column
* Add cell edit validation and input type(select,checkbox,textarea)
* Add a complete examples Demo
  * Run ```gulp example-server``` and go to localhost:3004/example-list.html
* Give more customize features on Pagination
  * Default pagination setting

<a name="v0.9.17"></a>
# [v0.9.17](https://github.com/AllenFang/react-bootstrap-table/compare/v0.9.16...v0.9.17) (2015-09-25)

### Features
* Hide row selection column([260a1a4](https://github.com/AllenFang/react-bootstrap-table/commit/260a1a453954c6f67d053d65972399b13dc25e80))
