/* eslint no-console: 0 */
/* eslint no-console: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


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

export default class MouseEventTable extends React.Component {
  render() {
    const options = {
      onMouseLeave: function() {
        console.log('mouse leave from table');
      },
      onMouseEnter: function() {
        console.log('mouse enter to table');
      },
      onRowMouseOut: function(row, e) {
        console.log(e);
        console.log('mouse leave from row ' + row.id);
      },
      onRowMouseOver: function(row, e) {
        console.log(e);
        console.log('mouse enter from row ' + row.id);
      }
    };

    return (
      <BootstrapTable data={ products } options={ options }>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
