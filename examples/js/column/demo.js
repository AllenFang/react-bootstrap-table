/* eslint max-len: 0 */
import React from 'react';
import ColumnAlignTable from './column-align-table';
import ColumnWidthTable from './column-width-table';
import ColumnHideTable from './column-hide-table';
import ColumnWordWrapTable from './column-style-table';
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
            <div className='panel-heading'>Column Word Wrap Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/column/column-style-table.js</h5>
              <span>This example show you how to configure style on td cell for tuning Product Name as word wrap<br/></span>
              <span style={ { color: 'red' } }>
                <b>You can use <code>tdStyle</code> ro <code>thStyle</code> to configure your own css, but we highly recommend you do not set <code>width</code>, <code>min-width</code> and <code>max-width</code></b>
              </span>
              <ColumnWordWrapTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Column Title Example</div>
            <div className='panel-body'>
              <span>Disable/Enable header title via <code>headerTitle</code> <br/></span>
              <span>Disable/Enable cell title via <code>columnTitle</code> <br/></span>
              <span>Custom the header title via <code>headerText</code> <br/></span>
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
