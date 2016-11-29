const Resizable = function(el, header, onResizing, onStartResizing, onStopResizing) {
  onResizing = onResizing ? onResizing : function() { return; };
  onStartResizing = onStartResizing ? onStartResizing : function() { return; };
  onStopResizing = onStopResizing ? onStopResizing : function() { return; };

  const opts = header.props.resizeOptions;
  if (el.className.indexOf('resizable') === -1) {
    return;
  }
  const resizable = el;
  const resizer = resizable.querySelector('.resizer');

  let startX;
  let stopX;
  let startWidth;
  let stopWidth;

  const doDrag = function(e) {
    const newWidth = (startWidth + e.clientX - startX);
    if ((opts.minWidth && newWidth < opts.minWidth)
        || (opts.maxWidth && newWidth > opts.maxWidth)) {
      return;
    }
    resizable.style.width = newWidth + 'px';
    onResizing(e, newWidth);
  };

  const stopDrag = function(e) {
    stopX = e.clientX;
    stopWidth = parseInt(document.defaultView.getComputedStyle(resizable).width, 10);
    document.documentElement.removeEventListener('mousemove', doDrag, false);
    document.documentElement.removeEventListener('mouseup', stopDrag, false);
    onStopResizing(e, stopX, stopWidth);
  };

  const initDrag = function(e) {
    startX = e.clientX;
    startWidth = parseInt(document.defaultView.getComputedStyle(resizable).width, 10);
    document.documentElement.addEventListener('mousemove', doDrag, false);
    document.documentElement.addEventListener('mouseup', stopDrag, false);
    onStartResizing(e, startX, startWidth);
  };

  resizer.addEventListener('mousedown', initDrag, false);
};

export default Resizable;
