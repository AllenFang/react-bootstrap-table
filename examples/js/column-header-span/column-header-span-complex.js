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
      price: 2100 + i,
      coupon: Math.round(Math.random()) ? 'yes' : 'no',
      status: Math.round(Math.random()) ? 'yes' : 'no',
      customer: 'Customer ' + i,
      order: i
    });
  }
}

addProducts(5);


export default class ColumnHeaderSpanComplex extends React.Component {
  render() {
    const selectRow = {
      mode: 'checkbox',
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
        <TableHeaderColumn row='0' colSpan='3' dataSort csvHeader='Product' headerAlign='right'>Product</TableHeaderColumn>
        <TableHeaderColumn row='1' dataField='name' width='175' dataAlign='center'>name</TableHeaderColumn>
        <TableHeaderColumn row='1' dataField='price' dataSort>price</TableHeaderColumn>
        <TableHeaderColumn row='1' dataField='coupon' width='70'>Coupon</TableHeaderColumn>
        <TableHeaderColumn row='0' csvHeader='In stock' rowSpan='2' dataField='status'>In stock</TableHeaderColumn>
        <TableHeaderColumn row='0' colSpan='2' csvHeader='Customer' filter={ { type: 'TextFilter', delay: 1000 } }>Customer</TableHeaderColumn>
        <TableHeaderColumn row='1' csvHeader='name' dataField='customer'>name</TableHeaderColumn>
        <TableHeaderColumn row='1' csvHeader='order' dataField='order' dataSort>order</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
