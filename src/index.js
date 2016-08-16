import BootstrapTable from './BootstrapTable';
import TableHeaderColumn from './TableHeaderColumn';
import InsertModalHeader from './toolbar/InsertModalHeader';
import InsertModalBody from './toolbar/InsertModalBody';
import InsertModalFooter from './toolbar/InsertModalFooter';
import InsertButton from './toolbar/InsertButton';
import DeleteButton from './toolbar/DeleteButton';

if (typeof window !== 'undefined') {
  window.BootstrapTable = BootstrapTable;
  window.TableHeaderColumn = TableHeaderColumn;
  window.InsertModalHeader = InsertModalHeader;
  window.InsertModalBody = InsertModalBody;
  window.InsertModalFooter = InsertModalFooter;
  window.InsertButton = InsertButton;
  window.DeleteButton = DeleteButton;
}
export {
  BootstrapTable,
  TableHeaderColumn,
  InsertModalHeader,
  InsertModalBody,
  InsertModalFooter,
  InsertButton,
  DeleteButton
};
