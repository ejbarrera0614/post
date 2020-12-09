import { useState, useEffect, useRef, useContext } from 'react';
import { useHistory } from 'react-router';

import { constantsApp } from '../config/constant';
import AppContext from '../context/AppContext';
import db from './config';
const collection = db.collection('post-test');
const collectionComments = db.collection('comments');

const productInterface = {
  id: null,
  name: '',
  description: '',
  price: null,
};
export const useGetAllPost = () => {
  const actionGet = async () => {
    try {
      const querySnapshot = await collection.orderBy('date', 'desc').get();
      const post = [];
      querySnapshot.forEach((product) => {
        post.push({
          id: product.id,
          ...product.data(),
        });
      });
      /**
       * Validacion que evita que se mute el estado en caso que el componente que llamo este hook sea desmontado
       */
      if (isMounted.current) {
        setState({
          ...state,
          data: post,
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

export const useGetSingleProduct = (id) => {
  //Ref para evitar que se genere un error al desmontarse un componente antes que la peticion responda
  const [state, setState] = useState({
    data: productInterface,
    loading: true,
    error: null,
  });
  const isMounted = useRef(true);

  /**
   * Validacion que evita que se mute el estado en caso que el componente que llamo este hook sea desmontado
   */
  useEffect(() => {
    try {
      async function getproducts() {
        const querySnapshot = await collection.where('id', '==', id).get();
        querySnapshot.forEach((snap) => {
          if (isMounted.current) {
            setState({
              data: snap.data(),
              loading: false,
              error: null,
            });
          }
        });
      }
      getproducts();
    } catch (error) {
      setState({
        data: null,
        loading: false,
        error: error,
      });
    }
    return () => {
      isMounted.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
};

export const useGetComments = (id) => {
  const action = () => {
    try {
      const comments = [];
      async function getproducts() {
        const querySnapshot = await collectionComments
          .where('idPost', '==', id)
          .orderBy('date', 'desc')
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

export const useUpdateProduct = (payload) => {
  //ASe declara antes del state por un error
  const action = () => {
    setState({
      ...state,
      loading: true,
      error: null,
    });
    collection
      .doc('CXQKHmGRIKbS6gKR94Fv')
      .update(payload)
      .then(() => {
        setState({
          ...state,
          loading: false,
          error: null,
        });
      })
      .catch(() => {
        setState({
          ...state,
          loading: false,
          error: 'Ocurrio un error',
        });
      });
  };
  const [state, setState] = useState({
    action,
    loading: false,
    error: null,
  });

  return state;
};

export const useAddComment = () => {
  const action = (payload) => {
    setState({
      ...state,
      loading: true,
    });
    collectionComments
      .add(payload)
      .then((ref) => {
        ref.set({ id: ref.id }, { merge: true }).then(() => {
          setState({
            ...state,
            loading: false,
            error: null,
            isFirtsRender: false,
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
          desc: 'No se pudo agregar el comentaro, intenta más tarde.',
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

export const useAddPost = () => {
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
