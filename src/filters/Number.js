import React, { Component, PropTypes } from 'react';
import classSet from 'classnames';
import Const from '../Const';

const legalComparators = [ '=', '>', '>=', '<', '<=', '!=' ];

class NumberFilter extends Component {
  constructor(props) {
    super(props);
    this.numberComparators = this.props.numberComparators || legalComparators;
    this.timeout = null;
    this.state = {
      isPlaceholderSelected: (this.props.defaultValue === undefined ||
        this.props.defaultValue.number === undefined ||
        (this.props.options &&
          this.props.options.indexOf(this.props.defaultValue.number) === -1))
    };
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onChangeNumberSet = this.onChangeNumberSet.bind(this);
    this.onChangeComparator = this.onChangeComparator.bind(this);
  }

  onChangeNumber(event) {
    const comparator = this.refs.numberFilterComparator.value;
    if (comparator === '') {
      return;
    }
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    const filterValue = event.target.value;
    this.timeout = setTimeout(() => {
      this.props.filterHandler({ number: filterValue, comparator }, Const.FILTER_TYPE.NUMBER);
    }, this.props.delay);
  }

  onChangeNumberSet(event) {
    const comparator = this.refs.numberFilterComparator.value;
    const { value } = event.target;
    this.setState({ isPlaceholderSelected: (value === '') });
    if (comparator === '') {
      return;
    }
    this.props.filterHandler({ number: value, comparator }, Const.FILTER_TYPE.NUMBER);
  }

  onChangeComparator(event) {
    const value = this.refs.numberFilter.value;
    const comparator = event.target.value;
    if (value === '') {
      return;
    }
    this.props.filterHandler({ number: value, comparator }, Const.FILTER_TYPE.NUMBER);
  }

  getComparatorOptions() {
    const optionTags = [];
    optionTags.push(<option key='-1'></option>);
    for (let i = 0; i < this.numberComparators.length; i++) {
      optionTags.push(
        <option key={ i } value={ this.numberComparators[i] }>
          { this.numberComparators[i] }
        </option>
      );
    }
    return optionTags;
  }

  getNumberOptions() {
    const optionTags = [];
    const { options } = this.props;

    optionTags.push(
      <option key='-1' value=''>
        { this.props.placeholder || `Select ${this.props.columnName}...` }
      </option>
    );
    for (let i = 0; i < options.length; i++) {
      optionTags.push(<option key={ i } value={ options[i] }>{ options[i] }</option>);
    }
    return optionTags;
  }

  componentDidMount() {
    const comparator = this.refs.numberFilterComparator.value;
    const number = this.refs.numberFilter.value;
    if (comparator && number) {
      this.props.filterHandler({ number, comparator }, Const.FILTER_TYPE.NUMBER);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    const selectClass = classSet(
      'select-filter', 'number-filter-input', 'form-control',
      { 'placeholder-selected': this.state.isPlaceholderSelected });

    return (
      <div className='filter number-filter'>
        <select ref='numberFilterComparator'
                className='number-filter-comparator form-control'
                onChange={ this.onChangeComparator }
                defaultValue={
                  (this.props.defaultValue) ? this.props.defaultValue.comparator : ''
                }>
          { this.getComparatorOptions() }
        </select>
        {
          (this.props.options) ?
            <select ref='numberFilter'
              className={ selectClass }
              onChange={ this.onChangeNumberSet }
              defaultValue={
                (this.props.defaultValue) ? this.props.defaultValue.number : ''
              }>
              { this.getNumberOptions() }
            </select> :
            <input ref='numberFilter'
                   type='number'
                   className='number-filter-input form-control'
                   placeholder={ this.props.placeholder || `Enter ${this.props.columnName}...` }
                   onChange={ this.onChangeNumber }
                   defaultValue={
                     (this.props.defaultValue) ? this.props.defaultValue.number : ''
                   } />
        }
      </div>
    );
  }
}

NumberFilter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.number),
  defaultValue: PropTypes.shape({
    number: PropTypes.number,
    comparator: PropTypes.oneOf(legalComparators)
  }),
  delay: PropTypes.number,
  /* eslint consistent-return: 0 */
  numberComparators: function(props, propName) {
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
        return new Error(`Number comparator provided is not supported.
          Use only ${legalComparators}`);
      }
    }
  },
  placeholder: PropTypes.string,
  columnName: PropTypes.string
};

NumberFilter.defaultProps = {
  delay: Const.FILTER_DELAY
};

export default NumberFilter;
