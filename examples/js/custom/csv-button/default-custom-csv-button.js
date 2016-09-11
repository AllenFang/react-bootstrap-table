/* eslint max-len: 0 */
/* eslint no-unused-vars: 0 */
/* eslint no-alert: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn, ExportCSVButton } from 'react-bootstrap-table';


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

export default class DefaultCustomInsertButtonTable extends React.Component {

  createCustomExportCSVButton = () => {
    return (
      <ExportCSVButton
        btnText='CustomExportText'
        btnContextual='btn-danger'
        btnClass='my-custom-class'
        btnGlyphicon='glyphicon-edit'/>
    );
  }

  render() {
    const options = {
      exportCSVBtn: this.createCustomExportCSVButton
    };
    return (
      <BootstrapTable data={ products } options={ options } exportCSV>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
