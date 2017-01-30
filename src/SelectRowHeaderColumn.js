import React, { Component, PropTypes } from 'react';

class SelectRowHeaderColumn extends Component {

  render() {
    return (
      <th rowSpan={ this.props.rowCount } style={ { textAlign: 'center' } }
        data-is-only-head={ false }>
        { this.props.children }
      </th>
    );
  }
}
SelectRowHeaderColumn.propTypes = {
  children: PropTypes.node,
  rowCount: PropTypes.number
};
export default SelectRowHeaderColumn;
