/* eslint max-len: 0 */
import React from 'react';
import DefaultDragAndDropTable from './default-draganddrop-table';
import DragAndDropHookTable from './draganddrop-hook-table';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Basic drag-and-drop Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/draganddrop/default-draganddrop-table.js</h5>
              <DefaultDragAndDropTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Drag-and-drop Hooks(onDroppedRow) Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/draganddrop/draganddrop-hook-table.js</h5>
              <DragAndDropHookTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
