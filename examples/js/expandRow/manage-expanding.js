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
      expand: [ {
        fieldA: 'test1',
        fieldB: (i + 1) * 99,
        fieldC: (i + 1) * Math.random() * 100,
        fieldD: '123eedd' + i
      }, {
        fieldA: 'test2',
        fieldB: i * 99,
        fieldC: i * Math.random() * 100,
        fieldD: '123eedd' + i
      } ]
    });
  }
}
addProducts(5);

class BSTable extends React.Component {
  render() {
    if (this.props.data) {
      return (
        <BootstrapTable data={ this.props.data }>
          <TableHeaderColumn dataField='fieldA' isKey={ true }>Field A</TableHeaderColumn>
          <TableHeaderColumn dataField='fieldB'>Field B</TableHeaderColumn>
          <TableHeaderColumn dataField='fieldC'>Field C</TableHeaderColumn>
          <TableHeaderColumn dataField='fieldD'>Field D</TableHeaderColumn>
        </BootstrapTable>);
    } else {
      return (<p>?</p>);
    }
  }
}

export default class ExpandRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Default expanding row
      expanding: [ 2 ]
    };
  }

  isExpandableRow() {
    return true;
  }

  expandComponent(row) {
    return (
      <BSTable data={ row.expand } />
    );
  }

  render() {
    const options = {
      expandRowBgColor: 'rgb(66, 134, 244)',
      expanding: this.state.expanding
    };
    return (
      <BootstrapTable data={ products }
        options={ options }
        expandableRow={ this.isExpandableRow }
        expandComponent={ this.expandComponent }
        search>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name' expandable={ false }>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price' expandable={ false }>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
