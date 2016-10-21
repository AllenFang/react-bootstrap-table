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
    let i = 0;

    let rowCount = 0;
    React.Children.forEach(this.props.children, (elm) => {
      if (Number(elm.props.row) > rowCount) {
        rowCount = Number(elm.props.row);
      }
    });

    const rows = [];

    if (!this.props.hideSelectColumn) {
      rows[0] = [ this.renderSelectRowHeader(rowCount + 1) ];
    }

    React.Children.forEach(this.props.children, (elm) => {
      const { sortIndicator, sortName, sortOrder, onSort } = this.props;
      const { dataField, dataSort } = elm.props;
      const sort = (dataSort && dataField === sortName) ? sortOrder : undefined;
      const rowIndex = elm.props.row ? Number(elm.props.row) : 0;
      const rowSpan = elm.props.rowSpan ? Number(elm.props.rowSpan) : 1;
      if (rows[rowIndex] === undefined) {
        rows[rowIndex] = [];
      }
      if ((rowSpan + rowIndex) === (rowCount + 1)) {
        rows[rowIndex].push(React.cloneElement(
          elm, { key: i++, onSort, sort, sortIndicator, isOnlyHead: false }
          ));
      } else {
        rows[rowIndex].push(React.cloneElement(
          elm, { key: i++, isOnlyHead: true }
          ));
      }
    });

    const trs = rows.map((row, indexRow)=>{
      return (
        <tr key={ indexRow }>
          { row }
        </tr>
      );
    });

    return (
      <div ref='container' className={ containerClasses } style={ this.props.style }>
        <table className={ tableClasses }>
          <thead ref='header'>
            { trs }
          </thead>
        </table>
      </div>
    );
  }

  renderSelectRowHeader(rowCount) {
    if (this.props.customComponent) {
      const CustomComponent = this.props.customComponent;
      return (
        <SelectRowHeaderColumn rowCount={ rowCount }>
          <CustomComponent type='checkbox' checked={ this.props.isSelectAll }
            indeterminate={ this.props.isSelectAll === 'indeterminate' } disabled={ false }
            onChange={ this.props.onSelectAllRow } rowIndex='Header'/>
        </SelectRowHeaderColumn>
      );
    } else if (this.props.rowSelectType === Const.ROW_SELECT_SINGLE) {
      return (<SelectRowHeaderColumn rowCount={ rowCount }/>);
    } else if (this.props.rowSelectType === Const.ROW_SELECT_MULTI) {
      return (
        <SelectRowHeaderColumn rowCount={ rowCount }>
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
