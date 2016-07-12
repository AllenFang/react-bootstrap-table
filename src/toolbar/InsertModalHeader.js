import React, { Component, PropTypes } from 'react';

class InsertModalHeader extends Component {

  handleCloseBtnClick = e => {
    const { onModalClose, beforeClose } = this.props;
    beforeClose && beforeClose(e);
    onModalClose();
  }

  render() {
    const { title, hideClose } = this.props;
    return (
      <div className='modal-header'>
        {
          hideClose ? null : (
            <button type='button'
              className='close' onClick={ this.handleCloseBtnClick }>
              <span aria-hidden='true'>&times;</span>
              <span className='sr-only'>Close</span>
            </button>
          )
        }
        <h4 className='modal-title'>{ title }</h4>
      </div>
    );
  }
}

InsertModalHeader.propTypes = {
  title: PropTypes.string,
  onModalClose: PropTypes.func,
  hideClose: PropTypes.bool,
  beforeClose: PropTypes.func
};
InsertModalHeader.defaultProps = {
  title: 'Add Row',
  onModalClose: undefined,
  disableClose: false,
  hideClose: undefined
};

export default InsertModalHeader;
