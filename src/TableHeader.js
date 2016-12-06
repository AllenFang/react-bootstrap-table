import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Const from './Const';
import classSet from 'classnames';
import SelectRowHeaderColumn from './SelectRowHeaderColumn';

class Checkbox extends Component {
  componentDidMount() { this.update(this.props.checked); }
  componentWillReceiveProps(props) { this.update(props.checked); }
  update(checked) {
    ReactDOM.findDOMNode(this).indeterminate = checked === 'indeterminate';
  }
  render() {
    return (
      <input className='react-bs-select-all'
        type='checkbox'
        checked={ this.props.checked }
        onChange={ this.props.onChange } />
    );
  }
}

class TableHeader extends Component {

  render() {
    const containerClasses = classSet(
      'react-bs-container-header',
      'table-header-wrapper',
      this.props.headerContainerClass);
    const tableClasses = classSet('table', 'table-hover', {
      'table-bordered': this.props.bordered,
      'table-condensed': this.props.condensed
    }, this.props.tableHeaderClass);
    let selectRowHeaderCol = null;
    if (!this.props.hideSelectColumn) selectRowHeaderCol = this.renderSelectRowHeader();
    let i = 0;
    return (
    <div ref='container' className={ containerClasses } style={ this.props.style }>
      <table className={ tableClasses }>
        <thead>
          <tr ref='header'>
            { selectRowHeaderCol }
            {
              React.Children.map(this.props.children, (elm) => {
                const { sortIndicator, sortInfo, onSort,
                    onResizing, onStartResizing, onStopResizing } = this.props;
                const { dataField, dataSort } = elm.props;
                const colSortInfo = sortInfo.filter(function(sortCol) {
                  return sortCol.field === dataField;
                })[0];
                // const sort = (dataSort && dataField === sortName) ? sortOrder : undefined;
                const sort = (dataSort && colSortInfo) ? colSortInfo.order : undefined;
                const sortNumber = (dataSort && colSortInfo) ? colSortInfo.number : 0;
                return React.cloneElement(
                  elm,
                  {
                    key: i++,
                    onSort,
                    onResizing,
                    onStartResizing,
                    onStopResizing,
                    sort,
                    sortIndicator,
                    sortNumber
                  });
              })
            }
          </tr>
        </thead>
      </table>
    </div>
    );
  }

  renderSelectRowHeader() {
    if (this.props.customComponent) {
      const CustomComponent = this.props.customComponent;
      return (
        <SelectRowHeaderColumn>
          <CustomComponent type='checkbox' checked={ this.props.isSelectAll }
            indeterminate={ this.props.isSelectAll === 'indeterminate' } disabled={ false }
            onChange={ this.props.onSelectAllRow } rowIndex='Header'/>
        </SelectRowHeaderColumn>
      );
    } else if (this.props.rowSelectType === Const.ROW_SELECT_SINGLE) {
      return (<SelectRowHeaderColumn />);
    } else if (this.props.rowSelectType === Const.ROW_SELECT_MULTI) {
      return (
        <SelectRowHeaderColumn>
          <Checkbox
            onChange={ this.props.onSelectAllRow }
            checked={ this.props.isSelectAll }/>
        </SelectRowHeaderColumn>
      );
    } else {
      return null;
    }
  }
}
TableHeader.propTypes = {
  headerContainerClass: PropTypes.string,
  tableHeaderClass: PropTypes.string,
  style: PropTypes.object,
  rowSelectType: PropTypes.string,
  onSort: PropTypes.func,
  onResizing: PropTypes.func,
  onStartResizing: PropTypes.func,
  onStopResizing: PropTypes.func,
  onSelectAllRow: PropTypes.func,
  sortInfo: PropTypes.array,
  hideSelectColumn: PropTypes.bool,
  bordered: PropTypes.bool,
  condensed: PropTypes.bool,
  isFiltered: PropTypes.bool,
  isSelectAll: PropTypes.oneOf([ true, 'indeterminate', false ]),
  sortIndicator: PropTypes.bool,
  customComponent: PropTypes.func
};

export default TableHeader;
