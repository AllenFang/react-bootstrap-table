export default {
  beginDrag(props) {
    return {
      rIndex: props.rIndex
    };
  },

  endDrag(props, monitor) {
    if (props.onDroppedRow) {
      const dragIndex = props.rIndex;
      const dropIndex = monitor.getItem().rIndex;
      props.onDroppedRow(dragIndex, dropIndex);
    }
  }
};
