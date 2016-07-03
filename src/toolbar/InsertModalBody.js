/* eslint react/display-name: 0 */
import React, { PropTypes } from 'react';

import editor from '../Editor';

const InsertModalBody = ({ columns, validateState, ignoreEditable }) => {
  <div>
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

        if (autoValue || hiddenOnInsert) {
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
  </div>;
};

InsertModalBody.propTypes = {
  columns: PropTypes.array,
  validateState: PropTypes.object,
  ignoreEditable: PropTypes.bool
};

export default InsertModalBody;
