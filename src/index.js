import BootstrapTable from './BootstrapTable';
import TableHeaderColumn from './TableHeaderColumn';
import InsertModalHeader from './toolbar/InsertModalHeader';
import InsertModalBody from './toolbar/InsertModalBody';
import InsertModalFooter from './toolbar/InsertModalFooter';

if (typeof window !== 'undefined') {
  window.BootstrapTable = BootstrapTable;
  window.TableHeaderColumn = TableHeaderColumn;
  window.InsertModalHeader = InsertModalHeader;
  window.InsertModalBody = InsertModalBody;
  window.InsertModalFooter = InsertModalFooter;
}
export {
  BootstrapTable,
  TableHeaderColumn,
  InsertModalHeader,
  InsertModalBody,
  InsertModalFooter
};
