import React, { useContext, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { constantsApp } from '../../config/constant';
import AppContext from '../../context/AppContext';
import { useAddPublication } from '../../firebase/publicationFirebase';
import { useForm } from '../../hooks/useForm';
import { ContentLoading } from '../commons/ContentLoading';
import { UserFormLogin } from '../user/UserFormLogin';
import { UserFormRegister } from '../user/UserFormRegister';

export const PublicationCreate = ({ getAllPublication }) => {
  const { stateUser } = useContext(AppContext);
  const [value, handleInputChange, reset] = useForm({ publication: '' });
  const { action, loading, isFirtsRender } = useAddPublication();

  //Use effect que se ejecuta acciones
  useEffect(() => {
    if (!isFirtsRender && !loading) {
      reset();
      getAllPublication();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    action({
      date: new Date(),
      desc: value.publication,
      idAuthor: stateUser.id,
      nameAuthor: stateUser.userName,
    });
  };

  return (
    <>
      <Switch>
        {stateUser[constantsApp.IS_LOGGED] ? (
          <>
            <Redirect to={constantsApp.ROUTE_HOME} />
            <form onSubmit={handleSubmit} className='publication-form'>
              <textarea
                name='publication'
                placeholder='Escriba aquí su estado'
                autoComplete='off'
                className='publication-text'
                value={value.publication}
                onChange={handleInputChange}
              ></textarea>
              <ContentLoading isLoading={false}>
                <button type='submit' disabled={!value.publication}>
                  Publicar
                </button>
              </ContentLoading>
            </form>
          </>
        ) : (
          <>
            <Route exact path={constantsApp.ROUTE_HOME} component={UserFormLogin} />
            <Route exact path={constantsApp.ROUTE_REGISTER} component={UserFormRegister} />
          </>
        )}
      </Switch>
    </>
  );
};
