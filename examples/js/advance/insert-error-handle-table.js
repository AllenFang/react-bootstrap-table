/* eslint max-len: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const jobs = [];
const jobTypes = [ 'A', 'B', 'C', 'D' ];

function addJobs(quantity) {
  const startId = jobs.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    jobs.push({
      id: id,
      name: 'Item name ' + id,
      type: 'B',
      active: i % 2 === 0 ? 'Y' : 'N'
    });
  }
}

addJobs(5);

export default class InsertErrorHandleTable extends React.Component {

  handleAddRowWithSyncError = () => {
    // Force to return an error message anyway.
    return 'Sorry, There\'s some error happend';
  }

  handleAddRowWithASyncError = (row, colInfo, errorCallback) => {
    // Use setTimeout to perform a async operation
    setTimeout(() => {
      // Force to return an error message anyway.
      errorCallback('Sorry, There\'s some error happend');
    }, 5000);
    // return false to tell react-bootstrap-table to handle this operation as async
    // react-bootstrap-table will wait errorCallback be called.
    return false;
  }

  render() {
    const option = {
      onAddRow: this.handleAddRowWithASyncError
      // onAddRow: this.handleAddRowWithSyncError
    };
    return (
      <div>
        <BootstrapTable data={ jobs } insertRow options={ option }>
            <TableHeaderColumn dataField='id' isKey={ true }>Job ID</TableHeaderColumn>
            <TableHeaderColumn dataField='name'>Job Name</TableHeaderColumn>
            <TableHeaderColumn dataField='type' editable={ { type: 'select', options: { values: jobTypes } } }>Job Type</TableHeaderColumn>
            <TableHeaderColumn dataField='active' editable={ { type: 'checkbox', options: { values: 'Y:N' } } }>Active</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
