import React from 'react';
//components
import { ContentLoading } from '../commons/ContentLoading';
import { ContentTitle } from '../commons/ContentTitle';
//hooks
import {
  useGetSingleProduct,
  useGetComments,
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
    data,
    loading: loadingComments,
    error: errorComments,
  } = useGetComments(productId);

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
          <hr />
          {!loadingComments ? (
            <section className='comments'>
              {data.map(({ author, comment, rate }) => {
                return (
                  <div className='comment my-2'>
                    <div className="profile">
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
