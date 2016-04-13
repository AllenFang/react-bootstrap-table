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

// validator function pass the user input value and should return true|false.
function jobNameValidator(value) {
  if (!value) {
    return 'Job Name is required!';
  } else if (value.length < 10) {
    return 'Job Name length must great 10 char';
  }
  return true;
}

function jobStatusValidator(value) {
  const nan = isNaN(parseInt(value, 10));
  if (nan) {
    return 'Job Status must be a integer!';
  }
  return true;
}

export default class EditTypeTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ jobs } cellEdit={ cellEditProp } insertRow={ true }>
          <TableHeaderColumn dataField='id' isKey={ true }>Job ID</TableHeaderColumn>
          <TableHeaderColumn dataField='status' editable={ { validator: jobStatusValidator } }>Job Status</TableHeaderColumn>
          <TableHeaderColumn dataField='name' editable={ { type: 'textarea', validator: jobNameValidator } }>Job Name</TableHeaderColumn>
          <TableHeaderColumn dataField='type' editable={ { type: 'select', options: { values: jobTypes } } }>Job Type</TableHeaderColumn>
          <TableHeaderColumn dataField='active' editable={ { type: 'checkbox', options: { values: 'Y:N' } } }>Active</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
