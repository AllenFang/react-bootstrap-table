/* eslint max-len: 0 */
import React from 'react';
import FooterTable from './footer-table';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Table Footer Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/footer/footer-table.js</h5>
              <FooterTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
