/* eslint max-len: 0 */
import React from 'react';
import ExpandRow from './ExpandRow';
import ExpandByColumn from './expand-row-by-column';
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
        <Panel header={ 'Expand Row Trigger by Column instead of Row' }>
          { renderLinks('expandRow/expand-row-by-column.js') }
          <span>You can trigger expand row by column or row, default is row,
          configure <code>expandBy</code> in <code>options</code> props</span>
          <ExpandByColumn/>
        </Panel>
      </Col>
    );
  }
}

export default Demo;
