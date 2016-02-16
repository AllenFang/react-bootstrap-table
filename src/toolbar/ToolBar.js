import React from 'react';
import classSet from 'classnames';
import Const from '../Const';
import Editor from '../Editor';
import Notifier from '../Notification.js';

class ToolBar extends React.Component{

  constructor(props) {
		super(props);
    this.timeouteClear=0;
    this.state = {
      isInsertRowTrigger: true,
      validateState:null,
      shakeEditor:false,
      showSelected: false
    };
  }
  componentWillUnmount(){
    this.clearTimeout();
  }
  clearTimeout() {
    if(this.timeouteClear){
      clearTimeout(this.timeouteClear);
      this.timeouteClear=0;
    }
  }

  checkAndParseForm(){
    var ts=this,newObj = {},isValid=true,tempValue,tempMsg,validateState={};
    this.props.columns.forEach(function(column, i){
      if(column.autoValue){//when you want same auto generate value and not allow edit, example ID field
        tempValue=typeof column.autoValue=='function'?column.autoValue():('autovalue-'+new Date().getTime());
      }else{
        let dom = this.refs[column.field+i];
        tempValue = dom.value;

        if(column.editable && column.editable.type == 'checkbox'){
          let values = dom.value.split(':');
          tempValue = dom.checked? values[0]:values[1];
        }

        if(column.editable&&column.editable.validator){//process validate
          tempMsg= column.editable.validator(tempValue)
          if(tempMsg!==true){
            isValid=false;
            validateState[column.field]=tempMsg;
          }
        }
      }

      newObj[column.field] =tempValue;
    }, this);

    if(isValid){
      return newObj;
    }else{
      ts.clearTimeout();
      //show error in form and shake it
      this.setState({validateState:validateState,shakeEditor:true});
      //notifier error
      ts.refs.notifier.notice('error',"Form validate errors, please checking!","Pressed ESC can cancel");
      //clear animate class
      ts.timeouteClear=setTimeout(function(){ts.setState({shakeEditor:false});},300);
      return null;
    }
  }

  handleSaveBtnClick(e){
    var newObj = this.checkAndParseForm();
    if(!newObj){//validate errors
      return;
    }
    var msg = this.props.onAddRow(newObj);
    if(msg) {
      var ts=this;
      ts.refs.notifier.notice('error',msg,"Pressed ESC can cancel");
      ts.clearTimeout();
      //shake form and hack prevent modal hide
      ts.setState({shakeEditor:true,validateState:"this is hack for prevent bootstrap modal hide"});
      //clear animate class
      ts.timeouteClear=setTimeout(function(){ts.setState({shakeEditor:false});},300);
    } else{
      //reset state and hide modal hide
      this.setState({
        validateState:null,
        shakeEditor:false
      });
      //reset form
      this.refs.form.reset();

    }
  }

  handleShowOnlyToggle = e => {
    this.setState({
      showSelected: !this.state.showSelected
    });
    this.props.onShowOnlySelected();
  }

  handleDropRowBtnClick(e){
    this.props.onDropRow();
  }

  handleCloseBtn(e){
    this.refs.warning.style.display = "none";
  }

  handleKeyUp(e){
    this.props.onSearch(e.currentTarget.value);
  }

  handleExportCSV() {
    this.props.onExportCSV();
  }

  handleClearBtnClick = () => {
    this.refs.seachInput.value = '';
    this.props.onSearch('');
  }

