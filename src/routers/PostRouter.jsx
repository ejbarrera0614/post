import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { PostList } from '../components/post/PostList';
import { constantsApp } from '../config/constant';

export const PostRouter = () => {
  return (
    <>
      <header className='post-banner'>
        <Link to={constantsApp.ROUTE_POSTS} className='post-title'>
          Publicaciones
        </Link>
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
