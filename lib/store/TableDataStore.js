"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Const = _interopRequire(require("../Const"));

var EventEmitter = require("events").EventEmitter;

function _sort(arr, sortField, order, sortFunc) {
  order = order.toLowerCase();
  arr.sort(function (a, b) {
    if (sortFunc) {
      return sortFunc(a, b, order);
    } else {
      if (order == Const.SORT_DESC) {
        return a[sortField] > b[sortField] ? -1 : a[sortField] < b[sortField] ? 1 : 0;
      } else {
        return a[sortField] < b[sortField] ? -1 : a[sortField] > b[sortField] ? 1 : 0;
      }
    }
  });

  return arr;
}

var TableDataSet = exports.TableDataSet = (function (_EventEmitter) {
  function TableDataSet(data) {
    _classCallCheck(this, TableDataSet);

    _get(Object.getPrototypeOf(TableDataSet.prototype), "constructor", this).call(this, data);
    this.data = data;
  }

  _inherits(TableDataSet, _EventEmitter);

  _createClass(TableDataSet, {
    setData: {
      value: function setData(data) {
        this.emit("change", data);
      }
    },
    clear: {
      value: function clear() {
        this.data = null;
      }
    },
    getData: {
      value: function getData() {
        return this.data;
      }
    }
  });

  return TableDataSet;
})(EventEmitter);

var TableDataStore = exports.TableDataStore = (function () {
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
  }

  _createClass(TableDataStore, {
    setProps: {
      value: function setProps(isPagination, keyField, customSortFuncMap) {
        this.keyField = keyField;
        this.enablePagination = isPagination;
        this.customSortFuncMap = customSortFuncMap;
      }
    },
    setData: {
      value: function setData(data) {
        this.data = data;
        if (this.isOnFilter) {
          if (null !== this.filterObj) this.filter(this.filterObj);
          if (null !== this.searchText) this.search(this.searchText);
        }
        if (this.sortObj) {
          this.sort(this.sortObj.order, this.sortObj.sortField);
        }
      }
    },
    setSelectedRowKey: {
      value: function setSelectedRowKey(selectedRowKeys) {
        this.selected = selectedRowKeys;
      }
    },
    getSelectedRowKeys: {
      value: function getSelectedRowKeys() {
        return this.selected;
      }
    },
    getCurrentDisplayData: {
      value: function getCurrentDisplayData() {
        if (this.isOnFilter) {
          return this.filteredData;
        } else {
          return this.data;
        }
      }
    },
    sort: {
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
    },
    page: {
      value: (function (_page) {
        var _pageWrapper = function page(_x, _x2) {
          return _page.apply(this, arguments);
        };

        _pageWrapper.toString = function () {
          return _page.toString();
        };

        return _pageWrapper;
      })(function (page, sizePerPage) {
        this.pageObj.end = page * sizePerPage - 1;
        this.pageObj.start = this.pageObj.end - (sizePerPage - 1);
        return this;
      })
    },
    edit: {
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
    },
    add: {
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
    },
    remove: {
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
    },
    filter: {
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
    },
    search: {
      value: function search(searchText) {
        if (searchText.trim() === "") {
          this.filteredData = null;
          this.isOnFilter = false;
          this.searchText = null;
        } else {
          this.searchText = searchText;
          this.filteredData = this.data.filter(function (row) {
            var valid = false;
            for (var key in row) {
              if (row[key] && row[key].toString().toLowerCase().indexOf(searchText.toLowerCase()) !== -1) {
                valid = true;
                break;
              }
            }
            return valid;
          });
          this.isOnFilter = true;
        }
      }
    },
    get: {
      value: function get() {
        var _data = this.getCurrentDisplayData();

        if (_data.length == 0) {
          return _data;
        }if (!this.enablePagination) {
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
    },
    getKeyField: {
      value: function getKeyField() {
        return this.keyField;
      }
    },
    getDataNum: {
      value: function getDataNum() {
        return this.getCurrentDisplayData().length;
      }
    },
    getAllRowkey: {
      value: function getAllRowkey() {
        return this.data.map(function (row) {
          return row[this.keyField];
        }, this);
      }
    }
  });

  return TableDataStore;
})();

;