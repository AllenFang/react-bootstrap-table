/* eslint max-len: 0 */
require('./style.css');
import React from 'react';
import SortTable from './sort-table';
import MultiSortTable from './multi-sort-table';
import DefaultSortTable from './default-sort-table';
import ExternalSort from './manage-sort-external-table';
import CustomSortTable from './custom-sort-table';
import CustomSortWithExtraDataTable from './custom-sort-with-extra-data-table';
import ReusableCustomSortTable from './reusable-custom-sort-table';
import SortHookTable from './sort-hook-table';
import DisableSortIndicatorTable from './disable-sort-indicator-table';
import CustomCaretSortTable from './custom-caret-sort-table';
import ExternalMultiSort from './manage-multi-sort-external-table';
import DefaultASCSortTable from './default-asc-sort-table';
import CleanSortedTable from './clean-sorted-table';
import SortStyleTable from './sort-style-table';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Table Sort Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/sort/sort-table.js</h5>
              <SortTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Table Multi Sort Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/sort/multi-sort-table.js</h5>
              <MultiSortTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Default Table Sort Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/sort/default-sort-table.js</h5>
              <DefaultSortTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Manage Sorting Externally Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/sort/manage-sort-external-table.js</h5>
              <ExternalSort />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Manage Multi Sorting Externally Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/sort/manage-multi-sort-external-table.js</h5>
              <ExternalMultiSort />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Customize Table Sort Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/sort/custom-sort-table.js</h5>
              <CustomSortTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Customize Table Sort With Extra Data Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/sort/custom-sort-with-extra-data-table.js</h5>
              <CustomSortWithExtraDataTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Reusable Customize Table Sort Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/sort/reusable-custom-sort-table.js</h5>
              <ReusableCustomSortTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Sort Style Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/sort/sort-style-table.js</h5>
              <SortStyleTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Sort Hooks(onSortChange) Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/sort/sort-hook-table.js</h5>
              <SortHookTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Disable sort indicator</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/sort/disable-sort-indicator-table.js</h5>
              <DisableSortIndicatorTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Custom render for caret</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/sort/custom-caret-sort-table.js</h5>
              <CustomCaretSortTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Default ASC as First Sort Order</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/sort/default-asc-sort-table.js</h5>
              <DefaultASCSortTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Clean Sorted Table</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/sort/clean-sorted-table.js</h5>
              <CleanSortedTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
