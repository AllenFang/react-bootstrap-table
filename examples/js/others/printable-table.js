/* eslint max-len: 0 */
/* eslint no-console: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const products = [];

function addProducts(quantity) {
  const startId = products.length;
  const fruits = [ 'banana', 'apple', 'orange', 'tomato', 'strawberries' ];
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Fruit name is ' + fruits[i],
      price: 2100 + i
    });
  }
}

addProducts(5);

const options = {
  printToolBar: false
};

export default class Printable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products } search={ true } options={ options }>
          <TableHeaderColumn dataField='id' isKey={ true } searchable={ false }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Fruit Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
