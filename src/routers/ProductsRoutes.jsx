import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { constantsApp } from '../config/constant';

export const ProductsRoutes = () => {
	return (
		<>
			<header style={{height: '10vh'}}><h1>Banner</h1></header>
			<section style={{backgroundColor: 'lightgrey'}}> 
                <h3>Section</h3>
                <hr/>
                <Switch>
                    <Route exact path={constantsApp.ROUTE_PRODUCTS}   /> 
                </Switch>
             </section>
		</>
	);
};
