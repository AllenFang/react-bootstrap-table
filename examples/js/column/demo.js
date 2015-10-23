import React from 'react';
import ColumnAlignTable from './column-align-table';
import ColumnWidthTable from './column-width-table';
import ColumnHideTable from './column-hide-table';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <div className="col-md-offset-1 col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">Column Align Example</div>
            <div className="panel-body">
              <h5>Source in /examples/js/column/column-align-table.js</h5>
              <ColumnAlignTable />
            </div>
          </div>
        </div>
        <div className="col-md-offset-1 col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">Column Width Example</div>
            <div className="panel-body">
              <h5>Source in /examples/js/column/column-width-table.js</h5>
              <ColumnWidthTable />
            </div>
          </div>
        </div>
        <div className="col-md-offset-1 col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">Column Hide Example</div>
            <div className="panel-body">
              <h5>Source in /examples/js/column/column-hide-table.js</h5>
              <ColumnHideTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
