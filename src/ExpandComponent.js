/* eslint max-len: 0 */
import React, { Component } from 'react';

class ExpandComponent extends Component {

  render() {
    return (
      <tr hidden={ this.props.hidden } width={ this.props.width }>
        <td colSpan={ this.props.colSpan }>
          { this.props.expandComponent }
        </td>
      </tr>
    );
  }
}

export default ExpandComponent;
