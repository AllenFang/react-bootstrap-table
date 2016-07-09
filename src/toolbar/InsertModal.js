import React, { Component, PropTypes } from 'react';

import InsertModalHeader from './InsertModalHeader';
import InsertModalFooter from './InsertModalFooter';
import InsertModalBody from './InsertModalBody';

export default class InsertModal extends Component {

  handleSave = () => {
    const bodyRefs = this.refs.body;
    if (bodyRefs.getFieldValue) {
      this.props.onSave(bodyRefs.getFieldValue());
    } else {
      console.error(`Custom InsertModalBody should implement getFieldValue function
        which should return a object presented as the new row
        that user input.`);
    }
  }

  render() {
    let { headerComponent } = this.props;
    const {
      bodyComponent,
      footerComponent,
      columns,
      validateState,
      ignoreEditable,
      onModalClose
    } = this.props;
    const bodyAttr = { columns, validateState, ignoreEditable };

    let body = bodyComponent || <InsertModalBody { ...bodyAttr }/>;
    body = React.cloneElement(body, { ref: 'body' });

    console.log(headerComponent);
    if (headerComponent && headerComponent.type.name === InsertModalHeader.name) {
      headerComponent = React.cloneElement(headerComponent, { onModalClose });
    }

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
          { body }
        </div>
        <div className='modal-footer'>
          {
            footerComponent ||
            (<InsertModalFooter
              onModalClose={ onModalClose }
              onSave={ this.handleSave }/>)
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
