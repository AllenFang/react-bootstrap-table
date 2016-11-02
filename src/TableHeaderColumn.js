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
    this.clear = props.filter && props.filter.clear;
    this.handleFilter = this.handleFilter.bind(this);

    this.activeEl = null;
    this.nMouseX = 0;
    this.headerStartWidth = 0;
    this.nextHeaderStartWidth = 0;
    this.inResize = false;
  }

  handleColumnClick = () => {
    if (!this.props.dataSort) return;
    const order = this.props.sort === Const.SORT_DESC ? Const.SORT_ASC : Const.SORT_DESC;
    this.props.onSort(order, this.props.dataField);
  }

  handleFilter(value, type) {
    if(this.clear===false){
      this.props.filter.emitter.handleFilter(this.props.dataField, value, type);
    }
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
      return this.props.filter.getElement(this.handleFilter,
          this.props.filter.customFilterParameters);
    }
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.filter && nextProps.filter.clear){
      this.clear = true
      this.cleanFiltered()
    }
  }

  componentDidMount() {
    this.refs['header-col'].setAttribute('data-field', this.props.dataField);
    this.clear = false;
    let handlers = document.getElementsByClassName("resize-handler");
    for(var i = 0; i < handlers.length; i++) {
      let handler = handlers[i];
      handler.addEventListener('mousedown', this.handleMouseDown);
    }
    document.addEventListener('mouseup', this.handleMouseUp);
    document.addEventListener('mousemove', this.handleMouseMove);
  }

  render() {
    let defaultCaret;
    const {
      dataAlign,
      dataField,
      headerAlign,
      hidden,
      sort,
      dataSort,
      sortIndicator,
      children,
      caretRender,
      className
    } = this.props;
    const thStyle = {
      textAlign: headerAlign || dataAlign,
      display: hidden ? 'none' : null
    };
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
    let sortCaret = sort && sort !== 'none' ? Util.renderReactSortCaret(sort) : defaultCaret;
    if (caretRender) {
      sortCaret = caretRender(sort, dataField);
    }
    const classes = classSet(
      typeof className === 'function' ? className() : className,
      dataSort ? 'sort-column' : '',
      'resizable');

    const title = typeof children === 'string' ? { title: children } : null;
    return (
      <th ref='header-col'
          className={ classes }
          style={ thStyle }
          { ...title }>
        <div onClick={ this.handleColumnClick } style={{display:'inline'}} >{ children }{ sortCaret }</div>
        <div onClick={ e => e.stopPropagation() }>
          { this.props.filter ? this.getFilters() : null }
        </div>
        <div className="resize-handler"></div>
      </th>
    );
  }

  handleMouseMove = (event) => {
    if (!this.inResize) {
      return;
    }
    event.preventDefault();
    var mouseEvent = event || window.event;

    const changeValue = mouseEvent.clientX - this.nMouseX;

    this.activeEl.style.width = String(Math.max(this.headerStartWidth + changeValue,20)) + "px";
    this.activeEl.nextSibling.style.width = String(Math.max(this.nextHeaderStartWidth - changeValue,20)) + "px";

    this.props.onResize();
  }

  handleMouseUp = (event) => {
    if(this.inResize) {
      this.inResize = false;
    }
  }

  handleMouseDown = (event) => {
    let bExit = true, mouseEvent = event || window.event;
    for (var iNode = mouseEvent.target || mouseEvent.srcElement; iNode; iNode = iNode.parentNode) {
      if (iNode.className.indexOf("resizable")!==-1) {
        bExit = false;
        this.activeEl = iNode;
        break;
      }
    }
    if (bExit ||
        this.activeEl.nextSibling===null ||
        this.activeEl.nodeName.toLowerCase()!==this.activeEl.nextSibling.nodeName.toLowerCase()) {
      return;
    }
    event.stopImmediatePropagation();
    this.inResize = true;
    this.headerStartWidth = parseInt(this.activeEl.style.width,10) || 0;
    this.nextHeaderStartWidth = parseInt(this.activeEl.nextSibling.style.width,10) || 0;
    this.nMouseX = mouseEvent.clientX;
    return false;
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
    }
    this.clear = false
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
  export: PropTypes.bool,
  onResize: PropTypes.func
};

TableHeaderColumn.defaultProps = {
  dataAlign: 'left',
  headerAlign: undefined,
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
  filterFormatted: false,
  filterValue: undefined,
  sort: undefined,
  formatExtraData: undefined,
  sortFuncExtraData: undefined,
  filter: undefined,
  sortIndicator: true
};

export default TableHeaderColumn;
