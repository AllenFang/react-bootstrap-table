/* eslint max-len: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const products = [];

function addProducts(quantity) {
  const startId = products.length;
  const fruits = [ 'banana', 'apple', 'orange', 'tomato', 'strawberries', 'cherries' ];
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Fruits: ' + fruits[i] + ' and ' + fruits[i + 1],
      price: 2100 + i
    });
  }
}

addProducts(5);


export default class DebounceSearchTable extends React.Component {
  render() {
    const options = {
      searchDelayTime: 3000
    };

    return (
      <BootstrapTable data={ products } search={ true } multiColumnSearch={ true } options={ options } searchPlaceholder='Search delay 500ms'>
        <TableHeaderColumn dataField='id' isKey={ true } searchable={ false }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Fruits</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
