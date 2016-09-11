import React, { Component, PropTypes } from 'react';
import Const from '../Const';

const exportCsvBtnDefaultClass = 'react-bs-table-csv-btn';

class ExportCSVButton extends Component {
  render() {
    const { btnContextual, btnClass, onClick, btnGlyphicon, btnText } = this.props;
    return (
      <button type='button'
        className={ `btn ${btnContextual} ${exportCsvBtnDefaultClass} ${btnClass} hidden-print` }
        onClick={ onClick }>
        <i className={ `glyphicon ${btnGlyphicon}` }></i> { btnText }
      </button>
    );
  }
}

ExportCSVButton.propTypes = {
  btnText: PropTypes.string,
  btnContextual: PropTypes.string,
  btnClass: PropTypes.string,
  onClick: PropTypes.func,
  btnGlyphicon: PropTypes.string
};
ExportCSVButton.defaultProps = {
  btnText: Const.EXPORT_CSV_TEXT,
  btnContextual: 'btn-success',
  btnClass: '',
  onClick: undefined,
  btnGlyphicon: 'glyphicon-export'
};

export default ExportCSVButton;
