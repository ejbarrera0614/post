import React from 'react';

export const ContentTitle = ({title}) => {
  return (
    <>
      <h1>{title || 'Lista de productos'}</h1>
      <hr className='my-2' />
    </>
  );
};
