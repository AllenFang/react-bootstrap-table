/* eslint no-nested-ternary: 0 */
/* eslint guard-for-in: 0 */
/* eslint no-console: 0 */
/* eslint eqeqeq: 0 */
/* eslint one-var: 0 */
import Const from '../Const';

function _sort(arr, sortField, order, sortFunc, sortFuncExtraData) {
  order = order.toLowerCase();
  const isDesc = order === Const.SORT_DESC;
  arr.sort((a, b) => {
    if (sortFunc) {
      return sortFunc(a, b, order, sortField, sortFuncExtraData);
    } else {
      const valueA = a[sortField] === null ? '' : a[sortField];
      const valueB = b[sortField] === null ? '' : b[sortField];
      if (isDesc) {
        if (typeof valueB === 'string') {
          return valueB.localeCompare(valueA);
        } else {
          return valueA > valueB ? -1 : ((valueA < valueB) ? 1 : 0);
        }
      } else {
        if (typeof valueA === 'string') {
          return valueA.localeCompare(valueB);
        } else {
          return valueA < valueB ? -1 : ((valueA > valueB) ? 1 : 0);
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
    if (this.remote) {
      return;
    }

    this._refresh(true);
  }

  getColInfos() {
    return this.colInfos;
  }

  getSortInfo() {
    return this.sortObj;
  }

  setSortInfo(order, sortField) {
    this.sortObj = {
      order: order,
      sortField: sortField
    };
  }

  setSelectedRowKey(selectedRowKeys) {
    this.selected = selectedRowKeys;
  }

  getRowByKey(keys) {
    return keys.map(key => {
      const result = this.data.filter(d => d[this.keyField] === key);
      if (result.length !== 0) return result[0];
    });
  }

  getSelectedRowKeys() {
    return this.selected;
  }

  getCurrentDisplayData() {
    if (this.isOnFilter) return this.filteredData;
    else return this.data;
  }

  _refresh(skipSorting) {
    if (this.isOnFilter) {
      if (this.filterObj !== null) this.filter(this.filterObj);
      if (this.searchText !== null) this.search(this.searchText);
    }
    if (!skipSorting && this.sortObj) {
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
    this.setSortInfo(order, sortField);

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
    this._refresh(false);
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
    this._refresh(false);
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
      if (this.searchText) this._search(this.data);
    } else {
      let source = this.data;
      this.filterObj = filterObj;
      if (this.searchText) {
        this._search(source);
        source = this.filteredData;
      }
      this._filter(source);
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
      if (this.filterObj) this._filter(this.data);
    } else {
      let source = this.data;
      this.searchText = searchText;
      if (this.filterObj) {
        this._filter(source);
        source = this.filteredData;
      }
      this._search(source);
    }
  }

  _filter(source) {
    const filterObj = this.filterObj;
    this.filteredData = source.filter((row, r) => {
      let valid = true;
      let filterVal;
      for (const key in filterObj) {
        let targetVal = row[key];
        if (targetVal === null || targetVal === undefined) {
          targetVal = '';
        }

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
        let format, filterFormatted, formatExtraData, filterValue;
        if (this.colInfos[key]) {
          format = this.colInfos[key].format;
          filterFormatted = this.colInfos[key].filterFormatted;
          formatExtraData = this.colInfos[key].formatExtraData;
          filterValue = this.colInfos[key].filterValue;
          if (filterFormatted && format) {
            targetVal = format(row[key], row, formatExtraData, r);
          } else if (filterValue) {
            targetVal = filterValue(row[key], row);
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
          if (filterObj[key].type === Const.FILTER_TYPE.SELECT &&
            filterFormatted && filterFormatted && format) {
            filterVal = format(filterVal, row, formatExtraData, r);
          }
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

  _search(source) {
    let searchTextArray = [];

    if (this.multiColumnSearch) {
      searchTextArray = this.searchText.split(' ');
    } else {
      searchTextArray.push(this.searchText);
    }
    this.filteredData = source.filter((row, r) => {
      const keys = Object.keys(row);
      let valid = false;
      // for loops are ugly, but performance matters here.
      // And you cant break from a forEach.
      // http://jsperf.com/for-vs-foreach/66
      for (let i = 0, keysLength = keys.length; i < keysLength; i++) {
        const key = keys[i];
        if (this.colInfos[key] && row[key]) {
          const {
            format,
            filterFormatted,
            filterValue,
            formatExtraData,
            searchable
          } = this.colInfos[key];
          let targetVal = row[key];
          if (searchable) {
            if (filterFormatted && format) {
              targetVal = format(targetVal, row, formatExtraData, r);
            } else if (filterValue) {
              targetVal = filterValue(targetVal, row);
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
