import React from 'react';
import Const from './Const';

class TableRow extends React.Component{

  rowClick(e){
    if(e.target.tagName !== "INPUT")
      this.props.selectRow.__onSelect__(e.currentTarget.rowIndex, !this.props.isSelected);
  }

  render(){

    var rowStyle = {
      backgroundColor: this.props.isSelected?this.props.selectRow.bgColor:null
    };

    if(this.props.selectRow && !this.props.enableCellEdit &&
      (this.props.selectRow.clickToSelect || this.props.selectRow.clickToSelectAndEditCell)){
      return(
        <tr style={rowStyle} onClick={this.rowClick.bind(this)}>{this.props.children}</tr>
      )
    }else{
      return(
        <tr style={rowStyle}>{this.props.children}</tr>
      )
    }
  }
}
TableRow.propTypes = {
  isSelected: React.PropTypes.bool,
  enableCellEdit: React.PropTypes.bool
};
export default TableRow;
