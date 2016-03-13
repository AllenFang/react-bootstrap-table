import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';

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

addProducts(5);

export default class TableInTabs extends React.Component {
    render() {
      return(
          <Tabs defaultActiveKey={2}>
              <Tab eventKey={1} title="Tab 1">
                <BootstrapTable data={products}>
                  <TableHeaderColumn dataField="id" isKey={true} dataSort={true}>Product ID</TableHeaderColumn>
                  <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
                  <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
                </BootstrapTable>
              </Tab>
              <Tab eventKey={2} title="Tab 2">
                <BootstrapTable data={products}>
                    <TableHeaderColumn dataField="id" isKey={true} dataSort={true}>Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="name" dataSort={true} width="200">Product Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
                    <TableHeaderColumn dataField="price" width="90">Product Price</TableHeaderColumn>
                </BootstrapTable>
              </Tab>
              <Tab eventKey={3} title="Tab 3">Tab 3 content</Tab>
          </Tabs>
      );
    }
}
