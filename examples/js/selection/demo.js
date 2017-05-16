/* eslint max-len: 0 */
require('./style.css');
import React from 'react';
import SingleSelectTable from './single-select-table';
import MultiSelectTable from './multi-select-table';
import UnSelectableTable from './unselectable-table';
import ClickToSelectTable from './click-to-select-table';
import DefaultSelectTable from './default-select-table';
import SelectBgColorTable from './select-bgcolor-table';
import SelectBgColorDynamicTable from './select-bgcolor-dynamic-table';
import SelectRowClassTable from './select-row-class-table';
import SelectHookTable from './select-hook-table';
import HideSelectionColumnTable from './hide-selection-col-table';
import SelectValidationTable from './select-validation-table';
import RowClickTable from './row-click-table';
import OnlySelectedTable from './only-show-selected-table';
import ExternallyManagedSelection from './externally-managed-selection';
import CustomMultiSelectTable from './custom-multi-select-table';
import SelectionColumnWidthTable from './selection-column-width-table';
import SelectAllWithFilterTable from './select-filter-table';
import SelectAll from './all-select';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Single Select Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/selection/single-select-table.js</h5>
              <SingleSelectTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Multi Select Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/selection/multi-select-table.js</h5>
              <MultiSelectTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Custom Multi Select Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/selection/custom-multi-select-table.js</h5>
              <CustomMultiSelectTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>UnSelectable Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/selection/unselectable-table.js</h5>
              <UnSelectableTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Click to Select Row Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/selection/click-to-select-table.js</h5>
              <ClickToSelectTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Default Select Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/selection/default-select-table.js</h5>
              <DefaultSelectTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Selected Row Bgcolor Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/selection/select-bgcolor-table.js</h5>
              <SelectBgColorTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Selected Row Bgcolor Depends on Data Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/selection/select-bgcolor-dynamic-table.js</h5>
              <SelectBgColorDynamicTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Add Class on Selecting Row Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/selection/select-row-class-table.js</h5>
              <SelectRowClassTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Selection Hook Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/selection/select-hook-table.js</h5>
              <SelectHookTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Hide Selection Column Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/selection/hide-selection-col-table.js</h5>
              <HideSelectionColumnTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Select Validation Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/selection/row-click-table.js</h5>
              <h5>Only able to select the rows which key is less 3.</h5>
              <SelectValidationTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Row Click Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/selection/row-click-table.js</h5>
              <RowClickTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>A Toggle Button for Showing Selected Only</div>
            <div className='panel-body'>
              <h5>Source in only-show-selected-table.js</h5>
              <OnlySelectedTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Externally Managed Selection State (max 2)</div>
            <div className='panel-body'>
              <h5>Source in externally-managed-selection.js</h5>
              <ExternallyManagedSelection />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Select All on All Pages</div>
            <div className='panel-body'>
              <h5>Source in all-select.js</h5>
              <SelectAll />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Select All Behavior with Filter/Search</div>
            <div className='panel-body'>
              <h5>Source in select-filter-table.js</h5>
              <span>Configure <code>selectRow.onlyUnselectVisible</code> and observer the behavior for unselect all.</span>
              <span>Also check <a href='https://github.com/AllenFang/react-bootstrap-table/issues/1276' target='_blank'>#1276</a></span>
              <SelectAllWithFilterTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Configure Selection Column Width</div>
            <div className='panel-body'>
              <h5>Source in selection-column-width-table.js</h5>
              <SelectionColumnWidthTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
