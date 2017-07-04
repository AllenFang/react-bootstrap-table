/* eslint max-len: 0 */
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

addProducts(50);

export default class BasicTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products } height='500px'>
          <TableHeaderColumn dataField='id' isKey={ true } width='100px'>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name' width='200px'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price' width='250px'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
