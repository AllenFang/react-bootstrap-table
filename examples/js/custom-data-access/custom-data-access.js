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
      price: 2100 + i,
      category: {
        id: 20 + i,
        name: 'Category name ' + i
      }
    });
  }
}

addProducts(5);

function categoryName(product) {
  return product.category.name;
}

export default class TrClassStringTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products }>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price' dataAccess={ categoryName }>Category name</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

