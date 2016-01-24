'use strict';
import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


var products = [];

function addProducts(quantity) { 
  var startId = products.length;
  for (var i = 0; i < quantity; i++) { 
    var id = startId + i;
    products.push({
      id: id,
      name: "Item name " + id,
      price: 2100 + i 
    });
  } 
}

addProducts(100);

export default class ExternallyManagedSelection extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
      selected: []
    };
  } 

  render(){
    let onRowSelect = ({id}, isSelected) => { 
      if (isSelected && this.state.selected.length !== 2) { 
        this.setState({ selected: [...this.state.selected, id].sort() });
      } 
      else { 
        this.setState({ selected: this.state.selected.filter(it => it !== id) });
      } 
      return false;
    } 

    var selectRowProp = { 
      mode: "checkbox",
      clickToSelect: true,
      onSelect: onRowSelect,
      selected: this.state.selected
    };

    var options = {
      sizePerPageList: [5, 10, 15, 20],
      sizePerPage: 10,
      sortName: 'id',
      sortOrder: 'desc'
    }

    return ( 
      <BootstrapTable data={products} selectRow={selectRowProp} pagination={true} options={options}>
        <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
      </BootstrapTable>
   );
  } 
};
