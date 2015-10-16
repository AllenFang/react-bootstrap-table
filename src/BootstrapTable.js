
import React from 'react';
import classSet from 'classnames';
import Const from './Const';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import PaginationList from './pagination/PaginationList';
import ToolBar from './toolbar/ToolBar';
import TableFilter from './TableFilter';
import {TableDataStore} from './store/TableDataStore';

class BootstrapTable extends React.Component{

  constructor(props) {
		super(props);

    this._attachCellEditFunc();
    let keyField = null;
    let customSortFuncMap = {};

    React.Children.forEach(this.props.children, function(column){
      if(column.props.isKey){
        if(keyField != null) throw "Error. Multiple key column be detected in TableHeaderColumn.";
        keyField = column.props.dataField;
      }
      if(column.props.sortFunc){
        customSortFuncMap[column.props.dataField] = column.props.sortFunc;
      }
    }, this);

    if(keyField == null)
      throw "Error. No any key column defined in TableHeaderColumn. Use 'isKey={true}' to specify an unique column after version 0.5.4.";

    if(!Array.isArray(this.props.data)){
      var _data = this.props.data.getData();
      this.store = new TableDataStore(_data);	  
	  this.props.oldDataLength = _data.length;
	  this.props.data.clear();
      this.props.data.on('change', (data) => {
		  //TODO: Allen to Review. Is this the right way of doing things? Or modify set state method to take in add/edit/delete additional param to know what has changed in the data?
		var dataAdded = false;
		var dataRemoved = false;	
		if(_this.props.oldDataLength < data.length) //add 
		{
			dataAdded = true;
			_this.props.oldDataLength = data.length;
		}
		else if(_this.props.oldDataLength > data.length) //delete 
		{
			dataRemoved = true;
			_this.props.oldDataLength = data.length;
		}
		
		_this.store.setData(data);		
		var result = undefined;
		if(dataAdded)
		{
			  if (_this.props.pagination) {
			  //if pagination is enabled and insert row be trigger, change to last page
			  var sizePerPage = _this.refs.pagination.getSizePerPage();
			  var currLastPage = Math.ceil(_this.store.getDataNum() / sizePerPage);
			  result = _this.store.page(currLastPage, sizePerPage).get();
			  _this.setState({
				data: result
			  });
			  _this.refs.pagination.changePage(currLastPage);
			} else {
			  result = _this.store.get();
			  _this.setState({
				data: result
			  });
			}	
		}
		else if(dataRemoved)
		{
		 if (this.props.pagination) {
          var sizePerPage = this.refs.pagination.getSizePerPage();
          var currLastPage = Math.ceil(this.store.getDataNum() / sizePerPage);
          var currentPage = this.refs.pagination.getCurrentPage();
          if (currentPage > currLastPage) currentPage = currLastPage;
          result = this.store.page(currentPage, sizePerPage).get();
          this.setState({
            data: result
          });
          this.refs.pagination.changePage(currentPage);
        } else {
          result = this.store.get();
          this.setState({
            data: result
          });
        }
		}
		else
		{
		   var sizePerPage = this.refs.pagination.getSizePerPage();
		   var currentPage = this.refs.pagination.getCurrentPage();
		   result = this.store.page(currentPage, sizePerPage).get();
		  _this.setState({
           data: result
			});
		}
      }.bind(this));
    } else{
      this.store = new TableDataStore(this.props.data);
    }
    this.store.setProps(this.props.pagination, keyField, customSortFuncMap);

    if(this.props.selectRow && this.props.selectRow.selected){
      this.store.setSelectedRowKey(this.props.selectRow.selected);
    }

    this.state = {
      data: this.getTableData(),
      selectedRowKeys: this.store.getSelectedRowKeys()
    };
  }

  getTableData() {
    let result = [];
    if(this.props.pagination){
      result = this.store.page(this.props.options.page || 1,
                  this.props.options.sizePerPage || Const.SIZE_PER_PAGE_LIST[0])
                  .get();
    } else{
      result = this.store.get();
    }
    return result;
  }

  componentWillReceiveProps(nextProps){
    if(Array.isArray(nextProps.data)){
      this.store.setData(nextProps.data);
      this.setState({
        data: this.getTableData()
      });
    }
    if(nextProps.selectRow && nextProps.selectRow.selected){
      //set default select rows to store.
      this.store.setSelectedRowKey(nextProps.selectRow.selected);
      this.setState({
        selectedRowKeys: nextProps.selectRow.selected
      });
    }
  }

  componentDidUpdate(){
    this._attachCellEditFunc();
    if(this.props.options.afterTableComplete)
      this.props.options.afterTableComplete();
  }

  _attachCellEditFunc(){
    if(this.props.cellEdit){
      this.props.cellEdit.__onCompleteEdit__ = this.handleEditCell.bind(this);
      if(this.props.cellEdit.mode !== Const.CELL_EDIT_NONE)
        this.props.selectRow.clickToSelect = false;
    }
  }

