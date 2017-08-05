/* eslint no-console: 0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
// import classSet from 'classnames';
import Const from '../Const';
// import editor from '../Editor';
import { notice } from '../Notification.js';
import InsertModal from './InsertModal';
import InsertButton from './InsertButton';
import DeleteButton from './DeleteButton';
import ExportCSVButton from './ExportCSVButton';
import ShowSelectedOnlyButton from './ShowSelectedOnlyButton';
import SearchField from './SearchField';
import ClearSearchButton from './ClearSearchButton';

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
      const { seachInput } = this.refs;
      seachInput && this.props.onSearch(seachInput.getValue());
    },
      delay
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.reset) {
      this.setSearchInput('');
    }
  }

  componentWillUnmount() {
    this.clearTimeout();
  }

  setSearchInput(text) {
    const { seachInput } = this.refs;
    if (seachInput && seachInput.value !== text) {
      seachInput.value = text;
    }
  }

  clearTimeout() {
    if (this.timeouteClear) {
      clearTimeout(this.timeouteClear);
      this.timeouteClear = 0;
    }
  }

  displayCommonMessage = () => {
    notice('error', this.props.insertFailIndicator, '');
  }

  validateNewRow(newRow) {
    const validateState = {};
    let isValid = true;
    let tempMsg;
    let responseType;

    this.props.columns.forEach(column => {
      if (column.isKey && column.keyValidator) { // key validator for checking exist key
        tempMsg = this.props.isValidKey(newRow[column.field]);
        if (tempMsg) {
          this.displayCommonMessage();
          isValid = false;
          validateState[column.field] = tempMsg;
        }
      } else if (column.editable && column.editable.validator) { // process validate
        tempMsg = column.editable.validator(newRow[column.field], newRow);
        responseType = typeof tempMsg;
        if (responseType !== 'object' && tempMsg !== true) {
          this.displayCommonMessage();
          isValid = false;
          validateState[column.field] = tempMsg;
        } else if (responseType === 'object' && tempMsg.isValid !== true) {
          notice(
            tempMsg.notification.type,
            tempMsg.notification.msg,
            tempMsg.notification.title);
          isValid = false;
          validateState[column.field] = tempMsg.notification.msg;
        }
      }
    });

    if (isValid) {
      return true;
    } else {
      this.clearTimeout();
      // show error in form and shake it
      this.setState(() => { return { validateState, shakeEditor: true }; });
      this.timeouteClear = setTimeout(() => {
        this.setState(() => { return { shakeEditor: false }; });
      }, 300);
      return null;
    }
  }

  handleSaveBtnClick = (newRow) => {
    if (!this.validateNewRow(newRow)) { // validation fail
      return;
    }
    const msg = this.props.onAddRow(newRow);
    if (msg !== false) {
      this.afterHandleSaveBtnClick(msg);
    }
  }

  afterHandleSaveBtnClick = (msg) => {
    if (msg) {
      notice('error', msg, '');
      this.clearTimeout();
      // shake form and hack prevent modal hide
      this.setState(() => {
        return {
          shakeEditor: true,
          validateState: 'this is hack for prevent bootstrap modal hide'
        };
      });
      // clear animate class
      this.timeouteClear = setTimeout(() => {
        this.setState(() => { return { shakeEditor: false }; });
      }, 300);
    } else {
      // reset state and hide modal hide
      this.setState(() => {
        return {
          validateState: null,
          shakeEditor: false,
          isInsertModalOpen: false
        };
      });
    }
  }

  handleModalClose = () => {
    this.setState(() => { return { isInsertModalOpen: false }; });
  }

  handleModalOpen = () => {
    this.setState(() => { return { isInsertModalOpen: true }; });
  }

  handleShowOnlyToggle = () => {
    this.setState(() => {
      return {
        showSelected: !this.state.showSelected
      };
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
    const { seachInput } = this.refs;
    seachInput && seachInput.setValue('');
    this.props.onSearch('');
  }

  render() {
    this.modalClassName = 'bs-table-modal-sm' + ToolBar.modalSeq++;
    let toolbar = null;
    let btnGroup = null;
    let insertBtn = null;
    let deleteBtn = null;
    let exportCSVBtn = null;
    let showSelectedOnlyBtn = null;

    if (this.props.enableInsert) {
      if (this.props.insertBtn) {
        insertBtn = this.renderCustomBtn(this.props.insertBtn,
          [ this.handleModalOpen ], InsertButton.name, 'onClick', this.handleModalOpen);
      } else {
        insertBtn = (
          <InsertButton btnText={ this.props.insertText }
            onClick={ this.handleModalOpen }/>
        );
      }
    }

    if (this.props.enableDelete) {
      if (this.props.deleteBtn) {
        deleteBtn = this.renderCustomBtn(this.props.deleteBtn,
          [ this.handleDropRowBtnClick ], DeleteButton.name, 'onClick', this.handleDropRowBtnClick);
      } else {
        deleteBtn = (
          <DeleteButton btnText={ this.props.deleteText }
            onClick={ this.handleDropRowBtnClick }/>
        );
      }
    }

    if (this.props.enableShowOnlySelected) {
      if (this.props.showSelectedOnlyBtn) {
        showSelectedOnlyBtn = this.renderCustomBtn(this.props.showSelectedOnlyBtn,
          [ this.handleShowOnlyToggle, this.state.showSelected ], ShowSelectedOnlyButton.name,
          'onClick', this.handleShowOnlyToggle);
      } else {
        showSelectedOnlyBtn = (
          <ShowSelectedOnlyButton toggle={ this.state.showSelected }
            onClick={ this.handleShowOnlyToggle }/>
        );
      }
    }

    if (this.props.enableExportCSV) {
      if (this.props.exportCSVBtn) {
        exportCSVBtn = this.renderCustomBtn(this.props.exportCSVBtn,
          [ this.handleExportCSV ], ExportCSVButton.name, 'onClick', this.handleExportCSV);
      } else {
        exportCSVBtn = (
          <ExportCSVButton btnText={ this.props.exportCSVText }
            onClick={ this.handleExportCSV }/>
        );
      }
    }

    if (this.props.btnGroup) {
      btnGroup = this.props.btnGroup({
        exportCSVBtn,
        insertBtn,
        deleteBtn,
        showSelectedOnlyBtn
      });
    } else {
      btnGroup = (
        <div className='btn-group btn-group-sm' role='group'>
          { exportCSVBtn }
          { insertBtn }
          { deleteBtn }
          { showSelectedOnlyBtn }
        </div>
      );
    }

    const [ searchPanel, searchField, clearBtn ] = this.renderSearchPanel();
    const modal = this.props.enableInsert ? this.renderInsertRowModal() : null;

    if (this.props.toolBar) {
      toolbar = this.props.toolBar({
        components: {
          exportCSVBtn,
          insertBtn,
          deleteBtn,
          showSelectedOnlyBtn,
          searchPanel,
          btnGroup,
          searchField,
          clearBtn
        },
        event: {
          openInsertModal: this.handleModalOpen,
          closeInsertModal: this.handleModalClose,
          dropRow: this.handleDropRowBtnClick,
          showOnlyToogle: this.handleShowOnlyToggle,
          exportCSV: this.handleExportCSV,
          search: this.props.onSearch
        }
      });
    } else {
      toolbar = [ (
        <div key='toolbar-left' className='col-xs-6 col-sm-6 col-md-6 col-lg-8'>
          { this.props.searchPosition === 'left' ? searchPanel : btnGroup }
        </div>
      ), (
        <div key='toolbar-right' className='col-xs-6 col-sm-6 col-md-6 col-lg-4'>
          { this.props.searchPosition === 'left' ? btnGroup : searchPanel }
        </div>
      ) ];
    }

    return (
      <div className='row'>
        { toolbar }
        { modal }
      </div>
    );
  }

  renderSearchPanel() {
    if (this.props.enableSearch) {
      let classNames = 'form-group form-group-sm react-bs-table-search-form';
      let clearBtn = null;
      let searchField = null;
      let searchPanel = null;
      if (this.props.clearSearch) {
        if (this.props.clearSearchBtn) {
          clearBtn = this.renderCustomBtn(this.props.clearSearchBtn,
            [ this.handleClearBtnClick ], ClearSearchButton.name, 'onClick', this.handleClearBtnClick); /* eslint max-len: 0*/
        } else {
          clearBtn = (
            <ClearSearchButton onClick={ this.handleClearBtnClick }/>
          );
        }
        classNames += ' input-group input-group-sm';
      }

      if (this.props.searchField) {
        searchField = this.props.searchField({
          search: this.handleKeyUp,
          defaultValue: this.props.defaultSearch,
          placeholder: this.props.searchPlaceholder
        });
        if (searchField.type.name === SearchField.name) {
          searchField = React.cloneElement(searchField, {
            ref: 'seachInput',
            onKeyUp: this.handleKeyUp
          });
        } else {
          searchField = React.cloneElement(searchField, {
            ref: 'seachInput'
          });
        }
      } else {
        searchField = (
          <SearchField ref='seachInput'
            defaultValue={ this.props.defaultSearch }
            placeholder={ this.props.searchPlaceholder }
            onKeyUp={ this.handleKeyUp }/>
        );
      }
      if (this.props.searchPanel) {
        searchPanel = this.props.searchPanel({
          searchField, clearBtn,
          search: this.props.onSearch,
          defaultValue: this.props.defaultSearch,
          placeholder: this.props.searchPlaceholder,
          clearBtnClick: this.handleClearBtnClick
        });
      } else {
        searchPanel = (
          <div className={ classNames }>
            { searchField }
            <span className='input-group-btn'>
              { clearBtn }
            </span>
          </div>
        );
      }
      return [ searchPanel, searchField, clearBtn ];
    } else {
      return [];
    }
  }

  renderInsertRowModal() {
    const validateState = this.state.validateState || {};
    const {
      version,
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
          version={ version }
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
        onRequestClose={ this.handleModalClose }
        contentLabel='Modal'>
        { modal }
      </Modal>
    );
  }

  renderCustomBtn(cb, params, componentName, eventName, event) {
    let element = cb.apply(null, params);
    if (element.type.name === componentName && !element.props[eventName]) {
      const props = {};
      props[eventName] = event;
      element = React.cloneElement(element, props);
    }
    return element;
  }
}

ToolBar.propTypes = {
  version: PropTypes.string,
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
  defaultSearch: PropTypes.string,
  insertModalHeader: PropTypes.func,
  insertModalBody: PropTypes.func,
  insertModalFooter: PropTypes.func,
  insertModal: PropTypes.func,
  insertBtn: PropTypes.func,
  deleteBtn: PropTypes.func,
  showSelectedOnlyBtn: PropTypes.func,
  exportCSVBtn: PropTypes.func,
  clearSearchBtn: PropTypes.func,
  searchField: PropTypes.func,
  searchPanel: PropTypes.func,
  btnGroup: PropTypes.func,
  toolBar: PropTypes.func,
  searchPosition: PropTypes.string,
  reset: PropTypes.bool,
  isValidKey: PropTypes.func,
  insertFailIndicator: PropTypes.string
};

ToolBar.defaultProps = {
  reset: false,
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
