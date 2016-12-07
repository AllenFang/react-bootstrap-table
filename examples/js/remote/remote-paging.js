import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class RemotePaging extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BootstrapTable data={ this.props.data } remote={ true } pagination={ true }
                      fetchInfo={ { dataTotalSize: this.props.totalDataSize } }
                      options={ { sizePerPage: this.props.sizePerPage,
                                  onPageChange: this.props.onPageChange,
                                  sizePerPageList: [ 5, 10 ],
                                  page: this.props.currentPage,
                                  onSizePerPageList: this.props.onSizePerPageList } }>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
