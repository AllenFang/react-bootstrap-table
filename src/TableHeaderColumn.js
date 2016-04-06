/* eslint default-case: 0 */
/* eslint guard-for-in: 0 */
import React, { Component, PropTypes } from 'react';
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

  handleColumnClick = () => {
    if (!this.props.dataSort) return;
    const order = this.props.sort === Const.SORT_DESC ? Const.SORT_ASC : Const.SORT_DESC;
    this.props.onSort(order, this.props.dataField);
  }

  handleFilter(value, type) {
    this.props.filter.emitter.handleFilter(this.props.dataField, value, type);
  }

  getFilters() {
    switch (this.props.filter.type) {
    case Const.FILTER_TYPE.TEXT: {
      return (
        <TextFilter { ...this.props.filter }
          columnName={ this.props.children } filterHandler={ this.handleFilter } />
      );
    }
    case Const.FILTER_TYPE.REGEX: {
      return (
        <RegexFilter { ...this.props.filter }
          columnName={ this.props.children } filterHandler={ this.handleFilter } />
      );
    }
    case Const.FILTER_TYPE.SELECT: {
      return (
        <SelectFilter { ...this.props.filter }
          columnName={ this.props.children } filterHandler={ this.handleFilter } />
      );
    }
    case Const.FILTER_TYPE.NUMBER: {
      return (
        <NumberFilter { ...this.props.filter }
          columnName={ this.props.children } filterHandler={ this.handleFilter } />
      );
    }
    case Const.FILTER_TYPE.DATE: {
      return (
        <DateFilter { ...this.props.filter }
          columnName={ this.props.children } filterHandler={ this.handleFilter } />
      );
    }
    case Const.FILTER_TYPE.CUSTOM: {
      return this.props.filter.getElement(this.handleFilter,
          this.props.filter.customFilterParameters);
    }
    }
  }

  componentDidMount() {
    this.refs['header-col'].setAttribute('data-field', this.props.dataField);
  }

  render() {
    let defaultCaret;
    const thStyle = {
      textAlign: this.props.dataAlign,
      display: this.props.hidden ? 'none' : null
    };
    if (this.props.sortIndicator) {
      defaultCaret = (!this.props.dataSort) ? null : (
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
    let sortCaret = this.props.sort ? Util.renderReactSortCaret(this.props.sort) : defaultCaret;
    if (this.props.caretRender) {
      sortCaret = this.props.caretRender(this.props.sort);
    }

    const classes = this.props.className + ' ' + (this.props.dataSort ? 'sort-column' : '');
    const title = typeof this.props.children === 'string' ? { title: this.props.children } : null;
    return (
      <th ref='header-col'
          className={ classes }
          style={ thStyle }
          onClick={ this.handleColumnClick }
          { ...title }>
        { this.props.children }{ sortCaret }
        <div onClick={ e => e.stopPropagation() }>
          { this.props.filter ? this.getFilters() : null }
        </div>
      </th>
    );
  }
}

const filterTypeArray = [];
for (const key in Const.FILTER_TYPE) {
  filterTypeArray.push(Const.FILTER_TYPE[key]);
}

TableHeaderColumn.propTypes = {
  dataField: PropTypes.string,
  dataAlign: PropTypes.string,
  dataSort: PropTypes.bool,
  onSort: PropTypes.func,
  dataFormat: PropTypes.func,
  isKey: PropTypes.bool,
  editable: PropTypes.any,
  hidden: PropTypes.bool,
  searchable: PropTypes.bool,
  className: PropTypes.string,
  width: PropTypes.string,
  sortFunc: PropTypes.func,
  sortFuncExtraData: PropTypes.any,
  columnClassName: PropTypes.any,
  filterFormatted: PropTypes.bool,
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
    customFilterParameters: PropTypes.object
  }),
  sortIndicator: PropTypes.bool
};

TableHeaderColumn.defaultProps = {
  dataAlign: 'left',
  dataSort: false,
  dataFormat: undefined,
  isKey: false,
  editable: true,
  onSort: undefined,
  hidden: false,
  searchable: true,
  className: '',
  width: null,
  sortFunc: undefined,
  columnClassName: '',
  filterFormatted: false,
  sort: undefined,
  formatExtraData: undefined,
  sortFuncExtraData: undefined,
  filter: undefined,
  sortIndicator: true
};

export default TableHeaderColumn;
