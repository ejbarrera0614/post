import React, { useState } from 'react';
import { AppRouter } from './routers/AppRouter';
import { AppContextProvider } from './context/AppContext';

import './styles/styles.scss';
import { Modal } from './components/commons/Modal';

export const FoodApp = () => {
  const [stateModal, setStateModal] = useState({
    isShow: false,
    title: '',
    desc: '',
  });
  return (
    <>
      <AppContextProvider value={{ stateModal, setStateModal }}>
        <AppRouter />
		<Modal/>
      </AppContextProvider>
    </>
  );
};
