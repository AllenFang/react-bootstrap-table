import React, { Component, PropTypes } from 'react';
import classSet from 'classnames';
import Const from '../Const';
import editor from '../Editor';
import Notifier from '../Notification.js';

class ToolBar extends Component {

  static modalSeq = 0;

  constructor(props) {
    super(props);
    this.timeouteClear = 0;
    this.modalClassName;
    this.state = {
      isInsertRowTrigger: true,
      validateState: null,
      shakeEditor: false,
      showSelected: false
    };
  }

  componentWillMount() {
    const delay = this.props.searchDelayTime ? this.props.searchDelayTime : 0;
    this.debounceCallback = this.handleDebounce(() => {
      this.props.onSearch(this.refs.seachInput.value);
    },
      delay
    );
  }

  componentWillUnmount() {
    this.clearTimeout();
  }

  clearTimeout() {
    if (this.timeouteClear) {
      clearTimeout(this.timeouteClear);
      this.timeouteClear = 0;
    }
  }

  checkAndParseForm() {
    const newObj = {};
    const validateState = {};
    let isValid = true;
    let tempValue;
    let tempMsg;

    this.props.columns.forEach(function(column, i) {
      if (column.autoValue) {
        // when you want same auto generate value and not allow edit, example ID field
        const time = new Date().getTime();
        tempValue = typeof column.autoValue === 'function' ?
          column.autoValue() :
          (`autovalue-${time}`);
      } else {
        const dom = this.refs[column.field + i];
        tempValue = dom.value;

        if (column.editable && column.editable.type === 'checkbox') {
          const values = tempValue.split(':');
          tempValue = dom.checked ? values[0] : values[1];
        }

        if (column.editable && column.editable.validator) { // process validate
          tempMsg = column.editable.validator(tempValue);
          if (tempMsg !== true) {
            isValid = false;
            validateState[column.field] = tempMsg;
          }
        }
      }

      newObj[column.field] = tempValue;
    }, this);

    if (isValid) {
      return newObj;
    } else {
      this.clearTimeout();
      // show error in form and shake it
      this.setState({ validateState, shakeEditor: true });
      // notifier error
      this.refs.notifier.notice(
        'error',
        'Form validate errors, please checking!',
        'Pressed ESC can cancel');
      // clear animate class
      this.timeouteClear = setTimeout(() => {
        this.setState({ shakeEditor: false });
      }, 300);
      return null;
    }
  }

  handleSaveBtnClick = () => {
    const newObj = this.checkAndParseForm();
    if (!newObj) { // validate errors
      return;
    }
    const msg = this.props.onAddRow(newObj);
    if (msg) {
      this.refs.notifier.notice('error', msg, 'Pressed ESC can cancel');
      this.clearTimeout();
      // shake form and hack prevent modal hide
      this.setState({
        shakeEditor: true,
        validateState: 'this is hack for prevent bootstrap modal hide'
      });
      // clear animate class
      this.timeouteClear = setTimeout(() => {
        this.setState({ shakeEditor: false });
      }, 300);
    } else {
      // reset state and hide modal hide
      this.setState({
        validateState: null,
        shakeEditor: false
      }, () => {
        document.querySelector('.modal-backdrop').click();
        document.querySelector('.' + this.modalClassName).click();
      });
      // reset form
      this.refs.form.reset();
    }
  }

  handleShowOnlyToggle = () => {
    this.setState({
      showSelected: !this.state.showSelected
    });
    this.props.onShowOnlySelected();
  }

  handleDropRowBtnClick = () => {
    this.props.onDropRow();
  }

  handleCloseBtn() {
    this.refs.warning.style.display = 'none';
  }

  handleDebounce = (func, wait, immediate) => {
    let timeout;

    return () => {
      const later = () => {
        timeout = null;

        if (!immediate) {
          func.apply(this, arguments);
        }
      };

      const callNow = immediate && !timeout;

      clearTimeout(timeout);

      timeout = setTimeout(later, wait || 0);

      if (callNow) {
        func.appy(this, arguments);
      }
    };
  }

  handleKeyUp = (event) => {
    event.persist();
    this.debounceCallback(event);
  }

  handleExportCSV = () => {
    this.props.onExportCSV();
  }

  handleClearBtnClick = () => {
    this.refs.seachInput.value = '';
    this.props.onSearch('');
  }

