/* eslint max-len: 0 */
/* eslint no-unused-vars: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      isInStock: (i % 3 === 0) ? 'yes' : 'no'
    });
  }
}

addProducts(5);

class CheckboxFilter extends React.Component {
  constructor(props) {
    super(props);
    this.filter = this.filter.bind(this);
    this.isFiltered = this.isFiltered.bind(this);
  }

  filter(event) {
    if (this.refs.nokCheckbox.checked && this.refs.okCheckbox.checked) {
      // all checkboxes are checked means we want to remove the filter for this column
      this.props.filterHandler();
    } else {
      this.props.filterHandler({ callback: this.isFiltered });
    }
  }

  isFiltered(targetValue) {
    if (targetValue === 'no') {
      return (this.refs.nokCheckbox.checked);
    } else {
      return (this.refs.okCheckbox.checked);
    }
  }

  cleanFiltered() {
    this.refs.okCheckbox.checked = true;
    this.refs.nokCheckbox.checked = true;
    this.props.filterHandler();
  }

  render() {
    return (
      <div>
        <input ref='okCheckbox' type='checkbox' className='filter' onChange={ this.filter } defaultChecked={ true } /><label>{ this.props.textOK }</label>
        <input ref='nokCheckbox' type='checkbox' className='filter' onChange={ this.filter } defaultChecked={ true } style={ { marginLeft: 30 + 'px' } } /><label>{ this.props.textNOK }</label>
      </div>
    );
  }
}

CheckboxFilter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
  textOK: PropTypes.string,
  textNOK: PropTypes.string
};

CheckboxFilter.defaultProps = {
  textOK: 'OK',
  textNOK: 'Not OK'
};

function getCustomFilter(filterHandler, customFilterParameters) {
  return (
    <CheckboxFilter filterHandler={ filterHandler } textOK={ customFilterParameters.textOK } textNOK={ customFilterParameters.textNOK } />
  );
}

export default class CustomFilter extends React.Component {
  handleClick = () => {
    this.refs.isInStock.cleanFiltered();
  }

  render() {
    return (
      <div>
        <button className='btn btn-default' onClick={ this.handleClick }>Clear Filter</button>
        <BootstrapTable data={ products }>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn ref='isInStock' dataField='isInStock' filter={ { type: 'CustomFilter', getElement: getCustomFilter, customFilterParameters: { textOK: 'yes', textNOK: 'no' } } }>Product Is In Stock</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
