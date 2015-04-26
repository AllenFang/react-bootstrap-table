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
      currEditCell: null
    };
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
          this.state.currEditCell != null &&
          this.state.currEditCell.rid == r+1 &&
          this.state.currEditCell.cid == i+1){
            return(
              <TableEditColumn completeEdit={this.handleCompleteEditCell.bind(this)}
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
                           cellEdit={this.props.cellEdit}
                           onEdit={this.handleEditCell.bind(this)}>
                <div dangerouslySetInnerHTML={{__html: formattedValue}}></div>
              </TableColumn>
            )
          } else{
            return(
              <TableColumn dataAlign={column.align}
                           cellEdit={this.props.cellEdit}
                           onEdit={this.handleEditCell.bind(this)}>{fieldValue}</TableColumn>
            )
          }
        }
      }, this);
      var selectRowColumn = isSelectRowDefined?this.renderSelectRowColumn(data.__selected__):null;
      return (
        <TableRow isSelected={data.__selected__}
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
      selectRowHeader = (<th style={style}></th>);
    }
    var theader = this.props.columns.map(function(column){
      return (<th></th>);
    });

    return(
      <thead>
        <tr>{selectRowHeader}{theader}</tr>
      </thead>
    )
  }

  handleSelectColum(e){
    if(!this.props.selectRow.clickToSelect){
      this.props.selectRow.__onSelect__(
        e.currentTarget.parentElement.parentElement.rowIndex, e.currentTarget.checked);
    }
  }

  handleEditCell(rowIndex, columnIndex){
    this.props.parentRender = false;
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
      return (<TableColumn><input type="radio" name="selection" checked={selected} onChange={this.handleSelectColum.bind(this)}/></TableColumn>);
    }else {
      return (<TableColumn><input type="checkbox" checked={selected} onChange={this.handleSelectColum.bind(this)}/></TableColumn>);
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
  // if render is from parent, I will discard the cell edit checking
  // because of a bug happened if user click to start a cell editing and then he/she do a sort or change page
  // that will cause a incorrent position of "input cell" on table.
  parentRender: React.PropTypes.bool
};
export default TableBody;
