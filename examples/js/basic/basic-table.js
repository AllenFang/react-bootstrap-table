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
      name: 'Items-name ' + id,
      name1: 'Items-name ' + id,
      name2: 'Items-name ' + id,
      name3: 'Items-name ' + id,
      name11: 'Itemsdddddddddddddddssssssssssssssssssss-name ' + id,
      price: 2100 + i,
      price2: 2100 + i + 1
    });
  }
}

addProducts(5);

export default class BasicTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products } condensed={ false } aggColumnNamesGrandTotal='price,price2'>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='name1'>Product Name1</TableHeaderColumn>
          <TableHeaderColumn dataField='name2'>Product Name2</TableHeaderColumn>
          <TableHeaderColumn dataField='name3'>Product Name3</TableHeaderColumn>
          <TableHeaderColumn dataField='name11'>Product Name11</TableHeaderColumn>
          <TableHeaderColumn dataField='price' dataAlign='right'>Product Price</TableHeaderColumn>
          <TableHeaderColumn dataField='price2' dataAlign='right'>Product Price2</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
