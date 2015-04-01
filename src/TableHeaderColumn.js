import React from 'react';
import classSet from 'classnames';

class TableHeaderColumn extends React.Component{

  render(){
    return(
      <th><div className="th-inner">{this.props.children}</div></th>
    )
  }
}
TableHeaderColumn.propTypes = {
  dataField: React.PropTypes.string
};

export default TableHeaderColumn;
