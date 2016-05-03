/* eslint max-len: 0 */
import React from 'react';
import CustomDataAccessTable from './custom-data-access';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Use a custom function to access data</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/custom-data-access/custom-data-access.js</h5>
              <CustomDataAccessTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;

