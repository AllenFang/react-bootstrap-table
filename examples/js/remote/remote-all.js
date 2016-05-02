import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class RemoteAll extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BootstrapTable data={ this.props.data }
                      remote={ true }
                      pagination={ true }
                      search={ true }
                      multiColumnSearch={ true }
                      fetchInfo={ { dataTotalSize: this.props.totalDataSize } }
                      insertRow={ true }
                      deleteRow={ true } selectRow={ { mode: 'radio' } }
                      exportCSV={ true }
                      options={ { sizePerPage: this.props.sizePerPage,
                                  sizePerPageList: [ 5, 10 ],
                                  page: this.props.currentPage,
                                  onPageChange: this.props.onPageChange,
                                  onSizePerPageList: this.props.onSizePerPageList,
                                  onSortChange: this.props.onSortChange,
                                  onFilterChange: this.props.onFilterChange,
                                  onSearchChange: this.props.onSearchChange,
                                  onAddRow: this.props.onAddRow,
                                  onDeleteRow: this.props.onDeleteRow,
                                  onExportToCSV: this.props.onExportToCSV } }>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'
                           filter={ { type: 'TextFilter' } }>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'
                           dataSort={ true }
                           filter={ { type: 'NumberFilter',
                                      numberComparators: [ '=', '>', '<=' ] } }>
          Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
