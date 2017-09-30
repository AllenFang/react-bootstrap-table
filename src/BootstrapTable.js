/* eslint no-alert: 0 */
/* eslint max-len: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classSet from 'classnames';
import Alert from 'react-s-alert';
import Const from './Const';
import TableHeaderColumn from './TableHeaderColumn';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import PaginationList from './pagination/PaginationList';
import ToolBar from './toolbar/ToolBar';
import TableFilter from './TableFilter';
import { TableDataStore } from './store/TableDataStore';
import Util from './util';
import exportCSVUtil from './csv_export_util';
import { Filter } from './Filter';


class BootstrapTable extends Component {

  constructor(props) {
    super(props);
    this.isIE = false;
    if (Util.canUseDOM()) {
      this.isIE = document.documentMode;
    }
    this.store = new TableDataStore(this.props.data ? this.props.data.slice() : []);
    this.isVerticalScroll = false;
    this.initTable(this.props);

    if (this.props.selectRow && this.props.selectRow.selected) {
      const copy = this.props.selectRow.selected.slice();
      this.store.setSelectedRowKey(copy);
    }
    let currPage = Const.PAGE_START_INDEX;
    if (typeof this.props.options.page !== 'undefined') {
      currPage = this.props.options.page;
    } else if (typeof this.props.options.pageStartIndex !== 'undefined') {
      currPage = this.props.options.pageStartIndex;
    }

    this._adjustHeaderWidth = this._adjustHeaderWidth.bind(this);
    this._adjustHeight = this._adjustHeight.bind(this);
    this._adjustTable = this._adjustTable.bind(this);

    this.state = {
      data: this.getTableData(),
      currPage: currPage,
      expanding: this.props.options.expanding || [],
      sizePerPage: this.props.options.sizePerPage || Const.SIZE_PER_PAGE_LIST[0],
      selectedRowKeys: this.store.getSelectedRowKeys(),
      reset: false,
      x: this.props.keyBoardNav ? 0 : -1,
      y: this.props.keyBoardNav ? 0 : -1
    };
  }

  initTable(props) {
    // If columns changed, clean removed columns that had filters
    if (props.children !== this.props.children && this.filter) {
      const nextDataFields = React.Children.map(props.children, column => column.props.dataField);
      React.Children.forEach(this.props.children, column => {
        const { dataField, filter } = column.props;
        if (!nextDataFields.includes(dataField)) {
          // Clear filter
          this.filter.handleFilter(dataField, '', filter.type, filter);
        }
      });
    }

    let { keyField } = props;

    const isKeyFieldDefined = typeof keyField === 'string' && keyField.length;
    React.Children.forEach(props.children, column => {
      if (column === null || column === undefined) {
        // Skip null and undefined value
        return;
      }
      if (column.props.isKey) {
        if (keyField) {
          throw new Error('Error. Multiple key column detected in TableHeaderColumn.');
        }
        keyField = column.props.dataField;
      }
      if (column.props.filter) {
        // a column contains a filter
        if (!this.filter) {
          // first time create the filter on the BootstrapTable
          this.filter = new Filter();
        }
        // pass the filter to column with filter
        column.props.filter.emitter = this.filter;
      }
    });

    // if a column filter was created, add 'onFilterChange' listener
    if (this.filter) {
      this.filter.removeAllListeners('onFilterChange');
      this.filter.on('onFilterChange', (currentFilter) => {
        this.handleFilterData(currentFilter);
      });
    }

    this.colInfos = this.getColumnsDescription(props).reduce(( prev, curr ) => {
      prev[curr.name] = curr;
      return prev;
    }, {});

    if (!isKeyFieldDefined && !keyField) {
      throw new Error(`Error. No any key column defined in TableHeaderColumn.
            Use 'isKey={true}' to specify a unique column after version 0.5.4.`);
    }

    this.store.setProps({
      isPagination: props.pagination,
      keyField: keyField,
      colInfos: this.colInfos,
      multiColumnSearch: props.multiColumnSearch,
      strictSearch: props.strictSearch,
      multiColumnSort: props.multiColumnSort,
      remote: this.props.remote
    });
  }

  getTableData() {
    let result = [];
    const { options, pagination } = this.props;
    const sortName = options.defaultSortName || options.sortName;
    const sortOrder = options.defaultSortOrder || options.sortOrder;
    const searchText = options.defaultSearch;

    if (sortName && sortOrder) {
      this.store.setSortInfo(sortOrder, sortName);
      if (!this.allowRemote(Const.REMOTE_SORT)) {
        this.store.sort();
      }
    }

    if (searchText) {
      this.store.search(searchText);
    }

    if (pagination) {
      let page;
      let sizePerPage;
      if (this.store.isChangedPage()) {
        sizePerPage = this.state.sizePerPage;
        page = this.state.currPage;
      } else {
        sizePerPage = options.sizePerPage || Const.SIZE_PER_PAGE_LIST[0];
        page = options.page || 1;
      }
      result = this.store.page(page, sizePerPage).get();
    } else {
      result = this.store.get();
    }
    return result;
  }

  getColumnsDescription({ children }) {
    let rowCount = 0;
    React.Children.forEach(children, (column) => {
      if (column === null || column === undefined) {
        // Skip null and undefined value
        return;
      }

      if (Number(column.props.row) > rowCount) {
        rowCount = Number(column.props.row);
      }
    });
    return React.Children.map(children, (column, i) => {
      if (column === null || column === undefined) {
        // Return null for empty objects
        return null;
      }

      const rowIndex = column.props.row ? Number(column.props.row) : 0;
      const rowSpan = column.props.rowSpan ? Number(column.props.rowSpan) : 1;
      if ((rowSpan + rowIndex) === (rowCount + 1)) {
        const columnDescription = this.getColumnDescription(column);

        columnDescription.index = i;
        return columnDescription;
      }
    });
  }

  getColumnDescription(column) {
    let columnDescription = {
      name: column.props.dataField,
      align: column.props.dataAlign,
      sort: column.props.dataSort,
      format: column.props.dataFormat,
      formatExtraData: column.props.formatExtraData,
      filterFormatted: column.props.filterFormatted,
      filterValue: column.props.filterValue,
      editable: column.props.editable,
      customEditor: column.props.customEditor,
      hidden: column.props.hidden,
      hiddenOnInsert: column.props.hiddenOnInsert,
      searchable: column.props.searchable,
      className: column.props.columnClassName,
      editClassName: column.props.editColumnClassName,
      invalidEditColumnClassName: column.props.invalidEditColumnClassName,
      columnTitle: column.props.columnTitle,
      width: column.props.width,
      text: column.props.headerText || column.props.children,
      sortFunc: column.props.sortFunc,
      sortFuncExtraData: column.props.sortFuncExtraData,
      export: column.props.export,
      expandable: column.props.expandable,
      attrs: column.props.tdAttr,
      editAttrs: column.props.editTdAttr,
      style: column.props.tdStyle
    };

    if (column.type.name !== TableHeaderColumn.name && React.isValidElement(column.props.children)) {
      columnDescription = {
        ...columnDescription,
        ...this.getColumnDescription(React.Children.only(column.props.children))
      };
    }

    return columnDescription;
  }

  reset() {
    const { pageStartIndex } = this.props.options;
    this.store.clean();
    this.refs.body.setState({ currEditCell: null });
    this.setState(() => {
      return {
        data: this.getTableData(),
        currPage: Util.getFirstPage(pageStartIndex),
        expanding: [],
        sizePerPage: Const.SIZE_PER_PAGE_LIST[0],
        selectedRowKeys: [],
        reset: true
      };
    });
  }

  componentWillReceiveProps(nextProps) {
    this.initTable(nextProps);
    const { options, selectRow } = nextProps;
    let { replace } = nextProps;
    replace = replace || this.props.replace;

    if (!nextProps.data) {
      return;
    }
    this.store.setData(nextProps.data.slice());

    if (!replace) {
      // from #481
      let page = this.state.currPage;
      if (this.props.options.page !== options.page) {
        page = options.page;
      }
      // from #481
      let sizePerPage = this.state.sizePerPage;
      if (this.props.options.sizePerPage !== options.sizePerPage) {
        sizePerPage = options.sizePerPage;
      }

      if (this.isRemoteDataSource()) {
        const newState = { sizePerPage, reset: false, currPage: page };
        let data = nextProps.data.slice();
        if (nextProps.pagination && !this.allowRemote(Const.REMOTE_PAGE)) {
          data = this.store.page(page, sizePerPage).get();
        }

        if (this.store.isOnFilter) {
          if (this.store.searchText) this.handleSearch(this.store.searchText);
          if (this.store.filterObj) this.handleFilterData(this.store.filterObj);
          newState.currPage = Util.getFirstPage(nextProps.options.pageStartIndex);
        } else {
          newState.data = data;
        }
        this.setState(() => newState);
      } else {
        // #125
        // remove !options.page for #709
        if (page > Math.ceil(nextProps.data.length / sizePerPage)) {
          page = 1;
        }
        const sortList = this.store.getSortInfo();
        const sortField = options.sortName;
        const sortOrder = options.sortOrder;
        if (sortField && sortOrder) {
          this.store.setSortInfo(sortOrder, sortField);
          this.store.sort();
        } else if (sortList.length > 0) {
          this.store.sort();
        }
        const data = this.store.page(page, sizePerPage).get();
        this.setState(() => {
          return {
            data,
            currPage: page,
            sizePerPage,
            reset: false
          };
        });

        if (this.store.isSearching && options.afterSearch) {
          options.afterSearch(this.store.searchText, this.store.getDataIgnoringPagination());
        }

        if (this.store.isFiltering && options.afterColumnFilter) {
          options.afterColumnFilter(this.store.filterObj, this.store.getDataIgnoringPagination());
        }
      }

      // If setting the expanded rows is being handled externally
      // then overwrite the current expanded rows.
      if (this.props.options.expanding !== options.expanding) {
        this.setState(() => {
          return {
            expanding: options.expanding || []
          };
        });
      }

      if (selectRow && selectRow.selected) {
        // set default select rows to store.
        const copy = selectRow.selected.slice();
        this.store.setSelectedRowKey(copy);
        this.setState(() => {
          return {
            selectedRowKeys: copy,
            reset: false
          };
        });
      }
    } else {
      this.reset();
    }
  }

  componentDidMount() {
    this._adjustTable();
    window.addEventListener('resize', this._adjustTable);
    this.refs.body.refs.container.addEventListener('scroll', this._scrollHeader);
    if (this.props.scrollTop) {
      this._scrollTop();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._adjustTable);
    if (this.refs && this.refs.body && this.refs.body.refs) {
      this.refs.body.refs.container.removeEventListener('scroll', this._scrollHeader);
    }
    if (this.filter) {
      this.filter.removeAllListeners('onFilterChange');
    }
  }

  componentDidUpdate() {
    this._adjustTable();
    if (this.props.options.afterTableComplete) {
      this.props.options.afterTableComplete();
    }
  }

  /**
   * Returns true if in the current configuration,
   * the datagrid should load its data remotely.
   *
   * @param  {Object}  [props] Optional. If not given, this.props will be used
   * @return {Boolean}
   */
  isRemoteDataSource(props) {
    const { remote } = (props || this.props);
    return remote === true || Util.isFunction(remote);
  }

  /**
   * Returns true if this action can be handled remote store
   * From #990, Sometimes, we need some actions as remote, some actions are handled by default
   * so function will tell you the target action is can be handled as remote or not.
   * @param  {String}  [action] Required.
   * @param  {Object}  [props] Optional. If not given, this.props will be used
   * @return {Boolean}
   */
  allowRemote(action, props) {
    const { remote } = (props || this.props);
    if (typeof remote === 'function') {
      const remoteObj = remote(Const.REMOTE);
      return remoteObj[action];
    } else {
      return remote;
    }
  }

  render() {
    const style = {
      height: this.props.height,
      maxHeight: this.props.maxHeight
    };

    const columns = this.getColumnsDescription(this.props);
    const sortList = this.store.getSortInfo();
    const pagination = this.renderPagination();
    const toolBar = this.renderToolBar();
    const tableFilter = this.renderTableFilter(columns);
    const isSelectAll = this.isSelectAll();
    const expandColumnOptions = this.props.expandColumnOptions;
    if (typeof expandColumnOptions.expandColumnBeforeSelectColumn === 'undefined') {
      expandColumnOptions.expandColumnBeforeSelectColumn = true;
    }
    const colGroups = Util.renderColGroup(columns, this.props.selectRow, expandColumnOptions, this.props.version);
    let sortIndicator = this.props.options.sortIndicator;
    if (typeof this.props.options.sortIndicator === 'undefined') sortIndicator = true;

    const { paginationPosition = Const.PAGINATION_POS_BOTTOM } = this.props.options;
    const showPaginationOnTop = paginationPosition !== Const.PAGINATION_POS_BOTTOM;
    const showPaginationOnBottom = paginationPosition !== Const.PAGINATION_POS_TOP;
    const selectRow = { ...this.props.selectRow };
    if (this.props.cellEdit && this.props.cellEdit.mode !== Const.CELL_EDIT_NONE) {
      selectRow.clickToSelect = false;
    }

    const { toolbarPosition = Const.TOOLBAR_POS_TOP } = this.props.options;
    const showToolbarOnTop = toolbarPosition !== Const.TOOLBAR_POS_BOTTOM;
    const showToolbarOnBottom = toolbarPosition !== Const.TOOLBAR_POS_TOP;

    return (
      <div className={ classSet('react-bs-table-container', this.props.className, this.props.containerClass) }
        style={ this.props.containerStyle }>
        { showToolbarOnTop ? toolBar : null }
        { showPaginationOnTop ? pagination : null }
        <div ref='table'
            className={ classSet('react-bs-table', { 'react-bs-table-bordered': this.props.bordered }, this.props.tableContainerClass) }
            style={ { ...style, ...this.props.tableStyle } }
            onMouseEnter={ this.handleMouseEnter }
            onMouseLeave={ this.handleMouseLeave }>
          <TableHeader
            ref='header'
            version={ this.props.version }
            colGroups={ colGroups }
            headerContainerClass={ this.props.headerContainerClass }
            tableHeaderClass={ this.props.tableHeaderClass }
            style={ this.props.headerStyle }
            rowSelectType={ this.props.selectRow.mode }
            customComponent={ this.props.selectRow.customComponent }
            hideSelectColumn={ this.props.selectRow.hideSelectColumn }
            sortList={ sortList }
            sortIndicator={ sortIndicator }
            onSort={ this.handleSort }
            onSelectAllRow={ this.handleSelectAllRow }
            bordered={ this.props.bordered }
            condensed={ this.props.condensed }
            isFiltered={ this.filter ? true : false }
            isSelectAll={ isSelectAll }
            reset={ this.state.reset }
            expandColumnVisible={ expandColumnOptions.expandColumnVisible }
            expandColumnComponent={ expandColumnOptions.expandColumnComponent }
            expandColumnBeforeSelectColumn={ expandColumnOptions.expandColumnBeforeSelectColumn }>
            { this.props.children }
          </TableHeader>
          <TableBody ref='body'
            bodyContainerClass={ this.props.bodyContainerClass }
            tableBodyClass={ this.props.tableBodyClass }
            style={ { ...style, ...this.props.bodyStyle } }
            data={ this.state.data }
            version={ this.props.version }
            expandComponent={ this.props.expandComponent }
            expandableRow={ this.props.expandableRow }
            expandRowBgColor={ this.props.options.expandRowBgColor }
            expandBy={ this.props.options.expandBy || Const.EXPAND_BY_ROW }
            expandBodyClass={ this.props.options.expandBodyClass }
            expandParentClass={ this.props.options.expandParentClass }
            columns={ columns }
            trClassName={ this.props.trClassName }
            trStyle={ this.props.trStyle }
            striped={ this.props.striped }
            bordered={ this.props.bordered }
            hover={ this.props.hover }
            keyField={ this.store.getKeyField() }
            condensed={ this.props.condensed }
            selectRow={ selectRow }
            expandColumnOptions={ this.props.expandColumnOptions }
            cellEdit={ this.props.cellEdit }
            selectedRowKeys={ this.state.selectedRowKeys }
            onRowClick={ this.handleRowClick }
            onRowDoubleClick={ this.handleRowDoubleClick }
            onRowMouseOver={ this.handleRowMouseOver }
            onRowMouseOut={ this.handleRowMouseOut }
            onSelectRow={ this.handleSelectRow }
            noDataText={ this.props.options.noDataText }
            withoutNoDataText={ this.props.options.withoutNoDataText }
            expanding={ this.state.expanding }
            onExpand={ this.handleExpandRow }
            onlyOneExpanding={ this.props.options.onlyOneExpanding }
            beforeShowError={ this.props.options.beforeShowError }
            keyBoardNav={ this.props.keyBoardNav }
            onNavigateCell={ this.handleNavigateCell }
            x={ this.state.x }
            y={ this.state.y }
            withoutTabIndex={ this.props.withoutTabIndex }
            onEditCell={ this.handleEditCell } />
        </div>
        { tableFilter }
        { showPaginationOnBottom ? pagination : null }

        { showToolbarOnBottom ? toolBar : null }
        <Alert stack={ { limit: 3 } } />
      </div>
    );
  }

  isSelectAll() {
    if (this.store.isEmpty()) return false;
    const { selectRow: { unselectable, onlyUnselectVisible } } = this.props;
    const keyField = this.store.getKeyField();
    const allRowKeys = onlyUnselectVisible ?
      this.store.get().map(r => r[keyField]) :
      this.store.getAllRowkey();
    let defaultSelectRowKeys = this.store.getSelectedRowKeys();

    if (onlyUnselectVisible) {
      defaultSelectRowKeys = defaultSelectRowKeys.filter(x => x !== allRowKeys);
    }

    if (defaultSelectRowKeys.length === 0) return false;
    let match = 0;
    let noFound = 0;
    let unSelectableCnt = 0;
    defaultSelectRowKeys.forEach(selected => {
      if (allRowKeys.indexOf(selected) !== -1) match++;
      else noFound++;
      if (unselectable &&
        unselectable.indexOf(selected) !== -1) unSelectableCnt++;
    });

    if (noFound === defaultSelectRowKeys.length) return false;
    if (match === allRowKeys.length) {
      return true;
    } else {
      if (unselectable && match <= unSelectableCnt &&
        unSelectableCnt === unselectable.length) return false;
      else return 'indeterminate';
    }
    // return (match === allRowKeys.length) ? true : 'indeterminate';
  }

  cleanSelected() {
    this.store.setSelectedRowKey([]);
    this.setState(() => {
      return {
        selectedRowKeys: [],
        reset: false
      };
    });
  }

  cleanSort() {
    this.store.cleanSortInfo();
    this.setState(() => {
      return {
        reset: false
      };
    });
  }

  handleSort = (order, sortField) => {
    const { autoCollapse: { sort }, options } = this.props;
    if (options.onSortChange) {
      options.onSortChange(sortField, order, this.props);
    }
    this.store.setSortInfo(order, sortField);
    if (this.allowRemote(Const.REMOTE_SORT)) {
      if (sort) {
        this.setState(() => {
          return {
            expanding: []
          };
        });
      }
      return;
    }

    const result = this.store.sort().get();
    this.setState(() => {
      const newState = {
        data: result,
        reset: false
      };
      if (sort) newState.expanding = [];
      return newState;
    });
  }

  handleExpandRow = (expanding, rowKey, isRowExpanding) => {
    const { onExpand } = this.props.options;
    if (onExpand) {
      onExpand(rowKey, !isRowExpanding);
    }
    this.setState(() => { return { expanding, reset: false }; }, () => {
      this._adjustHeaderWidth();
    });
  }

  handlePaginationData = (page, sizePerPage) => {
    const { onPageChange, pageStartIndex } = this.props.options;
    const emptyTable = this.store.isEmpty();
    if (onPageChange) {
      onPageChange(page, sizePerPage);
    }

    const state = {
      sizePerPage,
      reset: false
    };
    if (!emptyTable) state.currPage = page;
    this.setState(() => state);

    if (this.allowRemote(Const.REMOTE_PAGE) || emptyTable) {
      return;
    }

    const result = this.store.page(Util.getNormalizedPage(pageStartIndex, page), sizePerPage).get();
    this.setState(() => { return { data: result, reset: false }; });
  }

  handleMouseLeave = () => {
    if (this.props.options.onMouseLeave) {
      this.props.options.onMouseLeave();
    }
  }

  handleMouseEnter = () => {
    if (this.props.options.onMouseEnter) {
      this.props.options.onMouseEnter();
    }
  }

  handleRowMouseOut = (row, event) => {
    if (this.props.options.onRowMouseOut) {
      this.props.options.onRowMouseOut(row, event);
    }
  }

  handleRowMouseOver = (row, event) => {
    if (this.props.options.onRowMouseOver) {
      this.props.options.onRowMouseOver(row, event);
    }
  }

  handleNavigateCell = ({ x: offSetX, y: offSetY, lastEditCell }) => {
    const { pagination } = this.props;
    let { x, y, currPage } = this.state;
    x += offSetX;
    y += offSetY;

    const columns = this.store.getColInfos();
    const visibleRowSize = this.state.data.length;
    const visibleColumnSize = Object.keys(columns).filter(k => !columns[k].hidden).length;

    if (y >= visibleRowSize) {
      currPage++;
      const lastPage = pagination ? this.refs.pagination.getLastPage() : -1;
      if (currPage <= lastPage) {
        this.handlePaginationData(currPage, this.state.sizePerPage);
      } else {
        return;
      }
      y = 0;
    } else if (y < 0) {
      currPage--;
      if (currPage > 0) {
        this.handlePaginationData(currPage, this.state.sizePerPage);
      } else {
        return;
      }
      y = visibleRowSize - 1;
    } else if (x >= visibleColumnSize) {
      if ((y + 1) === visibleRowSize) {
        currPage++;
        const lastPage = pagination ? this.refs.pagination.getLastPage() : -1;
        if (currPage <= lastPage) {
          this.handlePaginationData(currPage, this.state.sizePerPage);
        } else {
          return;
        }
        y = 0;
      } else {
        y++;
      }
      x = lastEditCell ? 1 : 0;
    } else if (x < 0) {
      x = visibleColumnSize - 1;
      if (y === 0) {
        currPage--;
        if (currPage > 0) {
          this.handlePaginationData(currPage, this.state.sizePerPage);
        } else {
          return;
        }
        y = this.state.sizePerPage - 1;
      } else {
        y--;
      }
    }
    this.setState(() => {
      return {
        x, y, currPage, reset: false
      };
    });
  }

  handleRowClick = (row, rowIndex, columnIndex) => {
    const { options, keyBoardNav } = this.props;
    if (options.onRowClick) {
      options.onRowClick(row, columnIndex, rowIndex);
    }
    if (keyBoardNav) {
      let { clickToNav } = typeof keyBoardNav === 'object' ? keyBoardNav : {};
      clickToNav = clickToNav === false ? clickToNav : true;
      if (clickToNav) {
        this.setState(() => {
          return {
            x: columnIndex,
            y: rowIndex,
            reset: false
          };
        });
      }
    }
  }

  handleRowDoubleClick = row => {
    if (this.props.options.onRowDoubleClick) {
      this.props.options.onRowDoubleClick(row);
    }
  }

  handleSelectAllRow = e => {
    const isSelected = e.currentTarget.checked;
    const keyField = this.store.getKeyField();
    const { selectRow: { onSelectAll, unselectable, selected, onlyUnselectVisible } } = this.props;
    let selectedRowKeys = onlyUnselectVisible ? this.state.selectedRowKeys : [];
    let result = true;
    let rows = this.store.get();

    // onlyUnselectVisible default is false, #1276
    if (!isSelected && !onlyUnselectVisible) {
      rows = this.store.getRowByKey(this.state.selectedRowKeys);
    }

    if (unselectable && unselectable.length > 0) {
      if (isSelected) {
        rows = rows.filter(r => {
          return unselectable.indexOf(r[keyField]) === -1 ||
            (selected && selected.indexOf(r[keyField]) !== -1);
        });
      } else {
        rows = rows.filter(r => unselectable.indexOf(r[keyField]) === -1);
      }
    }

    if (onSelectAll) {
      result = this.props.selectRow.onSelectAll(isSelected, rows);
    }

    if (typeof result == 'undefined' || result !== false) {
      if (isSelected) {
        if (Array.isArray(result)) {
          selectedRowKeys = result;
        } else {
          const currentRowKeys = rows.map(r => r[keyField]);
          // onlyUnselectVisible default is false, #1276
          if (onlyUnselectVisible) {
            selectedRowKeys = selectedRowKeys.concat(currentRowKeys);
          } else {
            selectedRowKeys = currentRowKeys;
          }
        }
      } else {
        if (unselectable && selected) {
          selectedRowKeys = selected.filter(r => unselectable.indexOf(r) > -1);
        } else if (onlyUnselectVisible) {
          const currentRowKeys = rows.map(r => r[keyField]);
          selectedRowKeys = selectedRowKeys.filter(k => currentRowKeys.indexOf(k) === -1);
        }
      }

      this.store.setSelectedRowKey(selectedRowKeys);
      this.setState(() => { return { selectedRowKeys, reset: false }; });
    }
  }

  handleShowOnlySelected = () => {
    this.store.ignoreNonSelected();
    const { pageStartIndex } = this.props.options;
    let result;
    if (this.props.pagination) {
      result = this.store.page(Util.getNormalizedPage(pageStartIndex), this.state.sizePerPage).get();
    } else {
      result = this.store.get();
    }
    this.setState(() => {
      return {
        data: result,
        reset: false,
        currPage: Util.getFirstPage(pageStartIndex)
      };
    });
  }

  handleSelectRow = (row, isSelected, e, rowIndex) => {
    let result = true;
    let currSelected = this.store.getSelectedRowKeys();
    const rowKey = row[ this.store.getKeyField() ];
    const { selectRow } = this.props;
    if (selectRow.onSelect) {
      result = selectRow.onSelect(row, isSelected, e, rowIndex);
    }

    if (typeof result === 'undefined' || result !== false) {
      if (selectRow.mode === Const.ROW_SELECT_SINGLE) {
        currSelected = isSelected ? [ rowKey ] : [];
      } else {
        if (isSelected) {
          currSelected.push(rowKey);
        } else {
          currSelected = currSelected.filter(key => rowKey !== key);
        }
      }

      this.store.setSelectedRowKey(currSelected);
      this.setState(() => {
        return {
          selectedRowKeys: currSelected,
          reset: false
        };
      });
    }
  }

  handleEditCell = (newVal, rowIndex, colIndex) => {
    const { beforeSaveCell } = this.props.cellEdit;
    const columns = this.getColumnsDescription(this.props);
    const fieldName = columns[colIndex].name;

    const invalid = () => {
      this.setState(() => {
        return {
          data: this.store.get(),
          reset: false
        };
      });
      return;
    };

    if (beforeSaveCell) {
      const beforeSaveCellCB = result => {
        this.refs.body.cancelEditCell();
        if (result || result === undefined) {
          this.editCell(newVal, rowIndex, colIndex);
        } else {
          invalid();
        }
      };
      const isValid = beforeSaveCell(this.state.data[rowIndex], fieldName, newVal, beforeSaveCellCB);
      if (isValid === false && typeof isValid !== 'undefined') {
        return invalid();
      } else if (isValid === Const.AWAIT_BEFORE_CELL_EDIT) {
        /* eslint consistent-return: 0 */
        return isValid;
      }
    }
    this.editCell(newVal, rowIndex, colIndex);
  }

  editCell(newVal, rowIndex, colIndex) {
    const { onCellEdit } = this.props.options;
    const { afterSaveCell } = this.props.cellEdit;
    const columns = this.getColumnsDescription(this.props);
    const fieldName = columns[colIndex].name;
    if (onCellEdit) {
      newVal = onCellEdit(this.state.data[rowIndex], fieldName, newVal);
    }

    if (this.allowRemote(Const.REMOTE_CELL_EDIT)) {
      if (afterSaveCell) {
        afterSaveCell(this.state.data[rowIndex], fieldName, newVal);
      }
      return;
    }

    const result = this.store.edit(newVal, rowIndex, fieldName).get();
    this.setState(() => {
      return {
        data: result,
        reset: false
      };
    });

    if (afterSaveCell) {
      afterSaveCell(this.state.data[rowIndex], fieldName, newVal);
    }
  }

  handleAddRowAtBegin(newObj) {
    try {
      this.store.addAtBegin(newObj);
    } catch (e) {
      return e;
    }
    this._handleAfterAddingRow(newObj, true);
  }

  handleAddRow = newObj => {
    let isAsync = false;
    const { onAddRow } = this.props.options;

    const afterHandleAddRow = errMsg => {
      if (isAsync) {
        this.refs.toolbar.afterHandleSaveBtnClick(errMsg);
      } else {
        return errMsg;
      }
    };

    const afterAddRowCB = errMsg => {
      if (typeof errMsg !== 'undefined' && errMsg !== '') return afterHandleAddRow(errMsg);
      if (this.allowRemote(Const.REMOTE_INSERT_ROW)) {
        if (this.props.options.afterInsertRow) {
          this.props.options.afterInsertRow(newObj);
        }
        return afterHandleAddRow();
      }

      try {
        this.store.add(newObj);
      } catch (e) {
        return afterHandleAddRow(e.message);
      }
      this._handleAfterAddingRow(newObj, false);
      return afterHandleAddRow();
    };

    if (onAddRow) {
      const colInfos = this.store.getColInfos();
      const errMsg = onAddRow(newObj, colInfos, afterAddRowCB);

      if (errMsg !== '' && errMsg !== false) {
        return errMsg;
      } else if (typeof errMsg === 'undefined') {
        return afterAddRowCB();
      } else {
        isAsync = true;
        return !isAsync;
      }
    } else {
      return afterAddRowCB();
    }
  }

  getSizePerPage() {
    return this.state.sizePerPage;
  }

  getCurrentPage() {
    return this.state.currPage;
  }

  getTableDataIgnorePaging() {
    return this.store.getCurrentDisplayData();
  }

  getPageByRowKey = rowKey => {
    const { sizePerPage } = this.state;
    const currentData = this.store.getCurrentDisplayData();
    const keyField = this.store.getKeyField();
    const result = currentData.findIndex((x) => x[ keyField ] === rowKey);
    if (result > -1) {
      return parseInt((result / sizePerPage), 10) + 1;
    } else {
      return result;
    }
  }

  handleDropRow = rowKeys => {
    const dropRowKeys = rowKeys ? rowKeys : this.store.getSelectedRowKeys();
    // add confirm before the delete action if that option is set.
    if (dropRowKeys && dropRowKeys.length > 0) {
      if (this.props.options.handleConfirmDeleteRow) {
        this.props.options.handleConfirmDeleteRow(() => {
          this.deleteRow(dropRowKeys);
        }, dropRowKeys);
      } else if (confirm('Are you sure you want to delete?')) {
        this.deleteRow(dropRowKeys);
      }
    }
  }

  deleteRow(dropRowKeys) {
    const dropRow = this.store.getRowByKey(dropRowKeys);
    const { onDeleteRow, afterDeleteRow, pageStartIndex } = this.props.options;

    if (onDeleteRow) {
      onDeleteRow(dropRowKeys, dropRow);
    }

    this.store.setSelectedRowKey([]);  // clear selected row key

    if (this.allowRemote(Const.REMOTE_DROP_ROW) && afterDeleteRow) {
      afterDeleteRow(dropRowKeys, dropRow);
      return;
    }

    this.store.remove(dropRowKeys);  // remove selected Row
    let result;
    if (this.props.pagination) {
      // debugger;
      const { sizePerPage } = this.state;
      const currLastPage = Math.ceil(this.store.getDataNum() / sizePerPage);
      let { currPage } = this.state;
      if (currPage > currLastPage) currPage = currLastPage;
      // console.log(Util.getNormalizedPage(currPage));
      result = this.store.page(Util.getNormalizedPage(pageStartIndex, currPage), sizePerPage).get();
      this.setState(() => {
        return {
          data: result,
          selectedRowKeys: this.store.getSelectedRowKeys(),
          currPage,
          reset: false
        };
      });
    } else {
      result = this.store.get();
      this.setState(() => {
        return {
          data: result,
          reset: false,
          selectedRowKeys: this.store.getSelectedRowKeys()
        };
      });
    }
    if (afterDeleteRow) {
      afterDeleteRow(dropRowKeys, dropRow);
    }
  }

  handleFilterData = filterObj => {
    const { autoCollapse: { filter }, options } = this.props;
    const { onFilterChange, pageStartIndex } = options;
    if (onFilterChange) {
      const colInfos = this.store.getColInfos();
      onFilterChange(filterObj, colInfos);
    }

    this.setState(() => {
      const newState = {
        currPage: Util.getFirstPage(pageStartIndex),
        reset: false
      };
      if (filter) newState.expanding = [];
      return newState;
    });

    if (this.allowRemote(Const.REMOTE_FILTER)) {
      if (this.props.options.afterColumnFilter) {
        this.props.options.afterColumnFilter(filterObj, this.store.getDataIgnoringPagination());
      }
      return;
    }

    this.store.filter(filterObj);

    const sortList = this.store.getSortInfo();

    if (sortList.length > 0) {
      this.store.sort();
    }

    let result;

    if (this.props.pagination) {
      const { sizePerPage } = this.state;
      result = this.store.page(Util.getNormalizedPage(pageStartIndex), sizePerPage).get();
    } else {
      result = this.store.get();
    }
    if (this.props.options.afterColumnFilter) {
      this.props.options.afterColumnFilter(filterObj,
        this.store.getDataIgnoringPagination());
    }
    this.setState(() => {
      return {
        data: result,
        reset: false
      };
    });
  }

  handleExportCSV = () => {
    let result = {};

    let { csvFileName } = this.props;
    const { onExportToCSV, exportCSVSeparator, noAutoBOM, excludeCSVHeader } = this.props.options;
    if (onExportToCSV) {
      result = onExportToCSV();
    } else {
      result = this.store.getDataIgnoringPagination();
    }
    const separator = exportCSVSeparator || Const.DEFAULT_CSV_SEPARATOR;
    const keys = [];
    this.props.children.filter(_ => _ != null).map(function(column) {
      if (column.props.export === true ||
        (typeof column.props.export === 'undefined' &&
        column.props.hidden === false)) {
        keys.push({
          field: column.props.dataField,
          type: column.props.csvFieldType,
          format: column.props.csvFormat,
          extraData: column.props.csvFormatExtraData,
          header: column.props.csvHeader || column.props.dataField,
          row: Number(column.props.row) || 0,
          rowSpan: Number(column.props.rowSpan) || 1,
          colSpan: Number(column.props.colSpan) || 1
        });
      }
    });

    if (Util.isFunction(csvFileName)) {
      csvFileName = csvFileName();
    }

    exportCSVUtil(result, keys, csvFileName, separator, noAutoBOM, excludeCSVHeader);
  }

  handleSearch = searchText => {
    // Set search field if this function being called outside
    // but it's not necessary if calling fron inside.
    if (this.refs.toolbar) {
      this.refs.toolbar.setSearchInput(searchText);
    }
    const { autoCollapse: { search } } = this.props;
    const { onSearchChange, pageStartIndex } = this.props.options;
    if (onSearchChange) {
      const colInfos = this.store.getColInfos();
      onSearchChange(searchText, colInfos, this.props.multiColumnSearch);
    }

    this.setState(() => {
      const newState = {
        currPage: Util.getFirstPage(pageStartIndex),
        reset: false
      };
      if (search) newState.expanding = [];
      return newState;
    });

    if (this.allowRemote(Const.REMOTE_SEARCH)) {
      if (this.props.options.afterSearch) {
        this.props.options.afterSearch(searchText, this.store.getDataIgnoringPagination());
      }
      return;
    }


    this.store.search(searchText);

    const sortList = this.store.getSortInfo();

    if (sortList.length > 0) {
      this.store.sort();
    }

    let result;
    if (this.props.pagination) {
      const { sizePerPage } = this.state;
      result = this.store.page(Util.getNormalizedPage(pageStartIndex), sizePerPage).get();
    } else {
      result = this.store.get();
    }
    if (this.props.options.afterSearch) {
      this.props.options.afterSearch(searchText,
        this.store.getDataIgnoringPagination());
    }
    this.setState(() => {
      return {
        data: result,
        reset: false
      };
    });
  }

  renderPagination() {
    if (this.props.pagination) {
      let dataSize;
      if (this.allowRemote(Const.REMOTE_PAGE)) {
        dataSize = this.props.fetchInfo.dataTotalSize;
      } else {
        dataSize = this.store.getDataNum();
      }
      const { options } = this.props;
      const withFirstAndLast = options.withFirstAndLast === undefined ? true : options.withFirstAndLast;
      if (Math.ceil(dataSize / this.state.sizePerPage) <= 1 &&
        this.props.ignoreSinglePage) return null;
      return (
        <div className='react-bs-table-pagination'>
          <PaginationList
            ref='pagination'
            withFirstAndLast={ withFirstAndLast }
            alwaysShowAllBtns={ options.alwaysShowAllBtns }
            currPage={ this.state.currPage }
            changePage={ this.handlePaginationData }
            sizePerPage={ this.state.sizePerPage }
            sizePerPageList={ options.sizePerPageList || Const.SIZE_PER_PAGE_LIST }
            pageStartIndex={ options.pageStartIndex }
            paginationShowsTotal={ options.paginationShowsTotal }
            paginationSize={ options.paginationSize || Const.PAGINATION_SIZE }
            dataSize={ dataSize }
            onSizePerPageList={ options.onSizePerPageList }
            prePage={ options.prePage || Const.PRE_PAGE }
            nextPage={ options.nextPage || Const.NEXT_PAGE }
            firstPage={ options.firstPage || Const.FIRST_PAGE }
            lastPage={ options.lastPage || Const.LAST_PAGE }
            prePageTitle={ options.prePageTitle || Const.PRE_PAGE_TITLE }
            nextPageTitle={ options.nextPageTitle || Const.NEXT_PAGE_TITLE }
            firstPageTitle={ options.firstPageTitle || Const.FIRST_PAGE_TITLE }
            lastPageTitle={ options.lastPageTitle || Const.LAST_PAGE_TITLE }
            hideSizePerPage={ options.hideSizePerPage }
            sizePerPageDropDown={ options.sizePerPageDropDown }
            hidePageListOnlyOnePage={ options.hidePageListOnlyOnePage }
            paginationPanel={ options.paginationPanel }
            keepSizePerPageState={ options.keepSizePerPageState }
            open={ false }/>
        </div>
      );
    }
    return null;
  }

  renderToolBar() {
    const { exportCSV, selectRow, insertRow, deleteRow, search, children, keyField } = this.props;
    const enableShowOnlySelected = selectRow && selectRow.showOnlySelected;
    const print = typeof this.props.options.printToolBar === 'undefined' ?
      true : this.props.options.printToolBar;
    if (enableShowOnlySelected
      || insertRow
      || deleteRow
      || search
      || exportCSV
      || this.props.options.searchPanel
      || this.props.options.btnGroup
      || this.props.options.toolBar) {
      let columns;
      if (Array.isArray(children)) {
        columns = children.filter(_ => _ != null).map((column, r) => {
          if (!column) return;
          const { props } = column;
          const isKey = props.isKey || keyField === props.dataField;
          return {
            isKey,
            name: props.headerText || props.children,
            field: props.dataField,
            hiddenOnInsert: props.hiddenOnInsert,
            keyValidator: props.keyValidator,
            customInsertEditor: props.customInsertEditor,
            // when you want same auto generate value and not allow edit, example ID field
            autoValue: props.autoValue || false,
            // for create editor, no params for column.editable() indicate that editor for new row
            editable: props.editable && (Util.isFunction(props.editable === 'function')) ? props.editable() : props.editable,
            format: props.dataFormat ? function(value) {
              return props.dataFormat(value, null, props.formatExtraData, r).replace(/<.*?>/g, '');
            } : false
          };
        });
      } else {
        columns = [ {
          name: children.props.headerText || children.props.children,
          field: children.props.dataField,
          editable: children.props.editable,
          customInsertEditor: children.props.customInsertEditor,
          hiddenOnInsert: children.props.hiddenOnInsert,
          keyValidator: children.props.keyValidator
        } ];
      }
      return (
        <div className={ `react-bs-table-tool-bar ${ print ? '' : 'hidden-print' }` }>
          <ToolBar
            ref='toolbar'
            version={ this.props.version }
            defaultSearch={ this.props.options.defaultSearch }
            clearSearch={ this.props.options.clearSearch }
            searchPosition={ this.props.options.searchPosition }
            searchDelayTime={ this.props.options.searchDelayTime }
            enableInsert={ insertRow }
            enableDelete={ deleteRow }
            enableSearch={ search }
            enableExportCSV={ exportCSV }
            enableShowOnlySelected={ enableShowOnlySelected }
            columns={ columns }
            searchPlaceholder={ this.props.searchPlaceholder }
            exportCSVText={ this.props.options.exportCSVText }
            insertText={ this.props.options.insertText }
            deleteText={ this.props.options.deleteText }
            saveText= { this.props.options.saveText }
            closeText= { this.props.options.closeText }
            ignoreEditable={ this.props.options.ignoreEditable }
            onAddRow={ this.handleAddRow }
            onDropRow={ this.handleDropRow }
            onSearch={ this.handleSearch }
            onExportCSV={ this.handleExportCSV }
            onShowOnlySelected={ this.handleShowOnlySelected }
            insertModalHeader={ this.props.options.insertModalHeader }
            insertModalFooter={ this.props.options.insertModalFooter }
            insertModalBody={ this.props.options.insertModalBody }
            insertModal={ this.props.options.insertModal }
            insertBtn={ this.props.options.insertBtn }
            deleteBtn={ this.props.options.deleteBtn }
            showSelectedOnlyBtn={ this.props.options.showSelectedOnlyBtn }
            exportCSVBtn={ this.props.options.exportCSVBtn }
            clearSearchBtn={ this.props.options.clearSearchBtn }
            searchField={ this.props.options.searchField }
            searchPanel={ this.props.options.searchPanel }
            btnGroup={ this.props.options.btnGroup }
            toolBar={ this.props.options.toolBar }
            reset={ this.state.reset }
            isValidKey={ this.store.isValidKey }
            insertFailIndicator={ this.props.options.insertFailIndicator || Const.INSERT_FAIL_INDICATOR } />
        </div>
      );
    } else {
      return null;
    }
  }

  renderTableFilter(columns) {
    if (this.props.columnFilter) {
      return (
        <TableFilter columns={ columns }
                     rowSelectType={ this.props.selectRow.mode }
                     onFilter={ this.handleFilterData }/>
      );
    } else {
      return null;
    }
  }

  _scrollTop = () => {
    const { scrollTop } = this.props;
    if (scrollTop === Const.SCROLL_TOP) {
      this.refs.body.refs.container.scrollTop = 0;
    } else if (scrollTop === Const.SCROLL_BOTTOM) {
      this.refs.body.refs.container.scrollTop = this.refs.body.refs.container.scrollHeight;
    } else if (typeof scrollTop === 'number' && !isNaN(scrollTop)) {
      this.refs.body.refs.container.scrollTop = scrollTop;
    }
  }
  _scrollHeader = (e) => {
    this.refs.header.refs.container.scrollLeft = e.currentTarget.scrollLeft;
  }

  _adjustTable() {
    this._adjustHeight();
    if (!this.props.printable) {
      this._adjustHeaderWidth();
    }
  }

  _adjustHeaderWidth() {
    const header = this.refs.header.getHeaderColGrouop();
    const tbody = this.refs.body.refs.tbody;
    const bodyHeader = this.refs.body.getHeaderColGrouop();
    const firstRow = tbody.childNodes[0];
    const isScroll = tbody.parentNode.getBoundingClientRect().height >
      tbody.parentNode.parentNode.getBoundingClientRect().height;

    const scrollBarWidth = isScroll ? Util.getScrollBarWidth() : 0;
    if (firstRow && this.store.getDataNum()) {
      if (isScroll || this.isVerticalScroll !== isScroll) {
        const cells = firstRow.childNodes;
        for (let i = 0; i < cells.length; i++) {
          const cell = cells[i];
          const computedStyle = window.getComputedStyle(cell);
          let width = parseFloat(computedStyle.width.replace('px', ''));
          if (this.isIE) {
            const paddingLeftWidth = parseFloat(computedStyle.paddingLeft.replace('px', ''));
            const paddingRightWidth = parseFloat(computedStyle.paddingRight.replace('px', ''));
            const borderRightWidth = parseFloat(computedStyle.borderRightWidth.replace('px', ''));
            const borderLeftWidth = parseFloat(computedStyle.borderLeftWidth.replace('px', ''));
            width = width + paddingLeftWidth + paddingRightWidth + borderRightWidth + borderLeftWidth;
          }
          const lastPadding = (cells.length - 1 === i ? scrollBarWidth : 0);
          if (width <= 0) {
            width = 120;
            cell.width = width + lastPadding + 'px';
          }
          const result = width + lastPadding + 'px';
          header[i].style.width = result;
          header[i].style.minWidth = result;
          if (cells.length - 1 === i) {
            bodyHeader[i].style.width = width + 'px';
            bodyHeader[i].style.minWidth = width + 'px';
          } else {
            bodyHeader[i].style.width = result;
            bodyHeader[i].style.minWidth = result;
          }
        }
      }
    } else {
      for (const i in bodyHeader) {
        if (bodyHeader.hasOwnProperty(i)) {
          const child = bodyHeader[i];
          if (child.style) {
            if (child.style.width) {
              header[i].style.width = child.style.width;
            }
            if (child.style.minWidth) {
              header[i].style.minWidth = child.style.minWidth;
            }
          }
        }
      }
    }
    this.isVerticalScroll = isScroll;
  }

  _adjustHeight() {
    const { height } = this.props;
    let { maxHeight } = this.props;
    if ((typeof height === 'number' && !isNaN(height)) || height.indexOf('%') === -1) {
      this.refs.body.refs.container.style.height =
        parseFloat(height, 10) - this.refs.header.refs.container.offsetHeight + 'px';
    }
    if (maxHeight) {
      maxHeight = typeof maxHeight === 'number' ?
        maxHeight :
        parseInt(maxHeight.replace('px', ''), 10);

      this.refs.body.refs.container.style.maxHeight =
        maxHeight - this.refs.header.refs.container.offsetHeight + 'px';
    }
  }

  _handleAfterAddingRow(newObj, atTheBeginning) {
    let result;
    if (this.props.pagination) {
      // if pagination is enabled and inserting row at the end,
      // change page to the last page
      // otherwise, change it to the first page
      const { sizePerPage } = this.state;

      if (atTheBeginning) {
        const { pageStartIndex } = this.props.options;
        result = this.store.page(Util.getNormalizedPage(pageStartIndex), sizePerPage).get();
        this.setState(() => {
          return {
            data: result,
            currPage: Util.getFirstPage(pageStartIndex),
            reset: false
          };
        });
      } else {
        const currLastPage = Math.ceil(this.store.getDataNum() / sizePerPage);
        result = this.store.page(currLastPage, sizePerPage).get();
        this.setState(() => {
          return {
            data: result,
            currPage: currLastPage,
            reset: false
          };
        });
      }
    } else {
      result = this.store.get();
      this.setState(() => {
        return {
          data: result,
          reset: false
        };
      });
    }

    if (this.props.options.afterInsertRow) {
      this.props.options.afterInsertRow(newObj);
    }
  }
}

