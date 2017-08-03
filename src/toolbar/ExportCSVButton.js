import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Const from '../Const';

const exportCsvBtnDefaultClass = 'react-bs-table-csv-btn';

class ExportCSVButton extends Component {
  render() {
    const {
      btnContextual,
      className,
      onClick,
      btnGlyphicon,
      btnText,
      children,
      ...rest
    } = this.props;
    const content = children ||
      (<span><i className={ `fa glyphicon ${btnGlyphicon}` }></i> { btnText }</span>);
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
  btnGlyphicon: PropTypes.string
};
ExportCSVButton.defaultProps = {
  btnText: Const.EXPORT_CSV_TEXT,
  btnContextual: 'btn-success',
  className: '',
  onClick: undefined,
  btnGlyphicon: 'glyphicon-export fa-download'
};

export default ExportCSVButton;
