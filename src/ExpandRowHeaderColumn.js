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
    const {
      expandedColumnHeaderComponent,
      noAnyExpand,
      expandAll
    } = this.props;
    const expandedHeaderComponent = noAnyExpand ?
      <span className='fa fa-plus glyphicon glyphicon-plus'></span> :
      <span className='fa fa-minus glyphicon glyphicon-minus'></span>;
    const ExpandedColumnHeaderComponent = expandedColumnHeaderComponent;

    return (
      <th rowSpan={ this.props.rowCount } style={ { textAlign: 'center' } }
        className='react-bs-table-expand-cell'
        data-is-only-head={ false }>
        {
          expandAll ? <div onClick={ this.toggleExpandAllChilds }>
          { expandedColumnHeaderComponent ?
            <ExpandedColumnHeaderComponent
              anyExpand={ !noAnyExpand } /> : expandedHeaderComponent }
          </div> : null
        }
      </th>
    );
  }
}
ExpandRowHeaderColumn.propTypes = {
  expandedColumnHeaderComponent: PropTypes.func,
  rowCount: PropTypes.number,
  noAnyExpand: PropTypes.bool,
  expandAll: PropTypes.bool,
  toggleExpandAllChilds: PropTypes.func
};
export default ExpandRowHeaderColumn;
