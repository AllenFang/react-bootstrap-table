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
      if (this.props.selectRow) {
        if (this.props.selectRow.clickToSelect) {
          this.props.onSelectRow(rowIndex, !this.props.isSelected, e);
        } else if (this.props.selectRow.clickToSelectAndEditCell) {
          this.clickNum++;
          /** if clickToSelectAndEditCell is enabled,
           *  there should be a delay to prevent a selection changed when
           *  user dblick to edit cell on same row but different cell
          **/
          setTimeout(() => {
            if (this.clickNum === 1) {
              this.props.onSelectRow(rowIndex, !this.props.isSelected, e);
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
      className: (
        this.props.isSelected && this.props.selectRow.className ?
        this.props.selectRow.className : '') + (this.props.className || '')
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
  onRowMouseOver: PropTypes.func
};
TableRow.defaultProps = {
  onRowClick: undefined
};
export default TableRow;
