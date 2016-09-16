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

export default class CustomToolBarTable extends React.Component {

  createCustomToolBar = ({
    exportCSVBtn,
    insertBtn,
    deleteBtn,
    showSelectedOnlyBtn,
    searchTextInput
   }) => {
    // return null;
    return (
      <div className='row'>
        <div className='col-xs-12 col-sm-6 col-md-6 col-lg-8'>
          <div className='btn-group btn-group-sm' role='group'>
            { exportCSVBtn }
            { insertBtn }
            { deleteBtn }
            { showSelectedOnlyBtn }
          </div>
        </div>
        <div className='col-xs-12 col-sm-6 col-md-6 col-lg-4'>
          { searchTextInput }
        </div>
      </div>
    );
  }

  render() {
    const selectRow = {
      mode: 'checkbox',
      showOnlySelected: true
    };
    const options = {
      toolBar: this.createCustomToolBar
    };
    return (
      <BootstrapTable data={ products }
        options={ options }
        selectRow={ selectRow }
        insertRow
        deleteRow
        exportCSV
        search>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
