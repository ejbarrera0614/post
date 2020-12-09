import React, { useEffect, useState } from 'react';
import { AppRouter } from './routers/AppRouter';
import { AppContextProvider } from './context/AppContext';
import Swal from 'sweetalert2';

import { useFetch } from './hooks/useFetch';
import { constantsApp } from './config/constant';
import { ContentLoading } from './components/commons/ContentLoading';

import './styles/styles.scss';

export const FoodApp = () => {
  const [stateModal, setStateModal] = useState({
    isShow: false,
    title: '',
    desc: '',
    icon: '',
  });
  const { isShow, title, desc, icon } = stateModal;
  useEffect(() => {
    isShow &&
      Swal.fire({
        title: title,
        text: desc,
        icon: icon ? icon : 'success',
        confirmButtonText: 'Aceptar',
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateModal]);
  const { data: lang, loading } = useFetch(constantsApp.ENDPOINT_LANG_ES);

  return (
    <>
      <ContentLoading isLoading={loading}>
        <AppContextProvider value={{ stateModal, setStateModal, lang }}>
          <AppRouter />
        </AppContextProvider>
      </ContentLoading>
    </>
  );
};
