/* eslint no-nested-ternary: 0 */
/* eslint guard-for-in: 0 */
/* eslint no-console: 0 */
/* eslint eqeqeq: 0 */
/* eslint one-var: 0 */
import Const from '../Const';

export class TableDataStore {

  constructor(data) {
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

  setProps(props) {
    this.keyField = props.keyField;
    this.enablePagination = props.isPagination;
    this.colInfos = props.colInfos;
    this.remote = props.remote;
    this.multiColumnSearch = props.multiColumnSearch;
    // default behaviour if strictSearch prop is not provided: !multiColumnSearch
    this.strictSearch = typeof props.strictSearch === 'undefined' ?
        !props.multiColumnSearch : props.strictSearch;
    this.multiColumnSort = props.multiColumnSort;
  }

  clean() {
    this.filteredData = null;
    this.isOnFilter = false;
    this.filterObj = null;
    this.searchText = null;
    this.sortList = [];
    this.pageObj = {};
    this.selected = [];
  }

  isSearching() {
    return this.searchText !== null;
  }

  isFiltering() {
    return this.filterObj !== null;
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
    return this.sortList;
  }

  setSortInfo(order, sortField) {
    if (typeof order !== typeof sortField) {
      throw new Error('The type of sort field and order should be both with String or Array');
    }
    if (Array.isArray(order) && Array.isArray(sortField)) {
      if (order.length !== sortField.length) {
        throw new Error('The length of sort fields and orders should be equivalent');
      }
      order = order.slice().reverse();
      this.sortList = sortField.slice().reverse().map((field, i) => {
        return {
          order: order[i],
          sortField: field
        };
      });
      this.sortList = this.sortList.slice(0, this.multiColumnSort);
    } else {
      const sortObj = {
        order: order,
        sortField: sortField
      };

      if (this.multiColumnSort > 1) {
        let i = this.sortList.length - 1;
        let sortFieldInHistory = false;

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
        this.sortList = [ sortObj ];
      }
    }
  }

  cleanSortInfo() {
    this.sortList = [];
  }

  setSelectedRowKey(selectedRowKeys) {
    this.selected = selectedRowKeys;
  }

  getRowByKey(keys) {
    // Bad Performance #1164
    // return keys.map(key => {
    //   const result = this.data.filter(d => d[this.keyField] === key);
    //   if (result.length !== 0) return result[0];
    // });
    const result = [];
    if (!keys || keys.length === 0) {
      return result;
    }
    for (let i = 0; i < this.data.length; i++) {
      const d = this.data[i];
      if (keys.indexOf(d[this.keyField]) > -1) {
        keys = keys.filter(k => k !== d[this.keyField]);
        result.push(d);
      }
    }
    return result;
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
    if (!skipSorting && this.sortList.length > 0) {
      this.sort();
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

  sort() {
    let currentDisplayData = this.getCurrentDisplayData();

    currentDisplayData = this._sort(currentDisplayData);

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
      throw new Error(`${this.keyField} can't be empty value.`);
    }
    const currentDisplayData = this.getCurrentDisplayData();
    currentDisplayData.forEach(function(row) {
      if (row[this.keyField].toString() === newObj[this.keyField].toString()) {
        throw new Error(`${this.keyField} ${newObj[this.keyField]} already exists`);
      }
    }, this);
    currentDisplayData.unshift(newObj);
    if (this.isOnFilter) {
      this.data.unshift(newObj);
    }
    this._refresh(false);
  }

  add(newObj) {
    const e = this.isValidKey(newObj[this.keyField]);
    if (e) throw new Error(e);

    const currentDisplayData = this.getCurrentDisplayData();
    currentDisplayData.push(newObj);
    if (this.isOnFilter) {
      this.data.push(newObj);
    }
    this._refresh(false);
  }

  isValidKey = key => {
    if (key === null || key === undefined || key.toString() === '') {
      return `${this.keyField} can't be empty value.`;
    }
    const currentDisplayData = this.getCurrentDisplayData();
    const exist = currentDisplayData.find(row => row[this.keyField].toString() === key.toString());
    if (exist) return `${this.keyField} ${key} already exists`;
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
    if (!targetVal) return false;

    const filterDate = filterVal.getDate();
    const filterMonth = filterVal.getMonth();
    const filterYear = filterVal.getFullYear();

    if (typeof targetVal !== 'object') {
      targetVal = new Date(targetVal);
    }

    const targetDate = targetVal.getDate();
    const targetMonth = targetVal.getMonth();
    const targetYear = targetVal.getFullYear();

    let valid = true;
    switch (comparator) {
    case '=': {
      if (filterDate !== targetDate ||
        filterMonth !== targetMonth ||
        filterYear !== targetYear) {
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
      if (targetYear < filterYear) {
        valid = false;
      } else if (targetYear === filterYear &&
        targetMonth < filterMonth) {
        valid = false;
      } else if (targetYear === filterYear &&
        targetMonth === filterMonth &&
        targetDate < filterDate) {
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
      if (targetYear > filterYear) {
        valid = false;
      } else if (targetYear === filterYear &&
        targetMonth > filterMonth) {
        valid = false;
      } else if (targetYear === filterYear &&
        targetMonth === filterMonth &&
        targetDate > filterDate) {
        valid = false;
      }
      break;
    }
    case '!=': {
      if (filterDate === targetDate &&
        filterMonth === targetMonth &&
        filterYear === targetYear) {
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
      return true;
    }
  }

  filterCustom(targetVal, filterVal, callbackInfo, cond) {
    if (callbackInfo !== null && typeof callbackInfo === 'object') {
      return callbackInfo.callback(targetVal, callbackInfo.callbackParameters);
    }

    return this.filterText(targetVal, filterVal, cond);
  }

  filterText(targetVal, filterVal, cond = Const.FILTER_COND_LIKE) {
    targetVal = targetVal.toString();
    filterVal = filterVal.toString();
    if (cond === Const.FILTER_COND_EQ) {
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
  filterArray(targetVal, filterVal) {
    // case insensitive
    return filterVal.indexOf(targetVal) > -1;
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
        case Const.FILTER_TYPE.ARRAY: {
          filterVal = filterObj[key].value;
          if (!Array.isArray(filterVal)) {
            throw new Error('Value must be an Array');
          }
          break;
        }
        default: {
          filterVal = filterObj[key].value;
          if (filterVal === undefined) {
            // Support old filter
            filterVal = filterObj[key];
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
          const cond = filterObj[key].props ? filterObj[key].props.cond : Const.FILTER_COND_LIKE;
          valid = this.filterCustom(targetVal, filterVal, filterObj[key].value, cond);
          break;
        }
        case Const.FILTER_TYPE.ARRAY: {
          valid = this.filterArray(targetVal, filterVal);
          break;
        }
        default: {
          if (filterObj[key].type === Const.FILTER_TYPE.SELECT &&
            filterFormatted && filterFormatted && format) {
            filterVal = format(filterVal, row, formatExtraData, r);
          }
          const cond = filterObj[key].props ? filterObj[key].props.cond : Const.FILTER_COND_LIKE;
          valid = this.filterText(targetVal, filterVal, cond);
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
  _search(source) {
    let searchTextArray;
    if (this.multiColumnSearch || !this.strictSearch) {
      // ignore leading and trailing whitespaces
      searchTextArray = this.searchText.trim().toLowerCase().split(/\s+/);
    } else {
      searchTextArray = [ this.searchText.toLowerCase() ];
    }
    const searchTermCount = searchTextArray.length;
    const multipleTerms = searchTermCount > 1;
    const nonStrictMultiCol = multipleTerms && !this.strictSearch && this.multiColumnSearch;
    const nonStrictSingleCol = multipleTerms && !this.strictSearch && !this.multiColumnSearch;
    this.filteredData = source.filter((row, r) => {
      const keys = Object.keys(row);
      // only clone array if necessary
      let searchTerms = multipleTerms ? searchTextArray.slice() : searchTextArray;
      // for loops are ugly, but performance matters here.
      // And you cant break from a forEach.
      // http://jsperf.com/for-vs-foreach/66
      for (let i = 0, keysLength = keys.length; i < keysLength; i++) {
        const key = keys[i];
        const colInfo = this.colInfos[key];
        if (colInfo && colInfo.searchable) {
          const {
            format,
            filterFormatted,
            filterValue,
            formatExtraData
          } = colInfo;
          let targetVal;
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
            for (let j = searchTerms.length - 1; j > -1; j--) {
              if (targetVal.indexOf(searchTerms[j]) !== -1) {
                if (nonStrictMultiCol || searchTerms.length === 1) {
                  // match found: the last or only one
                  return true;
                }
                // match found: but there are more search terms to check for
                searchTerms.splice(j, 1);
              } else if (!this.multiColumnSearch) {
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

  _sort(arr) {
    if (this.sortList.length === 0 || typeof(this.sortList[0]) === 'undefined') {
      return arr;
    }

    arr.sort((a, b) => {
      let result = 0;

      for (let i = 0; i < this.sortList.length; i++) {
        const sortDetails = this.sortList[i];
        const isDesc = sortDetails.order.toLowerCase() === Const.SORT_DESC;

        const { sortFunc, sortFuncExtraData } = this.colInfos[sortDetails.sortField];

        if (sortFunc) {
          result = sortFunc(a, b, sortDetails.order, sortDetails.sortField, sortFuncExtraData);
        } else {
          const valueA = a[sortDetails.sortField] == null ? '' : a[sortDetails.sortField];
          const valueB = b[sortDetails.sortField] == null ? '' : b[sortDetails.sortField];

          if (isDesc) {
            if (typeof valueB === 'string') {
              result = valueB.localeCompare(valueA);
            } else {
              result = valueA > valueB ? -1 : ((valueA < valueB) ? 1 : 0);
            }
          } else {
            if (typeof valueA === 'string') {
              result = valueA.localeCompare(valueB);
            } else {
              result = valueA < valueB ? -1 : ((valueA > valueB) ? 1 : 0);
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

  getDataIgnoringPagination() {
    return this.getCurrentDisplayData();
  }

  get() {
    const _data = this.getCurrentDisplayData();

    if (_data.length === 0) return _data;

    const remote = typeof this.remote === 'function' ?
      (this.remote(Const.REMOTE))[Const.REMOTE_PAGE] : this.remote;

    if (remote || !this.enablePagination) {
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
