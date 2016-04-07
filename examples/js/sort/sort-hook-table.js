/* eslint max-len: 0 */
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

addProducts(5);

export default class SortHookTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortName: undefined,
      sortOrder: undefined
    };

    this.options = {
      onSortChange: this.onSortChange.bind(this)
    };
  }

  onSortChange(sortName, sortOrder) {
    this.setState({
      sortName,
      sortOrder
    });
  }

  render() {
    return (
      <div>
        <p style={ { color: 'red' } }>sort: sortName={ this.state.sortName }, sortOrder={ this.state.sortOrder }</p>
        <BootstrapTable data={ products } options={ this.options }>
          <TableHeaderColumn dataField='id' isKey={ true } dataSort={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name' dataSort={ true }>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
