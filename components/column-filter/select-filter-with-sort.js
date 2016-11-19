/* eslint max-len: 0 */
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
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      quality: i % (Object.keys(qualityType).length)
    });
  }
}

addProducts(15);

function enumFormatter(cell, row, enumObject) {
  return enumObject[cell];
}

export default class SelectFilterWithSort extends React.Component {
  render() {
    const filter = {
      type: 'TextFilter'
    };

    return (
      <BootstrapTable data={ products }>
          <TableHeaderColumn dataSort dataField='id' filter={ filter } isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataSort dataField='quality' filterFormatted dataFormat={ enumFormatter }
            formatExtraData={ qualityType } filter={ { type: 'SelectFilter', options: qualityType, defaultValue: 1 } }>Product Quality</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
