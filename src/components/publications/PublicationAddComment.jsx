import React, { useContext, useEffect } from 'react';
import AppContext from '../../context/AppContext';
import { useAddComment } from '../../firebase/commentsFirebase';
//hooks
import { useForm } from '../../hooks/useForm';
//components
import { ContentLoading } from '../commons/ContentLoading';
export const PublicationAddComment = ({ actionGet, idPublication, textAreaCommentRef }) => {
  const { stateUser } = useContext(AppContext);

  //hook para el formulario de agrgar comentario
  const [value, handleInputChange, reset] = useForm({ comment: '' });
  const {
    action: actionAdd,
    loading: loadingAdd,
    isFirtsRender,
  } = useAddComment();

  //Use effect que se ejecuta con el action de añadir comentario
  useEffect(() => {
    //Se valida con isFirtsRender de que no se ejecute la 1ra vez, solo en mutaciones del estado loadingAdd publicationeriores a este
    if (!isFirtsRender && !loadingAdd) {
      reset();
      actionGet();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingAdd]);

  const handleSubmit = (e) => {
    e.preventDefault();
    actionAdd(idPublication, {
      date: new Date(),
      desc: value.comment.trimStart().trimEnd(),
      idAuthor: stateUser.id,
      nameAuthor: stateUser.userName,
    });
    reset();
  };
  const handleKeyPress = (event) => {
    if (event.which === 13 && !event.shiftKey && value.comment.trim()) {
      handleSubmit(event);
    }
  };

  return (
    <>
      {stateUser.isLoggedIn ? (
        <form onSubmit={handleSubmit} className={`comment-form `}>
          <textarea
          ref={textAreaCommentRef}
            name='comment'
            placeholder='Escribe un comentario'
            autoComplete='off'
            rows='1'
            className='comment'
            value={value.comment}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          ></textarea>
          <ContentLoading isLoading={false}>
            <button type='submit' disabled={!value.comment.trim()}>
              <span>Publicar</span>
            </button>
          </ContentLoading>
        </form>
      ) : (
        <p className='msgInfoAddComment'>Inicia sesión para poder comentar</p>
      )}
    </>
  );
};
