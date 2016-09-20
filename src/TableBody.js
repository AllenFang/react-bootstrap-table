import React, { Component, PropTypes } from 'react';
import Const from './Const';
import TableRow from './TableRow';
import TableColumn from './TableColumn';
import TableEditColumn from './TableEditColumn';
import classSet from 'classnames';

const isFun = function(obj) {
  return obj && (typeof obj === 'function');
};

class TableBody extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currEditCell: null
    };

    this.editing = false;
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
    let tableRows = [];

    if (this.props.sections === true) {
      const headerKey = this.props.sectionKey + '-' + 'header';
      let headerContent;

      if (this.props.sectionFormat) {
        headerContent = this.props.sectionFormat(this.props.sectionKey);
      } else {
        headerContent = (<td colSpan={ this.props.columns.length + (isSelectRowDefined ? 1 : 0) }
            style={ { textAlign: 'center' } }>
            <strong>{ this.props.sectionKey }</strong>
        </td>);
      }

      tableRows.push(
        <TableRow key={ headerKey }>
          { headerContent }
        </TableRow>
      );

      this.props.data.map(function(data, r) {
        let rowKey = data[this.props.keyField];
        const baseKey = this.props.sectionKey + '-' + (rowKey || tableRows.length - 1);
        rowKey = baseKey + '-' + 'row';

        const tableColumns = this.props.columns.map(function(column, i) {
          const fieldValue = data[column.name];
          const columnKey = baseKey + '-' + column.name + '-' + 'column';
          if (this.editing &&
            column.name !== rowKey && // Key field can't be edit
            column.editable && // column is editable? default is true, user can set it false
            this.state.currEditCell !== null &&
            this.state.currEditCell.sk === this.props.sectionKey &&
            this.state.currEditCell.rid === r &&
            this.state.currEditCell.cid === i) {
            return this.renderTableEditColumn(column, data, r, fieldValue, i, columnKey);
          } else {
            return this.renderTableColumn(column, data, r, fieldValue, i, columnKey);
          }
        }, this);
        tableRows.push(this.renderTableRow(data, tableColumns, r,
                       unselectable, isSelectRowDefined,
                       CustomComponent, rowKey, inputType)
                      );
      }, this);
    } else {
      const rowKey = this.props.data[this.props.keyField];
      tableRows = this.props.data.map(function(data, r) {
        const tableColumns = this.props.columns.map(function(column, i) {
          const fieldValue = data[column.name];
          if (this.editing &&
            column.name !== this.props.keyField && // Key field can't be edit
            column.editable && // column is editable? default is true, user can set it false
            this.state.currEditCell !== null &&
            this.state.currEditCell.rid === r &&
            this.state.currEditCell.cid === i) {
            return this.renderTableEditColumn(column, data, r, fieldValue, i);
          } else {
            return this.renderTableColumn(column, data, r, fieldValue, i);
          }
        }, this);
        return this.renderTableRow(data, tableColumns, r,
                                   unselectable, isSelectRowDefined,
                                   CustomComponent, rowKey, inputType);
      }, this);
    }

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

    this.editing = false;

    const tbodyKey = this.props.sectionKey + '-' + 'tbody';

    return (
      <div ref='container'
        className={ classSet('react-bs-container-body', this.props.bodyContainerClass) }
        style={ this.props.style }>
        <table className={ tableClasses }>
          { tableHeader }
          <tbody key={ tbodyKey } ref='tbody'>
            { tableRows }
          </tbody>
        </table>
      </div>
    );
  }

  renderTableEditColumn(column, data, r, fieldValue, i, key = null) {
    let editable = column.editable;
    const format = column.format ? function(value) {
      return column.format(value, data, column.formatExtraData, r).replace(/<.*?>/g, '');
    } : false;
    if (isFun(column.editable)) {
      editable = column.editable(fieldValue, data, r, i);
    }

    return (
      <TableEditColumn
        completeEdit={ this.handleCompleteEditCell }
        // add by bluespring for column editor customize
        editable={ editable }
        customEditor={ column.customEditor }
        format={ column.format ? format : false }
        key={ key || i }
        sectionKey= { this.props.sectionKey }
        blurToSave={ this.props.cellEdit.blurToSave }
        rowIndex={ r }
        colIndex={ i }
        row={ data }
        fieldValue={ fieldValue } />
    );
  }

  renderTableColumn(column, data, r, fieldValue, i, key = null) {
    let columnChild = fieldValue && fieldValue.toString();
    let columnTitle = null;
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
      <TableColumn key={ key || i }
        sectionKey= { this.props.sectionKey }
        dataAlign={ column.align }
        className={ tdClassName }
        columnTitle={ columnTitle }
        cellEdit={ this.props.cellEdit }
        hidden={ column.hidden }
        onEdit={ this.handleEditCell }
        width={ column.width }>
        { columnChild }
      </TableColumn>
    );
  }

  renderTableRow(data, tableColumns, r, unselectable, isSelectRowDefined,
                 CustomComponent = null, key, inputType) {
    const disable = unselectable.indexOf(key) !== -1;
    const selected = this.props.selectedRowKeys.indexOf(key) !== -1;
    const selectRowColumn = isSelectRowDefined && !this.props.selectRow.hideSelectColumn ?
            this.renderSelectRowColumn(selected, inputType, disable, CustomComponent, r) : null;
    // add by bluespring for className customize
    let trClassName = this.props.trClassName;
    if (isFun(this.props.trClassName)) {
      trClassName = this.props.trClassName(data, r);
    }
    return (
      <TableRow key={ key }
        className={ trClassName }
        isSelected={ selected }
        selectRow={ isSelectRowDefined ? this.props.selectRow : undefined }
        enableCellEdit={ this.props.cellEdit.mode !== Const.CELL_EDIT_NONE }
        onRowClick={ this.handleRowClick }
        onRowMouseOver={ this.handleRowMouseOver }
        onRowMouseOut={ this.handleRowMouseOut }
        onSelectRow={ this.handleSelectRow }
        unselectableRow={ disable }>
        { selectRowColumn }
        { tableColumns }
      </TableRow>
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
    rowIndex = this._fixRowIndex(rowIndex);
    const targetRow = this.props.data[rowIndex];
    this.props.onRowMouseOut(targetRow, event);
  }

  handleRowMouseOver = (rowIndex, event) => {
    rowIndex = this._fixRowIndex(rowIndex);
    const targetRow = this.props.data[rowIndex];
    this.props.onRowMouseOver(targetRow, event);
  }

  handleRowClick = rowIndex => {
    rowIndex = this._fixRowIndex(rowIndex);
    let selectedRow;
    const { data, onRowClick } = this.props;
    data.forEach((row, i) => {
      if (i === rowIndex - 1) {
        selectedRow = row;
      }
    });
    onRowClick(selectedRow);
  }

  handleSelectRow = (rowIndex, isSelected, e) => {
    rowIndex = this._fixRowIndex(rowIndex);
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
    rowIndex = this._fixRowIndex(rowIndex);
    if (!this.props.selectRow.clickToSelect ||
      !this.props.selectRow.clickToSelectAndEditCell) {
      this.handleSelectRow(
        rowIndex + 1,
        e.currentTarget.checked,
        e);
    }
  }

  handleEditCell = (sectionKey, rowIndex, columnIndex, e) => {
    rowIndex = this._fixRowIndex(rowIndex);
    this.editing = true;
    if (this._isSelectRowDefined()) {
      columnIndex--;
      if (this.props.selectRow.hideSelectColumn) columnIndex++;
    }
    rowIndex--;
    const stateObj = {
      currEditCell: {
        sk: sectionKey,
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

  handleCompleteEditCell = (newVal, sectionKey, rowIndex, columnIndex) => {
    this.setState({ currEditCell: null });
    if (newVal !== null) {
      this.props.cellEdit.__onCompleteEdit__(newVal, rowIndex, columnIndex, sectionKey);
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

  _fixRowIndex(rowIndex) {
    if (this.props.sections === true) {
      rowIndex--;
    }
    return rowIndex;
  }
}
TableBody.propTypes = {
  sectionKey: PropTypes.string,
  sections: PropTypes.bool,
  sectionFormat: PropTypes.func,
  data: PropTypes.array,
  columns: PropTypes.array,
  striped: PropTypes.bool,
  bordered: PropTypes.bool,
  hover: PropTypes.bool,
  condensed: PropTypes.bool,
  keyField: PropTypes.string,
  selectedRowKeys: PropTypes.array,
  onRowClick: PropTypes.func,
  onSelectRow: PropTypes.func,
  noDataText: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),
  style: PropTypes.object,
  tableBodyClass: PropTypes.string,
  bodyContainerClass: PropTypes.string
};

TableBody.defaultProps = {
  sectionKey: 'default'
};

export default TableBody;
