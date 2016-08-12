/* eslint no-nested-ternary: 0 */
/* eslint guard-for-in: 0 */
/* eslint no-console: 0 */
/* eslint eqeqeq: 0 */
/* eslint one-var: 0 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Const = require('../Const');

var _Const2 = _interopRequireDefault(_Const);

function _sort(arr, sortField, order, sortFunc, sortFuncExtraData) {
  order = order.toLowerCase();
  var isDesc = order === _Const2['default'].SORT_DESC;
  arr.sort(function (a, b) {
    if (sortFunc) {
      return sortFunc(a, b, order, sortField, sortFuncExtraData);
    } else {
      var valueA = a[sortField] === null ? '' : a[sortField];
      var valueB = b[sortField] === null ? '' : b[sortField];
      if (isDesc) {
        if (typeof valueB === 'string') {
          return valueB.localeCompare(valueA);
        } else {
          return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
        }
      } else {
        if (typeof valueA === 'string') {
          return valueA.localeCompare(valueB);
        } else {
          return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
        }
      }
    }
  });

  return arr;
}

var TableDataStore = (function () {
  function TableDataStore(data) {
    _classCallCheck(this, TableDataStore);

    this.data = data;
    this.colInfos = null;
    this.filteredData = null;
    this.isOnFilter = false;
    this.filterObj = null;
    this.searchText = null;
    this.sortObj = null;
    this.pageObj = {};
    this.selected = [];
    this.multiColumnSearch = false;
    this.showOnlySelected = false;
    this.remote = false; // remote data
  }

  _createClass(TableDataStore, [{
    key: 'setProps',
    value: function setProps(props) {
      this.keyField = props.keyField;
      this.enablePagination = props.isPagination;
      this.colInfos = props.colInfos;
      this.remote = props.remote;
      this.multiColumnSearch = props.multiColumnSearch;
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
      return this.sortObj;
    }
  }, {
    key: 'setSortInfo',
    value: function setSortInfo(order, sortField) {
      this.sortObj = {
        order: order,
        sortField: sortField
      };
    }
  }, {
    key: 'setSelectedRowKey',
    value: function setSelectedRowKey(selectedRowKeys) {
      this.selected = selectedRowKeys;
    }
  }, {
    key: 'getRowByKey',
    value: function getRowByKey(keys) {
      var _this = this;

      return keys.map(function (key) {
        var result = _this.data.filter(function (d) {
          return d[_this.keyField] === key;
        });
        if (result.length !== 0) return result[0];
      });
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
      if (!skipSorting && this.sortObj) {
        this.sort(this.sortObj.order, this.sortObj.sortField);
      }
    }
  }, {
    key: 'ignoreNonSelected',
    value: function ignoreNonSelected() {
      var _this2 = this;

      this.showOnlySelected = !this.showOnlySelected;
      if (this.showOnlySelected) {
        this.isOnFilter = true;
        this.filteredData = this.data.filter(function (row) {
          var result = _this2.selected.find(function (x) {
            return row[_this2.keyField] === x;
          });
          return typeof result !== 'undefined' ? true : false;
        });
      } else {
        this.isOnFilter = false;
      }
    }
  }, {
    key: 'sort',
    value: function sort(order, sortField) {
      this.setSortInfo(order, sortField);

      var currentDisplayData = this.getCurrentDisplayData();
      if (!this.colInfos[sortField]) return this;

      var _colInfos$sortField = this.colInfos[sortField];
      var sortFunc = _colInfos$sortField.sortFunc;
      var sortFuncExtraData = _colInfos$sortField.sortFuncExtraData;

      currentDisplayData = _sort(currentDisplayData, sortField, order, sortFunc, sortFuncExtraData);

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
      var rowKeyCache = undefined;
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
        throw this.keyField + ' can\'t be empty value.';
      }
      var currentDisplayData = this.getCurrentDisplayData();
      currentDisplayData.forEach(function (row) {
        if (row[this.keyField].toString() === newObj[this.keyField].toString()) {
          throw this.keyField + ' ' + newObj[this.keyField] + ' already exists';
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
      if (!newObj[this.keyField] || newObj[this.keyField].toString() === '') {
        throw this.keyField + ' can\'t be empty value.';
      }
      var currentDisplayData = this.getCurrentDisplayData();
      currentDisplayData.forEach(function (row) {
        if (row[this.keyField].toString() === newObj[this.keyField].toString()) {
          throw this.keyField + ' ' + newObj[this.keyField] + ' already exists';
        }
      }, this);

      currentDisplayData.push(newObj);
      if (this.isOnFilter) {
        this.data.push(newObj);
      }
      this._refresh(false);
    }
  }, {
    key: 'remove',
    value: function remove(rowKey) {
      var _this3 = this;

      var currentDisplayData = this.getCurrentDisplayData();
      var result = currentDisplayData.filter(function (row) {
        return rowKey.indexOf(row[_this3.keyField]) === -1;
      });

      if (this.isOnFilter) {
        this.data = this.data.filter(function (row) {
          return rowKey.indexOf(row[_this3.keyField]) === -1;
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
      // if (!targetVal) {
      //   return false;
      // }
      // return (targetVal.getDate() === filterVal.getDate() &&
      //     targetVal.getMonth() === filterVal.getMonth() &&
      //     targetVal.getFullYear() === filterVal.getFullYear());

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
        console.error('Invalid regular expression');
        return true;
      }
    }
  }, {
    key: 'filterCustom',
    value: function filterCustom(targetVal, filterVal, callbackInfo) {
      if (callbackInfo !== null && typeof callbackInfo === 'object') {
        return callbackInfo.callback(targetVal, callbackInfo.callbackParameters);
      }

      return this.filterText(targetVal, filterVal);
    }
  }, {
    key: 'filterText',
    value: function filterText(targetVal, filterVal) {
      if (targetVal.toString().toLowerCase().indexOf(filterVal) === -1) {
        return false;
      }
      return true;
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
      var _this4 = this;

      var filterObj = this.filterObj;
      this.filteredData = source.filter(function (row, r) {
        var valid = true;
        var filterVal = undefined;
        for (var key in filterObj) {
          var targetVal = row[key];
          if (targetVal === null || targetVal === undefined) {
            targetVal = '';
          }

          switch (filterObj[key].type) {
            case _Const2['default'].FILTER_TYPE.NUMBER:
              {
                filterVal = filterObj[key].value.number;
                break;
              }
            case _Const2['default'].FILTER_TYPE.CUSTOM:
              {
                filterVal = typeof filterObj[key].value === 'object' ? undefined : typeof filterObj[key].value === 'string' ? filterObj[key].value.toLowerCase() : filterObj[key].value;
                break;
              }
            case _Const2['default'].FILTER_TYPE.DATE:
              {
                filterVal = filterObj[key].value.date;
                break;
              }
            case _Const2['default'].FILTER_TYPE.REGEX:
              {
                filterVal = filterObj[key].value;
                break;
              }
            default:
              {
                filterVal = typeof filterObj[key].value === 'string' ? filterObj[key].value.toLowerCase() : filterObj[key].value;
                if (filterVal === undefined) {
                  // Support old filter
                  filterVal = filterObj[key].toLowerCase();
                }
                break;
              }
          }
          var format = undefined,
              filterFormatted = undefined,
              formatExtraData = undefined,
              filterValue = undefined;
          if (_this4.colInfos[key]) {
            format = _this4.colInfos[key].format;
            filterFormatted = _this4.colInfos[key].filterFormatted;
            formatExtraData = _this4.colInfos[key].formatExtraData;
            filterValue = _this4.colInfos[key].filterValue;
            if (filterFormatted && format) {
              targetVal = format(row[key], row, formatExtraData, r);
            } else if (filterValue) {
              targetVal = filterValue(row[key], row);
            }
          }

          switch (filterObj[key].type) {
            case _Const2['default'].FILTER_TYPE.NUMBER:
              {
                valid = _this4.filterNumber(targetVal, filterVal, filterObj[key].value.comparator);
                break;
              }
            case _Const2['default'].FILTER_TYPE.DATE:
              {
                valid = _this4.filterDate(targetVal, filterVal, filterObj[key].value.comparator);
                break;
              }
            case _Const2['default'].FILTER_TYPE.REGEX:
              {
                valid = _this4.filterRegex(targetVal, filterVal);
                break;
              }
            case _Const2['default'].FILTER_TYPE.CUSTOM:
              {
                valid = _this4.filterCustom(targetVal, filterVal, filterObj[key].value);
                break;
              }
            default:
              {
                if (filterObj[key].type === _Const2['default'].FILTER_TYPE.SELECT && filterFormatted && filterFormatted && format) {
                  filterVal = format(filterVal, row, formatExtraData, r);
                }
                valid = _this4.filterText(targetVal, filterVal);
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
  }, {
    key: '_search',
    value: function _search(source) {
      var _this5 = this;

      var searchTextArray = [];

      if (this.multiColumnSearch) {
        searchTextArray = this.searchText.split(' ');
      } else {
        searchTextArray.push(this.searchText);
      }
      this.filteredData = source.filter(function (row, r) {
        var keys = Object.keys(row);
        var valid = false;
        // for loops are ugly, but performance matters here.
        // And you cant break from a forEach.
        // http://jsperf.com/for-vs-foreach/66
        for (var i = 0, keysLength = keys.length; i < keysLength; i++) {
          var key = keys[i];
          if (_this5.colInfos[key] && row[key]) {
            var _colInfos$key = _this5.colInfos[key];
            var format = _colInfos$key.format;
            var filterFormatted = _colInfos$key.filterFormatted;
            var filterValue = _colInfos$key.filterValue;
            var formatExtraData = _colInfos$key.formatExtraData;
            var searchable = _colInfos$key.searchable;

            var targetVal = row[key];
            if (searchable) {
              if (filterFormatted && format) {
                targetVal = format(targetVal, row, formatExtraData, r);
              } else if (filterValue) {
                targetVal = filterValue(targetVal, row);
              }
              for (var j = 0, textLength = searchTextArray.length; j < textLength; j++) {
                var filterVal = searchTextArray[j].toLowerCase();
                if (targetVal.toString().toLowerCase().indexOf(filterVal) !== -1) {
                  valid = true;
                  break;
                }
              }
            }
          }
        }
        return valid;
      });
      this.isOnFilter = true;
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

      if (this.remote || !this.enablePagination) {
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
      var _this6 = this;

      return this.data.map(function (row) {
        return row[_this6.keyField];
      });
    }
  }]);

  return TableDataStore;
})();

exports.TableDataStore = TableDataStore;