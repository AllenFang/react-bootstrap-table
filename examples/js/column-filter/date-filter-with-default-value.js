'use strict';
import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

var products = [];

function addProducts(quantity) {
    var startId = products.length;
    const startDate = new Date(2015, 0, 1);
    const endDate = new Date();
    for (var i = 0; i < quantity; i++) {
        const date = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
        var id = startId + i;
        products.push({
            id: id,
            name: "Item name " + id,
            inStockDate: date
        });
    }
}

addProducts(5);

function dateFormatter(cell, row) {
    return `${("0" + cell.getDate()).slice(-2)}/${("0" + (cell.getMonth() + 1)).slice(-2)}/${cell.getFullYear()}`;
}

export default class DateFilterWithDefaultValue extends React.Component{
    render(){
        return (
            <BootstrapTable data={products}>
                <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
                <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField="inStockDate" dataFormat={dateFormatter} filter={{type: "DateFilter", defaultValue: new Date(2015,7,22)}}>In Stock From</TableHeaderColumn>
            </BootstrapTable>
        );
    }
};
