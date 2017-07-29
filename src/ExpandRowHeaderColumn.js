import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpandRowHeaderColumn extends Component {

  render() {
    return (
      <th rowSpan={ this.props.rowCount } style={ { textAlign: 'center' } }
        className='react-bs-table-expand-cell'
        data-is-only-head={ false }>
        { this.props.children }
      </th>
    );
  }
}
ExpandRowHeaderColumn.propTypes = {
  children: PropTypes.node,
  rowCount: PropTypes.number
};
export default ExpandRowHeaderColumn;
