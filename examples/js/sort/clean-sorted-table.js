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

export default class CleanSortedTable extends React.Component {

  cleanSort = () => {
    this.refs.table.cleanSort();
  }

  render() {
    return (
      <div>
        <button className='btn btn-default' onClick={ this.cleanSort }>Clean Sort</button>
        <BootstrapTable ref='table' data={ products }>
            <TableHeaderColumn dataField='id' isKey dataSort>Product ID</TableHeaderColumn>
            <TableHeaderColumn dataField='name' dataSort>Product Name</TableHeaderColumn>
            <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
