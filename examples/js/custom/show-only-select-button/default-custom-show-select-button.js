/* eslint max-len: 0 */
/* eslint no-unused-vars: 0 */
/* eslint no-alert: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn, ShowSelectedOnlyButton } from 'react-bootstrap-table';


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

export default class DefaultCustomShowSelectButtonTable extends React.Component {

  createCustomShowSelectButton = () => {
    return (
      <ShowSelectedOnlyButton
        showAllText='custom all'
        showOnlySelectText='custom show only select'
        btnContextual='btn-info'
        btnClass='my-custom-class'/>
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
