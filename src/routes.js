import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Template from './app-template';
import Home from './home';
import About from './about';

const routes = (
  <Route path='/' component={Template}>
    <IndexRoute component={Home} />
    <Route path='/about' component={About} />
  </Route>
);

export default routes;
