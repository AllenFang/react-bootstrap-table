/* eslint max-len: 0 */
import React from 'react';

import renderLinks from '../utils';
import DefaultCustomInsertModalHeaderTable from './insert-modal/default-custom-insert-modal-header';
import FullyCustomInsertModalHeaderTable from './insert-modal/fully-custom-insert-modal-header';
import DefaultCustomInsertModalFooterTable from './insert-modal/default-custom-insert-modal-footer';
import FullyCustomInsertModalFooterTable from './insert-modal/fully-custom-insert-modal-footer';
import CustomInsertModalBodyTable from './insert-modal/custom-insert-modal-body';
import CustomInsertModalTable from './insert-modal/custom-insert-modal';
import DefaultCustomInsertButtonTable from './insert-button/default-custom-insert-button';
import FullyCustomInsertButtonTable from './insert-button/fully-custom-insert-button';
import DefaultCustomDeleteButtonTable from './delete-button/default-custom-delete-button';
import FullyCustomDeleteButtonTable from './delete-button/fully-custom-delete-button';
import DefaultCustomShowSelectButtonTable from './show-only-select-button/default-custom-show-select-button';
import FullyCustomShowSelectButtonTable from './show-only-select-button/fully-custom-show-select-button';

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
        <Panel header={ 'Custom for Insert Modal Body Demo' }>
          { renderLinks('custom/insert-modal/custom-insert-modal-body.js') }
          <CustomInsertModalBodyTable/>
        </Panel>
        <Panel header={ 'Custom for Insert Modal Demo' }>
          { renderLinks('custom/insert-modal/custom-insert-modal.js') }
          <CustomInsertModalTable/>
        </Panel>
        <Panel header={ 'Default Custom for Insert Button Demo' }>
          { renderLinks('custom/insert-button/default-custom-insert-button.js') }
          <DefaultCustomInsertButtonTable/>
        </Panel>
        <Panel header={ 'Fully Custom for Insert Button Demo' }>
          { renderLinks('custom/insert-button/fully-custom-insert-button.js') }
          <FullyCustomInsertButtonTable/>
        </Panel>
        <Panel header={ 'Default Custom for Delete Button Demo' }>
          { renderLinks('custom/delete-button/default-custom-delete-button.js') }
          <DefaultCustomDeleteButtonTable/>
        </Panel>
        <Panel header={ 'Fully Custom for Delete Button Demo' }>
          { renderLinks('custom/delete-button/fully-custom-delete-button.js') }
          <FullyCustomDeleteButtonTable/>
        </Panel>
        <Panel header={ 'Default Custom for Show Only Select Button Demo' }>
          { renderLinks('custom/show-only-select-button/default-custom-show-select-button.js') }
          <DefaultCustomShowSelectButtonTable/>
        </Panel>
        <Panel header={ 'Fully Custom for Show Only Select Button Demo' }>
          { renderLinks('custom/show-only-select-button/fully-custom-show-select-button.js') }
          <FullyCustomShowSelectButtonTable/>
        </Panel>
      </Col>
    );
  }
}

export default Demo;
