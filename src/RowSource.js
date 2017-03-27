export default {
  beginDrag(props) {
    return {
      rIndex: props.rIndex,
      rowId: props.rowId
    };
  },

  endDrag(props, monitor) {
    if (props.onDroppedRow) {
      const droppedRowId = monitor.getItem().rowId;
      const afterRowId = monitor.getDropResult().afterRowId;
      props.onDroppedRow(droppedRowId, afterRowId);
    }
  }
};
