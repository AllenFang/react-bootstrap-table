/* eslint max-len: 0 */
import React from 'react';
import BasicTable from './basic-table';
import HoverStripedTable from './hover-striped-table';
import BorderlessTable from './borderless-table';
import ScrollTable from './scroll-table';
import LargeColumnTable from './large-column-table';

import renderLinks from '../utils';

import { Col, Panel } from 'react-bootstrap';

class Demo extends React.Component {
  render() {
    return (
      <Col md={ 8 } mdOffset={ 1 }>
        <Panel header={ 'A basic react-bootstrap-table' }>
          { renderLinks('basic/basic-table.js') }
          <BasicTable/>
        </Panel>
        <Panel header={ 'Table hover, striped and condensed Example' }>
          { renderLinks('basic/hover-striped-table.js') }
          <HoverStripedTable/>
        </Panel>
        <Panel header={ 'Borderless table Example' }>
          { renderLinks('basic/borderless-table.js') }
          <BorderlessTable/>
        </Panel>
        <Panel header={ 'A Large Column Table Demo' }>
          { renderLinks('basic/large-column-table.js') }
          <h3 style={ { color: 'red' } }>Warning</h3>
          <span style={ { color: 'red' } }>
            There is one restriction when you want to make a large column table scrollable:<br/>
            <b>You need set the width on some column to make the total width of table exceed the width of outter.</b>
          </span>
          <LargeColumnTable/>
        </Panel>
        <Panel header={ 'Table Scroll Example' }>
          { renderLinks('basic/scroll-table') }
          <ScrollTable/>
        </Panel>
      </Col>
    );
  }
}

export default Demo;
