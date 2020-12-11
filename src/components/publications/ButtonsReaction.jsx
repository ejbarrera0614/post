import React, { useContext, useEffect } from 'react';

import likeIcon from '../../images/like.svg';
import dislikeIcon from '../../images/dislike.svg';
import amazingIcon from '../../images/amazing.svg';
import { useAddReaction, useGetReactions } from '../../firebase/reactionsFirebase';
import { constantsApp } from '../../config/constant';
import AppContext from '../../context/AppContext';
export const ButtonsReaction = ({ idPublication, isMobileID, myReaction, setReactionsState, textAreaCommentRef }) => {
  const { stateUser } = useContext(AppContext);

  const { action: actionGet, data } = useGetReactions(idPublication);
  const { action: actionAdd, loading: loadingAdd, isFirtsRender } = useAddReaction();
  let isHover = false;
  const idPopover = `popover-${idPublication}-${isMobileID ? 'mob' : 'desk'}`;
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
        if (idAuthor === stateUser.id) accum.myReaction = type;
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

  //Filtra la reacción del usuario de la publicaciójn
  useEffect(() => {
    let BreakException = {};
    try {
      data.forEach(({ type, idAuthor }) => {
        if (idAuthor === stateUser.id) {
          //myReaction
          setReactionsState(values=>({...values, myReaction:type}));
          throw BreakException; //Para el ciclo de iteración del forEach
        }
      });
    } catch (e) {
      if (e !== BreakException) throw e;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateUser, data]);

  //Para mantener o quitar en determinado tiempo el popover de reacciones
  const handleMouseEnterOrLeave = (isEnter) => {
    if (isEnter) {
      isHover = true;
      document.querySelector(`#${idPopover}`).classList.add('active-hover');
    } else {
      isHover &&
        setTimeout(() => {
          isHover = false;
          document.querySelector(`#${idPopover}`).classList.remove('active-hover');
        }, 1000);
    }
  };

  //Da click en alguna de las reacciones en el popover
  const handleClick = (reaction) => {
    actionAdd(idPublication, {
      type: reaction,
      idAuthor: stateUser.id,
    });
    !isHover &&
      setTimeout(() => {
        isHover = false;
        document.querySelector(`#popover-${idPublication}`).classList.remove('active-hover');
      }, 1000);
  };

  const focustextArea = (e) => {
    e.preventDefault();
    if (stateUser[constantsApp.IS_LOGGED]) {
      textAreaCommentRef.current.focus();
    }
  };

  return (
    <div className='publication-item-buttons popover'>
      <p
        className='trigger-popover'
        onMouseEnter={() => {
          handleMouseEnterOrLeave(true);
        }}
        onMouseLeave={() => {
          handleMouseEnterOrLeave(false);
        }}
      >
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
      <p onClick={focustextArea} className={!stateUser[constantsApp.IS_LOGGED] && 'focusToTextActive'} >Comentar</p>
      <div id={idPopover} className='popover-content'>
        <div className='arrow'></div>

        <img src={likeIcon} alt='like' className='ml-10' onClick={() => handleClick(constantsApp.REACTION_LIKE)} />

        <img src={dislikeIcon} alt='dislike' onClick={() => handleClick(constantsApp.REACTION_DISLIKE)} />

        <img src={amazingIcon} alt='amazing' onClick={() => handleClick(constantsApp.REACTION_AMAZING)} />
      </div>
    </div>
  );
};
