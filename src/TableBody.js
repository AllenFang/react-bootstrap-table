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
    var tableStyle = {
      marginTop: -18
    };

    var tableHeader = this.renderTableHeader();
    var selectRowColumn = this.renderSelectRowColumn();

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
        <TableRow>{selectRowColumn}{tableColumns}</TableRow>
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

  renderTableHeader(){
    var selectRowHeader = null;

    if(this.props.selectRow.mode == Const.ROW_SELECT_SINGLE ||
          this.props.selectRow.mode == Const.ROW_SELECT_MULTI){
      var style = {
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
    }else if(this.props.selectRow.mode == Const.ROW_SELECT_MULTI){
      return (<TableColumn><input type="checkbox"/></TableColumn>);
    }else{
      return null;
    }
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
    onSelect: React.PropTypes.func
  })
};
export default TableBody;
