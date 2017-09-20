/* eslint react/display-name: 0 */
import React from 'react';
import Const from './Const';
import classSet from 'classnames';

export default {
  renderReactSortCaret(order, isBootstrap4) {
    let orderClass;
    if (isBootstrap4) {
      orderClass = classSet('fa', {
        'fa-sort-asc': order === Const.SORT_ASC,
        'fa-sort-desc': order === Const.SORT_DESC
      });
      return (
        <span className={ orderClass } style={ { margin: '10px 5px' } }></span>
      );
    } else {
      orderClass = classSet('order', {
        'dropup': order === Const.SORT_ASC
      });
      return (
        <span className={ orderClass }>
          <span className='caret' style={ { margin: '10px 5px' } }></span>
        </span>
      );
    }
  },

  isFunction(obj) {
    return obj && (typeof obj === 'function');
  },

  getScrollBarWidth() {
    const inner = document.createElement('p');
    inner.style.width = '100%';
    inner.style.height = '200px';

    const outer = document.createElement('div');
    outer.style.position = 'absolute';
    outer.style.top = '0px';
    outer.style.left = '0px';
    outer.style.visibility = 'hidden';
    outer.style.width = '200px';
    outer.style.height = '150px';
    outer.style.overflow = 'hidden';
    outer.appendChild(inner);

    document.body.appendChild(outer);
    const w1 = inner.getBoundingClientRect().width;
    outer.style.overflow = 'scroll';
    let w2 = inner.getBoundingClientRect().width;

    if (w1 === w2) w2 = outer.clientWidth;

    document.body.removeChild(outer);

    return (w1 - w2);
  },

  canUseDOM() {
    return typeof window !== 'undefined' && typeof window.document !== 'undefined';
  },

  // We calculate an offset here in order to properly fetch the indexed data,
  // despite the page start index not always being 1
  getNormalizedPage(pageStartIndex, page) {
    pageStartIndex = this.getFirstPage(pageStartIndex);
    if (page === undefined) page = pageStartIndex;
    const offset = Math.abs(Const.PAGE_START_INDEX - pageStartIndex);
    return page + offset;
  },

  getFirstPage(pageStartIndex) {
    return pageStartIndex !== undefined ? pageStartIndex : Const.PAGE_START_INDEX;
  },

  isBootstrap4(version) {
    return version === '4';
  },

  renderColGroup(columns, selectRow, expandColumnOptions = {}, version) {
    let selectRowHeader = null;
    let expandRowHeader = null;
    const isBootstrap4 = this.isBootstrap4(version);
    const isSelectRowDefined = selectRow.mode === Const.ROW_SELECT_SINGLE ||
      selectRow.mode === Const.ROW_SELECT_MULTI;
    const columnWidth = isBootstrap4 ? '38px' : '30px';
    if (isSelectRowDefined) {
      const style = {
        width: selectRow.columnWidth || columnWidth,
        minWidth: selectRow.columnWidth || columnWidth
      };
      if (!selectRow.hideSelectColumn) {
        selectRowHeader = (<col key='select-col' style={ style }></col>);
      }
    }
    if (expandColumnOptions.expandColumnVisible) {
      const style = {
        width: expandColumnOptions.columnWidth || columnWidth,
        minWidth: expandColumnOptions.columnWidth || columnWidth
      };
      expandRowHeader = (<col key='expand-col' style={ style }></col>);
    }
    const theader = columns.map(function(column, i) {
      const style = {
        display: column.hidden ? 'none' : null
      };
      if (column.width) {
        const width = !isNaN(column.width) ? column.width + 'px' : column.width;
        style.width = width;
        /** add min-wdth to fix user assign column width
        not eq offsetWidth in large column table **/
        style.minWidth = width;
      }
      return (<col style={ style } key={ i }></col>);
    });

    return (
      <colgroup>
        { expandColumnOptions.expandColumnVisible &&
            expandColumnOptions.expandColumnBeforeSelectColumn &&
            expandRowHeader }
        { selectRowHeader }
        { expandColumnOptions.expandColumnVisible &&
            !expandColumnOptions.expandColumnBeforeSelectColumn &&
            expandRowHeader }
        { theader }
      </colgroup>
    );
  }
};
