import React from 'react';
import EditTypeTable from './edit-type-table';
import DataInsertTypeTable from './insert-type-table';
import AutoRowKeyTable from './auto-rowkey-table';
import ValidatorTable from './validator-table';

import {Col, Panel} from 'react-bootstrap';

class Demo extends React.Component {
  render() {
    return (
      <Col md={8} mdOffset={1}>
        <Panel header={"Cell Edit Type Example(text, textarea, select, checkbox)"}>
          <h5>Source in /examples/js/advance/edit-type-table.js</h5>
          <EditTypeTable/>
        </Panel>
        <Panel header={"Data Insert Type Example(text, textarea, select, checkbox)"}>
          <h5>Source in /examples/js/advance/insert-type-table.js</h5>
          <DataInsertTypeTable/>
        </Panel>
        <Panel header={"Auto RowKey on Data Insert Example"}>
          <h5>Source in /examples/js/advance/auto-rowkey-table.js</h5>
          <AutoRowKeyTable/>
        </Panel>
        <Panel header={"Data Validator Example(Job Name length must great 10 char)"}>
          <h5>Source in /examples/js/advance/validator-table.js</h5>
          <ValidatorTable/>
        </Panel>
      </Col>
    );
  }
}

export default Demo;
