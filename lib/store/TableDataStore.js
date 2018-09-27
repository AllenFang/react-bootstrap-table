'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableDataStore = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint no-nested-ternary: 0 */
/* eslint guard-for-in: 0 */
/* eslint no-console: 0 */
/* eslint eqeqeq: 0 */
/* eslint one-var: 0 */


var _Const = require('../Const');

var _Const2 = _interopRequireDefault(_Const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TableDataStore = function () {
  function TableDataStore(data) {
    var _this = this;

    _classCallCheck(this, TableDataStore);

    this.isValidKey = function () {
      return _this.__isValidKey__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    this.data = data;
    this.filteredData = null;
    this.isOnFilter = false;
    this.filterObj = null;
    this.searchText = null;
    this.sortList = [];
    this.pageObj = {};
    this.selected = [];
    this.showOnlySelected = false;
  }

  _createClass(TableDataStore, [{
    key: '__isValidKey__REACT_HOT_LOADER__',
    value: function __isValidKey__REACT_HOT_LOADER__() {
      return this.__isValidKey__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: 'setProps',
    value: function setProps(props) {
      this.keyField = props.keyField;
      this.enablePagination = props.isPagination;
      this.colInfos = props.colInfos;
      this.remote = props.remote;
      this.multiColumnSearch = props.multiColumnSearch;
      // default behaviour if strictSearch prop is not provided: !multiColumnSearch
      this.strictSearch = typeof props.strictSearch === 'undefined' ? !props.multiColumnSearch : props.strictSearch;
      this.multiColumnSort = props.multiColumnSort;
    }
  }, {
    key: 'clean',
    value: function clean() {
      this.filteredData = null;
      this.isOnFilter = false;
      this.filterObj = null;
      this.searchText = null;
      this.sortList = [];
      this.pageObj = {};
      this.selected = [];
    }
  }, {
    key: 'isSearching',
    value: function isSearching() {
      return this.searchText !== null;
    }
  }, {
    key: 'isFiltering',
    value: function isFiltering() {
      return this.filterObj !== null;
    }
  }, {
    key: 'setData',
    value: function setData(data) {
      this.data = data;
      if (this.remote) {
        return;
      }

      this._refresh(true);
    }
  }, {
    key: 'getColInfos',
    value: function getColInfos() {
      return this.colInfos;
    }
  }, {
    key: 'getSortInfo',
    value: function getSortInfo() {
      return this.sortList;
    }
  }, {
    key: 'setSortInfo',
    value: function setSortInfo(order, sortField) {
      if ((typeof order === 'undefined' ? 'undefined' : _typeof(order)) !== (typeof sortField === 'undefined' ? 'undefined' : _typeof(sortField))) {
        throw new Error('The type of sort field and order should be both with String or Array');
      }
      if (Array.isArray(order) && Array.isArray(sortField)) {
        if (order.length !== sortField.length) {
          throw new Error('The length of sort fields and orders should be equivalent');
        }
        order = order.slice().reverse();
        this.sortList = sortField.slice().reverse().map(function (field, i) {
          return {
            order: order[i],
            sortField: field
          };
        });
        this.sortList = this.sortList.slice(0, this.multiColumnSort);
      } else {
        var sortObj = {
          order: order,
          sortField: sortField
        };

        if (this.multiColumnSort > 1) {
          var i = this.sortList.length - 1;
          var sortFieldInHistory = false;

          for (; i >= 0; i--) {
            if (this.sortList[i].sortField === sortField) {
              sortFieldInHistory = true;
              break;
            }
          }

          if (sortFieldInHistory) {
            if (i > 0) {
              this.sortList = this.sortList.slice(0, i);
            } else {
              this.sortList = this.sortList.slice(1);
            }
          }

          this.sortList.unshift(sortObj);
          this.sortList = this.sortList.slice(0, this.multiColumnSort);
        } else {
          this.sortList = [sortObj];
        }
      }
    }
  }, {
    key: 'cleanSortInfo',
    value: function cleanSortInfo() {
      this.sortList = [];
    }
  }, {
    key: 'setSelectedRowKey',
    value: function setSelectedRowKey(selectedRowKeys) {
      this.selected = selectedRowKeys;
    }
  }, {
    key: 'getRowByKey',
    value: function getRowByKey(keys) {
      var _this2 = this;

      // Bad Performance #1164
      // return keys.map(key => {
      //   const result = this.data.filter(d => d[this.keyField] === key);
      //   if (result.length !== 0) return result[0];
      // });
      var result = [];
      if (!keys || keys.length === 0) {
        return result;
      }

      var _loop = function _loop(i) {
        var d = _this2.data[i];
        if (keys.indexOf(d[_this2.keyField]) > -1) {
          keys = keys.filter(function (k) {
            return k !== d[_this2.keyField];
          });
          result.push(d);
        }
      };

      for (var i = 0; i < this.data.length; i++) {
        _loop(i);
      }
      return result;
    }
  }, {
    key: 'getSelectedRowKeys',
    value: function getSelectedRowKeys() {
      return this.selected;
    }
  }, {
    key: 'getCurrentDisplayData',
    value: function getCurrentDisplayData() {
      if (this.isOnFilter) return this.filteredData;else return this.data;
    }
  }, {
    key: '_refresh',
    value: function _refresh(skipSorting) {
      if (this.isOnFilter) {
        if (this.filterObj !== null) this.filter(this.filterObj);
        if (this.searchText !== null) this.search(this.searchText);
      }
      if (!skipSorting && this.sortList.length > 0) {
        this.sort();
      }
    }
  }, {
    key: 'ignoreNonSelected',
    value: function ignoreNonSelected() {
      var _this3 = this;

      this.showOnlySelected = !this.showOnlySelected;
      if (this.showOnlySelected) {
        this.isOnFilter = true;
        this.filteredData = this.data.filter(function (row) {
          var result = _this3.selected.find(function (x) {
            return row[_this3.keyField] === x;
          });
          return typeof result !== 'undefined' ? true : false;
        });
      } else {
        this.isOnFilter = false;
      }
    }
  }, {
    key: 'sort',
    value: function sort() {
      var currentDisplayData = this.getCurrentDisplayData();

      currentDisplayData = this._sort(currentDisplayData);

      return this;
    }
  }, {
    key: 'page',
    value: function page(_page, sizePerPage) {
      this.pageObj.end = _page * sizePerPage - 1;
      this.pageObj.start = this.pageObj.end - (sizePerPage - 1);
      return this;
    }
  }, {
    key: 'edit',
    value: function edit(newVal, rowIndex, fieldName) {
      var currentDisplayData = this.getCurrentDisplayData();
      var rowKeyCache = void 0;
      if (!this.enablePagination) {
        currentDisplayData[rowIndex][fieldName] = newVal;
        rowKeyCache = currentDisplayData[rowIndex][this.keyField];
      } else {
        currentDisplayData[this.pageObj.start + rowIndex][fieldName] = newVal;
        rowKeyCache = currentDisplayData[this.pageObj.start + rowIndex][this.keyField];
      }
      if (this.isOnFilter) {
        this.data.forEach(function (row) {
          if (row[this.keyField] === rowKeyCache) {
            row[fieldName] = newVal;
          }
        }, this);
        if (this.filterObj !== null) this.filter(this.filterObj);
        if (this.searchText !== null) this.search(this.searchText);
      }
      return this;
    }
  }, {
    key: 'addAtBegin',
    value: function addAtBegin(newObj) {
      if (!newObj[this.keyField] || newObj[this.keyField].toString() === '') {
        throw new Error(this.keyField + ' can\'t be empty value.');
      }
      var currentDisplayData = this.getCurrentDisplayData();
      currentDisplayData.forEach(function (row) {
        if (row[this.keyField].toString() === newObj[this.keyField].toString()) {
          throw new Error(this.keyField + ' ' + newObj[this.keyField] + ' already exists');
        }
      }, this);
      currentDisplayData.unshift(newObj);
      if (this.isOnFilter) {
        this.data.unshift(newObj);
      }
      this._refresh(false);
    }
  }, {
    key: 'add',
    value: function add(newObj) {
      var e = this.isValidKey(newObj[this.keyField]);
      if (e) throw new Error(e);

      var currentDisplayData = this.getCurrentDisplayData();
      currentDisplayData.push(newObj);
      if (this.isOnFilter) {
        this.data.push(newObj);
      }
      this._refresh(false);
    }
  }, {
    key: '__isValidKey__REACT_HOT_LOADER__',
    value: function __isValidKey__REACT_HOT_LOADER__(key) {
      var _this4 = this;

      if (key === null || key === undefined || key.toString() === '') {
        return this.keyField + ' can\'t be empty value.';
      }
      var currentDisplayData = this.getCurrentDisplayData();
      var exist = currentDisplayData.find(function (row) {
        return row[_this4.keyField].toString() === key.toString();
      });
      if (exist) return this.keyField + ' ' + key + ' already exists';
    }
  }, {
    key: 'remove',
    value: function remove(rowKey) {
      var _this5 = this;

      var currentDisplayData = this.getCurrentDisplayData();
      var result = currentDisplayData.filter(function (row) {
        return rowKey.indexOf(row[_this5.keyField]) === -1;
      });

      if (this.isOnFilter) {
        this.data = this.data.filter(function (row) {
          return rowKey.indexOf(row[_this5.keyField]) === -1;
        });
        this.filteredData = result;
      } else {
        this.data = result;
      }
    }
  }, {
    key: 'filter',
    value: function filter(filterObj) {
      if (Object.keys(filterObj).length === 0) {
        this.filteredData = null;
        this.isOnFilter = false;
        this.filterObj = null;
        if (this.searchText) this._search(this.data);
      } else {
        var source = this.data;
        this.filterObj = filterObj;
        if (this.searchText) {
          this._search(source);
          source = this.filteredData;
        }
        this._filter(source);
      }
    }
  }, {
    key: 'filterNumber',
    value: function filterNumber(targetVal, filterVal, comparator) {
      var valid = true;
      switch (comparator) {
        case '=':
          {
            if (targetVal != filterVal) {
              valid = false;
            }
            break;
          }
        case '>':
          {
            if (targetVal <= filterVal) {
              valid = false;
            }
            break;
          }
        case '>=':
          {
            if (targetVal < filterVal) {
              valid = false;
            }
            break;
          }
        case '<':
          {
            if (targetVal >= filterVal) {
              valid = false;
            }
            break;
          }
        case '<=':
          {
            if (targetVal > filterVal) {
              valid = false;
            }
            break;
          }
        case '!=':
          {
            if (targetVal == filterVal) {
              valid = false;
            }
            break;
          }
        default:
          {
            console.error('Number comparator provided is not supported');
            break;
          }
      }
      return valid;
    }
  }, {
    key: 'filterDate',
    value: function filterDate(targetVal, filterVal, comparator) {
      if (!targetVal) return false;

      var filterDate = filterVal.getDate();
      var filterMonth = filterVal.getMonth();
      var filterYear = filterVal.getFullYear();

      if ((typeof targetVal === 'undefined' ? 'undefined' : _typeof(targetVal)) !== 'object') {
        targetVal = new Date(targetVal);
      }

      var targetDate = targetVal.getDate();
      var targetMonth = targetVal.getMonth();
      var targetYear = targetVal.getFullYear();

      var valid = true;
      switch (comparator) {
        case '=':
          {
            if (filterDate !== targetDate || filterMonth !== targetMonth || filterYear !== targetYear) {
              valid = false;
            }
            break;
          }
        case '>':
          {
            if (targetVal <= filterVal) {
              valid = false;
            }
            break;
          }
        case '>=':
          {
            if (targetYear < filterYear) {
              valid = false;
            } else if (targetYear === filterYear && targetMonth < filterMonth) {
              valid = false;
            } else if (targetYear === filterYear && targetMonth === filterMonth && targetDate < filterDate) {
              valid = false;
            }
            break;
          }
        case '<':
          {
            if (targetVal >= filterVal) {
              valid = false;
            }
            break;
          }
        case '<=':
          {
            if (targetYear > filterYear) {
              valid = false;
            } else if (targetYear === filterYear && targetMonth > filterMonth) {
              valid = false;
            } else if (targetYear === filterYear && targetMonth === filterMonth && targetDate > filterDate) {
              valid = false;
            }
            break;
          }
        case '!=':
          {
            if (filterDate === targetDate && filterMonth === targetMonth && filterYear === targetYear) {
              valid = false;
            }
            break;
          }
        default:
          {
            console.error('Date comparator provided is not supported');
            break;
          }
      }
      return valid;
    }
  }, {
    key: 'filterRegex',
    value: function filterRegex(targetVal, filterVal) {
      try {
        return new RegExp(filterVal, 'i').test(targetVal);
      } catch (e) {
        return true;
      }
    }
  }, {
    key: 'filterCustom',
    value: function filterCustom(targetVal, filterVal, callbackInfo, cond) {
      if (callbackInfo !== null && (typeof callbackInfo === 'undefined' ? 'undefined' : _typeof(callbackInfo)) === 'object') {
        return callbackInfo.callback(targetVal, callbackInfo.callbackParameters);
      }

      return this.filterText(targetVal, filterVal, cond);
    }
  }, {
    key: 'filterText',
    value: function filterText() {
      var targetVal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var filterVal = arguments[1];
      var cond = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _Const2.default.FILTER_COND_LIKE;

      targetVal = targetVal === null ? '' : targetVal.toString();
      filterVal = filterVal.toString();
      if (cond === _Const2.default.FILTER_COND_EQ) {
        return targetVal === filterVal;
      } else {
        targetVal = targetVal.toLowerCase();
        filterVal = filterVal.toLowerCase();
        return !(targetVal.indexOf(filterVal) === -1);
      }
    }

    /**
     * Filter if targetVal is contained in filterVal.
     */

  }, {
    key: 'filterArray',
    value: function filterArray(targetVal, filterVal) {
      // case insensitive
      return filterVal.indexOf(targetVal) > -1;
    }

    /* General search function
     * It will search for the text if the input includes that text;
     */

  }, {
    key: 'search',
    value: function search(searchText) {
      if (searchText.trim() === '') {
        this.filteredData = null;
        this.isOnFilter = false;
        this.searchText = null;
        if (this.filterObj) this._filter(this.data);
      } else {
        var source = this.data;
        this.searchText = searchText;
        if (this.filterObj) {
          this._filter(source);
          source = this.filteredData;
        }
        this._search(source);
      }
    }
  }, {
    key: '_filter',
    value: function _filter(source) {
      var _this6 = this;

      var filterObj = this.filterObj;
      this.filteredData = source.filter(function (row, r) {
        var valid = true;
        var filterVal = void 0;
        for (var key in filterObj) {
          var targetVal = row[key];
          if (targetVal === null || targetVal === undefined) {
            targetVal = '';
          }

          switch (filterObj[key].type) {
            case _Const2.default.FILTER_TYPE.NUMBER:
              {
                filterVal = filterObj[key].value.number;
                break;
              }
            case _Const2.default.FILTER_TYPE.CUSTOM:
              {
                filterVal = _typeof(filterObj[key].value) === 'object' ? undefined : typeof filterObj[key].value === 'string' ? filterObj[key].value.toLowerCase() : filterObj[key].value;
                break;
              }
            case _Const2.default.FILTER_TYPE.DATE:
              {
                filterVal = filterObj[key].value.date;
                break;
              }
            case _Const2.default.FILTER_TYPE.REGEX:
              {
                filterVal = filterObj[key].value;
                break;
              }
            case _Const2.default.FILTER_TYPE.ARRAY:
              {
                filterVal = filterObj[key].value;
                if (!Array.isArray(filterVal)) {
                  throw new Error('Value must be an Array');
                }
                break;
              }
            default:
              {
                filterVal = filterObj[key].value;
                if (filterVal === undefined) {
                  // Support old filter
                  filterVal = filterObj[key];
                }
                break;
              }
          }
          var format = void 0,
              filterFormatted = void 0,
              formatExtraData = void 0,
              filterValue = void 0;
          if (_this6.colInfos[key]) {
            format = _this6.colInfos[key].format;
            filterFormatted = _this6.colInfos[key].filterFormatted;
            formatExtraData = _this6.colInfos[key].formatExtraData;
            filterValue = _this6.colInfos[key].filterValue;
            if (filterFormatted && format) {
              targetVal = format(row[key], row, formatExtraData, r);
            } else if (filterValue) {
              targetVal = filterValue(row[key], row);
            }
          }

          switch (filterObj[key].type) {
            case _Const2.default.FILTER_TYPE.NUMBER:
              {
                valid = _this6.filterNumber(targetVal, filterVal, filterObj[key].value.comparator);
                break;
              }
            case _Const2.default.FILTER_TYPE.DATE:
              {
                valid = _this6.filterDate(targetVal, filterVal, filterObj[key].value.comparator);
                break;
              }
            case _Const2.default.FILTER_TYPE.REGEX:
              {
                valid = _this6.filterRegex(targetVal, filterVal);
                break;
              }
            case _Const2.default.FILTER_TYPE.CUSTOM:
              {
                var cond = filterObj[key].props ? filterObj[key].props.cond : _Const2.default.FILTER_COND_LIKE;
                valid = _this6.filterCustom(targetVal, filterVal, filterObj[key].value, cond);
                break;
              }
            case _Const2.default.FILTER_TYPE.ARRAY:
              {
                valid = _this6.filterArray(targetVal, filterVal);
                break;
              }
            default:
              {
                if (filterObj[key].type === _Const2.default.FILTER_TYPE.SELECT && filterFormatted && filterFormatted && format) {
                  filterVal = format(filterVal, row, formatExtraData, r);
                }
                var _cond = filterObj[key].props ? filterObj[key].props.cond : _Const2.default.FILTER_COND_LIKE;
                valid = _this6.filterText(targetVal, filterVal, _cond);
                break;
              }
          }
          if (!valid) {
            break;
          }
        }
        return valid;
      });
      this.isOnFilter = true;
    }

    /*
     * Four different sort modes, all case insensitive:
     * (1) strictSearch && !multiColumnSearch
     *     search text must be contained as provided in a single column
     * (2) strictSearch && multiColumnSearch
     *     conjunction (AND combination) of whitespace separated terms over multiple columns
     * (3) !strictSearch && !multiColumnSearch
     *     conjunction (AND combination) of whitespace separated terms in a single column
     * (4) !strictSearch && multiColumnSearch
     *     any of the whitespace separated terms must be contained in any column
     */

  }, {
    key: '_search',
    value: function _search(source) {
      var _this7 = this;

      var searchTextArray = void 0;
      if (this.multiColumnSearch || !this.strictSearch) {
        // ignore leading and trailing whitespaces
        searchTextArray = this.searchText.trim().toLowerCase().split(/\s+/);
      } else {
        searchTextArray = [this.searchText.toLowerCase()];
      }
      var searchTermCount = searchTextArray.length;
      var multipleTerms = searchTermCount > 1;
      var nonStrictMultiCol = multipleTerms && !this.strictSearch && this.multiColumnSearch;
      var nonStrictSingleCol = multipleTerms && !this.strictSearch && !this.multiColumnSearch;
      this.filteredData = source.filter(function (row, r) {
        var keys = Object.keys(row);
        // only clone array if necessary
        var searchTerms = multipleTerms ? searchTextArray.slice() : searchTextArray;
        // for loops are ugly, but performance matters here.
        // And you cant break from a forEach.
        // http://jsperf.com/for-vs-foreach/66
        for (var i = 0, keysLength = keys.length; i < keysLength; i++) {
          var key = keys[i];
          var colInfo = _this7.colInfos[key];
          if (colInfo && colInfo.searchable) {
            var format = colInfo.format,
                filterFormatted = colInfo.filterFormatted,
                filterValue = colInfo.filterValue,
                formatExtraData = colInfo.formatExtraData;

            var targetVal = void 0;
            if (filterFormatted && format) {
              targetVal = format(row[key], row, formatExtraData, r);
            } else if (filterValue) {
              targetVal = filterValue(row[key], row);
            } else {
              targetVal = row[key];
            }
            if (targetVal !== null && typeof targetVal !== 'undefined') {
              targetVal = targetVal.toString().toLowerCase();
              if (nonStrictSingleCol && searchTermCount > searchTerms.length) {
                // reset search terms for single column search
                searchTerms = searchTextArray.slice();
              }
              for (var j = searchTerms.length - 1; j > -1; j--) {
                if (targetVal.indexOf(searchTerms[j]) !== -1) {
                  if (nonStrictMultiCol || searchTerms.length === 1) {
                    // match found: the last or only one
                    return true;
                  }
                  // match found: but there are more search terms to check for
                  searchTerms.splice(j, 1);
                } else if (!_this7.multiColumnSearch) {
                  // one of the search terms was not found in this column
                  break;
                }
              }
            }
          }
        }
        return false;
      });
      this.isOnFilter = true;
    }
  }, {
    key: '_sort',
    value: function _sort(arr) {
      var _this8 = this;

      if (this.sortList.length === 0 || typeof this.sortList[0] === 'undefined') {
        return arr;
      }

      arr.sort(function (a, b) {
        var result = 0;

        for (var i = 0; i < _this8.sortList.length; i++) {
          var sortDetails = _this8.sortList[i];
          var isDesc = sortDetails.order.toLowerCase() === _Const2.default.SORT_DESC;

          var _colInfos$sortDetails = _this8.colInfos[sortDetails.sortField],
              sortFunc = _colInfos$sortDetails.sortFunc,
              sortFuncExtraData = _colInfos$sortDetails.sortFuncExtraData;


          if (sortFunc) {
            result = sortFunc(a, b, sortDetails.order, sortDetails.sortField, sortFuncExtraData);
          } else {
            var valueA = a[sortDetails.sortField] == null ? '' : a[sortDetails.sortField];
            var valueB = b[sortDetails.sortField] == null ? '' : b[sortDetails.sortField];

            if (isDesc) {
              if (typeof valueB === 'string') {
                result = valueB.localeCompare(valueA);
              } else {
                result = valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
              }
            } else {
              if (typeof valueA === 'string') {
                result = valueA.localeCompare(valueB);
              } else {
                result = valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
              }
            }
          }

          if (result !== 0) {
            return result;
          }
        }

        return result;
      });

      return arr;
    }
  }, {
    key: 'getDataIgnoringPagination',
    value: function getDataIgnoringPagination() {
      return this.getCurrentDisplayData();
    }
  }, {
    key: 'get',
    value: function get() {
      var _data = this.getCurrentDisplayData();

      if (_data.length === 0) return _data;

      var remote = typeof this.remote === 'function' ? this.remote(_Const2.default.REMOTE)[_Const2.default.REMOTE_PAGE] : this.remote;

      if (remote || !this.enablePagination) {
        return _data;
      } else {
        var result = [];
        for (var i = this.pageObj.start; i <= this.pageObj.end; i++) {
          result.push(_data[i]);
          if (i + 1 === _data.length) break;
        }
        return result;
      }
    }
  }, {
    key: 'getKeyField',
    value: function getKeyField() {
      return this.keyField;
    }
  }, {
    key: 'getDataNum',
    value: function getDataNum() {
      return this.getCurrentDisplayData().length;
    }
  }, {
    key: 'isChangedPage',
    value: function isChangedPage() {
      return this.pageObj.start && this.pageObj.end ? true : false;
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      return this.data.length === 0 || this.data === null || this.data === undefined;
    }
  }, {
    key: 'getAllRowkey',
    value: function getAllRowkey() {
      var _this9 = this;

      return this.data.map(function (row) {
        return row[_this9.keyField];
      });
    }
  }]);

  return TableDataStore;
}();

exports.TableDataStore = TableDataStore;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TableDataStore, 'TableDataStore', '/home/nogi/nogi/forks/react-bootstrap-table/src/store/TableDataStore.js');
}();

;