  render(){
    var modalClassName = "bs-table-modal-sm"+new Date().getTime();
    var insertBtn = this.props.enableInsert?
          <button type="button" onClick={this.props.onAddRowBegin} className="btn btn-info react-bs-table-add-btn" data-toggle="modal" data-target={'.'+modalClassName}>
            <i className="glyphicon glyphicon-plus"></i> New</button>:null;

    var deleteBtn = this.props.enableDelete?
          <button type="button" className="btn btn-warning react-bs-table-del-btn" data-toggle="tooltip" data-placement="right" title="Drop selected row"
            onClick={this.handleDropRowBtnClick.bind(this)}>
            <i className="glyphicon glyphicon-trash"></i> Delete
          </button>:null;

    var searchTextInput = this.renderSearchPanel();

    var showSelectedOnlyBtn = this.props.enableShowOnlySelected?
      <button type="button" onClick={this.handleShowOnlyToggle.bind(this)} className="btn btn-primary" data-toggle="button" aria-pressed="false">
        { this.state.showSelected? Const.SHOW_ALL : Const.SHOW_ONLY_SELECT }
      </button>:null;

    var modal = this.props.enableInsert?this.renderInsertRowModal(modalClassName):null;
    var warningStyle = {
      display: "none",
      marginBottom: 0
    };

    var exportCSV = this.props.enableExportCSV ?
          <button type="button" className="btn btn-success" onClick={this.handleExportCSV.bind(this)}>
              <i className="glyphicon glyphicon-export"></i> Export to CSV</button> : null;

    return(
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-8">
          <div className="btn-group btn-group-sm" role="group">
            {exportCSV}
            {insertBtn}
            {deleteBtn}
            {showSelectedOnlyBtn}
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          {searchTextInput}
        </div>
        <Notifier ref="notifier"></Notifier>
        {modal}
      </div>
    )
  }

  renderSearchPanel() {
    if(this.props.enableSearch) {
      let classNames = 'form-group form-group-sm';
      let clearBtn = null;
      if(this.props.clearSearch) {
        clearBtn = (
          <span className="input-group-btn">
            <button
              className="btn btn-default"
              type="button"
              onClick={ this.handleClearBtnClick }>Clear</button>
          </span>
        );
        classNames = 'form-group form-group-sm input-group input-group-sm';
      }

      return (
        <div className={classNames}>
          <input ref='seachInput' className="form-control" type='text'
            placeholder={this.props.searchPlaceholder?this.props.searchPlaceholder:'Search'}
            onKeyUp={this.handleKeyUp.bind(this)}/>
            { clearBtn }
        </div>
      );
    } else {
      return null;
    }
  }

  renderInsertRowModal(modalClassName){
    var validateState=this.state.validateState||{};
    var inputField = this.props.columns.map(function(column, i){
      var editable=column.editable,
          format=column.format,
          attr={ref:column.field+i,placeholder:editable.placeholder?editable.placeholder:column.name};

      if(column.autoValue){//when you want same auto generate value and not allow edit, example ID field
        return null;
      }
      var error=validateState[column.field]?(<span className="help-block bg-danger">{validateState[column.field]}</span>):null;

      // let editor = Editor(editable,attr,format);
      // if(editor.props.type && editor.props.type == 'checkbox'){
      return(
        <div className="form-group" key={column.field}>
          <label>{column.name}</label>
          {Editor(editable,attr,format,'')}
          {error}
        </div>
      );
    });
    var modalClass = classSet("modal", "fade" , modalClassName,{
      'in':this.state.shakeEditor||this.state.validateState//hack prevent bootstrap modal hide by reRender
    });
    var dialogClass=classSet("modal-dialog","modal-sm",{
      "animated":this.state.shakeEditor,
      "shake":this.state.shakeEditor
    });
    return (
      <div ref="modal"  className={modalClass} tabIndex="-1" role="dialog" >
        <div className={dialogClass}>
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">New Record</h4>
            </div>
            <div className="modal-body">
              <form ref="form">
              {inputField}
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-info"  onClick={this.handleSaveBtnClick.bind(this)}>Save</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
ToolBar.propTypes = {
  onAddRow: React.PropTypes.func,
  onDropRow: React.PropTypes.func,
  onShowOnlySelected: React.PropTypes.func,
  enableInsert: React.PropTypes.bool,
  enableDelete: React.PropTypes.bool,
  enableSearch: React.PropTypes.bool,
  enableShowOnlySelected: React.PropTypes.bool,
  columns: React.PropTypes.array,
  searchPlaceholder: React.PropTypes.string,
  clearSearch: React.PropTypes.bool
};

ToolBar.defaultProps = {
  enableInsert: false,
  enableDelete: false,
  enableSearch: false,
  enableShowOnlySelected: false,
  clearSearch: false
}
export default ToolBar;
