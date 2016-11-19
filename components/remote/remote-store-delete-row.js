import React from 'react';
import RemoteDeleteRow from './remote-delete-row';

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

export default class RemoteStoreDeleteRow extends React.Component {
  constructor(props) {
    super(props);
    this.products = getProducts();
    this.state = {
      data: this.products
    };
  }

  onDeleteRow(row) {
    this.products = this.products.filter((product) => {
      return product.id !== row[0];
    });

    this.setState({
      data: this.products
    });
  }

  render() {
    return (
      <RemoteDeleteRow onDeleteRow={ this.onDeleteRow.bind(this) } { ...this.state } />
    );
  }
}
