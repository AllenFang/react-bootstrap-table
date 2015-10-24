import React from 'react';
import InsertRowTable from './insert-row-table';
import DeleteRowTable from './delete-row-table';
import SearchTable from './search-table';
import ColumnFilterTable from './filter-table';

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
            <div className="panel-heading">Table Search Example</div>
            <div className="panel-body">
              <h5>Source in /examples/js/manipulation/search-table.js</h5>
              <SearchTable />
            </div>
          </div>
        </div>
        <div className="col-md-offset-1 col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">Column Filter Example</div>
            <div className="panel-body">
              <h5>Source in /examples/js/manipulation/filter-table.js</h5>
              <ColumnFilterTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
