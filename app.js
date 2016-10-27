import React from 'react';
import ReactDOM from 'react-dom';
import BasicTable from './components/basic/basic-table';
import NoDataTable from './components/basic/no-data-table';
import BorderlessTable from './components/basic/borderless-table';
import StripedTable from './components/basic/hover-striped-table';
import LargeTable from './components/basic/large-column-table';
import ScrollTable from './components/basic/scroll-table';
import SingleColumnTable from './components/basic/single-column-table';

import ColumnAlignTable from './components/column/column-align-table';
import ColumnWidthTable from './components/column/column-width-table';
import ColumnHideTable from './components/column/column-hide-table';
import ColumnTitleTable from './components/column/column-title-table';

import SortTable from './components/sort/sort-table';
import DefaultSortTable from './components/sort/default-sort-table';
import ExternalSort from './components/sort/manage-sort-external-table';
import CustomSortTable from './components/sort/custom-sort-table';
import CustomSortWithExtraDataTable from './components/sort/custom-sort-with-extra-data-table';
import SortHookTable from './components/sort/sort-hook-table';
import DisableSortIndicatorTable from './components/sort/disable-sort-indicator-table';
import CustomCaretSortTable from './components/sort/custom-caret-sort-table';


$(".example").hide();

if (window.location.hash === '#basic') {
    $("#example-basic").show();
    ReactDOM.render(<BasicTable />, document.getElementById('basic'));
    ReactDOM.render(<NoDataTable />, document.querySelector('#nodata'));
    ReactDOM.render(<BorderlessTable />, document.querySelector('#borderless'));
    ReactDOM.render(<StripedTable />, document.querySelector('#striped'));
    ReactDOM.render(<LargeTable />, document.querySelector('#large'));
    ReactDOM.render(<ScrollTable />, document.querySelector('#scroll'));
    ReactDOM.render(<SingleColumnTable />, document.querySelector('#single'));
}

if (window.location.hash === '#column') {
    $("#example-column").show();
    ReactDOM.render(<ColumnAlignTable />, document.querySelector('#align'));
    ReactDOM.render(<ColumnWidthTable />, document.querySelector('#width'));
    ReactDOM.render(<ColumnHideTable />, document.querySelector('#hide'));
    ReactDOM.render(<ColumnTitleTable />, document.querySelector('#title'));
}

if (window.location.hash === '#sort') {
    $("#example-sort").show();
    ReactDOM.render(<SortTable />, document.querySelector('#sort'));
    ReactDOM.render(<DefaultSortTable />, document.querySelector('#defaultsort'));
    ReactDOM.render(<ExternalSort />, document.querySelector('#externalsort'));
    ReactDOM.render(<CustomSortTable />, document.querySelector('#customsort'));
    ReactDOM.render(<CustomSortWithExtraDataTable />, document.querySelector('#customsortwithextra'));
    ReactDOM.render(<SortHookTable />, document.querySelector('#sorthook'));
    ReactDOM.render(<DisableSortIndicatorTable />, document.querySelector('#disableindicator'));
    ReactDOM.render(<CustomCaretSortTable />, document.querySelector('#customcaret'));
}