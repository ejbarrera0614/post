import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { constantsApp } from '../config/constant';
import { PublicationRouter } from './PublicationRouter';

export const AppRouter = () => {
  return (
    <Router>
      <div className='main'>
        <Switch>
          <Route path={constantsApp.ROUTE_ROUTE_HOME} component={PublicationRouter} />
        </Switch>
      </div>
    </Router>
  );
};
