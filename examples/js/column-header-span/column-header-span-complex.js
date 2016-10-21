/* eslint max-len: 0 */
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


export default class ColumnHeaderSpanComplex extends React.Component {
  render() {
    const selectRow = {
      mode: 'checkbox',
      clickToSelect: true,
      bgColor: 'rgb(238, 193, 213)'
    };

    const cellEdit = {
      mode: 'click',
      blurToSave: true
    };
    return (
     <BootstrapTable data={ products }
        selectRow={ selectRow }
        cellEdit={ cellEdit }
        insertRow deleteRow exportCSV>
        <TableHeaderColumn row='0' rowSpan='2' dataField='id' isKey={ true } >ID</TableHeaderColumn>
        <TableHeaderColumn row='0' colSpan='2'>Product</TableHeaderColumn>
        <TableHeaderColumn row='1' dataField='name'>Name</TableHeaderColumn>
        <TableHeaderColumn row='1' dataField='price'>Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}