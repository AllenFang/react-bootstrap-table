import React from 'react';
import classSet from 'classnames';

class TableHeader extends React.Component{

  constructor(props) {
		super(props);
    this.props.children.forEach(function(reactElm){
      reactElm.props.clearSortCaret = this.clearSortCaret.bind(this);
    }, this);
	}

  clearSortCaret(order, sortField){
    var row = this.refs.header.getDOMNode();
    for(var i=0;i<row.childElementCount;i++){
      var column = row.childNodes[i].childNodes[0];
      if(column.getElementsByClassName("order").length > 0){
        column.removeChild(column.getElementsByClassName("order")[0]);
      }
    }
    this.props.onSort(order, sortField);
  }

  render(){
    var containerClasses = classSet("table-header");
    var rowStyle = {
      borderBottomStyle: "hidden"
    };
    return(
      <div className={containerClasses}>
        <table className="table table-hover table-bordered">
          <thead>
            <tr ref="header" style={rowStyle}>
              {this.props.children}
            </tr>
          </thead>
        </table>
      </div>
    )
  }
}

export default TableHeader;
