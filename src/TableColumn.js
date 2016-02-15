import React from 'react';
import Const from './Const';

class TableColumn extends React.Component{

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { children } = this.props;
    let shouldUpdated = this.props.width !== nextProps.width
      || this.props.className !== nextProps.className
      || this.props.hidden !== nextProps.hidden
      || this.props.dataAlign !== nextProps.dataAlign
      || typeof children !== typeof nextProps.children
      || (''+this.props.onEdit).toString() !== (''+nextProps.onEdit).toString()

    if(shouldUpdated){
      return shouldUpdated;
    }

    if(typeof children === 'object' && children !== null) {
      if(children.props.type === 'checkbox' || children.props.type === 'radio') {
        shouldUpdated = shouldUpdated ||
          children.props.type !== nextProps.children.props.type ||
          children.props.checked !== nextProps.children.props.checked;
      } else {
        shouldUpdated = true;
      }
    } else {
      shouldUpdated = shouldUpdated || children !== nextProps.children;
    }

    if(shouldUpdated){
      return shouldUpdated;
    }

    if(!(this.props.cellEdit && nextProps.cellEdit)) {
      return false;
    } else {
      return shouldUpdated
        || this.props.cellEdit.mode !== nextProps.cellEdit.mode;
    }
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
    var width = this.props.width == null?
                  this.props.width:parseInt(this.props.width);
    var tdStyle = {
      textAlign: this.props.dataAlign,
      display: this.props.hidden?"none":null,
      width: width,
      maxWidth: width
    };
    var classname = this.props.className;
    if(this.props.width){
        classname += " col-md-"+width;
    }


    var opts = {};
    if(this.props.cellEdit){
      if(this.props.cellEdit.mode == Const.CELL_EDIT_CLICK){
        opts.onClick = this.handleCellEdit.bind(this);
      }else if(this.props.cellEdit.mode == Const.CELL_EDIT_DBCLICK){
        opts.onDoubleClick = this.handleCellEdit.bind(this);
      }
    }
    return (
      <td style={tdStyle} className={classname} {...opts}>
        {this.props.children}
      </td>
    )
  }
}
TableColumn.propTypes = {
  dataAlign: React.PropTypes.string,
  hidden: React.PropTypes.bool,
  className:React.PropTypes.string
};

TableColumn.defaultProps = {
  dataAlign: "left",
  hidden: false,
  className:""
}
export default TableColumn;
