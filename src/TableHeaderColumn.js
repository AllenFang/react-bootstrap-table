import React from 'react';
import classSet from 'classnames';
import Const from './Const';
import Util from './util';
import TextFilter from './filters/Text';
import SelectFilter from './filters/Select';

class TableHeaderColumn extends React.Component{

  handleColumnClick(e){
    if(!this.props.dataSort)return;
    let order = this.props.sort == Const.SORT_DESC?Const.SORT_ASC:Const.SORT_DESC;
    this.props.onSort(order, this.props.dataField);
  }

  handleFilter(value) {
    this.props.filter.emitter.handleFilter(this.props.dataField, value);
  }

  getFilters() {
    debugger;
    const delay = this.props.filter.delay || Const.FILTER_DELAY;

    switch (this.props.filter.type) {
      case "TextFilter": {
        const placeholder = this.props.filter.placeholder || `Enter ${this.props.children}...`;
        return <TextFilter delay={delay} filterHandler={this.handleFilter.bind(this)} placeholder={placeholder} />;
      }
      case "SelectFilter": {
        const placeholder = this.props.filter.placeholder || `Select ${this.props.children}...`;
        return <SelectFilter filterHandler={this.handleFilter.bind(this)} options={this.props.filter.options} placeholder={placeholder} />;
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

    const sortCaret = this.props.sort ? Util.renderReactSortCaret(this.props.sort) : null;

    var classes = this.props.className+" "+(this.props.dataSort?"sort-column":"");
    return(
      <th ref='header-col' className={classes} style={thStyle}>
        <div ref="innerDiv" className="th-inner table-header-column"
          onClick={this.handleColumnClick.bind(this)}>
          {this.props.children}{sortCaret}
        </div>
        {this.props.filter ? this.getFilters() : ''}
      </th>
    )
  }
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
    type: React.PropTypes.string.isRequired,
    delay: React.PropTypes.number,
    options: React.PropTypes.object,
    emitter: React.PropTypes.object,
    placeholder: React.PropTypes.string
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
