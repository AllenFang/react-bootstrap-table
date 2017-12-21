<a name="v4.3.0"></a>
# [v4.3.0](https://github.com/AllenFang/react-bootstrap-table/compare/v4.2.0...v4.3.0) (2017-12-12)
## Bug fixes
* Fixed passing wrong key for custom `prePage`, `nextPage`, `firstPage` and `lastPage`([02363a9](https://github.com/AllenFang/react-bootstrap-table/commit/02363a9981a428632ba90b6403aabaef9010b5bf))

## Enhancements
* Upgrade `react-modal` to `3.1.7`

## Features
* Expand/Collapse all rows
	* [Example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/expandRow/expand-indicator.js#L74)
	* [Customization](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/expandRow/custom-expand-indicator.js#L107)
* Support hide parent row when expanding([24c8556](https://github.com/AllenFang/react-bootstrap-table/commit/24c8556cde36cf5aaa337ebc39ac600a0a1b31d5))
	* [Example](hideRowOnExpand)

<a name="v4.2.0"></a>
# [v4.2.0](https://github.com/AllenFang/react-bootstrap-table/compare/v4.1.5...v4.2.0) (2017-12-04)
## Bug fixes
* Fix bug about text filter for null value([a9eb1d0](https://github.com/AllenFang/react-bootstrap-table/commit/a9eb1d010ab75efe4abd84a5e23f09114f8d8b7b))
* Fix `expandParentClass` option concat classNames([64915a0](https://github.com/AllenFang/react-bootstrap-table/pull/1777/commits/64915a0efc535c98eba60137746fc65f72f86ec6))

## Enhancements
* No String ref([7c18851](https://github.com/AllenFang/react-bootstrap-table/commit/7c188513f73788e0556e2023b13f38de51a69288))
* Support `renderAlert` to specified if render the `react-s-alert`([ed57ab4](https://github.com/AllenFang/react-bootstrap-table/commit/ed57ab40c29cc326f0c5abff6763ef667b5498d8))
	* Please check [#1771](https://github.com/AllenFang/react-bootstrap-table/issues/1771)
* The event object will be pass at least argument for `options.onExpand`, `options.onRowClick` and `options.onRowDoubleClick`([64915a0](https://github.com/AllenFang/react-bootstrap-table/commit/64915a0efc535c98eba60137746fc65f72f86ec6))

<a name="v4.1.5"></a>
# [v4.1.5](https://github.com/AllenFang/react-bootstrap-table/compare/v4.1.3...v4.1.5) (2017-11-20)
## Bug fixes
* Fixed the sort status doesn't updated internally when remote sort enable([06b3560](https://github.com/AllenFang/react-bootstrap-table/commit/06b356021e3364d0048f8aba8e934e07bb7a02fc))

## Enhancements
* `beforeSaveCell` and `afterSaveCell` will pass additional information on last one argument([db634db](https://github.com/AllenFang/react-bootstrap-table/commit/db634db0573995427b743cf3919b7b2f5824b1de))

## Features
* Support press ENTER to select row when enable keyboard navigation([b52e065](https://github.com/AllenFang/react-bootstrap-table/commit/b52e065397221d50a5a824ea6def990bb49e352c))
	* Check [this](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/keyboard-nav/enter-to-select-row-with-nav-table.js) example

<a name="v4.1.2"></a>
<a name="v4.1.3"></a>
<a name="v4.1.4"></a>
# [v4.1.1](https://github.com/AllenFang/react-bootstrap-table/compare/v4.1.1...v4.1.3) (2017-11-11)
## Bug fixes
* Fixed data get sorted locally even with remote sorting([509e31a](https://github.com/AllenFang/react-bootstrap-table/commit/509e31ae3dee1c3cfc5024dcec15f0e14001f7e0),[0d57d95](https://github.com/AllenFang/react-bootstrap-table/commit/0d57d957f35d65b80dbace55036c0d4d61064f9f))

<a name="v4.1.1"></a>
# [v4.1.1](https://github.com/AllenFang/react-bootstrap-table/compare/v4.1.0...v4.1.1) (2017-10-25)
## Bug fixes
* Fixed edit cell that has no data IE 11 fails with error code 800a025e([17be157](https://github.com/AllenFang/react-bootstrap-table/commit/17be157f45cf17244cd5bc5ed37be1e1372a2b3d))
* Fixed sizePerPage drop down requires double click([9c0332a](https://github.com/AllenFang/react-bootstrap-table/commit/9c0332a8611671ce534467edaad0d76b575e8716))
* Fixed `remote` is enable and a sorted table is reset when state update([5a70141](https://github.com/AllenFang/react-bootstrap-table/commit/5a70141e01f739cacdf89efd2ac6812f8aafdfd0))

<a name="v4.1.0"></a>
# [v4.1.0](https://github.com/AllenFang/react-bootstrap-table/compare/v4.0.6...v4.1.0) (2017-10-16)
## Bug fixes
* Fixed `options.afterDeleteRow` be called without checking existing([9f64cdf](https://github.com/AllenFang/react-bootstrap-table/commit/9f64cdfa9f8b868b9cdc60431562eeaecc3c3990))
* Fixed `table-condensed` should be `table-sm` on bootstrap@4([137a6b2](https://github.com/AllenFang/react-bootstrap-table/commit/137a6b27c2c8f8755e27e6dd5e3145078e32a266))
* Update React Peer Dependency([9032174](https://github.com/AllenFang/react-bootstrap-table/commit/903217488fbeba80832539c16d761eeb4fbe2df2))
* Upgrade `react-modal` to `3.0.3` due to `react@16.0.0` issue([f2c0ee8](https://github.com/AllenFang/react-bootstrap-table/commit/f2c0ee828096c887158333fe1e0abc7e74dff3a1))
* Fixed Cannot read property 'type' of undefined([9049073](https://github.com/AllenFang/react-bootstrap-table/commit/9049073009087d3621765cafcca30344ef280d46))
* Fixed Failed prop type: Invalid prop columnName of type array supplied to TextFilter, expected string([c272b97](https://github.com/AllenFang/react-bootstrap-table/commit/c272b97d19b6a7a6bb20a189e4b0f328da5143f4))

## Enhancement
* The `tdStyle` prop now allow to accept a callback function([6acf5c1](https://github.com/AllenFang/react-bootstrap-table/commit/6acf5c139246f5ac32f3b82b5d89de8817c09a9b)) 
	* [Example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/column/column-style-table.js#L24)

<a name="v4.0.6"></a>
# [v4.0.6](https://github.com/AllenFang/react-bootstrap-table/compare/v4.0.5...v4.0.6) (2017-09-30)
## Bug fixes
* Fixed TypeError: Cannot read property 'emitter' of undefined([55a7e09](https://github.com/AllenFang/react-bootstrap-table/commit/55a7e09b4d3052aa066c61572d747262136cd326))

## Enhancement
* Treat `undefined` same as `null` when sorting([5b58195](https://github.com/AllenFang/react-bootstrap-table/commit/5b5819504672453ee9531690f7afeb3b2414e245))
## Features
* Support `cellEdit.bulrToEscape`, default is `false`([88571ac](https://github.com/AllenFang/react-bootstrap-table/commit/88571acd1b2b0b58cb11ec1030c7823300444281))

<a name="v4.0.5"></a>
# [v4.0.5](https://github.com/AllenFang/react-bootstrap-table/compare/v4.0.4...v4.0.5) (2017-09-20)
## Bug fixes
* Fix [#787](https://github.com/AllenFang/react-bootstrap-table/issues/787)([84cc76c](https://github.com/AllenFang/react-bootstrap-table/commit/84cc76c7d92b4aa2eb3f1a3c8fddabd5b20f9647))

## Enhancement
* Support `ArrayFilter` but it's an internal filter, you **can not** configure on `filter.type` with `ArrayFilter`([5b32bfd](https://github.com/AllenFang/react-bootstrap-table/commit/5b32bfd92611e31ec5928d73f953fc8cedbab210))
	* Please check [this](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/column-filter/array-filter-programmatically.js) example.

## Features
* Support `csvFieldType` to assign the type of cell when exporting csv([d810c9c](https://github.com/AllenFang/react-bootstrap-table/commit/d810c9c51ab036c43eaa76a46617c493f4f430c6))
	* [example](https://github.com/AllenFang/react-bootstrap-table/commit/27b1e75e95d2983d9d3d2a7cab7456904acb8aad)
	* Available is `number` and `string`, default is `string`
* Support auto collapse expanded rows when sort/filter/search([5ad7a75](https://github.com/AllenFang/react-bootstrap-table/commit/5ad7a751c5054a5ea803f5010727e65b61987288))
	* Check [this](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/expandRow/auto-collapse.js) example

<a name="v4.0.4"></a>
# [v4.0.4](https://github.com/AllenFang/react-bootstrap-table/compare/v4.0.3...v4.0.4) (2017-09-15)
## Bug fixes
* Fix `BootstrapTable.reset` method doesn't clean the cell editing state([f3466be](https://github.com/AllenFang/react-bootstrap-table/commit/f3466befcf94f61b9ae01dbfc36fa47535290582))
* Fix search result is reset when a rerender with only enable `remote.cellEdit`([8ba60d8](https://github.com/AllenFang/react-bootstrap-table/commit/8ba60d8509a215729371fa14ef70b451ea1d4a9f))
* `columnClassName` get render on `colgroup` even if it is function([031a99d](https://github.com/AllenFang/react-bootstrap-table/commit/031a99d59267b1656774cbe06f79af2c0c533963))

## Enhancement
* Able to styling the header column when sorting([7960b3f](https://github.com/AllenFang/react-bootstrap-table/commit/7960b3fb5a3c79cf4635577d1333c8efc59b2ef3))
	* Check [example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/sort/sort-style-table.js#L36-L37)
* Trying to fixing encoding issue when opening CSV file with Excel([c05679c](https://github.com/AllenFang/react-bootstrap-table/commit/c05679c25ddfc817f40e8d5ab40b004c335a4103))

<a name="v4.0.3"></a>
# [v4.0.3](https://github.com/AllenFang/react-bootstrap-table/compare/v4.0.2...v4.0.3) (2017-09-04)
## Bug fixes
* placeholder-selected in filters/Select.js is not handled correctly([1bba1aa](https://github.com/AllenFang/react-bootstrap-table/commit/1bba1aaab4d2813f2a60430ec736608eb83bb480))

## Enhancement
* Setting environment to production([a7ff05c](https://github.com/AllenFang/react-bootstrap-table/commit/a7ff05cf3ae6a98663440fce711e981fafb95c3d))
* Pass `rowIndex` and `columnIndex` as third and fourth arguments for `columnTitle` callback function([99f56a0](https://github.com/AllenFang/react-bootstrap-table/commit/99f56a0066ed9eb37b1a81bffd7423d6d904da88)) 

<a name="v4.0.2"></a>
# [v4.0.2](https://github.com/AllenFang/react-bootstrap-table/compare/v4.0.1...v4.0.2) (2017-08-22)
## Bug fixes
* Fix the `expandable` broken on custom column when `expandBy` is `column`([1be402e](https://github.com/AllenFang/react-bootstrap-table/commit/1be402e3bba6723357ddd37dc0dd079fe931cd23))
## Enhancement
* Able to configure the position of `ToolBar`([29bbecc](https://github.com/AllenFang/react-bootstrap-table/commit/29bbecce03df68ca6bd5f65738a700abc2173e75))
	* Configure the position via`options.toolbarPosition`, available value is `top`, `bottom` and `both`.
* Custom the column title([cd93a3f](https://github.com/AllenFang/react-bootstrap-table/commit/cd93a3fc2c2b69c1de4d1eb592c0863091c423a6))
	* Configure `columnTitle` on `TableHeaderColumn`, which accept a function and take `cell` and `row` as arguments
	* Check [this](https://github.com/AllenFang/react-bootstrap-table/commit/fced9faa6f6ea60c3d7c34e977bb53f33c1dffc0) example
* Add quotation marks to header cells on CSV file([55de1d6](https://github.com/AllenFang/react-bootstrap-table/pull/1556/commits/55de1d635db1d2c5e35033b258f546b83ffc153e))

<a name="v4.0.1"></a>
# [v4.0.1](https://github.com/AllenFang/react-bootstrap-table/compare/v4.0.0...v4.0.1) (2017-08-13)
## Bug fixes
* Fix wrong data population when drop rows in a table which enable pagination([87484cc](https://github.com/AllenFang/react-bootstrap-table/commit/87484cc7c3c7808b2de0bc5a12ce322abbb3ffad))

<a name="v4.0.0"></a>
# [v4.0.0](https://github.com/AllenFang/react-bootstrap-table/compare/v3.5.1...v4.0.0) (2017-08-06)
## Bug fixes
* Fix validation called twice when press tab to leave the cell editor([5532b98](https://github.com/AllenFang/react-bootstrap-table/commit/5532b9887fc94e23ae3e8d68a7b683db956a2e25))

## Enhancement
* Fixed hard coded warning when insert fails([28b3ea3](https://github.com/AllenFang/react-bootstrap-table/commit/28b3ea32ee44a3b94d04cb3512e996a576932ca4))
	* Use `options.insertFailIndicator` to custom the error indicator.
* Fixed 'Show All/Show selected only' is display in contrast([db1f8e7](https://github.com/AllenFang/react-bootstrap-table/commit/db1f8e71662633ddf21ac5be984131c20e84fcac))
* Use `prop-types`
* Use `editTdAttr` on `TableHeaderColumn` to custom the attributes on the column(`TD`) of cell editor([42e84b7](https://github.com/AllenFang/react-bootstrap-table/commit/42e84b7839e38cb5492a66c92da8beebdba67c6a))
* Support dynamic options list for dropdown in cell editor([62b928a](https://github.com/AllenFang/react-bootstrap-table/commit/62b928a91cbe6e938147361f750e3ef4991c5006))
	* `editable.options.values` on `TableHeaderColumn` can accept an array or function now.

## Features
* Support `bootstrap@4` and `bootstrap@3`, if you use 4, please add `version='4'` on `<BootstrapTable>`.

<a name="v3.5.1"></a>
# [v3.5.1](https://github.com/AllenFang/react-bootstrap-table/compare/v3.5.0...v3.5.1) (2017-08-02)
## Bug fixes
* Fix [#1518](https://github.com/AllenFang/react-bootstrap-table/issues/1518)([20284d2](https://github.com/AllenFang/react-bootstrap-table/commit/20284d2365f85c0180eb6c73d9253c6483a7597c))

<a name="v3.5.0"></a>
# [v3.5.0](https://github.com/AllenFang/react-bootstrap-table/compare/v3.4.6...v3.5.0) (2017-07-29)
## Bug fixes
* Fix [#1510](https://github.com/AllenFang/react-bootstrap-table/issues/1510)([a2eb599](https://github.com/AllenFang/react-bootstrap-table/commit/a2eb599da37620122752e608f37fe4d99f7494f2))

## Enhancement
* Pass `rowIndex` as fourth argument for `selectRow.onSelect`([e4a8d0b](https://github.com/AllenFang/react-bootstrap-table/commit/e4a8d0bd8bda223cc51911d0fe7b39a034924c4c))
* [PR#1504](https://github.com/AllenFang/react-bootstrap-table/pull/1504)([60dab6f](https://github.com/AllenFang/react-bootstrap-table/commit/60dab6f7705a176a7e852b83bf2c67b5751ba6f9))

<a name="v3.4.6"></a>
# [v3.4.6](https://github.com/AllenFang/react-bootstrap-table/compare/v3.4.5...v3.4.6) (2017-07-16)
## Bug fixes
* Fix wrong cell edit if have multiple table but share same `cellEdit` props[8954de6](https://github.com/AllenFang/react-bootstrap-table/commit/8954de63c89bc9527f76d1023a5b931c3f14f175)

## Enhancement
* Allow to configure `td` style via `trStyle` on `BootstrapTable`([5999c48](https://github.com/AllenFang/react-bootstrap-table/commit/5999c48902de5348c7525a49bc370a42da4fce36))

<a name="v3.4.5"></a>
# [v3.4.5](https://github.com/AllenFang/react-bootstrap-table/compare/v3.4.4...v3.4.5) (2017-07-13)
## Bug fixes
* Fix [#1410](https://github.com/AllenFang/react-bootstrap-table/issues/1410) again([3f60275](https://github.com/AllenFang/react-bootstrap-table/commit/3f602755721529471ba5d5fa36ed2930d19dfbf5))

## Enhancement
* Pass `rowIndex` as third argument for `options.onRowClick`([4b5ba03](https://github.com/AllenFang/react-bootstrap-table/commit/4b5ba037437977b54a577084e0779f53e9b02785))

## Features
* Able to disable the `tabIndex` via `withoutTabIndex` on `BootstrapTable`([ce6f744](https://github.com/AllenFang/react-bootstrap-table/commit/ce6f744d3d7f101c800459a7d0608daed5dff74e))

<a name="v3.4.4"></a>
# [v3.4.4](https://github.com/AllenFang/react-bootstrap-table/compare/v3.4.3...v3.4.4) (2017-07-09)
## Bug fixes
* Pass row object as second argument for `editable.validator` when calling by insert row([5ede872](https://github.com/AllenFang/react-bootstrap-table/commit/5ede87270677c9d8fe37bdef2cccbf4a05f5748a))
* Fix text filter is not updated when rerender([298e971](https://github.com/AllenFang/react-bootstrap-table/commit/298e971b5c5658d0baeb67163d279298751085ed))
* Fix wrong colspan on a empty table when hide seleciton column([62ceb31](https://github.com/AllenFang/react-bootstrap-table/commit/62ceb313f6d523e02f5b49275b69b3b4e3326e7a))

## Enhancement
* return `false` will render default editor in insert model for the hook function of [customInsertEditor.getElement](http://allenfang.github.io/react-bootstrap-table/custom.html#insertmodalfield)([f2382b3](https://github.com/AllenFang/react-bootstrap-table/commit/f2382b36cc924e286ec271f92134673278458c3c))

<a name="v3.4.3"></a>
# [v3.4.3](https://github.com/AllenFang/react-bootstrap-table/compare/v3.4.2...v3.4.3) (2017-07-05)
## Bug fixes
* Fixed wrong colspan when table was empty and enable `expandColumnOptions.expandColumnVisible`([624764c](https://github.com/AllenFang/react-bootstrap-table/commit/624764c8ee03b10054f81b67b54da7280005e4c4))
* Fix 'undefined is not an object' when running in a headless browser([a06cd6a](https://github.com/AllenFang/react-bootstrap-table/commit/a06cd6adb43c3bcf0cbea3cc8179c4d772453faa))

## Enhancement
* Able to disable BOM header for CSV via `options.noAutoBOM`([340dc8d](https://github.com/AllenFang/react-bootstrap-table/commit/340dc8d54f4ce06e9881a266b629072097d760e2))
* Able to exclude header for CSV via `options.excludeCSVHeader`([16ba815](https://github.com/AllenFang/react-bootstrap-table/commit/16ba815f599080a078e9d30069206734f8dabf38))

<a name="v3.4.2"></a>
# [v3.4.2](https://github.com/AllenFang/react-bootstrap-table/compare/v3.4.1...v3.4.2) (2017-06-24)
## Bug fixes
* Cannot read property 'sortFunc' of undefined when conditionally rendering different tables([1418](https://github.com/AllenFang/react-bootstrap-table/commit/b6da50eb2ed4a3ffb133557f6c0a2788ec7aa9f8))
	* From this version, we support `replace` props on `BootstrapTable`, you can configure as `true` if your need to rerender a totally different table so that
`react-bootstrap-table` will not update table state according to previous and next props.
* Header Group broken when Row Expand Indicator is enabled([2cf11ec](https://github.com/AllenFang/react-bootstrap-table/commit/2cf11ec951089ff6452c0a97ee0613fc113103c5))

## Enhancement
* `options.onDeleteRow` and `options.afterDeleteRow` allow to accept second argument which is the all delete rows instances([29064ff](https://github.com/AllenFang/react-bootstrap-table/commit/29064ff237bc90080763964d250636927d3fc457))
* `options.expandBodyClass` allow to accept third argument which is a flag for is expanding or not([85eeeb5](https://github.com/AllenFang/react-bootstrap-table/commit/85eeeb5dcee33a1507e12d6b57eeb44ae527597d))
	* Check [example](https://github.com/AllenFang/react-bootstrap-table/commit/0720e6019cd404b23431aec29d31e66759c4e8cd)

<a name="v3.4.1"></a>
# [v3.4.1](https://github.com/AllenFang/react-bootstrap-table/compare/v3.4.0...v3.4.1) (2017-06-17)
## Bug fixes
* If a key is 0, it's regarded as invalid in `TableStore.js`([e00a515](https://github.com/AllenFang/react-bootstrap-table/commit/e00a515d89123926a189873db45ea3dd98370702))

## Enhancement
* `options.onRowClick` have the second arguments: `columnIndex`([cf6571f](https://github.com/AllenFang/react-bootstrap-table/commit/cf6571f8a11dd708867451a378c3886fd2bede46))
* `options.onAddRow` now support to sync/async way to tell `react-bootstrap-table` if a error in `options.onAddRow`([a2a5555](https://github.com/AllenFang/react-bootstrap-table/commit/a2a55557767e176d4ec42aac4beb3e8ca69f15a7))
	* Please check [example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/advance/insert-error-handle-table.js)
* Use `setState` as functional instead of object([b9b5b26](https://github.com/AllenFang/react-bootstrap-table/commit/b9b5b26affe6578d2182b90201da83b3b5f46c6e))

## Feature
* Able to custom the separate for exporting CSV file([1c9e2c5](https://github.com/AllenFang/react-bootstrap-table/commit/1c9e2c50d2a9b9e86302bb9b01c2ce082e570992))
	* Using `options.exportCSVSeparator`

<a name="v3.4.0"></a>
# [v3.4.0](https://github.com/AllenFang/react-bootstrap-table/compare/v3.3.9...v3.4.0) (2017-06-11)
## Bug fixes
* Fixed column width does not work when header grouping([4b1e11e](https://github.com/AllenFang/react-bootstrap-table/commit/4b1e11e0254e87fae3c6ea66902e3b73e85beb77))
* Fixed wrong column to expand when `selectRow.hideSelectColumn` as ture and `expand={false}` on `TableHeaderColumn`([74e37d3](https://github.com/AllenFang/react-bootstrap-table/commit/74e37d31f0b768cad040af30af2785bbdcb5b3f3))

## Enhancement
* Support to configure the class for expand row and body([2115389](https://github.com/AllenFang/react-bootstrap-table/commit/211538956489074b21e1047c4e60dfaab3c01b72))
	* Check [Example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/expandRow/custom-expand-class.js)

## Feature
* Support to press ENTER to expand/collapse row when keyboard navigation is enable([115495d](https://github.com/AllenFang/react-bootstrap-table/commit/115495d7e82031bdd9a736c37175d1bf43be15ca))
	* Enable `keyBoardNav.enterToExpand`
	* Check [example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/keyboard-nav/enter-to-expand-row-with-nav-table.js)

<a name="v3.3.9"></a>
# [v3.3.9](https://github.com/AllenFang/react-bootstrap-table/compare/v3.3.8...v3.3.9) (2017-06-08)
## Bug fixes
* Fixed TypeError: this.props.children.filter is not a function([80fb5a6](https://github.com/AllenFang/react-bootstrap-table/commit/80fb5a69cee6ce4357bbb11128f2fbc19c4300e1))

<a name="v3.3.8"></a>
# [v3.3.8](https://github.com/AllenFang/react-bootstrap-table/compare/v3.3.7...v3.3.8) (2017-06-02)
## Bug fixes
* `currSizePerPage` should be string([6c6185d](https://github.com/AllenFang/react-bootstrap-table/commit/6c6185d6d5f06e66ce03c304a6f5d1bb85563935))

## Enhancement
* allow `options.prePage`, `options.nextPage`, `options.firstPage` and `options.lastPage` to accept any type([a2ab8fb](https://github.com/AllenFang/react-bootstrap-table/commit/a2ab8fbaba2a072403fcc467b5f7d7cf8e0de0e7))

<a name="v3.3.7"></a>
# [v3.3.7](https://github.com/AllenFang/react-bootstrap-table/compare/v3.3.6...v3.3.7) (2017-05-22)
## Enhancement
* Allow conditionally specify columns([9b748df](https://github.com/AllenFang/react-bootstrap-table/commit/9b748df5eb11dad1fe9c5c28044007dbae119b02))
* [#1319](https://github.com/AllenFang/react-bootstrap-table/issues/1319)([338424f](https://github.com/AllenFang/react-bootstrap-table/commit/338424f367b0d233f37c0514daffa4ca043f6f74))
* Allow date filter to filter string value, `react-bootstrap-table` will convert string to Date([63a022a](https://github.com/AllenFang/react-bootstrap-table/commit/63a022a91c7bd90e1f99013d23e3601f1d5de30e))

<a name="v3.3.6"></a>
# [v3.3.6](https://github.com/AllenFang/react-bootstrap-table/compare/v3.3.5...v3.3.6) (2017-05-19)
## Bug fixes
* Fixed ExpandComponent.js:47 Uncaught TypeError: Cannot read property 'className' of undefined([5618342](https://github.com/AllenFang/react-bootstrap-table/commit/5618342f9f46c2ee577fe03e44c38bd0bd1e9666))

<a name="v3.3.5"></a>
# [v3.3.5](https://github.com/AllenFang/react-bootstrap-table/compare/v3.3.4...v3.3.5) (2017-05-17)
## Bug fixes
* Fix `editable.type` will be ignore if is not `textarea`, `select`, `checkbox`, and `datetime`([e3f87e0](https://github.com/AllenFang/react-bootstrap-table/commit/e3f87e0160ae73e95fa54f4586ab99cfe2cfb720))

## Enhancement
* Able to set the default value for field in insert model easily([5bd62b4](https://github.com/AllenFang/react-bootstrap-table/commit/5bd62b4acec324f20188104d792285a0d9147204))
	* Use `editable.defaultValue`
* Support `options.onExpand` and accept a function which will be called when expand/collapse happen([f54ebc3](https://github.com/AllenFang/react-bootstrap-table/commit/f54ebc38e1f8d93ecb161934e364e72ce7b35c50))
	* Check [example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/expandRow/manage-expanding.js#L62).
* Allow `selectRow.className` to accept a function for a easy customization reason([440d376](https://github.com/AllenFang/react-bootstrap-table/commit/440d376158a091dee7b6c6b312ed0827ee897c09))
	* Check [example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/selection/select-row-class-table.js#L47)
* Able to apply custom style on filter([1e8f1f9](https://github.com/AllenFang/react-bootstrap-table/commit/1e8f1f9fbe6d744bd36256e8d5b01dc6c189dc5a))
	* Check [example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/column-filter/filter-style.js#L75)

<a name="v3.3.4"></a>
# [v3.3.4](https://github.com/AllenFang/react-bootstrap-table/compare/v3.3.3...v3.3.4) (2017-05-13)
## Bug fiexs
* Fix `afterSearch` and `afterColumnFilter` doesn't be called when table rerender([24e5b66](https://github.com/AllenFang/react-bootstrap-table/commit/24e5b666c39286faf0b42a64498177f30e6e7b90))

## Enhancement
* Able to clean sorted table([261c6ea](https://github.com/AllenFang/react-bootstrap-table/commit/261c6ea04c5cc0c06eb3d6182ea17a9ce08c0e6b))
	* Please check [this](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/sort/clean-sorted-table.js#L24-L26) example

* Able to configure the text and value of select option in cell editing or insert modal([face547](https://github.com/AllenFang/react-bootstrap-table/commit/face5476351e77db416f1cb27178988367151167))
	* Please check [this](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/advance/edit-type-table.js#L7-L24) example
	* It's only for the case of `editable.type` is `select`
	* Releated issues: [#1031](https://github.com/AllenFang/react-bootstrap-table/issues/1301) and [#243](https://github.com/AllenFang/react-bootstrap-table/pull/243)

<a name="v3.3.3"></a>
# [v3.3.3](https://github.com/AllenFang/react-bootstrap-table/compare/v3.3.2...v3.3.3) (2017-05-08)
## Bug fixes
* Avoid to throw error when `onfocus` function is not implement on custom cell editor([7104c6b](https://github.com/AllenFang/react-bootstrap-table/commit/7104c6b4f6611b9040d8de18649b5daded89cac2))
* Fixed press ESC to leave the cell editing broken since from `v3.3.1`([283508](https://github.com/AllenFang/react-bootstrap-table/commit/28350864ecf6dace5d00f55bd4dbfaff8ddaacbd))

<a name="v3.3.2"></a>
# [v3.3.2](https://github.com/AllenFang/react-bootstrap-table/compare/v3.3.1...v3.3.2) (2017-05-07)
## Bug fixes
* Fixed bug about `options.keepSizePerPageState`([e226764](https://github.com/AllenFang/react-bootstrap-table/commit/e22676426cff916a492177c507787298364841f3))
* Fixed a delete row bug when `options.pageStartIndex` is 0([161eb0c](https://github.com/AllenFang/react-bootstrap-table/commit/161eb0c46ff93f6845884978ad21021cf69375f4))

<a name="v3.3.1"></a>
# [v3.3.1](https://github.com/AllenFang/react-bootstrap-table/compare/v3.3.0...v3.3.1) (2017-05-06)
## Features
* Allow to unselect all only for visible rows(filter, search)[b15475a](https://github.com/AllenFang/react-bootstrap-table/commit/b15475a97bb5bc6c717a026c64d8c67145aca6b5)
	* [#1276](https://github.com/AllenFang/react-bootstrap-table/issues/1276)
	* Enable `selectRow.onlyUnselectVisible` to have this feature

## Enhancement
* `cellEdit.beforeSaveCell` pass fourth argument `done`, call it and return a bool value for performing validation in async[f620b19](https://github.com/AllenFang/react-bootstrap-table/commit/f620b19e297ea4f5ec23c6fc41b98f2ed9173076)
	* check [description](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/cell-edit/cell-edit-hook-table.js#L42)
	* If your validation is async or there's a delay for user operation, use this feature.
* Suppoer `options.keepSizePerPageState`, enable it will make size per page dropdown keep open if table rerender automatically without any user action[5234375](https://github.com/AllenFang/react-bootstrap-table/commit/52343759d2525e1d73257977e0402d5c04dff060)

<a name="v3.3.0"></a>
# [v3.3.0](https://github.com/AllenFang/react-bootstrap-table/compare/v3.2.2...v3.3.0) (2017-05-01)
## Bug fixes
* Fix default sort does not work for `remote` mode([a15c492](https://github.com/AllenFang/react-bootstrap-table/commit/a15c492dd1e4ceae05aabc1c2632f89b10258941))
* Fix `false` is transfer to be empty string on cell editing([e840849](https://github.com/AllenFang/react-bootstrap-table/commit/e840849e04a5f0598dd18a9c1d9d2db7c981a698))

## Enhancement
* Avoid to rerender select filter everytime([5b14252](https://github.com/AllenFang/react-bootstrap-table/commit/5b1425234ebd79db8cf8df3c949b8d019e5c308e))
* restrict border & border-radius to bordered tables([8e446f3](https://github.com/AllenFang/react-bootstrap-table/commit/8e446f36006678e37446d6028802aa45e45813cd))
* Better `margin` for table, pagination, toolbar([a5be737](https://github.com/AllenFang/react-bootstrap-table/commit/a5be73792cd5b29ebae0f218f635bd2f697bda8f))

<a name="v3.2.2"></a>
# [v3.2.2](https://github.com/AllenFang/react-bootstrap-table/compare/v3.2.1...v3.2.2) (2017-04-27)
## Bug fixes
* Fix validation is ignored when tab out of a cell to the next cell([1a6ca0a](https://github.com/AllenFang/react-bootstrap-table/commit/1a6ca0af7559f4cbbbf5e54715c2e25ebce5b852))

## Enhancement
* Able to remove the empty option on select and number filter([61a2d8c](https://github.com/AllenFang/react-bootstrap-table/commit/61a2d8cc6811fe470a68313a80a5c31ec1fce05c))
	* Use `filter.withoutEmptyOption` on `TableHeaderColumn` for select filter.
	* Use `filter.withoutEmptyNumberOption` on `TableHeaderColumn` for number filter.
	* Use `filter.withoutEmptyComparatorOption` on `TableHeaderColumn` for number filter.

## Features
* Support `defaultASC` on `TableHeaderColumn` for specifing ASC order when sorting on column first time([fec241d](https://github.com/AllenFang/react-bootstrap-table/commit/fec241d11e7a2351d7070a4cc6afaed1ba3d4ec2))

<a name="v3.2.1"></a>
# [v3.2.1](https://github.com/AllenFang/react-bootstrap-table/compare/v3.2.0...v3.2.1) (2017-04-20)
## Bug fixes
* Fixed search and pagination not working together([5a533cf](https://github.com/AllenFang/react-bootstrap-table/commit/5a533cfb6512c1200d66a962323b00d5316f2e12))
	* It's a very critical bug since from `v3.1.8`

<a name="v3.2.0"></a>
# [v3.2.0](https://github.com/AllenFang/react-bootstrap-table/compare/v3.1.8...v3.2.0) (2017-04-16)
## Enhancement
* Now, we are able to custom the field in insert modal([8b66a74](https://github.com/AllenFang/react-bootstrap-table/commit/8b66a74178ebffdb8bad43bcbbf1381887ac7835))
	* Check [example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/custom/insert-modal/custom-insert-modal-field.js)

## Features
* Support conjunction search([246a7fa](https://github.com/AllenFang/react-bootstrap-table/commit/246a7fa721e0dd3846d1c1dcb48db2c114d261cb))
	* Please check [#1199](https://github.com/AllenFang/react-bootstrap-table/issues/1199)
* Allow to expand only one row at a time([c4c1b7f](https://github.com/AllenFang/react-bootstrap-table/commit/c4c1b7f377bbe3956b867d0afadf98e0e8c46cb6))
	* configure via `options.onlyOneExpanding` and assign `true`

<a name="v3.1.8"></a>
# [v3.1.8](https://github.com/AllenFang/react-bootstrap-table/compare/v3.1.7...v3.1.8) (2017-04-13)
## Bug fixes
* Fix wrong page jumping after search, filter etc.([b686d1a](https://github.com/AllenFang/react-bootstrap-table/commit/b686d1a44b95878cbd0bdc91a7a8b20ce7fb8671))

## Enhancement
* Add class name `react-bs-table-sizePerPage-dropdown` for sizePerPage dropdown([da82469](https://github.com/AllenFang/react-bootstrap-table/commit/da82469431fdec4efb466b8d08a106b1448d7b44))

<a name="v3.1.7"></a>
# [v3.1.7](https://github.com/AllenFang/react-bootstrap-table/compare/v3.1.6...v3.1.7) (2017-04-07)
## Bug fixes
* Fixed `headerText` is not display well([14fc9b7](https://github.com/AllenFang/react-bootstrap-table/commit/14fc9b7773282f7533ffc0eed64f4e48d77e09a8))
* Fixed bug if update `options.expanding` is not work([6f0b5fb](https://github.com/AllenFang/react-bootstrap-table/commit/6f0b5fbe81935b2f4dcf8c709f2f32730a934241))

## Enhancement
* Improve the performance of select all functionality([3b67e19](https://github.com/AllenFang/react-bootstrap-table/commit/3b67e1900d7cb8adab507b493c47356b0d972fc1))
* Support `keyValidator` on `TableHeader` to tell `react-bootstrap-table` to push the error message in `validateState` if rowkey not valid([892c504](https://github.com/AllenFang/react-bootstrap-table/commit/892c50408739dff0fa1f4b8b25f2663b099f9c10))
	* It's only work for rowKey column
	* Default is false, `react-bootstrap-table` only show a toastr to nofity user that rowkey is not valid.

<a name="v3.1.6"></a>
# [v3.1.6](https://github.com/AllenFang/react-bootstrap-table/compare/v3.1.5...v3.1.6) (2017-04-03)
## Bug fixes
* Fixed wrong `z-index` for insert modal and mask([91b4dca](https://github.com/AllenFang/react-bootstrap-table/commit/91b4dca1e884d8295c2acdf53814bfa221014ccf))
* Fixed keyboard navigation does not work if `selectRow.hideSelectColumn` is true([e8c25fd](https://github.com/AllenFang/react-bootstrap-table/commit/e8c25fd48de8f9e9081a790042995c1ebe17197e))

## Enhancement
* Support `editable.readOnly` for `TableHeaderColumn`, which is helpful if you want this field can be edited on insert but not on cell editing([8729faf](https://github.com/AllenFang/react-bootstrap-table/commit/8729faf4c976dbd91338910b6f3104afed05b063))

<a name="v3.1.5"></a>
# [v3.1.5](https://github.com/AllenFang/react-bootstrap-table/compare/v3.1.4...v3.1.5) (2017-04-01)
## Bug fixes
* Fix tab broke if encounter non editable or hidden cell([ca7a9dd](htthttps://github.com/AllenFang/react-bootstrap-table/commit/ca7a9dd7f7a0df2f85554aa927b43d4eecbe854a))
* Avoid the horizontal scrollbar appear when resize the window

<a name="v3.1.4"></a>
# [v3.1.4](https://github.com/AllenFang/react-bootstrap-table/compare/v3.1.3...v3.1.4) (2017-04-01)
## Bug fixes
* Fix tab broke if encounter non editable or hidden cell([2f9ed93](https://github.com/AllenFang/react-bootstrap-table/commit/2f9ed933a3b7a37278817f1f2932fbed89c0ad0b))
* Fix unalign issue if table become scrollable then non scrollable([af8b3c3](https://github.com/AllenFang/react-bootstrap-table/commit/af8b3c3aaa594dd1ed7639556106629bfd36106f))

## Enhancement
* `selectRow.bgColor` now support a callback function for more flexible bgColor setting([136dec9](https://github.com/AllenFang/react-bootstrap-table/commit/136dec9313d92658748e38fd141ecd618da5d333))
	```js
	bgColor: function(row, isSelect) {
     if (isSelect) {
       const { id } = row;
       if (id < 2) return 'blue';
       else if (id < 4) return 'red';
       else return 'yellow';
     }
     return null;
  }
	```

<a name="v3.1.3"></a>
# [v3.1.3](https://github.com/AllenFang/react-bootstrap-table/compare/v3.1.2...v3.1.3) (2017-03-30)
## Bug fixes
* Fix bug about != and = are not work well for date filter([14bcfba](https://github.com/AllenFang/react-bootstrap-table/commit/14bcfba28df01d9591cc189f3a5c1f87c94fade5))
* Fix an error happen if change sizePerPage then fill date([28561d5](https://github.com/AllenFang/react-bootstrap-table/commit/28561d5752788d7bcb0ad0d9d10a7f6fa63fc5bd))
* Fix FileSaver.js causes requireJS errors in console([850cdea](https://github.com/AllenFang/react-bootstrap-table/commit/850cdeaddc75315f9a2b1e3cbc72e94e5add706c))

<a name="v3.1.2"></a>
# [v3.1.2](https://github.com/AllenFang/react-bootstrap-table/compare/v3.1.1...v3.1.2) (2017-03-28)
## Bug fixes
* Fix toastr error does not display when editing cell([8407634](https://github.com/AllenFang/react-bootstrap-table/commit/8407634322a0f5e5bd51a2609765a8783de418d4))
* Fix `noDataText` set colSpan more than columns if some column hidden([52206d9](https://github.com/AllenFang/react-bootstrap-table/commit/52206d9172994c37dbabe02222e5447577b37a48))

<a name="v3.1.1"></a>
# [v3.1.1](https://github.com/AllenFang/react-bootstrap-table/compare/v3.1.0...v3.1.1) (2017-03-10)
## Bug fixes
* Fix `selectRow.hideSelectColumn` not working in table header([fcc7c81](https://github.com/JohnUiterwyk/react-bootstrap-table/commit/fcc7c817e0b259f85f61d9d3a5cc1b09d187933f))
* Fix an exception if table source data is immutable type([70de237](https://github.com/AllenFang/react-bootstrap-table/commit/70de237ca59a383d9a1ff9ffffc4671188ede31b))

## Features
* Able to hide/show toolbar when printing via `options.printToolBar`([fdb04f8](https://github.com/AllenFang/react-bootstrap-table/commit/fdb04f86032743cccc0b0b1552d910a156c045e8))

<a name="v3.1.0"></a>
# [v3.1.0](https://github.com/AllenFang/react-bootstrap-table/compare/v3.0.0...v3.1.0) (2017-02-06)
## Bug fixes
* Fix componentWillMount of expand content not called with pagination([fafc080](https://github.com/AllenFang/react-bootstrap-table/commit/fafc080384440e785aa932fc495bd71c5688addb))
* Fix Cell edit on key Tab press problems if enable expand row([7320dd4](https://github.com/AllenFang/react-bootstrap-table/commit/7320dd4ee94ebf233fbeb6a96d783b39ae215d84))

## Features
* Support the expand indicator([1c31aab](https://github.com/AllenFang/react-bootstrap-table/commit/1c31aabec5fc82f366e50cad9285c5ac5113c089))
* Support to hide page list if only one page([2da1b85](https://github.com/AllenFang/react-bootstrap-table/commit/2da1b856b01c2b3df65d7cca6d3c5417c112cb1b))
	* Use `options.hidePageListOnlyOnePage` and set true to hide.

## Enhancement
* Fixed no buttons will be displayed on top left when only customized buttons are provided([ad7b80c](https://github.com/AllenFang/react-bootstrap-table/commit/ad7b80c0bc6fceb2212d59106e46f8bedcdff3a9))
* Support `csvFormatExtraData` for `csvForamt`([4fe30ed](https://github.com/AllenFang/react-bootstrap-table/commit/4fe30eda9492e51d075559c29a0982110cb15233))
	* Check [this](https://github.com/AllenFang/react-bootstrap-table/commit/e185529f37dfa6e85336a9942b6c4b3aa6f6284c) for example
* Support default tooltip on pagination button and able to customize them([c530474](https://github.com/AllenFang/react-bootstrap-table/commit/c5304741279709d7cf7dc55a6f3a89184c6976b2))
	* Check [example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/pagination/custom-pagination-table.js#L49-L52) to learn how to custom tooltip for page list button

<a name="v3.0.0"></a>
# [v3.0.0](https://github.com/AllenFang/react-bootstrap-table/compare/v2.11.2...v3.0.0-beta.12) (2017-02-06)
## Features
* Support Keyboard navigation
	* Check [examples](https://github.com/AllenFang/react-bootstrap-table/tree/master/examples/js/keyboard-nav)

## Enhancement
* More easy to custom table(toolbar, button, pagination etc.)
	* Check [examples](https://github.com/AllenFang/react-bootstrap-table/tree/master/examples/js/custom)

<a name="v2.11.2"></a>
# [v2.11.2](https://github.com/AllenFang/react-bootstrap-table/compare/v2.11.1...v2.11.2) (2017-02-06)
## Bug fixes
* Fix wrong propTypes for `tdStyle` and `thStyle`([37032fb](https://github.com/AllenFang/react-bootstrap-table/commit/37032fb2d80d99c5ec6bc4244c7a57a08aaf23a7))

<a name="v2.11.1"></a>
# [v2.11.1](https://github.com/AllenFang/react-bootstrap-table/compare/v2.11.0...v2.11.1) (2017-02-05)
## Features
* Support to configure the `td` and `th` style object([94b4451](https://github.com/AllenFang/react-bootstrap-table/commit/94b4451d15d972de09d36de9af514b994858b113))
	* Use `tdStyle` on `TableHeaderColumn` to configure the `td` styles, aceept an object
	* Use `thStyle` on `TableHeaderColumn` to configure the `th` styles, aceept an object
	* [example](https://github.com/AllenFang/react-bootstrap-table/commit/0dfded4db99bc00f6a2134d919cc0e6864fa9bf9)

## Enhancement
* Able to clean table by calling `reset` which is exposed by `BootstrapTable`([6893be6](https://github.com/AllenFang/react-bootstrap-table/commit/6893be6c4b425ec49a5f792941a1ec137cfe3bfe))
* Support to configure which functionality should be handled by `remote`([d31c71f](https://github.com/AllenFang/react-bootstrap-table/commit/d31c71f25114f42487e618860e93b33919ba27c3))
	* Check [example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/remote/remote-store-alternative.js)

<a name="v2.11.0"></a>
# [v2.11.0](https://github.com/AllenFang/react-bootstrap-table/compare/v2.10.2...v2.11.0) (2017-02-01)
## Bug fixes
* Selection broken if click on a custom cell(`dataFormat`) since from from `v2.9.2`([d149941](https://github.com/AllenFang/react-bootstrap-table/commit/d149941dbdf57c7f95e936aec8db9909cf3408dd))
* Fixed the `onRowClick` broken since from `v2.9.2`([2d8212a](https://github.com/AllenFang/react-bootstrap-table/commit/2d8212ae880cf675f972db83382cc6c5bb161700))
* Fixed [#996](https://github.com/AllenFang/react-bootstrap-table/pull/996)([b2ff491](https://github.com/AllenFang/react-bootstrap-table/commit/b2ff4919ccc936e1f4a0773eca8553ca5878ac09))

## Features
* Support to configure the column width with percentage([08c7cbc](https://github.com/AllenFang/react-bootstrap-table/commit/08c7cbcc155df6257bb5f1c320a316e9fbb9e2a6))

<a name="v2.10.2"></a>
# [v2.10.2](https://github.com/AllenFang/react-bootstrap-table/compare/v2.10.0...v2.10.2) (2017-01-31)
## Bug fixes
* Change the default condition from `eq` to `like` for text, select, custom filter([561a6c3](https://github.com/AllenFang/react-bootstrap-table/commit/561a6c3590666c0a650e6fbee83af6d39c09ba41), [ee4252b](https://github.com/AllenFang/react-bootstrap-table/commit/ee4252b5291ec73062eb42b22547a779fafafdb0))

<a name="v2.10.0"></a>
# [v2.10.0](https://github.com/AllenFang/react-bootstrap-table/compare/v2.9.2...v2.10.0) (2017-01-26)
## Bug fixes
* Fix couple unalign column issue([98a586c](https://github.com/AllenFang/react-bootstrap-table/commit/98a586c77f0e64884b7d41c3ed8c7bfb819c1c4d), [0390b8e](https://github.com/AllenFang/react-bootstrap-table/commit/0390b8eb61418e9bae2f2ab8dfc4c46454d23bd3), [5cdfefe](https://github.com/AllenFang/react-bootstrap-table/commit/5cdfefe1e83564dcfc9ae2f9a1bacb03415b6909))

## Enhancement
* Pass `row` to validator for cell editing([4e77a11](https://github.com/AllenFang/react-bootstrap-table/commit/4e77a1182d26aaa51574a0def2ee9b0288e36f49))
	* [Example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/advance/validator-table.js#L32)
* Support to configure the width of selection column([6e52226](https://github.com/AllenFang/react-bootstrap-table/commit/6e5222666f2882c2cb349a96ac4579eefd136045))
	* use `columnWidth` in `selectRow` prop
	* [Example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/selection/selection-column-width-table.js#L24)

<a name="v2.9.2"></a>
# [v2.9.2](https://github.com/AllenFang/react-bootstrap-table/compare/v2.9.1...v2.9.2) (2017-01-21)
## Bug fixes
* Fix expanding row broken if configure selectRow and expandBy column([01e4261](https://github.com/AllenFang/react-bootstrap-table/commit/01e42616d76a1667ca74c626ffd5f838a46f077d))
* Fix expanding row broken if configure cellEdit([2e9b19e](https://github.com/AllenFang/react-bootstrap-table/commit/2e9b19eec7ab57374e2ed4cb2f31cfba37b185dd))
* Fix calling `handleFilterData` throws errors from `2.8.3`([4c5ef92](https://github.com/AllenFang/react-bootstrap-table/commit/4c5ef925a30edea87f063bdb1cae7f96507c8ba4))
* Fix clicking on **custom** selection column will trigger selection twice([eff49cf](https://github.com/AllenFang/react-bootstrap-table/commit/eff49cfd90ba7ebbd343c2da921a041c5e310853))

<a name="v2.9.1"></a>
# [v2.9.1](https://github.com/AllenFang/react-bootstrap-table/compare/v2.9.0...v2.9.1) (2017-01-15)
## Bug fixes
* Fixed Uncaught TypeError: _this3.props.adjustHeaderWidth is not a function when expanding row([9202f31](https://github.com/AllenFang/react-bootstrap-table/commit/9202f31a837ae6e40cb496d612a5526ca5bd74b8))

## Features
* Support to hide the text for no data table([8bedcf7](https://github.com/AllenFang/react-bootstrap-table/commit/8bedcf7b0a8cd30da800c296d8d5f07aee0c71de))
	* Use `options.withoutNoDataText`, default is false. Give true will hide the text content
	* [Example](https://github.com/AllenFang/react-bootstrap-table/commit/b003927f983026d1aa08fd313fdb8570d49c7419)

<a name="v2.9.0"></a>
# [v2.9.0](https://github.com/AllenFang/react-bootstrap-table/compare/v2.8.3...v2.9.0) (2017-01-09)
## Enhancement
* Enhance the expanding row, support ```options.expanding```([aeb7125](https://github.com/AllenFang/react-bootstrap-table/commit/aeb71252d415e356aff6d7824a01b0da8752edba))
	* [example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/expandRow/manage-expanding.js#L69)
* Add ```options.beforeShowError``` to do some thing before toastr popup([9bc8b7f](https://github.com/AllenFang/react-bootstrap-table/commit/9bc8b7f5bee61974bc854b990300e4dbc5c89a3d))
	* Return false or do not return to prevent toastr popup
	* [example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/advance/disable-toastr-table.js#L67)

## Features
* Multi column sort
	* [Simple multi column sort](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/sort/multi-sort-table.js)
	* [Manage multi column sort externally](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/sort/manage-multi-sort-external-table.js)

<a name="v2.8.3"></a>
# [v2.8.3](https://github.com/AllenFang/react-bootstrap-table/compare/v2.8.2...v2.8.3) (2017-01-07)
## Enhancement
* Add ```invalidEditColumnClassName``` props on ```TableHeaderColumn``` for supporting the class on cell editing fail([4ddc906](https://github.com/AllenFang/react-bootstrap-table/commit/4ddc906390d1dc0857f4c4062142610c779c6015))

## Features
* Allow to configure the text, select or custom with a filter condition, default is ```like``` and ```eq``` is available.([a48e10c](https://github.com/AllenFang/react-bootstrap-table/commit/a48e10cb416382feaad47ad381d611e172513ea6))
	* [Example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/column-filter/text-filter-with-eq-condition.js) for text filter
	* [Example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/column-filter/select-filter-with-eq-condition.js) for select filter
* Allow to add your own attribute on TD element([a44e189](https://github.com/AllenFang/react-bootstrap-table/commit/a44e18918a9c50bd9594b7f3f3af09a9ae608c5b))
	* [Example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/column/td-attribute-table.js)

<a name="v2.8.2"></a>
# [v2.8.2](https://github.com/AllenFang/react-bootstrap-table/compare/v2.8.0...v2.8.2) (2016-12-29)
## Bug fixes
* Hot fixes for sort caret disappear after ```v2.8.1```([7e88e15](https://github.com/AllenFang/react-bootstrap-table/commit/7e88e151ae5eb5fcd58db718a0afa2a0ed08993b))

<a name="v2.8.1"></a>
# [v2.8.1(unpublish)](https://github.com/AllenFang/react-bootstrap-table/compare/v2.8.0...v2.8.1) (2016-12-28)
## Bug fixes
* Fixed onRowMouseOver called with wrong arguments when expandableRow enable([86270e2](https://github.com/AllenFang/react-bootstrap-table/commit/86270e2bf96c8bb3defd9655647a0c583ee17372))

## Enhancement
* Fixed TableHeader: prop type ```colGroups``` is invalid([11e9daa](https://github.com/AllenFang/react-bootstrap-table/commit/11e9daae65d9b5db4a615f82c890e7236dfa2a20))

<a name="v2.8.0"></a>
# [v2.8.0](https://github.com/AllenFang/react-bootstrap-table/compare/v2.7.1...v2.8.0) (2016-12-25)
## Features
* Support colSpan and rowSpan on table header([8e459ef](https://github.com/AllenFang/react-bootstrap-table/commit/8e459efde34ceca5b45f208524231b60fc81aedc))

<a name="v2.7.1"></a>
# [v2.7.1](https://github.com/AllenFang/react-bootstrap-table/compare/v2.7.0...v2.7.1) (2016-12-18)
## Bug fixes
* Fix layout error when expand row with a hidden column outside([460ba53](https://github.com/AllenFang/react-bootstrap-table/commit/460ba535fa12b4bfda54b034c044c52ebcd8543e))

## Enhancement
* Support ```editColumnClassName``` prop on ```<TableHeaderColumn>``` for separate from ```columnClassName```([dbc40d3](https://github.com/AllenFang/react-bootstrap-table/commit/dbc40d3acad89e805dbccdb29d261af4b8f6ab39))
	* check [#892](https://github.com/AllenFang/react-bootstrap-table/issues/892)
* Support ```headerText``` prop on ```<TableHeaderColumn>```([9183e71](https://github.com/AllenFang/react-bootstrap-table/commit/9183e7127d584818a59b6cd8833c0b787a0cf61d))
	* It's optional but if you dont have a pure text as children in ```<TableHeaderColumn>```, you can configure this prop to avoid couple wanring when insert or filter.
	* The value of this prop will be used on the placeholder or tip for filter or insert modal field.

## Features
* Allow to expand row by specified column or a row([95fbfd4](https://github.com/AllenFang/react-bootstrap-table/commit/95fbfd4edf3287d94282919fb3e7b0a7e2455390))
	* Check [this](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/expandRow/expand-row-by-column.js) example
	* Give ```expandBy``` in ```options``` props and assign as ```column``` or ```row```(```row``` is default)
	* If you give ```expandBy``` as ```column```, all column can trigger expanding by click
	* You can tell ```react-bootstrap-table``` which column can trigger expanding by ```expandable={ false }``` on ```<TableHeaderColumn>```

<a name="v2.7.0"></a>
# [v2.7.0](https://github.com/AllenFang/react-bootstrap-table/compare/v2.6.0...v2.7.0) (2016-12-13)
## Bug fixes
* Fixed calling ```handleSearch('')``` will no clear the text on search field([f7646dc](https://github.com/AllenFang/react-bootstrap-table/commit/f7646dcd9c5c2122c9447c9f20ac0d13d8c6761d))
* Fixed ```getComputedStyle``` is not defined error([c9587b2](https://github.com/AllenFang/react-bootstrap-table/commit/c9587b25c06998eb443970b89302bac147840fd1))
* Fixed fails in restricted network environment for ```react-toastr``` with a git url installation

## Features
* Support ```scrollTop``` prop on ```<BootstrapTable>```([20a0d65](https://github.com/AllenFang/react-bootstrap-table/commit/20a0d657624b88f7105482a1d0d3ca7e7d715ec2))
	* Available valus is a numeric value or ```Top``` or ```Bottom```

<a name="v2.6.0"></a>
# [v2.6.0](https://github.com/AllenFang/react-bootstrap-table/compare/v2.5.9...v2.6.0) (2016-11-28)
## Bug fixes
* Fixed [#838](https://github.com/AllenFang/react-bootstrap-table/issues/838)

## Features
* Support expandable row([00d1756](https://github.com/AllenFang/react-bootstrap-table/commit/00d17562eebf4cfba78c0ec0c762e7c032f20239))
	* Check [example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/expandRow/expandRow.js)

## Enhancement
* Support row lock level on cell edit([7c57b52](https://github.com/AllenFang/react-bootstrap-table/commit/7c57b52b06b2455d025f0810a38da4ad0ea6f58c))
	* Use ```nonEditableRows``` in ```cellEdit``` props
	* ```nonEditableRows``` accept a callback function which return an array of rowKey which is noneditable rows

<a name="v2.5.9"></a>
# [v2.5.9](https://github.com/AllenFang/react-bootstrap-table/compare/v2.5.8...v2.5.9) (2016-11-21)
## Bug fixes
* Fix npm 3 install fail[#797](https://github.com/AllenFang/react-bootstrap-table/issues/797)([3fea774](https://github.com/AllenFang/react-bootstrap-table/commit/3fea774b671419e613bf765c549c0ba4787814f8))
* Fix cleanFiltered could not clear customerFilter([07b8560](https://github.com/AllenFang/react-bootstrap-table/commit/07b8560a9a00304f9fb3a3ef193b2c5b51df7f65))

## Enhancement
* Throw errors instead of string literals([f32ba6f](https://github.com/AllenFang/react-bootstrap-table/commit/f32ba6fd141562de39a5904218142c9d1a803fab))

<a name="v2.5.8"></a>
# [v2.5.8](https://github.com/AllenFang/react-bootstrap-table/compare/v2.5.7...v2.5.8) (2016-11-09)
## Bug fixes
* Fixed the issue with giving the paginationShowsTotal as function when table is empty([ec93ddb](https://github.com/AllenFang/react-bootstrap-table/commit/ec93ddb4b4a4ed6cf6393649f816e19105f116de))

## Enhancement
* Add an option for changing the text on select filter([79b9f41](https://github.com/AllenFang/react-bootstrap-table/commit/79b9f41575511fbab15b4f08c32a215731288181))

<a name="v2.5.7"></a>
# [v2.5.7](https://github.com/AllenFang/react-bootstrap-table/compare/v2.5.6...v2.5.7) (2016-11-02)
## Bug fixes
* Fixed display boolean value if value is false([8fde9d6](https://github.com/AllenFang/react-bootstrap-table/commit/8fde9d6a0a06f584ff71306c53ed01a5fb3fd13a))
* Fixed the filters do not work with dynamically generated columns([e1f287a](https://github.com/AllenFang/react-bootstrap-table/commit/e1f287a2a3d56a3c1a840a076029825d8c2d9e4d))

## Enhancement
* Add ```headerTitle``` in ```<TableHeaderColumn>``` for enable the title on header, default is true([7685e14](https://github.com/AllenFang/react-bootstrap-table/commit/7685e1409c3459eb000632e21d3832865866c7e5))
* Redirect to first page if calling ```handleAddRowAtBegin```([3a4432a](https://github.com/AllenFang/react-bootstrap-table/commit/3a4432a0ddbb859c40a9b5de65ffeeea1ef106ef))

<a name="v2.5.6"></a>
# [v2.5.6](https://github.com/AllenFang/react-bootstrap-table/compare/v2.5.5...v2.5.6) (2016-10-22)
## Bug fixes
* Fixed Search fails on number 0([2af763e](https://github.com/madeinfree/react-bootstrap-table/commit/2af763e78c2377e4ebb771eeb34684fa83119fcf))
* Fixed the wrong display text when giving ```sizePerPageList``` as an array of object([a48dc5f](https://github.com/AllenFang/react-bootstrap-table/commit/a48dc5f9e5f47efa00292d959297d759f1f600a3))

## Enhancement
* Support ```onRowDoubleClick``` in ```options``` prop([3d884ea](https://github.com/AllenFang/react-bootstrap-table/commit/3d884ea233e2cb9a9e33a2439328d89121827216)) 

<a name="v2.5.5"></a>
# [v2.5.5](https://github.com/AllenFang/react-bootstrap-table/compare/v2.5.4...v2.5.5) (2016-10-01)
## Enhancement
* A popup editor for cell editing example([0fb4494](https://github.com/AllenFang/react-bootstrap-table/commit/0fb4494c5c4f58ea12f596950405f027b7df3139))
* The ```className``` on ```<TableHeaderColumn>``` accept a string or function((35d9d1e)[https://github.com/AllenFang/react-bootstrap-table/commit/35d9d1efe90f3d9f7113f3c18c8691f799bf7ccd])
* Pass ```dataField``` as the second argument for ```caretRender```([e75c7be](https://github.com/AllenFang/react-bootstrap-table/commit/e75c7be774f3244213ae028131c2cf2c3bf65dab))

<a name="v2.5.4"></a>
# [v2.5.4](https://github.com/AllenFang/react-bootstrap-table/compare/v2.5.3...v2.5.4) (2016-09-27)
## Bug fixes
* Fixed the incorrect page number for ```paginationShowsTotal``` when data is empty([ba524f9](https://github.com/AllenFang/react-bootstrap-table/commit/ba524f964a06f182bf60cb105a53a18861fea747))
* Fixed Cannot read property 'name' of undefined during option change if a given page bigger than total pages count([96c35aa](https://github.com/AllenFang/react-bootstrap-table/commit/96c35aad2183036dbefa68bd4cc6b2faec4bf7df))

## Enhancement
* Make pagination button compatible with Bootstrap@4([1c0e9f5](https://github.com/AllenFang/react-bootstrap-table/commit/1c0e9f59fbb07698aa643d421e2b56d6139016b4))
* Keep cell editing stay if table re-rendering([6777a72](https://github.com/AllenFang/react-bootstrap-table/commit/6777a72904b7410e8ea613caa17df10e7035319c))

<a name="v2.5.3"></a>
# [v2.5.3](https://github.com/AllenFang/react-bootstrap-table/compare/v2.5.2...v2.5.3) (2016-09-18)
## Bug fixes
* Fix wrong text for pagination show totals([62ce772](https://github.com/AllenFang/react-bootstrap-table/commit/62ce7727f2dba0e1edf0c1c7fcc6b0fb795b1d40))
* Should not deselect disabled checked checkbox on click on unselected all([41e3723](https://github.com/AllenFang/react-bootstrap-table/commit/41e3723b967a4793cf5428e66c621309ce030207))

## Enhancement
* Avoid console error for invalid regex in regex-filter([ef15ce0](https://github.com/AllenFang/react-bootstrap-table/pull/711/commits/ef15ce0cad9dee2df111485cf59c96dec65eaf97))

<a name="v2.5.2"></a>
# [v2.5.2](https://github.com/AllenFang/react-bootstrap-table/compare/v2.5.1...v2.5.2) (2016-09-11)
## Bug fixes
* Fix select filter not working as expected([1d3960c](https://github.com/AllenFang/react-bootstrap-table/commit/1d3960c97cadb636be74a42111cae53a12b2f587))
	* Check [#589](https://github.com/AllenFang/react-bootstrap-table/issues/589)
* Fix pagination covers table when setting maxheight([dcc54d2](https://github.com/AllenFang/react-bootstrap-table/commit/dcc54d2e3b9aa542459f4c023ae48bacff478aec))

## Enhancement
* Allow ```sizePerPageList``` accept an object which follow this format ```{ text: '10', value: 10 }```([635b838](https://github.com/AllenFang/react-bootstrap-table/commit/635b83837e991d418c47eab9b7d375d2c5162950))

<a name="v2.5.1"></a>
# [v2.5.1](https://github.com/AllenFang/react-bootstrap-table/compare/v2.5.0...v2.5.1) (2016-09-03)
## Bug fixes
* Fix update sizePerPage through componentWillReceiveProps does not update select list([5740871](https://github.com/doshisunny/react-bootstrap-table/commit/574087141de30ba235f3f2e49ebffb1b0f22946a))
* Fix table didn't reflect changes of unselectable prop when passed array changes dynamically([85000f8](https://github.com/AllenFang/react-bootstrap-table/commit/85000f800fa74ef67da21ee492bde27fad8616c6))

## Enhancement
* Showing rows for paginationShowsTotal should start at 1 instead of 0([271cf10](https://github.com/AllenFang/react-bootstrap-table/commit/271cf10061b8936da19717c4c4c98169dfc70d1a))
* Enable customized for notification messages after validation([e2d924f](https://github.com/AllenFang/react-bootstrap-table/commit/e2d924f7805c69634b8cdaae1f295b2bea90448b))
	* check [this](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/advance/validator-table.js#L31) example

<a name="v2.5.0"></a>
# [v2.5.0](https://github.com/AllenFang/react-bootstrap-table/compare/v2.4.4...v2.5.0) (2016-08-28)
*** Upgrade minor version ***

<a name="v2.4.4"></a>
# [v2.4.4](https://github.com/AllenFang/react-bootstrap-table/compare/v2.4.3...v2.4.4) (2016-08-27)
## Bug fixes
* Fix SelectFilter can't display boolean value([b84861c](https://github.com/AllenFang/react-bootstrap-table/commit/b84861ca0eb2f4d966c32d3a6eb1b8ee1be5c622))
* Fix boolean can't be populate to table column([ecc6a16](https://github.com/AllenFang/react-bootstrap-table/commit/ecc6a16b4aa97f83ac476f3342b3b0bdac706614))
* Fix unknown props warnings by ```react-toastr```([16cb7ef](https://github.com/AllenFang/react-bootstrap-table/commit/16cb7effeffe505f38d52c6e37a68dd21483faba))

## Enhancement
* Move css files to ```dist``` folder([ffb8031](https://github.com/AllenFang/react-bootstrap-table/commit/ffb8031768f6c5d139837ce350e540db3326f580))
* Allow to apply className to following elements([b426974](https://github.com/AllenFang/react-bootstrap-table/commit/b426974f3973a0499bed08bdb8b64b2a83dbad66))
	1. ```react-bs-table-container```, use ```containerClass``` to set className
	2. ```react-bs-table```, use ```tableContainerClass``` to set className
	3. ```react-bs-container-header```, use ```headerContainerClass``` to set className
	4. ```react-bs-container-body```, use ```bodyContainerClass``` to set className


<a name="v2.4.3"></a>
# [v2.4.3](https://github.com/AllenFang/react-bootstrap-table/compare/v2.4.2...v2.4.3) (2016-08-21)
## Bug fixes
* Editable converts zero (0) to empty string on first editing([422d6f8](https://github.com/AllenFang/react-bootstrap-table/commit/422d6f84fb35ebe66422087806d11983a43e5255))
* Fix a wrong sorting result after apply search([7e5a726](https://github.com/AllenFang/react-bootstrap-table/commit/7e5a726d2ffaf4c1654d235b3fe5e80be59addba))
	* [#634](https://github.com/AllenFang/react-bootstrap-table/issues/634)
* Fix ```paginationShowsTotal``` propTypes is invalid([cc5dd7f](https://github.com/AllenFang/react-bootstrap-table/commit/cc5dd7fdb508e184fec005c006804f3ddd78ed41))
	* [#592](https://github.com/AllenFang/react-bootstrap-table/issues/592)

## Enhancement
* Disable DOM on exported CSV file([48b9a98](https://github.com/AllenFang/react-bootstrap-table/pull/640/commits/48b9a9889a3516411d03b8daddc890693c2202f7))
* Hide export csv button when printing([cc625a0](https://github.com/AllenFang/react-bootstrap-table/pull/645/commits/cc625a06396be3192f4dcbb19659b23e800e7218))
* Allow ```onCellEdit``` return a value which present as the new value for editing.([f0030f0](https://github.com/AllenFang/react-bootstrap-table/pull/646/commits/f0030f0e87465d47141bbb0545b5c596c4238443))

<a name="v2.4.2"></a>
# [v2.4.2](https://github.com/AllenFang/react-bootstrap-table/compare/v2.4.1...v2.4.2) (2016-08-13)
## Bug fixes
* Fix the column width broken if table is empty([9172656](https://github.com/AllenFang/react-bootstrap-table/commit/9172656b5a495e46ad9a17c23758486d5c29a2de))

## Features
* Support to call ```applyFilter``` exposed by ```<TableHeaderColumn>``` for set filter value dynamically([e30f86c](https://github.com/AllenFang/react-bootstrap-table/commit/e30f86ccfb3c36c095cfc03874aae021a3fce5d9))
* Support to customize the selection column([c5875d5](https://github.com/AllenFang/react-bootstrap-table/commit/c5875d5bd56d0130a9dd78beb729a16e633d6a17))
	* [Example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/selection/custom-multi-select-table.js)
* Support cell edit on ```remote``` mode([f399e87](https://github.com/AllenFang/react-bootstrap-table/commit/f399e878102322f3da68f95c1265b5c27e1eba1b))
	* [Example](https://github.com/AllenFang/react-bootstrap-table/commit/f399e878102322f3da68f95c1265b5c27e1eba1b)

## Enhancement
* Pass the ```row``` in props at second arguments for ```customEditor.getElement```([2de6c5c](https://github.com/AllenFang/react-bootstrap-table/commit/2de6c5c59f44c7e91f733d58991ce3ec65e14ad9))

<a name="v2.4.1"></a>
# [v2.4.1](https://github.com/AllenFang/react-bootstrap-table/compare/v2.4.0...v2.4.1) (2016-08-06)
## Features
* Support default search([825ca76](https://github.com/AllenFang/react-bootstrap-table/commit/825ca76fef341caa969d52a3bca02c2e0df92ac0))
	* Assign ```defaultSearch``` in ```options``` props
* Support the date picker for cell edit([a861890](https://github.com/AllenFang/react-bootstrap-table/commit/a86189088b54a889c4a8d7a03fcbc9c072d0864a))

## Enhancement
* Avoid to overwrite the ```.table-bordered``` class.([0a678ed](https://github.com/AllenFang/react-bootstrap-table/commit/0a678ed54d9a119a461c9349a086c1f2a6820ae2))
* Allow ```csvFileName``` accept a function to generate file name dynamically([a730833](https://github.com/AllenFang/react-bootstrap-table/commit/a730833bf8b8aa6c4856ecf02a42dd8544140ed8))
* Allow ```height``` to accept number or string([7f3ac47](https://github.com/AllenFang/react-bootstrap-table/commit/7f3ac47f775706c2b245181a8c7eaca280fca234))

<a name="v2.4.0"></a>
# [v2.4.0](https://github.com/AllenFang/react-bootstrap-table/compare/v2.3.9...v2.4.0) (2016-08-06)
## Features
* Enable to clear filter by calling ```cleanFiltered``` which exposed by ```<TableHeaderColumn>```([bda6ff4](https://github.com/AllenFang/react-bootstrap-table/commit/bda6ff4979f28e6f2fe692d122fa93a249daf7fd))
* Support cell edit customization([b162b52](https://github.com/AllenFang/react-bootstrap-table/commit/b162b526fcffab6edd455ed2727fb69b79da8635))
	* Apply ```customEditor``` on ```<TableHeaderColumn>```
	* Check [example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/cell-edit/custom-cell-edit-table.js)

## Enhancement
* Fix wrong devtool for webpack on example([ff1da38](https://github.com/AllenFang/react-bootstrap-table/commit/ff1da38da3950b365a3f8873d80f7f07a8b17914))
* Use ```btn-primary``` for save button([a7923b4](https://github.com/AllenFang/react-bootstrap-table/commit/a7923b428c0e0ee8d955e20afe499aeec20b84c3))
* Pass row index as fourth arguments for ```dataFormat```([eae2f23](https://github.com/AllenFang/react-bootstrap-table/commit/eae2f2322ef5299a6e25fbd080e3609918c6b141))
* Add example for showing how to make select all only work on current page([ff31b0d](https://github.com/AllenFang/react-bootstrap-table/commit/ff31b0d0feed9105c911e0db23cc79e9990c93e1))
	* Check [example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/selection/all-select.js)

<a name="v2.3.9"></a>
# [v2.3.9](https://github.com/AllenFang/react-bootstrap-table/compare/v2.3.8...v2.3.9) (2016-07-25)
## Bug fixes
* Fix ```csvFormat``` doesn't pass the second argument([6d51a26](https://github.com/AllenFang/react-bootstrap-table/commit/6d51a2607569ffb28db55dba42531b4939ca56f3))

## Features
* Support to filter or search on nest object([3c6467d](https://github.com/AllenFang/react-bootstrap-table/commit/3c6467d2e7b96cf5942bd5821175c9202419762f))
	* Assign  ```filterValue``` on ```<TableHeaderColumn>```
	* Check [example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/manipulation/search-format-table.js#L51)

## Enhancement
* Avoid ```onExportToCSV``` only work on ```remote``` condition([c201793](https://github.com/AllenFang/react-bootstrap-table/commit/c20179369ff89bcd05cd6d8a8f4a2e6e7e9add91))
* Use ReactDOM.render instead of React.render([d45cb97](https://github.com/AllenFang/react-bootstrap-table/commit/d45cb97d44407474f275e048d381bbaa7e9355b2))

<a name="v2.3.8"></a>
# [v2.3.8](https://github.com/AllenFang/react-bootstrap-table/compare/v2.3.7...v2.3.8) (2016-07-16)
## Bug fixes
* Fix [#550](https://github.com/AllenFang/react-bootstrap-table/issues/550), a unselectable list issues after refresh([5a85f06](https://github.com/AllenFang/react-bootstrap-table/commit/5a85f06a70e3c00d093dfbf574bc50e5d66aa1e2))
<a name="v2.3.7"></a>

## Enhancement
* Add ```export``` on ```<TableHeaderColumn>```([aa4dfc3](https://github.com/AllenFang/react-bootstrap-table/commit/aa4dfc36b60de587325816a27c57a5dc2dfc5e89))
	* You can add ```export={true}``` to tell ```react-bootstra-table``` exporting this column if it is hidden
	* Also, you can add ```export={false}``` to tell ```react-bootstra-table``` don't export this column

# [v2.3.7](https://github.com/AllenFang/react-bootstrap-table/compare/v2.3.6...v2.3.7) (2016-07-02)
## Bug fixes
* [#517](https://github.com/AllenFang/react-bootstrap-table/issues/517)([https://github.com/AllenFang/react-bootstrap-table/issues/517](https://github.com/AllenFang/react-bootstrap-table/commit/1c71289e0a6578a5c959ae2232ebda32e8080b10))
* Fix unselctable is broken on selecting all([aa1db57](https://github.com/AllenFang/react-bootstrap-table/commit/aa1db57c021f43d5cf51ddb5cc11f8647cd46d51))
* Fix current page not work correct from zero([edd5581](https://github.com/AllenFang/react-bootstrap-table/commit/edd55810d94ca6e0936e57f3430b067ce954ae12))

<a name="v2.3.6"></a>
# [v2.3.6](https://github.com/AllenFang/react-bootstrap-table/compare/v2.3.5...v2.3.6) (2016-06-20)
### Bug fixes
* Fix filter null data([8a90468](https://github.com/AllenFang/react-bootstrap-table/commit/8a90468d80fb269612f1599dcaf18cb99dcf65ab))
* Fix setState will cause changing to page one if selected row is on last page([7093d58](https://github.com/AllenFang/react-bootstrap-table/commit/7093d58aad53454e956b52862fed0a84cdb809bf))

### Features
* Support ```unselectable``` in ```selectRow``` props which can make some row unselectable([f5faef1](https://github.com/AllenFang/react-bootstrap-table/commit/f5faef1ede68d02bbfb50e424f80d0e2c188ad76))
	* Check [example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/selection/unselectable-table.js#L25)
* Expose ```getTableDataIgnorePaging``` function on ```<BootstrapTable>``` to allow user get the all data(include filtered)([34f3568](https://github.com/AllenFang/react-bootstrap-table/commit/34f3568657b1fb56fdc218041d47b00f09680345))

<a name="v2.3.5"></a>
# [v2.3.5](https://github.com/AllenFang/react-bootstrap-table/compare/v2.3.4...v2.3.5) (2016-06-11)
### Bug fixes
* Fix column title is null problem([4d25667](https://github.com/AllenFang/react-bootstrap-table/commit/4d25667facf23e6447b8a196d32ffe699e5573a2))
* Fix sizePerPage always to be options value if setState([58540b3](https://github.com/AllenFang/react-bootstrap-table/commit/58540b37eccc3f15e92950e96dd890043d7fc1a6))
* fix currPage always to be options value if setState([544cd26](https://github.com/AllenFang/react-bootstrap-table/commit/544cd261b8f1da42173f5cb00dc61f32fa7b04a7))

### Enhancement
* Support ```headerAlign``` for align header text only([e8930f6](https://github.com/AllenFang/react-bootstrap-table/commit/e8930f63a76fb54bcb4b36e39440ab757619490f))
	* Check [example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/column/column-align-table.js)

<a name="v2.3.4"></a>
# [v2.3.4](https://github.com/AllenFang/react-bootstrap-table/compare/v2.3.3...v2.3.4) (2016-06-05)
### Bug fixes
* Fix a next page showing if there's no data([ddf7fc9](https://github.com/AllenFang/react-bootstrap-table/commit/ddf7fc9614e48ae3bfbd38c5dbc186db78db8fc7))
* Fix the wrong class on selection row if a ```trClassName``` given([2d3d1cb](https://github.com/AllenFang/react-bootstrap-table/commit/2d3d1cb527ca87de55dd2bfe0cf737395285ef3a))
	* Check [#488](https://github.com/AllenFang/react-bootstrap-table/issues/488)
* Fix the save button doesn't work in textarea editing if disable ```blurToSave```([2e0eca5](https://github.com/AllenFang/react-bootstrap-table/commit/2e0eca5a4d326aa6ab2fdc24a1bb50ad60c39ce1))

### Features
* Able to hide the pagination if there's only one page([4739d43](https://github.com/AllenFang/react-bootstrap-table/commit/4739d433d873fbf0d5ede829ee878ab9965e3e81))
	* Enable ```ignoreSinglePage``` on ```<BootstrapTable>```
* Able to hide the sizePerPage doprdown([7c88a3b](https://github.com/AllenFang/react-bootstrap-table/commit/7c88a3bbf83e09810db24d684655071a91207f1a))
	* Add ```hideSizePerPage``` in ```options``` props on ```<BootstrapTable>```
* Support to customize the csv header text([ef11be9](https://github.com/AllenFang/react-bootstrap-table/commit/ef11be9e78b419c435bd9bc79a276fdf7e1e8bbe))
	* Use ```csvHeader``` on ```<TableHeaderColumn>```

### Enhancement
* Fix confirm grammar for row delete([cd26ba9](https://github.com/AllenFang/react-bootstrap-table/commit/cd26ba98233b43b214a37a9c027d2760dbc5adc8))

<a name="v2.3.3"></a>
# [v2.3.3](https://github.com/AllenFang/react-bootstrap-table/compare/v2.3.2...v2.3.3) (2016-05-29)
### Bug fixes
* Fix warning: NaN is an invalid value for the width css style property([4018df5](https://github.com/AllenFang/react-bootstrap-table/commit/4018df53f1c65d8d072b28b52ce71f103a76d81b))
* Fix uncaught TypeError: Cannot read property 'filter' of undefined([dc67221](https://github.com/AllenFang/react-bootstrap-table/commit/dc672211e32cfd10b83557418bd82c2956d41b3c))
* Fix search then filter will ignore the search([dc67221](https://github.com/AllenFang/react-bootstrap-table/commit/dc672211e32cfd10b83557418bd82c2956d41b3c))

### Features
* Custom text for ```paginationShowsTotal```([07b3e7a](https://github.com/AllenFang/react-bootstrap-table/commit/07b3e7a59f1c8cf0b71fbdabdb95410f8d9fb5e0))
	* ```paginationShowsTotal``` accept a bool value or a function, if a function given you need return the customize JSX.
	* Check [example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/pagination/custom-pagination-table.js#L43)
* Support hide field in insert modal([9a7e93a](https://github.com/AllenFang/react-bootstrap-table/commit/9a7e93a7a87783e1405968cfae9970a3d55323c3))
	* Use ```hiddenOnInsert``` on ```<TableHeaderColumn>```

### Enhancement
* Ability to return unselected rows in ```onSelectAll```([a23c290](https://github.com/AllenFang/react-bootstrap-table/commit/a23c2902a2ec33ca5f783fce6740892af359e74a))
	* On select all, the second argument will be the current display rows on table.
	* On unselect all, the second argument will be the unselect rows.
	* Check [example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/selection/select-hook-table.js#L34)

* Improve the validation on ```onSelectAll```([4666523](https://github.com/AllenFang/react-bootstrap-table/commit/4666523c4ff87132655810bbdbfa5ef306a8cce8))
	* If return true/false in ```onSelectAll```, means agree/disard this select all event.
	* If return an array of rowKeys in ```onSelectAll```, means the final selected result for this select event.
	* Check [select validation example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/selection/select-validation-table.js)


<a name="v2.3.2"></a>
# [v2.3.2](https://github.com/AllenFang/react-bootstrap-table/compare/v2.3.1...v2.3.2) (2016-05-23)
### Bug fixes
* Fix sorting on null value([6a1c88b](https://github.com/AllenFang/react-bootstrap-table/commit/6a1c88bbdee921bd6373f713cb16e69676f2cda0))

### Features
* Support for pagination start index([98499b2](https://github.com/AllenFang/react-bootstrap-table/commit/98499b2d3de0149f27e85a75e753d948e25d32a7))
	* Use ```pageStartIndex``` in ```options```
	* Check [example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/pagination/custom-pagination-table.js#L28)
* Able to add classname on <table> tag([866e07d](https://github.com/AllenFang/react-bootstrap-table/commit/866e07d1fe3932557afcd87addd65c725c9023a5))
	* ```tableHeaderClass``` for header table and ```tableBodyClass``` for body table
	* Check [example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/style/table-class-table.js)

<a name="v2.3.1"></a>
# [v2.3.1](https://github.com/AllenFang/react-bootstrap-table/compare/v2.3.0...v2.3.1) (2016-05-11)
### Bug fixes
* Unminified the index.js([9607b82](https://github.com/AllenFang/react-bootstrap-table/commit/9607b82de63cf26f6290898e34062ac65f21d2ad))

### Features
* Support column title([e77bd32](https://github.com/AllenFang/react-bootstrap-table/commit/e77bd32cec69e35de7bc588cbb64713a827674fa))
	* Enable ```columnTitle``` on ```<TableHeaderColumn>```
* Support csv format on column([acd12b1](https://github.com/AllenFang/react-bootstrap-table/commit/acd12b178d8dd46f1e06e6051ff16f829b6fff78))
	* Because ```dataFormat``` is not appropriate on column when exporting csv file, so ```csvFormat``` been supported.
	* Check [this](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/manipulation/export-csv-table.js#L33) example
* Enable to custom the save and close button text in insert modal([072eeee](https://github.com/AllenFang/react-bootstrap-table/commit/072eeeef1e8ab9b374f4c225e6600dcdb0c3a700))
	* [Example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/manipulation/custom-btn-text-table.js#L28-L29) on here

<a name="v2.3.0"></a>
# [v2.3.0](https://github.com/AllenFang/react-bootstrap-table/compare/v2.2.0...v2.3.0) (2016-05-04)
### Bug fixes
* Fix filters doesn't work when the column contains null values([2199431](https://github.com/AllenFang/react-bootstrap-table/commit/21994312daa042e0cfc1aea911d4811eb6909e8d))

### Features
* Support remote data([818f11b](https://github.com/AllenFang/react-bootstrap-table/commit/818f11befa5c30b3e9e1180d612c10aafa9e54bb))
	* Check [examples](https://github.com/AllenFang/react-bootstrap-table/tree/master/examples/js/remote)

<a name="v2.2.0"></a>
# [v2.2.0](https://github.com/AllenFang/react-bootstrap-table/compare/v2.1.5...v2.2.0) (2016-04-29)
### Bug fixes
* Fix default value on filter are broken when upgrade to ```react@15.0.0```([b455582](https://github.com/AllenFang/react-bootstrap-table/commit/b455582c736d77aeb739ffb3d8c1815c7cb79442))
* Fix column header pulse when sorting([4ec7521](https://github.com/AllenFang/react-bootstrap-table/commit/4ec75213627e0dd1a651e13ae9fde2276041612f))
* Fix Cannot assign to read only property 'children' of object '#<Object>' on single column table([3a95495](https://github.com/AllenFang/react-bootstrap-table/commit/3a95495e5886b84fce9c8c4f484c745ef9351413))

### Features
* Compatible on both ```react@0.14.x``` and ```react@15.x```([8487ea7](https://github.com/AllenFang/react-bootstrap-table/pull/423/commits/8487ea7997815edd951f23af1ddb47f227a1dde4))
* Customization text on Delete and Insert row button([0f2e6b7](https://github.com/AllenFang/react-bootstrap-table/commit/0f2e6b7735e423586f31b80a091a173fd7bf952a))
	* [example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/manipulation/custom-btn-text-table.js)

<a name="v2.1.5"></a>
# [v2.1.5](https://github.com/AllenFang/react-bootstrap-table/compare/v2.1.4...v2.1.5) (2016-04-26)
### Features
* Support position and total pages([8c6393b](https://github.com/AllenFang/react-bootstrap-table/commit/8c6393b93bfb6ca814d5f650a4160734cc429369))
	* Enable ```paginationShowsTotal``` in ```options``` props
	* check [example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/pagination/custom-pagination-table.js#L33)

### Enhancement
* Allow developer to define inline styling on ```react-bootstrap-table```([e60e607](https://github.com/AllenFang/react-bootstrap-table/commit/e60e607ca8a01ec89cd728196f083636bd7f99bf))
	* Check [example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/style/inline-style-table.js)
	* ```containerStyle``` props is corresponding to the ```react-bs-table-container``` class.
	* ```tableStyle``` props is corresponding to the ```react-bs-table``` class.
	* ```headerStyle``` props is corresponding to the ```react-bs-container-header``` class.
	* ```bodyStyle``` props is corresponding to the ```react-bs-container-body``` class.

<a name="v2.1.4"></a>
# [v2.1.4](https://github.com/AllenFang/react-bootstrap-table/compare/v2.1.3...v2.1.4) (2016-04-15)
### Bug fixes
* Fix data loss on cell edit when only a validator given([d652e63](https://github.com/AllenFang/react-bootstrap-table/commit/d652e635c4f505b7292f4e024c7d58e8d1145ef4))

* Fix select state still remain when update state on table([9ffea48](https://github.com/AllenFang/react-bootstrap-table/commit/9ffea4869a9a264e34e734429d2f938915952536))
	* check the [scenario](https://github.com/AllenFang/react-bootstrap-table/issues/403)

<a name="v2.1.3"></a>
# [v2.1.3](https://github.com/AllenFang/react-bootstrap-table/compare/v2.1.2...v2.1.3) (2016-04-11)
### Features
* Support comparator on date filter([bf5b4d2](https://github.com/AllenFang/react-bootstrap-table/commit/bf5b4d2358ba43646f721ddcd352446e977df7a9))

### Enhancement
* Pass event object as third argument on ```onRowSelect``` callback function([b1e8d18](https://github.com/AllenFang/react-bootstrap-table/commit/b1e8d18b0183e9116e4defdbe8e71027e193a9a2))
* Support a better mechanism for default sorting([ac0dd35](https://github.com/AllenFang/react-bootstrap-table/commit/ac0dd3516d5b03cfbd8093e329613b4e554dae9f))
	* Check [example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/sort/default-sort-table.js)

<a name="v2.1.2"></a>
# [v2.1.2](https://github.com/AllenFang/react-bootstrap-table/compare/v2.1.1...v2.1.2) (2016-04-06)
### Bug fixes
* Fix editor type broken if enable ```ignoreEditable```([b92481d](https://github.com/AllenFang/react-bootstrap-table/commit/b92481d9a42f71e97a848e8419282a05142049b0))
* Fix sort broken after doing column filter([47cad29](https://github.com/AllenFang/react-bootstrap-table/commit/47cad293e5cd10afa4f9ced5c1d322a6c7a4af0f))

### Features
* Support to customize sort caret([d9799f5](https://github.com/AllenFang/react-bootstrap-table/commit/d9799f567e4be59fb08367b67cee1839f9b201c7))
	* Check [example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/sort/custom-caret-sort-table.js)

<a name="v2.1.1"></a>
# [v2.1.1](https://github.com/AllenFang/react-bootstrap-table/compare/v2.1.0...v2.1.1) (2016-04-01)
### Bug fixes
* Fix the delay search bug(it not real to wait for typing nothing)[d601337](https://github.com/AllenFang/react-bootstrap-table/commit/d60133724c4a53b1bcd7a037476ad30b1168d520)
* Fix a error if cell is empty on date filter([40b4a40](https://github.com/AllenFang/react-bootstrap-table/commit/40b4a4077e3ac171db2f8973bdf6c48a4d0ff3d2))
* Fix a bug when insert row with sort and filter([027c0ec](https://github.com/AllenFang/react-bootstrap-table/commit/027c0ecc6294445116fbc3d6f1c6ffa02997c351))
	* Check [#366](https://github.com/AllenFang/react-bootstrap-table/issues/366)
* Give a workaround for fixing a bug when sort on same field([16d8488](https://github.com/AllenFang/react-bootstrap-table/commit/16d84882e3c0179005c0976fd56cd153233b64ec))
* Fix [#375](https://github.com/AllenFang/react-bootstrap-table/issues/375)([cf28f8f](https://github.com/AllenFang/react-bootstrap-table/commit/cf28f8fa755484f8539c2f9e4e26b116aaed01c7))

### Features
* Allow noDataText to accept JSX([97a08ff](https://github.com/AllenFang/react-bootstrap-table/commit/97a08ff91f88e6c2efdfe2491f99ff84db9243d2))
* Ignore editable configuration when insert row([61b60d1](https://github.com/AllenFang/react-bootstrap-table/commit/61b60d1355110905c3bcfab824658f6dc5d067d9))
	* Check [this comment](https://github.com/AllenFang/react-bootstrap-table/issues/380#issuecomment-204424114)

### Enhancement
* Able to provide extra data with a custom sort function([509ce22](https://github.com/AllenFang/react-bootstrap-table/commit/509ce225ece070142386a235fcbddbd97919ee1f))
	* Check [PR#368](https://github.com/AllenFang/react-bootstrap-table/pull/368)
	* [Example](https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/sort/custom-sort-with-extra-data-table.js)
* Avoid '[object Object]' shown as title on column header([5da38c3](https://github.com/AllenFang/react-bootstrap-table/commit/5da38c399570eada37e93dbba92e2561d6f9ea4b))

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
