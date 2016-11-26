/* eslint max-len: 0 */
import React, { Component } from 'react';
import classSet from 'classnames';

class ExpandComponent extends Component {

  render() {
    const trCss = {
      style: {
        backgroundColor: this.props.bgColor
      },
      className: classSet(
        this.props.isSelected ? this.props.selectRow.className : null,
        this.props.className
      )
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
