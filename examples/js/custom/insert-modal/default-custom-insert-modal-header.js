/* eslint max-len: 0 */
/* eslint no-unused-vars: 0 */
/* eslint no-alert: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn, InsertModalHeader } from 'react-bootstrap-table';


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

export default class DefaultCustomInsertModalHeaderTable extends React.Component {

  beforeClose(e) {
    alert(`[Custom Event]: Modal close event triggered!`);
  }

  createCustomModalHeader = () => {
    return (
      <InsertModalHeader
        title='This is my custom title'
        beforeClose={ this.beforeClose }/>
        // hideClose={ true } to hide the close button
    );
  }

  render() {
    const options = {
      insertModalHeader: this.createCustomModalHeader
    };
    return (
      <BootstrapTable data={ products } options={ options } insertRow>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
