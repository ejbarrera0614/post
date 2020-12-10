import { useState, useEffect, useRef, useContext } from 'react';
import { constantsApp } from '../config/constant';

import AppContext from '../context/AppContext';
import db from './config';
const collection = db.collection(constantsApp.COLLECTION_POST);

export const useGetReactions = (id) => {
  const action = () => {
    try {
      const comments = [];
      async function getproducts() {
        const querySnapshot = await collection
          .doc(id)
          .collection(constantsApp.COLLECTION_REACTIONS)
          .get();
        querySnapshot.forEach((snap) => {
          comments.push(snap.data());
        });
        if (isMounted.current) {
          setState({
            ...state,
            data: comments,
            loading: false,
            error: null,
          });
        }
      }
      getproducts();
    } catch (error) {
      setState({
        ...state,
        data: null,
        loading: false,
        error: error,
      });
    }
  };
  const [state, setState] = useState({
    action: action,
    data: [],
    loading: true,
    error: null,
  });
  const isMounted = useRef(true);

  /**
   * Validacion que evita que se mute el estado en caso que el componente que llamo este hook sea desmontado
   */
  useEffect(() => {
    isMounted.current = true;
    action();
    return () => {
      isMounted.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
};
export const useAddReaction = () => {
  const action = (idPost, payload) => {
    setState({
      ...state,
      loading: true,
    });
    collection
      .doc(idPost)
      .collection(constantsApp.COLLECTION_REACTIONS)
      .doc(payload.idAuthor)
      .set(payload)
      .then(() => {
        setState({
          ...state,
          loading: false,
          error: null,
          isFirtsRender: false,
        });
      })
      .catch((error) => {
        console.log(error);
        setState({
          ...state,
          loading: false,
          error: 'Ocurrio un error',
          isFirtsRender: false,
        });
        setStateModal({
          isShow: true,
          title: 'Ocurrió un error.',
          desc:
            'No fue posible reaccionar a la publicación, intenta más tarde.',
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
