/* eslint max-len: 0 */
/* eslint no-unused-vars: 0 */
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

export default class TableClassTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products } insertRow exportCSV
          tableHeaderClass='my-header-class'
          tableBodyClass='my-body-class'
          containerClass='my-container-class'
          tableContainerClass='my-table-container-class'
          headerContainerClass='my-header-container-class'
          bodyContainerClass='my-body-container-class'>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
