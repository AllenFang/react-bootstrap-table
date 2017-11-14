/* eslint max-len: 0 */
/* eslint no-unused-vars: 0*/
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
      price: 2100 + i,
      quality: i % 3
    });
  }
}

addProducts(5);

export default class ExportCSVTable extends React.Component {

  csvPriceFormatter(cell, row) {
    return `${row.id}: ${cell} USD`;
  }

  csvQualityFormatter(cell, row, extra) {
    return extra[cell];
  }

  render() {
    const options = { exportCSVSeparator: '##' };
    return (
      <BootstrapTable data={ products } exportCSV={ true } options={ options }>
          <TableHeaderColumn dataField='id' isKey={ true } csvFieldType='number'>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name' csvHeader='product-name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price' csvFormat={ this.csvPriceFormatter }>Product Price</TableHeaderColumn>
          <TableHeaderColumn dataField='quality' csvFormat={ this.csvQualityFormatter } csvFormatExtraData={ qualityType }>Product Quality</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
