const CONST_VAR = {
  SORT_DESC: 'desc',
  SORT_ASC: 'asc',
  AWAIT_BEFORE_CELL_EDIT: 1,
  SIZE_PER_PAGE: 10,
  NEXT_PAGE: '>',
  NEXT_PAGE_TITLE: 'next page',
  LAST_PAGE: '>>',
  LAST_PAGE_TITLE: 'last page',
  PRE_PAGE: '<',
  PRE_PAGE_TITLE: 'previous page',
  FIRST_PAGE: '<<',
  FIRST_PAGE_TITLE: 'first page',
  PAGE_START_INDEX: 1,
  ROW_SELECT_BG_COLOR: '',
  ROW_SELECT_NONE: 'none',
  ROW_SELECT_SINGLE: 'radio',
  ROW_SELECT_MULTI: 'checkbox',
  CELL_EDIT_NONE: 'none',
  CELL_EDIT_CLICK: 'click',
  CELL_EDIT_DBCLICK: 'dbclick',
  SIZE_PER_PAGE_LIST: [ 10, 25, 30, 50 ],
  PAGINATION_SIZE: 5,
  PAGINATION_POS_TOP: 'top',
  PAGINATION_POS_BOTTOM: 'bottom',
  PAGINATION_POS_BOTH: 'both',
  TOOLBAR_POS_TOP: 'top',
  TOOLBAR_POS_BOTTOM: 'bottom',
  TOOLBAR_POS_BOTH: 'both',
  NO_DATA_TEXT: 'There is no data to display',
  SHOW_ONLY_SELECT: 'Show Selected Only',
  SHOW_ALL: 'Show All',
  EXPORT_CSV_TEXT: 'Export to CSV',
  INSERT_BTN_TEXT: 'New',
  DELETE_BTN_TEXT: 'Delete',
  SAVE_BTN_TEXT: 'Save',
  CLOSE_BTN_TEXT: 'Close',
  FILTER_DELAY: 500,
  SCROLL_TOP: 'Top',
  SCROLL_BOTTOM: 'Bottom',
  FILTER_TYPE: {
    TEXT: 'TextFilter',
    REGEX: 'RegexFilter',
    SELECT: 'SelectFilter',
    NUMBER: 'NumberFilter',
    DATE: 'DateFilter',
    CUSTOM: 'CustomFilter',
    ARRAY: 'ArrayFilter'
  },
  FILTER_COND_EQ: 'eq',
  FILTER_COND_LIKE: 'like',
  EXPAND_BY_ROW: 'row',
  EXPAND_BY_COL: 'column',
  REMOTE_SORT: 'sort',
  REMOTE_PAGE: 'pagination',
  REMOTE_CELL_EDIT: 'cellEdit',
  REMOTE_INSERT_ROW: 'insertRow',
  REMOTE_DROP_ROW: 'dropRow',
  REMOTE_FILTER: 'filter',
  REMOTE_SEARCH: 'search',
  REMOTE_EXPORT_CSV: 'exportCSV',
  INSERT_FAIL_INDICATOR: 'Validation errors, please check!',
  DEFAULT_CSV_SEPARATOR: ',',
  CSV_STRING_TYPE: 'string',
  CSV_NUMBER_TYPE: 'number',
  AUTO_COLLAPSE_WHEN_SORT: false,
  AUTO_COLLAPSE_WHEN_SEARCH: false,
  AUTO_COLLAPSE_WHEN_FILTER: false
};

CONST_VAR.REMOTE = {};
CONST_VAR.REMOTE[CONST_VAR.REMOTE_SORT] = false;
CONST_VAR.REMOTE[CONST_VAR.REMOTE_PAGE] = false;
CONST_VAR.REMOTE[CONST_VAR.REMOTE_CELL_EDIT] = false;
CONST_VAR.REMOTE[CONST_VAR.REMOTE_INSERT_ROW] = false;
CONST_VAR.REMOTE[CONST_VAR.REMOTE_DROP_ROW] = false;
CONST_VAR.REMOTE[CONST_VAR.REMOTE_FILTER] = false;
CONST_VAR.REMOTE[CONST_VAR.REMOTE_SEARCH] = false;
CONST_VAR.REMOTE[CONST_VAR.REMOTE_EXPORT_CSV] = false;

export default CONST_VAR;
