'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notice = undefined;

var _reactSAlert = require('react-s-alert');

var _reactSAlert2 = _interopRequireDefault(_reactSAlert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var notice = function notice(type, msg, title) {
  var titleHTML = title ? '<h4><strong>' + title + '</strong></h4>' : '';

  var bodyHTML = '\n    ' + titleHTML + '\n    <div>\n      <span class=\'fa fa-exclamation-triangle glyphicon glyphicon-alert\'></span>&nbsp;\n      <span>' + msg + '</span>\n    </div>\n  ';

  _reactSAlert2.default.error(bodyHTML, {
    position: 'top-right',
    timeout: 3000,
    html: true,
    effect: 'scale'
  });
};

exports.notice = notice;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(notice, 'notice', '/home/nogi/nogi/forks/react-bootstrap-table/src/Notification.js');
}();

;