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
import ColumnStyleTable from './components/column/column-style-table';

import SortTable from './components/sort/sort-table';
import DefaultSortTable from './components/sort/default-sort-table';
import ExternalSort from './components/sort/manage-sort-external-table';
import CustomSortTable from './components/sort/custom-sort-table';
import CustomSortWithExtraDataTable from './components/sort/custom-sort-with-extra-data-table';
import SortHookTable from './components/sort/sort-hook-table';
import DisableSortIndicatorTable from './components/sort/disable-sort-indicator-table';
import CustomCaretSortTable from './components/sort/custom-caret-sort-table';
import MultiSortTable from './components/sort/multi-sort-table';
import ManageMultiSortTable from './components/sort/manage-multi-sort-external-table';

import HtmlColumnFormatTable from './components/column-format/html-column-format-table';
import ReactColumnFormatTable from './components/column-format/react-column-format-table';
import ExtraDataColumnFormatTable from './components/column-format/extra-data-column-format-table';
import GetRowIndexTable from './components/column-format/get-row-index-table';

import TextFilter from './components/column-filter/text-filter';
import TextFilterWithDefaultValue from './components/column-filter/text-filter-with-default-value';
import ProgrammaticallyTextFilter from './components/column-filter/text-filter-programmatically';
import TextFilterWithCondition from './components/column-filter/text-filter-with-eq-condition';
import RegexFilter from './components/column-filter/regex-filter';
import ProgrammaticallyRegexFilter from './components/column-filter/regex-filter-programmatically';
import SelectFilter from './components/column-filter/select-filter';
import SelectFilterWithDefaultValue from './components/column-filter/select-filter-with-default-value';
import ProgrammaticallySelectFilter from './components/column-filter/select-filter-programmatically';
import SelectFilterWithCondition from './components/column-filter/select-filter-with-eq-condition';
import SelectFilterText from './components/column-filter/select-filter-with-select-text';
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
import SelectBgColorDynamicTable from './components/selection/select-bgcolor-dynamic-table';
import SelectHookTable from './components/selection/select-hook-table';
import HideSelectionColumnTable from './components/selection/hide-selection-col-table';
import SelectValidationTable from './components/selection/select-validation-table';
import RowClickTable from './components/selection/row-click-table';
import OnlySelectedTable from './components/selection/only-show-selected-table';
import ExternallyManagedSelection from './components/selection/externally-managed-selection';
import CustomMultiSelectTable from './components/selection/custom-multi-select-table';
import SelectionColumnWidthTable from './components/selection/selection-column-width-table.js';
import SelectAll from './components/selection/all-select';

import DefaultPaginationTable from './components/pagination/default-pagination-table';
import CustomPaginationTable from './components/pagination/custom-pagination-table';
import PaginationHookTable from './components/pagination/pagination-hook-table';

import InsertRowTable from './components/manipulation/insert-row-table';
import DeleteRowTable from './components/manipulation/delete-row-table';
import SearchTable from './components/manipulation/search-table';
import MultiSearchTable from './components/manipulation/multi-search-table';
import ExportCSVTable from './components/manipulation/export-csv-table';
import ExportCSVColumnTable from './components/manipulation/export-csv-column-table';
import DeleteRowCustomComfirmTable from './components/manipulation/del-row-custom-confirm';
import SearchClearTable from './components/manipulation/search-clear-table';
import SearchFormatTable from './components/manipulation/search-format-table';
import DebounceSearchTable from './components/manipulation/debounce-search-table';
import CustomButtonTextTable from './components/manipulation/custom-btn-text-table';
import DefaultSearchTable from './components/manipulation/default-search-table';

import ClickToEditTable from './components/cell-edit/click-to-edit-table';
import DbClickToEditTable from './components/cell-edit/dbclick-to-edit-table';
import BlurToSaveTable from './components/cell-edit/blur-to-save-table';
import CellEditHookTable from './components/cell-edit/cell-edit-hook-table';
import NonEditableTable from './components/cell-edit/non-editable-table';
import CustomCellEditTable from './components/cell-edit/custom-cell-edit-table';
import EditCellClassNameTable from './components/cell-edit/cell-edit-classname.js';

import TrClassStringTable from './components/style/tr-class-string-table';
import TrClassFunctionTable from './components/style/tr-class-function-table';
import TdClassStringTable from './components/style/td-class-string-table';
import TdClassFunctionTable from './components/style/td-class-function-table';
import InlineStylingTable from './components/style/inline-style-table';
import TableClassTable from './components/style/table-class-table';
import EditTDClassTable from './components/style/edit-td-class-table.js';

