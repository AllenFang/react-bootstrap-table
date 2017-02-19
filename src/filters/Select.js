import React, { Component, PropTypes } from 'react';
import classSet from 'classnames';
import Const from '../Const';

class SelectFilter extends Component {
  constructor(props) {
    super(props);
    this.filter = this.filter.bind(this);
    this.state = {
      isPlaceholderSelected: (this.props.defaultValue === undefined ||
              !this.props.options.hasOwnProperty(this.props.defaultValue))
    };
  }

  componentWillReceiveProps(nextProps) {
    const isPlaceholderSelected = (nextProps.defaultValue === undefined ||
      !nextProps.options.hasOwnProperty(nextProps.defaultValue));
    this.setState({
      isPlaceholderSelected
    });
  }

  componentDidUpdate(prevProps) {
    let needFilter = false;
    if (this.props.defaultValue !== prevProps.defaultValue) {
      needFilter = true;
    } else if (this.props.options !== prevProps.options) {
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
    this.setState({ isPlaceholderSelected: (value === '') });
    this.props.filterHandler(value, Const.FILTER_TYPE.SELECT);
  }

  cleanFiltered() {
    const value = (this.props.defaultValue !== undefined) ? this.props.defaultValue : '';
    this.setState({ isPlaceholderSelected: (value === '') });
    this.refs.selectInput.value = value;
    this.props.filterHandler(value, Const.FILTER_TYPE.SELECT);
  }

  applyFilter(filterOption) {
    filterOption = filterOption + '';
    this.setState({ isPlaceholderSelected: (filterOption === '') });
    this.refs.selectInput.value = filterOption;
    this.props.filterHandler(filterOption, Const.FILTER_TYPE.SELECT);
  }

  getOptions() {
    const optionTags = [];
    const { options, placeholder, columnName, selectText } = this.props;
    const selectTextValue = (selectText !== undefined) ? selectText : 'Select';
    optionTags.push((
      <option key='-1' value=''>{ placeholder || `${selectTextValue} ${columnName}...` }</option>
    ));
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
  columnName: PropTypes.string
};

export default SelectFilter;
