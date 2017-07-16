/* eslint max-len: 0 */
require('./style.css');
import React from 'react';
import TrClassStringTable from './tr-class-string-table';
import TrClassFunctionTable from './tr-class-function-table';
import TrStyleTable from './tr-style-table';
import TdClassStringTable from './td-class-string-table';
import TdClassFunctionTable from './td-class-function-table';
import EditTdClassTable from './edit-td-class-table';
import InlineStylingTable from './inline-style-table';
import TableClassTable from './table-class-table';
import StyledComponentTable from './table-styled-components';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Able to add class to &lt;table&gt; for header and body</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/style/table-class-table.js</h5>
              <TableClassTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Set String as <code>trClassName</code> on &lt;BootstrapTable&gt;</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/style/tr-class-string-table.js</h5>
              <TrClassStringTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Set Function as <code>trClassName</code> on &lt;BootstrapTable&gt;(more easy to customize)</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/style/tr-class-function-table.js</h5>
              <TrClassFunctionTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Set String or Function for <code>trStyle</code> on &lt;BootstrapTable&gt;</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/style/tr-style-table.js</h5>
              <TrStyleTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Set String as <code>classname</code> & <code>columnClassName</code> on &lt;TableHeaderColumn&gt;(header &amp; column)</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/style/td-class-string-table.js</h5>
              <TdClassStringTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Set Function as <code>classname</code> & <code>columnClassName</code> on &lt;TableHeaderColumn&gt;(more easy to customize column)</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/style/td-class-function-table.js</h5>
              <TdClassFunctionTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Set String or Function to <code>editColumnClassName</code> on &lt;TableHeaderColumn&gt;</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/style/edit-td-class-table.js</h5>
              <EditTdClassTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Support Inline Style for Bootstrap Table</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/style/inline-style-table.js</h5>
              <InlineStylingTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Support <a href='https://github.com/styled-components/styled-components' target='_blank'>styled-components</a></div>
            <div className='panel-body'>
              <h5>Source in /examples/js/style/table-styled-components.js</h5>
              <StyledComponentTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
