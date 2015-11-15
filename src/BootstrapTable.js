import React from 'react';
import classSet from 'classnames';
import Const from './Const';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import PaginationList from './pagination/PaginationList';
import ToolBar from './toolbar/ToolBar';
import TableFilter from './TableFilter';
import {TableDataStore} from './store/TableDataStore';
import exportCSV from './csv_export_util';

class BootstrapTable extends React.Component {

  constructor(props) {
    super(props);

    this._attachCellEditFunc();

    if (!Array.isArray(this.props.data)) {
      this.store = new TableDataStore(this.props.data.getData());
      this.props.data.clear();
      this.props.data.on('change', (data) => {
        this.store.setData(data);
        this.setState({
          data: this.getTableData()
        })
      });
    } else {
      this.store = new TableDataStore(this.props.data);
    }

    this.initTable(this.props);

    if (this.props.selectRow && this.props.selectRow.selected) {
      this.store.setSelectedRowKey(this.props.selectRow.selected);
    }

    this.state = {
      data: this.getTableData(),
      selectedRowKeys: this.store.getSelectedRowKeys()
    };
  }

  initTable(props){
    let {keyField} = props;
    let customSortFuncMap = {};

    if (!(typeof keyField === 'string' && keyField.length)) {
      React.Children.forEach(props.children, column=> {
        if (column.props.isKey) {
          if (keyField != null) {
            throw "Error. Multiple key column be detected in TableHeaderColumn.";
          }
          keyField = column.props.dataField;
        }
      }, this);
    }

    React.Children.forEach(props.children, column=> {
      if (column.props.sortFunc) {
        customSortFuncMap[column.props.dataField] = column.props.sortFunc;
      }
    }, this);

    if (keyField == null)
      throw "Error. No any key column defined in TableHeaderColumn."+
            "Use 'isKey={true}' to specify an unique column after version 0.5.4.";

    this.store.setProps({
      isPagination:props.pagination,
      keyField: keyField,
      customSortFuncMap: customSortFuncMap,
      multiColumnSearch: props.multiColumnSearch,
      remote: this.isRemoteDataSource()
    });
  }

  getTableData() {
    let result = [];
    if (this.props.pagination) {
      let page, sizePerPage;
      if (this.store.isChangedPage()) {
        sizePerPage = this.refs.pagination.getSizePerPage();
        page = this.refs.pagination.getCurrentPage();
      } else {
        sizePerPage = this.props.options.sizePerPage || Const.SIZE_PER_PAGE_LIST[0];
        page = this.props.options.page || 1;
      }
      result = this.store.page(page, sizePerPage).get();
    } else {
      result = this.store.get();
    }
    return result;
  }

  componentWillReceiveProps(nextProps) {
    this.initTable(nextProps);
    if (Array.isArray(nextProps.data)) {
      this.store.setData(nextProps.data);
      this.store.page(nextProps.options.page || 1,
        nextProps.options.sizePerPage || Const.SIZE_PER_PAGE_LIST[0]);
      this.setState({
        data: this.getTableData()
      });
    }
    if (nextProps.selectRow && nextProps.selectRow.selected) {
      //set default select rows to store.
      this.store.setSelectedRowKey(nextProps.selectRow.selected);
      this.setState({
        selectedRowKeys: nextProps.selectRow.selected
      });
    }
  }

  componentDidMount() {
    this._adjustHeaderWidth();
    window.addEventListener('resize', this._adjustHeaderWidth.bind(this));
    this.refs.body.refs.container.addEventListener('scroll', this._scrollHeader.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._adjustHeaderWidth.bind(this));
    this.refs.body.refs.container.removeEventListener('scroll', this._scrollHeader.bind(this));
  }

  componentDidUpdate() {
    this._adjustHeaderWidth();
    this._attachCellEditFunc();
    if (this.props.options.afterTableComplete)
      this.props.options.afterTableComplete();
  }

