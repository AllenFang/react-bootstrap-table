/* eslint no-console: 0 */
/* eslint no-console: 0 */
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

addProducts(5);

footerData.push({
  id: '',
  name: 'Totals',
  price: 22000
});

export default class ResizableColumnTable extends React.Component {
  render() {
    const options = { };

    return (
      <BootstrapTable data={ products } options={ options } footerData={ footerData } resizable >
          <TableHeaderColumn dataField='id' isKey={ true } resize>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name' dataSort resize>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price' dataSort>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
