import React from 'react';
import DefaultPaginationTable from './default-pagination-table';
import CustomPaginationTable from './custom-pagination-table';
import PaginationHookTable from './pagination-hook-table';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <div className="col-md-offset-1 col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">Basic Pagination Example</div>
            <div className="panel-body">
              <h5>Source in /examples/js/pagination/default-pagination-table.js</h5>
              <DefaultPaginationTable />
            </div>
          </div>
        </div>
        <div className="col-md-offset-1 col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">Custom Pagination Example</div>
            <div className="panel-body">
              <h5>Source in /examples/js/pagination/custom-pagination-table.js</h5>
              <CustomPaginationTable />
            </div>
          </div>
        </div>
        <div className="col-md-offset-1 col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">Pagination Hooks(onPageChange) Example</div>
            <div className="panel-body">
              <h5>Source in /examples/js/pagination/pagination-hook-table.js</h5>
              <PaginationHookTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
