import React, { useContext } from 'react';

//components
import { ContentTitle } from '../commons/ContentTitle';

//hooks
import { useAddProduct } from '../../firebase/productFirebase';

//resources
import imgDefault from '../../images/default2.png';
import { useForm } from '../../hooks/useForm';

export const ProductCreate = () => {

  const { loading, action, error } = useAddProduct();
  const [formValues, handleInputChange] = useForm({
    name: '',
    description: '',
    price: 0,
  });

  const { name, description, price } = formValues;
  const handleSubmit = (e) => {
    e.preventDefault();
    action({
      description,
      name,
      price,
    });
  };

  return (
    <>
      <ContentTitle title='Crear Producto' hideButtonCreate={false} />
      <form className='create-section' onSubmit={handleSubmit}>
        <div>
          <img className='img-fluid' src={imgDefault} alt='default' />
        </div>
        <div className='ml-17 mb-1 form-group'>
          <div className='input-group'>
            <label htmlFor='name'>Nombre</label>
            <input
              autoComplete='off'
              name='name'
              type='text'
              placeholder='ingrese el nombre'
              value={name}
              onChange={handleInputChange}
            />
          </div>
          <div className='input-group'>
            <label htmlFor='description'>Descripción</label>
            <input
              autoComplete='off'
              name='description'
              type='text'
              placeholder='ingrese la descripción'
              value={description}
              onChange={handleInputChange}
            />
          </div>
          <div className='input-group'>
            <label htmlFor='price'>Precio</label>
            <input
              autoComplete='off'
              name='price'
              type='number'
              pattern='\d*'
              placeholder='ingrese el precio'
              value={price}
              onChange={handleInputChange}
            />
          </div>
          <button type='submit'>Añadir</button>
        </div>
      </form>
    </>
  );
};
