import React from 'react';
import Const from './Const';

class TableRow extends React.Component{

  rowClick(e){
      var isBgColorDefined = typeof this.props.selectRow.bgColor != "undefined";
      //tr > input
      var el = e.currentTarget.firstChild.firstChild;
      if(this.props.selectRow.mode == Const.ROW_SELECT_SINGLE){
        el.checked = true;
        if(TableRow.previousSelectRow != null && isBgColorDefined){
          TableRow.previousSelectRow.style.backgroundColor = null;
        }
        TableRow.previousSelectRow = e.currentTarget;
      }else{
        el.checked = !el.checked;
        if(!el.checked && isBgColorDefined){
          e.currentTarget.style.backgroundColor = null;
        }
      }

      if(el.checked && isBgColorDefined){
        e.currentTarget.style.backgroundColor = this.props.selectRow.bgColor;
      }
  }

  render(){
    console.log("render row");
    if(this.props.selectRow && this.props.selectRow.clickToSelect){
      return(
        <tr onClick={this.rowClick.bind(this)}>{this.props.children}</tr>
      )
    }else{
      return(
        <tr>{this.props.children}</tr>
      )
    }
  }
}
TableRow.previousSelectRow = null;  //used on radio type in row select
TableRow.propTypes = {
  selectRow: React.PropTypes.shape({
    mode: React.PropTypes.string,
    bgColor: React.PropTypes.string,
    onSelect: React.PropTypes.func,
    clickToSelect: React.PropTypes.bool
  })
};
export default TableRow;
