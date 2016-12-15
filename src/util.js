import React from 'react';
import Const from './Const';
import classSet from 'classnames';

export default {
  getReactSortCaret(order, sortIndicator, dataSort) {
    let defaultCaret = '';
    if (sortIndicator) {
      defaultCaret = (!dataSort) ? null : (
          <span className='order'>
          <span className='dropdown'>
            <span className='caret' style={ { margin: '10px 0 10px 5px', color: '#ccc' } }></span>
          </span>
          <span className='dropup'>
            <span className='caret' style={ { margin: '10px 0', color: '#ccc' } }></span>
          </span>
        </span>
      );
    }
    return order ? this.renderReactSortCaret(order) : defaultCaret;
  },

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
    const w1 = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    let w2 = inner.offsetWidth;
    if (w1 === w2) w2 = outer.clientWidth;

    document.body.removeChild(outer);

    return (w1 - w2);
  },

  canUseDOM() {
    return typeof window !== 'undefined' && typeof window.document !== 'undefined';
  }
};
