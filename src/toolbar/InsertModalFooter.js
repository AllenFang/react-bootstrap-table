import React, { PropTypes } from 'react';
import Const from '../Const';
const InsertModalFooter = ({ onModalClose, onSave }) => {
  <div>
    <button
      type='button'
      className='btn btn-default'
      onClick={ onModalClose }>Close</button>
    <button
      type='button'
      className='btn btn-primary'
      onClick={ onSave }>Save</button>
  </div>;
};

InsertModalFooter.propTypes = {
  saveBtnText: PropTypes.string,
  closeBtnText: PropTypes.string,
  onSave: PropTypes.func,
  onModalClose: PropTypes.func
};
InsertModalFooter.defaultProps = {
  saveBtnText: Const.SAVE_BTN_TEXT,
  closeBtnText: Const.CLOSE_BTN_TEXT,
  onSave: PropTypes.func,
  onModalClose: PropTypes.func
};

export default InsertModalFooter;
