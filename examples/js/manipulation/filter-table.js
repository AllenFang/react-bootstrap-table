/* eslint max-len: 0 */
/* eslint no-console: 0 */
/* eslint guard-for-in: 0 */
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

function afterColumnFilter(filterConds, result) {
  console.log('Filter Conditions: ');
  for (const prop in filterConds) {
    console.log('Filter column= ' + prop + ', Filter value= ' + filterConds[prop]);
  }
  console.log('Result is:');
  for (let i = 0; i < result.length; i++) {
    console.log('Product: ' + result[i].id + ', ' + result[i].name + ', ' + result[i].price);
  }
}

const options = {
  afterColumnFilter: afterColumnFilter
};

export default class FilterTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products } columnFilter={ true } options={ options }>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
