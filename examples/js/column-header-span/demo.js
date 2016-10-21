/* eslint max-len: 0 */
import React from 'react';
import ColumnHeaderSpan from './column-header-span';
import ColumnHeaderSpanComplex from './column-header-span-complex';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Column Header Span a simple example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/column-header-span/column-header-span.js</h5>
              <ColumnHeaderSpan />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Column Header Span a complex example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/column-header-span/column-header-span-complex.js</h5>
              <ColumnHeaderSpanComplex />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
