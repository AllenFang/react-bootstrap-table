/* eslint max-len: 0 */
/* eslint no-unused-vars: 0 */
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
      price: (i * 2 + Math.random()).toFixed(2)
    });
  }
}

function formatFloat(cell, row) {
  return parseFloat(cell);
}

const sortFloat = function(l, r, order) {
  const left = parseFloat(l.price);
  const right = parseFloat(r.price);
  if (order === 'desc') {
    return right - left;
  } else {
    return left - right;
  }
};

addProducts(5);

export default class FloatFilter extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products }>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'
          filter={ { type: 'NumberFilter', delay: 1000, numberComparators: [ '=', '>', '<' ] } }
          dataSort={ true }
          dataFormat={ formatFloat }
          filterFormatted={ true }
          sortFunc={ sortFloat }>
          Product Price
        </TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
