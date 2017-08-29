import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classSet from 'classnames';
import Const from '../Const';

function optionsEquals(options1, options2) {
  const keys = Object.keys(options1);
  for (const k in keys) {
    if (options1[k] !== options2[k]) {
      return false;
    }
  }
  return Object.keys(options1).length === Object.keys(options2).length;
}

class SelectFilter extends Component {
  constructor(props) {
    super(props);
    this.filter = this.filter.bind(this);
    this.state = {
      isPlaceholderSelected: (this.props.defaultValue === undefined ||
              !this.props.options.hasOwnProperty(this.props.defaultValue))
    };
  }

  componentWillReceiveProps() {
    const currentSelectValue = this.refs.selectInput.value;
    const isPlaceholderSelected = !currentSelectValue || currentSelectValue === '';
    this.setState(() => {
      return {
        isPlaceholderSelected
      };
    });
  }

  componentDidUpdate(prevProps) {
    let needFilter = false;
    if (this.props.defaultValue !== prevProps.defaultValue) {
      needFilter = true;
    } else if (!optionsEquals(this.props.options, prevProps.options)) {
      needFilter = true;
    }
    if (needFilter) {
      const value = this.refs.selectInput.value;
      if (value) {
        this.props.filterHandler(value, Const.FILTER_TYPE.SELECT);
      }
    }
  }

  filter(event) {
    const { value } = event.target;
    this.setState(() => { return { isPlaceholderSelected: (value === '') }; });
    this.props.filterHandler(value, Const.FILTER_TYPE.SELECT);
  }

  cleanFiltered() {
    const value = (this.props.defaultValue !== undefined) ? this.props.defaultValue : '';
    this.setState(() => { return { isPlaceholderSelected: (value === '') }; });
    this.refs.selectInput.value = value;
    this.props.filterHandler(value, Const.FILTER_TYPE.SELECT);
  }

  applyFilter(filterOption) {
    filterOption = filterOption + '';
    this.setState(() => { return { isPlaceholderSelected: (filterOption === '') }; });
    this.refs.selectInput.value = filterOption;
    this.props.filterHandler(filterOption, Const.FILTER_TYPE.SELECT);
  }

  getOptions() {
    const optionTags = [];
    const { options, placeholder, columnName, selectText, withoutEmptyOption } = this.props;
    const selectTextValue = (selectText !== undefined) ? selectText : 'Select';
    if (!withoutEmptyOption) {
      optionTags.push((
        <option key='-1' value=''>{ placeholder || `${selectTextValue} ${columnName}...` }</option>
      ));
    }
    Object.keys(options).map(key => {
      optionTags.push(<option key={ key } value={ key }>{ options[key] + '' }</option>);
    });
    return optionTags;
  }

  componentDidMount() {
    const value = this.refs.selectInput.value;
    if (value) {
      this.props.filterHandler(value, Const.FILTER_TYPE.SELECT);
    }
  }

  render() {
    const selectClass = classSet('filter', 'select-filter', 'form-control',
              { 'placeholder-selected': this.state.isPlaceholderSelected });

    return (
      <select ref='selectInput'
          style={ this.props.style }
          className={ selectClass }
          onChange={ this.filter }
          defaultValue={ (this.props.defaultValue !== undefined) ? this.props.defaultValue : '' } >
        { this.getOptions() }
      </select>
    );
  }
}

SelectFilter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  columnName: PropTypes.string,
  style: PropTypes.oneOfType([ PropTypes.object ])
};

export default SelectFilter;
