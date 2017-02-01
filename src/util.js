/* eslint react/display-name: 0 */
import React from 'react';
import Const from './Const';
import classSet from 'classnames';

export default {
  renderReactSortCaret(order) {
    const orderClass = classSet('order', {
      'dropup': order === Const.SORT_ASC
    });
    return (
      <span className={ orderClass }>
        <span className='caret' style={ { margin: '10px 5px' } }></span>
      </span>
    );
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

  renderColGroup(columns, selectRow) {
    let selectRowHeader = null;
    const isSelectRowDefined = selectRow.mode === Const.ROW_SELECT_SINGLE ||
      selectRow.mode === Const.ROW_SELECT_MULTI;
    if (isSelectRowDefined) {
      const style = {
        width: selectRow.columnWidth || 30,
        minWidth: selectRow.columnWidth || 30
      };
      if (!selectRow.hideSelectColumn) {
        selectRowHeader = (<col style={ style } key={ -1 }></col>);
      }
    }
    const theader = columns.map(function(column, i) {
      const style = {
        display: column.hidden ? 'none' : null
      };
      if (column.width) {
        style.width = column.width;
        /** add min-wdth to fix user assign column width
        not eq offsetWidth in large column table **/
        style.minWidth = column.width;
      }
      return (<col style={ style } key={ i } className={ column.className }></col>);
    });

    return (
      <colgroup>
        { selectRowHeader }{ theader }
      </colgroup>
    );
  }
};
