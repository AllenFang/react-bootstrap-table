/* eslint no-console: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const products = [];
const apiRowKey = [ 1, 29, 103 ];

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

addProducts(150);

export default class RowkeyInputTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rowKey: [],
      RowkeyPage: []
    };
  }

  render() {
    const onEntitySelect = (page) => {
      console.log(page);
    };

    const options = {
      sizePerPage: 10,
      sortName: 'id',
      sortOrder: 'asc'
    };

    const keyHandlers = {
      rowKeys: this.state.rowKey,
      onEntitySelect: onEntitySelect
    };

    const selector = apiRowKey.map((key, index) => {
      return (
        <span key={ index }>
          <button
            className='btn btn-info'
            onClick={ () => {
              this.setState({
                rowKey: key
              });
            } }>
            { key }
          </button>
          { ' ' }
        </span>
      );
    });

    return (
      <div>
        Your selected Rowkey => { selector }
        <BootstrapTable
          data={ products }
          keyHandler={ keyHandlers }
          pagination={ true }
          options={ options }>
            <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
            <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
            <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
