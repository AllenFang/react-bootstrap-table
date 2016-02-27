import React from 'react';
import MouseEventTable from './mouse-event-table';

import {Col, Panel} from 'react-bootstrap';

class Demo extends React.Component {
  render() {
    return (
      <Col md={8} mdOffset={1}>
        <Panel header={"Mouse Event Table Example)"}>
          <h5>Source in /examples/js/advance/mouse-event-table.js</h5>
          <h5>See event ouput in browser console</h5>
          <MouseEventTable/>
        </Panel>
      </Col>
    );
  }
}

export default Demo;
