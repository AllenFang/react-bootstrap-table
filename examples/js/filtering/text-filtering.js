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
            price: 2100 + i
        });
    }
}

addProducts(5);

export default class TextFiltering extends React.Component{
    render(){
        return (
            <BootstrapTable ref="table" data={products}>
                <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
                <TableHeaderColumn dataField="name" filter={{type: "TextFilter", delay: 1000}}>Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
            </BootstrapTable>
        );
    }
};
