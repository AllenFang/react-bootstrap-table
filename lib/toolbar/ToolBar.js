'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactModal = require('react-modal');

var _reactModal2 = _interopRequireDefault(_reactModal);

var _Const = require('../Const');

var _Const2 = _interopRequireDefault(_Const);

var _Notification = require('../Notification.js');

var _Notification2 = _interopRequireDefault(_Notification);

var _InsertModal = require('./InsertModal');

var _InsertModal2 = _interopRequireDefault(_InsertModal);

var _InsertButton = require('./InsertButton');

var _InsertButton2 = _interopRequireDefault(_InsertButton);

var _DeleteButton = require('./DeleteButton');

var _DeleteButton2 = _interopRequireDefault(_DeleteButton);

var _ExportCSVButton = require('./ExportCSVButton');

var _ExportCSVButton2 = _interopRequireDefault(_ExportCSVButton);

var _ShowSelectedOnlyButton = require('./ShowSelectedOnlyButton');

var _ShowSelectedOnlyButton2 = _interopRequireDefault(_ShowSelectedOnlyButton);

var _SearchField = require('./SearchField');

var _SearchField2 = _interopRequireDefault(_SearchField);

var _ClearSearchButton = require('./ClearSearchButton');

var _ClearSearchButton2 = _interopRequireDefault(_ClearSearchButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-console: 0 */

// import classSet from 'classnames';

// import editor from '../Editor';


var ToolBar = function (_Component) {
  _inherits(ToolBar, _Component);

  function ToolBar(props) {
    var _arguments = arguments;

    _classCallCheck(this, ToolBar);

    var _this = _possibleConstructorReturn(this, (ToolBar.__proto__ || Object.getPrototypeOf(ToolBar)).call(this, props));

    _this.handleSaveBtnClick = function () {
      return _this.__handleSaveBtnClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleModalClose = function () {
      return _this.__handleModalClose__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleModalOpen = function () {
      return _this.__handleModalOpen__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleShowOnlyToggle = function () {
      return _this.__handleShowOnlyToggle__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleDropRowBtnClick = function () {
      return _this.__handleDropRowBtnClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleDebounce = function (func, wait, immediate) {
      var timeout = void 0;

      return function () {
        var later = function later() {
          timeout = null;

          if (!immediate) {
            func.apply(_this, _arguments);
          }
        };

        var callNow = immediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(later, wait || 0);

        if (callNow) {
          func.appy(_this, _arguments);
        }
      };
    };

    _this.handleKeyUp = function () {
      return _this.__handleKeyUp__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleExportCSV = function () {
      return _this.__handleExportCSV__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleClearBtnClick = function () {
      return _this.__handleClearBtnClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.timeouteClear = 0;
    _this.modalClassName;
    _this.state = {
      isInsertModalOpen: false,
      validateState: null,
      shakeEditor: false,
      showSelected: false
    };
    return _this;
  }

  _createClass(ToolBar, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var delay = this.props.searchDelayTime ? this.props.searchDelayTime : 0;
      this.debounceCallback = this.handleDebounce(function () {
        var seachInput = _this2.refs.seachInput;

        seachInput && _this2.props.onSearch(seachInput.getValue());
      }, delay);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.reset) {
        this.setSearchInput('');
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearTimeout();
    }
  }, {
    key: 'setSearchInput',
    value: function setSearchInput(text) {
      var seachInput = this.refs.seachInput;

      if (seachInput && seachInput.value !== text) {
        seachInput.value = text;
      }
    }
  }, {
    key: 'clearTimeout',
    value: function (_clearTimeout) {
      function clearTimeout() {
        return _clearTimeout.apply(this, arguments);
      }

      clearTimeout.toString = function () {
        return _clearTimeout.toString();
      };

      return clearTimeout;
    }(function () {
      if (this.timeouteClear) {
        clearTimeout(this.timeouteClear);
        this.timeouteClear = 0;
      }
    })
  }, {
    key: 'validateNewRow',
    value: function validateNewRow(newRow) {
      var _this3 = this;

      var validateState = {};
      var isValid = true;
      var tempMsg = void 0;
      var responseType = void 0;

      this.props.columns.forEach(function (column) {
        if (column.editable && column.editable.validator) {
          // process validate
          tempMsg = column.editable.validator(newRow[column.field]);
          responseType = typeof tempMsg === 'undefined' ? 'undefined' : _typeof(tempMsg);
          if (responseType !== 'object' && tempMsg !== true) {
            _this3.refs.notifier.notice('error', 'Form validate errors, please checking!', 'Pressed ESC can cancel');
            isValid = false;
            validateState[column.field] = tempMsg;
          } else if (responseType === 'object' && tempMsg.isValid !== true) {
            _this3.refs.notifier.notice(tempMsg.notification.type, tempMsg.notification.msg, tempMsg.notification.title);
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
        this.setState({ validateState: validateState, shakeEditor: true });
        this.timeouteClear = setTimeout(function () {
          _this3.setState({ shakeEditor: false });
        }, 300);
        return null;
      }
    }
  }, {
    key: '__handleSaveBtnClick__REACT_HOT_LOADER__',
    value: function __handleSaveBtnClick__REACT_HOT_LOADER__(newRow) {
      var _this4 = this;

      if (!this.validateNewRow(newRow)) {
        // validation fail
        return;
      }
      var msg = this.props.onAddRow(newRow);
      if (msg) {
        this.refs.notifier.notice('error', msg, 'Pressed ESC can cancel');
        this.clearTimeout();
        // shake form and hack prevent modal hide
        this.setState({
          shakeEditor: true,
          validateState: 'this is hack for prevent bootstrap modal hide'
        });
        // clear animate class
        this.timeouteClear = setTimeout(function () {
          _this4.setState({ shakeEditor: false });
        }, 300);
      } else {
        // reset state and hide modal hide
        this.setState({
          validateState: null,
          shakeEditor: false,
          isInsertModalOpen: false
        });
      }
    }
  }, {
    key: '__handleModalClose__REACT_HOT_LOADER__',
    value: function __handleModalClose__REACT_HOT_LOADER__() {
      this.setState({ isInsertModalOpen: false });
    }
  }, {
    key: '__handleModalOpen__REACT_HOT_LOADER__',
    value: function __handleModalOpen__REACT_HOT_LOADER__() {
      this.setState({ isInsertModalOpen: true });
    }
  }, {
    key: '__handleShowOnlyToggle__REACT_HOT_LOADER__',
    value: function __handleShowOnlyToggle__REACT_HOT_LOADER__() {
      this.setState({
        showSelected: !this.state.showSelected
      });
      this.props.onShowOnlySelected();
    }
  }, {
    key: '__handleDropRowBtnClick__REACT_HOT_LOADER__',
    value: function __handleDropRowBtnClick__REACT_HOT_LOADER__() {
      this.props.onDropRow();
    }
  }, {
    key: 'handleCloseBtn',
    value: function handleCloseBtn() {
      this.refs.warning.style.display = 'none';
    }
  }, {
    key: '__handleKeyUp__REACT_HOT_LOADER__',
    value: function __handleKeyUp__REACT_HOT_LOADER__(event) {
      event.persist();
      this.debounceCallback(event);
    }
  }, {
    key: '__handleExportCSV__REACT_HOT_LOADER__',
    value: function __handleExportCSV__REACT_HOT_LOADER__() {
      this.props.onExportCSV();
    }
  }, {
    key: '__handleClearBtnClick__REACT_HOT_LOADER__',
    value: function __handleClearBtnClick__REACT_HOT_LOADER__() {
      var seachInput = this.refs.seachInput;

      seachInput && seachInput.setValue('');
      this.props.onSearch('');
    }
  }, {
    key: 'render',
    value: function render() {
      this.modalClassName = 'bs-table-modal-sm' + ToolBar.modalSeq++;
      var toolbar = null;
      var btnGroup = null;
      var insertBtn = null;
      var deleteBtn = null;
      var exportCSVBtn = null;
      var showSelectedOnlyBtn = null;

      if (this.props.enableInsert) {
        if (this.props.insertBtn) {
          insertBtn = this.renderCustomBtn(this.props.insertBtn, [this.handleModalOpen], _InsertButton2.default.name, 'onClick', this.handleModalOpen);
        } else {
          insertBtn = _react2.default.createElement(_InsertButton2.default, { btnText: this.props.insertText,
            onClick: this.handleModalOpen });
        }
      }

      if (this.props.enableDelete) {
        if (this.props.deleteBtn) {
          deleteBtn = this.renderCustomBtn(this.props.deleteBtn, [this.handleDropRowBtnClick], _DeleteButton2.default.name, 'onClick', this.handleDropRowBtnClick);
        } else {
          deleteBtn = _react2.default.createElement(_DeleteButton2.default, { btnText: this.props.deleteText,
            onClick: this.handleDropRowBtnClick });
        }
      }

      if (this.props.enableShowOnlySelected) {
        if (this.props.showSelectedOnlyBtn) {
          showSelectedOnlyBtn = this.renderCustomBtn(this.props.showSelectedOnlyBtn, [this.handleShowOnlyToggle, this.state.showSelected], _ShowSelectedOnlyButton2.default.name, 'onClick', this.handleShowOnlyToggle);
        } else {
          showSelectedOnlyBtn = _react2.default.createElement(_ShowSelectedOnlyButton2.default, { toggle: this.state.showSelected,
            onClick: this.handleShowOnlyToggle });
        }
      }

      if (this.props.enableExportCSV) {
        if (this.props.exportCSVBtn) {
          exportCSVBtn = this.renderCustomBtn(this.props.exportCSVBtn, [this.handleExportCSV], _ExportCSVButton2.default.name, 'onClick', this.handleExportCSV);
        } else {
          exportCSVBtn = _react2.default.createElement(_ExportCSVButton2.default, { btnText: this.props.exportCSVText,
            onClick: this.handleExportCSV });
        }
      }

      if (this.props.btnGroup) {
        btnGroup = this.props.btnGroup({
          exportCSVBtn: exportCSVBtn,
          insertBtn: insertBtn,
          deleteBtn: deleteBtn,
          showSelectedOnlyBtn: showSelectedOnlyBtn
        });
      } else {
        btnGroup = _react2.default.createElement(
          'div',
          { className: 'btn-group btn-group-sm', role: 'group' },
          exportCSVBtn,
          insertBtn,
          deleteBtn,
          showSelectedOnlyBtn
        );
      }

      var _renderSearchPanel = this.renderSearchPanel(),
          _renderSearchPanel2 = _slicedToArray(_renderSearchPanel, 3),
          searchPanel = _renderSearchPanel2[0],
          searchField = _renderSearchPanel2[1],
          clearBtn = _renderSearchPanel2[2];

      var modal = this.props.enableInsert ? this.renderInsertRowModal() : null;

      if (this.props.toolBar) {
        toolbar = this.props.toolBar({
          components: {
            exportCSVBtn: exportCSVBtn,
            insertBtn: insertBtn,
            deleteBtn: deleteBtn,
            showSelectedOnlyBtn: showSelectedOnlyBtn,
            searchPanel: searchPanel,
            btnGroup: btnGroup,
            searchField: searchField,
            clearBtn: clearBtn
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
        toolbar = _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6 col-sm-6 col-md-6 col-lg-8' },
            this.props.searchPosition === 'left' ? searchPanel : btnGroup
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6 col-sm-6 col-md-6 col-lg-4' },
            this.props.searchPosition === 'left' ? btnGroup : searchPanel
          )
        );
      }

      return _react2.default.createElement(
        'div',
        { className: 'row' },
        toolbar,
        _react2.default.createElement(_Notification2.default, { ref: 'notifier' }),
        modal
      );
    }
  }, {
    key: 'renderSearchPanel',
    value: function renderSearchPanel() {
      if (this.props.enableSearch) {
        var classNames = 'form-group form-group-sm react-bs-table-search-form';
        var clearBtn = null;
        var searchField = null;
        var searchPanel = null;
        if (this.props.clearSearch) {
          if (this.props.clearSearchBtn) {
            clearBtn = this.renderCustomBtn(this.props.clearSearchBtn, [this.handleClearBtnClick], _ClearSearchButton2.default.name, 'onClick', this.handleClearBtnClick); /* eslint max-len: 0*/
          } else {
            clearBtn = _react2.default.createElement(_ClearSearchButton2.default, { onClick: this.handleClearBtnClick });
          }
          classNames += ' input-group input-group-sm';
        }

        if (this.props.searchField) {
          searchField = this.props.searchField({
            search: this.handleKeyUp,
            defaultValue: this.props.defaultSearch,
            placeholder: this.props.searchPlaceholder
          });
          if (searchField.type.name === _SearchField2.default.name) {
            searchField = _react2.default.cloneElement(searchField, {
              ref: 'seachInput',
              onKeyUp: this.handleKeyUp
            });
          } else {
            searchField = _react2.default.cloneElement(searchField, {
              ref: 'seachInput'
            });
          }
        } else {
          searchField = _react2.default.createElement(_SearchField2.default, { ref: 'seachInput',
            defaultValue: this.props.defaultSearch,
            placeholder: this.props.searchPlaceholder,
            onKeyUp: this.handleKeyUp });
        }
        if (this.props.searchPanel) {
          searchPanel = this.props.searchPanel({
            searchField: searchField, clearBtn: clearBtn,
            search: this.props.onSearch,
            defaultValue: this.props.defaultSearch,
            placeholder: this.props.searchPlaceholder,
            clearBtnClick: this.handleClearBtnClick
          });
        } else {
          searchPanel = _react2.default.createElement(
            'div',
            { className: classNames },
            searchField,
            _react2.default.createElement(
              'span',
              { className: 'input-group-btn' },
              clearBtn
            )
          );
        }
        return [searchPanel, searchField, clearBtn];
      } else {
        return [];
      }
    }
  }, {
    key: 'renderInsertRowModal',
    value: function renderInsertRowModal() {
      var validateState = this.state.validateState || {};
      var _props = this.props,
          columns = _props.columns,
          ignoreEditable = _props.ignoreEditable,
          insertModalHeader = _props.insertModalHeader,
          insertModalBody = _props.insertModalBody,
          insertModalFooter = _props.insertModalFooter,
          insertModal = _props.insertModal;


      var modal = void 0;
      modal = insertModal && insertModal(this.handleModalClose, this.handleSaveBtnClick, columns, validateState, ignoreEditable);

      if (!modal) {
        modal = _react2.default.createElement(_InsertModal2.default, {
          columns: columns,
          validateState: validateState,
          ignoreEditable: ignoreEditable,
          onModalClose: this.handleModalClose,
          onSave: this.handleSaveBtnClick,
          headerComponent: insertModalHeader,
          bodyComponent: insertModalBody,
          footerComponent: insertModalFooter });
      }

      return _react2.default.createElement(
        _reactModal2.default,
        { className: 'react-bs-insert-modal modal-dialog',
          isOpen: this.state.isInsertModalOpen,
          onRequestClose: this.handleModalClose,
          contentLabel: 'Modal' },
        modal
      );
    }
  }, {
    key: 'renderCustomBtn',
    value: function renderCustomBtn(cb, params, componentName, eventName, event) {
      var element = cb.apply(null, params);
      if (element.type.name === componentName && !element.props[eventName]) {
        var props = {};
        props[eventName] = event;
        element = _react2.default.cloneElement(element, props);
      }
      return element;
    }
  }]);

  return ToolBar;
}(_react.Component);

ToolBar.modalSeq = 0;


ToolBar.propTypes = {
  onAddRow: _react.PropTypes.func,
  onDropRow: _react.PropTypes.func,
  onShowOnlySelected: _react.PropTypes.func,
  enableInsert: _react.PropTypes.bool,
  enableDelete: _react.PropTypes.bool,
  enableSearch: _react.PropTypes.bool,
  enableShowOnlySelected: _react.PropTypes.bool,
  columns: _react.PropTypes.array,
  searchPlaceholder: _react.PropTypes.string,
  exportCSVText: _react.PropTypes.string,
  insertText: _react.PropTypes.string,
  deleteText: _react.PropTypes.string,
  saveText: _react.PropTypes.string,
  closeText: _react.PropTypes.string,
  clearSearch: _react.PropTypes.bool,
  ignoreEditable: _react.PropTypes.bool,
  defaultSearch: _react.PropTypes.string,
  insertModalHeader: _react.PropTypes.func,
  insertModalBody: _react.PropTypes.func,
  insertModalFooter: _react.PropTypes.func,
  insertModal: _react.PropTypes.func,
  insertBtn: _react.PropTypes.func,
  deleteBtn: _react.PropTypes.func,
  showSelectedOnlyBtn: _react.PropTypes.func,
  exportCSVBtn: _react.PropTypes.func,
  clearSearchBtn: _react.PropTypes.func,
  searchField: _react.PropTypes.func,
  searchPanel: _react.PropTypes.func,
  btnGroup: _react.PropTypes.func,
  toolBar: _react.PropTypes.func,
  searchPosition: _react.PropTypes.string,
  reset: _react.PropTypes.bool
};

ToolBar.defaultProps = {
  reset: false,
  enableInsert: false,
  enableDelete: false,
  enableSearch: false,
  enableShowOnlySelected: false,
  clearSearch: false,
  ignoreEditable: false,
  exportCSVText: _Const2.default.EXPORT_CSV_TEXT,
  insertText: _Const2.default.INSERT_BTN_TEXT,
  deleteText: _Const2.default.DELETE_BTN_TEXT,
  saveText: _Const2.default.SAVE_BTN_TEXT,
  closeText: _Const2.default.CLOSE_BTN_TEXT
};

var _default = ToolBar;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ToolBar, 'ToolBar', '/Users/Benjamin/Development/github/react-bootstrap-table/src/toolbar/ToolBar.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Benjamin/Development/github/react-bootstrap-table/src/toolbar/ToolBar.js');
}();

;