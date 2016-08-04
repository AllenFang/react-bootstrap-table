/* eslint max-len: 0 */
import React from 'react';
import HtmlColumnFormatTable from './html-column-format-table';
import ReactColumnFormatTable from './react-column-format-table';
import ExtraDataColumnFormatTable from './extra-data-column-format-table';
import GetRowIndexTable from './get-row-index-table';

class Demo extends React.Component {
  render() {
    return (
				<div>
					<div className='col-md-offset-1 col-md-8'>
						<div className='panel panel-default'>
							<div className='panel-heading'>Html Column format Example</div>
							<div className='panel-body'>
								<h5>Source in /examples/js/column-format/html-column-format-table.js</h5>
								<HtmlColumnFormatTable />
							</div>
						</div>
					</div>
					<div className='col-md-offset-1 col-md-8'>
						<div className='panel panel-default'>
							<div className='panel-heading'>React Component Column format Example</div>
							<div className='panel-body'>
								<h5>Source in /examples/js/column-format/react-column-format-table.js</h5>
								<ReactColumnFormatTable />
							</div>
						</div>
					</div>
					<div className='col-md-offset-1 col-md-8'>
						<div className='panel panel-default'>
							<div className='panel-heading'>Extra Data Column format Example</div>
							<div className='panel-body'>
								<h5>Source in /examples/js/column-format/extra-data-column-format-table.js</h5>
								<ExtraDataColumnFormatTable />
							</div>
						</div>
					</div>
          <div className='col-md-offset-1 col-md-8'>
						<div className='panel panel-default'>
							<div className='panel-heading'>Get Row Index Example</div>
              <h5><b>Use the <code>fourth</code> argument to get the row index</b>. Check the browser console</h5>
							<div className='panel-body'>
								<h5>Source in /examples/js/column-format/get-row-index-table.js</h5>
								<GetRowIndexTable />
							</div>
						</div>
					</div>
				</div>
    );
  }
}

export default Demo;
