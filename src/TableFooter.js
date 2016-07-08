import React, { Component, PropTypes } from 'react';
import classSet from 'classnames';
import Const from './Const';
import SelectRowHeaderColumn from './SelectRowHeaderColumn';

class TableHeader extends Component {

  render() {
    const containerClasses = classSet('react-bs-container-header', 'table-header-wrapper');
    const tableClasses = classSet('table', 'table-hover', {
      'table-bordered': this.props.bordered,
      'table-condensed': this.props.condensed
    }, this.props.tableFooterClass);
    let selectRowHeaderCol = null;
    if (!this.props.hideSelectColumn) selectRowHeaderCol = this.renderSelectRowHeader();
    return (
      <div ref='container' className={ containerClasses } style={ this.props.style }>
        <table className={ tableClasses }>
          <tfoot>
            <tr ref='footer'>
              { selectRowHeaderCol }
              {
                this.props.children.map( child => {
                  console.log('child ', child);
                  return <td>{ child.props.footerText || child.props.children }</td>;
                })
              }
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
  renderSelectRowHeader() {
    if (this.props.rowSelectType === Const.ROW_SELECT_SINGLE) {
      return (<SelectRowHeaderColumn />);
    } else {
      return null;
    }
  }
}
TableHeader.propTypes = {
  tableHeaderClass: PropTypes.string,
  style: PropTypes.object,
  hideSelectColumn: PropTypes.bool,
  bordered: PropTypes.bool,
  condensed: PropTypes.bool,
  isFiltered: PropTypes.bool,
  sortIndicator: PropTypes.bool
};

export default TableHeader;
