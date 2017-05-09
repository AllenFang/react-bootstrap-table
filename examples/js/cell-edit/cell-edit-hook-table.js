/* eslint max-len: 0 */
/* eslint no-alert: 0 */
/* eslint guard-for-in: 0 */
/* eslint no-unused-vars: 0 */
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

function onAfterSaveCell(row, cellName, cellValue) {
  alert(`Save cell ${cellName} with value ${cellValue}`);

  let rowStr = '';
  for (const prop in row) {
    rowStr += prop + ': ' + row[prop] + '\n';
  }

  alert('The whole row :\n' + rowStr);
}

function onBeforeSaveCell(row, cellName, cellValue) {
  // You can do any validation on here for editing value,
  // return false for reject the editing
  return true;
}

function onBeforeSaveCellAsync(row, cellName, cellValue, done) {
  // if your validation is async, for example: you want to pop a confirm dialog for user to confim
  // in this case, react-bootstrap-table pass a callback function to you
  // you are supposed to call this callback function with a bool value to perfom if it is valid or not
  // in addition, you should return 1 to tell react-bootstrap-table this is a async operation.

  // I use setTimeout to perform an async operation.
  // setTimeout(() => {
  //   done(true);  // it's ok to save :)
  //   done(false);   // it's not ok to save :(
  // }, 3000);
  // return 1;  // please return 1
}

const cellEditProp = {
  mode: 'click',
  blurToSave: true,
  beforeSaveCell: onBeforeSaveCell, // a hook for before saving cell
  afterSaveCell: onAfterSaveCell  // a hook for after saving cell
};

export default class BlurToSaveTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products } cellEdit={ cellEditProp }>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
