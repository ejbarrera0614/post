import React from 'react';
import { constantsApp } from '../../config/constant';
import { useFetch } from '../../hooks/useFetch';

import { ProductCard } from './ProductCard';

export const ProductsList = ({ history }) => {
  console.log('render Products List');

  const { data, loading, error } = useFetch(constantsApp.ENDPOINT_PRODUCT_LIST);
  if (error) history.push(constantsApp.ROUTE_ERROR);

  return (
    <>
      <h1>Lista de prooductos</h1>
      <hr className='my-2' />
      <div className='content'>
        {!loading ? (
          <>
            {data.map((item) => {
              return (
                  <ProductCard key={item.id} {...item}/>
              );
            })}
          </>
        ) : (
          <>
            {loading} - {JSON.stringify(data)}
          </>
        )}
      </div>
    </>
  );
};
