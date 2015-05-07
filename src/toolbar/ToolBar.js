import React from 'react';
import classSet from 'classnames';
import Const from '../Const';

class ToolBar extends React.Component{

  constructor(props) {
		super(props);
  }

  handleInsertRowBtnClick(){
    var insertPanel = this.refs.insertPanel.getDOMNode();
    if(insertPanel.style.display === "none"){
      this.refs.insertPanel.getDOMNode().style.display = "inline";
    }
  }

  handleSaveBtnClick(e){
    this.refs.insertPanel.getDOMNode().style.display = "none";
    this.props.onAddRow(this.refs.rowKeyField.getDOMNode().value);
  }

  render(){
    var insertBtn = this.props.enableInsert?
          <button type="button" className="btn btn-default" data-toggle="tooltip" data-placement="left" title="Inser row"
            onClick={this.handleInsertRowBtnClick.bind(this)}>
            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
          </button>:null;

    var deleteBtn = this.props.enableDelete?
          <button type="button" className="btn btn-default" data-toggle="tooltip" data-placement="right" title="Drop selected row">
            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </button>:null;

    var insertPanelStyle = {
      display: "none"
    };
    return(
      <div>
        <div className="btn-group" role="group" aria-label="...">
          {insertBtn}{deleteBtn}
        </div>
        <div ref="insertPanel" style={insertPanelStyle}>
          <input ref="rowKeyField" type="text" placeholder="Input New Row Key" />
          <button type="button" className="btn btn-sm btn-default">Cancel</button>
          <button type="button" className="btn btn-sm btn-success" onClick={this.handleSaveBtnClick.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
}
ToolBar.propTypes = {
  onAddRow: React.PropTypes.func,
  enableInsert: React.PropTypes.bool,
  enableDelete: React.PropTypes.bool,
  enableSearch: React.PropTypes.bool
};

ToolBar.defaultProps = {
  enableInsert: false,
  enableDelete: false,
  enableSearch: false
}
export default ToolBar;
