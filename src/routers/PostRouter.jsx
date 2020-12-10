import React, { useContext } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { PostList } from '../components/post/PostList';
import { constantsApp } from '../config/constant';
import AppContext from '../context/AppContext';

export const PostRouter = () => {
  const { stateUser } = useContext(AppContext);

  return (
    <>
      <header className='post-banner'>
        <Link to={constantsApp.ROUTE_POSTS} className='post-title'>
          Publicaciones
        </Link>
        {Object.entries(stateUser).length && <p style={{marginLeft: 'auto'}}>Bienvenido, {stateUser.userName} </p>}
      </header>

      <section className='post-section'>
        <Switch>
          <Route
            exact
            path={constantsApp.ROUTE_POSTS}
            component={PostList}
          />
        </Switch>
      </section>
    </>
  );
};
