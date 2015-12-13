<a name="v1.3.1"></a>
# [v1.3.1](https://github.com/AllenFang/react-bootstrap-table/compare/v1.3.0...v1.3.1) (2015-12-12)
### Bug fixes
* Fix column broken when resize to bigger window from smaller([d4b3f87](https://github.com/AllenFang/react-bootstrap-table/commit/d4b3f872891ecbf30c546c0283f01a130bf25a76))

### Features
* Add selection event of size per page dropdown in pagination([7fbd868](https://github.com/AllenFang/react-bootstrap-table/commit/7fbd8686e62d5c1e187aa9a0109aa17e1c7a17a2))


<a name="v1.3.0"></a>
# [v1.3.0](https://github.com/AllenFang/react-bootstrap-table/compare/v1.2.15...v1.3.0) (2015-12-06)
### Bug fixes
* Fix import by RequireJS unavailable([3272c45](https://github.com/AllenFang/react-bootstrap-table/commit/3272c459bf5dbf75999a85671745f6566c3763ec))

### Features
* Available to add a custom class on a selection of row([ff06fcd](https://github.com/AllenFang/react-bootstrap-table/commit/ff06fcddf13666b1248079e985c40d480cdc9c49))
	```javascript
	var selectRowProp = {
	  mode: "checkbox",
	  className: "my-custom-select-class"
	};

	<BootstrapTable
					data={products}
					selectRow={selectRowProp}
				>...
	```
* Available to insert row By API([a47276a](https://github.com/AllenFang/react-bootstrap-table/commit/a47276acc0b7a566005ae2e26096cf348c8c2226))
	* Check this [thread](https://github.com/AllenFang/react-bootstrap-table/issues/168)
* Available to drop row by API([88062b7](https://github.com/AllenFang/react-bootstrap-table/commit/88062b7b04dbed76b76ef8f0045f38ab1ebb256e))
	* Check this [thread](https://github.com/AllenFang/react-bootstrap-table/issues/168)
* Available to filter by column through API</br>
	* Check this [thread](https://github.com/AllenFang/react-bootstrap-table/issues/165#issuecomment-161708369)

<a name="v1.2.15"></a>
# [v1.2.15](https://github.com/AllenFang/react-bootstrap-table/compare/v1.2.14...v1.2.15) (2015-12-01)
### Bug fixes
* Fix TableDataSet is now available via Window object([b6c065a](https://github.com/AllenFang/react-bootstrap-table/commit/b6c065a50bc3c38fa722345f6955c4e19d3c751f))
* Fix warning message "Cannot read property 'refs' of undefined_adjustHeaderWidth" when resizing window([fe1910a](https://github.com/AllenFang/react-bootstrap-table/commit/fe1910add437882f2f6607d674b114ebdf719b51))

<a name="v1.2.14"></a>
# [v1.2.14](https://github.com/AllenFang/react-bootstrap-table/compare/v1.2.13...v1.2.14) (2015-11-27)
### Bug fixes
* Fix the NaN value in style([8a6b9b0](https://github.com/AllenFang/react-bootstrap-table/commit/8a6b9b013498913eba90072cfe4d8d00b4b2efca))

<a name="v1.2.13"></a>
# [v1.2.13](https://github.com/AllenFang/react-bootstrap-table/compare/v1.2.12...v1.2.13) (2015-11-25)
### Bug fixes
* Fix sizing bugs in 1.2.11 tested in firefox([4d0f7cd](https://github.com/AllenFang/react-bootstrap-table/commit/4d0f7cd5c58da0dfb3af83ff079b5a558daee6b0))
* Fix csv export bug use on server side rendering([3d46d88](https://github.com/AllenFang/react-bootstrap-table/commit/3d46d88369befeeae6e6ae452571302933c4325e))
* Fix [#152](https://github.com/AllenFang/react-bootstrap-table/issues/152)([ee5e3f5](https://github.com/AllenFang/react-bootstrap-table/commit/ee5e3f5895779329fdaaf3a6e462a8fe0ed80041))
* Don't draw a dropdown if one or zero options for pagination size list([881b7cd](https://github.com/AllenFang/react-bootstrap-table/commit/881b7cdcfdfd23727b5c04a1b61949da2d5cbfec))

<a name="v1.2.12"></a>
# [v1.2.12](https://github.com/AllenFang/react-bootstrap-table/compare/v1.2.11...v1.2.12) (2015-11-19)
### Bug fixes
* Fix select row unavailable cause of change in v1.2.11([0dd2dc1](https://github.com/AllenFang/react-bootstrap-table/commit/0dd2dc1a58c9175f90b00585b2faf67a967e68f6))

### Features
* Use comma delimited in csv instead of tab delimited([1a219c6](https://github.com/AllenFang/react-bootstrap-table/commit/1a219c6e1952948c78b433c2eca3926651113051))

<a name="v1.2.11"></a>
# [v1.2.11](https://github.com/AllenFang/react-bootstrap-table/compare/v1.2.10...v1.2.11) (2015-11-16)
### Bug fixes
* Fix missing multiColumnSearch if data reload([cf6a933](https://github.com/AllenFang/react-bootstrap-table/commit/cf6a93330408d1128cb9ff33eda8e92ab7abc19f))
* Fix condensed style bug([4957f55](https://github.com/AllenFang/react-bootstrap-table/commit/4957f559d2c6b6f6def1ef0aa787377ba92469b3))
* Fix column content exceed user column width definition([88b1368](https://github.com/AllenFang/react-bootstrap-table/commit/88b1368f50277509dabc183483cd863b775790c2))

<a name="v1.2.10"></a>
# [v1.2.10](https://github.com/AllenFang/react-bootstrap-table/compare/v1.2.9...v1.2.10) (2015-11-14)
### Bug fixes
* Fix loading toastr css timeout problem([9f592d0](https://github.com/AllenFang/react-bootstrap-table/commit/9f592d08146c76da0ee52ad51886914e6f0110d0))

<a name="v1.2.9"></a>
# [v1.2.9](https://github.com/AllenFang/react-bootstrap-table/compare/v1.2.8...v1.2.9) (2015-11-13)
### Bug fixes
* Fix Only a ReactOwner can have refs([9e7de02](https://github.com/AllenFang/react-bootstrap-table/commit/9e7de028276dde56d93e22993496e1b9f11944b2))
	* See detail in [Issues#131](https://github.com/AllenFang/react-bootstrap-table/issues/131)

<a name="v1.2.8"></a>
# [v1.2.8](https://github.com/AllenFang/react-bootstrap-table/compare/v1.2.7...v1.2.8) (2015-11-11)
### Bug fixes

* Fix Overflow on column width bug([9ff999e](https://github.com/AllenFang/react-bootstrap-table/commit/9ff999e6a1e396b76efc9b34ddaac3974a466d90))
* Fix column hidden bug when export csv([7009c39](https://github.com/AllenFang/react-bootstrap-table/commit/7009c3978f6f80e183bdb9fb9852444b362c1202))
* Fix row click also trigger row selection([1cb7dbd](https://github.com/AllenFang/react-bootstrap-table/commit/1cb7dbd0467e176e1999c2aafb8757cceb03cc21))
* Change to page one if data reload([69233b8](https://github.com/AllenFang/react-bootstrap-table/commit/69233b8e6eadc2943456a54f534ad5a9b9abb5e6))
	* It's about the [issue#125](https://github.com/AllenFang/react-bootstrap-table/issues/125), but not yet fix certainly.

<a name="v1.2.7"></a>
# [v1.2.7](https://github.com/AllenFang/react-bootstrap-table/compare/v1.2.6...v1.2.7) (2015-11-07)
### Features
* Support Export CSV
	* Set ```exportCSV``` to true on ```<BootstrapTable>```, ```csvFileName``` is alternative property for csv file name.
* Support ```onRowClick``` for after clicking a row([b442d95](https://github.com/AllenFang/react-bootstrap-table/commit/b442d9526438a50fe10e56e436426e6086752308))
	* Add ```onRowClick``` in options properties on ```<BootstrapTable>```
	```javascript
	var options = {
		onRowClick: function(row){

		}
	}

	<BootstrapTable
          data={products}
          options={options}
        >...
	```
* Support ```afterSearch``` and ```afterColumnFilter``` for after searching or column filtering([eccb61d](https://github.com/AllenFang/react-bootstrap-table/commit/eccb61d7c578117342ab812347592f6a99f6747f))
	* Add ```afterSearch``` or ```afterColumnFilter``` in options properties on ```<BootstrapTable>```
	```javascript
	var options = {
		afterSearch: function(searchText, result){

		},
		afterColumnFilter: function(filterConds, result){

		}
	}

	<BootstrapTable
          data={products}
					search={true}
					columnFilter={true}
          options={options}
        >...
	```

### Bug fixes
* fix checkbox default toString() bug([f8ad7a2](https://github.com/AllenFang/react-bootstrap-table/commit/f8ad7a2e7c1e053554a532fcbcfe092e3bb27b24))

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
