/* eslint max-len: 0 */
/* eslint no-unused-vars: 0 */
/* eslint no-alert: 0 */
import React, { Component } from 'react';
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

class MyCustomBody extends Component {

  getFieldValue() {
    const newRow = {};
    this.props.columns.forEach((column, i) => {
      newRow[column.field] = this.refs[column.field].value;
    }, this);
    return newRow;
  }

  render() {
    const { columns, validateState } = this.props;
    return (
      <div className='modal-body'>
        <h2 style={ { color: 'red' } }>Custom body</h2>
        <div>
          {
            this.props.columns.map((column, i) => {
              const {
                editable,
                format,
                field,
                name,
                hiddenOnInsert
              } = column;

              if (hiddenOnInsert) {
                // when you want same auto generate value
                // and not allow edit, for example ID field
                return null;
              }
              const error = validateState[field] ?
                (<span className='help-block bg-danger'>{ validateState[field] }</span>) :
                null;
              return (
                <div className='form-group' key={ field }>
                  <label>{ name }</label>
                  <input ref={ field } type='text' defaultValue={ '' } />
                  { error }
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default class CustomInsertModalBodyTable extends React.Component {

  createCustomModalBody = (columns, validateState, ignoreEditable) => {
    return (
      <MyCustomBody columns={ columns }
        validateState={ validateState }
        ignoreEditable={ ignoreEditable }/>
    );
  }

  render() {
    const options = {
      insertModalBody: this.createCustomModalBody
    };
    return (
      <BootstrapTable data={ products } options={ options } insertRow>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
