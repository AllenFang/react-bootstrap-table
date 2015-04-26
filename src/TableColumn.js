import React from 'react';
import Const from './Const';

class TableColumn extends React.Component{

  constructor(props) {
		super(props);
  }

  handleCellEdit(e){
    if(this.props.cellEdit.mode == Const.CELL_EDIT_DBCLICK){
      if(document.selection && document.selection.empty) {
        document.selection.empty();
      } else if(window.getSelection) {
          var sel = window.getSelection();
          sel.removeAllRanges();
      }
    }
    this.props.onEdit(
      e.currentTarget.parentElement.rowIndex,
      e.currentTarget.cellIndex);
  }

  render(){
    var tdStyle = {
      textAlign: this.props.dataAlign
    };

    var opts = {};
    if(this.props.cellEdit){
      if(this.props.cellEdit.mode == Const.CELL_EDIT_CLICK){
        opts.onClick = this.handleCellEdit.bind(this);
      }else if(this.props.cellEdit.mode == Const.CELL_EDIT_DBCLICK){
        opts.onDoubleClick = this.handleCellEdit.bind(this);
      }
    }
    return (
      <td style={tdStyle} {...opts}>
        {this.props.children}
      </td>
    )
  }
}
TableColumn.propTypes = {
  dataAlign: React.PropTypes.string,
};

TableColumn.defaultProps = {
  dataAlign: "left"
}
export default TableColumn;
