/* eslint max-len: 0 */
/* eslint no-unused-vars: 0 */
/* eslint no-alert: 0 */
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

export default class DefaultCustomInsertModalFooterTable extends React.Component {

  createCustomModalFooter = (onClose, onSave) => {
    const style = {
      backgroundColor: '#ffffff'
    };
    return (
      <div className='modal-footer' style={ style }>
        <h3>Its a Custom footer</h3>
        <button className='btn btn-xs btn-info' onClick={ onClose }>Leave</button>
        <button className='btn btn-xs btn-danger' onClick={ onSave }>Confirm</button>
      </div>
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
