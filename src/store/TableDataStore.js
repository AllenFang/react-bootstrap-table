import Const from "../Const";
var EventEmitter = require('events').EventEmitter;

function _sort(arr, sortField, order, sortFunc) {
  order = order.toLowerCase();
  arr.sort((a, b) => {
    if (sortFunc) {
      return sortFunc(a, b, order);
    } else {
      if (order == Const.SORT_DESC) {
        return a[sortField] > b[sortField] ? -1 : ((a[sortField] < b[sortField]) ? 1 : 0);
      } else {
        return a[sortField] < b[sortField] ? -1 : ((a[sortField] > b[sortField]) ? 1 : 0);
      }
    }
  });

  return arr;
}

export class TableDataSet extends EventEmitter {
  constructor(data) {
    super(data);
    this.data = data;
  }

  setData(data) {
    this.emit('change', data);
  }

  clear() {
    this.data = null;
  }

  getData() {
    return this.data;
  }
}

export class TableDataStore {

  constructor(data) {
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

  setProps(props) {
    this.keyField = props.keyField;
    this.enablePagination = props.isPagination;
    this.colInfos = props.colInfos;
    this.remote = props.remote;
    this.multiColumnSearch = props.multiColumnSearch;
  }

  setData(data) {
    this.data = data;
    if (this.isOnFilter) {
      if (null !== this.filterObj) this.filter(this.filterObj);
      if (null !== this.searchText) this.search(this.searchText);
    }
    if (this.sortObj) {
      this.sort(this.sortObj.order, this.sortObj.sortField);
    }
  }

  getSortInfo() {
    return this.sortObj;
  }

  setSelectedRowKey(selectedRowKeys) {
    this.selected = selectedRowKeys;
  }

  getSelectedRowKeys() {
    return this.selected;
  }

  getCurrentDisplayData() {
    if (this.isOnFilter) return this.filteredData;
    else return this.data;
  }

  ignoreNonSelected() {
    this.showOnlySelected = !this.showOnlySelected;
    if(this.showOnlySelected){
      this.isOnFilter = true;
      this.filteredData = this.data.filter( row => {
        let result = this.selected.find(x => row[this.keyField] === x)
        return typeof result !== 'undefined' ? true : false;
      });
    } else {
      this.isOnFilter = false;
    }
  }

  sort(order, sortField) {
    this.sortObj = {
      order: order,
      sortField: sortField
    };

    let currentDisplayData = this.getCurrentDisplayData();
    if(!this.colInfos[sortField]) return this;

    const { sortFunc } = this.colInfos[sortField];
    currentDisplayData = _sort(currentDisplayData, sortField, order, sortFunc);

    return this;
  }

  page(page, sizePerPage) {
    this.pageObj.end = page * sizePerPage - 1;
    this.pageObj.start = this.pageObj.end - (sizePerPage - 1);
    return this;
  }

  edit(newVal, rowIndex, fieldName) {
    let currentDisplayData = this.getCurrentDisplayData();
    let rowKeyCache;
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
    }
    return this;
  }

  add(newObj) {
    if (!newObj[this.keyField] || newObj[this.keyField].toString() === '') {
      throw this.keyField + " can't be empty value.";
    }
    let currentDisplayData = this.getCurrentDisplayData();
    currentDisplayData.forEach(function (row) {
      if (row[this.keyField].toString() === newObj[this.keyField].toString()) {
        throw this.keyField + " " + newObj[this.keyField] + " already exists";
      }
    }, this);

    currentDisplayData.push(newObj);
    if (this.isOnFilter) {
      this.data.push(newObj);
    }
  }

