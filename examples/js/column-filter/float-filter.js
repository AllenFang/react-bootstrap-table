'use strict';
import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

var products = [];

function addProducts(quantity) {
    var startId = products.length;
    for (var i = 0; i < quantity; i++) {
        var id = startId + i;
        products.push({
            id: id,
            name: "Item name " + id,
            price: (i*2 + Math.random()).toFixed(2),
        });
    }
}

function formatFloat(cell, row) {
    console.log('formatFloat:', cell);
    return parseFloat(cell);
}

var sortFloat = function(l, r, order) {
    var left = parseFloat(l.price);
    var right = parseFloat(r.price);
    if (order === 'desc') {
        return right - left;
    }
    else {
        return left - right;
    }
};

addProducts(5);

export default class FloatFilter extends React.Component{
    render(){
        return (
            <BootstrapTable data={products}>
                <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
                <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField="price"
                    filter={{type: "NumberFilter", delay: 1000, numberComparators: ["=", ">", "<"]}}
                    dataSort={true}
                    dataFormat={formatFloat}
                    filterFormatted={true}
                    sortFunc={sortFloat}>
                    Product Price
                </TableHeaderColumn>
            </BootstrapTable>
        );
    }
};
