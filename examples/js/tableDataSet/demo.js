import React from 'react';
import TableDataSetTable from './table-data-set';

class Demo extends React.Component {
  render() {
    return (
      <div className="col-md-offset-1 col-md-8">
        <div className="panel panel-default">
          <div className="panel-heading">A TableDataSet Example</div>
          <h5>Source in /examples/js/tableDataSet/app.js</h5>
          <div className="panel-body">
            <TableDataSetTable />
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
