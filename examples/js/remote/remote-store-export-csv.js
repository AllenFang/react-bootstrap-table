import React from 'react';
import RemoteExportCSV from './remote-export-csv';

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

export default class RemoteStoreExportCSV extends React.Component {
  constructor(props) {
    super(props);
    this.products = getProducts();
    this.state = {
      data: this.products
    };
  }

  onExportToCSV() {
    return this.products;
  }

  render() {
    return (
      <RemoteExportCSV onExportToCSV={ this.onExportToCSV.bind(this) } { ...this.state } />
    );
  }
}