import RemoteStoreSorting from './components/remote/remote-store-sorting';
import RemoteStoreFiltering from './components/remote/remote-store-filtering';
import RemoteStoreSearch from './components/remote/remote-store-search';
import RemoteStorePaging from './components/remote/remote-store-paging';
import RemoteStoreInsertRow from './components/remote/remote-store-insert-row';
import RemoteStoreDeleteRow from './components/remote/remote-store-delete-row';
import RemoteStoreCellEdit from './components/remote/remote-store-cell-edit';
import RemoteStoreExportCSV from './components/remote/remote-store-export-csv';
import RemoteStoreAlternative from './components/remote/remote-store-alternative';

import EditTypeTable from './components/advance/edit-type-table';
import DataInsertTypeTable from './components/advance/insert-type-table';
import AutoRowKeyTable from './components/advance/auto-rowkey-table';
import ValidatorTable from './components/advance/validator-table';
import HideOnInsertTable from './components/advance/hide-on-insert-table';
import DisableToastrTable from './components/advance/disable-toastr-table.js';

import MouseEventTable from './components/others/mouse-event-table';
import GetPageNumByKeyTable from './components/others/expose-api-table';

import DefaultCustomInsertModalHeaderTable from './components/custom/insert-modal/default-custom-insert-modal-header';
import FullyCustomInsertModalHeaderTable from './components/custom/insert-modal/fully-custom-insert-modal-header';
import DefaultCustomInsertModalFooterTable from './components/custom/insert-modal/default-custom-insert-modal-footer';
import FullyCustomInsertModalFooterTable from './components/custom/insert-modal/fully-custom-insert-modal-footer';
import CustomInsertModalBodyTable from './components/custom/insert-modal/custom-insert-modal-body';
import CustomInsertModalTable from './components/custom/insert-modal/custom-insert-modal';
import DefaultCustomInsertButtonTable from './components/custom/insert-button/default-custom-insert-button';
import FullyCustomInsertButtonTable from './components/custom/insert-button/fully-custom-insert-button';
import DefaultCustomDeleteButtonTable from './components/custom/delete-button/default-custom-delete-button';
import FullyCustomDeleteButtonTable from './components/custom/delete-button/fully-custom-delete-button';
import DefaultCustomShowSelectButtonTable from './components/custom/show-only-select-button/default-custom-show-select-button';
import FullyCustomShowSelectButtonTable from './components/custom/show-only-select-button/fully-custom-show-select-button';
import DefaultCustomExportCSVButtonTable from './components/custom/csv-button/default-custom-csv-button';
import FullyCustomExportCSVButtonTable from './components/custom/csv-button/fully-custom-csv-button';
import DefaultCustomClearButtonTable from './components/custom/search/default-custom-search-clear-button';
import FullyCustomClearButtonTable from './components/custom/search/fully-custom-search-clear-button';
import DefaultCustomSearchFieldTable from './components/custom/search/default-custom-search-field';
import FullyCustomSearchFieldTable from './components/custom/search/fully-custom-search-field';
import CustomSearchPanel1 from './components/custom/search/custom-search-panel-1';
import CustomSearchPanel2 from './components/custom/search/custom-search-panel-2';
import CustomButtonGroup from './components/custom/toolbar/custom-button-group';
import CustomToolBar1 from './components/custom/toolbar/custom-toolbar-1';
import LeftSearchPanel from './components/custom/toolbar/left-search-panel';
import CustomSizePerPage from './components/custom/pagination/custom-size-per-page';
import CustomPaginationPanel from './components/custom/pagination/custom-pagination-panel';
import FullyCustomSizePerPage from './components/custom/pagination/fully-custom-size-per-page';

import SimpleColumnHeaderSpan from './components/column-header-span/column-header-span';
import ComplexColumnHeaderSpan from './components/column-header-span/column-header-span-complex';

import SimpleNavTable from './components/keyboard-nav/simple-nav-table';
import PaginationNavTable from './components/keyboard-nav/pagination-nav-table';
import NavWithSelectionTable from './components/keyboard-nav/nav-with-select-table';
import CustomNavStyleTable from './components/keyboard-nav/custom-style-nav-table';
import DisableClickToNavTable from './components/keyboard-nav/disable-click-to-nav-table';
import NavWithCellEditTable from './components/keyboard-nav/nav-with-cell-edit-table';
import CustomStyleNavWithCellEditTable from './components/keyboard-nav/custom-style-nav-with-cell-edit-table';
import EnterToEditWithNavTable from './components/keyboard-nav/enter-to-edit-with-nav-table';
import NavWithExpandingTable from './components/keyboard-nav/nav-with-expand-table';

