import React from 'react';

//Components
import { ContentTitle } from '../commons/ContentTitle';
import { ProductCard } from './ProductCard';
import { ContentLoading } from '../commons/ContentLoading';

//config
import { constantsApp } from '../../config/constant';

//hooks
import { useGetAllProducts } from '../../firebase/productFirebase';

export const ProductsList = ({ history }) => {
  console.log('render Products List');

  const { data, loading, error } = useGetAllProducts(); //useFetch(constantsApp.ENDPOINT_PRODUCT_LIST);
  if (error) history.push(constantsApp.ROUTE_ERROR);

  return (
    <>
      <ContentTitle />
      <div className='content'>
        {!loading ? (
          <>
            {data.map((item) => {
              return <ProductCard key={item.id} {...item} />;
            })}
            <div className="product-article" style={{height:'0px'}}></div>
          </>
        ) : (
          <>
            <ContentLoading />
          </>
        )}
      </div>
    </>
  );
};
