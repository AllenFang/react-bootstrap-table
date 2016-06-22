/* eslint no-alert: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const products = Array.apply(null, Array(10)).map( (v, id) => {
  return {
    id: id,
    name: 'Item name ' + id,
    price: 2100 + id
  };
});

class CustomButtons extends React.Component {
  render() {
    const customButtons = [
      {
        text: 'Display an alert',
        handler: () => alert('Custom button Clicked')
      },
      {
        text: 'Do not click here !',
        handler: () => alert('You, bad boy !'),
        bsStyle: 'warning',
        icon: 'alert'
      }
    ];
    return (
      <BootstrapTable
          data={ products }
          customButtons={ customButtons }>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

export default CustomButtons;
