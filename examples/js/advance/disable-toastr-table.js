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
  const response = { isValid: true, notification: { type: 'success', msg: '', title: '' } };
  if (!value) {
    response.isValid = false;
    response.notification.type = 'error';
    response.notification.msg = 'Value must be inserted';
    response.notification.title = 'Requested Value';
  } else if (value.length < 10) {
    response.isValid = false;
    response.notification.type = 'error';
    response.notification.msg = 'Value must have 10+ characters';
    response.notification.title = 'Invalid Value';
  }
  return response;
}

function jobStatusValidator(value) {
  const nan = isNaN(parseInt(value, 10));
  if (nan) {
    return 'Job Status must be a integer!';
  }
  return true;
}

export default class DisableToastrTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      errType: '',
      errMsg: ''
    };
  }

  render() {
    const options = {
      beforeShowError: (type, msg) => {
        this.setState({
          errType: type,
          errMsg: msg
        });
        // return false or do not return will not trigger the toastr,
        // if you want the toastr popup, you should return true always.
      }
    };

    return (
      <div>
        <p style={ { color: 'red' } }>{ `[${this.state.errType}]: ${this.state.errMsg}` }</p>
        <BootstrapTable data={ jobs } cellEdit={ cellEditProp } insertRow={ true } options={ options }>
            <TableHeaderColumn dataField='id' isKey={ true }>Job ID</TableHeaderColumn>
            <TableHeaderColumn dataField='status' editable={ { validator: jobStatusValidator } }>Job Status</TableHeaderColumn>
            <TableHeaderColumn dataField='name' editable={ { type: 'textarea', validator: jobNameValidator } }>Job Name</TableHeaderColumn>
            <TableHeaderColumn dataField='type' editable={ { type: 'select', options: { values: jobTypes } } }>Job Type</TableHeaderColumn>
            <TableHeaderColumn dataField='active' editable={ { type: 'checkbox', options: { values: 'Y:N' } } }>Active</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
