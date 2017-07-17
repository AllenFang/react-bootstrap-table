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

export default class TrClassStringTable extends React.Component {

  trStyle = (row, rowIndex) => {
    return { backgroundColor: '#FFFAFA' };
  }

  render() {
    const selectRow = { mode: 'checkbox', bgColor: 'red' };
    return (
      <BootstrapTable data={ products } trStyle={ this.trStyle } selectRow={ selectRow }>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
