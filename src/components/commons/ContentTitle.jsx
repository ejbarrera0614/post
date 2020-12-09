import React from 'react';
import { Link } from 'react-router-dom';
import { constantsApp } from '../../config/constant';

export const ContentTitle = ({ title, hideButtonCreate = false }) => {
  return (
    <>
      <div className='title-section'>
        <h1>{title || 'Lista de publicaciones'}</h1>
        {!hideButtonCreate && (
          <Link to={constantsApp.ROUTE_POSTS}>
            <span>+</span> Crear Producto
          </Link>
        )}
      </div>
      <hr className='my-2' />
    </>
  );
};
