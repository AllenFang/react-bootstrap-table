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
    });

    const isSelectRowDefined = this._isSelectRowDefined();
    const tableHeader = this.renderTableHeader(isSelectRowDefined);

    const tableRows = this.props.data.map(function(data, r) {
      const tableColumns = this.props.columns.map(function(column, i) {
        const fieldValue = data[column.name];
        if (this.editing &&
          column.name !== this.props.keyField && // Key field can't be edit
          column.editable && // column is editable? default is true, user can set it false
          this.state.currEditCell !== null &&
          this.state.currEditCell.rid === r &&
          this.state.currEditCell.cid === i) {
          let editable = column.editable;
          const format = column.format ? function(value) {
            return column.format(value, data, column.formatExtraData).replace(/<.*?>/g, '');
          } : false;
          if (isFun(column.editable)) {
            editable = column.editable(fieldValue, data, r, i);
          }

          return (
              <TableEditColumn
                completeEdit={ this.handleCompleteEditCell }
                // add by bluespring for column editor customize
                editable={ editable }
                format={ column.format ? format : false }
                key={ i }
                blurToSave={ this.props.cellEdit.blurToSave }
                rowIndex={ r }
                colIndex={ i }>
                { fieldValue }
              </TableEditColumn>
            );
        } else {
          // add by bluespring for className customize
          let columnChild = fieldValue;
          let tdClassName = column.className;
          if (isFun(column.className)) {
            tdClassName = column.className(fieldValue, data, r, i);
          }

          if (typeof column.format !== 'undefined') {
            const formattedValue = column.format(fieldValue, data, column.formatExtraData);
            if (!React.isValidElement(formattedValue)) {
              columnChild = (
                <div dangerouslySetInnerHTML={ { __html: formattedValue } }></div>
              );
            } else {
              columnChild = formattedValue;
            }
          }
          return (
            <TableColumn key={ i }
              dataAlign={ column.align }
              className={ tdClassName }
              cellEdit={ this.props.cellEdit }
              hidden={ column.hidden }
              onEdit={ this.handleEditCell }
              width={ column.width }>
              { columnChild }
            </TableColumn>
          );
        }
      }, this);

      const selected = this.props.selectedRowKeys.indexOf(data[this.props.keyField]) !== -1;
      const selectRowColumn = isSelectRowDefined && !this.props.selectRow.hideSelectColumn ?
                              this.renderSelectRowColumn(selected) : null;
      // add by bluespring for className customize
      let trClassName = this.props.trClassName;
      if (isFun(this.props.trClassName)) {
        trClassName = this.props.trClassName(data, r);
      }
      return (
        <TableRow isSelected={ selected } key={ r } className={ trClassName }
          selectRow={ isSelectRowDefined ? this.props.selectRow : undefined }
          enableCellEdit={ this.props.cellEdit.mode !== Const.CELL_EDIT_NONE }
          onRowClick={ this.handleRowClick }
          onRowMouseOver={ this.handleRowMouseOver }
          onRowMouseOut={ this.handleRowMouseOut }
          onSelectRow={ this.handleSelectRow }>
          { selectRowColumn }
          { tableColumns }
        </TableRow>
      );
    }, this);

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

    return (
      <div ref='container' className='react-bs-container-body' style={ this.props.style }>
        <table className={ tableClasses }>
          { tableHeader }
          <tbody ref='tbody'>
            { tableRows }
          </tbody>
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
      const width = column.width === null ? column.width : parseInt(column.width, 10);
      const style = {
        display: column.hidden ? 'none' : null,
        width: width,
        minWidth: width
        /** add min-wdth to fix user assign column width
        not eq offsetWidth in large column table **/
      };
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

  handleSelectRowColumChange = e => {
    if (!this.props.selectRow.clickToSelect ||
      !this.props.selectRow.clickToSelectAndEditCell) {
      this.handleSelectRow(
        e.currentTarget.parentElement.parentElement.rowIndex + 1,
        e.currentTarget.checked,
        e);
    }
  }

  handleEditCell = (rowIndex, columnIndex, e) => {
    this.editing = true;
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

  renderSelectRowColumn(selected) {
    if (this.props.selectRow.mode === Const.ROW_SELECT_SINGLE) {
      return (
        <TableColumn dataAlign='center'>
          <input type='radio' checked={ selected }
            onChange={ this.handleSelectRowColumChange }/>
        </TableColumn>
      );
    } else {
      return (
        <TableColumn dataAlign='center'>
          <input type='checkbox' checked={ selected }
          onChange={ this.handleSelectRowColumChange }/>
        </TableColumn>
      );
    }
  }

  _isSelectRowDefined() {
    return this.props.selectRow.mode === Const.ROW_SELECT_SINGLE ||
          this.props.selectRow.mode === Const.ROW_SELECT_MULTI;
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
  onSelectRow: PropTypes.func,
  noDataText: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),
  style: PropTypes.object
};
export default TableBody;
