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
    var containerClasses = classSet("react-bs-container-header",
      "table-header-wrapper");
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
