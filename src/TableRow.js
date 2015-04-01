import React from 'react';

class TableRow extends React.Component{
  render(){
    return(
      <tr>{this.props.children}</tr>
    )
  }
}

export default TableRow;
