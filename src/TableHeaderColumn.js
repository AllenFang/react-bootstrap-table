/* eslint default-case: 0 */
/* eslint guard-for-in: 0 */
import React, { Component, PropTypes } from 'react';
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
  }

  handleColumnClick = () => {
    if (this.props.isOnlyHead || !this.props.dataSort) return;
    const order = this.props.sort === Const.SORT_DESC ? Const.SORT_ASC : Const.SORT_DESC;
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

  render() {
    let defaultCaret;
    let sortCaret;
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
      thStyle: style
    } = this.props;
    const thStyle = {
      textAlign: headerAlign || dataAlign,
      display: hidden ? 'none' : null,
      ...style
    };
    if (!isOnlyHead) {
      if (sortIndicator) {
        defaultCaret = (!dataSort) ? null : (
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
      sortCaret = sort ? Util.renderReactSortCaret(sort) : defaultCaret;
      if (caretRender) {
        sortCaret = caretRender(sort, dataField);
      }
    }

    const classes = classSet(
      typeof className === 'function' ? className() : className,
      !isOnlyHead && dataSort ? 'sort-column' : '');

    const title = {
      title: ((headerTitle && typeof children === 'string') ? children : headerText)
    };
    return (
      <th ref='header-col'
          className={ classes }
          style={ thStyle }
          onClick={ this.handleColumnClick }
          rowSpan={ this.props.rowSpan }
          colSpan={ this.props.colSpan }
          data-is-only-head={ this.props.isOnlyHead }
          { ...title }>
        { children }{ sortCaret }
        <div onClick={ e => e.stopPropagation() }>
          { this.props.filter && !isOnlyHead ? this.getFilters() : null }
        </div>
      </th>
    );
  }

  cleanFiltered() {
    if (this.props.filter === undefined) {
      return;
    }

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
    if (this.props.filter === undefined) return;
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
  columnClassName: PropTypes.any,
  editColumnClassName: PropTypes.any,
  invalidEditColumnClassName: PropTypes.any,
  columnTitle: PropTypes.bool,
  filterFormatted: PropTypes.bool,
  filterValue: PropTypes.func,
  sort: PropTypes.string,
  caretRender: PropTypes.func,
  formatExtraData: PropTypes.any,
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
  tdStyle: PropTypes.object,
  thStyle: PropTypes.object
};

TableHeaderColumn.defaultProps = {
  dataAlign: 'left',
  headerAlign: undefined,
  headerTitle: true,
  dataSort: false,
  dataFormat: undefined,
  csvFormat: undefined,
  csvHeader: undefined,
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
  tdStyle: undefined,
  thStyle: undefined
};

export default TableHeaderColumn;
