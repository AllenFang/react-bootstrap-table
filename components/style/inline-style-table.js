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
  render() {
    return (
      <BootstrapTable insertRow exportCSV data={ products }
        tableStyle={ { border: '#0000FF 2.5px solid' } }
        containerStyle={ { border: '#FFBB73 2.5px solid' } }
        headerStyle={ { border: 'red 1px solid' } }
        bodyStyle={ { border: 'green 1px solid' } }>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
