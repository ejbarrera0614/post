import React from 'react';
import { Link } from 'react-router-dom';
import { constantsApp } from '../../config/constant';

export const ContentTitle = ({ title, hideButtonCreate = false }) => {
  return (
    <>
      <div className='title-section'>
        <h1>{title || 'Lista de productos'}</h1>
        {!hideButtonCreate && (
          <Link to={constantsApp.ROUTE_PRODUCT_CREATE}>
            <span>+</span> Crear Producto
          </Link>
        )}
      </div>
      <hr className='my-2' />
    </>
  );
};
