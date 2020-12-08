import React, { useContext } from 'react';
import appContext from '../../context/AppContext';
import { ContentTitle } from './ContentTitle';

export const Modal = () => {
  const {
    stateModal: { title, desc, isShow },
    setStateModal,
  } = useContext(appContext);
  return (
    <>
      {isShow && (
        <div id='generalModal' className='modal'>
          <div className='modal-contenido'>
            <p
              onClick={() =>
                setStateModal({
                  isShow: false,
                  title: '',
                  desc: '',
                })
              }
            >
              X
            </p>
            <ContentTitle title={title} hideButtonCreate={true}/>
            <p>{desc}</p>
          </div>
        </div>
      )}
    </>
  );
};
