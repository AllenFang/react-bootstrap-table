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
      active: i % 2 === 0 ? 'Y' : 'N',
      datetime: '200' + i + '-12-28T14:57:00'
    });
  }
}

addJobs(5);

const cellEditProp = {
  mode: 'click',
  blurToSave: true
};

export default class EditTypeTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ jobs } cellEdit={ cellEditProp }>
        <TableHeaderColumn dataField='id' isKey={ true }>Job ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name' editable={ { type: 'textarea' } }>Job Name</TableHeaderColumn>
        <TableHeaderColumn dataField='type' editable={ { type: 'select', options: { values: jobTypes } } }>Job Type</TableHeaderColumn>
        <TableHeaderColumn dataField='active' editable={ { type: 'checkbox', options: { values: 'Y:N' } } }>Active</TableHeaderColumn>
        <TableHeaderColumn dataField='datetime' editable={ { type: 'datetime' } }>Date Time</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
