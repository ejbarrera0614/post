import { useState, useEffect, useRef, useContext } from 'react';
import { constantsApp } from '../config/constant';

import AppContext from '../context/AppContext';
import db from './config';
const collection = db.collection(constantsApp.COLLECTION_USERS);

export const useLogin = () => {
  const actionGet = async ({ userName, password }) => {
    try {
      const querySnapshot = await collection
        .where('userName', '==', userName)
        .where('password', '==', password)
        .limit(1)
        .get();
      let user = {};
      querySnapshot.forEach((userSnap) => {
        const data = userSnap.data();
        console.log(data);
        if (data) {
          user = {
            id: data.id,
            userName: data.userName,
            isAdmin: data.isAdmin,
          };
        }
      });
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
    loading: true,
    error: null,
  });
  const { setStateUser } = useContext(AppContext);
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
};

export const useRegister = () => {
  const action = async (payload) => {
    setState({
      ...state,
      loading: true,
    });
    collection
      .add(payload)
      .then((ref) => {
        ref.set({ id: ref.id }, { merge: true }).then(() => {
          setState({
            ...state,
            loading: false,
            error: null,
            isFirtsRender: false,
          });
          setStateModal({
            title: 'Estado creado',
            desc: 'Se ha creado la publicación',
            isShow: true,
          });
        });
      })
      .catch(() => {
        setState({
          ...state,
          loading: false,
          error: 'Ocurrio un error',
          isFirtsRender: false,
        });
        setStateModal({
          isShow: true,
          title: 'Ocurrió un error.',
          desc: 'No se pudo crear la publicación, intenta más tarde.',
          icon: 'error',
        });
      });
  };

  const { setStateModal } = useContext(AppContext);
  const [state, setState] = useState({
    action,
    loading: false,
    error: null,
    isFirtsRender: true,
  });

  return state;
};
