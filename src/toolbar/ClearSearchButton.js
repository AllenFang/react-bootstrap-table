import React, { Component, PropTypes } from 'react';

const clearBtnDefaultClass = 'react-bs-table-search-clear-btn';

class ClearSearchButton extends Component {

  render() {
    const {
      btnContextual,
      wrapperClass,
      btnClass,
      onClick,
      btnText
    } = this.props;
    return (
      <span className={ `input-group-btn ${wrapperClass}` }>
        <button ref='btn'
          className={ `btn ${btnContextual} ${btnClass} ${clearBtnDefaultClass}` }
          type='button'
          onClick={ onClick }>
          { btnText }
        </button>
      </span>
    );
  }
}

ClearSearchButton.propTypes = {
  btnContextual: PropTypes.string,
  btnClass: PropTypes.string,
  btnText: PropTypes.string,
  onClick: PropTypes.func,
  wrapperClass: PropTypes.string
};
ClearSearchButton.defaultProps = {
  btnContextual: 'btn-default',
  btnClass: '',
  btnText: 'Clear',
  onClick: undefined,
  wrapperClass: ''
};

export default ClearSearchButton;
