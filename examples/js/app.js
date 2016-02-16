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
      <IndexRoute component={Home} />
      <Route path="getting-started" component={GettingStarted}/>
      <Route path="examples">
        <Route path="basic" component={require('./basic/demo')} />
        <Route path="column" component={require('./column/demo')} />
        <Route path="sort" component={require('./sort/demo')} />
        <Route path="column-format" component={require('./column-format/demo')} />
        <Route path="column-filter" component={require('./column-filter/demo')} />
        <Route path="selection" component={require('./selection/demo')} />
        <Route path="pagination" component={require('./pagination/demo')} />
        <Route path="manipulation" component={require('./manipulation/demo')} />
        <Route path="cell-edit" component={require('./cell-edit/demo')} />
        <Route path="style" component={require('./style/demo')} />
        <Route path="advance" component={require('./advance/demo')} />
        <Route path="complex" component={require('./complex/demo')} />
        <Route path="tableDataSet" component={require('./tableDataSet/demo')} />
      </Route>
      <Route path="*" component={PageNotFound}/>
    </Route>
  </Router>
);

ReactDOM.render(routes, document.querySelector('#root'));
