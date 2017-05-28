import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Const from '../Const';

class RegexFilter extends Component {
  constructor(props) {
    super(props);
    this.filter = this.filter.bind(this);
    this.timeout = null;
  }

  filter(event) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    const filterValue = event.target.value;
    this.timeout = setTimeout(() => {
      this.props.filterHandler(filterValue, Const.FILTER_TYPE.REGEX);
    }, this.props.delay);
  }

  cleanFiltered() {
    const value = this.props.defaultValue ? this.props.defaultValue : '';
    this.refs.inputText.value = value;
    this.props.filterHandler(value, Const.FILTER_TYPE.TEXT);
  }

  applyFilter(filterRegx) {
    this.refs.inputText.value = filterRegx;
    this.props.filterHandler(filterRegx, Const.FILTER_TYPE.REGEX);
  }

  componentDidMount() {
    const value = this.refs.inputText.value;
    if (value) {
      this.props.filterHandler(value, Const.FILTER_TYPE.REGEX);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    const { defaultValue, placeholder, columnName, style } = this.props;
    return (
      <input ref='inputText'
          className='filter text-filter form-control'
          type='text'
          style={ style }
          onChange={ this.filter }
          placeholder={ placeholder || `Enter Regex for ${columnName}...` }
          defaultValue={ (defaultValue) ? defaultValue : '' } />
    );
  }
}

RegexFilter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  delay: PropTypes.number,
  placeholder: PropTypes.string,
  columnName: PropTypes.string,
  style: PropTypes.oneOfType([ PropTypes.object ])
};

RegexFilter.defaultProps = {
  delay: Const.FILTER_DELAY
};

export default RegexFilter;
