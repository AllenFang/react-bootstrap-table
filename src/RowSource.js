export default {
  beginDrag(props) {
    return {
      rIndex: props.rIndex
    };
  },

  endDrag(props, monitor) {
    if (props.onDroppedRow) {
      const droppedRowId = props.rIndex;
      const afterRowId = monitor.getItem().rIndex;
      props.onDroppedRow(droppedRowId, afterRowId);
    }
  }
};
