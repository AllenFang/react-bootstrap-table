/* eslint max-len: 0 */
/* eslint no-alert: 0 */
/* eslint no-console: 0 */
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

addProducts(50);

const options = {
  onRowClick: function(row, columnIndex, rowIndex, e) {
    alert(`You click row id: ${row.id}, column index: ${columnIndex}, row index: ${rowIndex}`);
    console.log(e);
  },
  onRowDoubleClick: function(row, e) {
    alert(`You double click row id: ${row.id}`);
    console.log(e);
  }
};

export default class SingleSelectTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products } options={ options } pagination>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
