import React, { Component, PropTypes } from 'react';
import Const from './Const';
import TableRow from './TableRow';
import TableColumn from './TableColumn';
import TableEditColumn from './TableEditColumn';
import classSet from 'classnames';

const isFun = function(obj) {
  return obj && (typeof obj === 'function');
};

const mapColumns = function(column, i, data, r, object) {
  const fieldValue = data[column.name];
  if (column.name !== object.props.keyField && // Key field can't be edit
      column.editable && // column is editable? default is true, user can set it false
      object.state.currEditCell !== null &&
      object.state.currEditCell.rid === r &&
      object.state.currEditCell.cid === i) {
    let editable = column.editable;
    const format = column.format ? function(value) {
      return column.format(value, data, column.formatExtraData, r).replace(/<.*?>/g, '');
    } : false;
    if (isFun(column.editable)) {
      editable = column.editable(fieldValue, data, r, i);
    }

    return (
        <TableEditColumn
            completeEdit={ object.handleCompleteEditCell }
            // add by bluespring for column editor customize
            editable={ editable }
            customEditor={ column.customEditor }
            format={ column.format ? format : false }
            key={ i }
            blurToSave={ object.props.cellEdit.blurToSave }
            rowIndex={ r }
            colIndex={ i }
            row={ data }
            fieldValue={ fieldValue } />
    );
  } else {
    // add by bluespring for className customize
    let columnChild = fieldValue && fieldValue.toString();
    let columnTitle = null;
    const colSpan = 1;
    let tdClassName = column.className;
    if (isFun(column.className)) {
      tdClassName = column.className(fieldValue, data, r, i);
    }

    if (typeof column.format !== 'undefined') {
      const formattedValue = column.format(fieldValue, data, column.formatExtraData, r);
      if (!React.isValidElement(formattedValue)) {
        columnChild = (
            <div dangerouslySetInnerHTML={ { __html: formattedValue } }></div>
        );
      } else {
        columnChild = formattedValue;
        columnTitle = column.columnTitle && formattedValue ? formattedValue.toString() : null;
      }
    } else {
      columnTitle = column.columnTitle && fieldValue ? fieldValue.toString() : null;
    }
    return (
        <TableColumn key={ i }
                     dataAlign={ column.align }
                     className={ tdClassName }
                     columnTitle={ columnTitle }
                     colSpan={ colSpan }
                     cellEdit={ object.props.cellEdit }
                     hidden={ column.hidden }
                     onEdit={ object.handleEditCell }
                     width={ column.width }>
          { columnChild }
        </TableColumn>
    );
  }
};

const mapTableRows = function(data, r, unselectable,
                              isSelectRowDefined, inputType, CustomComponent, object) {
  const tableColumns = object.props.columns.map((column, i) => {
    return mapColumns(column, i, data, r, object);
  }, object);
  const key = data[object.props.keyField];
  const disable = unselectable.indexOf(key) !== -1;
  const selected = object.props.selectedRowKeys.indexOf(key) !== -1;
  const selectRowColumn = isSelectRowDefined && !object.props.selectRow.hideSelectColumn ?
      object.renderSelectRowColumn(selected, inputType, disable, CustomComponent, r) : null;
  // add by bluespring for className customize
  let trClassName = object.props.trClassName;
  if (isFun(object.props.trClassName)) {
    trClassName = object.props.trClassName(data, r);
  }
  return (
      <TableRow isSelected={ selected } key={ key } className={ trClassName } ref={ key }
                selectRow={ isSelectRowDefined ? object.props.selectRow : undefined }
                enableCellEdit={ object.props.cellEdit.mode !== Const.CELL_EDIT_NONE }
                onRowClick={ object.handleRowClick }
                onRowDoubleClick={ object.handleRowDoubleClick }
                onRowMouseOver={ object.handleRowMouseOver }
                onRowMouseOut={ object.handleRowMouseOut }
                onSelectRow={ object.handleSelectRow }
                unselectableRow={ disable }>
        { selectRowColumn }
        { tableColumns }
      </TableRow>
  );
};

