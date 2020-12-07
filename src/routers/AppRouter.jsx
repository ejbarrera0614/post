import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Login } from '../components/account/Login';
import { constantsApp } from '../config/constant';
import { ProductsRouter } from './ProductsRouter';

export const AppRouter = () => {
  return (
    <Router>
      <div className='main'>
        <Switch>
          <Route
            path={constantsApp.ROUTE_PRODUCTS}
            component={ProductsRouter}
          />
          <Route path={constantsApp.ROUTE_LOGIN} component={Login} />
          <Redirect to={constantsApp.ROUTE_PRODUCTS} />
        </Switch>
      </div>
    </Router>
  );
};
