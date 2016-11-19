/* eslint guard-for-in: 0 */
/* eslint no-console: 0 */

import React from 'react';
import RemoteFiltering from './remote-filtering';

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

export default class RemoteStoreFiltering extends React.Component {
  constructor(props) {
    super(props);
    this.products = getProducts();
    this.state = {
      data: this.products
    };
  }

  filterNumber(targetVal, filterVal, comparator) {
    let valid = true;
    switch (comparator) {
    case '=': {
      if (targetVal !== filterVal) {
        valid = false;
      }
      break;
    }
    case '>': {
      if (targetVal <= filterVal) {
        valid = false;
      }
      break;
    }
    case '<=': {
      if (targetVal > filterVal) {
        valid = false;
      }
      break;
    }
    default: {
      console.error('Number comparator provided is not supported');
      break;
    }
    }
    return valid;
  }

  filterText(targetVal, filterVal) {
    if (targetVal.toString().toLowerCase().indexOf(filterVal) === -1) {
      return false;
    }

    return true;
  }

  onFilterChange(filterObj) {
    if (Object.keys(filterObj).length === 0) {
      this.setState({
        data: this.products
      });
      return;
    }

    const data = this.products.filter((product) => {
      let valid = true;
      let filterValue;
      for (const key in filterObj) {
        const targetValue = product[key];
        switch (filterObj[key].type) {
        case 'NumberFilter': {
          filterValue = filterObj[key].value.number;
          valid = this.filterNumber(targetValue, filterValue, filterObj[key].value.comparator);
          break;
        }
        default: {
          filterValue = (typeof filterObj[key].value === 'string') ?
            filterObj[key].value.toLowerCase() : filterObj[key].value;
          valid = this.filterText(targetValue, filterValue);
          break;
        }
        }

        if (!valid) {
          break;
        }
      }
      return valid;
    });
    this.setState({
      data: data
    });
  }

  render() {
    return (
      <RemoteFiltering onFilterChange={ this.onFilterChange.bind(this) } { ...this.state } />
    );
  }
}
