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

addProducts(23);

const selectRowProp = {
  mode: 'checkbox',
  onlyUnselectVisible: true  // Particular for unselect all case, it will unselect visible rows.
};

export default class SelectAllWithFilterTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products } selectRow={ selectRowProp } search>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price' filter={ { type: 'TextFilter', delay: 500 } }>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
