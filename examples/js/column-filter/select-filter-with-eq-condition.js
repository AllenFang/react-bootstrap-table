/* eslint max-len: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const products = [];

const quality = [ 'good', 'Bad', 'unknown' ];

const qualityType = {
  'good': 'good',
  'Bad': 'Bad',
  'unknown': 'unknown'
};

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      quality: quality[i % 3]
    });
  }
}

addProducts(5);
export default class SelectFilterWithCondition extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products }>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='quality' filter={ { type: 'SelectFilter', options: qualityType, condition: 'eq' } }>Product Quality</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
