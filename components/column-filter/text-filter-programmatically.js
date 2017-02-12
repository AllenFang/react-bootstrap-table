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

export default class ProgrammaticallyTextFilter extends React.Component {

  /* There're two way that you can filter data */
  handleBtnClick = () => {
    this.refs.nameCol.applyFilter('Item name 3');
  }

  /* This is also work for filtering */
  handleBtnClick1 = () => {
    this.refs.table.handleFilterData({ name: 'Item name 3' });
  }

  render() {
    return (
      <div>
        <button onClick={ this.handleBtnClick } className='btn btn-default'>Click to apply text filter</button>
        <BootstrapTable ref='table' data={ products }>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn ref='nameCol' dataField='name' filter={ { type: 'TextFilter', delay: 1000 } }>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
