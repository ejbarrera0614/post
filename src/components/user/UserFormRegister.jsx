import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { constantsApp } from '../../config/constant';
import { useRegister } from '../../firebase/userFirebase';
import { useForm } from '../../hooks/useForm';
import { ContentLoading } from '../commons/ContentLoading';

/**
 * Formulario de resgistro que se importa en el componente .publications/PublicationCreate
 */
export const UserFormRegister = () => {
  const [value, handleInputChange, reset] = useForm({
    userName: '',
    password: '',
    passwordRepeat: '',
  });
  const { userName, password, passwordRepeat } = value;
  const { action: actionRegister, loading: loadingRegister } = useRegister();

  useEffect(() => {
    if (!loadingRegister) reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingRegister]);

  const handleSubmit = (e) => {
    e.preventDefault();
    actionRegister({userName, password});
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='form-register'>
        <p className='register-title'>Registro</p>
        <div className='section-inputs'>
          <div className='input-group'>
            <input
              type='text'
              id='user'
              name='userName'
              autoComplete='off'
              onChange={handleInputChange}
              value={userName}
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
              value={password}
            />
          </div>
          <div className='input-group'>
            <input
              type='password'
              id='passRepeat'
              name='passwordRepeat'
              autoComplete='off'
              onChange={handleInputChange}
              placeholder='Repetir contraseña'
              value={passwordRepeat}
            />
            { password !== passwordRepeat && <p className="pass-error" >Las contraseñas no coinciden</p> }
          </div>
        </div>
        <ContentLoading isLoading={loadingRegister}>
          <div className='section-buttons'>
            <button type='submit' disabled={!userName || !password || !passwordRepeat || password !== passwordRepeat}>
              Registrarse
            </button>
            <p>
              ¿Ya tienes cuenta? <Link to={constantsApp.ROUTE_HOME}>Inicia sesión</Link>
            </p>
          </div>
        </ContentLoading>
      </form>
    </>
  );
};
