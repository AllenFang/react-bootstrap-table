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
    const startDate = new Date(2015, 0, 1);
    const endDate = new Date();
    for (var i = 0; i < quantity; i++) {
        const date = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
        var id = startId + i;
        products.push({
            id: id,
            name: "Item name " + id,
            quality: i%3,
            price: Math.floor((Math.random() * 100) + 1),
            satisfaction: Math.floor(Math.random() * 6),
            inStockDate: date.toString()
        });
    }
}

addProducts(5);

function enumFormatter(cell, row, enumObject){
    return enumObject[cell];
}

var satisfaction = [0, 1, 2, 3, 4, 5];

export default class AllFiltering extends React.Component{
    render(){
        return (
            <BootstrapTable data={products}>
                <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
                <TableHeaderColumn dataField="name" filter={{type: "TextFilter", placeholder: "Please enter a value"}}>Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField="quality" dataFormat={enumFormatter} formatExtraData={qualityType} filter={{type: "SelectFilter", options: qualityType}}>Product Quality</TableHeaderColumn>
                <TableHeaderColumn dataField="price" filter={{type: "NumberFilter", delay: 1000}}>Product Price</TableHeaderColumn>
                <TableHeaderColumn dataField="satisfaction" filter={{type: "NumberFilter", options: satisfaction}}>Buyer Satisfaction</TableHeaderColumn>
                <TableHeaderColumn dataField="inStockDate" filter={{type: "DateFilter"}}>In Stock From</TableHeaderColumn>
            </BootstrapTable>
        );
    }
};
