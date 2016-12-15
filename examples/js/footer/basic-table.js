/* eslint max-len: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const products = [];
const footerData = [];

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

addProducts(8);

footerData.push({
  id: '',
  name: 'Totals',
  price: 22000
});

export default class BasicTable extends React.Component {
  render() {
    return (
      <div>
        <BootstrapTable data={ products } footerData={ footerData } >
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price' columnTitle={ true } >Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
