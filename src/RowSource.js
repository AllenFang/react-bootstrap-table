export default {
  beginDrag(props) {
    return {
      rIndex: props.rIndex
    };
  },

  endDrag(props, monitor) {
    if(props.onDraggedRow) {
      const dragIndex = monitor.getItem().rIndex;
      const hoverIndex = props.rIndex;
      props.onDraggedRow(dragIndex, hoverIndex)
    }
  }
};
