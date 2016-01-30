'use strict';
import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


var products = [];

function addProducts(quantity) {
  var startId = products.length;
  var catgId = 1;
  for (var i = 0; i < quantity; i++) {
    var id = startId + i;
    products.push({
      id: id,
      name: "Item name " + id,
      price: 2100 + i,
      catgId: catgId
    });
    if(catgId == 1) catgId--;
    else catgId++;
  }
}

addProducts(5);

function catgFormatter(cell, row, extra) {
  const { catgMap } = extra;
  const result = catgMap.find(x => x.id == cell);
  if(result) {
    return result.name;
  } else {
    'No Category';
  }
}

function priceFormatter(cell, row){
  return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}


export default class FormatExtraDataTable extends React.Component{
  render(){
    var extraData = {
      catgMap: [
        {id: 0, name: 'Category1'},
        {id: 1, name: 'Category2'}
      ]
    }
    return (
      <BootstrapTable data={products}>
          <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField="catgId" formatExtraData={extraData} dataFormat={catgFormatter} >Product Category</TableHeaderColumn>
          <TableHeaderColumn dataField="price" dataFormat={priceFormatter}>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
};
