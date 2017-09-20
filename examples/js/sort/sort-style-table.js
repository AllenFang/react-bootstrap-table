/* eslint max-len: 0 */
/* eslint no-unused-vars: 0 */
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

export default class SortTable extends React.Component {

  customSortStyle = (order, dataField) => {
    if (order === 'desc') {
      return 'sort-desc';
    }
    return 'sort-asc';
  }

  render() {
    return (
      <div>
        <BootstrapTable ref='table' data={ products }>
          <TableHeaderColumn dataField='id' isKey dataSort sortHeaderColumnClassName='sorting'>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name' dataSort sortHeaderColumnClassName={ this.customSortStyle }>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
