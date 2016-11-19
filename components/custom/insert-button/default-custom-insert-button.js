/* eslint max-len: 0 */
/* eslint no-unused-vars: 0 */
/* eslint no-alert: 0 */
/* eslint no-console: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn, InsertButton } from 'react-bootstrap-table';


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

export default class DefaultCustomInsertButtonTable extends React.Component {

  handleInsertButtonClick = (onClick) => {
    // Custom your onClick event here,
    // it's not necessary to implement this function if you have no any process before onClick
    console.log('This is my custom function for InserButton click event');
    onClick();
  }

  createCustomInsertButton = (onClick) => {
    return (
      <InsertButton
        btnText='CustomInsertText'
        btnContextual='btn-warning'
        className='my-custom-class'
        btnGlyphicon='glyphicon-edit'
        onClick={ () => this.handleInsertButtonClick(onClick) }/>
    );
    // If you want have more power to custom the child of InsertButton,
    // you can do it like following
    // return (
    //   <InsertButton
    //     btnContextual='btn-warning'
    //     className='my-custom-class'
    //     onClick={ () => this.handleInsertButtonClick(onClick) }>
    //     { ... }
    //   </InsertButton>
    // );
  }

  render() {
    const options = {
      insertBtn: this.createCustomInsertButton
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
