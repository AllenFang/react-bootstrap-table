/* eslint no-console: 0 */
/* eslint no-console: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const products = [];
const footerData = [];

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

addProducts(50);

footerData.push({
  id: '',
  name: 'Totals',
  price: 22000
});

export default class ResizableColumnTable extends React.Component {
  // columnResizing(e, newWidth) {
  //   console.log(newWidth);
  //   console.dir(this);
  //   // this.refs.restable._adjustTable();
  //   // this.refs.restable.forceUpdate();
  //   this.forceUpdate();
  // }
  // columnSorting(order, dataField) {
  //   console.log(order);
  //   console.log(dataField);
  // }
  onSortChange = (sortName, sortOrder) => {
    // console.log(sortName);
    console.log(sortOrder);
  }
  onResizing(e, newWidth) {
    console.log(newWidth);
  }
  componentWillMount() {
    // this.columnResizing = this.columnResizing.bind(this);
  }
  render() {
    const options = {
      onSortChange: this.onSortChange,
      onResizing: this.onResizing
    };

    return (
      <BootstrapTable ref='restable' data={ products } options={ options }
        footerData={ footerData } height='200px' resizable={ true }>
        <TableHeaderColumn dataField='id' isKey={ true } resize
          resizeOptions={ { minWidth: 100, maxWidth: false } }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name' dataSort resize
          // onResizing={ this.columnResizing }
          // onSort={ this.columnSorting }
          resizeOptions={ { minWidth: 200, maxWidth: false } }>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price' dataSort resize
          resizeOptions={ { minWidth: 200, maxWidth: false } }>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
