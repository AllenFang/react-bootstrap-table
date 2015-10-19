import React from 'react';
import {Col, Panel} from 'react-bootstrap';

class Basic extends React.Component {
  render() {
    return (
      <Col md={8} mdOffset={1}>
        <Panel header={"A basic react-bootstrap-table"}>
          <h5>Source in /examples/js/basic/basic-table.js</h5>
        </Panel>
      </Col>
    );
  }
}

export default Basic;
