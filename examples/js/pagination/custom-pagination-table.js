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
      price: 10 + i
    });
  }
}

addProducts(100);

export default class CustomPaginationTable extends React.Component{
  render(){

    var options = {
      page: 2,  //which page you want to show as default
      sizePerPageList: [5,10], //you can change the dropdown list for size per page
      sizePerPage: 5,  //which size per page you want to locate as default
      paginationSize: 3,  //the pagination bar size.
      prePage: "Prev", // Previous page button text
      nextPage: "Next", // Next page button text
      firstPage: "First", // First page button text
      lastPage: "Last" // Last page button text
    }

    return (
      <BootstrapTable data={products} pagination={true} options={options}>
          <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
};
