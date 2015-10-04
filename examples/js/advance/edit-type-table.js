'use strict';
import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


var jobs = [];
var jobTypes = ['A','B','C','D'];

function addJobs(quantity) {
  var startId = jobs.length;
  for (var i = 0; i < quantity; i++) {
    var id = startId + i;
    jobs.push({
      id: id,
      name: "Item name " + id,
      type: 'B',
      active: i%2==0?'Y':'N'
    });
  }
}

addJobs(5);

var cellEditProp = {
  mode: "click",
  blurToSave: true
};

export default class EditTypeTable extends React.Component{
  render(){
    return (
      <BootstrapTable data={jobs} cellEdit={cellEditProp}>
          <TableHeaderColumn dataField="id" isKey={true}>Job ID</TableHeaderColumn>
          <TableHeaderColumn dataField="name" editable={{type:'textarea'}}>Job Name</TableHeaderColumn>
          <TableHeaderColumn dataField="type" editable={{type:'select', options:{values:jobTypes}}}>Job Type</TableHeaderColumn>
          <TableHeaderColumn dataField="active" editable={{type:'checkbox', options:{values:'Y:N'}}}>Active</TableHeaderColumn>
      </BootstrapTable>
    );
  }
};
