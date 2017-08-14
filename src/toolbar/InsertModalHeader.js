import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Util from '../util';

class InsertModalHeader extends Component {

  handleCloseBtnClick = e => {
    const { onModalClose, beforeClose } = this.props;
    beforeClose && beforeClose(e);
    onModalClose();
  }

  renderContent(closeBtn) {
    const { version, title: titleText } = this.props;
    const title = <h4 key='title' className='modal-title'>{ titleText }</h4>;
    if (Util.isBootstrap4(version)) {
      return [ title, closeBtn ];
    } else {
      return (
        <span>
          { closeBtn }
          { title }
        </span>
      );
    }
  }

  render() {
    const {
      hideClose,
      className,
      children
    } = this.props;

    const closeBtn = hideClose ? null : (
      <button type='button'
        className='close' onClick={ this.handleCloseBtnClick }>
        <span aria-hidden='true'>&times;</span>
        <span className='sr-only'>Close</span>
      </button>
    );

    const content = children || this.renderContent(closeBtn);

    return (
      <div className={ `modal-header ${className}` }>
        { content }
      </div>
    );
  }
}

InsertModalHeader.propTypes = {
  version: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  onModalClose: PropTypes.func,
  hideClose: PropTypes.bool,
  beforeClose: PropTypes.func
};
InsertModalHeader.defaultProps = {
  version: '3',
  className: '',
  title: 'Add Row',
  onModalClose: undefined,
  hideClose: false,
  beforeClose: undefined
};

export default InsertModalHeader;
