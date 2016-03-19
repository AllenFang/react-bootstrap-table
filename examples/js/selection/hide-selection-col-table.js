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

const selectRowProp = {
  mode: 'checkbox',
  bgColor: 'pink', // you should give a bgcolor, otherwise, you can't regonize which row has been selected
  hideSelectColumn: true,  // enable hide selection column.
  clickToSelect: true  // you should enable clickToSelect, otherwise, you can't select column.
};

export default class HideSelectionColumnTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products } selectRow={ selectRowProp }>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
