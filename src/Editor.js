import Utils from './util';
import React from 'react';

const editor = function(editable, attr, format, editorClass, defaultValue, ignoreEditable, row) {
  if (editable === true ||
    (editable === false && ignoreEditable) ||
    typeof editable === 'string') { // simple declare
    const type = editable ? 'text' : editable;
    return (
      <input { ...attr } type={ type } defaultValue={ defaultValue }
          className={ ( editorClass || '') + ' form-control editor edit-text' } />
    );
  } else if (!editable) {
    const type = editable ? 'text' : editable;
    return (
        <input { ...attr } type={ type } defaultValue={ defaultValue }
          disabled='disabled'
          className={ ( editorClass || '') + ' form-control editor edit-text' } />
    );
  } else if (editable && (editable.type === undefined ||
             editable.type === null ||
             editable.type.trim() === '')) {
    const type = editable ? 'text' : editable;
    return (
      <input { ...attr } type={ type } defaultValue={ defaultValue }
        className={ ( editorClass || '') + ' form-control editor edit-text' } />
    );
  } else if (editable.type) {// standard declare
    // put style if exist
    editable.style && (attr.style = editable.style);
    // put class if exist
    attr.className = (editorClass || '') +
                     ' form-control editor edit-' +
                     editable.type +
                     (editable.className ? (' ' + editable.className) : '');

    if (editable.type === 'select') {// process select input
      let options = [];
      let { values } = editable.options;
      const { textKey, valueKey } = editable.options;
      if (Utils.isFunction(values)) {
        values = values(row);
      }
      if (Array.isArray(values)) {// only can use arrray data for options
        let text;
        let value;
        options = values.map((option, i) => {
          if (typeof option === 'object') {
            text = textKey ? option[textKey] : option.text;
            value = valueKey ? option[valueKey] : option.value;
          } else {
            text = format ? format(option) : option;
            value = option;
          }
          return (
            <option key={ 'option' + i } value={ value }>{ text }</option>
          );
        }
        );
      }
      return (
        <select { ...attr } defaultValue={ defaultValue }>
          { options }
        </select>
      );
    } else if (editable.type === 'textarea') {// process textarea input
      // put other if exist
      editable.cols && (attr.cols = editable.cols);
      editable.rows && (attr.rows = editable.rows);
      let saveBtn;
      const keyUpHandler = attr.onKeyDown;
      if (keyUpHandler) {
        attr.onKeyDown = function(e) {
          if (e.keyCode !== 13) { // not Pressed ENTER
            keyUpHandler(e);
          }
        };
        saveBtn = (
          <button
            className='btn btn-info btn-xs textarea-save-btn'
            onClick={ keyUpHandler }>
            save
          </button>
        );
      }
      return (
        <div>
          <textarea { ...attr } defaultValue={ defaultValue }></textarea>
          { saveBtn }
        </div>
      );
    } else if (editable.type === 'checkbox') {
      let values = 'true:false';
      if (editable.options && editable.options.values) {
        // values = editable.options.values.split(':');
        values = editable.options.values;
      }
      attr.className = attr.className.replace('form-control', '');
      attr.className += ' checkbox pull-right';

      const checked = defaultValue &&
        defaultValue.toString() === values.split(':')[0] ? true : false;

      return (
        <input { ...attr } type='checkbox'
          value={ values } defaultChecked={ checked }/>
      );
    } else if (editable.type === 'datetime') {
      return (
        <input { ...attr } type='datetime-local' defaultValue={ defaultValue }/>
      );
    } else {// process other input type. as password,url,email...
      return (
        <input { ...attr } type={ editable.type } defaultValue={ defaultValue }/>
      );
    }
  }
  // default return for other case of editable
  return (
    <input {...attr} type='text'
      className={ (editorClass || '') + ' form-control editor edit-text' }/>
  );
};

export default editor;
