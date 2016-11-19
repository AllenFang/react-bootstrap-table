/* eslint max-len: 0 */
/* eslint no-console: 0 */
/* eslint no-unused-vars: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const products = [];

function addProducts(quantity) {
  const startId = products.length;
  const pname = [ 'Cloud Service', 'Message Service', 'Add Service', 'Edit Service', 'Money' ];
  const icons = [ 'glyphicon-cloud', 'glyphicon-envelope', 'glyphicon-plus', 'glyphicon-pencil', 'glyphicon-euro' ];
  const types = [ 'Cloud', 'Mail', 'Insert', 'Modify', 'Money' ];
  const years = [ 2005, 2006, 2008, 2001, 2015 ];
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: {
        pname: pname[i],
        type: types[i],
        icon: icons[i],
        year: years[i]
      },
      price: 2100 + i
    });
  }
}

addProducts(5);

function filterType(cell, row) {
  // just return type for filtering or searching.
  return cell.type;
}

function nameFormatter(cell) {
  return `<p><span class='glyphicons ${cell.icon}' aria-hidden='true'></span> ${cell.pname}, from ${cell.year}</p>`;
}

function priceFormatter(cell) {
  return `NTD ${cell}`;
}

export default class SearchFormatTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products } search={ true }>
          <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name' filterValue={ filterType } dataFormat={ nameFormatter }>Product</TableHeaderColumn>
          <TableHeaderColumn dataField='price' filterFormatted dataFormat={ priceFormatter }>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
