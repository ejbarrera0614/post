import React from 'react';
import { Link } from 'react-router-dom';
import { constantsApp } from '../../config/constant';
import { useFetch } from '../../hooks/useFetch';

import imgDefault from '../../images/default2.png';

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
            {data.map(({ description, id, name, img }) => {
              return (
                <article key={id} className='product-article'>
                  <img src={img || imgDefault} alt={name} />
                  <div className='info'>
                    <div className='title'>
                      <h3>{name}</h3> <h3><span>+</span></h3>
                    </div>
                    <p>$0.00</p>
                    <p>{description}</p>
                    <div className="link">
                      <Link to={`${constantsApp.ROUTE_PRODUCTS}/${id}`}>
                        Ver comentarios...
                      </Link>
                    </div>
                  </div>
                </article>
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
