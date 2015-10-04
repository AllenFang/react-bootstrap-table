import BootstrapTable from './BootstrapTable';
import TableHeaderColumn from './TableHeaderColumn';
import {TableDataSet} from './store/TableDataStore';

if(typeof window !== 'undefined'){
  window.BootstrapTable = BootstrapTable;
  window.TableHeaderColumn = TableHeaderColumn;
}
export default {
  BootstrapTable,
  TableHeaderColumn,
  TableDataSet
};
