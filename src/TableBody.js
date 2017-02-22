import React, { Component, PropTypes } from 'react';
import Utils from './util';
import Const from './Const';
import TableRow from './TableRow';
import TableColumn from './TableColumn';
import TableEditColumn from './TableEditColumn';
import classSet from 'classnames';
import ExpandComponent from './ExpandComponent';

const isFun = function(obj) {
  return obj && (typeof obj === 'function');
};

class TableBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currEditCell: null
    };
  }

  render() {
    const { cellEdit, beforeShowError, x, y, keyBoardNav } = this.props;
    const tableClasses = classSet('table', {
      'table-striped': this.props.striped,
      'table-bordered': this.props.bordered,
      'table-hover': this.props.hover,
      'table-condensed': this.props.condensed
    }, this.props.tableBodyClass);

    const noneditableRows = (cellEdit.nonEditableRows && cellEdit.nonEditableRows()) || [];
    const unselectable = this.props.selectRow.unselectable || [];
    const isSelectRowDefined = this._isSelectRowDefined();
    const tableHeader = Utils.renderColGroup(this.props.columns, this.props.selectRow, 'header');
    const inputType = this.props.selectRow.mode === Const.ROW_SELECT_SINGLE ? 'radio' : 'checkbox';
    const CustomComponent = this.props.selectRow.customComponent;
    const enableKeyBoardNav = (keyBoardNav === true || typeof keyBoardNav === 'object');
    const customEditAndNavStyle = typeof keyBoardNav === 'object' ?
      keyBoardNav.customStyleOnEditCell :
      null;
    const customNavStyle = typeof keyBoardNav === 'object' ?
      keyBoardNav.customStyle :
      null;
    let expandColSpan = this.props.columns.filter(col => !col.hidden).length;
    if (isSelectRowDefined && !this.props.selectRow.hideSelectColumn) {
      expandColSpan += 1;
    }
    let tabIndex = 1;
    const tableRows = this.props.data.map(function(data, r) {
      const tableColumns = this.props.columns.map(function(column, i) {
        const fieldValue = data[column.name];
        const isFocusCell = r === y && i === x;
        if (column.name !== this.props.keyField && // Key field can't be edit
          column.editable && // column is editable? default is true, user can set it false
          this.state.currEditCell !== null &&
          this.state.currEditCell.rid === r &&
          this.state.currEditCell.cid === i &&
          noneditableRows.indexOf(data[this.props.keyField]) === -1) {
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
                key={ i }
                blurToSave={ cellEdit.blurToSave }
                onTab={ this.handleEditCell }
                rowIndex={ r }
                colIndex={ i }
                row={ data }
                fieldValue={ fieldValue }
                className={ column.editClassName }
                invalidColumnClassName={ column.invalidEditColumnClassName }
                beforeShowError={ beforeShowError }
                isFocus={ isFocusCell }
                customStyleWithNav={ customEditAndNavStyle } />
            );
        } else {
          // add by bluespring for className customize
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
            <TableColumn key={ i }
              rIndex={ r }
              dataAlign={ column.align }
              className={ tdClassName }
              columnTitle={ columnTitle }
              cellEdit={ cellEdit }
              hidden={ column.hidden }
              onEdit={ this.handleEditCell }
              width={ column.width }
              onClick={ this.handleClickCell }
              attrs={ column.attrs }
              style={ column.style }
              tabIndex={ (tabIndex++) + '' }
              isFocus={ isFocusCell }
              keyBoardNav={ enableKeyBoardNav }
              onKeyDown={ this.handleCellKeyDown }
              customNavStyle={ customNavStyle }
              row={ data }>
              { columnChild }
            </TableColumn>
          );
        }
      }, this);
      const key = data[this.props.keyField];
      const disable = unselectable.indexOf(key) !== -1;
      const selected = this.props.selectedRowKeys.indexOf(key) !== -1;
      const selectRowColumn = isSelectRowDefined && !this.props.selectRow.hideSelectColumn ?
        this.renderSelectRowColumn(selected, inputType, disable, CustomComponent, r, data) : null;
      // add by bluespring for className customize
      let trClassName = this.props.trClassName;
      if (isFun(this.props.trClassName)) {
        trClassName = this.props.trClassName(data, r);
      }
      const result = [ <TableRow isSelected={ selected } key={ key } className={ trClassName }
        index={ r }
        selectRow={ isSelectRowDefined ? this.props.selectRow : undefined }
        enableCellEdit={ cellEdit.mode !== Const.CELL_EDIT_NONE }
        onRowClick={ this.handleRowClick }
        onRowDoubleClick={ this.handleRowDoubleClick }
        onRowMouseOver={ this.handleRowMouseOver }
        onRowMouseOut={ this.handleRowMouseOut }
        onSelectRow={ this.handleSelectRow }
        onExpandRow={ this.handleClickCell }
        unselectableRow={ disable }>
        { selectRowColumn }
        { tableColumns }
      </TableRow> ];

      if (this.props.expandableRow && this.props.expandableRow(data)) {
        result.push(
          <ExpandComponent
            className={ trClassName }
            bgColor={ this.props.expandRowBgColor || this.props.selectRow.bgColor || undefined }
            hidden={ !(this.props.expanding.indexOf(key) > -1) }
            colSpan={ expandColSpan }
            width={ "100%" }>
            { this.props.expandComponent(data) }
          </ExpandComponent>
        );
      }
      return (result);
    }, this);
    if (tableRows.length === 0 && !this.props.withoutNoDataText) {
      tableRows.push(
        <TableRow key='##table-empty##'>
          <td data-toggle='collapse'
              colSpan={ this.props.columns.length + (isSelectRowDefined ? 1 : 0) }
              className='react-bs-table-no-data'>
              { this.props.noDataText || Const.NO_DATA_TEXT }
          </td>
        </TableRow>
      );
    }

    return (
      <div ref='container'
        className={ classSet('react-bs-container-body', this.props.bodyContainerClass) }
        style={ this.props.style }>
        <table className={ tableClasses }>
          { React.cloneElement(tableHeader, { ref: 'header' }) }
          <tbody ref='tbody'>
            { tableRows }
          </tbody>
        </table>
      </div>
    );
  }

  handleCellKeyDown = (e, lastEditCell) => {
    e.preventDefault();
    const { keyBoardNav, onNavigateCell, cellEdit } = this.props;
    let offset;
    if (e.keyCode === 37) {
      offset = { x: -1, y: 0 };
    } else if (e.keyCode === 38) {
      offset = { x: 0, y: -1 };
    } else if (e.keyCode === 39 || e.keyCode === 9) {
      offset = { x: 1, y: 0 };
      if (e.keyCode === 9 && lastEditCell) {
        offset = {
          ...offset,
          lastEditCell
        };
      }
    } else if (e.keyCode === 40) {
      offset = { x: 0, y: 1 };
    } else if (e.keyCode === 13) {
      const enterToEdit = typeof keyBoardNav === 'object' ?
        keyBoardNav.enterToEdit :
        false;
      if (cellEdit && enterToEdit) {
        this.handleEditCell(e.target.parentElement.rowIndex + 1,
          e.currentTarget.cellIndex, '', e);
      }
    }
    if (offset && keyBoardNav) {
      onNavigateCell(offset);
    }
  }

  handleRowMouseOut = (rowIndex, event) => {
    const targetRow = this.props.data[rowIndex];
    this.props.onRowMouseOut(targetRow, event);
  }

  handleRowMouseOver = (rowIndex, event) => {
    const targetRow = this.props.data[rowIndex];
    this.props.onRowMouseOver(targetRow, event);
  }

  handleRowClick = (rowIndex, cellIndex) => {
    const { onRowClick } = this.props;
    onRowClick(this.props.data[rowIndex - 1],
      rowIndex - 1, this._isSelectRowDefined() ? cellIndex - 1 : cellIndex);
  }

  handleRowDoubleClick = rowIndex => {
    const { onRowDoubleClick } = this.props;
    const targetRow = this.props.data[rowIndex];
    onRowDoubleClick(targetRow);
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

  handleClickCell = (rowIndex, columnIndex = -1) => {
    const {
      columns,
      keyField,
      expandBy,
      expandableRow,
      selectRow: {
        clickToExpand
      }
    } = this.props;
    const selectRowAndExpand = this._isSelectRowDefined() && !clickToExpand ? false : true;
    columnIndex = this._isSelectRowDefined() ? columnIndex - 1 : columnIndex;
    if (expandableRow &&
      selectRowAndExpand &&
      (expandBy === Const.EXPAND_BY_ROW ||
      /* Below will allow expanding trigger by clicking on selection column
      if configure as expanding by column */
      (expandBy === Const.EXPAND_BY_COL && columnIndex < 0) ||
      (expandBy === Const.EXPAND_BY_COL && columns[columnIndex].expandable))) {
      const rowKey = this.props.data[rowIndex - 1][keyField];
      let expanding = this.props.expanding;
      if (expanding.indexOf(rowKey) > -1) {
        expanding = expanding.filter(k => k !== rowKey);
      } else {
        expanding.push(rowKey);
      }
      this.props.onExpand(expanding);
    }
  }

  handleEditCell = (rowIndex, columnIndex, action, e) => {
    if (this._isSelectRowDefined()) {
      columnIndex--;
      if (this.props.selectRow.hideSelectColumn) columnIndex++;
    }
    rowIndex--;

    if (action === 'tab') {
      this.handleCompleteEditCell(e.target.value, rowIndex, columnIndex - 1);
      if (columnIndex >= this.props.columns.length) {
        rowIndex = rowIndex + 1;
        columnIndex = 1;
        this.handleCellKeyDown(e, true);
      } else {
        this.handleCellKeyDown(e);
      }
    }

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

  handleClickonSelectColumn = (e, isSelect, rowIndex, row) => {
    e.stopPropagation();
    if (e.target.tagName === 'TD' &&
    (this.props.selectRow.clickToSelect || this.props.selectRow.clickToSelectAndEditCell)) {
      const unselectable = this.props.selectRow.unselectable || [];
      if (unselectable.indexOf(row[this.props.keyField]) === -1) {
        this.handleSelectRow(rowIndex + 1, isSelect, e);
        this.handleClickCell(rowIndex + 1);
      }
    }
  }

  renderSelectRowColumn(selected, inputType, disabled,
    CustomComponent = null, rowIndex = null, row) {
    return (
      <td onClick={ e => {
        this.handleClickonSelectColumn(e, !selected, rowIndex, row);
      } } style={ { textAlign: 'center' } }>
      { CustomComponent ?
        <CustomComponent type={ inputType } checked={ selected } disabled={ disabled }
          rowIndex={ rowIndex }
          onChange={ e=>this.handleSelectRowColumChange(e, rowIndex) }/> :
        <input type={ inputType } checked={ selected } disabled={ disabled }
          onChange={ e=>this.handleSelectRowColumChange(e, rowIndex) }/>
      }
      </td>
    );
  }

  _isSelectRowDefined() {
    return this.props.selectRow.mode === Const.ROW_SELECT_SINGLE ||
          this.props.selectRow.mode === Const.ROW_SELECT_MULTI;
  }

  getHeaderColGrouop = () => {
    return this.refs.header.childNodes;
  }
}
TableBody.propTypes = {
  data: PropTypes.array,
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
  withoutNoDataText: PropTypes.bool,
  style: PropTypes.object,
  tableBodyClass: PropTypes.string,
  bodyContainerClass: PropTypes.string,
  expandableRow: PropTypes.func,
  expandComponent: PropTypes.func,
  expandRowBgColor: PropTypes.string,
  expandBy: PropTypes.string,
  expanding: PropTypes.array,
  onExpand: PropTypes.func,
  beforeShowError: PropTypes.func,
  keyBoardNav: PropTypes.oneOfType([ PropTypes.bool, PropTypes.object ]),
  x: PropTypes.number,
  y: PropTypes.number,
  onNavigateCell: PropTypes.func
};
export default TableBody;
