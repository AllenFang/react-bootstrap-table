import React from 'react';
import classSet from 'classnames';
import Const from './Const';

class SelectRowHeaderColumn extends React.Component{

  order: Const.SORT_DESC

  handleColumnClick(e){
    // if(!this.props.dataSort)return;
    // this.order = this.order == Const.SORT_DESC?Const.SORT_ASC:Const.SORT_DESC;
    // this.props.clearSortCaret(this.order, this.props.dataField);
    // this.refs.innerDiv.getDOMNode().appendChild(this.renderSortCaret());
  }

  render(){
    var thStyle = {
      width: 35
    };

    // var classes = classSet(this.props.dataSort?"sort-column":"");
    return(
      <th style={thStyle}>
        <div className="th-inner table-header-column" onClick={this.handleColumnClick.bind(this)}>
          {this.props.children}
        </div>
      </th>
    )
  }
}
SelectRowHeaderColumn.propTypes = {
};

SelectRowHeaderColumn.defaultProps = {
};

export default SelectRowHeaderColumn;
