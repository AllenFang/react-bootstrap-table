import React, { Component } from 'react';
import addProducts from '../utils/addProducts';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const cellEditProp = {
	mode: "click",
	blurToSave: true
};

const editable = {
	type: "select",
	options: {
		values: [2000, 5000, 7000]
	}	
}

export default class ComboEditTable extends Component {

  render(){
    return (
      <BootstrapTable data={addProducts(5)} cellEdit={cellEditProp}>
          <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField="price" editable={editable}>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }

}