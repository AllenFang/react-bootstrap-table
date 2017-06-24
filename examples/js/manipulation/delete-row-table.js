/* eslint max-len: 0 */
/* eslint no-console: 0 */
/* eslint no-alert: 0 */
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

function onAfterDeleteRow(rowKeys, rows) {
  alert('The rowkey you drop: ' + rowKeys);
}

const options = {
  afterDeleteRow: onAfterDeleteRow  // A hook for after droping rows.
};

// If you want to enable deleteRow, you must enable row selection also.
const selectRowProp = {
  mode: 'checkbox'
};

export default class DeleteRowTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products } deleteRow={ true } selectRow={ selectRowProp } options={ options }>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
