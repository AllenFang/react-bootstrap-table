/* eslint max-len: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      price: 2100 + i
    });
  }
}

addProducts(5);

function revertSortFunc(a, b, order) {   // order is desc or asc
  if (order === 'desc') {
    return a.price - b.price;
  } else {
    return b.price - a.price;
  }
}

export default class CustomSortTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products }>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price' dataSort={ true } sortFunc={ revertSortFunc }>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
