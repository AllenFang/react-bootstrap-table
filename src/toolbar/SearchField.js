import React, { Component, PropTypes } from 'react';

class SearchField extends Component {
  render() {
    return (
      <input ref='seachInput'
        className={ `form-control ${this.props.className}` }
        type='text'
        defaultValue={ this.props.defaultValue }
        placeholder={ this.props.placeholder || SearchField.defaultProps.placeholder }
        onKeyUp={ this.onKeyUp }/>
    );
  }
}

SearchField.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  onKeyUp: PropTypes.func
};
SearchField.defaultProps = {
  className: '',
  defaultValue: '',
  placeholder: 'Search',
  onKeyUp: undefined
};

export default SearchField;
