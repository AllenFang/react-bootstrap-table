/* eslint max-len: 0 */
require('./style.css');
import React from 'react';
import ExpandRow from './expandRow';
import SingleExpandRow from './single-expanding';
import ExpandByColumn from './expand-row-by-column';
import ManageExpandExternal from './manage-expanding';
import ExpandWithSelection from './expand-row-with-selection';
import ExpandWithCellEdit from './expand-row-with-cellEdit';
import ExpandIndicator from './expand-indicator';
import CustomExpandClassName from './custom-expand-class';
import CustomExpandIndicator from './custom-expand-indicator';
import AutoCollapse from './auto-collapse';
import HideRowWhenExpanding from './hide-row-when-expanding';
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
        <Panel header={ 'Single Expanding' }>
          { renderLinks('expandRow/single-expanding.js') }
          <SingleExpandRow/>
        </Panel>
        <Panel header={ 'Row Expand Indicator' }>
          { renderLinks('expandRow/expand-indicator.js') }
          <ExpandIndicator/>
        </Panel>
        <Panel header={ 'Custom Expand Row ClassName' }>
          { renderLinks('expandRow/custom-expand-class.js') }
          <CustomExpandClassName/>
        </Panel>
        <Panel header={ 'Custom Row Expand Indicator' }>
          { renderLinks('expandRow/custom-expand-indicator.js') }
          <CustomExpandIndicator/>
        </Panel>
        <Panel header={ 'Expand Row Trigger by Column instead of Row' }>
          { renderLinks('expandRow/expand-row-by-column.js') }
          <span>You can trigger expand row by column or row, default is row,
          configure <code>expandBy</code> in <code>options</code> props</span>
          <ExpandByColumn/>
        </Panel>
        <Panel header={ 'Manage the Expanding Row External' }>
          <span>Use <code>options.onExpand</code> to know if a row is ready to expand or not</span>
          { renderLinks('expandRow/expand-row-by-column.js') }
          <ManageExpandExternal/>
        </Panel>
        <Panel header={ 'Expand Row with Selection - Keep select column first' }>
          <span>You can enable/disable the expanding if you click row to select,
          configure <code>clickToExpand</code> in <code>selectRow</code> props, default is false</span>
          { renderLinks('expandRow/expand-row-with-selection.js') }
          <ExpandWithSelection/>
        </Panel>
        <Panel header={ 'Expand Row with CellEdit' }>
          { renderLinks('expandRow/expand-row-with-cellEdit.js') }
          <ExpandWithCellEdit/>
        </Panel>
        <Panel header={ 'Auto Collapse Expanding Rows When Sort, Search or Flter' }>
          { renderLinks('expandRow/auto-collapse.js') }
          <AutoCollapse/>
        </Panel>
        <Panel header={ 'Hide Row When Expanding' }>
          { renderLinks('expandRow/hide-row-when-expanding.js') }
          <HideRowWhenExpanding/>
        </Panel>
      </Col>
    );
  }
}

export default Demo;
