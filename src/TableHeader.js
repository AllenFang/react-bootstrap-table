import React from 'react';
import classSet from 'classnames';

class TableHeader extends React.Component{

  render(){
    var divStyle = {
      height: 37,
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
      borderBottomColor: "rgb(221, 221, 221)"
    };

    var tableStyle = {
      tableLayout: "fixed"
    };

    return(
      <div style={divStyle}>
        <table className="table table-hover table-bordered" style={tableStyle}>
          <thead>
            <tr>
              {this.props.children}
            </tr>
          </thead>
        </table>
      </div>
    )
  }
}

export default TableHeader;
