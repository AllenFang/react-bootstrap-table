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
    let { headerComponent, footerComponent } = this.props;
    const {
      bodyComponent,
      columns,
      validateState,
      ignoreEditable,
      onModalClose
    } = this.props;
    const bodyAttr = { columns, validateState, ignoreEditable };

    let body = bodyComponent || <InsertModalBody { ...bodyAttr }/>;
    body = React.cloneElement(body, { ref: 'body' });

    headerComponent = headerComponent && headerComponent(onModalClose, this.handleSave);

    footerComponent = footerComponent && footerComponent(onModalClose, this.handleSave);

    if (headerComponent && headerComponent.type.name === InsertModalHeader.name) {
      headerComponent = React.cloneElement(headerComponent, { onModalClose });
    }

    if (footerComponent && footerComponent.type.name === InsertModalFooter.name) {
      footerComponent = React.cloneElement(footerComponent, {
        onModalClose, onSave: this.handleSave
      });
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
  headerComponent: PropTypes.func,
  bodyComponent: PropTypes.element,
  footerComponent: PropTypes.func,
  onModalClose: PropTypes.func,
  onSave: PropTypes.func
};

InsertModal.defaultProps = {};
