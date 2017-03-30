/* eslint max-len: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
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
          <TableHeaderColumn dataFormat={ DragHandle } dragHandle />
          <TableHeaderColumn dataField='name' isKey={ true }>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
