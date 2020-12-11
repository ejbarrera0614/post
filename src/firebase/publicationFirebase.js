import { useState, useEffect, useRef, useContext } from 'react';
import { constantsApp } from '../config/constant';

import AppContext from '../context/AppContext';
import db from './config';
const collection = db.collection(constantsApp.COLLECTION_POST);

export const useGetAllPublication = () => {
  const actionGet = async () => {
    try {
      const querySnapshot = await collection.orderBy('date', 'desc').get();
      const publication = [];
      querySnapshot.forEach((publicationSnap) => {
        publication.push({
          id: publicationSnap.id,
          ...publicationSnap.data(),
        });
      });
      /**
       * Validacion que evita que se mute el estado en caso que el componente que llamo este hook sea desmontado
       */
      if (isMounted.current) {
        setState({
          ...state,
          data: publication,
          loading: false,
          error: null,
        });
      }
    } catch (error) {
      if (isMounted.current) {
        setState({
          ...state,
          data: null,
          loading: false,
          error: error,
        });
      }
    }
  };
  //Ref para evitar que se genere un error al desmontarse un componente antes que la peticion responda
  const [state, setState] = useState({
    action: actionGet,
    data: [],
    loading: true,
    error: null,
  });
  const isMounted = useRef(true);

  useEffect(() => {
    actionGet();
    return () => {
      isMounted.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
};

export const useAddPublication = () => {
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
