import React from 'react';
import InsertRowTable from './insert-row-table';
import DeleteRowTable from './delete-row-table';
import SearchTable from './search-table';
import ColumnFilterTable from './filter-table';
import MultiSearchTable from './multi-search-table';
import ExportCSVTable from './export-csv-table';
import DeleteRowCustomComfirmTable from './del-row-custom-confirm';
import SearchClearTable from './search-clear-table';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <div className="col-md-offset-1 col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">Insert Row Example</div>
            <div className="panel-body">
              <h5>Source in /examples/js/manipulation/insert-row-table.js</h5>
              <InsertRowTable />
            </div>
          </div>
        </div>
        <div className="col-md-offset-1 col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">Delete Row Example</div>
            <div className="panel-body">
              <h5>Source in /examples/js/manipulation/delete-row-table.js</h5>
              <DeleteRowTable />
            </div>
          </div>
        </div>
        <div className="col-md-offset-1 col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">Table Search Example(Include after search hook)</div>
            <div className="panel-body">
              <h5>Source in /examples/js/manipulation/search-table.js</h5>
              <h5>See your console to watch information of after searching.</h5>
              <SearchTable />
            </div>
          </div>
        </div>
        <div className="col-md-offset-1 col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">Table Search Example with Clear Button</div>
            <div className="panel-body">
              <h5>Source in /examples/js/manipulation/search-clear-table.js</h5>
              <SearchClearTable />
            </div>
          </div>
        </div>
        <div className="col-md-offset-1 col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">Table Multi Search Example(Use space to delimited search text, ex:3 4)</div>
            <div className="panel-body">
              <h5>Source in /examples/js/manipulation/multi-search-table.js</h5>
              <MultiSearchTable />
            </div>
          </div>
        </div>
        <div className="col-md-offset-1 col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">Column Filter Example</div>
            <div className="panel-body">
              <h5>Source in /examples/js/manipulation/filter-table.js</h5>
              <h5>See your console to watch information of after column filtering.</h5>
              <ColumnFilterTable />
            </div>
          </div>
        </div>
        <div className="col-md-offset-1 col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">Export CSV Example</div>
            <div className="panel-body">
              <h5>Source in /examples/js/manipulation/export-csv-table.js</h5>
              <ExportCSVTable />
            </div>
          </div>
        </div>
        <div className="col-md-offset-1 col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">Custom Confirmation for row deletion Example</div>
            <div className="panel-body">
              <h5>Source in /examples/js/manipulation/del-row-custom-confirm.js</h5>
              <DeleteRowCustomComfirmTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
