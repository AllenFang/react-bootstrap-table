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

  renderPaginationPanel = (props) => {
    return (
      <div>
        <div>{ props.components.pageList }</div>
        <div>
          <span>Change size per page: </span>
          { props.components.sizePerPageDropdown }
        </div>
        <div>
          <button onClick={ () => props.changeSizePerPage(25) } className='btn btn-default'>Click to force size per page as 25</button>
          <button onClick={ () => props.toggleDropDown() } className='btn btn-default'>Click to force toggle dropdown</button>
          <button onClick={ () => props.changePage(3) } className='btn btn-default'>Jump to page 3</button>
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
