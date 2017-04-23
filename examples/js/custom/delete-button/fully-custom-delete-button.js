/* eslint max-len: 0 */
/* eslint no-unused-vars: 0 */
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

export default class FullyCustomDeleteButtonTable extends React.Component {

  createCustomDeleteButton = (onBtnClick) => {
    return (
      <button style={ { color: 'red' } } onClick={ onBtnClick }>Delete it!!!</button>
    );
  }

  render() {
    const options = {
      deleteBtn: this.createCustomDeleteButton
    };
    const selectRow = {
      mode: 'checkbox'
    };
    return (
      <BootstrapTable selectRow={ selectRow } data={ products } options={ options } deleteRow>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
