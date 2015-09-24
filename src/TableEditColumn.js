import React from 'react';
import Const from './Const';
import Editor from './Editor'

class TableEditColumn extends React.Component{

  handleKeyPress(e){
    if (e.keyCode == 13) { //Pressed ENTER
      this.props.completeEdit(
        e.currentTarget.value, this.props.rowIndex, this.props.colIndex);
    }else if(e.keyCode == 27){
      this.props.completeEdit(
        null, this.props.rowIndex, this.props.colIndex);
    }
  }

  handleBlur(e){
    if(this.props.blurToSave){
      this.props.completeEdit(
        e.currentTarget.value, this.props.rowIndex, this.props.colIndex);
    }
  }

  componentDidMount(){
      var input = this.refs.inputRef.getDOMNode();
      input.value = this.props.children||'';
      input.focus();
  }

  render(){
    var editable=this.props.editable,
        format=this.props.format,
        attr={
            ref:"inputRef",
            onKeyDown:this.handleKeyPress.bind(this),
            onBlur:this.handleBlur.bind(this)
        };
        //put placeholder if exist
        editable.placeholder&&(attr.placeholder=editable.placeholder);


    return(
        <td ref="td" style={{position:'relative'}}>
            {Editor(editable,attr,format)}
        </td>
    )
  }


}
TableEditColumn.propTypes = {
  completeEdit: React.PropTypes.func,
  rowIndex: React.PropTypes.number,
  colIndex: React.PropTypes.number,
  blurToSave: React.PropTypes.bool
};


export default TableEditColumn;
