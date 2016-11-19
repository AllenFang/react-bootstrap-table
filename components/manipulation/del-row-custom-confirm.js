/* eslint max-len: 0 */
/* eslint no-console: 0 */
/* eslint no-alert: 0 */
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

function customConfirm(next, dropRowKeys) {
  const dropRowKeysStr = dropRowKeys.join(',');
  if (confirm(`(It's a custom confirm)Are you sure you want to delete ${dropRowKeysStr}?`)) {
    // If the confirmation is true, call the function that
    // continues the deletion of the record.
    next();
  }
}

const options = {
  handleConfirmDeleteRow: customConfirm
};

// If you want to enable deleteRow, you must enable row selection also.
const selectRowProp = {
  mode: 'checkbox'
};

export default class DeleteRowCustomComfirmTable extends React.Component {
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
