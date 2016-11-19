/* eslint max-len: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const products = [];

const qualityType = {
  0: 'good',
  1: 'bad',
  2: 'unknown'
};
const inStockStatus = {
  1: 'yes',
  2: 'no'
};

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      quality: i % 3,
      inStock: i % 2 + 1
    });
  }
}

addProducts(5);

function enumFormatter(cell, row, enumObject) {
  return enumObject[cell];
}

export default class ExtraDataColumnFormatTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products } >
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='quality' dataFormat={ enumFormatter } formatExtraData={ qualityType }>Product Quality</TableHeaderColumn>
        <TableHeaderColumn dataField='inStock' dataFormat={ enumFormatter } formatExtraData={ inStockStatus }>Product Stock Status</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
