import React from 'react';
import Const from './Const';
import TableRow from './TableRow';
import TableColumn from './TableColumn';
import classSet from 'classnames';

class TableBody extends React.Component{

  onRowSelect(){
    console.log("yaya");
  }

  render(){
    console.log("render body");
    var containerClasses = classSet("table-container");

    var tableClasses = classSet("table", "table-bordered", {
      'table-striped': this.props.striped,
      'table-hover': this.props.hover,
      'table-condensed': this.props.condensed
    });
    var tableStyle = {
      marginTop: -18
    };
    var isSelectRowDefined = this._isSelectRowDefined();

    var tableHeader = this.renderTableHeader(isSelectRowDefined);
    var selectRowColumn = isSelectRowDefined?this.renderSelectRowColumn():null;

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

      return (
        <TableRow selectRow={isSelectRowDefined?this.props.selectRow:undefined}>
          {selectRowColumn}{tableColumns}
        </TableRow>
      )
    }, this);

    return(
      <div className={containerClasses}>
        <table style={tableStyle} className={tableClasses}>
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

  renderSelectRowColumn(){
    if(this.props.selectRow.mode == Const.ROW_SELECT_SINGLE) {
      return (<TableColumn><input type="radio" name="selection"/></TableColumn>);
    }else {
      return (<TableColumn><input type="checkbox"/></TableColumn>);
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
  selectRow: React.PropTypes.shape({
    mode: React.PropTypes.string,
    bgColor: React.PropTypes.string,
    onSelect: React.PropTypes.func,
    clickToSelect: React.PropTypes.bool
  })
};
export default TableBody;
