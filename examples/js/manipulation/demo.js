/* eslint max-len: 0 */
import React from 'react';
import InsertRowTable from './insert-row-table';
import DeleteRowTable from './delete-row-table';
import StrictSearchTable from './strict-search-table';
import SearchTable from './search-table';
import ColumnFilterTable from './filter-table';
import MultiSearchTable from './multi-search-table';
import StrictMultiSearchTable from './strict-multi-search-table';
import ExportCSVTable from './export-csv-table';
import ExportCSVColumnTable from './export-csv-column-table';
import DeleteRowCustomComfirmTable from './del-row-custom-confirm';
import SearchClearTable from './search-clear-table';
import SearchFormatTable from './search-format-table';
import DebounceSearchTable from './debounce-search-table';
import CustomButtonTextTable from './custom-btn-text-table';
import DefaultSearchTable from './default-search-table';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>{ 'Insert Row Example' }</div>
            <div className='panel-body'>
              <h5>{ 'Source in /examples/js/manipulation/insert-row-table.js' }</h5>
              <InsertRowTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>{ 'Delete Row Example' }</div>
            <div className='panel-body'>
              <h5>{ 'Source in /examples/js/manipulation/delete-row-table.js' }</h5>
              <DeleteRowTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>{ 'Table Search Example(Include after search hook)' }</div>
            <div className='panel-body'>
              <h5>{ 'Source in /examples/js/manipulation/strict-search-table.js' }</h5>
              <h5>{ 'The table\'s ' }<code>{ 'strictSearch' }</code>{ ' is by default ' }<code>{ 'true' }</code>{ '.' }</h5>
              <h5>{ 'See your console to watch information of after searching.' }</h5>
              <h5>{ 'The Product ID has ' }<code>{ 'searchable' }</code>{ ' set to ' }<code>{ 'false' }</code>{ '.' }</h5>
              <StrictSearchTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>{ 'Table Search Example(Use space to delimited search text, ex:"name banana")' }</div>
            <div className='panel-body'>
              <h5>{ 'Source in /examples/js/manipulation/search-table.js' }</h5>
              <h5>{ 'The table\'s ' }<code>{ 'strictSearch' }</code>{ ' is set to ' }<code>{ 'false' }</code>{ '.' }</h5>
              <h5>{ 'See your console to watch information of after searching.' }</h5>
              <h5>{ 'The Product ID has ' }<code>{ 'searchable' }</code>{ ' set to ' }<code>{ 'false' }</code>{ '.' }</h5>
              <SearchTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>{ 'Table Multi Search Example(Use space to delimited search text, ex:"3 4")' }</div>
            <div className='panel-body'>
              <h5>{ 'Source in /examples/js/manipulation/multi-search-table.js' }</h5>
              <h5>{ 'The table\'s ' }<code>{ 'strictSearch' }</code>{ ' is by default ' }<code>{ 'false' }</code>{ '.' }</h5>
              <h5>{ 'The Product ID has ' }<code>{ 'searchable' }</code>{ ' set to ' }<code>{ 'false' }</code>{ '.' }</h5>
              <MultiSearchTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>{ 'Table Multi Search Example(Use space to delimited search text, ex:"3 orange")' }</div>
            <div className='panel-body'>
              <h5>{ 'Source in /examples/js/manipulation/strict-multi-search-table.js' }</h5>
              <h5>{ 'The table\'s ' }<code>{ 'strictSearch' }</code>{ ' is set to ' }<code>{ 'true' }</code>{ '.' }</h5>
              <h5>{ 'The Product ID has ' }<code>{ 'searchable' }</code>{ ' set to ' }<code>{ 'false' }</code>{ '.' }</h5>
              <StrictMultiSearchTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>{ 'Table Search Example with Clear Button' }</div>
            <div className='panel-body'>
              <h5>{ 'Source in /examples/js/manipulation/search-clear-table.js' }</h5>
              <h5>{ 'The Product Name has ' }<code>{ 'searchable' }</code>{ ' set to ' }<code>{ 'false' }</code>{ '.' }</h5>
              <SearchClearTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>{ 'Search for custom format data' }</div>
            <div className='panel-body'>
              <h5>{ 'You can custom the filter value by giving ' }<code>{ 'filterValue' }</code>{ ' when searching or filtering' }</h5>
              <h5>{ 'For example, the second field is formatted from an object, and you can searh on its type by keying Cloud, Mail, Insert, Modify, Money' }</h5>
              <h5>{ 'You can also search or filter the column after formatted, just enable ' }<code>{ 'filterFormatted' }</code></h5>
              <br/>
              <h5>{ 'Source in /examples/js/manipulation/search-format-table.js' }</h5>
              <SearchFormatTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>{ 'Debounce Search Table Example(Use searchDelayTime props to set your search delay time)' }</div>
            <div className='panel-body'>
              <h5>{ 'Source in /examples/js/manipulation/debounce-search-table.js' }</h5>
              <h5>{ 'use ' }<code>{ 'searchDelayTime' }</code>{ ' for ' }<code>{ 'options' }</code>{ ' object to set delay time in search input and default is 0.' }</h5>
              <DebounceSearchTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>{ 'Default Search Table' }</div>
            <div className='panel-body'>
              <h5>{ 'Source in /examples/js/manipulation/default-search-table.js' }</h5>
              <DefaultSearchTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>{ 'Column Filter Example' }</div>
            <div className='panel-body'>
              <h5>{ 'Source in /examples/js/manipulation/filter-table.js' }</h5>
              <h5>{ 'See your console to watch information of after column filtering.' }</h5>
              <ColumnFilterTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>{ 'Export CSV Example' }</div>
            <div className='panel-body'>
              <h5>{ 'Source in /examples/js/manipulation/export-csv-table.js' }</h5>
              <h5><b>{ 'Use ' }<code>{ 'options.csvFormat' }</code> on <code>{ 'TableHeaderColumn' }</code> { ' to format cell when exporting.' }</b></h5>
              <h5><b>{ 'Use ' }<code>{ 'options.csvHeader' }</code> on <code>{ 'TableHeaderColumn' }</code> { ' to change the header text in csv.' }</b></h5>
              <h5><b>{ 'Use ' }<code>{ 'options.csvFieldType' }</code> on <code>{ 'TableHeaderColumn' }</code> { ' to assign the value type(Available value is number and string).' }</b></h5>
              <h5><b>{ 'Use ' }<code>{ 'csvFormatExtraData' }</code> on <code>{ 'TableHeaderColumn' }</code> { ' to assign your extra data for formatting csv cell data.' }</b></h5>
              <h5><b>{ 'Use ' }<code>{ 'options.exportCSVSeparator' }</code>{ ' to speficy the separator of CSV file' }</b></h5>
              <h5><b>{ 'Use ' }<code>{ 'options.noAutoBOM' }</code>{ ' to speficy no_auto_bom' }</b></h5>
              <h5><b>{ 'Use ' }<code>{ 'options.excludeCSVHeader' }</code>{ ' to exclude the header when it is true' }</b></h5>
              <ExportCSVTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>{ 'Export CSV Column Example' }</div>
            <div className='panel-body'>
              <h5>{ 'Source in /examples/js/manipulation/export-csv-column-table.js' }</h5>
              <h5><b>{ 'Use ' }<code>{ 'export' }</code>{ ' to ask ' }<code>{ 'react-bootstrap-table' }</code>{ ' to export hidden column' }</b></h5>
              <h5><b>{ 'For example, The ID column is hidden, but can be exported by assigning ' }<code>{ 'export' }</code></b></h5>
              <h5><b>{ 'You can also give ' }<code>{ 'export=false' }</code>{ ' to ignore this column on exporting' }</b></h5>
              <ExportCSVColumnTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>{ 'A Custom add/delete/exportcsv Button Text Example' }</div>
            <div className='panel-body'>
              <h5>{ 'Source in /examples/js/manipulation/custom-btn-text-table.js' }</h5>
              <CustomButtonTextTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>{ 'Custom Confirmation for row deletion Example' }</div>
            <div className='panel-body'>
              <h5>{ 'Source in /examples/js/manipulation/del-row-custom-confirm.js' }</h5>
              <DeleteRowCustomComfirmTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