  remove(rowKey) {
    let currentDisplayData = this.getCurrentDisplayData();
    let result = currentDisplayData.filter(function (row) {
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

  filter(filterObj) {
    if (Object.keys(filterObj).length == 0) {
      this.filteredData = null;
      this.isOnFilter = false;
      this.filterObj = null;
    } else {
      this.filterObj = filterObj;
      this.filteredData = this.data.filter( row => {
        let valid = true;
        let filterVal;
        for (var key in filterObj) {
          let targetVal = row[key];

          switch (filterObj[key].type) {
            case Const.FILTER_TYPE.NUMBER:
            {
              filterVal = filterObj[key].value.number;
              break;
            }
            case Const.FILTER_TYPE.CUSTOM:
            {
              filterVal = (typeof filterObj[key].value === "object") ?
                  undefined :
                  (typeof filterObj[key].value === "string") ? filterObj[key].value.toLowerCase() : filterObj[key].value;
              break;
            }
            default: {
              filterVal = (typeof filterObj[key].value === "string") ? filterObj[key].value.toLowerCase() : filterObj[key].value;
              break;
            }
          }

          if (this.colInfos[key]) {
            const { format, filterFormatted, formatExtraData } = this.colInfos[key];
            if(filterFormatted && format) {
              targetVal = format(row[key], row, formatExtraData);
            }
          }

          switch (filterObj[key].type) {
            case Const.FILTER_TYPE.NUMBER:
            {
              valid = this.filterNumber(targetVal, filterVal, filterObj[key].value.comparator);
              break;
            }
            case Const.FILTER_TYPE.DATE:
            {
              valid = this.filterDate(targetVal, filterVal);
              break;
            }
            case Const.FILTER_TYPE.CUSTOM:
            {
              valid = this.filterCustom(targetVal, filterVal, filterObj[key].value);
              break;
            }
            default: {
              valid = this.filterText(targetVal, filterVal);
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
  }

  filterNumber(targetVal, filterVal, comparator) {
    let valid = true;
    switch (comparator) {
      case "=":
      {
        if (targetVal != filterVal) {
          valid = false;
        }
        break;
      }
      case ">":
      {
        if (targetVal <= filterVal) {
          valid = false;
        }
        break;
      }
      case ">=":
      {
        if (targetVal < filterVal) {
          valid = false;
        }
        break;
      }
      case "<":
      {
        if (targetVal >= filterVal) {
          valid = false;
        }
        break;
      }
      case "<=":
      {
        if (targetVal > filterVal) {
          valid = false;
        }
        break;
      }
      case "!=":
      {
        if (targetVal == filterVal) {
          valid = false;
        }
        break;
      }
      default:
      {
        console.error("Number comparator provided is not supported");
        break;
      }
    }
    return valid;
  }

  filterDate(targetVal, filterVal) {
    return (targetVal.getDate() == filterVal.getDate() &&
        targetVal.getMonth() == filterVal.getMonth() &&
        targetVal.getFullYear() == filterVal.getFullYear());
  }

  filterCustom(targetVal, filterVal, callbackInfo) {
    if (callbackInfo != null && typeof callbackInfo === "object") {
      return callbackInfo.callback(targetVal, callbackInfo.callbackParameters);
    }

    return filterText(targetVal, filterVal);
  }

  filterText(targetVal, filterVal) {
    if (targetVal.toString().toLowerCase().indexOf(filterVal) == -1) {
      return false;
    }

    return true;
  }

  search(searchText) {
    if (searchText.trim() === "") {
      this.filteredData = null;
      this.isOnFilter = false;
      this.searchText = null;
    } else {
      this.searchText = searchText;
      var searchTextArray = [];
      this.filteredData = this.data.filter( row => {
        let valid = false;

        if (this.multiColumnSearch) {
          searchTextArray = searchText.split(' ');
        } else {
          searchTextArray.push(searchText);
        }

        for (var key in row) {
          if (this.colInfos[key] && row[key]) {
            searchTextArray.forEach( text => {
              let filterVal = text.toLowerCase();
              let targetVal = row[key];
              const { format, filterFormatted, formatExtraData } = this.colInfos[key];

              if(filterFormatted && format) {
                targetVal = format(targetVal, row, formatExtraData);
              }
              if (targetVal.toString().toLowerCase().indexOf(filterVal) !== -1) {
                valid = true;
              }
            });
            if (valid) break;
          }
        }
        return valid;
      });
      this.isOnFilter = true;
    }
  }

  getDataIgnoringPagination() {
    let _data = this.getCurrentDisplayData();
    return _data;
  }

  get() {
    let _data = this.getCurrentDisplayData();

    if (_data.length == 0) return _data;

    if (this.remote || !this.enablePagination) {
      return _data;
    } else {
      var result = [];
      for (var i = this.pageObj.start; i <= this.pageObj.end; i++) {
        result.push(_data[i]);
        if (i + 1 == _data.length)break;
      }
      return result;
    }
  }

  getKeyField() {
    return this.keyField;
  }

  getDataNum() {
    return this.getCurrentDisplayData().length;
  }

  isChangedPage() {
    return this.pageObj.start && this.pageObj.end ? true : false;
  }

  getAllRowkey() {
    return this.data.map(function (row) {
      return row[this.keyField];
    }, this);
  }

}
;