  render(){
    var tableClass = classSet("react-bs-table");
    var childrens = this.props.children;
    var style = {
      height: this.props.height
    };
    if(!Array.isArray(this.props.children)){
      childrens = [this.props.children];
    }
    var columns = childrens.map(function(column, i){
      return {
        name: column.props.dataField,
        align: column.props.dataAlign,
        sort: column.props.dataSort,
        format: column.props.dataFormat,
        editable: column.props.editable,
        hidden: column.props.hidden,
        className:column.props.columnClassName,
        width: column.props.width,
        index: i
      };
    }, this);

    var pagination = this.renderPagination();
    var toolBar = this.renderToolBar();
    var tableFilter = this.renderTableFilter(columns);
    return(
      <div className="react-bs-container">
        {toolBar}
        <div ref="table" style={style} className={tableClass}>
          <TableHeader rowSelectType={this.props.selectRow.mode}
                       hideSelectColumn={this.props.selectRow.hideSelectColumn}
                       sortName={this.props.options.sortName}
                       sortOrder={this.props.options.sortOrder}
                       onSort={this.handleSort.bind(this)}
                       onSelectAllRow={this.handleSelectAllRow.bind(this)}
                       bordered={this.props.bordered}>
            {this.props.children}
          </TableHeader>
          <TableBody ref="body" data={this.state.data} columns={columns}
            trClassName={this.props.trClassName}
            striped={this.props.striped}
            bordered={this.props.bordered}
            hover={this.props.hover}
            keyField={this.store.getKeyField()}
            condensed={this.props.condensed}
            selectRow={this.props.selectRow}
            cellEdit={this.props.cellEdit}
            selectedRowKeys={this.state.selectedRowKeys}
            onSelectRow={this.handleSelectRow.bind(this)}/>
          {tableFilter}
        </div>
        {pagination}
      </div>
    )
  }

  handleSort(order, sortField){
    let result = this.store.sort(order, sortField).get();
    this.setState({
      data: result
    });
  }

  handlePaginationData(page, sizePerPage){
    let result = this.store.page(page, sizePerPage).get();
    this.setState({
      data: result
    });
  }

  handleSelectAllRow(e){
    var isSelected = e.currentTarget.checked;
    let selectedRowKeys = [];
    if(isSelected){
      selectedRowKeys = this.store.getAllRowkey();
    }

    this.store.setSelectedRowKey(selectedRowKeys);
    this.setState({
      selectedRowKeys: selectedRowKeys
    });
    if(this.props.selectRow.onSelectAll){
      this.props.selectRow.onSelectAll(isSelected);
    }
  }

  handleSelectRow(row, isSelected){
    let currSelected = this.store.getSelectedRowKeys();
    let rowKey = row[this.store.getKeyField()];
    if(this.props.selectRow.mode === Const.ROW_SELECT_SINGLE){
      currSelected = isSelected?[rowKey]:[]
    } else {
      if(isSelected) {
        currSelected.push(rowKey);
      } else {
        currSelected = currSelected.filter(function(key){
          return rowKey !== key;
        });
      }
    }

    this.store.setSelectedRowKey(currSelected);
    this.setState({
      selectedRowKeys: currSelected
    });

    if(this.props.selectRow.onSelect){
      this.props.selectRow.onSelect(row, isSelected);
    }
  }

  handleEditCell(newVal, rowIndex, colIndex){
    let fieldName;
    React.Children.forEach(this.props.children, function(column, i){
      if(i == colIndex){
        fieldName = column.props.dataField;
        return false;
      }
    });

    let result = this.store.edit(newVal, rowIndex, fieldName).get();
    this.setState({
      data: result
    });

    if(this.props.cellEdit.afterSaveCell){
      this.props.cellEdit.afterSaveCell(this.state.data[rowIndex], fieldName, newVal);
    }
  }

  handleAddRowBegin(){
    if(this.refs.body){
      // this.refs.body.cancelEdit();
    }
  }

  handleAddRow(newObj){
    let msg = null, result;
    try {
      this.store.add(newObj);
    } catch(e){
      return e;
    }

    if(this.props.pagination){
      //if pagination is enabled and insert row be trigger, change to last page
      let sizePerPage = this.refs.pagination.getSizePerPage();
      let currLastPage = Math.ceil(this.store.getDataNum()/sizePerPage);
      result = this.store.page(currLastPage, sizePerPage).get();
      this.setState({
        data: result
      });
      this.refs.pagination.changePage(currLastPage);
    } else{
      result = this.store.get();
      this.setState({
        data: result
      });
    }

    if(this.props.options.afterInsertRow){
      this.props.options.afterInsertRow(newObj);
    }
  }

