import React, { Component, PropTypes } from 'react';

class ButtonGroup extends Component {
  render() {
    return (
      <div className={ `btn-group ${this.props.sizeClass} ${this.props.className}` } role='group'>
        { this.props.children }
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
