import React from 'react';
import BasicTable from './basic-table';
import HoverStripedTable from './hover-striped-table';
import ScrollTable from './scroll-table';
import LargeColumnTable from './large-column-table';

import {Col, Panel} from 'react-bootstrap';

class Demo extends React.Component {
  render() {
    return (
      <Col md={8} mdOffset={1}>
        <Panel header={"A basic react-bootstrap-table"}>
          <h5>Source in /examples/js/basic/basic-table.js</h5>
          <BasicTable/>
        </Panel>
        <Panel header={"Table hover, striped and condensed Example"}>
          <h5>Source in /examples/js/basic/hover-striped-table.js</h5>
          <HoverStripedTable/>
        </Panel>
        <Panel header={"A Large Column Table Demo"}>
          <h5>Source in /examples/js/basic/large-column-table.js</h5>
          <LargeColumnTable/>
        </Panel>
        <Panel header={"Table Scroll Example"}>
          <h5>Source in /examples/js/basic/scroll-table.js</h5>
          <ScrollTable/>
        </Panel>
      </Col>
    );
  }
}

export default Demo;
