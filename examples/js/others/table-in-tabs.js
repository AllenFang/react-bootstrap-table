/* eslint max-len: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Tabs, Tab } from 'react-bootstrap';

const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      price: 2100 + i
    });
  }
}

addProducts(5);

export default class TableInTabs extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        key: 2
      };
    }

    handleTabChange = (key) => {
      this.setState({
        key
      }, () => {
        /*
         * If you enable animation in react-bootstrap tab
         * please remember to call forceUpdate in async call.
         * If disable animation, call forceUpdate directly.
         */
        if (key === 1) {
          setTimeout(() => {
            this.refs.table1.forceUpdate();
          }, 500);
        } else if (key === 2) {
          setTimeout(() => {
            this.refs.table2.forceUpdate();
          }, 500);
        }
      });
    }

    render() {
      return (
        <Tabs activeKey={ this.state.key } onSelect={ this.handleTabChange } animation>
          <Tab eventKey={ 1 } title='Tab 1'>
            <BootstrapTable ref='table1' data={ products }>
              <TableHeaderColumn dataField='id' isKey dataSort>Product ID</TableHeaderColumn>
              <TableHeaderColumn dataField='name' width='300' dataSort>Product Name</TableHeaderColumn>
              <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
            </BootstrapTable>
          </Tab>
          <Tab eventKey={ 2 } title='Tab 2'>
            <BootstrapTable ref='table2' data={ products }>
              <TableHeaderColumn dataField='id' isKey dataSort>Product ID</TableHeaderColumn>
              <TableHeaderColumn dataField='name' width='300' dataSort>Product Name</TableHeaderColumn>
              <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
              <TableHeaderColumn dataField='price' width='90'>Product Price</TableHeaderColumn>
            </BootstrapTable>
          </Tab>
          <Tab eventKey={ 3 } title='Tab 3'>Tab 3 content</Tab>
        </Tabs>
      );
    }
}
