import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Login } from '../components/account/Login';
import { constantsApp } from '../config/constant';
import { PostRouter } from './PostRouter';

export const AppRouter = () => {
  return (
    <Router>
      <div className='main'>
        <Switch>
          <Route path={constantsApp.ROUTE_POSTS} component={PostRouter} />
          <Route path={constantsApp.ROUTE_LOGIN} component={Login} />
          <Redirect to={constantsApp.ROUTE_POSTS} />
        </Switch>
      </div>
    </Router>
  );
};
