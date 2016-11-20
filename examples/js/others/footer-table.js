/* eslint max-len: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


export default class FooterTable extends React.Component {

  render() {
    return (
        <BootstrapTable ref={ this.props.ref + '_table' } data={ this.props.data } footerData={ this.props.footerData }>
          <TableHeaderColumn dataField='id' isKey dataSort width='200'>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name' width='500' dataSort>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price' width='200'>Product Price</TableHeaderColumn>
          <TableHeaderColumn dataField='price' width='300'>Product Price</TableHeaderColumn>
        </BootstrapTable>
    );
  }
}
