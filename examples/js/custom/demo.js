/* eslint max-len: 0 */
import React from 'react';

import renderLinks from '../utils';
import DefaultCustomInsertModalHeaderTable from './insert-modal/default-custom-insert-modal-header';
import FullyCustomInsertModalHeaderTable from './insert-modal/fully-custom-insert-modal-header';
import DefaultCustomInsertModalFooterTable from './insert-modal/default-custom-insert-modal-footer';
import FullyCustomInsertModalFooterTable from './insert-modal/fully-custom-insert-modal-footer';

import { Col, Panel } from 'react-bootstrap';

class Demo extends React.Component {
  render() {
    return (
      <Col md={ 8 } mdOffset={ 1 }>
        <Panel header={ 'Default Custom for Insert Modal Header Demo' }>
          { renderLinks('custom/insert-modal/default-custom-insert-modal-header.js') }
          <DefaultCustomInsertModalHeaderTable/>
        </Panel>
        <Panel header={ 'Fully Custom for Insert Modal Header Demo' }>
          { renderLinks('custom/insert-modal/fully-custom-insert-modal-header.js') }
          <FullyCustomInsertModalHeaderTable/>
        </Panel>
        <Panel header={ 'Default Custom for Insert Modal Footer Demo' }>
          { renderLinks('custom/insert-modal/default-custom-insert-modal-footer.js') }
          <DefaultCustomInsertModalFooterTable/>
        </Panel>
        <Panel header={ 'Fully Custom for Insert Modal Footer Demo' }>
          { renderLinks('custom/insert-modal/fully-custom-insert-modal-footer.js') }
          <FullyCustomInsertModalFooterTable/>
        </Panel>
      </Col>
    );
  }
}

export default Demo;
