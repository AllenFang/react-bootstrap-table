import React, { Component, PropTypes } from 'react';
import Const from '../Const';

const insertBtnDefaultClass = 'react-bs-table-add-btn';

class InsertButton extends Component {
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
      (<span><i className={ `fa ${btnFAwesome}` }></i>{ btnText }</span>);
    return (
      <button type='button'
        className={ `btn ${btnContextual} ${insertBtnDefaultClass} ${className}` }
        onClick={ onClick }
        { ...rest }>
        { content }
      </button>
    );
  }
}

InsertButton.propTypes = {
  btnText: PropTypes.string,
  btnContextual: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  btnFAwesome: PropTypes.string
};
InsertButton.defaultProps = {
  btnText: Const.INSERT_BTN_TEXT,
  btnContextual: 'btn-info',
  className: '',
  onClick: undefined,
  btnFAwesome: 'fa-plus'
};

export default InsertButton;
