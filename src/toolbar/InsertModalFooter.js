import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Const from '../Const';

class InsertModalFooter extends Component {

  handleCloseBtnClick = e => {
    const { beforeClose, onModalClose } = this.props;
    beforeClose && beforeClose(e);
    onModalClose();
  }

  handleSaveBtnClick = e => {
    const { beforeSave, onSave } = this.props;
    beforeSave && beforeSave(e);
    onSave();
  }

  render() {
    const {
      className,
      saveBtnText,
      closeBtnText,
      closeBtnContextual,
      saveBtnContextual,
      closeBtnClass,
      saveBtnClass,
      children
    } = this.props;

    const content = children || [
          (<button
            key='closeBtn'
            type='button'
            className={ `btn ${closeBtnContextual} ${closeBtnClass}` }
            onClick={ this.handleCloseBtnClick }>{ closeBtnText }</button>),
          (<button
            key='saveBtn'
            type='button'
            className={ `btn ${saveBtnContextual} ${saveBtnClass}` }
            onClick={ this.handleSaveBtnClick }>{ saveBtnText }</button>)
    ];

    return (
      <div className={ `modal-footer ${className}` }>
        { content }
      </div>
    );
  }
}
InsertModalFooter.propTypes = {
  className: PropTypes.string,
  saveBtnText: PropTypes.string,
  closeBtnText: PropTypes.string,
  closeBtnContextual: PropTypes.string,
  saveBtnContextual: PropTypes.string,
  closeBtnClass: PropTypes.string,
  saveBtnClass: PropTypes.string,
  beforeClose: PropTypes.func,
  beforeSave: PropTypes.func,
  onSave: PropTypes.func,
  onModalClose: PropTypes.func
};
InsertModalFooter.defaultProps = {
  className: '',
  saveBtnText: Const.SAVE_BTN_TEXT,
  closeBtnText: Const.CLOSE_BTN_TEXT,
  closeBtnContextual: 'btn-default btn-secondary',
  saveBtnContextual: 'btn-primary',
  closeBtnClass: '',
  saveBtnClass: '',
  beforeClose: undefined,
  beforeSave: undefined
};

export default InsertModalFooter;
