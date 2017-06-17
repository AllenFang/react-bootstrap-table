/* eslint max-len: 0 */
import React from 'react';
import EditTypeTable from './edit-type-table';
import InsertDefaultValueTable from './insert-default-value-table';
import DataInsertTypeTable from './insert-type-table';
import InsertErrorHandleTable from './insert-error-handle-table';
import AutoRowKeyTable from './auto-rowkey-table';
import ValidatorTable from './validator-table';
import HideOnInsertTable from './hide-on-insert-table';
import DisableToastrTable from './disable-toastr-table';
import EditTypeReadOnlyTable from './validator-table-read-only';

import renderLinks from '../utils';

import { Col, Panel } from 'react-bootstrap';

class Demo extends React.Component {
  render() {
    return (
      <Col md={ 8 } mdOffset={ 1 }>
        <Panel header={ 'Cell Edit Type Example(text, textarea, select, checkbox, datetime)' }>
          { renderLinks('advance/edit-type-table.js') }
          <EditTypeTable/>
        </Panel>
        <Panel header={ 'Data Insert Type Example(text, textarea, select, checkbox)' }>
          { renderLinks('advance/insert-type-table.js') }
          <DataInsertTypeTable/>
        </Panel>
        <Panel header={ 'Default Value on Insert Modal' }>
          { renderLinks('advance/insert-default-value-table.js') }
          <InsertDefaultValueTable/>
        </Panel>
        <Panel header={ 'Hide column on Insert Modal' }>
          { renderLinks('advance/hide-on-insert-table.js') }
          <h5>This example hide the Job Name field in insert modal</h5>
          <HideOnInsertTable/>
        </Panel>
        <Panel header={ 'Auto RowKey on Data Insert Example' }>
          { renderLinks('advance/auto-rowkey-table.js') }
          <AutoRowKeyTable/>
        </Panel>
        <Panel header={ 'Data Validator Example(Job Name length must great 10 char)' }>
          { renderLinks('advance/validator-table.js') }
          <ValidatorTable/>
        </Panel>
        <Panel header={ 'Custom Display Validating Message' }>
          { renderLinks('advance/disable-toastr-table.js') }
          <DisableToastrTable/>
        </Panel>
        <Panel header={ 'Custom Display Validating Message(Job Name column is read only)' }>
          { renderLinks('advance/validator-table-read-only.js') }
          <EditTypeReadOnlyTable/>
        </Panel>
        <Panel header={ 'Error handling for Insert Row' }>
          { renderLinks('advance/insert-error-handle-table.js') }
          <InsertErrorHandleTable/>
        </Panel>
      </Col>
    );
  }
}

export default Demo;
