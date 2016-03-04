'use strict';
import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


var products = [];

function addProducts(quantity) {
  var startId = products.length;
  for (var i = 0; i < quantity; i++) {
    var id = startId + i;
    var fruits = ['banana', 'apple', 'orange', 'tomato', 'strawberries']
    products.push({
      id: id,
      name: "Fruit name is " + fruits[i],
      price: 2100 + i
    });
  }
}

addProducts(5);

function afterSearch(searchText, result){
  console.log('Your search text is ' + searchText);
  console.log('Result is:');
  for(let i=0;i<result.length;i++){
    console.log("Fruit: " + result[i].id + ", " + result[i].name + ", " + result[i].price);
  }
}

var options = {
  afterSearch: afterSearch  //define a after search hook
}

export default class SearchTable extends React.Component{
  render(){
    return (
      <BootstrapTable data={products} search={true} options={options}>
          <TableHeaderColumn dataField="id" isKey={true} searchable={false}>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField="name">Fruit Name</TableHeaderColumn>
          <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
};
