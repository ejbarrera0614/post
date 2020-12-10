import React, { useContext, useEffect } from 'react';
import { constantsApp } from '../../config/constant';
import AppContext from '../../context/AppContext';
import { useAddPost } from '../../firebase/postFirebase';
import { useForm } from '../../hooks/useForm';
import { ContentLoading } from '../commons/ContentLoading';
import { UserForm } from '../user/UserForm';

export const PostItemCreate = ({ getAllPost }) => {
  const { stateUser } = useContext(AppContext);
  const [value, handleInputChange, reset] = useForm({ post: '' });
  const { action, loading, isFirtsRender } = useAddPost();

  //Use effect que se ejecuta acciones
  useEffect(() => {
    if (!isFirtsRender && !loading) {
      reset();
      getAllPost();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    action({
      date: new Date(),
      desc: value.post,
      idAuthor: stateUser.id,
      nameAuthor: stateUser.userName,
    });
  };

  return (
    <>
      {stateUser[constantsApp.IS_LOGGED] ? (
        <form onSubmit={handleSubmit} className='post-form'>
          <textarea
            name='post'
            placeholder='Escribe aquí tu estado'
            autoComplete='off'
            className='post-text'
            value={value.post}
            onChange={handleInputChange}
          ></textarea>
          <ContentLoading isLoading={false}>
            <button type='submit' disabled={!value.post}>
              Publicar
            </button>
          </ContentLoading>
        </form>
      ) : (
        <UserForm />
      )}
    </>
  );
};
