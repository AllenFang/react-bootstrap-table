const Resizable = function(el) {
  if (el.className.indexOf('resizable') === -1) {
    return;
  }
  const resizable = el;
  const resizer = resizable.querySelector('.resizer');

  let startX;
  let startWidth;

  const doDrag = function(e) {
    resizable.style.width = (startWidth + e.clientX - startX) + 'px';
  };

  const stopDrag = function() {
    document.documentElement.removeEventListener('mousemove', doDrag, false);
    document.documentElement.removeEventListener('mouseup', stopDrag, false);
  };

  const initDrag = function(e) {
    startX = e.clientX;
    startWidth = parseInt(document.defaultView.getComputedStyle(resizable).width, 10);
    document.documentElement.addEventListener('mousemove', doDrag, false);
    document.documentElement.addEventListener('mouseup', stopDrag, false);
  };

  resizer.addEventListener('mousedown', initDrag, false);
};

export default Resizable;
