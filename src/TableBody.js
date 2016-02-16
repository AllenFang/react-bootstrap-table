import React from 'react';
import Const from './Const';
import Util from './util';
import TableRow from './TableRow';
import TableColumn from './TableColumn';
import TableEditColumn from './TableEditColumn';
import classSet from 'classnames';

var isFun=function(obj){
  return obj&&(typeof obj==="function");

};
class TableBody extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      currEditCell: null
    };
    this.editing = false;
  }

  componentDidMount(){
    this.adjustBody();
  }

  componentDidUpdate(){
    this.adjustBody();
  }

  render(){
    var containerClasses = classSet("table-container");

    var tableClasses = classSet("table", {
      'table-striped': this.props.striped,
      'table-bordered': this.props.bordered,
      'table-hover': this.props.hover,
      'table-condensed': this.props.condensed
    });

    var isSelectRowDefined = this._isSelectRowDefined();
    var tableHeader = this.renderTableHeader(isSelectRowDefined);

    var tableRows = this.props.data.map(function(data, r){
      var tableColumns = this.props.columns.map(function(column, i){
        var fieldValue = data[column.name];
        if(this.editing &&
          column.name !== this.props.keyField && // Key field can't be edit
          column.editable && // column is editable? default is true, user can set it false
          this.state.currEditCell != null &&
          this.state.currEditCell.rid == r &&
          this.state.currEditCell.cid == i){
            var format=column.format?function(value){
              return column.format(value, data, column.formatExtraData).replace(/<.*?>/g,'');
            }:false;

          return(
              <TableEditColumn completeEdit={this.handleCompleteEditCell.bind(this)}
                               //add by bluespring for column editor customize
                               editable={isFun(column.editable)?column.editable(fieldValue,data,r,i):column.editable}
                               format={column.format?format:false}
                               key={i}
                               blurToSave={this.props.cellEdit.blurToSave}
                               rowIndex={r}
                               colIndex={i}>
                {fieldValue}
              </TableEditColumn>
            )
        } else{
          //add by bluespring for className customize
          var tdClassName=isFun(column.className)?column.className(fieldValue,data,r,i):column.className;

          if(typeof column.format !== "undefined"){
            var formattedValue = column.format(fieldValue, data, column.formatExtraData);
            if (!React.isValidElement(formattedValue)) {
              formattedValue = <div dangerouslySetInnerHTML={{__html: formattedValue}}></div>;
            }
            return(
              <TableColumn dataAlign={column.align}
                           key={i}
                           className={tdClassName}
                           cellEdit={this.props.cellEdit}
                           hidden={column.hidden}
                           onEdit={this.handleEditCell.bind(this)}
                           width={column.width}>
                {formattedValue}
              </TableColumn>
            )
          } else{
            return(
              <TableColumn dataAlign={column.align}
                           key={i}
                           className={tdClassName}
                           cellEdit={this.props.cellEdit}
                           hidden={column.hidden}
                           onEdit={this.handleEditCell.bind(this)}
                           width={column.width}>
                {fieldValue}
              </TableColumn>
            )
          }
        }
      }, this);
      var selected = this.props.selectedRowKeys.indexOf(data[this.props.keyField]) != -1;
      var selectRowColumn = isSelectRowDefined && !this.props.selectRow.hideSelectColumn?
                              this.renderSelectRowColumn(selected):null;
      //add by bluespring for className customize
      var trClassName=isFun(this.props.trClassName)?this.props.trClassName(data,r):this.props.trClassName;
      return (
        <TableRow isSelected={selected} key={r} className={trClassName}
          selectRow={isSelectRowDefined?this.props.selectRow:undefined}
          enableCellEdit={this.props.cellEdit.mode !== Const.CELL_EDIT_NONE}
          onRowClick={this.handleRowClick.bind(this)}
          onSelectRow={this.handleSelectRow.bind(this)}>
          {selectRowColumn}
          {tableColumns}
        </TableRow>
      )
    }, this);

    if(tableRows.length === 0){
      tableRows.push(
      <TableRow key="##table-empty##">
        <td colSpan={this.props.columns.length+(isSelectRowDefined?1:0)}
            style={{ textAlign: "center" }}
            className="react-bs-table-no-data">
            {this.props.noDataText||Const.NO_DATA_TEXT}
        </td>
      </TableRow>);
    }

    this.editing = false;

    var height = this.calculateContainerHeight().toString();

    return(
      <div ref="container" className={containerClasses} style={{height: height}}>
        <table ref="body" className={tableClasses}>
          {tableHeader}
          <tbody>
            {tableRows}
          </tbody>
        </table>
      </div>
    )
  }

  renderTableHeader(isSelectRowDefined){
    var selectRowHeader = null;

    if(isSelectRowDefined){
      let style = {
        width:35,
        minWidth:35
      }
      selectRowHeader = this.props.selectRow.hideSelectColumn?null:(<th style={style} key={-1}></th>);
    }
    var theader = this.props.columns.map(function(column, i){
      let width = column.width == null?column.width:parseInt(column.width);
      let style={
        display: column.hidden?"none":null,
        width: width,
        maxWidth: width
        /** add min-wdth to fix user assign column width not eq offsetWidth in large column table **/
      };
      let sortCaert = column.sort?(Util.renderReactSortCaret(Const.SORT_DESC)):null;
      return (<th style={style} key={i} className={column.className}>{column.text}{sortCaert}</th>);
    });

    return(
      <thead ref="header">
        <tr>{selectRowHeader}{theader}</tr>
      </thead>
    )
  }

  handleRowClick(rowIndex){
    var key, selectedRow;
    this.props.data.forEach(function(row, i){
      if(i == rowIndex-1){
        key = row[this.props.keyField];
        selectedRow = row;
      }
    }, this);
    this.props.onRowClick(selectedRow);
  }

  handleSelectRow(rowIndex, isSelected){
    var key, selectedRow;
    this.props.data.forEach(function(row, i){
      if(i == rowIndex-1){
        key = row[this.props.keyField];
        selectedRow = row;
        return false;
      }
    }, this);
    this.props.onSelectRow(selectedRow, isSelected);
  }

  handleSelectRowColumChange(e){
    if(!this.props.selectRow.clickToSelect || !this.props.selectRow.clickToSelectAndEditCell){
      this.handleSelectRow(
        e.currentTarget.parentElement.parentElement.rowIndex, e.currentTarget.checked);
    }
  }

  handleEditCell(rowIndex, columnIndex){
    this.editing = true;
    if(this._isSelectRowDefined()){
      columnIndex--;
      if(this.props.selectRow.hideSelectColumn)
        columnIndex++;
    }
    rowIndex--;
    var stateObj = {
      currEditCell: {
        rid: rowIndex,
        cid: columnIndex
      }
    };

    if(this.props.selectRow.clickToSelectAndEditCell){
      //if edit cell, trigger row selections also
      let selected = this.props.selectedRowKeys.indexOf(this.props.data[rowIndex][this.props.keyField]) != -1;
      this.handleSelectRow(rowIndex+1, !selected);
    }
    this.setState(stateObj);
  }

  cancelEdit(){
    var currEditCell=this.state.currEditCell;
    if(currEditCell){
      this.handleCompleteEditCell(null,currEditCell.rid,currEditCell.cid);
    }
  }

  handleCompleteEditCell(newVal, rowIndex, columnIndex){
    this.setState({currEditCell: null});
    if(null != newVal)
      this.props.cellEdit.__onCompleteEdit__(newVal, rowIndex, columnIndex);
  }

  renderSelectRowColumn(selected){
    if(this.props.selectRow.mode == Const.ROW_SELECT_SINGLE) {
      return (<TableColumn><input type="radio" name="selection" checked={selected} onChange={this.handleSelectRowColumChange.bind(this)}/></TableColumn>);
    }else {
      return (<TableColumn ><input type="checkbox" checked={selected} onChange={this.handleSelectRowColumChange.bind(this)}/></TableColumn>);
    }
  }

  getBodyHeaderDomProp(){
    var headers = this.refs.header.childNodes[0].childNodes;
    var headerDomProps = [];
    for(let i=0;i<headers.length;i++){
      headerDomProps.push({
        width:headers[i].offsetWidth
      });
    }
    return headerDomProps;
  }

  adjustBody() {
    this.hardFixHeaderWidth();
    if(this.props.condensed) {
      this.refs.body.style.marginTop = "-36px";
    }

    if(this.props.maxHeight &&
      parseInt(this.props.maxHeight) < this.refs.container.offsetHeight) {
      this.refs.container.style.height = (this.props.maxHeight - 42) + "px";
    }
  }

  hardFixHeaderWidth(){
    var headers = this.refs.header.childNodes[0].childNodes;
    for(let i=0;i<headers.length;i++){
      headers[i].style.width = headers[i].offsetWidth + "px";
    }
  }

  calculateContainerHeight(){
    if(this.props.height == "100%") return this.props.height;
    else{
      return parseInt(this.props.height) - 42;
    }
  }

  _isSelectRowDefined(){
    return this.props.selectRow.mode == Const.ROW_SELECT_SINGLE ||
          this.props.selectRow.mode == Const.ROW_SELECT_MULTI;
  }
}
TableBody.propTypes = {
  height: React.PropTypes.string,
  data: React.PropTypes.array,
  columns: React.PropTypes.array,
  striped: React.PropTypes.bool,
  bordered: React.PropTypes.bool,
  hover: React.PropTypes.bool,
  condensed: React.PropTypes.bool,
  keyField: React.PropTypes.string,
  selectedRowKeys: React.PropTypes.array,
  onRowClick: React.PropTypes.func,
  onSelectRow: React.PropTypes.func,
  noDataText: React.PropTypes.string
};
export default TableBody;
