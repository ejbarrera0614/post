import React, { useContext } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { PostList } from '../components/post/PostList';
import { constantsApp } from '../config/constant';
import AppContext from '../context/AppContext';
import exit from '../images/exit.svg';
export const PostRouter = () => {
  const { stateUser, logout } = useContext(AppContext);

  const handleClick = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <>
      <header className='post-banner'>
        <Link to={constantsApp.ROUTE_POSTS} className='post-title'>
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

      <section className='post-section'>
        <Switch>
          <Route exact path={constantsApp.ROUTE_POSTS} component={PostList} />
        </Switch>
      </section>
    </>
  );
};
