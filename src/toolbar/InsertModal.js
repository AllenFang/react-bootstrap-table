import React, { Component, PropTypes } from 'react';

import InsertModalHeader from './InsertModalHeader';
import InsertModalFooter from './InsertModalFooter';
import InsertModalBody from './InsertModalBody';

export default class InsertModal extends Component {

  render() {
    const {
      headerComponent,
      bodyComponent,
      footerComponent,
      columns,
      validateState,
      ignoreEditable,
      onModalClose,
      onSave
    } = this.props;
    const bodyAttr = { columns, validateState, ignoreEditable };

    return (
      <div className='modal-content'>
        <div className='modal-header'>
          {
            headerComponent ||
            (<InsertModalHeader
              onModalClose={ onModalClose }/>)
          }
        </div>
        <div className='modal-body'>
          {
            bodyComponent ||
            (<InsertModalBody { ...bodyAttr }/>)
          }
        </div>
        <div className='modal-footer'>
          {
            footerComponent ||
            (<InsertModalFooter
              onModalClose={ onModalClose }
              onSave={ onSave }/>)
          }
        </div>
      </div>
    );
  }
}
InsertModal.propTypes = {
  columns: PropTypes.array.isRequired,
  validateState: PropTypes.object.isRequired,
  ignoreEditable: PropTypes.bool,
  headerComponent: PropTypes.element,
  bodyComponent: PropTypes.element,
  footerComponent: PropTypes.element,
  onModalClose: PropTypes.func,
  onSave: PropTypes.func
};

InsertModal.defaultProps = {};
