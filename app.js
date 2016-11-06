import React from 'react';
import ReactDOM from 'react-dom';

import Example from './components/ExampleSection';

import BasicTable from './components/basic/basic-table';
import NoDataTable from './components/basic/no-data-table';
import BorderlessTable from './components/basic/borderless-table';
import StripedTable from './components/basic/hover-striped-table';
import LargeTable from './components/basic/large-column-table';
import ScrollTable from './components/basic/scroll-table';

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

import SingleSelectTable from './components/selection/single-select-table';
import MultiSelectTable from './components/selection/multi-select-table';
import UnSelectableTable from './components/selection/unselectable-table';
import ClickToSelectTable from './components/selection/click-to-select-table';
import DefaultSelectTable from './components/selection/default-select-table';
import SelectBgColorTable from './components/selection/select-bgcolor-table';
import SelectHookTable from './components/selection/select-hook-table';
import HideSelectionColumnTable from './components/selection/hide-selection-col-table';
import SelectValidationTable from './components/selection/select-validation-table';
import RowClickTable from './components/selection/row-click-table';
import OnlySelectedTable from './components/selection/only-show-selected-table';
import ExternallyManagedSelection from './components/selection/externally-managed-selection';
import CustomMultiSelectTable from './components/selection/custom-multi-select-table';
import SelectAll from './components/selection/all-select';

import DefaultPaginationTable from './components/pagination/default-pagination-table';
import CustomPaginationTable from './components/pagination/custom-pagination-table';
import PaginationHookTable from './components/pagination/pagination-hook-table';

import InsertRowTable from './components/manipulation/insert-row-table';
import DeleteRowTable from './components/manipulation/delete-row-table';
import SearchTable from './components/manipulation/search-table';
import ColumnFilterTable from './components/manipulation/filter-table';
import MultiSearchTable from './components/manipulation/multi-search-table';
import ExportCSVTable from './components/manipulation/export-csv-table';
import ExportCSVColumnTable from './components/manipulation/export-csv-column-table';
import DeleteRowCustomComfirmTable from './components/manipulation/del-row-custom-confirm';
import SearchClearTable from './components/manipulation/search-clear-table';
import SearchFormatTable from './components/manipulation/search-format-table';
import DebounceSearchTable from './components/manipulation/debounce-search-table';
import CustomButtonTextTable from './components/manipulation/custom-btn-text-table';
import DefaultSearchTable from './components/manipulation/default-search-table';


function appendGist(domId, gist) {
    window['callback'+domId] = function(gistData) {
        delete window['callback'+domId];

        var html = '<link rel="stylesheet" href="'+gistData.stylesheet+'"></link>';
        html += gistData.div;
        document.getElementById(domId).innerHTML = html;
    };

    var script = document.createElement('script');
    script.setAttribute('src', gist);
    document.getElementById(domId).appendChild(script);
}

function renderExampleAndGist(sources) {
    const lists = sources.map(source => {
        return (
            <Example id={ source.id } title={source.title} component={ source.component }/> 
        );
    });

    ReactDOM.render(<div className="example row row-bottom-padded-md">{ lists }</div>, document.querySelector('#example-section'));

    sources.forEach(source => {
        appendGist(source.id, source.gist+'on?callback=callback'+source.id);
    });
}

if (window.location.hash === '#basic') {
    $("#example-section").empty();
    const sources = [{
        id: 'basic_s',
        title: 'Baisc Table',
        gist: 'https://gist.github.com/AllenFang/025e43e818d4d00d4577f5aabd335d0a.js',
        component: (<BasicTable />)
    }, {
        id: 'nodata_s',
        title: 'Custom Text for Empty Data',
        gist: 'https://gist.github.com/AllenFang/10da97f8f5d44e073c924dfc07060ff7.js',
        component: (<NoDataTable />)
    }, {
        id: 'borderless_s',
        title: 'Borderless Table',
        gist: 'https://gist.github.com/AllenFang/4fb12be4ac0cab3671022e6141d3672c.js',
        component: (<BorderlessTable />)
    }, {
        id: 'striped_s',
        title: 'Hover, Striped, Condensed Table',
        gist: 'https://gist.github.com/AllenFang/1a6074c4004959ea525d69585f79e8bd.js',
        component: (<StripedTable />)
    }, {
        id: 'large_s',
        title: 'Large Table',
        gist: 'https://gist.github.com/AllenFang/fb58d551962484bee0aed61e22b7081f.js',
        component: (<LargeTable />)
    }, {
        id: 'scroll_s',
        title: 'Scroll Table',
        gist: 'https://gist.github.com/AllenFang/210ecca380a5613ae8a630ec1adae288.js',
        component: (<ScrollTable />)
    }];

    renderExampleAndGist(sources);
}

