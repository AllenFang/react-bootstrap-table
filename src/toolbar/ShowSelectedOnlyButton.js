import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Const from '../Const';

const showSelectedOnlyBtnDefaultClass = 'react-bs-table-show-sel-only-btn';

class ShowSelectedOnlyButton extends Component {
  render() {
    const {
      btnContextual,
      className,
      onClick,
      toggle,
      showAllText,
      showOnlySelectText,
      children,
      ...rest
    } = this.props;
    const content = children ||
      (<span>{ toggle ? showAllText : showOnlySelectText }</span>);
    return (
      <button type='button'
        aria-pressed='false'
        data-toggle='button'
        className={ `btn ${btnContextual} ${showSelectedOnlyBtnDefaultClass} ${className}` }
        onClick={ onClick }
        { ...rest }>
        { content }
      </button>
    );
  }
}

ShowSelectedOnlyButton.propTypes = {
  showAllText: PropTypes.string,
  showOnlySelectText: PropTypes.string,
  toggle: PropTypes.bool,
  btnContextual: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};
ShowSelectedOnlyButton.defaultProps = {
  showAllText: Const.SHOW_ALL,
  showOnlySelectText: Const.SHOW_ONLY_SELECT,
  toggle: false,
  btnContextual: 'btn-primary',
  className: '',
  onClick: undefined
};

export default ShowSelectedOnlyButton;
