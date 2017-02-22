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

  cleanBtnClick = () => {
    this.refs.seachInput.value = '';
    this.props.search('');
  }

  seachBanana = () => {
    this.refs.seachInput.value = 'banana';
    this.props.search('banana');
  }

  render() {
    return (
      <div className='input-group'>
        <span className='input-group-btn'>
          <button
            className='btn btn-default'
            type='button'
            onClick={ this.cleanBtnClick }>
            Clean
          </button>
          <button
            className='btn btn-default'
            type='button'
            onClick={ this.seachBanana }>
            Banana
          </button>
        </span>
        <input
          ref='seachInput'
          className='form-control'
          type='text'
          disabled
          defaultValue={ this.props.defaultValue }
          placeholder={ this.props.placeholder }/>
      </div>
    );
  }
}

export default class CustomSearchFieldTable2 extends React.Component {

  render() {
    const options = {
      clearSearch: true,
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
