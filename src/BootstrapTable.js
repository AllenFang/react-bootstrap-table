import React from 'react';
import classSet from 'classnames';
import Const from './Const';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import PaginationList from './pagination/PaginationList';

class BootstrapTable extends React.Component{

  constructor(props) {
		super(props);
		this.state = {
      data: this.props.data
    };
    if(this.props.cellEdit){
      this.props.cellEdit.__onCompleteEdit__ = this.handleEditCell.bind(this);
      if(this.props.cellEdit.mode !== Const.CELL_EDIT_NONE)
        this.props.selectRow.clickToSelect = false;
    }
    this.sortTable = false;
    this.order = Const.SORT_DESC;
    this.sortField = null;
    this.keyField = null;
    this.props.children.forEach(function(column){
      if(column.props.dataSort) this.sortTable = true;
      if(column.props.isKey){
        if(this.keyField != null) throw "Error. Multiple key column be detected in TableHeaderColumn.";
        this.keyField = column.props.dataField;
      }
    }, this);
    if(this.keyField == null)
      throw "Error. No any key column defined in TableHeaderColumn. Use 'isKey={true}' to specify an unique column after version 0.5.4.";
	}

  componentWillMount(){
    if(this.props.pagination)
      this.handlePaginationData(1, Const.SIZE_PER_PAGE);
  }

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
        index: i
      };
    }, this);

    var pagination = this.renderPagination();
    return(
      <div>
        <div ref="table" style={style} className={tableClass}>
          <TableHeader rowSelectType={this.props.selectRow.mode}
                       onSort={this.handleSort.bind(this)}
                       onSelectAllRow={this.handleSelectAllRow.bind(this)}>
            {this.props.children}
          </TableHeader>
          <TableBody data={this.state.data} columns={columns}
            striped={this.props.striped}
            hover={this.props.hover}
            keyField={this.keyField}
            condensed={this.props.condensed}
            selectRow={this.props.selectRow}
            cellEdit={this.props.cellEdit}
            parentRender={true}/>
        </div>
        <div>
          {pagination}
        </div>
      </div>
    )
  }

  handleSort(order, sortField){
    this.order = order;
    this.sortField = sortField;

    this.setState({data: this._sort(this.state.data, order, sortField)});
  }

  handlePaginationData(page, sizePerPage){
    var end = page*sizePerPage-1;
    var start = end - (sizePerPage - 1);
    var arr = [];
    for(var i=start;i<=end;i++){
      arr.push(this.props.data[i]);
      if(i+1 == this.props.data.length)break;
    }

    if(this.sortTable && null != this.sortField)
      arr = this._sort(arr, this.order, this.sortField);
    this.setState({data: arr});
  }

  handleSelectAllRow(e){
    var isSelected = e.currentTarget.checked;
    if(isSelected){
      var selectedKey = this.props.data.map(function(row){
        return row[this.keyField];
      }, this);
      this.props.selectRow.__onSelectAll__(selectedKey);
    }else{
      this.props.selectRow.__onSelectAll__([]);
    }
  }

  handleEditCell(newVal, rowIndex, colIndex){
    var fieldName;
    var row;
    this.props.children.forEach(function(column, i){
      if(i == colIndex){
        fieldName = column.props.dataField;
        return false;
      }
    });
    this.state.data[rowIndex][fieldName] = newVal;
    this.setState({data: this.state.data});
    if(this.props.cellEdit.afterSaveCell){
      this.props.cellEdit.afterSaveCell(this.state.data[rowIndex], fieldName, newVal);
    }
  }

  _sort(arr, order, sortField){
    arr.sort(function(a,b){
      if(order == Const.SORT_ASC){
        return a[sortField] > b[sortField]?-1: ((a[sortField] < b[sortField]) ? 1 : 0);
      }else{
        return a[sortField] < b[sortField]?-1: ((a[sortField] > b[sortField]) ? 1 : 0);
      }
    });
    return arr;
  }

  _adjustHeaderWidth(){
    this.refs.table.getDOMNode().childNodes[0].childNodes[0].style.width =
      this.refs.table.getDOMNode().childNodes[1].childNodes[0].offsetWidth-1+"px";
  }

  renderPagination(){
    if(this.props.pagination){
      return(
        <PaginationList changePage={this.handlePaginationData.bind(this)}
                        sizePerPage={Const.SIZE_PER_PAGE}
                        dataSize={this.props.data.length}/>
      )
    }else {
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
  })
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
  }
};

export default BootstrapTable;
