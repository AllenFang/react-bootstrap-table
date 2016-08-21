import React, { Component, PropTypes } from 'react';
import editor from './Editor';
import Notifier from './Notification.js';
import classSet from 'classnames';

class TableEditColumn extends Component {
  constructor(props) {
    super(props);
    this.timeouteClear = 0;
    this.state = {
      shakeEditor: false
    };
  }

  handleKeyPress = e => {
    if (e.keyCode === 13) {
      // Pressed ENTER
      const value = e.currentTarget.type === 'checkbox' ?
                      this._getCheckBoxValue(e) : e.currentTarget.value;

      if (!this.validator(value)) {
        return;
      }
      this.props.completeEdit(value, this.props.rowIndex, this.props.colIndex);
    } else if (e.keyCode === 27) {
      this.props.completeEdit(
        null, this.props.rowIndex, this.props.colIndex);
    } else if (e.type === 'click') {  // textarea click save button
      const value = e.target.parentElement.firstChild.value;
      if (!this.validator(value)) {
        return;
      }
      this.props.completeEdit(
          value, this.props.rowIndex, this.props.colIndex);
    }
  }

  handleBlur = e => {
    e.stopPropagation();
    if (this.props.blurToSave) {
      const value = e.currentTarget.type === 'checkbox' ?
                      this._getCheckBoxValue(e) : e.currentTarget.value;
      if (!this.validator(value)) {
        return;
      }
      this.props.completeEdit(
          value, this.props.rowIndex, this.props.colIndex);
    }
  }

  handleCustomUpdate = value => {
    this.props.completeEdit(value, this.props.rowIndex, this.props.colIndex);
  }

  validator(value) {
    const ts = this;
    if (ts.props.editable.validator) {
      const valid = ts.props.editable.validator(value);
      if (valid !== true) {
        ts.refs.notifier.notice('error', valid, 'Pressed ESC can cancel');
        const input = ts.refs.inputRef;
        // animate input
        ts.clearTimeout();
        ts.setState({ shakeEditor: true });
        ts.timeouteClear = setTimeout(() => {
          ts.setState({ shakeEditor: false });
        }, 300);
        input.focus();
        return false;
      }
    }
    return true;
  }
  clearTimeout() {
    if (this.timeouteClear !== 0) {
      clearTimeout(this.timeouteClear);
      this.timeouteClear = 0;
    }
  }
  componentDidMount() {
    this.refs.inputRef.focus();
  }

  componentWillUnmount() {
    this.clearTimeout();
  }

  render() {
    const { editable, format, customEditor } = this.props;
    const { shakeEditor } = this.state;
    const attr = {
      ref: 'inputRef',
      onKeyDown: this.handleKeyPress,
      onBlur: this.handleBlur
    };
    let { fieldValue } = this.props;
    // put placeholder if exist
    editable.placeholder && (attr.placeholder = editable.placeholder);

    const editorClass = classSet({ 'animated': shakeEditor, 'shake': shakeEditor });
    let cellEditor;
    if (customEditor) {
      const customEditorProps = {
        row: this.props.row,
        ...attr,
        defaultValue: fieldValue || '',
        ...customEditor.customEditorParameters
      };
      cellEditor = customEditor.getElement(this.handleCustomUpdate, customEditorProps);
    } else {
      fieldValue = fieldValue === 0 ? '0' : fieldValue;
      cellEditor = editor(editable, attr, format, editorClass, fieldValue || '');
    }

    return (
      <td ref='td' style={ { position: 'relative' } }>
        { cellEditor }
        <Notifier ref='notifier'/>
      </td>
    );
  }

  _getCheckBoxValue(e) {
    let value = '';
    const values = e.currentTarget.value.split(':');
    value = e.currentTarget.checked ? values[0] : values[1];
    return value;
  }
}

TableEditColumn.propTypes = {
  completeEdit: PropTypes.func,
  rowIndex: PropTypes.number,
  colIndex: PropTypes.number,
  blurToSave: PropTypes.bool,
  editable: PropTypes.oneOfType([ PropTypes.bool, PropTypes.object ]),
  format: PropTypes.oneOfType([ PropTypes.bool, PropTypes.func ]),
  row: PropTypes.any,
  fieldValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number,
    PropTypes.array,
    PropTypes.object
  ])
};


export default TableEditColumn;
