import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class RemoteSorting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BootstrapTable data={ this.props.data }
                      remote={ true }
                      options={ { onSortChange: this.props.onSortChange } }>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price' dataSort={ true }>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
