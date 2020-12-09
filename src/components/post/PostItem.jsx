import React, { useEffect } from 'react';
//hooks
import { useForm } from '../../hooks/useForm';
//components
import { ContentLoading } from '../commons/ContentLoading';
import { PostItemComment } from './PostItemComment';
//resources
import userICon from '../../images/userIcon.png';
import { useAddComment, useGetComments } from '../../firebase/postFirebase';

export const PostItem = ({ id, desc, nameAuthor, date, index }) => {
  const dateFormat = new Date(date?.toDate()).toLocaleDateString();

  //hook para el formulario de agrgar comentario
  const [value, handleInputChange, reset] = useForm({ comment: '' });
  const { action, data, loading } = useGetComments(id);
  const {
    action: actionAdd,
    loading: loadingAdd,
    isFirtsRender,
  } = useAddComment();

  //Use effect que se ejecuta acciones
  useEffect(() => {
    if (!isFirtsRender && !loadingAdd) {
      reset();
      action();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingAdd]);

  const handleSubmit = (e) => {
    e.preventDefault();
    actionAdd({
      date: new Date(),
      desc: value.comment,
      idAuthor: 'KWfShEgVFQoLdDoULkw8',
      idPost: id,
      nameAuthor: 'Admin',
    });
    reset();
  };

  return (
    <>
      <div className={`post-item my-2 ${index === 0 && 'animate__fadeInDown'}`}>
        <div className='post-item-content'>
          <div className='item-profile'>
            <img className='profile-img' src={userICon} alt={nameAuthor}></img>
          </div>
          <div className='post-item-desc'>
            <div className='post-desc-group-name'>
              <p className='post-item-name'>{nameAuthor}</p>
              <p className='post-item-time'>{dateFormat}</p>
            </div>
            <p className='post-item-desc'>{desc}</p>
            <div className='post-item-buttons'>
              <button>Reaccionar</button>
              <button>Comentar</button>
            </div>
          </div>
        </div>
        <div className='post-item-reaction'>
          <p>Reacciones</p>
          <p>{data.length} comentario{data.length > 1 && 's'}</p>
        </div>

        <div className='comments-list'>
          <ContentLoading isLoading={loading}>
            {data?.length ? (
              data.map((item, index) => {
                return (
                  <PostItemComment key={item.id} {...item} index={index} />
                );
              })
            ) : (
              <p>No hay comentarios</p>
            )}
          </ContentLoading>
        </div>

        <form onSubmit={handleSubmit} className='comment-form'>
          <textarea
            name='comment'
            placeholder='Escribe un comentario'
            autoComplete='off'
            rows='1'
            className='comment'
            value={value.comment}
            onChange={handleInputChange}
          ></textarea>
          <ContentLoading isLoading={false}>
            <button type='submit' disabled={!value.comment}>
              <span>Publicar</span>
            </button>
          </ContentLoading>
        </form>
      </div>
    </>
  );
};
