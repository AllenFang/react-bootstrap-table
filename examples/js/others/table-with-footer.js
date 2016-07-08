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

export default class BasicTable extends React.Component {
  render() {
    const total = products.reduce( (a, product) => a + product.price, 0);
    return (
      <BootstrapTable data={ products } showFooter={ true }>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name' footerText='Total'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price' footerText={ total }>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
