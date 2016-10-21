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

export default class ColumnHeaderSpan extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products }>
        <TableHeaderColumn row='0' rowSpan='2' dataField='id' isKey={ true } >ID</TableHeaderColumn>
        <TableHeaderColumn row='0' colSpan='2'>Product</TableHeaderColumn>
        <TableHeaderColumn row='1' dataField='name'>Name</TableHeaderColumn>
        <TableHeaderColumn row='1' dataField='price'>Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
