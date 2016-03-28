import React from 'react';
import RemoteInsertRow from './remote-insert-row';

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

export default class RemoteStoreInsertRow extends React.Component {
  constructor(props) {
    super(props);
    this.products = getProducts();
    this.state = {
      data: this.products
    };
  }

  onAddRow(row) {
    this.products.push(row);
    this.setState({
      data: this.products
    });
  }

  render() {
    return (
      <RemoteInsertRow onAddRow={ this.onAddRow.bind(this) } { ...this.state } />
    );
  }
}
