import BootstrapTable from './BootstrapTable';
import TableHeaderColumn from './TableHeaderColumn';

if (typeof window !== 'undefined') {
  window.BootstrapTable = BootstrapTable;
  window.TableHeaderColumn = TableHeaderColumn;
}
export {
  BootstrapTable,
  TableHeaderColumn
};
