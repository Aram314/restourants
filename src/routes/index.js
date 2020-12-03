import React, { memo, lazy } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import SuspenseRoute from './SuspenseRoute';

import NotFound from '../pages/NotFound';

const List = lazy(() => import('../pages/List'))
const Menu = lazy(() => import('../pages/Menu'));

function Router() {
  return (
    <Switch>
      <SuspenseRoute exact path='/' component={List}/>
      <SuspenseRoute exact path='/restaurants' component={List}/>
      <SuspenseRoute exact path='/restaurants/:id' component={Menu} />
      <SuspenseRoute exact path='/cafes' component={List}/>
      <SuspenseRoute exact path='/cafes/:id' component={Menu}/>
      <Route exact path='/notfound' component={NotFound}/>
      <Redirect to='/notfound'/>
    </Switch>
  )
}

export default memo(Router)
