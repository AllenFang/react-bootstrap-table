import React, { Component, PropTypes } from 'react';
import Const from '../Const';

class TextFilter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      placeholder,
      columnName,
      defaultValue,
      filterHandler,
      delay,
      customHandleTextFilter,
      clearFilter } = this.props;
    return (
      <FilterTextInput
        placeholder={ placeholder }
        columnName={ columnName }
        defaultValue={ defaultValue }
        filterHandler={ filterHandler }
        delay={ delay }
        onCustomHandleTextFilter={ customHandleTextFilter }
        onClearFilter={ clearFilter } />
    );
  }
}

class FilterTextInput extends Component {
  constructor(props) {
    super(props);

    this.filter = this.filter.bind(this);
    this.timeout = null;
    this.firstFilter = true;

    this.state = {
      text: ''
    };
  }

  _clearFilterText(clear) {
    if (clear) {
      this.setState({
        text: ''
      });
    }
  }

  filter(event) {
    this.firstFilter = false;

    this.setState({
      text: event.target.value
    });

    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    const filterValue = event.target.value;
    this.timeout = setTimeout(() => {
      // if user want to clear filter input text
      if (this.props.onClearFilter) {
        this._clearFilterText(this.props.onClearFilter);
      }
      // exposed the filterHandler method for user to search by dynamic paprams.
      if (this.props.onCustomHandleTextFilter) {
        this.props.onCustomHandleTextFilter(this.props.filterHandler, filterValue);
      } else {
        this.props.filterHandler(filterValue, Const.FILTER_TYPE.TEXT);
      }
    }, this.props.delay);
  }

  componentDidMount() {
    const defaultValue = this.refs.inputText.value;
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
        value={ defaultValue && this.firstFilter ? defaultValue : this.state.text } />
    );
  }
}

TextFilter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  delay: PropTypes.number,
  placeholder: PropTypes.string,
  columnName: PropTypes.string,
  customHandleTextFilter: PropTypes.func,
  clearFilter: PropTypes.bool
};

TextFilter.defaultProps = {
  delay: Const.FILTER_DELAY
};

export default TextFilter;
