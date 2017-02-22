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
      <div>
        <div className='input-group'>
          <span className='input-group-btn'>
            <button
              className='btn btn-primary'
              type='button'>
              CustomButton1
            </button>
            { this.props.clearBtn }
          </span>
        </div>
        { this.props.searchField }
      </div>
    );
  }
}

export default class CustomSearchFieldTable1 extends React.Component {

  renderCustomClearSearch = (onClick) => {
    return (
      <button
        className='btn btn-success'
        onClick={ onClick }>
        Empty
      </button>
    );
  }

  render() {
    const options = {
      clearSearch: true,
      clearSearchBtn: this.renderCustomClearSearch,
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
