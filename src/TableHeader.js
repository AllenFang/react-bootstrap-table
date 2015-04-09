import React from 'react';
import classSet from 'classnames';

class TableHeader extends React.Component{

  render(){
    var containerClasses = classSet("table-header");

    return(
      <div className={containerClasses}>
        <table className="table table-hover table-bordered">
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
