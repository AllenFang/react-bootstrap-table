import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class SearchField extends Component {

  getValue() {
    return ReactDOM.findDOMNode(this).value;
  }

  setValue(value) {
    ReactDOM.findDOMNode(this).value = value;
  }

  render() {
    const {
      className,
      defaultValue,
      placeholder,
      onKeyUp,
      ...rest
    } = this.props;
    return (
      <input
        className={ `form-control ${className}` }
        type='text'
        defaultValue={ defaultValue }
        placeholder={ placeholder || SearchField.defaultProps.placeholder }
        onKeyUp={ onKeyUp }
        style={ { zIndex: 0 } }
        { ...rest }/>
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
