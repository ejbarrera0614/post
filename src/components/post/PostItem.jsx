import React, { useContext, useEffect, useState } from 'react';
//hooks
import { useForm } from '../../hooks/useForm';
//components
import { ContentLoading } from '../commons/ContentLoading';
import { PostItemComment } from './PostItemComment';
//resources
import userICon from '../../images/userIcon.png';
import { useAddComment, useGetComments } from '../../firebase/commentsFirebase';
import { ButtonsReaction } from './ButtonsReaction';
import { constantsApp } from '../../config/constant';
import AppContext from '../../context/AppContext';

export const PostItem = ({ id, desc, nameAuthor, date }) => {
  const [reactionsState, setReactionsState] = useState({
    [constantsApp.REACTION_AMAZING]: 0,
    [constantsApp.REACTION_DISLIKE]: 0,
    [constantsApp.REACTION_LIKE]: 0,
  });
  const { stateUser } = useContext(AppContext);

  //hook para el formulario de agrgar comentario
  const [value, handleInputChange, reset] = useForm({ comment: '' });
  const { action: actionGet, data } = useGetComments(id);
  const {
    action: actionAdd,
    loading: loadingAdd,
    isFirtsRender,
  } = useAddComment();
  const dateFormat = new Date(date?.toDate()).toLocaleDateString();
  //Use effect que se ejecuta acciones
  useEffect(() => {
    //Se valida con isFirtsRender de que no se ejecute la 1ra vez, solo en mutaciones del estado loadingAdd posteriores a este
    if (!isFirtsRender && !loadingAdd) {
      reset();
      actionGet();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingAdd]);

  const handleSubmit = (e) => {
    e.preventDefault();
    actionAdd(id, {
      date: new Date(),
      desc: value.comment,
      idAuthor: stateUser.id,
      nameAuthor: stateUser.userName,
    });
    reset();
  };

  return (
    <>
      <div className={`post-item my-2 `}>
        <div className='post-item-content'>
          <div className='item-profile'>
            <img className='profile-img' src={userICon} alt={nameAuthor}></img>
          </div>
          <div className='post-item-desc'>
            <div className='post-desc-group-name'>
              <p className='post-item-name title-name'>{nameAuthor}</p>
              <p className='post-item-time text-time'>{dateFormat}</p>
            </div>
            <p>{desc}</p>

            <ButtonsReaction
              idPost={id}
              setReactionsState={setReactionsState}
            />
          </div>
        </div>

        <div className='post-item-reaction'>
          <div className='reactions-group-circles'>
            {reactionsState?.like > 0 && <div className='circle-likes'></div>}
            {reactionsState?.dislike > 0 && (
              <div className='circle-dislike'></div>
            )}
            {reactionsState?.amazing > 0 && (
              <div className='circle-amazing'></div>
            )}
            <p>
              {reactionsState?.amazing +
                reactionsState?.like +
                reactionsState?.dislike}
            </p>
          </div>
          <p>
            {data.length > 0 && (
              <>
                {data.length} comentario{data.length > 1 && 's'}
              </>
            )}
          </p>
        </div>

        {Object.keys(data).length > 0 && (
          <div className='comments-list'>
            {data.map((item, index) => {
              return (
                <div key={item.id}>
                  <PostItemComment {...item} index={index} />
                </div>
              );
            })}
          </div>
        )}

        {stateUser.isLoggedIn ? (
          <form onSubmit={handleSubmit} className={`comment-form `}>
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
        ): <p className="msgInfoAddComment">Inicia sesión para poder comentar</p> }
      </div>
    </>
  );
};
