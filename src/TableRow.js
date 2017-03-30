import classSet from 'classnames';
import React, { Component, PropTypes } from 'react';
import { DropTarget } from 'react-dnd';
import RowTypes from './RowTypes';

const rowTarget = {
  drop() {
    return {};
  },

  hover(props, monitor) {
    const dragIndex = monitor.getItem().rIndex;
    const hoverIndex = props.rIndex;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Time to actually perform the action
    props.dragRow(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive rIndex searches.
    monitor.getItem().rIndex = hoverIndex;
  }
};

@DropTarget(RowTypes.ROW, rowTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isHovering: monitor.isOver({ shallow: true })
}))
class TableRow extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    dragRow: PropTypes.func.isRequired,
    isHovering: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props);
    this.clickNum = 0;
  }

  rowClick = e => {
    const rowIndex = this.props.index + 1;
    const cellIndex = e.target.cellIndex;
    if (this.props.onRowClick) this.props.onRowClick(rowIndex, cellIndex);
    const { selectRow, unselectableRow, isSelected, onSelectRow, onExpandRow } = this.props;
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
        this.expandRow(rowIndex, cellIndex);
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
    const { connectDropTarget, isHovering } = this.props;

    const trCss = {
      style: {
        backgroundColor: this.props.isSelected ? this.props.selectRow.bgColor : null,
        borderBottom: isHovering ? '2px solid' : null
      },
      className: classSet(
        this.props.isSelected ? this.props.selectRow.className : null,
        this.props.className
      )
    };

    return (
      connectDropTarget(
        <tr { ...trCss }
          onMouseOver={ this.rowMouseOver }
          onMouseOut={ this.rowMouseOut }
          onClick={ this.rowClick }
          onDoubleClick={ this.rowDoubleClick }>{ this.props.children }</tr>)
    );
  }
}
TableRow.propTypes = {
  index: PropTypes.number,
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
