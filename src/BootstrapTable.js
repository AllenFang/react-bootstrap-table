import React from 'react';
import classSet from 'classnames';
import Const from './Const';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

class BootstrapTable extends React.Component{

  constructor(props) {
		super(props);
		this.state = {data: this.props.data};
	}

  componentDidMount(){
    this.refs.table.getDOMNode().childNodes[0].childNodes[0].style.width =
      this.refs.table.getDOMNode().childNodes[1].childNodes[0].offsetWidth-1+"px";
  }

  sort(order, sortField){
    var clone = this.state.data.slice(0);

    this.state.data.sort(function(a,b){
      if(order == Const.SORT_ASC){
        return a[sortField] > b[sortField]?-1: ((a[sortField] < b[sortField]) ? 1 : 0);
      }else{
        return a[sortField] < b[sortField]?-1: ((a[sortField] > b[sortField]) ? 1 : 0);
      }
    });
    this.setState({data: this.state.data});
  }

  render(){
    var style = {
      height: this.props.height
    };

    var columns = this.props.children.map(function(column, i){
      return {
        name: column.props.dataField,
        align: column.props.dataAlign,
        sort: column.props.dataSort,
        format: column.props.dataFormat, 
        index: i
      };
    });

    return(
      <div ref="table" style={style}>
        <TableHeader onSort={this.sort.bind(this)}>
          {this.props.children}
        </TableHeader>
        <TableBody data={this.state.data} columns={columns}
          striped={this.props.striped}
          hover={this.props.hover}
          condensed={this.props.condensed}/>
      </div>
    )
  }
}
BootstrapTable.propTypes = {
  height: React.PropTypes.string,
  data: React.PropTypes.array,
  striped: React.PropTypes.bool,
  hover: React.PropTypes.bool,
  condensed: React.PropTypes.bool
};
BootstrapTable.defaultProps = {
  height: "100%",
  striped: false,
  hover: false,
  condensed: false
};

export default BootstrapTable;
