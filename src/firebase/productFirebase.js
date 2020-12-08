import { useState, useEffect, useRef, useContext } from 'react';
import { useHistory } from 'react-router';

import { constantsApp } from '../config/constant';
import AppContext from '../context/AppContext';
import db from './config';
const collection = db.collection('products');
const collectionComments = db.collection('comments');

const productInterface = {
  id: null,
  name: '',
  description: '',
  price: null,
};
export const useGetAllProducts = () => {
  //Ref para evitar que se genere un error al desmontarse un componente antes que la peticion responda
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: null,
  });
  const isMounted = useRef(true);

  useEffect(() => {
    try {
      async function getproducts() {
        const querySnapshot = await collection.get();
        const products = [];
        querySnapshot.forEach((product) => {
          products.push({
            id: product.id,
            ...product.data(),
          });
        });
        /**
         * Validacion que evita que se mute el estado en caso que el componente que llamo este hook sea desmontado
         */
        if (isMounted.current) {
          setState({
            data: products,
            loading: false,
            error: null,
          });
        }
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
          .where('productId', '==', id)
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
    collectionComments
      .add(payload)
      .then((ref) => {
        ref.set({ id: ref.id }, { merge: true }).then(() => {
          setState({
            ...state,
            loading: false,
            error: null,
          });
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

export const useAddProduct = () => {
  const action = (payload) => {
    collection
      .add(payload)
      .then((ref) => {
        ref.set({ id: ref.id }, { merge: true }).then(() => {
          setState({
            ...state,
            loading: false,
            error: null,
          });
          setStateModal({
            title: 'Producto creado',
            desc: 'Se ha creado el proucto',
            isShow: true,
          });
          history.push(constantsApp.ROUTE_PRODUCTS);
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

  const { setStateModal } = useContext(AppContext);
  const history = useHistory();
  const [state, setState] = useState({
    action,
    loading: false,
    error: null,
  });

  return state;
};
