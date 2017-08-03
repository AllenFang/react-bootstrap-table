import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Const from '../Const';

const deleteBtnDefaultClass = 'react-bs-table-del-btn';

class DeleteButton extends Component {
  render() {
    const {
      btnContextual,
      className,
      onClick,
      btnGlyphicon,
      btnText,
      children,
      ...rest
    } = this.props;
    const content = children ||
      (<span><i className={ `fa glyphicon ${btnGlyphicon}` }></i> { btnText }</span>);
    return (
      <button type='button'
        className={ `btn ${btnContextual} ${deleteBtnDefaultClass} ${className}` }
        onClick={ onClick }
        { ...rest }>
        { content }
      </button>
    );
  }
}

DeleteButton.propTypes = {
  btnText: PropTypes.string,
  btnContextual: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  btnGlyphicon: PropTypes.string
};
DeleteButton.defaultProps = {
  btnText: Const.DELETE_BTN_TEXT,
  btnContextual: 'btn-warning',
  className: '',
  onClick: undefined,
  btnGlyphicon: 'glyphicon-trash fa-trash'
};

export default DeleteButton;
