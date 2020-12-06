import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import { Login } from '../components/account/Login';
import { ProductsList } from '../components/products/ProductsList';
import { constantsApp } from '../config/constant';

export const AppRouter = () => {
	console.log('render AppRouter');
	return (
		<Router>
			<div>
				<Switch>
					<Route path={constantsApp.ROUTE_PRODUCTS} component={ProductsList} />
					<Route path={constantsApp.ROUTE_LOGIN} component={Login} />
					<Redirect to={constantsApp.ROUTE_PRODUCTS} />
				</Switch>
			</div>
		</Router>
	);
};
