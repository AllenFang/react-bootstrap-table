import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class RemoteFiltering extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BootstrapTable data={ this.props.data }
                      remote={ true }
                      options={ { onFilterChange: this.props.onFilterChange } }>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'
                           filter={ { type: 'TextFilter' } }>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'
                           filter={ { type: 'NumberFilter',
                                      numberComparators: [ '=', '>', '<=' ] } }>
          Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