  handleDropRow(){
    let result;
    let dropRowKeys = this.store.getSelectedRowKeys();
    //add confirm befor the delete action
    if(dropRowKeys&&dropRowKeys.length>0){
      if(!confirm('Are you sure want delete?')){return}
    }
    this.store.remove(dropRowKeys);  //remove selected Row
    this.store.setSelectedRowKey([]);  //clear selected row key

    if(this.props.pagination){
      let sizePerPage = this.refs.pagination.getSizePerPage();
      let currLastPage = Math.ceil(this.store.getDataNum()/sizePerPage);
      let currentPage = this.refs.pagination.getCurrentPage();
      if(currentPage > currLastPage)
        currentPage = currLastPage;
      result = this.store.page(currentPage, sizePerPage).get();
      this.setState({
        data: result,
        selectedRowKeys: this.store.getSelectedRowKeys()
      });
      this.refs.pagination.changePage(currentPage);
    }else{
      result = this.store.get();
      this.setState({
        data: result,
        selectedRowKeys: this.store.getSelectedRowKeys()
      });
    }
    if(this.props.options.afterDeleteRow){
      this.props.options.afterDeleteRow(dropRowKeys);
    }
  }

  handleFilterData(filterObj){
    this.store.filter(filterObj);
    let result;
    if(this.props.pagination){
      let sizePerPage = this.refs.pagination.getSizePerPage();
      result = this.store.page(1, sizePerPage).get();
      this.refs.pagination.changePage(1);
    }else{
      result = this.store.get();
    }
    this.setState({
      data: result
    });
  }

  handleSearch(searchText){
    this.store.search(searchText);
    let result;
    if(this.props.pagination){
      let sizePerPage = this.refs.pagination.getSizePerPage();
      result = this.store.page(1, sizePerPage).get();
      this.refs.pagination.changePage(1);
    }else{
      result = this.store.get();
    }
    this.setState({
      data: result
    });
  }

  renderPagination(){
    if(this.props.pagination){
      return(
        <div>
          <PaginationList ref="pagination"
                          currPage={this.props.options.page || 1}
                          changePage={this.handlePaginationData.bind(this)}
                          sizePerPage={this.props.options.sizePerPage || Const.SIZE_PER_PAGE_LIST[0]}
                          sizePerPageList={this.props.options.sizePerPageList || Const.SIZE_PER_PAGE_LIST}
                          paginationSize={this.props.options.paginationSize || Const.PAGINATION_SIZE}
                          dataSize={this.store.getDataNum()} />
        </div>
      )
    }else {
      return null;
    }
  }

  renderToolBar(){
    let columns;
    if(Array.isArray(this.props.children)){
      columns = this.props.children.map(function(column){
        var props=column.props;
        return {
// <<<<<<< HEAD
//           name: column.props.children,
//           field: column.props.dataField,
//           editable: column.props.editable
// =======
          name: props.children,
          field: props.dataField,
          //when you want same auto generate value and not allow edit, example ID field
          autoValue:props.autoValue||false,
          //for create eidtor, no params for column.editable() indicate that editor for new row
          editable:props.editable&&(typeof props.editable==="function")?props.editable():props.editable,
          format:props.format?format:false
// >>>>>>> 99cd459deffd5262d88691e8b075977bc0a2811f
        };
      });
    } else {
      columns = [{
        name: this.props.children.props.children,
        field: this.props.children.props.dataField,
        editable: this.props.children.props.editable
      }];
    }
    if(this.props.insertRow || this.props.deleteRow || this.props.search){
      return(
        <div className="tool-bar">
          <ToolBar enableInsert={this.props.insertRow}
                   enableDelete={this.props.deleteRow}
                   enableSearch={this.props.search}
                   columns={columns}
                   searchPlaceholder={this.props.searchPlaceholder}
                   onAddRow={this.handleAddRow.bind(this)}
                   onAddRowBegin={this.handleAddRowBegin.bind(this)}
                   onDropRow={this.handleDropRow.bind(this)}
                   onSearch={this.handleSearch.bind(this)}/>
        </div>
      )
    }else{
      return null;
    }
  }

  renderTableFilter(columns){
    if(this.props.columnFilter){
      return (
        <TableFilter columns={columns}
                     rowSelectType={this.props.selectRow.mode}
                     onFilter={this.handleFilterData.bind(this)}/>
      );
    }else{
      return null;
    }
  }
}
BootstrapTable.propTypes = {
  height: React.PropTypes.string,
  data: React.PropTypes.array,
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
    page: React.PropTypes.number,
    sizePerPageList: React.PropTypes.array,
    sizePerPage: React.PropTypes.number,
    paginationSize: React.PropTypes.number
  })
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
  cellEdit:{
    mode: Const.CELL_EDIT_NONE,
    blurToSave: false,
    afterSaveCell: undefined
  },
  insertRow: false,
  deleteRow: false,
  search: false,
  columnFilter: false,
  trClassName: '',
  options: {
    sortName: undefined,
    sortOrder: Const.SORT_DESC,
    afterTableComplete: undefined,
    afterDeleteRow: undefined,
    afterInsertRow: undefined,
    page: 1,
    sizePerPageList: Const.SIZE_PER_PAGE_LIST,
    sizePerPage: Const.SIZE_PER_PAGE_LIST[0],
    paginationSize: Const.PAGINATION_SIZE
  }
};

export default BootstrapTable;
