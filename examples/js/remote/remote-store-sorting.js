import React from 'react';
import RemoteSorting from './remote-sorting';

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

export default class RemoteStoreSorting extends React.Component {
  constructor(props) {
    super(props);
    this.products = getProducts();
    this.state = {
      data: this.products
    };
  }

  onSortChange(sortName, sortOrder) {
    if (sortOrder === 'asc') {
      this.products.sort(function(a, b) {
        if (parseInt(a[sortName], 10) > parseInt(b[sortName], 10)) {
          return 1;
        } else if (parseInt(b[sortName], 10) > parseInt(a[sortName], 10)) {
          return -1;
        }
        return 0;
      });
    } else {
      this.products.sort(function(a, b) {
        if (parseInt(a[sortName], 10) > parseInt(b[sortName], 10)) {
          return -1;
        } else if (parseInt(b[sortName], 10) > parseInt(a[sortName], 10)) {
          return 1;
        }
        return 0;
      });
    }

    this.setState({
      data: this.products
    });
  }

  render() {
    return (
      <RemoteSorting onSortChange={ this.onSortChange.bind(this) } { ...this.state } />
    );
  }
}
