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
      price: Math.floor((Math.random() * 100) + 1)
    });
  }
}

addProducts(5);

export default class NumberFilterWithDefaultValue extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products }>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'
          filter={ { type: 'NumberFilter', delay: 1000, numberComparators: [ '=', '>', '<=' ],
          defaultValue: { number: 50, comparator: '>' } } }>
          Product Price
        </TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
