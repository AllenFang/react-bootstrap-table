import React, { Component } from 'react';

import { ToastContainer, ToastMessage } from 'react-toastr';


const ToastrMessageFactory = React.createFactory(ToastMessage.animation);

class Notification extends Component {
  // allow type is success,info,warning,error
  notice(type, msg, title) {
    this.refs.toastr[type](
      msg, title, {
        mode: 'single',
        timeOut: 5000,
        extendedTimeOut: 1000,
        showAnimation: 'animated  bounceIn',
        hideAnimation: 'animated bounceOut'
      });
  }

  render() {
    return (
      <ToastContainer ref='toastr'
        toastMessageFactory={ ToastrMessageFactory }
        id='toast-container'
        className='toast-top-right'/>
    );
  }
}

export default Notification;
