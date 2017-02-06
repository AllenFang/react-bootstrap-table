import React, { Component, PropTypes } from 'react';
import Const from './Const';

class TableColumn extends Component {

  constructor(props) {
    super(props);
  }
  /* eslint no-unused-vars: [0, { "args": "after-used" }] */
  shouldComponentUpdate(nextProps, nextState) {
    const { children } = this.props;
    let shouldUpdated = this.props.width !== nextProps.width
      || this.props.className !== nextProps.className
      || this.props.hidden !== nextProps.hidden
      || this.props.dataAlign !== nextProps.dataAlign
      || typeof children !== typeof nextProps.children
      || ('' + this.props.onEdit).toString() !== ('' + nextProps.onEdit).toString();

    if (shouldUpdated) {
      return shouldUpdated;
    }

    if (typeof children === 'object' && children !== null && children.props !== null) {
      if (children.props.type === 'checkbox' || children.props.type === 'radio') {
        shouldUpdated = shouldUpdated ||
          children.props.type !== nextProps.children.props.type ||
          children.props.checked !== nextProps.children.props.checked ||
          children.props.disabled !== nextProps.children.props.disabled;
      } else {
        shouldUpdated = true;
      }
    } else {
      shouldUpdated = shouldUpdated || children !== nextProps.children;
    }

    if (shouldUpdated) {
      return shouldUpdated;
    }

    if (!(this.props.cellEdit && nextProps.cellEdit)) {
      return false;
    } else {
      return shouldUpdated
        || this.props.cellEdit.mode !== nextProps.cellEdit.mode;
    }
  }

  handleCellEdit = e => {
    if (this.props.cellEdit.mode === Const.CELL_EDIT_DBCLICK) {
      if (document.selection && document.selection.empty) {
        document.selection.empty();
      } else if (window.getSelection) {
        const sel = window.getSelection();
        sel.removeAllRanges();
      }
    }
    this.props.onEdit(
      this.props.rIndex + 1, e.currentTarget.cellIndex, e);
    if (this.props.cellEdit.mode !== Const.CELL_EDIT_DBCLICK) {
      this.props.onClick(this.props.rIndex + 1, e.currentTarget.cellIndex, e);
    }
  }

  handleCellClick = e => {
    const { onClick, rIndex } = this.props;
    if (onClick) {
      onClick(rIndex + 1, e.currentTarget.cellIndex, e);
    }
  }

  render() {
    const {
      children,
      columnTitle,
      className,
      dataAlign,
      hidden,
      cellEdit,
      attrs,
      style
    } = this.props;

    const tdStyle = {
      textAlign: dataAlign,
      display: hidden ? 'none' : null,
      ...style
    };

    const opts = {};

    if (cellEdit) {
      if (cellEdit.mode === Const.CELL_EDIT_CLICK) {
        opts.onClick = this.handleCellEdit;
      } else if (cellEdit.mode === Const.CELL_EDIT_DBCLICK) {
        opts.onDoubleClick = this.handleCellEdit;
      } else {
        opts.onClick = this.handleCellClick;
      }
    }
    return (
      <td style={ tdStyle }
          title={ columnTitle }
          className={ className }
          { ...opts } { ...attrs }>
        { typeof children === 'boolean' ? children.toString() : children }
      </td>
    );
  }
}
TableColumn.propTypes = {
  rIndex: PropTypes.number,
  dataAlign: PropTypes.string,
  hidden: PropTypes.bool,
  className: PropTypes.string,
  columnTitle: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  attrs: PropTypes.object,
  style: PropTypes.object
};

TableColumn.defaultProps = {
  dataAlign: 'left',
  hidden: false,
  className: ''
};
export default TableColumn;
