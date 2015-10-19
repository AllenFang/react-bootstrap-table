import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

const routes = (
  <Router>
    <Route path="/" component={require('./components/App')}>
      <IndexRoute component={require('./components/Home')} />
      <Route path="basic" component={require('./components/examples/Basic')} />
      <Route path="column" component={require('./components/examples/Basic')} />
      <Route path="sort" component={require('./components/examples/Basic')} />
      <Route path="column-format" component={require('./components/examples/Basic')} />
      <Route path="selection" component={require('./components/examples/Basic')} />
      <Route path="pagination" component={require('./components/examples/Basic')} />
      <Route path="manipulation" component={require('./components/examples/Basic')} />
      <Route path="cell-edit" component={require('./components/examples/Basic')} />
      <Route path="pagination" component={require('./components/examples/Basic')} />
      <Route path="style" component={require('./components/examples/Basic')} />
      <Route path="advance" component={require('./components/examples/Basic')} />
      <Route path="complex" component={require('./components/examples/Basic')} />
    </Route>
  </Router>
);

export default routes;
