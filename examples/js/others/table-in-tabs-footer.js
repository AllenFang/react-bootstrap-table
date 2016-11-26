/* eslint max-len: 0 */
import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import FooterTable from './footer-table';

const products1 = [];
const products2 = [];
const footerData = [];

function addProducts(quantity, products) {
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

addProducts(5, products1);
addProducts(8, products2);
footerData.push({
  id: '',
  name: 'Totals',
  price: 22000
});

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
            // this.refs.table1.forceUpdate();
          }, 500);
        } else if (key === 2) {
          setTimeout(() => {
            // this.refs.table2.forceUpdate();
          }, 500);
        }
      });
    }

    render() {
      return (
        <Tabs activeKey={ this.state.key } onSelect={ this.handleTabChange } animation>
          <Tab eventKey={ 1 } title='Tab 1'>
            <FooterTable ref='table1' data={ products1 } footerData={ footerData } />
          </Tab>
          <Tab eventKey={ 2 } title='Tab 2'>
              <FooterTable ref='table2' data={ products2 } footerData={ footerData } />
          </Tab>
          <Tab eventKey={ 3 } title='Tab 3'>Tab 3 content</Tab>
        </Tabs>
      );
    }
}
