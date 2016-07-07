import React, { Component, PropTypes } from 'react';
import classSet from 'classnames';

class TableHeader extends Component {

  render() {
    const containerClasses = classSet('react-bs-container-header', 'table-header-wrapper');
    const tableClasses = classSet('table', 'table-hover', {
      'table-bordered': this.props.bordered,
      'table-condensed': this.props.condensed
    }, this.props.tableHeaderClass);
    return (
      <div ref='container' className={ containerClasses } style={ this.props.style }>
        <table className={ tableClasses }>
          <tfoot>
            <tr ref='footer'>
              {
                this.props.children.map( child => {
                  console.log('child ', child);
                  return <td>{ child.props.footer || child.props.children }</td>;
                })
              }
            </tr>
          </tfoot>
        </table>
      </div>
    );
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
  sortIndicator: PropTypes.bool
};

export default TableHeader;
