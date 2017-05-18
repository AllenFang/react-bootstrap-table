import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonGroup extends Component {
  render() {
    const {
      className,
      sizeClass,
      children,
      ...rest
    } = this.props;
    return (
      <div className={ `btn-group ${sizeClass} ${className}` } role='group' { ...rest }>
        { children }
      </div>
    );
  }
}

ButtonGroup.propTypes = {
  sizeClass: PropTypes.string,
  className: PropTypes.string
};
ButtonGroup.defaultProps = {
  sizeClass: 'btn-group-sm',
  className: ''
};

export default ButtonGroup;
