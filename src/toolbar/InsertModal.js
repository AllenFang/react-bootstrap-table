/* eslint no-console: 0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InsertModalHeader from './InsertModalHeader';
import InsertModalFooter from './InsertModalFooter';
import InsertModalBody from './InsertModalBody';

const defaultModalClassName = 'react-bs-table-insert-modal';

export default class InsertModal extends Component {

  handleSave = () => {
    const bodyRefs = this.refs.body;
    if (bodyRefs.getFieldValue) {
      this.props.onSave(bodyRefs.getFieldValue());
    } else {
      console.error(`Custom InsertModalBody should implement getFieldValue function
        and should return an object presented as the new row that user input.`);
    }
  }

  render() {
    let { headerComponent, footerComponent, bodyComponent } = this.props;
    const {
      columns,
      validateState,
      ignoreEditable,
      onModalClose
    } = this.props;
    const bodyAttr = { columns, validateState, ignoreEditable };

    bodyComponent = bodyComponent && bodyComponent(columns, validateState, ignoreEditable);

    headerComponent = headerComponent && headerComponent(onModalClose, this.handleSave);

    footerComponent = footerComponent && footerComponent(onModalClose, this.handleSave);

    if (bodyComponent) {
      bodyComponent = React.cloneElement(bodyComponent, { ref: 'body' });
    }

    if (headerComponent && headerComponent.type.name === InsertModalHeader.name) {
      const eventProps = {};
      if (!headerComponent.props.onModalClose) eventProps.onModalClose = onModalClose;
      if (!headerComponent.props.onSave) eventProps.onSave = this.handleSave;
      if (Object.keys(eventProps).length > 0) {
        headerComponent = React.cloneElement(headerComponent, eventProps);
      }
    } else if (headerComponent && headerComponent.type.name !== InsertModalHeader.name) {
      const { className } = headerComponent.props;
      if (typeof className === 'undefined' || className.indexOf('modal-header') === -1) {
        headerComponent = (<div className='modal-header'>{ headerComponent }</div>);
      }
    }

    if (footerComponent && footerComponent.type.name === InsertModalFooter.name) {
      const eventProps = {};
      if (!footerComponent.props.onModalClose) eventProps.onModalClose = onModalClose;
      if (!footerComponent.props.onSave) eventProps.onSave = this.handleSave;
      if (Object.keys(eventProps).length > 0) {
        footerComponent = React.cloneElement(footerComponent, eventProps);
      }
    } else if (footerComponent && footerComponent.type.name !== InsertModalFooter.name) {
      const { className } = footerComponent.props;
      if (typeof className === 'undefined' || className.indexOf('modal-footer') === -1) {
        footerComponent = (<div className='modal-footer'>{ footerComponent }</div>);
      }
    }

    return (
      <div className={ `modal-content ${defaultModalClassName}` }>
        {
          headerComponent ||
          (<InsertModalHeader
            version={ this.props.version }
            className='react-bs-table-inser-modal-header'
            onModalClose={ onModalClose }/>)
        }
        {
          bodyComponent ||
          (<InsertModalBody ref='body' { ...bodyAttr }/>)
        }
        {
          footerComponent ||
          (<InsertModalFooter
            className='react-bs-table-inser-modal-footer'
            onModalClose={ onModalClose }
            onSave={ this.handleSave }/>)
        }
      </div>
    );
  }
}
InsertModal.propTypes = {
  version: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
  validateState: PropTypes.object.isRequired,
  ignoreEditable: PropTypes.bool,
  headerComponent: PropTypes.func,
  bodyComponent: PropTypes.func,
  footerComponent: PropTypes.func,
  onModalClose: PropTypes.func,
  onSave: PropTypes.func
};

InsertModal.defaultProps = {};
