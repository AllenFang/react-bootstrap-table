/* eslint max-len: 0 */
/* eslint no-unused-vars: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const products = [];

function addProducts(quantity) {
  const startId = products.length;
  const startDate = new Date(2015, 0, 1);
  const endDate = new Date();
  for (let i = 0; i < quantity; i++) {
    const date = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      inStockDate: date
    });
  }
}

addProducts(5);

function dateFormatter(cell, row) {
  if (typeof cell !== 'object') {
    cell = new Date(cell);
  }

  return `${('0' + cell.getDate()).slice(-2)}/${('0' + (cell.getMonth() + 1)).slice(-2)}/${cell.getFullYear()}`;
}

export default class DateFilterWithDefaultValue extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products }>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='inStockDate' dataFormat={ dateFormatter } filter={ { type: 'DateFilter', defaultValue: { date: new Date(2015, 7, 22), comparator: '>=' } } }>In Stock From</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
