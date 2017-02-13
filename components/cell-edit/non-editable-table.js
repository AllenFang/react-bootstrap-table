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

// make colum 'Product Name' is non editable
export default class NonEditableTable extends React.Component {
  render() {
    const cellEditProp = {
      mode: 'click',
      nonEditableRows: function() {
        // if product id less than 3, will cause the whole row noneditable
        // this function should return an array of row keys
        return products.filter(p => p.id < 3).map(p => p.id);
      }
    };
    return (
      <BootstrapTable data={ products } cellEdit={ cellEditProp } insertRow={ true }>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name' editable={ false }>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
