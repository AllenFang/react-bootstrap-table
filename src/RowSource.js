export default {
  beginDrag(props) {
    return {
      rIndex: props.rIndex,
      rowId: props.rowId
    };
  },

  endDrag(props, monitor) {
    if(props.onDraggedRow) {
      const draggedRowId = monitor.getItem().rowId;
      const afterRowId = monitor.getDropResult().afterRowId;
      props.onDraggedRow(draggedRowId, afterRowId)
    }
  }
};
