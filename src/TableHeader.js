import React from 'react';
import classSet from 'classnames';

class TableHeader extends React.Component{

  render(){
    var divStyle = {
      height: 37,
      borderRightWidth: 1,
      borderRightStyle: "solid",
      borderRightColor: "rgb(221, 221, 221)",
      borderTopWidth: 1,
      borderTopStyle: "solid",
      borderTopColor: "rgb(221, 221, 221)"
    };

    var tableStyle = {
      tableLayout: "fixed",
      borderRightStyle: "hidden",
      borderTopStyle: "hidden"
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
