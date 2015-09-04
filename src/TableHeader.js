import React from 'react';
import Const from './Const';
import Util from './util';
import classSet from 'classnames';
import SelectRowHeaderColumn from './SelectRowHeaderColumn';

class TableHeader extends React.Component{

  constructor(props) {
    super(props);
  }

  clearSortCaret(order, sortField){
    var row = this.refs.header.getDOMNode();
    for(var i=0;i<row.childElementCount;i++){
      var column = row.childNodes[i].childNodes[0];
      if(column.getElementsByClassName("order").length > 0){
        column.removeChild(column.getElementsByClassName("order")[0]);
      }
    }
    this.props.onSort(order, sortField);
  }

  componentDidMount(){
    if(this.props.sortName !== null){
      //default sorting
      this.clearSortCaret(this.props.sortOrder, this.props.sortName);
      var row = this.refs.header.getDOMNode();
      for(var i=0;i<row.childElementCount;i++){
        var column = row.childNodes[i].childNodes[0];
        if(column.getAttribute('data-field') === this.props.sortName){
          column.appendChild(Util.renderSortCaret(this.props.sortOrder));
          break;
        }
      }
    }
  }

  render(){
    var containerClasses = classSet("table-header");
    var selectRowHeaderCol = this.renderSelectRowHeader();
    this._attachClearSortCaretFunc();

    return(
      <div className={containerClasses}>
        <table className="table table-hover table-bordered">
          <thead>
            <tr ref="header">
              {selectRowHeaderCol}
              {this.props.children}
            </tr>
          </thead>
        </table>
      </div>
    )
  }

  renderSelectRowHeader(){
    if(this.props.rowSelectType == Const.ROW_SELECT_SINGLE) {
      return (<SelectRowHeaderColumn></SelectRowHeaderColumn>);
    }else if(this.props.rowSelectType == Const.ROW_SELECT_MULTI){
      return (<SelectRowHeaderColumn><input type="checkbox" onChange={this.props.onSelectAllRow}/></SelectRowHeaderColumn>);
    }else{
      return null;
    }
  }

  _attachClearSortCaretFunc(){
    for(let i=0;i<this.props.children.length;i++){
      this.props.children[i] =
        React.cloneElement(this.props.children[i], {key: i, clearSortCaret: this.clearSortCaret.bind(this)});
    }
  }
}
TableHeader.propTypes = {
  rowSelectType: React.PropTypes.string,
  onSort: React.PropTypes.func,
  onSelectAllRow: React.PropTypes.func,
  sortName: React.PropTypes.string,
  sortOrder: React.PropTypes.string
};

TableHeader.defaultProps = {
};
export default TableHeader;
