/* eslint no-alert: 0 */
/* eslint max-len: 0 */
import React, { Component, PropTypes } from 'react';
import Const from './Const';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import PaginationList from './pagination/PaginationList';
import ToolBar from './toolbar/ToolBar';
import TableFilter from './TableFilter';
import { TableDataStore } from './store/TableDataStore';
import Util from './util';
import exportCSV from './csv_export_util';
import { Filter } from './Filter';

class BootstrapTable extends Component {

  constructor(props) {
    super(props);
    this.isIE = false;
    this._attachCellEditFunc();
    if (Util.canUseDOM()) {
      this.isIE = document.documentMode;
    }

    this.store = new TableDataStore(this.props.data.slice());

    this.initTable(this.props);

    if (this.filter) {
      this.filter.on('onFilterChange', (currentFilter) => {
        this.handleFilterData(currentFilter);
      });
    }

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

    this.state = {
      data: this.getTableData(),
      currPage: currPage,
      sizePerPage: this.props.options.sizePerPage || Const.SIZE_PER_PAGE_LIST[0],
      selectedRowKeys: this.store.getSelectedRowKeys()
    };
  }

  initTable(props) {
    let { keyField } = props;

    const isKeyFieldDefined = typeof keyField === 'string' && keyField.length;
    React.Children.forEach(props.children, column => {
      if (column.props.isKey) {
        if (keyField) {
          throw 'Error. Multiple key column be detected in TableHeaderColumn.';
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

    this.colInfos = this.getColumnsDescription(props).reduce(( prev, curr ) => {
      prev[curr.name] = curr;
      return prev;
    }, {});

    if (!isKeyFieldDefined && !keyField) {
      throw `Error. No any key column defined in TableHeaderColumn.
            Use 'isKey={true}' to specify a unique column after version 0.5.4.`;
    }

    this.store.setProps({
      isPagination: props.pagination,
      keyField: keyField,
      colInfos: this.colInfos,
      multiColumnSearch: props.multiColumnSearch,
      remote: this.isRemoteDataSource()
    });
  }

  getTableData() {
    let result = [];
    const { options, pagination } = this.props;
    const sortName = options.defaultSortName || options.sortName;
    const sortOrder = options.defaultSortOrder || options.sortOrder;
    const searchText = options.defaultSearch;
    if (sortName && sortOrder) {
      this.store.sort(sortOrder, sortName);
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
    return React.Children.map(children, (column, i) => {
      return {
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
        columnTitle: column.props.columnTitle,
        width: column.props.width,
        text: column.props.children,
        sortFunc: column.props.sortFunc,
        sortFuncExtraData: column.props.sortFuncExtraData,
        export: column.props.export,
        index: i
      };
    });
  }

  componentWillReceiveProps(nextProps) {
    this.initTable(nextProps);
    const { options, selectRow } = nextProps;

    this.store.setData(nextProps.data.slice());

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
      this.setState({
        data: nextProps.data.slice(),
        currPage: page
      });
    } else {
      // #125
      if (!options.page &&
        page > Math.ceil(nextProps.data.length / sizePerPage)) {
        page = 1;
      }
      const sortInfo = this.store.getSortInfo();
      const sortField = options.sortName || (sortInfo ? sortInfo.sortField : undefined);
      const sortOrder = options.sortOrder || (sortInfo ? sortInfo.order : undefined);
      if (sortField && sortOrder) this.store.sort(sortOrder, sortField);
      const data = this.store.page(page, sizePerPage).get();
      this.setState({
        data,
        currPage: page,
        sizePerPage
      });
    }

    if (selectRow && selectRow.selected) {
      // set default select rows to store.
      const copy = selectRow.selected.slice();
      this.store.setSelectedRowKey(copy);
      this.setState({
        selectedRowKeys: copy
      });
    }
  }

  componentDidMount() {
    this._adjustTable();
    window.addEventListener('resize', this._adjustTable);
    this.refs.body.refs.container.addEventListener('scroll', this._scrollHeader);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._adjustTable);
    this.refs.body.refs.container.removeEventListener('scroll', this._scrollHeader);
    if (this.filter) {
      this.filter.removeAllListeners('onFilterChange');
    }
  }

  componentDidUpdate() {
    this._adjustTable();
    this._attachCellEditFunc();
    if (this.props.options.afterTableComplete) {
      this.props.options.afterTableComplete();
    }
  }

  _attachCellEditFunc() {
    const { cellEdit } = this.props;
    if (cellEdit) {
      this.props.cellEdit.__onCompleteEdit__ = this.handleEditCell.bind(this);
      if (cellEdit.mode !== Const.CELL_EDIT_NONE) {
        this.props.selectRow.clickToSelect = false;
      }
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
    return (props || this.props).remote;
  }

  render() {
    const style = {
      height: this.props.height,
      maxHeight: this.props.maxHeight
    };

    const columns = this.getColumnsDescription(this.props);
    const sortInfo = this.store.getSortInfo();
    const pagination = this.renderPagination();
    const toolBar = this.renderToolBar();
    const tableFilter = this.renderTableFilter(columns);
    const isSelectAll = this.isSelectAll();
    let sortIndicator = this.props.options.sortIndicator;
    if (typeof this.props.options.sortIndicator === 'undefined') sortIndicator = true;
    return (
      <div className='react-bs-table-container' style={ this.props.containerStyle }>
        { toolBar }
        <div className='react-bs-table' ref='table' style={ { ...style, ...this.props.tableStyle } }
            onMouseEnter={ this.handleMouseEnter }
            onMouseLeave={ this.handleMouseLeave }>
          <TableHeader
            ref='header'
            tableHeaderClass={ this.props.tableHeaderClass }
            style={ this.props.headerStyle }
            rowSelectType={ this.props.selectRow.mode }
            customComponent={ this.props.selectRow.customComponent }
            hideSelectColumn={ this.props.selectRow.hideSelectColumn }
            sortName={ sortInfo ? sortInfo.sortField : undefined }
            sortOrder={ sortInfo ? sortInfo.order : undefined }
            sortIndicator={ sortIndicator }
            onSort={ this.handleSort }
            onSelectAllRow={ this.handleSelectAllRow }
            bordered={ this.props.bordered }
            condensed={ this.props.condensed }
            isFiltered={ this.filter ? true : false }
            isSelectAll={ isSelectAll }>
            { this.props.children }
          </TableHeader>
          <TableBody ref='body'
            tableBodyClass={ this.props.tableBodyClass }
            style={ { ...style, ...this.props.bodyStyle } }
            data={ this.state.data }
            columns={ columns }
            trClassName={ this.props.trClassName }
            striped={ this.props.striped }
            bordered={ this.props.bordered }
            hover={ this.props.hover }
            keyField={ this.store.getKeyField() }
            condensed={ this.props.condensed }
            selectRow={ this.props.selectRow }
            cellEdit={ this.props.cellEdit }
            selectedRowKeys={ this.state.selectedRowKeys }
            onRowClick={ this.handleRowClick }
            onRowMouseOver={ this.handleRowMouseOver }
            onRowMouseOut={ this.handleRowMouseOut }
            onSelectRow={ this.handleSelectRow }
            noDataText={ this.props.options.noDataText } />
        </div>
        { tableFilter }
        { pagination }
      </div>
    );
  }

  isSelectAll() {
    if (this.store.isEmpty()) return false;

    const defaultSelectRowKeys = this.store.getSelectedRowKeys();
    const allRowKeys = this.store.getAllRowkey();

    if (defaultSelectRowKeys.length === 0) return false;
    let match = 0;
    let noFound = 0;
    defaultSelectRowKeys.forEach(selected => {
      if (allRowKeys.indexOf(selected) !== -1) match++;
      else noFound++;
    });

    if (noFound === defaultSelectRowKeys.length) return false;
    return (match === allRowKeys.length) ? true : 'indeterminate';
  }

  cleanSelected() {
    this.store.setSelectedRowKey([]);
    this.setState({
      selectedRowKeys: []
    });
  }

  handleSort = (order, sortField) => {
    if (this.props.options.onSortChange) {
      this.props.options.onSortChange(sortField, order, this.props);
    }

    if (this.isRemoteDataSource()) {
      this.store.setSortInfo(order, sortField);
      return;
    }

    const result = this.store.sort(order, sortField).get();
    this.setState({
      data: result
    });
  }

  handlePaginationData = (page, sizePerPage) => {
    const { onPageChange, pageStartIndex } = this.props.options;
    if (onPageChange) {
      onPageChange(page, sizePerPage);
    }

    this.setState({
      currPage: page,
      sizePerPage
    });

    if (this.isRemoteDataSource()) {
      return;
    }

    // We calculate an offset here in order to properly fetch the indexed data,
    // despite the page start index not always being 1
    let normalizedPage;
    if (pageStartIndex !== undefined) {
      const offset = Math.abs(Const.PAGE_START_INDEX - pageStartIndex);
      normalizedPage = page + offset;
    } else {
      normalizedPage = page;
    }

    const result = this.store.page(normalizedPage, sizePerPage).get();

    this.setState({ data: result });
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

  handleRowClick = row => {
    if (this.props.options.onRowClick) {
      this.props.options.onRowClick(row);
    }
  }

  handleSelectAllRow = e => {
    const isSelected = e.currentTarget.checked;
    const keyField = this.store.getKeyField();
    const { selectRow: { onSelectAll, unselectable } } = this.props;
    let selectedRowKeys = [];
    let result = true;
    let rows = this.store.get();

    if (isSelected && unselectable && unselectable.length > 0) {
      rows = rows.filter(r => unselectable.indexOf(r[keyField]) === -1);
    }

    if (onSelectAll) {
      result = this.props.selectRow.onSelectAll(isSelected,
        isSelected ? rows : this.store.getRowByKey(this.state.selectedRowKeys));
    }

    if (typeof result == 'undefined' || result !== false) {
      if (isSelected) {
        selectedRowKeys = Array.isArray(result) ?
          result :
          rows.map(r => r[keyField]);
      }

      this.store.setSelectedRowKey(selectedRowKeys);
      this.setState({ selectedRowKeys });
    }
  }

  handleShowOnlySelected = () => {
    this.store.ignoreNonSelected();
    let result;
    if (this.props.pagination) {
      result = this.store.page(1, this.state.sizePerPage).get();
    } else {
      result = this.store.get();
    }
    this.setState({
      data: result,
      currPage: this.props.options.pageStartIndex || Const.PAGE_START_INDEX
    });
  }

  handleSelectRow = (row, isSelected, e) => {
    let result = true;
    let currSelected = this.store.getSelectedRowKeys();
    const rowKey = row[ this.store.getKeyField() ];
    const { selectRow } = this.props;
    if (selectRow.onSelect) {
      result = selectRow.onSelect(row, isSelected, e);
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
      this.setState({
        selectedRowKeys: currSelected
      });
    }
  }

  handleEditCell(newVal, rowIndex, colIndex) {
    const { onCellEdit } = this.props.options;
    const { beforeSaveCell, afterSaveCell } = this.props.cellEdit;
    let fieldName;
    React.Children.forEach(this.props.children, function(column, i) {
      if (i === colIndex) {
        fieldName = column.props.dataField;
        return false;
      }
    });

    if (beforeSaveCell) {
      const isValid = beforeSaveCell(this.state.data[rowIndex], fieldName, newVal);
      if (!isValid && typeof isValid !== 'undefined') {
        this.setState({
          data: this.store.get()
        });
        return;
      }
    }

    if (onCellEdit) {
      newVal = onCellEdit(this.state.data[rowIndex], fieldName, newVal);
    }

    if (this.isRemoteDataSource()) {
      if (afterSaveCell) {
        afterSaveCell(this.state.data[rowIndex], fieldName, newVal);
      }
      return;
    }

    const result = this.store.edit(newVal, rowIndex, fieldName).get();
    this.setState({
      data: result
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
    this._handleAfterAddingRow(newObj);
  }

  handleAddRow = newObj => {
    const { onAddRow } = this.props.options;
    if (onAddRow) {
      const colInfos = this.store.getColInfos();
      onAddRow(newObj, colInfos);
    }

    if (this.isRemoteDataSource()) {
      if (this.props.options.afterInsertRow) {
        this.props.options.afterInsertRow(newObj);
      }
      return null;
    }

    try {
      this.store.add(newObj);
    } catch (e) {
      return e;
    }
    this._handleAfterAddingRow(newObj);
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
    const { onDeleteRow } = this.props.options;
    if (onDeleteRow) {
      onDeleteRow(dropRowKeys);
    }

    this.store.setSelectedRowKey([]);  // clear selected row key

    if (this.isRemoteDataSource()) {
      if (this.props.options.afterDeleteRow) {
        this.props.options.afterDeleteRow(dropRowKeys);
      }
      return;
    }

    this.store.remove(dropRowKeys);  // remove selected Row
    let result;
    if (this.props.pagination) {
      const { sizePerPage } = this.state;
      const currLastPage = Math.ceil(this.store.getDataNum() / sizePerPage);
      let { currPage } = this.state;
      if (currPage > currLastPage) currPage = currLastPage;
      result = this.store.page(currPage, sizePerPage).get();
      this.setState({
        data: result,
        selectedRowKeys: this.store.getSelectedRowKeys(),
        currPage
      });
    } else {
      result = this.store.get();
      this.setState({
        data: result,
        selectedRowKeys: this.store.getSelectedRowKeys()
      });
    }
    if (this.props.options.afterDeleteRow) {
      this.props.options.afterDeleteRow(dropRowKeys);
    }
  }

  handleFilterData = filterObj => {
    const { onFilterChange } = this.props.options;
    if (onFilterChange) {
      const colInfos = this.store.getColInfos();
      onFilterChange(filterObj, colInfos);
    }

    this.setState({
      currPage: this.props.options.pageStartIndex || Const.PAGE_START_INDEX
    });

    if (this.isRemoteDataSource()) {
      if (this.props.options.afterColumnFilter) {
        this.props.options.afterColumnFilter(filterObj, this.store.getDataIgnoringPagination());
      }
      return;
    }

    this.store.filter(filterObj);

    const sortObj = this.store.getSortInfo();

    if (sortObj) {
      this.store.sort(sortObj.order, sortObj.sortField);
    }

    let result;

    if (this.props.pagination) {
      const { sizePerPage } = this.state;
      result = this.store.page(1, sizePerPage).get();
    } else {
      result = this.store.get();
    }
    if (this.props.options.afterColumnFilter) {
      this.props.options.afterColumnFilter(filterObj,
        this.store.getDataIgnoringPagination());
    }
    this.setState({
      data: result
    });
  }

  handleExportCSV = () => {
    let result = {};

    let { csvFileName } = this.props;
    const { onExportToCSV } = this.props.options;
    if (onExportToCSV) {
      result = onExportToCSV();
    } else {
      result = this.store.getDataIgnoringPagination();
    }

    const keys = [];
    this.props.children.map(function(column) {
      if (column.props.export === true ||
        (typeof column.props.export === 'undefined' &&
        column.props.hidden === false)) {
        keys.push({
          field: column.props.dataField,
          format: column.props.csvFormat,
          header: column.props.csvHeader || column.props.dataField
        });
      }
    });

    if (typeof csvFileName === 'function') {
      csvFileName = csvFileName();
    }

    exportCSV(result, keys, csvFileName);
  }

  handleSearch = searchText => {
    const { onSearchChange } = this.props.options;
    if (onSearchChange) {
      const colInfos = this.store.getColInfos();
      onSearchChange(searchText, colInfos, this.props.multiColumnSearch);
    }

    this.setState({
      currPage: this.props.options.pageStartIndex || Const.PAGE_START_INDEX
    });

    if (this.isRemoteDataSource()) {
      if (this.props.options.afterSearch) {
        this.props.options.afterSearch(searchText, this.store.getDataIgnoringPagination());
      }
      return;
    }


    this.store.search(searchText);

    const sortObj = this.store.getSortInfo();

    if (sortObj) {
      this.store.sort(sortObj.order, sortObj.sortField);
    }

    let result;
    if (this.props.pagination) {
      const { sizePerPage } = this.state;
      result = this.store.page(1, sizePerPage).get();
    } else {
      result = this.store.get();
    }
    if (this.props.options.afterSearch) {
      this.props.options.afterSearch(searchText,
        this.store.getDataIgnoringPagination());
    }
    this.setState({
      data: result
    });
  }

  renderPagination() {
    if (this.props.pagination) {
      let dataSize;
      if (this.isRemoteDataSource()) {
        dataSize = this.props.fetchInfo.dataTotalSize;
      } else {
        dataSize = this.store.getDataNum();
      }
      const { options } = this.props;
      if (Math.ceil(dataSize / this.state.sizePerPage) <= 1 &&
        this.props.ignoreSinglePage) return null;
      return (
        <div className='react-bs-table-pagination'>
          <PaginationList
            ref='pagination'
            currPage={ this.state.currPage }
            changePage={ this.handlePaginationData }
            sizePerPage={ this.state.sizePerPage }
            sizePerPageList={ options.sizePerPageList || Const.SIZE_PER_PAGE_LIST }
            pageStartIndex={ options.pageStartIndex }
            paginationShowsTotal={ options.paginationShowsTotal }
            paginationSize={ options.paginationSize || Const.PAGINATION_SIZE }
            remote={ this.isRemoteDataSource() }
            dataSize={ dataSize }
            onSizePerPageList={ options.onSizePerPageList }
            prePage={ options.prePage || Const.PRE_PAGE }
            nextPage={ options.nextPage || Const.NEXT_PAGE }
            firstPage={ options.firstPage || Const.FIRST_PAGE }
            lastPage={ options.lastPage || Const.LAST_PAGE }
            hideSizePerPage={ options.hideSizePerPage }/>
        </div>
      );
    }
    return null;
  }

  renderToolBar() {
    const { selectRow, insertRow, deleteRow, search, children } = this.props;
    const enableShowOnlySelected = selectRow && selectRow.showOnlySelected;
    if (enableShowOnlySelected
      || insertRow
      || deleteRow
      || search
      || this.props.exportCSV) {
      let columns;
      if (Array.isArray(children)) {
        columns = children.map((column, r) => {
          const { props } = column;
          return {
            name: props.children,
            field: props.dataField,
            hiddenOnInsert: props.hiddenOnInsert,
            // when you want same auto generate value and not allow edit, example ID field
            autoValue: props.autoValue || false,
            // for create editor, no params for column.editable() indicate that editor for new row
            editable: props.editable && (typeof props.editable === 'function') ? props.editable() : props.editable,
            format: props.dataFormat ? function(value) {
              return props.dataFormat(value, null, props.formatExtraData, r).replace(/<.*?>/g, '');
            } : false
          };
        });
      } else {
        columns = [ {
          name: children.props.children,
          field: children.props.dataField,
          editable: children.props.editable,
          hiddenOnInsert: children.props.hiddenOnInsert
        } ];
      }
      return (
        <div className='react-bs-table-tool-bar'>
          <ToolBar
            defaultSearch={ this.props.options.defaultSearch }
            clearSearch={ this.props.options.clearSearch }
            searchDelayTime={ this.props.options.searchDelayTime }
            enableInsert={ insertRow }
            enableDelete={ deleteRow }
            enableSearch={ search }
            enableExportCSV={ this.props.exportCSV }
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
            onShowOnlySelected={ this.handleShowOnlySelected }/>
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

  _scrollHeader = (e) => {
    this.refs.header.refs.container.scrollLeft = e.currentTarget.scrollLeft;
  }

  _adjustTable = () => {
    this._adjustHeaderWidth();
    this._adjustHeight();
  }

  _adjustHeaderWidth = () => {
    const header = this.refs.header.refs.header;
    const headerContainer = this.refs.header.refs.container;
    const tbody = this.refs.body.refs.tbody;
    const firstRow = tbody.childNodes[0];
    const isScroll = headerContainer.offsetWidth !== tbody.parentNode.offsetWidth;
    const scrollBarWidth = isScroll ? Util.getScrollBarWidth() : 0;
    if (firstRow && this.store.getDataNum()) {
      const cells = firstRow.childNodes;
      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        const computedStyle = getComputedStyle(cell);
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
        header.childNodes[i].style.width = result;
        header.childNodes[i].style.minWidth = result;
      }
    } else {
      React.Children.forEach(this.props.children, (child, i) => {
        if (child.props.width) {
          header.childNodes[i].style.width = `${child.props.width}px`;
          header.childNodes[i].style.minWidth = `${child.props.width}px`;
        }
      });
    }
  }

  _adjustHeight = () => {
    if ((typeof this.props.height === 'number' && !isNaN(this.props.height)) ||
      this.props.height.indexOf('%') === -1) {
      this.refs.body.refs.container.style.height =
        parseFloat(this.props.height, 10) - this.refs.header.refs.container.offsetHeight + 'px';
    }
  }

  _handleAfterAddingRow(newObj) {
    let result;
    if (this.props.pagination) {
      // if pagination is enabled and insert row be trigger, change to last page
      const { sizePerPage } = this.state;
      const currLastPage = Math.ceil(this.store.getDataNum() / sizePerPage);
      result = this.store.page(currLastPage, sizePerPage).get();
      this.setState({
        data: result,
        currPage: currLastPage
      });
    } else {
      result = this.store.get();
      this.setState({
        data: result
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
  remote: PropTypes.bool, // remote data, default is false
  striped: PropTypes.bool,
  bordered: PropTypes.bool,
  hover: PropTypes.bool,
  condensed: PropTypes.bool,
  pagination: PropTypes.bool,
  searchPlaceholder: PropTypes.string,
  selectRow: PropTypes.shape({
    mode: PropTypes.oneOf([
      Const.ROW_SELECT_NONE,
      Const.ROW_SELECT_SINGLE,
      Const.ROW_SELECT_MULTI
    ]),
    customComponent: PropTypes.func,
    bgColor: PropTypes.string,
    selected: PropTypes.array,
    onSelect: PropTypes.func,
    onSelectAll: PropTypes.func,
    clickToSelect: PropTypes.bool,
    hideSelectColumn: PropTypes.bool,
    clickToSelectAndEditCell: PropTypes.bool,
    showOnlySelected: PropTypes.bool,
    unselectable: PropTypes.array
  }),
  cellEdit: PropTypes.shape({
    mode: PropTypes.string,
    blurToSave: PropTypes.bool,
    beforeSaveCell: PropTypes.func,
    afterSaveCell: PropTypes.func
  }),
  insertRow: PropTypes.bool,
  deleteRow: PropTypes.bool,
  search: PropTypes.bool,
  columnFilter: PropTypes.bool,
  trClassName: PropTypes.any,
  tableStyle: PropTypes.object,
  containerStyle: PropTypes.object,
  headerStyle: PropTypes.object,
  bodyStyle: PropTypes.object,
  tableHeaderClass: PropTypes.string,
  tableBodyClass: PropTypes.string,
  options: PropTypes.shape({
    clearSearch: PropTypes.bool,
    sortName: PropTypes.string,
    sortOrder: PropTypes.string,
    defaultSortName: PropTypes.string,
    defaultSortOrder: PropTypes.string,
    sortIndicator: PropTypes.bool,
    afterTableComplete: PropTypes.func,
    afterDeleteRow: PropTypes.func,
    afterInsertRow: PropTypes.func,
    afterSearch: PropTypes.func,
    afterColumnFilter: PropTypes.func,
    onRowClick: PropTypes.func,
    page: PropTypes.number,
    pageStartIndex: PropTypes.number,
    paginationShowsTotal: PropTypes.oneOfType([ PropTypes.bool, PropTypes.func ]),
    sizePerPageList: PropTypes.array,
    sizePerPage: PropTypes.number,
    paginationSize: PropTypes.number,
    hideSizePerPage: PropTypes.bool,
    onSortChange: PropTypes.func,
    onPageChange: PropTypes.func,
    onSizePerPageList: PropTypes.func,
    onFilterChange: React.PropTypes.func,
    onSearchChange: React.PropTypes.func,
    onAddRow: React.PropTypes.func,
    onExportToCSV: React.PropTypes.func,
    onCellEdit: React.PropTypes.func,
    noDataText: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),
    handleConfirmDeleteRow: PropTypes.func,
    prePage: PropTypes.string,
    nextPage: PropTypes.string,
    firstPage: PropTypes.string,
    lastPage: PropTypes.string,
    searchDelayTime: PropTypes.number,
    exportCSVText: PropTypes.string,
    insertText: PropTypes.string,
    deleteText: PropTypes.string,
    saveText: PropTypes.string,
    closeText: PropTypes.string,
    ignoreEditable: PropTypes.bool,
    defaultSearch: PropTypes.string
  }),
  fetchInfo: PropTypes.shape({
    dataTotalSize: PropTypes.number
  }),
  exportCSV: PropTypes.bool,
  csvFileName: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]),
  ignoreSinglePage: PropTypes.bool
};
BootstrapTable.defaultProps = {
  height: '100%',
  maxHeight: undefined,
  striped: false,
  bordered: true,
  hover: false,
  condensed: false,
  pagination: false,
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
    showOnlySelected: false,
    unselectable: [],
    customComponent: undefined
  },
  cellEdit: {
    mode: Const.CELL_EDIT_NONE,
    blurToSave: false,
    beforeSaveCell: undefined,
    afterSaveCell: undefined
  },
  insertRow: false,
  deleteRow: false,
  search: false,
  multiColumnSearch: false,
  columnFilter: false,
  trClassName: '',
  tableStyle: undefined,
  containerStyle: undefined,
  headerStyle: undefined,
  bodyStyle: undefined,
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
    onMouseLeave: undefined,
    onMouseEnter: undefined,
    onRowMouseOut: undefined,
    onRowMouseOver: undefined,
    page: undefined,
    paginationShowsTotal: false,
    sizePerPageList: Const.SIZE_PER_PAGE_LIST,
    sizePerPage: undefined,
    paginationSize: Const.PAGINATION_SIZE,
    hideSizePerPage: false,
    onSizePerPageList: undefined,
    noDataText: undefined,
    handleConfirmDeleteRow: undefined,
    prePage: Const.PRE_PAGE,
    nextPage: Const.NEXT_PAGE,
    firstPage: Const.FIRST_PAGE,
    lastPage: Const.LAST_PAGE,
    pageStartIndex: undefined,
    searchDelayTime: undefined,
    exportCSVText: Const.EXPORT_CSV_TEXT,
    insertText: Const.INSERT_BTN_TEXT,
    deleteText: Const.DELETE_BTN_TEXT,
    saveText: Const.SAVE_BTN_TEXT,
    closeText: Const.CLOSE_BTN_TEXT,
    ignoreEditable: false,
    defaultSearch: ''
  },
  fetchInfo: {
    dataTotalSize: 0
  },
  exportCSV: false,
  csvFileName: 'spreadsheet.csv',
  ignoreSinglePage: false
};

export default BootstrapTable;
