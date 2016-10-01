/* eslint max-len: 0 */
/* eslint no-unused-vars: 0 */
/* eslint no-alert: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
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

class MySearchPanel extends React.Component {
  render() {
    return (
      <div className='input-group'>
        <span className='input-group-btn'>
          { this.props.clearBtn }
        </span>
        <input type='text' className='form-control'>
      </div>
    );
  }
}



export default class CustomSearchFieldTable1 extends React.Component {

  renderCustomClearSearch = (onClick) => {
    return (
      return (
        <button
          className='btn btn-success'
          onClick={ onClick }>
          Empty
        </button>
      );
    );
  }

  render() {
    const options = {
      clearSearch: true,
      clearSearchBtn: this.renderCustomClearSearch,
      // searchField: (props) => (<MySearchField { ...props }/>),
      searchPanel: (props) => (<MySearchPanel { ...props }/>)
    };
    return (
      <BootstrapTable data={ products } options={ options } search>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
