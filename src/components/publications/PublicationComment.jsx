import React from 'react';
import userICon from '../../images/userIcon.png';

export const PublicationComment = ({ nameAuthor, desc, date }) => {
  const dateFormat = new Date(date?.toDate()).toLocaleDateString();
  return (
    <div className='comment'>
      <div className='item-profile'>
        <img className='profile-img' src={userICon} alt={nameAuthor}></img>
      </div>
      <div className='comment-section'>
        <p className='title-name'>{nameAuthor}</p>
        <p>
          {desc}
        </p>
        <p className='text-time w-100'>{dateFormat}</p>
      </div>
    </div>
  );
};
