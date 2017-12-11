/* eslint max-len: 0 */
import React from 'react';
import SimpleNavTable from './simple-nav-table';
import PaginationNavTable from './pagination-nav-table';
import NavWithSelectionTable from './nav-with-select-table';
import CustomNavStyleTable from './custom-style-nav-table';
import DisableClickToNavTable from './disable-click-to-nav-table';
import NavWithCellEditTable from './nav-with-cell-edit-table';
import CustomStyleNavWithCellEditTable from './custom-style-nav-with-cell-edit-table';
import EnterToEditWithNavTable from './enter-to-edit-with-nav-table';
import EnterToSelectRowWithNavTable from './enter-to-select-row-with-nav-table';
import NavWithExpandingTable from './nav-with-expand-table';
import EnterToExpandWithNavTable from './enter-to-expand-row-with-nav-table';

import renderLinks from '../utils';

import { Col, Panel } from 'react-bootstrap';

class Demo extends React.Component {
  render() {
    return (
      <Col md={ 8 } mdOffset={ 1 }>
        <Panel header={ 'A Simple Keyboard Navigation Table' }>
          { renderLinks('keyboard-nav/simple-nav-table.js') }
          <span>
            Default navigation is click on cell and keyborad tab or navigation(left/right/up/down)
          </span>
          <SimpleNavTable/>
        </Panel>
        <Panel header={ 'Keyboard Navigation with Pagintaion Table' }>
          { renderLinks('keyboard-nav/pagination-nav-table.js') }
          <PaginationNavTable/>
        </Panel>
        <Panel header={ 'Selection with Keyboard Navigation Example' }>
          { renderLinks('keyboard-nav/nav-with-select-table.js') }
          <NavWithSelectionTable/>
        </Panel>
        <Panel header={ 'Custom Style Example' }>
          { renderLinks('keyboard-nav/custom-style-nav-table.js') }
          <span>
            <code>keyBoardNav</code> accept a bool or object value<br/>
            Use <code>keyBoardNav.customStyle</code> to custom the styling on navigating cell<br/>
          </span>
          <CustomNavStyleTable/>
        </Panel>
        <Panel header={ 'Disable Click to Nav Example' }>
          { renderLinks('keyboard-nav/disable-click-to-nav-table.js') }
          <span>
            <code>keyBoardNav</code> accept a bool or object value<br/>
            Use <code>keyBoardNav.clickToNav</code> to disable the navigation on clicking cell<br/>
            If you disable it, you can still navigate with tab and left/right/up/down
          </span>
          <DisableClickToNavTable />
        </Panel>
        <Panel header={ 'Cell Editing with Keyboard Navigation Example' }>
          { renderLinks('keyboard-nav/nav-with-cell-edit-table.js') }
          <NavWithCellEditTable/>
        </Panel>
        <Panel header={ 'Custom Style on Editing Cell with Navigating Example' }>
          { renderLinks('keyboard-nav/custom-style-nav-with-cell-edit-table') }
          <span>
            <code>keyBoardNav</code> accept a bool or object value<br/>
            Use <code>keyBoardNav.customStyleOnEditCell</code> to custom the styling on navigating and editing cell<br/>
          </span>
          <CustomStyleNavWithCellEditTable />
        </Panel>
        <Panel header={ 'Enter to edit cell with Keyboard Navigation Example' }>
          { renderLinks('keyboard-nav/enter-to-edit-with-nav-table') }
          <span>
            <code>keyBoardNav</code> accept a bool or object value<br/>
            Use <code>keyBoardNav.enterToEdit</code> to trigger the navigating cell as editing<br/>
          </span>
          <EnterToEditWithNavTable />
        </Panel>
        <Panel header={ 'Enter to select row with Keyboard Navigation Example' }>
          { renderLinks('keyboard-nav/enter-to-select-row-with-nav-table') }
          <span>
            <code>keyBoardNav</code> accept a bool or object value<br/>
            Use <code>keyBoardNav.enterToSelect</code> to trigger row selection<br/>
          </span>
          <EnterToSelectRowWithNavTable />
        </Panel>
        <Panel header={ 'Expand with Keyboard Navigation Example' }>
          { renderLinks('keyboard-nav/nav-with-expand-table.js') }
          <NavWithExpandingTable/>
        </Panel>
        <Panel header={ 'Enter to Expand Row with Keyboard Navigation Example' }>
          { renderLinks('keyboard-nav/enter-to-expand-row-with-nav-table.js') }
          <span>
            <code>keyBoardNav</code> accept a bool or object value<br/>
            Use <code>keyBoardNav.enterToExpand</code> to trigger expand/collapse row<br/>
          </span>
          <EnterToExpandWithNavTable/>
        </Panel>
      </Col>
    );
  }
}

export default Demo;
