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

export default class ExternallyManagedSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      currPage: 1
    };
  }

  render() {
    const {
      currPage
    } = this.state;
    const onRowSelect = ({ id }, isSelected, page) => {
      if (isSelected && this.state.selected.length !== 2) {
        this.setState({
          selected: [ ...this.state.selected, id ].sort(),
          currPage: page
        });
      } else {
        this.setState({ selected: this.state.selected.filter(it => it !== id) });
      }
      return false;
    };

    const selectRowProp = {
      mode: 'checkbox',
      clickToSelect: true,
      onSelect: onRowSelect,
      selected: this.state.selected
    };

    const options = {
      sizePerPageList: [ 5, 10, 15, 20 ],
      sizePerPage: 10,
      page: currPage,
      sortName: 'id',
      sortOrder: 'desc'
    };

    return (
      <BootstrapTable data={ products } selectRow={ selectRowProp } pagination={ true } options={ options }>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
   );
  }
}
