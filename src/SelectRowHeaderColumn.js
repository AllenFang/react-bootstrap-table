import React from 'react';
import classSet from 'classnames';
import Const from './Const';

class SelectRowHeaderColumn extends React.Component{

  render(){
    return(
      <th>
        { this.props.children }
      </th>
    )
  }
}

export default SelectRowHeaderColumn;
