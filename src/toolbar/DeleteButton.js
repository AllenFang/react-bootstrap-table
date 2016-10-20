import React, { Component, PropTypes } from 'react';
import Const from '../Const';

const deleteBtnDefaultClass = 'react-bs-table-del-btn';

class DeleteButton extends Component {
  render() {
    const {
      btnContextual,
      className,
      onClick,
      btnFAwesome,
      btnText,
      children,
      ...rest
    } = this.props;
    const content = children ||
      (<span><i className={ `fa ${btnFAwesome}` }></i> { btnText }</span>);
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
  btnFAwesome: PropTypes.string
};
DeleteButton.defaultProps = {
  btnText: Const.DELETE_BTN_TEXT,
  btnContextual: 'btn-warning',
  className: '',
  onClick: undefined,
  btnFAwesome: 'fa-trash'
};

export default DeleteButton;
