/* eslint no-nested-ternary: 0 */
/* eslint guard-for-in: 0 */
/* eslint no-console: 0 */
/* eslint eqeqeq: 0 */
import Const from '../Const';

function _sort(arr, sortField, order, sortFunc, sortFuncExtraData) {
  order = order.toLowerCase();
  const isDesc = order === Const.SORT_DESC;
  arr.sort((a, b) => {
    if (sortFunc) {
      return sortFunc(a, b, order, sortField, sortFuncExtraData);
    } else {
      if (isDesc) {
        if (b[sortField] === null) return false;
        if (a[sortField] === null) return true;
        if (typeof b[sortField] === 'string') {
          return b[sortField].localeCompare(a[sortField]);
        } else {
          return a[sortField] > b[sortField] ? -1 : ((a[sortField] < b[sortField]) ? 1 : 0);
        }
      } else {
        if (b[sortField] === null) return true;
        if (a[sortField] === null) return false;
        if (typeof a[sortField] === 'string') {
          return a[sortField].localeCompare(b[sortField]);
        } else {
          return a[sortField] < b[sortField] ? -1 : ((a[sortField] > b[sortField]) ? 1 : 0);
        }
      }
    }
  });

  return arr;
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
    this._refresh();
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

  _refresh() {
    if (this.isOnFilter) {
      if (this.filterObj !== null) this.filter(this.filterObj);
      if (this.searchText !== null) this.search(this.searchText);
    }
    if (this.sortObj) {
      this.sort(this.sortObj.order, this.sortObj.sortField);
    }
  }

  ignoreNonSelected() {
    this.showOnlySelected = !this.showOnlySelected;
    if (this.showOnlySelected) {
      this.isOnFilter = true;
      this.filteredData = this.data.filter( row => {
        const result = this.selected.find(x => row[this.keyField] === x);
        return typeof result !== 'undefined' ? true : false;
      });
    } else {
      this.isOnFilter = false;
    }
  }

  sort(order, sortField) {
    this.sortObj = { order, sortField };

    let currentDisplayData = this.getCurrentDisplayData();
    if (!this.colInfos[sortField]) return this;

    const { sortFunc, sortFuncExtraData } = this.colInfos[sortField];
    currentDisplayData = _sort(currentDisplayData, sortField, order, sortFunc, sortFuncExtraData);

    return this;
  }

  page(page, sizePerPage) {
    this.pageObj.end = page * sizePerPage - 1;
    this.pageObj.start = this.pageObj.end - (sizePerPage - 1);
    return this;
  }

  edit(newVal, rowIndex, fieldName) {
    const currentDisplayData = this.getCurrentDisplayData();
    let rowKeyCache;
    if (!this.enablePagination) {
      currentDisplayData[rowIndex][fieldName] = newVal;
      rowKeyCache = currentDisplayData[rowIndex][this.keyField];
    } else {
      currentDisplayData[this.pageObj.start + rowIndex][fieldName] = newVal;
      rowKeyCache = currentDisplayData[this.pageObj.start + rowIndex][this.keyField];
    }
    if (this.isOnFilter) {
      this.data.forEach(function(row) {
        if (row[this.keyField] === rowKeyCache) {
          row[fieldName] = newVal;
        }
      }, this);
      if (this.filterObj !== null) this.filter(this.filterObj);
      if (this.searchText !== null) this.search(this.searchText);
    }
    return this;
  }

  addAtBegin(newObj) {
    if (!newObj[this.keyField] || newObj[this.keyField].toString() === '') {
      throw `${this.keyField} can't be empty value.`;
    }
    const currentDisplayData = this.getCurrentDisplayData();
    currentDisplayData.forEach(function(row) {
      if (row[this.keyField].toString() === newObj[this.keyField].toString()) {
        throw `${this.keyField} ${newObj[this.keyField]} already exists`;
      }
    }, this);
    currentDisplayData.unshift(newObj);
    if (this.isOnFilter) {
      this.data.unshift(newObj);
    }
    this._refresh();
  }

  add(newObj) {
    if (!newObj[this.keyField] || newObj[this.keyField].toString() === '') {
      throw `${this.keyField} can't be empty value.`;
    }
    const currentDisplayData = this.getCurrentDisplayData();
    currentDisplayData.forEach(function(row) {
      if (row[this.keyField].toString() === newObj[this.keyField].toString()) {
        throw `${this.keyField} ${newObj[this.keyField]} already exists`;
      }
    }, this);

    currentDisplayData.push(newObj);
    if (this.isOnFilter) {
      this.data.push(newObj);
    }
    this._refresh();
  }

  remove(rowKey) {
    const currentDisplayData = this.getCurrentDisplayData();
    const result = currentDisplayData.filter(row => {
      return rowKey.indexOf(row[this.keyField]) === -1;
    });

    if (this.isOnFilter) {
      this.data = this.data.filter(row => {
        return rowKey.indexOf(row[this.keyField]) === -1;
      });
      this.filteredData = result;
    } else {
      this.data = result;
    }
  }

  filter(filterObj) {
    if (Object.keys(filterObj).length === 0) {
      this.filteredData = null;
      this.isOnFilter = false;
      this.filterObj = null;
      if (this.searchText !== null) this.search(this.searchText);
    } else {
      this.filterObj = filterObj;
      this.filteredData = this.data.filter( row => {
        let valid = true;
        let filterVal;
        for (const key in filterObj) {
          let targetVal = row[key];

          switch (filterObj[key].type) {
          case Const.FILTER_TYPE.NUMBER: {
            filterVal = filterObj[key].value.number;
            break;
          }
          case Const.FILTER_TYPE.CUSTOM: {
            filterVal = (typeof filterObj[key].value === 'object') ?
              undefined :
              (typeof filterObj[key].value === 'string') ?
                filterObj[key].value.toLowerCase() :
                filterObj[key].value;
            break;
          }
          case Const.FILTER_TYPE.DATE: {
            filterVal = filterObj[key].value.date;
            break;
          }
          case Const.FILTER_TYPE.REGEX: {
            filterVal = filterObj[key].value;
            break;
          }
          default: {
            filterVal = (typeof filterObj[key].value === 'string') ?
              filterObj[key].value.toLowerCase() :
              filterObj[key].value;
            if (filterVal === undefined) {
              // Support old filter
              filterVal = filterObj[key].toLowerCase();
            }
            break;
          }
          }

          if (this.colInfos[key]) {
            const { format, filterFormatted, formatExtraData } = this.colInfos[key];
            if (filterFormatted && format) {
              targetVal = format(row[key], row, formatExtraData);
            }
          }

          switch (filterObj[key].type) {
          case Const.FILTER_TYPE.NUMBER: {
            valid = this.filterNumber(targetVal, filterVal, filterObj[key].value.comparator);
            break;
          }
          case Const.FILTER_TYPE.DATE: {
            valid = this.filterDate(targetVal, filterVal, filterObj[key].value.comparator);
            break;
          }
          case Const.FILTER_TYPE.REGEX: {
            valid = this.filterRegex(targetVal, filterVal);
            break;
          }
          case Const.FILTER_TYPE.CUSTOM: {
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
    case '=': {
      if (targetVal != filterVal) {
        valid = false;
      }
      break;
    }
    case '>': {
      if (targetVal <= filterVal) {
        valid = false;
      }
      break;
    }
    case '>=': {
      if (targetVal < filterVal) {
        valid = false;
      }
      break;
    }
    case '<': {
      if (targetVal >= filterVal) {
        valid = false;
      }
      break;
    }
    case '<=': {
      if (targetVal > filterVal) {
        valid = false;
      }
      break;
    }
    case '!=': {
      if (targetVal == filterVal) {
        valid = false;
      }
      break;
    }
    default: {
      console.error('Number comparator provided is not supported');
      break;
    }
    }
    return valid;
  }

  filterDate(targetVal, filterVal, comparator) {
    // if (!targetVal) {
    //   return false;
    // }
    // return (targetVal.getDate() === filterVal.getDate() &&
    //     targetVal.getMonth() === filterVal.getMonth() &&
    //     targetVal.getFullYear() === filterVal.getFullYear());

    let valid = true;
    switch (comparator) {
    case '=': {
      if (targetVal != filterVal) {
        valid = false;
      }
      break;
    }
    case '>': {
      if (targetVal <= filterVal) {
        valid = false;
      }
      break;
    }
    case '>=': {
      // console.log(targetVal);
      // console.log(filterVal);
      // console.log(filterVal.getDate());
      if (targetVal < filterVal) {
        valid = false;
      }
      break;
    }
    case '<': {
      if (targetVal >= filterVal) {
        valid = false;
      }
      break;
    }
    case '<=': {
      if (targetVal > filterVal) {
        valid = false;
      }
      break;
    }
    case '!=': {
      if (targetVal == filterVal) {
        valid = false;
      }
      break;
    }
    default: {
      console.error('Date comparator provided is not supported');
      break;
    }
    }
    return valid;
  }

  filterRegex(targetVal, filterVal) {
    try {
      return new RegExp(filterVal, 'i').test(targetVal);
    } catch (e) {
      console.error('Invalid regular expression');
      return true;
    }
  }

  filterCustom(targetVal, filterVal, callbackInfo) {
    if (callbackInfo !== null && typeof callbackInfo === 'object') {
      return callbackInfo.callback(targetVal, callbackInfo.callbackParameters);
    }

    return this.filterText(targetVal, filterVal);
  }

  filterText(targetVal, filterVal) {
    if (targetVal.toString().toLowerCase().indexOf(filterVal) === -1) {
      return false;
    }
    return true;
  }

  /* General search function
   * It will search for the text if the input includes that text;
   */
  search(searchText) {
    if (searchText.trim() === '') {
      this.filteredData = null;
      this.isOnFilter = false;
      this.searchText = null;
      if (this.filterObj !== null) this.filter(this.filterObj);
    } else {
      this.searchText = searchText;
      let searchTextArray = [];

      if (this.multiColumnSearch) {
        searchTextArray = searchText.split(' ');
      } else {
        searchTextArray.push(searchText);
      }
      // Mark following code for fixing #363
      // To avoid to search on a data which be searched or filtered
      // But this solution have a poor performance, because I do a filter again
      // const source = this.isOnFilter ? this.filteredData : this.data;
      const source = this.filterObj !== null ? this.filter(this.filterObj) : this.data;

      this.filteredData = source.filter( row => {
        const keys = Object.keys(row);
        let valid = false;
        // for loops are ugly, but performance matters here.
        // And you cant break from a forEach.
        // http://jsperf.com/for-vs-foreach/66
        for (let i = 0, keysLength = keys.length; i < keysLength; i++) {
          const key = keys[i];
          if (this.colInfos[key] && row[key]) {
            const { format, filterFormatted, formatExtraData, searchable } = this.colInfos[key];
            let targetVal = row[key];
            if (searchable) {
              if (filterFormatted && format) {
                targetVal = format(targetVal, row, formatExtraData);
              }
              for (let j = 0, textLength = searchTextArray.length; j < textLength; j++) {
                const filterVal = searchTextArray[j].toLowerCase();
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
  }

  getDataIgnoringPagination() {
    return this.getCurrentDisplayData();
  }

  get() {
    const _data = this.getCurrentDisplayData();

    if (_data.length === 0) return _data;

    if (this.remote || !this.enablePagination) {
      return _data;
    } else {
      const result = [];
      for (let i = this.pageObj.start; i <= this.pageObj.end; i++) {
        result.push(_data[i]);
        if (i + 1 === _data.length) break;
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

  isEmpty() {
    return (this.data.length === 0 ||
      this.data === null ||
      this.data === undefined);
  }

  getAllRowkey() {
    return this.data.map(row => {
      return row[this.keyField];
    });
  }
}
