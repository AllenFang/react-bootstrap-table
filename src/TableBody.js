import React from 'react';
import TableRow from './TableRow';
import TableColumn from './TableColumn';

class TableBody extends React.Component{
  render(){
    var self = this;
    var divStyle = {
      overflowX: "auto",
      overflowY: "auto",
      height: "100%"
    };

    var tableStyle = {
      marginTop: 0,
      tableLayout:"fixed"
    };

    var tableRows = this.props.data.map(function(data){
      var tableColumns = self.props.columns.map(function(column){
        var fieldValue = data[column.name];
        return(
          <TableColumn>{fieldValue}</TableColumn>
        )
      });

      return (
        <TableRow>{tableColumns}</TableRow>
      )
    });

    return(
      <div style={divStyle}>
        <table className="table table-hover table-bordered" style={tableStyle}>
          {tableRows}
        </table>
      </div>
    )
  }
}
TableBody.propTypes = {
  data: React.PropTypes.array,
  columns: React.PropTypes.array
};
export default TableBody;
