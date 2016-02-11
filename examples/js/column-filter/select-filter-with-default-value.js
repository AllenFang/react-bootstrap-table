'use strict';
import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

var products = [];

var qualityType = {
    0: "good",
    1: "bad",
    2: "unknown"
};

function addProducts(quantity) {
    var startId = products.length;
    for (var i = 0; i < quantity; i++) {
        var id = startId + i;
        products.push({
            id: id,
            name: "Item name " + id,
            quality: i%3
        });
    }
}

addProducts(5);

function enumFormatter(cell, row, enumObject){
    return enumObject[cell];
}

export default class SelectFilterWithDefaultValue extends React.Component{
    render(){
        return (
            <BootstrapTable data={products}>
                <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
                <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField="quality" dataFormat={enumFormatter} formatExtraData={qualityType} filter={{type: "SelectFilter", options: qualityType, defaultValue: 1}}>Product Quality</TableHeaderColumn>
            </BootstrapTable>
        );
    }
};
