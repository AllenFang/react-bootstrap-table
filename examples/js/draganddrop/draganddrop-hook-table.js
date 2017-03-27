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

  alertDroppedRow(droppedRowId, afterRowId) {
    alert(`Row ${droppedRowId} was dropped after row ${afterRowId}`);
  }

  render() {
    return (
      <div>
        <BootstrapTable
          data={ products }
          draggable
          onDroppedRow={ this.alertDroppedRow }>
          <TableHeaderColumn dataField='dragHandle' dataFormat={ DragHandle } />
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
