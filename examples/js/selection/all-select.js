/* eslint max-len: 0 */
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

addProducts(100);

const options = {
  sizePerPageList: [ 5, 10, 15, 20 ],
  sizePerPage: 10,
  sortName: 'id',
  sortOrder: 'desc'
};
const selectRowProp = {
  mode: 'checkbox',
  clickToSelect: true,
  bgColor: 'rgb(238, 193, 213)'
};
const filterOptions = {
  type: 'TextFilter',
  placeholder: 'Product Name'
};

export default class SelectAll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      filteredProducts: products
    };
  }

  onSelect(row, isSelected) {
    const selectedProducts = this.state.selected;
    if (isSelected) {
      selectedProducts.push(row.id);
    } else {
      const index = selectedProducts
        .indexOf(row.universalId);
      selectedProducts.splice(index, 1);
    }
    this.setState({ selected: selectedProducts });
  }

  onSelectAll(isSelected) {
    const items = isSelected
        ? this.state.filteredProducts.map(product => product.id)
        : [];
    this.setState({ selected: items });
  }

  afterColumnFilter(filterConds, result) {
    this.setState({ filteredProducts: result });
  }

  render() {
    Object.assign(selectRowProp, {
      selected: this.state.selected,
      onSelect: this.onSelect.bind(this),
      onSelectAll: this.onSelectAll.bind(this) });
    Object.assign(options, {
      afterColumnFilter: this.afterColumnFilter.bind(this) });

    return (
      <div>
        <div>Product selected: { this.state.selected.length }</div>
        <BootstrapTable ref='table' selectRow={ selectRowProp } data={ products } pagination={ true } options={ options }>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name' filter={ filterOptions }>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
   );
  }
}
