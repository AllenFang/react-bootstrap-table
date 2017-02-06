import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class RemoteAlternative extends React.Component {
  constructor(props) {
    super(props);
  }

  remote(remoteObj) {
    // Only cell editing, insert and delete row will be handled by remote store
    remoteObj.cellEdit = true;
    remoteObj.insertRow = true;
    remoteObj.dropRow = true;
    return remoteObj;
  }

  render() {
    const cellEditProp = {
      mode: 'click'
    };
    const selectRow = {
      mode: 'checkbox',
      cliclToSelct: true
    };
    return (
      <BootstrapTable data={ this.props.data }
                      selectRow={ selectRow }
                      remote={ this.remote }
                      insertRow deleteRow search pagination
                      cellEdit={ cellEditProp }
                      options={ {
                        onCellEdit: this.props.onCellEdit,
                        onDeleteRow: this.props.onDeleteRow,
                        onAddRow: this.props.onAddRow
                      } }>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price' dataSort>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
