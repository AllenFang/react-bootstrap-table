import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Const from '../Const';

class TextFilter extends Component {
  constructor(props) {
    super(props);
    this.filter = this.filter.bind(this);
    this.timeout = null;
    this.state = {
      value: this.props.defaultValue || ''
    };
  }

  filter(event) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    const filterValue = event.target.value;
    this.setState(() => { return { value: filterValue }; });
    this.timeout = setTimeout(() => {
      this.props.filterHandler(filterValue, Const.FILTER_TYPE.TEXT);
    }, this.props.delay);
  }

  cleanFiltered() {
    const value = this.props.defaultValue ? this.props.defaultValue : '';
    this.setState(() => { return { value }; });
    this.props.filterHandler(value, Const.FILTER_TYPE.TEXT);
  }

  applyFilter(filterText) {
    this.setState(() => { return { value: filterText }; });
    this.props.filterHandler(filterText, Const.FILTER_TYPE.TEXT);
  }

  componentDidMount() {
    const defaultValue = this.refs.inputText.value;
    if (defaultValue) {
      this.props.filterHandler(defaultValue, Const.FILTER_TYPE.TEXT);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.defaultValue !== this.props.defaultValue) {
      this.applyFilter(nextProps.defaultValue || '');
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    const { placeholder, columnName, style } = this.props;
    return (
      <input ref='inputText'
        className='filter text-filter form-control'
        type='text'
        style={ style }
        onChange={ this.filter }
        placeholder={ placeholder || `Enter ${columnName}...` }
        value={ this.state.value } />
    );
  }
}

TextFilter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  delay: PropTypes.number,
  placeholder: PropTypes.string,
  columnName: PropTypes.string,
  style: PropTypes.oneOfType([ PropTypes.object ])
};

TextFilter.defaultProps = {
  delay: Const.FILTER_DELAY
};

export default TextFilter;
