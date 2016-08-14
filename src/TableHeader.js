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
    const containerClasses = classSet('react-bs-container-header', 'table-header-wrapper');
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
                  const { sortIndicator, sortName, sortOrder, onSort } = this.props;
                  const { dataField, dataSort } = elm.props;
                  const sort = (dataSort && dataField === sortName) ? sortOrder : undefined;
                  return React.cloneElement(elm, { key: i++, onSort, sort, sortIndicator });
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
  tableHeaderClass: PropTypes.string,
  style: PropTypes.object,
  rowSelectType: PropTypes.string,
  onSort: PropTypes.func,
  onSelectAllRow: PropTypes.func,
  sortName: PropTypes.string,
  sortOrder: PropTypes.string,
  hideSelectColumn: PropTypes.bool,
  bordered: PropTypes.bool,
  condensed: PropTypes.bool,
  isFiltered: PropTypes.bool,
  isSelectAll: PropTypes.oneOf([ true, 'indeterminate', false ]),
  sortIndicator: PropTypes.bool,
  customComponent: PropTypes.func
};

export default TableHeader;
