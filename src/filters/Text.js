import React, { Component, PropTypes } from 'react';
import Const from '../Const';

class TextFilter extends Component {
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
      this.props.filterHandler(filterValue, Const.FILTER_TYPE.TEXT);
    }, this.props.delay);
  }

  componentDidMount() {
    const defaultValue = this.refs.inputText.defaultValue;
    if (defaultValue) {
      this.props.filterHandler(defaultValue, Const.FILTER_TYPE.TEXT);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    const { placeholder, columnName, defaultValue } = this.props;
    return (
      <input ref='inputText'
        className='filter text-filter form-control'
        type='text'
        onChange={ this.filter }
        placeholder={ placeholder || `Enter ${columnName}...` }
        defaultValue={ defaultValue ? defaultValue : '' } />
    );
  }
}

TextFilter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  delay: PropTypes.number,
  placeholder: PropTypes.string,
  columnName: PropTypes.string
};

TextFilter.defaultProps = {
  delay: Const.FILTER_DELAY
};

export default TextFilter;
