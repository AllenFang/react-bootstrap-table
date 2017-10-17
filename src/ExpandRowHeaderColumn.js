import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpandRowHeaderColumn extends Component {

  constructor(props) {
    super(props);
    this.toggleExpandAllChilds = this.toggleExpandAllChilds.bind(this);
  }

  toggleExpandAllChilds() {
    this.props.toggleExpandAllChilds();
  }

  render() {
    const { expandedColumnHeaderComponent, expandAllChilds } = this.props;
    const defaultExpandedHeaderComponent = (expandAllChilds ? '(-)' : '(+)' );
    const ExpandedColumnHeaderComponent = expandedColumnHeaderComponent;

    return (
      <th rowSpan={ this.props.rowCount } style={ { textAlign: 'center' } }
        className='react-bs-table-expand-cell'
        data-is-only-head={ false } onClick={ this.toggleExpandAllChilds }>
        { this.props.expandedColumnHeaderComponent ?
          <ExpandedColumnHeaderComponent
            expandAllChilds={ this.props.expandAllChilds } /> : defaultExpandedHeaderComponent }
      </th>
    );
  }
}
ExpandRowHeaderColumn.propTypes = {
  expandedColumnHeaderComponent: PropTypes.func,
  rowCount: PropTypes.number,
  expandAllChilds: PropTypes.bool,
  toggleExpandAllChilds: PropTypes.func
};
export default ExpandRowHeaderColumn;