import ExpandRow from './components/expandRow/expandRow';
import ExpandByColumn from './components/expandRow/expand-row-by-column';
import ManageExpandExternal from './components/expandRow/manage-expanding';
import ExpandWithSelection from './components/expandRow/expand-row-with-selection';
import ExpandWithCellEdit from './components/expandRow/expand-row-with-cellEdit';
import ExpandIndicator from './components/expandRow/expand-indicator';
import CustomExpandIndicator from './components/expandRow/custom-expand-indicator';


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
        title: 'Basic Table',
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
    }, {
        id: 'columnstyle_s',
        title: 'th & td Style',
        gist: 'https://gist.github.com/AllenFang/b8fa9dcea2357c41b206a63bf228293d.js',
        component: (<ColumnStyleTable />)
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
    }, {
        id: 'multisort_s',
        title: 'Multi Sort Table',
        gist: 'https://gist.github.com/AllenFang/f04eaddd59a91f8f13b86e313817c49a.js',
        component: (<MultiSortTable />)
    }, {
        id: 'managemultisort_s',
        title: 'Manage Multi Sorting External',
        gist: 'https://gist.github.com/AllenFang/c8c53c68fcaa89672add00a8b2876409.js',
        component: (<ManageMultiSortTable />)
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
        id: 'textfiltercondition_s',
        title: 'Text Filter with eq Condition',
        gist: 'https://gist.github.com/AllenFang/24a90dc0c1e7120800bd2496200ff112.js',
        component: (<TextFilterWithCondition />)
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
        id: 'selectfiltercondition_s',
        title: 'Select Filter with eq Condition',
        gist: 'https://gist.github.com/AllenFang/2b86082375974d79529a179951cd6cda.js',
        component: (<SelectFilterWithCondition />)
    }, {
        id: 'customselectfiltertext_s',
        title: 'Custom Select Filter Text',
        gist: 'https://gist.github.com/AllenFang/d4ff4ae508ebb7b45e5bb5f1bb5a396d.js',
        component: (<SelectFilterText />)
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
        id: 'selectbgcolordynamic_s',
        title: 'Dynamic Bg Color for Selection',
        gist: 'https://gist.github.com/AllenFang/865a791dd874c57a1766f4bee97d11aa.js',
        component: (<SelectBgColorDynamicTable />)
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
        id: 'selectcolumnwidth_s',
        title: 'Configure Selection Column Width',
        gist: 'https://gist.github.com/AllenFang/67ac289988218c179564c118a5ae5318.js',
        component: (<SelectionColumnWidthTable />)
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
    }, {
        id: 'deleterow_s',
        title: 'Delete Row',
        gist: 'https://gist.github.com/AllenFang/489247612dd5e6afca0b7e7ecafdbcf5.js',
        component: (<DeleteRowTable />)
    }, {
        id: 'search_s',
        title: 'Table Search',
        gist: 'https://gist.github.com/AllenFang/72cd12ad5297b171adecfd68ad8c93e5.js',
        component: (<SearchTable />)
    }, {
        id: 'multisearch_s',
        title: 'Table Multi Search',
        gist: 'https://gist.github.com/AllenFang/90df5791326a4ac3d759732efa38bbdb.js',
        component: (<MultiSearchTable />)
    }, {
        id: 'exportcsv_s',
        title: 'Export CSV',
        gist: 'https://gist.github.com/AllenFang/752c295ef5e3dfd0e420e4c920941282.js',
        component: (<ExportCSVTable />)
    }, {
        id: 'exportcsvcolumn_s',
        title: 'Decide Column be Exported to CSV',
        gist: 'https://gist.github.com/AllenFang/a431c53298a1feaab9dea78f9883b3b9.js',
        component: (<ExportCSVColumnTable />)
    }, {
        id: 'deleterowwithcustomconfirm_s',
        title: 'Custom Delete Row Confirm',
        gist: 'https://gist.github.com/AllenFang/649e0f12bc30faed17bf9d3b5c991b91.js',
        component: (<DeleteRowCustomComfirmTable />)
    }, {
        id: 'defaultsearch_s',
        title: 'Default Search',
        gist: 'https://gist.github.com/AllenFang/a3b25507fba771d62cc72909c5fc1ed1.js',
        component: (<DefaultSearchTable />)
    }, {
        id: 'clearsearch_s',
        title: 'Clear Search',
        gist: 'https://gist.github.com/AllenFang/99b50f7e0e10df7caff177471b828700.js',
        component: (<SearchClearTable />)
    }, {
        id: 'searchformat_s',
        title: 'Search on Formatted',
        gist: 'https://gist.github.com/AllenFang/a3d10d749b9231aa18a0a2e9ce396375.js',
        component: (<SearchFormatTable />)
    }, {
        id: 'delaytosearch_s',
        title: 'Delay to Search',
        gist: 'https://gist.github.com/AllenFang/fd49c33ae85fbe0b3e355eff03223d19.js',
        component: (<DebounceSearchTable />)
    }, {
        id: 'custombtntext_s',
        title: 'Custom Button Text',
        gist: 'https://gist.github.com/AllenFang/6c7298418d6f281f56cb031af11184d1.js',
        component: (<CustomButtonTextTable />)
    }];

    renderExampleAndGist(sources);
}

