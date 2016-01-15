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
var order = 'desc';
export default class SortTable extends React.Component{

  handleBtnClick = e => {
    if(order === 'desc'){
      this.refs.table.handleSort('asc', 'name');
      order = 'asc';
    } else {
      this.refs.table.handleSort('desc', 'name');
      order = 'desc';
    }
  }

  render(){
    return (
      <div>
        <p style={{color:'red'}}>You cam click header to sort or click following button to perform a sorting by expose API</p>
        <button onClick={this.handleBtnClick}>Sort Product Name</button>
        <BootstrapTable ref="table" data={products}>
            <TableHeaderColumn dataField="id" isKey={true} dataSort={true}>Product ID</TableHeaderColumn>
            <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
            <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
};
