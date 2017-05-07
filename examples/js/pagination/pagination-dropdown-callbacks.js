/* eslint max-len: 0 */
/* eslint no-alert: 0 */
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

addProducts(70);

export default class PaginationDropdownCallbacks extends React.Component {
  constructor(props) {
    super(props);

    this.options = {
      handleDropdownOpen: this.handleDropdownOpen.bind(this),
      handleDropdownClose: this.handleDropdownClose.bind(this)
    };
  }

  handleDropdownOpen() {
    alert('dropdown opened');
  }

  handleDropdownClose() {
    alert('dropdown closed');
  }

  render() {
    return (
      <div>
        <BootstrapTable
          data={ products }
          pagination
          options={ this.options }>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
