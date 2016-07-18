import React, { Component, PropTypes } from 'react';
import Modal from 'react-modal';
// import classSet from 'classnames';
import Const from '../Const';
// import editor from '../Editor';
import Notifier from '../Notification.js';
import InsertModal from './InsertModal';
import InsertButton from './InsertButton';

class ToolBar extends Component {

  static modalSeq = 0;

  constructor(props) {
    super(props);
    this.timeouteClear = 0;
    this.modalClassName;
    this.state = {
      isInsertModalOpen: false,
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

  validateNewRow(newRow) {
    const validateState = {};
    let isValid = true;
    let tempMsg;

    this.props.columns.forEach(column => {
      if (column.editable && column.editable.validator) { // process validate
        tempMsg = column.editable.validator(newRow[column.field]);
        if (tempMsg !== true) {
          isValid = false;
          validateState[column.field] = tempMsg;
        }
      }
    });

    if (isValid) {
      return true;
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

  handleSaveBtnClick = (newRow) => {
    if (!this.validateNewRow()) { // validation fail
      return;
    }
    const msg = this.props.onAddRow(newRow);
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
        shakeEditor: false,
        isInsertModalOpen: false
      });
      // reset form
      this.refs.form.reset();
    }
  }

  handleModalClose = () => {
    this.setState({ isInsertModalOpen: false });
  }

  handleModalOpen = () => {
    this.setState({ isInsertModalOpen: true });
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
      if (this.props.insertBtn) {
        insertBtn = this.props.insertBtn(this.handleModalOpen);
        insertBtn = React.cloneElement(insertBtn, {
          onClick: this.handleModalOpen
        });
      } else {
        insertBtn = (
          <InsertButton btnText={ this.props.insertText }
            onClick={ this.handleModalOpen }/>
        );
      }
    }

    if (this.props.enableDelete) {
      deleteBtn = (
        <button type='button'
          className='btn btn-warning react-bs-table-del-btn'
          data-toggle='tooltip'
          data-placement='right'
          title='Drop selected row'
          onClick={ this.handleDropRowBtnClick }>
          <i className='glyphicon glyphicon-trash'></i> { this.props.deleteText }
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
    const {
      columns,
      ignoreEditable,
      insertModalHeader,
      insertModalBody,
      insertModalFooter,
      insertModal
    } = this.props;

    let modal;
    modal = insertModal && insertModal(
      this.handleModalClose,
      this.handleSaveBtnClick,
      columns,
      validateState,
      ignoreEditable
    );

    if (!modal) {
      modal = (
        <InsertModal
          columns={ columns }
          validateState={ validateState }
          ignoreEditable={ ignoreEditable }
          onModalClose={ this.handleModalClose }
          onSave={ this.handleSaveBtnClick }
          headerComponent={ insertModalHeader }
          bodyComponent={ insertModalBody }
          footerComponent={ insertModalFooter }/>
      );
    }

    return (
      <Modal className='react-bs-insert-modal modal-dialog'
        isOpen={ this.state.isInsertModalOpen }
        onRequestClose={ this.handleModalClose }>
        { modal }
      </Modal>
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
  insertText: PropTypes.string,
  deleteText: PropTypes.string,
  saveText: PropTypes.string,
  closeText: PropTypes.string,
  clearSearch: PropTypes.bool,
  ignoreEditable: PropTypes.bool,
  insertModalHeader: PropTypes.func,
  insertModalBody: PropTypes.func,
  insertModalFooter: PropTypes.func,
  insertModal: PropTypes.func,
  insertBtn: PropTypes.func
};

ToolBar.defaultProps = {
  enableInsert: false,
  enableDelete: false,
  enableSearch: false,
  enableShowOnlySelected: false,
  clearSearch: false,
  ignoreEditable: false,
  exportCSVText: Const.EXPORT_CSV_TEXT,
  insertText: Const.INSERT_BTN_TEXT,
  deleteText: Const.DELETE_BTN_TEXT,
  saveText: Const.SAVE_BTN_TEXT,
  closeText: Const.CLOSE_BTN_TEXT
};

export default ToolBar;
