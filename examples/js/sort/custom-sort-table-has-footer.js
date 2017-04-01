/* eslint max-len: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const products = [];

function addProducts(quantity) {
  let value;
  const startId = products.length;
  let total = 0;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    value = 2100 + Math.floor(Math.random() * 100) + 1;
    products.push({
      id: id,
      name: 'Item name ' + id,
      cost: value
    });
    total += value;
  }
  /* add footer row with total calculations */
  products.push({
    id: products.length,
    name: 'Total',
    cost: total
  });
}

addProducts(20);

function revertSortFunc(a, b, order) {   // order is desc or asc

  if (order === 'desc') {
    return a.cost - b.cost;
  } else {
    return b.cost - a.cost;
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
          <TableHeaderColumn dataField='cost' dataSort={ true } sortFunc={ revertSortFunc }>Product Cost</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
