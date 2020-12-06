import { useState, useEffect, useRef } from 'react';

export const useFetch = (url) => {
	console.log('useFetch::start');
	//Ref para evitar que se genere un error al desmontarse un componente antes que la peticion responda
	const isMounted = useRef(true);
	const [state, setState] = useState({
		data: null,
		loading: true,
		error: null,
	});

	/**
	 * Validacion que evita que se mute el estado en caso que el componente que llamo este hook sea desmontado
	 */
	useEffect(() => {
		return () => {
			isMounted.current = false;
		};
	}, []);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(url);
				const data = await response.json();
				if (isMounted.current) {
					setState({
						loading: false,
						error: null,
						data,
					});
				}
			} catch (error) {
				setState({
					data: null,
					loading: false,
					error: 'No se pudo cargar la info',
				});
			}
		}
		fetchData();
	}, [url]);

	return state;
};
