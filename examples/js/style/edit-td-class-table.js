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

export default class EditColumnClassTable extends React.Component {
  render() {
    const cellEditProps = {
      mode: 'click'
    };
    return (
      <BootstrapTable data={ products } cellEdit={ cellEditProps }>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price' editColumnClassName='class-for-editing-cell'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
