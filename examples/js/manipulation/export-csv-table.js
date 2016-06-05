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

export default class ExportCSVTable extends React.Component {

  csvFormatter(cell) {
    return cell + ' USD';
  }

  render() {
    return (
      <BootstrapTable data={ products } exportCSV={ true }>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name' csvHeader='product-name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price' csvFormat={ this.csvFormatter }>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
