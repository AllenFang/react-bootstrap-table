import React, { Component, PropTypes } from 'react';
import Const from '../Const';

const exportCsvBtnDefaultClass = 'react-bs-table-csv-btn';

class ExportCSVButton extends Component {
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
        className={ `btn ${btnContextual} ${exportCsvBtnDefaultClass} ${className} hidden-print` }
        onClick={ onClick }
        { ...rest }>
        { content }
      </button>
    );
  }
}

ExportCSVButton.propTypes = {
  btnText: PropTypes.string,
  btnContextual: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  btnFAwesome: PropTypes.string
};
ExportCSVButton.defaultProps = {
  btnText: Const.EXPORT_CSV_TEXT,
  btnContextual: 'btn-success',
  className: '',
  onClick: undefined,
  btnFAwesome: 'fa-arrow-circle-down'
};

export default ExportCSVButton;
