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

export default class SelectBgColorTable extends React.Component {
  constructor(props) {
    super(props);
    this.selectedRowClass = this.selectedRowClass.bind(this);
  }

  selectedRowClass(row, isSelect) {
    if (isSelect) {
      if (row.id >= 3) {
        return 'bigger-than-three-select-row';
      } else {
        return 'less-than-three-select-row';
      }
    } else {
      return '';
    }
  }

  render() {
    const selectRowProp = {
      mode: 'checkbox',
      clickToSelect: true,
      // You can assign className with a string or function
      // String is most easy case but if you want to have more ability to custom the class name
      // you can assign a function
      className: this.selectedRowClass
    };
    return (
      <BootstrapTable data={ products } selectRow={ selectRowProp }>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
