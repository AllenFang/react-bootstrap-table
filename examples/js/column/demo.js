/* eslint max-len: 0 */
import React from 'react';
import ColumnAlignTable from './column-align-table';
import ColumnWidthTable from './column-width-table';
import ColumnHideTable from './column-hide-table';
import ColumnTitleTable from './column-title-table';
import TdAttributeTable from './td-attribute-table';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Column Align Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/column/column-align-table.js</h5>
              <ColumnAlignTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Column Width Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/column/column-width-table.js</h5>
              <ColumnWidthTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Column Hide Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/column/column-hide-table.js</h5>
              <ColumnHideTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Column Title Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/column/column-title-table.js</h5>
              <ColumnTitleTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>TD Attributes Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/column/td-attribute-table.js</h5>
              <span>You can apply your own couple attributes on the DOM of <code>td</code></span>
              <TdAttributeTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
