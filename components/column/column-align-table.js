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

export default class ColumnAlignTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products }>
          <TableHeaderColumn dataField='id' isKey={ true } dataAlign='center'>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name' headerAlign='right'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price' headerAlign='center' dataAlign='right'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
