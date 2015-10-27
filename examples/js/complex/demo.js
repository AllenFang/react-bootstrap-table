require('./demo.css');
import React from 'react';
import App from './app';

class Demo extends React.Component {
  render() {
    return (
      <div className="col-md-offset-1 col-md-8">
        <div className="panel panel-default">
          <div className="panel-heading">A Complex Example</div>
          <h5>Source in /examples/js/complex/app.js</h5>
          <div className="panel-body">
            <App />
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
