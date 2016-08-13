import React from 'react';
import RemoteCellEdit from './remote-cell-edit';

function getProducts() {
  const products = [];
  const startId = products.length;
  for (let i = 0; i < 12; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      price: Math.floor((Math.random() * 2000) + 1)
    });
  }
  return products;
}

export default class RemoteStoreCellEdit extends React.Component {
  constructor(props) {
    super(props);
    this.products = getProducts();
    this.state = {
      data: this.products
    };
  }

  onCellEdit = (row, fieldName, value) => {
    const { data } = this.state;
    let rowIdx;
    const targetRow = data.find((prod, i) => {
      if (prod.id === row.id) {
        rowIdx = i;
        return true;
      }
      return false;
    });
    if (targetRow) {
      targetRow[fieldName] = value;
      data[rowIdx] = targetRow;
      this.setState({ data });
    }
  }

  render() {
    return (
      <RemoteCellEdit onCellEdit={ this.onCellEdit } { ...this.state } />
    );
  }
}
