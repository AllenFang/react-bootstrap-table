import React, { Component, PropTypes } from 'react';
import Const from './Const';
import TableRow from './TableRow';
import TableColumn from './TableColumn';
import TableEditColumn from './TableEditColumn';
import classSet from 'classnames';
import shallowEqual from '../../../utils/shallowEqual';
import debounce from '../../../utils/debounce';
import Collection from '../../../utils/collection';

const isFun = function(obj) {
  return obj && (typeof obj === 'function');
};

//  const emptyTableRowHeight = {
//    height: 37,
//    visibility: 'hidden'
//  };

class TableBody extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currEditCell: null,
      scrollTop: 0,
      availableHeight: 600,
      offsetHeight: 600
    };
    this.editing = false;
    this._delayingHandler = debounce(this._handleTableScroll,20)
    this.rowHeight = 39;
  }

  _handleTableScroll = (e) => {
    this.setState({
      scrollTop: e.target.scrollTop,
      availableHeight: e.target.clientHeight,
      offsetHeight: e.target.offsetHeight
    });

    const numRows = this.props.data.length;
    const scrollBottom = e.target.scrollTop + e.target.clientHeight;
    const startIndex = Math.max(0, Math.floor(e.target.scrollTop / this.rowHeight));

    const RowEndIndex = startIndex + Math.ceil(e.target.offsetHeight / this.rowHeight) + 1;
    const RowIndex = startIndex;

    const RowRenderIndex = Math.max(0,RowIndex-20);
    const RowRenderEndIndex = Math.min(this.props.data.length,RowEndIndex+20);

    // implement partial load (e.g. from index 300 to 320, with only 20 items already fetched)
    // use maybe react-virtualized
    // if data.length < RowEndIndex fetch missing, at least 20
    let coll = new Collection(this.props.totalCount);
    coll.insertItems(this.props.data);
    //if (this.props.data.length<RowEndIndex) {
    if (!coll.checkRange(RowRenderIndex,RowRenderEndIndex)) {
//        const fetchItemCount = Math.max(20, RowEndIndex-this.props.data.length);
        const fetchItemCount = RowRenderEndIndex-RowRenderIndex+1;
        this.props.fetchData(fetchItemCount,RowRenderIndex);
    }
  }

  componentDidMount() {
    this.refs.container.addEventListener('scroll', this._delayingHandler, false);
  }

  componentWillUnmount() {
    this.refs.container.removeEventListener('scroll', this._delayingHandler);
  }

  componentDidUpdate(prevProps){
    if(this.props.clearScroll && prevProps.clearScroll===false){
      this.refs.container.scrollTop=0
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(!shallowEqual(this.state,nextState)){
        return true;
    }
    if((nextProps.data.length==0 && this.props.data.length==0) && (nextProps.columns.length==1 && this.props.columns.length==1)) {
        return false;
    }
    return true;
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

    const numRows = this.props.data.length;
    const scrollBottom = this.state.scrollTop + this.state.availableHeight;

    const startIndex = Math.max(0, Math.floor(this.state.scrollTop / this.rowHeight));
    const RowEndIndex = startIndex + Math.ceil(this.state.offsetHeight / this.rowHeight) + 1;
    const RowIndex = startIndex;

    const RowRenderNumber = Math.max(0,RowIndex-20);
    const RowRenderIndex = RowRenderNumber%2==0?RowRenderNumber:RowRenderNumber-1;
    const RowRenderEndIndex = Math.min(this.props.data.length,RowEndIndex+20);

    const tableRows = this.props.data.filter(function(data,r){return (r >= RowRenderIndex && r <= RowRenderEndIndex);}).filter(function(e,i){return e!=undefined}).map(function(data, r) {
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
                blurToSave={ this.props.cellEdit.blurToSave }
                rowIndex={ r }
                colIndex={ i }
                row={ data }
                fieldValue={ fieldValue } />
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
      }, this);
      const key = data[this.props.keyField];
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
        <TableRow isSelected={ selected } key={ key } className={ trClassName }
          selectRow={ isSelectRowDefined ? this.props.selectRow : undefined }
          enableCellEdit={ this.props.cellEdit.mode !== Const.CELL_EDIT_NONE }
          onRowClick={ this.handleRowClick }
          onRowDoubleClick={ this.handleRowDoubleClick }
          onRowMouseOver={ this.handleRowMouseOver }
          onRowMouseOut={ this.handleRowMouseOut }
          onSelectRow={ this.handleSelectRow }
          unselectableRow={ disable }>
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
      <div ref='container'
        className={ classSet('react-bs-container-body', this.props.bodyContainerClass) }
        style={ this.props.style }>
        <div style={{position: "absolute", height: this.props.totalCount*this.rowHeight+"px", width: "1px"}}></div>
        <div style={{position: "relative", top: RowRenderIndex*this.rowHeight+"px"}}>
            <table className={ tableClasses }>
              { tableHeader }
              <tbody ref='tbody'>
                { tableRows }
              </tbody>
            </table>
        </div>
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
