import React, { Component, PropTypes } from 'react';

const clearBtnDefaultClass = 'react-bs-table-search-clear-btn';

class ClearSearchButton extends Component {

  render() {
    const {
      btnContextual,
      className,
      onClick,
      btnText,
      children,
      ...rest
    } = this.props;
    const content = children ||
      (<span>{ btnText }</span>);
    return (
      <button ref='btn'
        className={ `btn ${btnContextual} ${className} ${clearBtnDefaultClass}` }
        type='button'
        onClick={ onClick }
        { ...rest }>
        { content }
      </button>
    );
  }
}

ClearSearchButton.propTypes = {
  btnContextual: PropTypes.string,
  className: PropTypes.string,
  btnText: PropTypes.string,
  onClick: PropTypes.func
};
ClearSearchButton.defaultProps = {
  btnContextual: 'btn-default',
  className: '',
  btnText: 'Clear',
  onClick: undefined
};

export default ClearSearchButton;
