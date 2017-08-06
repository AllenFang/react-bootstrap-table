/* eslint quotes: 0 */
/* eslint max-len: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Const from '../Const';

const legalComparators = [ '=', '>', '>=', '<', '<=', '!=' ];

function dateParser(d) {
  return `${d.getFullYear()}-${("0" + (d.getMonth() + 1)).slice(-2)}-${("0" + d.getDate()).slice(-2)}`;
}

class DateFilter extends Component {
  constructor(props) {
    super(props);
    this.dateComparators = this.props.dateComparators || legalComparators;
    this.filter = this.filter.bind(this);
    this.onChangeComparator = this.onChangeComparator.bind(this);
  }

  setDefaultDate() {
    let defaultDate = '';
    const { defaultValue } = this.props;
    if (defaultValue && defaultValue.date) {
      // Set the appropriate format for the input type=date, i.e. "YYYY-MM-DD"
      defaultDate = dateParser(new Date(defaultValue.date));
    }
    return defaultDate;
  }

  onChangeComparator(event) {
    let date = this.refs.inputDate.value;
    const comparator = event.target.value;
    if (date === '') {
      return;
    }
    date = new Date(date);
    this.props.filterHandler({ date, comparator }, Const.FILTER_TYPE.DATE);
  }

  getComparatorOptions() {
    const optionTags = [];
    optionTags.push(<option key='-1'></option>);
    for (let i = 0; i < this.dateComparators.length; i++) {
      optionTags.push(
        <option key={ i } value={ this.dateComparators[i] }>
          { this.dateComparators[i] }
        </option>
      );
    }
    return optionTags;
  }

  filter(event) {
    const comparator = this.refs.dateFilterComparator.value;
    const dateValue = event.target.value;
    if (dateValue) {
      this.props.filterHandler({ date: new Date(dateValue), comparator }, Const.FILTER_TYPE.DATE);
    } else {
      this.props.filterHandler(null, Const.FILTER_TYPE.DATE);
    }
  }

  cleanFiltered() {
    const value = this.setDefaultDate();
    const comparator = (this.props.defaultValue) ? this.props.defaultValue.comparator : '';
    this.setState(() => { return { isPlaceholderSelected: (value === '') }; });
    this.refs.dateFilterComparator.value = comparator;
    this.refs.inputDate.value = value;
    this.props.filterHandler({ date: new Date(value), comparator }, Const.FILTER_TYPE.DATE);
  }

  applyFilter(filterDateObj) {
    const { date, comparator } = filterDateObj;
    this.setState(() => { return { isPlaceholderSelected: (date === '') }; });
    this.refs.dateFilterComparator.value = comparator;
    this.refs.inputDate.value = dateParser(date);
    this.props.filterHandler({ date, comparator }, Const.FILTER_TYPE.DATE);
  }

  componentDidMount() {
    const comparator = this.refs.dateFilterComparator.value;
    const dateValue = this.refs.inputDate.value;
    if (comparator && dateValue) {
      this.props.filterHandler({ date: new Date(dateValue), comparator }, Const.FILTER_TYPE.DATE);
    }
  }

  render() {
    const { defaultValue, style: { date, comparator } } = this.props;
    return (
      <div className='filter date-filter'>
        <select ref='dateFilterComparator'
                style={ comparator }
                className='date-filter-comparator form-control'
                onChange={ this.onChangeComparator }
                defaultValue={ (defaultValue) ? defaultValue.comparator : '' }>
          { this.getComparatorOptions() }
        </select>
        <input ref='inputDate'
           className='filter date-filter-input form-control'
           style={ date }
           type='date'
           onChange={ this.filter }
           defaultValue={ this.setDefaultDate() } />
      </div>
    );
  }
}

DateFilter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
  defaultValue: PropTypes.shape({
    date: PropTypes.object,
    comparator: PropTypes.oneOf(legalComparators)
  }),
  style: PropTypes.shape({
    date: PropTypes.oneOfType([ PropTypes.object ]),
    comparator: PropTypes.oneOfType([ PropTypes.object ])
  }),
  /* eslint consistent-return: 0 */
  dateComparators: function(props, propName) {
    if (!props[propName]) {
      return;
    }
    for (let i = 0; i < props[propName].length; i++) {
      let comparatorIsValid = false;
      for (let j = 0; j < legalComparators.length; j++) {
        if (legalComparators[j] === props[propName][i]) {
          comparatorIsValid = true;
          break;
        }
      }
      if (!comparatorIsValid) {
        return new Error(`Date comparator provided is not supported.
          Use only ${legalComparators}`);
      }
    }
  },
  columnName: PropTypes.string
};

DateFilter.defaultProps = {
  style: {
    date: null,
    comparator: null
  }
};


export default DateFilter;
