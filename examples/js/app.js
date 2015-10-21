import React from 'react';
import ReactDOM from 'react-dom';

import { IndexRoute, Router, Route } from 'react-router';
import createHistory from 'history/lib/createHashHistory';

const history = createHistory( { queryKey: false } );

import App from './components/App';
import Home from './components/Home';
import GettingStarted from './components/GettingStarted';
import PageNotFound from './components/PageNotFound';

const routes = (
  <Router history={ history }>
    <Route path="/" component={App}>
      <IndexRoute component={GettingStarted} />
      <Route path="getting-started" component={GettingStarted}/>
      <Route path="examples">
        <Route path="basic" component={require('./basic/demo')} />
        <Route path="column" component={require('./advance/demo')} />
        <Route path="sort" component={require('./basic/demo')} />
        <Route path="column-format" component={require('./basic/demo')} />
        <Route path="selection" component={require('./basic/demo')} />
        <Route path="pagination" component={require('./basic/demo')} />
        <Route path="manipulation" component={require('./basic/demo')} />
        <Route path="cell-edit" component={require('./basic/demo')} />
        <Route path="pagination" component={require('./basic/demo')} />
        <Route path="style" component={require('./style/demo')} />
        <Route path="advance" component={require('./advance/demo')} />
        <Route path="complex" component={require('./basic/demo')} />
        <Route path="tableDataSet" component={require('./basic/demo')} />
      </Route>
      <Route path="*" component={PageNotFound}/>
    </Route>
  </Router>
);

ReactDOM.render(routes, document.querySelector('#root'));
