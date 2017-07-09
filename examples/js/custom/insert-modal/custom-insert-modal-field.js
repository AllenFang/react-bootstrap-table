/* eslint max-len: 0 */
/* eslint no-unused-vars: 0 */
/* eslint no-alert: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const products = [];
const fruits = [ 'banana', 'apple', 'orange', 'tomato', 'strawberries' ];
function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: fruits[i],
      sales: i % 2 ? 'Yes' : 'No',
      price: 100 + i
    });
  }
}

addProducts(5);

class SalesRadioField extends React.Component {

  getFieldValue = () => {
    return this.refs.yes.checked ? 'Yes' : 'No';
  }

  render() {
    return (
      <div>
        <label className='radio-inline'>
          <input ref='yes' type='radio' name='optradio' value='Yes'/>Yes
        </label>
        <label className='radio-inline'>
          <input ref='no' type='radio' name='optradio' value='No'/>No
        </label>
      </div>
    );
  }
}

export default class CustomInsertModalFieldTable extends React.Component {

  customKeyField = (column, attr, editorClass, ignoreEditable) => {
    const seqId = this.refs.table.state.data.length;
    return (
      <input type='text' { ...attr } disabled value={ seqId } className={ `${editorClass}` }/>
    );
  }

  customNameField = (column, attr, editorClass, ignoreEditable, defaultValue) => {
    return (
      <select className={ `${editorClass}` } { ...attr }>
        {
          fruits.map(name => (<option key={ name } value={ name }>{ name }</option>))
        }
      </select>
    );
  }

  customSaleField = (column, attr, editorClass, ignoreEditable, defaultValue) => {
    /*
      Sometime, your field is not only a HTML element, like radio, checkbox etc.
      In this case, you are suppose to be prodived a specific method name for
      react-bootstrap-table to get the value for this field.

      Notes:
      1. You are suppose to be added ref to your custom React class
      2. You are suppose to be implement getFieldValue function and return the value that user input
    */
    return (
      <SalesRadioField ref={ attr.ref } editorClass={ editorClass } ignoreEditable={ ignoreEditable }/>
    );
  }

  render() {
    return (
      <BootstrapTable ref='table' data={ products } insertRow>
        <TableHeaderColumn dataField='id' isKey={ true } customInsertEditor={ { getElement: this.customKeyField } }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name' customInsertEditor={ { getElement: this.customNameField } }>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='sales' customInsertEditor={ { getElement: this.customSaleField } }>On Sales?</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
