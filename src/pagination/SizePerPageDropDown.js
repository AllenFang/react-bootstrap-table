import React, { Component } from 'react';
import PropTypes from 'prop-types';

const sizePerPageDefaultClass = 'react-bs-table-sizePerPage-dropdown';

class SizePerPageDropDown extends Component {
  render() {
    const {
      open,
      hidden,
      onClick,
      options,
      className,
      variation,
      btnContextual,
      currSizePerPage
    } = this.props;

    const openClass = open ? 'open show' : '';
    const dropDownStyle = { visibility: hidden ? 'hidden' : 'visible' };

    return (
      <span style={ dropDownStyle }
        className={ `${variation} ${openClass} ${className} ${sizePerPageDefaultClass}` }>
        <button className={ `btn ${btnContextual} dropdown-toggle` }
          id='pageDropDown' data-toggle='dropdown'
          aria-expanded={ open }
          onClick={ onClick }>
          { currSizePerPage }
          <span>
          { ' ' }
          <span className='caret'/>
          </span>
        </button>
        <ul className='dropdown-menu' role='menu' aria-labelledby='pageDropDown'>
          { options }
        </ul>
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
  onClick: PropTypes.func
};
SizePerPageDropDown.defaultProps = {
  open: false,
  hidden: false,
  btnContextual: 'btn-default btn-secondary',
  variation: 'dropdown',
  className: ''
};


export default SizePerPageDropDown;
