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
import userICon from '../../images/userIcon.png';
import { useForm } from '../../hooks/useForm';

export const ProductView = ({
  match: {
    params: { productId },
  },
}) => {
  const {
    data: { id, name, description, price },
    loading,
  } = useGetSingleProduct(productId);

  const {
    action: actionGetComments,
    data,
    loading: loadingComments
  } = useGetComments(productId);

  const {
    action: actionAddComment,
    loading: loadingAddComment,
    error: errorAddComment,
  } = useAddComment();

  const [formValues, handleInputChange, reset] = useForm({
    comment: '',
  });

  const { comment } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    actionAddComment({
      author: 'Anónimo',
      comment: comment,
      productId: id,
      rate: 5,
    });
    if (!errorAddComment) {
      reset();
      actionGetComments();
    }
  };

  return (
    <>
      <ContentTitle title={name} />
      <section className='single-content'>
        <ContentLoading isLoading={loading}>
          <img src={imgDefault} alt={name} />
          <h4>${price}</h4>
          <p>{description}</p>
        </ContentLoading>
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
          value={comment}
          onChange={handleInputChange}
        ></textarea>

        <ContentLoading isLoading={loadingAddComment}>
          <button type='submit'>Comentar</button>
        </ContentLoading>
      </form>
      <section className='comments'>
        <ContentLoading isLoading={loadingComments}>
          {data &&
            data.map(({ author, comment, id }) => {
              return (
                <div className='comment my-2' key={id}>
                  <div className='profile text-center'>
                    <img
                      className='profile-img'
                      src={userICon}
                      alt={author}
                    ></img>
                    <h5>{author}</h5>
                  </div>
                  <p>{comment}</p>
                </div>
              );
            })}
        </ContentLoading>
      </section>
    </>
  );
};
