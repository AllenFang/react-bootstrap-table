/* eslint max-len: 0 */
/* eslint no-unused-vars: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const products = [];

const qualityType = {
  0: 'good',
  1: 'bad',
  2: 'unknown'
};

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
      quality: i % 3,
      price: Math.floor((Math.random() * 100) + 1),
      inStockDate: date
    });
  }
}

addProducts(5);

function enumFormatter(cell, row, enumObject) {
  return enumObject[cell];
}

function dateFormatter(cell, row) {
  return `${('0' + cell.getDate()).slice(-2)}/${('0' + (cell.getMonth() + 1)).slice(-2)}/${cell.getFullYear()}`;
}

const nameFilterStyle = {
  borderColor: 'black'
};

const qualityFilterStyle = {
  borderColor: 'red'
};

const priceFilterStyle = {
  number: {
    backgroundColor: 'antiquewhite'
  },
  comparator: {
    border: '#0000FF 2.5px solid'
  }
};

const dateFilterStyle = {
  date: {
    backgroundColor: 'antiquewhite'
  },
  comparator: {
    border: '#0000FF 2.5px solid'
  }
};

export default class FilterStyle extends React.Component {
  render() {
    return (
      <BootstrapTable ref='table' data={ products }>
        <TableHeaderColumn dataField='id' isKey={ true }>
          Product ID
        </TableHeaderColumn>
        <TableHeaderColumn ref='name1' dataField='name' filter={ { type: 'TextFilter', style: nameFilterStyle } }>Product Name</TableHeaderColumn>
        <TableHeaderColumn ref='quality' dataField='quality' filter={ { type: 'SelectFilter', options: qualityType, style: qualityFilterStyle } } dataFormat={ enumFormatter } formatExtraData={ qualityType }>Product Quality</TableHeaderColumn>
        <TableHeaderColumn ref='price' dataField='price' filter={ { type: 'NumberFilter', delay: 1000, style: priceFilterStyle } }>Product Price</TableHeaderColumn>
        <TableHeaderColumn ref='inStockDate' dataField='inStockDate' filter={ { type: 'DateFilter', style: dateFilterStyle } } dataFormat={ dateFormatter }>In Stock From</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
