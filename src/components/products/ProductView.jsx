import React from 'react';
//components
import { ContentLoading } from '../commons/ContentLoading';
import { ContentTitle } from '../commons/ContentTitle';
//hooks
import { useGetSingleProduct } from '../../firebase/productFirebase';
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
  return (
    <>
      {!loading ? (
        <>
          <ContentTitle title={name} />
          <section>
            <img src={imgDefault} alt={name} />
			<p>{price}</p>
			<p>{description}</p>
          </section>
        </>
      ) : (
        <ContentLoading />
      )}
    </>
  );
};
