import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classSet from 'classnames';
import Const from './Const';
import SelectRowHeaderColumn from './SelectRowHeaderColumn';

class TableFooter extends Component {

  render() {
    const containerClasses = classSet('react-bs-container-footer', 'table-footer-wrapper');
    const tableClasses = classSet('table', 'table-hover', {
      'table-bordered': this.props.bordered,
      'table-condensed': this.props.condensed
    }, this.props.tableFooterClass);
    let selectRowHeaderCol = null;
    if (!this.props.hideSelectColumn) selectRowHeaderCol = this.renderSelectRowHeader();
    return (
      <div ref='container' className={ containerClasses } style={ this.props.style }>
        {
          this.props.children.map((footerItem, footerItemIndex) => {
            return (
              <span key={ footerItemIndex }>
                <table className={ tableClasses }>
                  { React.cloneElement(this.props.colGroups) }
                  <tfoot>
                    <tr ref='footer'>
                      { selectRowHeaderCol }
                      {
                        this.props.columns.map((columnItem, colIndex) => {
                          if ( !columnItem.hidden ) {
                            const footerObj = footerItem.filter((item) => {
                              return item.target === colIndex;
                            });
                            let footerData;
                            let thAlignment = 'left';
                            if (footerObj.length) {
                              thAlignment = footerObj[0].align;
                              if (footerObj[0].formatter) {
                                footerData = footerObj[0].formatter(
                                  this.props.footerFormatterReturnData
                                );
                              } else {
                                footerData = footerObj[0].label;
                              }
                            } else {
                              footerData = '';
                            }
                            return (
                              <th
                                key={ colIndex }
                                style={ {
                                  minWidth: `${this.props.columns[colIndex].width}px`,
                                  textAlign: thAlignment
                                } }>
                                  {
                                    footerData
                                  }
                              </th>
                            );
                          }
                        })
                      }
                    </tr>
                  </tfoot>
                </table>
              </span>
            );
          })
        }
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
TableFooter.propTypes = {
  tableHeaderClass: PropTypes.string,
  style: PropTypes.object,
  hideSelectColumn: PropTypes.bool,
  bordered: PropTypes.bool,
  condensed: PropTypes.bool,
  isFiltered: PropTypes.bool,
  sortIndicator: PropTypes.bool
};

export default TableFooter;
