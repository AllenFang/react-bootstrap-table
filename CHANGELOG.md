<a name="v2.1.0"></a>
# [v2.1.0](https://github.com/AllenFang/react-bootstrap-table/compare/v2.0.3...v2.1.0) (2016-03-26)
### Bug fixes
* Fix the select all checkbox should be empty if there is no data in table([449eb1b](https://github.com/AllenFang/react-bootstrap-table/commit/449eb1be3cdb9261d3254ab796da235ae7f771f0))
* Fix a SSR issue on csv export module([d46ca49](https://github.com/AllenFang/react-bootstrap-table/commit/d46ca49489b665aef0da36af3f470797be49a1c4))
* Fix a SSR issue when enable ```insertRow```([fbc4654](https://github.com/AllenFang/react-bootstrap-table/commit/fbc465463bac8c15e96f405ccc3927cada912160))
	* Check [#348](https://github.com/AllenFang/react-bootstrap-table/issues/348)
* Fix search broke with a backspace([d24f1c4](https://github.com/AllenFang/react-bootstrap-table/commit/d24f1c4c6b5f2378194bf6b782adecc74407b972))

### Features
* ```TableDataSet``` has been removed on ```v2.1.0```([239d8b1](https://github.com/AllenFang/react-bootstrap-table/commit/239d8b1c39d07c71db62b1b4850663801fb17517))
* Support a delay when typing search text([b54f84a](https://github.com/AllenFang/react-bootstrap-table/commit/b54f84a4a3aea6a81cb8cf27f2cbffa44dd1ac9b))
	* Check example at [here](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/manipulation/debounce-search-table.js)
* It's able to get the page number by rowKey([55d475f](https://github.com/AllenFang/react-bootstrap-table/commit/55d475f61977932c9e5e46be16b9ad9db70be75f))
	* [#353](https://github.com/AllenFang/react-bootstrap-table/issues/353)
	* Check example at [here](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/others/expose-api-table.js)
* Allow user to change the text on export CSV button([f6171fa](https://github.com/AllenFang/react-bootstrap-table/commit/f6171fae78fd7cad17ea123c024f486efcf126e3))
	* use ```exportCSVText``` in ```option``` props
	```js
	render() {
		const options = { exportCSVText: 'MY_CUSTOM_TEXT' };
		return (
			<div>
				<BootstrapTable ref='table' options={ options }>
	        		....
				</BootstrapTable>
			</div>
		);
	}
	```

### Enhancement
* Pass rowKey as parameter for ```handleConfirmDeleteRow``` callback function([c2f8ce1](https://github.com/AllenFang/react-bootstrap-table/commit/c2f8ce187f39f516fffa475729b54e9ea416b9d1))
	* Check example at [here](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/manipulation/del-row-custom-confirm.js)

<a name="v2.0.3"></a>
# [v2.0.3](https://github.com/AllenFang/react-bootstrap-table/compare/v2.0.2...v2.0.3) (2016-03-22)
### Enhancement
* Improve build system for reducing the size of bundling file([0e29899](https://github.com/AllenFang/react-bootstrap-table/commit/0e298993805bec53f7e6f0877bae41a41c20d999))
* Pass event as param for event mouse([482f2f0](https://github.com/AllenFang/react-bootstrap-table/commit/482f2f05d06706d701a06346b221d8a8409fcb1a))

<a name="v2.0.2"></a>
# [v2.0.2](https://github.com/AllenFang/react-bootstrap-table/compare/v2.0.1...v2.0.2) (2016-03-20)
### Bug fixes
* Fix when interacting with filters will cause a column sort([00213b9](https://github.com/AllenFang/react-bootstrap-table/commit/00213b99c8749ca2ce80f5970076087b8bcb8506))
* Fix 'document is not defined' when used with server side rendering([4c26adf](https://github.com/AllenFang/react-bootstrap-table/commit/4c26adf23458e68029db004c2a0d14469f74382d))

### Features
* Support ```beforeSaveCell``` on cell editing, you can do a validation and decide whether accept this editing([2233de7](https://github.com/AllenFang/react-bootstrap-table/commit/2233de70466f4259ad283d5f3dd0e7a0912774a3))
	* Check [example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/cell-edit/cell-edit-hook-table.js)

### Enhancement
* Apply eslint more strict([a836bb5](https://github.com/AllenFang/react-bootstrap-table/commit/a836bb5ffefa23f5296d885646919c38c7da60a3))

<a name="v2.0.1"></a>
# [v2.0.1](https://github.com/AllenFang/react-bootstrap-table/compare/v2.0.0...v2.0.1) (2016-03-16)
### Bug fixes
* Fix screen remains dark after inserting( row[423d6e5](https://github.com/AllenFang/react-bootstrap-table/commit/423d6e5cab437286f7a83c1c4e0bec9a573ef660))
* Fix search and filter features combination does not work([643f9ca](https://github.com/AllenFang/react-bootstrap-table/commit/643f9ca053b10b820eae2e6a57774d0ba5035a98))

### Features
* Support regex filter([90a347d](https://github.com/AllenFang/react-bootstrap-table/commit/90a347dcd771295365df8a0e309d71f29d2a8cec))

### Enhancement
* Make column text as the title on table header([68efb43](https://github.com/AllenFang/react-bootstrap-table/commit/68efb4334cd6ad601f3de3e4c7bf149fb06f6261))
* Add a float filter on examples folder([d2b7854](https://github.com/AllenFang/react-bootstrap-table/commit/d2b78543ac58dd9af28e3e0b81a1b8197e0c395f))
	* Check [example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/column-filter/regex-filter.js)

<a name="v2.0.0"></a>
# [v2.0.0](https://github.com/AllenFang/react-bootstrap-table/compare/v1.6.2...v2.0.0) (2016-03-13)
For ```v2.0.0```, I improve the dom structure and css of table. The main issues what I want to solve is</br>
* The column unalign problem in different browser or in tabs(react-bootstrap)
* A wrong rendering width on column in some case
* A wrong height on table
* Large columns problems

Please check this [discussion](https://github.com/AllenFang/react-bootstrap-table/issues/331) for more detail explanation.

<a name="v1.6.2"></a>
# [v1.6.2](https://github.com/AllenFang/react-bootstrap-table/compare/v1.6.1...v1.6.2) (2016-03-11)
### Bug fixes
* Options value for current page and size per page are not respected([0f30823](https://github.com/AllenFang/react-bootstrap-table/commit/0f308233d423d594a1b65825fd79a3a95b06734a))
	* [#304](https://github.com/AllenFang/react-bootstrap-table/issues/304)
* Pagination doesn't work in IE9([79af10e](https://github.com/AllenFang/react-bootstrap-table/commit/79af10e1f801575a840e3342f8d75de0484eb2e8))

### Features
* Sort indicator configurable([d66634c](https://github.com/AllenFang/react-bootstrap-table/commit/d66634cf796f120c9f3bf6e202e123a906f54f68))
	* Default is enable, means sort indicator will show on header column if enable sort
	* Check [example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/sort/disable-sort-indicator-table.js) to see how to disable it

<a name="v1.6.1"></a>
# [v1.6.1](https://github.com/AllenFang/react-bootstrap-table/compare/v1.6.0...v1.6.1) (2016-03-08)
### Bug fixes
* Fix Uncaught TypeError: Cannot read property 'type' of null([54e97a1](https://github.com/AllenFang/react-bootstrap-table/commit/54e97a1febc0c168997cc7cf14efe0eabf86a1b1))
* Fix Uncaught TypeError: children.map is not a function([7d45b80](https://github.com/AllenFang/react-bootstrap-table/commit/7d45b806c8e5a531c4104a63d0795875ec72c719))

### Features
* Make hidden column can be searched by default([1d3dd8e](https://github.com/AllenFang/react-bootstrap-table/commit/1d3dd8ea0a6e4929703ba38c0467dcdfb4c8b914))

<a name="v1.6.0"></a>
# [v1.6.0](https://github.com/AllenFang/react-bootstrap-table/compare/v1.5.4...v1.6.0) (2016-03-06)
### Bug fixes
* Fix selection checkbox sharing with the same name([207dbf2](https://github.com/AllenFang/react-bootstrap-table/commit/207dbf25a74dde99016ed5dc9038817fdde364f1))

### Features
* Provide ```searchable``` on ```<TableHeaderColumn>``` for enable/disable search on column([82c6b12](https://github.com/AllenFang/react-bootstrap-table/commit/82c6b12dd6632b6dd4795ef2c8a405e783e92588))
* Support prepend new row on table([881cb13](https://github.com/AllenFang/react-bootstrap-table/commit/881cb13f4ba12db6aeeb505a06866d614c81a427))
	* It's a expose API by BootstrapTable
	```js
	handleBtnClick = () => {
   this.refs.table.handleAddRowAtBegin({
     id: fake_id,
     name: 'product 1', .....
   });
	}

	render() {
	  return (
	    <div>
	      <button onClick={this.handleBtnClick}>Prepend</button>
	      <BootstrapTable ref='table'>
	          ....
	      </BootstrapTable>
	    </div>
	  );
	}
	```

### Enhancement
* Clear timer on number and text filter when component unmount([c71f508](https://github.com/AllenFang/react-bootstrap-table/commit/c71f508912b61cf988dafafc62703fac308934a3))
* Make sort field be passed as fourth argument when customize sort function([011a8d7](https://github.com/AllenFang/react-bootstrap-table/commit/011a8d77553063d56630721322d457c0c54a806d))
	* Check following code
	```js
	function numberSortFunc(a, b, order, sortField){   //we add sortField in this patch
	  //....
	}
	//...
	ReactDOM.render(
    <BootstrapTable data={products}>
        <TableHeaderColumn dataField='id' isKey={true} dataSort={true} sortFunc={numberSortFunc}>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price' dataSort={true} sortFunc={numberSortFunc}>Product Price</TableHeaderColumn>
    </BootstrapTable>
  );
	```

<a name="v1.5.4"></a>
# [v1.5.4](https://github.com/AllenFang/react-bootstrap-table/compare/v1.5.3...v1.5.4) (2016-02-27)
### Bug fixes
* Search optimization([07c96c8](https://github.com/AllenFang/react-bootstrap-table/commit/07c96c8d2029b73c3a1de55dbf1c88918974dbfd))

### Enhancement
* [#303](https://github.com/AllenFang/react-bootstrap-table/pull/303)([04592b0](https://github.com/AllenFang/react-bootstrap-table/commit/04592b089eb5dc63598d326ddd471c80183afc3e))

### Features
* Support mouse event on table and row([47bce92](https://github.com/AllenFang/react-bootstrap-table/commit/47bce923ee48c931b71efde9e00c859b9db2a62c))
	* Check [example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/others/mouse-event-table.js)

<a name="v1.5.3"></a>
# [v1.5.3](https://github.com/AllenFang/react-bootstrap-table/compare/v1.5.2...v1.5.3) (2016-02-23)
### Bug fixes
* Fix [#289](https://github.com/AllenFang/react-bootstrap-table/issues/289) which happened after v1.5.2([ecf744c](https://github.com/AllenFang/react-bootstrap-table/commit/ecf744cc99a0c9416f5e2f4a923f519282b85f23))
* Fix column-filter broken when using default value and pagination([add9ff6](https://github.com/AllenFang/react-bootstrap-table/commit/add9ff611b0ed3e0945723d45379e3379681bc0f))
* Fix origin column filter broken after v1.5.1([b2625c0](https://github.com/AllenFang/react-bootstrap-table/commit/b2625c0c80fd05295988852ed7396fc565d2cbd3))
* Fix the screen is still dimmed after insert row([8582ca4](https://github.com/AllenFang/react-bootstrap-table/commit/8582ca41c6c303fb71b0b1f83a3d21c5871fce42))

### Enhancement
* Move inline style for display no data text to css file([8d8553b](https://github.com/AllenFang/react-bootstrap-table/commit/8d8553b0f59136acbfb6ce90272f7a7f996170de))

<a name="v1.5.2"></a>
# [v1.5.2](https://github.com/AllenFang/react-bootstrap-table/compare/v1.5.1...v1.5.2) (2016-02-21)
### Bug fixes
* [#276](https://github.com/AllenFang/react-bootstrap-table/issues/276)([4578e3d](https://github.com/AllenFang/react-bootstrap-table/commit/4578e3db6ae91e0e5ed5c14de4d8ee2e6c867156))
* [#279](https://github.com/AllenFang/react-bootstrap-table/issues/279)：Fix data should be filtered out after editing([760ef80](https://github.com/AllenFang/react-bootstrap-table/commit/760ef8087c300a598a63c9a558764bb94aba75a9))
* Fix search work on hidden column([1f3798b](https://github.com/AllenFang/react-bootstrap-table/commit/1f3798bc105f9dfa40e84ccb8568cfc18307b307))
* [#283](https://github.com/AllenFang/react-bootstrap-table/issues/283)：Fix rare a bug when enable column-filter and ```keyField```([125e975](https://github.com/AllenFang/react-bootstrap-table/commit/125e9758b6c91387d0002c0d3c09fc112c3cefaa))

### Enhancement
* [#278](https://github.com/AllenFang/react-bootstrap-table/issues/278)([226e60d](https://github.com/AllenFang/react-bootstrap-table/commit/226e60d0be5d6e81aa5afc2ddde4f50150447581))
* Provide a unminified production build in ```dist```([2821436](https://github.com/AllenFang/react-bootstrap-table/commit/2821436ddf577d9777b1f63f5ea0480e09651e80))

<a name="v1.5.1"></a>
# [v1.5.1](https://github.com/AllenFang/react-bootstrap-table/compare/v1.5.0...v1.5.1) (2016-02-17)
### Bug fixes
* Fix On state change: Uncaught TypeError: Cannot read property 'props' of null([38a8bd9](https://github.com/AllenFang/react-bootstrap-table/commit/38a8bd9231f4c92c7fbfd64fdf631351d52828c2))

### Features
* New filtering behavior + default filter definition([68416ef](https://github.com/AllenFang/react-bootstrap-table/commit/68416ef178a9995465847f60e8df360ed9d00c1a))
	* Check this [PR](https://github.com/AllenFang/react-bootstrap-table/pull/270)
	* See more examples on example [folder](https://github.com/AllenFang/react-bootstrap-table/tree/master/examples/js/column-filter)

### Enhancement
* Add className on delete and insert button([3baedef](https://github.com/AllenFang/react-bootstrap-table/commit/3baedef5e95776fc6144272a68ffea21357939b4))
* Add className on no data ```<th>```, can Customize of the "no data to display" cell([79dd442](https://github.com/AllenFang/react-bootstrap-table/commit/79dd44215bac6e38dbe92a802fbc3d4b41900886))

<a name="v1.5.0"></a>
# [v1.5.0](https://github.com/AllenFang/react-bootstrap-table/compare/v1.4.6...v1.5.0) (2016-02-05)
### Bug fixes
* Fix variable reference issue for default selected([13f736c](https://github.com/AllenFang/react-bootstrap-table/commit/13f736c4c38066f1c6030a1e45e7557826fb029c))

### Features
* Support column formatting with extra data([9de2e9e](https://github.com/AllenFang/react-bootstrap-table/commit/9de2e9ed90c8c0601a579f203570e2251b70728d))
	* Check [this](https://github.com/AllenFang/react-bootstrap-table/blob/79bc278924fffe492ab05e8f94b2ec9b7f4ada8b/examples/js/column-format/extra-data-column-format-table.js) examples
* Change the pagination behavior([74c1fc7](https://github.com/AllenFang/react-bootstrap-table/commit/74c1fc7ed8c6cf2f2d46033bd8f8416436bfb895))
	* Check this [PR](https://github.com/AllenFang/react-bootstrap-table/pull/256) for more detail

### Enhancement
* Show sorting caret on header if sort enabled([55ac719](https://github.com/AllenFang/react-bootstrap-table/commit/55ac719981bfd30708059f218b33431e4650bc2a))

<a name="v1.4.6"></a>
# [v1.4.6](https://github.com/AllenFang/react-bootstrap-table/compare/v1.4.5...v1.4.6) (2016-01-30)
### Features
* Support column format with extra data([a4e4565](https://github.com/AllenFang/react-bootstrap-table/commit/a4e4565a872a5f188d117b5fc01e767b4d0e03ef))
	* Add ```formatExtraData``` in ```TableHeaderColumn```. Check the example in ```examples/js/column-format/extra-data-column-format-table.js```
* Add Clear button for cleaning search input field([8d41dc5](https://github.com/AllenFang/react-bootstrap-table/commit/8d41dc546ca327c8108edfc2f340ac05bb85615f))
	* add  ```clearSearch``` on ```options``` props
	```js
	var options = {
		clearSearch: true
	};
	//...
	ReactDOM.render(
		<BootstrapTable data={collection} options={options}>...
	);
	```

### Enhancement
* Available to clean all selection state By API([f5978f9](https://github.com/AllenFang/react-bootstrap-table/commit/f5978f95c1e8229562483c3b55ca649b8b4bcde5))
	* Check this [thread](https://github.com/AllenFang/react-bootstrap-table/issues/244)

<a name="v1.4.5"></a>
# [v1.4.5](https://github.com/AllenFang/react-bootstrap-table/compare/v1.4.4...v1.4.5) (2016-01-25)
### Bug fixes
* Fix pagination lost([6fe1812](https://github.com/AllenFang/react-bootstrap-table/commit/6fe1812ed27b33c5841e7dd25b991bd1cfde9ee0))
	check example in ```examples/js/selection/externally-managed-selection.js```
* Fix [#213](https://github.com/AllenFang/react-bootstrap-table/issues/213)([c004c90](https://github.com/AllenFang/react-bootstrap-table/commit/c004c9066644decae9d0819323821c6b742abe94))

### Features
* Add class on select all checkbox([b955d92](https://github.com/AllenFang/react-bootstrap-table/commit/b955d922df8d48506361c0d31c5f210657c7152c))

### Enhancement
* Support source map([d0d78ef](https://github.com/AllenFang/react-bootstrap-table/commit/d0d78ef32e97abb675ca0044f93ea93b26f04008))
* Sorting data provided in data in-place rather than using a copy or some other heuristic([3157dbe](https://github.com/AllenFang/react-bootstrap-table/commit/3157dbe44cc4681233d7ca86b8f8987ea886579f))

<a name="v1.4.4"></a>
# [v1.4.4](https://github.com/AllenFang/react-bootstrap-table/compare/v1.4.3...v1.4.4) (2016-01-21)
### Bug fixes
* Sorting not re-rendering data when dataFormat is being used([7810fa3](https://github.com/AllenFang/react-bootstrap-table/commit/7810fa338b9a8e7475b9d1a0026c5661fd7db988))
* Table should be sortable when a column is hidden programmatically([1c403b1](https://github.com/AllenFang/react-bootstrap-table/commit/1c403b17ff2e47af18ce42856103209c5a5dea56))

<a name="v1.4.3"></a>
# [v1.4.3](https://github.com/AllenFang/react-bootstrap-table/compare/v1.4.2...v1.4.3) (2016-01-20)
### Bug fixes
* Row end with a superfluous comma when export csv([078d91d](https://github.com/AllenFang/react-bootstrap-table/commit/078d91dcc3169a221468aca0647ff0978988e271))
* Apply a dataFormat column will breaks when hiding([6878e90](https://github.com/AllenFang/react-bootstrap-table/commit/6878e90f8a9ea179384f9c6363994715d0693d1a))
* Setting default sort and then sorting first time always sort descending([ab43542](https://github.com/AllenFang/react-bootstrap-table/commit/ab43542c8beb0ca41f755fcf495009ab03456a22))

<a name="v1.4.2"></a>
# [v1.4.2](https://github.com/AllenFang/react-bootstrap-table/compare/v1.4.1...v1.4.2) (2016-01-16)
### Bug fixes
* Fix handleSort Function is not changing caret icon([b8ebbb3](https://github.com/AllenFang/react-bootstrap-table/commit/b8ebbb343d6adf702c521fad64f5ef05c1e0aeab))
* Fix search fails on columns in data set but not included in table([0ce3eb4](https://github.com/AllenFang/react-bootstrap-table/commit/0ce3eb478a1cf7700adf6ddc973b304b56cfdad1))

### Features
* Support showing selected row only([a18a463](https://github.com/AllenFang/react-bootstrap-table/commit/a18a463d44461fe9ca98174e50e9ea49884b25d6))
	* add  ```showOnlySelected``` on ```selectRow``` props
	```js
	var selectRowProp = {
		mode: "checkbox",
		showOnlySelected: true
	};
	```

### Enhancement
* Improve long table performance([564379a](https://github.com/AllenFang/react-bootstrap-table/commit/564379a58866de322b10b7603b961ee50eaacc1b))

<a name="v1.4.1"></a>
# [v1.4.1](https://github.com/AllenFang/react-bootstrap-table/compare/v1.4.0...v1.4.1) (2016-01-10)
### Bug fixes
* Fix the background color of header can't spread to 100%([fa2c827](https://github.com/AllenFang/react-bootstrap-table/commit/fa2c827169e4c1bed0491747f69abe4193cbe89d))

### Features
* Allow to filter or search data which after formatting([9be42ad](https://github.com/AllenFang/react-bootstrap-table/commit/9be42ad6ea16383089b61f586add197818d5756f))
	* Apply ```filterFormatted={true}``` on ```<TableHeaderColumn>``` to enable filtering formatted data.

### Enhancement
* Add class(**table-footer-pagination**) on pagination for better customization([1ab1662](https://github.com/AllenFang/react-bootstrap-table/commit/1ab16629f0a59e17dd3b3a95416d51fae4b3471f))
* Add class(**table-header-wrapper**) on table header for better customization([fa2c827](https://github.com/AllenFang/react-bootstrap-table/commit/fa2c827169e4c1bed0491747f69abe4193cbe89d))
* Improve search bar too small on small screens (eg. iphone4/5)([674bf95](https://github.com/AllenFang/react-bootstrap-table/commit/674bf95e577f74988ee42b4dc18b255f8ab203fe), [351d925](https://github.com/AllenFang/react-bootstrap-table/commit/351d9252f87673072e3a7e085d27476ebf818f58))

<a name="v1.4.0"></a>
# [v1.4.0](https://github.com/AllenFang/react-bootstrap-table/compare/v1.3.3...v1.4.0) (2016-01-06)
### Bug fixes
* Fix condensed table with a overlapping padding on first row([159b8f3](https://github.com/AllenFang/react-bootstrap-table/commit/159b8f3a8021ab0c0552b3f20c8842ed629c3c3d))

### Features
* Support max height([91bcf2a](https://github.com/AllenFang/react-bootstrap-table/commit/91bcf2a14353ad96b44d108d6a1ca7ebbe830ab2))
	* Assign <code>maxHeight</code> to set a max height of table.
* Allow to customize confirmation for row deletion([eb21ec8](https://github.com/AllenFang/react-bootstrap-table/commit/eb21ec850052dd0f6b7ba75664d9be46ada91ba7))
	```javascript
	function customConfirm(next){
	  if (confirm("(It's a custom confirm function)Are you sure you want to delete?")){
	      //If the confirmation is true, call the function that
	      //continues the deletion of the record.
	      next();
	  }
	}

	var options = {
	  handleConfirmDeleteRow: customConfirm
	}

	<BootstrapTable
			data={products}
			deleteRow={true}
			selectRow={selectRowProp}
			options={options}>...
	```
### Enhancement
* Tuning the styling of pagination and toolbar panel([3100ee6](https://github.com/AllenFang/react-bootstrap-table/commit/3100ee634fb2af81d9198e539405512705b7979b))
* Upgrade <code>react-toastr</code> to <code>2.3.0</code>([d9e1c14](https://github.com/AllenFang/react-bootstrap-table/commit/d9e1c146a62d879ea361856a8a3ed3e4a063f037))
* Upgrade <code>react</code> to <code>0.14.3</code>([9af1c24](https://github.com/AllenFang/react-bootstrap-table/commit/9af1c24920ecd7c2ee27a5cb38d690726979f537))

<a name="v1.3.3"></a>
# [v1.3.3](https://github.com/AllenFang/react-bootstrap-table/compare/v1.3.2...v1.3.3) (2015-12-25)
### Bug fixes
* Fix Uncaught TypeError: Cannot assign to read only property when edit column after search([689b60f](https://github.com/AllenFang/react-bootstrap-table/commit/689b60f9e51873ee453a847772d3b7e293f98a6b))

### Enhancement
* Make the paginatation button disabled appropriately when page change to the end or begin([502cffb](https://github.com/AllenFang/react-bootstrap-table/commit/502cffbcc20d605681280a9c64f90e36310905c2))


<a name="v1.3.2"></a>
# [v1.3.2](https://github.com/AllenFang/react-bootstrap-table/compare/v1.3.1...v1.3.2) (2015-12-20)
### Bug fixes
* Fix a case where current page and pagination size is lost([f01f6ec](https://github.com/AllenFang/react-bootstrap-table/commit/f01f6ec2d9900bf7a11c5a6413b61c177c26e701))([1d57c6d](https://github.com/AllenFang/react-bootstrap-table/commit/1d57c6dd0e845c78f6f69aac8ffeb9530a09ac6c))
* Pagination style tuning([9ccf5ab](https://github.com/frontsideair/react-bootstrap-table/commit/9ccf5ab2c8f09060db82fd4a2b9333cf49bcf7f3))

### Features
* Support return value from onSelect and onSelectAll handlers([bf27116](https://github.com/AllenFang/react-bootstrap-table/commit/bf27116f3ebc5634e26a5172efc0b828202fd599))
	* If return value of this function(onSelect or onSelectAll) is false, the select or deselect action will not be applied.
* Support indeterminate status to select all checkbox([3d9be07](https://github.com/AllenFang/react-bootstrap-table/commit/3d9be07774c5b49ce859b249e5b4fe0fbbd73242))
* Support to change display text when data was empty([d4e16e7](https://github.com/AllenFang/react-bootstrap-table/commit/d4e16e7b3e54904a0feddd8a7adc0b77da6f4267))
	```javascript
	var options = {
		noDataText: 'Your_custom_text'
	};

	<BootstrapTable
					data={products}
					options={options}
				>...
	```

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
