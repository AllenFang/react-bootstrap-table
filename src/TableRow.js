import classSet from 'classnames';
import React, { Component, PropTypes } from 'react';

class TableRow extends Component {

  constructor(props) {
    super(props);
    this.clickNum = 0;
  }

  rowClick = e => {
    if (e.target.tagName !== 'INPUT' &&
        e.target.tagName !== 'SELECT' &&
        e.target.tagName !== 'TEXTAREA') {
      const rowIndex = e.currentTarget.rowIndex + 1;
      const { selectRow, unselectableRow, isSelected, onSelectRow } = this.props;
      if (selectRow) {
        if (selectRow.clickToSelect && !unselectableRow) {
          onSelectRow(rowIndex, !isSelected, e);
        } else if (selectRow.clickToSelectAndEditCell && !unselectableRow) {
          this.clickNum++;
          /** if clickToSelectAndEditCell is enabled,
           *  there should be a delay to prevent a selection changed when
           *  user dblick to edit cell on same row but different cell
          **/
          setTimeout(() => {
            if (this.clickNum === 1) {
              onSelectRow(rowIndex, !isSelected, e);
            }
            this.clickNum = 0;
          }, 200);
        }
      }
      if (this.props.onRowClick) this.props.onRowClick(rowIndex);
    }
  }

  rowMouseOut = e => {
    if (this.props.onRowMouseOut) {
      this.props.onRowMouseOut(e.currentTarget.rowIndex, e);
    }
  }

  rowMouseOver = e => {
    if (this.props.onRowMouseOver) {
      this.props.onRowMouseOver(e.currentTarget.rowIndex, e);
    }
  }

  render() {
    this.clickNum = 0;
    const trCss = {
      style: {
        backgroundColor: this.props.isSelected ? this.props.selectRow.bgColor : null
      },
      className: classSet(
        this.props.isSelected ? this.props.selectRow.className : null,
        this.props.className
      )
    };

    if (this.props.selectRow && (this.props.selectRow.clickToSelect ||
      this.props.selectRow.clickToSelectAndEditCell) || this.props.onRowClick) {
      return (
        <tr { ...trCss }
            onMouseOver={ this.rowMouseOver }
            onMouseOut={ this.rowMouseOut }
            onClick={ this.rowClick }>{ this.props.children }</tr>
      );
    } else {
      return (
        <tr { ...trCss }>{ this.props.children }</tr>
      );
    }
  }
}
TableRow.propTypes = {
  isSelected: PropTypes.bool,
  enableCellEdit: PropTypes.bool,
  onRowClick: PropTypes.func,
  onSelectRow: PropTypes.func,
  onRowMouseOut: PropTypes.func,
  onRowMouseOver: PropTypes.func,
  unselectableRow: PropTypes.bool
};
TableRow.defaultProps = {
  onRowClick: undefined
};
export default TableRow;
