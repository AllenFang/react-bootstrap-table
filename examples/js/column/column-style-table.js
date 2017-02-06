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
      name: 'The white-space property specifies how white-space inside an element is handled, default is normal ' + id,
      price: 2100 + i
    });
  }
}

addProducts(5);

export default class ColumnStyleTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products }>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name' tdStyle={ { whiteSpace: 'normal' } }>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price' thStyle={ { 'fontWeight': 'lighter' } }>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
