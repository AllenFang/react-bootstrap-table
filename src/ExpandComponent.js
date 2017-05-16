/* eslint max-len: 0 */
/* eslint no-nested-ternary: 0 */
import React, { Component } from 'react';
import classSet from 'classnames';

class ExpandComponent extends Component {

  render() {
    const { selectRow, isSelected, className, row } = this.props;
    const selectRowClass = typeof selectRow.className === 'function' ?
        selectRow.className(row, isSelected) : ( isSelected ? selectRow.className : null);
    const trCss = {
      style: {
        backgroundColor: this.props.bgColor
      },
      className: classSet(selectRowClass, className)
    };
    return (
      <tr hidden={ this.props.hidden } width={ this.props.width } { ...trCss }>
        <td colSpan={ this.props.colSpan }>
          { this.props.children }
        </td>
      </tr>
    );
  }
}

export default ExpandComponent;
