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

let order = 'desc';

export default class SortTable extends React.Component {

  handleBtnClick = () => {
    if (order === 'desc') {
      this.refs.table.handleSort('asc', 'name');
      order = 'asc';
    } else {
      this.refs.table.handleSort('desc', 'name');
      order = 'desc';
    }
  }

  render() {
    return (
      <div>
        <p style={ { color: 'red' } }>You cam click header to sort or click following button to perform a sorting by expose API</p>
        <button onClick={ this.handleBtnClick }>Sort Product Name</button>
        <BootstrapTable ref='table' data={ products }>
            <TableHeaderColumn dataField='id' isKey={ true } dataSort={ true }>Product ID</TableHeaderColumn>
            <TableHeaderColumn dataField='name' dataSort={ true }>Product Name</TableHeaderColumn>
            <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
