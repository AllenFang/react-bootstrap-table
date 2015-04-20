import React from 'react';
import Const from './Const';
import TableRow from './TableRow';
import TableColumn from './TableColumn';
import classSet from 'classnames';

class TableBody extends React.Component{

  render(){
    var containerClasses = classSet("table-container");

    var tableClasses = classSet("table", "table-bordered", {
      'table-striped': this.props.striped,
      'table-hover': this.props.hover,
      'table-condensed': this.props.condensed
    });

    var isSelectRowDefined = this._isSelectRowDefined();

    var tableHeader = this.renderTableHeader(isSelectRowDefined);

    var tableRows = this.props.data.map(function(data){
      var tableColumns = this.props.columns.map(function(column){
        var fieldValue = data[column.name];
        if(typeof column.format !== "undefined"){
          fieldValue = column.format(fieldValue, data);
          return(
            <TableColumn dataAlign={column.align}>
              <div dangerouslySetInnerHTML={{__html: fieldValue}}></div>
            </TableColumn>
          )
        } else{
          return(
            <TableColumn dataAlign={column.align}>{fieldValue}</TableColumn>
          )
        }
      });
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
  condensed: React.PropTypes.bool
};
export default TableBody;
