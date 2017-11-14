/* eslint max-len: 0 */
/* eslint no-unused-vars: 0 */
/* eslint no-alert: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

// Initialize the product array.
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

/*
Custom Download button that uses the DropdownButton component
from react-bootstrap.
*/
function DownloadButton({ bootStrapTableOnClick, onSelect }) {
  /*
  This handler is fired by the react-bootstrap DropdownButton component
  when the user has selected an export option (tsv or csv).  It passes
  in the eventKey from the MenuItem that was selected by the user.
   */
  function handleOnSelect(eventKey) {
    /*
    Fire the user specified action and pass the key
    and react-bootstrap-table onClick function.
    */
    onSelect(eventKey, bootStrapTableOnClick);
  }
  return (
    <div>
      <DropdownButton bsStyle='default' title='Export' id='export' onSelect={ handleOnSelect }>
        <MenuItem eventKey='csv'>CSV</MenuItem>
        <MenuItem eventKey='tsv'>TSV</MenuItem>
      </DropdownButton>
    </div>
  );
}
DownloadButton.propTypes = {
  // The onClick handler received from react-bootstrap-table.
  bootStrapTableOnClick: PropTypes.func.isRequired,
  // A handler that fires when the user selects an export option.
  onSelect: PropTypes.func.isRequired
};

class CustomCSVOrTSVButtonTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      extension: 'csv',
      separator: ','
    };
    this.updateExportOpts = this.updateExportOpts.bind(this);
    this.getFilename = this.getFilename.bind(this);
  }

  getFilename() {
    return 'spreadsheet' + '.' + this.state.extension;
  }

  updateExportOpts(format, tableOnClick) {
    /*
      Here we pass the react-bootstrap-table onClick event handler to setState
      to ensure that it gets called after the state has been mutated.
     */
    if (format === 'tsv') {
      this.setState({ extension: 'tsv', separator: '\t' }, tableOnClick);
    } else {
      this.setState({ extension: 'csv', separator: ',' }, tableOnClick);
    }
  }

  render() {
    const options = {
      exportCSVBtn: (onClick) => <DownloadButton bootStrapTableOnClick={ onClick } onSelect={ this.updateExportOpts } />,
      exportCSVSeparator: this.state.separator
    };
    return (
      <BootstrapTable data={ products } options={ options } csvFileName={ this.getFilename } exportCSV={ true }>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
export default CustomCSVOrTSVButtonTable;