if (window.location.hash === '#column') {
    $("#example-section").empty();

    const sources = [{
        id: 'align_s',
        title: 'Column Align',
        gist: 'https://gist.github.com/AllenFang/88c592eeacf2355b63aaaa37a9220325.js',
        component: (<ColumnAlignTable />)
    }, {
        id: 'width_s',
        title: 'Column Width',
        gist: 'https://gist.github.com/AllenFang/a9412f07c38ce894de3316c09d5bc6b1.js',
        component: (<ColumnWidthTable />)
    }, {
        id: 'hide_s',
        title: 'Hide Column',
        gist: 'https://gist.github.com/AllenFang/d8a5f38598a76a082067c5b02c5ba28c.js',
        component: (<ColumnHideTable />)
    }, {
        id: 'title_s',
        title: 'Column Title',
        gist: 'https://gist.github.com/AllenFang/6e2b176e7cc439137417dfe747450cdd.js',
        component: (<ColumnTitleTable />)
    }];

    renderExampleAndGist(sources);
}

if (window.location.hash === '#sort') {
    $("#example-section").empty();

    const sources = [{
        id: 'sort_s',
        title: 'Column Sort',
        gist: 'https://gist.github.com/AllenFang/ab826ffbb22b351c3261a9134be95210.js',
        component: (<SortTable />)
    }, {
        id: 'defaultsort_s',
        title: 'Default Sort',
        gist: 'https://gist.github.com/AllenFang/3a1f10239043fe71c11320665d815534.js',
        component: (<DefaultSortTable />)
    }, {
        id: 'externalsort_s',
        title: 'Manage Sorting External',
        gist: 'https://gist.github.com/AllenFang/d26a733870c11c2163161fc22042ba6f.js',
        component: (<ExternalSort />)
    }, {
        id: 'customsort_s',
        title: 'Custom Sort Function',
        gist: 'https://gist.github.com/AllenFang/d8e69441dbafb357b410507ca7f2560a.js',
        component: (<CustomSortTable />)
    }, {
        id: 'customsortwithextra_s',
        title: 'Custom Sort with Extra Data',
        gist: 'https://gist.github.com/AllenFang/cbdaf0cb33d4e50a4a40809cde537893.js',
        component: (<CustomSortWithExtraDataTable />)
    }, {
        id: 'sorthook_s',
        title: 'Sorting Hooks',
        gist: 'https://gist.github.com/AllenFang/93f4fe46bae380e79679ff659b6442f2.js',
        component: (<SortHookTable />)
    }, {
        id: 'disableindicator_s',
        title: 'Disable Sort Indicator',
        gist: 'https://gist.github.com/AllenFang/7ea6fdf768a2f90c92a27cbf22ea2d5e.js',
        component: (<DisableSortIndicatorTable />)
    }, {
        id: 'customcaret_s',
        title: 'Custom Sort Caret',
        gist: 'https://gist.github.com/AllenFang/2073ee7f201452ba0854faa7c61556b4.js',
        component: (<CustomCaretSortTable />)
    }];

    renderExampleAndGist(sources);
}

if (window.location.hash === '#column-format') {
    $("#example-section").empty();

    const sources = [{
        id: 'htmlformat_s',
        title: 'Column Format with HTML String',
        gist: 'https://gist.github.com/AllenFang/14df24e966d29fffe24831c13411bb0d.js',
        component: (<HtmlColumnFormatTable />)
    }, {
        id: 'reactformat_s',
        title: 'Column Format with React',
        gist: 'https://gist.github.com/AllenFang/aae34cc1dd4dd341fbbe15d99cc3bcdf.js',
        component: (<ReactColumnFormatTable />)
    }, {
        id: 'formatwithextra_s',
        title: 'Column Format with Extra Data',
        gist: 'https://gist.github.com/AllenFang/7aae252ea34d8096aaf8feb93f935c36.js',
        component: (<ExtraDataColumnFormatTable />)
    }, {
        id: 'getrowindex_s',
        title: 'Get Row Index',
        gist: 'https://gist.github.com/AllenFang/b8a44f6cdc40191911f7024a7aa3964f.js',
        component: (<GetRowIndexTable />)
    }];

    renderExampleAndGist(sources);
}

