import React, { useEffect } from 'react';
import { useAddPost } from '../../firebase/postFirebase';
import { useForm } from '../../hooks/useForm';
import { ContentLoading } from '../commons/ContentLoading';

export const PostItemCreate = ({ getAllPost }) => {
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
      idAuthor: 'e3Op7jLzPe3gJIdbmmzH',
      nameAuthor: 'Juan 2',
    });
  };

  return (
    <>
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
    </>
  );
};
