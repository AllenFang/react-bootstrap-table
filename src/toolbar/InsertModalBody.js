/* eslint react/display-name: 0 */
import React, { Component, PropTypes } from 'react';

import editor from '../Editor';

class InsertModalBody extends Component {

  getFieldValue() {
    const newRow = {};
    this.props.columns.forEach((column, i) => {
      let inputVal;
      if (column.autoValue) {
        // when you want same auto generate value and not allow edit, example ID field
        const time = new Date().getTime();
        inputVal = typeof column.autoValue === 'function' ?
          column.autoValue() :
          (`autovalue-${time}`);
      } else if (column.hiddenOnInsert || !column.field) {
        inputVal = '';
      } else {
        const dom = this.refs[column.field + i];
        inputVal = dom.value;

        if (column.editable && column.editable.type === 'checkbox') {
          const values = inputVal.split(':');
          inputVal = dom.checked ? values[0] : values[1];
        }
      }
      newRow[column.field] = inputVal;
    }, this);
    return newRow;
  }

  render() {
    const { columns, validateState, ignoreEditable } = this.props;
    return (
      <div className='modal-body'>
        {
          columns.map((column, i) => {
            const {
              editable,
              format,
              field,
              name,
              autoValue,
              hiddenOnInsert
            } = column;
            const attr = {
              ref: field + i,
              placeholder: editable.placeholder ? editable.placeholder : name
            };

            if (autoValue || hiddenOnInsert || !column.field) {
              // when you want same auto generate value
              // and not allow edit, for example ID field
              return null;
            }
            const error = validateState[field] ?
              (<span className='help-block bg-danger'>{ validateState[field] }</span>) :
              null;
            return (
              <div className='form-group' key={ field }>
                <label>{ name }</label>
                { editor(editable, attr, format, '', undefined, ignoreEditable) }
                { error }
              </div>
            );
          })
        }
      </div>
    );
  }
}
InsertModalBody.propTypes = {
  columns: PropTypes.array,
  validateState: PropTypes.object,
  ignoreEditable: PropTypes.bool
};

InsertModalBody.defaultProps = {
  validateState: {},
  ignoreEditable: false
};

export default InsertModalBody;
