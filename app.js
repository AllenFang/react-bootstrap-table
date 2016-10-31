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

import HtmlColumnFormatTable from './components/column-format/html-column-format-table';
import ReactColumnFormatTable from './components/column-format/react-column-format-table';
import ExtraDataColumnFormatTable from './components/column-format/extra-data-column-format-table';
import GetRowIndexTable from './components/column-format/get-row-index-table';

import TextFilter from './components/column-filter/text-filter';
import TextFilterWithDefaultValue from './components/column-filter/text-filter-with-default-value';
import ProgrammaticallyTextFilter from './components/column-filter/text-filter-programmatically';
import RegexFilter from './components/column-filter/regex-filter';
import ProgrammaticallyRegexFilter from './components/column-filter/regex-filter-programmatically';
import SelectFilter from './components/column-filter/select-filter';
import SelectFilterWithDefaultValue from './components/column-filter/select-filter-with-default-value';
import ProgrammaticallySelectFilter from './components/column-filter/select-filter-programmatically';
import NumberFilter from './components/column-filter/number-filter';
import NumberFilterWithDefaultValue from './components/column-filter/number-filter-with-default-value';
import ProgrammaticallyNumberFilter from './components/column-filter/number-filter-programmatically';
import NumberOptionsFilter from './components/column-filter/number-options-filter';
import NumberOptionsFilterWithDefaultValue from './components/column-filter/number-options-filter-with-default-value';
import DateFilter from './components/column-filter/date-filter';
import DateFilterWithDefaultValue from './components/column-filter/date-filter-with-default-value';
import ProgrammaticallyDateFilter from './components/column-filter/date-filter-programmatically';
import CustomFilter from './components/column-filter/custom-filter';
import AllFilter from './components/column-filter/all-filters';
import FloatFilter from './components/column-filter/float-filter';

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

if (window.location.hash === '#column-format') {
    $("#example-format").show();
    ReactDOM.render(<HtmlColumnFormatTable />, document.querySelector('#htmlformat'));
    ReactDOM.render(<ReactColumnFormatTable />, document.querySelector('#reactformat'));
    ReactDOM.render(<ExtraDataColumnFormatTable />, document.querySelector('#formatwithextra'));
    ReactDOM.render(<GetRowIndexTable />, document.querySelector('#getrowindex'));
}

if (window.location.hash === '#column-filter') {
    $("#example-filter").show();
    ReactDOM.render(<TextFilter />, document.querySelector('#textfilter'));
    ReactDOM.render(<TextFilterWithDefaultValue />, document.querySelector('#textfilterdefaultvalue'));
    ReactDOM.render(<ProgrammaticallyTextFilter />, document.querySelector('#programtextfilter'));
    ReactDOM.render(<RegexFilter />, document.querySelector('#regexfilter'));
    ReactDOM.render(<ProgrammaticallyRegexFilter />, document.querySelector('#programregexfilter'));
    ReactDOM.render(<SelectFilter />, document.querySelector('#selectfilter'));
    ReactDOM.render(<SelectFilterWithDefaultValue />, document.querySelector('#selectfilterdefaultvalue'));
    ReactDOM.render(<ProgrammaticallySelectFilter />, document.querySelector('#programselectfilter'));
    ReactDOM.render(<NumberFilter />, document.querySelector('#numberfilter'));
    ReactDOM.render(<NumberFilterWithDefaultValue />, document.querySelector('#numberfilterwithdefault'));
    ReactDOM.render(<ProgrammaticallyNumberFilter />, document.querySelector('#programnumberfilter'));
    ReactDOM.render(<NumberOptionsFilter />, document.querySelector('#numberoptionsfilter'));
    ReactDOM.render(<NumberOptionsFilterWithDefaultValue />, document.querySelector('#numberoptionsfilterwithdefault'));
    ReactDOM.render(<DateFilter />, document.querySelector('#datefilter'));
}