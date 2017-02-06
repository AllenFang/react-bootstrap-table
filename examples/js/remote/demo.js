/* eslint max-len: 0 */
import React from 'react';
import RemoteStoreSorting from './remote-store-sorting';
import RemoteStoreFiltering from './remote-store-filtering';
import RemoteStoreSearch from './remote-store-search';
import RemoteStorePaging from './remote-store-paging';
import RemoteStoreInsertRow from './remote-store-insert-row';
import RemoteStoreDeleteRow from './remote-store-delete-row';
import RemoteStoreCellEdit from './remote-store-cell-edit';
import RemoteStoreExportCSV from './remote-store-export-csv';
import RemoteStoreAlternative from './remote-store-alternative';
import RemoteStoreAll from './remote-store-all';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Remote Sorting Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/remote/remote-store-sorting.js and
                /examples/js/remote/remote-sorting.js</h5>
              <RemoteStoreSorting />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Remote Filtering Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/remote/remote-store-filtering.js and
                /examples/js/remote/remote-filtering.js</h5>
              <RemoteStoreFiltering />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Remote Search Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/remote/remote-store-search.js and
                /examples/js/remote/remote-search.js</h5>
              <RemoteStoreSearch />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Remote Paging Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/remote/remote-store-paging.js and
                /examples/js/remote/remote-paging.js</h5>
              <RemoteStorePaging sizePerPage={ 5 }/>
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Remote Insert Row Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/remote/remote-store-insert-row.js and
                /examples/js/remote/remote-insert-row.js</h5>
              <RemoteStoreInsertRow />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Remote Delete Row Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/remote/remote-store-delete-row.js and
                /examples/js/remote/remote-delete-row.js</h5>
              <RemoteStoreDeleteRow />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Remote Cell Edit Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/remote/remote-store-cell-edit.js and
                /examples/js/remote/remote-cell-edit.js</h5>
              <RemoteStoreCellEdit />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Remote Export CSV Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/remote/remote-store-export-csv.js and
                /examples/js/remote/remote-export-csv.js</h5>
              <RemoteStoreExportCSV />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Alternative Configure Remote Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/remote/remote-store-alternative.js and
                /examples/js/remote/remote-alternative.js</h5>
              <span>Remote mode also allow you to choose which functionality should be handle by remote.</span>
              <RemoteStoreAlternative />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Remote All Features Together Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/remote/remote-store-all.js and
                /examples/js/remote/remote-all.js</h5>
              <RemoteStoreAll sizePerPage={ 5 }/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
