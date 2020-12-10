import React, { useEffect, useState } from 'react';

import likeIcon from '../../images/like.svg';
import dislikeIcon from '../../images/dislike.svg';
import amazingIcon from '../../images/amazing.svg';
import {
  useAddReaction,
  useGetReactions,
} from '../../firebase/reactionsFirebase';
import { constantsApp } from '../../config/constant';
export const ButtonsReaction = ({ idPost, setReactionsState }) => {
  const [myReaction, setMyReaction] = useState('');
  const { action: actionGet, data } = useGetReactions(idPost);
  const {
    action: actionAdd,
    loading: loadingAdd,
    isFirtsRender,
  } = useAddReaction();
  let isHover = false;

  useEffect(() => {
    if (!isFirtsRender && !loadingAdd) {
      actionGet();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingAdd]);

  //Renderiza los circulos de reaccciones en el componente padre
  useEffect(() => {
    const totalTypesReaction = data.reduce(
      (accum, { type, idAuthor }) => {
        if (!accum[type]) accum[type] = 0;
        accum[type] += 1;

        if (idAuthor === 'KWfShEgVFQoLdDoULkw9') setMyReaction(type);

        return accum;
      },
      {
        [constantsApp.REACTION_AMAZING]: 0,
        [constantsApp.REACTION_DISLIKE]: 0,
        [constantsApp.REACTION_LIKE]: 0,
      }
    );
    setReactionsState(totalTypesReaction);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  //Para mantener o quitar en determinado tiempo el popover de reacciones
  const handleMouseEnterOrLeave = (isEnter) => {
    if (isEnter) {
      isHover = true;
      document
        .querySelector(`#popover-${idPost}`)
        .classList.add('active-hover');
    } else {
      isHover &&
        setTimeout(() => {
          isHover = false;
          document
            .querySelector(`#popover-${idPost}`)
            .classList.remove('active-hover');
        }, 1000);
    }
  };

  const handleClick = (reaction) => {
    actionAdd(idPost, {
      type: reaction,
      idAuthor: 'KWfShEgVFQoLdDoULkw9',
    });
  };

  return (
    <div className='post-item-buttons popover'>
      <p
        className='trigger-popover'
        onMouseEnter={() => {
          handleMouseEnterOrLeave(true);
        }}
        onMouseLeave={() => {
          handleMouseEnterOrLeave(false);
        }}
      >
        {/* {data?.length > 0 ? data.filter((value) => {
          if (value?.idAuthor === 'KWfShEgVFQoLdDoULkw9') {
            if (value?.type === constantsApp.REACTION_LIKE)
              return (
                <>
                  <img src={likeIcon} alt='like' /> Me Gusta
                </>
              );
          } else if (value?.type === constantsApp.REACTION_DISLIKE) {
            return (
              <>
                <img src={dislikeIcon} alt='dislike' /> No me Gusta
              </>
            );
          } else if (value?.type === constantsApp.REACTION_AMAZING) {
            return (
              <>
                <img src={amazingIcon} alt='amazing' /> Asombroso
              </>
            );
          }
        }) : 'Reacccionar'} */}
        {myReaction === constantsApp.REACTION_LIKE && (
          <>
            <img src={likeIcon} alt='like' /> Me Gusta
          </>
        )}
        {myReaction === constantsApp.REACTION_DISLIKE && (
          <>
            <img src={dislikeIcon} alt='like' /> No me Gusta
          </>
        )}
        {myReaction === constantsApp.REACTION_AMAZING && (
          <>
            <img src={amazingIcon} alt='like' /> Asombroso
          </>
        )}
        {!myReaction && 'Reacccionar'}
      </p>
      <div id={`popover-${idPost}`} className='popover-content'>
        <div className='arrow'></div>

        <img
          src={likeIcon}
          alt='like'
          className='ml-10'
          onClick={() => handleClick(constantsApp.REACTION_LIKE)}
        />

        <img
          src={dislikeIcon}
          alt='dislike'
          onClick={() => handleClick(constantsApp.REACTION_DISLIKE)}
        />

        <img
          src={amazingIcon}
          alt='amazing'
          onClick={() => handleClick(constantsApp.REACTION_AMAZING)}
        />
      </div>
      <p>Comentar</p>
    </div>
  );
};
