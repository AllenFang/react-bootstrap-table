import React, { PropTypes } from 'react';
import Const from '../Const';
const InsertModalFooter = ({
  saveBtnText,
  closeBtnText,
  closeBtnContextual,
  saveBtnContextual,
  closeBtnClass,
  saveBtnClass,
  onModalClose,
  onSave
}) =>
  <div>
    <button
      type='button'
      className={ `btn ${closeBtnContextual} ${closeBtnClass}` }
      onClick={ onModalClose }>{ closeBtnText }</button>
    <button
      type='button'
      className={ `btn ${saveBtnContextual} ${saveBtnClass}` }
      onClick={ onSave }>{ saveBtnText }</button>
  </div>;

InsertModalFooter.propTypes = {
  saveBtnText: PropTypes.string,
  closeBtnText: PropTypes.string,
  closeBtnContextual: PropTypes.string,
  saveBtnContextual: PropTypes.string,
  closeBtnClass: PropTypes.string,
  saveBtnClass: PropTypes.string,
  onSave: PropTypes.func,
  onModalClose: PropTypes.func
};
InsertModalFooter.defaultProps = {
  saveBtnText: Const.SAVE_BTN_TEXT,
  closeBtnText: Const.CLOSE_BTN_TEXT,
  closeBtnContextual: 'btn-default',
  saveBtnContextual: 'btn-primary',
  closeBtnClass: '',
  saveBtnClass: '',
  onSave: PropTypes.func,
  onModalClose: PropTypes.func
};

export default InsertModalFooter;
