import React, { Component, PropTypes } from 'react';

const clearBtnDefaultClass = 'react-bs-table-search-clear-btn';

class ClearSearchButton extends Component {

  render() {
    const {
      btnContextual,
      btnClass,
      onClick,
      btnText,
      children
    } = this.props;
    const content = children ||
      (<span>{ btnText }</span>);
    return (
      <button ref='btn'
        className={ `btn ${btnContextual} ${btnClass} ${clearBtnDefaultClass}` }
        type='button'
        onClick={ onClick }>
        { content }
      </button>
    );
  }
}

ClearSearchButton.propTypes = {
  btnContextual: PropTypes.string,
  btnClass: PropTypes.string,
  btnText: PropTypes.string,
  onClick: PropTypes.func
};
ClearSearchButton.defaultProps = {
  btnContextual: 'btn-default',
  btnClass: '',
  btnText: 'Clear',
  onClick: undefined
};

export default ClearSearchButton;
