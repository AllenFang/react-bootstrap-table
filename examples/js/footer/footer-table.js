/* eslint max-len: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      price: 2100 + i
    });
  }
}

addProducts(70);

export default class FooterTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const footerData = [
      [
        {
          label: 'Total',
          columnIndex: 0
        },
        {
          label: 'Total value',
          columnIndex: 2,
          align: 'right',
          formatter: (tableData) => {
            let label = 0;
            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
              label += tableData[i].price;
            }
            return (
              <strong>{ label }</strong>
            );
          }
        }
      ]
    ];

    return (
      <div>
        <BootstrapTable
          data={ products }
          footerData={ footerData }
          footer
          pagination
          search>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
