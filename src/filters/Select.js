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

  filter(event) {
    const { value } = event.target;
    this.setState({ isPlaceholderSelected: (value === '') });
    this.props.filterHandler(value, Const.FILTER_TYPE.SELECT);
  }

  getOptions() {
    const optionTags = [];
    const { options, placeholder, columnName } = this.props;
    optionTags.push((
      <option key='-1' value=''>{ placeholder || `Select ${columnName}...` }</option>
    ));
    Object.keys(options).map(key => {
      optionTags.push(<option key={ key } value={ key }>{ options[key] }</option>);
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
