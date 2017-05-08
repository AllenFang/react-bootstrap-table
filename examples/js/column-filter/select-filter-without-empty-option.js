/* eslint max-len: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const products = [];

const qualityType = {
  0: 'good',
  1: 'Bad',
  2: 'unknown'
};

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      quality: i % 3
    });
  }
}

addProducts(5);

function enumFormatter(cell, row, enumObject) {
  return enumObject[cell];
}

export default class SelectFilterWithoutEmptyOption extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products }>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='quality' filterFormatted dataFormat={ enumFormatter } formatExtraData={ qualityType }
          filter={ { type: 'SelectFilter', options: qualityType, withoutEmptyOption: true } }>Product Quality</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
