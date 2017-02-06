/* eslint max-len: 0 */
/* eslint no-console: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const products = [];

function addProducts(quantity) {
  const startId = products.length;
  let price = 2100;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;

    if (id % 5 === 0) {
      price += 100;
    }

    products.push({
      id: id,
      name: 'Item name ' + (id % 8 + 1),
      price: price
    });
  }
}

addProducts(15);

export default class ExternalMultiSort extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortName: [],
      sortOrder: []
    };
    this.onSortChange = this.onSortChange.bind(this);
    this.cleanSort = this.cleanSort.bind(this);
  }

  onSortChange(name, order) {
    const sortName = [];
    const sortOrder = [];

    for (let i = 0; i < this.state.sortName.length; i++) {
      if (this.state.sortName[i] !== name) {
        sortName.push(this.state.sortName[i]);
        sortOrder.push(this.state.sortOrder[i]);
      }
    }

    sortName.push(name);
    sortOrder.push(order);
    this.setState({
      sortName,
      sortOrder
    });
  }

  cleanSort() {
    this.setState({
      sortName: [],
      sortOrder: []
    });
  }

  render() {
    const options = {
      // reassign the multi sort list by an Array
      // if you dont want to control al the sort list, you can only assign the String to sortName and sort Order
      sortName: this.state.sortName,
      sortOrder: this.state.sortOrder,
      onSortChange: this.onSortChange
    };
    return (
      <div>
        <button className='btn ben-default' onClick={ this.cleanSort }>Clean</button>
        <p style={ { color: 'red' } }>sort: sortName={ this.state.sortName }, sortOrder={ this.state.sortOrder }</p>
        <BootstrapTable data={ products } options={ options } multiColumnSort={ 2 }>
          <TableHeaderColumn dataField='id' isKey={ true } dataSort={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name' dataSort={ true }>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