if (window.location.hash === '#column-filter') {
    $("#example-section").empty();

    const sources = [{
        id: 'textfilter_s',
        title: 'Text Filter',
        gist: 'https://gist.github.com/AllenFang/410fb6680fb9547204f00e312b2a041d.js',
        component: (<TextFilter />)
    }, {
        id: 'textfilterdefaultvalue_s',
        title: 'Text Filter with Default Value',
        gist: 'https://gist.github.com/AllenFang/367eaaaa58a52aebad024bdb2fd41048.js',
        component: (<TextFilterWithDefaultValue />)
    }, {
        id: 'programtextfilter_s',
        title: 'Programmatically Text Filter',
        gist: 'https://gist.github.com/AllenFang/9ebe7cfbcb0d6420349722ccae9f90fd.js',
        component: (<ProgrammaticallyTextFilter />)
    }, {
        id: 'regexfilter_s',
        title: 'Regex Filter',
        gist: 'https://gist.github.com/AllenFang/ca19ac425f0e99f2caa5d4ec2317b779.js',
        component: (<RegexFilter />)
    }, {
        id: 'programregexfilter_s',
        title: 'Programmatically Regex Filter',
        gist: 'https://gist.github.com/AllenFang/e39230d68db36f267963828f439ac96d.js',
        component: (<ProgrammaticallyRegexFilter />)
    }, {
        id: 'selectfilter_s',
        title: 'Select Filter',
        gist: 'https://gist.github.com/AllenFang/f4228719380dff64ce227c6851e96f6c.js',
        component: (<SelectFilter />)
    }, {
        id: 'selectfilterdefaultvalue_s',
        title: 'Select Filter with Default Value',
        gist: 'https://gist.github.com/AllenFang/ce669bcb77370cc23eba47d107460842.js',
        component: (<SelectFilterWithDefaultValue />)
    }, {
        id: 'programselectfilter_s',
        title: 'Programmatically Select Filter',
        gist: 'https://gist.github.com/AllenFang/e5010f51cbbc22fc0f2fe4f181421e24.js',
        component: (<ProgrammaticallySelectFilter />)
    }, {
        id: 'numberfilter_s',
        title: 'Number Filter',
        gist: 'https://gist.github.com/AllenFang/36306e3054827aa81ae8101b54482cc7.js',
        component: (<NumberFilter />)
    }, {
        id: 'numberfilterwithdefault_s',
        title: 'Number Filter with Default Value',
        gist: 'https://gist.github.com/AllenFang/eed695af7291730c51173779d8a72c58.js',
        component: (<NumberFilterWithDefaultValue />)
    }, {
        id: 'programnumberfilter_s',
        title: 'Programmatically Number Filter',
        gist: 'https://gist.github.com/AllenFang/a96881b1385aa55d336b9f9cb30743bf.js',
        component: (<ProgrammaticallyNumberFilter />)
    }, {
        id: 'numberoptionsfilter_s',
        title: 'Options for Number Filter',
        gist: 'https://gist.github.com/AllenFang/4c252980926e8e878a93c58d0186b727.js',
        component: (<NumberOptionsFilter />)
    }, {
        id: 'numberoptionsfilterwithdefault_s',
        title: 'Options for Number Filter with Default Value',
        gist: 'https://gist.github.com/AllenFang/afeaa078757ec3a3d633b10a0713134f.js',
        component: (<NumberOptionsFilterWithDefaultValue />)
    }, {
        id: 'datefilter_s',
        title: 'Date Filter',
        gist: 'https://gist.github.com/AllenFang/c0468129ae79f01c6b3f3e1e0eefcfbe.js',
        component: (<DateFilter />)
    }, {
        id: 'datefilterwithdefaultvalue_s',
        title: 'Date Filter with Default Value',
        gist: 'https://gist.github.com/AllenFang/7c095d4eaa97895ef6b738cdd315169a.js',
        component: (<DateFilterWithDefaultValue />)
    }, {
        id: 'programdatefilter_s',
        title: 'Programmatically Date Filter',
        gist: 'https://gist.github.com/AllenFang/1c917a6b90f7f079dba6ac6a8fbbc44b.js',
        component: (<ProgrammaticallyDateFilter />)
    }, {
        id: 'customfilter_s',
        title: 'Custom Filter',
        gist: 'https://gist.github.com/AllenFang/f33003f64f0f3ce5239f82e5a97de94d.js',
        component: (<CustomFilter />)
    }, {
        id: 'floatfilter_s',
        title: 'Float Filter',
        gist: 'https://gist.github.com/AllenFang/2c18aeaa3b597a5754031d982a148476.js',
        component: (<FloatFilter />)
    }, {
        id: 'allfilter_s',
        title: 'All Filter & Clean Filter',
        gist: 'https://gist.github.com/AllenFang/c3ba9dbcfe1cb514f4767bef9afab75e.js',
        component: (<AllFilter />)
    }];

    renderExampleAndGist(sources);
}

