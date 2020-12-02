import React, { memo } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import List from '../components/List';
import Menu from '../components/Menu';
import NotFound from '../components/NotFound';

function Router() {
  return (
    <Switch>
      <Route exact path='/' component={List}/>
      <Route exact path='/restaurants' component={List}/>
      <Route exact path='/restaurants/:id' component={Menu}/>
      <Route exact path='/cafes' component={List}/>
      <Route exact path='/cafes/:id' component={Menu}/>
      <Route exact path='/notfound' component={NotFound}/>
      <Redirect to='/notfound'/>
    </Switch>
  )
}

export default memo(Router)
