import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import editor from './Editor';
import { notice } from './Notification.js';
import classSet from 'classnames';
import Util from './util';

class TableEditColumn extends Component {
  constructor(props) {
    super(props);
    this.timeouteClear = 0;
    const { fieldValue, row, className } = this.props;
    this.focusInEditor = this.focusInEditor.bind(this);
    this.state = {
      shakeEditor: false,
      className: Util.isFunction(className) ? className(fieldValue, row) : className
    };
  }

  valueShortCircuit(value) {
    return value === null || typeof value === 'undefined' ? '' : value;
  }

  handleKeyPress = e => {
    if (e.keyCode === 13 || e.keyCode === 9) {
      // Pressed ENTER or TAB
      const value = e.currentTarget.type === 'checkbox' ?
                      this._getCheckBoxValue(e) : e.currentTarget.value;

      if ((e.keyCode === 9 && this.props.blurToSave) ||
        (!this.validator(value))) {
        return;
      }

      if (e.keyCode === 13) {
        this.props.completeEdit(value, this.props.rowIndex, this.props.colIndex);
      } else {
        this.props.onTab(this.props.rowIndex + 1, this.props.colIndex + 1, 'tab', e);
        e.preventDefault();
      }
    } else if (e.keyCode === 27) {
      this.props.completeEdit(
        null, this.props.rowIndex, this.props.colIndex);
    } else if (e.type === 'click' && !this.props.blurToSave) {  // textarea click save button
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
        return false;
      }
      this.props.completeEdit(
          value, this.props.rowIndex, this.props.colIndex);
    } else if (this.props.blurToEscape) {
      this.props.completeEdit(null, this.props.rowIndex, this.props.colIndex);
    }
  }

  handleCustomUpdate = value => {
    if (!this.validator(value)) {
      return;
    }
    this.props.completeEdit(value, this.props.rowIndex, this.props.colIndex);
  }

  // modified by iuculanop
  // BEGIN
  validator(value) {
    const ts = this;
    let valid = true;
    if (ts.props.editable.validator) {
      const checkVal = ts.props.editable.validator(value, this.props.row);
      const responseType = typeof checkVal;
      if (responseType !== 'object' && checkVal !== true) {
        valid = false;
        this.notifyToastr('error', checkVal, '');
      } else if (responseType === 'object' && checkVal.isValid !== true) {
        valid = false;
        this.notifyToastr(checkVal.notification.type,
                          checkVal.notification.msg,
                          checkVal.notification.title);
      }
      if (!valid) {
        // animate input
        ts.clearTimeout();
        const { invalidColumnClassName, row } = this.props;
        const className = Util.isFunction(invalidColumnClassName) ?
          invalidColumnClassName(value, row) :
          invalidColumnClassName;
        ts.setState({ shakeEditor: true, className });
        ts.timeouteClear = setTimeout(() => {
          ts.setState({ shakeEditor: false });
        }, 300);
        this.focusInEditor();
        return valid;
      }
    }
    return valid;
  }
  // END

  notifyToastr = (type, message, title) => {
    let toastr = true;
    const { beforeShowError } = this.props;
    if (beforeShowError) {
      toastr = beforeShowError(type, message, title);
    }
    if (toastr) {
      notice(type, message, title);
    }
  }

  clearTimeout() {
    if (this.timeouteClear !== 0) {
      clearTimeout(this.timeouteClear);
      this.timeouteClear = 0;
    }
  }

  componentDidMount() {
    this.focusInEditor();
    const dom = ReactDOM.findDOMNode(this);
    if (this.props.isFocus) {
      dom.focus();
    } else {
      dom.blur();
    }
  }

  componentDidUpdate() {
    const dom = ReactDOM.findDOMNode(this);
    if (this.props.isFocus) {
      dom.focus();
    } else {
      dom.blur();
    }
  }

  componentWillUnmount() {
    this.clearTimeout();
  }

  focusInEditor() {
    if (this.inputRef && Util.isFunction(this.inputRef.focus)) {
      this.inputRef.focus();
    }
  }

  handleClick = e => {
    if (e.target.tagName !== 'TD') {
      e.stopPropagation();
    }
  }

  getInputRef = userRef => ref => {
    this.inputRef = ref;
    if (Util.isFunction(userRef)) {
      userRef(ref);
    } else if (typeof userRef === 'string') {
      throw new Error('Ref must be a function');
    }
  }

  getHandleKeyPress = customHandler => e => {
    this.handleKeyPress(e);
    if (Util.isFunction(customHandler)) {
      customHandler(e);
    }
  }

  getHandleBlur = customHandler => e => {
    this.handleBlur(e);
    if (Util.isFunction(customHandler)) {
      customHandler(e);
    }
  }

  render() {
    const {
      editable,
      format,
      customEditor,
      isFocus,
      customStyleWithNav,
      row,
      attrs
    } = this.props;
    const { shakeEditor } = this.state;
    const attr = {
      ...editable.attrs,
      ref: this.getInputRef(editable.attrs && editable.attrs.ref),
      onKeyDown: this.getHandleKeyPress(editable.attrs && editable.attrs.onKeyDown),
      onBlur: this.getHandleBlur(editable.attrs && editable.attrs.onBlur)
    };
    let style = { position: 'relative' };
    let { fieldValue } = this.props;
    let { className } = this.state;

    if (editable.placeholder) {
      attr.placeholder = editable.placeholder;
      /* eslint-disable no-console */
      console.warn(
        'Setting editable.placeholder is deprecated. Use editable.attrs to set input attributes');
      /* eslint-enable no-console */
    }

    const editorClass = classSet({ 'animated': shakeEditor, 'shake': shakeEditor });
    fieldValue = fieldValue === 0 ? '0' : fieldValue;
    let cellEditor;
    if (customEditor) {
      const customEditorProps = {
        row,
        ...attr,
        defaultValue: this.valueShortCircuit(fieldValue),
        ...customEditor.customEditorParameters
      };
      cellEditor = customEditor.getElement(this.handleCustomUpdate, customEditorProps);
    } else {
      cellEditor = editor(editable, attr, format, editorClass, this.valueShortCircuit(fieldValue),
          null, row);
    }

    if (isFocus) {
      if (customStyleWithNav) {
        const customStyle = Util.isFunction(customStyleWithNav) ?
          customStyleWithNav(fieldValue, row) : customStyleWithNav;
        style = {
          ...style,
          ...customStyle
        };
      } else {
        className = `${className} default-focus-cell`;
      }
    }

    return (
      <td ref='td'
        { ...attrs }
        style={ style }
        className={ className }
        onClick={ this.handleClick }>
        { cellEditor }
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
  blurToEscape: PropTypes.bool,
  editable: PropTypes.oneOfType([ PropTypes.bool, PropTypes.object ]),
  format: PropTypes.oneOfType([ PropTypes.bool, PropTypes.func ]),
  row: PropTypes.any,
  fieldValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number,
    PropTypes.array,
    PropTypes.object
  ]),
  className: PropTypes.any,
  beforeShowError: PropTypes.func,
  isFocus: PropTypes.bool,
  attrs: PropTypes.object,
  customStyleWithNav: PropTypes.oneOfType([ PropTypes.func, PropTypes.object ])
};


export default TableEditColumn;
