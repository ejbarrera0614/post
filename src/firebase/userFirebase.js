import { useState, useEffect, useRef, useContext } from 'react';
import { constantsApp } from '../config/constant';

import AppContext from '../context/AppContext';
import db from './config';
const collection = db.collection(constantsApp.COLLECTION_USERS);

export const useLogin = () => {
  const actionGet = async ({ userName, password }) => {
    try {
      setState({ ...state, loading: true });
      const querySnapshot = await collection
        .where('userName', '==', userName)
        .where('password', '==', password)
        .limit(1)
        .get();
      let user = {};
      if (querySnapshot.size) {
        querySnapshot.forEach((userSnap) => {
          const data = userSnap.data();
          console.log(data);
          if (data) {
            user = {
              id: data.id,
              userName: data.userName,
              isAdmin: data.isAdmin,
              isLoggedIn: true,
            };
          }
        });
      } else {
        triggerModal(
          'Confirmación',
          'El usuario y/o la contraseña no son correctos',
          'info'
        );
        setState({
          ...state,
          loading: false,
        });
      }
      /**
       * Validacion que evita que se mute el estado en caso que el componente que llamo este hook sea desmontado
       */
      if (isMounted.current) {
        setStateUser(user);
        setState({
          ...state,
          loading: false,
          error: null,
        });
      }
    } catch (error) {
      if (isMounted.current) {
        triggerModal(
          'Avisó',
          'No se ha podido iniciar sesión, intente de nuevo',
          'info'
        );
        setState({
          ...state,
          loading: false,
          error: error,
        });
      }
    }
  };

  //Ref para evitar que se genere un error al desmontarse un componente antes que la peticion responda
  const [state, setState] = useState({
    action: actionGet,
    loading: false,
    error: null,
  });
  const { setStateModal, setStateUser } = useContext(AppContext);
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const triggerModal = (title, desc, icon) => {
    setStateModal({
      isShow: true,
      title,
      desc,
      icon,
    });
  };

  return state;
};

export const useRegister = () => {
  const action = async (payload) => {
    setState({
      ...state,
      loading: true,
    });
    const existUser = await collection
      .where('userName', '==', payload.userName)
      .limit(1)
      .get();
    if (existUser.size) {
      setState({...state, loading: false})
      triggerModal('Aviso', 'El usuario ya existe', 'info');
      return;
    }
    collection
      .add(payload)
      .then((ref) => {
        ref
          .set({ id: ref.id }, { merge: true })
          .then(() => {
            setState({
              ...state,
              loading: false,
              error: null,
              isFirtsRender: false,
            });
            triggerModal(
              'Confirmación',
              'Se ha registrado exitosamente.',
              'info'
            );
            setStateUser({
              id: ref.id,
              userName: payload.userName,
              isAdmin: false,
              isLoggedIn: true,
            });
          })
          .catch((error) => {
            triggerModal(
              'Ocurrió un error.',
              'No se pudo crear el usuario, intenta más tarde.',
              'error'
            );
          });
      })
      .catch(() => {
        setState({
          ...state,
          loading: false,
          error: 'Ocurrio un error',
          isFirtsRender: false,
        });
        triggerModal(
          'Ocurrió un error.',
          'No se pudo crear el usuario, intenta más tarde.',
          'error'
        );
      });
  };

  const { setStateModal, setStateUser } = useContext(AppContext);
  const [state, setState] = useState({
    action,
    loading: false,
    error: null,
    isFirtsRender: true,
  });

  const triggerModal = (title, desc, icon) => {
    setStateModal({
      isShow: true,
      title,
      desc,
      icon,
    });
  };

  return state;
};
