/* eslint max-len: 0 */
/* eslint no-unused-vars: 0 */
/* eslint no-alert: 0 */
/* eslint no-console: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn, ClearSearchButton } from 'react-bootstrap-table';


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

export default class DefaultCustomClearButtonTable extends React.Component {

  handleClearButtonClick = (onClick) => {
    // Custom your onClick event here,
    // it's not necessary to implement this function if you have no any process before onClick
    console.log('This is my custom function for ClearSearchButton click event');
    onClick();
  }


  createCustomClearButton = (onClick) => {
    return (
      <ClearSearchButton
        btnText='MyClear'
        btnContextual='btn-warning'
        className='my-custom-class'
        onClick={ e => this.handleClearButtonClick(onClick) }/>
    );
    // If you want have more power to custom the child of ClearSearchButton,
    // you can do it like following
    // return (
    //   <ClearSearchButton
    //     btnContextual='btn-warning'
    //     className='my-custom-class'
    //     onClick={ () => this.handleClearButtonClick(onClick) }>
    //     { ... }
    //   </ClearSearchButton>
    // );
  }

  render() {
    const options = {
      clearSearch: true,
      clearSearchBtn: this.createCustomClearButton
    };
    return (
      <BootstrapTable data={ products } options={ options } search>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
