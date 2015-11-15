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

export default class DefaultSortTable extends React.Component {
  constructor(props) {
    super(props);

    this.options = {
      sortName: "name",  //default sort column name
      sortOrder: "desc",  //default sort order
    };
  }

  render() {
    return (
      <div>
        <BootstrapTable data={products} options={this.options}>
          <TableHeaderColumn dataField="id" isKey={true} dataSort={true}>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
};