if (window.location.hash === '#celledit') {
    $("#example-section").empty();

    const sources = [{
        id: 'clicktoedit_s',
        title: 'Click to Edit',
        gist: 'https://gist.github.com/AllenFang/98c0610ee015f4deabd4dd9923f17aff.js',
        component: (<ClickToEditTable />)
    }, {
        id: 'dbclicktoedit_s',
        title: 'DbClick to Edit',
        gist: 'https://gist.github.com/AllenFang/1403919532c55bd7e7c584b985d58061.js',
        component: (<DbClickToEditTable />)
    }, {
        id: 'blurtosave_s',
        title: 'Blur to Save',
        gist: 'https://gist.github.com/AllenFang/f1023ce65c0160875f5cd522d6a20de5.js',
        component: (<BlurToSaveTable />)
    }, {
        id: 'celledithook_s',
        title: 'Hooks for Cell Edit',
        gist: 'https://gist.github.com/AllenFang/e3bff44878a32c32e436add87dec820c.js',
        component: (<CellEditHookTable />)
    }, {
        id: 'noneditable_s',
        title: 'Non Editable Column',
        gist: 'https://gist.github.com/AllenFang/16f9586877bc0e205a6c712022afa74a.js',
        component: (<NonEditableTable />)
    }, {
        id: 'customcelledit_s',
        title: 'Custom Cell Edit',
        gist: 'https://gist.github.com/AllenFang/4c0914cbb05b165bfb2c585c6cbaa4cb.js',
        component: (<CustomCellEditTable />)
    }, {
        id: 'customceditingcellclass_s',
        title: 'Custom Editing Cell Class',
        gist: 'https://gist.github.com/AllenFang/6b2d5e98462121b44a0acb4e73e549d8.js',
        component: (<EditCellClassNameTable />)
    }];

    renderExampleAndGist(sources);
}

if (window.location.hash === '#style') {
    $("#example-section").empty();

    const sources = [{
        id: 'trclassstring_s',
        title: 'Use trClassName as String on <BootstrapTable>',
        gist: 'https://gist.github.com/AllenFang/eb878e9f1271dcfeaca7e6ddc92644e4.js',
        component: (<TrClassStringTable />)
    }, {
        id: 'trclassfunction_s',
        title: 'Use trClassName as Function on <BootstrapTable>;',
        gist: 'https://gist.github.com/AllenFang/b8379a60987c544cba063eea7c4aa12e.js',
        component: (<TrClassFunctionTable />)
    }, {
        id: 'tdclassstring_s',
        title: 'Use classname & columnClassName as String on <TableHeaderColumn>(header & column)',
        gist: 'https://gist.github.com/AllenFang/5ddfe2a774c4a46eebe508f248be1e82.js',
        component: (<TdClassStringTable />)
    }, {
        id: 'tdclassfncton_s',
        title: 'Use classname & columnClassName as Function on <TableHeaderColumn>(header & column)',
        gist: 'https://gist.github.com/AllenFang/c86e26a7196e42b623b75bbc43771b7a.js',
        component: (<TdClassFunctionTable />)
    }, {
        id: 'inlinestyle_s',
        title: 'Inline Style for Bootstrap Table',
        gist: 'https://gist.github.com/AllenFang/89ed1b0f6d502ae4b3c307ec176c442e.js',
        component: (<InlineStylingTable />)
    }, {
        id: 'tableclass_s',
        title: 'Add Class to Table',
        gist: 'https://gist.github.com/AllenFang/0efacbe6a14c3f52cebd21a8bc4d73d7.js',
        component: (<TableClassTable />)
    }, {
        id: 'addclasstoeditingcell_s',
        title: 'Add Class to Edit Cell',
        gist: 'https://gist.github.com/AllenFang/66ad7ebef9c43c699e90a76fa7fe7c46.js',
        component: (<EditTDClassTable />)
    }];

    renderExampleAndGist(sources);
}

