import React from 'react';

//Components
import { ContentLoading } from '../commons/ContentLoading';

//config
import { constantsApp } from '../../config/constant';

//hooks
import { useGetAllPost } from '../../firebase/postFirebase';
import { PostItem } from './PostItem';
import { PostItemCreate } from './PostItemCreate';

export const PostList = () => {
  const { action, data, loading } = useGetAllPost();

  return (
    <>
      <PostItemCreate getAllPost={action} />
      <div className='content-list'>
        <ContentLoading isLoading={loading}>
          {data?.length ? (
            data.map((item, index) => {
              return <PostItem key={item.id} {...item} index={index}/>;
            })
          ) : (
            <p>No hay publicaciones</p>
          )}
        </ContentLoading>
      </div>
    </>
  );
};
