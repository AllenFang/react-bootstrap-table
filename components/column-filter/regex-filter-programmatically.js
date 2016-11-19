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
      price: 2100 + i
    });
  }
}

addProducts(5);

export default class ProgrammaticallyRegexFilter extends React.Component {
  handleBtnClick = () => {
    this.refs.nameCol.applyFilter('[name]');
  }

  render() {
    return (
      <div>
        <button onClick={ this.handleBtnClick } className='btn btn-default'>Click to apply Regx filter</button>
        <BootstrapTable data={ products }>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn ref='nameCol' dataField='name' filter={ { type: 'RegexFilter', delay: 1000 } }>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