  _attachCellEditFunc() {
    if (this.props.cellEdit) {
      this.props.cellEdit.__onCompleteEdit__ = this.handleEditCell.bind(this);
      if (this.props.cellEdit.mode !== Const.CELL_EDIT_NONE)
        this.props.selectRow.clickToSelect = false;
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
    var tableClass = classSet("react-bs-table");
    var childrens = this.props.children;
    var style = {
      height: this.props.height
    };
    if (!Array.isArray(this.props.children)) {
      childrens = [this.props.children];
    }
    var columns = childrens.map(function (column, i) {
      return {
        name: column.props.dataField,
        align: column.props.dataAlign,
        sort: column.props.dataSort,
        format: column.props.dataFormat,
        editable: column.props.editable,
        hidden: column.props.hidden,
        className: column.props.columnClassName,
        width: column.props.width,
        text: column.props.children,
        index: i
      };
    }, this);

    var pagination = this.renderPagination();
    var toolBar = this.renderToolBar();
    var tableFilter = this.renderTableFilter(columns);
    return (
      <div className="react-bs-container" ref="table">
        {toolBar}
        <div className="react-bs-table-container" style={style}>
          <TableHeader
            ref="header"
            rowSelectType={this.props.selectRow.mode}
            hideSelectColumn={this.props.selectRow.hideSelectColumn}
            sortName={this.props.options.sortName}
            sortOrder={this.props.options.sortOrder}
            onSort={this.handleSort.bind(this)}
            onSelectAllRow={this.handleSelectAllRow.bind(this)}
            bordered={this.props.bordered}
            condensed={this.props.condensed}>
            {this.props.children}
          </TableHeader>
          <TableBody
            height={this.props.height}
            ref="body"
            data={this.state.data}
            columns={columns}
            trClassName={this.props.trClassName}
            striped={this.props.striped}
            bordered={this.props.bordered}
            hover={this.props.hover}
            keyField={this.store.getKeyField()}
            condensed={this.props.condensed}
            selectRow={this.props.selectRow}
            cellEdit={this.props.cellEdit}
            selectedRowKeys={this.state.selectedRowKeys}
            onRowClick={this.handleRowClick.bind(this)}
            onSelectRow={this.handleSelectRow.bind(this)}
          />
        </div>
        {tableFilter}
        {pagination}
      </div>
    )
  }

  handleSort(order, sortField) {
    if (this.props.options.onSortChange) {
      this.props.options.onSortChange(sortField, order, this.props);
    }

    if (this.isRemoteDataSource()) {
      return;
    }

    let result = this.store.sort(order, sortField).get();
    this.setState({
      data: result
    });
  }

  handlePaginationData(page, sizePerPage) {
    const {onPageChange} = this.props.options;
    if (onPageChange) {
      onPageChange(page, sizePerPage);
    }

    if (this.isRemoteDataSource()) {
      return;
    }

    let result = this.store.page(page, sizePerPage).get();
    this.setState({
      data: result
    });
  }

  handleRowClick(row) {
    if (this.props.options.onRowClick) {
      this.props.options.onRowClick(row);
    }
  }

  handleSelectAllRow(e) {
    var isSelected = e.currentTarget.checked;
    let selectedRowKeys = [];
    if (isSelected) {
      selectedRowKeys = this.store.getAllRowkey();
    }

    this.store.setSelectedRowKey(selectedRowKeys);
    this.setState({
      selectedRowKeys: selectedRowKeys
    });

    if (this.props.selectRow.onSelectAll) {
      this.props.selectRow.onSelectAll(isSelected,
        isSelected ? this.store.get() : []);
    }
  }

  handleSelectRow(row, isSelected) {
    let currSelected = this.store.getSelectedRowKeys();
    let rowKey = row[this.store.getKeyField()];
    if (this.props.selectRow.mode === Const.ROW_SELECT_SINGLE) {
      currSelected = isSelected ? [rowKey] : []
    } else {
      if (isSelected) {
        currSelected.push(rowKey);
      } else {
        currSelected = currSelected.filter(function (key) {
          return rowKey !== key;
        });
      }
    }

    this.store.setSelectedRowKey(currSelected);
    this.setState({
      selectedRowKeys: currSelected
    });

    if (this.props.selectRow.onSelect) {
      this.props.selectRow.onSelect(row, isSelected);
    }
  }

  handleEditCell(newVal, rowIndex, colIndex) {
    let fieldName;
    React.Children.forEach(this.props.children, function (column, i) {
      if (i == colIndex) {
        fieldName = column.props.dataField;
        return false;
      }
    });

    let result = this.store.edit(newVal, rowIndex, fieldName).get();
    this.setState({
      data: result
    });

    if (this.props.cellEdit.afterSaveCell) {
      this.props.cellEdit.afterSaveCell(this.state.data[rowIndex], fieldName, newVal);
    }
  }

  handleAddRowBegin() {
    if (this.refs.body) {
      // this.refs.body.cancelEdit();
    }
  }

  handleAddRow(newObj) {
    let msg = null, result;
    try {
      this.store.add(newObj);
    } catch (e) {
      return e;
    }

    if (this.props.pagination) {
      //if pagination is enabled and insert row be trigger, change to last page
      let sizePerPage = this.refs.pagination.getSizePerPage();
      let currLastPage = Math.ceil(this.store.getDataNum() / sizePerPage);
      result = this.store.page(currLastPage, sizePerPage).get();
      this.setState({
        data: result
      });
      this.refs.pagination.changePage(currLastPage);
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

  getSizePerPage() {
    if (this.props.pagination) {
      return this.refs.pagination.getSizePerPage();
    }
  }

  getCurrentPage() {
    if (this.props.pagination) {
      return this.refs.pagination.getCurrentPage();
    }
  }

  handleDropRow() {
    let result;
    let dropRowKeys = this.store.getSelectedRowKeys();
    //add confirm befor the delete action
    if (dropRowKeys && dropRowKeys.length > 0) {
      if (!confirm('Are you sure want delete?')) {
        return
      }
    }
    this.store.remove(dropRowKeys);  //remove selected Row
    this.store.setSelectedRowKey([]);  //clear selected row key

    if (this.props.pagination) {
      let sizePerPage = this.refs.pagination.getSizePerPage();
      let currLastPage = Math.ceil(this.store.getDataNum() / sizePerPage);
      let currentPage = this.refs.pagination.getCurrentPage();
      if (currentPage > currLastPage)
        currentPage = currLastPage;
      result = this.store.page(currentPage, sizePerPage).get();
      this.setState({
        data: result,
        selectedRowKeys: this.store.getSelectedRowKeys()
      });
      this.refs.pagination.changePage(currentPage);
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

  handleFilterData(filterObj) {
    this.store.filter(filterObj);
    let result;
    if (this.props.pagination) {
      let sizePerPage = this.refs.pagination.getSizePerPage();
      result = this.store.page(1, sizePerPage).get();
      this.refs.pagination.changePage(1);
    } else {
      result = this.store.get();
    }
    if(this.props.options.afterColumnFilter)
      this.props.options.afterColumnFilter(filterObj,
        this.store.getDataIgnoringPagination());
    this.setState({
      data: result
    });
  }

  handleExportCSV() {
    var result = this.store.getDataIgnoringPagination();
    var keys = [];
    this.props.children.map(function(column) {
      if (column.props.hidden === false) {
        keys.push(column.props.dataField);
      }
    });
    exportCSV(result, keys, this.props.csvFileName);
  }

  handleSearch(searchText) {
    this.store.search(searchText);
    let result;
    if (this.props.pagination) {
      let sizePerPage = this.refs.pagination.getSizePerPage();
      result = this.store.page(1, sizePerPage).get();
      this.refs.pagination.changePage(1);
    } else {
      result = this.store.get();
    }
    if(this.props.options.afterSearch)
      this.props.options.afterSearch(searchText, this.store.getDataIgnoringPagination());
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
      return (
        <div>
          <PaginationList
            ref="pagination"
            currPage={this.props.options.page || 1}
            changePage={this.handlePaginationData.bind(this)}
            sizePerPage={this.props.options.sizePerPage || Const.SIZE_PER_PAGE_LIST[0]}
            sizePerPageList={this.props.options.sizePerPageList || Const.SIZE_PER_PAGE_LIST}
            paginationSize={this.props.options.paginationSize || Const.PAGINATION_SIZE}
            remote={this.isRemoteDataSource()}
            dataSize={dataSize}
          />
        </div>
      );
    }
    return null;
  }

  renderToolBar() {
    let columns;
    if (Array.isArray(this.props.children)) {
      columns = this.props.children.map(function (column) {
        var props = column.props;
        return {
          name: props.children,
          field: props.dataField,
          //when you want same auto generate value and not allow edit, example ID field
          autoValue: props.autoValue || false,
          //for create eidtor, no params for column.editable() indicate that editor for new row
          editable: props.editable && (typeof props.editable === "function") ? props.editable() : props.editable,
          format: props.format ? format : false
        };
      });
    } else {
      columns = [{
        name: this.props.children.props.children,
        field: this.props.children.props.dataField,
        editable: this.props.children.props.editable
      }];
    }
    if (this.props.insertRow || this.props.deleteRow || this.props.search || this.props.exportCSV) {
      return (
        <div className="tool-bar">
          <ToolBar
            enableInsert={this.props.insertRow}
            enableDelete={this.props.deleteRow}
            enableSearch={this.props.search}
            enableExportCSV={this.props.exportCSV}
            columns={columns}
            searchPlaceholder={this.props.searchPlaceholder}
            onAddRow={this.handleAddRow.bind(this)}
            onAddRowBegin={this.handleAddRowBegin.bind(this)}
            onDropRow={this.handleDropRow.bind(this)}
            onSearch={this.handleSearch.bind(this)}
            onExportCSV={this.handleExportCSV.bind(this)}
          />
        </div>
      )
    } else {
      return null;
    }
  }

  renderTableFilter(columns) {
    if (this.props.columnFilter) {
      return (
        <TableFilter columns={columns}
                     rowSelectType={this.props.selectRow.mode}
                     onFilter={this.handleFilterData.bind(this)}/>
      );
    } else {
      return null;
    }
  }

  _scrollHeader(e){
    this.refs.header.refs.container.scrollLeft = e.currentTarget.scrollLeft;
  }

  _adjustHeaderWidth() {
    var tableHeaderDom = this.refs.header.refs.container.childNodes[0];
    var tableBodyDom = this.refs.body.refs.container.childNodes[0];
    if(tableHeaderDom.offsetWidth !== tableBodyDom.offsetWidth){
      tableHeaderDom.style.width = tableBodyDom.offsetWidth + "px";
    }
    const headerProps = this.refs.body.getBodyHeaderDomProp();
    this.refs.header.fitHeader(headerProps,
      this.refs.body.refs.container.scrollHeight > this.refs.body.refs.container.clientHeight);
  }
}

BootstrapTable.propTypes = {
  keyField: React.PropTypes.string,
  height: React.PropTypes.string,
  data: React.PropTypes.oneOfType([React.PropTypes.array, React.PropTypes.object]),
  remote: React.PropTypes.bool, // remote data, default is false
  striped: React.PropTypes.bool,
  bordered: React.PropTypes.bool,
  hover: React.PropTypes.bool,
  condensed: React.PropTypes.bool,
  pagination: React.PropTypes.bool,
  searchPlaceholder: React.PropTypes.string,
  selectRow: React.PropTypes.shape({
    mode: React.PropTypes.string,
    bgColor: React.PropTypes.string,
    selected: React.PropTypes.array,
    onSelect: React.PropTypes.func,
    onSelectAll: React.PropTypes.func,
    clickToSelect: React.PropTypes.bool,
    hideSelectColumn: React.PropTypes.bool,
    clickToSelectAndEditCell: React.PropTypes.bool
  }),
  cellEdit: React.PropTypes.shape({
    mode: React.PropTypes.string,
    blurToSave: React.PropTypes.bool,
    afterSaveCell: React.PropTypes.func
  }),
  insertRow: React.PropTypes.bool,
  deleteRow: React.PropTypes.bool,
  search: React.PropTypes.bool,
  columnFilter: React.PropTypes.bool,
  trClassName: React.PropTypes.any,
  options: React.PropTypes.shape({
    sortName: React.PropTypes.string,
    sortOrder: React.PropTypes.string,
    afterTableComplete: React.PropTypes.func,
    afterDeleteRow: React.PropTypes.func,
    afterInsertRow: React.PropTypes.func,
    afterSearch: React.PropTypes.func,
    afterColumnFilter: React.PropTypes.func,
    onRowClick: React.PropTypes.func,
    page: React.PropTypes.number,
    sizePerPageList: React.PropTypes.array,
    sizePerPage: React.PropTypes.number,
    paginationSize: React.PropTypes.number,
    onSortChange: React.PropTypes.func,
    onPageChange: React.PropTypes.func,
  }),
  fetchInfo: React.PropTypes.shape({
    dataTotalSize: React.PropTypes.number,
  }),
  exportCSV: React.PropTypes.bool,
  csvFileName: React.PropTypes.string
};
BootstrapTable.defaultProps = {
  height: "100%",
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
    clickToSelectAndEditCell: false
  },
  cellEdit: {
    mode: Const.CELL_EDIT_NONE,
    blurToSave: false,
    afterSaveCell: undefined
  },
  insertRow: false,
  deleteRow: false,
  search: false,
  multiColumnSearch: false,
  columnFilter: false,
  trClassName: '',
  options: {
    sortName: undefined,
    sortOrder: Const.SORT_DESC,
    afterTableComplete: undefined,
    afterDeleteRow: undefined,
    afterInsertRow: undefined,
    afterSearch: undefined,
    afterColumnFilter: undefined,
    onRowClick: undefined,
    page: 1,
    sizePerPageList: Const.SIZE_PER_PAGE_LIST,
    sizePerPage: Const.SIZE_PER_PAGE_LIST[0],
    paginationSize: Const.PAGINATION_SIZE
  },
  fetchInfo: {
    dataTotalSize: 0,
  },
  exportCSV: false,
  csvFileName: undefined
};

export default BootstrapTable;
