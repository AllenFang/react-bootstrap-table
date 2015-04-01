import React from 'react';

class TableColumn extends React.Component{
  render(){
    return (
      <td>
        {this.props.children}
      </td>
    )
  }
}

export default TableColumn;
