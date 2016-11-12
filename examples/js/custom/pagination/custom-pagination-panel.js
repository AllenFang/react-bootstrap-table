/* eslint max-len: 0 */
/* eslint no-console: 0 */
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

addProducts(70);

export default class CustomPaginationPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  onToggleDropDown = (onToggleDropDown) => {
    // do your stuff here
    console.log('toggle dropdown');
    onToggleDropDown();
  }

  renderPaginationPanel = (props) => {
    return (
      <div>
        <div className='col-md-6 col-xs-6 col-sm-6 col-lg-6'>
          <div className='btn-group' role='group'>
            <button type='button' className='btn btn-default'>Left</button>
            <button type='button' className='btn btn-default'>Middle</button>
            <button type='button' className='btn btn-default'>Right</button>
          </div>
        </div>
        <div className='col-md-6 col-xs-6 col-sm-6 col-lg-6'>
          { props.components.sizePerPageDropdown }
          { props.components.pageList }
        </div>
      </div>
    );
  }

  render() {
    const options = {
      paginationPanel: this.renderPaginationPanel
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
