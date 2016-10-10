import React, { Component, PropTypes } from 'react';
import Const from '../Const';

const deleteBtnDefaultClass = 'react-bs-table-del-btn';

class DeleteButton extends Component {
  render() {
    const {
      btnContextual,
      btnClass,
      onClick,
      btnGlyphicon,
      btnText,
      children,
      ...rest
    } = this.props;
    const content = children ||
      (<span><i className={ `glyphicon ${btnGlyphicon}` }></i> { btnText }</span>);
    return (
      <button type='button'
        className={ `btn ${btnContextual} ${deleteBtnDefaultClass} ${btnClass}` }
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
  btnClass: PropTypes.string,
  onClick: PropTypes.func,
  btnGlyphicon: PropTypes.string
};
DeleteButton.defaultProps = {
  btnText: Const.DELETE_BTN_TEXT,
  btnContextual: 'btn-warning',
  btnClass: '',
  onClick: undefined,
  btnGlyphicon: 'glyphicon-trash'
};

export default DeleteButton;
