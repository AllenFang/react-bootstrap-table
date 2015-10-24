require('./style.css');
import React from 'react';
import TrClassStringTable from './tr-class-string-table';
import TrClassFunctionTable from './tr-class-function-table';
import TdClassStringTable from './td-class-string-table';
import TdClassFunctionTable from './td-class-function-table';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <div className="col-md-offset-1 col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">Set String as <code>trClassName</code> on &lt;BootstrapTable&gt;</div>
            <div className="panel-body">
              <h5>Source in /examples/js/style/tr-class-string-table.js</h5>
              <TrClassStringTable />
            </div>
          </div>
        </div>
        <div className="col-md-offset-1 col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">Set Function as <code>trClassName</code> on &lt;BootstrapTable&gt;(more easy to customize)</div>
            <div className="panel-body">
              <h5>Source in /examples/js/style/tr-class-function-table.js</h5>
              <TrClassFunctionTable />
            </div>
          </div>
        </div>
        <div className="col-md-offset-1 col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">Set String as <code>classname</code> & <code>columnClassName</code> on &lt;TableHeaderColumn&gt;(header &amp; column)</div>
            <div className="panel-body">
              <h5>Source in /examples/js/style/td-class-string-table.js</h5>
              <TdClassStringTable />
            </div>
          </div>
        </div>
        <div className="col-md-offset-1 col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">Set Function as <code>classname</code> & <code>columnClassName</code> on &lt;TableHeaderColumn&gt;(more easy to customize column)</div>
            <div className="panel-body">
              <h5>Source in /examples/js/style/td-class-function-table.js</h5>
              <TdClassFunctionTable />
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Demo;
