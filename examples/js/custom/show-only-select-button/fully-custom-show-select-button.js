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

export default class FullyCustomShowSelectButtonTable extends React.Component {

  createCustomShowSelectButton = (onClick, showSelected) => {
    return (
      <button style={ { color: 'red' } } onClick={ onClick }>
        { showSelected ? 'Select Only' : 'All' }
      </button>
    );
  }

  render() {
    const selectRow = {
      mode: 'radio',
      showOnlySelected: true
    };
    const options = {
      showSelectedOnlyBtn: this.createCustomShowSelectButton
    };
    return (
      <BootstrapTable data={ products } options={ options } selectRow={ selectRow }>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
