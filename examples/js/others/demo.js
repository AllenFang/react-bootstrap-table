import React from 'react';
import MouseEventTable from './mouse-event-table';
import TableInTabs from './table-in-tabs';
import GetPageNumByKeyTable from './expose-api-table';
import PrintableTable from './printable-table';
import { Col, Panel } from 'react-bootstrap';

class Demo extends React.Component {
  render() {
    return (
      <Col md={ 8 } mdOffset={ 1 }>
        <Panel header={ 'Mouse Event Table Example)' }>
          <h5>Source in /examples/js/others/mouse-event-table.js</h5>
          <h5>See event ouput in browser console</h5>
          <MouseEventTable/>
        </Panel>
        <Panel header={ 'Table in Tabs Example)' }>
          <h5>Source in /examples/js/others/table-in-tabs.js</h5>
          <h5>react-bootstrap-table in tabs</h5>
          <TableInTabs/>
        </Panel>
        <Panel header={ 'Get Page by Rowkey Example)' }>
          <h5>Source in /examples/js/others/expose-api-table.js</h5>
          <h5>Use expose API by BootstrapTable to get page number by rowkey</h5>
          <GetPageNumByKeyTable/>
        </Panel>
        <Panel header={ 'Printable Table Example)' }>
          <h5>Source in /examples/js/others/printable-table.js</h5>
          <PrintableTable/>
        </Panel>
      </Col>
    );
  }
}

export default Demo;
