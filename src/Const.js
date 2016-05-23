import React from 'react';

export default {
  SORT_DESC: 'desc',
  SORT_ASC: 'asc',
  SIZE_PER_PAGE: 10,
  NEXT_PAGE: '>',
  LAST_PAGE: '>>',
  PRE_PAGE: '<',
  FIRST_PAGE: '<<',
  ROW_SELECT_BG_COLOR: '',
  ROW_SELECT_NONE: 'none',
  ROW_SELECT_SINGLE: 'radio',
  ROW_SELECT_MULTI: 'checkbox',
  CELL_EDIT_NONE: 'none',
  CELL_EDIT_CLICK: 'click',
  CELL_EDIT_DBCLICK: 'dbclick',
  SIZE_PER_PAGE_LIST: [ 10, 25, 30, 50 ],
  PAGINATION_SIZE: 5,
  NO_DATA_TEXT: 'There is no data to display',
  SHOW_ONLY_SELECT: 'Show Selected Only',
  SHOW_ALL: 'Show All',
  EXPORT_CSV_TEXT: <span><i className='glyphicon glyphicon-export'></i> Export to CSV</span>,
  INSERT_BTN_TEXT: <span><i className='glyphicon glyphicon-plus'></i> New</span>,
  DELETE_BTN_TEXT: <span><i className='glyphicon glyphicon-trash'></i> Delete</span>,
  SAVE_BTN_TEXT: 'Save',
  CLOSE_BTN_TEXT: 'Close',
  FILTER_DELAY: 500,
  FILTER_TYPE: {
    TEXT: 'TextFilter',
    REGEX: 'RegexFilter',
    SELECT: 'SelectFilter',
    NUMBER: 'NumberFilter',
    DATE: 'DateFilter',
    CUSTOM: 'CustomFilter'
  }
};
