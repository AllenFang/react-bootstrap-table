import React, { Component } from 'react';
import PropTypes from 'prop-types';

const sizePerPageDefaultClass = 'react-bs-table-sizePerPage-dropdown';

class SizePerPageDropDown extends Component {
  render() {
    const {
      open,
      hidden,
      onClick,
      onBlur,
      options,
      className,
      variation,
      btnContextual,
      isBootstrap4,
      currSizePerPage
    } = this.props;

    if (hidden) return null;

    const openClass = open ? 'open show' : '';

    const renderOptions = () => {
      const attrs = {
        className: `dropdown-menu ${openClass}`,
        role: 'menu',
        'aria-labelledby': 'pageDropDown'
      };
      const type = isBootstrap4 ? 'div' : 'ul';

      return React.createElement(type, attrs, options);
    };

    return (
      <span
        className={ `${variation} ${openClass} ${className} ${sizePerPageDefaultClass}` }>
        <button className={ `btn ${btnContextual} dropdown-toggle` }
          id='pageDropDown' data-toggle='dropdown'
          aria-expanded={ open }
          aria-haspopup={ !open }
          onClick={ onClick }
          onBlur={ onBlur }>
          { currSizePerPage }
          <span>
          { ' ' }
          <span className='caret'/>
          </span>
        </button>
        { renderOptions() }
      </span>
    );
  }
}

SizePerPageDropDown.propTypes = {
  open: PropTypes.bool,
  hidden: PropTypes.bool,
  btnContextual: PropTypes.string,
  currSizePerPage: PropTypes.string,
  options: PropTypes.array,
  variation: PropTypes.oneOf([ 'dropdown', 'dropup' ]),
  className: PropTypes.string,
  onClick: PropTypes.func,
  onBlur: PropTypes.func
};
SizePerPageDropDown.defaultProps = {
  open: false,
  hidden: false,
  btnContextual: 'btn-default btn-secondary',
  variation: 'dropdown',
  className: ''
};


export default SizePerPageDropDown;
