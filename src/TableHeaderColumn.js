import React from 'react';
import classSet from 'classnames';
import Const from './Const';
import Util from './util';
import DateFilter from './filters/Date';
import TextFilter from './filters/Text';
import SelectFilter from './filters/Select';
import NumberFilter from './filters/Number';

class TableHeaderColumn extends React.Component{

  constructor(props) {
    super(props);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleColumnClick(e){
    if(!this.props.dataSort)return;
    let order = this.props.sort == Const.SORT_DESC?Const.SORT_ASC:Const.SORT_DESC;
    this.props.onSort(order, this.props.dataField);
  }

  handleFilter(value, type) {
    this.props.filter.emitter.handleFilter(this.props.dataField, value, type);
  }

  getFilters() {
    switch (this.props.filter.type) {
      case Const.FILTER_TYPE.TEXT: {
        return <TextFilter {...this.props.filter} columnName={this.props.children} filterHandler={this.handleFilter} />;
      }
      case Const.FILTER_TYPE.SELECT: {
        return <SelectFilter {...this.props.filter} columnName={this.props.children} filterHandler={this.handleFilter} />;
      }
      case Const.FILTER_TYPE.NUMBER: {
        return <NumberFilter {...this.props.filter} columnName={this.props.children} filterHandler={this.handleFilter} />;
      }
      case Const.FILTER_TYPE.DATE: {
        return <DateFilter {...this.props.filter} columnName={this.props.children} filterHandler={this.handleFilter} />;
      }
      case Const.FILTER_TYPE.CUSTOM: {
        return this.props.filter.getElement(this.handleFilter, this.props.filter.customFilterParameters);
      }
    }
  }

  componentDidMount(){
    this.refs.innerDiv.setAttribute("data-field", this.props.dataField);
  }

  render(){
    var width = this.props.width!==null?parseInt(this.props.width):null;
    var thStyle = {
      textAlign: this.props.dataAlign,
      display: this.props.hidden?"none":null,
      width: width,
      maxWidth: width
    };

    const defaultCaret = (!this.props.dataSort) ? null : (
      <span className="order">
        <span className="dropdown">
          <span className="caret" style={{margin: '10px 0 10px 5px', color: '#ccc'}}></span>
        </span>
        <span className="dropup">
          <span className="caret" style={{margin: '10px 0', color: '#ccc'}}></span>
        </span>
      </span>
    );
    const sortCaret = this.props.sort ? Util.renderReactSortCaret(this.props.sort) : defaultCaret;

    var classes = this.props.className+" "+(this.props.dataSort?"sort-column":"");
    return(
      <th ref='header-col' className={classes} style={thStyle}>
        <div ref="innerDiv" className="th-inner table-header-column"
          onClick={this.handleColumnClick.bind(this)}>
          {this.props.children}{sortCaret}
        </div>
        {this.props.filter ? this.getFilters() : null}
      </th>
    )
  }
}

var filterTypeArray = [];
for (let key in Const.FILTER_TYPE) {
  filterTypeArray.push(Const.FILTER_TYPE[key]);
}

TableHeaderColumn.propTypes = {
  dataField: React.PropTypes.string,
  dataAlign: React.PropTypes.string,
  dataSort: React.PropTypes.bool,
  onSort: React.PropTypes.func,
  dataFormat: React.PropTypes.func,
  isKey: React.PropTypes.bool,
  editable: React.PropTypes.any,
  hidden: React.PropTypes.bool,
  className:React.PropTypes.string,
  width: React.PropTypes.string,
  sortFunc: React.PropTypes.func,
  columnClassName: React.PropTypes.any,
  filterFormatted: React.PropTypes.bool,
  sort: React.PropTypes.string,
  formatExtraData: React.PropTypes.any,
  filter: React.PropTypes.shape({
    type: React.PropTypes.oneOf(filterTypeArray),
    delay: React.PropTypes.number,
    options: React.PropTypes.oneOfType([
      React.PropTypes.object, // for SelectFilter
      React.PropTypes.arrayOf(React.PropTypes.number) //for NumberFilter
        ]),
    numberComparators: React.PropTypes.arrayOf(React.PropTypes.string),
    emitter: React.PropTypes.object,
    placeholder: React.PropTypes.string,
    getElement: React.PropTypes.func,
    customFilterParameters: React.PropTypes.object
  })
};

TableHeaderColumn.defaultProps = {
  dataAlign: "left",
  dataSort: false,
  dataFormat: undefined,
  isKey: false,
  editable: true,
  onSort: undefined,
  hidden: false,
  className: "",
  width: null,
  sortFunc: undefined,
  columnClassName: '',
  filterFormatted: false,
  sort: undefined,
  formatExtraData: undefined,
  filter: undefined
};

export default TableHeaderColumn;
