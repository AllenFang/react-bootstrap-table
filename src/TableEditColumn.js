import React from 'react';
import Const from './Const';
import Editor from './Editor'
import Notifier from './Notification.js';
import classSet from 'classnames';

class TableEditColumn extends React.Component{
    constructor(props){
        super(props);
        this.timeouteClear=0;
        this.state={
            shakeEditor:false
        };
    }

  handleKeyPress(e){
    if (e.keyCode == 13) { //Pressed ENTER
        if(!this.validator(e)){
            return;
        }
      this.props.completeEdit(
        e.currentTarget.value, this.props.rowIndex, this.props.colIndex);
    }else if(e.keyCode == 27){
      this.props.completeEdit(
        null, this.props.rowIndex, this.props.colIndex);
    }
  }

  handleBlur(e){
    if(this.props.blurToSave){
        if(!this.validator(e)){
            return;
        }
      this.props.completeEdit(
          e.currentTarget.value, this.props.rowIndex, this.props.colIndex);
  }
}
  validator(e){
      var ts=this;
      if(ts.props.editable.validator){
          var valid=ts.props.editable.validator(e.currentTarget.value);
          if(valid!==true){
              ts.refs.notifier.notice('error',valid,"Pressed ESC can cancel");
              var input = ts.refs.inputRef.getDOMNode();
              //animate input
              ts.clearTimeout();
              ts.setState({shakeEditor:true});
              ts.timeouteClear=setTimeout(function(){ts.setState({shakeEditor:false});},300);
              input.focus();
              return false;
          }
      }
      return true;

  }
    clearTimeout(){
        if(this.timeouteClear!=0){
            clearTimeout(this.timeouteClear);
            this.timeouteClear=0;
        }
    }
  componentDidMount(){
      var input = this.refs.inputRef.getDOMNode();
      input.value = this.props.children||'';
      input.focus();
  }
    componentWillUnmount() {
      this.clearTimeout();
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

    var editorClass=classSet({'animated':this.state.shakeEditor,'shake':this.state.shakeEditor});
    return(
        <td ref="td" style={{position:'relative'}}>
            {Editor(editable,attr,format,editorClass)}
            <Notifier ref="notifier"></Notifier>
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
