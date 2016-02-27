import React from 'react';
import Const from './Const';

class TableRow extends React.Component{

  constructor(props) {
    super(props);
    this.clickNum = 0;
  }

  rowClick(e){
    if(e.target.tagName !== "INPUT" &&
        e.target.tagName !== "SELECT" &&
        e.target.tagName !== "TEXTAREA") {
      const rowIndex = e.currentTarget.rowIndex;
      if (this.props.selectRow) {
          if (this.props.selectRow.clickToSelect) {
            this.props.onSelectRow(rowIndex, !this.props.isSelected);
          } else if (this.props.selectRow.clickToSelectAndEditCell) {
            this.clickNum++;
            /** if clickToSelectAndEditCell is enabled,
             *  there should be a delay to prevent a selection changed when
             *  user dblick to edit cell on same row but different cell
            **/
            setTimeout(() => {
              if(this.clickNum === 1) {
                this.props.onSelectRow(rowIndex, !this.props.isSelected);
              }
              this.clickNum = 0;
            }, 200);
          }
      }
      if (this.props.onRowClick) this.props.onRowClick(rowIndex);
    }
  }

  rowMouseOut(e) {
    if (this.props.onRowMouseOut) {
      this.props.onRowMouseOut(e.currentTarget.rowIndex);
    }
  }

  rowMouseOver(e) {
    if (this.props.onRowMouseOver) {
      this.props.onRowMouseOver(e.currentTarget.rowIndex);
    }
  }

  render(){
    this.clickNum = 0;
    var trCss={
      style:{
        backgroundColor: this.props.isSelected?this.props.selectRow.bgColor:null
      },
      className:(this.props.isSelected && this.props.selectRow.className ? this.props.selectRow.className : '') + (this.props.className||'')
    };

    if(this.props.selectRow && (this.props.selectRow.clickToSelect ||
      this.props.selectRow.clickToSelectAndEditCell) || this.props.onRowClick){
      return(
        <tr {...trCss}
            onMouseOver={this.rowMouseOver.bind(this)}
            onMouseOut={this.rowMouseOut.bind(this)}
            onClick={this.rowClick.bind(this)}>{this.props.children}</tr>
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
  onRowClick: React.PropTypes.func,
  onSelectRow: React.PropTypes.func,
  onRowMouseOut: React.PropTypes.func,
  onRowMouseOver: React.PropTypes.func
};
TableRow.defaultProps = {
  onRowClick: undefined
}
export default TableRow;
