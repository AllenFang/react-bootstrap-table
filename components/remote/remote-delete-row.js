import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class RemoteDeleteRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BootstrapTable data={ this.props.data }
                      remote={ true }
                      deleteRow={ true }
                      selectRow={ { mode: 'radio' } }
                      options={ { onDeleteRow: this.props.onDeleteRow } }>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
