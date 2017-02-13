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

export default class FullyCustomSizePerPageDropDown extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSizePerPageDropDown = props => {
    return (
      <div className='btn-group'>
        {
          [ 10, 25, 30 ].map((n, idx) => {
            const isActive = (n === props.currSizePerPage) ? 'active' : null;
            return (
              <button key={ idx } type='button' className={ `btn btn-info ${isActive}` } onClick={ () => props.changeSizePerPage(n) }>{ n }</button>
            );
          })
        }
      </div>
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
