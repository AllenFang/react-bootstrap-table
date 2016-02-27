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

addProducts(5);

export default class MouseEventTable extends React.Component{
  render(){

    var options = {
      onMouseLeave: function() {
        console.log('mouse leave from table');
      },
      onMouseEnter: function() {
        console.log('mouse enter to table');
      },
      onRowMouseOut: function(row) {
        console.log('mouse leave from row ' + row.id);
      },
      onRowMouseOver: function(row) {
        console.log('mouse enter from row ' + row.id);
      }
    };

    return (
      <BootstrapTable data={products} options={options}>
          <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
};
