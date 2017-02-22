import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import editor from './Editor';
import Notifier from './Notification.js';
import classSet from 'classnames';
import Const from './Const';

class TableEditColumn extends Component {
  constructor(props) {
    super(props);
    this.timeouteClear = 0;
    const { fieldValue, row, className } = this.props;
    this.state = {
      shakeEditor: false,
      className: typeof className === 'function' ? className(fieldValue, row) : className
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
    } else if (e.keyCode === 9) {
      this.props.onTab(this.props.rowIndex + 1, this.props.colIndex + 1, 'tab', e);
      e.preventDefault();
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
        return;
      }
      this.props.completeEdit(
          value, this.props.rowIndex, this.props.colIndex);
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
      const input = ts.refs.inputRef;
      const checkVal = ts.props.editable.validator(value, this.props.row);
      const responseType = typeof checkVal;
      if (responseType !== 'object' && checkVal !== true) {
        valid = false;
        const toastr = this.props.beforeShowError &&
          this.props.beforeShowError('error', checkVal, Const.CANCEL_TOASTR);
        if (toastr) {
          ts.refs.notifier.notice('error', checkVal, Const.CANCEL_TOASTR);
        }
      } else if (responseType === 'object' && checkVal.isValid !== true) {
        valid = false;
        const toastr = this.props.beforeShowError &&
          this.props.beforeShowError(checkVal.notification.type,
                                     checkVal.notification.msg,
                                     checkVal.notification.title);
        if (toastr) {
          ts.refs.notifier.notice(checkVal.notification.type,
                                  checkVal.notification.msg,
                                  checkVal.notification.title);
        }
      }
      if (!valid) {
        // animate input
        ts.clearTimeout();
        const { invalidColumnClassName, row } = this.props;
        const className = typeof invalidColumnClassName === 'function' ?
          invalidColumnClassName(value, row) :
          invalidColumnClassName;
        ts.setState({ shakeEditor: true, className });
        ts.timeouteClear = setTimeout(() => {
          ts.setState({ shakeEditor: false });
        }, 300);
        input.focus();
        return valid;
      }
    }
    return valid;
  }
  // END

  clearTimeout() {
    if (this.timeouteClear !== 0) {
      clearTimeout(this.timeouteClear);
      this.timeouteClear = 0;
    }
  }

  componentDidMount() {
    this.refs.inputRef.focus();
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

  handleClick = e => {
    if (e.target.tagName !== 'TD') {
      e.stopPropagation();
    }
  }

  render() {
    const {
      editable,
      format,
      customEditor,
      isFocus,
      customStyleWithNav,
      row
    } = this.props;
    const { shakeEditor } = this.state;
    const attr = {
      ref: 'inputRef',
      onKeyDown: this.handleKeyPress,
      onBlur: this.handleBlur
    };
    let style = { position: 'relative' };
    let { fieldValue } = this.props;
    let { className } = this.state;
    // put placeholder if exist
    editable.placeholder && (attr.placeholder = editable.placeholder);

    const editorClass = classSet({ 'animated': shakeEditor, 'shake': shakeEditor });
    let cellEditor;
    if (customEditor) {
      const customEditorProps = {
        row,
        ...attr,
        defaultValue: fieldValue || '',
        ...customEditor.customEditorParameters
      };
      cellEditor = customEditor.getElement(this.handleCustomUpdate, customEditorProps);
    } else {
      fieldValue = fieldValue === 0 ? '0' : fieldValue;
      cellEditor = editor(editable, attr, format, editorClass, fieldValue || '');
    }

    if (isFocus) {
      if (customStyleWithNav) {
        const customStyle = typeof customStyleWithNav === 'function' ?
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
        style={ style }
        className={ className }
        onClick={ this.handleClick }>
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
  ]),
  className: PropTypes.any,
  beforeShowError: PropTypes.func,
  isFocus: PropTypes.bool,
  customStyleWithNav: PropTypes.oneOfType([ PropTypes.func, PropTypes.object ])
};


export default TableEditColumn;
