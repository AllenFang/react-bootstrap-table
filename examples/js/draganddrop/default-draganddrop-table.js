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

const DragHandle = () => {
  return (
    <div>
      DragHandle
    </div>
  );
};

export default class DefaultDragAndDropTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BootstrapTable
          data={ products }
          draggable
          pagination>
          <TableHeaderColumn dataField='dragHandle' dataFormat={ DragHandle } />
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
