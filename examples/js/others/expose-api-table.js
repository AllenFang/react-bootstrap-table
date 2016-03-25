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

addProducts(100);

export default class ExposeApiTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleClick = (rowKey) => {
    alert(this.refs.table.getPageByRowKey(rowKey));
  }

  render() {
    return (
      <div>
        <div className='form-inline'>
          { `typing your row key -> ` }
          <input
            className='form-control'
            ref='rowKeyInput'
            onChange={ (e) => {
              this.setState( {
                text: e.target.value
              } );
            } }
            value={ this.state.text } />
          { ' ' }
          <button
            className='btn btn-success'
            onClick={ () => {
              this.handleClick(parseInt(this.refs.rowKeyInput.value, 10));
            } }>
              get the page
          </button>
        </div>
        <BootstrapTable
          ref='table'
          data={ products }
          pagination={ true }
          search={ true }>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
   );
  }
}
