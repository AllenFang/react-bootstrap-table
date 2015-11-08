import React from 'react';
import Const from './Const';
import classSet from 'classnames';
export default {

  renderSortCaret(order) {
    var wrap = document.createElement("span");
    wrap.className = "order";
    if(order == Const.SORT_ASC) wrap.className += " dropup";
    var inner = document.createElement("span");
    inner.className = "caret";
    inner.style.margin = "10px 5px";
    wrap.appendChild(inner);
    return wrap;
  },

  renderReactSortCaret(order){
    var orderClass = classSet("order", {
      'dropup': order == Const.SORT_ASC
    });
    return (
      <span className={orderClass}>
        <span className="caret" style={{margin: '10px 5px'}}></span>
      </span>
    );
  },

  getScrollBarWidth(){
    var inner = document.createElement('p');
    inner.style.width = "100%";
    inner.style.height = "200px";

    var outer = document.createElement('div');
    outer.style.position = "absolute";
    outer.style.top = "0px";
    outer.style.left = "0px";
    outer.style.visibility = "hidden";
    outer.style.width = "200px";
    outer.style.height = "150px";
    outer.style.overflow = "hidden";
    outer.appendChild (inner);

    document.body.appendChild (outer);
    var w1 = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var w2 = inner.offsetWidth;
    if (w1 == w2) w2 = outer.clientWidth;

    document.body.removeChild (outer);

    return (w1 - w2);
  }

};
