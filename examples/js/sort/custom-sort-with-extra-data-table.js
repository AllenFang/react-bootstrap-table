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
      quality: i % 3
    });
  }
}

addProducts(5);

function enumFormatter(cell, row, enumObject) {
  return enumObject[cell];
}

function sortByName(a, b, order, field, enumObject) {
  if (order === 'desc') {
    if (enumObject[a[field]] > enumObject[b[field]]) {
      return -1;
    } else if (enumObject[a[field]] < enumObject[b[field]]) {
      return 1;
    }
    return 0;
  }
  if (enumObject[a[field]] < enumObject[b[field]]) {
    return -1;
  } else if (enumObject[a[field]] > enumObject[b[field]]) {
    return 1;
  }
  return 0;
}

export default class CustomSortWithExtraDataTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products }>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='quality'
                           dataFormat={ enumFormatter } formatExtraData={ qualityType }
                           dataSort={ true }
                           sortFunc={ sortByName } sortFuncExtraData={ qualityType }>
          Product Quality</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
