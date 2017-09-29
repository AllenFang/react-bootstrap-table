/* eslint default-case: 0 */
/* eslint guard-for-in: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classSet from 'classnames';
import Const from './Const';
import Util from './util';
import DateFilter from './filters/Date';
import TextFilter from './filters/Text';
import RegexFilter from './filters/Regex';
import SelectFilter from './filters/Select';
import NumberFilter from './filters/Number';

class TableHeaderColumn extends Component {

  constructor(props) {
    super(props);
    this.handleFilter = this.handleFilter.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.reset) {
      this.cleanFiltered();
    }

    // If column not displaying the same dataField, reset the filter accordingly
    if (nextProps.filter && nextProps.dataField !== this.props.dataField) {
      const emitter = nextProps.filter.emitter || {};
      const currentFilter = emitter.currentFilter || {};
      const filter = currentFilter[nextProps.dataField];
      const value = filter ? filter.value : '';

      const { ref } = this.getFilters() || {};
      if (this.refs[ref]) {
        this.refs[ref].setState({ value });
      }
    }
  }

  handleColumnClick = () => {
    if (this.props.isOnlyHead || !this.props.dataSort) return;
    let { sort: order } = this.props;
    if (!order && this.props.defaultASC) order = Const.SORT_ASC;
    else order = this.props.sort === Const.SORT_DESC ? Const.SORT_ASC : Const.SORT_DESC;
    this.props.onSort(order, this.props.dataField);
  }

  handleFilter(value, type) {
    const { filter } = this.props;
    filter.emitter.handleFilter(this.props.dataField, value, type, filter);
  }

  getFilters() {
    const { headerText, children } = this.props;
    switch (this.props.filter.type) {
    case Const.FILTER_TYPE.TEXT: {
      return (
        <TextFilter ref='textFilter' { ...this.props.filter }
          columnName={ headerText || children } filterHandler={ this.handleFilter } />
      );
    }
    case Const.FILTER_TYPE.REGEX: {
      return (
        <RegexFilter ref='regexFilter' { ...this.props.filter }
          columnName={ headerText || children } filterHandler={ this.handleFilter } />
      );
    }
    case Const.FILTER_TYPE.SELECT: {
      return (
        <SelectFilter ref='selectFilter' { ...this.props.filter }
          columnName={ headerText || children } filterHandler={ this.handleFilter } />
      );
    }
    case Const.FILTER_TYPE.NUMBER: {
      return (
        <NumberFilter ref='numberFilter' { ...this.props.filter }
          columnName={ headerText || children } filterHandler={ this.handleFilter } />
      );
    }
    case Const.FILTER_TYPE.DATE: {
      return (
        <DateFilter ref='dateFilter' { ...this.props.filter }
          columnName={ headerText || children } filterHandler={ this.handleFilter } />
      );
    }
    case Const.FILTER_TYPE.CUSTOM: {
      const elm = this.props.filter.getElement(this.handleFilter,
          this.props.filter.customFilterParameters);

      return React.cloneElement(elm, { ref: 'customFilter' });
    }
    }
  }

  componentDidMount() {
    this.refs['header-col'].setAttribute('data-field', this.props.dataField);
  }

  renderDefaultCaret(dataSort, isBootstrap4) {
    if (!dataSort) return null;
    if (isBootstrap4) {
      return (
        <span className='order fa fa-sort'
          style={ { margin: '10px 0 10px 5px', color: '#ccc' } }></span>
      );
    } else {
      return (
        <span className='order'>
          <span className='dropdown'>
            <span className='caret' style={ { margin: '10px 0 10px 5px', color: '#ccc' } }></span>
          </span>
          <span className='dropup'>
            <span className='caret' style={ { margin: '10px 0', color: '#ccc' } }></span>
          </span>
        </span>
      );
    }
  }

  render() {
    let defaultCaret;
    let sortCaret;
    let sortClass;
    const {
      headerText,
      dataAlign,
      dataField,
      headerAlign,
      headerTitle,
      hidden,
      sort,
      dataSort,
      sortIndicator,
      children,
      caretRender,
      className,
      isOnlyHead,
      version,
      sortHeaderColumnClassName: customSortClass,
      thStyle: style
    } = this.props;
    const thStyle = {
      textAlign: headerAlign || dataAlign,
      display: hidden ? 'none' : null,
      ...style
    };
    const isBootstrap4 = Util.isBootstrap4(version);
    if (!isOnlyHead) {
      if (sortIndicator) {
        defaultCaret = this.renderDefaultCaret(dataSort, isBootstrap4);
      }
      sortCaret = sort ? Util.renderReactSortCaret(sort, isBootstrap4) : defaultCaret;
      if (caretRender) {
        sortCaret = caretRender(sort, dataField);
      }
    }

    if (sort) {
      sortClass = Util.isFunction(customSortClass) ?
        customSortClass(sort, dataField) : customSortClass;
    }
    const classes = classSet(
      Util.isFunction(className) ? className() : className,
      !isOnlyHead && dataSort ? 'sort-column' : '',
      sortClass);

    const attr = {};
    if (headerTitle) {
      if (typeof children === 'string' && !headerText) {
        attr.title = children;
      } else {
        attr.title = headerText;
      }
    }
    return (
      <th ref='header-col'
          className={ classes }
          style={ thStyle }
          onClick={ this.handleColumnClick }
          rowSpan={ this.props.rowSpan }
          colSpan={ this.props.colSpan }
          data-is-only-head={ this.props.isOnlyHead }
          { ...attr }>
        { children }{ sortCaret }
        <div onClick={ e => e.stopPropagation() }>
          { this.props.filter && !isOnlyHead ? this.getFilters() : null }
        </div>
      </th>
    );
  }

  cleanFiltered() {
    if (!this.props.filter) return;

    switch (this.props.filter.type) {
    case Const.FILTER_TYPE.TEXT: {
      this.refs.textFilter.cleanFiltered();
      break;
    }
    case Const.FILTER_TYPE.REGEX: {
      this.refs.regexFilter.cleanFiltered();
      break;
    }
    case Const.FILTER_TYPE.SELECT: {
      this.refs.selectFilter.cleanFiltered();
      break;
    }
    case Const.FILTER_TYPE.NUMBER: {
      this.refs.numberFilter.cleanFiltered();
      break;
    }
    case Const.FILTER_TYPE.DATE: {
      this.refs.dateFilter.cleanFiltered();
      break;
    }
    case Const.FILTER_TYPE.CUSTOM: {
      this.refs.customFilter.cleanFiltered();
      break;
    }
    }
  }

  applyFilter(val) {
    if (!this.props.filter) return;
    switch (this.props.filter.type) {
    case Const.FILTER_TYPE.TEXT: {
      this.refs.textFilter.applyFilter(val);
      break;
    }
    case Const.FILTER_TYPE.REGEX: {
      this.refs.regexFilter.applyFilter(val);
      break;
    }
    case Const.FILTER_TYPE.SELECT: {
      this.refs.selectFilter.applyFilter(val);
      break;
    }
    case Const.FILTER_TYPE.NUMBER: {
      this.refs.numberFilter.applyFilter(val);
      break;
    }
    case Const.FILTER_TYPE.DATE: {
      this.refs.dateFilter.applyFilter(val);
      break;
    }
    }
  }
}

const filterTypeArray = [];
for (const key in Const.FILTER_TYPE) {
  filterTypeArray.push(Const.FILTER_TYPE[key]);
}

TableHeaderColumn.propTypes = {
  dataField: PropTypes.string,
  dataAlign: PropTypes.string,
  headerAlign: PropTypes.string,
  headerTitle: PropTypes.bool,
  headerText: PropTypes.string,
  dataSort: PropTypes.bool,
  onSort: PropTypes.func,
  dataFormat: PropTypes.func,
  csvFormat: PropTypes.func,
  csvHeader: PropTypes.string,
  csvFieldType: PropTypes.oneOf([ Const.CSV_STRING_TYPE, Const.CSV_NUMBER_TYPE ]),
  isKey: PropTypes.bool,
  editable: PropTypes.any,
  hidden: PropTypes.bool,
  hiddenOnInsert: PropTypes.bool,
  searchable: PropTypes.bool,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]),
  width: PropTypes.string,
  sortFunc: PropTypes.func,
  sortFuncExtraData: PropTypes.any,
  sortHeaderColumnClassName: PropTypes.any,
  columnClassName: PropTypes.any,
  editColumnClassName: PropTypes.any,
  invalidEditColumnClassName: PropTypes.any,
  columnTitle: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
    PropTypes.string
  ]),
  filterFormatted: PropTypes.bool,
  filterValue: PropTypes.func,
  sort: PropTypes.string,
  caretRender: PropTypes.func,
  formatExtraData: PropTypes.any,
  csvFormatExtraData: PropTypes.any,
  filter: PropTypes.shape({
    type: PropTypes.oneOf(filterTypeArray),
    delay: PropTypes.number,
    options: PropTypes.oneOfType([
      PropTypes.object, // for SelectFilter
      PropTypes.arrayOf(PropTypes.number) // for NumberFilter
    ]),
    numberComparators: PropTypes.arrayOf(PropTypes.string),
    emitter: PropTypes.object,
    placeholder: PropTypes.string,
    getElement: PropTypes.func,
    customFilterParameters: PropTypes.object,
    condition: PropTypes.oneOf([ Const.FILTER_COND_EQ, Const.FILTER_COND_LIKE ])
  }),
  sortIndicator: PropTypes.bool,
  export: PropTypes.bool,
  expandable: PropTypes.bool,
  tdAttr: PropTypes.object,
  editTdAttr: PropTypes.object,
  tdStyle: PropTypes.object,
  thStyle: PropTypes.object,
  keyValidator: PropTypes.bool,
  defaultASC: PropTypes.bool
};

TableHeaderColumn.defaultProps = {
  dataAlign: 'left',
  headerAlign: undefined,
  headerTitle: true,
  dataSort: false,
  dataFormat: undefined,
  csvFormat: undefined,
  csvHeader: undefined,
  csvFieldType: Const.CSV_STRING_TYPE,
  isKey: false,
  editable: true,
  onSort: undefined,
  hidden: false,
  hiddenOnInsert: false,
  searchable: true,
  className: '',
  columnTitle: false,
  width: null,
  sortFunc: undefined,
  columnClassName: '',
  editColumnClassName: '',
  invalidEditColumnClassName: '',
  filterFormatted: false,
  filterValue: undefined,
  sort: undefined,
  formatExtraData: undefined,
  sortFuncExtraData: undefined,
  filter: undefined,
  sortIndicator: true,
  expandable: true,
  tdAttr: undefined,
  editTdAttr: undefined,
  tdStyle: undefined,
  thStyle: undefined,
  keyValidator: false,
  defaultASC: false
};

export default TableHeaderColumn;
