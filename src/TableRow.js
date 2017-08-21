/* eslint no-nested-ternary: 0 */
import classSet from 'classnames';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Utils from './util';

class TableRow extends Component {

  constructor(props) {
    super(props);
    this.clickNum = 0;
  }

  rowClick = e => {
    const rowIndex = this.props.index + 1;
    const cellIndex = e.target.cellIndex;
    if (this.props.onRowClick) this.props.onRowClick(rowIndex, cellIndex);
    const {
      selectRow, unselectableRow, isSelected, onSelectRow, onExpandRow, dbClickToEdit
    } = this.props;
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
            onExpandRow(rowIndex, cellIndex);
          }
          this.clickNum = 0;
        }, 200);
      } else {
        if (dbClickToEdit) {
          this.expandRow(rowIndex, cellIndex);
        }
      }
    }
  }

  expandRow = (rowIndex, cellIndex) => {
    this.clickNum++;
    setTimeout(() => {
      if (this.clickNum === 1) {
        this.props.onExpandRow(rowIndex, cellIndex);
      }
      this.clickNum = 0;
    }, 200);
  }

  rowDoubleClick = e => {
    if (e.target.tagName !== 'INPUT' &&
        e.target.tagName !== 'SELECT' &&
        e.target.tagName !== 'TEXTAREA') {
      if (this.props.onRowDoubleClick) {
        this.props.onRowDoubleClick(this.props.index);
      }
    }
  }

  rowMouseOut = e => {
    const rowIndex = this.props.index;
    if (this.props.onRowMouseOut) {
      this.props.onRowMouseOut(rowIndex, e);
    }
  }

  rowMouseOver = e => {
    const rowIndex = this.props.index;
    if (this.props.onRowMouseOver) {
      this.props.onRowMouseOver(rowIndex, e);
    }
  }

  render() {
    this.clickNum = 0;
    const { selectRow, row, isSelected, className, index } = this.props;
    let { style } = this.props;
    let backgroundColor = null;
    let selectRowClass = null;

    if (selectRow) {
      backgroundColor = Utils.isFunction(selectRow.bgColor) ?
        selectRow.bgColor(row, isSelected) : ( isSelected ? selectRow.bgColor : null);

      selectRowClass = Utils.isFunction(selectRow.className) ?
        selectRow.className(row, isSelected) : ( isSelected ? selectRow.className : null);
    }

    if (Utils.isFunction(style)) {
      style = style(row, index);
    } else {
      style = { ...style } || {};
    }
    // the bgcolor of row selection always overwrite the bgcolor defined by global.
    if (style && backgroundColor && isSelected) {
      style.backgroundColor = backgroundColor;
    }
    const trCss = {
      style: { ...style },
      className: classSet(selectRowClass, className)
    };

    return (
      <tr { ...trCss }
          onMouseOver={ this.rowMouseOver }
          onMouseOut={ this.rowMouseOut }
          onClick={ this.rowClick }
          onDoubleClick={ this.rowDoubleClick }>{ this.props.children }</tr>
    );
  }
}
TableRow.propTypes = {
  index: PropTypes.number,
  row: PropTypes.any,
  style: PropTypes.any,
  isSelected: PropTypes.bool,
  enableCellEdit: PropTypes.bool,
  onRowClick: PropTypes.func,
  onRowDoubleClick: PropTypes.func,
  onSelectRow: PropTypes.func,
  onExpandRow: PropTypes.func,
  onRowMouseOut: PropTypes.func,
  onRowMouseOver: PropTypes.func,
  unselectableRow: PropTypes.bool
};
TableRow.defaultProps = {
  onRowClick: undefined,
  onRowDoubleClick: undefined
};
export default TableRow;
