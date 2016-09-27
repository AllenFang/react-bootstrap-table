/* eslint max-len: 0 */
/* eslint no-alert: 0 */
/* eslint no-console: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import { Col, Panel } from 'react-bootstrap';

const products = { categoryA: [ { id: 1, name: 'Item 1', price: 1000 },
                                { id: 2, name: 'Item 2', price: 2000 }
                               ],
                   categoryB: [ { id: 3, name: 'Item 3', price: 3000 },
                                { id: 4, name: 'Item 4', price: 4000 },
                                { id: 5, name: 'Item 4', price: 5000 }
                               ]
                 };

function onAfterSaveCell(row, cellName, cellValue, sectionKey) {
  console.log('Section Key : ' + sectionKey);
  console.log("Save cell '" + cellName + "' with value '" + cellValue + "'");
  console.log('The whole row :');
  console.log(row);
}

const cellEditProp = {
  mode: 'click',
  blurToSave: true,
  afterSaveCell: onAfterSaveCell
};

function sectionFormat(sectionKey) {
  return (
    <td colSpan={ 3 } style={ { textAlign: 'center', color: 'white', backgroundColor: '#324961' } }>
      <h4>
        { sectionKey }
      </h4>
    </td>
  );
}

class Demo extends React.Component {
  render() {
    return (
      <Col md={ 8 } mdOffset={ 1 }>
        <Panel header={ 'Sections for react-bootstrap-table' }>
          <BootstrapTable data={ products } cellEdit={ cellEditProp } sections={ true } sectionFormat={ sectionFormat }>
            <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
            <TableHeaderColumn dataField='name' editable={ false } >Product Name</TableHeaderColumn>
            <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
          </BootstrapTable>
        </Panel>
      </Col>
    );
  }
}

export default Demo;
