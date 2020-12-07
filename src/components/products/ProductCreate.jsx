import React from 'react';
import { useUpdateProduct } from '../../firebase/productFirebase';

export const ProductCreate = () => {
  const {
    loading,
    action,
    error
  } = useUpdateProduct();
  console.log(loading, action, error);
  
  const update = () => {
    action();
    if (error) {
      console.log('Ocurrio un erro al hacer update');
    }
  };
  return (
    <>
      <h1>crear producto</h1>
    </>
  );
};
