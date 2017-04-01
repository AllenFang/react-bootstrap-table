/* eslint max-len: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    if (i === quantity - 1) {
      products.push({
        id: id,
        name: 'Footer ',
        price: 2100 + Math.floor(Math.random() * 100) + 1,
        isFooter: true
      });
    } else {
      products.push({
        id: id,
        name: 'Item name ' + id,
        price: 2100 + Math.floor(Math.random() * 100) + 1,
        isFooter: false
      });
    }
  }
}

addProducts(20);

function revertSortFunc(a, b, order) {   // order is desc or asc

  if (order === 'desc') {
    return a.price - b.price;
  } else {
    return b.price - a.price;
  }
}

function sortStrings(a, b, order) {
  if (order === 'desc') {
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
  } else {
    return b.name.toLowerCase().localeCompare(a.name.toLowerCase());
  }
}

export default class CustomSortTableHasFooter extends React.Component {
  render() {
    const options = {
      hasFooter: true
    };
    return (
      <BootstrapTable data={ products } options={ options }>
          <TableHeaderColumn dataField='id' isKey={ true } dataSort={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name' dataSort={ true } sortFunc={ sortStrings }>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price' dataSort={ true } sortFunc={ revertSortFunc }>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
