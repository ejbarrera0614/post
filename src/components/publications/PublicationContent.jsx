import React, { useState } from 'react';
//components
import { PublicationComment } from './PublicationComment';
import { PublicationAddComment } from './PublicationAddComment';
import { ButtonsReaction } from './ButtonsReaction';
//resources
import userICon from '../../images/userIcon.png';
import { useGetComments } from '../../firebase/commentsFirebase';
import { constantsApp } from '../../config/constant';

/**
 * Componente que contiene la estructura de la publciacion y un map de comentarios y el componente de agregar comentario
 */
export const PublicationContent = ({ id, desc, nameAuthor, date }) => {
  const [reactionsState, setReactionsState] = useState({
    [constantsApp.REACTION_AMAZING]: 0,
    [constantsApp.REACTION_DISLIKE]: 0,
    [constantsApp.REACTION_LIKE]: 0,
  });
  const { action: actionGet, data } = useGetComments(id);

  const dateFormat = new Date(date?.toDate()).toLocaleDateString();

  return (
    <>
      <div className={`publication-item my-2 `}>
        <div className='publication-item-content'>
          <div className='item-profile'>
            <img className='profile-img' src={userICon} alt={nameAuthor}></img>
          </div>
          <div className='publication-item-desc'>
            <div className='publication-desc-group-name'>
              <p className='publication-item-name title-name'>{nameAuthor}</p>
              <p className='publication-item-time text-time'>{dateFormat}</p>
            </div>
            <p>{desc}</p>

            <ButtonsReaction
              idPublication={id}
              setReactionsState={setReactionsState}
            />
          </div>
        </div>

        <div className='publication-item-reaction'>
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
                  <PublicationComment {...item} index={index} />
                </div>
              );
            })}
          </div>
        )}

        <PublicationAddComment actionGet={actionGet} idPublication={id} />
      </div>
    </>
  );
};
