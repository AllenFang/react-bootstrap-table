import React from 'react';
import classSet from 'classnames';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

class BootstrapTable extends React.Component{
  componentDidMount(){
    this.refs.table.getDOMNode().childNodes[0].childNodes[0].style.width =
      this.refs.table.getDOMNode().childNodes[1].childNodes[0].offsetWidth-1+"px";
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
        index: i
      };
    });

    return(
      <div ref="table" style={style}>
        <TableHeader>
          {this.props.children}
        </TableHeader>
        <TableBody data={this.props.data} columns={columns}
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
