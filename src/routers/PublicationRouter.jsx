import React, { useContext } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { PublicationListContent } from '../components/publications/PublicationListContent';
import { constantsApp } from '../config/constant';
import AppContext from '../context/AppContext';
import exit from '../images/exit.svg';
export const PublicationRouter = () => {
  const { stateUser, logout } = useContext(AppContext);

  const handleClick = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <>
      <header className='publication-banner'>
        <Link to={constantsApp.ROUTE_HOME} className='publication-title'>
          Publicaciones
        </Link>
        {stateUser.isLoggedIn && (
          <div className='user-logged'>
            <p style={{ marginLeft: 'auto' }}>
              Bienvenido, {stateUser.userName}{' '}
            </p>
            <img src={exit} alt='exit' onClick={handleClick} />
          </div>
        )}
      </header>

      <section className='publication-section'>
        <Switch>
          <Route exact path={[constantsApp.ROUTE_HOME, constantsApp.ROUTE_REGISTER]} component={PublicationListContent} />
        </Switch>
      </section>
    </>
  );
};
