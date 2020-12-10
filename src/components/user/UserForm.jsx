import React from 'react';
import { useLogin, useRegister } from '../../firebase/userFirebase';
import { useForm } from '../../hooks/useForm';
import { ContentLoading } from '../commons/ContentLoading';

export const UserForm = () => {
  const [value, handleInputChange, reset] = useForm({
    userName: '',
    password: '',
  });

  const {
    action: actionLogin,
    loading
  } = useLogin();
  const { action: actionRegister, loading: loadingRegister, isFirtsRender } = useRegister();

  const handleSubmit = (e) => {
    e.preventDefault();
    actionLogin(value);
    reset();
  };

  const handleClickRegister = (e) => {
    e.preventDefault();
    actionRegister({...value, isAdmin:false, dateCreated: new Date()});
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='form-login'>
        <div className='section-inputs'>
          <div className='input-group'>
            <label htmlFor='user'>Usuario:</label>
            <input
              type='text'
              id='user'
              name='userName'
              autoComplete='off'
              onChange={handleInputChange}
              value={value.userName}
              placeholder='Ingresa el usuario'
            />
          </div>
          <div className='input-group'>
            <label htmlFor='pass'>Password:</label>
            <input
              type='password'
              id='pass'
              name='password'
              autoComplete='off'
              onChange={handleInputChange}
              placeholder='Ingresa la contraseña'
              value={value.password}
            />
          </div>
        </div>
        <ContentLoading isLoading={!loading}>
          <div className='section-buttons'>
            <button type='submit' disabled={!value.userName || !value.password}>
              Iniciar sesión
            </button>
            <p>o</p>
            <button type='button' onClick={handleClickRegister} disabled={!value.userName || !value.password}>
              Registrarse
            </button>
          </div>
        </ContentLoading>
      </form>
    </>
  );
};
