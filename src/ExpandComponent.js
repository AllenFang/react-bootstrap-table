/* eslint max-len: 0 */
/* eslint no-nested-ternary: 0 */
import React, { Component } from 'react';
import classSet from 'classnames';

class ExpandComponent extends Component {

  render() {
    const { className } = this.props;
    const trCss = {
      style: {
        backgroundColor: this.props.bgColor
      },
      className: classSet(className)
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
