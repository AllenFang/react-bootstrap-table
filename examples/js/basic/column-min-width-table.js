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
      name: 'Item name 12345678' + id,
      price: 2100 + i
    });
  }
}

addProducts(5);

export default class ColumnMinWidthTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products }>
          <TableHeaderColumn minWidth='10' dataField='id' isKey={ true }>ProductID</TableHeaderColumn>
          <TableHeaderColumn minWidth='50' dataField='name'>ProductName</TableHeaderColumn>
          <TableHeaderColumn minWidth='100' dataField='price'>ProductPrice</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='name'>ProductName</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='price'>ProductPrice</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='name'>ProductName</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
