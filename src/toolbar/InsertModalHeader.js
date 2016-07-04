import React, { PropTypes } from 'react';

const InsertModalHeader = ({ title, onModalClose }) =>
  <div>
    <button type='button' className='close' onClick={ onModalClose }>
      <span aria-hidden='true'>&times;</span>
      <span className='sr-only'>Close</span>
    </button>
    <h4 className='modal-title'>{ title }</h4>
  </div>;

InsertModalHeader.propTypes = {
  title: PropTypes.string,
  onModalClose: PropTypes.func
};
InsertModalHeader.defaultProps = {
  title: 'Add Row',
  onModalClose: undefined
};

export default InsertModalHeader;
