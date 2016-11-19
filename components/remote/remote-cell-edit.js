import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class RemoteCellEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cellEditProp = {
      mode: 'click'
    };
    return (
      <BootstrapTable data={ this.props.data }
                      remote={ true }
                      cellEdit={ cellEditProp }
                      options={ { onCellEdit: this.props.onCellEdit } }>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
