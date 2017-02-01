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
      name: 'Item name aaaaaaaaaaaaaa' + id,
      price: 2100 + i
    });
  }
}

addProducts(5);

export default class ColumnWidthTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products }>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name' width='50%'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price' width='90'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
