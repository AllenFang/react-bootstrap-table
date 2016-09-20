import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class SearchField extends Component {

  getValue() {
    return ReactDOM.findDOMNode(this).value;
  }

  setValue(value) {
    ReactDOM.findDOMNode(this).value = value;
  }

  render() {
    return (
      <input
        className={ `form-control ${this.props.className}` }
        type='text'
        defaultValue={ this.props.defaultValue }
        placeholder={ this.props.placeholder || SearchField.defaultProps.placeholder }
        onKeyUp={ this.props.onKeyUp }/>
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
