/* eslint max-len: 0 */
/* eslint no-console: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn, SizePerPageDropDown } from 'react-bootstrap-table';


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

addProducts(70);

export default class CustomSizePerPageDropDown extends React.Component {
  constructor(props) {
    super(props);
  }

  onToggleDropDown = (toggleDropDown) => {
    // do your stuff here
    console.log('toggle dropdown');
    toggleDropDown();
  }

  renderSizePerPageDropDown = (props) => {
    return (
      <SizePerPageDropDown
        open={ props.open }
        className='my-size-per-page'
        btnContextual='btn-warning'
        variation='dropup'
        onClick={ () => this.onToggleDropDown(props.toggleDropDown) }/>
    );
  }

  render() {
    const options = {
      sizePerPageDropDown: this.renderSizePerPageDropDown
    };
    return (
      <div>
        <BootstrapTable
          data={ products }
          options={ options }
          pagination>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
