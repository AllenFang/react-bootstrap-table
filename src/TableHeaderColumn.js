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
import resizable from './resizable';

class TableHeaderColumn extends Component {

  constructor(props) {
    super(props);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleColumnResizing = this.handleColumnResizing.bind(this);
    this.handleColumnStartResizing = this.handleColumnStartResizing.bind(this);
    this.handleColumnStopResizing = this.handleColumnStopResizing.bind(this);
  }

  handleColumnClick = (event) => {
    if (!this.props.dataSort) return;
    // const order = this.props.sort === Const.SORT_DESC ? Const.SORT_ASC : Const.SORT_DESC;
    let order = '';
    switch (this.props.sort) {
    case Const.SORT_DESC:
      order = Const.SORT_ASC;
      break;
    case Const.SORT_ASC:
      order = '';
      break;
    default:
      order = Const.SORT_DESC;
    }
    this.props.onSort(order, this.props.dataField, event);
  }

  handleFilter(value, type) {
    this.props.filter.emitter.handleFilter(this.props.dataField, value, type);
  }

  getFilters() {
    switch (this.props.filter.type) {
    case Const.FILTER_TYPE.TEXT: {
      return (
        <TextFilter ref='textFilter' { ...this.props.filter }
          columnName={ this.props.children } filterHandler={ this.handleFilter } />
      );
    }
    case Const.FILTER_TYPE.REGEX: {
      return (
        <RegexFilter ref='regexFilter' { ...this.props.filter }
          columnName={ this.props.children } filterHandler={ this.handleFilter } />
      );
    }
    case Const.FILTER_TYPE.SELECT: {
      return (
        <SelectFilter ref='selectFilter' { ...this.props.filter }
          columnName={ this.props.children } filterHandler={ this.handleFilter } />
      );
    }
    case Const.FILTER_TYPE.NUMBER: {
      return (
        <NumberFilter ref='numberFilter' { ...this.props.filter }
          columnName={ this.props.children } filterHandler={ this.handleFilter } />
      );
    }
    case Const.FILTER_TYPE.DATE: {
      return (
        <DateFilter ref='dateFilter' { ...this.props.filter }
          columnName={ this.props.children } filterHandler={ this.handleFilter } />
      );
    }
    case Const.FILTER_TYPE.CUSTOM: {
      const elm = this.props.filter.getElement(this.handleFilter,
          this.props.filter.customFilterParameters);

      return React.cloneElement(elm, { ref: 'customFilter' });
    }
    }
  }

  handleColumnResizing(e, newWidth) {
    if (!this.props.onResizing) return;
    // const parent = this._reactInternalInstance._currentElement._owner._instance;
    this.props.onResizing(e, newWidth, this);
  }

  handleColumnStartResizing(e, startX, startWidth) {
    if (!this.props.onStartResizing) return;
    this.props.onStartResizing(e, startX, startWidth, this);
  }

  handleColumnStopResizing(e, stopX, stopWidth) {
    if (!this.props.onStopResizing) return;
    this.props.onStopResizing(e, stopX, stopWidth, this);
  }

  componentDidMount() {
    this.refs['header-col'].setAttribute('data-field', this.props.dataField);
    resizable(this.refs['header-col'], this,
        this.handleColumnResizing, this.handleColumnStartResizing, this.handleColumnStopResizing);
  }

  render() {
    const {
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
      resize,
      sortNumber
    } = this.props;
    const thStyle = {
      textAlign: headerAlign || dataAlign,
      display: hidden ? 'none' : null,
      position: resize ? 'relative' : 'initial'
    };
    if (this.props.width) {
      thStyle.width = this.props.width;
    } else if (this.props.resizeOptions.minWidth) {
      thStyle.width = this.props.resizeOptions.minWidth;
    }
    thStyle.width = (thStyle.width.toString().indexOf('px') > -1)
        ? thStyle.width : `${thStyle.width}px`;
    const resizerStyle = {
      width: '3px',
      height: '100%',
      position: 'absolute',
      right: 0,
      bottom: 0,
      cursor: 'ew-resize',
      border: '1px dotted #ddd',
      ...this.props.resizerStyle
    };

    let sortCaret = Util.getReactSortCaret(sort, sortIndicator, dataSort);
    if (caretRender) {
      sortCaret = caretRender(sort, dataField);
    }
    const classes = classSet(
      typeof className === 'function' ? className() : className,
      dataSort ? 'sort-column' : '',
      resize ? 'resizable' : '');

    const title = headerTitle && typeof children === 'string' ? { title: children } : null;
    return (
      <th ref='header-col'
          className={ classes }
          style={ thStyle }
          { ...title }>
        <div onClick={ this.handleColumnClick }>
          { children }{ sortCaret }
          { (this.props.multiSortEnabled && sortNumber !== 0)
            && <span className='numberCircle sortNumber'
              style={ this.props.sortNumberStyle }>{ sortNumber }</span> }
        </div>
        <div onClick={ e => e.stopPropagation() }>
          { this.props.filter ? this.getFilters() : null }
        </div>
        { resize && <div className='resizer' style={ resizerStyle }></div> }
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
    customFilterParameters: PropTypes.object
  }),
  sortIndicator: PropTypes.bool,
  resize: PropTypes.bool,
  resizeOptions: PropTypes.object,
  onResizing: PropTypes.func,
  onStartResizing: PropTypes.func,
  onStopResizing: PropTypes.func,
  export: PropTypes.bool,
  resizerStyle: PropTypes.object,
  sortNumberStyle: PropTypes.object
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
  onResizing: undefined,
  onStartResizing: undefined,
  onStopResizing: undefined,
  hidden: false,
  hiddenOnInsert: false,
  searchable: true,
  className: '',
  columnTitle: false,
  width: null,
  sortFunc: undefined,
  columnClassName: '',
  filterFormatted: false,
  filterValue: undefined,
  sort: undefined,
  formatExtraData: undefined,
  sortFuncExtraData: undefined,
  filter: undefined,
  sortIndicator: true,
  resize: false,
  resizeOptions: {
    minWidth: 25,
    maxWidth: false
  },
  resizerStyle: undefined,
  sortNumberStyle: undefined
};

export default TableHeaderColumn;