if (window.location.hash === '#remote') {
    $("#example-section").empty();

    const sources = [{
        id: 'remotesort_s',
        title: 'Remote Sorting',
        gist: 'https://gist.github.com/AllenFang/0885c1ee36c9750f7b31f8d66f5a9eb7.js',
        component: (<RemoteStoreSorting />)
    }, {
        id: 'remotefiltering_s',
        title: 'Remote Filtering',
        gist: 'https://gist.github.com/AllenFang/db6f8ceb3b64b6d2d83dde38f5baa271.js',
        component: (<RemoteStoreFiltering />)
    }, {
        id: 'remotesearch_s',
        title: 'Remote Searching',
        gist: 'https://gist.github.com/AllenFang/3c5f4a30840a6368511a5c914ef9a5f2.js',
        component: (<RemoteStoreSearch />)
    }, {
        id: 'remotepage_s',
        title: 'Remote Paging',
        gist: 'https://gist.github.com/AllenFang/ceea596f919c2ba833e3446d6f0d5dd1.js',
        component: (<RemoteStorePaging />)
    }, {
        id: 'remoteinsert_s',
        title: 'Remote Insert',
        gist: 'https://gist.github.com/AllenFang/779e94dbb0da812e2f52862d8266a9b9.js',
        component: (<RemoteStoreInsertRow />)
    }, {
        id: 'remotedelete_s',
        title: 'Remote Delete',
        gist: 'https://gist.github.com/AllenFang/41b0cab636af5048d9871daa2d9c59c9.js',
        component: (<RemoteStoreDeleteRow />)
    }, {
        id: 'remotecelledit_s',
        title: 'Remote Cell Editing',
        gist: 'https://gist.github.com/AllenFang/f855730fd7a7f6b0592dd323afbd290b.js',
        component: (<RemoteStoreCellEdit />)
    }, {
        id: 'remotealternative_s',
        title: 'Alternative Remote Functionality',
        gist: 'https://gist.github.com/AllenFang/e1c00b3e03d67f817b6a433c94a2965d.js',
        component: (<RemoteStoreAlternative />)
    }, {
        id: 'remotecsvexport_s',
        title: 'Remote Exporting CSV',
        gist: 'https://gist.github.com/AllenFang/d873f1f2b5d8ea60b8a66cce095cbfa2.js',
        component: (<RemoteStoreExportCSV />)
    }];

    renderExampleAndGist(sources);
}

if (window.location.hash === '#advance') {
    $("#example-section").empty();

    const sources = [{
        id: 'edittype_s',
        title: 'Cell Editing Type',
        gist: 'https://gist.github.com/AllenFang/02a1b005a010c33cd3f1f58bd2a82ca1.js',
        component: (<EditTypeTable />)
    }, {
        id: 'insertType_s',
        title: 'Insert Type',
        gist: 'https://gist.github.com/AllenFang/16a8559bea055cdfb9b5be6e2b2a67a2.js',
        component: (<DataInsertTypeTable />)
    }, {
        id: 'autorowkey_s',
        title: 'Auto RowKey',
        gist: 'https://gist.github.com/AllenFang/de841915767290b27ae158c67da38cd4.js',
        component: (<AutoRowKeyTable />)
    }, {
        id: 'validator_s',
        title: 'Insert & Cell Edit Validator',
        gist: 'https://gist.github.com/AllenFang/41db6281d55b855239c532b752d9cc5b.js',
        component: (<ValidatorTable />)
    }, {
        id: 'hideoninsert_s',
        title: 'Hide Field on Insert Row',
        gist: 'https://gist.github.com/AllenFang/632118c63533834b9b766bf659b4ae2f.js',
        component: (<HideOnInsertTable />)
    }, {
        id: 'exampletoastr_s',
        title: 'Disable Toastr Example',
        gist: 'https://gist.github.com/AllenFang/f9c4a3056cd15a847b9af743680a2c05.js',
        component: (<DisableToastrTable />)
    }];

    renderExampleAndGist(sources);
}