class TableBody extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currEditCell: null
    };
  }

  render() {
    const tableClasses = classSet('table', {
      'table-striped': this.props.striped,
      'table-bordered': this.props.bordered,
      'table-hover': this.props.hover,
      'table-condensed': this.props.condensed
    }, this.props.tableBodyClass);

    const unselectable = this.props.selectRow.unselectable || [];
    const isSelectRowDefined = this._isSelectRowDefined();
    const tableHeader = this.renderTableHeader(isSelectRowDefined);
    const inputType = this.props.selectRow.mode === Const.ROW_SELECT_SINGLE ? 'radio' : 'checkbox';
    const CustomComponent = this.props.selectRow.customComponent;

    const tableRows = this.props.data.map((data, r) => {
      return mapTableRows(
        data, r, unselectable,
        isSelectRowDefined, inputType, CustomComponent,
        this
      );
    });

    if (tableRows.length === 0) {
      tableRows.push(
        <TableRow key='##table-empty##'>
          <td colSpan={ this.props.columns.length + (isSelectRowDefined ? 1 : 0) }
              className='react-bs-table-no-data'>
              { this.props.noDataText || Const.NO_DATA_TEXT }
          </td>
        </TableRow>
      );
    }
    const footerRows = this.props.footerData ? this.props.footerData.map((data, r) => {
      return mapTableRows(
        data, r, unselectable,
        isSelectRowDefined, inputType, CustomComponent,
        this
      );
    }) : [];

    return (
      <div ref='container'
        className={ classSet('react-bs-container-body', this.props.bodyContainerClass) }
        style={ this.props.style }>
        <table className={ tableClasses }>
          { tableHeader }
          <tbody ref='tbody'>
            { tableRows }
          </tbody>
          { footerRows.length > 0 && <tfoot ref='tfoot'>
          { footerRows }
          </tfoot> }
        </table>
      </div>
    );
  }

  renderTableHeader(isSelectRowDefined) {
    let selectRowHeader = null;

    if (isSelectRowDefined) {
      const style = {
        width: 30,
        minWidth: 30
      };
      if (!this.props.selectRow.hideSelectColumn) {
        selectRowHeader = (<col style={ style } key={ -1 }></col>);
      }
    }
    const theader = this.props.columns.map(function(column, i) {
      const style = {
        display: column.hidden ? 'none' : null
      };
      if (column.width) {
        const width = parseInt(column.width, 10);
        style.width = width;
        /** add min-wdth to fix user assign column width
        not eq offsetWidth in large column table **/
        style.minWidth = width;
      }
      return (<col style={ style } key={ i } className={ column.className }></col>);
    });

    return (
      <colgroup ref='header'>
        { selectRowHeader }{ theader }
      </colgroup>
    );
  }

  handleRowMouseOut = (rowIndex, event) => {
    const targetRow = this.props.data[rowIndex];
    this.props.onRowMouseOut(targetRow, event);
  }

  handleRowMouseOver = (rowIndex, event) => {
    const targetRow = this.props.data[rowIndex];
    this.props.onRowMouseOver(targetRow, event);
  }

  handleRowClick = rowIndex => {
    let selectedRow;
    const { data, onRowClick } = this.props;
    data.forEach((row, i) => {
      if (i === rowIndex - 1) {
        selectedRow = row;
      }
    });
    onRowClick(selectedRow);
  }

  handleRowDoubleClick = rowIndex => {
    let selectedRow;
    const { data, onRowDoubleClick } = this.props;
    data.forEach((row, i) => {
      if (i === rowIndex - 1) {
        selectedRow = row;
      }
    });
    onRowDoubleClick(selectedRow);
  }

  handleSelectRow = (rowIndex, isSelected, e) => {
    let selectedRow;
    const { data, onSelectRow } = this.props;
    data.forEach((row, i) => {
      if (i === rowIndex - 1) {
        selectedRow = row;
        return false;
      }
    });
    onSelectRow(selectedRow, isSelected, e);
  }

  handleSelectRowColumChange = (e, rowIndex) => {
    if (!this.props.selectRow.clickToSelect ||
      !this.props.selectRow.clickToSelectAndEditCell) {
      this.handleSelectRow(
        rowIndex + 1,
        e.currentTarget.checked,
        e);
    }
  }

  handleEditCell = (rowIndex, columnIndex, e) => {
    if (this._isSelectRowDefined()) {
      columnIndex--;
      if (this.props.selectRow.hideSelectColumn) columnIndex++;
    }
    rowIndex--;
    const stateObj = {
      currEditCell: {
        rid: rowIndex,
        cid: columnIndex
      }
    };

    if (this.props.selectRow.clickToSelectAndEditCell &&
        this.props.cellEdit.mode !== Const.CELL_EDIT_DBCLICK) {
      const selected = this.props.selectedRowKeys.indexOf(
        this.props.data[rowIndex][this.props.keyField]) !== -1;
      this.handleSelectRow(rowIndex + 1, !selected, e);
    }
    this.setState(stateObj);
  }

  handleCompleteEditCell = (newVal, rowIndex, columnIndex) => {
    this.setState({ currEditCell: null });
    if (newVal !== null) {
      this.props.cellEdit.__onCompleteEdit__(newVal, rowIndex, columnIndex);
    }
  }

  renderSelectRowColumn(selected, inputType, disabled, CustomComponent = null, rowIndex = null) {
    return (
      <TableColumn dataAlign='center'>
      { CustomComponent ?
        <CustomComponent type={ inputType } checked={ selected } disabled={ disabled }
          rowIndex={ rowIndex }
          onChange={ e=>this.handleSelectRowColumChange(e,
            e.currentTarget.parentElement.parentElement.parentElement.rowIndex) }/> :
        <input type={ inputType } checked={ selected } disabled={ disabled }
          onChange={ e=>this.handleSelectRowColumChange(e,
            e.currentTarget.parentElement.parentElement.rowIndex) }/>
      }
      </TableColumn>
    );
  }

  _isSelectRowDefined() {
    return this.props.selectRow.mode === Const.ROW_SELECT_SINGLE ||
          this.props.selectRow.mode === Const.ROW_SELECT_MULTI;
  }
}
TableBody.propTypes = {
  data: PropTypes.array,
  footerData: PropTypes.array,
  columns: PropTypes.array,
  striped: PropTypes.bool,
  bordered: PropTypes.bool,
  hover: PropTypes.bool,
  condensed: PropTypes.bool,
  keyField: PropTypes.string,
  selectedRowKeys: PropTypes.array,
  onRowClick: PropTypes.func,
  onRowDoubleClick: PropTypes.func,
  onSelectRow: PropTypes.func,
  noDataText: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),
  style: PropTypes.object,
  tableBodyClass: PropTypes.string,
  bodyContainerClass: PropTypes.string
};
export default TableBody;
