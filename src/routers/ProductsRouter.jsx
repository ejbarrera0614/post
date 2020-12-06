import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { ProductsList } from '../components/products/ProductsList';
import { constantsApp } from '../config/constant';

export const ProductsRouter = () => {
  return (
    <>
      <header className='product-banner'>
        <Link to={constantsApp.ROUTE_PRODUCTS} className='product-title'>
          Valhalla Food
        </Link>
      </header>
      <hr />

      <section className='product-section'>
        <Switch>
          <Route
            exact
            path={constantsApp.ROUTE_PRODUCTS}
            component={ProductsList}
          />
        </Switch>
      </section>
    </>
  );
};