if (window.location.hash === '#others') {
    $("#example-section").empty();

    const sources = [{
        id: 'mouseevent_s',
        title: 'Mouse Event',
        gist: 'https://gist.github.com/AllenFang/44c07ea83294a88a1affa2c98897d012.js',
        component: (<MouseEventTable />)
    }, {
        id: 'pagenumbykey_s',
        title: 'Get Page Number by RowKey',
        gist: 'https://gist.github.com/AllenFang/3c023b35ce9a6f5e5f2f202770f70cf5.js',
        component: (<GetPageNumByKeyTable />)
    }];

    renderExampleAndGist(sources);
}

if (window.location.hash === '#custom') {
    $("#example-section").empty();

    const sources = [{
        id: 'modalheadercustomdefault_s',
        title: 'Default Custom the Header of Insert Modal',
        gist: 'https://gist.github.com/AllenFang/44c07ea83294a88a1affa2c98897d012.js',
        component: (<DefaultCustomInsertModalHeaderTable />)
    }, {
        id: 'modalheadercustomfully_s',
        title: 'Fully Custom the Header of Insert Modal',
        gist: 'https://gist.github.com/AllenFang/689e16a5209f470d69e6418e8445b7fb.js',
        component: (<FullyCustomInsertModalHeaderTable />)
    }, {
        id: 'modalfootercustomdefault_s',
        title: 'Default Custom the Footer of Insert Modal',
        gist: 'https://gist.github.com/AllenFang/31ae7ed92f88f44e1e4c7fb0101e2c84.js',
        component: (<DefaultCustomInsertModalFooterTable />)
    }, {
        id: 'modalfootercustomfully_s',
        title: 'Fully Custom the Footer of Insert Modal',
        gist: 'https://gist.github.com/AllenFang/980e13dd80fd66bc9a6243842acd7b45.js',
        component: (<FullyCustomInsertModalFooterTable />)
    }, {
        id: 'modalbodycustom_s',
        title: 'Custom the Body of Insert Modal',
        gist: 'https://gist.github.com/AllenFang/bb06cc4740762bfea8ac50c2d620cbb1.js',
        component: (<CustomInsertModalBodyTable />)
    }, {
        id: 'custommodal_s',
        title: 'Custom the Insert Modal',
        gist: 'https://gist.github.com/AllenFang/b07eb78dc052c7a6dc4d026cdc5eeb1b.js',
        component: (<CustomInsertModalTable />)
    }, {
        id: 'defaultcustominsertbtn_s',
        title: 'Default Custom Insert Button',
        gist: 'https://gist.github.com/AllenFang/7eedf99212f27a34997c95e6891b65fa.js',
        component: (<DefaultCustomInsertButtonTable />)
    }, {
        id: 'fullycustominsertbtn_s',
        title: 'Fully Custom Insert Button',
        gist: 'https://gist.github.com/AllenFang/66887f1d633000fa14dfc9ecf0e35cd6.js',
        component: (<FullyCustomInsertButtonTable />)
    }, {
        id: 'defaultcustomdeletebtn_s',
        title: 'Default Custom Delete Button',
        gist: 'https://gist.github.com/AllenFang/283c5627abe3f94aad43d8347fb16e2a.js',
        component: (<DefaultCustomDeleteButtonTable />)
    }, {
        id: 'fullycustomdeletebtn_s',
        title: 'Fully Custom Delete Button',
        gist: 'https://gist.github.com/AllenFang/437025e8c2c633d40f83efddaf6a7b17.js',
        component: (<FullyCustomDeleteButtonTable />)
    }, {
        id: 'defaultcustomshowselectbtn_s',
        title: 'Default Custom Show Select Button',
        gist: 'https://gist.github.com/AllenFang/e180deebbeb16ba7bb45138c3683218f.js',
        component: (<DefaultCustomShowSelectButtonTable />)
    }, {
        id: 'fullycustomshowselectbtn_s',
        title: 'Fully Custom Show Select Button',
        gist: 'https://gist.github.com/AllenFang/617b6d1480dc0983524759d67f7d7a7b.js',
        component: (<FullyCustomShowSelectButtonTable />)
    }, {
        id: 'defaultcustomexportcsvbtn_s',
        title: 'Default Custom Export CSV Button',
        gist: 'https://gist.github.com/AllenFang/9e64138307e054940e0f3b67143da1cd.js',
        component: (<DefaultCustomExportCSVButtonTable />)
    }, {
        id: 'fullycustomexportcsvbtn_s',
        title: 'Fully Custom Export CSV Button',
        gist: 'https://gist.github.com/AllenFang/4589e7f9b41be87f4b3c82d47e0884a6.js',
        component: (<FullyCustomExportCSVButtonTable />)
    }, {
        id: 'defaultcustomclearbtn_s',
        title: 'Default Custom Clear Search Button',
        gist: 'https://gist.github.com/AllenFang/1c25909ea3a7f92ba9cde42172582dee.js',
        component: (<DefaultCustomClearButtonTable />)
    }, {
        id: 'fullycustomclearbtn_s',
        title: 'Fully Custom Clear Search Button',
        gist: 'https://gist.github.com/AllenFang/b109186f62dcb728693d00b5dc2d60e9.js',
        component: (<FullyCustomClearButtonTable />)
    }, {
        id: 'defaultcustomsearchfield_s',
        title: 'Default Custom Search Field',
        gist: 'https://gist.github.com/AllenFang/faaf03ebcd6e5a23c71d35df1501adc9.js',
        component: (<DefaultCustomSearchFieldTable />)
    }, {
        id: 'fullycustomsearchfield_s',
        title: 'Fully Custom Search Field',
        gist: 'https://gist.github.com/AllenFang/695f2c2310d57028166a9cfd5af7b61a.js',
        component: (<FullyCustomSearchFieldTable />)
    }, {
        id: 'customsearchpanel1_s',
        title: 'Custom Search Panel',
        gist: 'https://gist.github.com/AllenFang/258cdfa92d6ce36a4d22ffd8b2aea17e.js',
        component: (<CustomSearchPanel1 />)
    }, {
        id: 'customsearchpanel2_s',
        title: 'Custom Search Panel',
        gist: 'https://gist.github.com/AllenFang/dc16ed779a9e2daa69c2f998cfcf4d87.js',
        component: (<CustomSearchPanel2 />)
    }, {
        id: 'custombtngroup_s',
        title: 'Custom Button Group',
        gist: 'https://gist.github.com/AllenFang/53bfe8746e1face5ca7fc0e82d68c399.js',
        component: (<CustomButtonGroup />)
    }, {
        id: 'customtoolbar_s',
        title: 'Custom ToolBar',
        gist: 'https://gist.github.com/AllenFang/bf83073aa4320fa7200881e305d9e1e4.js',
        component: (<CustomToolBar1 />)
    }, {
        id: 'customtoolbar1_s',
        title: 'A Left Search Panel Example',
        gist: 'https://gist.github.com/AllenFang/19556ac2b26f478f98c64d90fe0eda0c.js',
        component: (<LeftSearchPanel />)
    }, {
        id: 'customsizeperpagedefault_s',
        title: 'Default Custom SizePerPage DropDown',
        gist: 'https://gist.github.com/AllenFang/d313a63737ee691b7f5cdc1a1505e270.js',
        component: (<CustomSizePerPage />)
    }, {
        id: 'fullycustomsizeperpagedefault_s',
        title: 'Fully Custom SizePerPage DropDown',
        gist: 'https://gist.github.com/AllenFang/2742dad5f2750e025b3383b77be10d30.js',
        component: (<FullyCustomSizePerPage />)
    }, {
        id: 'custompaginationpanel',
        title: 'Custom Pagination Panel',
        gist: 'https://gist.github.com/AllenFang/d49c17ca42f03e8349583d8c96f6968e.js',
        component: (<CustomPaginationPanel />)
    }];
    
    renderExampleAndGist(sources);
}

