import React, { Component, PropTypes } from 'react';
import Const from '../Const';

const showSelectedOnlyBtnDefaultClass = 'react-bs-table-show-sel-only-btn';

class ShowSelectedOnlyButton extends Component {
  render() {
    const {
      btnContextual,
      btnClass,
      onClick,
      toggle,
      showAllText,
      showOnlySelectText
    } = this.props;
    return (
      <button type='button'
        aria-pressed='false'
        data-toggle='button'
        className={ `btn ${btnContextual} ${showSelectedOnlyBtnDefaultClass} ${btnClass}` }
        onClick={ onClick }>
        { toggle ? showOnlySelectText : showAllText }
      </button>
    );
  }
}

ShowSelectedOnlyButton.propTypes = {
  showAllText: PropTypes.string,
  showOnlySelectText: PropTypes.string,
  toggle: PropTypes.bool,
  btnContextual: PropTypes.string,
  btnClass: PropTypes.string,
  onClick: PropTypes.func
};
ShowSelectedOnlyButton.defaultProps = {
  showAllText: Const.SHOW_ALL,
  showOnlySelectText: Const.SHOW_ONLY_SELECT,
  toggle: false,
  btnText: Const.DELETE_BTN_TEXT,
  btnContextual: 'btn-primary',
  btnClass: '',
  onClick: undefined
};

export default ShowSelectedOnlyButton;
