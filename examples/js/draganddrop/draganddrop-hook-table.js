/* eslint max-len: 0 */
/* eslint no-alert: 0 */
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

addProducts(10);

const DragHandle = () => {
  return (
    <div>
      DragHandle
    </div>
  );
};

export default class DragAndDropHookTable extends React.Component {
  constructor(props) {
    super(props);
  }

  alertDraggedRow(draggedRowId, afterRowId) {
    alert(`Row ${draggedRowId} was dragged after row ${afterRowId}`);
  }

  render() {
    return (
      <div>
        <BootstrapTable
          data={ products }
          draggable
          onDraggedRow={ this.alertDraggedRow }>
          <TableHeaderColumn dataField='dragHandle' dataFormat={ DragHandle } />
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
