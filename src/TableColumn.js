import React from 'react';

class TableColumn extends React.Component{
  render(){
    var tdStyle = {
      textAlign: this.props.dataAlign
    };
    return (
      <td style={tdStyle}>
        {this.props.children}
      </td>
    )
  }
}
TableColumn.propTypes = {
  dataAlign: React.PropTypes.string
};

TableColumn.defaultProps = {
  dataAlign: "left"
}
export default TableColumn;
