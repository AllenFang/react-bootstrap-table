import React from 'react';
import Const from './Const';

class TableRow extends React.Component{

  rowClick(e){
    if(e.target.tagName !== "INPUT")
      this.props.onSelectRow(e.currentTarget.rowIndex, !this.props.isSelected);
  }

  render(){

    var trCss={
      style:{
        backgroundColor: this.props.isSelected?this.props.selectRow.bgColor:null
      },
      className:this.props.className||''
    };

    if(this.props.selectRow && !this.props.enableCellEdit &&
      (this.props.selectRow.clickToSelect || this.props.selectRow.clickToSelectAndEditCell)){
      return(
        <tr {...trCss} onClick={this.rowClick.bind(this)}>{this.props.children}</tr>
      )
    }else{
      return(
        <tr {...trCss}>{this.props.children}</tr>
      )
    }
  }
}
TableRow.propTypes = {
  isSelected: React.PropTypes.bool,
  enableCellEdit: React.PropTypes.bool,
  onSelectRow: React.PropTypes.func
};
export default TableRow;
