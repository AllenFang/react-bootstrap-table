/* eslint max-len: 0 */
/* eslint no-unused-vars: 0 */
/* eslint no-alert: 0 */
/* eslint no-console: 0 */
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
    alert(`[Custom Event]: Before modal close event triggered!`);
  }

  handleModalClose(closeModal) {
    // Custom your onCloseModal event here,
    // it's not necessary to implement this function if you have no any process before modal close
    console.log('This is my custom function for modal close event');
    closeModal();
  }

  createCustomModalHeader = (closeModal, save) => {
    return (
      <InsertModalHeader
        className='my-custom-class'
        title='This is my custom title'
        beforeClose={ this.beforeClose }
        onModalClose={ () => this.handleModalClose(closeModal) }/>
        // hideClose={ true } to hide the close button
    );

    // If you want have more power to custom the child of InsertModalHeader,
    // you can do it like following
    // return (
    //   <InsertModalHeader
    //     beforeClose={ this.beforeClose }
    //     onModalClose={ () => this.handleModalClose(closeModal) }>
    //     { ... }
    //   </InsertModalHeader>
    // );
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
