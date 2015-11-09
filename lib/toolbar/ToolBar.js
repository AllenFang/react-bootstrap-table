'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Const = require('../Const');

var _Const2 = _interopRequireDefault(_Const);

var _Editor = require('../Editor');

var _Editor2 = _interopRequireDefault(_Editor);

var _NotificationJs = require('../Notification.js');

var _NotificationJs2 = _interopRequireDefault(_NotificationJs);

var ToolBar = (function (_React$Component) {
  _inherits(ToolBar, _React$Component);

  function ToolBar(props) {
    _classCallCheck(this, ToolBar);

    _get(Object.getPrototypeOf(ToolBar.prototype), 'constructor', this).call(this, props);
    this.timeouteClear = 0;
    this.state = {
      isInsertRowTrigger: true,
      validateState: null,
      shakeEditor: false
    };
  }

  _createClass(ToolBar, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearTimeout();
    }
  }, {
    key: 'clearTimeout',
    value: (function (_clearTimeout) {
      function clearTimeout() {
        return _clearTimeout.apply(this, arguments);
      }

      clearTimeout.toString = function () {
        return _clearTimeout.toString();
      };

      return clearTimeout;
    })(function () {
      if (this.timeouteClear) {
        clearTimeout(this.timeouteClear);
        this.timeouteClear = 0;
      }
    })
  }, {
    key: 'checkAndParseForm',
    value: function checkAndParseForm() {
      var ts = this,
          newObj = {},
          isValid = true,
          tempValue,
          tempMsg,
          validateState = {};
      this.props.columns.forEach(function (column, i) {
        if (column.autoValue) {
          //when you want same auto generate value and not allow edit, example ID field
          tempValue = typeof column.autoValue == 'function' ? column.autoValue() : 'autovalue-' + new Date().getTime();
        } else {
          var dom = this.refs[column.field + i];
          tempValue = dom.value;

          if (column.editable && column.editable.type == 'checkbox') {
            var values = dom.value.split(':');
            tempValue = dom.checked ? values[0] : values[1];
          }

          if (column.editable && column.editable.validator) {
            //process validate
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
        ts.clearTimeout();
        //show error in form and shake it
        this.setState({ validateState: validateState, shakeEditor: true });
        //notifier error
        ts.refs.notifier.notice('error', "Form validate errors, please checking!", "Pressed ESC can cancel");
        //clear animate class
        ts.timeouteClear = setTimeout(function () {
          ts.setState({ shakeEditor: false });
        }, 300);
        return null;
      }
    }
  }, {
    key: 'handleSaveBtnClick',
    value: function handleSaveBtnClick(e) {
      var newObj = this.checkAndParseForm();
      if (!newObj) {
        //validate errors
        return;
      }
      var msg = this.props.onAddRow(newObj);
      if (msg) {
        var ts = this;
        ts.refs.notifier.notice('error', msg, "Pressed ESC can cancel");
        ts.clearTimeout();
        //shake form and hack prevent modal hide
        ts.setState({ shakeEditor: true, validateState: "this is hack for prevent bootstrap modal hide" });
        //clear animate class
        ts.timeouteClear = setTimeout(function () {
          ts.setState({ shakeEditor: false });
        }, 300);
      } else {
        //reset state and hide modal hide
        this.setState({
          validateState: null,
          shakeEditor: false
        });
        //reset form
        this.refs.form.reset();
      }
    }
  }, {
    key: 'handleDropRowBtnClick',
    value: function handleDropRowBtnClick(e) {
      this.props.onDropRow();
    }
  }, {
    key: 'handleCloseBtn',
    value: function handleCloseBtn(e) {
      this.refs.warning.style.display = "none";
    }
  }, {
    key: 'handleKeyUp',
    value: function handleKeyUp(e) {
      var searchText = e.currentTarget.value;

      if (this.props.onMultiColumnSearch) {
        var includeAnd = searchText.indexOf(' and ') !== -1;
        var includeOr = searchText.indexOf(' or ') !== -1;
        if (includeAnd && includeOr) {
          this.setState({ searchInputError: true });
        } else {
          this.props.onSearch(searchText);
          this.setState({ searchInputError: false });
        }
      } else {
        this.props.onSearch(searchText);
        this.setState({ searchInputError: false });
      }
    }
  }, {
    key: 'handleExportCSV',
    value: function handleExportCSV() {
      this.props.onExportCSV();
    }
  }, {
    key: 'render',
    value: function render() {
      var modalClassName = "bs-table-modal-sm" + new Date().getTime();
      var insertBtn = this.props.enableInsert ? _react2['default'].createElement(
        'button',
        { type: 'button', onClick: this.props.onAddRowBegin, className: 'btn btn-info', 'data-toggle': 'modal', 'data-target': '.' + modalClassName },
        _react2['default'].createElement('i', { className: 'glyphicon glyphicon-plus' }),
        ' New'
      ) : null;

      var deleteBtn = this.props.enableDelete ? _react2['default'].createElement(
        'button',
        { type: 'button', className: 'btn btn-warning', 'data-toggle': 'tooltip', 'data-placement': 'right', title: 'Drop selected row',
          onClick: this.handleDropRowBtnClick.bind(this) },
        _react2['default'].createElement('i', { className: 'glyphicon glyphicon-trash' }),
        ' Delete'
      ) : null;
      var searchTextInput = this.props.enableSearch ? _react2['default'].createElement('input', { type: 'text', placeholder: this.props.searchPlaceholder ? this.props.searchPlaceholder : 'Search', onKeyUp: this.handleKeyUp.bind(this) }) : null;
      var modal = this.props.enableInsert ? this.renderInsertRowModal(modalClassName) : null;
      var warningStyle = {
        display: "none",
        marginBottom: 0
      };

      var exportCSV = this.props.enableExportCSV ? _react2['default'].createElement(
        'button',
        { type: 'button', className: 'btn btn-success', onClick: this.handleExportCSV.bind(this) },
        _react2['default'].createElement('i', { className: 'glyphicon glyphicon-export' }),
        ' Export to CSV'
      ) : null;

      var inputErrorMessage = null;
      if (this.state.searchInputError) {
        inputErrorMessage = _react2['default'].createElement(
          'p',
          { style: { color: "red", fontSize: "12px" } },
          'cannot have both \'and\' and \'or\''
        );
      }

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          { className: 'btn-group btn-group-xs', role: 'group', 'aria-label': '...' },
          exportCSV,
          insertBtn,
          deleteBtn
        ),
        searchTextInput,
        inputErrorMessage,
        _react2['default'].createElement(_NotificationJs2['default'], { ref: 'notifier' }),
        modal
      );
    }
  }, {
    key: 'renderInsertRowModal',
    value: function renderInsertRowModal(modalClassName) {
      var validateState = this.state.validateState || {};
      var inputField = this.props.columns.map(function (column, i) {
        var editable = column.editable,
            format = column.format,
            attr = { ref: column.field + i, placeholder: editable.placeholder ? editable.placeholder : column.name };

        if (column.autoValue) {
          //when you want same auto generate value and not allow edit, example ID field
          return null;
        }
        var error = validateState[column.field] ? _react2['default'].createElement(
          'span',
          { className: 'help-block bg-danger' },
          validateState[column.field]
        ) : null;

        // let editor = Editor(editable,attr,format);
        // if(editor.props.type && editor.props.type == 'checkbox'){
        return _react2['default'].createElement(
          'div',
          { className: 'form-group', key: column.field },
          _react2['default'].createElement(
            'label',
            null,
            column.name
          ),
          (0, _Editor2['default'])(editable, attr, format, ''),
          error
        );
      });
      var modalClass = (0, _classnames2['default'])("modal", "fade", modalClassName, {
        'in': this.state.shakeEditor || this.state.validateState //hack prevent bootstrap modal hide by reRender
      });
      var dialogClass = (0, _classnames2['default'])("modal-dialog", "modal-sm", {
        "animated": this.state.shakeEditor,
        "shake": this.state.shakeEditor
      });
      return _react2['default'].createElement(
        'div',
        { ref: 'modal', className: modalClass, tabIndex: '-1', role: 'dialog' },
        _react2['default'].createElement(
          'div',
          { className: dialogClass },
          _react2['default'].createElement(
            'div',
            { className: 'modal-content' },
            _react2['default'].createElement(
              'div',
              { className: 'modal-header' },
              _react2['default'].createElement(
                'button',
                { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' },
                _react2['default'].createElement(
                  'span',
                  { 'aria-hidden': 'true' },
                  '×'
                )
              ),
              _react2['default'].createElement(
                'h4',
                { className: 'modal-title' },
                'New Record'
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'modal-body' },
              _react2['default'].createElement(
                'form',
                { ref: 'form' },
                inputField
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'modal-footer' },
              _react2['default'].createElement(
                'button',
                { type: 'button', className: 'btn btn-default', 'data-dismiss': 'modal' },
                'Close'
              ),
              _react2['default'].createElement(
                'button',
                { type: 'button', className: 'btn btn-info', onClick: this.handleSaveBtnClick.bind(this) },
                'Save'
              )
            )
          )
        )
      );
    }
  }]);

  return ToolBar;
})(_react2['default'].Component);

ToolBar.propTypes = {
  onAddRow: _react2['default'].PropTypes.func,
  onDropRow: _react2['default'].PropTypes.func,
  enableInsert: _react2['default'].PropTypes.bool,
  enableDelete: _react2['default'].PropTypes.bool,
  enableSearch: _react2['default'].PropTypes.bool,
  columns: _react2['default'].PropTypes.array,
  searchPlaceholder: _react2['default'].PropTypes.string
};

ToolBar.defaultProps = {
  enableInsert: false,
  enableDelete: false,
  enableSearch: false
};
exports['default'] = ToolBar;
module.exports = exports['default'];