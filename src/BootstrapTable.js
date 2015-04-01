import React from 'react';
import classSet from 'classnames';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

class BootstrapTable extends React.Component{
  componentDidMount(){

  }

  render(){
    var style = {
      height: this.props.height
    };

    var columns = this.props.children.map(function(column, i){
      return {name: column.props.dataField, index: i};
    });

    return(
      <div style={style}>
        <TableHeader>
          {this.props.children}
        </TableHeader>
        <TableBody data={this.props.data} columns={columns}/>
      </div>
    )
  }
}
BootstrapTable.propTypes = {
  height: React.PropTypes.string,
  data: React.PropTypes.array
};
BootstrapTable.defaultProps = {
  height: "100%"
};

export default BootstrapTable;
