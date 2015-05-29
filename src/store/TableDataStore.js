import Const from "../Const";


function _sort(arr, sortField, order){
  arr.sort(function(a,b){
    if(order == Const.SORT_ASC){
      return a[sortField] > b[sortField]?-1: ((a[sortField] < b[sortField]) ? 1 : 0);
    }else{
      return a[sortField] < b[sortField]?-1: ((a[sortField] > b[sortField]) ? 1 : 0);
    }
  });
  return arr;
}




export default class TableDataStore{

  constructor(data, isPagination, keyField){
    this.data = data;
    this.keyField = keyField;
    this.enablePagination = isPagination;

    this.sortObj = {};
    this.pageObj = {};
  }

  sort(order, sortField, data){
    this.sortObj = {
      order: order,
      sortField: sortField
    };
    if(typeof data === "undefined"){
      this.data = _sort(this.data, sortField, order);;
    }else{
      data = _sort(data, sortField, order);
    }
    return this;
  }

  page(page, sizePerPage){
    this.pageObj.end = page*sizePerPage-1,
    this.pageObj.start = this.pageObj.end - (sizePerPage - 1)
    return this;
  }

  edit(newVal, rowIndex, fieldName){
    if(!this.enablePagination){
      this.data[rowIndex][fieldName] = newVal;
    }else{
      this.data[this.pageObj.start+rowIndex][fieldName] = newVal;
    }
    return this;
  }

  add(newObj){
    if(newObj[this.keyField].trim() === ""){
      throw this.keyField + " can't be empty value.";
    }

    this.data.forEach(function(row){
      if(row[this.keyField].toString() === newObj[this.keyField]){
        throw this.keyField + " " + newObj[this.keyField] + " already exists";
      }
    }, this);

    this.data.push(newObj);
  }

  remove(rowKey){
    this.data = this.data.filter(function(row){
      return rowKey.indexOf(row[this.keyField]) == -1;
    }, this);
  }

  get(data){
    let _data;
    if(typeof data === "undefined"){
      _data = this.data;
    }else{
      _data = data;
    }

    if(!this.enablePagination){
      return _data;
    }else{
      var result = [];
      for(var i=this.pageObj.start;i<=this.pageObj.end;i++){
        result.push(_data[i]);
        if(i+1 == _data.length)break;
      }
      console.log(result);
      return result;
    }
  }

  getKeyField(){
    return this.keyField;
  }

  getDataNum(){
    return this.data.length;
  }

};
