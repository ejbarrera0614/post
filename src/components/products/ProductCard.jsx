import React from 'react';
import { Link } from 'react-router-dom';
import { constantsApp } from '../../config/constant';

import imgDefault from '../../images/default2.png';

export const ProductCard = ({ id, img, name, description, price }) => {
  return (
    <article key={id} className={`product-article`}>
      <Link to={`${constantsApp.ROUTE_PRODUCTS}/${id}`}>
        <img src={img || imgDefault} alt={name} />
      </Link>
      <div className={`info`}>
        <div className='title'>
          <h3>{name}</h3>{' '}
          <h3>
            <span>+</span>
          </h3>
        </div>
        <p>${price}</p>
        <p>{description}</p>
      </div>

      <div className='link'>
        <Link to={`${constantsApp.ROUTE_PRODUCTS}/${id}`}>
          Ver comentarios...
        </Link>
      </div>
    </article>
  );
};
