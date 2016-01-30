import React, { Component } from 'react';
import addProducts from '../utils/addProducts';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const log = o => console.log(o);

const cellEditProp = {
  mode: "click",
  afterSaveCell: log
};

const classifier = [
  { id: 2100, text: "$2100" },
  { id: 2101, text: "$2101" },
  { id: 2102, text: "$2102" },
  { id: 2103, text: "$2103" },
  { id: 2104, text: "$2104" }
];

const editable = {
  type: "select",
  options: {}
};

export default class ComboEditTable extends Component {

  render(){
    return (
      <BootstrapTable data={addProducts(5)} cellEdit={cellEditProp}>
          <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField="price"
                             displayField="text"
                             valueField="id"
                             editable={editable}
                             classifier={classifier}>Product Price
          </TableHeaderColumn>
      </BootstrapTable>
    );
  }

}