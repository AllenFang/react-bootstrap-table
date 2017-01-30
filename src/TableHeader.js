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

function getSortOrder(sortList, field, enableSort) {
  if (!enableSort) return undefined;
  const result = sortList.filter(sortObj => {
    return sortObj.sortField === field;
  });
  if (result.length > 0) {
    return result[0].order;
  } else {
    return undefined;
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

    const rowCount = Math.max(...React.Children.map(this.props.children, elm =>
      elm.props.row ? Number(elm.props.row) : 0
    ));

    const rows = [];
    let rowKey = 0;

    if (!this.props.hideSelectColumn) {
      rows[0] = [ this.renderSelectRowHeader(rowCount + 1, rowKey++) ];
    }

    const { sortIndicator, sortList, onSort } = this.props;

    React.Children.forEach(this.props.children, (elm) => {
      const { dataField, dataSort } = elm.props;
      const sort = getSortOrder(sortList, dataField, dataSort);
      const rowIndex = elm.props.row ? Number(elm.props.row) : 0;
      const rowSpan = elm.props.rowSpan ? Number(elm.props.rowSpan) : 1;
      if (rows[rowIndex] === undefined) {
        rows[rowIndex] = [];
      }
      if ((rowSpan + rowIndex) === (rowCount + 1)) {
        rows[rowIndex].push(React.cloneElement(
          elm, { key: rowKey++, onSort, sort, sortIndicator, isOnlyHead: false }
          ));
      } else {
        rows[rowIndex].push(React.cloneElement(
          elm, { key: rowKey++, isOnlyHead: true }
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
          { React.cloneElement(this.props.colGroups, { ref: 'headerGrp' }) }
          <thead ref='header'>
            { trs }
          </thead>
        </table>
      </div>
    );
  }

  getHeaderColGrouop = () => {
    return this.refs.headerGrp.childNodes;
  }

  renderSelectRowHeader(rowCount, rowKey) {
    if (this.props.customComponent) {
      const CustomComponent = this.props.customComponent;
      return (
        <SelectRowHeaderColumn key={ rowKey } rowCount={ rowCount }>
          <CustomComponent type='checkbox' checked={ this.props.isSelectAll }
            indeterminate={ this.props.isSelectAll === 'indeterminate' } disabled={ false }
            onChange={ this.props.onSelectAllRow } rowIndex='Header'/>
        </SelectRowHeaderColumn>
      );
    } else if (this.props.rowSelectType === Const.ROW_SELECT_SINGLE) {
      return (<SelectRowHeaderColumn key={ rowKey } rowCount={ rowCount }/>);
    } else if (this.props.rowSelectType === Const.ROW_SELECT_MULTI) {
      return (
        <SelectRowHeaderColumn key={ rowKey } rowCount={ rowCount }>
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
  sortList: PropTypes.array,
  hideSelectColumn: PropTypes.bool,
  bordered: PropTypes.bool,
  condensed: PropTypes.bool,
  isFiltered: PropTypes.bool,
  isSelectAll: PropTypes.oneOf([ true, 'indeterminate', false ]),
  sortIndicator: PropTypes.bool,
  customComponent: PropTypes.func,
  colGroups: PropTypes.element
};

export default TableHeader;
