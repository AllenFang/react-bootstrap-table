import React from 'react';
import ClickToEditTable from './click-to-edit-table';
import DbClickToEditTable from './dbclick-to-edit-table';
import BlurToSaveTable from './blur-to-save-table';
import CellEditHookTable from './cell-edit-hook-table';
import NonEditableTable from './non-editable-table';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <div className="col-md-offset-1 col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">Click to Edit Cell Example&nbsp;(Press ENTER to save, ESC to cancel)</div>
            <div className="panel-body">
              <h5>Source in /examples/js/cell-edit/click-to-edit-table.js</h5>
              <ClickToEditTable />
            </div>
          </div>
        </div>
        <div className="col-md-offset-1 col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">DbClick to Edit Cell Example&nbsp;(Press ENTER to save, ESC to cancel)</div>
            <div className="panel-body">
              <h5>Source in /examples/js/cell-edit/dbclick-to-edit-table.js</h5>
              <DbClickToEditTable />
            </div>
          </div>
        </div>
        <div className="col-md-offset-1 col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">Blur to Save Cell Example&nbsp;(ESC to cancel)</div>
            <div className="panel-body">
              <h5>Source in /examples/js/cell-edit/blur-to-save-table.js</h5>
              <BlurToSaveTable />
            </div>
          </div>
        </div>
        <div className="col-md-offset-1 col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">A Non Editable Cell Example&nbsp;(Product Name can't be edited)</div>
            <div className="panel-body">
              <h5>Source in /examples/js/cell-edit/non-editable-table.js</h5>
              <NonEditableTable />
            </div>
          </div>
        </div>
        <div className="col-md-offset-1 col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">After Cell Edit Hook Example</div>
            <div className="panel-body">
              <h5>Source in /examples/js/cell-edit/cell-edit-hook-table.js</h5>
              <CellEditHookTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