  render() {
    this.modalClassName = 'bs-table-modal-sm' + ToolBar.modalSeq++;
    let insertBtn = null;
    let deleteBtn = null;
    let exportCSV = null;
    let showSelectedOnlyBtn = null;

    if (this.props.enableInsert) {
      insertBtn = (
        <button type='button'
          className='btn btn-info react-bs-table-add-btn'
          data-toggle='modal'
          data-target={ '.' + this.modalClassName }>
          <i className='glyphicon glyphicon-plus'></i> New
        </button>
      );
    }

    if (this.props.enableDelete) {
      deleteBtn = (
        <button type='button'
          className='btn btn-warning react-bs-table-del-btn'
          data-toggle='tooltip'
          data-placement='right'
          title='Drop selected row'
          onClick={ this.handleDropRowBtnClick }>
          <i className='glyphicon glyphicon-trash'></i> Delete
        </button>
      );
    }

    if (this.props.enableShowOnlySelected) {
      showSelectedOnlyBtn = (
        <button type='button'
          onClick={ this.handleShowOnlyToggle }
          className='btn btn-primary'
          data-toggle='button'
          aria-pressed='false'>
          { this.state.showSelected ? Const.SHOW_ALL : Const.SHOW_ONLY_SELECT }
        </button>
      );
    }

    if (this.props.enableExportCSV) {
      exportCSV = (
        <button type='button'
          className='btn btn-success'
          onClick={ this.handleExportCSV }>
            <i className='glyphicon glyphicon-export'></i>{ this.props.exportCSVText }
        </button>
      );
    }

    const searchTextInput = this.renderSearchPanel();
    const modal = this.props.enableInsert ? this.renderInsertRowModal() : null;

    return (
      <div className='row'>
        <div className='col-xs-12 col-sm-6 col-md-6 col-lg-8'>
          <div className='btn-group btn-group-sm' role='group'>
            { exportCSV }
            { insertBtn }
            { deleteBtn }
            { showSelectedOnlyBtn }
          </div>
        </div>
        <div className='col-xs-12 col-sm-6 col-md-6 col-lg-4'>
          { searchTextInput }
        </div>
        <Notifier ref='notifier' />
        { modal }
      </div>
    );
  }

  renderSearchPanel() {
    if (this.props.enableSearch) {
      let classNames = 'form-group form-group-sm react-bs-table-search-form';
      let clearBtn = null;
      if (this.props.clearSearch) {
        clearBtn = (
          <span className='input-group-btn'>
            <button
              className='btn btn-default'
              type='button'
              onClick={ this.handleClearBtnClick }>
              Clear
            </button>
          </span>
        );
        classNames += ' input-group input-group-sm';
      }

      return (
        <div className={ classNames }>
          <input ref='seachInput'
            className='form-control'
            type='text'
            placeholder={ this.props.searchPlaceholder ? this.props.searchPlaceholder : 'Search' }
            onKeyUp={ this.handleKeyUp }/>
            { clearBtn }
        </div>
      );
    } else {
      return null;
    }
  }

  renderInsertRowModal() {
    const validateState = this.state.validateState || {};
    const shakeEditor = this.state.shakeEditor;
    const inputField = this.props.columns.map((column, i) => {
      const { editable, format, field, name, autoValue } = column;
      const attr = {
        ref: field + i,
        placeholder: editable.placeholder ? editable.placeholder : name
      };

      if (autoValue) {
        // when you want same auto generate value
        // and not allow edit, for example ID field
        return null;
      }
      const error = validateState[field] ?
        (<span className='help-block bg-danger'>{ validateState[field] }</span>) :
        null;

      // let editor = Editor(editable,attr,format);
      // if(editor.props.type && editor.props.type == 'checkbox'){
      return (
        <div className='form-group' key={ field }>
          <label>{ name }</label>
          { editor(editable, attr, format, '', undefined, this.props.ignoreEditable) }
          { error }
        </div>
      );
    });
    const modalClass = classSet('modal', 'fade', this.modalClassName, {
      // hack prevent bootstrap modal hide by reRender
      'in': shakeEditor || this.state.validateState
    });
    const dialogClass = classSet('modal-dialog', 'modal-sm', {
      'animated': shakeEditor,
      'shake': shakeEditor
    });
    return (
      <div ref='modal' className={ modalClass } tabIndex='-1' role='dialog'>
        <div className={ dialogClass }>
          <div className='modal-content'>
            <div className='modal-header'>
              <button type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
              <h4 className='modal-title'>New Record</h4>
            </div>
            <div className='modal-body'>
              <form ref='form'>
              { inputField }
              </form>
            </div>
            <div className='modal-footer'>
              <button type='button'
                className='btn btn-default'
                data-dismiss='modal'>
                Close
              </button>
              <button type='button'
                className='btn btn-info'
                onClick={ this.handleSaveBtnClick }>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ToolBar.propTypes = {
  onAddRow: PropTypes.func,
  onDropRow: PropTypes.func,
  onShowOnlySelected: PropTypes.func,
  enableInsert: PropTypes.bool,
  enableDelete: PropTypes.bool,
  enableSearch: PropTypes.bool,
  enableShowOnlySelected: PropTypes.bool,
  columns: PropTypes.array,
  searchPlaceholder: PropTypes.string,
  exportCSVText: PropTypes.string,
  clearSearch: PropTypes.bool,
  ignoreEditable: PropTypes.bool
};

ToolBar.defaultProps = {
  enableInsert: false,
  enableDelete: false,
  enableSearch: false,
  enableShowOnlySelected: false,
  clearSearch: false,
  ignoreEditable: false
};

export default ToolBar;
