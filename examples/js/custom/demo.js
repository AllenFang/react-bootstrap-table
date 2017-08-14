/* eslint max-len: 0 */
import React from 'react';

import renderLinks from '../utils';
import DefaultCustomInsertModalHeaderTable from './insert-modal/default-custom-insert-modal-header';
import FullyCustomInsertModalHeaderTable from './insert-modal/fully-custom-insert-modal-header';
import DefaultCustomInsertModalFooterTable from './insert-modal/default-custom-insert-modal-footer';
import FullyCustomInsertModalFooterTable from './insert-modal/fully-custom-insert-modal-footer';
import CustomInsertModalBodyTable from './insert-modal/custom-insert-modal-body';
import CustomInsertModalFieldTable from './insert-modal/custom-insert-modal-field';
import CustomInsertModalTable from './insert-modal/custom-insert-modal';
import DefaultCustomInsertButtonTable from './insert-button/default-custom-insert-button';
import FullyCustomInsertButtonTable from './insert-button/fully-custom-insert-button';
import DefaultCustomDeleteButtonTable from './delete-button/default-custom-delete-button';
import FullyCustomDeleteButtonTable from './delete-button/fully-custom-delete-button';
import DefaultCustomShowSelectButtonTable from './show-only-select-button/default-custom-show-select-button';
import FullyCustomShowSelectButtonTable from './show-only-select-button/fully-custom-show-select-button';
import DefaultCustomExportCSVButtonTable from './csv-button/default-custom-csv-button';
import FullyCustomExportCSVButtonTable from './csv-button/fully-custom-csv-button';
import CustomCSVOrTSVButtonTable from './csv-button/custom-csv-or-tsv-button';
import DefaultCustomClearButtonTable from './search/default-custom-search-clear-button';
import FullyCustomClearButtonTable from './search/fully-custom-search-clear-button';
import DefaultCustomSearchFieldTable from './search/default-custom-search-field';
import FullyCustomSearchFieldTable from './search/fully-custom-search-field';
import CustomSearchPanel1 from './search/custom-search-panel-1';
import CustomSearchPanel2 from './search/custom-search-panel-2';
import CustomButtonGroup from './toolbar/custom-button-group';
import CustomToolBar1 from './toolbar/custom-toolbar-1';
import LeftSearchPanel from './toolbar/left-search-panel';
import CustomSizePerPage from './pagination/custom-size-per-page';
import FullyCustomSizePerPage from './pagination/fully-custom-size-per-page';
import CustomPaginationPanel from './pagination/custom-pagination-panel';

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
        <Panel header={ 'Custom for Insert Modal Field Demo' }>
          { renderLinks('custom/insert-modal/custom-insert-modal-field.js') }
          <CustomInsertModalFieldTable/>
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
        <Panel header={ 'Default Custom for Export CSV Button Demo' }>
          { renderLinks('custom/csv-button/default-custom-csv-button.js') }
          <DefaultCustomExportCSVButtonTable/>
        </Panel>
        <Panel header={ 'Fully Custom for Export CSV Button Demo' }>
          { renderLinks('custom/csv-button/fully-custom-csv-button.js') }
          <FullyCustomExportCSVButtonTable/>
        </Panel>
        <Panel header={ 'Custom CSV or TSV export button.' }>
          { renderLinks('custom/csv-button/custom-csv-or-tsv-button.js') }
          <CustomCSVOrTSVButtonTable />
        </Panel>
        <Panel header={ 'Default Custom for Show Only Select Button Demo' }>
          { renderLinks('custom/show-only-select-button/default-custom-show-select-button.js') }
          <DefaultCustomShowSelectButtonTable/>
        </Panel>
        <Panel header={ 'Fully Custom for Show Only Select Button Demo' }>
          { renderLinks('custom/show-only-select-button/fully-custom-show-select-button.js') }
          <FullyCustomShowSelectButtonTable/>
        </Panel>
        <Panel header={ 'Default Custom for Clear Search Button Demo' }>
          { renderLinks('custom/search/default-custom-search-clear-button.js') }
          <DefaultCustomClearButtonTable/>
        </Panel>
        <Panel header={ 'Fully Custom for Clear Search Button Demo' }>
          { renderLinks('custom/search/fully-custom-search-clear-button.js') }
          <FullyCustomClearButtonTable/>
        </Panel>
        <Panel header={ 'Default Custom for Search Field Demo' }>
          { renderLinks('custom/search/default-custom-search-field.js') }
          <DefaultCustomSearchFieldTable/>
        </Panel>
        <Panel header={ 'Fully Custom for Search Field Demo' }>
          { renderLinks('custom/search/fully-custom-search-field.js') }
            <FullyCustomSearchFieldTable/>
        </Panel>
        <Panel header={ 'Custom for Search Panel Demo' }>
          { renderLinks('custom/search/custom-search-panel-1.js') }
            <CustomSearchPanel1/>
        </Panel>
        <Panel header={ 'Custom for Search Panel Demo' }>
          { renderLinks('custom/search/custom-search-panel-2.js') }
            <CustomSearchPanel2/>
        </Panel>
        <Panel header={ 'Custom Button Group Demo' }>
          { renderLinks('custom/toolbar/custom-button-group.js') }
            <CustomButtonGroup/>
        </Panel>
        <Panel header={ 'Left Search Panel Demo' }>
          { renderLinks('custom/toolbar/left-search-panel.js') }
            <LeftSearchPanel/>
        </Panel>
        <Panel header={ 'Custom for Tool Bar Demo' }>
          { renderLinks('custom/toolbar/custom-toolbar-1.js') }
            <CustomToolBar1/>
        </Panel>
        <Panel header={ 'Custom for Size Per Page DropDown Demo' }>
          { renderLinks('custom/pagination/custom-size-per-page.js') }
            <CustomSizePerPage/>
        </Panel>
        <Panel header={ 'Fully Custom for Size Per Page DropDown Demo' }>
          { renderLinks('custom/pagination/fully-custom-size-per-page.js') }
            <FullyCustomSizePerPage/>
        </Panel>
        <Panel header={ 'Custom Pagination Panel Demo' }>
          { renderLinks('custom/pagination/custom-pagination-panel.js') }
            <CustomPaginationPanel/>
        </Panel>
      </Col>
    );
  }
}

export default Demo;
