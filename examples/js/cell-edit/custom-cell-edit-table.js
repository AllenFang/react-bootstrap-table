/* eslint max-len: 0 */
/* eslint no-alert: 0 */
/* eslint guard-for-in: 0 */
/* eslint no-unused-vars: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const products = [];

const currencies = [ 'USD', 'GBP', 'EUR' ];
const regions = [ 'North', 'South', 'East', 'West' ];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      price: {
        amount: 2100 + i,
        currency: currencies[i % currencies.length]
      },
      regions: regions.slice(0, (i % regions.length) + 1)
    });
  }
}

addProducts(5);

const cellEditProp = {
  mode: 'click'
};

class NameEditor extends React.Component {
  constructor(props) {
    super(props);
    this.updateData = this.updateData.bind(this);
    this.state = {
      name: props.defaultValue,
      open: true
    };
  }
  focus() {
    this.refs.inputRef.focus();
  }
  updateData() {
    this.props.onUpdate(this.state.name);
  }
  close = () => {
    this.setState({ open: false });
    this.props.onUpdate(this.props.defaultValue);
  }
  render() {
    const fadeIn = this.state.open ? 'in' : '';
    const display = this.state.open ? 'block' : 'none';
    return (
      <div className={ `modal fade ${fadeIn}` } id='myModal' role='dialog' style={ { display } }>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-body'>
              <input
                ref='inputRef'
                className={ ( this.props.editorClass || '') + ' form-control editor edit-text' }
                style={ { display: 'inline', width: '50%' } }
                type='text'
                value={ this.state.name }
                onChange={ e => { this.setState({ name: e.currentTarget.value }); } } />
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-primary' onClick={ this.updateData }>Save</button>
              <button type='button' className='btn btn-default' onClick={ this.close }>Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class PriceEditor extends React.Component {
  constructor(props) {
    super(props);
    this.updateData = this.updateData.bind(this);
    this.state = { amount: props.defaultValue.amount, currency: props.defaultValue.currency };
  }
  focus() {
    this.refs.inputRef.focus();
  }
  updateData() {
    this.props.onUpdate({ amount: this.state.amount, currency: this.state.currency });
  }
  render() {
    return (
      <span>
        <input
          ref='inputRef'
          className={ ( this.props.editorClass || '') + ' form-control editor edit-text' }
          style={ { display: 'inline', width: '50%' } }
          type='text'
          value={ this.state.amount }
          onKeyDown={ this.props.onKeyDown }
          onChange={ (ev) => { this.setState({ amount: parseInt(ev.currentTarget.value, 10) }); } } />
        <select
          value={ this.state.currency }
          onKeyDown={ this.props.onKeyDown }
          onChange={ (ev) => { this.setState({ currency: ev.currentTarget.value }); } } >
          { currencies.map(currency => (<option key={ currency } value={ currency }>{ currency }</option>)) }
        </select>
        <button
          className='btn btn-info btn-xs textarea-save-btn'
          onClick={ this.updateData }>
          save
        </button>
      </span>
    );
  }
}

class RegionsEditor extends React.Component {
  constructor(props) {
    super(props);
    this.updateData = this.updateData.bind(this);
    this.state = { regions: props.defaultValue };
    this.onToggleRegion = this.onToggleRegion.bind(this);
  }
  focus() {
  }
  onToggleRegion(event) {
    const region = event.currentTarget.name;
    if (this.state.regions.indexOf(region) < 0) {
      this.setState({ regions: this.state.regions.concat([ region ]) });
    } else {
      this.setState({ regions: this.state.regions.filter(r => r !== region) });
    }
  }
  updateData() {
    this.props.onUpdate(this.state.regions);
  }
  render() {
    const regionCheckBoxes = regions.map(region => (
      <span key={ `span-${region}` }>
        <input
          type='checkbox'
          key={ region }
          name={ region }
          checked={ this.state.regions.indexOf(region) > -1 }
          onKeyDown={ this.props.onKeyDown }
          onChange={ this.onToggleRegion } />
        <label key={ `label-${region}` } htmlFor={ region }>{ region }</label>
      </span>
    ));
    return (
      <span ref='inputRef'>
        { regionCheckBoxes }
        <button
          className='btn btn-info btn-xs textarea-save-btn'
          onClick={ this.updateData }>
          save
        </button>
      </span>
    );
  }
}

function priceFormatter(cell, row) {
  return `<i class='glyphicon glyphicon-${cell.currency.toLowerCase()}'></i> ${cell.amount}`;
}

const regionsFormatter = (cell, row) => (<span>{ (cell || []).join(',') }</span>);

/*
  The getElement function take two arguments,
  1. onUpdate: if you want to apply the modified data, call this function
  2. props: contain customEditorParameters, whole row data, defaultValue and attrs
*/
const createNameEditor = (onUpdate, props) => (<NameEditor onUpdate={ onUpdate } {...props}/>);
const createPriceEditor = (onUpdate, props) => (<PriceEditor onUpdate={ onUpdate } {...props}/>);
const createRegionsEditor = (onUpdate, props) => (<RegionsEditor onUpdate={ onUpdate } {...props}/>);

export default class CustomCellEditTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products } cellEdit={ cellEditProp }>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn
            dataField='name'
            customEditor={ { getElement: createNameEditor } }>
            Product Name
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField='price'
            dataFormat={ priceFormatter }
            customEditor={ { getElement: createPriceEditor, customEditorParameters: { currencies: currencies } } }>
            Product Price
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField='regions'
            dataFormat={ regionsFormatter }
            customEditor={ { getElement: createRegionsEditor } }>
            Regions
          </TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
