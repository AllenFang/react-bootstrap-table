'use strict';
import React from 'react';
import {BootstrapTable, TableHeaderColumn, TableDataSet} from 'react-bootstrap-table';

export default class TableDataSetTable extends React.Component{

  constructor(props){
    super(props);
    this.dataSet = new TableDataSet(this._addProducts(30));
    // this.state = {
    //   products: this._addProducts(5)
    // };
  }

  handleChangeData(){
    console.log('@');
    // this.setState({
    //   products: this._addProducts(10)
    // });
    this.dataSet.setData(this._addProducts(60));
  }

  render(){
    return (
      <div>
        <button onClick={this.handleChangeData.bind(this)}>Click to Change data</button>
        <BootstrapTable data={this.dataSet} pagination={true}>
            <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
            <TableHeaderColumn dataSort={true} dataField="name">Product Name</TableHeaderColumn>
            <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }

  _addProducts(quantity){
    var products = [];
    var startId = products.length;
    for (var i = 0; i < quantity; i++) {
      var id = startId + i;
      products.push({
        id: id,
        name: "Item name " + id,
        price: 2100 + i
      });
    }
    return products;
  }
};
