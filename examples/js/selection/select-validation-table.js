/* eslint max-len: 0 */
/* eslint no-alert: 0 */
/* eslint guard-for-in: 0 */
/* eslint no-console: 0 */
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

function onRowSelect(row, isSelected, e) {
  if (isSelected && row.id >= 3) {
    alert('The selection only work on key which less than 3');
    return false;
  }
}

function onSelectAll(isSelected, rows) {
  if (isSelected) {
    alert('The selection only work on key which less than 3');
    return products.map(p => p.id).filter(id => id < 3);
  }
}

const selectRowProp = {
  mode: 'checkbox',
  clickToSelect: true,
  onSelect: onRowSelect,
  onSelectAll: onSelectAll
};

export default class SelectValidationTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products } selectRow={ selectRowProp }>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
