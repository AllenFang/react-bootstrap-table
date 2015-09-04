import Const from "../Const";
var EventEmitter = require('events').EventEmitter;

function _sort(arr, sortField, order){
  order = order.toLowerCase();
  arr.sort(function(a,b){
    if(order == Const.SORT_DESC){
      return a[sortField] > b[sortField]?-1: ((a[sortField] < b[sortField]) ? 1 : 0);
    }else{
      return a[sortField] < b[sortField]?-1: ((a[sortField] > b[sortField]) ? 1 : 0);
    }
  });
  return arr;
}

export class TableDataSet extends EventEmitter{
  constructor(data){
    super(data);
    this.data = data;
  }

  setData(data) {
    this.emit('change', data);
  }

  clear(){
    this.data = null;
  }

  getData(){
    return this.data;
  }
}

export class TableDataStore{

  constructor(data){
    this.data = data;
    this.filteredData = null;
    this.isOnFilter = false;
    this.filterObj = null;
    this.searchText = null;
    this.sortObj = {};
    this.pageObj = {};
  }

  setProps(isPagination, keyField){
    this.keyField = keyField;
    this.enablePagination = isPagination;
  }

  setData(data) {
    this.data = data;
    if(this.isOnFilter) {
      if(null !== this.filterObj) this.filter(this.filterObj);
      if(null !== this.searchText) this.search(this.searchText);
    }
  }

  getCurrentDisplayData(){
    if(this.isOnFilter) return this.filteredData;
    else return this.data;
  }

  sort(order, sortField, sortFunc){
    this.sortObj = {
      order: order,
      sortField: sortField
    };

    let currentDisplayData = this.getCurrentDisplayData();
    currentDisplayData = _sort(currentDisplayData, sortField, order);;

    return this;
  }

  page(page, sizePerPage){
    this.pageObj.end = page*sizePerPage-1;
    this.pageObj.start = this.pageObj.end - (sizePerPage - 1);
    return this;
  }

  edit(newVal, rowIndex, fieldName){
    let currentDisplayData = this.getCurrentDisplayData();
    let rowKeyCache;
    if(!this.enablePagination){
      currentDisplayData[rowIndex][fieldName] = newVal;
      rowKeyCache = currentDisplayData[rowIndex][this.keyField];
    }else{
      currentDisplayData[this.pageObj.start+rowIndex][fieldName] = newVal;
      rowKeyCache = currentDisplayData[this.pageObj.start+rowIndex][this.keyField];
    }
    if(this.isOnFilter){
      this.data.forEach(function(row){
        if(row[this.keyField] === rowKeyCache){
          row[this.keyField][fieldName] = newVal;
        }
      }, this);
    }
    return this;
  }

  add(newObj){
    if(newObj[this.keyField].trim() === ""){
      throw this.keyField + " can't be empty value.";
    }
    let currentDisplayData = this.getCurrentDisplayData();
    currentDisplayData.forEach(function(row){
      if(row[this.keyField].toString() === newObj[this.keyField]){
        throw this.keyField + " " + newObj[this.keyField] + " already exists";
      }
    }, this);

    currentDisplayData.push(newObj);
    if(this.isOnFilter){
      this.data.push(newObj);
    }
  }

  remove(rowKey){
    let currentDisplayData = this.getCurrentDisplayData();
    let result = currentDisplayData.filter(function(row){
      return rowKey.indexOf(row[this.keyField]) == -1;
    }, this);

    if(this.isOnFilter){
      this.data = this.data.filter(function(row){
        return rowKey.indexOf(row[this.keyField]) == -1;
      }, this);
      this.filteredData = result;
    }else{
      this.data = result;
    }
  }

  filter(filterObj){
    if(Object.keys(filterObj).length == 0){
      this.filteredData = null;
      this.isOnFilter = false;
      this.filterObj = null;
    } else{
      this.filterObj = filterObj;
      this.filteredData = this.data.filter(function(row){
        let valid = true;
        for(var key in filterObj){
          if(row[key].toString().toLowerCase().indexOf(filterObj[key].toLowerCase()) == -1){
            valid = false;
            break;
          }
        }
        return valid;
      });
      this.isOnFilter = true;
    }
  }

  search(searchText){
    if(searchText.trim() === ""){
      this.filteredData = null;
      this.isOnFilter = false;
      this.searchText = null;
    }else{
      this.searchText = searchText;
      this.filteredData = this.data.filter(function(row){
        let valid = false;
        for(var key in row){
          if(row[key] &&
             row[key].toString().toLowerCase().indexOf(searchText.toLowerCase()) !== -1){
            valid = true;
            break;
          }
        }
        return valid;
      });
      this.isOnFilter = true;
    }
  }

  get(){
    let _data = this.getCurrentDisplayData();

    if(_data.length == 0) return _data;

    if(!this.enablePagination){
      return _data;
    }else{
      var result = [];
      for(var i=this.pageObj.start;i<=this.pageObj.end;i++){
        result.push(_data[i]);
        if(i+1 == _data.length)break;
      }
      return result;
    }
  }

  getKeyField(){
    return this.keyField;
  }

  getDataNum(){
    return this.getCurrentDisplayData().length;
  }

  getAllRowkey(){
    return this.data.map(function(row){
      return row[this.keyField];
    }, this);
  }

};
