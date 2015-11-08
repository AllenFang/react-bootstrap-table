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
  }

};
