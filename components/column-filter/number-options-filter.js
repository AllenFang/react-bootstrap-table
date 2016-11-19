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
      satisfaction: Math.floor(Math.random() * 6)
    });
  }
}

addProducts(5);

const satisfaction = [ 0, 1, 2, 3, 4, 5 ];

export default class NumberOptionsFilter extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products }>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='satisfaction' filter={ { type: 'NumberFilter', options: satisfaction } }>Buyer Satisfaction</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
