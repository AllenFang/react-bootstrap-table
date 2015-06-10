import React from 'react';
import classSet from 'classnames';
import Const from '../Const';

class ToolBar extends React.Component{

  constructor(props) {
		super(props);
    this.state = {
      isInsertRowTrigger: true
    };
  }

  handleSaveBtnClick(e){
    var newObj = {};
    this.props.columns.forEach(function(column, i){
      newObj[column.field] = this.refs[column.field+i].getDOMNode().value;
    }, this);
    var msg = this.props.onAddRow(newObj);
    if(msg) {
      this.refs.warning.getDOMNode().style.display = "block";
      this.refs.warningText.getDOMNode().textContent = msg;
    } else{
      this.refs.warning.getDOMNode().style.display = "none";
    }
  }

  handleDropRowBtnClick(e){
    this.props.onDropRow();
  }

  handleCloseBtn(e){
    this.refs.warning.getDOMNode().style.display = "none";
  }

  render(){
    var insertBtn = this.props.enableInsert?
          <button type="button" className="btn btn-default" data-toggle="modal" data-target=".bs-example-modal-sm">
            New</button>:null;

    var deleteBtn = this.props.enableDelete?
          <button type="button" className="btn btn-default" data-toggle="tooltip" data-placement="right" title="Drop selected row"
            onClick={this.handleDropRowBtnClick.bind(this)}>
            Delete
          </button>:null;
    var searchTextInput = this.props.enableSearch?:<input type='text' placeholder='Search' />:null;
    var modal = this.renderInsertRowModal();
    var warningStyle = {
      display: "none",
      marginBottom: 0
    };
    return(
      <div>
        <div className="btn-group btn-group-sm" role="group" aria-label="...">
          {insertBtn}{deleteBtn}
        </div>
        {searchTextInput}
        <div ref="warning" className="alert alert-warning" style={warningStyle}>
          <button type="button" className="close" aria-label="Close" onClick={this.handleCloseBtn.bind(this)}><span aria-hidden="true">&times;</span></button>
          <strong>Warning! </strong><font ref="warningText"></font>
        </div>
        {modal}
      </div>
    )
  }

  renderInsertRowModal(){

    var inputField = this.props.columns.map(function(column, i){
      return(
        <div className="form-group" key={column.field}>
          <label>{column.name}</label>
          <input ref={column.field+i} type="text" className="form-control" placeholder={column.name}></input>
        </div>
      );
    });

    return (
      <div className="modal fade bs-example-modal-sm" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">New Record</h4>
            </div>
            <div className="modal-body">
              {inputField}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleSaveBtnClick.bind(this)}>Save</button>
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
  enableInsert: React.PropTypes.bool,
  enableDelete: React.PropTypes.bool,
  enableSearch: React.PropTypes.bool,
  columns: React.PropTypes.array
};

ToolBar.defaultProps = {
  enableInsert: false,
  enableDelete: false,
  enableSearch: false
}
export default ToolBar;
