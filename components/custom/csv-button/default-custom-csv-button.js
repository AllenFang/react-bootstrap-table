/* eslint max-len: 0 */
/* eslint no-unused-vars: 0 */
/* eslint no-alert: 0 */
/* eslint no-console: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn, ExportCSVButton } from 'react-bootstrap-table';


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

export default class DefaultCustomExportButtonTable extends React.Component {

  handleExportCSVButtonClick = (onClick) => {
    // Custom your onClick event here,
    // it's not necessary to implement this function if you have no any process before onClick
    console.log('This is my custom function for ExportCSVButton click event');
    onClick();
  }

  createCustomExportCSVButton = (onClick) => {
    return (
      <ExportCSVButton
        btnText='CustomExportText'
        btnContextual='btn-danger'
        className='my-custom-class'
        btnGlyphicon='glyphicon-edit'
        onClick={ e => this.handleExportCSVButtonClick(onClick) }/>
    );
    // If you want have more power to custom the child of ExportCSVButton,
    // you can do it like following
    // return (
    //   <ExportCSVButton
    //     btnContextual='btn-warning'
    //     className='my-custom-class'
    //     onClick={ () => this.handleExportCSVButtonClick(onClick) }>
    //     { ... }
    //   </ExportCSVButton>
    // );
  }

  render() {
    const options = {
      exportCSVBtn: this.createCustomExportCSVButton
    };
    return (
      <BootstrapTable data={ products } options={ options } exportCSV>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
