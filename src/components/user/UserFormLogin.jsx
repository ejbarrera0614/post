import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { constantsApp } from '../../config/constant';
import { useLogin } from '../../firebase/userFirebase';
import { useForm } from '../../hooks/useForm';
import { ContentLoading } from '../commons/ContentLoading';

/**
 * Formulario de login que se importa en el componente .publications/PublicationCreate
 */
export const UserFormLogin = () => {
  const [value, handleInputChange, reset] = useForm({
    userName: '',
    password: '',
  });

  const { action: actionLogin, loading } = useLogin();

  useEffect(() => {
    if (loading ) reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    actionLogin(value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='form-login'>
        <p className='login-title'>Inicia sesión</p>
        <div className='section-inputs'>
          <div className='input-group'>
            <input
              type='text'
              id='user'
              name='userName'
              autoComplete='off'
              onChange={handleInputChange}
              value={value.userName}
              placeholder='Usuario'
            />
          </div>
          <div className='input-group'>
            <input
              type='password'
              id='pass'
              name='password'
              autoComplete='off'
              onChange={handleInputChange}
              placeholder='Contraseña'
              value={value.password}
            />
          </div>
        </div>
        <ContentLoading isLoading={loading }>
          <div className='section-buttons'>
            <button type='submit' disabled={!value.userName || !value.password}>
              Iniciar sesión
            </button>
            <p>
              ¿Eres nuevo? <Link to={constantsApp.ROUTE_REGISTER}>Regístrese</Link>
            </p>
          </div>
        </ContentLoading>
      </form>
    </>
  );
};
