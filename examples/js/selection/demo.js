import React from 'react';
import SingleSelectTable from './single-select-table';
import MultiSelectTable from './multi-select-table';
import ClickToSelectTable from './click-to-select-table';
import DefaultSelectTable from './default-select-table';
import SelectBgColorTable from './select-bgcolor-table';
import SelectHookTable from './select-hook-table';
import HideSelectionColumnTable from './hide-selection-col-table';
import RowClickTable from './row-click-table';
import OnlySelectedTable from './only-show-selected-table';
import ExternallyManagedSelection from './externally-managed-selection';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <div className="col-md-offset-1 col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">Single Select Example</div>
            <div className="panel-body">
              <h5>Source in /examples/js/selection/single-select-table.js</h5>
              <SingleSelectTable />
            </div>
          </div>
        </div>
        <div className="col-md-offset-1 col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">Multi Select Example</div>
            <div className="panel-body">
              <h5>Source in /examples/js/selection/multi-select-table.js</h5>
              <MultiSelectTable />
            </div>
          </div>
        </div>
        <div className="col-md-offset-1 col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">Click to Select Row Example</div>
            <div className="panel-body">
              <h5>Source in /examples/js/selection/click-to-select-table.js</h5>
              <ClickToSelectTable />
            </div>
          </div>
        </div>
        <div className="col-md-offset-1 col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">Default Select Example</div>
            <div className="panel-body">
              <h5>Source in /examples/js/selection/default-select-table.js</h5>
              <DefaultSelectTable />
            </div>
          </div>
        </div>
        <div className="col-md-offset-1 col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">Selected Row Bgcolor Example</div>
            <div className="panel-body">
              <h5>Source in /examples/js/selection/select-bgcolor-table.js</h5>
              <SelectBgColorTable />
            </div>
          </div>
        </div>
        <div className="col-md-offset-1 col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">Selection Hook Example</div>
            <div className="panel-body">
              <h5>Source in /examples/js/selection/select-hook-table.js</h5>
              <SelectHookTable />
            </div>
          </div>
        </div>
        <div className="col-md-offset-1 col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">Hide Selection Column Example</div>
            <div className="panel-body">
              <h5>Source in /examples/js/selection/hide-selection-col-table.js</h5>
              <HideSelectionColumnTable />
            </div>
          </div>
        </div>
        <div className="col-md-offset-1 col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">Row Click Example</div>
            <div className="panel-body">
              <h5>Source in /examples/js/selection/row-click-table.js</h5>
              <RowClickTable />
            </div>
          </div>
        </div>
        <div className="col-md-offset-1 col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">A Toggle Button for Showing Selected Only</div>
            <div className="panel-body">
              <h5>Source in only-show-selected-table.js</h5>
              <OnlySelectedTable />
            </div>
          </div>
        </div>
        <div className="col-md-offset-1 col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">Externally Managed Selection State (max 2)</div>
            <div className="panel-body">
              <h5>Source in externally-managed-selection.js</h5>
              <ExternallyManagedSelection />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
