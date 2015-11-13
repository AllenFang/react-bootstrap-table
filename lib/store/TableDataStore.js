'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Const = require("../Const");

var _Const2 = _interopRequireDefault(_Const);

var EventEmitter = require('events').EventEmitter;

function _sort(arr, sortField, order, sortFunc) {
  order = order.toLowerCase();
  arr.sort(function (a, b) {
    if (sortFunc) {
      return sortFunc(a, b, order);
    } else {
      if (order == _Const2['default'].SORT_DESC) {
        return a[sortField] > b[sortField] ? -1 : a[sortField] < b[sortField] ? 1 : 0;
      } else {
        return a[sortField] < b[sortField] ? -1 : a[sortField] > b[sortField] ? 1 : 0;
      }
    }
  });

  return arr;
}

var TableDataSet = (function (_EventEmitter) {
  _inherits(TableDataSet, _EventEmitter);

  function TableDataSet(data) {
    _classCallCheck(this, TableDataSet);

    _get(Object.getPrototypeOf(TableDataSet.prototype), 'constructor', this).call(this, data);
    this.data = data;
  }

  _createClass(TableDataSet, [{
    key: 'setData',
    value: function setData(data) {
      this.emit('change', data);
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.data = null;
    }
  }, {
    key: 'getData',
    value: function getData() {
      return this.data;
    }
  }]);

  return TableDataSet;
})(EventEmitter);

exports.TableDataSet = TableDataSet;

var TableDataStore = (function () {
  function TableDataStore(data) {
    _classCallCheck(this, TableDataStore);

    this.data = data;
    this.customSortFuncMap = null;
    this.filteredData = null;
    this.isOnFilter = false;
    this.filterObj = null;
    this.searchText = null;
    this.sortObj = null;
    this.pageObj = {};
    this.selected = [];
    this.remote = false; // remote data
  }

  _createClass(TableDataStore, [{
    key: 'setProps',
    value: function setProps(isPagination, keyField, customSortFuncMap, remote) {
      this.keyField = keyField;
      this.enablePagination = isPagination;
      this.customSortFuncMap = customSortFuncMap;
      this.remote = remote;
    }
  }, {
    key: 'setData',
    value: function setData(data, multiColumnSearch) {
      this.data = data;
      if (this.isOnFilter) {
        if (null !== this.filterObj) this.filter(this.filterObj);
        if (null !== this.searchText) this.search(this.searchText, multiColumnSearch);
      }
      if (this.sortObj) {
        this.sort(this.sortObj.order, this.sortObj.sortField);
      }
    }
  }, {
    key: 'setSelectedRowKey',
    value: function setSelectedRowKey(selectedRowKeys) {
      this.selected = selectedRowKeys;
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
    key: 'sort',
    value: function sort(order, sortField) {
      this.sortObj = {
        order: order,
        sortField: sortField
      };

      var currentDisplayData = this.getCurrentDisplayData();
      var sortFunc = this.customSortFuncMap[sortField];
      currentDisplayData = _sort(currentDisplayData, sortField, order, sortFunc);

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
            row[this.keyField][fieldName] = newVal;
          }
        }, this);
      }
      return this;
    }
  }, {
    key: 'add',
    value: function add(newObj) {
      if (newObj[this.keyField].trim() === "") {
        throw this.keyField + " can't be empty value.";
      }
      var currentDisplayData = this.getCurrentDisplayData();
      currentDisplayData.forEach(function (row) {
        if (row[this.keyField].toString() === newObj[this.keyField]) {
          throw this.keyField + " " + newObj[this.keyField] + " already exists";
        }
      }, this);

      currentDisplayData.push(newObj);
      if (this.isOnFilter) {
        this.data.push(newObj);
      }
    }
  }, {
    key: 'remove',
    value: function remove(rowKey) {
      var currentDisplayData = this.getCurrentDisplayData();
      var result = currentDisplayData.filter(function (row) {
        return rowKey.indexOf(row[this.keyField]) == -1;
      }, this);

      if (this.isOnFilter) {
        this.data = this.data.filter(function (row) {
          return rowKey.indexOf(row[this.keyField]) == -1;
        }, this);
        this.filteredData = result;
      } else {
        this.data = result;
      }
    }
  }, {
    key: 'filter',
    value: function filter(filterObj) {
      if (Object.keys(filterObj).length == 0) {
        this.filteredData = null;
        this.isOnFilter = false;
        this.filterObj = null;
      } else {
        this.filterObj = filterObj;
        this.filteredData = this.data.filter(function (row) {
          var valid = true;
          for (var key in filterObj) {
            if (row[key].toString().toLowerCase().indexOf(filterObj[key].toLowerCase()) == -1) {
              valid = false;
              break;
            }
          }
          return valid;
        });
        this.isOnFilter = true;
      }
    }
  }, {
    key: 'orModeSearch',
    value: function orModeSearch(searchTextArray) {
      this.filteredData = this.data.filter(function (row) {
        var valid = false;
        var validArray = [];

        for (var key in row) {
          if (row[key]) {
            searchTextArray.forEach(function (text) {
              if (row[key].toString().toLowerCase().indexOf(text.toLowerCase()) !== -1) {
                valid = true;
              }
            });
            if (valid) break;
          }
        }
        return valid;
      });
    }
  }, {
    key: 'andModeSearch',
    value: function andModeSearch(searchTextArray) {
      this.filteredData = this.data.filter(function (row) {
        var validArray = [];
        for (var key in row) {
          if (row[key]) {
            searchTextArray.forEach(function (text) {
              if (row[key].toString().toLowerCase().indexOf(text.toLowerCase()) !== -1) {
                validArray.push(text);
              }
            });
          }
        }

        var valid = true;
        for (var i = 0; i < searchTextArray.length; i++) {
          if (validArray.indexOf(searchTextArray[i]) === -1) {
            valid = false;
            break;
          }
        }

        return valid;
      });
    }
  }, {
    key: 'search',
    value: function search(searchText, multiColumnSearch) {
      if (searchText.trim() === "") {
        this.filteredData = null;
        this.isOnFilter = false;
        this.searchText = null;
      } else {
        this.searchText = searchText;
        var searchTextArray = [];
        var mode = searchText.indexOf(' and ') !== -1 ? 'and' : 'or';

        if (multiColumnSearch) {
          if (mode === 'and') {
            searchTextArray = searchText.split(' and ').filter(function (el) {
              return el.length != 0;
            });;
            if (searchTextArray.length <= 1) mode = 'or';
          } else {
            searchTextArray = searchText.split(' or ');
          }
        } else {
          searchTextArray.push(searchText);
        }

        if (mode === 'and') {
          this.andModeSearch(searchTextArray);
        } else {
          this.orModeSearch(searchTextArray);
        }

        this.isOnFilter = true;
      }
    }
  }, {
    key: 'getDataIgnoringPagination',
    value: function getDataIgnoringPagination() {
      var _data = this.getCurrentDisplayData();
      return _data;
    }
  }, {
    key: 'get',
    value: function get() {
      var _data = this.getCurrentDisplayData();

      if (_data.length == 0) return _data;

      if (this.remote || !this.enablePagination) {
        return _data;
      } else {
        var result = [];
        for (var i = this.pageObj.start; i <= this.pageObj.end; i++) {
          result.push(_data[i]);
          if (i + 1 == _data.length) break;
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
    key: 'getAllRowkey',
    value: function getAllRowkey() {
      return this.data.map(function (row) {
        return row[this.keyField];
      }, this);
    }
  }]);

  return TableDataStore;
})();

exports.TableDataStore = TableDataStore;

;