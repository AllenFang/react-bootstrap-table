/* eslint max-len: 0 */
/* eslint no-alert: 0 */
/* eslint guard-for-in: 0 */
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

export default class SelectAllOnCurrPage extends React.Component {

  onSelectAll = (isSelected) => {
    if (isSelected) {
      return this.refs.table.state.data.map(row => row.id);
    }
  }

  render() {
    const selectRowProp = {
      mode: 'checkbox',
      clickToSelect: true,
      onSelectAll: this.onSelectAll
    };

    return (
      <BootstrapTable ref='table' data={ products } selectRow={ selectRowProp } pagination>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
