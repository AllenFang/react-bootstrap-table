/* eslint max-len: 0 */
/* eslint no-unused-vars: 0*/
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const jobs = [];

function addProducts(quantity) {
  const startId = jobs.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    jobs.push({
      id: id,
      name: 'Application_Name_ ' + id,
      active: i % 2 === 0 ? true : false
    });
  }
}

addProducts(5);


class ActiveFormatter extends React.Component {
  render() {
    return (
      <input type='checkbox' checked={ this.props.active }/>
    );
  }
}

function activeFormatter(cell, row) {
  return (
    <ActiveFormatter active={ cell } />
  );
}

export default class ReactColumnFormatTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ jobs }>
          <TableHeaderColumn dataField='id' isKey={ true }>Job ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Job Name</TableHeaderColumn>
          <TableHeaderColumn dataField='active' dataFormat={ activeFormatter }>Active</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
