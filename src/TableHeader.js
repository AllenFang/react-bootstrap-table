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
    var row = this.refs.header;
    for(var i=0;i<row.childElementCount;i++){
      var column = row.childNodes[i].childNodes[0];
      if(column.getElementsByClassName("order").length > 0){
        column.removeChild(column.getElementsByClassName("order")[0]);
      }
    }
    this.props.onSort(order, sortField);
  }

  componentDidMount(){
    //default sorting
    if(this.props.sortName){
      this.clearSortCaret(this.props.sortOrder, this.props.sortName);
      var row = this.refs.header;
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
    var tableClasses = classSet("table", "table-hover", {
        "table-bordered": this.props.bordered,
        "table-condensed": this.props.condensed
    });
    var selectRowHeaderCol = this.props.hideSelectColumn?null:this.renderSelectRowHeader();
    this._attachClearSortCaretFunc();

    return(
      <div ref="container" className={containerClasses}>
        <table className={tableClasses}>
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
    if(Array.isArray(this.props.children)){
      for(let i=0;i<this.props.children.length;i++){
        this.props.children[i] =
          React.cloneElement(this.props.children[i], {key: i, clearSortCaret: this.clearSortCaret.bind(this)});
      }
    } else {
      this.props.children =
        React.cloneElement(this.props.children, {key: 0, clearSortCaret: this.clearSortCaret.bind(this)});
    }
  }

  fitHeader(headerProps, isVerticalScrollBar){
    if(Array.isArray(this.props.children)){
      let startPosition = (this.props.rowSelectType == Const.ROW_SELECT_SINGLE ||
                              this.props.rowSelectType == Const.ROW_SELECT_MULTI) && !this.props.hideSelectColumn ? 1:0;
      for(let i=0;i<this.props.children.length;i++){
        this.props.children[i] =
          React.cloneElement(this.props.children[i], {width: headerProps[i+startPosition].width+"px"});
      }
    } else {
      this.props.children =
        React.cloneElement(this.props.children, {width: headerProps[0].width+"px"});
    }
    this.forceUpdate();
    if(isVerticalScrollBar)
      this.refs.container.style.marginRight = Util.getScrollBarWidth() + "px";
  }
}
TableHeader.propTypes = {
  rowSelectType: React.PropTypes.string,
  onSort: React.PropTypes.func,
  onSelectAllRow: React.PropTypes.func,
  sortName: React.PropTypes.string,
  sortOrder: React.PropTypes.string,
  hideSelectColumn: React.PropTypes.bool,
  bordered: React.PropTypes.bool,
  condensed: React.PropTypes.bool
};

TableHeader.defaultProps = {
};
export default TableHeader;
