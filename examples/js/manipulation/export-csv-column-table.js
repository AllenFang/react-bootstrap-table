/* eslint max-len: 0 */
/* eslint no-unused-vars: 0*/
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

class ActionFormatter extends React.Component {
  render() {
    return (
      <button className='btn btn-info'>Action</button>
    );
  }
}

function actionFormatter(cell, row) {
  return <ActionFormatter />;
}

export default class ExportCSVTable extends React.Component {

  render() {
    return (
      <BootstrapTable data={ products } exportCSV={ true }>
          <TableHeaderColumn dataField='id' isKey hidden export>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
          <TableHeaderColumn dataField='action' dataFormat={ actionFormatter } export={ false }>Action</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