BootstrapTable.propTypes = {
  keyField: PropTypes.string,
  height: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  maxHeight: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  data: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  version: PropTypes.string,  // bootstrap version
  remote: PropTypes.oneOfType([ PropTypes.bool, PropTypes.func ]), // remote data, default is false
  replace: PropTypes.oneOfType([ PropTypes.bool, PropTypes.func ]),
  scrollTop: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  striped: PropTypes.bool,
  bordered: PropTypes.bool,
  hover: PropTypes.bool,
  condensed: PropTypes.bool,
  pagination: PropTypes.bool,
  printable: PropTypes.bool,
  withoutTabIndex: PropTypes.bool,
  keyBoardNav: PropTypes.oneOfType([ PropTypes.bool, PropTypes.object ]),
  searchPlaceholder: PropTypes.string,
  selectRow: PropTypes.shape({
    mode: PropTypes.oneOf([
      Const.ROW_SELECT_NONE,
      Const.ROW_SELECT_SINGLE,
      Const.ROW_SELECT_MULTI
    ]),
    customComponent: PropTypes.func,
    bgColor: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]),
    selected: PropTypes.array,
    onSelect: PropTypes.func,
    onSelectAll: PropTypes.func,
    clickToSelect: PropTypes.bool,
    hideSelectColumn: PropTypes.bool,
    clickToSelectAndEditCell: PropTypes.bool,
    clickToExpand: PropTypes.bool,
    showOnlySelected: PropTypes.bool,
    unselectable: PropTypes.array,
    columnWidth: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
    onlyUnselectVisible: PropTypes.bool
  }),
  cellEdit: PropTypes.shape({
    mode: PropTypes.string,
    blurToSave: PropTypes.bool,
    blurToEscape: PropTypes.bool,
    beforeSaveCell: PropTypes.func,
    afterSaveCell: PropTypes.func,
    nonEditableRows: PropTypes.func
  }),
  insertRow: PropTypes.bool,
  deleteRow: PropTypes.bool,
  search: PropTypes.bool,
  multiColumnSearch: PropTypes.bool,
  strictSearch: PropTypes.bool,
  columnFilter: PropTypes.bool,
  trClassName: PropTypes.any,
  trStyle: PropTypes.any,
  tableStyle: PropTypes.object,
  containerStyle: PropTypes.object,
  headerStyle: PropTypes.object,
  bodyStyle: PropTypes.object,
  containerClass: PropTypes.string,
  tableContainerClass: PropTypes.string,
  headerContainerClass: PropTypes.string,
  bodyContainerClass: PropTypes.string,
  tableHeaderClass: PropTypes.string,
  tableBodyClass: PropTypes.string,
  options: PropTypes.shape({
    clearSearch: PropTypes.bool,
    sortName: PropTypes.oneOfType([ PropTypes.string, PropTypes.array ]),
    sortOrder: PropTypes.oneOfType([ PropTypes.string, PropTypes.array ]),
    defaultSortName: PropTypes.oneOfType([ PropTypes.string, PropTypes.array ]),
    defaultSortOrder: PropTypes.oneOfType([ PropTypes.string, PropTypes.array ]),
    sortIndicator: PropTypes.bool,
    afterTableComplete: PropTypes.func,
    afterDeleteRow: PropTypes.func,
    afterInsertRow: PropTypes.func,
    afterSearch: PropTypes.func,
    afterColumnFilter: PropTypes.func,
    onRowClick: PropTypes.func,
    onRowDoubleClick: PropTypes.func,
    page: PropTypes.number,
    pageStartIndex: PropTypes.number,
    paginationShowsTotal: PropTypes.oneOfType([ PropTypes.bool, PropTypes.func ]),
    sizePerPageList: PropTypes.array,
    sizePerPage: PropTypes.number,
    paginationSize: PropTypes.number,
    paginationPosition: PropTypes.oneOf([
      Const.PAGINATION_POS_TOP,
      Const.PAGINATION_POS_BOTTOM,
      Const.PAGINATION_POS_BOTH
    ]),
    toolbarPosition: PropTypes.oneOf([
      Const.TOOLBAR_POS_TOP,
      Const.TOOLBAR_POS_BOTTOM,
      Const.TOOLBAR_POS_BOTH
    ]),
    hideSizePerPage: PropTypes.bool,
    hidePageListOnlyOnePage: PropTypes.bool,
    alwaysShowAllBtns: PropTypes.bool,
    withFirstAndLast: PropTypes.bool,
    keepSizePerPageState: PropTypes.bool,
    onSortChange: PropTypes.func,
    onPageChange: PropTypes.func,
    onSizePerPageList: PropTypes.func,
    onFilterChange: PropTypes.func,
    onSearchChange: PropTypes.func,
    onAddRow: PropTypes.func,
    onExportToCSV: PropTypes.func,
    onCellEdit: PropTypes.func,
    noDataText: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),
    withoutNoDataText: PropTypes.bool,
    handleConfirmDeleteRow: PropTypes.func,
    prePage: PropTypes.any,
    nextPage: PropTypes.any,
    firstPage: PropTypes.any,
    lastPage: PropTypes.any,
    prePageTitle: PropTypes.string,
    nextPageTitle: PropTypes.string,
    firstPageTitle: PropTypes.string,
    lastPageTitle: PropTypes.string,
    searchDelayTime: PropTypes.number,
    excludeCSVHeader: PropTypes.bool,
    exportCSVText: PropTypes.string,
    exportCSVSeparator: PropTypes.string,
    insertText: PropTypes.string,
    deleteText: PropTypes.string,
    saveText: PropTypes.string,
    closeText: PropTypes.string,
    ignoreEditable: PropTypes.bool,
    defaultSearch: PropTypes.string,
    insertModalHeader: PropTypes.func,
    insertModalBody: PropTypes.func,
    insertModalFooter: PropTypes.func,
    insertModal: PropTypes.func,
    insertBtn: PropTypes.func,
    deleteBtn: PropTypes.func,
    showSelectedOnlyBtn: PropTypes.func,
    exportCSVBtn: PropTypes.func,
    clearSearchBtn: PropTypes.func,
    searchField: PropTypes.func,
    searchPanel: PropTypes.func,
    btnGroup: PropTypes.func,
    toolBar: PropTypes.func,
    sizePerPageDropDown: PropTypes.func,
    paginationPanel: PropTypes.func,
    searchPosition: PropTypes.string,
    expandRowBgColor: PropTypes.string,
    expandBy: PropTypes.string,
    expanding: PropTypes.array,
    onExpand: PropTypes.func,
    onlyOneExpanding: PropTypes.bool,
    expandBodyClass: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]),
    expandParentClass: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]),
    beforeShowError: PropTypes.func,
    printToolBar: PropTypes.bool,
    insertFailIndicator: PropTypes.string,
    noAutoBOM: PropTypes.bool
  }),
  fetchInfo: PropTypes.shape({
    dataTotalSize: PropTypes.number
  }),
  exportCSV: PropTypes.bool,
  csvFileName: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]),
  ignoreSinglePage: PropTypes.bool,
  expandableRow: PropTypes.func,
  expandComponent: PropTypes.func,
  autoCollapse: PropTypes.shape({
    sort: PropTypes.bool,
    filter: PropTypes.bool,
    search: PropTypes.bool
  }),
  expandColumnOptions: PropTypes.shape({
    columnWidth: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
    expandColumnVisible: PropTypes.bool,
    expandColumnComponent: PropTypes.func,
    expandColumnBeforeSelectColumn: PropTypes.bool
  })
};
BootstrapTable.defaultProps = {
  version: '3',
  replace: false,
  scrollTop: undefined,
  expandComponent: undefined,
  expandableRow: undefined,
  expandColumnOptions: {
    expandColumnVisible: false,
    expandColumnComponent: undefined,
    expandColumnBeforeSelectColumn: true
  },
  height: '100%',
  maxHeight: undefined,
  striped: false,
  bordered: true,
  hover: false,
  condensed: false,
  pagination: false,
  printable: false,
  withoutTabIndex: false,
  keyBoardNav: false,
  searchPlaceholder: undefined,
  selectRow: {
    mode: Const.ROW_SELECT_NONE,
    bgColor: Const.ROW_SELECT_BG_COLOR,
    selected: [],
    onSelect: undefined,
    onSelectAll: undefined,
    clickToSelect: false,
    hideSelectColumn: false,
    clickToSelectAndEditCell: false,
    clickToExpand: false,
    showOnlySelected: false,
    unselectable: [],
    customComponent: undefined,
    onlyUnselectVisible: false
  },
  cellEdit: {
    mode: Const.CELL_EDIT_NONE,
    blurToSave: false,
    blurToEscape: false,
    beforeSaveCell: undefined,
    afterSaveCell: undefined,
    nonEditableRows: undefined
  },
  insertRow: false,
  deleteRow: false,
  search: false,
  multiColumnSearch: false,
  strictSearch: undefined,
  multiColumnSort: 1,
  columnFilter: false,
  trClassName: '',
  trStyle: undefined,
  tableStyle: undefined,
  containerStyle: undefined,
  headerStyle: undefined,
  bodyStyle: undefined,
  containerClass: null,
  tableContainerClass: null,
  headerContainerClass: null,
  bodyContainerClass: null,
  tableHeaderClass: null,
  tableBodyClass: null,
  options: {
    clearSearch: false,
    sortName: undefined,
    sortOrder: undefined,
    defaultSortName: undefined,
    defaultSortOrder: undefined,
    sortIndicator: true,
    afterTableComplete: undefined,
    afterDeleteRow: undefined,
    afterInsertRow: undefined,
    afterSearch: undefined,
    afterColumnFilter: undefined,
    onRowClick: undefined,
    onRowDoubleClick: undefined,
    onMouseLeave: undefined,
    onMouseEnter: undefined,
    onRowMouseOut: undefined,
    onRowMouseOver: undefined,
    page: undefined,
    paginationShowsTotal: false,
    sizePerPageList: Const.SIZE_PER_PAGE_LIST,
    sizePerPage: undefined,
    paginationSize: Const.PAGINATION_SIZE,
    paginationPosition: Const.PAGINATION_POS_BOTTOM,
    toolbarPosition: Const.TOOLBAR_POS_TOP,
    hideSizePerPage: false,
    hidePageListOnlyOnePage: false,
    alwaysShowAllBtns: false,
    withFirstAndLast: true,
    keepSizePerPageState: false,
    onSizePerPageList: undefined,
    noDataText: undefined,
    withoutNoDataText: false,
    handleConfirmDeleteRow: undefined,
    prePage: Const.PRE_PAGE,
    nextPage: Const.NEXT_PAGE,
    firstPage: Const.FIRST_PAGE,
    lastPage: Const.LAST_PAGE,
    prePageTitle: Const.PRE_PAGE_TITLE,
    nextPageTitle: Const.NEXT_PAGE_TITLE,
    firstPageTitle: Const.FIRST_PAGE_TITLE,
    lastPageTitle: Const.LAST_PAGE_TITLE,
    pageStartIndex: 1,
    searchDelayTime: undefined,
    excludeCSVHeader: false,
    exportCSVText: Const.EXPORT_CSV_TEXT,
    exportCSVSeparator: Const.DEFAULT_CSV_SEPARATOR,
    insertText: Const.INSERT_BTN_TEXT,
    deleteText: Const.DELETE_BTN_TEXT,
    saveText: Const.SAVE_BTN_TEXT,
    closeText: Const.CLOSE_BTN_TEXT,
    ignoreEditable: false,
    defaultSearch: '',
    insertModalHeader: undefined,
    insertModalBody: undefined,
    insertModalFooter: undefined,
    insertModal: undefined,
    insertBtn: undefined,
    deleteBtn: undefined,
    showSelectedOnlyBtn: undefined,
    exportCSVBtn: undefined,
    clearSearchBtn: undefined,
    searchField: undefined,
    searchPanel: undefined,
    btnGroup: undefined,
    toolBar: undefined,
    sizePerPageDropDown: undefined,
    paginationPanel: undefined,
    searchPosition: 'right',
    expandRowBgColor: undefined,
    expandBy: Const.EXPAND_BY_ROW,
    expanding: [],
    onExpand: undefined,
    onlyOneExpanding: false,
    expandBodyClass: null,
    expandParentClass: null,
    beforeShowError: undefined,
    printToolBar: true,
    insertFailIndicator: Const.INSERT_FAIL_INDICATOR,
    noAutoBOM: true
  },
  fetchInfo: {
    dataTotalSize: 0
  },
  exportCSV: false,
  csvFileName: 'spreadsheet.csv',
  ignoreSinglePage: false,
  autoCollapse: {
    sort: Const.AUTO_COLLAPSE_WHEN_SORT,
    filter: Const.AUTO_COLLAPSE_WHEN_FILTER,
    search: Const.AUTO_COLLAPSE_WHEN_SEARCH
  }
};

export default BootstrapTable;
