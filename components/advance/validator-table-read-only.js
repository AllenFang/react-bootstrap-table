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
      status: '200',
      name: 'Item name ' + id,
      type: 'B',
      active: i % 2 === 0 ? 'Y' : 'N'
    });
  }
}

addJobs(5);

const cellEditProp = {
  mode: 'click',
  blurToSave: true
};

export default class EditTypeReadOnlyTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ jobs } cellEdit={ cellEditProp } insertRow={ true }>
        <TableHeaderColumn dataField='id' isKey={ true }>Job ID</TableHeaderColumn>
        <TableHeaderColumn dataField='status'>Job Status</TableHeaderColumn>
        <TableHeaderColumn dataField='name' editable={ { type: 'textarea', readOnly: true } }>Job Name</TableHeaderColumn>
        <TableHeaderColumn dataField='type' editable={ { type: 'select', readOnly: true, options: { values: jobTypes } } }>Job Type</TableHeaderColumn>
        <TableHeaderColumn dataField='active' editable={ { type: 'checkbox', readOnly: true, options: { values: 'Y:N' } } }>Active</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}