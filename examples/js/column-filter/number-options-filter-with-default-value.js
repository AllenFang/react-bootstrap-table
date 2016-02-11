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
            satisfaction: Math.floor(Math.random() * 6)
        });
    }
}

addProducts(5);

var satisfaction = [0, 1, 2, 3, 4, 5];

export default class NumberOptionsFilterWithDefaultValue extends React.Component{
    render(){
        return (
            <BootstrapTable data={products}>
                <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
                <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField="satisfaction" filter={{type: "NumberFilter", options: satisfaction, defaultValue: {number: 3, comparator: ">="}}}>Buyer Satisfaction</TableHeaderColumn>
            </BootstrapTable>
        );
    }
};
