'use strict';
import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


var products = [];

function addProducts(quantity) {
  var startId = products.length;
  for (var i = 0; i < quantity; i++) {
    var id = startId + i;
    products.push({
      id: id,
      name: "Item name " + id,
      price: 100 + i
    });
  }
}

addProducts(5);

function afterColumnFilter(filterConds, result){
  console.log('Filter Conditions: ');
  for(let prop in filterConds){
    console.log('Filter column= '+prop+', Filter value= '+filterConds[prop]);
  }
  console.log('Result is:');
  for(let i=0;i<result.length;i++){
    console.log('Product: ' + result[i].id + ', ' + result[i].name + ', ' + result[i].price);
  }

}

var options = {
  afterColumnFilter: afterColumnFilter
}

export default class FilterTable extends React.Component{
  render(){
    return (
      <BootstrapTable data={products} columnFilter={true} options={options}>
          <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
};
