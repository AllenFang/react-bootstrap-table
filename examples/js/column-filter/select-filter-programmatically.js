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
      quality: i % 3
    });
  }
}

addProducts(5);

function enumFormatter(cell, row, enumObject) {
  return enumObject[cell];
}

export default class ProgrammaticallySelectFilter extends React.Component {
  handleBtnClick = () => {
    this.refs.nameCol.applyFilter(1);
  }

  render() {
    return (
      <div>
        <button onClick={ this.handleBtnClick } className='btn btn-default'>Click to apply select filter</button>
        <BootstrapTable data={ products }>
            <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
            <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
            <TableHeaderColumn ref='nameCol' dataField='quality' filterFormatted dataFormat={ enumFormatter }
              formatExtraData={ qualityType } filter={ { type: 'SelectFilter', options: qualityType } }>Product Quality</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
