/* eslint max-len: 0 */
require('./style.css');
import React from 'react';
import ClickToEditTable from './click-to-edit-table';
import DbClickToEditTable from './dbclick-to-edit-table';
import BlurToSaveTable from './blur-to-save-table';
import BlurToEscapeTable from './blur-to-escape-table';
import CellEditHookTable from './cell-edit-hook-table';
import NonEditableTable from './non-editable-table';
import CustomCellEditTable from './custom-cell-edit-table';
import EditCellClassNameTable from './cell-edit-classname';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Click to Edit Cell Example&nbsp;(Press ENTER to save, ESC to cancel)</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/cell-edit/click-to-edit-table.js</h5>
              <ClickToEditTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>DbClick to Edit Cell Example&nbsp;(Press ENTER to save, ESC to cancel)</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/cell-edit/dbclick-to-edit-table.js</h5>
              <DbClickToEditTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Blur to Save Cell Example&nbsp;(ESC to cancel)</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/cell-edit/blur-to-save-table.js</h5>
              <BlurToSaveTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Blur to Escape Editing Cell Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/cell-edit/blur-to-escape-table.js</h5>
              <BlurToEscapeTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>A Non Editable Cell Example&nbsp;</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/cell-edit/non-editable-table.js</h5>
              <span>
                BTW, if you set editable to true, which field will be non editable also when insert.<br/>
                so if you want to make field editable when insert, you can set ignoreEditable to true in options prop.<br/>
                In this example, Product Name can not be edited cause by we apply <code>editable</code>.<br/>
                In addtiion, we also make the whole row which Product ID less than 3 uneditable by <code>nonEditableRows</code>
              </span>
              <NonEditableTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>After Cell Edit Hook Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/cell-edit/cell-edit-hook-table.js</h5>
              <CellEditHookTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Custom Cell Editor Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/cell-edit/custom-cell-edit-table.js</h5>
              <CustomCellEditTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Editing Cell Classname Example</div>
            <div className='panel-body'>
              <span>
                <code>editColumnClassName</code> accept string or function, this prop is the class for editing cell<br/>
                <code>invalidEditColumnClassName</code> accept string or function, this prop is the class for editing invalid cell<br/>
                The Job Status and Job Name both apply the <code>editColumnClassName</code> and <code>invalidEditColumnClassName</code>.
              </span>
              <h5>Source in /examples/js/cell-edit/cell-edit-classname.js</h5>
              <EditCellClassNameTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
