import Const from './Const';
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
  }

};