if (window.location.hash === '#header-group') {
  $("#example-section").empty();

  const sources = [{
      id: 'simpleheadergroup_s',
      title: 'Simple Header Group',
      gist: 'https://gist.github.com/AllenFang/2c1ce31e41e0bc61994c0acd301b6f22.js',
      component: (<SimpleColumnHeaderSpan />)
  }, {
      id: 'complexheadergroup_s',
      title: 'Simple Header Group',
      gist: 'https://gist.github.com/AllenFang/cab5a455be35d665251fb97bd7518cf8.js',
      component: (<ComplexColumnHeaderSpan />)
  }];

  renderExampleAndGist(sources);
}

if (window.location.hash === '#keyboard-navigation') {
  $("#example-section").empty();

  const sources = [{
      id: 'simplenavtable_s',
      title: 'Simple Keyboard Navigation Example',
      gist: 'https://gist.github.com/AllenFang/1ed2433260096cd717f4907b412ba105.js',
      component: (<SimpleNavTable />)
  }, {
      id: 'paginationnavtable_s',
      title: 'Keyboard Navigation with Pagination',
      gist: 'https://gist.github.com/AllenFang/b46468d7344f8b0e04c262848d47395a.js',
      component: (<PaginationNavTable />)
  }, {
      id: 'selectionnavtable_s',
      title: 'Keyboard Navigation with Row Selection',
      gist: 'https://gist.github.com/AllenFang/1369a3dff5a1fce4aec57906c369f20b.js',
      component: (<NavWithSelectionTable />)
  }, {
      id: 'customnavstyletable_s',
      title: 'Custom Navigation Cell Style',
      gist: 'https://gist.github.com/AllenFang/4235cd022537a2b93eb99b58bd33e87e.js',
      component: (<CustomNavStyleTable />)
  }, {
      id: 'disableclicktonavtable_s',
      title: 'Disable Click to Trigger Navigation',
      gist: 'https://gist.github.com/AllenFang/bd49d93f2105732394788247e46b7534.js',
      component: (<DisableClickToNavTable />)
  }, {
      id: 'celleditnavtable_s',
      title: 'Keyboard Navigation with Cell Edit',
      gist: 'https://gist.github.com/AllenFang/884ba9715b257ea119d178b6cce16ac0.js',
      component: (<NavWithCellEditTable />)
  }, {
      id: 'customcelleditnavstyletable_s',
      title: 'Custom Editing Cell Style on Navigating',
      gist: 'https://gist.github.com/AllenFang/6a83dd3e565dbcac947e653bc1516f1b.js',
      component: (<CustomStyleNavWithCellEditTable />)
  }, {
      id: 'entertoeditonnavtable_s',
      title: 'Enter to Edit Cell on Navigating',
      gist: 'https://gist.github.com/AllenFang/3c64329e2ae3e8316f4d187f455762fa.js',
      component: (<EnterToEditWithNavTable />)
  }, {
      id: 'expandingnavtable_s',
      title: 'Expanding Row with Keyboard Navigation',
      gist: 'https://gist.github.com/AllenFang/44c547aaa3f760a26193426f5eb02d07.js',
      component: (<NavWithExpandingTable />)
  }];

  renderExampleAndGist(sources);
}

