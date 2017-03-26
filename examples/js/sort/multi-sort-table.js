/* eslint max-len: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const products = [];

function addProducts(quantity) {
  const startId = products.length;
  let price = 2100;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;

    if (id % 5 === 0) {
      price += 100;
    }

    products.push({
      id: id,
      name: 'Item name ' + (id % 3 + 1),
      price: price
    });
  }
}

addProducts(15);

export default class MultiSortTable extends React.Component {

  render() {
    return (
      <div>
        <BootstrapTable ref='table' data={ products } multiColumnSort={ 2 }>
            <TableHeaderColumn dataField='id' isKey={ true } dataSort={ true }>Product ID</TableHeaderColumn>
            <TableHeaderColumn dataField='name' dataSort={ true }>Product Name</TableHeaderColumn>
            <TableHeaderColumn dataField='price' dataSort={ true }>Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
