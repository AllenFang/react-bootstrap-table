/* eslint max-len: 0 */
/* eslint no-unused-vars: 0 */
/* eslint no-alert: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn, InsertModalFooter } from 'react-bootstrap-table';


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

export default class DefaultCustomInsertModalFooterTable extends React.Component {

  beforeClose(e) {
    alert(`[Custom Event]: Modal close event triggered!`);
  }

  beforeSave(e) {
    alert(`[Custom Event]: Modal save event triggered!`);
  }

  createCustomModalFooter = () => {
    return (
      <InsertModalFooter
        saveBtnText='CustomSaveText'
        closeBtnText='CustomCloseText'
        closeBtnContextual='btn-warning'
        saveBtnContextual='btn-success'
        closeBtnClass='my-close-btn-class'
        saveBtnClass='my-save-btn-class'
        beforeClose={ this.beforeClose }
        beforeSave={ this.beforeSave }/>
    );
  }

  render() {
    const options = {
      insertModalFooter: this.createCustomModalFooter
    };
    return (
      <BootstrapTable data={ products } options={ options } insertRow>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