if (window.location.hash === '#selection') {
    $("#example-section").empty();

    const sources = [{
        id: 'singleselect_s',
        title: 'Single Selection',
        gist: 'https://gist.github.com/AllenFang/6b72cde3c27fa474bd5de6b72bf0bf79.js',
        component: (<SingleSelectTable />)
    }, {
        id: 'multiselect_s',
        title: 'Multi Selection',
        gist: 'https://gist.github.com/AllenFang/0abe3e522cb55522c64531e5d569725a.js',
        component: (<MultiSelectTable />)
    }, {
        id: 'unselectable_s',
        title: 'Unselectable Row',
        gist: 'https://gist.github.com/AllenFang/29ca7e4f0a528fdf9cad4d3fd569cee0.js',
        component: (<UnSelectableTable />)
    }, {
        id: 'clicktoselect_s',
        title: 'Click to Select',
        gist: 'https://gist.github.com/AllenFang/99fd8fac96ca90de9ad8da74111c04be.js',
        component: (<ClickToSelectTable />)
    }, {
        id: 'defaultselect_s',
        title: 'Default Select',
        gist: 'https://gist.github.com/AllenFang/2653af3d115fd829e7c56ba223dfc228.js',
        component: (<DefaultSelectTable />)
    }, {
        id: 'selectbgcolor_s',
        title: 'Bg Color for Selection',
        gist: 'https://gist.github.com/AllenFang/e25d905bf8368aff64aadc424c2170a1.js',
        component: (<SelectBgColorTable />)
    }, {
        id: 'selecthook_s',
        title: 'Selection Hooks',
        gist: 'https://gist.github.com/AllenFang/536b4a23949188417db477205aaeb47d.js',
        component: (<SelectHookTable />)
    }, {
        id: 'hideselectioncolumn_s',
        title: 'Hide Selection Column',
        gist: 'https://gist.github.com/AllenFang/03c29400b4ddc7cb6d00a3dbc04329ac.js',
        component: (<HideSelectionColumnTable />)
    }, {
        id: 'validateselect_s',
        title: 'Select Validation',
        gist: 'https://gist.github.com/AllenFang/f7fc5a9abcc1b5846ab9c84c2e278f9f.js',
        component: (<SelectValidationTable />)
    }, {
        id: 'rowclick_s',
        title: 'Row Click',
        gist: 'https://gist.github.com/AllenFang/01671bf33ada41ea7744707d00670439.js',
        component: (<RowClickTable />)
    }, {
        id: 'showonlyselected_s',
        title: 'Show Only Selected',
        gist: 'https://gist.github.com/AllenFang/2d559871cc27b2e503036009a72dcfb9.js',
        component: (<OnlySelectedTable />)
    }, {
        id: 'externalselect_s',
        title: 'External Selection Management',
        gist: 'https://gist.github.com/AllenFang/09a5780bc3582649a1721cd9d0efd699.js',
        component: (<ExternallyManagedSelection />)
    }, {
        id: 'customselect_s',
        title: 'Custom Selection Column',
        gist: 'https://gist.github.com/AllenFang/1077c175d8cdcc58e1a07b52e398d95d.js',
        component: (<CustomMultiSelectTable />)
    }, {
        id: 'selectall_s',
        title: 'Select All on Current Page',
        gist: 'https://gist.github.com/AllenFang/a2c864191937b63114caea3e4b522bc0.js',
        component: (<SelectAll />)
    }];

    renderExampleAndGist(sources);
}

if (window.location.hash === '#pagination') {
    $("#example-section").empty();

    const sources = [{
        id: 'defaultpagination_s',
        title: 'Default Pagination',
        gist: 'https://gist.github.com/AllenFang/7c4a8def61e081f7bc468e87344ee3cb.js',
        component: (<DefaultPaginationTable />)
    }, {
        id: 'custompagination_s',
        title: 'Custom Pagination',
        gist: 'https://gist.github.com/AllenFang/320f9a729a4393db86f93dd1deb14e10.js',
        component: (<CustomPaginationTable />)
    }, {
        id: 'paginationhook_s',
        title: 'Pagination Hook',
        gist: 'https://gist.github.com/AllenFang/4c1eaacf3ad0b47a50976032c986472e.js',
        component: (<PaginationHookTable />)
    }];
    
    renderExampleAndGist(sources);
}

if (window.location.hash === '#manipulation') {
    $("#example-section").empty();

    const sources = [{
        id: 'insertrow_s',
        title: 'Insert Row',
        gist: 'https://gist.github.com/AllenFang/ae0390e15e0e8c673a7a175897bf443c.js',
        component: (<InsertRowTable />)
    }];

    renderExampleAndGist(sources);
}