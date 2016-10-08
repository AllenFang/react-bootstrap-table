import React, { Component, PropTypes } from 'react';
import Const from '../Const';

const insertBtnDefaultClass = 'react-bs-table-add-btn';

class InsertButton extends Component {
  render() {
    const { btnContextual, btnClass, onClick, btnGlyphicon, btnText, children } = this.props;
    const content = children ||
      (<span><i className={ `glyphicon ${btnGlyphicon}` }></i>{ btnText }</span>);
    return (
      <button type='button'
        className={ `btn ${btnContextual} ${insertBtnDefaultClass} ${btnClass}` }
        onClick={ onClick }>
        { content }
      </button>
    );
  }
}

InsertButton.propTypes = {
  btnText: PropTypes.string,
  btnContextual: PropTypes.string,
  btnClass: PropTypes.string,
  onClick: PropTypes.func,
  btnGlyphicon: PropTypes.string
};
InsertButton.defaultProps = {
  btnText: Const.INSERT_BTN_TEXT,
  btnContextual: 'btn-info',
  btnClass: '',
  onClick: undefined,
  btnGlyphicon: 'glyphicon-plus'
};

export default InsertButton;
