import React from 'react';
import RemoteSearch from './remote-search';

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

export default class RemoteStoreSearch extends React.Component {
  constructor(props) {
    super(props);
    this.products = getProducts();
    this.state = {
      data: this.products
    };
  }

  onSearchChange(searchText, colInfos, multiColumnSearch) {
    const text = searchText.trim();
    if (text === '') {
      this.setState({
        data: this.products
      });
      return;
    }

    let searchTextArray = [];
    if (multiColumnSearch) {
      searchTextArray = text.split(' ');
    } else {
      searchTextArray.push(text);
    }

    const data = this.products.filter((product) => {
      const keys = Object.keys(product);
      let valid = false;
      for (let i = 0, keysLength = keys.length; i < keysLength; i++) {
        const key = keys[i];
        if (colInfos[key] && product[key]) {
          const { format, filterFormatted, formatExtraData, searchable, hidden } = colInfos[key];
          let targetVal = product[key];
          if (!hidden && searchable) {
            if (filterFormatted && format) {
              targetVal = format(targetVal, product, formatExtraData);
            }
            for (let j = 0, textLength = searchTextArray.length; j < textLength; j++) {
              const filterVal = searchTextArray[j].toLowerCase();
              if (targetVal.toString().toLowerCase().indexOf(filterVal) !== -1) {
                valid = true;
                break;
              }
            }
          }
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
      <RemoteSearch onSearchChange={ this.onSearchChange.bind(this) } { ...this.state } />
    );
  }
}
