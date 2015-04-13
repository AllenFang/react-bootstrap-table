import React from 'react';
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
        <TableRow>{tableColumns}</TableRow>
      )
    }, this);

    return(
      <div className={containerClasses}>
        <table className={tableClasses}>
          <tbody>
            {tableRows}
          </tbody>
        </table>
      </div>
    )
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
