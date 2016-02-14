import React from 'react';
import ReactDOM from 'react-dom';
import Const from './Const';
import Util from './util';
import classSet from 'classnames';
import SelectRowHeaderColumn from './SelectRowHeaderColumn';

class Checkbox extends React.Component{
  componentDidMount() { this.update(this.props.checked); }
  componentWillReceiveProps(props) { this.update(props.checked); }
  update(checked) {
    ReactDOM.findDOMNode(this).indeterminate = checked === 'indeterminate';
  }

  render() {
    return <input className='react-bs-select-all' type="checkbox" checked={this.props.checked} onChange={this.props.onChange} />
  }
}

class TableHeader extends React.Component{

  constructor(props) {
    super(props);
    this.selectRowColumnWidth = null;
  }

  render(){
    // var containerClasses = classSet("table-header");
    var tableClasses = classSet("table", "table-hover", {
        "table-bordered": this.props.bordered,
        "table-condensed": this.props.condensed
    });
    var selectRowHeaderCol = this.props.hideSelectColumn?null:this.renderSelectRowHeader();
    this._attachClearSortCaretFunc();

    return(
      <div ref="container" className="react-bs-container-header">
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
      return (<SelectRowHeaderColumn width={this.selectRowColumnWidth}></SelectRowHeaderColumn>);
    }else if(this.props.rowSelectType == Const.ROW_SELECT_MULTI){
      return (<SelectRowHeaderColumn width={this.selectRowColumnWidth}>
          <Checkbox onChange={this.props.onSelectAllRow} checked={this.props.isSelectAll}/>
        </SelectRowHeaderColumn>
      );
    }else{
      return null;
    }
  }

  _attachClearSortCaretFunc(){
    let { sortIndicator } = this.props;
    if(Array.isArray(this.props.children)){
      for(let i=0;i<this.props.children.length;i++){
        const field = this.props.children[i].props.dataField;
        const sort = field === this.props.sortName ? this.props.sortOrder : undefined;
        this.props.children[i] =
          React.cloneElement(this.props.children[i],
            { key: i, onSort: this.props.onSort, sort, sortIndicator });
      }
    } else {
      const field = this.props.children.props.dataField;
      const sort = field === this.props.sortName ? this.props.sortOrder : undefined;
      this.props.children =
        React.cloneElement(this.props.children, {key: 0, onSort: this.props.onSort, sort, sortIndicator});
    }
  }

  fitHeader(headerProps, isVerticalScrollBar){
    // if(Array.isArray(this.props.children)){
    //   let startPosition = (this.props.rowSelectType == Const.ROW_SELECT_SINGLE ||
    //                           this.props.rowSelectType == Const.ROW_SELECT_MULTI) && !this.props.hideSelectColumn ? 1:0;
    //   if(startPosition == 1)
    //     this.selectRowColumnWidth = headerProps[0].width;
    //   for(let i=0;i<this.props.children.length;i++){
    //     this.props.children[i] =
    //       React.cloneElement(this.props.children[i], {width: headerProps[i+startPosition].width+"px"});
    //   }
    // } else {
    //   this.props.children =
    //     React.cloneElement(this.props.children, {width: headerProps[0].width+"px"});
    // }
    // if(this.props.condensed) {
    //   this.refs.container.style.height = "36px";
    // }
    // this.forceUpdate();
    // if(isVerticalScrollBar)
    //   this.refs.container.style.marginRight = Util.getScrollBarWidth() + "px";
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
  condensed: React.PropTypes.bool,
  isFiltered: React.PropTypes.bool,
  isSelectAll: React.PropTypes.oneOf([true, 'indeterminate', false]),
  sortIndicator: React.PropTypes.bool
};

TableHeader.defaultProps = {
};
export default TableHeader;
