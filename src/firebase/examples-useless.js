
/* export const useUpdateProduct = (payload) => {
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
 */
