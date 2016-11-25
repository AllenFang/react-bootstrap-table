/* eslint max-len: 0 */
import React from 'react';
import ExpandRow from './ExpandRow';
import renderLinks from '../utils';

import { Col, Panel } from 'react-bootstrap';

class Demo extends React.Component {
  render() {
    return (
      <Col md={ 8 } mdOffset={ 1 }>
        <Panel header={ 'A basic react-bootstrap-table with expandable row' }>
          { renderLinks('expandRow/expandRow.js') }
          <p>You can insert your customize component as a expand component</p>
          <ExpandRow/>
        </Panel>
      </Col>
    );
  }
}

export default Demo;
