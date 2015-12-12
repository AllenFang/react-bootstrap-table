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
      price: 2100 + i
    });
  }
}

addProducts(70);

export default class PaginationHookTable extends React.Component {
  constructor(props) {
    super(props);

    this.options = {
      onPageChange: this.onPageChange.bind(this),
      onSizePerPageList: this.sizePerPageListChange.bind(this)
    };
  }

  sizePerPageListChange(sizePerPage){
    alert('sizePerPage: ' + sizePerPage);
  }

  onPageChange(page, sizePerPage) {
    alert('page: ' + page + ', sizePerPage: ' + sizePerPage);
  }

  render() {
    return (
      <div>
        <BootstrapTable
          data={products}
          pagination
          options={this.options}
        >
          <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
};