if (window.location.hash === '#expand') {
    $("#example-section").empty();

    const sources = [{
        id: 'simpleexpandrow_s',
        title: 'Click Row to Expand Row',
        gist: 'https://gist.github.com/AllenFang/910ab7e5b2f722a23ffc4eefa8056bd8.js',
        component: (<ExpandRow />)
    }, {
        id: 'expandrowbyspecifiedcol_s',
        title: 'Expand Row by Specified Column',
        gist: 'https://gist.github.com/AllenFang/53ee94b5d4fe25bbc685a547268aaa1e.js',
        component: (<ExpandByColumn />)
    }, {
        id: 'expandrowindicator_s',
        title: 'Expand Row Indicator',
        gist: 'https://gist.github.com/AllenFang/dc5f1bcc22f767de015fff50a37ad06f.js',
        component: (<ExpandIndicator />)
    }, {
        id: 'customexpandrowindicator_s',
        title: 'Custom Expand Row Indicator',
        gist: 'https://gist.github.com/AllenFang/9189923be68865a4568a34cc66246da6.js',
        component: (<CustomExpandIndicator />)
    }, {
        id: 'manageexpandingrow_s',
        title: 'Manage Expanding External',
        gist: 'https://gist.github.com/AllenFang/ae9951ad51d3a9d4daa76c3ccb19444b.js',
        component: (<ManageExpandExternal />)
    }, {
        id: 'expandrowwithselection_s',
        title: 'Expand Row with Selection',
        gist: 'https://gist.github.com/AllenFang/34088f501cbf1585dbcf5331266c8167.js',
        component: (<ExpandWithSelection />)
    }, {
        id: 'expandrowwithcelledit_s',
        title: 'Expand Row with Cell Edit',
        gist: 'https://gist.github.com/AllenFang/53ad550ae2e74d07ebcd2a1659d36e3d.js',
        component: (<ExpandWithCellEdit />)
    }];

    renderExampleAndGist(sources);
}
