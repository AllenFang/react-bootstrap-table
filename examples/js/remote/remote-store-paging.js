import React from 'react';
import RemotePaging from './remote-paging';

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

export default class RemoteStorePaging extends React.Component {
  constructor(props) {
    super(props);
    this.products = getProducts();
    this.state = {
      data: this.products.slice(0, this.props.sizePerPage),
      totalDataSize: this.products.length,
      sizePerPage: this.props.sizePerPage,
      currentPage: 1
    };
  }

  onPageChange(page, sizePerPage) {
    const currentIndex = (page - 1) * sizePerPage;
    this.setState({
      data: this.products.slice(currentIndex, currentIndex + sizePerPage),
      currentPage: page
    });
  }

  onSizePerPageList(sizePerPage) {
    const currentIndex = (this.state.currentPage - 1) * sizePerPage;
    this.setState({
      data: this.products.slice(currentIndex, currentIndex + sizePerPage),
      sizePerPage: sizePerPage
    });
  }

  render() {
    return (
      <RemotePaging onPageChange={ this.onPageChange.bind(this) }
                    onSizePerPageList={ this.onSizePerPageList.bind(this) } { ...this.state } />
    );
  }
}
