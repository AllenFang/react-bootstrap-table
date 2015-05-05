import React from 'react';
import Const from './Const';
import TableRow from './TableRow';
import TableColumn from './TableColumn';
import TableEditColumn from './TableEditColumn';
import classSet from 'classnames';

class TableBody extends React.Component{

  constructor(props) {
		super(props);
    this.state = {
      currEditCell: null,
      selectedRowKey: []
    };
    if(this.props.selectRow){
      this.props.selectRow.__onSelect__ = this.handleSelectRow.bind(this);
      this.props.selectRow.__onSelectAll__ = this.handleSelectAllRow.bind(this);
    }
  }

  render(){
    var containerClasses = classSet("table-container");

    var tableClasses = classSet("table", "table-bordered", {
      'table-striped': this.props.striped,
      'table-hover': this.props.hover,
      'table-condensed': this.props.condensed
    });

    var isSelectRowDefined = this._isSelectRowDefined();
    var tableHeader = this.renderTableHeader(isSelectRowDefined);

    var tableRows = this.props.data.map(function(data, r){
      var tableColumns = this.props.columns.map(function(column, i){
        var fieldValue = data[column.name];
        if(!this.props.parentRender &&
          column.name !== this.props.keyField && // Key field can't be edit
          column.editable && // column is editable? default is true, user can set it false
          this.state.currEditCell != null &&
          this.state.currEditCell.rid == r &&
          this.state.currEditCell.cid == i){
            return(
              <TableEditColumn completeEdit={this.handleCompleteEditCell.bind(this)}
                               key={i}
                               blurToSave={this.props.cellEdit.blurToSave}
                               rowIndex={r}
                               colIndex={i}>
                {fieldValue}
              </TableEditColumn>
            )
        } else{
          if(typeof column.format !== "undefined"){
            var formattedValue = column.format(fieldValue, data);
            return(
              <TableColumn dataAlign={column.align}
                           key={i}
                           cellEdit={this.props.cellEdit}
                           onEdit={this.handleEditCell.bind(this)}>
                <div dangerouslySetInnerHTML={{__html: formattedValue}}></div>
              </TableColumn>
            )
          } else{
            return(
              <TableColumn dataAlign={column.align}
                           key={i}
                           cellEdit={this.props.cellEdit}
                           onEdit={this.handleEditCell.bind(this)}>{fieldValue}</TableColumn>
            )
          }
        }
      }, this);
      var selected = this.state.selectedRowKey.indexOf(data[this.props.keyField]) != -1;
      var selectRowColumn = isSelectRowDefined?this.renderSelectRowColumn(selected):null;
      return (
        <TableRow isSelected={selected} key={r}
          selectRow={isSelectRowDefined?this.props.selectRow:undefined}>
          {selectRowColumn}{tableColumns}
        </TableRow>
      )
    }, this);

    return(
      <div className={containerClasses}>
        <table className={tableClasses}>
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
        width:35
      }
      selectRowHeader = (<th style={style} key={-1}></th>);
    }
    var theader = this.props.columns.map(function(column, i){
      return (<th key={i}></th>);
    });

    return(
      <thead>
        <tr>{selectRowHeader}{theader}</tr>
      </thead>
    )
  }

  handleSelectRow(rowIndex, isSelected){
    var key, selectedRow;
    this.props.data.forEach(function(row, i){
      if(i == rowIndex-1){
        key = row[this.props.keyField];
        selectedRow = row;
      }
    }, this);
    if(this.props.selectRow.mode == Const.ROW_SELECT_SINGLE){
      this.state.selectedRowKey = [];
    }
    if(isSelected){
      this.state.selectedRowKey.push(key);
    }else{
      this.state.selectedRowKey = this.state.selectedRowKey.filter(function(element){
        return key !== element;
      });
    }
    this.setState({
      selectedRowKey: this.state.selectedRowKey
    });
    if(this.props.selectRow.onSelect){
      this.props.selectRow.onSelect(selectedRow, isSelected);
    }
  }

  handleSelectAllRow(rowKeys){
    this.setState({
      selectedRowKey: rowKeys
    });
    if(this.props.selectRow.onSelectAll){
      this.props.selectRow.onSelectAll(rowKeys.length==0?false:true);
    }
  }

  handleSelectRowColumChange(e){
    if(!this.props.selectRow.clickToSelect){
      this.props.selectRow.__onSelect__(
        e.currentTarget.parentElement.parentElement.rowIndex, e.currentTarget.checked);
    }
  }

  handleEditCell(rowIndex, columnIndex){
    this.props.parentRender = false;
    if(this._isSelectRowDefined()){
      columnIndex--;
    }
    rowIndex--;
    this.setState({currEditCell: {
      rid: rowIndex,
      cid: columnIndex
    }});
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
      return (<TableColumn><input type="checkbox" checked={selected} onChange={this.handleSelectRowColumChange.bind(this)}/></TableColumn>);
    }
  }

  _isSelectRowDefined(){
    return this.props.selectRow.mode == Const.ROW_SELECT_SINGLE ||
          this.props.selectRow.mode == Const.ROW_SELECT_MULTI;
  }
}
TableBody.propTypes = {
  data: React.PropTypes.array,
  columns: React.PropTypes.array,
  striped: React.PropTypes.bool,
  hover: React.PropTypes.bool,
  condensed: React.PropTypes.bool,
  keyField: React.PropTypes.string,
  // if render is from parent, I will discard the cell edit checking
  // because of a bug happened if user click to start a cell editing and then he/she do a sort or change page
  // that will cause a incorrent position of "input cell" on table.
  parentRender: React.PropTypes.bool
};
export default TableBody;
