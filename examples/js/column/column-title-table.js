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
      price: 2100 + i
    });
  }
}

addProducts(5);

export default class ColumnAlignTable extends React.Component {

  customTitle(cell, row, rowIndex, colIndex) {
    return `${row.name} for ${cell}`;
  }

  render() {
    return (
      <BootstrapTable data={ products }>
          <TableHeaderColumn dataField='id' isKey={ true } columnTitle={ this.customTitle } >Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name' headerTitle={ false } columnTitle={ true }>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price' columnTitle='Hard code string' headerText='Custom Title'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
