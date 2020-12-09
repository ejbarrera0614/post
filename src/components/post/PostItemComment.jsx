import React from 'react';
import userICon from '../../images/userIcon.png';

export const PostItemComment = ({ nameAuthor, desc, date }) => {
  const dateFormat = new Date(date?.toDate()).toLocaleDateString();
  return (
    <div className='comment'>
      <div className='item-profile'>
        <img className='profile-img' src={userICon} alt={nameAuthor}></img>
      </div>
      <div className='comment-section'>
        <h4>{nameAuthor}</h4>
        <p>{desc}</p>
        <p className="w-100">{dateFormat}</p>
      </div>
    </div>
  );
};
