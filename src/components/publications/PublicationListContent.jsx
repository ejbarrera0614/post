import React from 'react';

//Components
import { ContentLoading } from '../commons/ContentLoading';

//config

//hooks
import { useGetAllPublication } from '../../firebase/publicationFirebase';
import { PublicationContent } from './PublicationContent';
import { PublicationCreate } from './PublicationCreate';

export const PublicationListContent = () => {
  const { action, data, loading } = useGetAllPublication();

  return (
    <>
      <PublicationCreate getAllPublication={action} />
      <div className='content-list'>
        <ContentLoading isLoading={loading}>
          {data?.length ? (
            data.map((item, index) => {
              return <PublicationContent key={item.id} {...item} index={index}/>;
            })
          ) : (
            <p>No hay publicaciones</p>
          )}
        </ContentLoading>
      </div>
    </>
  );
};
