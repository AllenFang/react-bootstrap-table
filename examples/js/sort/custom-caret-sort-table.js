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

function getCaret(direction) {
  if (direction === 'asc') {
    return (
      <span> up</span>
    );
  }
  if (direction === 'desc') {
    return (
      <span> down</span>
    );
  }
  return (
    <span> up/down</span>
  );
}

export default class CustomSortTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products }>
          <TableHeaderColumn dataField='id' dataSort={ true } isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name' dataSort={ true } caretRender = { getCaret } >Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price' dataSort={ true } >Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
