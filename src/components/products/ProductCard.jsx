import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { constantsApp } from '../../config/constant';

import imgDefault from '../../images/default2.png';

export const ProductCard = ({ id, img, name, description }) => {
  const [open, setOpen] = useState(false);
  return (
    <article key={id} className={`product-article`}>
      <Link to={`${constantsApp.ROUTE_PRODUCTS}/${id}`}>
        <img src={img || imgDefault} alt={name} />
      </Link>
      <div className={`info open ${open && 'open'}`}>
        <div className='title'>
          <h3>{name}</h3>{' '}
          <h3>
            <span onClick={() => setOpen(!open)}>+</span>
          </h3>
        </div>
        <p>$0.00</p>
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
