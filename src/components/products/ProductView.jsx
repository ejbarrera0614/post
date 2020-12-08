import React from 'react';
//components
import { ContentLoading } from '../commons/ContentLoading';
import { ContentTitle } from '../commons/ContentTitle';
//hooks
import {
  useGetSingleProduct,
  useGetComments,
  useAddComment,
} from '../../firebase/productFirebase';
//resource
import imgDefault from '../../images/default2.png';

export const ProductView = ({
  match: {
    params: { productId },
  },
}) => {
  const {
    data: { id, name, description, price },
    loading,
    error,
  } = useGetSingleProduct(productId);

  const {
    action: actionGetComments,
    data,
    loading: loadingComments,
    error: errorComments,
  } = useGetComments(productId);

  const {
    action: actionAddComment,
    loading: loadingAddComment,
    error: errorAddComment,
  } = useAddComment();

  const handleSubmit = (e) => {
    e.preventDefault();
    actionAddComment({
      author: 'anonimo',
      comment: 'probando',
      productId: id,
      rate: 5,
    });
    if(!errorAddComment){
      console.log('asdasd');
      actionGetComments();
    }
  };

  return (
    <>
      {!loading ? (
        <>
          <ContentTitle title={name} />
          <section className='single-content'>
            <img src={imgDefault} alt={name} />
            <h4>${price}</h4>
            <p>{description}</p>
          </section>
          <hr className='my-2' />
          <h3 className='mb-1'>Escribe tu comentario</h3>
          <form onSubmit={handleSubmit} className='comment-form'>
            <textarea
              name='comment'
              placeholder='Escribe tu comentario...'
              autoComplete='off'
              rows='1'
              className='comment'
              maxLength='180'
            ></textarea>
            <button>Comentar</button>
          </form>
          {!loadingComments ? (
            <section className='comments'>
              {data.map(({ author, comment, id }) => {
                return (
                  <div className='comment my-2' key={id}>
                    <div className='profile'>
                      <div className='profile-img'></div>
                      <h5>{author}</h5>
                    </div>
                    <p>{comment}</p>
                  </div>
                );
              })}
            </section>
          ) : (
            <ContentLoading />
          )}
        </>
      ) : (
        <ContentLoading />
      )}
    </>
  );
};
