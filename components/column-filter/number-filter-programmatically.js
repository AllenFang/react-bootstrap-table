/* eslint max-len: 0 */
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
      price: Math.floor((Math.random() * 100) + 1)
    });
  }
}

addProducts(5);

export default class ProgrammaticallyNumberFilter extends React.Component {
  handleBtnClick = () => {
    this.refs.nameCol.applyFilter({
      number: 40,
      comparator: '>'
    });
  }

  render() {
    return (
      <div>
        <button onClick={ this.handleBtnClick } className='btn btn-default'>Click to apply number filter</button>
        <BootstrapTable data={ products }>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn ref='nameCol' dataField='price' filter={ { type: 'NumberFilter', delay: 1000, numberComparators: [ '=', '>', '<=' ] } }>Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
