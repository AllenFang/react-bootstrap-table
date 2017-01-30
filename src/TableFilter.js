import React, { Component, PropTypes } from 'react';
import Const from './Const';
import classSet from 'classnames';

class TableFilter extends Component {

  constructor(props) {
    super(props);
    this.filterObj = {};
  }

  handleKeyUp = e => {
    const { value, name } = e.currentTarget;
    if (value.trim() === '') {
      delete this.filterObj[name];
    } else {
      this.filterObj[name] = value;
    }
    this.props.onFilter(this.filterObj);
  }

  render() {
    const { striped, condensed, rowSelectType, columns } = this.props;
    const tableClasses = classSet('table', {
      'table-striped': striped,
      'table-condensed': condensed
    });
    let selectRowHeader = null;

    if (rowSelectType === Const.ROW_SELECT_SINGLE ||
        rowSelectType === Const.ROW_SELECT_MULTI) {
      const style = {
        width: 35,
        paddingLeft: 0,
        paddingRight: 0
      };
      selectRowHeader = (<th style={ style } key={ -1 }>Filter</th>);
    }

    const filterField = columns.map(function(column) {
      const { hidden, width, name, filterPlaceholder } = column;
      const thStyle = {
        display: hidden ? 'none' : null,
        width
      };
      const placeholder = filterPlaceholder || name;
      return (
        <th key={ name } style={ thStyle }>
          <div className='th-inner table-header-column'>
            <input size='10' type='text'
              placeholder={ placeholder } name={ name } onKeyUp={ this.handleKeyUp }/>
          </div>
        </th>
      );
    }, this);
    const name = tableClasses + ' ' + this.props.columnFilterClass;
    return (
      <table className={ name } style={ { marginTop: 5 } }>
        <thead>
          <tr style={ { borderBottomStyle: 'hidden' } }>
            { selectRowHeader }{ filterField }
          </tr>
        </thead>
      </table>
    );
  }
}

TableFilter.propTypes = {
  columns: PropTypes.array,
  rowSelectType: PropTypes.string,
  onFilter: PropTypes.func,
  className: PropTypes.string
};

TableFilter.defaultProps = {
  columnFilterClass: 'footerFilter'
};

export default TableFilter;
