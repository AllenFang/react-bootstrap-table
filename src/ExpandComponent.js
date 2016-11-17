/* eslint max-len: 0 */
import React, { Component, PropTypes } from 'react';

class ExpandComponent extends Component {

  render() {
    return (
      <tr {...this.props}>
        <td colSpan={ this.props.colSpan }>
          { this.props.expandComponent }
        </td>
      </tr>
    );
  }
}
ExpandComponent.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array
};
export default ExpandComponent;
