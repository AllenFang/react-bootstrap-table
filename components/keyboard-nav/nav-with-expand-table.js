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

export default class NavWithExpandTable extends React.Component {

  isExpandableRow(row) {
    if (row.id < 3) return true;
    else return false;
  }

  expandComponent(row) {
    return (
      <div>
        <p>I'm expand panel for row: { row.id }</p>
        <p>This is a demo for expanding table with keyboard navigation</p>
      </div>
    );
  }

  render() {
    return (
      <BootstrapTable
        expandableRow={ this.isExpandableRow }
        expandComponent={ this.expandComponent }
        data={ products } keyBoardNav>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
