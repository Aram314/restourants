import React, { memo, lazy } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import SuspenseRoute from './SuspenseRoute';

import NotFound from '../components/NotFound';

const List = lazy(() => import('../components/List'))
const Menu = lazy(() => import('../components/Menu'));

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
