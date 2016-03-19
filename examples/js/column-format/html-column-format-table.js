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


function priceFormatter(cell, row) {
  return `<i class='glyphicon glyphicon-usd'></i> ${cell}`;
}


export default class HtmlColumnFormatTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products }>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price' dataFormat={ priceFormatter }>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
