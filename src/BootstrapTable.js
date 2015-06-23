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

    if(this.props.cellEdit){
      this.props.cellEdit.__onCompleteEdit__ = this.handleEditCell.bind(this);
      if(this.props.cellEdit.mode !== Const.CELL_EDIT_NONE)
        this.props.selectRow.clickToSelect = false;
    }
    this.sortTable = false;
    this.order = Const.SORT_DESC;
    this.sortField = null;
    let keyField = null;
    this.props.children.forEach(function(column){
      if(column.props.dataSort) this.sortTable = true;
      if(column.props.isKey){
        if(keyField != null) throw "Error. Multiple key column be detected in TableHeaderColumn.";
        keyField = column.props.dataField;
      }
    }, this);
    if(keyField == null)
      throw "Error. No any key column defined in TableHeaderColumn. Use 'isKey={true}' to specify an unique column after version 0.5.4.";

    if(!Array.isArray(this.props.data)){
      this.store = new TableDataStore(this.props.data.getData());
      this.props.data.clear();
      this.props.data.on('change', (data) => {
        this.store.setData(data);
        this.setState({
          data: this.getTableData()
        })
      }.bind(this));
    } else{
      this.store = new TableDataStore(this.props.data);
    }
    this.store.setProps(this.props.pagination, keyField);
    this.state = {
      data: this.getTableData()
    };
  }

  getTableData() {
    let result = [];
    if(this.props.pagination){
      result = this.store.page(1, Const.SIZE_PER_PAGE).get();
    } else{
      result = this.store.get();
    }
    return result;
  }

  // componentWillMount(){
  //   // if(this.props.pagination){
  //   //   // this.handlePaginationData(1, Const.SIZE_PER_PAGE);
  //   //   this.store.page(1, Const.SIZE_PER_PAGE).get();
  //   // } else{
  //   //   this.store.get();
  //   // }
  // }

  componentDidMount(){
    this._adjustHeaderWidth();
  }

  componentDidUpdate(){
    this._adjustHeaderWidth();
  }

  render(){
    var tableClass = classSet("react-bs-table");
    var style = {
      height: this.props.height
    };
    var columns = this.props.children.map(function(column, i){
      return {
        name: column.props.dataField,
        align: column.props.dataAlign,
        sort: column.props.dataSort,
        format: column.props.dataFormat,
        editable: column.props.editable,
        hidden: column.props.hidden,
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
                       onSort={this.handleSort.bind(this)}
                       onSelectAllRow={this.handleSelectAllRow.bind(this)}>
            {this.props.children}
          </TableHeader>
          <TableBody ref="body" data={this.state.data} columns={columns}
            striped={this.props.striped}
            hover={this.props.hover}
            keyField={this.store.getKeyField()}
            condensed={this.props.condensed}
            selectRow={this.props.selectRow}
            cellEdit={this.props.cellEdit}/>
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
    if(isSelected){
      let selectedKey = this.store.getAllRowkey();
      this.props.selectRow.__onSelectAll__(selectedKey);
    }else{
      this.props.selectRow.__onSelectAll__([]);
    }
  }

  handleEditCell(newVal, rowIndex, colIndex){
    let fieldName;
    this.props.children.forEach(function(column, i){
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
  }

  handleDropRow(){
    let result;
    this.store.remove(this.refs.body.getSelectedRowKeys());

    if(this.props.pagination){
      let sizePerPage = this.refs.pagination.getSizePerPage();
      let currLastPage = Math.ceil(this.store.getDataNum()/sizePerPage);
      let currentPage = this.refs.pagination.getCurrentPage();
      if(currentPage > currLastPage)
        currentPage = currLastPage;
      result = this.store.page(currentPage, sizePerPage).get();
      this.setState({
        data: result
      });
      this.refs.pagination.changePage(currentPage);
    }else{
      result = this.store.get();
      this.setState({
        data: result
      });
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
    console.log(searchText);
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

  _adjustHeaderWidth(){
    this.refs.table.getDOMNode().childNodes[0].childNodes[0].style.width =
      this.refs.table.getDOMNode().childNodes[1].childNodes[0].offsetWidth-1+"px";
  }

  renderPagination(){
    if(this.props.pagination){
      return(
        <div>
          <PaginationList ref="pagination"
                          changePage={this.handlePaginationData.bind(this)}
                          sizePerPage={Const.SIZE_PER_PAGE}
                          dataSize={this.store.getDataNum()} />
        </div>
      )
    }else {
      return null;
    }
  }

  renderToolBar(){
    let columns = this.props.children.map(function(column){
      return {
        name: column.props.children,
        field: column.props.dataField
      };
    });
    if(this.props.insertRow || this.props.deleteRow || this.props.search){
      return(
        <div className="tool-bar">
          <ToolBar enableInsert={this.props.insertRow}
                   enableDelete={this.props.deleteRow}
                   enableSearch={this.props.search}
                   columns={columns}
                   onAddRow={this.handleAddRow.bind(this)}
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
  hover: React.PropTypes.bool,
  condensed: React.PropTypes.bool,
  pagination: React.PropTypes.bool,
  selectRow: React.PropTypes.shape({
    mode: React.PropTypes.string,
    bgColor: React.PropTypes.string,
    onSelect: React.PropTypes.func,
    onSelectAll: React.PropTypes.func,
    clickToSelect: React.PropTypes.bool
  }),
  cellEdit: React.PropTypes.shape({
    mode: React.PropTypes.string,
    blurToSave: React.PropTypes.bool,
    afterSaveCell: React.PropTypes.func
  }),
  insertRow: React.PropTypes.bool,
  deleteRow: React.PropTypes.bool,
  search: React.PropTypes.bool,
  columnFilter: React.PropTypes.bool
};
BootstrapTable.defaultProps = {
  height: "100%",
  striped: false,
  hover: false,
  condensed: false,
  pagination: false,
  selectRow: {
    mode: Const.ROW_SELECT_NONE,
    bgColor: Const.ROW_SELECT_BG_COLOR,
    onSelect: undefined,
    onSelectAll: undefined,
    clickToSelect: false
  },
  cellEdit:{
    mode: Const.CELL_EDIT_NONE,
    blurToSave: false,
    afterSaveCell: undefined
  },
  insertRow: false,
  deleteRow: false,
  search: false,
  columnFilter: false
};

export default BootstrapTable;
