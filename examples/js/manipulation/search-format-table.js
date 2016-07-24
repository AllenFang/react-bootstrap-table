/* eslint max-len: 0 */
/* eslint no-console: 0 */
/* eslint no-unused-vars: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const products = [];

function addProducts(quantity) {
  const startId = products.length;
  const pname = [ 'product 1', 'product 2', 'product 3', 'product 5', 'product 6' ];
  const brands = [ 'Sony', 'Apple', 'SAMSUMG', 'HTC', 'LG' ];
  const years = [ 2005, 2006, 2008, 2001, 2015 ];
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: {
        pname: pname[i],
        brand: brands[i],
        year: years[i]
      },
      price: 2100 + i
    });
  }
}

addProducts(5);

function filterName(cell, row) {
  console.log(cell);
  console.log(row);
}

function nameFormatter(cell) {
  return `${cell.pname}[${cell.brand}] is from ${cell.year}`;
}

function priceFormatter(cell) {
  return `NTD ${cell}`;
}

export default class SearchFormatTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products } search={ true }>
          <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name' filterFormat={ filterName } dataFormat={ nameFormatter }>Fruit Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price' filterFormatted dataFormat={ priceFormatter }>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
