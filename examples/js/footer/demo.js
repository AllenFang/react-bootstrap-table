/* eslint max-len: 0 */
import React from 'react';
import BasicTable from './basic-table';

import renderLinks from '../utils';

import { Col, Panel } from 'react-bootstrap';

class Demo extends React.Component {
  render() {
    return (
      <Col md={ 8 } mdOffset={ 1 }>
        <Panel header={ 'A basic react-bootstrap-table with footer' }>
          { renderLinks('footer/basic-table.js') }
          <BasicTable/>
        </Panel>
      </Col>
    );
  }
}

export default Demo;
