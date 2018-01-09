/* eslint max-len: 0 */
import React from 'react';
import BasicTable from './basic-table';
import SingleColumnTable from './single-column-table';
import HoverStripedTable from './hover-striped-table';
import BorderlessTable from './borderless-table';
import ScrollTable from './scroll-table';
import LargeColumnTable from './large-column-table';
import NoDataTable from './no-data-table';

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
        <Panel header={ 'Empty Table Example' }>
          { renderLinks('basic/no-data-table.js') }
          <span>
            Use <code>noDataText</code> to custom the text if table is empty<br/>
            Use <code>withoutNoDataText</code> to hide the table body if table is empty<br/>
          </span>
          <NoDataTable/>
        </Panel>
        <Panel header={ 'A Single Column react-bootstrap-table' }>
          { renderLinks('basic/single-column-table.js') }
          <SingleColumnTable/>
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
          { renderLinks('basic/scroll-table.js') }
          <span style={ { color: 'red' } }>
            You can use <code>scrollTop</code> to set the table content scroll, available value is <code>Top</code>, <code>Bottom</code> and a numeric value
          </span>
          <ScrollTable/>
        </Panel>
      </Col>
    );
  }
}

export default Demo;
