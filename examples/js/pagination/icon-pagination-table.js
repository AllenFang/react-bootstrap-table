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

addProducts(70);

export default class IconPaginationTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tableOptions = {
      prePage: <i className='glyphicon glyphicon-chevron-left' />,
      nextPage: <i className='glyphicon glyphicon-chevron-right' />,
      firstPage: <i className='glyphicon glyphicon-step-backward' />,
      lastPage: <i className='glyphicon glyphicon-step-forward' />
    };

    return (
      <div>
        <BootstrapTable
          data={ products }
          options={ tableOptions }
          pagination>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
