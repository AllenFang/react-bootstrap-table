import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Const from './Const';
import Util from './util';

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
      || this.props.isFocus !== nextProps.isFocus
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

  componentDidMount() {
    const dom = ReactDOM.findDOMNode(this);
    if (this.props.isFocus) {
      dom.focus();
    } else {
      dom.blur();
    }
  }

  componentDidUpdate() {
    const dom = ReactDOM.findDOMNode(this);
    if (this.props.isFocus) {
      dom.focus();
    } else {
      dom.blur();
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

  handleKeyDown = e => {
    if (this.props.keyBoardNav) {
      this.props.onKeyDown(e);
    }
  }

  render() {
    const {
      children,
      columnTitle,
      dataAlign,
      hidden,
      cellEdit,
      attrs,
      style,
      isFocus,
      keyBoardNav,
      tabIndex,
      customNavStyle,
      withoutTabIndex,
      row
    } = this.props;

    let { className } = this.props;

    let tdStyle = {
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

    if (keyBoardNav && isFocus) {
      opts.onKeyDown = this.handleKeyDown;
    }

    if (isFocus) {
      if (customNavStyle) {
        const cusmtStyle = Util.isFunction(customNavStyle) ?
          customNavStyle(children, row) : customNavStyle;
        tdStyle = {
          ...tdStyle,
          ...cusmtStyle
        };
      } else {
        className = `${className} default-focus-cell`;
      }
    }

    const attr = {};
    if (!withoutTabIndex) attr.tabIndex = tabIndex;
    return (
      <td { ...attr } style={ tdStyle }
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
  style: PropTypes.object,
  isFocus: PropTypes.bool,
  onKeyDown: PropTypes.func,
  tabIndex: PropTypes.string,
  withoutTabIndex: PropTypes.bool,
  keyBoardNav: PropTypes.oneOfType([ PropTypes.bool, PropTypes.object ]),
  customNavStyle: PropTypes.oneOfType([ PropTypes.func, PropTypes.object ]),
  row: PropTypes.any  /* only used on custom styling for navigation */
};

TableColumn.defaultProps = {
  dataAlign: 'left',
  withoutTabIndex: false,
  hidden: false,
  className: '',
  isFocus: false,
  keyBoardNav: false
};
export default TableColumn;
